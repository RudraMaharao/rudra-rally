"""Compose 'Sunshine Circuit', an original 32-bar arcade loop. Requires NumPy."""
from pathlib import Path
import numpy as np
import wave, json
SR=44100
BPM=132
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
# D major, with a warm minor middle section and a dominant turnaround.
progression=[(38,[62,66,69,73]),(35,[59,62,66,69]),(31,[55,59,62,66]),(33,[57,61,64,69]),(38,[62,66,69,73]),(30,[57,61,66,69]),(40,[59,64,67,71]),(33,[57,61,64,67])]
# Each tuple is (beat within bar, MIDI pitch, duration in beats).
melodyA=[
 [(0,74,.5),(.75,78,.5),(1.5,81,.7),(2.5,78,.45),(3.25,76,.5)],
 [(0,74,.75),(1,71,.5),(1.75,74,.45),(2.5,78,.6)],
 [(.25,79,.65),(1,78,.45),(1.75,76,.5),(2.5,74,.75),(3.5,71,.35)],
 [(0,73,.5),(.75,76,.5),(1.5,78,.5),(2.5,76,.65),(3.5,73,.3)],
 [(0,74,.5),(.75,78,.45),(1.5,81,.45),(2.25,86,.75),(3.25,81,.45)],
 [(0,81,.6),(1,78,.5),(1.75,76,.6),(2.75,73,.75)],
 [(.25,76,.6),(1,79,.6),(2,83,.65),(3,81,.5)],
 [(0,79,.45),(.5,78,.45),(1.25,76,.6),(2.25,73,.7),(3.25,69,.45)]
]
melodyB=[
 [(0,81,.65),(1,86,.45),(1.75,85,.45),(2.5,81,.65),(3.5,78,.3)],
 [(.25,83,.6),(1,81,.5),(1.75,78,.7),(3,74,.65)],
 [(0,79,.45),(.75,83,.55),(1.5,86,.7),(2.75,83,.65)],
 [(0,85,.6),(1,83,.45),(1.75,81,.6),(2.75,76,.65)],
 [(0,86,.6),(.75,81,.6),(1.5,78,.55),(2.5,81,.65),(3.5,83,.3)],
 [(0,85,.6),(1,81,.5),(1.75,78,.65),(2.75,73,.7)],
 [(.25,76,.55),(1,79,.55),(1.75,83,.6),(2.75,81,.55)],
 [(0,79,.45),(.75,78,.45),(1.5,76,.55),(2.25,73,.6),(3.25,78,.45)]
]
for bar in range(BARS):
 base=bar*4;root,chord=progression[bar%8]
 for b in [0,1,2,3]:place(kick(),base+b,.53)
 for b in [1,3]:place(snare(),base+b,.34,pan=.04)
 for i in range(8):place(hat(i%2==1),base+i*.5,.085 if i%2 else .06,pan=.4 if i%2 else -.35)
 if bar%8==7:
  for j in range(4):place(snare(),base+3+j*.25,.08+j*.025,pan=(j-1.5)*.18)
 for b,n,d in [(0,root,.6),(.75,root,.25),(1.5,root+12,.35),(2,root,.5),(2.75,root+7,.35),(3.5,root+12,.35)]:place(tone(n,d*BEAT,'bass'),base+b,.31)
 for b in [.5,1.5,2.5,3.5]:
  for j,n in enumerate(chord):place(tone(n,.34,'keys'),base+b,.055,pan=(j-1.5)*.32,bus=chord_bus)
 for j,n in enumerate(chord):place(tone(n,4*BEAT,'pad'),base,.018,pan=(j-1.5)*.4,bus=chord_bus)
 phrase=melodyB if bar//8%2 else melodyA
 for b,n,d in phrase[bar%8]:place(tone(n,d*BEAT+.1),base+b,.19,pan=-.06 if bar//8%2 else .06,bus=lead_bus)
 if bar>=16:
  for i,n in enumerate([chord[0]+12,chord[2]+12,chord[1]+12,chord[3]+12]):place(tone(n,.18,'lead'),base+.25+i,.025,pan=(-1)**i*.6,bus=chord_bus)
# Stereo echoes wrap across the loop, avoiding a cut reverb tail.
for delay,level in [(.75*BEAT,.20),(1.5*BEAT,.09)]:lead_bus+=np.roll(lead_bus[:,::-1],round(delay*SR),axis=0)*level
for delay,level in [(.10,.10),(.17,.08),(.27,.05)]:chord_bus+=np.roll(chord_bus[:,::-1],round(delay*SR),axis=0)*level
mix+=lead_bus+chord_bus
# Remove DC and gently saturate without clipping.
mix-=mix.mean(axis=0)
mix=np.tanh(mix*1.15)
mix*=.87/np.max(np.abs(mix))
# Tiny boundary blend removes waveform discontinuity without fading the groove.
edge=180
boundary=(mix[0]+mix[-1])/2
ramp=np.linspace(0,1,edge)[:,None]
mix[:edge]=boundary*(1-ramp)+mix[:edge]*ramp
mix[-edge:]=mix[-edge:]*(1-ramp)+boundary*ramp
root=Path(__file__).resolve().parents[1]
out=root/'dist/assets/sunshine-circuit.wav'
with wave.open(str(out),'wb') as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((mix*32767).astype('<i2').tobytes())
print(json.dumps({'title':'Sunshine Circuit','bpm':BPM,'bars':BARS,'seconds':LENGTH/SR,'peak_dbfs':float(20*np.log10(np.max(np.abs(mix)))),'rms_dbfs':float(20*np.log10(np.sqrt(np.mean(mix**2)))),'loop_boundary_step':float(np.max(np.abs(mix[0]-mix[-1]))),'file':str(out)},indent=2))
