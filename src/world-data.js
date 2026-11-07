// Shared physical layout: rendering and server replay use the same coordinates.
import {TRACK} from './track-data.js';
export const RAMP={halfWidth:8,start:-12,end:2,height:3.8};
export const RAMP_T=[.15,.39,.61,.91],BOX_T=[.07,.27,.49,.72,.94],HAZARD_T=[.32,.54,.76];
export const STOPS=[.22,.46,.68,.87];
export function point(t){const f=(((t%1)+1)%1)*TRACK.length,i=Math.floor(f),a=TRACK[i%TRACK.length],b=TRACK[(i+1)%TRACK.length],u=f-i;const vx=a[2]+(b[2]-a[2])*u,vz=a[3]+(b[3]-a[3])*u,len=Math.hypot(vx,vz);return {x:a[0]+(b[0]-a[0])*u,z:a[1]+(b[1]-a[1])*u,vx:vx/len,vz:vz/len};}
export function nearest(x,z){let best=Infinity,index=0;for(let i=0;i<TRACK.length;i++){const d=(TRACK[i][0]-x)**2+(TRACK[i][1]-z)**2;if(d<best){best=d;index=i;}}return {distance:Math.sqrt(best),t:index/TRACK.length,...point(index/TRACK.length)};}
export function localPoint(q,x,z){return {x:q.x+q.vz*x+q.vx*z,z:q.z-q.vx*x+q.vz*z};}
export function rampCoordinates(t,x,z){const q=point(t),dx=x-q.x,dz=z-q.z;return {along:dx*q.vx+dz*q.vz,cross:dx*q.vz-dz*q.vx,q};}
export function rampSurface(x,z){let height=0,index=-1;for(const [i,t] of RAMP_T.entries()){const r=rampCoordinates(t,x,z);if(Math.abs(r.cross)<=RAMP.halfWidth&&r.along>=RAMP.start&&r.along<=RAMP.end){const h=(r.along-RAMP.start)/(RAMP.end-RAMP.start)*RAMP.height;if(h>=height){height=h;index=i;}}}return {height,index};}
let seed=37;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
export const TREES=[];
for(let i=0;i<185;i++){const x=(random()-.5)*580,z=(random()-.5)*450;if(x*x/(290*290)+z*z/(225*225)>1||nearest(x,z).distance<19||Math.hypot(x,z)<48)continue;TREES.push({x,z,scale:.6+random()*.55,pine:i%3===0});}
export const HILLS=[];
for(let i=0;i<18;i++){const angle=i*.41,x=Math.cos(angle)*275,z=Math.sin(angle)*211;if(nearest(x,z).distance<46)continue;HILLS.push({x,z,color:[0x7db74b,0xa9d56b,0x86bc52][i%3]});}
export const LANDMARKS=[[-165,-145,0xb49ae5],[245,-90,0xf59d66],[190,145,0x7cc9e5],[-95,175,0xc4df79]].map(([x,z,color])=>{for(let i=0;i<12;i++){const n=nearest(x,z);if(n.distance>=52)break;const d=Math.max(n.distance,.1);x+=(x-n.x)/d*(53-d);z+=(z-n.z)/d*(53-d);}return [x,z,color];});
export const WINDMILLS=[[-260,-70],[250,130]];
export const SOLIDS=[];
const circle=(kind,x,z,r,height)=>SOLIDS.push({kind,shape:'circle',x,z,r,height});
const rect=(kind,x,z,hx,hz,angle,height,extra={})=>SOLIDS.push({kind,shape:'rect',x,z,hx,hz,angle,height,...extra});
for(const t of TREES)circle('tree',t.x,t.z,(t.pine?1.8:.85)*t.scale,8.5*t.scale);
for(const h of HILLS)SOLIDS.push({kind:'hill',shape:'ellipse',x:h.x,z:h.z,rx:28.8,rz:24,height:11.8});
for(const [x,z] of LANDMARKS)SOLIDS.push({kind:'landmark',shape:'ellipse',x,z,rx:31.2,rz:24,height:14});
for(const [x,z] of WINDMILLS)circle('windmill',x,z,3,16);
rect('observatory',1,4,5.6,5.6,0,12);
for(const t of STOPS){const q=point(t),b=localPoint(q,-28,0),angle=Math.atan2(q.vx,q.vz);rect('building',b.x,b.z,6.2,5.3,angle,17);for(const side of [-17,17]){const p=localPoint(q,side,0);circle('pole',p.x,p.z,.9,13.5);}for(const side of [-6,6]){const p=localPoint(q,side-28,5);circle('building-pole',p.x,p.z,.25,5);}}
for(const side of [-18,18]){const p=localPoint(point(.01),side,0);circle('start-pole',p.x,p.z,1.3,16);}
for(let i=0;i<4;i++)for(const side of [-18,18]){const p=localPoint(point(.42),side,(i-1.5)*7);circle('tunnel-pole',p.x,p.z,.9,14);}
for(let i=0;i<7;i++){const a=i/7*Math.PI*2;circle('flag-pole',Math.cos(a)*292,Math.sin(a)*225,.25,9);}
for(let i=0;i<20;i++){const q=point(.26+i*.0026),p=localPoint(q,20,0);rect('fence',p.x,p.z,.5,1.8,Math.atan2(q.vx,q.vz),2.6);}
for(const t of RAMP_T){const q=point(t),angle=Math.atan2(q.vx,q.vz);for(const side of [-8,8]){const p=localPoint(q,side,-5);rect('ramp-side',p.x,p.z,.25,7,angle,4.2,{ramp:t});}const p=localPoint(q,0,2);rect('ramp-back',p.x,p.z,8,.2,angle,3.8,{ramp:t});}
export function hazardAt(index,tick){const q=point(HAZARD_T[index]),lane=Math.sin(tick*.017+index)*11;return {kind:'hazard',shape:'circle',x:q.x-q.vz*lane,z:q.z+q.vx*lane,r:2,height:5.8,index};}
