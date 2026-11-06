"""Compose 'Apex Groove', an original kart-racing funk loop. Requires NumPy."""
from pathlib import Path
import numpy as np
import wave, json
SR=24000
BPM=136
BEAT=60/BPM
BARS=32
LENGTH=round(BARS*4*BEAT*SR)
rng=np.random.default_rng(13237)
mix=np.zeros((LENGTH,2),dtype=np.float64)
lead_bus=np.zeros_like(mix)
chord_bus=np.zeros_like(mix)
def freq(midi):return 440*2**((midi-69)/12)
def envelope(t,dur,attack=.006,release=.075):
 return np.minimum(t/attack,1)*np.minimum(np.maximum(dur-t,0)/release,1)
def place(sig,beat,amp=1,pan=0,bus=None):
 if bus is None:bus=mix
 pos=round(beat*BEAT*SR)%LENGTH
 s=np.asarray(sig)*amp
 stereo=np.column_stack((s*np.sqrt((1-pan)/2),s*np.sqrt((1+pan)/2)))
 n=min(len(stereo),LENGTH-pos);bus[pos:pos+n]+=stereo[:n]
 if n<len(stereo):bus[:len(stereo)-n]+=stereo[n:]
def tone(note,dur,kind='lead'):
 t=np.arange(round(dur*SR))/SR;f=freq(note);phase=2*np.pi*f*t
 if kind=='lead':
  # Soft FM mallet, layered with a warm triangle-like body.
  sig=(np.sin(phase+1.8*np.exp(-t*13)*np.sin(phase*2))*.65 + np.sin(phase)*.25 +np.sin(phase*3)*.065)*np.exp(-t*3.5)
 elif kind=='bass':
  sig=np.sin(phase)*.73+np.sin(phase*2)*.19+np.sin(phase*3)*.07
  sig*=np.exp(-t*3)
 elif kind=='keys':
  sig=(np.sin(phase+1.1*np.exp(-t*8)*np.sin(phase*2))*.65+np.sin(phase*1.002)*.3)*np.exp(-t*2)
 elif kind=='pad':
  sig=np.sin(phase)*.45+np.sin(phase*1.0015)*.3+np.sin(phase*.9985)*.25
  return sig*envelope(t,dur,.18,.3)
 return sig*envelope(t,dur)
def kick():
 t=np.arange(int(.3*SR))/SR
 f=48+110*np.exp(-t*34)
 phase=2*np.pi*np.cumsum(f)/SR
 return np.sin(phase)*np.exp(-t*15)+rng.normal(0,.04,len(t))*np.exp(-t*150)
def snare():
 t=np.arange(int(.2*SR))/SR;n=rng.normal(0,1,len(t));hp=np.concatenate(([0],np.diff(n)))
 return (hp*.17*np.exp(-t*22)+np.sin(2*np.pi*185*t)*.35*np.exp(-t*30))*envelope(t,.2,.001,.03)
def hat(opened=False):
 dur=.18 if opened else .055;t=np.arange(int(dur*SR))/SR;n=rng.normal(0,1,len(t));hp=n-np.convolve(n,np.ones(7)/7,'same')
 return hp*np.exp(-t*(23 if opened else 75))*envelope(t,dur,.001,.01)
def funk(note,dur,kind='brass'):
 t=np.arange(round(dur*SR))/SR;f=freq(note);vibrato=1+.003*np.sin(2*np.pi*5.3*t)*np.minimum(t*5,1);ph=2*np.pi*np.cumsum(f*vibrato)/SR
 if kind=='bass':
  bright=np.exp(-t*18);sig=np.sin(ph)*.65+np.sin(ph*2)*.3+np.sin(ph*3)*.2*bright+np.sin(ph*5)*.13*bright
  sig=np.tanh(sig*1.5)*np.exp(-t*2.5);env=envelope(t,dur,.002,.035)
 elif kind=='clav':
  sig=sum(np.sin(ph*h)*np.exp(-t*(7+h*1.2))/(h**.7) for h in range(1,8));sig=np.tanh(sig*.8);env=envelope(t,dur,.001,.025)
 elif kind=='brass':
  bright=(1-np.exp(-t*35))*np.exp(-t*3);sig=sum(np.sin(ph*h)*np.exp(-h/(2+5*bright))/h for h in range(1,12));sig+=.16*np.sin(ph*1.003);env=envelope(t,dur,.025,.07)
 elif kind=='flute':
  sig=np.sin(ph)+.18*np.sin(ph*2)+.06*np.sin(ph*3);env=envelope(t,dur,.015,.08);sig*=np.exp(-t*1.8)
 elif kind=='guitar':
  sig=sum(np.sin(ph*h+.1*h)*np.exp(-t*(4+h*.8))/(h**1.2) for h in range(1,9));env=envelope(t,dur,.002,.03)
 return sig*env
