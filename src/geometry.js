import * as THREE from 'three';
import {RAMP} from './world-data.js';
export function createRampGeometry(){
 const w=RAMP.halfWidth,a=RAMP.start,b=RAMP.end,h=RAMP.height;
 const g=new THREE.BufferGeometry();
 g.setAttribute('position',new THREE.Float32BufferAttribute([-w,0,a,w,0,a,-w,0,b,w,0,b,-w,h,b,w,h,b],3));
 // Top points upward; side, rear and bottom faces close the wedge.
 g.setIndex([0,4,1,1,4,5,0,1,2,1,3,2,0,2,4,1,5,3,2,3,4,3,5,4]);
 g.computeVertexNormals();return g.toNonIndexed();
}
export function createItemTexture(){const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;const c=canvas.getContext('2d');c.fillStyle='#9872c9';c.fillRect(0,0,256,256);c.fillStyle='#fff0a5';c.fillRect(24,24,208,208);c.strokeStyle='#203954';c.lineWidth=10;c.strokeRect(24,24,208,208);c.fillStyle='#203954';c.textAlign='center';c.textBaseline='middle';c.font='bold 160px Bungee,Arial';c.fillText('?',128,135);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;}
