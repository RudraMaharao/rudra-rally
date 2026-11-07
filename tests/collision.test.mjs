import test from 'node:test';
import assert from 'node:assert/strict';
import {moveSolid,penetration,KART_RADIUS} from '../src/collision.js';
import {SOLIDS,point,RAMP_T,BOX_T,rampSurface,localPoint} from '../src/world-data.js';
import {createRace,stepRace,INPUT} from '../src/race.js';
import {createRampGeometry} from '../src/geometry.js';

test('boost-speed sweeps stop at trees, poles, buildings and barrels',()=>{
 const shapes=[...['tree','pole','building','fence'].map(kind=>SOLIDS.find(c=>c.kind===kind)),{kind:'hazard',shape:'circle',x:0,z:0,r:2,height:5.8}];
 for(const c of shapes){const angle=c.angle||0,dir={x:Math.cos(angle),z:-Math.sin(angle)},extent=c.r||c.hx;
  const start={x:c.x-dir.x*(extent+KART_RADIUS+8),z:c.z-dir.z*(extent+KART_RADIUS+8),y:0};
  const hits=moveSolid(start,c.x+dir.x*20,c.z+dir.z*20,[c]);
  assert.ok(hits.includes(c),c.kind+' should collide');assert.equal(penetration(start.x,start.z,0,c),null,c.kind+' separates');
  assert.ok((start.x-c.x)*dir.x+(start.z-c.z)*dir.z<0,c.kind+' must not tunnel through');
 }
});
test('a stationary overlapping barrel pushes out, while a high jump clears it',()=>{const c={kind:'hazard',shape:'circle',x:0,z:0,r:2,height:5.8},p={x:1,z:0,y:0};moveSolid(p,1,0,[c]);assert.equal(penetration(p.x,p.z,p.y,c),null);const jump={x:-10,z:0,y:7};assert.equal(moveSolid(jump,10,0,[c]).length,0);assert.ok(Math.abs(jump.x-10)<1e-9);});
test('all track centre points have an open route through static scenery',()=>{for(let i=0;i<1200;i++){const p=point(i/1200),y=rampSurface(p.x,p.z).height;for(const c of SOLIDS.filter(c=>!c.kind.startsWith('ramp-')))assert.equal(penetration(p.x,p.z,y,c),null,`${c.kind} blocks road at ${i/1200}`);}});
test('each ramp supports a slow climb and launches at its actual lip',()=>{for(const t of RAMP_T){const s=createRace(5),q=point(t),entry=localPoint(q,0,-16);Object.assign(s.player,{...entry,angle:Math.atan2(q.vx,q.vz),t:t-.011,lastT:t-.011,progress:t-.021,speed:20});let climbed=false,jumped=false;for(let i=0;i<120;i++){stepRace(s,INPUT.FORWARD);if(s.player.y>.3&&!s.player.airborne)climbed=true;if(s.events.some(e=>e.type==='jump')){jumped=true;assert.ok(s.player.y>=3.8);break;}}assert.ok(climbed,`ramp ${t} climb`);assert.ok(jumped,`ramp ${t} launch`);}});
test('ramp deck triangles face upwards and rear wall blocks ground entry',()=>{const g=createRampGeometry(),a=g.attributes.position.array;for(let i=0;i<18;i+=9){const ux=a[i+3]-a[i],uz=a[i+5]-a[i+2],vx=a[i+6]-a[i],vz=a[i+8]-a[i+2];assert.ok(uz*vx-ux*vz>0,'top winding must face up');}g.dispose();const c=SOLIDS.find(c=>c.kind==='ramp-back'),q=point(c.ramp),p=localPoint(q,0,12),body={...p,y:0},target=localPoint(q,0,-8);assert.ok(moveSolid(body,target.x,target.z,[c]).length);assert.ok((body.x-c.x)*q.vx+(body.z-c.z)*q.vz>0);});
test('an item cube breaks on contact even with an occupied item slot',()=>{const s=createRace(2),q=point(BOX_T[0]);Object.assign(s.player,{x:q.x,z:q.z,t:BOX_T[0],lastT:BOX_T[0],item:'shield'});stepRace(s,0);assert.equal(s.player.item,'shield');assert.ok(s.boxReady[0]>s.tick);assert.ok(s.events.some(e=>e.type==='pickup'&&e.kept));});
