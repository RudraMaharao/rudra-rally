"""Package dist/ and deploy it to the existing AWS Amplify app using your AWS CLI profile."""
from pathlib import Path
import json, subprocess, urllib.request, zipfile, time
ROOT=Path(__file__).resolve().parent
APP_ID='d315hq6yqhwgli'
REGION='ap-south-1'
BRANCH='main'
def aws(*args):
 result=subprocess.run(['aws','amplify',*args,'--region',REGION,'--output','json','--no-cli-pager'],capture_output=True,text=True)
 if result.returncode: raise RuntimeError(result.stderr)
 return json.loads(result.stdout)
# Permit this app's API while retaining the existing restrictive site headers.
app=aws('get-app','--app-id',APP_ID)['app']
spec=json.loads(app.get('customHeaders') or '[]')
headers=spec.get('customHeaders',[]) if isinstance(spec,dict) else spec
api=json.loads((ROOT/'infrastructure.json').read_text())['apiUrl']
for group in headers:
 for header in group.get('headers',[]):
  if header['key'].lower()=='content-security-policy':
   directives=[part.strip() for part in header['value'].split(';') if part.strip()]
   header['value']='; '.join("connect-src 'self' "+api if part.startswith('connect-src ') else part for part in directives)
aws('update-app','--app-id',APP_ID,'--custom-headers',json.dumps({'customHeaders':headers}))
archive=ROOT/'portfolio-deploy.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
 for path in sorted((ROOT/'dist').rglob('*')):
  if path.is_file(): z.write(path,path.relative_to(ROOT/'dist'))
deployment=aws('create-deployment','--app-id',APP_ID,'--branch-name',BRANCH)
# The signed upload URL is used only in memory and never written or printed.
request=urllib.request.Request(deployment['zipUploadUrl'],data=archive.read_bytes(),method='PUT',headers={'Content-Type':'application/zip'})
with urllib.request.urlopen(request,timeout=90) as response:
 assert response.status in (200,201)
job=aws('start-deployment','--app-id',APP_ID,'--branch-name',BRANCH,'--job-id',deployment['jobId'])
metadata={'appId':APP_ID,'region':REGION,'branch':BRANCH,'jobId':deployment['jobId'],'url':f'https://{BRANCH}.{APP_ID}.amplifyapp.com','status':job['jobSummary']['status']}
(ROOT/'deployment.json').write_text(json.dumps(metadata,indent=2)+'\n')
print(json.dumps(metadata),flush=True)
for attempt in range(40):
 result=aws('get-job','--app-id',APP_ID,'--branch-name',BRANCH,'--job-id',deployment['jobId'])
 state=result['job']['summary']['status']
 if state!=metadata['status']:
  metadata['status']=state;print('Deployment:',state,flush=True)
  (ROOT/'deployment.json').write_text(json.dumps(metadata,indent=2)+'\n')
 if state=='SUCCEED': break
 if state in ['FAILED','CANCELLED']: raise SystemExit('Deployment ended: '+state)
 time.sleep(5)
else: raise SystemExit('Deployment still running; use get-job with the recorded job ID.')
print('Live: '+metadata['url'],flush=True)
