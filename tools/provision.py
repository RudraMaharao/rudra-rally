"""Create only the independent Rudra Rally leaderboard resources. Preserves all existing game hosting."""
from pathlib import Path
import json,subprocess,secrets,time,zipfile,io,tempfile,os
ROOT=Path(__file__).resolve().parents[1]
STATE=ROOT/'infrastructure.json'
REGION='ap-south-1'
s=json.loads(STATE.read_text()) if STATE.exists() else {'region':REGION}
def save(): STATE.write_text(json.dumps(s,indent=2)+'\n')
def aws(service,op,**kw):
 with tempfile.NamedTemporaryFile(mode='w+',suffix='.json') as args:
  json.dump(kw,args);args.flush()
  p=subprocess.run(['aws',service,op,'--region',REGION,'--output','json','--cli-input-json','file://'+args.name],text=True,capture_output=True)
 if p.returncode: raise RuntimeError(p.stderr)
 return json.loads(p.stdout or '{}')
if 'appId' not in s:
 s['appId']='d315hq6yqhwgli';s['branch']='main';s['url']='https://main.d315hq6yqhwgli.amplifyapp.com';save()

if 'table' not in s:
 name='rudra-rally-scores-v1'
 aws('dynamodb','create-table',TableName=name,AttributeDefinitions=[{'AttributeName':'pk','AttributeType':'S'},{'AttributeName':'sk','AttributeType':'S'}],KeySchema=[{'AttributeName':'pk','KeyType':'HASH'},{'AttributeName':'sk','KeyType':'RANGE'}],BillingMode='PAY_PER_REQUEST')
 s['table']=name;save()
if 'role' not in s:
 role=aws('iam','create-role',RoleName='rudra-rally-leaderboard-v1',AssumeRolePolicyDocument=json.dumps({'Version':'2012-10-17','Statement':[{'Effect':'Allow','Principal':{'Service':'lambda.amazonaws.com'},'Action':'sts:AssumeRole'}]}))['Role'];s['role']=role['Arn'];save()
account=s['role'].split(':')[4]
policy={'Version':'2012-10-17','Statement':[{'Effect':'Allow','Action':['dynamodb:Query','dynamodb:PutItem','dynamodb:GetItem','dynamodb:UpdateItem'],'Resource':f'arn:aws:dynamodb:{REGION}:{account}:table/{s["table"]}'},{'Effect':'Allow','Action':['logs:CreateLogGroup','logs:CreateLogStream','logs:PutLogEvents'],'Resource':f'arn:aws:logs:{REGION}:{account}:log-group:/aws/lambda/rudra-rally-api-v1:*'}]}
aws('iam','put-role-policy',RoleName='rudra-rally-leaderboard-v1',PolicyName='scores-and-function-logs',PolicyDocument=json.dumps(policy))
archive=ROOT/'backend.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
 z.write(ROOT/'backend/index.mjs','index.mjs');z.write(ROOT/'src/race.js','race.js');z.write(ROOT/'src/track-data.js','track-data.js');z.write(ROOT/'src/world-data.js','world-data.js');z.write(ROOT/'src/collision.js','collision.js');z.writestr('package.json','{"type":"module"}')
# Secrets are supplied through a restricted temporary CLI input file, removed immediately after use.
if 'function' not in s:
 import base64
 for n in range(6):
  try:
   fn=aws('lambda','create-function',FunctionName='rudra-rally-api-v1',Runtime='nodejs22.x',Role=s['role'],Handler='index.handler',Code={'ZipFile':base64.b64encode(archive.read_bytes()).decode()},Timeout=15,MemorySize=256,Environment={'Variables':{'TABLE_NAME':s['table'],'SIGNING_SECRET':secrets.token_hex(32)}})
   s['function']=fn['FunctionArn'];save();break
  except RuntimeError as e:
   if 'cannot be assumed' not in str(e) or n==5: raise
   time.sleep(5)
else:
 subprocess.run(['aws','lambda','update-function-code','--function-name',s['function'],'--zip-file','fileb://'+str(archive),'--region',REGION,'--query','FunctionName','--output','text'],check=True)
if 'api' not in s:
 api=aws('apigatewayv2','create-api',Name='rudra-rally-leaderboard',ProtocolType='HTTP',CorsConfiguration={'AllowOrigins':[s['url'],'http://localhost:8768','http://127.0.0.1:8768'],'AllowMethods':['GET','POST','OPTIONS'],'AllowHeaders':['content-type'],'MaxAge':3600});s['api']=api['ApiId'];s['apiUrl']=api['ApiEndpoint'];save()
 integration=aws('apigatewayv2','create-integration',ApiId=s['api'],IntegrationType='AWS_PROXY',IntegrationUri=s['function'],PayloadFormatVersion='2.0',TimeoutInMillis=20000)
 for route in ['GET /scores','POST /scores','POST /runs/start','POST /runs/finish']:
  aws('apigatewayv2','create-route',ApiId=s['api'],RouteKey=route,Target='integrations/'+integration['IntegrationId'])
 aws('apigatewayv2','create-stage',ApiId=s['api'],StageName='$default',AutoDeploy=True,DefaultRouteSettings={'ThrottlingBurstLimit':10,'ThrottlingRateLimit':5})
 aws('lambda','add-permission',FunctionName=s['function'],StatementId='rally-api-gateway',Action='lambda:InvokeFunction',Principal='apigateway.amazonaws.com',SourceArn=f'arn:aws:execute-api:{REGION}:{account}:{s["api"]}/*/*/*')
existing=aws('apigatewayv2','get-routes',ApiId=s['api']).get('Items',[])
target=existing[0]['Target']
for route in ['GET /reviews/summary','POST /reviews']:
 if not any(r['RouteKey']==route for r in existing): aws('apigatewayv2','create-route',ApiId=s['api'],RouteKey=route,Target=target)
(ROOT/'src/config.js').write_text('export const API_URL='+json.dumps(s['apiUrl'])+';\n')
print(json.dumps(s,indent=2))
