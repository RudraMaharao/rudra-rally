var Th=0,wl=1,Ah=2;var Ni=1,wh=2,gs=3,Si=0,Ze=1,pn=2,Di=0,_s=1,Rl=2,Cl=3,Il=4,Rh=5;var Ui=100,Ch=101,Ih=102,Ph=103,Lh=104,Nh=200,Dh=201,Uh=202,Fh=203,Pl=204,Ll=205,Oh=206,Bh=207,zh=208,kh=209,Gh=210,Hh=211,Vh=212,Wh=213,Xh=214,ra=0,aa=1,oa=2,ss=3,la=4,ca=5,ha=6,ua=7,Nl=0,qh=1,Yh=2,Fn=0,Dl=1,Ul=2,Fl=3,fr=4,Ol=5,Bl=6,zl=7;var kl=300,Fi=301,xs=302,Ba=303,za=304,da=1e3,Ln=1001,fa=1002,we=1003,Zh=1004;var pr=1005;var Xe=1006,ka=1007;var ti=1008;var Qe=1009,Gl=1010,Hl=1011,vs=1012,Ga=1013,Sn=1014,Mn=1015,bn=1016,Ha=1017,Va=1018,Oi=1020,Vl=35902,Wl=35899,Xl=1021,ql=1022,En=1023,$n=1026,ei=1027,Yl=1028,Wa=1029,Mi=1030,Xa=1031;var qa=1033,mr=33776,gr=33777,_r=33778,xr=33779,Ya=35840,Za=35841,Ja=35842,$a=35843,Ka=36196,Qa=37492,ja=37496,to=37488,eo=37489,vr=37490,no=37491,io=37808,so=37809,ro=37810,ao=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,xo=36492,vo=36494,yo=36495,So=36283,Mo=36284,yr=36285,bo=36286;var Hs=2300,pa=2301,ia=2302,yl=2303,Sl=2400,Ml=2401,bl=2402;var Jh=3200;var Eo=0,$h=1,ni="",ze="srgb",Vs="srgb-linear",Ws="linear",Kt="srgb";var sa=7680;var Kh=519,Qh=512,jh=513,tu=514,Zl=515,eu=516,nu=517,Jl=518,$l=519,Kl=35044;var Ql="300 es",fn=2e3,rs=2001;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Md(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=Xs("canvas");return i.style.display="block",i}var $c={},as=null;function qs(...i){let t="THREE."+i.shift();as?as("log",t,...i):console.log(t,...i)}function su(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=su(i);let t="THREE."+i.shift();if(as)as("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=su(i);let t="THREE."+i.shift();if(as)as("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zs(...i){let t=i.join(" ");t in $c||($c[t]=!0,Rt(...i))}function ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var au={[ra]:ra,[oa]:ha,[la]:la,[ss]:ca,[aa]:aa,[ha]:oa,[ua]:ua,[ca]:ss},Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=1234567,ks=Math.PI/180,os=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function jl(i,t){return(i%t+t)%t}function bd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ed(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function Td(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function Ad(i,t=1){return t-Math.abs(jl(i,t*2)-t)}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Id(i,t){return i+Math.random()*(t-i)}function Pd(i){return i*(.5-Math.random())}function Ld(i){i!==void 0&&(Kc=i);let t=Kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*ks}function Dd(i){return i*os}function Ud(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Od(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),m=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*m,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*m,o*c);break;case"ZXZ":i.set(l*m,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function To(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ec(i,t){if(t.constructor===Float32Array)return i;let e=To(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function nc(i,t){if(t.constructor===Float32Array)return i;let e=To(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ys={DEG2RAD:ks,RAD2DEG:os,generateUUID:bi,clamp:Wt,euclideanModulo:jl,mapLinear:bd,inverseLerp:Ed,lerp:Gs,damp:Td,pingpong:Ad,smoothstep:wd,smootherstep:Rd,randInt:Cd,randFloat:Id,randFloatSpread:Pd,seededRandom:Ld,degToRad:Nd,radToDeg:Dd,isPowerOfTwo:Ud,ceilPowerOfTwo:Fd,floorPowerOfTwo:tc,setQuaternionFromProperEuler:Od,normalize:nc,denormalize:ec},Ot=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(m!==x||l!==f||c!==p||u!==_){let d=l*f+c*p+u*_+m*x;d<0&&(f=-f,p=-p,_=-_,x=-x,d=-d);let h=1-o;if(d<.9995){let v=Math.acos(d),A=Math.sin(v);h=Math.sin(h*v)/A,o=Math.sin(o*v)/A,l=l*h+f*o,c=c*h+p*o,u=u*h+_*o,m=m*h+x*o}else{l=l*h+f*o,c=c*h+p*o,u=u*h+_*o,m=m*h+x*o;let v=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=v,c*=v,u*=v,m*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*m+l*p-c*f,t[e+1]=l*_+u*f+c*m-o*p,t[e+2]=c*_+u*p+o*f-l*m,t[e+3]=u*_-o*m-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*m+c*p*_,this._y=c*p*m-f*u*_,this._z=c*u*_+f*p*m,this._w=c*u*m-f*p*_;break;case"YXZ":this._x=f*u*m+c*p*_,this._y=c*p*m-f*u*_,this._z=c*u*_-f*p*m,this._w=c*u*m+f*p*_;break;case"ZXY":this._x=f*u*m-c*p*_,this._y=c*p*m+f*u*_,this._z=c*u*_+f*p*m,this._w=c*u*m-f*p*_;break;case"ZYX":this._x=f*u*m-c*p*_,this._y=c*p*m+f*u*_,this._z=c*u*_-f*p*m,this._w=c*u*m+f*p*_;break;case"YZX":this._x=f*u*m+c*p*_,this._y=c*p*m+f*u*_,this._z=c*u*_-f*p*m,this._w=c*u*m-f*p*_;break;case"XZY":this._x=f*u*m-c*p*_,this._y=c*p*m-f*u*_,this._z=c*u*_+f*p*m,this._w=c*u*m+f*p*_;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],m=e[10],f=n+o+m;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>m){let p=2*Math.sqrt(1+n-o-m);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){let p=2*Math.sqrt(1+o-n-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $o.copy(this).projectOnVector(t),this.sub($o)}reflect(t){return this.sub($o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new D,Qc=new Dn,Nt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],f=n[2],p=n[5],_=n[8],x=s[0],d=s[3],h=s[6],v=s[1],A=s[4],M=s[7],T=s[2],w=s[5],g=s[8];return r[0]=a*x+o*v+l*T,r[3]=a*d+o*A+l*w,r[6]=a*h+o*M+l*g,r[1]=c*x+u*v+m*T,r[4]=c*d+u*A+m*w,r[7]=c*h+u*M+m*g,r[2]=f*x+p*v+_*T,r[5]=f*d+p*A+_*w,r[8]=f*h+p*M+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=e*m+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=m*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new Nt,jc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bd(){let i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:t,whitePoint:n,transfer:Ws,toXYZ:jc,fromXYZ:th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:jc,fromXYZ:th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var Zt=Bd();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=Xs("canvas")),ki.width=t.width,ki.height=t.height;let s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zd=0,ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qo(s[a].image)):r.push(Qo(s[a]))}else r=Qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var kd=0,jo=new D,qe=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Xe,a=ti,o=En,l=Qe,c=i.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=bi(),this.name="",this.source=new ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jo).x}get height(){return this.source.getSize(jo).y}get depth(){return this.source.getSize(jo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=kl;qe.DEFAULT_ANISOTROPY=1;var ue=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],m=l[8],f=l[1],p=l[5],_=l[9],x=l[2],d=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(m-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(m+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,M=(p+1)/2,T=(h+1)/2,w=(u+f)/4,g=(m+x)/4,b=(_+d)/4;return A>M&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=g/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=g/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((d-_)*(d-_)+(m-x)*(m-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(m-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends Nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ys=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,m,f,p,_,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,m,f,p,_,x,d)}set(t,e,n,s,r,a,o,l,c,u,m,f,p,_,x,d){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=m,h[14]=f,h[3]=p,h[7]=_,h[11]=x,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*m,_=o*u,x=o*m;e[0]=l*u,e[4]=-l*m,e[8]=c,e[1]=p+_*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,p=l*m,_=c*u,x=c*m;e[0]=f+x*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,p=l*m,_=c*u,x=c*m;e[0]=f-x*o,e[4]=-a*m,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,p=a*m,_=o*u,x=o*m;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+x,e[1]=l*m,e[5]=x*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*u,e[4]=x-f*m,e[8]=_*m+p,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*m+_,e[10]=f-x*m}else if(t.order==="XZY"){let f=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*u,e[4]=-m,e[8]=c*u,e[1]=f*m+x,e[5]=a*u,e[9]=p*m-_,e[2]=_*m-p,e[6]=o*u,e[10]=x*m+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Hd)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ci.crossVectors(n,en),ci.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ci.crossVectors(n,en)),ci.normalize(),Dr.crossVectors(en,ci),s[0]=ci.x,s[4]=Dr.x,s[8]=en.x,s[1]=ci.y,s[5]=Dr.y,s[9]=en.y,s[2]=ci.z,s[6]=Dr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],f=n[9],p=n[13],_=n[2],x=n[6],d=n[10],h=n[14],v=n[3],A=n[7],M=n[11],T=n[15],w=s[0],g=s[4],b=s[8],U=s[12],P=s[1],N=s[5],B=s[9],V=s[13],C=s[2],H=s[6],q=s[10],G=s[14],nt=s[3],X=s[7],j=s[11],tt=s[15];return r[0]=a*w+o*P+l*C+c*nt,r[4]=a*g+o*N+l*H+c*X,r[8]=a*b+o*B+l*q+c*j,r[12]=a*U+o*V+l*G+c*tt,r[1]=u*w+m*P+f*C+p*nt,r[5]=u*g+m*N+f*H+p*X,r[9]=u*b+m*B+f*q+p*j,r[13]=u*U+m*V+f*G+p*tt,r[2]=_*w+x*P+d*C+h*nt,r[6]=_*g+x*N+d*H+h*X,r[10]=_*b+x*B+d*q+h*j,r[14]=_*U+x*V+d*G+h*tt,r[3]=v*w+A*P+M*C+T*nt,r[7]=v*g+A*N+M*H+T*X,r[11]=v*b+A*B+M*q+T*j,r[15]=v*U+A*V+M*G+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],m=t[6],f=t[10],p=t[14],_=t[3],x=t[7],d=t[11],h=t[15],v=l*p-c*f,A=o*p-c*m,M=o*f-l*m,T=a*p-c*u,w=a*f-l*u,g=a*m-o*u;return e*(x*v-d*A+h*M)-n*(_*v-d*T+h*w)+s*(_*A-x*T+h*g)-r*(_*M-x*w+d*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=t[9],f=t[10],p=t[11],_=t[12],x=t[13],d=t[14],h=t[15],v=e*o-n*a,A=e*l-s*a,M=e*c-r*a,T=n*l-s*o,w=n*c-r*o,g=s*c-r*l,b=u*x-m*_,U=u*d-f*_,P=u*h-p*_,N=m*d-f*x,B=m*h-p*x,V=f*h-p*d,C=v*V-A*B+M*N+T*P-w*U+g*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/C;return t[0]=(o*V-l*B+c*N)*H,t[1]=(s*B-n*V-r*N)*H,t[2]=(x*g-d*w+h*T)*H,t[3]=(f*w-m*g-p*T)*H,t[4]=(l*P-a*V-c*U)*H,t[5]=(e*V-s*P+r*U)*H,t[6]=(d*M-_*g-h*A)*H,t[7]=(u*g-f*M+p*A)*H,t[8]=(a*B-o*P+c*b)*H,t[9]=(n*P-e*B-r*b)*H,t[10]=(_*w-x*M+h*v)*H,t[11]=(m*M-u*w-p*v)*H,t[12]=(o*U-a*N-l*b)*H,t[13]=(e*N-n*U+s*b)*H,t[14]=(x*A-_*T-d*v)*H,t[15]=(u*T-m*A+f*v)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,m=o+o,f=r*c,p=r*u,_=r*m,x=a*u,d=a*m,h=o*m,v=l*c,A=l*u,M=l*m,T=n.x,w=n.y,g=n.z;return s[0]=(1-(x+h))*T,s[1]=(p+M)*T,s[2]=(_-A)*T,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(f+h))*w,s[6]=(d+v)*w,s[7]=0,s[8]=(_+A)*g,s[9]=(d-v)*g,s[10]=(1-(f+x))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),l=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,u=1/o,m=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=m,_n.elements[9]*=m,_n.elements[10]*=m,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=fn,l=!1){let c=this.elements,u=2*r/(e-t),m=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),_,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===fn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===rs)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn,l=!1){let c=this.elements,u=2/(e-t),m=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),_,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===fn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===rs)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new D,_n=new ae,Gd=new D(0,0,0),Hd=new D(1,1,1),ci=new D,Dr=new D,en=new D,eh=new ae,nh=new Dn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0,ih=new D,Hi=new Dn,Vn=new ae,Ur=new D,Ls=new D,Wd=new D,Xd=new Dn,sh=new D(1,0,0),rh=new D(0,1,0),ah=new D(0,0,1),oh={type:"added"},qd={type:"removed"},Vi={type:"childadded",child:null},tl={type:"childremoved",child:null},Ie=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Kn,n=new Dn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Nt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ls,Ur,this.up):Vn.lookAt(Ur,Ls,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),tl.child=t,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),m=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var re=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yd={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let d=e.getJointPose(x,n),h=this._getHandJoint(c,x);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=u.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function el(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=jl(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=el(a,r,t+1/3),this.g=el(a,r,t),this.b=el(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Zt.workingToColorSpace(Be.copy(this),t),Math.round(Wt(Be.r*255,0,255))*65536+Math.round(Wt(Be.g*255,0,255))*256+Math.round(Wt(Be.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=ze){Zt.workingToColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Fr);let n=Gs(hi.h,Fr.h,e),s=Gs(hi.s,Fr.s,e),r=Gs(hi.l,Fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new zt;zt.NAMES=ou;var Js=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new D,Wn=new D,nl=new D,Xn=new D,Wi=new D,Xi=new D,lh=new D,il=new D,sl=new D,rl=new D,al=new ue,ol=new ue,ll=new ue,Zn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Wn.subVectors(n,e),nl.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(Wn),l=xn.dot(nl),c=Wn.dot(Wn),u=Wn.dot(nl),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let f=1/m,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return al.setScalar(0),ol.setScalar(0),ll.setScalar(0),al.fromBufferAttribute(t,e),ol.fromBufferAttribute(t,n),ll.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(al,r.x),a.addScaledVector(ol,r.y),a.addScaledVector(ll,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Wn.subVectors(t,e),xn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),il.subVectors(t,n);let l=Wi.dot(il),c=Xi.dot(il);if(l<=0&&c<=0)return e.copy(n);sl.subVectors(t,s);let u=Wi.dot(sl),m=Xi.dot(sl);if(u>=0&&m<=u)return e.copy(s);let f=l*m-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Wi,a);rl.subVectors(t,r);let p=Wi.dot(rl),_=Xi.dot(rl);if(_>=0&&p<=_)return e.copy(r);let x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Xi,o);let d=u*_-p*m;if(d<=0&&m-u>=0&&p-_>=0)return lh.subVectors(r,s),o=(m-u)/(m-u+(p-_)),e.copy(s).addScaledVector(lh,o);let h=1/(d+x+f);return a=x*h,o=f*h,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Br.subVectors(this.max,Ns),qi.subVectors(t.a,Ns),Yi.subVectors(t.b,Ns),Zi.subVectors(t.c,Ns),ui.subVectors(Yi,qi),di.subVectors(Zi,Yi),Ri.subVectors(qi,Zi);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ui.z,0,-ui.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!cl(e,qi,Yi,Zi,Br)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,qi,Yi,Zi,Br))?!1:(zr.crossVectors(ui,di),e=[zr.x,zr.y,zr.z],cl(e,qi,Yi,Zi,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,Or=new pi,qi=new D,Yi=new D,Zi=new D,ui=new D,di=new D,Ri=new D,Ns=new D,Br=new D,zr=new D,Ci=new D;function cl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var _e=new D,kr=new Ot,Zd=0,sn=class extends Nn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=Mn,this.version=0,this._normalizationScale=t!==void 0?To(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ec(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nc(t,this.array)}};var Ks=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qs=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jd=new pi,Ds=new D,hl=new D,hs=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(hl)),this.expandByPoint(Ds.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$d=0,dn=new ae,ul=new Ie,Ji=new D,nn=new pi,Us=new pi,Ae=new D,Ye=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?Qs:Ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(nn.min,Us.min),nn.expandByPoint(Ae),Ae.addVectors(nn.max,Us.max),nn.expandByPoint(Ae)):(nn.expandByPoint(Us.min),nn.expandByPoint(Us.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ae.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(t,c),Ae.add(Ji)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;let u=new D,m=new D,f=new D,p=new Ot,_=new Ot,x=new Ot,d=new D,h=new D;function v(U,P,N){c[U]=c[P]=c[N]=1,u.fromBufferAttribute(n,U),m.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),p.fromBufferAttribute(r,U),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,N),m.sub(u),f.sub(u),_.sub(p),x.sub(p);let B=1/(_.x*x.y-x.x*_.y);isFinite(B)&&(d.copy(m).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(B),h.copy(f).multiplyScalar(_.x).addScaledVector(m,-x.x).multiplyScalar(B),o[U].add(d),o[P].add(d),o[N].add(d),l[U].add(h),l[P].add(h),l[N].add(h))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,P=A.length;U<P;++U){let N=A[U],B=N.start,V=N.count;for(let C=B,H=B+V;C<H;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let M=new D,T=new D,w=new D,g=new D;function b(U){w.fromBufferAttribute(s,U),g.copy(w);let P=o[U];M.copy(P),M.sub(w.multiplyScalar(w.dot(P))).normalize(),T.crossVectors(g,P);let B=T.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,B)}for(let U=0,P=n.count;U<P;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,m=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,d),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,m=o.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new sn(f,u,m)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,f=c.length;m<f;m++){let p=c[m];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],m=r[c];for(let f=0,p=m.length;f<p;f++)u.push(m[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ch(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ch(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ch(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=bi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ve=new D,js=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?To(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ec(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nc(t,this.data.array)}},dl=new D,Kd=new D,Qd=new Nt,yn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dl.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qd.getNormalMatrix(t),s=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jd=0,Qn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=_s,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ll,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},us=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$i,Fs=new D,Ki=new D,Qi=new D,ji=new Ot,Os=new Ot,lu=new ae,Gr=new D,Bs=new D,Hr=new D,hh=new Ot,fl=new Ot,uh=new Ot,tr=class extends Ie{constructor(t=new us){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xa(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new js(n,3,0,!1)),$i.setAttribute("uv",new js(n,2,3,!1))}this.geometry=$i,this.material=t,this.center=new Ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),lu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Vr(Gr.set(-.5,-.5,0),Qi,a,Ki,s,r),Vr(Bs.set(.5,-.5,0),Qi,a,Ki,s,r),Vr(Hr.set(.5,.5,0),Qi,a,Ki,s,r),hh.set(0,0),fl.set(1,0),uh.set(1,1);let o=t.ray.intersectTriangle(Gr,Bs,Hr,!1,Fs);if(o===null&&(Vr(Bs.set(-.5,.5,0),Qi,a,Ki,s,r),fl.set(0,1),o=t.ray.intersectTriangle(Gr,Hr,Bs,!1,Fs),o===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:Zn.getInterpolation(Fs,Gr,Bs,Hr,hh,fl,uh,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Vr(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Os.x=r*ji.x-s*ji.y,Os.y=s*ji.x+r*ji.y):Os.copy(ji),i.copy(t),i.x+=Os.x,i.y+=Os.y,i.applyMatrix4(lu)}var Yn=new D,pl=new D,Wr=new D,Xr=new D,va=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pl.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=Xr.dot(this.direction),l=-Xr.dot(Wr),c=Xr.lengthSq(),u=Math.abs(1-a*a),m,f,p,_;if(u>0)if(m=a*l-o,f=a*o-l,_=r*u,m>=0)if(f>=-_)if(f<=_){let x=1/u;m*=x,f*=x,p=m*(m+a*f+2*o)+f*(a*m+f+2*l)+c}else f=r,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*l)+c;else f=-r,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*l)+c;else f<=-_?(m=Math.max(0,-(-a*r+o)),f=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+f*(f+2*l)+c):f<=_?(m=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(m=Math.max(0,-(a*r+o)),f=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+f*(f+2*l)+c);else f=a>0?-r:r,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(pl).addScaledVector(Wr,f),p}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-f.z)*m,l=(t.max.z-f.z)*m):(o=(t.max.z-f.z)*m,l=(t.min.z-f.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=t.x-a.x,f=t.y-a.y,p=t.z-a.z,_=e.x-a.x,x=e.y-a.y,d=e.z-a.z,h=n.x-a.x,v=n.y-a.y,A=n.z-a.z,M=Math.abs(l),T=Math.abs(c),w=Math.abs(u),g,b,U,P,N,B,V,C,H,q,G,nt;if(M>=T&&M>=w?(U=l,B=m,H=_,nt=h,l>=0?(g=c,b=u,P=f,N=p,V=x,C=d,q=v,G=A):(g=u,b=c,P=p,N=f,V=d,C=x,q=A,G=v)):T>=w?(U=c,B=f,H=x,nt=v,c>=0?(g=u,b=l,P=p,N=m,V=d,C=_,q=A,G=h):(g=l,b=u,P=m,N=p,V=_,C=d,q=h,G=A)):(U=u,B=p,H=d,nt=A,u>=0?(g=l,b=c,P=m,N=f,V=_,C=x,q=h,G=v):(g=c,b=l,P=f,N=m,V=x,C=_,q=v,G=h)),U===0)return null;let X=g/U,j=b/U,tt=1/U,Mt=P-X*B,Ut=N-j*B,J=V-X*H,mt=C-j*H,vt=q-X*nt,At=G-j*nt,gt=vt*mt-At*J,Bt=Mt*At-Ut*vt,me=J*Ut-mt*Mt;if(s){if(gt<0||Bt<0||me<0)return null}else if((gt<0||Bt<0||me<0)&&(gt>0||Bt>0||me>0))return null;let It=gt+Bt+me;if(It===0)return null;let Qt=tt*(gt*B+Bt*H+me*nt);return(It>0?Qt<0:Qt>0)?null:this.at(Qt/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Li=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dh=new ae,Ii=new va,qr=new hs,fh=new D,Yr=new D,Zr=new D,Jr=new D,ml=new D,$r=new D,ph=new D,Kr=new D,Pe=class extends Ie{constructor(t=new Ye,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(ml.fromBufferAttribute(m,t),a?$r.addScaledVector(ml,u):$r.addScaledVector(ml.sub(e),u))}e.add($r)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(qr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(qr,fh)===null||Ii.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(dh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let d=f[_],h=a[d.materialIndex],v=Math.max(d.start,p.start),A=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let M=v,T=A;M<T;M+=3){let w=o.getX(M),g=o.getX(M+1),b=o.getX(M+2);s=Qr(this,h,t,n,c,u,m,w,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let d=_,h=x;d<h;d+=3){let v=o.getX(d),A=o.getX(d+1),M=o.getX(d+2);s=Qr(this,a,t,n,c,u,m,v,A,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let d=f[_],h=a[d.materialIndex],v=Math.max(d.start,p.start),A=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let M=v,T=A;M<T;M+=3){let w=M,g=M+1,b=M+2;s=Qr(this,h,t,n,c,u,m,w,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let d=_,h=x;d<h;d+=3){let v=d,A=d+1,M=d+2;s=Qr(this,a,t,n,c,u,m,v,A,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function tf(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function Qr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Yr),i.getVertexPosition(l,Zr),i.getVertexPosition(c,Jr);let u=tf(i,t,e,n,Yr,Zr,Jr,ph);if(u){let m=new D;Zn.getBarycoord(ph,Yr,Zr,Jr,m),s&&(u.uv=Zn.getInterpolatedAttribute(s,o,l,c,m,new Ot)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,o,l,c,m,new Ot)),a&&(u.normal=Zn.getInterpolatedAttribute(a,o,l,c,m,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};Zn.getNormal(Yr,Zr,Jr,f.normal),u.face=f,u.barycoord=m}return u}var ya=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=we,u=we,m,f){super(null,a,o,l,c,u,s,r,m,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=new hs,ef=new Ot(.5,.5),jr=new D,mi=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],f=r[6],p=r[7],_=r[8],x=r[9],d=r[10],h=r[11],v=r[12],A=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,p-u,h-_,T-v).normalize(),s[1].setComponents(c+a,p+u,h+_,T+v).normalize(),s[2].setComponents(c+o,p+m,h+x,T+A).normalize(),s[3].setComponents(c-o,p-m,h-x,T-A).normalize(),n)s[4].setComponents(l,f,d,M).normalize(),s[5].setComponents(c-l,p-f,h-d,T-M).normalize();else if(s[4].setComponents(c-l,p-f,h-d,T-M).normalize(),e===fn)s[5].setComponents(c+l,p+f,h+d,T+M).normalize();else if(e===rs)s[5].setComponents(l,f,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=ef.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mh=new ae,Sa=class i{constructor(){this.coordinateSystem=fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];mh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new mi),n[s].setFromProjectionMatrix(mh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new mi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var er=class extends qe{constructor(t=[],e=Fi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nr=class extends qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jn=class extends qe{constructor(t,e,n=Sn,s,r,a,o=we,l=we,c,u=$n,m=1){if(u!==$n&&u!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:m};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ir=class extends jn{constructor(t,e=Sn,n=Fi,s,r,a=we,o=we,l,c=$n){let u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sr=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},gi=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(m,2));function _(x,d,h,v,A,M,T,w,g,b,U){let P=M/g,N=T/b,B=M/2,V=T/2,C=w/2,H=g+1,q=b+1,G=0,nt=0,X=new D;for(let j=0;j<q;j++){let tt=j*N-V;for(let Mt=0;Mt<H;Mt++){let Ut=Mt*P-B;X[x]=Ut*v,X[d]=tt*A,X[h]=C,c.push(X.x,X.y,X.z),X[x]=0,X[d]=0,X[h]=w>0?1:-1,u.push(X.x,X.y,X.z),m.push(Mt/g),m.push(1-j/b),G+=1}}for(let j=0;j<b;j++)for(let tt=0;tt<g;tt++){let Mt=f+tt+H*j,Ut=f+tt+H*(j+1),J=f+(tt+1)+H*(j+1),mt=f+(tt+1)+H*j;l.push(Mt,Ut,mt),l.push(Ut,J,mt),nt+=6}o.addGroup(p,nt,U),p+=nt,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rr=class i extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],f=[],p=[],_=0,x=[],d=n/2,h=0;v(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(p,2));function v(){let M=new D,T=new D,w=0,g=(e-t)/n;for(let b=0;b<=r;b++){let U=[],P=b/r,N=P*(e-t)+t;for(let B=0;B<=s;B++){let V=B/s,C=V*l+o,H=Math.sin(C),q=Math.cos(C);T.x=N*H,T.y=-P*n+d,T.z=N*q,m.push(T.x,T.y,T.z),M.set(H,g,q).normalize(),f.push(M.x,M.y,M.z),p.push(V,1-P),U.push(_++)}x.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let P=x[U][b],N=x[U+1][b],B=x[U+1][b+1],V=x[U][b+1];(t>0||U!==0)&&(u.push(P,N,V),w+=3),(e>0||U!==r-1)&&(u.push(N,B,V),w+=3)}c.addGroup(h,w,0),h+=w}function A(M){let T=_,w=new Ot,g=new D,b=0,U=M===!0?t:e,P=M===!0?1:-1;for(let B=1;B<=s;B++)m.push(0,d*P,0),f.push(0,P,0),p.push(.5,.5),_++;let N=_;for(let B=0;B<=s;B++){let C=B/s*l+o,H=Math.cos(C),q=Math.sin(C);g.x=U*q,g.y=d*P,g.z=U*H,m.push(g.x,g.y,g.z),f.push(0,P,0),w.x=H*.5+.5,w.y=q*.5*P+.5,p.push(w.x,w.y),_++}for(let B=0;B<s;B++){let V=T+B,C=N+B;M===!0?u.push(C,C+1,V):u.push(C+1,C,V),b+=3}c.addGroup(h,b,M===!0?1:2),h+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ma=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ot:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new ae;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Wt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function ic(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,m){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+m)+(l-o)/m;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var gh=new D,_h=new D,gl=new ic,_l=new ic,xl=new ic,ar=class extends Ma{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(_h.subVectors(s[0],s[1]).add(s[0]),c=_h);let m=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(gh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=gh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(m),p),x=Math.pow(m.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),d<1e-4&&(d=x),gl.initNonuniformCatmullRom(c.x,m.x,f.x,u.x,_,x,d),_l.initNonuniformCatmullRom(c.y,m.y,f.y,u.y,_,x,d),xl.initNonuniformCatmullRom(c.z,m.z,f.z,u.z,_,x,d)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(c.x,m.x,f.x,u.x,this.tension),_l.initCatmullRom(c.y,m.y,f.y,u.y,this.tension),xl.initCatmullRom(c.z,m.z,f.z,u.z,this.tension));return n.set(gl.calc(l),_l.calc(l),xl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var _i=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=t/o,f=e/l,p=[],_=[],x=[],d=[];for(let h=0;h<u;h++){let v=h*f-a;for(let A=0;A<c;A++){let M=A*m-r;_.push(M,-v,0),x.push(0,0,1),d.push(A/o),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){let A=v+c*h,M=v+c*(h+1),T=v+1+c*(h+1),w=v+1+c*h;p.push(A,M,w),p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ds=class i extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],m=new D,f=new D,p=[],_=[],x=[],d=[];for(let h=0;h<=n;h++){let v=[],A=h/n,M=a+A*o,T=t*Math.cos(M),w=Math.sqrt(t*t-T*T),g=0;h===0&&a===0?g=.5/e:h===n&&l===Math.PI&&(g=-.5/e);for(let b=0;b<=e;b++){let U=b/e,P=s+U*r;m.x=-w*Math.cos(P),m.y=T,m.z=w*Math.sin(P),_.push(m.x,m.y,m.z),f.copy(m).normalize(),x.push(f.x,f.y,f.z),d.push(U+g,1-A),v.push(c++)}u.push(v)}for(let h=0;h<n;h++)for(let v=0;v<e;v++){let A=u[h][v+1],M=u[h][v],T=u[h+1][v],w=u[h+1][v+1];(h!==0||a>0)&&p.push(A,M,w),(h!==n-1||l<Math.PI)&&p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fs=class i extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],m=[],f=new D,p=new D,_=new D;for(let x=0;x<=n;x++){let d=a+x/n*o;for(let h=0;h<=s;h++){let v=h/s*r;p.x=(t+e*Math.cos(d))*Math.cos(v),p.y=(t+e*Math.cos(d))*Math.sin(v),p.z=e*Math.sin(d),c.push(p.x,p.y,p.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),_.subVectors(p,f).normalize(),u.push(_.x,_.y,_.z),m.push(h/s),m.push(x/n)}}for(let x=1;x<=n;x++)for(let d=1;d<=s;d++){let h=(s+1)*x+d-1,v=(s+1)*(x-1)+d-1,A=(s+1)*(x-1)+d,M=(s+1)*x+d;l.push(h,v,M),l.push(v,A,M)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(xh(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(xh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Bi(i[e]);for(let s in n)t[s]=n[s]}return t}function xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var cu={clone:Bi,merge:ke},sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ba=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ps=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ea=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ta=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ts(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ta(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Aa=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:r=t,o=2*e-n;break;case bl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ml:a=t,l=2*n-e;break;case bl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),x=_*_,d=x*_,h=-f*d+2*f*x-f*_,v=(1+f)*d+(-1.5-2*f)*x+(-.5+f)*_+1,A=(-1-p)*d+(1.5+p)*x+.5*_,M=p*d-p*x;for(let T=0;T!==o;++T)r[T]=h*a[u+T]+v*a[c+T]+A*a[l+T]+M*a[m+T];return r}},wa=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),m=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*m+a[l+f]*u;return r}},Ra=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ca=class extends xi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let _=(n-e)/(s-e),x=1-_;for(let d=0;d!==o;++d)r[d]=a[c+d]*x+a[l+d]*_;return r}let f=o*2,p=t-1;for(let _=0;_!==o;++_){let x=a[c+_],d=a[l+_],h=p*f+_*2,v=m[h],A=m[h+1],M=t*f+_*2,T=u[M],w=u[M+1],g=of(n,e,v,T,s);r[_]=hu(g,x,A,w,d)}return r}};function hu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function af(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function of(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=hu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=af(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ts(e,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ts(t.times,Array),values:ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ta(t.settings)&&(n.settings={inTangents:ts(t.settings.inTangents,Array),outTangents:ts(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Hs:e=this.InterpolantFactoryMethodDiscrete;break;case pa:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break;case yl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return ia;case this.InterpolantFactoryMethodBezier:return yl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ta(this.settings)&&(vh(this.settings.inTangents,t),vh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ta(this.settings)&&(yh(this.settings.inTangents,t),yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Md(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,f=m-n,p=m+n;for(let _=0;_!==n;++_){let x=e[m+_];if(x!==e[f+_]||x!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[m+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ta(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=pa;var vi=class extends an{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Hs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="color";var Pa=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Pa.prototype.ValueTypeName="number";var La=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},or=class extends an{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}};or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends an{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Hs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="vector";var Da=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,f=c.length;m<f;m+=2){let p=c[m],_=c[m+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uu=new Da,Ua=class{constructor(t){this.manager=t!==void 0?t:uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ua.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends Ie{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},cr=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vl=new ae,Sh=new D,Mh=new D,Fa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===rs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ea=new D,na=new Dn,Pn=new D,hr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ea,na,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,Pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ea,na,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new D,bh=new Ot,Eh=new Ot,We=class extends hr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Eh),e.subVectors(Eh,bh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ur=class extends hr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},El=class extends Fa{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new El}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var es=-90,ns=1,ms=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new We(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new We(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new We(es,ns,t,e);o.layers=this.layers,this.add(o);let l=new We(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new We(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(m,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Oa=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var rc="\\[\\]\\.:\\/",lf=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",cf="[^"+rc.replace("\\.","")+"]",hf=/((?:WC+[\/:])*)/.source.replace("WC",ac),uf=/(WCOD+)?/.source.replace("WCOD",cf),df=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),pf=new RegExp("^"+hf+uf+df+ff+"$"),mf=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lf,"")}static parseTrackName(t){let e=pf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Tl;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wg=new Float32Array(1);var Al=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function oc(i,t,e,n){let s=gf(n);switch(e){case Xl:return i*t;case Yl:return i*t/s.components*s.byteLength;case Wa:return i*t/s.components*s.byteLength;case Mi:return i*t*2/s.components*s.byteLength;case Xa:return i*t*2/s.components*s.byteLength;case ql:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case qa:return i*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Ja:return Math.max(i,8)*Math.max(t,8)/2;case Ka:case Qa:case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:case vr:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xo:case vo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case So:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yr:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gf(i){switch(i){case Qe:case Gl:return{byteLength:1,components:1};case vs:case Hl:case bn:return{byteLength:2,components:1};case Ha:case Va:return{byteLength:2,components:4};case Sn:case Ga:case Mn:return{byteLength:4,components:1};case Vl:case Wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Nu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,m=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<m.length;p++){let _=m[f],x=m[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,m[f]=x)}m.length=f+1;for(let p=0,_=m.length;p<_;p++){let x=m[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_p=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:vf,alphahash_pars_fragment:yf,alphamap_fragment:Sf,alphamap_pars_fragment:Mf,alphatest_fragment:bf,alphatest_pars_fragment:Ef,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:wf,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:If,bsdfs:Pf,iridescence_fragment:Lf,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:zf,color_pars_vertex:kf,color_vertex:Gf,common:Hf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:$f,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Qf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:hp,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:ap,lights_lambert_fragment:op,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:_p,lights_fragment_maps:xp,lights_fragment_end:vp,lightprobes_pars_fragment:yp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:wp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Pp,morphcolor_vertex:Lp,morphnormal_vertex:Np,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:kp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:qp,packing:Yp,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:$p,dithering_pars_fragment:Kp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:e0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:a0,skinnormal_vertex:o0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:_0,background_vert:x0,background_frag:v0,backgroundCube_vert:y0,backgroundCube_frag:S0,cube_vert:M0,cube_frag:b0,depth_vert:E0,depth_frag:T0,distance_vert:A0,distance_frag:w0,equirect_vert:R0,equirect_frag:C0,linedashed_vert:I0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:N0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:F0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:z0,meshphong_vert:k0,meshphong_frag:G0,meshphysical_vert:H0,meshphysical_frag:V0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:$0,sprite_frag:K0},pt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Bn={basic:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ke([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ke([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ke([pt.points,pt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ke([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ke([pt.common,pt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ke([pt.sprite,pt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:ke([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:ke([pt.lights,pt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Bn.physical={uniforms:ke([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ao={r:0,b:0,g:0},Q0=new ae,Du=new Nt;Du.set(-1,0,0,0,1,0,0,0,1);function j0(i,t,e,n,s,r){let a=new zt(0),o=s===!0?0:1,l,c,u=null,m=0,f=null;function p(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let M=v.backgroundBlurriness>0;A=t.get(A,M)}return A}function _(v){let A=!1,M=p(v);M===null?d(a,o):M&&M.isColor&&(d(M,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,A){let M=p(A);M&&M.isCubeTexture?(c===void 0&&(c=new Pe(new gi(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Bi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Du),c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==Kt,(u!==M||m!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,m=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pe(new _i(2,2),new Un({name:"BackgroundMaterial",uniforms:Bi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==Kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||m!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,m=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,A){v.getRGB(Ao,sc(i)),e.buffers.color.setClear(Ao.r,Ao.g,Ao.b,A,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:_,addToRenderList:x,dispose:h}}function tm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(N,B,V,C,H){let q=!1,G=m(N,C,V,B);r!==G&&(r=G,c(r.object)),q=p(N,C,V,H),q&&_(N,C,V,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(N,B,V,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function m(N,B,V,C){let H=C.wireframe===!0,q=n[B.id];q===void 0&&(q={},n[B.id]=q);let G=N.isInstancedMesh===!0?N.id:0,nt=q[G];nt===void 0&&(nt={},q[G]=nt);let X=nt[V.id];X===void 0&&(X={},nt[V.id]=X);let j=X[H];return j===void 0&&(j=f(l()),X[H]=j),j}function f(N){let B=[],V=[],C=[];for(let H=0;H<e;H++)B[H]=0,V[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:C,object:N,attributes:{},index:null}}function p(N,B,V,C){let H=r.attributes,q=B.attributes,G=0,nt=V.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=H[X],Mt=q[X];if(Mt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function _(N,B,V,C){let H={},q=B.attributes,G=0,nt=V.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=q[X];tt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),H[X]=Mt,G++}r.attributes=H,r.attributesNum=G,r.index=C}function x(){let N=r.newAttributes;for(let B=0,V=N.length;B<V;B++)N[B]=0}function d(N){h(N,0)}function h(N,B){let V=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;V[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),H[N]!==B&&(i.vertexAttribDivisor(N,B),H[N]=B)}function v(){let N=r.newAttributes,B=r.enabledAttributes;for(let V=0,C=B.length;V<C;V++)B[V]!==N[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function A(N,B,V,C,H,q,G){G===!0?i.vertexAttribIPointer(N,B,V,H,q):i.vertexAttribPointer(N,B,V,C,H,q)}function M(N,B,V,C){x();let H=C.attributes,q=V.getAttributes(),G=B.defaultAttributeValues;for(let nt in q){let X=q[nt];if(X.location>=0){let j=H[nt];if(j===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let tt=j.normalized,Mt=j.itemSize,Ut=t.get(j);if(Ut===void 0)continue;let J=Ut.buffer,mt=Ut.type,vt=Ut.bytesPerElement,At=mt===i.INT||mt===i.UNSIGNED_INT||j.gpuType===Ga;if(j.isInterleavedBufferAttribute){let gt=j.data,Bt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,me=j.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let It=0;It<X.locationSize;It++)h(X.location+It,gt.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let It=0;It<X.locationSize;It++)d(X.location+It);i.bindBuffer(i.ARRAY_BUFFER,J);for(let It=0;It<X.locationSize;It++)A(X.location+It,Mt/X.locationSize,mt,tt,Bt*vt,(me+Mt/X.locationSize*It)*vt,At)}else{if(j.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)h(X.location+gt,j.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let gt=0;gt<X.locationSize;gt++)d(X.location+gt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let gt=0;gt<X.locationSize;gt++)A(X.location+gt,Mt/X.locationSize,mt,tt,Mt*vt,Mt/X.locationSize*gt*vt,At)}}else if(G!==void 0){let tt=G[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(X.location,tt);break;case 3:i.vertexAttrib3fv(X.location,tt);break;case 4:i.vertexAttrib4fv(X.location,tt);break;default:i.vertexAttrib1fv(X.location,tt)}}}}v()}function T(){U();for(let N in n){let B=n[N];for(let V in B){let C=B[V];for(let H in C){let q=C[H];for(let G in q)u(q[G].object),delete q[G];delete C[H]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let B=n[N.id];for(let V in B){let C=B[V];for(let H in C){let q=C[H];for(let G in q)u(q[G].object),delete q[G];delete C[H]}}delete n[N.id]}function g(N){for(let B in n){let V=n[B];for(let C in V){let H=V[C];if(H[N.id]===void 0)continue;let q=H[N.id];for(let G in q)u(q[G].object),delete q[G];delete H[N.id]}}}function b(N){for(let B in n){let V=n[B],C=N.isInstancedMesh===!0?N.id:0,H=V[C];if(H!==void 0){for(let q in H){let G=H[q];for(let nt in G)u(G[nt].object),delete G[nt];delete H[q]}delete V[C],Object.keys(V).length===0&&delete n[B]}}}function U(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:d,disableUnusedAttributes:v}}function em(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==En&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Qe&&g!==Mn&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Rt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&Rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:M,maxSamples:T,samples:w}}function im(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){let p=m.length!==0||f||n!==0||s;return s=f,n=m.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,f){e=u(m,f,0)},this.setState=function(m,f,p){let _=m.clippingPlanes,x=m.clipIntersection,d=m.clipShadows,h=i.get(m);if(!s||_===null||_.length===0||r&&!d)r?u(null):c();else{let v=r?0:n,A=v*4,M=h.clippingState||null;l.value=M,M=u(_,f,A,p);for(let T=0;T!==A;++T)M[T]=e[T];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,f,p,_){let x=m!==null?m.length:0,d=null;if(x!==0){if(d=l.value,_!==!0||d===null){let h=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<h)&&(d=new Float32Array(h));for(let A=0,M=p;A!==x;++A,M+=4)a.copy(m[A]).applyMatrix4(v,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}var br=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gi(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Di});r.uniforms.tEquirect.value=e;let a=new Pe(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=Xe),new ms(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},du=256,sm=3,rm=20,Uu=256,Fu=16,am=3,om=new D,lm=new zt,Ro=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ms(1,10,null),this._boxMesh=new Pe(new gi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=om}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(lm));let d=new ms(n,s,u);return d.position.copy(o),d.update(l,t),l.autoClear=m,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=_,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(du,tc(t))}_fromTexture(t,e){t.mapping===Fi||t.mapping===xs?this._setSize(t.image.length===0?du:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=fu(t,!1,!1),n=Math.log2(t)-sm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Fi||t.mapping===xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=cm(),this._integrationMaterial=hm());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Fu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-am)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Uu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=um());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function fu(i,t,e){return new br(i,{minFilter:ti,generateMipmaps:t,type:bn,colorSpace:Vs,depthBuffer:e})}function Er(i,t,e){return new Un({name:i,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Ze,blending:Di,depthTest:!1,depthWrite:!1})}function cm(){return Er("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Uu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hm(){return Er("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function um(){return Er("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function pu(){return Er("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function mu(){return Er("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Ba||p===za)if(t.has(f)){let _=t.get(f).texture;return o(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let x=new br(_.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,_=p===Ba||p===za,x=p===Fi||p===xs;if(_||x){let d=e.get(f),h=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return n===null&&(n=new Ro(i)),d=_?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),d.texture;if(d!==void 0)return d.texture;{let v=f.image;return _&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Ro(i)),d=_?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),f.addEventListener("dispose",u),d.texture):null}}}return f}function o(f,p){return p===Ba?f.mapping=Fi:p===za&&(f.mapping=xs),f}function l(f){let p=0,_=6;for(let x=0;x<_;x++)f[x]!==void 0&&p++;return p===_}function c(f){let p=f.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function pm(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let d in _.attributes)t.remove(_.attributes[d]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let x=r.get(_);x&&(t.remove(x),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(_){let x=_.attributes;for(let d in x)t.update(x[d],i.ARRAY_BUFFER)}function m(_){let x=_.index,d=_.attributes.position,h=0;if(d===void 0)return;let v=x!==null?x.array.length:d.array.length/3-1,A=d.count>=65535?Qs:Ks,M=new A(Math.ceil(v/3)*6,1),T=M.array;if(x!==null){let g=x.array;h=x.version;for(let b=0,U=0;b<v;b+=3){let P=g[b+0],N=g[b+1],B=g[b+2];T[U++]=P,T[U++]=N,T[U++]=N,T[U++]=B,T[U++]=B,T[U++]=P}}else{h=d.version;for(let g=0,b=0;g<v;g+=3){let U=g+0,P=g+1,N=g+2;T[b++]=U,T[b++]=P,T[b++]=P,T[b++]=N,T[b++]=N,T[b++]=U}}M.version=h;let w=r.get(_);w&&t.remove(w),r.set(_,M)}function f(_){let x=r.get(_);if(x){let d=_.index;d!==null&&x.version<d.version&&m(_)}else m(_);return r.get(_)}function p(){for(let _ in s){let x=s[_].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:p}}function mm(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,f){i.drawElements(n,f,r,m*a),e.update(f,n,1)}function c(m,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,m*a,p),e.update(f,n,p))}function u(m,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,m,0,p);let x=0;for(let d=0;d<p;d++)x+=f[d];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function gm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _m(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==m){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),x===!0&&(A=3);let M=o.attributes.position.count*A,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*m),g=new Ys(w,M,T,m);g.type=Mn,g.needsUpdate=!0;let b=A*4;for(let P=0;P<m;P++){let N=d[P],B=h[P],V=v[P],C=M*T*4*P;for(let H=0;H<N.count;H++){let q=H*b;p===!0&&(s.fromBufferAttribute(N,H),w[C+q+0]=s.x,w[C+q+1]=s.y,w[C+q+2]=s.z,w[C+q+3]=0),_===!0&&(s.fromBufferAttribute(B,H),w[C+q+4]=s.x,w[C+q+5]=s.y,w[C+q+6]=s.z,w[C+q+7]=0),x===!0&&(s.fromBufferAttribute(V,H),w[C+q+8]=s.x,w[C+q+9]=s.y,w[C+q+10]=s.z,w[C+q+11]=V.itemSize===4?s.w:1)}}f={count:m,texture:g,size:new Ot(M,T)},n.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function xm(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,f=t.get(c,m);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var vm={[Dl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[fr]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[zl]:"NEUTRAL_TONE_MAPPING",[Ol]:"CUSTOM_TONE_MAPPING"};function ym(i,t,e,n,s,r){let a=new rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ye;u.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new he([0,2,0,0,2,0],2));let m=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Pe(u,m),p=new ur(-1,1,1,-1,0,1),_=null,x=null,d=!1,h,v=null,A=[],M=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let g=0;g<A.length;g++){let b=A[g];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){A=T,M=A.length>0&&A[0].isRenderPass===!0;let w=a.width,g=a.height;A.length>0&&o===null&&(o=new rn(w,g,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(w,g,{type:bn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&A.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new jn(w,g),r===!0&&(c.format=ei,c.type=Oi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<A.length;U++){let P=A[U];P.setSize&&P.setSize(w,g),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,w){if(d||T.toneMapping===Fn&&A.length===0)return!1;if(v=w,w!==null){let g=w.width,b=w.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return M===!1&&T.setRenderTarget(a),h=T.toneMapping,T.toneMapping=Fn,!0},this.hasRenderPass=function(){return M},this.end=function(T,w){T.toneMapping=h,d=!0;let g=a,b=o;for(let U=0;U<A.length;U++){let P=A[U];P.enabled!==!1&&(P.render(T,b,g,w),P.needsSwap!==!1&&(g=b,b=b===o?l:o))}if(_!==T.outputColorSpace||x!==T.toneMapping){_=T.outputColorSpace,x=T.toneMapping,m.defines={},Zt.getTransfer(_)===Kt&&(m.defines.SRGB_TRANSFER="");let U=vm[x];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(v),T.render(f,p),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),m.dispose()}}var Ou=new qe,Bu=new jn(1,1),zu=new ir(1),ku=new Ys,Gu=new _a,Hu=new er,gu=[],_u=[],xu=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Me(e,n)}}function Am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),Me(e,n)}}function wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;xu.set(n),i.uniformMatrix4fv(this.addr,!1,xu),Me(e,n)}}function Rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Po(i){return i.version===0&&(i.compareFunction=$l,i.needsUpdate=!0),i}function Fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Po(Bu):r=Ou,e.setTexture2D(t||r,s)}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gu,s)}function Bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Po(zu):r=Hu,e.setTextureCube(t||r,s)}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function km(i){switch(i){case 5126:return Sm;case 35664:return Mm;case 35665:return bm;case 35666:return Em;case 35674:return Tm;case 35675:return Am;case 35676:return wm;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Im;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Nm;case 36295:return Dm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Hm(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Xm(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qm(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zm(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function $m(i,t){i.uniform3iv(this.addr,t)}function Km(i,t){i.uniform4iv(this.addr,t)}function Qm(i,t){i.uniform1uiv(this.addr,t)}function jm(i,t){i.uniform2uiv(this.addr,t)}function t1(i,t){i.uniform3uiv(this.addr,t)}function e1(i,t){i.uniform4uiv(this.addr,t)}function n1(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Po(Bu):a=Ou;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function i1(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gu,r[a])}function s1(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Po(zu):a=Hu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function r1(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ku,r[a])}function a1(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return jm;case 36295:return t1;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return r1}}var hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}},uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a1(e.type)}},dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},lc=/(\w+)(\])?(\[|\.)?/g;function Su(i,t){i.seq.push(t),i.map[t.id]=t}function o1(i,t,e){let n=i.name,s=n.length;for(lc.lastIndex=0;;){let r=lc.exec(n),a=lc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Su(e,c===void 0?new hc(o,i,t):new uc(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new dc(o),Su(e,m)),e=m}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);o1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Mu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var l1=37297,c1=0;function h1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var bu=new Nt;function u1(i){Zt._getMatrix(bu,Zt.workingColorSpace,i);let t=`mat3( ${bu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Ws:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+h1(i.getShaderSource(t),o)}else return r}function d1(i,t){let e=u1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var f1={[Dl]:"Linear",[Ul]:"Reinhard",[Fl]:"Cineon",[fr]:"ACESFilmic",[Bl]:"AgX",[zl]:"Neutral",[Ol]:"Custom"};function p1(i,t){let e=f1[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wo=new D;function m1(){Zt.getLuminanceCoefficients(wo);let i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function _1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function Tu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Au(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(v1,y1)}function y1(i,t){let e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return fc(e)}var S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(S1,M1)}function M1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var b1={[Ni]:"SHADOWMAP_TYPE_PCF",[gs]:"SHADOWMAP_TYPE_VSM"};function E1(i){return b1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T1={[xs]:"ENVMAP_MODE_REFRACTION"};function A1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var w1={[Nl]:"ENVMAP_BLENDING_MULTIPLY",[qh]:"ENVMAP_BLENDING_MIX",[Yh]:"ENVMAP_BLENDING_ADD"};function R1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":w1[i.combine]||"ENVMAP_BLENDING_NONE"}function C1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=E1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=A1(e),m=R1(e),f=g1(e),p=_1(r),_=s.createProgram(),x,d,h=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mr).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Mr).join(`
`),d.length>0&&(d+=`
`)):(x=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),d=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Fn?p1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,d1("linearToOutputTexel",e.outputColorSpace),m1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=fc(a),a=Tu(a,e),a=Au(a,e),o=fc(o),o=Tu(o,e),o=Au(o,e),a=wu(a),o=wu(o),e.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=h+x+a,A=h+d+o,M=Mu(s,s.VERTEX_SHADER,v),T=Mu(s,s.FRAGMENT_SHADER,A);s.attachShader(_,M),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(T)||"",C=N.trim(),H=B.trim(),q=V.trim(),G=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,T);else{let X=Eu(s,M,"vertex"),j=Eu(s,T,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+X+`
`+j)}else C!==""?Rt("WebGLProgram: Program Info Log:",C):(H===""||q==="")&&(nt=!1);nt&&(P.diagnostics={runnable:G,programLog:C,vertexShader:{log:H,prefix:x},fragmentShader:{log:q,prefix:d}})}s.deleteShader(M),s.deleteShader(T),g=new Ss(s,_),b=x1(s,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,l1)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var I1=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mc(t),e.set(t,n)),n}},mc=class{constructor(t){this.id=I1++,this.code=t,this.usedTimes=0}};function P1(i){return i===Mi||i===vr||i===yr}function L1(i,t,e,n,s,r){let a=new Zs,o=new pc,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,b,U,P,N,B){let V=P.fog,C=N.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=t.get(g.envMap||H,q),nt=f[g.type],X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&Rt("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let j=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=j!==void 0?j.length:0,Mt=0;C.morphAttributes.position!==void 0&&(Mt=1),C.morphAttributes.normal!==void 0&&(Mt=2),C.morphAttributes.color!==void 0&&(Mt=3);let Ut,J,mt,vt;if(nt){let ft=Bn[nt];Ut=ft.vertexShader,J=ft.fragmentShader}else{Ut=g.vertexShader,J=g.fragmentShader;let ft=o.getVertexShaderStage(g),jt=o.getFragmentShaderStage(g);o.update(g,ft,jt),mt=ft.id,vt=jt.id}let At=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,It=!!g.map,Qt=!!g.matcap,ee=!!G,Xt=ee&&G.isPMREMTexture===!0,Re=!!g.aoMap,ve=!!g.lightMap,Ke=!!g.bumpMap&&g.wireframe===!1,de=!!g.normalMap,In=!!g.displacementMap,be=!!g.emissiveMap,ln=!!g.metalnessMap,cn=!!g.roughnessMap,hn=g.anisotropy>0,L=g.clearcoat>0,un=g.diffuseRoughness>0,le=g.dispersion>0,ce=g.retroreflectivity>0,dt=g.iridescence>0,ye=g.sheen>0,wt=g.transmission>0,Dt=hn&&!!g.anisotropyMap,E=L&&!!g.clearcoatMap,y=L&&!!g.clearcoatNormalMap,O=L&&!!g.clearcoatRoughnessMap,et=un&&!!g.diffuseRoughnessMap,Q=dt&&!!g.iridescenceMap,rt=dt&&!!g.iridescenceThicknessMap,ht=ye&&!!g.sheenColorMap,Y=ye&&!!g.sheenRoughnessMap,Z=!!g.specularMap,ot=!!g.specularColorMap,R=!!g.specularIntensityMap,$=wt&&!!g.transmissionMap,W=wt&&!!g.thicknessMap,lt=!!g.gradientMap,st=!!g.alphaMap,at=g.alphaTest>0,Et=!!g.alphaHash,Gt=!!g.extensions,it=Fn;g.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(it=i.toneMapping);let Tt=Xt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,kt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Ut,fragmentShader:J,defines:g.defines,customVertexShaderID:mt,customFragmentShaderID:vt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:It,matcap:Qt,envMap:ee,envMapMode:ee&&G.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?Tt.length-1:null,envMapSize:Xt?Tt[0].width:null,aoMap:Re,lightMap:ve,bumpMap:Ke,normalMap:de,displacementMap:In,emissiveMap:be,normalMapObjectSpace:de&&g.normalMapType===$h,normalMapTangentSpace:de&&g.normalMapType===Eo,packedNormalMap:de&&g.normalMapType===Eo&&P1(g.normalMap.format),metalnessMap:ln,roughnessMap:cn,anisotropy:hn,anisotropyMap:Dt,clearcoat:L,clearcoatMap:E,clearcoatNormalMap:y,clearcoatRoughnessMap:O,diffuseRoughness:un,diffuseRoughnessMap:et,dispersion:le,retroreflection:ce,iridescence:dt,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:ye,sheenColorMap:ht,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ot,specularIntensityMap:R,transmission:wt,transmissionMap:$,thicknessMap:W,gradientMap:lt,opaque:g.transparent===!1&&g.blending===_s&&g.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Et,combine:g.combine,mapUv:It&&p(g.map.channel),aoMapUv:Re&&p(g.aoMap.channel),lightMapUv:ve&&p(g.lightMap.channel),bumpMapUv:Ke&&p(g.bumpMap.channel),normalMapUv:de&&p(g.normalMap.channel),displacementMapUv:In&&p(g.displacementMap.channel),emissiveMapUv:be&&p(g.emissiveMap.channel),metalnessMapUv:ln&&p(g.metalnessMap.channel),roughnessMapUv:cn&&p(g.roughnessMap.channel),anisotropyMapUv:Dt&&p(g.anisotropyMap.channel),clearcoatMapUv:E&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&p(g.sheenRoughnessMap.channel),specularMapUv:Z&&p(g.specularMap.channel),specularColorMapUv:ot&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:$&&p(g.transmissionMap.channel),thicknessMapUv:W&&p(g.thicknessMap.channel),alphaMapUv:st&&p(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(de||hn),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(It||st),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&de===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(ft=>ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:It&&g.map.isVideoTexture===!0&&Zt.getTransfer(g.map.colorSpace)===Kt,decodeVideoTextureEmissive:be&&g.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(g.emissiveMap.colorSpace)===Kt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pn,flipSided:g.side===Ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Gt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&g.extensions.multiDraw===!0||me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function x(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)b.push(U),b.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(d(b,g),h(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function h(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let b=f[g.type],U;if(b){let P=Bn[b];U=cu.clone(P.uniforms)}else U=g.uniforms;return U}function A(g,b){let U=u.get(b);return U!==void 0?++U.usedTimes:(U=new C1(i,b,g,s),c.push(U),u.set(b,U)),U}function M(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:v,acquireProgram:A,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function N1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Iu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,x,d,h){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:d,group:h},i[t]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=_,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=d,v.group=h),t++,v}function l(f,p,_,x,d,h,v){v.reversedDepth===!0&&(d=-d);let A=o(f,p,_,x,d,h);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function c(f,p,_,x,d,h){let v=o(f,p,_,x,d,h);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,p){e.length>1&&e.sort(f||D1),n.length>1&&n.sort(p||Cu),s.length>1&&s.sort(p||Cu)}function m(){for(let f=t,p=i.length;f<p;f++){let _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function U1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Iu,i.set(n,[a])):s>=r.length?(a=new Iu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function F1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function O1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var B1=0;function z1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k1(i){let t=new F1,e=O1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ae,a=new ae;function o(c){let u=0,m=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,_=0,x=0,d=0,h=0,v=0,A=0,M=0,T=0,w=0,g=0,b=0,U=0,P=0;c.sort(z1);for(let B=0,V=c.length;B<V;B++){let C=c[B],H=C.color,q=C.intensity,G=C.distance,nt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Mi?nt=C.shadow.map.texture:nt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=H.r*q,m+=H.g*q,f+=H.b*q;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],q);P++}else if(C.isSunLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[_]=tt,n.sunShadowMap[_]=nt;let Mt=j.getViewportCount();for(let Ut=0;Ut<Mt;Ut++)n.sunShadowMatrix[x+Ut]=j.getMatrix(Ut),n.sunShadowCascade[x+Ut]=j._cascadeData[Ut];x+=Mt,_++}n.sun[p]=X,p++}else if(C.isDirectionalLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[d]=tt,n.directionalShadowMap[d]=nt,n.directionalShadowMatrix[d]=C.shadow.matrix,T++}n.directional[d]=X,d++}else if(C.isSpotLight){let X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(H).multiplyScalar(q),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[v]=X;let j=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,j.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[v]=j.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=nt,g++}v++}else if(C.isRectAreaLight){let X=t.get(C);X.color.copy(H).multiplyScalar(q),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=X,A++}else if(C.isPointLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[h]=tt,n.pointShadowMap[h]=nt,n.pointShadowMatrix[h]=C.shadow.matrix,w++}n.point[h]=X,h++}else if(C.isHemisphereLight){let X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(q),X.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[M]=X,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=f;let N=n.hash;(N.sunLength!==p||N.directionalLength!==d||N.pointLength!==h||N.spotLength!==v||N.rectAreaLength!==A||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==g||N.numSpotMaps!==b||N.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=d,n.spot.length=v,n.rectArea.length=A,n.point.length=h,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,N.sunLength=p,N.directionalLength=d,N.pointLength=h,N.spotLength=v,N.rectAreaLength=A,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=g,N.numSpotMaps=b,N.numLightProbes=P,n.version=B1++)}function l(c,u){let m=0,f=0,p=0,_=0,x=0,d=0,h=u.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let M=c[v];if(M.isSunLight){let T=n.sun[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),m++}else if(M.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),f++}else if(M.isSpotLight){let T=n.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),_++}else if(M.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),a.identity(),r.copy(M.matrixWorld),r.premultiply(h),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let T=n.point[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),p++}else if(M.isHemisphereLight){let T=n.hemi[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),d++}}}return{setup:o,setupView:l,state:n}}function Pu(i){let t=new k1(i),e=[],n=[],s=[];function r(m){u.camera=m,e.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){n.push(m)}function l(){t.setup(e),s.sort((m,f)=>m.priority-f.priority||m.id-f.id)}function c(m){t.setupView(e,m)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function G1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Pu(i),t.set(s,[o])):r>=a.length?(o=new Pu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,W1=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],X1=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Lu=new ae,Sr=new D,cc=new D;function q1(i,t,e){let n=new mi,s=new Ot,r=new Ot,a=new ue,o=new Ea,l=new Ta,c={},u=e.maxTextureSize,m={[Si]:Ze,[Ze]:Si,[pn]:pn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:H1,fragmentShader:V1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ye;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ni;let h=this.type;this.render=function(w,g,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===wh&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ni);let U=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Di),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=h!==this.type;V&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=w.length;C<H;C++){let q=w[C],G=q.shadow;if(G===void 0){Rt("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();s.multiply(nt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===gs){if(q.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new rn(s.x,s.y,{format:Mi,type:bn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new jn(s.x,s.y,Mn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=$n,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=we,G.map.depthTexture.magFilter=we}else q.isPointLight?(G.map=new br(s.x),G.map.depthTexture=new ir(s.x,Sn)):(G.map=new rn(s.x,s.y),G.map.depthTexture=new jn(s.x,s.y,Sn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=$n,this.type===Ni?(G.map.depthTexture.compareFunction=X?Jl:Zl,G.map.depthTexture.minFilter=Xe,G.map.depthTexture.magFilter=Xe):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=we,G.map.depthTexture.magFilter=we);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,b);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Mt=0;Mt<j;Mt++){let Ut=G.getCamera(Mt);if(q.isPointLight){let J=G.camera,mt=G.matrix,vt=q.distance||J.far;vt!==J.far&&(J.far=vt,J.updateProjectionMatrix()),Sr.setFromMatrixPosition(q.matrixWorld),J.position.copy(Sr),cc.copy(J.position),cc.add(W1[Mt]),J.up.copy(X1[Mt]),J.lookAt(cc),J.updateMatrixWorld(),mt.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Lu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Lu,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(G.map),i.clear());let J=G.getViewport(Mt);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),B.viewport(a)}n=G.getFrustum(Mt),M(g,b,Ut,q,tt,this.type)}G.isPointLightShadow!==!0&&this.type===gs&&v(G,b),G.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(U,P,N)};function v(w,g){let b=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new rn(s.x,s.y,{format:Mi,type:bn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(g,null,b,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(g,null,b,p,x,null)}function A(w,g,b,U){let P=null,N=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=b.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let B=P.uuid,V=g.uuid,C=c[B];C===void 0&&(C={},c[B]=C);let H=C[V];H===void 0&&(H=P.clone(),C[V]=H,g.addEventListener("dispose",T)),P=H}if(P.visible=g.visible,P.wireframe=g.wireframe,U===gs?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:m[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=i.properties.get(P);B.light=b}return P}function M(w,g,b,U,P,N){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===gs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let C=t.update(w),H=w.material;if(Array.isArray(H)){let q=C.groups;for(let G=0,nt=q.length;G<nt;G++){let X=q[G],j=H[X.materialIndex];if(j&&j.visible){let tt=A(w,j,U,N);w.onBeforeShadow(i,w,g,b,C,tt,X),i.renderBufferDirect(b,null,C,tt,w,X),w.onAfterShadow(i,w,g,b,C,tt,X)}}}else if(H.visible){let q=A(w,H,U,N);w.onBeforeShadow(i,w,g,b,C,q,null),i.renderBufferDirect(b,null,C,q,w,null),w.onAfterShadow(i,w,g,b,C,q,null)}}let V=w.children;for(let C=0,H=V.length;C<H;C++)M(V[C],g,b,U,P,N)}function T(w){w.target.removeEventListener("dispose",T);for(let b in c){let U=c[b],P=w.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function Y1(i,t){function e(){let R=!1,$=new ue,W=null,lt=new ue(0,0,0,0);return{setMask:function(st){W!==st&&!R&&(i.colorMask(st,st,st,st),W=st)},setLocked:function(st){R=st},setClear:function(st,at,Et,Gt,it){it===!0&&(st*=Gt,at*=Gt,Et*=Gt),$.set(st,at,Et,Gt),lt.equals($)===!1&&(i.clearColor(st,at,Et,Gt),lt.copy($))},reset:function(){R=!1,W=null,lt.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,W=null,lt=null,st=null;return{setReversed:function(at){if($!==at){let Et=t.get("EXT_clip_control");at?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),$=at;let Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return $},setTest:function(at){at?gt(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(at){W!==at&&!R&&(i.depthMask(at),W=at)},setFunc:function(at){if($&&(at=au[at]),lt!==at){switch(at){case ra:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=at}},setLocked:function(at){R=at},setClear:function(at){st!==at&&(st=at,$&&(at=1-at),i.clearDepth(at))},reset:function(){R=!1,W=null,lt=null,st=null,$=!1}}}function s(){let R=!1,$=null,W=null,lt=null,st=null,at=null,Et=null,Gt=null,it=null;return{setTest:function(Tt){R||(Tt?gt(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(Tt){$!==Tt&&!R&&(i.stencilMask(Tt),$=Tt)},setFunc:function(Tt,kt,ft){(W!==Tt||lt!==kt||st!==ft)&&(i.stencilFunc(Tt,kt,ft),W=Tt,lt=kt,st=ft)},setOp:function(Tt,kt,ft){(at!==Tt||Et!==kt||Gt!==ft)&&(i.stencilOp(Tt,kt,ft),at=Tt,Et=kt,Gt=ft)},setLocked:function(Tt){R=Tt},setClear:function(Tt){it!==Tt&&(i.clearStencil(Tt),it=Tt)},reset:function(){R=!1,$=null,W=null,lt=null,st=null,at=null,Et=null,Gt=null,it=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},m={},f={},p=new WeakMap,_=[],x=null,d=!1,h=null,v=null,A=null,M=null,T=null,w=null,g=null,b=new zt(0,0,0),U=0,P=!1,N=null,B=null,V=null,C=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=nt>=2);let j=null,tt={},Mt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),J=new ue().fromArray(Mt),mt=new ue().fromArray(Ut);function vt(R,$,W,lt){let st=new Uint8Array(4),at=i.createTexture();i.bindTexture(R,at),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<W;Et++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D($+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return at}let At={};At[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(ss),Ke(!1),de(wl),gt(i.CULL_FACE),Re(Di);function gt(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Bt(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function me(R,$){return f[R]!==$?(i.bindFramebuffer(R,$),f[R]=$,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=$),!0):!1}function It(R,$){let W=_,lt=!1;if(R){W=p.get($),W===void 0&&(W=[],p.set($,W));let st=R.textures;if(W.length!==st.length||W[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Et=st.length;at<Et;at++)W[at]=i.COLOR_ATTACHMENT0+at;W.length=st.length,lt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,lt=!0);lt&&i.drawBuffers(W)}function Qt(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let ee={[Ui]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};ee[Ph]=i.MIN,ee[Lh]=i.MAX;let Xt={[Nh]:i.ZERO,[Dh]:i.ONE,[Uh]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[Ll]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(R,$,W,lt,st,at,Et,Gt,it,Tt){if(R===Di){d===!0&&(Bt(i.BLEND),d=!1);return}if(d===!1&&(gt(i.BLEND),d=!0),R!==Rh){if(R!==h||Tt!==P){if((v!==Ui||T!==Ui)&&(i.blendEquation(i.FUNC_ADD),v=Ui,T=Ui),Tt)switch(R){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",R);break}else switch(R){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",R);break}A=null,M=null,w=null,g=null,b.set(0,0,0),U=0,h=R,P=Tt}return}st=st||$,at=at||W,Et=Et||lt,($!==v||st!==T)&&(i.blendEquationSeparate(ee[$],ee[st]),v=$,T=st),(W!==A||lt!==M||at!==w||Et!==g)&&(i.blendFuncSeparate(Xt[W],Xt[lt],Xt[at],Xt[Et]),A=W,M=lt,w=at,g=Et),(Gt.equals(b)===!1||it!==U)&&(i.blendColor(Gt.r,Gt.g,Gt.b,it),b.copy(Gt),U=it),h=R,P=!1}function ve(R,$){R.side===pn?Bt(i.CULL_FACE):gt(i.CULL_FACE);let W=R.side===Ze;$&&(W=!W),Ke(W),R.blending===_s&&R.transparent===!1?Re(Di):Re(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let lt=R.stencilWrite;o.setTest(lt),lt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),be(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function de(R){R!==Th?(gt(i.CULL_FACE),R!==B&&(R===wl?i.cullFace(i.BACK):R===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),B=R}function In(R){R!==V&&(G&&i.lineWidth(R),V=R)}function be(R,$,W){R?(gt(i.POLYGON_OFFSET_FILL),(C!==$||H!==W)&&(C=$,H=W,a.getReversed()&&($=-$,W=-W),i.polygonOffset($,W))):Bt(i.POLYGON_OFFSET_FILL)}function ln(R){R?gt(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function cn(R){R===void 0&&(R=i.TEXTURE0+q-1),j!==R&&(i.activeTexture(R),j=R)}function hn(R,$,W){W===void 0&&(j===null?W=i.TEXTURE0+q-1:W=j);let lt=tt[W];lt===void 0&&(lt={type:void 0,texture:void 0},tt[W]=lt),(lt.type!==R||lt.texture!==$)&&(j!==W&&(i.activeTexture(W),j=W),i.bindTexture(R,$||At[R]),lt.type=R,lt.texture=$)}function L(){let R=tt[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function un(){try{i.compressedTexImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function le(){try{i.compressedTexImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function ce(){try{i.texSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function dt(){try{i.texSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function Dt(){try{i.texStorage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function E(){try{i.texStorage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function y(){try{i.texImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function O(){try{i.texImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function et(R){return m[R]!==void 0?m[R]:i.getParameter(R)}function Q(R,$){m[R]!==$&&(i.pixelStorei(R,$),m[R]=$)}function rt(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function ht(R){mt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),mt.copy(R))}function Y(R,$){let W=c.get($);W===void 0&&(W=new WeakMap,c.set($,W));let lt=W.get(R);lt===void 0&&(lt=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,lt,lt),W.set(R,lt))}function Z(R,$,W){let st=c.get($).get(R);l[st]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,W),l[st]=W)}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},j=null,tt={},f={},l={},p=new WeakMap,_=[],x=null,d=!1,h=null,v=null,A=null,M=null,T=null,w=null,g=null,b=new zt(0,0,0),U=0,P=!1,N=null,B=null,V=null,C=null,H=null,J.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Bt,bindFramebuffer:me,drawBuffers:It,useProgram:Qt,setBlending:Re,setMaterial:ve,setFlipSided:Ke,setCullFace:de,setLineWidth:In,setPolygonOffset:be,setScissorTest:ln,activeTexture:cn,bindTexture:hn,unbindTexture:L,compressedTexImage2D:un,compressedTexImage3D:le,texImage2D:y,texImage3D:O,pixelStorei:Q,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Dt,texStorage3D:E,texSubImage2D:ce,texSubImage3D:dt,compressedTexSubImage2D:ye,compressedTexSubImage3D:wt,scissor:rt,viewport:ht,reset:ot}}function Z1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,u=new WeakMap,m=new Set,f,p=new WeakMap,_=new Set,x=new FinalizationRegistry(E=>_.delete(E)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(E,y){return d?new OffscreenCanvas(E,y):Xs("canvas")}function v(E,y,O){let et=1,Q=Dt(E);if((Q.width>O||Q.height>O)&&(et=O/Math.max(Q.width,Q.height)),et<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let rt=Math.floor(et*Q.width),ht=Math.floor(et*Q.height);f===void 0&&(f=h(rt,ht));let Y=y?h(rt,ht):f;return Y.width=rt,Y.height=ht,Y.getContext("2d").drawImage(E,0,0,rt,ht),Rt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+rt+"x"+ht+")."),Y}else return"data"in E&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function A(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,y,O,et,Q,rt=!1){if(E!==null){if(i[E]!==void 0)return i[E];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ht;et&&(ht=t.get("EXT_texture_norm16"),ht||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&ht&&(Y=ht.R16_EXT),O===i.SHORT&&ht&&(Y=ht.R16_SNORM_EXT)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&ht&&(Y=ht.RG16_EXT),O===i.SHORT&&ht&&(Y=ht.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(O===i.UNSIGNED_SHORT&&ht&&(Y=ht.RGB16_EXT),O===i.SHORT&&ht&&(Y=ht.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){let Z=rt?Ws:Zt.getTransfer(Q);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Z===Kt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ht&&(Y=ht.RGBA16_EXT),O===i.SHORT&&ht&&(Y=ht.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(E,y){let O;return E?y===null||y===Sn||y===Oi?O=i.DEPTH24_STENCIL8:y===Mn?O=i.DEPTH32F_STENCIL8:y===vs&&(O=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Sn||y===Oi?O=i.DEPTH_COMPONENT24:y===Mn?O=i.DEPTH_COMPONENT32F:y===vs&&(O=i.DEPTH_COMPONENT16),O}function b(E,y){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==we&&E.minFilter!==Xe?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function U(E){let y=new WeakRef(E);n.get(E).__ref=y,_.add(y),x.register(E,y,y)}function P(E){let y=n.get(E).__ref;y!==void 0&&(_.delete(y),x.unregister(y))}function N(E){V(E.target)}function B(E){C(E.target)}function V(E){E.removeEventListener("dispose",N),P(E),q(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&m.delete(E)}function C(E){E.removeEventListener("dispose",B),P(E),nt(E)}function H(){for(let E of _){let y=E.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):V(y))}_.clear(),m.clear()}function q(E){let y=n.get(E);if(y.__webglInit===void 0)return;let O=E.source,et=p.get(O);if(et){let Q=et[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(E),Object.keys(et).length===0&&p.delete(O)}n.remove(E)}function G(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let O=E.source,et=p.get(O);delete et[y.__cacheKey],a.memory.textures--}function nt(E){let y=n.get(E);y.__depthDisposeCallback&&y.__depthDisposeCallback();let O=E.depthTexture;if(O&&O.renderTarget===E&&V(O),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let rt=0;rt<y.__webglFramebuffer[Q].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[Q][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let et=E.textures;for(let Q=0,rt=et.length;Q<rt;Q++){let ht=n.get(et[Q]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(et[Q])}n.remove(E)}let X=0;function j(){X=0}function tt(){return X}function Mt(E){X=E}function Ut(){let E=X;return E>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,E}function J(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.mipmapsAutoUpdate),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function mt(E,y){let O=n.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let et=E.image;if(et===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,E,y);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function vt(E,y){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){ve(O,E,y);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function At(E,y){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){ve(O,E,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function gt(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Ke(O,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let Bt={[da]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},me={[we]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},It={[Qh]:i.NEVER,[$l]:i.ALWAYS,[jh]:i.LESS,[Zl]:i.LEQUAL,[tu]:i.EQUAL,[Jl]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function Qt(E,y){if(y.type===Mn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Xe||y.magFilter===ka||y.magFilter===pr||y.magFilter===ti||y.minFilter===Xe||y.minFilter===ka||y.minFilter===pr||y.minFilter===ti)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Bt[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Bt[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Bt[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,me[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,It[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===we||y.minFilter!==pr&&y.minFilter!==ti||y.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ee(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",N),U(y));let et=y.source,Q=p.get(et);Q===void 0&&(Q={},p.set(et,Q));let rt=J(y);if(rt!==E.__cacheKey){Q[rt]===void 0&&(Q[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[rt].usedTimes++;let ht=Q[E.__cacheKey];ht!==void 0&&(Q[E.__cacheKey].usedTimes--,ht.usedTimes===0&&G(y)),E.__cacheKey=rt,E.__webglTexture=Q[rt].texture}return O}function Xt(E,y,O){return Math.floor(Math.floor(E/O)/y)}function Re(E,y,O,et){let rt=E.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,O,et,y.data);else{rt.sort((R,$)=>R.start-$.start);let ht=0;for(let R=1;R<rt.length;R++){let $=rt[ht],W=rt[R],lt=$.start+$.count,st=Xt(W.start,y.width,4),at=Xt($.start,y.width,4);W.start<=lt+1&&st===at&&Xt(W.start+W.count-1,y.width,4)===st?$.count=Math.max($.count,W.start+W.count-$.start):(++ht,rt[ht]=W)}rt.length=ht+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let R=0,$=rt.length;R<$;R++){let W=rt[R],lt=Math.floor(W.start/4),st=Math.ceil(W.count/4),at=lt%y.width,Et=Math.floor(lt/y.width),Gt=st,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(i.TEXTURE_2D,0,at,Et,Gt,it,O,et,y.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function ve(E,y,O){let et=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=i.TEXTURE_3D);let Q=ee(E,y),rt=y.source;e.bindTexture(et,E.__webglTexture,i.TEXTURE0+O);let ht=n.get(rt);if(rt.version!==ht.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let it=Zt.getPrimaries(Zt.workingColorSpace),Tt=y.colorSpace===ni?null:Zt.getPrimaries(y.colorSpace),kt=y.colorSpace===ni||it===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Z=v(y.image,!1,s.maxTextureSize);Z=wt(y,Z);let ot=r.convert(y.format,y.colorSpace),R=r.convert(y.type),$=w(y.internalFormat,ot,R,y.normalized,y.colorSpace,y.isVideoTexture);Qt(et,y);let W,lt=y.mipmaps,st=y.isVideoTexture!==!0,at=ht.__version===void 0||Q===!0,Et=rt.dataReady,Gt=b(y,Z);if(y.isDepthTexture)$=g(y.format===ei,y.type),at&&(st?e.texStorage2D(i.TEXTURE_2D,1,$,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ot,R,null));else if(y.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(i.TEXTURE_2D,Gt,$,lt[0].width,lt[0].height);for(let it=0,Tt=lt.length;it<Tt;it++)W=lt[it],st?Et&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,W.width,W.height,ot,R,W.data):e.texImage2D(i.TEXTURE_2D,it,$,W.width,W.height,0,ot,R,W.data);y.generateMipmaps=!1}else st?(at&&e.texStorage2D(i.TEXTURE_2D,Gt,$,Z.width,Z.height),Et&&Re(y,Z,ot,R)):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ot,R,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){st&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,$,lt[0].width,lt[0].height,Z.depth);for(let it=0,Tt=lt.length;it<Tt;it++)if(W=lt[it],y.format!==En)if(ot!==null)if(st){if(Et)if(y.layerUpdates.size>0){let kt=oc(W.width,W.height,y.format,y.type);for(let ft of y.layerUpdates){let jt=W.data.subarray(ft*kt/W.data.BYTES_PER_ELEMENT,(ft+1)*kt/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ft,W.width,W.height,1,ot,jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,W.width,W.height,Z.depth,ot,W.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,$,W.width,W.height,Z.depth,0,W.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,W.width,W.height,Z.depth,ot,R,W.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,$,W.width,W.height,Z.depth,0,ot,R,W.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{st&&at&&e.texStorage2D(i.TEXTURE_2D,Gt,$,lt[0].width,lt[0].height);for(let it=0,Tt=lt.length;it<Tt;it++)W=lt[it],y.format!==En?ot!==null?st?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,W.width,W.height,ot,W.data):e.compressedTexImage2D(i.TEXTURE_2D,it,$,W.width,W.height,0,W.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Et&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,W.width,W.height,ot,R,W.data):e.texImage2D(i.TEXTURE_2D,it,$,W.width,W.height,0,ot,R,W.data)}else if(y.isDataArrayTexture)if(st){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,$,Z.width,Z.height,Z.depth),Et)if(y.layerUpdates.size>0){let it=oc(Z.width,Z.height,y.format,y.type);for(let Tt of y.layerUpdates){let kt=Z.data.subarray(Tt*it/Z.data.BYTES_PER_ELEMENT,(Tt+1)*it/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,Z.width,Z.height,1,ot,R,kt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ot,R,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,ot,R,Z.data);else if(y.isData3DTexture)st?(at&&e.texStorage3D(i.TEXTURE_3D,Gt,$,Z.width,Z.height,Z.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ot,R,Z.data)):e.texImage3D(i.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,ot,R,Z.data);else if(y.isFramebufferTexture){if(at)if(st)e.texStorage2D(i.TEXTURE_2D,Gt,$,Z.width,Z.height);else{let it=Z.width,Tt=Z.height;for(let kt=0;kt<Gt;kt++)e.texImage2D(i.TEXTURE_2D,kt,$,it,Tt,0,ot,R,null),it>>=1,Tt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Z.parentNode!==it){it.appendChild(Z),m.add(y),it.onpaint=Tt=>{let kt=Tt.changedElements;for(let ft of m)kt.includes(ft.image)&&(ft.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let kt=i.RGBA,ft=i.RGBA,jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,ft,jt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){let it=Dt(lt[0]);e.texStorage2D(i.TEXTURE_2D,Gt,$,it.width,it.height)}for(let it=0,Tt=lt.length;it<Tt;it++)W=lt[it],st?Et&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ot,R,W):e.texImage2D(i.TEXTURE_2D,it,$,ot,R,W);y.generateMipmaps=!1}else if(st){if(at){let it=Dt(Z);e.texStorage2D(i.TEXTURE_2D,Gt,$,it.width,it.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,R,Z)}else e.texImage2D(i.TEXTURE_2D,0,$,ot,R,Z);A(y)&&y.mipmapsAutoUpdate===!0&&M(et),ht.__version=rt.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ke(E,y,O){if(y.image.length!==6)return;let et=ee(E,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let rt=n.get(Q);if(Q.version!==rt.__version||et===!0){e.activeTexture(i.TEXTURE0+O);let ht=Zt.getPrimaries(Zt.workingColorSpace),Y=y.colorSpace===ni?null:Zt.getPrimaries(y.colorSpace),Z=y.colorSpace===ni||ht===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ot=y.isCompressedTexture||y.image[0].isCompressedTexture,R=y.image[0]&&y.image[0].isDataTexture,$=[];for(let ft=0;ft<6;ft++)!ot&&!R?$[ft]=v(y.image[ft],!0,s.maxCubemapSize):$[ft]=R?y.image[ft].image:y.image[ft],$[ft]=wt(y,$[ft]);let W=$[0],lt=r.convert(y.format,y.colorSpace),st=r.convert(y.type),at=w(y.internalFormat,lt,st,y.normalized,y.colorSpace),Et=y.isVideoTexture!==!0,Gt=rt.__version===void 0||et===!0,it=Q.dataReady,Tt=b(y,W);Qt(i.TEXTURE_CUBE_MAP,y);let kt;if(y.isDepthTexture){if(at=g(y.format===ei,y.type),Gt)if(Et)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,at,W.width,W.height);else for(let ft=0;ft<6;ft++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,W.width,W.height,0,lt,st,null)}else if(ot){Et&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,at,W.width,W.height);for(let ft=0;ft<6;ft++){kt=$[ft].mipmaps;for(let jt=0;jt<kt.length;jt++){let Ee=kt[jt];y.format!==En?lt!==null?Et?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt,0,0,Ee.width,Ee.height,lt,Ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt,at,Ee.width,Ee.height,0,Ee.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt,0,0,Ee.width,Ee.height,lt,st,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt,at,Ee.width,Ee.height,0,lt,st,Ee.data)}}}else{if(kt=y.mipmaps,Et&&Gt){kt.length>0&&Tt++;let ft=Dt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,at,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(R){Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,$[ft].width,$[ft].height,lt,st,$[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,$[ft].width,$[ft].height,0,lt,st,$[ft].data);for(let jt=0;jt<kt.length;jt++){let oi=kt[jt].image[ft].image;Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt+1,0,0,oi.width,oi.height,lt,st,oi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt+1,at,oi.width,oi.height,0,lt,st,oi.data)}}else{Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,lt,st,$[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,lt,st,$[ft]);for(let jt=0;jt<kt.length;jt++){let Ee=kt[jt];Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt+1,0,0,lt,st,Ee.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt+1,at,lt,st,Ee.image[ft])}}}A(y)&&y.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),rt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function de(E,y,O,et,Q,rt){let ht=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),Z=w(O.internalFormat,ht,Y,O.normalized,O.colorSpace),ot=n.get(y),R=n.get(O);if(R.__renderTarget=y,!ot.__hasExternalTextures){let $=Math.max(1,y.width>>rt),W=Math.max(1,y.height>>rt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,rt,Z,$,W,y.depth,0,ht,Y,null):e.texImage2D(Q,rt,Z,$,W,0,ht,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),dt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Q,R.__webglTexture,0,ce(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,Q,R.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function In(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let et=y.depthTexture,Q=et&&et.isDepthTexture?et.type:null,rt=g(y.stencilBuffer,Q),ht=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(y),rt,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(y),rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,E)}else{let et=y.textures;for(let Q=0;Q<et.length;Q++){let rt=et[Q],ht=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),Z=w(rt.internalFormat,ht,Y,rt.normalized,rt.colorSpace);dt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(y),Z,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(y),Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(E,y,O){let et=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(y.depthTexture);Q.__renderTarget=y;let rt=et?y.depthTexture.image[0]:y.depthTexture.image;(!Q.__webglTexture||rt.width!==y.width||rt.height!==y.height)&&(rt.width=y.width,rt.height=y.height,y.depthTexture.needsUpdate=!0),et?gt(y.depthTexture,0):mt(y.depthTexture,0);let ht=Q.__webglTexture,Y=ce(y),Z=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ot=y.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===$n)dt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Z,ht,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Z,ht,0);else if(y.depthTexture.format===ei)dt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Z,ht,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(E){let y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let et=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),et){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,et.removeEventListener("dispose",Q)};et.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=et}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let et=0;et<6;et++)be(y.__webglFramebuffer[et],E,et);else E.texture.mipmaps.length>0?be(y.__webglFramebuffer[0],E,0):be(y.__webglFramebuffer,E,0);else if(O){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]===void 0)y.__webglDepthbuffer[et]=i.createRenderbuffer(),In(y.__webglDepthbuffer[et],E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,rt)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),In(y.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function cn(E,y,O){let et=n.get(E);y!==void 0&&de(et.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ln(E)}function hn(E){let y=E.texture,O=n.get(E),et=n.get(y);E.addEventListener("dispose",B),U(E);let Q=E.textures,rt=E.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=y.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let Z=0;Z<y.mipmaps.length;Z++)O.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(y.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ht)for(let Y=0,Z=Q.length;Y<Z;Y++){let ot=n.get(Q[Y]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&dt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let Z=Q[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let ot=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),$=w(Z.internalFormat,ot,R,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),W=ce(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,$,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),In(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)de(O.__webglFramebuffer[Y][Z],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else de(O.__webglFramebuffer[Y],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(y)?M(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let Y=0,Z=Q.length;Y<Z;Y++){let ot=Q[Y],R=n.get(ot),$=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),Qt($,ot),de(O.__webglFramebuffer,E,ot,i.COLOR_ATTACHMENT0+Y,$,0),A(ot)&&M($)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),Qt(Y,y),y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)de(O.__webglFramebuffer[Z],E,y,i.COLOR_ATTACHMENT0,Y,Z);else de(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,Y,0);A(y)?M(Y):y.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&ln(E)}function L(E){let y=E.textures;for(let O=0,et=y.length;O<et;O++){let Q=y[O];if(A(Q)&&Q.mipmapsAutoUpdate===!0){let rt=T(E),ht=n.get(Q).__webglTexture;e.bindTexture(rt,ht),M(rt),e.unbindTexture()}}}let un=[];function le(E){if(E.samples>0){if(dt(E)===!1){let y=E.textures,O=E.width,et=E.height,Q=i.COLOR_BUFFER_BIT,rt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(E),Y=y.length>1;if(Y)for(let ot=0;ot<y.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<y.length;ot++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let R=n.get(y[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,O,et,0,0,O,et,Q,i.NEAREST),l===!0&&(un.length=0,un.push(i.COLOR_ATTACHMENT0+ot),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&un.push(rt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,un))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ot=0;ot<y.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let R=n.get(y[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ce(E){return Math.min(s.maxSamples,E.samples)}function dt(E){let y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(E){let y=a.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function wt(E,y){let O=E.colorSpace,et=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Vs&&O!==ni&&(Zt.getTransfer(O)===Kt?(et!==En||Q!==Qe)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",O)),y}function Dt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=Mt,this.setTexture2D=mt,this.setTexture2DArray=vt,this.setTexture3D=At,this.setTextureCube=gt,this.rebindTextures=cn,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=de,this.useMultisampledRTT=dt,this.dispose=H}function J1(i,t){function e(n,s=ni){let r,a=Zt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===En)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===Yl)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===mr||n===gr||n===_r||n===xr)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===Ja||n===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Qa||n===ja||n===to||n===eo||n===vr||n===no)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===Qa)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===to)return r.COMPRESSED_R11_EAC;if(n===eo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vr)return r.COMPRESSED_RG11_EAC;if(n===no)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===io)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===vo||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===Mo||n===yr||n===bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===So)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new sr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:$1,fragmentShader:K1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_c=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,f=null,p=null,_=null,x=typeof XRWebGLBinding<"u",d=new gc,h={},v=e.getContextAttributes(),A=null,M=null,T=[],w=[],g=new Ot,b=null,U=null,P=new We;P.viewport=new ue;let N=new We;N.viewport=new ue;let B=[P,N],V=new Oa,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let mt=T[J];return mt===void 0&&(mt=new cs,T[J]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(J){let mt=T[J];return mt===void 0&&(mt=new cs,T[J]=mt),mt.getGripSpace()},this.getHand=function(J){let mt=T[J];return mt===void 0&&(mt=new cs,T[J]=mt),mt.getHandSpace()};function q(J){let mt=w.indexOf(J.inputSource);if(mt===-1)return;let vt=T[mt];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||a),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let J=0;J<T.length;J++){let mt=w[J];mt!==null&&(w[J]=null,T[J].disconnect(mt))}C=null,H=null,d.reset();for(let J in h)delete h[J];if(t.setRenderTarget(A),p=null,f=null,m=null,s=null,M=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(g.width,g.height,!1),U!==null){let J=U.camera;J.fov=U.fov,J.zoom=U.zoom,J.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return m===null&&x&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,At=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=v.stencil?ei:$n,At=v.stencil?Oi:Sn);let Bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};m=this.getBinding(),f=m.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new rn(f.textureWidth,f.textureHeight,{format:En,type:Qe,depthTexture:new jn(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new rn(p.framebufferWidth,p.framebufferHeight,{format:En,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function nt(J){for(let mt=0;mt<J.removed.length;mt++){let vt=J.removed[mt],At=w.indexOf(vt);At>=0&&(w[At]=null,T[At].disconnect(vt))}for(let mt=0;mt<J.added.length;mt++){let vt=J.added[mt],At=w.indexOf(vt);if(At===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=w.length){w.push(vt),At=Bt;break}else if(w[Bt]===null){w[Bt]=vt,At=Bt;break}if(At===-1)break}let gt=T[At];gt&&gt.connect(vt)}}function X(J,mt){mt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(mt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let mt=J.near,vt=J.far;d.texture!==null&&(d.depthNear>0&&(mt=d.depthNear),d.depthFar>0&&(vt=d.depthFar)),V.near=N.near=P.near=mt,V.far=N.far=P.far=vt,(C!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),C=V.near,H=V.far),V.layers.mask=J.layers.mask|6,P.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let At=J.parent,gt=V.cameras;X(V,At);for(let Bt=0;Bt<gt.length;Bt++)X(gt[Bt],At);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&J.isPerspectiveCamera&&(U={camera:J,fov:J.fov,zoom:J.zoom}),j(J,V,At)};function j(J,mt,vt){vt===null?J.matrix.copy(mt.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(mt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=os*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(V)},this.getCameraTexture=function(J){return h[J]};let tt=null;function Mt(J,mt){if(u=mt.getViewerPose(c||a),_=mt,u!==null){let vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let At=!1;vt.length!==V.cameras.length&&(V.cameras.length=0,At=!0);for(let It=0;It<vt.length;It++){let Qt=vt[It],ee=null;if(p!==null)ee=p.getViewport(Qt);else{let Re=m.getViewSubImage(f,Qt);ee=Re.viewport,It===0&&(t.setRenderTargetTextures(M,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(M))}let Xt=B[It];Xt===void 0&&(Xt=new We,Xt.layers.enable(It),Xt.viewport=new ue,B[It]=Xt),Xt.matrix.fromArray(Qt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Qt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ee.x,ee.y,ee.width,ee.height),It===0&&(V.matrix.copy(Xt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),At===!0&&V.cameras.push(Xt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){m=n.getBinding();let It=m.getDepthInformation(vt[0]);It&&It.isValid&&It.texture&&d.init(It,s.renderState)}if(gt&&gt.includes("camera-access")&&x){t.state.unbindTexture(),m=n.getBinding();for(let It=0;It<vt.length;It++){let Qt=vt[It].camera;if(Qt){let ee=h[Qt];ee||(ee=new sr,h[Qt]=ee);let Xt=m.getCameraImage(Qt);ee.sourceTexture=Xt}}}}for(let vt=0;vt<T.length;vt++){let At=w[vt],gt=T[vt];At!==null&&gt!==void 0&&gt.update(At,mt,c||a)}tt&&tt(J,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),_=null}let Ut=new Nu;Ut.setAnimationLoop(Mt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}},Q1=new ae,Vu=new Nt;Vu.set(-1,0,0,0,1,0,0,0,1);function j1(i,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,sc(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,v,A,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(d,h):h.isMeshLambertMaterial?(r(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(d,h),m(d,h)):h.isMeshPhongMaterial?(r(d,h),u(d,h),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(d,h),f(d,h),h.isMeshPhysicalMaterial&&p(d,h,M)):h.isMeshMatcapMaterial?(r(d,h),_(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),x(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&o(d,h)):h.isPointsMaterial?l(d,h,v,A):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Ze&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Ze&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);let v=t.get(h),A=v.envMap,M=v.envMapRotation;A&&(d.envMap.value=A,d.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Vu),d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function o(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,v,A){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*v,d.scale.value=A*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function m(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function f(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function p(d,h,v){d.ior.value=h.ior,h.diffuseRoughness>0&&(d.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=h.diffuseRoughnessMap,e(h.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ze&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.retroreflectivity>0&&(d.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,h){h.matcap&&(d.matcap.value=h.matcap)}function x(d,h){let v=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tg(i,t,e,n){let s={},r={};function a(v,A){let M=A.program;n.uniformBlockBinding(v,M,s[v.id])}function o(v,A){let M=s[v.id];M===void 0&&(_(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",d));let T=A.program;n.updateUBOMapping(v,T);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let A=i.createBuffer(),M=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(v){let A=s[v.id],M=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,g=M.length;w<g;w++){let b=M[w];if(Array.isArray(b))for(let U=0,P=b.length;U<P;U++)u(b[U],w,U,T);else u(b,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,A,M,T){if(f(v,A,M,T)===!0){let w=v.__offset,g=v.value;if(Array.isArray(g)){let b=0;for(let U=0;U<g.length;U++){let P=g[U],N=x(P,!0);m(P,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function m(v,A,M){typeof v=="number"||typeof v=="boolean"?A[M]=v:v.isMatrix3?(A[M]=v.elements[0],A[M+1]=v.elements[1],A[M+2]=v.elements[2],A[M+3]=0,A[M+4]=v.elements[3],A[M+5]=v.elements[4],A[M+6]=v.elements[5],A[M+7]=0,A[M+8]=v.elements[6],A[M+9]=v.elements[7],A[M+10]=v.elements[8],A[M+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-M),M):v.toArray(A,M)}function f(v,A,M,T){let w=v.value,g=A+"_"+M;if(Array.isArray(w)){T[g]===void 0&&(T[g]=[]);let b=T[g],U=!1;for(let P=0;P<w.length;P++)p(w[P],b,P)===!0&&(U=!0);return U}return p(w,T,g)}function p(v,A,M){if(A[M]===void 0)return typeof v=="number"||typeof v=="boolean"?A[M]=v:ArrayBuffer.isView(v)?A[M]=v.slice():A[M]=v.clone(),!0;{let T=A[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return A[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function _(v){let A=v.uniforms,M=0,T=16;for(let g=0,b=A.length;g<b;g++){let U=Array.isArray(A[g])?A[g]:[A[g]];for(let P=0,N=U.length;P<N;P++){let B=U[P],V=Array.isArray(B.value)?B.value:[B.value],C=Array.isArray(A[g])||Array.isArray(B.value),H=M;for(let G=0,nt=V.length;G<nt;G++){let X=V[G],j=x(X,C),tt=M%T,Mt=tt%j.boundary,Ut=tt+Mt;M+=Mt,Ut!==0&&T-Ut<j.storage&&(M+=T-Ut),G===0&&(H=M),M+=j.storage}let q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new q((M-H)/Float32Array.BYTES_PER_ELEMENT),B.__offset=H}}let w=M%T;return w>0&&(M+=T-w),v.__size=M,v.__cache={},this}function x(v,A){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function d(v){let A=v.target;A.removeEventListener("dispose",d),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:h}}var eg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function ng(){return On===null&&(On=new ya(eg,16,16,Mi,bn),On.name="DFG_LUT",On.minFilter=Xe,On.magFilter=Xe,On.wrapS=Ln,On.wrapT=Ln,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Co=class{constructor(t={}){let{canvas:e=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Qe}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let x=p,d=new Set([qa,Xa,Wa]),h=new Set([Qe,Sn,vs,Oi,Ha,Va]),v=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,w=null,g=[],b=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,B=null,V=null,C=null,H=null;this._outputColorSpace=ze;let q=0,G=0,nt=null,X=-1,j=null,tt=new ue,Mt=new ue,Ut=null,J=new zt(0),mt=0,vt=e.width,At=e.height,gt=1,Bt=null,me=null,It=new ue(0,0,vt,At),Qt=new ue(0,0,vt,At),ee=!1,Xt=new mi,Re=new Sa,ve=!1,Ke=!1,de=new ae,In=new D,be=new ue,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},cn=!1;function hn(){return nt===null?gt:1}let L=n;function un(S,I){return e.getContext(S,I)}let le,ce,dt,ye,wt,Dt,E,y,O,et,Q,rt,ht,Y,Z,ot,R,$,W,lt,st,at,Et;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){let I="webgl2";if(L=un(I,S),L===null)throw un(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(S){throw e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Pt("WebGLRenderer: "+S.message),S}function Gt(){le=new fm(L),le.init(),st=new J1(L,le),ce=new nm(L,le,t,st),dt=new Y1(L,le),ce.reversedDepthBuffer&&f&&dt.buffers.depth.setReversed(!0),V=L.createFramebuffer(),C=L.createFramebuffer(),H=L.createFramebuffer(),ye=new gm(L),wt=new N1,Dt=new Z1(L,le,dt,wt,ce,st,ye),E=new dm(P),y=new xf(L),at=new tm(L,y),O=new pm(L,y,ye,at),et=new xm(L,O,y,at,ye),$=new _m(L,ce,Dt),Z=new im(wt),Q=new L1(P,E,le,ce,at,Z),rt=new j1(P,wt),ht=new U1,Y=new G1(le),R=new j0(P,E,dt,et,_,l),ot=new q1(P,et,ce),Et=new tg(L,ye,ce,dt),W=new em(L,le,ye),lt=new mm(L,le,ye),ye.programs=Q.programs,P.capabilities=ce,P.extensions=le,P.properties=wt,P.renderLists=ht,P.shadowMap=ot,P.state=dt,P.info=ye}x!==Qe&&(U=new ym(x,e.width,e.height,o,s,r));let it=new _c(P,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(S){S!==void 0&&(gt=S,this.setSize(vt,At,!1))},this.getSize=function(S){return S.set(vt,At)},this.setSize=function(S,I,k=!0){if(it.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=S,At=I,e.width=Math.floor(S*gt),e.height=Math.floor(I*gt),k===!0&&(e.style.width=S+"px",e.style.height=I+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(vt*gt,At*gt).floor()},this.setDrawingBufferSize=function(S,I,k){vt=S,At=I,gt=k,e.width=Math.floor(S*k),e.height=Math.floor(I*k),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(x===Qe){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,I,k,F){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,I,k,F),dt.viewport(tt.copy(It).multiplyScalar(hn()).round())},this.getScissor=function(S){return S.copy(Qt)},this.setScissor=function(S,I,k,F){S.isVector4?Qt.set(S.x,S.y,S.z,S.w):Qt.set(S,I,k,F),dt.scissor(Mt.copy(Qt).multiplyScalar(hn()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){dt.setScissorTest(ee=S)},this.setOpaqueSort=function(S){Bt=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,k=!0){let F=0;if(S){let z=!1;if(nt!==null){let ut=nt.texture.format;z=d.has(ut)}if(z){let ut=nt.texture.type,xt=h.has(ut),ct=R.getClearColor(),_t=R.getClearAlpha(),bt=ct.r,Ft=ct.g,qt=ct.b;xt?(v[0]=bt,v[1]=Ft,v[2]=qt,v[3]=_t,L.clearBufferuiv(L.COLOR,0,v)):(A[0]=bt,A[1]=Ft,A[2]=qt,A[3]=_t,L.clearBufferiv(L.COLOR,0,A))}else F|=L.COLOR_BUFFER_BIT}I&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),R.dispose(),ht.dispose(),Y.dispose(),Dt.dispose(),wt.dispose(),E.dispose(),et.dispose(),O.dispose(),at.dispose(),Et.dispose(),Q.dispose(),it.dispose(),it.removeEventListener("sessionstart",kc),it.removeEventListener("sessionend",Gc),Ti.stop()};function Tt(S){S.preventDefault(),qs("WebGLRenderer: Context Lost."),N=!0}function kt(){qs("WebGLRenderer: Context Restored."),N=!1;let S=ye.autoReset,I=ot.enabled,k=ot.autoUpdate,F=ot.needsUpdate,z=ot.type;Gt(),ye.autoReset=S,ot.enabled=I,ot.autoUpdate=k,ot.needsUpdate=F,ot.type=z}function ft(S){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function jt(S){let I=S.target;I.removeEventListener("dispose",jt),Ee(I)}function Ee(S){oi(S),wt.remove(S)}function oi(S){let I=wt.get(S).programs;I!==void 0&&(I.forEach(function(k){Q.releaseProgram(k)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,k,F,z,ut){I===null&&(I=ln);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ct=xd(S,I,k,F,z);dt.setMaterial(F,xt);let _t=k.index,bt=1;if(F.wireframe===!0){if(_t=O.getWireframeAttribute(k),_t===void 0)return;bt=2}let Ft=k.drawRange,qt=k.attributes.position,yt=Ft.start*bt,Yt=(Ft.start+Ft.count)*bt;ut!==null&&(yt=Math.max(yt,ut.start*bt),Yt=Math.min(Yt,(ut.start+ut.count)*bt)),_t!==null?(yt=Math.max(yt,0),Yt=Math.min(Yt,_t.count)):qt!=null&&(yt=Math.max(yt,0),Yt=Math.min(Yt,qt.count));let ge=Yt-yt;if(ge<0||ge===1/0)return;at.setup(z,F,ct,k,_t);let se,ne=W;if(_t!==null&&(se=y.get(_t),ne=lt,ne.setIndex(se)),z.isMesh)F.wireframe===!0?(dt.setLineWidth(F.wireframeLinewidth*hn()),ne.setMode(L.LINES)):ne.setMode(L.TRIANGLES);else if(z.isLine){let Ue=F.linewidth;Ue===void 0&&(Ue=1),dt.setLineWidth(Ue*hn()),z.isLineSegments?ne.setMode(L.LINES):z.isLineLoop?ne.setMode(L.LINE_LOOP):ne.setMode(L.LINE_STRIP)}else z.isPoints?ne.setMode(L.POINTS):z.isSprite&&ne.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ue=z._multiDrawStarts,St=z._multiDrawCounts,He=z._multiDrawCount,$t=_t?y.get(_t).bytesPerElement:1,Ai=wt.get(F).currentProgram.getUniforms();for(let Fe=0;Fe<He;Fe++)Ai.setValue(L,"_gl_DrawID",Fe),ne.render(Ue[Fe]/$t,St[Fe])}else if(z.isInstancedMesh)ne.renderInstances(yt,ge,z.count);else if(k.isInstancedBufferGeometry){let Ue=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,St=Math.min(k.instanceCount,Ue);ne.renderInstances(yt,ge,St)}else ne.render(yt,ge)};function zc(S,I,k,F){B!==null&&S.isNodeMaterial&&B.setObject(F,S),ve===!0&&Z.setState(S,k,!1),S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=Ze,S.needsUpdate=!0,Ps(S,I,F),S.side=Si,S.needsUpdate=!0,Ps(S,I,F),S.side=pn):Ps(S,I,F)}this.compile=function(S,I,k=null){k===null&&(k=S),B!==null&&B.renderStart(S,I,k),w=Y.get(k),w.init(I),b.push(w),k.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),S!==k&&S.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),Ke=this.localClippingEnabled,ve=Z.init(this.clippingPlanes,Ke),ve===!0&&Z.setGlobalState(this.clippingPlanes,I),B!==null&&ot.render(w.state.shadowsArray,k,I);let F=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ut=z.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){let ct=ut[xt];zc(ct,k,I,z),F.add(ct)}else zc(ut,k,I,z),F.add(ut)}),w=b.pop(),B!==null&&B.renderEnd(),F},this.compileAsync=function(S,I,k=null){let F=this.compile(S,I,k);return new Promise(z=>{function ut(){if(F.forEach(function(xt){let _t=wt.get(xt).currentProgram;(_t===void 0||_t.isReady())&&F.delete(xt)}),F.size===0){z(S);return}setTimeout(ut,10)}le.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Zo=null;function gd(S){Zo&&Zo(S)}function kc(){Ti.stop()}function Gc(){Ti.start()}let Ti=new Nu;Ti.setAnimationLoop(gd),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(S){Zo=S,it.setAnimationLoop(S),S===null?Ti.stop():Ti.start()},it.addEventListener("sessionstart",kc),it.addEventListener("sessionend",Gc),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(S,I);let k=it.enabled===!0&&it.isPresenting===!0,F=U!==null&&(nt===null||k)&&U.begin(P,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,I,nt),w=Y.get(S,b.length),w.init(I),w.state.textureUnits=Dt.getTextureUnits(),b.push(w),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Re.setFromArrayCamera(I):Xt.setFromProjectionMatrix(de,fn,I.reversedDepth),Ke=this.localClippingEnabled,ve=Z.init(this.clippingPlanes,Ke),T=ht.get(S,g.length),T.init(),g.push(T),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let xt=P.xr.getDepthSensingMesh();xt!==null&&Jo(xt,I,-1/0,P.sortObjects)}Jo(S,I,0,P.sortObjects),T.finish(),B!==null&&B.updateLights(w.state.lightsArray),P.sortObjects===!0&&T.sort(Bt,me),cn=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,cn&&R.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),ve===!0&&Z.beginShadows();let z=w.state.shadowsArray;if(ot.render(z,S,I),ve===!0&&Z.endShadows(),(F&&U.hasRenderPass())===!1){let xt=T.opaque,ct=T.transmissive;if(w.setupLights(),I.isArrayCamera){let _t=I.cameras;if(ct.length>0)for(let bt=0,Ft=_t.length;bt<Ft;bt++){let qt=_t[bt];Vc(xt,ct,S,qt)}cn&&R.render(S);for(let bt=0,Ft=_t.length;bt<Ft;bt++){let qt=_t[bt];Hc(T,S,qt,qt.viewport)}}else ct.length>0&&Vc(xt,ct,S,I),cn&&R.render(S),Hc(T,S,I)}nt!==null&&G===0&&(Dt.updateMultisampleRenderTarget(nt),Dt.updateRenderTargetMipmap(nt)),F&&U.end(P),S.isScene===!0&&S.onAfterRender(P,S,I),at.resetDefaultState(),X=-1,j=null,b.pop(),b.length>0?(w=b[b.length-1],Dt.setTextureUnits(w.state.textureUnits),ve===!0&&Z.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,B!==null&&B.renderEnd()};function Jo(S,I,k,F){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){let xt=I.isArrayCamera?Re:Xt;if(!S.frustumCulled||S.intersectsFrustum(xt)){F&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(de);let ct=et.update(S),_t=S.material;_t.visible&&T.push(S,ct,_t,k,be.z,null,I)}}else if(S.isMesh||S.isLine||S.isPoints){let xt=I.isArrayCamera?Re:Xt;if(!S.frustumCulled||S.intersectsFrustum(xt)){let ct=et.update(S),_t=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),be.copy(ct.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(de)),Array.isArray(_t)){let bt=ct.groups;for(let Ft=0,qt=bt.length;Ft<qt;Ft++){let yt=bt[Ft],Yt=_t[yt.materialIndex];Yt&&Yt.visible&&T.push(S,ct,Yt,k,be.z,yt,I)}}else _t.visible&&T.push(S,ct,_t,k,be.z,null,I)}}}let ut=S.children;for(let xt=0,ct=ut.length;xt<ct;xt++)Jo(ut[xt],I,k,F)}function Hc(S,I,k,F){let{opaque:z,transmissive:ut,transparent:xt}=S;w.setupLightsView(k),ve===!0&&Z.setGlobalState(P.clippingPlanes,k),F&&dt.viewport(tt.copy(F)),z.length>0&&Lr(z,I,k),ut.length>0&&Lr(ut,I,k),xt.length>0&&Lr(xt,I,k),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Vc(S,I,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let yt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new rn(1,1,{generateMipmaps:!0,type:yt?bn:Qe,minFilter:ti,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let ut=w.state.transmissionRenderTarget[F.id],xt=F.viewport||tt;ut.setSize(xt.z*P.transmissionResolutionScale,xt.w*P.transmissionResolutionScale);let ct=P.getRenderTarget(),_t=P.getActiveCubeFace(),bt=P.getActiveMipmapLevel();P.setRenderTarget(ut),P.getClearColor(J),mt=P.getClearAlpha(),mt<1&&P.setClearColor(16777215,.5),P.clear(),cn&&R.render(k);let Ft=P.toneMapping;P.toneMapping=Fn;let qt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),ve===!0&&Z.setGlobalState(P.clippingPlanes,F),Lr(S,k,F),Dt.updateMultisampleRenderTarget(ut),Dt.updateRenderTargetMipmap(ut),le.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Yt=0,ge=I.length;Yt<ge;Yt++){let se=I[Yt],{object:ne,geometry:Ue,material:St,group:He}=se;if(St.side===pn&&ne.layers.test(F.layers)){let $t=St.side;St.side=Ze,St.needsUpdate=!0,Wc(ne,k,F,Ue,St,He),St.side=$t,St.needsUpdate=!0,yt=!0}}yt===!0&&(Dt.updateMultisampleRenderTarget(ut),Dt.updateRenderTargetMipmap(ut))}P.setRenderTarget(ct,_t,bt),P.setClearColor(J,mt),qt!==void 0&&(F.viewport=qt),P.toneMapping=Ft}function Lr(S,I,k){let F=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ut=S.length;z<ut;z++){let xt=S[z],{object:ct,geometry:_t,group:bt}=xt,Ft=xt.material;Ft.allowOverride===!0&&F!==null&&(Ft=F),ct.layers.test(k.layers)&&Wc(ct,I,k,_t,Ft,bt)}}function Wc(S,I,k,F,z,ut){B!==null&&z.isNodeMaterial&&B.setObject(S,z),S.onBeforeRender(P,I,k,F,z,ut),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(P,I,k,F,S,ut),z.transparent===!0&&z.side===pn&&z.forceSinglePass===!1?(z.side=Ze,z.needsUpdate=!0,P.renderBufferDirect(k,I,F,z,S,ut),z.side=Si,z.needsUpdate=!0,P.renderBufferDirect(k,I,F,z,S,ut),z.side=pn):P.renderBufferDirect(k,I,F,z,S,ut),S.onAfterRender(P,I,k,F,z,ut)}function Xc(S){let I=0;for(let k of S)k.texture!==null&&I++;return I}function Ps(S,I,k){I.isScene!==!0&&(I=ln);let F=wt.get(S),z=w.state.lights,ut=w.state.shadowsArray,xt=z.state.version,ct=Q.getParameters(S,z.state,ut,I,k,w.state.lightProbeGridArray),_t=Q.getProgramCacheKey(ct),bt=F.programs;F.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,F.fog=I.fog;let Ft=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;F.envMap=E.get(S.envMap||F.environment,Ft),F.envMapRotation=F.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,bt===void 0&&(S.addEventListener("dispose",jt),bt=new Map,F.programs=bt,F.programVariants=new Map);let qt=bt.get(_t);if(qt!==void 0){if(F.currentProgram===qt&&F.lightsStateVersion===xt)return Yc(S,ct),qt}else ct.uniforms=Q.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,k,ct),S.onBeforeCompile(ct,P),qt=Q.acquireProgram(ct,_t),bt.set(_t,qt),F.uniforms=ct.uniforms;let yt=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=Z.uniform),Yc(S,ct),F.needsLights=yd(S),F.lightsStateVersion=xt,F.needsLights&&(yt.ambientLightColor.value=z.state.ambient,yt.lightProbe.value=z.state.probe,yt.sunLights.value=z.state.sun,yt.sunLightShadows.value=z.state.sunShadow,yt.directionalLights.value=z.state.directional,yt.directionalLightShadows.value=z.state.directionalShadow,yt.spotLights.value=z.state.spot,yt.spotLightShadows.value=z.state.spotShadow,yt.rectAreaLights.value=z.state.rectArea,yt.ltc_1.value=z.state.rectAreaLTC1,yt.ltc_2.value=z.state.rectAreaLTC2,yt.pointLights.value=z.state.point,yt.pointLightShadows.value=z.state.pointShadow,yt.hemisphereLights.value=z.state.hemi,yt.sunShadowMatrix.value=z.state.sunShadowMatrix,yt.sunShadowCascade.value=z.state.sunShadowCascade,yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,yt.spotLightMatrix.value=z.state.spotLightMatrix,yt.spotLightMap.value=z.state.spotLightMap,yt.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=Xc(w.state.lightProbeGridArray),F.currentProgram=qt,F.uniformsList=null,qt}function _d(S,I,k,F,z){let ut=wt.get(S),xt=ut.currentProgram.id+","+F+","+z,ct=ut.programVariants.get(xt);return ct===void 0?(ct=Ps(S,I,k),ut.programVariants.set(xt,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=F,ut.toneMapping=z),ct}function qc(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=Ss.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Yc(S,I){let k=wt.get(S);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function xd(S,I,k,F,z){I.isScene!==!0&&(I=ln),Dt.resetTextureUnits();let ut=I.fog,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?I.environment:null,ct=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,_t=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,bt=E.get(F.envMap||xt,_t),Ft=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,qt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),yt=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,ge=!!k.morphAttributes.color,se=Fn;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(se=P.toneMapping);let ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ue=ne!==void 0?ne.length:0,St=wt.get(F),He=w.state.lights;if(ve===!0&&(Ke===!0||S!==j)){let fe=S===j&&F.id===X;Z.setState(F,S,fe)}let $t=!1,Ai=!1;F.version===St.__version?St.needsLights&&St.lightsStateVersion!==He.state.version||z.isBatchedMesh&&St.batching===!1||!z.isBatchedMesh&&St.batching===!0||z.isBatchedMesh&&St.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&St.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&St.instancing===!1||!z.isInstancedMesh&&St.instancing===!0||z.isSkinnedMesh&&St.skinning===!1||!z.isSkinnedMesh&&St.skinning===!0||z.isInstancedMesh&&St.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&St.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&St.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&St.instancingMorph===!1&&z.morphTexture!==null||St.envMap!==bt||F.fog===!0&&St.fog!==ut||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Z.numPlanes||St.numIntersection!==Z.numIntersection)||St.vertexAlphas!==Ft||St.vertexTangents!==qt||St.morphTargets!==yt||St.morphNormals!==Yt||St.morphColors!==ge||St.morphTargetsCount!==Ue||St.numLightProbeGrids!==Xc(w.state.lightProbeGridArray)?$t=!0:(St.outputColorSpace!==ct||St.toneMapping!==se)&&(Ai=!0):($t=!0,St.__version=F.version);let Fe=St.currentProgram;($t===!0||Ai===!0)&&(Fe=Ai===!0?_d(F,I,z,ct,se):Ps(F,I,z),B&&F.isNodeMaterial&&B.onUpdateProgram(F,Fe,St));let Nr=!1,li=!1,wi=!1,Jt=Fe.getUniforms(),Ce=St.uniforms;if(dt.useProgram(Fe.program)&&(Nr=!0,li=!0,wi=!0),F.id!==X&&(X=F.id,li=!0),Nr||j!==S){dt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Jt.setValue(L,"projectionMatrix",S.projectionMatrix),Jt.setValue(L,"viewMatrix",S.matrixWorldInverse);let Te=Jt.map.cameraPosition;Te!==void 0&&Te.setValue(L,In.setFromMatrixPosition(S.matrixWorld)),ce.logarithmicDepthBuffer&&Jt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Jt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,li=!0,wi=!0)}if(St.needsLights&&(He.state.sunShadowMap.length>0&&Jt.setValue(L,"sunShadowMap",He.state.sunShadowMap,Dt),He.state.directionalShadowMap.length>0&&Jt.setValue(L,"directionalShadowMap",He.state.directionalShadowMap,Dt),He.state.spotShadowMap.length>0&&Jt.setValue(L,"spotShadowMap",He.state.spotShadowMap,Dt),He.state.pointShadowMap.length>0&&Jt.setValue(L,"pointShadowMap",He.state.pointShadowMap,Dt)),z.isSkinnedMesh){Jt.setOptional(L,z,"bindMatrix"),Jt.setOptional(L,z,"bindMatrixInverse");let fe=z.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),Jt.setValue(L,"boneTexture",fe.boneTexture,Dt))}z.isBatchedMesh&&(Jt.setOptional(L,z,"batchingTexture"),Jt.setValue(L,"batchingTexture",z._matricesTexture,Dt),Jt.setOptional(L,z,"batchingIdTexture"),Jt.setValue(L,"batchingIdTexture",z._indirectTexture,Dt),Jt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Jt.setValue(L,"batchingColorTexture",z._colorsTexture,Dt));let gn=k.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&$.update(z,k,Fe),(li||St.receiveShadow!==z.receiveShadow)&&(St.receiveShadow=z.receiveShadow,Jt.setValue(L,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&I.environment!==null&&(Ce.envMapIntensity.value=I.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=ng()),li){if(Jt.setValue(L,"toneMappingExposure",P.toneMappingExposure),St.needsLights&&vd(Ce,wi),ut&&F.fog===!0&&rt.refreshFogUniforms(Ce,ut),rt.refreshMaterialUniforms(Ce,F,gt,At,w.state.transmissionRenderTarget[S.id]),St.needsLights&&St.numLightProbeGrids>0){let fe=M,Te=0;for(let Hn of w.state.lightProbeGridArray)Hn.texture!==null&&(fe.textures[Te]=Hn.texture,fe.min[Te]=Hn.boundingBox.min,fe.max[Te]=Hn.boundingBox.max,fe.resolution[Te]=Hn.resolution,Te++);for(let Hn in fe)fe[Hn].length=Te;Ce.probesSH.value=fe.textures,Ce.probesMin.value=fe.min,Ce.probesMax.value=fe.max,Ce.probesResolution.value=fe.resolution}Ss.upload(L,qc(St),Ce,Dt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ss.upload(L,qc(St),Ce,Dt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Jt.setValue(L,"center",z.center),Jt.setValue(L,"modelViewMatrix",z.modelViewMatrix),Jt.setValue(L,"normalMatrix",z.normalMatrix),Jt.setValue(L,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let fe=F.uniformsGroups;for(let Te=0,Hn=fe.length;Te<Hn;Te++){let Jc=fe[Te];Et.update(Jc,Fe),Et.bind(Jc,Fe)}}return Fe}function vd(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function yd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,I,k){let F=wt.get(S);F.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),wt.get(S.texture).__webglTexture=I,wt.get(S.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){let k=wt.get(S);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,k=0){nt=S,q=I,G=k;let F=null,z=!1,ut=!1;if(S){let ct=wt.get(S);if(ct.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(L.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(S.viewport),Mt.copy(S.scissor),Ut=S.scissorTest,dt.viewport(tt),dt.scissor(Mt),dt.setScissorTest(Ut),X=-1;return}else if(ct.__webglFramebuffer===void 0)Dt.setupRenderTarget(S);else if(ct.__hasExternalTextures)Dt.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ft=S.depthTexture;if(ct.__boundDepthTexture!==Ft){if(Ft!==null&&wt.has(Ft)&&(S.width!==Ft.image.width||S.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(S)}}let _t=S.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ut=!0);let bt=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(bt[I])?F=bt[I][k]:F=bt[I],z=!0):S.samples>0&&Dt.useMultisampledRTT(S)===!1?F=wt.get(S).__webglMultisampledFramebuffer:Array.isArray(bt)?F=bt[k]:F=bt,tt.copy(S.viewport),Mt.copy(S.scissor),Ut=S.scissorTest}else tt.copy(It).multiplyScalar(gt).floor(),Mt.copy(Qt).multiplyScalar(gt).floor(),Ut=ee;if(k!==0&&(F=V),dt.bindFramebuffer(L.FRAMEBUFFER,F)&&dt.drawBuffers(S,F),dt.viewport(tt),dt.scissor(Mt),dt.setScissorTest(Ut),z){let ct=wt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct.__webglTexture,k)}else if(ut){let ct=I;for(let _t=0;_t<S.textures.length;_t++){let bt=wt.get(S.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,bt.__webglTexture,k,ct)}}else if(S!==null&&k!==0){let ct=wt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,k)}X=-1};function Zc(S){let I=wt.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=ce.textureFormatReadable(S.format),I.__typeReadable=ce.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,k,F,z,ut,xt,ct=0){if(!(S&&S.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt],Array.isArray(_t)&&(_t=_t[0])),_t){dt.bindFramebuffer(L.FRAMEBUFFER,_t);try{let bt=S.textures[ct],Ft=bt.format,qt=bt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let yt=Zc(bt);if(yt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-F&&k>=0&&k<=S.height-z&&L.readPixels(I,k,F,z,st.convert(Ft),st.convert(qt),ut)}finally{let bt=nt!==null?wt.get(nt).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,I,k,F,z,ut,xt,ct=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt],Array.isArray(_t)&&(_t=_t[0])),_t)if(I>=0&&I<=S.width-F&&k>=0&&k<=S.height-z){dt.bindFramebuffer(L.FRAMEBUFFER,_t);let bt=S.textures[ct],Ft=bt.format,qt=bt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let yt=Zc(bt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),L.readPixels(I,k,F,z,st.convert(Ft),st.convert(qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ge=nt!==null?wt.get(nt).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,ge);let se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ru(L,se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Yt),L.deleteSync(se),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,k=0){let F=Math.pow(2,-k),z=Math.floor(S.image.width*F),ut=Math.floor(S.image.height*F),xt=I!==null?I.x:0,ct=I!==null?I.y:0;Dt.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xt,ct,z,ut),dt.unbindTexture()},this.copyTextureToTexture=function(S,I,k=null,F=null,z=0,ut=0){let xt,ct,_t,bt,Ft,qt,yt,Yt,ge,se=S.isCompressedTexture?S.mipmaps[ut]:S.image;if(k!==null)xt=k.max.x-k.min.x,ct=k.max.y-k.min.y,_t=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Ft=k.min.y,qt=k.isBox3?k.min.z:0;else{let Jt=Math.pow(2,-z);xt=Math.floor(se.width*Jt),ct=Math.floor(se.height*Jt),S.isDataArrayTexture?_t=se.depth:S.isData3DTexture?_t=Math.floor(se.depth*Jt):_t=1,bt=0,Ft=0,qt=0}F!==null?(yt=F.x,Yt=F.y,ge=F.z):(yt=0,Yt=0,ge=0);let ne=st.convert(I.format),Ue=st.convert(I.type),St;I.isData3DTexture?(Dt.setTexture3D(I,0),St=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Dt.setTexture2DArray(I,0),St=L.TEXTURE_2D_ARRAY):(Dt.setTexture2D(I,0),St=L.TEXTURE_2D),dt.activeTexture(L.TEXTURE0),dt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),dt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),dt.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let He=dt.getParameter(L.UNPACK_ROW_LENGTH),$t=dt.getParameter(L.UNPACK_IMAGE_HEIGHT),Ai=dt.getParameter(L.UNPACK_SKIP_PIXELS),Fe=dt.getParameter(L.UNPACK_SKIP_ROWS),Nr=dt.getParameter(L.UNPACK_SKIP_IMAGES);dt.pixelStorei(L.UNPACK_ROW_LENGTH,se.width),dt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se.height),dt.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),dt.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),dt.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let li=S.isDataArrayTexture||S.isData3DTexture,wi=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){let Jt=wt.get(S),Ce=wt.get(I),gn=wt.get(Jt.__renderTarget),fe=wt.get(Ce.__renderTarget);dt.bindFramebuffer(L.READ_FRAMEBUFFER,gn.__webglFramebuffer),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Te=0;Te<_t;Te++)li&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(S).__webglTexture,z,qt+Te),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(I).__webglTexture,ut,ge+Te)),L.blitFramebuffer(bt,Ft,bt+xt,Ft+ct,yt,Yt,yt+xt,Yt+ct,L.DEPTH_BUFFER_BIT,L.NEAREST);dt.bindFramebuffer(L.READ_FRAMEBUFFER,null),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||wt.has(S)){let Jt=wt.get(S),Ce=wt.get(I);dt.bindFramebuffer(L.READ_FRAMEBUFFER,C),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let gn=0;gn<_t;gn++)li?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jt.__webglTexture,z,qt+gn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jt.__webglTexture,z),wi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,ut,ge+gn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,ut),z!==0?L.blitFramebuffer(bt,Ft,bt+xt,Ft+ct,yt,Yt,yt+xt,Yt+ct,L.COLOR_BUFFER_BIT,L.NEAREST):wi?L.copyTexSubImage3D(St,ut,yt,Yt,ge+gn,bt,Ft,xt,ct):L.copyTexSubImage2D(St,ut,yt,Yt,bt,Ft,xt,ct);dt.bindFramebuffer(L.READ_FRAMEBUFFER,null),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else wi?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(St,ut,yt,Yt,ge,xt,ct,_t,ne,Ue,se.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(St,ut,yt,Yt,ge,xt,ct,_t,ne,se.data):L.texSubImage3D(St,ut,yt,Yt,ge,xt,ct,_t,ne,Ue,se):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,yt,Yt,xt,ct,ne,Ue,se.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,yt,Yt,se.width,se.height,ne,se.data):L.texSubImage2D(L.TEXTURE_2D,ut,yt,Yt,xt,ct,ne,Ue,se);dt.pixelStorei(L.UNPACK_ROW_LENGTH,He),dt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),dt.pixelStorei(L.UNPACK_SKIP_PIXELS,Ai),dt.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),dt.pixelStorei(L.UNPACK_SKIP_IMAGES,Nr),ut===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(St),dt.unbindTexture()},this.initRenderTarget=function(S){wt.get(S).__webglFramebuffer===void 0&&Dt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Dt.setTextureCube(S,0):S.isData3DTexture?Dt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Dt.setTexture2DArray(S,0):Dt.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){q=0,G=0,nt=null,dt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Wu={firstshot:{category:"01 / APPLIED AI \xB7 PHYSICS-INFORMED ML",title:"FirstShot",body:'<p>A paint colour-matching and reformulation tool that searches for the recipe with the fewest pigments matching a target under four light sources.</p><h3>The approach</h3><p>Kubelka\u2013Munk physics combined with a neural-network ensemble trained on 14,000 lab panels. Built with Python, NumPy, scikit-learn, FastAPI, Docker, and AWS Lambda.</p><h3>The result</h3><ul><li>Right-first-time matches increased from 50% to 85% in a simulated lab.</li><li>Mean lab trials decreased from 2.27 to 1.38 in the simulation.</li><li>Recipe search became 24\xD7 faster.</li><li>Added reformulation of lead and cadmium legacy colours with compliant pigments.</li></ul><p class="fine">Lab improvements were measured in simulation.</p><a class="button dark" href="https://github.com/RudraMaharao/firstshot" target="_blank" rel="noopener noreferrer">Explore the source \u2197</a>'},fireguard:{category:"02 / EDGE AI \xB7 EMBEDDED SYSTEMS",title:"FireGuard",body:"<p>An offline, multi-sensor kitchen fire and smoke detector built around an ESP32-S3. The vision model runs entirely on the device.</p><h3>Small enough to work at the edge</h3><p>Compressed a YOLO11 model trained on 12,735 images to 12\xD7 fewer parameters. Model size fell from 19.1 MB to 0.96 MB, retaining 94% of its mAP50.</p><h3>More than a camera</h3><p>MQ-2, MQ-7, MQ-135, and BME280 sensor readings feed a danger score that wakes the camera and triggers 4G SMS alerts.</p><p><b>Toolkit:</b> PyTorch, YOLO11, C++, ESP-IDF, ESP32-S3, and Tinkercad.</p>"},accounting:{category:"03 / AUTOMATION \xB7 DOCUMENT INTELLIGENCE",title:"CA Firm Automation",body:'<p>An accounting automation platform that extracts bank statements from PDFs, spreadsheets, scans, and phone images, then posts validated vouchers to TallyPrime.</p><h3>From varied inputs to consistent entries</h3><p>Achieved exact extraction across a test set of 11 statements in seven formats. Validation sits between extraction and posting.</p><h3>An offline AI assistant</h3><p>Local LLMs and vector search predict ledger classifications, flag mispostings, and retrieve Income-tax and GST provisions. The platform is backed by 109 automated tests.</p><p><b>Toolkit:</b> Python, SQL, SQLite, Tesseract OCR, pdfplumber, Flask, Ollama, RAG, Qdrant, and Linux.</p><p class="fine">Extraction results refer to the stated test set, not every possible bank statement.</p>'},nutrition:{category:"04 / DATA ANALYTICS \xB7 NUTRITION",title:"What\u2019s in the packet?",body:'<p>An analysis of Indian packaged food nutrition using approximately 19,000 Open Food Facts products.</p><h3>Make the data usable first</h3><p>Processed the data into MongoDB, built six aggregation pipelines, and improved the share of usable records from 41% to 78%.</p><h3>Then make it understandable</h3><p>A five-page Power BI dashboard explores nutritional quality and HFSS compliance, using DAX and a structured analytical model.</p><p><b>Toolkit:</b> MongoDB, Python, Power BI, and DAX.</p><p class="fine">The portfolio illustration is decorative. It does not represent individual product measurements.</p>'}};var Xu=[[-175,0,110],[-225,0,70],[-220,0,-25],[-175,0,-95],[-110,0,-145],[-40,0,-155],[12,0,-100],[75,0,-80],[135,0,-150],[205,0,-120],[230,0,-45],[180,0,20],[220,0,95],[150,0,155],[55,0,150],[-5,0,95],[-80,0,130]];var xc=1423.7033801763764,ii=[[-175,110,-.923969,-.382467],[-176.095397,109.545099,-.923022,-.384748],[-177.189959,109.087018,-.921903,-.387421],[-178.283275,108.625535,-.920658,-.390371],[-179.374932,108.160431,-.919282,-.393599],[-180.464517,107.691486,-.917773,-.397106],[-181.554568,107.21719,-.916119,-.400905],[-182.6419,106.738502,-.914322,-.404989],[-183.725905,106.255285,-.912374,-.409359],[-184.806166,105.767317,-.91027,-.414016],[-185.882268,105.274375,-.908003,-.418964],[-186.961946,104.77242,-.905548,-.424244],[-188.037549,104.264489,-.90291,-.42983],[-189.107647,103.750817,-.900083,-.435718],[-190.171813,103.231178,-.897059,-.441911],[-191.229621,102.705343,-.893827,-.448411],[-192.293325,102.1666,-.890335,-.455306],[-193.351254,101.620198,-.886602,-.462532],[-194.401325,101.066721,-.882622,-.470083],[-195.443093,100.505932,-.878382,-.477959],[-196.476116,99.937594,-.873867,-.486164],[-197.517303,99.351588,-.86898,-.494847],[-198.549438,98.756742,-.863773,-.503881],[-199.571114,98.153327,-.858234,-.513259],[-200.581863,97.541092,-.852344,-.522982],[-201.583286,96.918484,-.846071,-.53307],[-202.591379,96.27448,-.839278,-.543703],[-203.586605,95.620493,-.832057,-.554691],[-204.568464,94.956257,-.824385,-.56603],[-205.536459,94.281506,-.816239,-.577714],[-206.497471,93.590583,-.807525,-.589833],[-207.45693,92.878214,-.798142,-.602469],[-208.400318,92.154011,-.788184,-.61544],[-209.327104,91.417688,-.777623,-.628731],[-210.236755,90.66896,-.766432,-.642326],[-211.141892,89.896102,-.7544,-.656414],[-212.033723,89.104948,-.741582,-.670863],[-212.905997,88.299956,-.728019,-.685557],[-213.758147,87.480825,-.713686,-.700466],[-214.591712,86.645093,-.698517,-.715593],[-215.415267,85.78237,-.682293,-.731079],[-216.216248,84.904082,-.665201,-.746664],[-216.994057,84.009909,-.647224,-.7623],[-217.748098,83.099533,-.62835,-.777931],[-218.481846,82.167328,-.608455,-.793588],[-219.19221,81.215522,-.587586,-.809161],[-219.876579,80.246264,-.5658,-.824542],[-220.534341,79.259227,-.54311,-.839662],[-221.164258,78.255119,-.519559,-.854435],[-221.764507,77.235942,-.495234,-.868759],[-222.33656,76.198166,-.470099,-.882614],[-222.879812,75.141468,-.444198,-.895929],[-223.39366,74.065527,-.417585,-.908638],[-223.868417,72.991428,-.390856,-.920452],[-224.311403,71.904215,-.363718,-.931509],[-224.724724,70.79779,-.336098,-.941827],[-225.108149,69.6701,-.306859,-.951755],[-225.457497,68.524683,-.277238,-.960801],[-225.753123,67.448229,-.252871,-.9675],[-226.0318,66.328077,-.230392,-.973098],[-226.293727,65.165646,-.209607,-.977786],[-226.539104,63.962353,-.190339,-.981718],[-226.76813,62.719614,-.172433,-.985021],[-226.954171,61.607865,-.157859,-.987462],[-227.127749,60.470881,-.144157,-.989555],[-227.289428,59.307118,-.131221,-.991353],[-227.439338,58.117503,-.118984,-.992896],[-227.57761,56.90296,-.107386,-.994217],[-227.704373,55.664417,-.096374,-.995345],[-227.809212,54.524427,-.086878,-.996219],[-227.904428,53.371559,-.077829,-.996967],[-227.990614,52.201344,-.069152,-.997606],[-228.067865,51.014458,-.060821,-.998149],[-228.136277,49.811576,-.05281,-.998605],[-228.195943,48.593374,-.045095,-.998983],[-228.246067,47.384198,-.037796,-.999285],[-228.285901,46.228062,-.031119,-.999516],[-228.318445,45.060429,-.024647,-.999696],[-228.343776,43.881838,-.018368,-.999831],[-228.361969,42.69283,-.012269,-.999925],[-228.373101,41.493943,-.006336,-.99998],[-228.377248,40.285718,-56e-5,-1],[-228.3745,39.071611,.005057,-.999987],[-228.365537,37.905492,.01029,-.999947],[-228.350447,36.732354,.015409,-.999881],[-228.329297,35.552662,.02042,-.999791],[-228.302153,34.366882,.025331,-.999679],[-228.269079,33.175478,.030149,-.999545],[-228.230141,31.978917,.034881,-.999391],[-228.185405,30.777663,.039533,-.999218],[-228.135593,29.587055,.044055,-.999029],[-228.081069,28.409596,.048447,-.998826],[-228.02123,27.228993,.05278,-.998606],[-227.956138,26.045678,.057059,-.998371],[-227.885853,24.86008,.061288,-.99812],[-227.810436,23.672628,.065472,-.997854],[-227.729947,22.483753,.069615,-.997574],[-227.644447,21.293884,.073722,-.997279],[-227.554327,20.107699,.077784,-.99697],[-227.459512,18.923321,.081811,-.996648],[-227.359917,17.739232,.085816,-.996311],[-227.255601,16.555855,.089802,-.99596],[-227.146624,15.373612,.093773,-.995594],[-227.033047,14.192927,.097734,-.995213],[-226.914927,13.014223,.101689,-.994816],[-226.792326,11.837923,.105641,-.994404],[-226.663511,10.648202,.10965,-.99397],[-226.529915,9.45923,.113673,-.993518],[-226.391878,8.274065,.117707,-.993048],[-226.249463,7.093148,.121757,-.99256],[-226.102732,5.916925,.125825,-.992052],[-225.951748,4.745838,.129918,-.991525],[-225.796573,3.580332,.13404,-.990976],[-225.636257,2.413586,.138221,-.990401],[-225.466419,1.215854,.14258,-.989783],[-225.292264,.025605,.146986,-.989139],[-225.113861,-1.156663,.151447,-.988465],[-224.93128,-2.330454,.155968,-.987762],[-224.744592,-3.495268,.160555,-.987027],[-224.553867,-4.650609,.165217,-.986257],[-224.359175,-5.795979,.16996,-.985451],[-224.150811,-6.9859,.17503,-.984563],[-223.934909,-8.181926,.180289,-.983614],[-223.714754,-9.364885,.185669,-.982612],[-223.490432,-10.534175,.191182,-.981555],[-223.262027,-11.689195,.19684,-.980436],[-223.029625,-12.829344,.202656,-.97925],[-222.79331,-13.95402,.208644,-.977992],[-222.534662,-15.146646,.215299,-.976548],[-222.266683,-16.341844,.222325,-.974973],[-221.99432,-17.516136,.229622,-.97328],[-221.717685,-18.668731,.237216,-.971457],[-221.436891,-19.798834,.245136,-.969489],[-221.152049,-20.905654,.253414,-.967358],[-220.848577,-22.042447,.262536,-.964922],[-220.522251,-23.217584,.272732,-.96209],[-220.191342,-24.360726,.283531,-.958963],[-219.854755,-25.474182,.295723,-.955274],[-219.502542,-26.584836,.30875,-.951143],[-219.132815,-27.698495,.321321,-.94697],[-218.749652,-28.804402,.333343,-.942806],[-218.351319,-29.909219,.344914,-.938634],[-217.936952,-31.016286,.356091,-.934451],[-217.506895,-32.125376,.366889,-.930265],[-217.061494,-33.236264,.377324,-.926081],[-216.601094,-34.348726,.387409,-.921908],[-216.141311,-35.427232,.396856,-.917881],[-215.668488,-36.505927,.405994,-.913876],[-215.182572,-37.585475,.414843,-.909893],[-214.683877,-38.665673,.423415,-.905936],[-214.172715,-39.746316,.431719,-.902008],[-213.649558,-40.826873,.439765,-.898113],[-213.128262,-41.880095,.447371,-.894348],[-212.596012,-42.933163,.454753,-.890618],[-212.053099,-43.985889,.461919,-.886922],[-211.499809,-45.038085,.468877,-.883263],[-210.936434,-46.08956,.475637,-.879642],[-210.363262,-47.140127,.482205,-.876059],[-209.790093,-48.172612,.488486,-.872572],[-209.209179,-49.201775,.494584,-.86913],[-208.619649,-50.229523,.500518,-.865726],[-208.021775,-51.255677,.506294,-.862361],[-207.415832,-52.280058,.511917,-.859035],[-206.802092,-53.302487,.517394,-.855747],[-206.18505,-54.315904,.522694,-.85252],[-205.563089,-55.323451,.527842,-.849342],[-204.934291,-56.328565,.532862,-.846202],[-204.298922,-57.331071,.537758,-.843099],[-203.657246,-58.330797,.542536,-.840033],[-203.009531,-59.32757,.547199,-.837003],[-202.356506,-60.320512,.551748,-.834011],[-201.698823,-61.308898,.556185,-.831058],[-201.035916,-62.293825,.560521,-.82814],[-200.368048,-63.27512,.564757,-.825257],[-199.695484,-64.252613,.568899,-.822407],[-199.018487,-65.22613,.57295,-.81959],[-198.337108,-66.195799,.576913,-.816805],[-197.647374,-67.16738,.580817,-.814034],[-196.953951,-68.134407,.584637,-.811295],[-196.257108,-69.096703,.588378,-.808586],[-195.557113,-70.054094,.592041,-.805908],[-194.854237,-71.006403,.595631,-.803259],[-194.148749,-71.953455,.599148,-.800638],[-193.432016,-72.906861,.60264,-.798013],[-192.710591,-73.857886,.606077,-.795406],[-191.987311,-74.802932,.609447,-.792827],[-191.262457,-75.741816,.612755,-.790273],[-190.536312,-76.674353,.616001,-.787745],[-189.809159,-77.600359,.619189,-.785242],[-189.069613,-78.534322,.622371,-.782722],[-188.322062,-79.470579,.62553,-.7802],[-187.574353,-80.399365,.628634,-.777702],[-186.826793,-81.32048,.631686,-.775225],[-186.079687,-82.233724,.634688,-.772768],[-185.33334,-83.138899,.637644,-.770332],[-184.571283,-84.055913,.640619,-.767859],[-183.799336,-84.977541,.643592,-.765368],[-183.029214,-85.889821,.646522,-.762895],[-182.261257,-86.792531,.649411,-.760438],[-181.495807,-87.685447,.65226,-.757995],[-180.733206,-88.568346,.655072,-.755566],[-179.94284,-89.476439,.657963,-.75305],[-179.148827,-90.381692,.660846,-.750521],[-178.359124,-91.275125,.663697,-.748002],[-177.574127,-92.156479,.666517,-.74549],[-176.794232,-93.025495,.66931,-.742983],[-176.013638,-93.888744,.672101,-.74046],[-175.224156,-94.755199,.674923,-.737888],[-174.435083,-95.613271,.679283,-.733876],[-173.629645,-96.477674,.684096,-.729392],[-172.807316,-97.348832,.688729,-.725019],[-171.968568,-98.22629,.693197,-.720748],[-171.160907,-99.061258,.697283,-.716796],[-170.343111,-99.897287,.701227,-.712938],[-169.511974,-100.737737,.705059,-.709149],[-168.667891,-101.582231,.708787,-.705423],[-167.811254,-102.430391,.712419,-.701754],[-166.952095,-103.272439,.715926,-.698176],[-166.11448,-104.085408,.719227,-.694776],[-165.266542,-104.90069,.72246,-.691413],[-164.40862,-105.717959,.725632,-.688083],[-163.541053,-106.536889,.728748,-.684782],[-162.664179,-107.357155,.731812,-.681506],[-161.7855,-108.171818,.734806,-.678278],[-160.921385,-108.966056,.737681,-.675149],[-160.049516,-109.76064,.740521,-.672033],[-159.170198,-110.555277,.743328,-.668927],[-158.283737,-111.349673,.746106,-.665827],[-157.390439,-112.143533,.748857,-.662731],[-156.491349,-112.935915,.751584,-.659637],[-155.6037,-113.711806,.754238,-.656601],[-154.710361,-114.486342,.756876,-.653558],[-153.811621,-115.259247,.7595,-.650507],[-152.907766,-116.030244,.762113,-.647444],[-151.999083,-116.799057,.764716,-.644367],[-151.085862,-117.56541,.767314,-.641272],[-150.173253,-118.324992,.769893,-.638173],[-149.258676,-119.079986,.772465,-.635057],[-148.340473,-119.831741,.775037,-.631916],[-147.418923,-120.579989,.777612,-.628744],[-146.494309,-121.324457,.780192,-.625541],[-145.566912,-122.064876,.782778,-.622301],[-144.63535,-122.802285,.785378,-.619017],[-143.698334,-123.537607,.787998,-.615678],[-142.75936,-124.268015,.790631,-.612293],[-141.818713,-124.993235,.79328,-.608858],[-140.876677,-125.712993,.795946,-.605368],[-139.93354,-126.427012,.798631,-.601821],[-138.989582,-127.135023,.801338,-.598211],[-138.027964,-127.849411,.804119,-.594468],[-137.066096,-128.556992,.806927,-.590651],[-136.104281,-129.257476,.809765,-.586755],[-135.142819,-129.950574,.812634,-.582775],[-134.182013,-130.635994,.815537,-.578705],[-133.222162,-131.313448,.818476,-.57454],[-132.240089,-131.998944,.821528,-.570168],[-131.252773,-132.680186,.824645,-.56565],[-130.267456,-133.352005,.82781,-.561009],[-129.284468,-134.014082,.831023,-.556237],[-128.30414,-134.666099,.83429,-.551326],[-127.326802,-135.307739,.837612,-.546266],[-126.319495,-135.960095,.841109,-.540866],[-125.304275,-136.608155,.844714,-.535218],[-124.293447,-137.243776,.84839,-.529372],[-123.28739,-137.866592,.852141,-.523313],[-122.286483,-138.476241,.855969,-.517027],[-121.291106,-139.072355,.859879,-.510499],[-120.241477,-139.68963,.86412,-.503286],[-119.197047,-140.291911,.868469,-.495743],[-118.160202,-140.877613,.872923,-.487859],[-117.1314,-141.446299,.877484,-.479605],[-116.111095,-141.997529,.882158,-.470953],[-115.055055,-142.554123,.887163,-.461457],[-113.972042,-143.109541,.892483,-.451081],[-112.900639,-143.642928,.897944,-.440109],[-111.841424,-144.153729,.90355,-.428484],[-110.794973,-144.64139,.909298,-.416145],[-109.749225,-145.111139,.914666,-.40421],[-108.682936,-145.576758,.918166,-.396196],[-107.597446,-146.039619,.921527,-.388315],[-106.493514,-146.499309,.924762,-.380547],[-105.371898,-146.955416,.927882,-.372873],[-104.271681,-147.392483,.9308,-.36553],[-103.180467,-147.816183,.933569,-.358399],[-102.075408,-148.235603,.93626,-.351309],[-100.957146,-148.650394,.938879,-.344246],[-99.826321,-149.060208,.941433,-.3372],[-98.702182,-149.458186,.943886,-.330271],[-97.592502,-149.842001,.946232,-.323489],[-96.472946,-150.220259,.948529,-.31669],[-95.344085,-150.59265,.950781,-.309863],[-94.206491,-150.958864,.952991,-.302999],[-93.061487,-151.318356,.955159,-.296093],[-91.935169,-151.663122,.957242,-.28929],[-90.802142,-152.001115,.95929,-.282423],[-89.662935,-152.332044,.961305,-.275485],[-88.518081,-152.655621,.963289,-.268465],[-87.368112,-152.971556,.965243,-.261355],[-86.219171,-153.278086,.967157,-.254181],[-85.071806,-153.575051,.969032,-.246935],[-83.920981,-153.863675,.970879,-.239571],[-82.767212,-154.143676,.972696,-.232082],[-81.611014,-154.414774,.974484,-.224457],[-80.452906,-154.676687,.976241,-.216686],[-79.289767,-154.929911,.977973,-.208733],[-78.125437,-155.17339,.979671,-.200609],[-76.960745,-155.406771,.981335,-.192305],[-75.796213,-155.62977,.982962,-.183809],[-74.632363,-155.842104,.984549,-.175108],[-73.462957,-156.044629,.986102,-.166139],[-72.283315,-156.237691,.987624,-.15684],[-71.106004,-156.418855,.989094,-.147288],[-69.931572,-156.587823,.990506,-.137469],[-68.760567,-156.744297,.991856,-.127366],[-67.593536,-156.887979,.993136,-.116962],[-66.401443,-157.021729,.99437,-.105963],[-65.210958,-157.141746,.995518,-.094573],[-64.026446,-157.247263,.996566,-.082806],[-62.848506,-157.337956,.997502,-.07064],[-61.677731,-157.4135,.998314,-.058052],[-60.487696,-157.474784,.999,-.044708],[-59.285978,-157.520147,.999531,-.030626],[-58.094007,-157.548013,.999872,-.016002],[-56.912455,-157.558017,1,-807e-6],[-55.741995,-157.549791,.999888,.014991],[-54.555481,-157.522091,.999493,.031831],[-53.349406,-157.472874,.998755,.049877],[-52.157917,-157.402206,.997637,.068707],[-50.981799,-157.309659,.996088,.088364],[-49.821838,-157.194807,.994054,.108888],[-48.636026,-157.051579,.991363,.131149],[-47.441707,-156.879068,.987914,.155002],[-46.268373,-156.67988,.983671,.179974],[-45.116967,-156.453504,.97853,.206105],[-43.985842,-156.198807,.972358,.233494],[-42.809686,-155.896966,.964535,.263954],[-41.661701,-155.562476,.955245,.295815],[-40.543025,-155.194717,.944304,.329074],[-39.451377,-154.788411,.9277,.373327],[-38.395986,-154.33011,.906485,.422239],[-37.354195,-153.812953,.884762,.466044],[-36.316181,-153.23538,.862847,.505466],[-35.281833,-152.599738,.841139,.540819],[-34.279906,-151.928509,.820529,.571604],[-33.34748,-151.256268,.801908,.597448],[-32.417809,-150.541786,.784008,.620751],[-31.49081,-149.786819,.766911,.641753],[-30.566399,-148.993123,.750671,.660677],[-29.67564,-148.191137,.735821,.677176],[-28.832977,-147.400119,.722512,.691358],[-27.992286,-146.580832,.709958,.704244],[-27.153504,-145.734628,.698151,.715951],[-26.316566,-144.862855,.687079,.726582],[-25.484571,-143.970305,.676766,.736198],[-24.705955,-143.112708,.66773,.744404],[-23.928784,-142.236252,.659292,.751887],[-23.153008,-141.342037,.651437,.758703],[-22.378574,-140.431164,.644149,.7649],[-21.60543,-139.504735,.637413,.770522],[-20.84519,-138.578182,.631304,.775535],[-20.109305,-137.66758,.625867,.77993],[-19.374456,-136.745747,.620895,.783894],[-18.640599,-135.813639,.616378,.787451],[-17.907687,-134.872216,.612306,.790621],[-17.175675,-133.922435,.608669,.793424],[-16.450474,-132.973081,.605485,.795857],[-15.737635,-132.032694,.602756,.797926],[-15.025525,-131.087052,.600422,.799683],[-14.314104,-130.137048,.598478,.801139],[-13.603327,-129.183571,.596921,.8023],[-12.893154,-128.227513,.595747,.803172],[-12.18388,-127.270221,.594955,.803759],[-11.476501,-126.313988,.594543,.804064],[-10.769595,-125.357843,.594509,.804089],[-10.063123,-124.402669,.594854,.803834],[-9.357042,-123.44935,.595579,.803297],[-8.651309,-122.49877,.596686,.802475],[-7.945315,-121.551051,.598181,.801361],[-7.226217,-120.590026,.600107,.79992],[-6.50735,-119.634627,.602444,.798161],[-5.788671,-118.685791,.6052,.796073],[-5.070135,-117.744456,.608382,.793644],[-4.351697,-116.81156,.611998,.790859],[-3.633211,-115.88791,.61606,.787699],[-2.883926,-114.935658,.620782,.783983],[-2.134601,-113.995691,.626012,.779813],[-1.385186,-113.069073,.631766,.775159],[-.63563,-112.156867,.638059,.769987],[.114116,-111.260137,.644908,.76426],[.874987,-110.367305,.652442,.757839],[1.675946,-109.447415,.661028,.750361],[2.477301,-108.5489,.670311,.74208],[3.27911,-107.673052,.680314,.732921],[4.081437,-106.821167,.691058,.722799],[4.884341,-105.99454,.702565,.711619],[5.746592,-105.137112,.715781,.698325],[6.625036,-104.297455,.730172,.683264],[7.504401,-103.492811,.74552,.666483],[8.384766,-102.724865,.761823,.647786],[9.266212,-101.995304,.779058,.626951],[10.216647,-101.254569,.79861,.601849],[11.182666,-100.552505,.819407,.573212],[12.15051,-99.901881,.837814,.545956],[13.132328,-99.263869,.839233,.543771],[14.121674,-98.624851,.840819,.541316],[15.097456,-97.998788,.842521,.538663],[16.090418,-97.36633,.844382,.535742],[17.099911,-96.728463,.846395,.532555],[18.125287,-96.086173,.848558,.529103],[19.135827,-95.459017,.850797,.525494],[20.133242,-94.845974,.853108,.521735],[21.143176,-94.231549,.855543,.517731],[22.165081,-93.616575,.858102,.513479],[23.198407,-93.001889,.860783,.508972],[24.224425,-92.398941,.863535,.50429],[25.242501,-91.808198,.866351,.499436],[26.269722,-91.220018,.869278,.494324],[27.305591,-90.635155,.872314,.488947],[28.349615,-90.054358,.875458,.483294],[29.395965,-89.48128,.878693,.477387],[30.437041,-88.920323,.881994,.47126],[31.484578,-88.365464,.885398,.464834],[32.538106,-87.817418,.888902,.458097],[33.597156,-87.2769,.892506,.451035],[34.661249,-86.744629,.896209,.443633],[35.729187,-86.221673,.900005,.435881],[36.801231,-85.708376,.903894,.427756],[37.876911,-85.205452,.907875,.419242],[38.95576,-84.713614,.911943,.410317],[40.037307,-84.233576,.916095,.400962],[41.132036,-83.761396,.920369,.391052],[42.232911,-83.300927,.924734,.380613],[43.335102,-82.854811,.929168,.369657],[44.438121,-82.423794,.933661,.358157],[45.541479,-82.008618,.938204,.346082],[46.659725,-81.604712,.942848,.333224],[47.792687,-81.213434,.94758,.319518],[48.924436,-80.841274,.952321,.305098],[50.05444,-80.489039,.957049,.289925],[51.182169,-80.157537,.961742,.273958],[52.325179,-79.842765,.966445,.256874],[53.490382,-79.544775,.971152,.238461],[54.651378,-79.271831,.975716,.219042],[55.807572,-79.024837,.980088,.198564],[56.958369,-78.804698,.984215,.176975],[58.130907,-78.608,.988125,.153654],[59.321743,-78.438127,.991708,.12851],[60.504666,-78.300713,.994786,.10198],[61.678992,-78.196796,.997257,.074015],[62.84404,-78.127414,.999006,.044575],[64.044776,-78.093013,.999923,.01237],[65.242019,-78.098406,.999764,-.021716],[66.426787,-78.145151,.998348,-.057464],[67.598298,-78.23444,.995492,-.094844],[68.771168,-78.369544,.990937,-.134328],[69.953114,-78.555141,.984354,-.176203],[71.118309,-78.79018,.975613,-.219499],[72.265886,-79.075982,.96452,-.264009],[73.392614,-79.413098,.950938,-.309381],[74.469429,-79.79176,.935202,-.354114],[75.530675,-80.228697,.910159,-.41426],[76.596292,-80.76393,.876799,-.480857],[77.669412,-81.400299,.843549,-.537052],[78.63481,-82.051353,.814845,-.579679],[79.535878,-82.722371,.789503,-.613746],[80.441627,-83.455194,.765633,-.643278],[81.351912,-84.247443,.74333,-.668925],[82.266584,-85.096737,.722617,-.691248],[83.148512,-85.963366,.704206,-.709996],[83.929948,-86.768313,.689114,-.724653],[84.714237,-87.609396,.675059,-.737764],[85.501288,-88.485167,.661993,-.74951],[86.291012,-89.39418,.649866,-.760049],[87.083319,-90.334989,.638625,-.769518],[87.878121,-91.306147,.628222,-.778034],[88.591187,-92.199475,.619587,-.784928],[89.300179,-93.107221,.611617,-.791154],[90.010939,-94.035687,.604208,-.796827],[90.723404,-94.983862,.597332,-.801994],[91.437512,-95.950736,.590966,-.806697],[92.153199,-96.9353,.585083,-.810973],[92.870405,-97.936542,.579663,-.814856],[93.546042,-98.89221,.574972,-.818173],[94.21222,-99.8455,.570721,-.821144],[94.879544,-100.810593,.566821,-.823841],[95.547965,-101.786689,.56326,-.82628],[96.217434,-102.772987,.560026,-.828475],[96.887901,-103.768687,.557109,-.830439],[97.559316,-104.772989,.554501,-.832183],[98.229156,-105.781357,.552201,-.833711],[98.875595,-106.759882,.550259,-.834994],[99.522774,-107.744157,.548582,-.836097],[100.170648,-108.733473,.547164,-.837025],[100.819175,-109.727122,.546002,-.837784],[101.46831,-110.724393,.545092,-.838376],[102.11801,-111.724579,.544432,-.838805],[102.76823,-112.72697,.544018,-.839073],[103.418658,-113.730443,.54385,-.839182],[104.065686,-114.728789,.543925,-.839134],[104.713098,-115.727217,.544242,-.838928],[105.360852,-116.725033,.5448,-.838566],[106.008904,-117.72154,.545601,-.838045],[106.657212,-118.716042,.546646,-.837364],[107.305733,-119.707845,.547937,-.83652],[107.954424,-120.696253,.549477,-.835509],[108.603241,-121.68057,.551269,-.834327],[109.269838,-122.686738,.553378,-.83293],[109.936695,-123.687427,.555763,-.831341],[110.603548,-124.681553,.558429,-.829552],[111.270348,-125.66836,.561384,-.827556],[111.937051,-126.647095,.564634,-.825341],[112.603609,-127.617001,.568189,-.822898],[113.269975,-128.577324,.572056,-.820215],[113.941546,-129.535028,.576282,-.817251],[114.650239,-130.533865,.581112,-.813824],[115.358553,-131.519218,.586335,-.810069],[116.066432,-132.490178,.591966,-.805963],[116.773819,-133.445833,.598022,-.80148],[117.480657,-134.385275,.604522,-.796589],[118.186892,-135.307592,.611484,-.791257],[118.892465,-136.211875,.618929,-.785447],[119.652827,-137.166139,.627529,-.778593],[120.431606,-138.120605,.636989,-.770873],[121.209358,-139.049453,.647132,-.762378],[121.986005,-139.95145,.657992,-.753025],[122.761473,-140.825365,.669603,-.742719],[123.535684,-141.669966,.682003,-.73135],[124.316314,-142.492032,.695361,-.718661],[125.20592,-143.390981,.71168,-.702504],[126.093534,-144.245753,.729176,-.684327],[126.97904,-145.054457,.747875,-.66384],[127.862321,-145.815204,.767782,-.640711],[128.743261,-146.526102,.788871,-.614559],[129.668443,-147.218871,.812278,-.583271],[130.712288,-147.931047,.840042,-.542521],[131.752265,-148.563642,.868747,-.495257],[132.788175,-149.113453,.897723,-.44056],[133.819822,-149.577276,.925982,-.377568],[134.879549,-149.962307,.952933,-.303182],[135.994809,-150.279811,.968813,-.247795],[137.144059,-150.542286,.980198,-.198022],[138.325993,-150.751272,.988571,-.150753],[139.539059,-150.907999,.994358,-.106073],[140.688537,-151.007581,.997751,-.067025],[141.852362,-151.064107,.999536,-.030459],[143.038715,-151.079526,.999992,.004021],[144.246395,-151.054793,.999333,.036505],[145.474201,-150.990861,.997747,.067094],[146.62029,-150.898262,.995605,.093651],[147.780335,-150.77418,.992923,.118761],[148.954496,-150.619281,.989789,.142538],[150.141843,-150.434303,.986282,.165067],[151.341443,-150.219987,.982468,.186432],[152.499591,-149.988196,.978583,.205854],[153.637074,-149.737829,.974616,.223884],[154.782862,-149.463835,.970502,.241093],[155.936201,-149.166813,.966268,.257537],[157.096336,-148.847361,.961938,.273268],[158.262514,-148.506078,.957529,.288335],[159.380473,-148.160541,.953264,.302139],[160.49633,-147.798265,.948977,.315344],[161.615658,-147.417888,.944655,.328066],[162.737812,-147.019924,.940304,.340335],[163.862147,-146.604882,.935931,.352184],[164.988018,-146.173275,.931539,.363642],[166.083979,-145.738059,.927253,.374436],[167.174556,-145.290474,.922976,.384857],[168.264797,-144.828788,.918689,.394982],[169.354116,-144.353461,.914391,.404833],[170.441931,-143.86496,.910081,.41443],[171.527657,-143.363746,.90576,.423791],[172.60233,-142.854309,.901459,.432865],[173.668069,-142.336086,.897166,.441694],[174.730077,-141.806828,.892855,.450345],[175.787794,-141.266978,.888524,.458831],[176.840657,-140.716982,.884169,.467167],[177.888106,-140.157287,.879787,.475369],[178.931472,-139.587292,.875365,.483463],[179.973688,-139.005402,.870883,.49149],[181.008698,-138.415035,.86636,.499421],[182.035929,-137.816646,.861789,.507267],[183.054807,-137.21069,.857164,.515043],[184.064759,-136.597622,.85248,.522761],[185.065211,-135.977897,.847728,.530432],[186.082999,-135.334468,.842765,.538282],[187.090436,-134.684387,.837709,.546116],[188.085962,-134.028734,.832555,.553942],[189.068954,-133.368003,.827292,.561773],[190.038788,-132.702691,.821907,.569622],[190.994838,-132.033293,.816388,.577503],[191.978788,-131.329738,.810461,.585792],[192.953461,-130.617523,.804308,.594212],[193.910702,-129.90248,.797954,.602718],[194.84978,-129.185186,.791376,.61133],[195.769966,-128.466222,.78455,.620065],[196.673916,-127.743427,.777422,.628979],[197.625137,-126.963898,.769396,.638772],[198.551614,-126.184503,.760971,.648786],[199.452423,-125.405977,.752098,.659051],[200.326642,-124.629051,.742724,.669598],[201.173345,-123.854459,.732786,.680459],[202.054405,-123.022719,.721357,.692564],[202.929626,-122.167224,.70865,.705561],[203.766963,-121.317541,.694909,.719097],[204.565134,-120.474687,.67998,.733231],[205.326767,-119.634951,.66304,.748584],[206.066885,-118.779601,.645807,.763501],[206.804309,-117.888443,.62941,.777073],[207.540785,-116.960088,.613738,.78951],[208.275742,-115.99576,.598735,.800947],[209.00861,-114.996685,.58435,.811502],[209.673074,-114.058577,.571754,.820425],[210.330764,-113.099782,.559665,.828719],[210.985435,-112.115404,.547968,.836499],[211.636665,-111.106348,.536631,.843817],[212.284033,-110.073521,.525622,.850718],[212.904566,-109.055354,.515286,.857018],[213.497594,-108.056221,.50558,.86278],[214.086242,-107.038855,.496089,.868271],[214.670173,-106.00398,.486794,.873517],[215.249049,-104.95232,.477675,.878536],[215.822534,-103.884601,.468715,.883349],[216.372752,-102.835397,.460168,.887832],[216.906791,-101.793171,.451902,.892068],[217.435074,-100.738356,.443734,.896158],[217.95731,-99.671573,.435654,.900114],[218.473211,-98.593444,.427647,.903946],[218.982488,-97.50459,.419701,.907662],[219.478164,-96.420425,.41191,.911224],[219.95868,-95.345473,.404286,.914633],[220.432157,-94.262159,.396686,.917954],[220.898331,-93.171051,.3891,.921195],[221.356939,-92.072717,.381518,.924361],[221.807716,-90.967723,.373929,.927457],[222.250004,-89.857639,.36633,.930485],[222.679489,-88.753642,.358782,.933421],[223.100548,-87.644792,.351198,.936301],[223.512925,-86.531638,.343566,.939129],[223.916365,-85.414728,.335877,.941906],[224.310612,-84.294611,.328119,.944636],[224.695412,-83.171835,.320283,.947322],[225.07218,-82.041865,.312321,.949977],[225.439814,-80.907459,.304237,.952596],[225.797086,-79.772031,.296039,.955176],[226.143736,-78.636142,.287713,.957717],[226.479504,-77.500352,.279249,.960219],[226.804129,-76.365221,.270632,.962683],[227.119284,-75.224178,.261793,.965124],[227.42834,-74.063061,.252596,.967572],[227.724843,-72.904424,.243193,.969978],[228.008511,-71.748871,.233566,.972341],[228.279063,-70.597007,.223698,.974658],[228.536218,-69.449435,.21357,.976928],[228.779809,-68.306211,.203157,.979146],[229.019324,-67.117957,.191958,.981403],[229.243273,-65.936402,.180405,.983592],[229.451333,-64.762235,.16847,.985707],[229.643185,-63.596146,.156124,.987737],[229.818507,-62.438825,.143337,.989674],[229.977418,-61.28761,.130036,.991509],[230.127325,-60.075658,.115342,.993326],[230.257343,-58.876065,.100024,.994985],[230.367085,-57.689667,.084035,.996463],[230.456161,-56.517297,.067322,.997731],[230.524184,-55.359789,.04983,.998758],[230.572134,-54.174028,.030772,.999526],[230.597062,-52.952432,.009786,.999952],[230.595682,-51.751477,-.012351,.999924],[230.567494,-50.572237,-.035729,.999362],[230.512001,-49.415783,-.060441,.998172],[230.425976,-48.251958,-.087336,.996179],[230.301476,-47.041758,-.117756,.993043],[230.142402,-45.86286,-.15014,.988665],[229.946718,-44.71549,-.192288,.981339],[229.684313,-43.574751,-.254862,.966977],[229.35754,-42.467429,-.31006,.950717],[228.971843,-41.382747,-.358939,.933361],[228.5229,-40.294969,-.403046,.91518],[228.013226,-39.204214,-.442674,.896683],[227.445332,-38.110601,-.478165,.87827],[226.864274,-37.086211,-.507909,.861411],[226.265928,-36.105914,-.533506,.845796],[225.626888,-35.123611,-.556612,.830773],[224.948938,-34.139387,-.577458,.81642],[224.233863,-33.153325,-.596258,.802793],[223.485356,-32.167968,-.613167,.789954],[222.775536,-31.270331,-.627093,.778944],[222.039427,-30.371383,-.639759,.768576],[221.278361,-29.47119,-.65127,.758846],[220.493673,-28.569814,-.661723,.749748],[219.686694,-27.667319,-.671205,.741272],[218.858758,-26.763767,-.67979,.733406],[218.061527,-25.912409,-.687115,.726549],[217.255386,-25.067868,-.6937,.720264],[216.434344,-24.222566,-.69966,.714476],[215.599482,-23.376555,-.705034,.709174],[214.751883,-22.529886,-.709855,.704348],[213.892629,-21.68261,-.714156,.699987],[213.032379,-20.844065,-.717923,.696122],[212.187855,-20.029062,-.721142,.692787],[211.335519,-19.213639,-.723945,.689858],[210.47633,-18.397841,-.726347,.687328],[209.611248,-17.581715,-.728363,.685192],[208.741232,-16.765305,-.730002,.683445],[207.867242,-15.948657,-.731274,.682083],[206.994188,-15.135493,-.732183,.681107],[206.124708,-14.327397,-.732738,.680511],[205.25414,-13.519202,-.732948,.680285],[204.383414,-12.710952,-.732815,.680428],[203.513458,-11.902689,-.732338,.680942],[202.645201,-11.09446,-.731514,.681826],[201.779571,-10.286307,-.73034,.683084],[200.910138,-9.471362,-.728794,.684733],[200.037117,-8.648878,-.726858,.686788],[199.169732,-7.826611,-.724532,.689241],[198.308961,-7.004609,-.721805,.692096],[197.455786,-6.182918,-.718661,.695361],[196.611186,-5.361584,-.715082,.69904],[195.77614,-4.540654,-.711048,.703143],[194.925745,-3.694244,-.706385,.707828],[194.074236,-2.834736,-.701094,.713069],[193.236542,-1.97583,-.695212,.718804],[192.41379,-1.117578,-.688701,.725046],[191.607109,-.260034,-.681514,.731805],[190.817628,.596748,-.673604,.739092],[190.03731,1.463011,-.664805,.747017],[189.227089,2.385917,-.654467,.75609],[188.440969,3.307742,-.643061,.765815],[187.680371,4.228419,-.630489,.776198],[186.946713,5.147881,-.616641,.787245],[186.241414,6.06606,-.601396,.798951],[185.556921,6.995346,-.58438,.81148],[184.845557,8.009312,-.563803,.82591],[184.17443,9.021447,-.540941,.84106],[183.545469,10.031658,-.515556,.856856],[182.960605,11.039853,-.48739,.873185],[182.421765,12.045942,-.456172,.889892],[181.892935,13.131788,-.418649,.908148],[181.407535,14.252205,-.37538,.926871],[180.987498,15.369616,-.327254,.944936],[180.635525,16.483894,-.274026,.961722],[180.35432,17.59491,-.215584,.976485],[180.138714,18.754254,-.148926,.988848],[180.005877,19.920589,-.076353,.997081],[179.964264,21.095839,.004966,.999988],[180.01647,22.29621,.080459,.996758],[180.154311,23.490755,.14732,.989089],[180.352575,24.602658,.202533,.979275],[180.617097,25.732351,.252267,.967658],[180.945239,26.87913,.296848,.954925],[181.334368,28.042288,.336682,.941619],[181.777518,29.210322,.371893,.928276],[182.212274,30.249063,.399672,.916658],[182.687564,31.298694,.424771,.905301],[183.201648,32.358749,.447442,.894313],[183.752783,33.428762,.467918,.883772],[184.33923,34.508267,.486409,.873731],[184.949217,35.579562,.502854,.864371],[185.53114,36.561618,.516444,.856321],[186.137365,37.55021,.528837,.848723],[186.766641,38.545003,.540131,.841581],[187.417718,39.545662,.550413,.834892],[188.089345,40.551852,.559762,.828654],[188.78027,41.563238,.568246,.822859],[189.461525,42.540125,.575646,.817699],[190.134404,43.48777,.582135,.813092],[190.820809,44.439061,.588018,.808848],[191.519739,45.39373,.593328,.804961],[192.230193,46.351509,.598098,.801423],[192.951168,47.312129,.602353,.79823],[193.681662,48.275322,.606119,.795374],[194.408817,49.225391,.609367,.792888],[195.127042,50.156478,.612121,.790764],[195.851351,51.089217,.614471,.788939],[196.580851,52.023367,.616429,.78741],[197.314649,52.95869,.618005,.786174],[198.051853,53.894947,.619206,.785229],[198.791569,54.831897,.620038,.784572],[199.532819,55.769194,.620505,.784202],[200.271933,56.703089,.620611,.784119],[201.010885,57.636962,.620357,.784319],[201.748795,58.570576,.619743,.784805],[202.484778,59.503696,.618766,.785575],[203.217955,60.436085,.617421,.786633],[203.947441,61.367507,.615702,.787979],[204.672355,62.297725,.613601,.789617],[205.405084,63.243692,.611056,.791587],[206.139822,64.199141,.608053,.793896],[206.866845,65.152547,.604604,.796526],[207.585188,66.103649,.600689,.799483],[208.293885,67.052191,.596288,.80277],[208.991971,67.997912,.591377,.806396],[209.678479,68.940555,.585927,.810364],[210.37052,69.90526,.579737,.814804],[211.074742,70.904032,.572625,.819818],[211.762359,71.898382,.564775,.825245],[212.432197,72.887995,.556133,.831093],[213.083079,73.872557,.546639,.837368],[213.713831,74.851751,.536224,.844076],[214.323276,75.825264,.524813,.851218],[214.950432,76.860237,.511403,.859341],[215.570755,77.923539,.4961,.868265],[216.160384,78.97865,.479201,.877705],[216.717724,80.025144,.460546,.887636],[217.241179,81.062593,.439954,.89802],[217.729154,82.09057,.417227,.908802],[218.214276,83.189181,.390044,.920796],[218.678374,84.338627,.357962,.933736],[219.089459,85.473913,.322101,.946705],[219.445152,86.594403,.282073,.959393],[219.743075,87.699459,.237498,.971388],[219.987425,88.822956,.186367,.98248],[220.18012,90.046302,.123322,.992367],[220.287509,91.246852,.053379,.998574],[220.306045,92.423655,-.023246,.99973],[220.232176,93.575761,-.105822,.994385],[220.063037,94.698746,-.192723,.981253],[219.803572,95.805435,-.25625,.966611],[219.473133,96.931544,-.305665,.952139],[219.074605,98.07766,-.350099,.936713],[218.60985,99.242553,-.390045,.920796],[218.146709,100.284045,-.421922,.906632],[217.646449,101.315306,-.450396,.892829],[217.100732,102.358024,-.476465,.879194],[216.51075,103.411413,-.500375,.865809],[215.877699,104.474684,-.522352,.85273],[215.236971,105.494035,-.541639,.840611],[214.609662,106.446379,-.558267,.829661],[213.95148,107.404673,-.573795,.818999],[213.263245,108.368376,-.588323,.808626],[212.545775,109.336949,-.601942,.79854],[211.79989,110.309849,-.614735,.788734],[211.044085,111.264554,-.626511,.779412],[210.318898,112.154378,-.636862,.770978],[209.57222,113.046486,-.646691,.762752],[208.804664,113.940472,-.656039,.754727],[208.016845,114.835932,-.664944,.746893],[207.209375,115.73246,-.67344,.739242],[206.382868,116.629651,-.681559,.731763],[205.563365,117.50037,-.689102,.724664],[204.758902,118.338151,-.696074,.71797],[203.939397,119.175485,-.702784,.711404],[203.105349,120.012042,-.709251,.704956],[202.257259,120.847493,-.715491,.698622],[201.395624,121.681508,-.721521,.692392],[200.520944,122.513759,-.727356,.686261],[199.640184,123.337913,-.732968,.680263],[198.779564,124.130433,-.738221,.674558],[197.908337,124.920444,-.74333,.668925],[197.026942,125.707656,-.748304,.663356],[196.135816,126.491781,-.753151,.657847],[195.235398,127.272528,-.757882,.652392],[194.326124,128.049609,-.762503,.646985],[193.408435,128.822735,-.767023,.64162],[192.49332,129.582911,-.771399,.636352],[191.578961,130.332042,-.775652,.631161],[190.657769,131.07655,-.779827,.625995],[189.730154,131.816163,-.783931,.620848],[188.796531,132.550609,-.787968,.615716],[187.85731,133.279614,-.791945,.610593],[186.912905,134.002908,-.795865,.605474],[185.963727,134.720217,-.799735,.600353],[185.008387,135.432604,-.803566,.595216],[184.048655,136.138752,-.807357,.590064],[183.085373,136.838066,-.81111,.584894],[182.118955,137.530272,-.81483,.579699],[181.149817,138.215096,-.818522,.574475],[180.178373,138.892264,-.822189,.569215],[179.205039,139.561502,-.825835,.563913],[178.228542,140.223673,-.82947,.558552],[177.227683,140.892802,-.833177,.553006],[176.226158,141.552718,-.836875,.547393],[175.224415,142.203123,-.840567,.541707],[174.222901,142.843723,-.844257,.535939],[173.222064,143.474222,-.847948,.530079],[172.222352,144.094325,-.851645,.52412],[171.224213,144.703734,-.85535,.51805],[170.201634,145.317919,-.859168,.511694],[169.157341,145.934441,-.863094,.505044],[168.116309,146.538144,-.867042,.498234],[167.079058,147.128684,-.871017,.491253],[166.046108,147.705719,-.875022,.484083],[165.017978,148.268904,-.879061,.476708],[163.995189,148.817896,-.883139,.469112],[162.950456,149.366804,-.887372,.461055],[161.85888,149.927189,-.891876,.452281],[160.77543,150.469753,-.896437,.443171],[159.700761,150.994062,-.90106,.433695],[158.63553,151.499683,-.905748,.423817],[157.580393,151.986182,-.910504,.413501],[156.536006,152.453126,-.91533,.402704],[155.420079,152.93531,-.920627,.390442],[154.282529,153.408174,-.926186,.377066],[153.160985,153.85495,-.931833,.362887],[152.056361,154.275037,-.937563,.347816],[150.969569,154.667832,-.943367,.331751],[149.901319,155.032788,-.949289,.314406],[148.823944,155.377525,-.955403,.295305],[147.719739,155.707209,-.96085,.277067],[146.589924,156.02184,-.965702,.259654],[145.435304,156.321555,-.970022,.243016],[144.256687,156.606489,-.97387,.227107],[143.05488,156.876778,-.977295,.211882],[141.914987,157.11555,-.980146,.198275],[140.777872,157.337772,-.982658,.185429],[139.623284,157.548071,-.984911,.173059],[138.451841,157.746549,-.986932,.161136],[137.264159,157.933311,-.988741,.149635],[136.060855,158.108462,-.990358,.138529],[134.866793,158.268977,-.991773,.128006],[133.716311,158.411708,-.992979,.118294],[132.553775,158.544575,-.994056,.108871],[131.379687,158.667665,-.995015,.099721],[130.19455,158.781062,-.995867,.090828],[128.998866,158.88485,-.996618,.082177],[127.793139,158.979114,-.997276,.073755],[126.597602,159.062641,-.997841,.06568],[125.432005,159.134868,-.998314,.058051],[124.258638,159.198683,-.998719,.050596],[123.077935,159.254159,-.999062,.043306],[121.890331,159.30137,-.999346,.03617],[120.696259,159.340389,-.999574,.029179],[119.496155,159.371288,-.999751,.022326],[118.291576,159.394124,-.999878,.015608],[117.11728,159.408679,-.999958,.009202],[115.938522,159.415802,-.999996,.002903],[114.755699,159.415558,-.999995,-.003295],[113.569205,159.408015,-.999956,-.0094],[112.379437,159.39324,-.999881,-.015418],[111.186791,159.371298,-.999772,-.021354],[109.991664,159.342258,-.99963,-.027215],[108.802235,159.306442,-.999456,-.032968],[107.619074,159.264058,-.999254,-.038621],[106.434647,159.214953,-.999022,-.044215],[105.249333,159.159191,-.998761,-.049758],[104.063514,159.096838,-.998472,-.055253],[102.877569,159.027957,-.998156,-.060707],[101.69188,158.952612,-.997812,-.066122],[100.506828,158.870867,-.99744,-.071505],[99.318767,158.782477,-.99704,-.076879],[98.131458,158.687718,-.996613,-.082232],[96.945945,158.586703,-.996159,-.087566],[95.762613,158.479498,-.995677,-.092887],[94.581847,158.366166,-.995167,-.098198],[93.404033,158.246773,-.994629,-.103506],[92.229555,158.121384,-.994062,-.108813],[91.052338,157.989321,-.993463,-.114156],[89.860387,157.849052,-.992823,-.119596],[88.673137,157.702728,-.99215,-.125051],[87.491,157.550419,-.991445,-.130528],[86.314385,157.392194,-.990704,-.136032],[85.143705,157.228121,-.989929,-.141568],[83.979369,157.05827,-.989115,-.147143],[82.82179,156.882711,-.988263,-.152762],[81.633183,156.69538,-.98734,-.158621],[80.443819,156.500625,-.986363,-.164585],[79.263146,156.299914,-.985337,-.170619],[78.09163,156.093323,-.984259,-.17673],[76.929734,155.880933,-.983127,-.182926],[75.77792,155.662819,-.981936,-.189215],[74.636655,155.439062,-.980682,-.195606],[73.459527,155.200058,-.979306,-.202383],[72.271074,154.950008,-.977822,-.209435],[71.096168,154.693853,-.976252,-.216638],[69.935367,154.431687,-.974588,-.224004],[68.789228,154.163603,-.972824,-.231548],[67.658308,153.889697,-.97095,-.239284],[66.543164,153.610061,-.968957,-.24723],[65.353378,153.300723,-.966652,-.256094],[64.177292,152.983187,-.964167,-.265298],[63.022022,152.659207,-.961496,-.27482],[61.888287,152.328904,-.95862,-.284689],[60.776808,151.992399,-.955517,-.294935],[59.688306,151.649814,-.952163,-.305592],[58.532801,151.270935,-.948199,-.317676],[57.378453,150.875471,-.943749,-.330663],[56.25544,150.472952,-.938853,-.344319],[55.164756,150.063544,-.933448,-.358712],[54.098692,149.632798,-.919441,-.393228],[53.043934,149.156779,-.903325,-.428956],[52.004402,148.639141,-.886867,-.462025],[50.973606,148.078765,-.870191,-.492714],[49.951327,147.477217,-.85349,-.521109],[48.937342,146.836056,-.836926,-.547315],[47.931428,146.156848,-.820637,-.57145],[46.972595,145.470062,-.805352,-.592797],[46.043952,144.768917,-.790859,-.611999],[45.121833,144.038336,-.776839,-.629699],[44.206056,143.279605,-.763338,-.646],[43.296438,142.494009,-.75039,-.660996],[42.392798,141.682837,-.73802,-.674779],[41.528434,140.879045,-.726676,-.68698],[40.686086,140.070281,-.7161,-.697998],[39.848589,139.242067,-.706069,-.708143],[39.01579,138.395484,-.696586,-.717473],[38.187534,137.531612,-.68765,-.726042],[37.363669,136.651533,-.679259,-.733898],[36.55532,135.768775,-.671514,-.740992],[35.772171,134.896219,-.664474,-.747312],[34.992653,134.011658,-.657923,-.753085],[34.21663,133.11605,-.651857,-.758342],[33.443966,132.210349,-.64627,-.763109],[32.674526,131.295514,-.641156,-.76741],[31.908174,130.372501,-.636512,-.771267],[31.155927,129.45593,-.632389,-.774651],[30.409832,128.537487,-.62873,-.777624],[29.666321,127.613905,-.625509,-.780217],[28.925265,126.686089,-.622726,-.78244],[28.186536,125.75494,-.620377,-.784304],[27.450006,124.821362,-.618462,-.785815],[26.71539,123.886056,-.616978,-.78698],[25.980046,122.946709,-.615924,-.787805],[25.246531,122.007648,-.615307,-.788288],[24.514715,121.069784,-.615128,-.788427],[23.784468,120.134032,-.61539,-.788223],[23.05566,119.201305,-.616096,-.787671],[22.328163,118.272516,-.61725,-.786767],[21.594128,117.338782,-.618877,-.785488],[20.848157,116.394527,-.621016,-.783798],[20.103156,115.457376,-.623648,-.781705],[19.358982,114.528321,-.626784,-.779193],[18.615496,113.608357,-.630431,-.776245],[17.872556,112.698478,-.634602,-.772839],[17.130021,111.799678,-.639307,-.768952],[16.352163,110.870752,-.644824,-.764331],[15.569314,109.950259,-.651,-.759078],[14.786428,109.045524,-.657816,-.753179],[14.003341,108.157714,-.665289,-.746586],[13.219887,107.287996,-.673435,-.739247],[12.4359,106.437537,-.682271,-.731099],[11.605467,105.559791,-.692393,-.721521],[10.755731,104.687787,-.703572,-.710624],[9.904764,103.842597,-.715611,-.698499],[9.052357,103.025696,-.728519,-.685026],[8.1983,102.23856,-.7423,-.670067],[7.340696,101.48121,-.756978,-.653441],[6.393417,100.684889,-.774132,-.633024],[5.443334,99.930429,-.792269,-.610172],[4.490167,99.219813,-.811305,-.584623],[3.533632,98.555029,-.831117,-.556098],[2.573449,97.938061,-.851527,-.52431],[1.520633,97.3214,-.874212,-.485545],[.44822,96.759523,-.897221,-.441582],[-.629766,96.263998,-.919697,-.392629],[-1.713708,95.837515,-.940964,-.338507],[-2.815568,95.479405,-.960422,-.278551],[-3.971448,95.187101,-.977557,-.210672],[-5.135312,94.980548,-.990426,-.138044],[-6.314381,94.859791,-.997795,-.066366],[-7.51277,94.82139,-.999999,.001449],[-8.671058,94.858545,-.998091,.061763],[-9.828386,94.962835,-.993156,.116793],[-11.00133,95.131759,-.985899,.167343],[-12.189442,95.362781,-.976952,.213461],[-13.385653,95.65162,-.966918,.255088],[-14.480868,95.961861,-.957231,.289324],[-15.587331,96.316501,-.947253,.320487],[-16.704716,96.713689,-.9372,.348792],[-17.832696,97.151575,-.927245,.374455],[-18.970945,97.628307,-.917521,.397687],[-20.030601,98.101308,-.908838,.417149],[-21.078233,98.594616,-.900653,.434539],[-22.133531,99.115499,-.892842,.45037],[-23.196254,99.662582,-.885436,.464761],[-24.266157,100.234492,-.878458,.477819],[-25.340586,100.828497,-.871936,.48962],[-26.342847,101.398978,-.86629,.499542],[-27.350649,101.98727,-.861033,.508548],[-28.363798,102.592283,-.856169,.516696],[-29.382102,103.212929,-.851695,.524038],[-30.40537,103.848119,-.847611,.530618],[-31.43341,104.496763,-.843913,.53648],[-32.4246,105.131085,-.840723,.541466],[-33.407909,105.768067,-.837914,.545802],[-34.395007,106.414303,-.835443,.549578],[-35.38573,107.068865,-.833304,.552814],[-36.379915,107.730823,-.831496,.55553],[-37.377398,108.399248,-.830014,.557742],[-38.372867,109.069737,-.82886,.559456],[-39.348476,109.729354,-.828038,.560672],[-40.326742,110.392478,-.827515,.561443],[-41.307514,111.058254,-.827289,.561776],[-42.290642,111.72583,-.827358,.561675],[-43.275974,112.394351,-.82772,.561142],[-44.263361,113.062963,-.828372,.560179],[-45.250832,113.729587,-.829311,.558787],[-46.237355,114.392797,-.830534,.556968],[-47.225467,115.053564,-.83204,.554715],[-48.215019,115.711048,-.83383,.552022],[-49.205862,116.364405,-.835901,.54888],[-50.197848,117.012793,-.838254,.54528],[-51.190828,117.655372,-.840887,.541212],[-52.195261,118.298043,-.843831,.536609],[-53.20774,118.937653,-.847083,.53146],[-54.220783,119.568596,-.850622,.525777],[-55.234232,120.189986,-.854446,.519541],[-56.247932,120.800933,-.858551,.512728],[-57.261725,121.400548,-.862935,.505315],[-58.275454,121.987943,-.867593,.497275],[-59.324791,122.582284,-.8727,.488257],[-60.377699,123.163755,-.878109,.478461],[-61.430017,123.729077,-.883792,.467881],[-62.481571,124.277252,-.889737,.456474],[-63.532183,124.807282,-.89593,.444195],[-64.581677,125.318169,-.902354,.430996],[-65.657355,125.821509,-.909162,.416442],[-66.763495,126.316557,-.916374,.400323],[-67.86778,126.78679,-.923751,.382993],[-68.970004,127.23103,-.93125,.36438],[-70.069957,127.6481,-.938817,.344416],[-71.167434,128.036822,-.946389,.32303],[-72.288346,128.404231,-.95407,.299584],[-73.4507,128.752094,-.961882,.273466],[-74.609517,129.063702,-.969396,.245501],[-75.764548,129.337632,-.976477,.215624],[-76.915542,129.572465,-.982967,.183784],[-78.062247,129.766778,-.988694,.14995],[-79.2044,129.919149,-.993467,.114116],[-80.343311,130.029247,-.99664,.081903],[-81.502944,130.113221,-.998024,.062829],[-82.690801,130.177178,-.998989,.044959],[-83.905933,130.221507,-.999603,.028192],[-85.14739,130.246597,-.999923,.012437],[-86.291389,130.253045,-.999999,-.001002],[-87.445332,130.244516,-.999907,-.013632],[-88.618282,130.221411,-.999672,-.025621],[-89.809555,130.184009,-.999315,-.037015],[-91.018469,130.13259,-.998854,-.047858],[-92.244342,130.067432,-.998306,-.058187],[-93.430731,129.992608,-.997712,-.06761],[-94.583307,129.909428,-.997087,-.076273],[-95.748503,129.815364,-.996416,-.084586],[-96.925792,129.710631,-.995706,-.092568],[-98.114646,129.595444,-.994963,-.100242],[-99.314538,129.47002,-.994192,-.107624],[-100.524942,129.334574,-.993396,-.114734],[-101.702972,129.194506,-.992609,-.121354],[-102.858813,129.049486,-.991828,-.127585],[-104.022593,128.896159,-.991033,-.133614],[-105.193874,128.734705,-.990229,-.139452],[-106.372217,128.565304,-.989416,-.14511],[-107.557184,128.388135,-.988595,-.150596],[-108.748338,128.203377,-.987769,-.155922],[-109.93704,128.012548,-.986945,-.16106],[-111.092444,127.821073,-.986143,-.165896],[-112.252366,127.623077,-.985339,-.170606],[-113.416419,127.418719,-.984534,-.175196],[-114.584212,127.208159,-.983727,-.179672],[-115.755357,126.991554,-.982919,-.18404],[-116.929464,126.769066,-.982111,-.188305],[-118.106145,126.540853,-.981302,-.192473],[-119.274308,126.30922,-.980501,-.196513],[-120.432349,126.074709,-.979709,-.200427],[-121.591753,125.835145,-.978916,-.204262],[-122.752153,125.59068,-.978124,-.208021],[-123.913182,125.341462,-.977333,-.211709],[-125.074472,125.087644,-.976541,-.21533],[-126.235656,124.829374,-.97575,-.218887],[-127.396368,124.566803,-.974959,-.222383],[-128.556434,124.300036,-.974168,-.225824],[-129.715411,124.029241,-.973376,-.229212],[-130.872812,123.754593,-.972584,-.23255],[-132.02827,123.476243,-.971792,-.235842],[-133.181417,123.194343,-.970998,-.239089],[-134.331887,122.909042,-.970202,-.242296],[-135.47931,122.620491,-.969405,-.245466],[-136.623321,122.32884,-.968606,-.248601],[-137.781444,122.029586,-.967792,-.251753],[-138.940554,121.726057,-.96697,-.254889],[-140.094949,121.419775,-.966145,-.257998],[-141.244238,121.110903,-.965316,-.261083],[-142.38803,120.799597,-.964482,-.264147],[-143.525936,120.48602,-.963643,-.267194],[-144.657564,120.17033,-.962797,-.270225],[-145.786249,119.85163,-.961942,-.273254],[-146.951332,119.518616,-.961045,-.276392],[-148.108303,119.183836,-.960139,-.279523],[-149.256719,118.84747,-.959222,-.282652],[-150.396138,118.5097,-.958295,-.285782],[-151.526117,118.170707,-.957354,-.288917],[-152.646216,117.830671,-.9564,-.292061],[-153.755991,117.489774,-.95543,-.295217],[-154.906818,117.131992,-.954397,-.298541],[-156.067521,116.766643,-.953322,-.301955],[-157.214878,116.400954,-.952224,-.305399],[-158.348353,116.035146,-.951101,-.308879],[-159.467405,115.66944,-.94995,-.312401],[-160.571496,115.304056,-.948768,-.315972],[-161.660088,114.939215,-.947553,-.3196],[-162.816043,114.546629,-.9462,-.323583],[-163.974894,114.147499,-.94477,-.327733],[-165.112932,113.749873,-.943286,-.331982],[-166.22944,113.354043,-.941739,-.336344],[-167.323703,112.960303,-.940123,-.340835],[-168.395004,112.568946,-.93843,-.345468],[-169.516511,112.152619,-.93652,-.350613],[-170.681271,111.712545,-.93436,-.35633],[-171.813068,111.276808,-.932054,-.36232],[-172.910833,110.845848,-.929579,-.368622],[-173.9735,110.420099,-.926911,-.375282]];var sg=3,xe=1/60;var rg=15,An={FORWARD:1,BRAKE:2,LEFT:4,RIGHT:8,BOOST:16,ITEM:32,DRIFT:64,RECOVER:128,CRUISE:256},vc=[.22,.46,.68,.87],bs=[.15,.39,.61,.91],Lo=[.07,.27,.49,.72,.94],No=[.12,.24,.36,.55,.59,.8,.96],Do=[.32,.54,.76],Sc=[[.285,.335],[.735,.785]],Tr=Array.from({length:32},(i,t)=>.035+t*.0295),Zu=(i,t,e)=>Math.max(t,Math.min(e,i)),qu=(i,t,e)=>i+(t-i)*(1-Math.exp(-e*xe));function Tn(i){let t=ii[Math.round((i%1+1)%1*ii.length)%ii.length];return{x:t[0],z:t[1],vx:t[2],vz:t[3]}}function yc(i,t){let e=1/0,n=0;for(let s=0;s<ii.length;s++){let r=(ii[s][0]-i)**2+(ii[s][1]-t)**2;r<e&&(e=r,n=s)}return{distance:Math.sqrt(e),t:n/ii.length,...Tn(n/ii.length)}}function ag(i,t,e,n){let s=n.x-e.x,r=n.z-e.z,a=Zu(((i-e.x)*s+(t-e.z)*r)/(s*s+r*r),0,1);return Math.hypot(i-e.x-a*s,t-e.z-a*r)}function Mc(i=1,t=!1){let e=Tn(.01);return{version:sg,seed:i>>>0,tick:0,events:[],done:!1,lastInput:0,assisted:t,cruising:t,score:0,coins:0,lap:1,checkpoints:[],coinLaps:Array(32).fill(-1),boxReady:Array(5).fill(0),padReady:Array(7).fill(0),rampReady:Array(4).fill(0),hazardReady:Array(3).fill(0),projectiles:[],combo:0,lastLanding:-999,jumps:0,player:{x:e.x,z:e.z,angle:Math.atan2(e.vx,e.vz),speed:0,t:.01,lastT:.01,progress:0,energy:100,boostUntil:0,y:0,vy:0,shieldUntil:0,slowUntil:0,item:null,drift:0,airborne:!1,hit:0},rivals:Array.from({length:4},(n,s)=>({t:.01+(s+1)*.004,progress:(s+1)*.004,speed:27+s*1.8,lane:[-7,-2.8,3,7][s],slowUntil:0,boostUntil:0,y:0,vy:0,lastRamp:-1}))}}function og(i){return i.seed=Math.imul(i.seed,1664525)+1013904223>>>0,i.seed/4294967296}function Yu(i){let t=i.player,e=yc(t.x,t.z);Object.assign(t,{x:e.x,z:e.z,angle:Math.atan2(e.vx,e.vz),t:e.t,lastT:e.t,speed:0,y:0,vy:0,airborne:!1}),i.events.push({type:"recover"})}function Ju(i,t){if(i.done)return i;i.events=[],i.tick++;let e=i.player,n=i.tick,s=e.progress;t&An.CRUISE&&!(i.lastInput&An.CRUISE)&&(i.cruising=!i.cruising,i.cruising&&(i.assisted=!0),i.events.push({type:"cruise",on:i.cruising})),t&An.RECOVER&&!(i.lastInput&An.RECOVER)&&Yu(i);let r=!!(t&1),a=!!(t&2),o=!!(t&4),l=!!(t&8),c=!!(t&16),u=!!(t&64),m=yc(e.x,e.z),f=Sc.some(([h,v])=>ag(e.x,e.z,Tn(h),Tn(v))<6),p=m.distance>rg+1&&!f,_=c&&e.energy>1||n<e.boostUntil;c&&e.energy>1?e.energy=Math.max(0,e.energy-25*xe):e.energy=Math.min(100,e.energy+11*xe);let x=(_?58:38)*(n<e.slowUntil?.5:1);if(i.cruising){e.speed=qu(e.speed,_?48:27,3),e.t=(e.t+e.speed/xc*xe)%1;let h=Tn(e.t);e.x=h.x,e.z=h.z,e.angle=Math.atan2(h.vx,h.vz)}else{(r||_)&&(e.speed+=24*xe),a&&(e.speed-=32*xe),!r&&!a&&!_&&(e.speed=qu(e.speed,0,1.2)),e.speed=Zu(e.speed,-12,p?x*.43:x);let h=(o?1:0)-(l?1:0);Math.abs(e.speed)>.7&&(e.angle+=h*(u?2:1.58)*xe*Math.sign(e.speed)*Math.min(Math.abs(e.speed)/12,1)*(_?.82:1)*(e.airborne?.5:1)),e.x+=Math.sin(e.angle)*e.speed*xe,e.z+=Math.cos(e.angle)*e.speed*xe,m=yc(e.x,e.z),e.t=m.t,e.x*e.x/(315*315)+e.z*e.z/62500>1.06&&Yu(i)}u&&(o||l)&&e.speed>15&&!p&&!e.airborne?e.drift=Math.min(160,e.drift+1):e.drift&&(e.drift>35&&(e.boostUntil=Math.max(e.boostUntil,n+Math.min(100,e.drift)),i.events.push({type:"drift",charge:e.drift})),e.drift=0);let d=e.t-e.lastT;if(d<-.5&&d++,d>.5&&d--,Math.abs(d)<.025&&(e.progress+=d),e.lastT=e.t,t&An.ITEM&&!(i.lastInput&An.ITEM)&&e.item){let h=e.item;if(e.item=null,h==="boost"&&(e.boostUntil=n+240,e.energy=100),h==="shield"&&(e.shieldUntil=n+600),h==="pulse"){let A=i.rivals.map((M,T)=>({r:M,i:T,d:M.progress-e.progress})).filter(M=>M.d>-.015&&M.d<.4).sort((M,T)=>M.d-T.d)[0]||i.rivals.map((M,T)=>({r:M,i:T,d:Math.abs(M.progress-e.progress)})).sort((M,T)=>M.d-T.d)[0];i.projectiles.push({x:e.x,z:e.z,target:A.i,life:180})}i.events.push({type:"item",item:h})}for(let h=0;h<Tr.length;h++){let v=Tn(Tr[h]),A=Math.max(0,Math.floor(e.progress+.01)),M=h%3===0?5:h%3===1?-5:0,T=v.x-v.vz*M,w=v.z+v.vx*M;i.coinLaps[h]!==A&&Math.hypot(e.x-T,e.z-w)<5.2&&(i.coinLaps[h]=A,i.score+=100,i.coins++,e.energy=Math.min(100,e.energy+7),i.events.push({type:"coin",index:h}))}for(let h=0;h<Lo.length;h++){let v=Tn(Lo[h]);n>i.boxReady[h]&&!e.item&&Math.hypot(e.x-v.x,e.z-v.z)<6&&(e.item=["boost","shield","pulse"][Math.floor(og(i)*3)],i.boxReady[h]=n+420,i.events.push({type:"pickup",item:e.item,index:h}))}for(let h=0;h<No.length;h++){let v=Tn(No[h]);n>i.padReady[h]&&Math.hypot(e.x-v.x,e.z-v.z)<7&&(e.boostUntil=n+110,e.speed=Math.max(e.speed,48),i.padReady[h]=n+300,i.events.push({type:"boost"}))}for(let h=0;h<bs.length;h++){let v=Tn(bs[h]),A=e.x-v.x,M=e.z-v.z,T=A*v.vx+M*v.vz,w=-A*v.vz+M*v.vx;n>i.rampReady[h]&&Math.abs(w)<8&&Math.abs(T)<3&&e.speed>13&&!e.airborne&&(e.y=3.3,e.vy=15+Math.abs(e.speed)*.12,e.airborne=!0,i.rampReady[h]=n+240,i.jumps++,i.events.push({type:"jump",index:h}))}e.airborne&&(e.y+=e.vy*xe,e.vy-=27*xe,e.y<=0&&(e.y=0,e.vy=0,e.airborne=!1,i.combo=n-i.lastLanding<1200?i.combo+1:1,i.lastLanding=n,e.boostUntil=Math.max(e.boostUntil,n+45+Math.min(i.combo,4)*12),i.events.push({type:"landing",combo:i.combo})));for(let h=0;h<Do.length;h++){let v=Tn(Do[h]),A=Math.sin(n*.017+h)*11,M=v.x-v.vz*A,T=v.z+v.vx*A;n>i.hazardReady[h]&&e.y<3&&Math.hypot(e.x-M,e.z-T)<4&&(i.hazardReady[h]=n+150,n<e.shieldUntil?i.events.push({type:"blocked"}):(e.slowUntil=n+80,e.speed*=.45,e.hit=20,i.events.push({type:"hazard"})))}for(let[h,v]of i.rivals.entries()){let A=v.speed*(n<v.slowUntil?.4:1)*(n<v.boostUntil?1.4:1);n%900===h*210&&(v.boostUntil=n+100,Math.abs(v.progress-e.progress)<.04&&n>=e.shieldUntil&&(e.slowUntil=n+55,i.events.push({type:"rival-pulse"})));let M=A/xc*xe;v.t=(v.t+M)%1,v.progress+=M;let T=Tn(v.t);v.x=T.x-T.vz*v.lane,v.z=T.z+T.vx*v.lane;let w=bs.findIndex(g=>Math.abs(v.t-g)<.002);w>=0&&w!==v.lastRamp&&!v.y&&(v.vy=17,v.lastRamp=w),(v.y>0||v.vy>0)&&(v.y=Math.max(0,v.y+v.vy*xe),v.vy-=27*xe,v.y===0&&(v.vy=0)),!v.y&&w===-1&&(v.lastRamp=-1)}for(let h of i.projectiles){let v=i.rivals[h.target],A=v.x-h.x,M=v.z-h.z,T=Math.hypot(A,M);h.life--,T<6?(v.slowUntil=n+240,h.life=0,i.events.push({type:"pulse-hit",target:h.target})):(h.x+=A/T*95*xe,h.z+=M/T*95*xe)}i.projectiles=i.projectiles.filter(h=>h.life>0);for(let h=0;h<vc.length;h++)s<vc[h]-.01&&e.progress>=vc[h]-.01&&!i.checkpoints.includes(h)&&(i.checkpoints.push(h),i.events.push({type:"checkpoint",index:h}));return i.lap=Math.min(2,Math.floor(Math.max(0,e.progress))+1),s<1&&e.progress>=1&&i.events.push({type:"lap"}),e.hit=Math.max(0,e.hit-1),e.progress>=2&&i.checkpoints.length===4&&(i.done=!0,i.events.push({type:"finish"})),i.lastInput=t,i}var $u="https://dk3pfpa8al.execute-api.ap-south-1.amazonaws.com";var K=i=>document.querySelector(i),bc=matchMedia("(prefers-reduced-motion: reduce)").matches,$e=K("#panel"),mn=!1,Cn=!1,Uo=!1,Lc=!1,Rn=!1,ed=!1,nd,tn=!1,Ne,Es,Ts,id=0,Cr=null,wc=0;var Bo=0,zn=0,sd=new Set,je=new Set,kn={forward:!1,brake:!1,left:!1,right:!1,boost:!1,drift:!1},Ir=[{id:"firstshot",name:"FirstShot",subtitle:"COLOUR CANYON",icon:"\u25C8",metric:"85% right-first-time \xB7 simulated lab",t:.22,color:10849242},{id:"fireguard",name:"FireGuard",subtitle:"EMBER RIDGE",icon:"\u03DF",metric:"0.96 MB model \xB7 94% mAP50 retained",t:.46,color:16747600},{id:"accounting",name:"CA Automation",subtitle:"AUTOMATION AVENUE",icon:"\u25A4",metric:"109 automated tests \xB7 offline AI",t:.68,color:6862310},{id:"nutrition",name:"Food Data",subtitle:"NUTRITION GARDENS",icon:"\u25A5",metric:"19,000 products \xB7 6 data pipelines",t:.87,color:11586896}],rd=["Python","SQL","PyTorch","TensorFlow","MongoDB","Power BI","Docker","AWS"],wr=new Set,te=Mc(1),Nc=null,ko=[],Rc=-1,Ar=0,zi=0;var lg=[],Dc=[],ad=[],Fo=[],ws;function Le(i,t=3){K("#toast").textContent=i,K("#toast").hidden=!1,id=performance.now()+t*1e3}function Is(){je.clear(),Object.keys(kn).forEach(i=>kn[i]=!1),document.querySelectorAll(".pressed").forEach(i=>i.classList.remove("pressed"))}function Gn(i,t,e){nd=document.activeElement,Is(),Cn=!0,K("#panel-title").textContent=i,K("#panel-eyebrow").textContent=t,K("#panel-content").innerHTML=e,K("#resume").onclick=Ei,K("#resume").textContent=mn?"CONTINUE RACE \u2192":"BACK TO HOME \u2197",$e.open||$e.showModal(),$e.scrollTop=0,$e.querySelector(".panel-inner").scrollTop=0,hg()}function Ei(){$e.close()}$e.addEventListener("close",()=>{Cn=!1,nd?.focus({preventScroll:!0})});K("#close-panel").onclick=Ei;K("#resume").onclick=Ei;function cg(){return`<p class="panel-intro">Four real projects. Four stops on the circuit. Open any one\u2014no racing required.</p><div class="project-cards">${Ir.map(i=>`<button class="project-card" data-project="${i.id}"><span class="project-icon">${i.icon}</span><span class="eyebrow">${i.subtitle}</span><h3>${i.name}</h3><p>${{firstshot:"Physics-informed ML for paint colour matching.",fireguard:"Multi-sensor, offline edge AI for fire detection.",accounting:"Documents to validated accounting entries.",nutrition:"Making packaged food data understandable."}[i.id]}</p><div class="metric">${i.metric}</div><span class="arrow">\u2197</span></button>`).join("")}</div>`}function Go(i){let t=Wu[i];sd.add(i),Gn(t.title,t.category,t.body+'<div class="contact-links"><button data-panel="projects">\u2190 All project stops</button></div>')}function Uc(i){i==="projects"&&Gn("Choose your pit stop.","COURSE SELECT / FOUR BUILDS",cg()),i==="driver"&&Gn("Meet your driver.","PLAYER PROFILE / RUDRA MAHARAO",'<div class="driver-card"><img src="assets/rudra.jpg" alt="Rudra Maharao"><div><h3>Rudra Maharao</h3><p>B.Tech Data Science \xB7 NMIMS MPSTME, Mumbai</p><div class="driver-badges"><span>CLASS OF 2028</span><span>CGPA 8.11</span><span>CURIOUS BY DEFAULT</span></div></div></div><p>I build applied AI and data systems that work beyond a notebook\u2014from paint colour matching and accounting automation to embedded vision and food analytics. I\u2019m looking for an internship in data science or applied AI.</p><div class="stat-grid"><div><b>20+</b><span>GAME BUGS REPORTED</span></div><div><b>8</b><span>STUDENTS SUPPORTED</span></div><div><b>4</b><span>PROJECT PIT STOPS</span></div></div><div class="story-row"><span>MAY \u2013 JULY 2026 \xB7 WETEST</span><h3>The tester behind the steering wheel.</h3><p>I tested gameplay, controls, and user experience, reporting 20+ bugs and glitches and suggesting improvements. This racing portfolio is a nod to that side of my story.</p></div><div class="story-row"><span>JUNE \u2013 JULY 2025 \xB7 ANUBHAVI FOUNDATION</span><h3>Sometimes, the next level is algebra.</h3><p>I gave individualised mathematics support to eight Grade 10 students, strengthening foundational algebra. Different people need different routes to understanding.</p></div><div class="research-card"><span class="tiny">ONGOING RESEARCH</span><h3>When a fishery closes, where do the boats go?</h3><p>Predicting fishing effort displacement and the net benthic benefit of fisheries closures in the North-East Atlantic, using satellite AIS vessel data, temporal modelling, location-choice benchmarks, and seabed habitat sensitivity.</p><p>Supervisor: Dr. Meenal Mategaonkar. Initial baseline obtained; model fine-tuning in progress, with closure-event validation planned.</p></div>'),i==="skills"&&Gn("The skill garage.","LOADOUT / TOOLS FOR THE REAL WORLD",`<p>Pick up the gold skill coins on the circuit. Every tool below is available to explore right now.</p><p class="collection-note"><b>${wr.size} / 8</b> skill coins collected this run${wr.size?": "+[...wr].map(t=>rd[t]).join(", "):"."}</p>${[["BUILD & SHIP","Python,SQL,C++,FastAPI,Django,Flask,Docker,AWS Lambda,AWS ECR,Linux,Git"],["TRAIN & REASON","PyTorch,TensorFlow,Keras,scikit-learn,YOLO,CNNs,Model compression,RAG,Ollama,Qdrant"],["EXPLORE & EXPLAIN","NumPy,pandas,MongoDB,SQLite,Power BI,DAX,Data wrangling,Tesseract OCR"]].map(([t,e])=>`<div class="skill-group"><h3>${t}</h3><div>${e.split(",").map(n=>`<span class="skill-tag">${n}</span>`).join("")}</div></div>`).join("")}<div class="research-card"><span class="tiny">LEVEL-UPS</span><p>MongoDB Certified Database Administrator<br>RAG Systems & Agentic Workflows with Pinecone and LangGraph \xB7 Board Infinity<br>Neural Networks and Deep Learning; Improving Deep Neural Networks \xB7 DeepLearning.AI</p></div>`),i==="contact"&&Gn("Let\u2019s build a great team.","NEXT ADVENTURE / OPEN TO INTERNSHIPS",'<p>Have a data science internship, an applied AI problem, or an interesting idea? I\u2019d love to hear about it.</p><div class="contact-card"><span class="tiny">SEND A SIGNAL</span><br><a href="mailto:rudramaharao@gmail.com">rudramaharao@gmail.com \u2197</a></div><div class="contact-links"><a href="https://github.com/RudraMaharao" target="_blank" rel="noopener noreferrer">GitHub \u2197</a><a href="https://github.com/RudraMaharao/rudra-rally" target="_blank" rel="noopener noreferrer">Rally source \u2197</a><a href="https://www.linkedin.com/in/rudra-maharao-a040b9331/" target="_blank" rel="noopener noreferrer">LinkedIn \u2197</a><button id="copy-email">Copy email</button></div><p id="copy-result" role="status"></p>'),i==="help"&&Gn("A quick driving lesson.","CONTROLS / NO LICENCE REQUIRED",'<div class="help-list"><div><b>W / \u2191 \u2014 Accelerate</b><span>S / \u2193 brakes, then reverses.</span></div><div><b>A D / \u2190 \u2192 \u2014 Steer</b><span>Keep your kart on the grey road for full speed.</span></div><div><b>SPACE \u2014 Boost</b><span>Spend boost energy. It recharges when you let go.</span></div><div><b>R \u2014 Recover</b><span>Return to the nearest point on the circuit.</span></div><div><b>SHIFT \u2014 Drift</b><span>Hold while turning, then release for a mini-turbo.</span></div><div><b>Q \u2014 Use item</b><span>Collect a box for Turbo Burst, Bubble Shield or Rival Pulse.</span></div><div><b>P / ESC \u2014 Pause</b><span>Take a breath. Resume whenever you\u2019re ready.</span></div></div><h3>A few things worth a detour</h3><p><b>Gold coins</b> add 100 points and reveal skills. <b>Rainbow boost pads</b> give a burst of speed. The <b>four project buildings</b> contain real case studies. Race two full laps. Lap one pauses at all four project gates; lap two keeps you racing. Coins are worth 100 points each.</p><p><b>Just exploring?</b> Turn on cruise control, or use the menu to read everything. On mobile, use the on-screen steering, accelerator, brake, and boost buttons. The original soundtrack starts with your drive. Use the music button and volume slider to adjust it.</p><p class="fine">Original arcade kart world, built for Rudra\u2019s portfolio.</p>')}function hg(){$e.querySelectorAll("[data-panel]").forEach(e=>e.onclick=()=>Uc(e.dataset.panel)),$e.querySelectorAll("[data-project]").forEach(e=>e.onclick=()=>Go(e.dataset.project));let i=K("#copy-email");i&&(i.onclick=async()=>{try{await navigator.clipboard.writeText("rudramaharao@gmail.com"),K("#copy-result").textContent="Email copied. See you on the starting grid!"}catch{K("#copy-result").textContent="Select the email address above to copy it."}});let t=K("#race-again");t&&(t.onclick=()=>{Ei(),Ic(!1)})}document.querySelectorAll("[data-panel]").forEach(i=>i.onclick=()=>Uc(i.dataset.panel));K("#pause").onclick=()=>Ho();function Ho(){!mn||Rn||(Gn("A little pit stop.","RACE PAUSED",'<p>Your kart is waiting right where you left it.</p><div class="resume-actions"><button class="primary" id="continue-race">RESUME \u2192</button><button class="secondary" data-panel="projects">Explore projects \u2197</button></div>'),K("#continue-race").onclick=Ei)}var ri=K("#bgm"),Vo=null,ai=.35;try{let i=localStorage.getItem("rudra-rally-music");Vo=i===null?null:i==="on";let t=localStorage.getItem("rudra-rally-volume");t!==null&&(ai=Math.max(0,Math.min(1,Number(t)||0)))}catch{}K("#music-volume").value=Math.round(ai*100);ri.volume=ai;function ug(){Ne||(Ne=new(window.AudioContext||window.webkitAudioContext),Ts=Ne.createGain(),Ts.gain.value=0,Ts.connect(Ne.destination),Es=Ne.createOscillator(),Es.type="triangle",Es.frequency.value=50,Es.connect(Ts),Es.start()),Ne.resume().catch(()=>{})}function Oo(){let i=K("#sound");i.setAttribute("aria-pressed",String(tn)),i.setAttribute("aria-label",tn?"Mute music":"Play music"),i.title=tn?"Apex Groove \u2014 mute":"Play Apex Groove",K(".sound-slash").hidden=tn,K("#music-caption").textContent=tn?"NOW PLAYING \xB7 APEX GROOVE":"APEX GROOVE \xB7 ORIGINAL SOUNDTRACK"}async function Fc(i,t=!1){if(t){Vo=i;try{localStorage.setItem("rudra-rally-music",i?"on":"off")}catch{}}if(!i){tn=!1,ri.pause(),Oo();return}try{ug(),await ri.play(),tn=!0,Oo()}catch{tn=!1,Oo(),Le("Tap the music button to start the soundtrack.")}}K("#sound").onclick=()=>{Fc(!tn,!0)};K("#music-volume").addEventListener("input",i=>{ai=Number(i.target.value)/100,ri.volume=ai;try{localStorage.setItem("rudra-rally-volume",String(ai))}catch{}});document.addEventListener("visibilitychange",()=>{document.hidden?ri.pause():tn&&ri.play().catch(()=>{tn=!1,Oo()})});function Cc(){if(!tn||!Ne)return;let i=Ne.createOscillator(),t=Ne.createGain();i.connect(t),t.connect(Ne.destination),i.frequency.setValueAtTime(700,Ne.currentTime),i.frequency.exponentialRampToValueAtTime(1400,Ne.currentTime+.12),t.gain.setValueAtTime(.035*ai,Ne.currentTime),t.gain.exponentialRampToValueAtTime(.001,Ne.currentTime+.22),i.start(),i.stop(Ne.currentTime+.23)}var on,Lt,Je,zo,dg,wn,od,ld=[],Ku=new D,As=[],Wo=[],fg=[],Rs=[],pg=[],cd=[],hd=[],Ct=te.player,Ec=new Map;function Oc(i,t=!0){let e=i+"-"+t;return Ec.has(e)||Ec.set(e,new ps({color:i,roughness:.88,flatShading:t})),Ec.get(e)}function Pr(i,t,e=Lt,n=0,s=0,r=0){let a=new Pe(i,Oc(t));return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,e.add(a),a}function Vt(i,t,e,n,s,r=0,a=0,o=0){return Pr(new gi(i,t,e),n,s,r,a,o)}function Ge(i,t,e,n=0,s=0,r=0){return Pr(new ds(i,12,8),t,e,n,s,r)}function ie(i,t,e,n,s,r=0,a=0,o=0,l=12){return Pr(new rr(i,t,e,l),n,s,r,a,o)}function si(i,t="#fffdf3",e="#152f49",n=512,s=100){let r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.strokeStyle=e,a.lineWidth=10,a.strokeRect(5,5,n-10,s-10),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle",a.font=`${s*.4}px Bungee,Arial`,a.fillText(i,n/2,s/2+2,n-35);let o=new nr(r);o.colorSpace=ze;let l=new tr(new us({map:o,depthTest:!0}));return l.scale.set(21,21*s/n,1),ld.push(l),l}function pe(i){return zo.getPointAt((i%1+1)%1)}function De(i){return zo.getTangentAt((i%1+1)%1)}function Tc(i,t,e,n){let s=[],r=[],a=[];for(let u=0;u<=900;u++){let m=u/900,f=pe(m),p=De(m),_=-p.z,x=p.x,d=new zt(typeof n=="function"?n(u):n);for(let h of[i,t])s.push(f.x+_*h,e,f.z+x*h),r.push(d.r,d.g,d.b);if(u<900){let h=u*2;a.push(h,h+2,h+1,h+1,h+2,h+3)}}let l=new Ye;l.setAttribute("position",new he(s,3)),l.setAttribute("color",new he(r,3)),l.setIndex(a),l.computeVertexNormals();let c=new Pe(l,new ps({vertexColors:!0,roughness:1,side:pn}));return c.receiveShadow=!0,Lt.add(c),c}function Qu(i,t){let e=new re;Vt(3.5,.8,5.5,i,e,0,1.1,0),Vt(3,.75,2.4,i,e,0,1.75,1.6),Vt(3.8,.35,1,16773838,e,0,.9,2.5),Vt(3.2,.45,1,2505804,e,0,1.4,-2.7),Vt(4.7,.3,.7,i,e,0,2.5,-2.4);for(let a of[-2,2])for(let o of[-1.7,1.6]){let l=ie(.8,.8,.7,1518133,e,a,.85,o,12);l.rotation.z=Math.PI/2;let c=ie(.4,.4,.72,15001823,e,a,.85,o,10);c.rotation.z=Math.PI/2}Vt(1.5,1.4,1.2,2706018,e,0,2.2,-.7),Ge(.87,11958609,e,0,3.4,-.25);let n=Ge(1,t,e,0,3.8,-.35);n.scale.y=.8,Vt(1.5,.4,.2,2505804,e,0,3.6,.57),Vt(.35,.6,.28,16767053,e,0,4.2,.4);for(let a of[-.85,.85]){let o=Ge(.28,11958609,e,a,2.4,.55)}let s=new Pe(new fs(.56,.09,6,12),Oc(1518133));s.position.set(0,2.6,.6),s.rotation.x=-.6,e.add(s);let r=si("RM","#fff3ce","#193548",128,96);return r.scale.set(1.5,1.1,1),r.position.set(0,1.8,2.6),e.add(r),Lt.add(e),e}function mg(i,t,e=1){let n=new re;n.position.set(i,0,t),n.scale.setScalar(e),ie(.45,.7,4,10052415,n,0,2,0,6),Ge(3.2,5481306,n,0,5.7,0),Ge(2.1,8438886,n,-1.5,6.5,.2),Ge(1.8,9555818,n,1.3,7.1,.4),Lt.add(n)}function gg(i,t,e=1){let n=new re;n.position.set(i,0,t),n.scale.setScalar(e),ie(.4,.6,3,9920836,n,0,1.5,0,6),ie(0,3,5,3115881,n,0,4,0,6),ie(0,2.5,4,5484154,n,0,6.3,0,6),Lt.add(n)}function _g(i){let t=pe(i.t),e=De(i.t),n=new D(-e.z,0,e.x),s=new re;s.position.copy(t).addScaledVector(n,28),s.rotation.y=Math.atan2(e.x,e.z);let r=16775135;Vt(15,.7,14,14078136,s,0,.3,0),Vt(11,7,9,r,s,0,4,0),Vt(12,.9,10,i.color,s,0,8,0),Vt(12,1.1,1,i.color,s,0,5,5);for(let l of[-3.3,3.3])Vt(2.4,2.6,.1,6930139,s,l,4.1,4.57);Vt(2,3,.2,2378600,s,0,2.2,4.65);for(let l of[-6,6])ie(.15,.15,5,i.color,s,l,2.5,5,6);if(i.id==="firstshot")for(let l=0;l<3;l++)ie(1.1,1.1,3,[16300128,11772390,5813931][l],s,(l-1)*3,10,0),ie(1.2,1.2,.3,16775135,s,(l-1)*3,11.6,0);if(i.id==="fireguard"&&(Vt(5,5,5,15629131,s,0,10,0),Ge(1.6,16765764,s,0,13.8,0).scale.set(.75,1.5,.75),ie(0,1,2.5,16772522,s,0,15,0,5)),i.id==="accounting")for(let l=0;l<3;l++)Vt(5,.7,5,6002367,s,(l-1)*.5,9+l,0),Vt(4.5,.5,4.5,16774357,s,(l-1)*.5,9.6+l,0);if(i.id==="nutrition")for(let l=0;l<3;l++){let c=3+l*1.3;Vt(1.5,c,2,[9551443,15845211,15635553][l],s,(l-1)*2.5,8.5+c/2,0)}Lt.add(s);let a=si(i.name.toUpperCase());a.position.copy(s.position),a.position.y=18,a.scale.set(23,4.5,1),Lt.add(a),i.position=t,i.building=s;let o=new Pe(new fs(3,.2,6,24),Oc(i.color));o.rotation.x=Math.PI/2,o.position.copy(t),o.position.y=.57,Lt.add(o)}function xg(i){let t=i;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ju(i,t){let e=1/0,n=0;for(let s=0;s<As.length;s++){let r=As[s],a=(r.x-i)**2+(r.z-t)**2;a<e&&(e=a,n=s)}return{distance:Math.sqrt(e),t:n/As.length,p:As[n]}}function vg(){Lt=new $s,Lt.background=new zt(12052735),Lt.fog=new Js(12052735,620,1150),Je=new We(49,innerWidth/innerHeight,1.5,1400),Je.position.set(300,285,420),on=new Co({antialias:!0,powerPreference:"high-performance"}),on.setPixelRatio(Math.min(devicePixelRatio,1.5)),on.setSize(innerWidth,innerHeight),on.shadowMap.enabled=!0,on.shadowMap.type=Ni,on.outputColorSpace=ze,on.toneMapping=fr,on.toneMappingExposure=1.12,K("#world").appendChild(on.domElement),Lt.add(new cr(15005183,7838533,2.5));let i=new dr(16774099,3);i.position.set(-160,350,140),i.castShadow=!0,i.shadow.mapSize.set(innerWidth<760?1024:2048,innerWidth<760?1024:2048),Object.assign(i.shadow.camera,{left:-340,right:340,top:290,bottom:-290,near:1,far:850}),i.shadow.normalBias=.15,i.shadow.bias=-1e-4,Lt.add(i);let t=Pr(new _i(2e3,2e3),6670308,Lt,0,-11,0);t.rotation.x=-Math.PI/2,t.castShadow=!1;let e=ie(299,278,24,12888182,Lt,0,-12,0,96);e.scale.set(1.05,1,.84),e.castShadow=!1;let n=ie(300,299,2,9554012,Lt,0,-.3,0,96);n.scale.set(1.05,1,.84),n.castShadow=!1,zo=new ar(Xu.map(x=>new D(...x)),!0,"catmullrom",.45),dg=zo.getLength();for(let x=0;x<1e3;x++)As.push(pe(x/1e3));Tc(-15,15,.8,6912901),Tc(-17,-15,.83,x=>Math.floor(x/3)%2?16774875:15693660),Tc(15,17,.83,x=>Math.floor(x/3)%2?16774875:15693660);for(let x=0;x<160;x++){let d=x/160,h=pe(d),v=De(d),A=Vt(.27,.04,2.3,15918264,Lt,h.x,.84,h.z);A.rotation.y=Math.atan2(v.x,v.z),A.castShadow=!1}let s=pe(.01),r=De(.01),a=new re;a.position.copy(s),a.rotation.y=Math.atan2(r.x,r.z);for(let x of[-18,18])Vt(1.3,14,1.3,16762957,a,x,7,0),Vt(2.5,1,2.5,16774621,a,x,.5,0);Vt(38,4,1.5,3034983,a,0,14,0);let o=si("RUDRA RALLY","#ffd94c","#17344e",512,100).material.map;for(let x of[-1,1]){let d=new Pe(new _i(34,3.5),new Li({map:o}));d.position.set(0,14,x*.78),d.rotation.y=x===1?0:Math.PI,a.add(d)}for(let x=0;x<22;x++)for(let d=0;d<3;d++)Vt(1.4,.03,1.4,(x+d)%2?2570572:16774621,a,(x-10.5)*1.4,.9,(d-1)*1.4);Lt.add(a);let l=[8238923,11130219,8830034];for(let x=0;x<18;x++){let d=x*.41,h=Math.cos(d)*275,v=Math.sin(d)*211;if(ju(h,v).distance<20)continue;let A=Ge(24,l[x%3],Lt,h,1,v);A.scale.set(1.2,.45,1),A.castShadow=!1}let c=xg(37);for(let x=0;x<185;x++){let d=(c()-.5)*580,h=(c()-.5)*450;d*d/(290*290)+h*h/50625>1||ju(d,h).distance<15||Math.hypot(d,h)<48||(x%3?mg:gg)(d,h,.6+c()*.55)}let u=ie(43,43,.2,6932702,Lt,-5,.8,4,40);u.scale.z=.7,u.castShadow=!1;let m=ie(12,14,1,12244085,Lt,1,1,4,24);Vt(10,5,9,16774099,Lt,1,3.8,4);let f=Ge(5.5,6794702,Lt,1,6.5,4);f.scale.y=.75;let p=ie(.9,.9,8,16763984,Lt,3,10,5,12);p.rotation.z=-.7;let _=si("STAY CURIOUS","#fff9e8");_.position.set(1,16,4),_.scale.set(21,4.1,1),Lt.add(_);for(let x=0;x<6;x++){let d=x/6*Math.PI*2,h=ie(1.4,1.4,.12,8960358,Lt,-5+Math.cos(d)*35,.96,4+Math.sin(d)*21,8);h.castShadow=!1}Ir.forEach(_g);for(let x=0;x<Tr.length;x++){let d=Tr[x],h=pe(d),v=De(d),A=x%3===0?5:x%3===1?-5:0,M=new re,T=ie(1.4,1.4,.35,16762159,M,0,0,0,20);T.rotation.x=Math.PI/2;let w=ie(1.05,1.05,.38,16769897,M,0,0,0,20);w.rotation.x=Math.PI/2,Vt(.3,1.5,.4,14260763,M),M.position.set(h.x-v.z*A,3.5,h.z+v.x*A),Lt.add(M),Wo.push({g:M,t:d,index:x})}for(let x of No){let d=pe(x),h=De(x),v=new re;v.position.set(d.x,.87,d.z),v.rotation.y=Math.atan2(h.x,h.z),[15246550,12820975,9554917,11132333,16769934].forEach((A,M)=>Vt(24,.08,1.1,A,v,0,0,(M-2)*1.1)),Lt.add(v),fg.push({p:d})}for(let x=0;x<20;x++){let d=.26+x*.0026,h=pe(d),v=De(d),A=-v.z,M=v.x,T=Vt(1,1.8,3.6,x%2?16768868:16773844,Lt,h.x-A*20,1.7,h.z-M*20);T.rotation.y=Math.atan2(v.x,v.z)}for(let x=0;x<7;x++){let d=x/7*Math.PI*2,h=Math.cos(d)*292,v=Math.sin(d)*225,A=ie(.16,.16,9,16774876,Lt,h,4.5,v,6),M=Vt(3.5,2,.08,[16158836,11113697,7847399,16765528][x%4],Lt,h+1.6,8,v)}for(let x=0;x<9;x++){let d=new re;for(let h=0;h<4;h++){let v=Ge(5+h%2*2,16777215,d,(h-1.5)*5,h%2*2,0);v.castShadow=!1}d.position.set((x-4)*110,70+x%3*15,-230+x%2*370),Lt.add(d),pg.push(d)}for(let x=0;x<3;x++){let d=new re,h=[16755304,13216233,16767591][x],v=Ge(6,h,d,0,0,0);v.scale.y=1.2,ie(.7,1.5,2,16112801,d,0,-7,0),Vt(2,1.5,2,11237454,d,0,-10,0);for(let A of[-.8,.8])for(let M of[-.8,.8])ie(.035,.035,2.5,10390384,d,A,-8.5,M,4);d.position.set(160-x*150,70+x*12,-205-x*9),Lt.add(d),cd.push(d)}for(let[x,d]of[[-260,-70],[250,130]]){let h=new re;ie(2,3,12,16773587,h,0,6,0,8),ie(0,3.7,4,15110504,h,0,13.5,0,8);let v=new re;v.position.set(0,10,2.5);for(let A=0;A<4;A++){let M=Vt(1,7,.2,16769186,v,0,3.5,0),T=new re;T.add(M),v.remove(M),M.position.set(0,3.5,0),T.rotation.z=A*Math.PI/2,v.add(T)}h.add(v),h.position.set(x,0,d),Lt.add(h),hd.push(v)}yg(),wn=Qu(16283970,16767323);for(let x=0;x<4;x++){let d=Qu([10980057,5223364,15901259,15173790][x],[13677552,10214589,16766826,16105417][x]);Rs.push({kart:d,t:.01+(x+1)*.014,progress:(x+1)*.014,speed:24+x*2})}od=K("#map").getContext("2d"),ud(),md(),Lc=!0,K("#loading").hidden=!0,requestAnimationFrame(pd)}function yg(){for(let[r,a]of Sc){let o=pe(r),l=pe(a),c=l.clone().sub(o),u=o.clone().add(l).multiplyScalar(.5),m=c.length(),f=Vt(12,.15,m,14268777,Lt,u.x,.98,u.z);f.rotation.y=Math.atan2(c.x,c.z);for(let _=0;_<8;_++){let x=o.clone().lerp(l,_/7),d=Vt(1,.1,2,16772782,Lt,x.x,.94,x.z);d.rotation.y=f.rotation.y}let p=si("SHORTCUT \u2197","#ffe081");p.position.copy(o),p.position.y=7,p.scale.set(16,3.2,1),Lt.add(p)}for(let r of bs){let a=pe(r),o=De(r),l=new re;l.position.set(a.x,.83,a.z),l.rotation.y=Math.atan2(o.x,o.z);let c=new Ye,u=new Float32Array([-8,0,-12,8,0,-12,-8,3.8,2,8,0,-12,8,3.8,2,-8,3.8,2,-8,0,-12,-8,0,2,-8,3.8,2,8,0,-12,8,3.8,2,8,0,2,-8,0,2,8,0,2,-8,3.8,2,8,0,2,8,3.8,2,-8,3.8,2]);c.setAttribute("position",new sn(u,3)),c.computeVertexNormals(),Pr(c,15906119,l);for(let f of[-7.6,7.6]){let p=Vt(.5,.6,15,16774077,l,f,2,-5);p.rotation.x=-.265}let m=si("JUMP!","#ffb454");m.position.set(0,7,1),m.scale.set(10,2,1),l.add(m),Lt.add(l),lg.push({g:l,t:r})}for(let r of Lo){let a=pe(r),o=new re;Vt(3.4,3.4,3.4,9925839,o);let l=si("?","#ffeb8f","#244664",128,128);l.scale.set(2.7,2.7,1),l.position.set(0,0,2),o.add(l),o.position.set(a.x,3.5,a.z),Lt.add(o),Dc.push({g:o,t:r})}for(let[r,a]of Do.entries()){let o=pe(a),l=new re;ie(1.9,1.9,4.2,15895380,l,0,2.2,0,10);for(let c=0;c<3;c++)ie(2,2,.35,16772524,l,0,1+c*1.2,0,10);Ge(1.3,16764756,l,0,4.6,0),l.position.set(o.x,.8,o.z),Lt.add(l),ad.push({g:l,t:a,index:r})}for(let[r,a]of Ir.entries()){let o=pe(a.t),l=De(a.t),c=new re;c.position.copy(o),c.rotation.y=Math.atan2(l.x,l.z);for(let m of[-17,17])Vt(1.2,11,1.2,a.color,c,m,5.5,0),Ge(1.4,16773043,c,m,12,0);Vt(35,1.5,1,a.color,c,0,11,0);let u=si("CHECKPOINT "+(r+1),"#fff9e8");u.position.set(0,14,0),u.scale.set(23,4.5,1),c.add(u);for(let m=0;m<16;m++)Vt(1.8,.04,1.8,m%2?a.color:16775135,c,(m-7.5)*1.8,.91,0);Lt.add(c)}[[-165,-145,11836133],[245,-90,16096614],[190,145,8178149],[-95,175,12902265]].forEach(([r,a,o],l)=>{let c=Ge(24,o,Lt,r,3,a);c.scale.set(1.3,.45,1),c.castShadow=!1;for(let m=0;m<4;m++){let f=ie(0,4+m%2,12+m*3,o,Lt,r+(m-1.5)*12,8+m*2,a-12,5);f.rotation.z=(m-1.5)*.1}let u=si(["COLOUR CANYON","EMBER RIDGE","AUTOMATION AVE","NUTRITION GARDENS"][l],"#fff9e8");u.position.set(r,28,a),u.scale.set(35,6,1),Lt.add(u)});let t=.42,e=pe(t),n=De(t),s=new re;s.position.copy(e),s.rotation.y=Math.atan2(n.x,n.z);for(let r=0;r<4;r++){for(let a of[-18,18])Vt(1.2,13,1.2,7120829,s,a,6.5,(r-1.5)*7);Vt(37,1.2,1.2,[16300145,10920415,9162443,13821322][r],s,0,13,(r-1.5)*7)}Lt.add(s);for(let r=0;r<6;r++){let a=pe(.17+r*.13),o=De(.17+r*.13),l=new re;l.position.set(a.x-o.z*26,0,a.z+o.x*26);for(let c=0;c<5;c++)ie(.12,.12,2,6524476,l,(c-2)*1.3,1,0,5),Ge(.7,[16765288,15506601,13873895][c%3],l,(c-2)*1.3,2.3,0);Lt.add(l)}ws=new Pe(new ds(4,20,12),new Li({color:8643839,wireframe:!0,transparent:!0,opacity:.45})),ws.visible=!1,Lt.add(ws);for(let r=0;r<5;r++){let a=Ge(1.2,10480115);a.visible=!1,Fo.push(a)}}function ud(i=.01){let t=pe(i),e=De(i);Object.assign(Ct,{x:t.x,z:t.z,angle:Math.atan2(e.x,e.z),speed:0,t:i,energy:100,boostUntil:0,progress:0,lastT:i}),wn.position.set(t.x,.9,t.z),wn.rotation.y=Ct.angle}var Sg=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ac=0;async function Cs(i,t){let e=await fetch($u+i,{method:t?"POST":"GET",headers:t?{"Content-Type":"application/json"}:{},body:t?JSON.stringify(t):void 0,signal:AbortSignal.timeout(25e3)}),n=await e.json();if(!e.ok)throw Error(n.error||"The record board is unavailable. Please try again.");return n}async function Xo(){let i=++Ac;K("#leaderboard").textContent="Loading race records\u2026";try{let{scores:t}=await Cs("/scores");if(i!==Ac)return;K("#leaderboard").innerHTML=t.length?t.map((e,n)=>`<div class="board-row"><b>${n+1}</b><span>${Sg(e.name)}<small>${e.score.toLocaleString()} POINTS</small></span><time>${Yo(e.milliseconds/1e3)}</time></div>`).join(""):'<p class="board-empty">No records yet.<br>Your name could be first on the grid.</p>'}catch{i===Ac&&(K("#leaderboard").innerHTML='<p class="board-empty">The board is taking a pit stop.<br>Tap Refresh to reconnect.</p>')}}K("#refresh-board").onclick=Xo;Xo();var Rr;try{Rr=localStorage.getItem("rudra-review-id")}catch{}if(!/^[a-f0-9]{32}$/.test(Rr||"")){Rr=crypto.randomUUID().replaceAll("-","");try{localStorage.setItem("rudra-review-id",Rr)}catch{}}async function dd(){try{let i=await Cs("/reviews/summary");document.querySelectorAll("[data-rating-summary]").forEach(t=>t.textContent=i.count?i.average.toFixed(1)+" / 5 \xB7 "+i.count+" REVIEW"+(i.count===1?"":"S"):"BE THE FIRST TO RATE THE RIDE")}catch{document.querySelectorAll("[data-rating-summary]").forEach(i=>i.textContent="RATE YOUR DRIVE")}}function fd(i=0){let t=i;Gn("How was the ride?","VISITOR FEEDBACK / THANKS FOR DROPPING BY",`<p>Rate the portfolio from 1 to 5 stars. Got an idea, spotted a bug, or enjoyed a particular stop? Leave an optional note.</p><form id="review-form"><div class="review-stars" role="group" aria-label="Choose your rating">${[1,2,3,4,5].map(e=>`<button type="button" data-review-star="${e}" aria-label="${e} stars" aria-pressed="${e<=t}">\u2605</button>`).join("")}</div><p id="chosen-rating">${t?t+" out of 5":"Choose a star rating"}</p><label for="review-comment">Your review (optional, private)</label><textarea id="review-comment" maxlength="1000" rows="4" placeholder="What worked? What could be better?"></textarea><p class="fine">Only Rudra can read your comment. Your star rating contributes to the public average and review count. One review per browser.</p><div class="resume-actions"><button class="primary" id="send-review">SEND REVIEW \u2192</button><button type="button" class="secondary" id="cancel-review">CANCEL</button></div><p id="review-status" role="status"></p></form>`),$e.querySelectorAll("[data-review-star]").forEach(e=>e.onclick=()=>{t=+e.dataset.reviewStar,$e.querySelectorAll("[data-review-star]").forEach(n=>n.setAttribute("aria-pressed",String(+n.dataset.reviewStar<=t))),K("#chosen-rating").textContent=t+" out of 5"}),K("#cancel-review").onclick=Ei,K("#review-form").onsubmit=async e=>{if(e.preventDefault(),!t){K("#review-status").textContent="Choose a star rating first.";return}K("#send-review").disabled=!0;try{await Cs("/reviews",{rating:t,comment:K("#review-comment").value,visitor:Rr}),K("#panel-content").innerHTML="<h3>Thanks for the feedback!</h3><p>Your rating is counted, and your note is saved privately for Rudra.</p>",dd()}catch(n){K("#review-status").textContent=n.message,K("#send-review").disabled=!1}}}document.querySelectorAll("[data-rating]").forEach(i=>i.onclick=()=>fd(+i.dataset.rating));K("#review-link").onclick=()=>fd();dd();function qo(i){Vo!==!1&&Fc(!0),Gn("Before we hit the track.","YOUR DRIVER / RUDRA MAHARAO",`<div class="driver-card"><img src="assets/rudra.jpg" alt="Rudra Maharao"><div><h3>Hi, I\u2019m Rudra.</h3><p>I build applied AI and data systems\u2014and I like a good game.</p></div></div><div class="intro-profile-grid"><article><span>01 / ACADEMICS</span><h3>B.Tech Data Science</h3><p>NMIMS MPSTME, Mumbai<br>Expected 2028 \xB7 CGPA <b>8.11</b></p></article><article><span>02 / EXPERIENCE</span><h3>Testing & teaching</h3><p><b>WeTest, May\u2013July 2026:</b> reported 20+ gameplay, controls and UX bugs.<br><b>Anubhavi Foundation, June\u2013July 2025:</b> tutored eight Grade 10 students in maths.</p></article></div><div class="research-card"><span class="tiny">03 / CERTIFICATIONS</span><ul><li>MongoDB Certified Database Administrator</li><li>RAG Systems & Agentic Workflows with Pinecone and LangGraph \u2014 Board Infinity / Coursera</li><li>Neural Networks and Deep Learning \u2014 DeepLearning.AI / Andrew Ng</li><li>Improving Deep Neural Networks \u2014 DeepLearning.AI / Andrew Ng</li></ul></div><p><b>Your route:</b> two laps, four rivals, and four real projects. Lap one pauses at each project checkpoint. Lap two is uninterrupted. Coins add 100 points each; the leaderboard rewards the quickest time.</p><div class="race-brief"><span>\u2191 / W ACCELERATE</span><span>\u2190 \u2192 / A D STEER</span><span>SPACE BOOST</span><span>SHIFT DRIFT</span><span>Q USE ITEM</span></div><p class="fine">${i?"Scenic Tour steers for you. Boost and items are still yours to use.":"Drive yourself, or switch to cruise control during the race. Every completed run can join the same top-five leaderboard."} Reading time is excluded from your race time.</p><button class="primary" id="intro-go">${i?"BEGIN SCENIC TOUR":"LET\u2019S RACE"} \u2192</button><p id="start-status" role="status"></p>`),K("#resume").textContent="START THE RACE \u2192",K("#resume").onclick=()=>Ic(i),K("#intro-go").onclick=()=>Ic(i)}async function Ic(i){if(!Lc){Uc("projects");return}let t=K("#intro-go");t&&(t.disabled=!0),K("#resume").disabled=!0;try{let e=await Cs("/runs/start",{tour:i});Nc=e.token,te=Mc(e.seed,i),Ct=te.player,ko=[],Rc=-1,Ar=0,zi=0,Is(),wr.clear(),sd.clear(),Wo.forEach(n=>n.g.visible=!0),mn=!0,Cn=!1,Rn=!1,Uo=i,ed=i,Bo=0,wc=performance.now()+3e3,K("#resume").onclick=Ei,$e.open&&$e.close(),K("#record-dialog").open&&K("#record-dialog").close(),["intro","intro-bottom","world-label","home-board"].forEach(n=>K("#"+n).hidden=!0),["race-hud","drive-ui","touch-controls","item-slot"].forEach(n=>K("#"+n).hidden=!1),document.body.classList.add("playing"),K("#race-mode").textContent=i?"SCENIC TOUR":"CURIOSITY GP",K("#autodrive").setAttribute("aria-pressed",String(Uo)),K("#autodrive b").textContent=Uo?"ON":"OFF",K("#coin-count").textContent="0000",K("#coins-total").textContent="0 COINS",K("#lap").textContent="1 / 2",K("#timer").textContent=Yo(0),K("#countdown").hidden=!1,K("#countdown").textContent="3",wn.position.set(Ct.x,.94,Ct.z),wn.rotation.y=Ct.angle,Je.position.copy(wn.position).add(new D(-Math.sin(Ct.angle)*25,15,-Math.cos(Ct.angle)*25)),Rs.forEach((n,s)=>{let r=te.rivals[s],a=pe(r.t),o=De(r.t);n.kart.position.set(a.x-o.z*r.lane,.94,a.z+o.x*r.lane),n.kart.rotation.y=Math.atan2(o.x,o.z)}),Vo!==!1&&Fc(!0),Le(i?"Scenic Tour: enjoy the projects, play with items!":"Two laps. Four rivals. Let\u2019s make a good story.",4)}catch(e){let n=K("#start-status");n?n.textContent="Could not open a timed run. "+e.message:Le(e.message,5)}finally{t&&(t.disabled=!1),K("#resume").disabled=!1}}K("#start").onclick=()=>qo(!1);K("#tour").onclick=()=>qo(!0);function Bc(){$e.open&&$e.close(),K("#record-dialog").open&&K("#record-dialog").close(),mn=!1,Cn=!1,Rn=!1,Is(),Nc=null,ko=[],document.body.classList.remove("playing"),["race-hud","drive-ui","touch-controls","checkpoint-prompt","countdown","item-slot"].forEach(i=>K("#"+i).hidden=!0),["intro","intro-bottom","world-label","home-board"].forEach(i=>K("#"+i).hidden=!1),Lc&&ud(),K("#resume").onclick=Ei,Xo()}K("#home").onclick=Bc;K("#autodrive").onclick=()=>{zi|=An.CRUISE};K("#use-item").onclick=()=>{zi|=An.ITEM};K("#explore-stop").onclick=()=>{Cr&&Go(Cr.id)};function Mg(){mn&&(zi|=An.RECOVER)}window.addEventListener("keydown",i=>{if($e.open||K("#record-dialog").open||!mn||Rn)return;let t=i.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," ","w","a","s","d","shift"].includes(t)&&(i.preventDefault(),je.add(t)),!i.repeat&&(t==="r"&&Mg(),t==="q"&&(zi|=An.ITEM),t==="e"&&Cr&&Go(Cr.id),(t==="p"||t==="escape")&&Ho())});window.addEventListener("keyup",i=>je.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>{Is(),mn&&!Cn&&!Rn&&Ho()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Is(),mn&&!Cn&&!Rn&&Ho())});document.querySelectorAll("[data-control]").forEach(i=>{let t=i.dataset.control;i.addEventListener("pointerdown",n=>{n.preventDefault(),kn[t]=!0,i.classList.add("pressed"),i.setPointerCapture(n.pointerId)});let e=()=>{kn[t]=!1,i.classList.remove("pressed")};i.addEventListener("pointerup",e),i.addEventListener("pointercancel",e),i.addEventListener("lostpointercapture",e)});function Yo(i){let t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*100)%100;return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}function Pc(i=!1){K("#record-content").innerHTML=`<h2 id="record-title">${i?"Your name is on the board.":"Thanks for taking the detour."}</h2><p>${i?"Your verified time has been saved.":"This run has not been published."} Ready for another lap around my world?</p><div class="resume-actions"><button class="primary" id="play-again">PLAY AGAIN \u21BA</button><button class="secondary" id="back-home">HOME PAGE \u2192</button></div>`,K("#play-again").onclick=()=>{K("#record-dialog").close(),qo(!1)},K("#back-home").onclick=Bc,K("#play-again").focus()}K("#record-dialog").addEventListener("cancel",i=>{i.preventDefault(),K("#record-form")?Pc(!1):Bc()});function bg(){Rn=!0,Ct.speed=0,Cn=!0,Is();let i=1+te.rivals.filter(n=>n.progress>Ct.progress).length,t=n=>n===1?"ST":n===2?"ND":n===3?"RD":"TH";K("#checkpoint-prompt").hidden=!0,K("#record-content").innerHTML=`<div class="race-result"><div class="trophy">\u{1F3C6}</div><h2 id="record-title">THAT\u2019S A FINISH!</h2><div class="stat-grid"><div><b>${i}${t(i)}</b><span>FINISH POSITION</span></div><div><b>${Yo(Bo)}</b><span>TWO-LAP TIME</span></div><div><b>${te.score}</b><span>COIN POINTS</span></div></div><p>${te.coins} coins \xB7 ${te.jumps} ramp jumps \xB7 ${te.checkpoints.length} projects explored</p><p class="fine">Global leaderboard. Your reading and pause time are excluded.</p><form id="record-form"><label for="record-name">Save your time with a public name or arcade alias</label><input id="record-name" minlength="2" maxlength="20" required autocomplete="off" placeholder="Your name"><div class="record-actions"><button class="primary" id="submit-record">SAVE MY RECORD \u2192</button><button type="button" class="secondary" id="dont-save">DON\u2019T SAVE</button></div><p id="record-status" role="status">Only your name, time and coin score will appear publicly.</p></form></div>`,K("#record-dialog").showModal(),K("#record-name").focus(),K("#dont-save").onclick=()=>Pc(!1);let e=null;K("#record-form").onsubmit=async n=>{n.preventDefault();let s=K("#record-name").value.trim(),r=K("#submit-record");if(!/^[\p{L}\p{N} _.-]{2,20}$/u.test(s)){K("#record-status").textContent="Use 2\u201320 letters, numbers, spaces, dots or dashes.";return}r.disabled=!0,K("#record-status").textContent="Verifying your two-lap run\u2026";try{e||(e=(await Cs("/runs/finish",{token:Nc,log:ko,endTick:te.tick})).receipt),await Cs("/scores",{receipt:e,name:s}),Xo(),Pc(!0)}catch(a){K("#record-status")&&(K("#record-status").textContent=a.message),K("#submit-record")&&(K("#submit-record").disabled=!1)}},Cc()}function Eg(i,t){if(!mn||Cn||Rn)return;if(t<wc){K("#countdown").textContent=String(Math.ceil((wc-t)/1e3));return}K("#countdown").hidden=!0,Ar+=i;let e=0;for(;Ar>=xe&&e++<15&&!Cn&&!Rn;){let o=zi;zi=0,(je.has("w")||je.has("arrowup")||kn.forward)&&(o|=1),(je.has("s")||je.has("arrowdown")||kn.brake)&&(o|=2),(je.has("a")||je.has("arrowleft")||kn.left)&&(o|=4),(je.has("d")||je.has("arrowright")||kn.right)&&(o|=8),(je.has(" ")||kn.boost)&&(o|=16),(je.has("shift")||kn.drift)&&(o|=64),o!==Rc&&(ko.push([te.tick,o]),Rc=o),Ju(te,o),Ar-=xe,Bo=te.tick*xe,Uo=te.cruising,ed=te.assisted;for(let l of te.events){if(l.type==="coin"&&(wr.add(l.index%8),Le("+100 POINTS \xB7 "+rd[l.index%8],1.5),Cc()),l.type==="pickup"&&(Le("ITEM FOUND: "+{boost:"TURBO BURST",shield:"BUBBLE SHIELD",pulse:"RIVAL PULSE"}[l.item]+" \xB7 Q to use"),Cc()),l.type==="item"&&Le({boost:"TURBO BURST! Four seconds of extra speed.",shield:"BUBBLE SHIELD! Protected for 10 seconds.",pulse:"RIVAL PULSE! Chasing the nearest kart."}[l.item]),l.type==="pulse-hit"&&Le("DIRECT HIT! Rival slowed."),l.type==="boost"&&Le("RAINBOW BOOST!",1.5),l.type==="drift"&&Le("DRIFT RELEASE! Mini-turbo!",1.5),l.type==="jump"&&Le("AIR TIME!",1),l.type==="landing"&&Le("CLEAN LANDING \xB7 "+l.combo+"\xD7 JUMP COMBO \xB7 BOOST!",2),l.type==="hazard"&&Le("BUMPER HIT! Shake it off.",1.5),l.type==="blocked"&&Le("SHIELD SAVED YOU!",1.5),l.type==="rival-pulse"&&Le("RIVAL PULSE! Briefly slowed.",1.5),l.type==="recover"&&Le("Back on track."),l.type==="cruise"&&(Le(l.on?"Cruise control on \xB7 this run joins the global leaderboard.":"You\u2019re driving again."),K("#autodrive").setAttribute("aria-pressed",String(l.on)),K("#autodrive b").textContent=l.on?"ON":"OFF"),l.type==="checkpoint"){let c=Ir[l.index];Go(c.id),K("#resume").textContent="CONTINUE RACE \u2192",K("#panel-eyebrow").textContent=`CHECKPOINT ${l.index+1} / 4 \xB7 LAP ONE \xB7 TIMER PAUSED`,Ar=0}l.type==="lap"&&Le("FINAL LAP! No more stops. Make it count.",4),l.type==="finish"&&bg()}te.tick>=71500&&!Rn&&(Gn("Time for a fresh start.","RUN LIMIT / 20 MINUTES",'<p>Let\u2019s start a new two-lap adventure.</p><button class="primary" id="race-again">PLAY AGAIN \u2192</button>'),Rn=!0,K("#race-again").onclick=()=>qo(!1))}let n=te.tick<Ct.boostUntil||je.has(" ")&&Ct.energy>1,s=0;if(!Ct.airborne)for(let o of bs){let l=pe(o),c=De(o),u=Ct.x-l.x,m=Ct.z-l.z,f=u*c.x+m*c.z,p=-u*c.z+m*c.x;Math.abs(p)<8&&f>-12&&f<2&&(s=Math.max(s,(f+12)/14*3.8))}wn.position.set(Ct.x,.94+Ct.y+s,Ct.z),wn.rotation.y=Ct.angle,wn.rotation.x=Ct.airborne?Math.max(-.25,Math.min(.25,-Ct.vy*.012)):0,wn.rotation.z=ys.damp(wn.rotation.z,Ct.drift?Math.sin(zn*12)*.12:Ct.hit?Math.sin(zn*30)*.2:0,8,i);for(let[o,l]of Rs.entries()){let c=te.rivals[o],u=De(c.t);l.t=c.t,l.progress=c.progress,l.kart.position.set(c.x??pe(c.t).x,.94+c.y,c.z??pe(c.t).z),l.kart.rotation.y=Math.atan2(u.x,u.z)}let r=Math.max(0,Math.floor(Ct.progress+.01));Wo.forEach((o,l)=>o.g.visible=te.coinLaps[l]!==r),Dc.forEach((o,l)=>o.g.visible=te.tick>te.boxReady[l]),ad.forEach((o,l)=>{let c=pe(o.t),u=De(o.t),m=Math.sin(te.tick*.017+l)*11;o.g.position.set(c.x-u.z*m,.8,c.z+u.x*m)}),ws.visible=te.tick<Ct.shieldUntil,ws.position.set(Ct.x,3+Ct.y,Ct.z),ws.rotation.y=zn;for(let o=0;o<Fo.length;o++){let l=te.projectiles[o];Fo[o].visible=!!l,l&&Fo[o].position.set(l.x,2.8,l.z)}Cr=null,K("#checkpoint-prompt").hidden=!0;let a=1+Rs.filter(o=>o.progress>Ct.progress).length;K("#position").textContent=a,K("#position-suffix").textContent=a===1?"ST":a===2?"ND":a===3?"RD":"TH",K("#speed").textContent=Math.round(Math.abs(Ct.speed)*3),K("#timer").textContent=Yo(Bo),K("#lap").textContent=te.lap+" / 2",K("#coin-count").textContent=String(te.score).padStart(4,"0"),K("#coins-total").textContent=te.coins+" COINS",K("#boost-fill").style.width=Ct.energy+"%",K("#boost-label").textContent=Ct.drift>35?"DRIFT CHARGED \xB7 RELEASE SHIFT":n?"BOOSTING!":Ct.energy<20?"RECHARGING\u2026":"BOOST READY \xB7 SPACE",K("#item-icon").textContent={boost:"\u03DF",shield:"\u25CE",pulse:"\u2726"}[Ct.item]||"?",K("#item-name").textContent={boost:"TURBO BURST",shield:"BUBBLE SHIELD",pulse:"RIVAL PULSE"}[Ct.item]||"FIND AN ITEM BOX",K("#use-item").disabled=!Ct.item}function Tg(){let i=od;i.clearRect(0,0,220,170),i.save(),i.translate(110,85),i.scale(.39,.39),i.lineCap="round",i.lineJoin="round",i.beginPath(),As.forEach((t,e)=>e?i.lineTo(t.x,t.z):i.moveTo(t.x,t.z)),i.closePath(),i.lineWidth=19,i.strokeStyle="#91a5a9",i.stroke(),i.lineWidth=12,i.strokeStyle="#fff9e6",i.stroke();for(let t of Ir)i.fillStyle="#"+new zt(t.color).getHexString(),i.beginPath(),i.arc(t.position.x,t.position.z,9,0,Math.PI*2),i.fill();for(let t of Rs)i.fillStyle="#665c97",i.beginPath(),i.arc(t.kart.position.x,t.kart.position.z,6,0,Math.PI*2),i.fill();i.translate(Ct.x,Ct.z),i.rotate(-Ct.angle),i.beginPath(),i.moveTo(0,14),i.lineTo(-10,-10),i.lineTo(10,-10),i.closePath(),i.fillStyle="#ff6b32",i.fill(),i.lineWidth=1.5,i.strokeStyle="#173650",i.stroke(),i.restore()}var td=0,Ag=0;function pd(i){requestAnimationFrame(pd);let t=Math.min((i-td)/1e3,.2)||.016;if(td=i,zn+=t,i>id&&(K("#toast").hidden=!0),Eg(t,i),bc||(Dc.forEach((e,n)=>{e.g.rotation.y=zn,e.g.position.y=3.5+Math.sin(zn*2+n)*.4}),Wo.forEach(e=>{e.g.rotation.y=zn*1.7,e.g.position.y=3.5+Math.sin(zn*2+e.index)*.4}),cd.forEach((e,n)=>e.position.y=70+n*12+Math.sin(zn*.4+n)*2),hd.forEach(e=>e.rotation.z+=t*.45)),mn){let e=new D(Ct.x-Math.sin(Ct.angle)*22,14+Ct.y*.65,Ct.z-Math.cos(Ct.angle)*22);Je.position.lerp(e,1-Math.exp(-t*5));let n=new D(Ct.x+Math.sin(Ct.angle)*9,2.5+Ct.y*.65,Ct.z+Math.cos(Ct.angle)*9);Je.lookAt(n),Je.fov=ys.damp(Je.fov,Ct.speed>38&&!bc?63:57,3,t)}else{let e=innerWidth<760,n=bc?0:Math.sin(zn*.075)*.08,s=new D(300*Math.cos(n)+100*Math.sin(n),e?330:285,420*Math.cos(n)-300*Math.sin(n));Je.position.lerp(s,.035),Je.lookAt(e?-45:-85,0,e?10:0),Je.fov=e?64:48;for(let r of Rs){r.t=(r.t+t*.012)%1;let a=pe(r.t),o=De(r.t);r.kart.position.set(a.x,.94,a.z),r.kart.rotation.y=Math.atan2(o.x,o.z)}}for(let e of ld)e.scale.x<5||(e.getWorldPosition(Ku),e.material.opacity=mn?ys.smoothstep(Je.position.distanceTo(Ku),18,38):1);if(Je.updateProjectionMatrix(),Ts&&(Ts.gain.setTargetAtTime(tn&&mn&&!Cn?.012*ai:0,Ne.currentTime,.08),Es.frequency.setTargetAtTime(45+Math.abs(Ct.speed)*3,Ne.currentTime,.08)),tn&&!ri.paused){let e=ai*(Cn?.32:1);ri.volume=ys.damp(ri.volume,e,5,t)}++Ag%3===0&&Tg(),on.render(Lt,Je)}function md(){on&&(Je.aspect=innerWidth/innerHeight,Je.updateProjectionMatrix(),on.setSize(innerWidth,innerHeight),on.setPixelRatio(Math.min(devicePixelRatio,innerWidth<760?1.3:1.5)))}window.addEventListener("resize",md);try{await document.fonts.ready,vg()}catch(i){console.error("3D engine unavailable:",i),K("#loading").hidden=!0,K("#webgl-error").hidden=!1,K("#intro").hidden=!0,K("#world-label").hidden=!0}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
