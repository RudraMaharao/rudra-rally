import {ROAD_LENGTH} from './track-data.js';
import {point,nearest,STOPS,RAMP_T,BOX_T,HAZARD_T,RAMP,rampCoordinates,rampSurface,SOLIDS,hazardAt} from './world-data.js';
import {moveSolid} from './collision.js';
export {point,nearest,STOPS,RAMP_T,BOX_T,HAZARD_T};
export const COURSE_VERSION=4,DT=1/60,LAPS=2,ROAD_HALF=15;
export const INPUT={FORWARD:1,BRAKE:2,LEFT:4,RIGHT:8,BOOST:16,ITEM:32,DRIFT:64,RECOVER:128,CRUISE:256};
export const BOOST_T=[.12,.24,.36,.55,.59,.8,.96];
export const SHORTCUTS=[[.285,.335],[.735,.785]];
export const COIN_T=Array.from({length:32},(_,i)=>.035+i*.0295);
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),damp=(a,b,k)=>a+(b-a)*(1-Math.exp(-k*DT));
function segmentDistance(x,z,a,b){const vx=b.x-a.x,vz=b.z-a.z,f=clamp(((x-a.x)*vx+(z-a.z)*vz)/(vx*vx+vz*vz),0,1);return Math.hypot(x-a.x-f*vx,z-a.z-f*vz);}
export function createRace(seed=1,tour=false){const p=point(.01);return {version:COURSE_VERSION,seed:seed>>>0,tick:0,events:[],done:false,lastInput:0,assisted:tour,cruising:tour,score:0,coins:0,lap:1,checkpoints:[],coinLaps:Array(32).fill(-1),boxReady:Array(5).fill(0),padReady:Array(7).fill(0),rampReady:Array(4).fill(0),hazardReady:Array(3).fill(0),projectiles:[],combo:0,lastLanding:-999,jumps:0,
 player:{x:p.x,z:p.z,angle:Math.atan2(p.vx,p.vz),speed:0,t:.01,lastT:.01,progress:0,energy:100,boostUntil:0,y:0,vy:0,shieldUntil:0,slowUntil:0,item:null,drift:0,airborne:false,hit:0,lastCollision:-100},
 rivals:Array.from({length:4},(_,i)=>({t:.01+(i+1)*.004,progress:(i+1)*.004,speed:27+i*1.8,lane:[-7,-2.8,3,7][i],slowUntil:0,boostUntil:0,y:0,vy:0,lastRamp:-1}))};}
