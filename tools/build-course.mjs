import * as THREE from 'three';
import {COURSE_POINTS} from '../src/course.js';
import {writeFileSync} from 'node:fs';
const curve=new THREE.CatmullRomCurve3(COURSE_POINTS.map(p=>new THREE.Vector3(...p)),true,'catmullrom',.45);
const samples=Array.from({length:1200},(_,i)=>{const p=curve.getPointAt(i/1200),v=curve.getTangentAt(i/1200);return [p.x,p.z,v.x,v.z].map(x=>+x.toFixed(6));});
writeFileSync(new URL('../src/track-data.js',import.meta.url),'export const ROAD_LENGTH='+curve.getLength()+';\nexport const TRACK='+JSON.stringify(samples)+';\n');
console.log('Course length:',Math.round(curve.getLength()),'units; 30-unit road width');
