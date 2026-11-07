export const KART_RADIUS=3.05,KART_HEIGHT=4.4;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
// Minimal separating translation. The kart footprint is a conservative circle.
export function penetration(x,z,y,c,radius=KART_RADIUS){
 if(c.kind==='ramp-back'&&y>.1&&(x-c.x)*Math.sin(c.angle)+(z-c.z)*Math.cos(c.angle)<0)return null;
 let height=c.height;
 if(c.kind==='ramp-side'){const cos=Math.cos(c.angle),sin=Math.sin(c.angle),along=(x-c.x)*sin+(z-c.z)*cos; height=clamp((along+7)/14,0,1)*3.8+.35;}
 const stepAllowance=c.kind.startsWith('ramp-')?.55:.05;
 if(y+stepAllowance>=height||y+KART_HEIGHT<=0)return null;
 const dx=x-c.x,dz=z-c.z;
 if(c.shape==='circle'){const limit=radius+c.r;if(Math.abs(dx)>=limit||Math.abs(dz)>=limit)return null;const d=Math.hypot(dx,dz);if(d>=limit)return null;return {nx:d?dx/d:1,nz:d?dz/d:0,depth:limit-d+.001};}
 if(c.shape==='ellipse'){const rx=c.rx+radius,rz=c.rz+radius,q=Math.hypot(dx/rx,dz/rz);if(q>=1)return null;if(q<.00001)return {nx:1,nz:0,depth:rx};const ex=dx/q-x+c.x,ez=dz/q-z+c.z,d=Math.hypot(ex,ez);return {nx:ex/d,nz:ez/d,depth:d+.001};}
 const cos=Math.cos(c.angle),sin=Math.sin(c.angle),lx=dx*cos-dz*sin,lz=dx*sin+dz*cos;
 if(Math.abs(lx)>c.hx+radius||Math.abs(lz)>c.hz+radius)return null;
 const qx=clamp(lx,-c.hx,c.hx),qz=clamp(lz,-c.hz,c.hz),vx=lx-qx,vz=lz-qz,d=Math.hypot(vx,vz);let nx,nz,depth;
 if(d>0){if(d>=radius)return null;nx=vx/d;nz=vz/d;depth=radius-d+.001;}
 else if(c.hx-Math.abs(lx)<c.hz-Math.abs(lz)){nx=lx<0?-1:1;nz=0;depth=c.hx-Math.abs(lx)+radius+.001;}
 else{nx=0;nz=lz<0?-1:1;depth=c.hz-Math.abs(lz)+radius+.001;}
 return {nx:nx*cos+nz*sin,nz:-nx*sin+nz*cos,depth};
}
// Substeps prevent boosting through thin poles or the moving barrels.
export function moveSolid(body,targetX,targetZ,colliders){const dx=targetX-body.x,dz=targetZ-body.z,steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.65)),hits=new Set();let x=body.x,z=body.z;
 for(let i=0;i<steps;i++){x+=dx/steps;z+=dz/steps;for(let pass=0;pass<3;pass++){let touched=false;for(const c of colliders){const p=penetration(x,z,body.y,c);if(p){x+=p.nx*p.depth;z+=p.nz*p.depth;hits.add(c);touched=true;}}if(!touched)break;}}
 body.x=x;body.z=z;return [...hits];
}