progression=[(40,[64,67,71,74,78]),(45,[61,67,71,76]),(38,[62,66,69,73,76]),(47,[63,66,69,73]),(40,[64,67,71,74]),(45,[61,67,71,76]),(43,[62,66,69,74]),(47,[63,66,69,75])]
phrases=[[(0,76,.35),(.75,79,.3),(1.5,81,.35),(2.25,83,.65),(3.25,79,.3)],[(.25,81,.3),(1,79,.4),(1.75,76,.35),(2.5,74,.6),(3.5,76,.3)],[(0,78,.35),(.5,81,.35),(1.25,85,.6),(2.25,83,.35),(3,81,.6)],[(.25,78,.35),(1,75,.35),(1.75,78,.35),(2.5,83,.35),(3.25,81,.4)],[(0,83,.4),(.75,86,.4),(1.5,88,.6),(2.5,86,.35),(3.25,83,.45)],[(.25,85,.4),(1,83,.4),(1.75,81,.4),(2.5,79,.4),(3.25,76,.4)],[(0,78,.3),(.75,81,.35),(1.5,86,.65),(2.5,83,.35),(3.25,81,.35)],[(0,78,.35),(.75,75,.35),(1.5,78,.35),(2.25,81,.35),(3,83,.3),(3.5,75,.3)]]
for bar in range(BARS):
 base=bar*4;root,chord=progression[bar%8];section=bar//8;breakdown=section==2 and bar%8<4
 for b in [0,.75,1.75,2.5,3.5] if not breakdown else [0,2.5]:place(kick(),base+b,.85 if b%1==0 else .62)
 for b in [1,3]:
  place(snare(),base+b,.72,.06)
  place(hat(True),base+b+.015,.065,-.2)
 for i in range(16):
  if breakdown and i%2:continue
  b=i*.25+(0.035 if i%2 else 0);place(hat(i in [6,14]),base+b,.09 if i%2==0 else .035,pan=.45 if i%2 else -.4)
 # A small snare ghost note and a four-note fill keep the groove moving.
 if bar%2:place(snare(),base+2.75,.13,.1)
 if bar%4==3:
  for j in range(4):place(snare(),base+3+j*.25,.12+j*.055,(j-1.5)*.25)
 pattern=[(0,root,.36),(.5,root,.18),(.75,root+12,.22),(1.5,root+7,.23),(1.75,root+10,.18),(2.25,root,.35),(2.75,root+12,.22),(3.25,root+7,.18),(3.5,root+11,.18),(3.75,root+12,.18)]
 for b,n,d in pattern:place(funk(n,d*BEAT+.04,'bass'),base+b,.43)
 for b in [.25,.75,1.5,2.25,2.75,3.5]:
  for j,n in enumerate(chord):place(funk(n,.17,'clav'),base+b,.04,pan=-.65+j*.15,bus=chord_bus)
 for b in [.5,1.5,2.5,3.5]:
  for j,n in enumerate(chord[:4]):place(funk(n+12,.095,'guitar'),base+b,.025,pan=.55,bus=chord_bus)
 if not breakdown:
  for b,n,d in phrases[bar%8]:
   if section==1:n+=12 if bar%4==0 else 0
   place(funk(n,d*BEAT+.03,'flute' if section==1 else 'brass'),base+b,.23 if section==1 else .36,pan=-.08,bus=lead_bus)
   if section==3:place(funk(n-12,d*BEAT,'brass'),base+b,.07,pan=.2,bus=lead_bus)
 if bar%4 in [0,2] and not breakdown:
  for b in [1.75,3.25]:
   for j,n in enumerate(chord[:4]):place(funk(n,.18,'brass'),base+b,.065,pan=(j-1.5)*.25,bus=chord_bus)
 if breakdown:
  for b,n in [(.5,root+24),(1.75,root+27),(2.5,root+31),(3.5,root+34)]:place(funk(n,.18,'clav'),base+b,.16,pan=.15,bus=lead_bus)
for delay,level in [(.75*BEAT,.13),(1.5*BEAT,.05)]:lead_bus+=np.roll(lead_bus[:,::-1],round(delay*SR),axis=0)*level
for delay,level in [(.08,.08),(.14,.06),(.23,.035)]:chord_bus+=np.roll(chord_bus[:,::-1],round(delay*SR),axis=0)*level
mix+=lead_bus+chord_bus;mix-=mix.mean(axis=0);mix=np.tanh(mix*.95);mix*=.91/np.max(np.abs(mix))
edge=120;boundary=(mix[0]+mix[-1])/2;ramp=np.linspace(0,1,edge)[:,None];mix[:edge]=boundary*(1-ramp)+mix[:edge]*ramp;mix[-edge:]=mix[-edge:]*(1-ramp)+boundary*ramp
root=Path(__file__).resolve().parents[1];out=root/'dist/assets/apex-groove.wav'
with wave.open(str(out),'wb') as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((mix*32767).astype('<i2').tobytes())
metadata={'title':'Apex Groove','original':True,'bpm':BPM,'bars':BARS,'seconds':LENGTH/SR,'peak_dbfs':float(20*np.log10(np.max(np.abs(mix)))),'rms_dbfs':float(20*np.log10(np.sqrt(np.mean(mix**2)))),'loop_boundary_step':float(np.max(np.abs(mix[0]-mix[-1]))),'instruments':['syncopated slap-style bass','brass-style lead','clavinet-style keys','muted guitar-style rhythm','flute-style variation','kick/snare/hi-hat'],'file':str(out)}
(root/'soundtrack.json').write_text(json.dumps(metadata,indent=2));print(json.dumps(metadata,indent=2))