function rng(s){s.seed=(Math.imul(s.seed,1664525)+1013904223)>>>0;return s.seed/4294967296;}
function recover(s){const p=s.player,n=nearest(p.x,p.z);Object.assign(p,{x:n.x,z:n.z,angle:Math.atan2(n.vx,n.vz),t:n.t,lastT:n.t,speed:0,y:0,vy:0,airborne:false});s.events.push({type:'recover'});}
export function stepRace(s,mask){if(s.done)return s;s.events=[];s.tick++;const p=s.player,now=s.tick,previousProgress=p.progress;
 if(mask&INPUT.CRUISE&&!(s.lastInput&INPUT.CRUISE)){s.cruising=!s.cruising;if(s.cruising)s.assisted=true;s.events.push({type:'cruise',on:s.cruising});}
 if(mask&INPUT.RECOVER&&!(s.lastInput&INPUT.RECOVER))recover(s);
 const forward=!!(mask&1),brake=!!(mask&2),left=!!(mask&4),right=!!(mask&8),boost=!!(mask&16),drift=!!(mask&64);let n=nearest(p.x,p.z);
 const shortcut=SHORTCUTS.some(([a,b])=>segmentDistance(p.x,p.z,point(a),point(b))<6);
 const offroad=n.distance>ROAD_HALF+1&&!shortcut;
 const boosted=(boost&&p.energy>1)||now<p.boostUntil;
 if(boost&&p.energy>1)p.energy=Math.max(0,p.energy-25*DT);else p.energy=Math.min(100,p.energy+11*DT);
 const maxSpeed=(boosted?58:38)*(now<p.slowUntil?.5:1);
 const oldX=p.x,oldZ=p.z,oldFloor=rampSurface(p.x,p.z);
 if(!p.airborne)p.y=oldFloor.height;
 if(s.cruising){p.speed=damp(p.speed,(boosted?48:27)*(now<p.slowUntil?.5:1),3);const q=point(n.t+.009);let turn=Math.atan2(q.x-p.x,q.z-p.z)-p.angle;while(turn>Math.PI)turn-=Math.PI*2;while(turn< -Math.PI)turn+=Math.PI*2;p.angle+=clamp(turn,-2.2*DT,2.2*DT);}
 else{if(forward||boosted)p.speed+=24*DT;if(brake)p.speed-=32*DT;if(!forward&&!brake&&!boosted)p.speed=damp(p.speed,0,1.2);p.speed=clamp(p.speed,-12,offroad&&!p.airborne?maxSpeed*.43:maxSpeed);const steer=(left?1:0)-(right?1:0);if(Math.abs(p.speed)>.15)p.angle+=steer*(drift?2.0:1.58)*DT*Math.sign(p.speed)*Math.min(Math.max(Math.abs(p.speed)/12,.3),1)*(boosted?.82:1)*(p.airborne?.5:1);}
 const colliders=[...SOLIDS,...HAZARD_T.map((_,i)=>hazardAt(i,now))];
 const impacts=moveSolid(p,p.x+Math.sin(p.angle)*p.speed*DT,p.z+Math.cos(p.angle)*p.speed*DT,colliders);
 n=nearest(p.x,p.z);p.t=n.t;if(p.x*p.x/(315*315)+p.z*p.z/(250*250)>1.06)recover(s);
 if(drift&&(left||right)&&p.speed>15&&!offroad&&!p.airborne)p.drift=Math.min(160,p.drift+1);else if(p.drift){if(p.drift>35){p.boostUntil=Math.max(p.boostUntil,now+Math.min(100,p.drift));s.events.push({type:'drift',charge:p.drift});}p.drift=0;}
 let delta=p.t-p.lastT;if(delta<-.5)delta++;if(delta>.5)delta--;if(Math.abs(delta)<.025)p.progress+=delta;p.lastT=p.t;
 if(mask&INPUT.ITEM&&!(s.lastInput&INPUT.ITEM)&&p.item){const item=p.item;p.item=null;if(item==='boost'){p.boostUntil=now+240;p.energy=100;}if(item==='shield')p.shieldUntil=now+600;if(item==='pulse'){const candidates=s.rivals.map((r,i)=>({r,i,d:r.progress-p.progress})).filter(x=>x.d>-.015&&x.d<.4).sort((a,b)=>a.d-b.d);const target=candidates[0]||s.rivals.map((r,i)=>({r,i,d:Math.abs(r.progress-p.progress)})).sort((a,b)=>a.d-b.d)[0];s.projectiles.push({x:p.x,z:p.z,target:target.i,life:180});}s.events.push({type:'item',item});}
 for(let i=0;i<COIN_T.length;i++){const q=point(COIN_T[i]),lap=Math.max(0,Math.floor(p.progress+.01));const lane=i%3===0?5:i%3===1?-5:0;const x=q.x-q.vz*lane,z=q.z+q.vx*lane;if(s.coinLaps[i]!==lap&&Math.hypot(p.x-x,p.z-z)<5.2){s.coinLaps[i]=lap;s.score+=100;s.coins++;p.energy=Math.min(100,p.energy+7);s.events.push({type:'coin',index:i});}}
 for(let i=0;i<BOX_T.length;i++){const q=point(BOX_T[i]);if(now>s.boxReady[i]&&p.y<5&&Math.hypot(p.x-q.x,p.z-q.z)<6.2){const kept=!!p.item;if(!p.item)p.item=['boost','shield','pulse'][Math.floor(rng(s)*3)];s.boxReady[i]=now+420;s.events.push({type:'pickup',item:p.item,index:i,kept});}}
 for(let i=0;i<BOOST_T.length;i++){const q=point(BOOST_T[i]);if(now>s.padReady[i]&&Math.hypot(p.x-q.x,p.z-q.z)<7){p.boostUntil=now+110;p.speed=Math.max(p.speed,48);s.padReady[i]=now+300;s.events.push({type:'boost'});}}
 const floor=rampSurface(p.x,p.z);
 if(!p.airborne){
  for(const [i,t] of RAMP_T.entries()){const before=rampCoordinates(t,oldX,oldZ),after=rampCoordinates(t,p.x,p.z);if(oldFloor.index===i&&before.along<RAMP.end&&after.along>=RAMP.end&&Math.abs(after.cross)<RAMP.halfWidth&&now>s.rampReady[i]&&p.speed>13){p.y=RAMP.height;p.vy=15+p.speed*.12;p.airborne=true;p.jumpLanding=true;s.rampReady[i]=now+240;s.jumps++;s.events.push({type:'jump',index:i});break;}}
  if(!p.airborne){if(p.y>floor.height+.15){p.airborne=true;p.vy=0;p.jumpLanding=false;}else p.y=floor.height;}
 }
 if(p.airborne){p.y+=p.vy*DT;p.vy-=27*DT;if(p.vy<0&&p.y<=floor.height){p.y=floor.height;p.vy=0;p.airborne=false;if(p.jumpLanding){s.combo=now-s.lastLanding<1200?s.combo+1:1;s.lastLanding=now;p.boostUntil=Math.max(p.boostUntil,now+45+Math.min(s.combo,4)*12);s.events.push({type:'landing',combo:s.combo});}p.jumpLanding=false;}}
 if(impacts.length){p.speed*=.32;p.hit=20;if(now-p.lastCollision>35){const hazard=impacts.find(c=>c.kind==='hazard');if(hazard){if(now<p.shieldUntil)s.events.push({type:'blocked'});else{p.slowUntil=now+80;s.events.push({type:'hazard'});}}else s.events.push({type:'collision',object:impacts[0].kind});p.lastCollision=now;}}
 for(const [i,r] of s.rivals.entries()){let speed=r.speed*(now<r.slowUntil?.4:1)*(now<r.boostUntil?1.4:1);if(now%900===i*210){r.boostUntil=now+100;if(Math.abs(r.progress-p.progress)<.04&&now>=p.shieldUntil){p.slowUntil=now+55;s.events.push({type:'rival-pulse'});}}const advance=speed/ROAD_LENGTH*DT;r.t=(r.t+advance)%1;r.progress+=advance;const q=point(r.t),nearRamp=RAMP_T.some(t=>Math.abs(r.t-t)<.022),lane=r.lane*(nearRamp?.55:1);r.x=q.x-q.vz*lane;r.z=q.z+q.vx*lane;
 const floor=rampSurface(r.x,r.z),ramp=RAMP_T.findIndex(t=>{const a=rampCoordinates(t,r.x,r.z);return Math.abs(a.cross)<8&&a.along>=2&&a.along<4;});
 if(ramp>=0&&ramp!==r.lastRamp&&!r.airborne){r.y=3.8;r.vy=17;r.airborne=true;r.lastRamp=ramp;}
 if(r.airborne){r.y+=r.vy*DT;r.vy-=27*DT;if(r.vy<0&&r.y<=floor.height){r.y=floor.height;r.vy=0;r.airborne=false;}}else r.y=floor.height;
 if(!r.airborne&&ramp===-1)r.lastRamp=-1;}

 for(const shot of s.projectiles){const r=s.rivals[shot.target],dx=r.x-shot.x,dz=r.z-shot.z,d=Math.hypot(dx,dz);shot.life--;if(d<6){r.slowUntil=now+240;shot.life=0;s.events.push({type:'pulse-hit',target:shot.target});}else{shot.x+=dx/d*95*DT;shot.z+=dz/d*95*DT;}}s.projectiles=s.projectiles.filter(x=>x.life>0);
 for(let i=0;i<STOPS.length;i++)if(previousProgress<STOPS[i]-.01&&p.progress>=STOPS[i]-.01&&!s.checkpoints.includes(i)){s.checkpoints.push(i);s.events.push({type:'checkpoint',index:i});}
 s.lap=Math.min(2,Math.floor(Math.max(0,p.progress))+1);if(previousProgress<1&&p.progress>=1)s.events.push({type:'lap'});
 p.hit=Math.max(0,p.hit-1);if(p.progress>=2&&s.checkpoints.length===4){s.done=true;s.events.push({type:'finish'});}s.lastInput=mask;return s;}
export function replayRace(seed,tour,log,endTick){if(!Number.isInteger(endTick)||endTick<1||endTick>72000||!Array.isArray(log)||log.length>20000)throw Error('Invalid replay');let prev=-1;for(const row of log){if(!Array.isArray(row)||row.length!==2||!Number.isInteger(row[0])||row[0]<=prev||row[0]>=endTick||!Number.isInteger(row[1])||row[1]<0||row[1]>511)throw Error('Invalid controls');prev=row[0];}const s=createRace(seed,tour);let index=0,mask=0;while(!s.done&&s.tick<endTick){if(log[index]?.[0]===s.tick)mask=log[index++][1];stepRace(s,mask);}if(!s.done||s.tick!==endTick)throw Error('Incomplete race');return {milliseconds:Math.round(s.tick/60*1000),score:s.score,coins:s.coins,mode:s.assisted?'tour':'race',rank:1+s.rivals.filter(r=>r.progress>s.player.progress).length};}
