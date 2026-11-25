(()=>{var Xl="160";var Id=0,Ic=1,Ld=2;var cu=1,Nd=2,Qn=3,xi=0,Dt=1,wn=2;var yi=0,Ts=1,ur=2,Lc=3,Nc=4,Dd=5,Ui=100,Ud=101,Od=102,Dc=103,Uc=104,Fd=200,kd=201,Bd=202,zd=203,el=204,tl=205,Hd=206,Gd=207,Vd=208,Wd=209,qd=210,$d=211,Xd=212,Yd=213,jd=214,Zd=0,Jd=1,Kd=2,ga=3,Qd=4,ef=5,tf=6,nf=7,Yl=0,sf=1,rf=2,vi=0,af=1,of=2,lf=3,cf=4,hf=5,uf=6;var hu=300,Rs=301,Ps=302,nl=303,il=304,$a=306,sl=1e3,En=1001,rl=1002,zt=1003,Oc=1004;var vo=1005;var cn=1006,df=1007;var dr=1008;var _i=1009,ff=1010,pf=1011,jl=1012,uu=1013,mi=1014,gi=1015,fr=1016,du=1017,fu=1018,Fi=1020,mf=1021,Tn=1023,gf=1024,yf=1025,ki=1026,Is=1027,vf=1028,pu=1029,_f=1030,mu=1031,gu=1033,_o=33776,xo=33777,bo=33778,Mo=33779,Fc=35840,kc=35841,Bc=35842,zc=35843,yu=36196,Hc=37492,Gc=37496,Vc=37808,Wc=37809,qc=37810,$c=37811,Xc=37812,Yc=37813,jc=37814,Zc=37815,Jc=37816,Kc=37817,Qc=37818,eh=37819,th=37820,nh=37821,So=36492,ih=36494,sh=36495,xf=36283,rh=36284,ah=36285,oh=36286;var ya=2300,va=2301,wo=2302,lh=2400,ch=2401,hh=2402;var vu=3e3,Bi=3001,bf=3200,Mf=3201,_u=0,Sf=1,hn="",ut="srgb",ni="srgb-linear",Zl="display-p3",Xa="display-p3-linear",_a="linear",it="srgb",xa="rec709",ba="p3";var os=7680;var uh=519,wf=512,Ef=513,Tf=514,xu=515,Af=516,Cf=517,Rf=518,Pf=519,dh=35044;var fh="300 es",al=1035,ti=2e3,Ma=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Eo=Math.PI/180,ol=180/Math.PI;function Sr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function If(n,e){return(n%e+e)%e}function To(n,e,t){return(1-t)*n+t*e}function ph(n){return(n&n-1)===0&&n!==0}function ll(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ve=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],g=i[8],y=s[0],p=s[3],f=s[6],S=s[1],v=s[4],T=s[7],P=s[2],C=s[5],w=s[8];return r[0]=o*y+a*S+l*P,r[3]=o*p+a*v+l*C,r[6]=o*f+a*T+l*w,r[1]=c*y+h*S+d*P,r[4]=c*p+h*v+d*C,r[7]=c*f+h*T+d*w,r[2]=u*y+m*S+g*P,r[5]=u*p+m*v+g*C,r[8]=u*f+m*T+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,g=t*d+i*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new qe;function bu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lf(){let n=Sa("canvas");return n.style.display="block",n}var mh={};function or(n){n in mh||(mh[n]=!0,console.warn(n))}var gh=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[ni]:{transfer:_a,primaries:xa,toReference:n=>n,fromReference:n=>n},[ut]:{transfer:it,primaries:xa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xa]:{transfer:_a,primaries:ba,toReference:n=>n.applyMatrix3(yh),fromReference:n=>n.applyMatrix3(gh)},[Zl]:{transfer:it,primaries:ba,toReference:n=>n.convertSRGBToLinear().applyMatrix3(yh),fromReference:n=>n.applyMatrix3(gh).convertLinearToSRGB()}},Nf=new Set([ni,Xa]),Ke={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Nf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Vr[e].toReference,s=Vr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vr[n].primaries},getTransfer:function(n){return n===hn?_a:Vr[n].transfer}};function As(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ls,wa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Sa("canvas")),ls.width=e.width,ls.height=e.height;let i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Sa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Df=0,Ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ro(s[o].image)):r.push(Ro(s[o]))}else r=Ro(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ro(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uf=0,dn=class n extends bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=En,s=En,r=cn,o=dr,a=Tn,l=_i,c=n.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Sr(),this.name="",this.source=new Ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bi?ut:hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sl:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sl:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Bi:vu}set encoding(e){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bi?ut:hn}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=hu;dn.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,T=(m+1)/2,P=(f+1)/2,C=(h+u)/4,w=(d+y)/4,D=(g+p)/4;return v>T&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=w/i):T>P?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=D/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=w/r,s=D/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Bi?ut:hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends cl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ta=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hl=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==u||c!==m||h!==g){let p=1-a,f=l*u+c*m+h*g+d*y,S=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let P=Math.sqrt(v),C=Math.atan2(P,f*S);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}let T=a*S;if(l=l*p+u*T,c=c*p+m*T,h=h*p+g*T,d=d*p+y*T,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*u,e[t+1]=l*g+h*u+c*d-a*m,e[t+2]=c*g+h*m+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Po=new I,vh=new Mi,zi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),qr.subVectors(this.max,ir),cs.subVectors(e.a,ir),hs.subVectors(e.b,ir),us.subVectors(e.c,ir),hi.subVectors(hs,cs),ui.subVectors(us,hs),Pi.subVectors(cs,us);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Pi.z,Pi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Pi.z,0,-Pi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Pi.y,Pi.x,0];return!Io(t,cs,hs,us,qr)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,cs,hs,us,qr))?!1:($r.crossVectors(hi,ui),t=[$r.x,$r.y,$r.z],Io(t,cs,hs,us,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new I,new I,new I,new I,new I,new I,new I,new I],bn=new I,Wr=new zi,cs=new I,hs=new I,us=new I,hi=new I,ui=new I,Pi=new I,ir=new I,qr=new I,$r=new I,Ii=new I;function Io(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Of=new zi,sr=new I,Lo=new I,Hi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Of.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Lo)),this.expandByPoint(sr.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new I,No=new I,Xr=new I,di=new I,Do=new I,Yr=new I,Uo=new I,Ls=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){No.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(No);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xr),a=di.dot(this.direction),l=-di.dot(Xr),c=di.lengthSq(),h=Math.abs(1-o*o),d,u,m,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(No).addScaledVector(Xr,u),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){Do.subVectors(t,e),Yr.subVectors(i,e),Uo.crossVectors(Do,Yr);let o=this.direction.dot(Uo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);let l=a*this.direction.dot(Yr.crossVectors(di,Yr));if(l<0)return null;let c=a*this.direction.dot(Do.cross(di));if(c<0||l+c>o)return null;let h=-a*di.dot(Uo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,m,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,m,g,y,p)}set(e,t,i,s,r,o,a,l,c,h,d,u,m,g,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,m=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,g=c*h,y=c*d;t[0]=u+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,g=c*h,y=c*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,m=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,kf)}lookAt(e,t,i){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),fi.crossVectors(i,Kt),fi.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),fi.crossVectors(i,Kt)),fi.normalize(),jr.crossVectors(Kt,fi),s[0]=fi.x,s[4]=jr.x,s[8]=Kt.x,s[1]=fi.y,s[5]=jr.y,s[9]=Kt.y,s[2]=fi.z,s[6]=jr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],g=i[2],y=i[6],p=i[10],f=i[14],S=i[3],v=i[7],T=i[11],P=i[15],C=s[0],w=s[4],D=s[8],x=s[12],E=s[1],V=s[5],Z=s[9],U=s[13],A=s[2],L=s[6],F=s[10],X=s[14],$=s[3],q=s[7],j=s[11],J=s[15];return r[0]=o*C+a*E+l*A+c*$,r[4]=o*w+a*V+l*L+c*q,r[8]=o*D+a*Z+l*F+c*j,r[12]=o*x+a*U+l*X+c*J,r[1]=h*C+d*E+u*A+m*$,r[5]=h*w+d*V+u*L+m*q,r[9]=h*D+d*Z+u*F+m*j,r[13]=h*x+d*U+u*X+m*J,r[2]=g*C+y*E+p*A+f*$,r[6]=g*w+y*V+p*L+f*q,r[10]=g*D+y*Z+p*F+f*j,r[14]=g*x+y*U+p*X+f*J,r[3]=S*C+v*E+T*A+P*$,r[7]=S*w+v*V+T*L+P*q,r[11]=S*D+v*Z+T*F+P*j,r[15]=S*x+v*U+T*X+P*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*m-i*l*m)+y*(+t*l*m-t*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],S=d*p*c-y*u*c+y*l*m-a*p*m-d*l*f+a*u*f,v=g*u*c-h*p*c-g*l*m+o*p*m+h*l*f-o*u*f,T=h*y*c-g*d*c+g*a*m-o*y*m-h*a*f+o*d*f,P=g*d*l-h*y*l-g*a*u+o*y*u+h*a*p-o*d*p,C=t*S+i*v+s*T+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=S*w,e[1]=(y*u*r-d*p*r-y*s*m+i*p*m+d*s*f-i*u*f)*w,e[2]=(a*p*r-y*l*r+y*s*c-i*p*c-a*s*f+i*l*f)*w,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*m-i*l*m)*w,e[4]=v*w,e[5]=(h*p*r-g*u*r+g*s*m-t*p*m-h*s*f+t*u*f)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*w,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*m+t*l*m)*w,e[8]=T*w,e[9]=(g*d*r-h*y*r-g*i*m+t*y*m+h*i*f-t*d*f)*w,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*f+t*a*f)*w,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*m-t*a*m)*w,e[12]=P*w,e[13]=(h*y*s-g*d*s+g*i*u-t*y*u-h*i*p+t*d*p)*w,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*p-t*a*p)*w,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,g=r*d,y=o*h,p=o*d,f=a*d,S=l*c,v=l*h,T=l*d,P=i.x,C=i.y,w=i.z;return s[0]=(1-(y+f))*P,s[1]=(m+T)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(m-T)*C,s[5]=(1-(u+f))*C,s[6]=(p+S)*C,s[7]=0,s[8]=(g+v)*w,s[9]=(p-S)*w,s[10]=(1-(u+y))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);let c=1/r,h=1/o,d=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ti){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),m,g;if(a===ti)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,m=(i+s)*h,g,y;if(a===ti)g=(o+r)*d,y=-2*d;else if(a===Ma)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ds=new I,Mn=new dt,Ff=new I(0,0,0),kf=new I(1,1,1),fi=new I,jr=new I,Kt=new I,_h=new dt,xh=new Mi,Aa=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Aa.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bf=0,bh=new I,fs=new Mi,Zn=new dt,Zr=new I,rr=new I,zf=new I,Hf=new Mi,Mh=new I(1,0,0),Sh=new I(0,1,0),wh=new I(0,0,1),Gf={type:"added"},Vf={type:"removed"},Ut=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Aa,i=new Mi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new qe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(rr,Zr,this.up):Zn.lookAt(Zr,rr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Zn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new I,Jn=new I,Oo=new I,Kn=new I,ps=new I,ms=new I,Eh=new I,Fo=new I,ko=new I,Bo=new I,Jr=!1,Ss=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Sn.subVectors(s,t),Jn.subVectors(i,t),Oo.subVectors(e,t);let o=Sn.dot(Sn),a=Sn.dot(Jn),l=Sn.dot(Oo),c=Jn.dot(Jn),h=Jn.dot(Oo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,i,s,r,o,a,l){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(e,t,i,s){return Sn.subVectors(i,t),Jn.subVectors(e,t),Sn.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Sn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ps.subVectors(s,i),ms.subVectors(r,i),Fo.subVectors(e,i);let l=ps.dot(Fo),c=ms.dot(Fo);if(l<=0&&c<=0)return t.copy(i);ko.subVectors(e,s);let h=ps.dot(ko),d=ms.dot(ko);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ps,o);Bo.subVectors(e,r);let m=ps.dot(Bo),g=ms.dot(Bo);if(g>=0&&m<=g)return t.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ms,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Eh.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Eh,a);let f=1/(p+y+u);return o=y*f,a=u*f,t.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=If(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=zo(o,r,e+1/3),this.g=zo(o,r,e),this.b=zo(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let i=Mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Ke.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Nt(Lt.r*255,0,255))*65536+Math.round(Nt(Lt.g*255,0,255))*256+Math.round(Nt(Lt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Lt.copy(this),t);let i=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=ut){Ke.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,i=Lt.g,s=Lt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Kr);let i=To(pi.h,Kr.h,t),s=To(pi.s,Kr.s,t),r=To(pi.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new $e;$e.NAMES=Mu;var Wf=0,si=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Ts,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new I,Qr=new ve,Gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=nr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}};var Ca=class extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ra=class extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var vt=class extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var qf=0,ln=new dt,Ho=new Ut,gs=new I,Qt=new zi,ar=new zi,wt=new I,Vt=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Ra:Ca)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Qt.min,ar.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,ar.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(ar.min),Qt.expandByPoint(ar.max))}Qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),wt.add(gs)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new I,h[E]=new I;let d=new I,u=new I,m=new I,g=new ve,y=new ve,p=new ve,f=new I,S=new I;function v(E,V,Z){d.fromArray(s,E*3),u.fromArray(s,V*3),m.fromArray(s,Z*3),g.fromArray(o,E*2),y.fromArray(o,V*2),p.fromArray(o,Z*2),u.sub(d),m.sub(d),y.sub(g),p.sub(g);let U=1/(y.x*p.y-p.x*y.y);isFinite(U)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(U),S.copy(m).multiplyScalar(y.x).addScaledVector(u,-p.x).multiplyScalar(U),c[E].add(f),c[V].add(f),c[Z].add(f),h[E].add(S),h[V].add(S),h[Z].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let E=0,V=T.length;E<V;++E){let Z=T[E],U=Z.start,A=Z.count;for(let L=U,F=U+A;L<F;L+=3)v(i[L+0],i[L+1],i[L+2])}let P=new I,C=new I,w=new I,D=new I;function x(E){w.fromArray(r,E*3),D.copy(w);let V=c[E];P.copy(V),P.sub(w.multiplyScalar(w.dot(V))).normalize(),C.crossVectors(D,V);let U=C.dot(h[E])<0?-1:1;l[E*4]=P.x,l[E*4+1]=P.y,l[E*4+2]=P.z,l[E*4+3]=U}for(let E=0,V=T.length;E<V;++E){let Z=T[E],U=Z.start,A=Z.count;for(let L=U,F=U+A;L<F;L+=3)x(i[L+0]),x(i[L+1]),x(i[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,m=e.count;u<m;u+=3){let g=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new Gt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new dt,Li=new Ls,ea=new Hi,Ah=new I,ys=new I,vs=new I,_s=new I,Go=new I,ta=new I,na=new ve,ia=new ve,sa=new ve,Ch=new I,Rh=new I,Ph=new I,ra=new I,aa=new I,yt=class extends Ut{constructor(e=new Vt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Go.fromBufferAttribute(d,e),o?ta.addScaledVector(Go,h):ta.addScaledVector(Go.sub(t),h))}t.add(ta)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(ea.containsPoint(Li.origin)===!1&&(Li.intersectSphere(ea,Ah)===null||Li.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,P=v;T<P;T+=3){let C=a.getX(T),w=a.getX(T+1),D=a.getX(T+2);s=oa(this,f,e,i,c,h,d,C,w,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);s=oa(this,o,e,i,c,h,d,S,v,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,P=v;T<P;T+=3){let C=T,w=T+1,D=T+2;s=oa(this,f,e,i,c,h,d,C,w,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=p,v=p+1,T=p+2;s=oa(this,o,e,i,c,h,d,S,v,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function $f(n,e,t,i,s,r,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===xi,a),l===null)return null;aa.copy(a),aa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:n}}function oa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ys),n.getVertexPosition(l,vs),n.getVertexPosition(c,_s);let h=$f(n,e,t,i,ys,vs,_s,ra);if(h){s&&(na.fromBufferAttribute(s,a),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),h.uv=Ss.getInterpolation(ra,ys,vs,_s,na,ia,sa,new ve)),r&&(na.fromBufferAttribute(r,a),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),h.uv1=Ss.getInterpolation(ra,ys,vs,_s,na,ia,sa,new ve),h.uv2=h.uv1),o&&(Ch.fromBufferAttribute(o,a),Rh.fromBufferAttribute(o,l),Ph.fromBufferAttribute(o,c),h.normal=Ss.getInterpolation(ra,ys,vs,_s,Ch,Rh,Ph,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Ss.getNormal(ys,vs,_s,d.normal),h.face=d}return h}var mr=class n extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function g(y,p,f,S,v,T,P,C,w,D,x){let E=T/w,V=P/D,Z=T/2,U=P/2,A=C/2,L=w+1,F=D+1,X=0,$=0,q=new I;for(let j=0;j<F;j++){let J=j*V-U;for(let oe=0;oe<L;oe++){let G=oe*E-Z;q[y]=G*S,q[p]=J*v,q[f]=A,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[f]=C>0?1:-1,h.push(q.x,q.y,q.z),d.push(oe/w),d.push(1-j/D),X+=1}}for(let j=0;j<D;j++)for(let J=0;J<w;J++){let oe=u+J+L*j,G=u+J+L*(j+1),Y=u+(J+1)+L*(j+1),se=u+(J+1)+L*j;l.push(oe,G,se),l.push(G,Y,se),$+=6}a.addGroup(m,$,x),m+=$,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){let e={};for(let t=0;t<n.length;t++){let i=Ns(n[t]);for(let s in i)e[s]=i[s]}return e}function Xf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Su(n){return n.getRenderTarget()===null?n.outputColorSpace:Ke.workingColorSpace}var Yf={clone:Ns,merge:Bt},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Pa=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends Pa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xs=-90,bs=1,ul=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(xs,bs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(xs,bs,e,t);r.layers=this.layers,this.add(r);let o=new Ht(xs,bs,e,t);o.layers=this.layers,this.add(o);let a=new Ht(xs,bs,e,t);a.layers=this.layers,this.add(a);let l=new Ht(xs,bs,e,t);l.layers=this.layers,this.add(l);let c=new Ht(xs,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ia=class extends dn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dl=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bi?ut:hn),this.texture=new Ia(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mr(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:yi});r.uniforms.tEquirect.value=t;let o=new yt(s,r),a=t.minFilter;return t.minFilter===dr&&(t.minFilter=cn),new ul(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Vo=new I,Jf=new I,Kf=new qe,ei=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Vo.subVectors(i,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kf.getNormalMatrix(e),s=this.coplanarPoint(Vo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new Hi,la=new I,gr=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],m=s[8],g=s[9],y=s[10],p=s[11],f=s[12],S=s[13],v=s[14],T=s[15];if(i[0].setComponents(l-r,u-c,p-m,T-f).normalize(),i[1].setComponents(l+r,u+c,p+m,T+f).normalize(),i[2].setComponents(l+o,u+h,p+g,T+S).normalize(),i[3].setComponents(l-o,u-h,p-g,T-S).normalize(),i[4].setComponents(l-a,u-d,p-y,T-v).normalize(),t===ti)i[5].setComponents(l+a,u+d,p+y,T+v).normalize();else if(t===Ma)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qf(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,u=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,u),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let u=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,u),g.length!==0){for(let y=0,p=g.length;y<p;y++){let f=g[y];t?n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var fl=class n extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,m=[],g=[],y=[],p=[];for(let f=0;f<h;f++){let S=f*u-o;for(let v=0;v<c;v++){let T=v*d-r;g.push(T,-S,0),y.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let v=S+c*f,T=S+c*(f+1),P=S+1+c*(f+1),C=S+1+c*f;m.push(v,T,C),m.push(T,P,C)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,em=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,og=`#define DISTANCE
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
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yg=`#define MATCAP
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
}`,vg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_g=`#define NORMAL
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
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bg=`#define PHONG
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
}`,Mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Sg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Eg=`#define TOON
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
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ag=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Lg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Be={alphahash_fragment:ep,alphahash_pars_fragment:tp,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:ap,aomap_pars_fragment:op,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:vp,color_fragment:_p,color_pars_fragment:xp,color_pars_vertex:bp,color_vertex:Mp,common:Sp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ap,emissivemap_fragment:Cp,emissivemap_pars_fragment:Rp,colorspace_fragment:Pp,colorspace_pars_fragment:Ip,envmap_fragment:Lp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Op,fog_vertex:Fp,fog_pars_vertex:kp,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:Hp,lightmap_fragment:Gp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:qp,lights_pars_begin:$p,lights_toon_fragment:Yp,lights_toon_pars_fragment:jp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Qp,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:ym,normal_fragment_maps:vm,normal_pars_fragment:_m,normal_pars_vertex:xm,normal_vertex:bm,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Cm,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Im,dithering_pars_fragment:Lm,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Om,shadowmap_vertex:Fm,shadowmask_pars_fragment:km,skinbase_vertex:Bm,skinning_pars_vertex:zm,skinning_vertex:Hm,skinnormal_vertex:Gm,specularmap_fragment:Vm,specularmap_pars_fragment:Wm,tonemapping_fragment:qm,tonemapping_pars_fragment:$m,transmission_fragment:Xm,transmission_pars_fragment:Ym,uv_pars_fragment:jm,uv_pars_vertex:Zm,uv_vertex:Jm,worldpos_vertex:Km,background_vert:Qm,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:ag,distanceRGBA_vert:og,distanceRGBA_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:yg,meshmatcap_frag:vg,meshnormal_vert:_g,meshnormal_frag:xg,meshphong_vert:bg,meshphong_frag:Mg,meshphysical_vert:Sg,meshphysical_frag:wg,meshtoon_vert:Eg,meshtoon_frag:Tg,points_vert:Ag,points_frag:Cg,shadow_vert:Rg,shadow_frag:Pg,sprite_vert:Ig,sprite_frag:Lg},ie={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fn={basic:{uniforms:Bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([ie.points,ie.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([ie.common,ie.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([ie.sprite,ie.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Bt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Bt([ie.lights,ie.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Fn.physical={uniforms:Bt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var ca={r:0,b:0,g:0};function Ng(n,e,t,i,s,r,o){let a=new $e(0),l=r===!0?0:1,c,h,d=null,u=0,m=null;function g(p,f){let S=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$a)?(h===void 0&&(h=new yt(new mr(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ns(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(v.colorSpace)!==it,(d!==v||u!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new yt(new fl(2,2),new pn({name:"BackgroundMaterial",uniforms:Ns(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,f){p.getRGB(ca,Su(n)),i.buffers.color.setClear(ca.r,ca.g,ca.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:g}}function Dg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(A,L,F,X,$){let q=!1;if(o){let j=y(X,F,L);c!==j&&(c=j,m(c.object)),q=f(A,X,F,$),q&&S(A,X,F,$)}else{let j=L.wireframe===!0;(c.geometry!==X.id||c.program!==F.id||c.wireframe!==j)&&(c.geometry=X.id,c.program=F.id,c.wireframe=j,q=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(A,L,F,X),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(A){return i.isWebGL2?n.bindVertexArray(A):r.bindVertexArrayOES(A)}function g(A){return i.isWebGL2?n.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function y(A,L,F){let X=F.wireframe===!0,$=a[A.id];$===void 0&&($={},a[A.id]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let j=q[X];return j===void 0&&(j=p(u()),q[X]=j),j}function p(A){let L=[],F=[],X=[];for(let $=0;$<s;$++)L[$]=0,F[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:X,object:A,attributes:{},index:null}}function f(A,L,F,X){let $=c.attributes,q=L.attributes,j=0,J=F.getAttributes();for(let oe in J)if(J[oe].location>=0){let Y=$[oe],se=q[oe];if(se===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),Y===void 0||Y.attribute!==se||se&&Y.data!==se.data)return!0;j++}return c.attributesNum!==j||c.index!==X}function S(A,L,F,X){let $={},q=L.attributes,j=0,J=F.getAttributes();for(let oe in J)if(J[oe].location>=0){let Y=q[oe];Y===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor));let se={};se.attribute=Y,Y&&Y.data&&(se.data=Y.data),$[oe]=se,j++}c.attributes=$,c.attributesNum=j,c.index=X}function v(){let A=c.newAttributes;for(let L=0,F=A.length;L<F;L++)A[L]=0}function T(A){P(A,0)}function P(A,L){let F=c.newAttributes,X=c.enabledAttributes,$=c.attributeDivisors;F[A]=1,X[A]===0&&(n.enableVertexAttribArray(A),X[A]=1),$[A]!==L&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,L),$[A]=L)}function C(){let A=c.newAttributes,L=c.enabledAttributes;for(let F=0,X=L.length;F<X;F++)L[F]!==A[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function w(A,L,F,X,$,q,j){j===!0?n.vertexAttribIPointer(A,L,F,$,q):n.vertexAttribPointer(A,L,F,X,$,q)}function D(A,L,F,X){if(i.isWebGL2===!1&&(A.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let $=X.attributes,q=F.getAttributes(),j=L.defaultAttributeValues;for(let J in q){let oe=q[J];if(oe.location>=0){let G=$[J];if(G===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),G!==void 0){let Y=G.normalized,se=G.itemSize,fe=t.get(G);if(fe===void 0)continue;let de=fe.buffer,Pe=fe.type,Le=fe.bytesPerElement,be=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||G.gpuType===uu);if(G.isInterleavedBufferAttribute){let Ye=G.data,k=Ye.stride,Ot=G.offset;if(Ye.isInstancedInterleavedBuffer){for(let Me=0;Me<oe.locationSize;Me++)P(oe.location+Me,Ye.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Me=0;Me<oe.locationSize;Me++)T(oe.location+Me);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Me=0;Me<oe.locationSize;Me++)w(oe.location+Me,se/oe.locationSize,Pe,Y,k*Le,(Ot+se/oe.locationSize*Me)*Le,be)}else{if(G.isInstancedBufferAttribute){for(let Ye=0;Ye<oe.locationSize;Ye++)P(oe.location+Ye,G.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ye=0;Ye<oe.locationSize;Ye++)T(oe.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Ye=0;Ye<oe.locationSize;Ye++)w(oe.location+Ye,se/oe.locationSize,Pe,Y,se*Le,se/oe.locationSize*Ye*Le,be)}}else if(j!==void 0){let Y=j[J];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(oe.location,Y);break;case 3:n.vertexAttrib3fv(oe.location,Y);break;case 4:n.vertexAttrib4fv(oe.location,Y);break;default:n.vertexAttrib1fv(oe.location,Y)}}}}C()}function x(){Z();for(let A in a){let L=a[A];for(let F in L){let X=L[F];for(let $ in X)g(X[$].object),delete X[$];delete L[F]}delete a[A]}}function E(A){if(a[A.id]===void 0)return;let L=a[A.id];for(let F in L){let X=L[F];for(let $ in X)g(X[$].object),delete X[$];delete L[F]}delete a[A.id]}function V(A){for(let L in a){let F=a[L];if(F[A.id]===void 0)continue;let X=F[A.id];for(let $ in X)g(X[$].object),delete X[$];delete F[A.id]}}function Z(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:T,disableUnusedAttributes:C}}function Ug(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=d[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Og(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,T=o||e.has("OES_texture_float"),P=v&&T,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:C}}function Fg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ei,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:i,v=S*4,T=f.clippingState||null;l.value=T,T=h(g,u,v,m);for(let P=0;P!==v;++P)T[P]=t[P];f.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let f=m+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,T=m;v!==y;++v,T+=4)o.copy(d[v]).applyMatrix4(S,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function kg(n){let e=new WeakMap;function t(o,a){return a===nl?o.mapping=Rs:a===il&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===nl||a===il)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new dl(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var La=class extends Pa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=4,Ih=[.125,.215,.35,.446,.526,.582],Oi=20,Wo=new La,Lh=new $e,qo=null,$o=0,Xo=0,Di=(1+Math.sqrt(5))/2,Ms=1/Di,Nh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Di,Ms),new I(0,Di,-Ms),new I(Ms,0,Di),new I(-Ms,0,Di),new I(Di,Ms,0),new I(-Di,Ms,0)],Na=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,$o,Xo),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:fr,format:Tn,colorSpace:ni,depthBuffer:!1},s=Dh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bg(r)),this._blurMaterial=zg(r,e,t)}return s}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,s){let a=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Lh),h.toneMapping=vi,h.autoClear=!1;let m=new fn({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new yt(new mr,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Lh),y=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;ha(s,S*v,f>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Rs||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nh[(s-1)%Nh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new yt(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Oi-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);let f=[],S=0;for(let w=0;w<Oi;++w){let D=w/y,x=Math.exp(-D*D/2);f.push(x),w===0?S+=x:w<p&&(S+=2*x)}for(let w=0;w<f.length;w++)f[w]=f[w]/S;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let T=this._sizeLods[s],P=3*T*(s>v-ws?s-v+ws:0),C=4*(this._cubeSize-T);ha(t,P,C,3*T,2*T),l.setRenderTarget(t),l.render(d,Wo)}};function Bg(n){let e=[],t=[],i=[],s=n,r=n-ws+1+Ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ws?l=Ih[o-n+ws-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,y=3,p=2,f=1,S=new Float32Array(y*g*m),v=new Float32Array(p*g*m),T=new Float32Array(f*g*m);for(let C=0;C<m;C++){let w=C%3*2/3-1,D=C>2?0:-1,x=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];S.set(x,y*g*C),v.set(u,p*g*C);let E=[C,C,C,C,C,C];T.set(E,f*g*C)}let P=new Vt;P.setAttribute("position",new Gt(S,y)),P.setAttribute("uv",new Gt(v,p)),P.setAttribute("faceIndex",new Gt(T,f)),e.push(P),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dh(n,e,t){let i=new ii(n,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zg(n,e,t){let i=new Float32Array(Oi),s=new I(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Uh(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Oh(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===nl||l===il,h=l===Rs||l===Ps;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Na(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Na(n));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vg(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let y=m[g];for(let p=0,f=y.length;p<f;p++)e.update(y[p],n.ARRAY_BUFFER)}}function c(d){let u=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let S=m.array;y=m.version;for(let v=0,T=S.length;v<T;v+=3){let P=S[v+0],C=S[v+1],w=S[v+2];u.push(P,C,C,w,w,P)}}else if(g!==void 0){let S=g.array;y=g.version;for(let v=0,T=S.length/3-1;v<T;v+=3){let P=v+0,C=v+1,w=v+2;u.push(P,C,C,w,w,P)}}else return;let p=new(bu(u)?Ra:Ca)(u,1);p.version=y;let f=r.get(d);f&&e.remove(f),r.set(d,p)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wg(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,y){if(y===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*l,y),t.update(g,r,y)}function u(m,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,y);let f=0;for(let S=0;S<y;S++)f+=g[S];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function qg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $g(n,e){return n[0]-e[0]}function Xg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Yg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,y=r.get(h);if(y===void 0||y.count!==g){let A=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",A)};y!==void 0&&y.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],D=0;S===!0&&(D=1),v===!0&&(D=2),T===!0&&(D=3);let x=h.attributes.position.count*D,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let V=new Float32Array(x*E*4*g),Z=new Ta(V,x,E,g);Z.type=gi,Z.needsUpdate=!0;let U=D*4;for(let L=0;L<g;L++){let F=P[L],X=C[L],$=w[L],q=x*E*4*L;for(let j=0;j<F.count;j++){let J=j*U;S===!0&&(o.fromBufferAttribute(F,j),V[q+J+0]=o.x,V[q+J+1]=o.y,V[q+J+2]=o.z,V[q+J+3]=0),v===!0&&(o.fromBufferAttribute(X,j),V[q+J+4]=o.x,V[q+J+5]=o.y,V[q+J+6]=o.z,V[q+J+7]=0),T===!0&&(o.fromBufferAttribute($,j),V[q+J+8]=o.x,V[q+J+9]=o.y,V[q+J+10]=o.z,V[q+J+11]=$.itemSize===4?o.w:1)}}y={count:g,texture:Z,size:new ve(x,E)},r.set(h,y),h.addEventListener("dispose",A)}let p=0;for(let S=0;S<u.length;S++)p+=u[S];let f=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",f),d.getUniforms().setValue(n,"morphTargetInfluences",u),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let m=u===void 0?0:u.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let T=g[v];T[0]=v,T[1]=u[v]}g.sort(Xg);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort($g);let y=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let T=a[v],P=T[0],C=T[1];P!==Number.MAX_SAFE_INTEGER&&C?(y&&h.getAttribute("morphTarget"+v)!==y[P]&&h.setAttribute("morphTarget"+v,y[P]),p&&h.getAttribute("morphNormal"+v)!==p[P]&&h.setAttribute("morphNormal"+v,p[P]),s[v]=C,f+=C):(y&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function jg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Da=class extends dn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ki&&(i=mi),i===void 0&&h===Is&&(i=Fi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Eu=new dn,Tu=new Da(1,1);Tu.compareFunction=xu;var Au=new Ta,Cu=new hl,Ru=new Ia,Fh=[],kh=[],Bh=new Float32Array(16),zh=new Float32Array(9),Hh=new Float32Array(4);function Os(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function e0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(xt(t,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),bt(t,i)}}function t0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(xt(t,i))return;zh.set(i),n.uniformMatrix3fv(this.addr,!1,zh),bt(t,i)}}function n0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(xt(t,i))return;Bh.set(i),n.uniformMatrix4fv(this.addr,!1,Bh),bt(t,i)}}function i0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function s0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function r0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function a0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function o0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function l0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function c0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function h0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function u0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Tu:Eu;t.setTexture2D(e||r,s)}function d0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cu,s)}function f0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ru,s)}function p0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Au,s)}function m0(n){switch(n){case 5126:return Zg;case 35664:return Jg;case 35665:return Kg;case 35666:return Qg;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(n,e){n.uniform1fv(this.addr,e)}function y0(n,e){let t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function v0(n,e){let t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function _0(n,e){let t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function x0(n,e){let t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function b0(n,e){let t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M0(n,e){let t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function S0(n,e){n.uniform1iv(this.addr,e)}function w0(n,e){n.uniform2iv(this.addr,e)}function E0(n,e){n.uniform3iv(this.addr,e)}function T0(n,e){n.uniform4iv(this.addr,e)}function A0(n,e){n.uniform1uiv(this.addr,e)}function C0(n,e){n.uniform2uiv(this.addr,e)}function R0(n,e){n.uniform3uiv(this.addr,e)}function P0(n,e){n.uniform4uiv(this.addr,e)}function I0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Eu,r[o])}function L0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cu,r[o])}function N0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ru,r[o])}function D0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Au,r[o])}function U0(n){switch(n){case 5126:return g0;case 35664:return y0;case 35665:return v0;case 35666:return _0;case 35674:return x0;case 35675:return b0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return w0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return C0;case 36295:return R0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return D0}}var pl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=m0(t.type)}},ml=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U0(t.type)}},gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Yo=/(\w+)(\])?(\[|\.)?/g;function Gh(n,e){n.seq.push(e),n.map[e.id]=e}function O0(n,e,t){let i=n.name,s=i.length;for(Yo.lastIndex=0;;){let r=Yo.exec(i),o=Yo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gh(t,c===void 0?new pl(a,n,e):new ml(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new gl(a),Gh(t,d)),t=d}}}var Cs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);O0(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var F0=37297,k0=0;function B0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function z0(n){let e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n),i;switch(e===t?i="":e===ba&&t===xa?i="LinearDisplayP3ToLinearSRGB":e===xa&&t===ba&&(i="LinearSRGBToLinearDisplayP3"),n){case ni:case Xa:return[i,"LinearTransferOETF"];case ut:case Zl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+B0(n.getShaderSource(e),o)}else return s}function H0(n,e){let t=z0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function G0(n,e){let t;switch(e){case af:t="Linear";break;case of:t="Reinhard";break;case lf:t="OptimizedCineon";break;case cf:t="ACESFilmic";break;case uf:t="AgX";break;case hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function V0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function W0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Es).join(`
`)}function q0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Es(n){return n!==""}function qh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(X0,j0)}var Y0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function j0(n,e){let t=Be[e];if(t===void 0){let i=Y0.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}var Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(Z0,J0)}function J0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Q0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ey(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function ty(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yl:e="ENVMAP_BLENDING_MULTIPLY";break;case sf:e="ENVMAP_BLENDING_MIX";break;case rf:e="ENVMAP_BLENDING_ADD";break}return e}function ny(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=K0(t),c=Q0(t),h=ey(t),d=ty(t),u=ny(t),m=t.isWebGL2?"":V0(t),g=W0(t),y=q0(r),p=s.createProgram(),f,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Es).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Es).join(`
`),S.length>0&&(S+=`
`)):(f=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),S=[m,Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Be.tonemapping_pars_fragment:"",t.toneMapping!==vi?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,H0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=yl(o),o=qh(o,t),o=$h(o,t),a=yl(a),a=qh(a,t),a=$h(a,t),o=Xh(o),a=Xh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=v+f+o,P=v+S+a,C=Vh(s,s.VERTEX_SHADER,T),w=Vh(s,s.FRAGMENT_SHADER,P);s.attachShader(p,C),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(Z){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(p).trim(),A=s.getShaderInfoLog(C).trim(),L=s.getShaderInfoLog(w).trim(),F=!0,X=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,C,w);else{let $=Wh(s,C,"vertex"),q=Wh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+$+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(A===""||L==="")&&(X=!1);X&&(Z.diagnostics={runnable:F,programLog:U,vertexShader:{log:A,prefix:f},fragmentShader:{log:L,prefix:S}})}s.deleteShader(C),s.deleteShader(w),x=new Cs(s,p),E=$0(s,p)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,F0)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=w,this}var sy=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _l(e),t.set(e,i)),i}},_l=class{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}};function ry(n,e,t,i,s,r,o){let a=new pr,l=new vl,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return x===0?"uv":`uv${x}`}function p(x,E,V,Z,U){let A=Z.fog,L=U.geometry,F=x.isMeshStandardMaterial?Z.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),$=X&&X.mapping===$a?X.image.height:null,q=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=j!==void 0?j.length:0,oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let G,Y,se,fe;if(q){let Ft=Fn[q];G=Ft.vertexShader,Y=Ft.fragmentShader}else G=x.vertexShader,Y=x.fragmentShader,l.update(x),se=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);let de=n.getRenderTarget(),Pe=U.isInstancedMesh===!0,Le=U.isBatchedMesh===!0,be=!!x.map,Ye=!!x.matcap,k=!!X,Ot=!!x.aoMap,Me=!!x.lightMap,Ue=!!x.bumpMap,pe=!!x.normalMap,at=!!x.displacementMap,ze=!!x.emissiveMap,M=!!x.metalnessMap,_=!!x.roughnessMap,z=x.anisotropy>0,ee=x.clearcoat>0,Q=x.iridescence>0,te=x.sheen>0,me=x.transmission>0,le=z&&!!x.anisotropyMap,he=ee&&!!x.clearcoatMap,Ae=ee&&!!x.clearcoatNormalMap,He=ee&&!!x.clearcoatRoughnessMap,K=Q&&!!x.iridescenceMap,Je=Q&&!!x.iridescenceThicknessMap,Xe=te&&!!x.sheenColorMap,Ne=te&&!!x.sheenRoughnessMap,_e=!!x.specularMap,ue=!!x.specularColorMap,ke=!!x.specularIntensityMap,je=me&&!!x.transmissionMap,lt=me&&!!x.thicknessMap,Ve=!!x.gradientMap,ne=!!x.alphaMap,R=x.alphaTest>0,re=!!x.alphaHash,ae=!!x.extensions,Re=!!L.attributes.uv1,Se=!!L.attributes.uv2,Qe=!!L.attributes.uv3,et=vi;return x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(et=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:Y,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Le,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ni,map:be,matcap:Ye,envMap:k,envMapMode:k&&X.mapping,envMapCubeUVHeight:$,aoMap:Ot,lightMap:Me,bumpMap:Ue,normalMap:pe,displacementMap:u&&at,emissiveMap:ze,normalMapObjectSpace:pe&&x.normalMapType===Sf,normalMapTangentSpace:pe&&x.normalMapType===_u,metalnessMap:M,roughnessMap:_,anisotropy:z,anisotropyMap:le,clearcoat:ee,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:He,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:Je,sheen:te,sheenColorMap:Xe,sheenRoughnessMap:Ne,specularMap:_e,specularColorMap:ue,specularIntensityMap:ke,transmission:me,transmissionMap:je,thicknessMap:lt,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Ts,alphaMap:ne,alphaTest:R,alphaHash:re,combine:x.combine,mapUv:be&&y(x.map.channel),aoMapUv:Ot&&y(x.aoMap.channel),lightMapUv:Me&&y(x.lightMap.channel),bumpMapUv:Ue&&y(x.bumpMap.channel),normalMapUv:pe&&y(x.normalMap.channel),displacementMapUv:at&&y(x.displacementMap.channel),emissiveMapUv:ze&&y(x.emissiveMap.channel),metalnessMapUv:M&&y(x.metalnessMap.channel),roughnessMapUv:_&&y(x.roughnessMap.channel),anisotropyMapUv:le&&y(x.anisotropyMap.channel),clearcoatMapUv:he&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(x.sheenRoughnessMap.channel),specularMapUv:_e&&y(x.specularMap.channel),specularColorMapUv:ue&&y(x.specularColorMap.channel),specularIntensityMapUv:ke&&y(x.specularIntensityMap.channel),transmissionMapUv:je&&y(x.transmissionMap.channel),thicknessMapUv:lt&&y(x.thicknessMap.channel),alphaMapUv:ne&&y(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pe||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Se,vertexUv3s:Qe,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(be||ne),fog:!!A,useFog:x.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Dt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ae&&x.extensions.derivatives===!0,extensionFragDepth:ae&&x.extensions.fragDepth===!0,extensionDrawBuffers:ae&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let V in x.defines)E.push(V),E.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(S(E,x),v(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function S(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function T(x){let E=g[x.type],V;if(E){let Z=Fn[E];V=Yf.clone(Z.uniforms)}else V=x.uniforms;return V}function P(x,E){let V;for(let Z=0,U=c.length;Z<U;Z++){let A=c[Z];if(A.cacheKey===E){V=A,++V.usedTimes;break}}return V===void 0&&(V=new iy(n,E,x,r),c.push(V)),V}function C(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:D}}function ay(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function oy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,m,g,y,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function a(d,u,m,g,y,p){let f=o(d,u,m,g,y,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(d,u,m,g,y,p){let f=o(d,u,m,g,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||oy),i.length>1&&i.sort(u||jh),s.length>1&&s.sort(u||jh)}function h(){for(let d=e,u=n.length;d<u;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ly(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Zh,n.set(i,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new $e};break;case"SpotLight":t={position:new I,direction:new I,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function hy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var uy=0;function dy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fy(n,e){let t=new cy,i=hy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new dt,a=new dt;function l(h,d){let u=0,m=0,g=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let y=0,p=0,f=0,S=0,v=0,T=0,P=0,C=0,w=0,D=0,x=0;h.sort(dy);let E=d===!0?Math.PI:1;for(let Z=0,U=h.length;Z<U;Z++){let A=h[Z],L=A.color,F=A.intensity,X=A.distance,$=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*F*E,m+=L.g*F*E,g+=L.b*F*E;else if(A.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(A.sh.coefficients[q],F);x++}else if(A.isDirectionalLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*E),A.castShadow){let j=A.shadow,J=i.get(A);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=$,s.directionalShadowMatrix[y]=A.shadow.matrix,T++}s.directional[y]=q,y++}else if(A.isSpotLight){let q=t.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(L).multiplyScalar(F*E),q.distance=X,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,s.spot[f]=q;let j=A.shadow;if(A.map&&(s.spotLightMap[w]=A.map,w++,j.updateMatrices(A),A.castShadow&&D++),s.spotLightMatrix[f]=j.matrix,A.castShadow){let J=i.get(A);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,s.spotShadow[f]=J,s.spotShadowMap[f]=$,C++}f++}else if(A.isRectAreaLight){let q=t.get(A);q.color.copy(L).multiplyScalar(F),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),s.rectArea[S]=q,S++}else if(A.isPointLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*E),q.distance=A.distance,q.decay=A.decay,A.castShadow){let j=A.shadow,J=i.get(A);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,s.pointShadow[p]=J,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=A.shadow.matrix,P++}s.point[p]=q,p++}else if(A.isHemisphereLight){let q=t.get(A);q.skyColor.copy(A.color).multiplyScalar(F*E),q.groundColor.copy(A.groundColor).multiplyScalar(F*E),s.hemi[v]=q,v++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=m,s.ambient[2]=g;let V=s.hash;(V.directionalLength!==y||V.pointLength!==p||V.spotLength!==f||V.rectAreaLength!==S||V.hemiLength!==v||V.numDirectionalShadows!==T||V.numPointShadows!==P||V.numSpotShadows!==C||V.numSpotMaps!==w||V.numLightProbes!==x)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=S,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+w-D,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=x,V.directionalLength=y,V.pointLength=p,V.spotLength=f,V.rectAreaLength=S,V.hemiLength=v,V.numDirectionalShadows=T,V.numPointShadows=P,V.numSpotShadows=C,V.numSpotMaps=w,V.numLightProbes=x,s.version=uy++)}function c(h,d){let u=0,m=0,g=0,y=0,p=0,f=d.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let T=h[S];if(T.isDirectionalLight){let P=s.directional[u];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),u++}else if(T.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(T.isRectAreaLight){let P=s.rectArea[y];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(T.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(f),m++}else if(T.isHemisphereLight){let P=s.hemi[p];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function Jh(n,e){let t=new fy(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function py(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Jh(n,e),t.set(r,[l])):o>=a.length?(l=new Jh(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var xl=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bl=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yy(n,e,t){let i=new gr,s=new ve,r=new ve,o=new Et,a=new xl({depthPacking:Mf}),l=new bl,c={},h=t.maxTextureSize,d={[xi]:Dt,[Dt]:xi,[wn]:wn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:my,fragmentShader:gy}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new yt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let f=this.type;this.render=function(C,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let x=n.getRenderTarget(),E=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(yi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let U=f!==Qn&&this.type===Qn,A=f===Qn&&this.type!==Qn;for(let L=0,F=C.length;L<F;L++){let X=C[L],$=X.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let q=$.getFrameExtents();if(s.multiply(q),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,$.mapSize.y=r.y)),$.map===null||U===!0||A===!0){let J=this.type!==Qn?{minFilter:zt,magFilter:zt}:{};$.map!==null&&$.map.dispose(),$.map=new ii(s.x,s.y,J),$.map.texture.name=X.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let j=$.getViewportCount();for(let J=0;J<j;J++){let oe=$.getViewport(J);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),Z.viewport(o),$.updateMatrices(X,J),i=$.getFrustum(),T(w,D,$.camera,X,this.type)}$.isPointLightShadow!==!0&&this.type===Qn&&S($,D),$.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(x,E,V)};function S(C,w){let D=e.update(y);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ii(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,D,u,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,D,m,y,null)}function v(C,w,D,x){let E=null,V=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)E=V;else if(E=D.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let Z=E.uuid,U=w.uuid,A=c[Z];A===void 0&&(A={},c[Z]=A);let L=A[U];L===void 0&&(L=E.clone(),A[U]=L,w.addEventListener("dispose",P)),E=L}if(E.visible=w.visible,E.wireframe=w.wireframe,x===Qn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let Z=n.properties.get(E);Z.light=D}return E}function T(C,w,D,x,E){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Qn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let U=e.update(C),A=C.material;if(Array.isArray(A)){let L=U.groups;for(let F=0,X=L.length;F<X;F++){let $=L[F],q=A[$.materialIndex];if(q&&q.visible){let j=v(C,q,x,E);C.onBeforeShadow(n,C,w,D,U,j,$),n.renderBufferDirect(D,null,U,j,C,$),C.onAfterShadow(n,C,w,D,U,j,$)}}}else if(A.visible){let L=v(C,A,x,E);C.onBeforeShadow(n,C,w,D,U,L,null),n.renderBufferDirect(D,null,U,L,C,null),C.onAfterShadow(n,C,w,D,U,L,null)}}let Z=C.children;for(let U=0,A=Z.length;U<A;U++)T(Z[U],w,D,x,E)}function P(C){C.target.removeEventListener("dispose",P);for(let D in c){let x=c[D],E=C.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function vy(n,e,t){let i=t.isWebGL2;function s(){let R=!1,re=new Et,ae=null,Re=new Et(0,0,0,0);return{setMask:function(Se){ae!==Se&&!R&&(n.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){R=Se},setClear:function(Se,Qe,et,Mt,Ft){Ft===!0&&(Se*=Mt,Qe*=Mt,et*=Mt),re.set(Se,Qe,et,Mt),Re.equals(re)===!1&&(n.clearColor(Se,Qe,et,Mt),Re.copy(re))},reset:function(){R=!1,ae=null,Re.set(-1,0,0,0)}}}function r(){let R=!1,re=null,ae=null,Re=null;return{setTest:function(Se){Se?Le(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Se){re!==Se&&!R&&(n.depthMask(Se),re=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Zd:n.depthFunc(n.NEVER);break;case Jd:n.depthFunc(n.ALWAYS);break;case Kd:n.depthFunc(n.LESS);break;case ga:n.depthFunc(n.LEQUAL);break;case Qd:n.depthFunc(n.EQUAL);break;case ef:n.depthFunc(n.GEQUAL);break;case tf:n.depthFunc(n.GREATER);break;case nf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Se}},setLocked:function(Se){R=Se},setClear:function(Se){Re!==Se&&(n.clearDepth(Se),Re=Se)},reset:function(){R=!1,re=null,ae=null,Re=null}}}function o(){let R=!1,re=null,ae=null,Re=null,Se=null,Qe=null,et=null,Mt=null,Ft=null;return{setTest:function(tt){R||(tt?Le(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(tt){re!==tt&&!R&&(n.stencilMask(tt),re=tt)},setFunc:function(tt,kt,On){(ae!==tt||Re!==kt||Se!==On)&&(n.stencilFunc(tt,kt,On),ae=tt,Re=kt,Se=On)},setOp:function(tt,kt,On){(Qe!==tt||et!==kt||Mt!==On)&&(n.stencilOp(tt,kt,On),Qe=tt,et=kt,Mt=On)},setLocked:function(tt){R=tt},setClear:function(tt){Ft!==tt&&(n.clearStencil(tt),Ft=tt)},reset:function(){R=!1,re=null,ae=null,Re=null,Se=null,Qe=null,et=null,Mt=null,Ft=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,u={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,v=null,T=null,P=null,C=null,w=null,D=null,x=new $e(0,0,0),E=0,V=!1,Z=null,U=null,A=null,L=null,F=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,q=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=q>=2);let J=null,oe={},G=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),se=new Et().fromArray(G),fe=new Et().fromArray(Y);function de(R,re,ae,Re){let Se=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(R,Qe),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<ae;et++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(re+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Qe}let Pe={};Pe[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(n.DEPTH_TEST),l.setFunc(ga),ze(!1),M(Ic),Le(n.CULL_FACE),pe(yi);function Le(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function be(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Ye(R,re){return m[R]!==re?(n.bindFramebuffer(R,re),m[R]=re,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=re),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function k(R,re){let ae=y,Re=!1;if(R)if(ae=g.get(re),ae===void 0&&(ae=[],g.set(re,ae)),R.isWebGLMultipleRenderTargets){let Se=R.texture;if(ae.length!==Se.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,et=Se.length;Qe<et;Qe++)ae[Qe]=n.COLOR_ATTACHMENT0+Qe;ae.length=Se.length,Re=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Re=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Ot(R){return p!==R?(n.useProgram(R),p=R,!0):!1}let Me={[Ui]:n.FUNC_ADD,[Ud]:n.FUNC_SUBTRACT,[Od]:n.FUNC_REVERSE_SUBTRACT};if(i)Me[Dc]=n.MIN,Me[Uc]=n.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(Me[Dc]=R.MIN_EXT,Me[Uc]=R.MAX_EXT)}let Ue={[Fd]:n.ZERO,[kd]:n.ONE,[Bd]:n.SRC_COLOR,[el]:n.SRC_ALPHA,[qd]:n.SRC_ALPHA_SATURATE,[Vd]:n.DST_COLOR,[Hd]:n.DST_ALPHA,[zd]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[Wd]:n.ONE_MINUS_DST_COLOR,[Gd]:n.ONE_MINUS_DST_ALPHA,[$d]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[Yd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(R,re,ae,Re,Se,Qe,et,Mt,Ft,tt){if(R===yi){f===!0&&(be(n.BLEND),f=!1);return}if(f===!1&&(Le(n.BLEND),f=!0),R!==Dd){if(R!==S||tt!==V){if((v!==Ui||C!==Ui)&&(n.blendEquation(n.FUNC_ADD),v=Ui,C=Ui),tt)switch(R){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFunc(n.ONE,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,P=null,w=null,D=null,x.set(0,0,0),E=0,S=R,V=tt}return}Se=Se||re,Qe=Qe||ae,et=et||Re,(re!==v||Se!==C)&&(n.blendEquationSeparate(Me[re],Me[Se]),v=re,C=Se),(ae!==T||Re!==P||Qe!==w||et!==D)&&(n.blendFuncSeparate(Ue[ae],Ue[Re],Ue[Qe],Ue[et]),T=ae,P=Re,w=Qe,D=et),(Mt.equals(x)===!1||Ft!==E)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Ft),x.copy(Mt),E=Ft),S=R,V=!1}function at(R,re){R.side===wn?be(n.CULL_FACE):Le(n.CULL_FACE);let ae=R.side===Dt;re&&(ae=!ae),ze(ae),R.blending===Ts&&R.transparent===!1?pe(yi):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let Re=R.stencilWrite;c.setTest(Re),Re&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),z(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Le(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(R){Z!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),Z=R)}function M(R){R!==Id?(Le(n.CULL_FACE),R!==U&&(R===Ic?n.cullFace(n.BACK):R===Ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),U=R}function _(R){R!==A&&($&&n.lineWidth(R),A=R)}function z(R,re,ae){R?(Le(n.POLYGON_OFFSET_FILL),(L!==re||F!==ae)&&(n.polygonOffset(re,ae),L=re,F=ae)):be(n.POLYGON_OFFSET_FILL)}function ee(R){R?Le(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Q(R){R===void 0&&(R=n.TEXTURE0+X-1),J!==R&&(n.activeTexture(R),J=R)}function te(R,re,ae){ae===void 0&&(J===null?ae=n.TEXTURE0+X-1:ae=J);let Re=oe[ae];Re===void 0&&(Re={type:void 0,texture:void 0},oe[ae]=Re),(Re.type!==R||Re.texture!==re)&&(J!==ae&&(n.activeTexture(ae),J=ae),n.bindTexture(R,re||Pe[R]),Re.type=R,Re.texture=re)}function me(){let R=oe[J];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(R){se.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),se.copy(R))}function je(R){fe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),fe.copy(R))}function lt(R,re){let ae=d.get(re);ae===void 0&&(ae=new WeakMap,d.set(re,ae));let Re=ae.get(R);Re===void 0&&(Re=n.getUniformBlockIndex(re,R.name),ae.set(R,Re))}function Ve(R,re){let Re=d.get(re).get(R);h.get(re)!==Re&&(n.uniformBlockBinding(re,Re,R.__bindingPointIndex),h.set(re,Re))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,oe={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,v=null,T=null,P=null,C=null,w=null,D=null,x=new $e(0,0,0),E=0,V=!1,Z=null,U=null,A=null,L=null,F=null,se.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:be,bindFramebuffer:Ye,drawBuffers:k,useProgram:Ot,setBlending:pe,setMaterial:at,setFlipSided:ze,setCullFace:M,setLineWidth:_,setPolygonOffset:z,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:_e,texImage3D:ue,updateUBOMapping:lt,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:Ne,texSubImage2D:Ae,texSubImage3D:He,compressedTexSubImage2D:K,compressedTexSubImage3D:Je,scissor:ke,viewport:je,reset:ne}}function _y(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function g(M,_){return m?new OffscreenCanvas(M,_):Sa("canvas")}function y(M,_,z,ee){let Q=1;if((M.width>ee||M.height>ee)&&(Q=ee/Math.max(M.width,M.height)),Q<1||_===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let te=_?ll:Math.floor,me=te(Q*M.width),le=te(Q*M.height);d===void 0&&(d=g(me,le));let he=z?g(me,le):d;return he.width=me,he.height=le,he.getContext("2d").drawImage(M,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+me+"x"+le+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return ph(M.width)&&ph(M.height)}function f(M){return a?!1:M.wrapS!==En||M.wrapT!==En||M.minFilter!==zt&&M.minFilter!==cn}function S(M,_){return M.generateMipmaps&&_&&M.minFilter!==zt&&M.minFilter!==cn}function v(M){n.generateMipmap(M)}function T(M,_,z,ee,Q=!1){if(a===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let te=_;if(_===n.RED&&(z===n.FLOAT&&(te=n.R32F),z===n.HALF_FLOAT&&(te=n.R16F),z===n.UNSIGNED_BYTE&&(te=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(te=n.R8UI),z===n.UNSIGNED_SHORT&&(te=n.R16UI),z===n.UNSIGNED_INT&&(te=n.R32UI),z===n.BYTE&&(te=n.R8I),z===n.SHORT&&(te=n.R16I),z===n.INT&&(te=n.R32I)),_===n.RG&&(z===n.FLOAT&&(te=n.RG32F),z===n.HALF_FLOAT&&(te=n.RG16F),z===n.UNSIGNED_BYTE&&(te=n.RG8)),_===n.RGBA){let me=Q?_a:Ke.getTransfer(ee);z===n.FLOAT&&(te=n.RGBA32F),z===n.HALF_FLOAT&&(te=n.RGBA16F),z===n.UNSIGNED_BYTE&&(te=me===it?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(M,_,z){return S(M,z)===!0||M.isFramebufferTexture&&M.minFilter!==zt&&M.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function C(M){return M===zt||M===Oc||M===vo?n.NEAREST:n.LINEAR}function w(M){let _=M.target;_.removeEventListener("dispose",w),x(_),_.isVideoTexture&&h.delete(_)}function D(M){let _=M.target;_.removeEventListener("dispose",D),V(_)}function x(M){let _=i.get(M);if(_.__webglInit===void 0)return;let z=M.source,ee=u.get(z);if(ee){let Q=ee[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(M),Object.keys(ee).length===0&&u.delete(z)}i.remove(M)}function E(M){let _=i.get(M);n.deleteTexture(_.__webglTexture);let z=M.source,ee=u.get(z);delete ee[_.__cacheKey],o.memory.textures--}function V(M){let _=M.texture,z=i.get(M),ee=i.get(_);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let te=0;te<z.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(z.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)n.deleteFramebuffer(z.__webglFramebuffer[Q]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,te=_.length;Q<te;Q++){let me=i.get(_[Q]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(M)}let Z=0;function U(){Z=0}function A(){let M=Z;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),Z+=1,M}function L(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function F(M,_){let z=i.get(M);if(M.isVideoTexture&&at(M),M.isRenderTargetTexture===!1&&M.version>0&&z.__version!==M.version){let ee=M.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,M,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function X(M,_){let z=i.get(M);if(M.version>0&&z.__version!==M.version){se(z,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function $(M,_){let z=i.get(M);if(M.version>0&&z.__version!==M.version){se(z,M,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function q(M,_){let z=i.get(M);if(M.version>0&&z.__version!==M.version){fe(z,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let j={[sl]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},J={[zt]:n.NEAREST,[Oc]:n.NEAREST_MIPMAP_NEAREST,[vo]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[df]:n.LINEAR_MIPMAP_NEAREST,[dr]:n.LINEAR_MIPMAP_LINEAR},oe={[wf]:n.NEVER,[Pf]:n.ALWAYS,[Ef]:n.LESS,[xu]:n.LEQUAL,[Tf]:n.EQUAL,[Rf]:n.GEQUAL,[Af]:n.GREATER,[Cf]:n.NOTEQUAL};function G(M,_,z){if(z?(n.texParameteri(M,n.TEXTURE_WRAP_S,j[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,j[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,j[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,J[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,J[_.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==En||_.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,C(_.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,C(_.minFilter)),_.minFilter!==zt&&_.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===zt||_.minFilter!==vo&&_.minFilter!==dr||_.type===gi&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===fr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Y(M,_){let z=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",w));let ee=_.source,Q=u.get(ee);Q===void 0&&(Q={},u.set(ee,Q));let te=L(_);if(te!==M.__cacheKey){Q[te]===void 0&&(Q[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[te].usedTimes++;let me=Q[M.__cacheKey];me!==void 0&&(Q[M.__cacheKey].usedTimes--,me.usedTimes===0&&E(_)),M.__cacheKey=te,M.__webglTexture=Q[te].texture}return z}function se(M,_,z){let ee=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=n.TEXTURE_3D);let Q=Y(M,_),te=_.source;t.bindTexture(ee,M.__webglTexture,n.TEXTURE0+z);let me=i.get(te);if(te.version!==me.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);let le=Ke.getPrimaries(Ke.workingColorSpace),he=_.colorSpace===hn?null:Ke.getPrimaries(_.colorSpace),Ae=_.colorSpace===hn||le===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let He=f(_)&&p(_.image)===!1,K=y(_.image,He,!1,s.maxTextureSize);K=ze(_,K);let Je=p(K)||a,Xe=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type),_e=T(_.internalFormat,Xe,Ne,_.colorSpace,_.isVideoTexture);G(ee,_,Je);let ue,ke=_.mipmaps,je=a&&_.isVideoTexture!==!0&&_e!==yu,lt=me.__version===void 0||Q===!0,Ve=P(_,K,Je);if(_.isDepthTexture)_e=n.DEPTH_COMPONENT,a?_.type===gi?_e=n.DEPTH_COMPONENT32F:_.type===mi?_e=n.DEPTH_COMPONENT24:_.type===Fi?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:_.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ki&&_e===n.DEPTH_COMPONENT&&_.type!==jl&&_.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=mi,Ne=r.convert(_.type)),_.format===Is&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,_.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Fi,Ne=r.convert(_.type))),lt&&(je?t.texStorage2D(n.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,Xe,Ne,null));else if(_.isDataTexture)if(ke.length>0&&Je){je&&lt&&t.texStorage2D(n.TEXTURE_2D,Ve,_e,ke[0].width,ke[0].height);for(let ne=0,R=ke.length;ne<R;ne++)ue=ke[ne],je?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Xe,Ne,ue.data):t.texImage2D(n.TEXTURE_2D,ne,_e,ue.width,ue.height,0,Xe,Ne,ue.data);_.generateMipmaps=!1}else je?(lt&&t.texStorage2D(n.TEXTURE_2D,Ve,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Xe,Ne,K.data)):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,Xe,Ne,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){je&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,_e,ke[0].width,ke[0].height,K.depth);for(let ne=0,R=ke.length;ne<R;ne++)ue=ke[ne],_.format!==Tn?Xe!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,K.depth,Xe,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,K.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,K.depth,Xe,Ne,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,K.depth,0,Xe,Ne,ue.data)}else{je&&lt&&t.texStorage2D(n.TEXTURE_2D,Ve,_e,ke[0].width,ke[0].height);for(let ne=0,R=ke.length;ne<R;ne++)ue=ke[ne],_.format!==Tn?Xe!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Xe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,Xe,Ne,ue.data):t.texImage2D(n.TEXTURE_2D,ne,_e,ue.width,ue.height,0,Xe,Ne,ue.data)}else if(_.isDataArrayTexture)je?(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Xe,Ne,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,Xe,Ne,K.data);else if(_.isData3DTexture)je?(lt&&t.texStorage3D(n.TEXTURE_3D,Ve,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Xe,Ne,K.data)):t.texImage3D(n.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,Xe,Ne,K.data);else if(_.isFramebufferTexture){if(lt)if(je)t.texStorage2D(n.TEXTURE_2D,Ve,_e,K.width,K.height);else{let ne=K.width,R=K.height;for(let re=0;re<Ve;re++)t.texImage2D(n.TEXTURE_2D,re,_e,ne,R,0,Xe,Ne,null),ne>>=1,R>>=1}}else if(ke.length>0&&Je){je&&lt&&t.texStorage2D(n.TEXTURE_2D,Ve,_e,ke[0].width,ke[0].height);for(let ne=0,R=ke.length;ne<R;ne++)ue=ke[ne],je?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Xe,Ne,ue):t.texImage2D(n.TEXTURE_2D,ne,_e,Xe,Ne,ue);_.generateMipmaps=!1}else je?(lt&&t.texStorage2D(n.TEXTURE_2D,Ve,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,Ne,K)):t.texImage2D(n.TEXTURE_2D,0,_e,Xe,Ne,K);S(_,Je)&&v(ee),me.__version=te.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function fe(M,_,z){if(_.image.length!==6)return;let ee=Y(M,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+z);let te=i.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let me=Ke.getPrimaries(Ke.workingColorSpace),le=_.colorSpace===hn?null:Ke.getPrimaries(_.colorSpace),he=_.colorSpace===hn||me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,He=_.image[0]&&_.image[0].isDataTexture,K=[];for(let ne=0;ne<6;ne++)!Ae&&!He?K[ne]=y(_.image[ne],!1,!0,s.maxCubemapSize):K[ne]=He?_.image[ne].image:_.image[ne],K[ne]=ze(_,K[ne]);let Je=K[0],Xe=p(Je)||a,Ne=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),ue=T(_.internalFormat,Ne,_e,_.colorSpace),ke=a&&_.isVideoTexture!==!0,je=te.__version===void 0||ee===!0,lt=P(_,Je,Xe);G(n.TEXTURE_CUBE_MAP,_,Xe);let Ve;if(Ae){ke&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,ue,Je.width,Je.height);for(let ne=0;ne<6;ne++){Ve=K[ne].mipmaps;for(let R=0;R<Ve.length;R++){let re=Ve[R];_.format!==Tn?Ne!==null?ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,Ne,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,Ne,_e,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,re.width,re.height,0,Ne,_e,re.data)}}}else{Ve=_.mipmaps,ke&&je&&(Ve.length>0&&lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,ue,K[0].width,K[0].height));for(let ne=0;ne<6;ne++)if(He){ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,K[ne].width,K[ne].height,Ne,_e,K[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,K[ne].width,K[ne].height,0,Ne,_e,K[ne].data);for(let R=0;R<Ve.length;R++){let ae=Ve[R].image[ne].image;ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,ae.width,ae.height,Ne,_e,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,ae.width,ae.height,0,Ne,_e,ae.data)}}else{ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,_e,K[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Ne,_e,K[ne]);for(let R=0;R<Ve.length;R++){let re=Ve[R];ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,Ne,_e,re.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,Ne,_e,re.image[ne])}}}S(_,Xe)&&v(n.TEXTURE_CUBE_MAP),te.__version=Q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function de(M,_,z,ee,Q,te){let me=r.convert(z.format,z.colorSpace),le=r.convert(z.type),he=T(z.internalFormat,me,le,z.colorSpace);if(!i.get(_).__hasExternalTextures){let He=Math.max(1,_.width>>te),K=Math.max(1,_.height>>te);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,he,He,K,_.depth,0,me,le,null):t.texImage2D(Q,te,he,He,K,0,me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),pe(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Q,i.get(z).__webglTexture,0,Ue(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,Q,i.get(z).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(M,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||pe(_)){let Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===gi?ee=n.DEPTH_COMPONENT32F:Q.type===mi&&(ee=n.DEPTH_COMPONENT24));let te=Ue(_);pe(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){let ee=Ue(_);z&&pe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,_.width,_.height):pe(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let ee=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<ee.length;Q++){let te=ee[Q],me=r.convert(te.format,te.colorSpace),le=r.convert(te.type),he=T(te.internalFormat,me,le,te.colorSpace),Ae=Ue(_);z&&pe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,he,_.width,_.height):pe(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,he,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,he,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F(_.depthTexture,0);let ee=i.get(_.depthTexture).__webglTexture,Q=Ue(_);if(_.depthTexture.format===ki)pe(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Is)pe(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function be(M){let _=i.get(M),z=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Le(_.__webglFramebuffer,M)}else if(z){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]=n.createRenderbuffer(),Pe(_.__webglDepthbuffer[ee],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Pe(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(M,_,z){let ee=i.get(M);_!==void 0&&de(ee.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&be(M)}function k(M){let _=M.texture,z=i.get(M),ee=i.get(_);M.addEventListener("dispose",D),M.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=_.version,o.memory.textures++);let Q=M.isWebGLCubeRenderTarget===!0,te=M.isWebGLMultipleRenderTargets===!0,me=p(M)||a;if(Q){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let he=0;he<_.mipmaps.length;he++)z.__webglFramebuffer[le][he]=n.createFramebuffer()}else z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[le]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(te)if(s.drawBuffers){let le=M.texture;for(let he=0,Ae=le.length;he<Ae;he++){let He=i.get(le[he]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&pe(M)===!1){let le=te?_:[_];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){let Ae=le[he];z.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[he]);let He=r.convert(Ae.format,Ae.colorSpace),K=r.convert(Ae.type),Je=T(Ae.internalFormat,He,K,Ae.colorSpace,M.isXRRenderTarget===!0),Xe=Ue(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Je,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,z.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(z.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),G(n.TEXTURE_CUBE_MAP,_,me);for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)de(z.__webglFramebuffer[le][he],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else de(z.__webglFramebuffer[le],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);S(_,me)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let le=M.texture;for(let he=0,Ae=le.length;he<Ae;he++){let He=le[he],K=i.get(He);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),G(n.TEXTURE_2D,He,me),de(z.__webglFramebuffer,M,He,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),S(He,me)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?le=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),G(le,_,me),a&&_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)de(z.__webglFramebuffer[he],M,_,n.COLOR_ATTACHMENT0,le,he);else de(z.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,le,0);S(_,me)&&v(le),t.unbindTexture()}M.depthBuffer&&be(M)}function Ot(M){let _=p(M)||a,z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0,Q=z.length;ee<Q;ee++){let te=z[ee];if(S(te,_)){let me=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(te).__webglTexture;t.bindTexture(me,le),v(me),t.unbindTexture()}}}function Me(M){if(a&&M.samples>0&&pe(M)===!1){let _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],z=M.width,ee=M.height,Q=n.COLOR_BUFFER_BIT,te=[],me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(M),he=M.isWebGLMultipleRenderTargets===!0;if(he)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){te.push(n.COLOR_ATTACHMENT0+Ae),M.depthBuffer&&te.push(me);let He=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(He===!1&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]),He===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),he){let K=i.get(_[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,z,ee,0,0,z,ee,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]);let He=i.get(_[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ue(M){return Math.min(s.maxSamples,M.samples)}function pe(M){let _=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function at(M){let _=o.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function ze(M,_){let z=M.colorSpace,ee=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===al||z!==ni&&z!==hn&&(Ke.getTransfer(z)===it?a===!1?e.has("EXT_sRGB")===!0&&ee===Tn?(M.format=al,M.minFilter=cn,M.generateMipmaps=!1):_=wa.sRGBToLinear(_):(ee!==Tn||Q!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}this.allocateTextureUnit=A,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=Ye,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=pe}function xy(n,e,t){let i=t.isWebGL2;function s(r,o=hn){let a,l=Ke.getTransfer(o);if(r===_i)return n.UNSIGNED_BYTE;if(r===du)return n.UNSIGNED_SHORT_4_4_4_4;if(r===fu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ff)return n.BYTE;if(r===pf)return n.SHORT;if(r===jl)return n.UNSIGNED_SHORT;if(r===uu)return n.INT;if(r===mi)return n.UNSIGNED_INT;if(r===gi)return n.FLOAT;if(r===fr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===mf)return n.ALPHA;if(r===Tn)return n.RGBA;if(r===gf)return n.LUMINANCE;if(r===yf)return n.LUMINANCE_ALPHA;if(r===ki)return n.DEPTH_COMPONENT;if(r===Is)return n.DEPTH_STENCIL;if(r===al)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vf)return n.RED;if(r===pu)return n.RED_INTEGER;if(r===_f)return n.RG;if(r===mu)return n.RG_INTEGER;if(r===gu)return n.RGBA_INTEGER;if(r===_o||r===xo||r===bo||r===Mo)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===_o)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===_o)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fc||r===kc||r===Bc||r===zc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hc||r===Gc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Hc)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vc||r===Wc||r===qc||r===$c||r===Xc||r===Yc||r===jc||r===Zc||r===Jc||r===Kc||r===Qc||r===eh||r===th||r===nh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Vc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$c)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qc)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===th)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===So||r===ih||r===sh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===So)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xf||r===rh||r===ah||r===oh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===So)return a.COMPRESSED_RED_RGTC1_EXT;if(r===rh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Ml=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},un=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(by)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sl=class extends bi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null,y=t.getContextAttributes(),p=null,f=null,S=[],v=[],T=new ve,P=null,C=new Ht;C.layers.enable(1),C.viewport=new Et;let w=new Ht;w.layers.enable(2),w.viewport=new Et;let D=[C,w],x=new Ml;x.layers.enable(1),x.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=S[G];return Y===void 0&&(Y=new lr,S[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=S[G];return Y===void 0&&(Y=new lr,S[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=S[G];return Y===void 0&&(Y=new lr,S[G]=Y),Y.getHandSpace()};function Z(G){let Y=v.indexOf(G.inputSource);if(Y===-1)return;let se=S[Y];se!==void 0&&(se.update(G.inputSource,G.frame,c||o),se.dispatchEvent({type:G.type,data:G.inputSource}))}function U(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",A);for(let G=0;G<S.length;G++){let Y=v[G];Y!==null&&(v[G]=null,S[G].disconnect(Y))}E=null,V=null,e.setRenderTarget(p),m=null,u=null,d=null,s=null,f=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",U),s.addEventListener("inputsourceschange",A),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new ii(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,se=null,fe=null;y.depth&&(fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=y.stencil?Is:ki,se=y.stencil?Fi:mi);let de={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(de),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new ii(u.textureWidth,u.textureHeight,{format:Tn,type:_i,depthTexture:new Da(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Pe=e.properties.get(f);Pe.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function A(G){for(let Y=0;Y<G.removed.length;Y++){let se=G.removed[Y],fe=v.indexOf(se);fe>=0&&(v[fe]=null,S[fe].disconnect(se))}for(let Y=0;Y<G.added.length;Y++){let se=G.added[Y],fe=v.indexOf(se);if(fe===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=v.length){v.push(se),fe=Pe;break}else if(v[Pe]===null){v[Pe]=se,fe=Pe;break}if(fe===-1)break}let de=S[fe];de&&de.connect(se)}}let L=new I,F=new I;function X(G,Y,se){L.setFromMatrixPosition(Y.matrixWorld),F.setFromMatrixPosition(se.matrixWorld);let fe=L.distanceTo(F),de=Y.projectionMatrix.elements,Pe=se.projectionMatrix.elements,Le=de[14]/(de[10]-1),be=de[14]/(de[10]+1),Ye=(de[9]+1)/de[5],k=(de[9]-1)/de[5],Ot=(de[8]-1)/de[0],Me=(Pe[8]+1)/Pe[0],Ue=Le*Ot,pe=Le*Me,at=fe/(-Ot+Me),ze=at*-Ot;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ze),G.translateZ(at),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let M=Le+at,_=be+at,z=Ue-ze,ee=pe+(fe-ze),Q=Ye*be/_*M,te=k*be/_*M;G.projectionMatrix.makePerspective(z,ee,Q,te,M,_),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function $(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;x.near=w.near=C.near=G.near,x.far=w.far=C.far=G.far,(E!==x.near||V!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,V=x.far);let Y=G.parent,se=x.cameras;$(x,Y);for(let fe=0;fe<se.length;fe++)$(se[fe],Y);se.length===2?X(x,C,w):x.projectionMatrix.copy(C.projectionMatrix),q(G,x,Y)};function q(G,Y,se){se===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(se.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ol*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let j=null;function J(G,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let fe=!1;se.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let de=0;de<se.length;de++){let Pe=se[de],Le=null;if(m!==null)Le=m.getViewport(Pe);else{let Ye=d.getViewSubImage(u,Pe);Le=Ye.viewport,de===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,u.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let be=D[de];be===void 0&&(be=new Ht,be.layers.enable(de),be.viewport=new Et,D[de]=be),be.matrix.fromArray(Pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Le.x,Le.y,Le.width,Le.height),de===0&&(x.matrix.copy(be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),fe===!0&&x.cameras.push(be)}}for(let se=0;se<S.length;se++){let fe=v[se],de=S[se];fe!==null&&de!==void 0&&de.update(fe,Y,c||o)}j&&j(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let oe=new wu;oe.setAnimationLoop(J),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}};function My(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Su(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,v,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,S,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sy(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let T=v.program;i.uniformBlockBinding(S,T)}function c(S,v){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",p));let P=v.program;i.updateUBOMapping(S,P);let C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}function h(S){let v=d();S.__bindingPointIndex=v;let T=n.createBuffer(),P=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let v=s[S.id],T=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=T.length;C<w;C++){let D=Array.isArray(T[C])?T[C]:[T[C]];for(let x=0,E=D.length;x<E;x++){let V=D[x];if(m(V,C,x,P)===!0){let Z=V.__offset,U=Array.isArray(V.value)?V.value:[V.value],A=0;for(let L=0;L<U.length;L++){let F=U[L],X=y(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,Z+A,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,A),A+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,v,T,P){let C=S.value,w=v+"_"+T;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{let D=P[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(S){let v=S.uniforms,T=0,P=16;for(let w=0,D=v.length;w<D;w++){let x=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,V=x.length;E<V;E++){let Z=x[E],U=Array.isArray(Z.value)?Z.value:[Z.value];for(let A=0,L=U.length;A<L;A++){let F=U[A],X=y(F),$=T%P;$!==0&&P-$<X.boundary&&(T+=P-$),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=X.storage}}}let C=T%P;return C>0&&(T+=P-C),S.__size=T,S.__cache={},this}function y(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){let v=S.target;v.removeEventListener("dispose",p);let T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var yr=class{constructor(e={}){let{canvas:t=Lf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let v=this,T=!1,P=0,C=0,w=null,D=-1,x=null,E=new Et,V=new Et,Z=null,U=new $e(0),A=0,L=t.width,F=t.height,X=1,$=null,q=null,j=new Et(0,0,L,F),J=new Et(0,0,L,F),oe=!1,G=new gr,Y=!1,se=!1,fe=null,de=new dt,Pe=new ve,Le=new I,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return w===null?X:1}let k=i;function Ot(b,N){for(let H=0;H<b.length;H++){let W=b[H],B=t.getContext(W,N);if(B!==null)return B}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",re,!1),k===null){let N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),k=Ot(N,b),k===null)throw Ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Me,Ue,pe,at,ze,M,_,z,ee,Q,te,me,le,he,Ae,He,K,Je,Xe,Ne,_e,ue,ke,je;function lt(){Me=new Gg(k),Ue=new Og(k,Me,e),Me.init(Ue),ue=new xy(k,Me,Ue),pe=new vy(k,Me,Ue),at=new qg(k),ze=new ay,M=new _y(k,Me,pe,ze,Ue,ue,at),_=new kg(v),z=new Hg(v),ee=new Qf(k,Ue),ke=new Dg(k,Me,ee,Ue),Q=new Vg(k,ee,at,ke),te=new jg(k,Q,ee,at),Xe=new Yg(k,Ue,M),He=new Fg(ze),me=new ry(v,_,z,Me,Ue,ke,He),le=new My(v,ze),he=new ly,Ae=new py(Me,Ue),Je=new Ng(v,_,z,pe,te,u,l),K=new yy(v,te,Ue),je=new Sy(k,at,Ue,pe),Ne=new Ug(k,Me,at,Ue),_e=new Wg(k,Me,at,Ue),at.programs=me.programs,v.capabilities=Ue,v.extensions=Me,v.properties=ze,v.renderLists=he,v.shadowMap=K,v.state=pe,v.info=at}lt();let Ve=new Sl(v,k);this.xr=Ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(L,F,!1))},this.getSize=function(b){return b.set(L,F)},this.setSize=function(b,N,H=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,F=N,t.width=Math.floor(b*X),t.height=Math.floor(N*X),H===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(L*X,F*X).floor()},this.setDrawingBufferSize=function(b,N,H){L=b,F=N,X=H,t.width=Math.floor(b*H),t.height=Math.floor(N*H),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,N,H,W){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,N,H,W),pe.viewport(E.copy(j).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,N,H,W){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,N,H,W),pe.scissor(V.copy(J).multiplyScalar(X).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){pe.setScissorTest(oe=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,N=!0,H=!0){let W=0;if(b){let B=!1;if(w!==null){let ce=w.texture.format;B=ce===gu||ce===mu||ce===pu}if(B){let ce=w.texture.type,ge=ce===_i||ce===mi||ce===jl||ce===Fi||ce===du||ce===fu,Ee=Je.getClearColor(),Ie=Je.getClearAlpha(),Ge=Ee.r,Oe=Ee.g,Fe=Ee.b;ge?(m[0]=Ge,m[1]=Oe,m[2]=Fe,m[3]=Ie,k.clearBufferuiv(k.COLOR,0,m)):(g[0]=Ge,g[1]=Oe,g[2]=Fe,g[3]=Ie,k.clearBufferiv(k.COLOR,0,g))}else W|=k.COLOR_BUFFER_BIT}N&&(W|=k.DEPTH_BUFFER_BIT),H&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",re,!1),he.dispose(),Ae.dispose(),ze.dispose(),_.dispose(),z.dispose(),te.dispose(),ke.dispose(),je.dispose(),me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Ft),Ve.removeEventListener("sessionend",tt),fe&&(fe.dispose(),fe=null),kt.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=at.autoReset,N=K.enabled,H=K.autoUpdate,W=K.needsUpdate,B=K.type;lt(),at.autoReset=b,K.enabled=N,K.autoUpdate=H,K.needsUpdate=W,K.type=B}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){let N=b.target;N.removeEventListener("dispose",ae),Re(N)}function Re(b){Se(b),ze.remove(b)}function Se(b){let N=ze.get(b).programs;N!==void 0&&(N.forEach(function(H){me.releaseProgram(H)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,H,W,B,ce){N===null&&(N=be);let ge=B.isMesh&&B.matrixWorld.determinant()<0,Ee=Ad(b,N,H,W,B);pe.setMaterial(W,ge);let Ie=H.index,Ge=1;if(W.wireframe===!0){if(Ie=Q.getWireframeAttribute(H),Ie===void 0)return;Ge=2}let Oe=H.drawRange,Fe=H.attributes.position,ht=Oe.start*Ge,Jt=(Oe.start+Oe.count)*Ge;ce!==null&&(ht=Math.max(ht,ce.start*Ge),Jt=Math.min(Jt,(ce.start+ce.count)*Ge)),Ie!==null?(ht=Math.max(ht,0),Jt=Math.min(Jt,Ie.count)):Fe!=null&&(ht=Math.max(ht,0),Jt=Math.min(Jt,Fe.count));let St=Jt-ht;if(St<0||St===1/0)return;ke.setup(B,W,Ee,H,Ie);let Xn,ot=Ne;if(Ie!==null&&(Xn=ee.get(Ie),ot=_e,ot.setIndex(Xn)),B.isMesh)W.wireframe===!0?(pe.setLineWidth(W.wireframeLinewidth*Ye()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(B.isLine){let We=W.linewidth;We===void 0&&(We=1),pe.setLineWidth(We*Ye()),B.isLineSegments?ot.setMode(k.LINES):B.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else B.isPoints?ot.setMode(k.POINTS):B.isSprite&&ot.setMode(k.TRIANGLES);if(B.isBatchedMesh)ot.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ot.renderInstances(ht,St,B.count);else if(H.isInstancedBufferGeometry){let We=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,po=Math.min(H.instanceCount,We);ot.renderInstances(ht,St,po)}else ot.render(ht,St)};function Qe(b,N,H){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,Gr(b,N,H),b.side=xi,b.needsUpdate=!0,Gr(b,N,H),b.side=wn):Gr(b,N,H)}this.compile=function(b,N,H=null){H===null&&(H=b),p=Ae.get(H),p.init(),S.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==H&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);let W=new Set;return b.traverse(function(B){let ce=B.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let Ee=ce[ge];Qe(Ee,H,B),W.add(Ee)}else Qe(ce,H,B),W.add(ce)}),S.pop(),p=null,W},this.compileAsync=function(b,N,H=null){let W=this.compile(b,N,H);return new Promise(B=>{function ce(){if(W.forEach(function(ge){ze.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){B(b);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let et=null;function Mt(b){et&&et(b)}function Ft(){kt.stop()}function tt(){kt.start()}let kt=new wu;kt.setAnimationLoop(Mt),typeof self!="undefined"&&kt.setContext(self),this.setAnimationLoop=function(b){et=b,Ve.setAnimationLoop(b),b===null?kt.stop():kt.start()},Ve.addEventListener("sessionstart",Ft),Ve.addEventListener("sessionend",tt),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(N),N=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,w),p=Ae.get(b,S.length),p.init(),S.push(p),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(de),se=this.localClippingEnabled,Y=He.init(this.clippingPlanes,se),y=he.get(b,f.length),y.init(),f.push(y),On(b,N,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort($,q),this.info.render.frame++,Y===!0&&He.beginShadows();let H=p.state.shadowsArray;if(K.render(H,b,N),Y===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(y,b),p.setupLights(v._useLegacyLights),N.isArrayCamera){let W=N.cameras;for(let B=0,ce=W.length;B<ce;B++){let ge=W[B];Ec(y,b,ge,ge.viewport)}}else Ec(y,b,N);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(v,b,N),ke.resetDefaultState(),D=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function On(b,N,H,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){W&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);let ge=te.update(b),Ee=b.material;Ee.visible&&y.push(b,ge,Ee,H,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){let ge=te.update(b),Ee=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Le.copy(ge.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Ee)){let Ie=ge.groups;for(let Ge=0,Oe=Ie.length;Ge<Oe;Ge++){let Fe=Ie[Ge],ht=Ee[Fe.materialIndex];ht&&ht.visible&&y.push(b,ge,ht,H,Le.z,Fe)}}else Ee.visible&&y.push(b,ge,Ee,H,Le.z,null)}}let ce=b.children;for(let ge=0,Ee=ce.length;ge<Ee;ge++)On(ce[ge],N,H,W)}function Ec(b,N,H,W){let B=b.opaque,ce=b.transmissive,ge=b.transparent;p.setupLightsView(H),Y===!0&&He.setGlobalState(v.clippingPlanes,H),ce.length>0&&Td(B,ce,N,H),W&&pe.viewport(E.copy(W)),B.length>0&&Hr(B,N,H),ce.length>0&&Hr(ce,N,H),ge.length>0&&Hr(ge,N,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Td(b,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ce=Ue.isWebGL2;fe===null&&(fe=new ii(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?fr:_i,minFilter:dr,samples:ce?4:0})),v.getDrawingBufferSize(Pe),ce?fe.setSize(Pe.x,Pe.y):fe.setSize(ll(Pe.x),ll(Pe.y));let ge=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(U),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear();let Ee=v.toneMapping;v.toneMapping=vi,Hr(b,H,W),M.updateMultisampleRenderTarget(fe),M.updateRenderTargetMipmap(fe);let Ie=!1;for(let Ge=0,Oe=N.length;Ge<Oe;Ge++){let Fe=N[Ge],ht=Fe.object,Jt=Fe.geometry,St=Fe.material,Xn=Fe.group;if(St.side===wn&&ht.layers.test(W.layers)){let ot=St.side;St.side=Dt,St.needsUpdate=!0,Tc(ht,H,W,Jt,St,Xn),St.side=ot,St.needsUpdate=!0,Ie=!0}}Ie===!0&&(M.updateMultisampleRenderTarget(fe),M.updateRenderTargetMipmap(fe)),v.setRenderTarget(ge),v.setClearColor(U,A),v.toneMapping=Ee}function Hr(b,N,H){let W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ce=b.length;B<ce;B++){let ge=b[B],Ee=ge.object,Ie=ge.geometry,Ge=W===null?ge.material:W,Oe=ge.group;Ee.layers.test(H.layers)&&Tc(Ee,N,H,Ie,Ge,Oe)}}function Tc(b,N,H,W,B,ce){b.onBeforeRender(v,N,H,W,B,ce),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,N,H,W,b,ce),B.transparent===!0&&B.side===wn&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,v.renderBufferDirect(H,N,W,B,b,ce),B.side=xi,B.needsUpdate=!0,v.renderBufferDirect(H,N,W,B,b,ce),B.side=wn):v.renderBufferDirect(H,N,W,B,b,ce),b.onAfterRender(v,N,H,W,B,ce)}function Gr(b,N,H){N.isScene!==!0&&(N=be);let W=ze.get(b),B=p.state.lights,ce=p.state.shadowsArray,ge=B.state.version,Ee=me.getParameters(b,B.state,ce,N,H),Ie=me.getProgramCacheKey(Ee),Ge=W.programs;W.environment=b.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||W.environment),Ge===void 0&&(b.addEventListener("dispose",ae),Ge=new Map,W.programs=Ge);let Oe=Ge.get(Ie);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===ge)return Cc(b,Ee),Oe}else Ee.uniforms=me.getUniforms(b),b.onBuild(H,Ee,v),b.onBeforeCompile(Ee,v),Oe=me.acquireProgram(Ee,Ie),Ge.set(Ie,Oe),W.uniforms=Ee.uniforms;let Fe=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=He.uniform),Cc(b,Ee),W.needsLights=Rd(b),W.lightsStateVersion=ge,W.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function Ac(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Cs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Cc(b,N){let H=ze.get(b);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Ad(b,N,H,W,B){N.isScene!==!0&&(N=be),M.resetTextureUnits();let ce=N.fog,ge=W.isMeshStandardMaterial?N.environment:null,Ee=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ni,Ie=(W.isMeshStandardMaterial?z:_).get(W.envMap||ge),Ge=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!H.morphAttributes.position,ht=!!H.morphAttributes.normal,Jt=!!H.morphAttributes.color,St=vi;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=v.toneMapping);let Xn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=Xn!==void 0?Xn.length:0,We=ze.get(W),po=p.state.lights;if(Y===!0&&(se===!0||b!==x)){let on=b===x&&W.id===D;He.setState(W,b,on)}let ct=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==po.state.version||We.outputColorSpace!==Ee||B.isBatchedMesh&&We.batching===!1||!B.isBatchedMesh&&We.batching===!0||B.isInstancedMesh&&We.instancing===!1||!B.isInstancedMesh&&We.instancing===!0||B.isSkinnedMesh&&We.skinning===!1||!B.isSkinnedMesh&&We.skinning===!0||B.isInstancedMesh&&We.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&We.instancingColor===!1&&B.instanceColor!==null||We.envMap!==Ie||W.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==He.numPlanes||We.numIntersection!==He.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Oe||We.morphTargets!==Fe||We.morphNormals!==ht||We.morphColors!==Jt||We.toneMapping!==St||Ue.isWebGL2===!0&&We.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,We.__version=W.version);let Ci=We.currentProgram;ct===!0&&(Ci=Gr(W,N,B));let Rc=!1,tr=!1,mo=!1,Pt=Ci.getUniforms(),Ri=We.uniforms;if(pe.useProgram(Ci.program)&&(Rc=!0,tr=!0,mo=!0),W.id!==D&&(D=W.id,tr=!0),Rc||x!==b){Pt.setValue(k,"projectionMatrix",b.projectionMatrix),Pt.setValue(k,"viewMatrix",b.matrixWorldInverse);let on=Pt.map.cameraPosition;on!==void 0&&on.setValue(k,Le.setFromMatrixPosition(b.matrixWorld)),Ue.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,tr=!0,mo=!0)}if(B.isSkinnedMesh){Pt.setOptional(k,B,"bindMatrix"),Pt.setOptional(k,B,"bindMatrixInverse");let on=B.skeleton;on&&(Ue.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Pt.setValue(k,"boneTexture",on.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Pt.setOptional(k,B,"batchingTexture"),Pt.setValue(k,"batchingTexture",B._matricesTexture,M));let go=H.morphAttributes;if((go.position!==void 0||go.normal!==void 0||go.color!==void 0&&Ue.isWebGL2===!0)&&Xe.update(B,H,Ci),(tr||We.receiveShadow!==B.receiveShadow)&&(We.receiveShadow=B.receiveShadow,Pt.setValue(k,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ri.envMap.value=Ie,Ri.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),tr&&(Pt.setValue(k,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Cd(Ri,mo),ce&&W.fog===!0&&le.refreshFogUniforms(Ri,ce),le.refreshMaterialUniforms(Ri,W,X,F,fe),Cs.upload(k,Ac(We),Ri,M)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cs.upload(k,Ac(We),Ri,M),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pt.setValue(k,"center",B.center),Pt.setValue(k,"modelViewMatrix",B.modelViewMatrix),Pt.setValue(k,"normalMatrix",B.normalMatrix),Pt.setValue(k,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let on=W.uniformsGroups;for(let yo=0,Pd=on.length;yo<Pd;yo++)if(Ue.isWebGL2){let Pc=on[yo];je.update(Pc,Ci),je.bind(Pc,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Cd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Rd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,N,H){ze.get(b.texture).__webglTexture=N,ze.get(b.depthTexture).__webglTexture=H;let W=ze.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){let H=ze.get(b);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,H=0){w=b,P=N,C=H;let W=!0,B=null,ce=!1,ge=!1;if(b){let Ie=ze.get(b);Ie.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Ie.__webglFramebuffer===void 0?M.setupRenderTarget(b):Ie.__hasExternalTextures&&M.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);let Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ge=!0);let Oe=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?B=Oe[N][H]:B=Oe[N],ce=!0):Ue.isWebGL2&&b.samples>0&&M.useMultisampledRTT(b)===!1?B=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[H]:B=Oe,E.copy(b.viewport),V.copy(b.scissor),Z=b.scissorTest}else E.copy(j).multiplyScalar(X).floor(),V.copy(J).multiplyScalar(X).floor(),Z=oe;if(pe.bindFramebuffer(k.FRAMEBUFFER,B)&&Ue.drawBuffers&&W&&pe.drawBuffers(b,B),pe.viewport(E),pe.scissor(V),pe.setScissorTest(Z),ce){let Ie=ze.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,H)}else if(ge){let Ie=ze.get(b.texture),Ge=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,H||0,Ge)}D=-1},this.readRenderTargetPixels=function(b,N,H,W,B,ce,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){pe.bindFramebuffer(k.FRAMEBUFFER,Ee);try{let Ie=b.texture,Ge=Ie.format,Oe=Ie.type;if(Ge!==Tn&&ue.convert(Ge)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Oe===fr&&(Me.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Oe!==_i&&ue.convert(Oe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===gi&&(Ue.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&H>=0&&H<=b.height-B&&k.readPixels(N,H,W,B,ue.convert(Ge),ue.convert(Oe),ce)}finally{let Ie=w!==null?ze.get(w).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(b,N,H=0){let W=Math.pow(2,-H),B=Math.floor(N.image.width*W),ce=Math.floor(N.image.height*W);M.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,b.x,b.y,B,ce),pe.unbindTexture()},this.copyTextureToTexture=function(b,N,H,W=0){let B=N.image.width,ce=N.image.height,ge=ue.convert(H.format),Ee=ue.convert(H.type);M.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,b.x,b.y,B,ce,ge,Ee,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,ge,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,b.x,b.y,ge,Ee,N.image),W===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,N,H,W,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=b.max.x-b.min.x+1,ge=b.max.y-b.min.y+1,Ee=b.max.z-b.min.z+1,Ie=ue.convert(W.format),Ge=ue.convert(W.type),Oe;if(W.isData3DTexture)M.setTexture3D(W,0),Oe=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)M.setTexture2DArray(W,0),Oe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);let Fe=k.getParameter(k.UNPACK_ROW_LENGTH),ht=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Jt=k.getParameter(k.UNPACK_SKIP_PIXELS),St=k.getParameter(k.UNPACK_SKIP_ROWS),Xn=k.getParameter(k.UNPACK_SKIP_IMAGES),ot=H.isCompressedTexture?H.mipmaps[B]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(Oe,B,N.x,N.y,N.z,ce,ge,Ee,Ie,Ge,ot.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Oe,B,N.x,N.y,N.z,ce,ge,Ee,Ie,ot.data)):k.texSubImage3D(Oe,B,N.x,N.y,N.z,ce,ge,Ee,Ie,Ge,ot),k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,St),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xn),B===0&&W.generateMipmaps&&k.generateMipmap(Oe),pe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zl?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Bi:vu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bi?ut:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},wl=class extends yr{};wl.prototype.isWebGL1Renderer=!0;var Ua=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var vr=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kh=new I,Qh=new I,eu=new dt,jo=new Ls,ua=new Hi,El=class extends Ut{constructor(e=new Vt,t=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Kh.fromBufferAttribute(t,s-1),Qh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Kh.distanceTo(Qh);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;eu.copy(s).invert(),jo.copy(e.ray).applyMatrix4(eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,d=new I,u=new I,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=f,T=S-1;v<T;v+=m){let P=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,C),jo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=f,T=S-1;v<T;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),jo.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(u);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},tu=new I,nu=new I,Oa=class extends El{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tu.fromBufferAttribute(t,s),nu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tu.distanceTo(nu);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _r=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},iu=new dt,Tl=new Ls,da=new Hi,fa=new I,Fa=class extends Ut{constructor(e=new Vt,t=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;iu.copy(s).invert(),Tl.copy(e.ray).applyMatrix4(iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=u,y=m;g<y;g++){let p=c.getX(g);fa.fromBufferAttribute(d,p),su(fa,p,l,s,e,t,this)}}else{let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=u,y=m;g<y;g++)fa.fromBufferAttribute(d,g),su(fa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function su(n,e,t,i,s,r,o){let a=Tl.distanceSqToPoint(n);if(a<t){let l=new I;Tl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ds=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,m=(o-h)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ve:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new dt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Nt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Nt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ka=class extends An{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ve,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*d+this.aX,c=u*d+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Al=class extends ka{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kl(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,m*=h,s(o,a,u,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var pa=new I,Zo=new Kl,Jo=new Kl,Ko=new Kl,xr=class extends An{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),c=pa);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Zo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),Jo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),Ko.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Jo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ko.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Zo.calc(l),Jo.calc(l),Ko.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ru(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function wy(n,e){let t=1-n;return t*t*e}function Ey(n,e){return 2*(1-n)*n*e}function Ty(n,e){return n*n*e}function cr(n,e,t,i){return wy(n,e)+Ey(n,t)+Ty(n,i)}function Ay(n,e){let t=1-n;return t*t*t*e}function Cy(n,e){let t=1-n;return 3*t*t*n*e}function Ry(n,e){return 3*(1-n)*n*n*e}function Py(n,e){return n*n*n*e}function hr(n,e,t,i,s){return Ay(n,e)+Cy(n,t)+Ry(n,i)+Py(n,s)}var Cl=class extends An{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hr(e,s.x,r.x,o.x,a.x),hr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rl=class extends An{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hr(e,s.x,r.x,o.x,a.x),hr(e,s.y,r.y,o.y,a.y),hr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pl=class extends An{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Il=class extends An{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends An{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(cr(e,s.x,r.x,o.x),cr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends An{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(cr(e,s.x,r.x,o.x),cr(e,s.y,r.y,o.y),cr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(ru(a,l.x,c.x,h.x,d.x),ru(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Iy=Object.freeze({__proto__:null,ArcCurve:Al,CatmullRomCurve3:xr,CubicBezierCurve:Cl,CubicBezierCurve3:Rl,EllipseCurve:ka,LineCurve:Pl,LineCurve3:Il,QuadraticBezierCurve:Ll,QuadraticBezierCurve3:Ba,SplineCurve:Nl});var za=class n extends Vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,m=new I,g=new ve;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let f=r+p/i*o;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let p=y*(i+1);for(let f=0;f<i;f++){let S=f+p,v=S,T=S+i+1,P=S+i+2,C=S+1;a.push(v,T,C),a.push(T,P,C)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var kn=class n extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,m=[],g=[],y=[],p=[];for(let f=0;f<=i;f++){let S=[],v=f/i,T=0;f===0&&o===0?T=.5/t:f===i&&l===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){let C=P/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(C+T,1-v),S.push(c++)}h.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let v=h[f][S+1],T=h[f][S],P=h[f+1][S],C=h[f+1][S+1];(f!==0||o>0)&&m.push(v,T,C),(f!==i-1||l<Math.PI)&&m.push(T,P,C)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ha=class n extends Vt{constructor(e=new Ba(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ve,h=new I,d=[],u=[],m=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(m,2));function y(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),S(),f()}function p(v){h=e.getPointAt(v/t,h);let T=o.normals[v],P=o.binormals[v];for(let C=0;C<=s;C++){let w=C/s*Math.PI*2,D=Math.sin(w),x=-Math.cos(w);l.x=x*T.x+D*P.x,l.y=x*T.y+D*P.y,l.z=x*T.z+D*P.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let v=1;v<=t;v++)for(let T=1;T<=s;T++){let P=(s+1)*(v-1)+(T-1),C=(s+1)*v+(T-1),w=(s+1)*v+T,D=(s+1)*(v-1)+T;g.push(P,C,D),g.push(C,w,D)}}function S(){for(let v=0;v<=t;v++)for(let T=0;T<=s;T++)c.x=v/t,c.y=T/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Iy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ga=class extends si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ma(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ly(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Us=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends Us{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:r=e,a=2*t-i;break;case hh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:o=e,l=2*i-t;break;case hh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,f=-u*p+2*u*y-u*g,S=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-m)*p+(1.5+m)*y+.5*g,T=m*p-m*y;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+S*o[c+P]+v*o[l+P]+T*o[d+P];return r}},Ul=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ol=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ly(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,m=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let m=0;m!==i;++m)t[u+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=va;var Gi=class extends Cn{};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ya;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Cn{};Fl.prototype.ValueTypeName="color";var kl=class extends Cn{};kl.prototype.ValueTypeName="number";var Bl=class extends Us{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},br=class extends Cn{InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};br.prototype.ValueTypeName="quaternion";br.prototype.DefaultInterpolation=va;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Cn{};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ya;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Cn{};zl.prototype.ValueTypeName="vector";var Hl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Ny=new Hl,Gl=class{constructor(e){this.manager=e!==void 0?e:Ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Va=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Qo=new dt,au=new I,ou=new I,Vl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wl=class extends Vl{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wa=class extends Va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ql="\\[\\]\\.:\\/",Dy=new RegExp("["+Ql+"]","g"),ec="[^"+Ql+"]",Uy="[^"+Ql.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",ec),Fy=/(WCOD+)?/.source.replace("WCOD",Uy),ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),zy=new RegExp("^"+Oy+Fy+ky+By+"$"),Hy=["material","materials","bones","map"],ql=class{constructor(e,t,i){let s=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},st=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dy,"")}static parseTrackName(e){let t=zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=ql;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cv=new Float32Array(1);var qa=class{constructor(e,t,i=0,s=1/0){this.ray=new Ls(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return $l(e,this,i,t),i.sort(lu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)$l(e[s],this,i,t);return i.sort(lu),i}};function lu(n,e){return n.distance-e.distance}function $l(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)$l(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);var qi=[{id:"maps",icon:"\u{1F5FA}\uFE0F",title:"Globes & Maps",scene:"projections",blurb:"Why every flat map is a little bit wrong.",steps:[{t:"Earth is a sphere (almost!)",s:"globe",html:'<p>Earth is round like a ball. It bulges a tiny bit at the equator, so scientists call it an <b>oblate spheroid</b>.</p><p>A <b>globe</b> is the most accurate model of Earth. Shapes, sizes, distances and directions are all correct on it.</p><p class="try">\u{1F446} Drag the globe to spin it. Pinch or scroll to zoom.</p>'},{t:"The orange-peel problem",s:"proj",html:`<p>Try to flatten an orange peel and it splits or stretches. Earth's surface works the same way.</p><p>Mapmakers use a <b>map projection</b>, a maths recipe for turning a round surface into a flat one. Every projection stretches something: shape, size, distance or direction.</p><p class="try">\u{1F446} Switch between projections and watch the world change.</p>`},{t:"The Greenland trick",s:"greenland",html:'<p>On the popular <b>Mercator</b> map, <span class="hl-g">Greenland</span> looks about as big as <span class="hl-a">Africa</span>.</p><p>In reality, Africa (about 30 million km\xB2) is roughly <b>14 times bigger</b> than Greenland (about 2.2 million km\xB2).</p><p class="try">\u{1F446} Switch to <b>Equal Earth</b>, a projection that keeps areas true.</p>'},{t:"Distortion circles",s:"tissot",html:"<p>Every red circle here is <b>the same size</b> on the real Earth. They're called <b>Tissot circles</b>.</p><p>On Mercator they swell up near the poles. Gerardus Mercator made his map in <b>1569</b> for sailors: a straight line on it keeps the same compass direction, which makes it easy to steer by.</p>"}],quiz:[{q:"Which shows shapes AND sizes most accurately?",o:["A globe","A Mercator map","A road map","A subway map"],a:0,why:"Only a globe keeps everything true, because it has the same round shape as Earth."},{q:"About how many times bigger is Africa than Greenland?",o:["The same size","2 times","14 times","100 times"],a:2,why:"Africa is about 30 million km\xB2, Greenland about 2.2 million km\xB2, so roughly 14\xD7."},{q:"What is a map projection?",o:["A film about maps","A way to show the round Earth on a flat surface","A type of compass","A satellite photo"],a:1,why:"A projection is the maths that turns the curved Earth into a flat map."}]},{id:"compass",icon:"\u{1F9ED}",title:"Compass & 360\xB0",scene:"compass",blurb:"Directions, bearings and a full turn of 360\xB0.",steps:[{t:"The four cardinal directions",s:"compass",html:'<p><b>North, East, South, West</b> are the <b>cardinal directions</b>. Memory trick: <i>"Never Eat Soggy Waffles"</i> (going clockwise).</p><p>North always points toward the <b>North Pole</b>. On most maps north is at the top.</p>'},{t:"A full turn is 360\xB0",s:"compass",html:'<p>A full circle has <b>360 degrees (360\xB0)</b>. Navigators measure direction clockwise from north. This is called a <b>bearing</b>.</p><p>North = 0\xB0, East = 90\xB0, South = 180\xB0, West = 270\xB0.</p><p class="try">\u{1F446} Drag the needle around the compass.</p>'},{t:"In between: NE, SE, SW, NW",s:"compassChallenge",html:'<p>Halfway between the cardinals are the <b>intercardinal</b> directions: NE = 45\xB0, SE = 135\xB0, SW = 225\xB0, NW = 315\xB0.</p><p class="try">\u{1F3AF} Challenge: turn the needle to each target bearing.</p>'},{t:"Magnetic north vs true north",s:"magnetic",html:"<p>A compass needle is a tiny magnet. It points to the <b>magnetic north pole</b>, which is <b>not</b> exactly at the geographic North Pole.</p><p>The magnetic pole sits in the Arctic and slowly <b>moves</b> every year, so map makers have to update their maps.</p>"}],quiz:[{q:"What bearing is West?",o:["90\xB0","180\xB0","270\xB0","360\xB0"],a:2,why:"Going clockwise from North (0\xB0): East 90\xB0, South 180\xB0, West 270\xB0."},{q:"Which direction is 45\xB0?",o:["North-East","South-East","South-West","North-West"],a:0,why:"45\xB0 is halfway between North (0\xB0) and East (90\xB0)."},{q:"How many degrees are in a full circle?",o:["100\xB0","180\xB0","360\xB0","400\xB0"],a:2,why:"A full turn is 360\xB0."}]},{id:"latitude",icon:"\u3030\uFE0F",title:"Latitude & the Equator",scene:"latitude",blurb:"The equator, tropics, polar circles and parallels.",steps:[{t:"The Equator",s:"equator",html:"<p>The <b>Equator</b> is an imaginary line around the middle of Earth, at <b>0\xB0 latitude</b>. It's about <b>40,075 km</b> long.</p><p>It splits Earth into the <b>Northern</b> and <b>Southern Hemispheres</b>. <i>Hemi</i> means half, so a hemisphere is half a sphere.</p>"},{t:"Lines of latitude",s:"latSlider",html:'<p>Lines of <b>latitude</b> (also called <b>parallels</b>) run east to west, but they measure how far <b>north or south</b> you are.</p><p>They go from 0\xB0 at the Equator to <b>90\xB0N</b> (North Pole) and <b>90\xB0S</b> (South Pole).</p><p class="try">\u{1F446} Move the slider to travel north and south.</p>'},{t:"The special parallels",s:"special",html:'<p><b style="color:#ffb347">Tropic of Cancer (23.4\xB0N)</b> and <b style="color:#ffb347">Tropic of Capricorn (23.4\xB0S)</b>: between them, the Sun can be directly overhead.</p><p><b style="color:#7fe7ff">Arctic Circle (66.6\xB0N)</b> and <b style="color:#7fe7ff">Antarctic Circle (66.6\xB0S)</b>: beyond them you can get a whole day of sunlight in summer, or a whole day of darkness in winter.</p>'},{t:"Shrinking circles",s:"latSlider2",html:"<p>Parallels get <b>shorter</b> as you go toward the poles. The Equator is about 40,075 km around, while the 60\xB0N line is only about half as long.</p><p>Moving <b>1\xB0 of latitude</b> north or south is always about <b>111 km</b>.</p>"}],quiz:[{q:"What is the latitude of the Equator?",o:["0\xB0","23.4\xB0","90\xB0","180\xB0"],a:0,why:"All latitude is measured from the Equator, which is 0\xB0."},{q:"What is the latitude of the North Pole?",o:["0\xB0","66.6\xB0N","90\xB0N","180\xB0N"],a:2,why:"The North Pole is as far north as you can go: 90\xB0N."},{q:"The Tropic of Cancer is in which hemisphere?",o:["Northern","Southern","Both","Neither"],a:0,why:"It is at 23.4\xB0N, north of the Equator."}]},{id:"longitude",icon:"\u{1F310}",title:"Longitude & the Prime Meridian",scene:"longitude",blurb:"Meridians, Greenwich and the International Date Line.",steps:[{t:"The Prime Meridian",s:"prime",html:'<p>Lines of <b>longitude</b> (also called <b>meridians</b>) run from pole to pole. They measure how far <b>east or west</b> you are.</p><p>The <b style="color:#ff6b6b">Prime Meridian (0\xB0)</b> runs through <b>Greenwich, London</b>. Countries agreed on it at a conference in <b>1884</b>.</p>'},{t:"East and West",s:"lonSlider",html:'<p>Longitude goes from 0\xB0 to <b>180\xB0E</b> and from 0\xB0 to <b>180\xB0W</b>.</p><p>The Prime Meridian and the 180\xB0 line together split Earth into the <b>Eastern</b> and <b>Western Hemispheres</b>.</p><p class="try">\u{1F446} Slide to sweep a meridian around the world.</p>'},{t:"Meeting at the poles",s:"meridians",html:"<p>All meridians are the <b>same length</b> (about 20,000 km from pole to pole), and they all <b>meet at the poles</b>.</p><p>That means the gap between two meridians is widest at the Equator and shrinks to zero at the poles.</p>"},{t:"The International Date Line",s:"dateline",html:'<p>Near the <b>180\xB0</b> meridian is the <b style="color:#c79bff">International Date Line</b>. Cross it going west and the calendar jumps <b>forward one day</b>. Going east, it goes <b>back one day</b>.</p><p>The line zigzags so that island countries are not split between two dates.</p>'}],quiz:[{q:"The Prime Meridian passes through\u2026",o:["Paris, France","Greenwich, London","New York, USA","Cairo, Egypt"],a:1,why:"It was fixed at Greenwich in 1884."},{q:"What is the largest longitude number you can have?",o:["90\xB0","180\xB0","270\xB0","360\xB0"],a:1,why:"Longitude goes up to 180\xB0 East or 180\xB0 West."},{q:"Where do all meridians meet?",o:["At the Equator","In Greenwich","At the poles","They never meet"],a:2,why:"Every meridian runs from the North Pole to the South Pole."}]},{id:"coords",icon:"\u{1F4CD}",title:"Coordinates",scene:"coords",blurb:"Find any spot on Earth with two numbers.",steps:[{t:"An address for anywhere",s:"coordsFree",html:'<p>Put latitude and longitude together and you get <b>coordinates</b>, an address for any spot on Earth.</p><p>Latitude comes <b>first</b>. For example, London is about <b>51.5\xB0N, 0.1\xB0W</b>.</p><p class="try">\u{1F446} Tap anywhere on the globe to read its coordinates.</p>'},{t:"Null Island: 0\xB0, 0\xB0",s:"coordsNull",html:`<p>Where the Equator crosses the Prime Meridian is <b>0\xB0, 0\xB0</b>. It's in the Atlantic Ocean, in the <b>Gulf of Guinea</b>, off West Africa.</p><p>There's no island there, just sea and a weather buoy. Map nerds jokingly call it <b>"Null Island"</b>.</p><p class="try">\u{1F3AF} Tap the globe as close to 0\xB0, 0\xB0 as you can.</p>`},{t:"Coordinate hunt",s:"coordsHunt",html:'<p>Now find real cities from their coordinates. Get within <b>700 km</b> to score.</p><p class="tip">Tip: turn on the grid lines. They are drawn every 15\xB0.</p>'},{t:"Super-precise positions",s:"coordsFree",html:"<p>Each degree can be split into <b>60 minutes (\u2032)</b>, and each minute into <b>60 seconds (\u2033)</b>. So 51.5\xB0 = 51\xB0 30\u2032.</p><p>Phones and planes use <b>GPS</b>: satellites send signals that let your device work out its coordinates to within a few metres.</p>"}],quiz:[{q:"Which number is written first in coordinates?",o:["Longitude","Latitude","Altitude","It doesn\u2019t matter"],a:1,why:"The convention is latitude first, then longitude."},{q:"A place at 40.7\xB0N, 74.0\xB0W is in which hemispheres?",o:["North & East","North & West","South & East","South & West"],a:1,why:"N means Northern Hemisphere and W means Western Hemisphere. That is New York!"},{q:"Where is 0\xB0, 0\xB0?",o:["In the Sahara Desert","At the North Pole","In the Atlantic Ocean","In London"],a:2,why:"It is in the Gulf of Guinea, in the Atlantic Ocean."}]},{id:"time",icon:"\u{1F552}",title:"Time Zones",scene:"timezones",blurb:"Why it is morning in one place and night in another.",steps:[{t:"Earth is a spinning clock",s:"tzSpin",html:"<p>Earth spins once (360\xB0) in about <b>24 hours</b>, from west to east. That's why the Sun rises in the <b>east</b>.</p><p>360\xB0 \xF7 24 hours = <b>15\xB0 every hour</b>.</p>"},{t:"24 time zones",s:"tzBands",html:`<p>So the world is split into about <b>24 time zones</b>, each roughly <b>15\xB0</b> wide, counted from <b>UTC</b> (the time at Greenwich).</p><p class="try">\u{1F446} Slide along the longitudes to see the time there when it's 12:00 noon UTC.</p>`},{t:"Real zones are wiggly",s:"tzBands",html:"<p>Real time zones bend to follow country borders.</p><p><b>China</b> is wide enough for about five zones, but uses <b>one time</b> (UTC+8). <b>India</b> uses a half-hour zone: <b>UTC+5:30</b>.</p>"},{t:"East is ahead",s:"tzBands",html:"<p>Travel <b>east</b> and you set your clock <b>forward</b>. Travel <b>west</b> and you set it <b>back</b>.</p><p>Keep going all the way around and you'd reach the <b>International Date Line</b>, where the date changes.</p>"}],quiz:[{q:"How many degrees does Earth turn each hour?",o:["1\xB0","15\xB0","24\xB0","60\xB0"],a:1,why:"360\xB0 \xF7 24 hours = 15\xB0 per hour."},{q:"If it is 12:00 in Greenwich, about what time is it at 90\xB0E?",o:["06:00","12:00","18:00","21:00"],a:2,why:"90\xB0 \xF7 15\xB0 = 6 hours ahead, so 18:00."},{q:"Which way do you move your clock when you fly east?",o:["Forward","Back","Not at all","It stops"],a:0,why:"Places to the east see the Sun earlier, so their clocks are ahead."}]},{id:"gc",icon:"\u2708\uFE0F",title:"Great Circles",scene:"greatcircle",blurb:"The secret shortest routes pilots fly.",steps:[{t:"What is a great circle?",s:"gcIntro",html:"<p>A <b>great circle</b> is the biggest circle you can draw on a sphere. Its centre is the <b>centre of the Earth</b>, and it cuts the globe into two equal halves.</p><p>The <b>Equator</b> is a great circle, and so is any meridian joined with its opposite. The other parallels, like the tropics, are <b>not</b>.</p>"},{t:"The shortest path",s:"gcRoute",html:'<p>The shortest way between two places on a sphere always follows a <b>great circle</b>.</p><p class="try">\u{1F446} Pick two cities and see the great-circle route and its distance.</p>'},{t:"Straight is not shortest!",s:"gcFlat",html:`<p>On a flat <b>Mercator</b> map the shortest route (<b style="color:#ffcf3f">yellow</b>) looks <b>curved</b>.</p><p>The straight line (<b style="color:#ff7a8a">pink</b>, called a <b>rhumb line</b>) keeps one compass direction, but it's <b>longer</b>.</p>`},{t:"Why planes fly over the Arctic",s:"gcRoute",html:"<p>That's why flights from North America to Asia often fly near <b>Alaska and the Arctic</b>. It looks odd on a flat map, but it's the shortest path on the globe.</p><p>Airline planners use great-circle distances to work out routes, fuel and flight times.</p>"}],quiz:[{q:"The shortest route between two places on Earth follows a\u2026",o:["Rhumb line","Great circle","Line of latitude","Straight line on Mercator"],a:1,why:"Great-circle routes are the shortest paths on a sphere."},{q:"Is the Equator a great circle?",o:["Yes","No"],a:0,why:"Its centre is the centre of Earth, so yes."},{q:"Is the Tropic of Cancer a great circle?",o:["Yes","No"],a:1,why:"It is smaller than the Equator, and its centre is not Earth\u2019s centre."}]},{id:"tilt",icon:"\u2600\uFE0F",title:"Tilt & Seasons",scene:"tilt",blurb:"Why we have summer and winter.",steps:[{t:"A tilted planet",s:"tiltIntro",html:"<p>Earth's axis is <b>tilted about 23.4\xB0</b>. Earth spins on that axis once a day and travels around the Sun once every <b>365\xBC days</b>.</p><p>That \xBC day is why we add a leap day (29 February) every four years.</p>"},{t:"The Sun moves between the tropics",s:"season",html:'<p>Because of the tilt, the spot where the Sun is <b>directly overhead</b> slides between the <b>Tropic of Cancer</b> and the <b>Tropic of Capricorn</b> during the year.</p><p class="try">\u{1F446} Move through the months and watch day and night change.</p>'},{t:"Solstices & equinoxes",s:"season",html:"<p><b>June solstice (~21 June):</b> the Sun is over the Tropic of Cancer. It's summer in the north, winter in the south, and there's 24-hour daylight inside the Arctic Circle.</p><p><b>December solstice (~21 December):</b> the opposite. <b>Equinoxes (~20 March, ~22 September):</b> the Sun is over the Equator, and day and night are about equal everywhere.</p>"},{t:"Not about distance!",s:"season",html:"<p>Seasons happen because of the <b>tilt</b>, not because of how far Earth is from the Sun. In fact Earth is <b>closest to the Sun in early January</b>, during the northern winter!</p><p>Near the Equator the Sun is always high, so it stays warm all year.</p>"}],quiz:[{q:"How much is Earth\u2019s axis tilted?",o:["About 5\xB0","About 23.4\xB0","About 45\xB0","About 90\xB0"],a:1,why:"The tilt is about 23.4\xB0, the same number as the tropics\u2019 latitude."},{q:"In June, what season is it in Australia?",o:["Summer","Winter","Spring","Autumn"],a:1,why:"In June the Southern Hemisphere is tilted away from the Sun, so it is winter there."},{q:"What causes the seasons?",o:["Distance from the Sun","Earth\u2019s tilt","The Moon","Clouds"],a:1,why:"The tilt changes how directly sunlight hits each hemisphere."}]}],Si={achaemenid:{title:"Achaemenid Persian Empire",years:"c. 550\u2013330 BC",capital:"Persepolis, Susa, Pasargadae",facts:["Founded by Cyrus the Great.","Its Royal Road ran about 2,700 km, with relay riders carrying messages.","Conquered by Alexander the Great in 330 BC."]},carthage:{title:"Carthage",years:"c. 814\u2013146 BC",capital:"Carthage (near Tunis, Tunisia)",facts:["A sea-trading power founded by the Phoenicians.","Its general Hannibal famously crossed the Alps with elephants in 218 BC.","Destroyed by Rome in 146 BC."]},romerep:{title:"Rome (Roman Republic)",years:"509\u201327 BC",capital:"Rome",facts:["Ruled by elected leaders called consuls, together with the Senate.","Grew from one city into the ruler of Italy and then the Mediterranean."]},alexander:{title:"Empire of Alexander the Great",years:"336\u2013323 BC",capital:"Babylon",facts:["Alexander became king of Macedon at just 20.","In about 10 years he conquered lands from Greece and Egypt to the Indus River.","When he died at 32, his generals split the empire."]},maurya:{title:"Mauryan Empire",years:"c. 322\u2013185 BC",capital:"Pataliputra (Patna, India)",facts:["Founded by Chandragupta Maurya.","Emperor Ashoka spread Buddhism and carved messages on stone pillars.","One of the largest empires in South Asian history."]},han:{title:"Han Dynasty (China)",years:"206 BC\u2013AD 220",capital:"Chang\u2019an (Xi\u2019an) and Luoyang",facts:["The Silk Road trade routes grew under the Han.","Paper-making was improved in this era (Cai Lun, AD 105).","Most Chinese people today still call themselves \u201CHan\u201D."]},seleucid:{title:"Seleucid Kingdom",years:"312\u201363 BC",capital:"Antioch",facts:["Founded by Seleucus, one of Alexander\u2019s generals.","At first it stretched from Turkey to Central Asia."]},ptolemaic:{title:"Ptolemaic Kingdom (Egypt)",years:"305\u201330 BC",capital:"Alexandria",facts:["Ruled by Greek kings descended from Ptolemy, a general of Alexander.","Its last ruler was the famous Cleopatra VII.","Home of the great Library of Alexandria."]},romeemp:{title:"Roman Empire",years:"27 BC\u2013AD 476 (West) \xB7 to 1453 (East)",capital:"Rome, later Constantinople",facts:["Augustus was the first emperor.","At its largest (AD 117) it went all the way around the Mediterranean Sea.","Romans built over 80,000 km of paved roads."]},parthia:{title:"Parthian Empire",years:"247 BC\u2013AD 224",capital:"Ctesiphon",facts:["A great rival of Rome, based in Iran.","Famous for horse archers who could shoot backwards: the \u201CParthian shot\u201D.","Sat in the middle of the Silk Road between Rome and China."]},kushan:{title:"Kushan Empire",years:"c. AD 30\u2013375",capital:"Purushapura (Peshawar) and Mathura",facts:["Ruled Central Asia and the north of South Asia.","Gandhara art mixed Greek and Indian styles.","Emperor Kanishka was a supporter of Buddhism."]},gupta:{title:"Gupta Empire",years:"c. AD 320\u2013550",capital:"Pataliputra",facts:["Often called a \u201CGolden Age\u201D of India.","The mathematician Aryabhata suggested that Earth spins on its axis.","Big advances in maths, astronomy, literature and art."]},huns:{title:"Hunnic Empire",years:"c. AD 370\u2013469",capital:"No fixed capital (nomads)",facts:["Nomadic horse riders from the steppes of Central Asia.","Their most famous leader was Attila the Hun."]},romesplit:{title:"Western & Eastern Roman Empire",years:"Split in AD 395",capital:"Rome/Ravenna (West) \xB7 Constantinople (East)",facts:["In AD 395 the empire was divided into two halves.","The West fell in AD 476. The East (Byzantine Empire) lasted until 1453."]},sasanian:{title:"Sasanian Persia",years:"AD 224\u2013651",capital:"Ctesiphon",facts:["The last great Persian empire before the rise of Islam.","A rival of Rome and Byzantium for about 400 years."]},abbasid:{title:"Abbasid Caliphate",years:"750\u20131258",capital:"Baghdad",facts:["Baghdad, founded in 762, became one of the biggest cities in the world.","Scholars at the House of Wisdom translated and studied science, maths and medicine.","The Mongols destroyed Baghdad in 1258."]},tang:{title:"Tang Dynasty (China)",years:"618\u2013907",capital:"Chang\u2019an (Xi\u2019an)",facts:["Chang\u2019an may have had around a million people.","A golden age of Chinese poetry.","The oldest dated printed book, the Diamond Sutra (868), comes from this time."]},carolingian:{title:"Carolingian Empire",years:"800\u2013888",capital:"Aachen",facts:["Charlemagne was crowned emperor on Christmas Day, AD 800.","It covered much of today\u2019s France, Germany and Italy."]},byzantine:{title:"Byzantine Empire",years:"AD 395\u20131453",capital:"Constantinople (Istanbul)",facts:["The eastern half of the Roman Empire, which lasted another thousand years.","The giant church of Hagia Sophia was completed in AD 537.","Ended when the Ottomans captured Constantinople in 1453."]},tibet:{title:"Tibetan Empire",years:"c. 618\u2013842",capital:"Lhasa",facts:["A powerful empire on the high Tibetan Plateau, the \u201CRoof of the World\u201D."]},song:{title:"Song Dynasty (China)",years:"960\u20131279",capital:"Kaifeng, later Hangzhou",facts:["Issued the world\u2019s first government paper money.","Sailors used magnetic compasses to navigate.","Conquered by the Mongols in 1279."]},fatimid:{title:"Fatimid Caliphate",years:"909\u20131171",capital:"Cairo",facts:["Founded the city of Cairo in 969.","Al-Azhar, one of the world\u2019s oldest universities, began here around 970."]},chola:{title:"Chola Empire",years:"Height c. 850\u20131279",capital:"Thanjavur",facts:["A South Indian sea power that sent fleets as far as Southeast Asia.","Built the great Brihadeeswarar Temple (completed 1010)."]},hre:{title:"Holy Roman Empire",years:"800/962\u20131806",capital:"No single capital",facts:["Made of hundreds of small states in central Europe.","Its emperor was chosen by powerful princes called electors.","Ended in 1806, under pressure from Napoleon."]},khmer:{title:"Khmer Empire",years:"802\u20131431",capital:"Angkor",facts:["Built Angkor Wat, the largest religious monument in the world.","Angkor had huge reservoirs and canals to store water."]},mongol:{title:"Mongol Empire",years:"1206\u20131368",capital:"Karakorum, later Khanbaliq (Beijing)",facts:["Founded by Genghis Khan in 1206.","The largest connected land empire in history: about 24 million km\xB2.","Used a relay system of horse stations so messages travelled very fast."]},khanates:{title:"Mongol Khanates",years:"1260s onward",capital:"Khanbaliq, Sarai, Tabriz and others",facts:["After about 1260 the Mongol Empire split into four big khanates: the Yuan (Great Khanate), the Golden Horde, the Ilkhanate and the Chagatai Khanate.","Kublai Khan, grandson of Genghis, ruled China as the Yuan dynasty."]},delhi:{title:"Delhi Sultanate",years:"1206\u20131526",capital:"Delhi",facts:["Five dynasties ruled from Delhi over about 320 years.","The Qutb Minar tower was begun around 1200.","Defeated by Babur at the Battle of Panipat in 1526."]},mali:{title:"Mali Empire",years:"c. 1235\u20131600s",capital:"Niani",facts:["Mansa Musa, often called the richest person in history, travelled to Mecca in 1324.","Timbuktu became a great centre of learning.","Grew rich from gold and salt trade."]},timurid:{title:"Timurid Empire",years:"1370\u20131507",capital:"Samarkand, later Herat",facts:["Founded by Timur (Tamerlane).","Samarkand was filled with blue-tiled domes and grand squares.","Babur, who founded the Mughal Empire, was a descendant of Timur."]},ottoman:{title:"Ottoman Empire",years:"c. 1299\u20131922",capital:"Bursa, Edirne, then Istanbul",facts:["Captured Constantinople (now Istanbul) in 1453.","At its height it ruled lands in Europe, Asia and Africa.","Suleiman the Magnificent ruled from 1520 to 1566."]},mughal:{title:"Mughal Empire",years:"1526\u20131857",capital:"Agra, Fatehpur Sikri, Lahore, Delhi",facts:["Founded by Babur after the Battle of Panipat (1526).","Akbar the Great ruled from 1556 to 1605.","Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal."]},inca:{title:"Inca Empire",years:"c. 1438\u20131533",capital:"Cusco",facts:["The largest empire in the Americas before Europeans arrived.","Its road network was about 40,000 km long.","Built Machu Picchu high in the Andes. Spanish conquerors took over in the 1530s."]},safavid:{title:"Safavid Empire",years:"1501\u20131736",capital:"Tabriz, Qazvin, then Isfahan",facts:["Shah Abbas the Great made Isfahan a famously beautiful capital.","Made Shia Islam the state religion of Iran."]},spain:{title:"Spanish Empire",years:"Height 1500s\u20131700s",capital:"Madrid",facts:["One of the first global empires, with lands in the Americas, Europe, Africa and Asia.","It was called \u201Cthe empire on which the sun never sets\u201D."]},ming:{title:"Ming Dynasty (China)",years:"1368\u20131644",capital:"Nanjing, then Beijing",facts:["Built the Forbidden City in Beijing (1406\u20131420).","Admiral Zheng He led giant treasure fleets between 1405 and 1433.","Much of the Great Wall we see today was built by the Ming."]},songhai:{title:"Songhai Empire",years:"c. 1464\u20131591",capital:"Gao",facts:["One of the largest empires in African history.","Controlled trading cities like Timbuktu and Djenn\xE9."]},portugal:{title:"Portuguese Empire",years:"1415\u20131999",capital:"Lisbon",facts:["Portuguese sailors explored Africa\u2019s coast, and Vasco da Gama reached India in 1498.","Its last colony, Macau, was handed to China in 1999."]},qing:{title:"Qing Dynasty (Manchu Empire)",years:"1644\u20131912",capital:"Beijing",facts:["The last imperial dynasty of China.","At its largest it ruled about 13 million km\xB2.","The last emperor, Puyi, gave up the throne in 1912."]},newfrance:{title:"New France",years:"1534\u20131763",capital:"Quebec",facts:["France\u2019s colony in North America, along the St Lawrence and Mississippi rivers.","Lost to Britain and Spain in 1763."]},russiaemp:{title:"Russian Empire",years:"1721\u20131917",capital:"St Petersburg",facts:["Peter the Great made Russia an empire and built St Petersburg.","It stretched from Europe all the way to the Pacific Ocean.","The Trans-Siberian Railway (built 1891\u20131916) is still the longest railway line in the world."]},british:{title:"British Empire",years:"1600s\u20131997",capital:"London",facts:["The largest empire in history. Around 1920 it covered about a quarter of the world\u2019s land.","It included India, Canada, Australia and large parts of Africa.","Hong Kong was handed back to China in 1997."]},usa:{title:"United States",years:"1776\u2013today",capital:"Washington, D.C.",facts:["Declared independence from Britain on 4 July 1776.","Grew from 13 states on the Atlantic coast to 50 states."]},raj:{title:"British Raj",years:"1858\u20131947",capital:"Calcutta, then New Delhi (from 1911)",facts:["British rule over the Indian subcontinent.","Ended in 1947 when India and Pakistan became independent."]},japanemp:{title:"Empire of Japan",years:"1868\u20131947",capital:"Tokyo",facts:["Modernised very quickly after the Meiji Restoration of 1868.","Expanded across East Asia and the Pacific until its defeat in 1945."]},german:{title:"German Empire",years:"1871\u20131918",capital:"Berlin",facts:["Formed when the German states united in 1871.","Had colonies in Africa and the Pacific.","Ended after World War I."]},austro:{title:"Austria-Hungary",years:"1867\u20131918",capital:"Vienna and Budapest",facts:["A \u201Cdual monarchy\u201D with two capitals.","Home to more than a dozen languages.","The assassination of its heir, Archduke Franz Ferdinand, in 1914 helped start World War I."]},ussr:{title:"Soviet Union (USSR)",years:"1922\u20131991",capital:"Moscow",facts:["Covered about one-sixth of all the land on Earth.","Made up of 15 republics.","Launched Sputnik, the first satellite, in 1957, and sent Yuri Gagarin, the first person in space, in 1961."]},france:{title:"French Colonial Empire",years:"Height 1920s\u20131930s",capital:"Paris",facts:["The second-largest colonial empire, after Britain\u2019s.","Held large colonies in North and West Africa and Southeast Asia."]},china:{title:"China",years:"Republic 1912 \xB7 People\u2019s Republic 1949",capital:"Nanjing / Beijing",facts:["The Republic of China replaced the last emperor in 1912.","The People\u2019s Republic of China was founded in 1949.","The whole country uses one time zone."]},india:{title:"India",years:"Independent since 1947",capital:"New Delhi",facts:["Became independent on 15 August 1947.","Has the largest population of any country; it passed China around 2023."]},pakistan:{title:"Pakistan",years:"Independent since 1947",capital:"Karachi, then Islamabad",facts:["Became independent on 14 August 1947.","In 1971, East Pakistan became the new country of Bangladesh."]},russia:{title:"Russia",years:"Since 1991",capital:"Moscow",facts:["The largest country in the world, at about 17 million km\xB2.","It stretches across 11 time zones."]},umayyad:{title:"Umayyad Caliphate",years:"661\u2013750",capital:"Damascus",facts:["The first Muslim dynasty to pass power from father to son, ruling from Damascus.","At its height it stretched from Spain and Morocco to the Indus River, one of the largest empires the world had seen.","Built the Dome of the Rock in Jerusalem (completed 691) and the Great Mosque of Damascus."]},caliphates:{title:"The Islamic Caliphates",years:"632 onward",capital:"Medina \u2192 Damascus \u2192 Baghdad \u2192 Cairo \u2192 Istanbul",facts:["After the Prophet Muhammad died in 632, the Rashidun (\u201Crightly guided\u201D) caliphs led the Muslim community from Medina (632\u2013661).","Then came the Umayyads (661\u2013750) in Damascus and the Abbasids (750\u20131258) in Baghdad.","Rival caliphates arose too: the Fatimids in Cairo and the Umayyads of C\xF3rdoba in Spain.","The Ottoman sultans later used the title of caliph, until it was abolished in 1924."]},cordoba:{title:"Caliphate of C\xF3rdoba",years:"929\u20131031",capital:"C\xF3rdoba",facts:["Ruled al-Andalus (Muslim Spain). C\xF3rdoba was one of the largest and most learned cities in Europe.","Its Great Mosque, the Mezquita, is famous for its red-and-white striped arches."]},almohad:{title:"Almohad Caliphate",years:"1121\u20131269",capital:"Marrakesh",facts:["A Berber dynasty that ruled North Africa and much of Spain.","Built the Koutoubia Mosque in Marrakesh and the Giralda tower in Seville."]},ghana:{title:"Ghana Empire (Wagadu)",years:"c. 300\u20131200",capital:"Koumbi Saleh",facts:["Not in today\u2019s Ghana: it lay further north, in today\u2019s Mauritania and Mali.","Grew rich by trading gold for salt across the Sahara Desert."]},mamluk:{title:"Mamluk Sultanate",years:"1250\u20131517",capital:"Cairo",facts:["Ruled Egypt and Syria. Its army stopped the Mongols at the Battle of Ain Jalut in 1260.","Conquered by the Ottomans in 1517."]},seljuk:{title:"Seljuk Empire",years:"1037\u20131194",capital:"Isfahan and others",facts:["Turkish rulers who took control of Persia and Baghdad.","Their victory at Manzikert (1071) opened Anatolia to Turkish settlement."]},ghaznavid:{title:"Ghaznavid Empire",years:"977\u20131186",capital:"Ghazni, later Lahore",facts:["Sultan Mahmud of Ghazni led many raids deep into India.","The scientist Al-Biruni and the poet Ferdowsi, author of the Shahnameh, lived in this era."]},maratha:{title:"Maratha Empire",years:"1674\u20131818",capital:"Raigad, later Pune",facts:["Founded by Shivaji, who was crowned in 1674.","In the 1700s the Marathas controlled much of India as the Mughals weakened.","Defeated by the British East India Company in 1818."]},aztec:{title:"Aztec Empire",years:"c. 1428\u20131521",capital:"Tenochtitlan (today\u2019s Mexico City)",facts:["Tenochtitlan was built on an island in a lake, with causeways and floating gardens called chinampas.","Conquered by the Spanish under Hern\xE1n Cort\xE9s in 1521."]},persiat:{title:"Persian Empires",years:"550 BC onward",capital:"Persepolis, Ctesiphon, Isfahan, Tehran",facts:["Iran has been home to many great empires: the Achaemenid, Parthian, Sasanian, Safavid and more.","Persian was a language of poetry and government from T\xFCrkiye to India."]},chinat:{title:"Chinese Dynasties",years:"221 BC onward",capital:"Xi\u2019an, Kaifeng, Beijing and others",facts:["China was ruled by a series of dynasties for over 2,000 years: Han, Tang, Song, Yuan, Ming and Qing.","Paper, printing, the compass and gunpowder were all invented in imperial China."]},russiat:{title:"Russian Empire & Soviet Union",years:"1721\u20131991",capital:"St Petersburg, then Moscow",facts:["Russians expanded east across Siberia and reached the Pacific Ocean in 1639.","The Russian Empire became the Soviet Union in 1922, and Russia again in 1991."]},indiat:{title:"Empires of South Asia",years:"c. 322 BC onward",capital:"Pataliputra, Delhi, Agra and others",facts:["South Asia saw many great empires: the Maurya, Gupta, Chola, Delhi Sultanate, Mughal and Maratha.","From 1858 to 1947 most of it was ruled by Britain as the British Raj."]},africat:{title:"Empires of West Africa",years:"c. 300\u20131591",capital:"Koumbi Saleh, Niani, Gao",facts:["Three great empires rose one after another: Ghana, Mali and Songhai.","They grew rich from the trans-Saharan trade in gold and salt."]},carthage2:{title:"Carthage",years:"c. 814\u2013146 BC",capital:"Carthage",facts:["Fought three wars with Rome, called the Punic Wars.","It lost the Second Punic War in 201 BC."]}},Tt="/^British|\\(UK|United Kingdom|Britain|Canada|Australia|New Zealand|Union of South Africa/",Wi="/^France$|^Kingdom of France$|French|\\(France\\)|New France/",ja="/^Spain$|\\(Spain\\)|New Spain|Spanish/",tc=["Great Khanate","Ilkhanate","Chagatai Khanate","Khanate of the Golden Horde"],Ct=[{key:"bc500",y:-500,blurb:"The Persian <b>Achaemenid Empire</b> is the largest empire the world has seen so far. Rome is a small republic in Italy, and Carthage rules trade in the western Mediterranean.",f:[["achaemenid",["Achaemenid Empire"]],["carthage",["Carthaginian Empire"]],["romerep",["Rome"]]]},{key:"bc323",y:-323,blurb:"<b>Alexander the Great</b> has just died in Babylon, aged 32, after conquering lands from Greece to the Indus River.",f:[["alexander",["Empire of Alexander"]],["carthage",["Carthaginian Empire"]],["romerep",["Rome"]]]},{key:"bc200",y:-200,blurb:"Rome has just beaten Carthage in the Second Punic War. The <b>Han</b> dynasty rules China and the <b>Mauryan Empire</b> covers most of South Asia.",f:[["maurya",["Mauryan Empire"]],["han",["Han Empire"]],["romerep",["Rome"]],["carthage2",["Carthage"]],["seleucid",["Seleucid Kingdom"]],["ptolemaic",["Ptolemaic Kingdom"]],["parthia",["Parthia"]]]},{key:"bc1",y:-1,blurb:"Two giants: the <b>Roman Empire</b> under its first emperor Augustus, and <b>Han China</b>. The Silk Road links them through Parthia.",f:[["romeemp",["Roman Empire"]],["han",["Han"]],["parthia",["Parthian Empire"]]]},{key:"100",y:100,blurb:"Rome is close to its largest size. The <b>Kushan Empire</b> controls the trade routes of Central and South Asia.",f:[["romeemp",["Roman Empire"]],["han",["Han"]],["kushan",["Kushan Empire"]],["parthia",["Parthian Empire"]]]},{key:"400",y:400,blurb:"The Roman Empire has split into West and East. The <b>Gupta Empire</b> brings a golden age to India, and the Huns push into Europe.",f:[["romesplit",["Western Roman Empire","Eastern Roman Empire"]],["gupta",["Gupta Empire"]],["huns",["Hunnic Empire"]],["sasanian",["Persia"]]]},{key:"600",y:600,blurb:"The Eastern Roman (Byzantine) and Sasanian Persian empires are locked in a long war. In Arabia, the message of Islam will soon begin (610).",f:[["byzantine",["Eastern Roman Empire"]],["sasanian",["Sasanian Empire"]],["ghana",["Empire of Ghana"]]]},{key:"700",y:700,blurb:"The <b>Umayyad Caliphate</b> rules from Damascus and is growing fast. In 711 its armies will cross into Spain.",f:[["umayyad",["Umayyad Caliphate"]],["byzantine",["Eastern Roman Empire"]],["ghana",["Empire of Ghana"]]]},{key:"800",y:800,blurb:"<b>Charlemagne</b> is crowned emperor. The <b>Abbasid Caliphate</b> rules from Baghdad, and <b>Tang China</b> is a great centre of trade and poetry.",f:[["abbasid",["Abbasid Caliphate"]],["tang",["Tang Empire"]],["carolingian",["Carolingian Empire"]],["byzantine",["Byzantine Empire"]],["tibet",["Tibetan Empire"]]]},{key:"900",y:900,blurb:"The <b>Abbasid Caliphate</b> is past its peak, but Baghdad is still a world centre of learning. Tang China is about to fall (907).",f:[["abbasid",["Abbasid Caliphate"]],["byzantine",["Byzantine Empire"]],["tang",["Tang Empire"]],["khmer",["Khmer Empire"]],["carolingian",["Carolingian Empire"]]]},{key:"1000",y:1e3,blurb:"<b>Song China</b>, the <b>Byzantine Empire</b>, the <b>Fatimids</b> of Egypt and the <b>Chola Empire</b> of South India are all powerful.",f:[["song",["Song Empire"]],["byzantine",["Byzantine Empire"]],["fatimid",["Fatimid Caliphate"]],["chola",["Chola Empire"]],["hre",["Holy Roman Empire"]],["khmer",["Khmer Empire"]]]},{key:"1100",y:1100,blurb:"The <b>Seljuk Turks</b> rule much of the Middle East, the First Crusade has just captured Jerusalem (1099), and Song China flourishes.",f:[["seljuk",["Seljuk Empire"]],["fatimid",["Fatimid Caliphate"]],["song",["Song Empire"]],["ghaznavid",["Ghaznavid Emirate"]],["hre",["Holy Roman Empire"]],["byzantine",["Byzantine Empire"]]]},{key:"1200",y:1200,blurb:"<b>Genghis Khan</b> is uniting the Mongol tribes. Within decades they will build the largest land empire in history.",f:[["mongol",["Mongol Empire"]],["song",["Song Empire"]],["delhi",["Sultanate of Delhi"]],["hre",["Holy Roman Empire"]],["khmer",["Khmer Empire"]]]},{key:"1279",y:1279,blurb:"The Mongols finish conquering Song China. Their lands now stretch from Korea to Eastern Europe, split into four great <b>khanates</b>.",f:[["khanates",["Great Khanate","Ilkhanate","Chagatai Khanate","Khanate of the Golden Horde"]],["delhi",["Sultanate of Delhi"]],["mali",["Mali"]],["byzantine",["Byzantine Empire"]]]},{key:"1300",y:1300,blurb:"The Mongol world is split into four <b>khanates</b>. The Mamluks rule Egypt, and in Anatolia a small state led by Osman is about to grow into the <b>Ottoman Empire</b>.",f:[["khanates",tc],["mamluk",["Mamluke Sultanate"]],["delhi",["Sultanate of Delhi"]],["mali",["Mali"]],["byzantine",["Byzantine Empire"]]]},{key:"1400",y:1400,blurb:"<b>Timur</b> (Tamerlane) builds an empire from Samarkand. The <b>Ottomans</b> are growing, and <b>Mali</b> is famous for its gold.",f:[["timurid",["Timurid Empire"]],["ottoman",["Ottoman Empire"]],["mali",["Mali"]],["delhi",["Sultanate of Delhi"]],["byzantine",["Byzantine Empire"]]]},{key:"1500",y:1500,blurb:"The <b>Aztec</b> and <b>Inca</b> empires are at their height. Columbus reached the Americas 8 years ago, and the Ottomans control the eastern Mediterranean.",f:[["aztec",["Aztec Empire"]],["inca",["Inca Empire"]],["ottoman",["Ottoman Empire"]],["mamluk",["Mamluke Sultanate"]],["ming",["Ming Chinese Empire"]],["songhai",["Songhai"]],["delhi",["Sultanate of Delhi"]]]},{key:"1530",y:1530,blurb:"Babur has just founded the <b>Mughal Empire</b> (1526). Spain is conquering in the Americas, and the <b>Inca Empire</b> still rules the Andes, though not for much longer.",f:[["mughal",["Mughal Empire"]],["inca",["Inca Empire"]],["ottoman",["Ottoman Empire"]],["safavid",["Safavid Empire"]],["spain",["Spain","Viceroyalty of New Spain","Cuba (Spain)","Hispaniola (Spain)"]],["ming",["Ming Chinese Empire"]],["songhai",["Songhai"]]]},{key:"1600",y:1600,blurb:"<b>Akbar</b> rules the Mughal Empire. The Ottomans and Safavids are great powers, and Ming China is rich. European ships now sail every ocean.",f:[["mughal",["Mughal Empire"]],["ottoman",["Ottoman Empire"]],["safavid",["Safavid Empire"]],["ming",["Ming Chinese Empire"]],["spain",["Spain","Viceroyalty of New Spain","Cuba (Spain)","Hispaniola (Spain)"]],["portugal",["Portugal"]]]},{key:"1650",y:1650,blurb:"Shah Jahan\u2019s <b>Taj Mahal</b> is nearly finished. The Qing have just taken Beijing (1644), and European colonies spread across the oceans.",f:[["mughal",["Mughal Empire"]],["qing",["Manchu Empire"]],["ottoman",["Ottoman Empire"]],["safavid",["Safavid Empire"]],["spain",[ja]],["france",[Wi]],["portugal",["Portugal","Portuguese Brazil","Portuguese East Africa","Portuguese Guinea"]]]},{key:"1700",y:1700,blurb:"The <b>Mughal Empire</b> is near its largest under Aurangzeb. The <b>Qing</b> (Manchu) rule China, and European colonies spread across the Americas.",f:[["mughal",["Mughal Empire"]],["qing",["Manchu Empire"]],["ottoman",["Ottoman Empire"]],["safavid",["Safavid Empire"]],["spain",["Spain","Viceroyalty of New Spain"]],["newfrance",["New France"]]]},{key:"1715",y:1715,blurb:"After Aurangzeb\u2019s death (1707) the Mughal Empire begins to weaken and the <b>Marathas</b> rise. Britain and France compete for colonies.",f:[["mughal",["Mughal Empire"]],["maratha",["Maratha"]],["british",[Tt]],["france",[Wi]],["ottoman",["Ottoman Empire"]],["qing",["Manchu Empire"]]]},{key:"1783",y:1783,blurb:"The <b>United States</b> wins its independence from Britain. The Russian Empire stretches across northern Asia.",f:[["usa",["United States of America"]],["russiaemp",["Russian Empire"]],["british",[Tt]],["qing",["Qing Empire"]],["maratha",["Maratha Confederacy"]],["ottoman",["Ottoman Empire"]],["spain",[ja]]]},{key:"1800",y:1800,blurb:"The <b>United States</b> is only 24 years old. The <b>Russian Empire</b> stretches across Asia, and Britain is building a worldwide empire.",f:[["russiaemp",["Russian Empire"]],["qing",["Qing Empire"]],["british",[Tt]],["usa",["United States of America"]],["ottoman",["Ottoman Empire"]]]},{key:"1815",y:1815,blurb:"Napoleon is defeated at Waterloo. Britain becomes the leading world power, and the East India Company controls much of India.",f:[["british",[Tt]],["russiaemp",["Russian Empire"]],["ottoman",["Ottoman Empire"]],["qing",["Manchu Empire"]],["france",[Wi]],["spain",[ja]]]},{key:"1880",y:1880,blurb:"The age of empires. Britain rules India (the <b>British Raj</b>), and European powers are about to divide up Africa.",f:[["raj",["British Raj"]],["british",[Tt]],["russiaemp",["Russian Empire"]],["ottoman",["Ottoman Empire"]],["qing",["Manchu Empire"]],["japanemp",["Imperial Japan"]],["usa",["United States of America"]]]},{key:"1900",y:1900,blurb:"Empires are at their peak: almost all of Africa has been divided up among European powers.",f:[["british",[Tt]],["france",[Wi]],["russiaemp",["Russian Empire"]],["ottoman",["Ottoman Empire"]],["qing",["Manchu Empire"]],["japanemp",["Imperial Japan"]],["usa",["United States of America"]]]},{key:"1914",y:1914,blurb:"<b>World War I</b> begins. The British, Russian, German, Austro-Hungarian and Ottoman empires cover much of the world.",f:[["british",[Tt]],["russiaemp",["Russian Empire"]],["german",["German Empire"]],["austro",["Austro-Hungarian Empire"]],["ottoman",["Ottoman Empire"]],["japanemp",["Empire of Japan"]],["france",["/^France$|French|\\(France\\)/"]]]},{key:"1920",y:1920,blurb:"After World War I, the Russian, German and Austro-Hungarian empires have collapsed and the Ottoman Empire is ending. The British Empire is at its largest.",f:[["british",[Tt]],["france",[Wi]],["ussr",["USSR"]],["ottoman",["Ottoman Sultanate"]],["japanemp",["Empire of Japan"]]]},{key:"1938",y:1938,blurb:"Between the two World Wars. The <b>Soviet Union</b> is the largest country, and the British and French empires are at their biggest.",f:[["ussr",["USSR"]],["british",[Tt]],["france",["/^France$|French|\\(France\\)/"]],["japanemp",["Empire of Japan"]],["usa",["United States"]]]},{key:"1945",y:1945,blurb:"<b>World War II</b> ends. Over the next decades many colonies win independence, including India and Pakistan in 1947.",f:[["ussr",["USSR"]],["usa",["United States"]],["china",["China"]],["india",["India"]],["pakistan",["Pakistan"]]]},{key:"1960",y:1960,blurb:"The \u201CYear of Africa\u201D: 17 African countries become independent. The Cold War divides the world.",f:[["ussr",["USSR"]],["usa",["United States"]],["british",["United Kingdom","/\\(UK\\)|^British/"]],["france",[Wi]],["china",["China"]],["india",["India"]],["pakistan",["Pakistan"]]]},{key:"1994",y:1994,blurb:"The Soviet Union broke up in 1991 into 15 countries. The world map looks much like today\u2019s.",f:[["russia",["Russia"]],["china",["China"]],["india",["India"]],["pakistan",["Pakistan"]],["usa",["United States"]]]}],nc=[{id:"caliphates",icon:"\u{1F54C}",title:"Islamic Caliphates",card:"caliphates",steps:[["700",["Umayyad Caliphate"],"umayyad"],["800",["Abbasid Caliphate"],"abbasid"],["900",["Abbasid Caliphate"],"abbasid"],["1000",["Fatimid Caliphate","Caliphate of C\xF3rdoba"],"fatimid"],["1100",["Fatimid Caliphate"],"fatimid"],["1200",["Almohad Caliphate"],"almohad"],["1530",["Ottoman Empire"],"ottoman"]]},{id:"ottoman",icon:"\u{1F319}",title:"Ottoman Empire (Osmania)",card:"ottoman",steps:["1400","1500","1530","1600","1650","1700","1715","1783","1800","1815","1880","1900","1914"].map(n=>[n,["Ottoman Empire"],"ottoman"]).concat([["1920",["Ottoman Sultanate"],"ottoman"]])},{id:"mughal",icon:"\u{1F54C}",title:"Mughal Empire",card:"mughal",steps:["1530","1600","1650","1700","1715"].map(n=>[n,["Mughal Empire"],"mughal"])},{id:"british",icon:"\u{1F451}",title:"British Empire",card:"british",steps:[["1715",[Tt],"british"],["1783",[Tt],"british"],["1800",[Tt],"british"],["1815",[Tt],"british"],["1880",[Tt],"british"],["1900",[Tt],"british"],["1914",[Tt],"british"],["1920",[Tt],"british"],["1938",[Tt],"british"],["1960",["United Kingdom","/\\(UK\\)|^British/"],"british"]]},{id:"french",icon:"\u{1F956}",title:"French Empire",card:"france",steps:["1650","1700","1715","1783","1815","1880","1900","1914","1920","1938","1960"].map(n=>[n,[Wi],"france"])},{id:"mongol",icon:"\u{1F3F9}",title:"Mongol Empire",card:"mongol",steps:[["1100",["Mongols"],"mongol"],["1200",["Mongol Empire"],"mongol"],["1279",tc,"khanates"],["1300",tc,"khanates"],["1500",["Golden Horde","Chagatai Khanate","Crimean Khanate","Khanate of Sibir"],"khanates"]]},{id:"roman",icon:"\u{1F3DB}\uFE0F",title:"Roman & Byzantine Empire",card:"romeemp",steps:[["bc500",["Rome"],"romerep"],["bc323",["Rome"],"romerep"],["bc200",["Rome"],"romerep"],["bc1",["Roman Empire"],"romeemp"],["100",["Roman Empire"],"romeemp"],["400",["Western Roman Empire","Eastern Roman Empire"],"romesplit"],["600",["Eastern Roman Empire"],"byzantine"],["700",["Eastern Roman Empire"],"byzantine"],...["800","900","1000","1100","1200","1279","1300","1400"].map(n=>[n,["Byzantine Empire"],"byzantine"])]},{id:"persian",icon:"\u{1F981}",title:"Persian Empires",card:"persiat",steps:[["bc500",["Achaemenid Empire"],"achaemenid"],["bc200",["Parthia"],"parthia"],["bc1",["Parthian Empire"],"parthia"],["100",["Parthian Empire"],"parthia"],["400",["Persia"],"sasanian"],["600",["Sasanian Empire"],"sasanian"],...["1530","1600","1650","1700","1715"].map(n=>[n,["Safavid Empire"],"safavid"]),...["1783","1800","1815","1880","1900"].map(n=>[n,["Persia"],"persiat"])]},{id:"chinese",icon:"\u{1F409}",title:"Chinese Dynasties",card:"chinat",steps:[["bc200",["Han Empire"],"han"],["bc1",["Han"],"han"],["100",["Han"],"han"],["800",["Tang Empire"],"tang"],["900",["Tang Empire"],"tang"],["1000",["Song Empire"],"song"],["1100",["Song Empire"],"song"],["1200",["Song Empire"],"song"],["1279",["Great Khanate"],"khanates"],["1300",["Great Khanate"],"khanates"],["1500",["Ming Chinese Empire"],"ming"],["1530",["Ming Chinese Empire"],"ming"],["1600",["Ming Chinese Empire"],"ming"],["1650",["Manchu Empire"],"qing"],["1700",["Manchu Empire"],"qing"],["1783",["Qing Empire"],"qing"],["1800",["Qing Empire"],"qing"],["1880",["Manchu Empire"],"qing"],["1900",["Manchu Empire"],"qing"]]},{id:"russian",icon:"\u{1F43B}",title:"Russian Empire & USSR",card:"russiat",steps:[...["1783","1800","1815","1880","1900","1914"].map(n=>[n,["Russian Empire"],"russiaemp"]),...["1920","1938","1945","1960"].map(n=>[n,["USSR"],"ussr"]),["1994",["Russia"],"russia"]]},{id:"spanish",icon:"\u26F5",title:"Spanish Empire",card:"spain",steps:["1530","1600","1650","1700","1715","1783","1800","1815"].map(n=>[n,[ja],"spain"])},{id:"india",icon:"\u{1F418}",title:"Empires of South Asia",card:"indiat",steps:[["bc200",["Mauryan Empire"],"maurya"],["400",["Gupta Empire"],"gupta"],["1000",["Chola Empire"],"chola"],["1100",["Ghaznavid Emirate"],"ghaznavid"],...["1200","1300","1400","1500"].map(n=>[n,["Sultanate of Delhi"],"delhi"]),...["1530","1600","1650","1700"].map(n=>[n,["Mughal Empire"],"mughal"]),["1715",["Maratha"],"maratha"],["1783",["Maratha Confederacy"],"maratha"],["1815",["British East India Company"],"british"],...["1880","1900","1914","1938"].map(n=>[n,["British Raj"],"raj"]),["1960",["India","Pakistan"],"india"]]},{id:"westafrica",icon:"\u{1F981}",title:"Empires of West Africa",card:"africat",steps:[["600",["Empire of Ghana"],"ghana"],["700",["Empire of Ghana"],"ghana"],["900",["Ghana"],"ghana"],["1100",["Ghana"],"ghana"],["1279",["Mali"],"mali"],["1300",["Mali"],"mali"],["1400",["Mali"],"mali"],["1500",["Songhai"],"songhai"],["1530",["Songhai"],"songhai"],["1600",["Songhai"],"songhai"]]},{id:"americas",icon:"\u{1F33D}",title:"Aztec & Inca",card:"inca",steps:[["1500",["Aztec Empire","Inca Empire"],"aztec"],["1530",["Inca Empire"],"inca"]]}];var ic=["Russia is the biggest country in the world, at about 17 million km\xB2.","Vatican City is the smallest country: about 0.44 km\xB2, smaller than many parks!","The Pacific Ocean covers about one-third of Earth\u2019s surface.","Mount Everest is 8,849 m tall, the highest point above sea level.","The deepest spot in the ocean, in the Mariana Trench, is almost 11 km down.","Lake Baikal in Russia is the deepest lake on Earth, at over 1,600 m.","Antarctica is the largest desert in the world. A desert means very little rain or snow, not heat!","The Equator is about 40,075 km long.","Africa has 54 countries, more than any other continent.","Canada has the longest coastline of any country.","Kazakhstan is the largest country with no coastline at all (landlocked).","China is wide enough for about five time zones but uses just one.","Point Nemo, in the South Pacific, is the spot in the ocean farthest from any land.","Earth is closest to the Sun in early January.","The Mongol Empire was the largest connected land empire ever.","The Sahara is the largest hot desert, about the size of the USA."],wi=[{n:"Doha",lat:25.29,lon:51.53},{n:"London",lat:51.51,lon:-.13},{n:"New York",lat:40.71,lon:-74.01},{n:"Tokyo",lat:35.68,lon:139.69},{n:"Sydney",lat:-33.87,lon:151.21},{n:"Karachi",lat:24.86,lon:67.01},{n:"Los Angeles",lat:34.05,lon:-118.24},{n:"Cape Town",lat:-33.92,lon:18.42},{n:"S\xE3o Paulo",lat:-23.55,lon:-46.63},{n:"Beijing",lat:39.9,lon:116.4},{n:"Cairo",lat:30.04,lon:31.24},{n:"Moscow",lat:55.76,lon:37.62},{n:"Singapore",lat:1.35,lon:103.82},{n:"Lima",lat:-12.05,lon:-77.04},{n:"Reykjav\xEDk",lat:64.15,lon:-21.94}],sc=[{id:"first",icon:"\u{1F393}",name:"First Steps",d:"Finish your first lesson"},{id:"academy",icon:"\u{1F9E0}",name:"Map Master",d:"Finish all 8 lessons"},{id:"trotter",icon:"\u{1F9F3}",name:"Globe Trotter",d:"Explore 25 countries"},{id:"time",icon:"\u23F3",name:"Time Traveller",d:"Visit 10 eras"},{id:"empire",icon:"\u{1F3DB}\uFE0F",name:"Empire Expert",d:"3 stars in Empire Detective"},{id:"flags",icon:"\u{1F6A9}",name:"Flag Fanatic",d:"3 stars in Flag Flash"},{id:"capitals",icon:"\u{1F3D9}\uFE0F",name:"Capital Champion",d:"3 stars in Capital Clash"},{id:"pinpoint",icon:"\u{1F3AF}",name:"Pinpoint Pro",d:"3 stars in Coordinate Hunter"},{id:"finder",icon:"\u{1F50E}",name:"Country Finder",d:"3 stars in Find It!"},{id:"historian",icon:"\u{1F451}",name:"Empire Historian",d:"Watch 5 empire timelines"},{id:"explorer",icon:"\u{1F9ED}",name:"Great Explorer",d:"Finish all 9 Great Journeys"}];var wr=[{id:"battuta",name:"Ibn Battuta",icon:"\u{1F42B}",color:16764735,years:"1325\u20131354",from:"Tangier, Morocco",era:1279,tag:"The greatest traveller of the Middle Ages",km:"about 117,000 km",who:"A young scholar of Islamic law from Morocco",intro:"In 1325 a 21-year-old Moroccan named Ibn Battuta left home to make the pilgrimage to Mecca. He did not come back for 24 years! He travelled farther than anyone before him: across Africa, Arabia, Central Asia, India and all the way to China.",stops:[{p:"Tangier",ll:[35.77,-5.8],y:"1325",e:"\u{1F3E0}",t:"Our story begins in Tangier, on the northern tip of Morocco. Ibn Battuta sets off alone, aged just 21, to make the Hajj pilgrimage to Mecca. He later wrote of how sad he felt leaving his parents."},{v:[36.8,3]},{v:[36.8,10.2]},{v:[32.9,13.2]},{p:"Alexandria & Cairo",ll:[30.6,30.5],y:"1326",e:"\u{1F3DB}\uFE0F",m:"\u{1F42B}",t:'He reaches Egypt. Alexandria has a famous lighthouse, partly in ruins by now. Cairo, he writes, is the "mother of cities", so crowded that its people move like the waves of the sea.'},{p:"Damascus",ll:[33.51,36.29],y:"1326",e:"\u{1F54C}",m:"\u{1F42B}",t:"In Damascus he studies with scholars and admires the great Umayyad Mosque. He also marries during his stay, one of several marriages on his travels."},{p:"Mecca",ll:[21.42,39.83],y:"1326",e:"\u{1F54B}",m:"\u{1F42B}",t:"After weeks crossing the desert with a huge pilgrim caravan, he reaches Mecca and completes his first Hajj. Instead of going home, he decides to keep exploring the world.",q:{q:"Why did Ibn Battuta first leave home?",o:["To trade spices","To make the Hajj pilgrimage to Mecca","To fight in a war","To find gold"],a:1,why:"He set out in 1325 for the Hajj, then kept travelling for 24 more years."}},{p:"Baghdad & Tabriz",ll:[36,45.5],y:"1327",e:"\u{1F3D9}\uFE0F",m:"\u{1F42B}",t:"He visits Iraq and Persia, travelling for a while with the camp of the Mongol ruler of Persia, the Ilkhan Abu Said."},{v:[21.5,39.2]},{v:[14.5,42.5]},{v:[12.4,45.6]},{v:[11.8,51.4]},{v:[5,48.6]},{p:"Mogadishu",ll:[2.05,45.32],y:"1331",e:"\u26F5",m:"\u26F5",t:"Now by ship! He sails down the Red Sea and along the coast of East Africa. In Mogadishu the people are so welcoming that they feed guests huge meals of rice, bananas and mango."},{v:[-4,40]},{p:"Kilwa",ll:[-8.96,39.51],y:"1331",e:"\u{1F3DD}\uFE0F",m:"\u26F5",t:"Kilwa, an island city in today\u2019s Tanzania, is rich from the gold trade. Ibn Battuta calls it one of the most beautiful cities in the world."},{v:[-3,41.5]},{v:[11.8,52]},{v:[17,56]},{v:[23.6,59]},{v:[26.6,56.6]},{v:[32,48]},{v:[37.9,32.5]},{p:"Constantinople",ll:[41.01,28.98],y:"1332",e:"\u26EA",m:"\u{1F42B}",t:"He travels with a princess of the Golden Horde to Constantinople, the great Byzantine capital, and sees the giant church of Hagia Sophia."},{v:[45.5,34]},{p:"Golden Horde steppe",ll:[47.5,46.5],y:"1333",e:"\u{1F40E}",m:"\u{1F40E}",t:"On the windy grasslands near the Volga River he travels in a moving city of wagons and tents. It is the camp of Uzbeg Khan, ruler of the Golden Horde."},{v:[42,59]},{p:"Bukhara & Samarkand",ll:[39.7,65.6],y:"1333",e:"\u{1F54C}",m:"\u{1F42B}",t:"He crosses into Central Asia, to the Silk Road cities of Bukhara and Samarkand. Bukhara still shows damage from the Mongol invasion a hundred years earlier."},{v:[35.5,69]},{p:"Multan",ll:[30.2,71.47],y:"1333",e:"\u{1F3F0}",m:"\u{1F40E}",t:"After crossing the freezing Hindu Kush mountains and the Indus River, he arrives in Multan, an ancient city in today\u2019s Pakistan. Here he waits for permission to travel on to the Sultan in Delhi."},{p:"Delhi",ll:[28.61,77.21],y:"1334",e:"\u{1F451}",m:"\u{1F418}",t:"Sultan Muhammad bin Tughluq makes him a judge, a qadi, of Delhi. He stays about eight years, sometimes rich, sometimes afraid of the Sultan\u2019s terrible temper!",q:{q:"What job did Ibn Battuta get in Delhi?",o:["Ship captain","Judge (qadi)","Royal cook","Map maker"],a:1,why:"His training in Islamic law made him a judge in Delhi and later in the Maldives."}},{v:[11.25,75.78]},{p:"Maldives",ll:[4.18,73.51],y:"1343",e:"\u{1F41A}",m:"\u26F5",t:"After a shipwreck and a robbery on the way, he reaches the Maldive Islands and becomes a judge again. The islands trade cowrie shells, which are used as money as far away as Africa."},{p:"Sri Lanka",ll:[6.81,80.5],y:"1344",e:"\u26F0\uFE0F",m:"\u26F5",t:"In Sri Lanka he climbs Adam\u2019s Peak, a holy mountain with a giant footprint-shaped mark on its summit."},{v:[8,83]},{v:[16,88]},{p:"Bengal",ll:[22.36,91.78],y:"1345",e:"\u{1F33E}",m:"\u26F5",t:"He sails on to Bengal, where rice and food are so cheap he can hardly believe it."},{v:[14,94]},{p:"Sumatra",ll:[5.18,97.15],y:"1345",e:"\u{1F334}",m:"\u26F5",t:"In Sumatra, in today\u2019s Indonesia, the Sultan of Samudra Pasai gives him a ship for the long voyage to China."},{v:[2.5,101]},{v:[1.2,104.2]},{v:[9,109.5]},{v:[20,114.5]},{p:"Quanzhou, China",ll:[24.87,118.68],y:"1346",e:"\u{1F3EE}",m:"\u26F5",t:"He reaches Quanzhou, called Zaitun, one of the biggest ports in the world, full of giant junks. He is amazed by Chinese paper money, porcelain and silk.",q:{q:"Which was the farthest east Ibn Battuta travelled?",o:["Egypt","India","China","Spain"],a:2,why:"He reached China, more than 10,000 km from Morocco."}},{v:[10,109.5]},{v:[1.2,104.2]},{v:[5.5,95]},{v:[9,78]},{v:[17,60]},{v:[26.6,56.6]},{v:[33.3,44.4]},{v:[33.5,36.3]},{v:[30,31.2]},{v:[32.9,13.2]},{v:[36.8,10.2]},{p:"Fez",ll:[34.03,-5],y:"1349",e:"\u{1F3E0}",m:"\u{1F42B}",t:"After 24 years he is home in Morocco. He learns sadly that his mother has died of the plague, the Black Death."},{p:"Granada",ll:[37.18,-3.6],y:"1350",e:"\u{1F3F0}",m:"\u26F5",t:"Still restless, he crosses to al-Andalus and visits Granada, the last Muslim kingdom in Spain."},{v:[31.6,-4.2]},{p:"Timbuktu & Mali",ll:[16.77,-3.01],y:"1352",e:"\u{1F3DC}\uFE0F",m:"\u{1F42B}",t:"His last big journey: across the Sahara Desert with a salt caravan to the Mali Empire and the city of Timbuktu."},{p:"Fez \u2014 the Rihla",ll:[34.03,-5],y:"1355",e:"\u{1F4DC}",m:"\u{1F42B}",t:'Back in Fez, the Sultan asks him to tell his story to a writer named Ibn Juzayy. Their book is known as the Rihla, which means "The Journey". It is still read today!'}]},{id:"polo",name:"Marco Polo",icon:"\u{1F42A}",color:4182271,years:"1271\u20131295",from:"Venice, Italy",era:1279,tag:"The Venetian who served Kublai Khan",km:"about 24,000 km",who:"A 17-year-old from a family of Venetian merchants",intro:"In 1271, 17-year-old Marco Polo set off from Venice with his father Niccol\xF2 and his uncle Maffeo. Their goal was the court of Kublai Khan, ruler of the Mongol Empire. Marco would not see home again for 24 years.",stops:[{p:"Venice",ll:[45.44,12.32],y:"1271",e:"\u{1F6F6}",t:"Venice is a rich trading city built on water. The Polos are merchants, and Marco\u2019s father and uncle have already met Kublai Khan once before."},{v:[40,18.8]},{v:[35.5,25]},{p:"Acre",ll:[32.93,35.08],y:"1271",e:"\u2693",m:"\u26F5",t:"They land at Acre, in the Holy Land, and collect holy oil from Jerusalem as a gift the Khan has asked for."},{v:[38.08,46.29]},{v:[30.28,57.07]},{p:"Hormuz",ll:[27.1,56.4],y:"1272",e:"\u{1F6A2}",m:"\u{1F42B}",t:"They cross Persia to the port of Hormuz, planning to sail to China. But the ships are sewn together with coconut-fibre rope and look unsafe, so they decide to go overland instead!"},{p:"Balkh",ll:[36.76,66.9],y:"1273",e:"\u{1F3DA}\uFE0F",m:"\u{1F42B}",t:"In Afghanistan they reach Balkh, once a great city but badly damaged by the Mongols. Marco falls ill and spends about a year recovering in the cool mountain air of Badakhshan."},{p:"The Pamirs",ll:[37.5,73.5],y:"1273",e:"\u{1F3D4}\uFE0F",m:"\u{1F42B}",t:'They climb the Pamir Mountains, later called the "Roof of the World". Marco notices that fire does not burn as hot up here. That is because of the thin air at high altitude.',q:{q:'Why is the Pamir region nicknamed the "Roof of the World"?',o:["It has red roofs","It is one of the highest regions on Earth","It is at the North Pole","It has no rain"],a:1,why:"The Pamirs are a very high plateau and mountain region in Central Asia."}},{p:"Kashgar",ll:[39.47,75.99],y:"1274",e:"\u{1F3EA}",m:"\u{1F42B}",t:"Kashgar is a busy Silk Road market town where routes from China, India and Persia meet."},{v:[37.1,79.9]},{p:"Lop Desert",ll:[40.3,90.3],y:"1274",e:"\u{1F3DC}\uFE0F",m:"\u{1F42B}",t:"Crossing the desert takes about a month. Travellers say they hear spirit voices and drums in the night. These were probably the sounds of shifting sand dunes and wind."},{p:"Dunhuang",ll:[40.14,94.66],y:"1274",e:"\u{1F5FF}",m:"\u{1F42B}",t:"At Dunhuang, a desert oasis, there are famous Buddhist caves filled with paintings."},{p:"Shangdu (Xanadu)",ll:[42.36,116.18],y:"1275",e:"\u{1F3EF}",m:"\u{1F40E}",t:"After three and a half years they meet Kublai Khan at his summer palace, Shangdu, which the English poet Coleridge later called Xanadu. The Khan likes clever young Marco."},{p:"Khanbaliq (Beijing)",ll:[39.9,116.4],y:"1276",e:"\u{1F4B4}",m:"\u{1F40E}",t:'Marco serves the Khan for about 17 years. He is amazed by paper money, by "black stones" burned for heat (coal!), and by a postal system of horse relay stations.',q:{q:'What were the "black stones" Marco saw people burning for heat?',o:["Coal","Chocolate","Lava","Diamonds"],a:0,why:"Coal was used in China long before it was common in Europe."}},{p:"Hangzhou",ll:[30.27,120.16],y:"1280s",e:"\u{1F309}",m:"\u{1F40E}",t:"He visits Hangzhou, which he calls Kinsay. He describes a huge, beautiful city of canals and bridges, even bigger than Venice."},{p:"Quanzhou",ll:[24.87,118.68],y:"1292",e:"\u{1F478}",m:"\u26F5",t:"At last the Khan lets them go home, on one condition: they must escort a Mongol princess, K\xF6k\xF6chin, by sea to marry a prince in Persia."},{v:[20,114.5]},{v:[9,109.5]},{v:[1.2,104.2]},{v:[2.5,101]},{p:"Sumatra",ll:[5.18,97.15],y:"1292",e:"\u{1F327}\uFE0F",m:"\u26F5",t:"They wait five months in Sumatra for the monsoon winds to change before they can sail west."},{v:[6,82]},{v:[9,75]},{v:[20,62]},{p:"Hormuz again",ll:[27.1,56.4],y:"1293",e:"\u26F5",m:"\u26F5",t:"The voyage is long and dangerous, and many on board die, but the princess arrives safely in Persia."},{v:[38.08,46.29]},{p:"Trebizond",ll:[41,39.72],y:"1294",e:"\u{1F3F0}",m:"\u{1F40E}",t:"They ride to Trebizond on the Black Sea, then sail on toward home."},{v:[41,29]},{v:[37.5,23]},{v:[40,18.8]},{p:"Venice",ll:[45.44,12.32],y:"1295",e:"\u{1F3E0}",m:"\u26F5",t:"Home after 24 years! The story goes that their family did not recognise them, until they ripped open their ragged coats and jewels poured out."},{p:"Genoa \u2014 the book",ll:[44.41,8.93],y:"1298",e:"\u{1F4D6}",m:"\u26F5",t:'In a war with Genoa, Marco is captured and put in prison. There he tells his adventures to a writer, Rustichello. Their book, "The Description of the World", inspired explorers like Christopher Columbus.'}]},{id:"zhenghe",name:"Admiral Zheng He",icon:"\u{1F6A2}",color:16743050,years:"1405\u20131433",from:"Nanjing, China",era:1400,tag:"Commander of the Ming treasure fleet",km:"7 voyages across the Indian Ocean",who:"A Muslim admiral of Ming China, born Ma He in Yunnan",intro:"Zheng He was born around 1371 into a Muslim family in Yunnan, China. He became the admiral of the largest fleet the world had ever seen. Between 1405 and 1433 he led seven great voyages across the Indian Ocean.",stops:[{p:"Nanjing",ll:[32.06,118.8],y:"1405",e:"\u2693",t:'In Nanjing, the Ming Emperor Yongle orders a giant fleet: more than 300 ships and about 27,000 sailors, soldiers, doctors and translators. The biggest "treasure ships" are much larger than any European ship of the time.',q:{q:"About how many people sailed on Zheng He\u2019s first voyage?",o:["About 50","About 500","About 27,000","About 1 million"],a:2,why:"The first fleet had over 300 ships and roughly 27,000 people."}},{v:[31.6,122]},{v:[28,122]},{p:"Fujian coast",ll:[25.96,119.8],y:"1405",e:"\u{1F32C}\uFE0F",m:"\u26F5",t:"The fleet waits on the Fujian coast for the winter monsoon wind, which blows south-west and carries the ships toward Southeast Asia."},{v:[20,114.5]},{v:[15,111]},{p:"Champa (Vietnam)",ll:[13.77,109.22],y:"1405",e:"\u{1F418}",m:"\u26F5",t:"First stop: the kingdom of Champa, in today\u2019s Vietnam. The fleet brings gifts of silk and porcelain, and asks rulers to honour the Ming emperor."},{v:[5,108]},{v:[-4.5,109.5]},{p:"Java",ll:[-7,112.75],y:"1406",e:"\u{1F30B}",m:"\u26F5",t:"On the island of Java, a land of volcanoes, rice terraces and spice traders."},{v:[-3,107]},{v:[1.2,104.2]},{p:"Malacca",ll:[2.19,102.25],y:"1409",e:"\u{1F3EA}",m:"\u26F5",t:"Malacca, on a narrow sea passage, becomes Zheng He\u2019s base, with warehouses for the fleet. The ruler of Malacca later visits China himself."},{v:[5.8,95.2]},{v:[5.6,85]},{p:"Galle, Sri Lanka",ll:[6.03,80.21],y:"1409",e:"\u{1FAA8}",m:"\u26F5",t:"In Sri Lanka the fleet leaves a stone tablet with writing in three languages: Chinese, Tamil and Persian. It is still in a museum today."},{v:[8,76.5]},{p:"Calicut, India",ll:[11.25,75.78],y:"1406 on",e:"\u{1F336}\uFE0F",m:"\u26F5",t:"Calicut, on India\u2019s south-west coast, is the great pepper market of the Indian Ocean. It is the main goal of the early voyages."},{v:[14,64]},{v:[22.6,60]},{p:"Hormuz",ll:[27.1,56.4],y:"1414",e:"\u{1F48E}",m:"\u26F5",t:"On the fourth voyage the fleet sails all the way to Hormuz, at the entrance of the Persian Gulf, a rich trading port for pearls and horses."},{v:[23.6,59.2]},{v:[16,54]},{p:"Aden",ll:[12.79,45.03],y:"1417",e:"\u{1F3DC}\uFE0F",m:"\u26F5",t:"At Aden, in Arabia, Chinese ships trade for incense, gems and exotic animals."},{v:[11.8,51.4]},{v:[3,47.5]},{v:[-1.5,42.5]},{p:"Malindi, East Africa",ll:[-3.22,40.12],y:"1418",e:"\u{1F992}",m:"\u26F5",t:"The fleet reaches the Swahili coast of East Africa. In 1415 envoys from Malindi brought a giraffe to China! The Chinese court thought it might be a qilin, a lucky mythical creature, and welcomed it with celebrations.",q:{q:"Which amazing animal was sent from Africa to China?",o:["A penguin","A giraffe","A kangaroo","A polar bear"],a:1,why:"A giraffe from Malindi arrived in China, where it was thought to be a lucky qilin."}},{v:[3,47.5]},{v:[11.8,51.4]},{v:[12.6,43.5]},{v:[16,41.5]},{p:"Jeddah & Mecca",ll:[21.5,39.17],y:"1432",e:"\u{1F54B}",m:"\u26F5",t:"On the seventh voyage, some members of the fleet travel to Mecca, which was very special for Zheng He, a Muslim whose father and grandfather had made the Hajj."},{v:[12.6,43.5]},{v:[12.4,45.8]},{v:[13,55]},{p:"Calicut \u2014 farewell",ll:[11.25,75.78],y:"1433",e:"\u{1F305}",m:"\u26F5",t:"Zheng He dies in 1433, probably on the way home near Calicut. Soon afterwards, the Ming emperors stop the great voyages, and China turns inward."}]},{id:"magellan",name:"Magellan & Elcano",icon:"\u26F5",color:6484132,years:"1519\u20131522",from:"Seville, Spain",era:1530,tag:"The first voyage all the way around the world",km:"about 70,000 km",who:"Portuguese captain Ferdinand Magellan and Basque sailor Juan Sebasti\xE1n Elcano",intro:"In 1519 five Spanish ships and about 270 men set out to reach the Spice Islands by sailing west. Three years later, one battered ship with 18 survivors came home. They were the first people to sail all the way around the Earth.",stops:[{p:"Sanl\xFAcar, Spain",ll:[36.78,-6.35],y:"1519",e:"\u2693",t:"On 20 September 1519 the fleet leaves Spain, led by Ferdinand Magellan, a Portuguese captain working for the King of Spain. Their goal is the Moluccas, the Spice Islands, where cloves and nutmeg grow."},{p:"Canary Islands",ll:[28.47,-16.25],y:"1519",e:"\u{1F3DD}\uFE0F",m:"\u26F5",t:"A last stop for water and supplies before crossing the Atlantic Ocean."},{v:[5,-25]},{v:[-8,-33]},{p:"Rio de Janeiro",ll:[-22.9,-43.17],y:"1519",e:"\u{1F334}",m:"\u26F5",t:"They arrive in the bay of Rio de Janeiro in Brazil in December, and trade with the local Tupi people."},{v:[-36,-54]},{p:"San Juli\xE1n, Patagonia",ll:[-49.31,-67.73],y:"1520",e:"\u2744\uFE0F",m:"\u26F5",t:"In Patagonia winter arrives, which in the Southern Hemisphere is in June and July! The fleet stops for months. Some captains rebel, and Magellan crushes the mutiny.",q:{q:"Why was it winter in Patagonia in June?",o:["It is near the Equator","It is in the Southern Hemisphere","There was a volcano","It is always cold there"],a:1,why:"Seasons are reversed in the Southern Hemisphere: June is winter there."}},{p:"Strait of Magellan",ll:[-53.5,-70.9],y:"1520",e:"\u{1F9ED}",m:"\u26F5",t:"They find a narrow, stormy passage through the tip of South America. It takes 38 days to get through. One ship turns back to Spain. Today it is called the Strait of Magellan."},{v:[-52.7,-75]},{v:[-38,-77]},{v:[-20,-95]},{v:[-5,-130]},{v:[5,-165]},{v:[12,165]},{p:"Pacific Ocean",ll:[13,155],y:"1521",e:"\u{1F30A}",m:"\u26F5",t:'Magellan names the calm ocean "Pacific", meaning peaceful. But it is far bigger than anyone imagined. For over three months they see almost no land, and the sailors eat sawdust and leather to survive.',q:{q:'What does the name "Pacific" mean?',o:["Peaceful","Huge","Salty","Stormy"],a:0,why:"Magellan called it Mar Pac\xEDfico, the peaceful sea, after calm weather."}},{p:"Guam",ll:[13.44,144.79],y:"1521",e:"\u{1F965}",m:"\u26F5",t:"At last, land! On the island of Guam they find fresh food and water."},{p:"Mactan, Philippines",ll:[10.3,123.95],y:"1521",e:"\u2694\uFE0F",m:"\u26F5",t:"In the Philippines, Magellan takes sides in a local conflict. He is killed in battle at Mactan in April 1521 by the warriors of the chief Lapulapu, now a national hero of the Philippines."},{p:"Spice Islands",ll:[.68,127.4],y:"1521",e:"\u{1F330}",m:"\u26F5",t:"The survivors reach Tidore, in the Spice Islands, and fill their ships with cloves, worth more than their weight in gold in Europe."},{v:[-8.5,124]},{v:[-20,100]},{v:[-35,45]},{p:"Cape of Good Hope",ll:[-34.8,18.47],y:"1522",e:"\u{1F32A}\uFE0F",m:"\u26F5",t:"Juan Sebasti\xE1n Elcano now commands the last ship, the Victoria. He sails across the Indian Ocean and around Africa\u2019s stormy southern tip."},{v:[-10,-2]},{v:[5,-15]},{p:"Cape Verde",ll:[14.93,-23.51],y:"1522",e:"\u{1F4C5}",m:"\u26F5",t:'A mystery! The crew\u2019s logbook says it is Wednesday, but people on land say it is Thursday. By sailing west all around the world, they had "lost" a whole day. That\u2019s why we need the International Date Line!',q:{q:'Why did the sailors "lose" a day?',o:["They overslept","They sailed west all the way around the world","Their clock broke","They crossed the Equator"],a:1,why:"Sailing west with the Sun around the whole Earth adds up to one full day of difference."}},{v:[30,-15]},{p:"Sanl\xFAcar \u2014 home!",ll:[36.78,-6.35],y:"1522",e:"\u{1F3C6}",m:"\u26F5",t:"On 6 September 1522 the Victoria limps home with just 18 of the original crew. They had proved that you can sail all the way around the world."}]},{id:"amundsen",name:"Roald Amundsen",icon:"\u{1F415}",color:12577023,years:"1910\u20131912",from:"Norway",era:1914,tag:"First to the South Pole",km:"about 3,000 km on skis and sledges",who:"A Norwegian polar explorer",intro:"In 1910 the Norwegian explorer Roald Amundsen secretly changed his plans. Instead of the North Pole, he would race to be the first person ever to reach the South Pole.",stops:[{p:"Norway",ll:[59.91,10.75],y:"1910",e:"\u{1F6A2}",t:"Amundsen sails from Norway on the Fram, a ship built to survive being squeezed by sea ice. He has 97 Greenland sled dogs on board."},{v:[50,-5]},{p:"Madeira",ll:[32.65,-16.91],y:"1910",e:"\u{1F4E8}",m:"\u{1F6A2}",t:"At the island of Madeira, he tells his crew the secret: they are going south, to Antarctica! He sends a telegram to his British rival, Robert Falcon Scott."},{v:[0,-22]},{v:[-40,10]},{v:[-50,60]},{v:[-55,120]},{v:[-65,175]},{p:"Bay of Whales",ll:[-78.5,-164],y:"1911",e:"\u{1F3D5}\uFE0F",m:"\u{1F6A2}",t:"In January 1911 they build a base hut called Framheim on the Ross Ice Shelf, a sheet of floating ice as big as France."},{p:"Axel Heiberg Glacier",ll:[-85.3,-165],y:"1911",e:"\u{1F3D4}\uFE0F",m:"\u{1F415}",t:"On 20 October, Amundsen and four companions set off with 52 dogs. They climb a steep glacier through the Transantarctic Mountains, up to the high polar plateau.",q:{q:"How did Amundsen\u2019s team travel to the Pole?",o:["By car","On skis with dog sledges","By helicopter","On horses"],a:1,why:"They used skis and dog sledges, skills learned from Arctic peoples."}},{p:"South Pole",ll:[-89.99,-165],y:"1911",e:"\u{1F1F3}\u{1F1F4}",m:"\u{1F415}",t:"On 14 December 1911 they reach 90 degrees South, the South Pole! Every direction from here is north. They leave a tent and a letter for Scott, who arrives five weeks later.",q:{q:"At the South Pole, which direction is every direction?",o:["North","South","East","West"],a:0,why:"At 90\xB0S you can\u2019t go any further south. Every way you face is north!"}},{p:"Back to Framheim",ll:[-78.5,-164],y:"1912",e:"\u{1F3D5}\uFE0F",m:"\u{1F415}",t:"They return safely to base in January 1912, 99 days after setting out."},{v:[-60,175]},{p:"Hobart, Tasmania",ll:[-42.88,147.33],y:"1912",e:"\u{1F4F0}",m:"\u{1F6A2}",t:"In March 1912 Amundsen reaches Hobart in Australia and sends the news to the world: the South Pole has been reached!"}]},{id:"idrisi",name:"Al-Idrisi",icon:"\u{1F5FA}\uFE0F",color:16757575,years:"1100\u20131165",from:"Ceuta",era:1200,tag:"Map-maker to the King of Sicily",km:"a map of the whole known world",who:"A Muslim geographer and map-maker",intro:"Muhammad al-Idrisi was a geographer born in Ceuta in North Africa around 1100. A Christian king invited him to make the most accurate map of the world anyone had ever seen.",stops:[{p:"Ceuta",ll:[35.89,-5.32],y:"c. 1100",e:"\u{1F476}",t:"Al-Idrisi is born in Ceuta, a port facing Spain across the narrow Strait of Gibraltar."},{p:"C\xF3rdoba",ll:[37.88,-4.78],y:"1110s",e:"\u{1F4DA}",m:"\u{1F40E}",t:"He studies in C\xF3rdoba in al-Andalus, one of the great centres of learning in Europe, with huge libraries."},{p:"Anatolia",ll:[38.4,27.5],y:"c. 1116",e:"\u{1F9F3}",m:"\u26F5",t:"As a teenager he travels as far as Asia Minor, in today\u2019s T\xFCrkiye, and he journeys widely around North Africa and Spain."},{p:"Palermo, Sicily",ll:[38.12,13.36],y:"1138",e:"\u{1F451}",m:"\u26F5",t:"King Roger II of Sicily invites him to Palermo. The king wants to know the whole world: its lands, rivers, cities and roads."},{p:"Palermo \u2014 the great map",ll:[38.12,13.36],y:"1154",e:"\u{1F5FA}\uFE0F",m:"\u26F5",t:"For about 15 years Al-Idrisi questions travellers and sailors, checks their reports and collects old maps. In 1154 he finishes the Tabula Rogeriana, a world map with a book of descriptions, plus a great planisphere said to be made of silver.",q:{q:"What was unusual about Al-Idrisi\u2019s map?",o:["It was drawn with SOUTH at the top","It only showed Sicily","It was in 3D","It showed Australia"],a:0,why:"Like many Arab maps of the time, it was drawn with south at the top."}},{p:"The map\u2019s legacy",ll:[38.12,13.36],y:"after 1154",e:"\u{1F9ED}",m:"\u26F5",t:'His map divided the world into seven climate zones and was copied for centuries. It reminds us that "up" on a map is just a choice. North-at-the-top is only a custom!',q:{q:"Who asked Al-Idrisi to make his map?",o:["The Sultan of Egypt","King Roger II of Sicily","Genghis Khan","The Emperor of China"],a:1,why:"Roger II of Sicily asked him to make it, and it was named Tabula Rogeriana after him."}}]},{id:"biruni",name:"Al-Biruni",icon:"\u{1F4D0}",color:13081599,years:"973\u20131048",from:"Khwarezm (Uzbekistan)",era:1e3,tag:"The scholar who measured the Earth",km:"Earth\u2019s size, measured from a hilltop",who:"A Persian-speaking scientist from Central Asia",intro:"Abu Rayhan al-Biruni was one of the greatest scientists of the Middle Ages. He studied astronomy, maths, geography and history, and he worked out the size of the Earth using a mountain, an angle and some clever maths.",stops:[{p:"Kath, Khwarezm",ll:[41.7,60.75],y:"973",e:"\u{1F476}",t:"Al-Biruni is born near Kath in Khwarezm, a land along the Amu Darya river in today\u2019s Uzbekistan."},{p:"Gurgan",ll:[37.25,55.17],y:"c. 1000",e:"\u{1F4C5}",m:"\u{1F40E}",t:"At the court of Gurgan, near the Caspian Sea, he writes a big book comparing the calendars of many peoples: Persians, Greeks, Jews, Arabs, Indians and more."},{p:"Gurganj",ll:[42.3,59.15],y:"1010s",e:"\u{1F52D}",m:"\u{1F40E}",t:"Back in Khwarezm he makes careful observations of the sky. He discusses the idea that the Earth might turn on its axis."},{p:"Ghazni",ll:[33.55,68.42],y:"1017",e:"\u{1F3F0}",m:"\u{1F40E}",t:"The powerful Sultan Mahmud of Ghazni conquers Khwarezm and takes Al-Biruni to his capital, in today\u2019s Afghanistan. He travels with the Sultan\u2019s armies into South Asia."},{p:"Nandana Fort",ll:[32.72,73.22],y:"c. 1020s",e:"\u26F0\uFE0F",m:"\u{1F40E}",t:"At Nandana fort, in the Salt Range of today\u2019s Pakistan, he climbs a hill above a flat plain. He measures the hill\u2019s height, then the tiny angle down to the horizon. With trigonometry he calculates the Earth\u2019s radius: about 6,340 km. The real value is about 6,371 km. Amazingly close!",q:{q:"Al-Biruni\u2019s answer for Earth\u2019s radius was about 6,340 km. What is the real average radius?",o:["About 640 km","About 6,371 km","About 63,710 km","About 1 million km"],a:1,why:"He was within about 1% of the true value, using just a hill, an angle and geometry."}},{p:"Punjab \u2014 Kitab al-Hind",ll:[30.2,71.47],y:"c. 1030",e:"\u{1F4D6}",m:"\u{1F40E}",t:"He learns Sanskrit and writes a famous book about India: its science, religions, geography and customs. He tries to describe them fairly, which was rare for his time."},{p:"Ghazni",ll:[33.55,68.42],y:"1048",e:"\u{1F319}",m:"\u{1F40E}",t:"He dies in Ghazni after writing around 150 works. Today a crater on the Moon is named after him!",q:{q:"Which tool did Al-Biruni use to work out Earth\u2019s size?",o:["A satellite","A hill and angle measurements","A very long rope","A telescope on the Moon"],a:1,why:"He measured a hill\u2019s height and the dip angle to the horizon, then used trigonometry."}}]},{id:"fadlan",name:"Ibn Fadlan",icon:"\u2744\uFE0F",color:8382463,years:"921\u2013922",from:"Baghdad",era:1e3,tag:"Envoy from Baghdad to the Volga",km:"about 4,000 km",who:"A secretary sent by the Abbasid Caliph",intro:"In 921 the Abbasid Caliph al-Muqtadir sent a group of envoys from Baghdad to the king of the Volga Bulgars, far to the north. One of them, Ahmad ibn Fadlan, wrote down everything he saw.",stops:[{p:"Baghdad",ll:[33.31,44.36],y:"921",e:"\u{1F3DB}\uFE0F",t:"In June 921 the mission leaves Baghdad, capital of the Abbasid Caliphate and one of the largest cities on Earth. The king of the Volga Bulgars has asked for teachers of Islam and help to build a fort."},{p:"Rayy",ll:[35.59,51.43],y:"921",e:"\u{1F42B}",m:"\u{1F42B}",t:"They travel through Persia via Hamadan to Rayy, close to today\u2019s Tehran, along the great Khorasan Road."},{p:"Bukhara",ll:[39.77,64.42],y:"921",e:"\u{1F3D9}\uFE0F",m:"\u{1F42B}",t:"In Bukhara, capital of the Samanid rulers, Ibn Fadlan notices the many kinds of coins in use."},{p:"Khwarezm",ll:[42.3,59.15],y:"Winter 921",e:"\u{1F976}",m:"\u{1F42B}",t:"They spend the winter in Khwarezm. It is so cold that Ibn Fadlan says his beard froze into a lump of ice by the fire!",q:{q:"Ibn Fadlan travelled north from Baghdad. What happened to the climate?",o:["It got hotter","It got much colder","It stayed the same","It rained fish"],a:1,why:"Going north toward higher latitudes, winters become much colder."}},{v:[45,56.5]},{v:[50.5,52]},{p:"The steppe",ll:[51,51.5],y:"922",e:"\u{1F40E}",m:"\u{1F40E}",t:"They cross the grasslands of the Oghuz Turks, with huge rivers to ford on rafts made of camel-skin."},{p:"Volga Bulgaria",ll:[54.98,49.05],y:"May 922",e:"\u{1F30C}",m:"\u{1F40E}",t:"After about 11 months they reach the Volga Bulgars, near today\u2019s Kazan in Russia. The summer nights are so short it barely gets dark. And he sees the northern lights dancing in the sky!",q:{q:"Why were summer nights so short at the Volga?",o:["It is far north, at a high latitude","It is on the Equator","Because of the river","There was no Moon"],a:0,why:"At high latitudes, summer days are very long and nights very short."}},{p:"Meeting the Rus",ll:[55.3,49.3],y:"922",e:"\u{1F6F6}",m:"\u{1F40E}",t:"On the Volga he meets the Rus, Viking traders from Scandinavia. He describes them as tall, tattooed traders, and writes a famous account of a Viking ship funeral."}]},{id:"piri",name:"Piri Reis",icon:"\u{1F9ED}",color:16752451,years:"c. 1470\u20131553",from:"Gallipoli",era:1530,tag:"Ottoman admiral and map-maker",km:"sailed the whole Mediterranean",who:"An admiral of the Ottoman navy",intro:"Piri Reis was a sailor and map-maker of the Ottoman Empire. In 1513 he drew a world map that is one of the oldest surviving maps to show the Americas.",stops:[{p:"Gallipoli",ll:[40.41,26.67],y:"c. 1470",e:"\u2693",t:"Piri is born in Gallipoli, a sea town on the straits near Istanbul. As a boy he joins the ships of his famous uncle, the sea captain Kemal Reis."},{v:[37.5,23]},{v:[36.5,15]},{p:"Western Mediterranean",ll:[37,1],y:"1490s",e:"\u{1F30A}",m:"\u26F5",t:"With his uncle he sails all over the Mediterranean, to the coasts of Spain, North Africa and Italy, learning every harbour, rock and current."},{v:[36.5,15]},{p:"Battle of Zonchio",ll:[36.95,21.67],y:"1499",e:"\u2694\uFE0F",m:"\u26F5",t:"He fights in sea battles against Venice off the coast of Greece, as the Ottoman navy grows into a great power."},{v:[37.5,25]},{p:"Gallipoli \u2014 the 1513 map",ll:[40.41,26.67],y:"1513",e:"\u{1F5FA}\uFE0F",m:"\u26F5",t:"In Gallipoli he draws a world map on gazelle-skin parchment, using about 20 older maps. He even used a map from Christopher Columbus! It shows the coasts of South America and Africa across the Atlantic.",q:{q:"What is special about Piri Reis\u2019s 1513 map?",o:["It is one of the oldest surviving maps showing the Americas","It shows the Moon","It was printed by a computer","It only shows Istanbul"],a:0,why:"It is among the earliest surviving maps to show part of the Americas."}},{v:[37.5,25]},{v:[33,29]},{p:"Egypt",ll:[31.2,29.9],y:"1517",e:"\u{1F381}",m:"\u26F5",t:"In Egypt, he presents his map to the Ottoman Sultan Selim I, who has just conquered the country."},{v:[35,28]},{p:"Istanbul",ll:[41.01,28.98],y:"1521",e:"\u{1F4D8}",m:"\u26F5",t:'He writes the Kitab-\u0131 Bahriye, the "Book of the Sea", a guide for sailors with detailed charts of the whole Mediterranean, later presented to Sultan Suleiman.'},{p:"Topkap\u0131 Palace",ll:[41.01,28.98],y:"1929",e:"\u{1F50D}",m:"\u26F5",t:"His 1513 map was lost for centuries. In 1929 it was found in the library of Topkap\u0131 Palace in Istanbul, and it amazed the world.",q:{q:"What was Piri Reis\u2019s job?",o:["Ottoman admiral and map-maker","Roman emperor","Chinese poet","Viking king"],a:0,why:"He was an Ottoman naval commander famous for his maps."}}]}];var O=n=>document.querySelector(n),mt=Math.PI/180,Nn=180/Math.PI,io=6371,nt=(n,e,t)=>Math.max(e,Math.min(t,n)),Yu=n=>Math.floor(Math.random()*n),Xi=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Yu(e+1);[n[e],n[t]]=[n[t],n[e]]}return n},Ir=n=>n[Yu(n.length)],ju=n=>{let e=2166136261;n=String(n);for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0},Yi=n=>`${Math.abs(n).toFixed(1)}\xB0${n>=0?"N":"S"}`,zs=n=>`${Math.abs(n).toFixed(1)}\xB0${n>=0?"E":"W"}`,es=(n,e)=>`${Yi(n)}, ${zs(e)}`,In=n=>Math.round(n).toLocaleString("en-US"),Xt=n=>n<0?`${-n} BC`:`AD ${n}`,co=(n,e)=>d3.geoDistance([n.lon,n.lat],[e.lon,e.lat])*io,we=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zu=n=>new Promise(e=>setTimeout(e,n)),Ju="atlasquest.v1",Ce={lessons:{},missions:{},journeys:{},story:0,visited:[],eras:[],badges:[]};try{let n=JSON.parse(localStorage.getItem(Ju));n&&(Ce=Object.assign(Ce,n))}catch(n){}function is(){try{localStorage.setItem(Ju,JSON.stringify(Ce))}catch(n){}Ku()}function cc(){let n=0;for(let e in Ce.lessons)n+=Ce.lessons[e];for(let e in Ce.missions)n+=Ce.missions[e].stars||0;for(let e in Ce.journeys||{})n+=Ce.journeys[e];return n}function Ku(){O("#starCount").textContent=cc()}function $i(n){if(Ce.badges.includes(n))return;Ce.badges.push(n),is();let e=sc.find(t=>t.id===n);e&&(ss(`${e.icon} New badge: <b>${e.name}</b>!`),ye.fanfare())}function Ks(){let n=Object.keys(Ce.lessons).length;n>=1&&$i("first"),n>=qi.length&&$i("academy"),Ce.visited.length>=25&&$i("trotter"),Ce.eras.length>=10&&$i("time");let e=(t,i)=>{(Ce.missions[t]||{}).stars>=3&&$i(i)};e("empire","empire"),e("flags","flags"),e("capital","capitals"),e("coords","pinpoint"),e("find","finder"),(Ce.tracks||[]).length>=5&&$i("historian"),wr.every(t=>(Ce.journeys||{})[t.id]!=null)&&$i("explorer")}var Qs=(n,e=3)=>`<span class="stars">${"\u2605".repeat(n)}<span class="off">${"\u2605".repeat(Math.max(0,e-n))}</span></span>`,Fs=null,Zi=!0;try{Zi=localStorage.getItem("aq.snd")!=="0"}catch(n){}function Er(n,e=.12,t="sine",i=.12,s=0){if(Zi)try{Fs=Fs||new(window.AudioContext||window.webkitAudioContext);let r=Fs.currentTime+s,o=Fs.createOscillator(),a=Fs.createGain();o.type=t,o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(i,r),a.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a),a.connect(Fs.destination),o.start(r),o.stop(r+e+.02)}catch(r){}}var ye={click:()=>Er(660,.05,"triangle",.06),good:()=>{Er(660,.1,"triangle"),Er(990,.16,"triangle",.12,.09)},bad:()=>{Er(220,.2,"sawtooth",.07)},fanfare:()=>{[523,659,784,1047].forEach((n,e)=>Er(n,.22,"triangle",.1,e*.11))}};O("#sndBtn").textContent=Zi?"\u{1F50A}":"\u{1F507}";O("#sndBtn").onclick=()=>{Zi=!Zi,O("#sndBtn").textContent=Zi?"\u{1F50A}":"\u{1F507}";try{localStorage.setItem("aq.snd",Zi?"1":"0")}catch(n){}ye.click()};var Pu;function ss(n,e=2600){let t=O("#toast");t.innerHTML=n,t.classList.add("show"),clearTimeout(Pu),Pu=setTimeout(()=>t.classList.remove("show"),e)}var Qa=n=>{if(window.__AQDATA&&window.__AQDATA[n])return Promise.resolve(window.__AQDATA[n]);let e=document.querySelector(`script[data-aq="${n}"]`);return e?new Promise(t=>setTimeout(()=>t(JSON.parse(e.textContent)),0)):fetch(n).then(t=>t.json())},Ei={},_t=[],rs=null,Lr={},Qu={},hc=null,ks={};async function Vy(){let[n,e]=await Promise.all([Qa("data/countries.json"),Qa("data/facts.json")]);Ei=e;for(let t in Ei)Qu[Ei[t].c3]=t;rs=topojson.feature(n,n.objects.land),_t=topojson.feature(n,n.objects.countries).features.map((t,i)=>(t.key=t.id||"x"+i,t.fact=Ei[t.id]||null,t.name=t.fact?t.fact.n:t.properties.name,t.bounds=d3.geoBounds(t),t.area2=d3.geoArea(t),Lr[t.key]=t,t)),Qa("data/flags.json").then(t=>hc=t).catch(()=>{})}var Iu=Zt?4:14,ri=[];async function Ws(n,e=!0){if(ks[n]){let s=ri.indexOf(n);return s>=0&&(ri.splice(s,1),ri.push(n)),ks[n]}let t=await Qa(`data/histt/h_${n}.json`),i=topojson.feature(t,t.objects.h).features.filter(s=>s.geometry);if(i.forEach(s=>{s.name=s.properties.NAME||null,s.bounds=d3.geoBounds(s),s.area2=d3.geoArea(s)}),!e)return i;for(ks[n]=i,ri.push(n);ri.length>Iu;){let s=ri.shift();if(ks[s]!==vn?delete ks[s]:ri.push(s),ri.length>Iu&&ri[0]===n)break}return i}function Wy(n,e,t){let[[i,s],[r,o]]=n;return t<s-.01||t>o+.01?!1:i<=r?e>=i-.01&&e<=r+.01:e>=i-.01||e<=r+.01}function Gn(n,e,t){let i=null;for(let s of n)Wy(s.bounds,t,e)&&d3.geoContains(s,[t,e])&&(!i||s.area2<i.area2)&&(i=s);return i}function Ar(n,e="flag"){let t=hc&&hc[n];return t?`<div class="${e}">${t}</div>`:`<div class="${e}" style="font-size:44px;line-height:1">${(Object.values(Ei).find(i=>i.c===n)||{}).f||"\u{1F3F3}\uFE0F"}</div>`}var Br="auto";try{Br=localStorage.getItem("aq.gfx")||"auto"}catch(n){}var Ki=+((location.search.match(/[?&]gfx=(\d)/)||[])[1]||(/[?&]safe=1/.test(location.search)?1:0)),ho=Ki>=1,Ai=Ki>=2;ho&&(Br="fast");var _n=window.AQTTS||null,Ti=n=>{try{window.__aqStage&&window.__aqStage(n)}catch(e){}try{_n&&_n.stage&&_n.stage(n||"Ready")}catch(e){}},qy=window.matchMedia&&matchMedia("(pointer: coarse)").matches&&!matchMedia("(hover: hover)").matches||/Android|iPhone|iPad|HarmonyOS|Mobile/i.test(navigator.userAgent),Zt=Br==="fast"||Br==="auto"&&(qy||(navigator.deviceMemory||8)<=4),Nr=4,Dn=(n=3)=>{Nr=Math.max(Nr,n)},Vn=O("#globe");Ti("Starting 3D graphics\u2026");var ts;try{ts=new yr({canvas:Vn,...Ki>=3?{context:Vn.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"low-power"})||void 0}:{},antialias:!Zt,alpha:!Ai,precision:Ai?"mediump":"highp",powerPreference:ho?"low-power":"high-performance"}),Ai&&ts.setClearColor(330268,1),Ti("3D graphics started (level "+Ki+")")}catch(n){let e=document.getElementById("lmsg");throw e&&(e.innerHTML='This device\u2019s browser engine could not start 3D graphics (WebGL).<br><small style="font-size:13px;opacity:.85;word-break:break-all">'+we(String(n&&n.message||n))+"<br>"+we(navigator.userAgent)+"</small>"),n}ts.setPixelRatio(Math.min(Ai?1:Zt?1.25:2,window.devicePixelRatio||1));ts.outputColorSpace=ut;var qs=new Ua,rn=new Ht(45,1,.05,200);rn.position.set(0,0,3.2);qs.add(rn);var li=new un;qs.add(li);var Un=new un;li.add(Un);var $y=Math.min(innerWidth,innerHeight)<700,Wn=ho?1024:$y||Zt?2048:4096,$s=Wn/2,en=Zt?1024:2048,Ln=en/2,ed=Object.assign(document.createElement("canvas"),{width:Wn,height:$s}),td=Object.assign(document.createElement("canvas"),{width:en,height:Ln}),nd=Object.assign(document.createElement("canvas"),{width:1024,height:512}),Ze=ed.getContext("2d"),mn=td.getContext("2d"),Bs=nd.getContext("2d"),Xy=d3.geoEquirectangular().scale(Wn/(2*Math.PI)).translate([Wn/2,$s/2]).precision(.2),Dr=d3.geoEquirectangular().scale(en/(2*Math.PI)).translate([en/2,Ln/2]).precision(.3),Yy=d3.geoEquirectangular().scale(1024/(2*Math.PI)).translate([512,256]),zn=d3.geoPath(Xy,Ze),id=d3.geoPath(Dr,mn),jy=d3.geoPath(Yy,Bs),Xs=new Ds(ed);Xs.colorSpace=ut;Xs.anisotropy=Ai?1:ts.capabilities.getMaxAnisotropy();var er=new Ds(td);er.colorSpace=ut;er.anisotropy=4;var sd=new Ds(nd),rd=new yt(new kn(1,Zt?96:160,Zt?64:110),Ai?new fn({map:Xs}):new Ga({map:Xs,specularMap:sd,specular:new $e(5933248),shininess:26}));Un.add(rd);var Zy=new yt(new kn(1.0015,Zt?72:128,Zt?48:90),new fn({map:er,transparent:!0,depthWrite:!1}));Un.add(Zy);var Jy=new pn({transparent:!0,blending:ur,depthWrite:!1,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.0-max(dot(vN,vV),0.0),3.0); gl_FragColor=vec4(0.45,0.75,1.0,1.0)*f*0.9; }"});Ai||Un.add(new yt(new kn(1.003,96,64),Jy));var Ky=new pn({side:Dt,transparent:!0,blending:ur,depthWrite:!1,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float d=dot(vN,vV); float f=pow(clamp(d+0.62,0.0,1.0),5.0); gl_FragColor=vec4(0.3,0.62,1.0,1.0)*f*1.25; }"});ho||li.add(new yt(new kn(1.16,96,64),Ky));{let e=new Float32Array(7800),t=new Float32Array(2600*3);for(let s=0;s<2600;s++){let r=Math.random()*2-1,o=Math.random()*Math.PI*2,a=45+Math.random()*30,l=Math.sqrt(1-r*r);e.set([a*l*Math.cos(o),a*r,a*l*Math.sin(o)],s*3);let c=.6+Math.random()*.4,h=Math.random();t.set([c,c*(h>.8?.85:1),c*(h<.2?.8:1)],s*3)}let i=new Vt;i.setAttribute("position",new Gt(e,3)),i.setAttribute("color",new Gt(t,3)),Ai||qs.add(new Fa(i,new _r({size:.16,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1})))}var uc=new Wa(16777215,1.45);qs.add(uc);var Ys=new Mr(16777215,2.1);Ys.position.set(-2.5,2,3);rn.add(Ys);rn.add(Ys.target);Ys.target.position.set(0,0,-3.2);var Ur=new Mr(16774365,0);Un.add(Ur);Un.add(Ur.target);function dc(n,e){if(Dn(),n==null){Ys.intensity=2.1,Ur.intensity=0,uc.intensity=1.45;return}Ur.position.copy(Wt(n,e,6)),Ys.intensity=0,Ur.intensity=4.6,uc.intensity=.5}function Wt(n,e,t=1){let i=n*mt,s=e*mt;return new I(t*Math.cos(i)*Math.cos(s),t*Math.sin(i),-t*Math.cos(i)*Math.sin(s))}var Lu={Africa:[26,60,60],Asia:[44,66,62],Europe:[330,42,68],Oceania:[268,42,68],Antarctic:[205,30,93],NA:[140,38,54],SA:[92,44,54]};function Qy(n){let e=n.fact,t="Asia";e&&(t=e.r==="Americas"?e.s==="South America"?"SA":"NA":Lu[e.r]?e.r:"Asia"),n.name==="Antarctica"&&(t="Antarctic");let[i,s,r]=Lu[t],o=ju(n.key)%15-7;return`hsl(${i+o*.8},${s}%,${nt(r+o,30,96)}%)`}function ad(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#0d2a55"),i.addColorStop(.18,"#11407a"),i.addColorStop(.5,"#1768ad"),i.addColorStop(.82,"#11407a"),i.addColorStop(1,"#0d2a55"),n.fillStyle=i,n.fillRect(0,0,e,t),n.globalAlpha=.05;for(let s=0;s<2600;s++)n.fillStyle=Math.random()<.5?"#fff":"#002",n.fillRect(Math.random()*e,Math.random()*t,2+Math.random()*6,1+Math.random()*2);n.globalAlpha=1}function od(n,e,t){n.lineJoin="round",[[22*t,"rgba(90,200,250,.10)"],[12*t,"rgba(110,215,255,.16)"],[5*t,"rgba(150,230,255,.22)"]].forEach(([i,s])=>{n.beginPath(),e(rs),n.strokeStyle=s,n.lineWidth=i,n.stroke()})}function ld(n,e,t,i){n.save(),n.beginPath(),e(rs),n.clip();for(let s=0;s<t*1.4;s++){let r=Math.random()*t,o=Math.random()*i,a=Math.random()*3+1;n.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${.03+Math.random()*.04})`,n.fillRect(r,o,a,a)}n.restore()}function ev(){Bs.fillStyle="#9a9a9a",Bs.fillRect(0,0,1024,512),Bs.fillStyle="#000",Bs.beginPath(),jy(rs),Bs.fill(),sd.needsUpdate=!0}var js="";function vc(){if(js==="today")return;js="today";let n=Wn/4096;ad(Ze,Wn,$s),od(Ze,zn,n);for(let e of _t)Ze.beginPath(),zn(e),Ze.fillStyle=Qy(e),Ze.fill();ld(Ze,zn,Wn,$s),Ze.lineJoin="round",Ze.strokeStyle="rgba(255,255,255,.55)",Ze.lineWidth=1.4*n;for(let e of _t)Ze.beginPath(),zn(e),Ze.stroke();Ze.strokeStyle="rgba(20,40,70,.35)",Ze.lineWidth=1.2*n,Ze.beginPath(),zn(rs),Ze.stroke(),Xs.needsUpdate=!0,Dn()}function tv(n){let e=ju(n);return`hsl(${e%360},${50+(e>>9)%25}%,${50+(e>>13)%14}%)`}function uo(n,e){if(js==="hist:"+e)return;js="hist:"+e;let t=Wn/4096;ad(Ze,Wn,$s),od(Ze,zn,t),Ze.beginPath(),zn(rs),Ze.fillStyle="#6f6a5c",Ze.fill();for(let i of n)i.name&&(Ze.beginPath(),zn(i),Ze.fillStyle=tv(i.name),Ze.fill());ld(Ze,zn,Wn,$s),Ze.strokeStyle="rgba(25,20,10,.55)",Ze.lineWidth=1.6*t;for(let i of n)i.name&&(Ze.beginPath(),zn(i),Ze.stroke());Xs.needsUpdate=!0,Dn()}function Cr(){mn.clearRect(0,0,en,Ln),er.needsUpdate=!0,Dn()}function oi(n,e="rgba(255,224,90,.55)",t="#fff3b0",i=!1){i||mn.clearRect(0,0,en,Ln),mn.lineJoin="round";for(let s of n)mn.beginPath(),id(s),mn.fillStyle=e,mn.fill(),mn.strokeStyle=t,mn.lineWidth=3,mn.stroke();er.needsUpdate=!0,Dn()}function Gs(n){mn.clearRect(0,0,en,Ln),n(mn,id,Dr),er.needsUpdate=!0,Dn()}var qn=new un;Un.add(qn);var fc=new un;Un.add(fc);var Qi=[],nv=O("#labels");function ci(){for(Dn();qn.children.length;)qn.children.pop().traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose()});Qi.filter(n=>!n.persist).forEach(n=>n.el.remove()),Qi=Qi.filter(n=>n.persist)}function jt(n,e,t,i="",s=!1,r=1.01){Dn();let o=document.createElement("div");o.className="lbl "+i,o.innerHTML=n,nv.appendChild(o);let a={el:o,v:Wt(e,t,r),persist:s};return Qi.push(a),a}function _c(n){n&&(n.el.remove(),Qi=Qi.filter(e=>e!==n))}function Rt(n,e,t=.0035,i=!1,s=1,r=qn){let o=new xr(n,i,"catmullrom",.1),a=new yt(new Ha(o,Math.max(64,n.length*2),t,6,i),new fn({color:e,transparent:!0,opacity:s,depthWrite:!1}));return r.add(a),a}var cd=(n,e=1.004,t=256)=>Array.from({length:t},(i,s)=>Wt(n,-180+360*s/t,e)),Or=(n,e=1.004,t=128)=>Array.from({length:t+1},(i,s)=>Wt(-90+180*s/t,n,e)),ft={eq:16764735,trop:16754239,polar:8382463,prime:16735581,anti:13081599,gc:16764735,rhumb:16743050};function gn(n,e,t,i=.0035){if(Rt(cd(n),e,i,!0),t)for(let s of[-120,0,120])jt(t,n+1.8,s+20,"line")}function Hs(n,e,t,i=.0035){Rt(Or(n),e,i),t&&jt(t,30,n,"line")}function pc(n=!0){gn(0,ft.eq,n&&"Equator 0\xB0",.005),gn(23.44,ft.trop,n&&"Tropic of Cancer 23.4\xB0N"),gn(-23.44,ft.trop,n&&"Tropic of Capricorn 23.4\xB0S"),gn(66.56,ft.polar,n&&"Arctic Circle 66.6\xB0N"),gn(-66.56,ft.polar,n&&"Antarctic Circle 66.6\xB0S")}var Rn=null;function Hn(n){if(n&&!Rn){let e=[];for(let t=-75;t<=75;t+=15){let i=cd(t,1.002,180);for(let s=0;s<i.length;s++)e.push(i[s],i[(s+1)%i.length])}for(let t=-180;t<180;t+=15){let i=Or(t,1.002,90);for(let s=0;s<i.length-1;s++)e.push(i[s],i[s+1])}Rn=new Oa(new Vt().setFromPoints(e),new vr({color:13625087,transparent:!0,opacity:.32,depthWrite:!1})),fc.add(Rn),Rn.userData.labels=[];for(let t=-60;t<=60;t+=30)Rn.userData.labels.push(jt(t===0?"0\xB0":Yi(t).replace(".0",""),t,-25,"line",!0));for(let t=-150;t<=180;t+=30)Rn.userData.labels.push(jt(t===0?"0\xB0":zs(t).replace(".0",""),3,t,"line",!0))}else!n&&Rn&&(fc.remove(Rn),Rn.userData.labels.forEach(_c),Rn.geometry.dispose(),Rn=null)}function $t(n,e,t=16764735,i="",s=qn){let r=new un,o=new yt(new kn(.014,16,12),new fn({color:t}));o.position.copy(Wt(n,e,1.04));let a=Rt([Wt(n,e,1),Wt(n,e,1.04)],16777215,.0022,!1,.9,r),l=new yt(new za(.012,.02,24),new fn({color:t,transparent:!0,opacity:.8,side:wn,depthWrite:!1}));return l.position.copy(Wt(n,e,1.003)),l.lookAt(Wt(n,e,2)),l.userData.pulse=!0,r.add(o,l),s.add(r),i&&jt(i,n,e,"pin",!1,1.05),r}function so(n,e,t=160,i=1.005){let s=d3.geoInterpolate([n.lon,n.lat],[e.lon,e.lat]);return Array.from({length:t+1},(r,o)=>{let[a,l]=s(o/t);return Wt(l,a,i)})}function Nu(n){return Math.log(Math.tan(Math.PI/4+nt(n,-89,89)*mt/2))}function Du(n,e,t=160){let i=e.lon-n.lon;i>180&&(i-=360),i<-180&&(i+=360);let s=Nu(n.lat),r=Nu(e.lat),o=[];for(let a=0;a<=t;a++){let l=a/t,c=s+(r-s)*l,h=(2*Math.atan(Math.exp(c))-Math.PI/2)*Nn,d=n.lon+i*l;d>180&&(d-=360),d<-180&&(d+=360),o.push({lat:h,lon:d})}return o}function iv(n,e){let t=n.lat*mt,i=e.lat*mt,s=i-t,r=(e.lon-n.lon)*mt;Math.abs(r)>Math.PI&&(r=r>0?-(2*Math.PI-r):2*Math.PI+r);let o=Math.log(Math.tan(Math.PI/4+i/2)/Math.tan(Math.PI/4+t/2)),a=Math.abs(o)>1e-10?s/o:Math.cos(t);return Math.sqrt(s*s+a*a*r*r)*io}var Bn=null;function sv(n){let e=new yt(new kn(.012,12,10),new fn({color:16777215}));qn.add(e),Bn={m:e,pts:n,t:0}}var xe={lon:30,lat:18,dist:7},Yt=null,Pn={x:0,y:0},rt=!0,Zs=0,rv={x:0,y:0};function De(n,e,t,i=1100){let s=((e-xe.lon)%360+540)%360-180;Yt={s:{...xe},e:{lat:nt(n,-80,80),lon:xe.lon+s,dist:t!=null?t:xe.dist},t0:performance.now(),ms:i},Pn={x:0,y:0}}function av(){Un.rotation.set(xe.lat*mt,(-90-xe.lon)*mt,0);let n=rn.aspect;rn.position.set(0,0,xe.dist*(n<1?Math.min(2.1,.88/n):1))}function hd(){Dn(6);let n=innerWidth,e=innerHeight;ts.setSize(n,e,!1),rn.aspect=n/e,fo()}function fo(){let n=innerWidth,e=innerHeight,t=n<=860,i=!O("#panel").classList.contains("hide"),s=!O("#home").classList.contains("hide"),r=0,o=0;t?i?o=(O("#panel").offsetHeight+58)/2-20:s&&(o=-e*.18):i?r=(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--pw"))+24)/2:s&&(r=-Math.min(560,n*.45)/2),rv={x:r,y:o},rn.setViewOffset(n,e,r,o,n,e),rn.updateProjectionMatrix()}addEventListener("resize",hd);var yn=new Map,tn=null,Fr=null,nn=null,Uu=0,Ou=new qa,Fu=new ve;function xc(n,e){Fu.set(n/innerWidth*2-1,-(e/innerHeight)*2+1),Ou.setFromCamera(Fu,rn);let t=Ou.intersectObject(rd,!1)[0];if(!t)return null;let i=Un.worldToLocal(t.point.clone()).normalize();return{lat:Math.asin(nt(i.y,-1,1))*Nn,lon:Math.atan2(-i.z,i.x)*Nn}}Vn.addEventListener("pointerdown",n=>{if(Vn.setPointerCapture(n.pointerId),yn.set(n.pointerId,{x:n.clientX,y:n.clientY}),Yt=null,Zs=performance.now(),yn.size===1)tn={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY,t:performance.now()},Pn={x:0,y:0},Vn.classList.add("drag");else if(yn.size===2){let[e,t]=[...yn.values()];Fr={d:Math.hypot(e.x-t.x,e.y-t.y),dist:xe.dist},tn=null}});Vn.addEventListener("pointermove",n=>{if(yn.has(n.pointerId)){if(yn.set(n.pointerId,{x:n.clientX,y:n.clientY}),Zs=performance.now(),Fr&&yn.size===2){let[e,t]=[...yn.values()];xe.dist=nt(Fr.dist*Fr.d/Math.max(10,Math.hypot(e.x-t.x,e.y-t.y)),1.25,7);return}if(tn){let e=n.clientX-tn.x,t=n.clientY-tn.y,i=.11*(xe.dist-1)+.015;xe.lon-=e*i,xe.lat=nt(xe.lat+t*i,-85,85),Pn={x:-e*i,y:t*i},tn.x=n.clientX,tn.y=n.clientY}}else if(n.pointerType==="mouse"){let e=performance.now();if(e-Uu<90)return;Uu=e;let t=xc(n.clientX,n.clientY);bc(t)}});function ud(n){if(yn.has(n.pointerId)){if(yn.delete(n.pointerId),Vn.classList.remove("drag"),tn&&yn.size===0&&Math.hypot(n.clientX-tn.sx,n.clientY-tn.sy)<7&&performance.now()-tn.t<600){Pn={x:0,y:0};let t=xc(n.clientX,n.clientY);t&&(bc(t),nn&&nn(t))}yn.size===0&&(tn=null,Fr=null)}}Vn.addEventListener("pointerup",ud);Vn.addEventListener("pointercancel",ud);Vn.addEventListener("wheel",n=>{n.preventDefault(),Yt=null,xe.dist=nt(xe.dist*(1+n.deltaY*.0012),1.25,7),Zs=performance.now()},{passive:!1});function bc(n){if(!n){O("#hud").textContent="Drag to spin \xB7 Scroll to zoom";return}let e="";if(js==="today"&&_t.length){let t=Gn(_t,n.lat,n.lon);e=t?t.name:zr(n.lat,n.lon)}else if(js.startsWith("hist:")&&vn){let t=Gn(vn,n.lat,n.lon);e=t&&t.name?t.name:Gn(_t,n.lat,n.lon)?"Unknown lands":zr(n.lat,n.lon)}O("#hud").innerHTML=`\u{1F4CD} ${es(n.lat,n.lon)}${e&&!kr?" \xB7 "+we(e):""}`}var kr=!1;function zr(n,e){let t=(i,s,r,o)=>n>=i&&n<=s&&e>=r&&e<=o;return t(30,46,-6,36.5)?"Mediterranean Sea":t(40.5,47,27.3,42)?"Black Sea":t(36.5,47.2,46.5,55)?"Caspian Sea (the world\u2019s biggest lake)":t(23.5,30.5,47.5,57)?"Persian Gulf (Arabian Gulf)":t(12,30,32,43.5)?"Red Sea":t(5,25,55,77)?"Arabian Sea":t(5,22.5,79.5,95)?"Bay of Bengal":t(0,23,103,121)?"South China Sea":t(18,30.8,-98,-81)?"Gulf of Mexico":t(9,22,-88,-60)?"Caribbean Sea":t(51,61,-4,10)?"North Sea":t(53,66,10,30)?"Baltic Sea":n<-60?"Southern Ocean":n>66?"Arctic Ocean":e>20&&e<147&&n<-10||e>20&&e<100&&n<30?"Indian Ocean":(n>8?e>-98&&e<20:e>-68&&e<20)?"Atlantic Ocean":"Pacific Ocean"}var Tr=new I,ku=new I,Za=0,Bu="",zu=!1,dd=0,ov=Zt?1e3/30-2:0;["pointerdown","pointermove","wheel","input","click","keydown"].forEach(n=>addEventListener(n,()=>Dn(4),!0));function fd(n){if(requestAnimationFrame(fd),n-Za<ov)return;let e=Za?Math.min(3,(n-Za)/16.7):1;if(Za=n,!document.hidden)try{if(Yt){let o=nt((n-Yt.t0)/Yt.ms,0,1),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;for(let l of["lat","lon","dist"])xe[l]=Yt.s[l]+(Yt.e[l]-Yt.s[l])*a;o>=1&&(Yt=null)}else if(!tn)if(Math.abs(Pn.x)+Math.abs(Pn.y)>.002){xe.lon+=Pn.x*e,xe.lat=nt(xe.lat+Pn.y*e,-85,85);let o=Math.pow(.93,e);Pn.x*=o,Pn.y*=o}else rt&&n-Zs>4e3&&(xe.lon+=.035*e);av();let t=xe.lat.toFixed(3)+","+xe.lon.toFixed(3)+","+xe.dist.toFixed(3)+","+li.rotation.z.toFixed(3),i=!Zt&&qn.children.length>0;if(t===Bu&&!Bn&&!i&&Nr<=0)return;if(Bu=t,Nr>0&&Nr--,Bn){Bn.t=(Bn.t+.004)%1;let o=Math.floor(Bn.t*(Bn.pts.length-1));Bn.m.position.copy(Bn.pts[o]).multiplyScalar(1.004)}if(!Zt){let o=.8+.35*Math.sin(n/260);qn.traverse(a=>{a.userData.pulse&&a.scale.setScalar(o)})}qs.updateMatrixWorld(),ku.copy(rn.position).normalize();let s=innerWidth,r=innerHeight;for(let o of Qi){Tr.copy(o.v).applyMatrix4(Un.matrixWorld);let a=Tr.clone().normalize().dot(ku);if(a<.18){o.el.style.opacity=0;continue}Tr.project(rn),o.el.style.opacity=Math.min(1,(a-.18)*4),o.el.style.left=(Tr.x+1)/2*s+"px",o.el.style.top=(1-Tr.y)/2*r+"px"}ts.render(qs,rn),dd++,zu||(zu=!0,Ti("First 3D frame drawn"))}catch(t){console.error(t)}}var eo=O("#panel"),At=O("#pbody"),Rr=O("#home"),ns=[];function lv(){ns.forEach(n=>{try{n()}catch(e){}}),ns=[]}function pt(n,e=!1){eo.classList.remove("hide"),eo.classList.toggle("tall",e),At.innerHTML=n,At.scrollTop=0,eo.scrollTop=0,requestAnimationFrame(fo)}function cv(){eo.classList.add("hide"),requestAnimationFrame(fo)}function an(){lv(),ci(),Cr(),Bn=null,dc(null),nn=null,kr=!1,li.rotation.z=0,vc(),rt=!1}function as(n){n==="empires"&&(n="history"),document.querySelectorAll("#nav button").forEach(e=>e.classList.toggle("on",e.dataset.v===n))}document.querySelectorAll("#nav button").forEach(n=>n.onclick=()=>{ye.click(),xn(n.dataset.v)});function xn(n){location.hash!=="#"+n?location.hash=n:Mc()}addEventListener("hashchange",Mc);function Mc(){let n=(location.hash||"#home").slice(1);Ti("Screen: "+n),({home:Hu,journeys:wv,empires:Tv,explore:fv,academy:Sc,history:vd,missions:yc}[n]||Hu)()}var hv='<svg class="owl" viewBox="0 0 100 112"><ellipse cx="50" cy="74" rx="34" ry="34" fill="#9a6a3b"/><ellipse cx="50" cy="82" rx="22" ry="24" fill="#f0d6a6"/><path d="M34 76q4 4 8 0M46 84q4 4 8 0M58 76q4 4 8 0M40 92q4 4 8 0M52 92q4 4 8 0" stroke="#c9a46a" stroke-width="2" fill="none"/><ellipse cx="20" cy="76" rx="8" ry="20" fill="#7c5230" transform="rotate(12 20 76)"/><ellipse cx="80" cy="76" rx="8" ry="20" fill="#7c5230" transform="rotate(-12 80 76)"/><circle cx="50" cy="44" r="28" fill="#a8743f"/><circle cx="38" cy="45" r="11" fill="#fff"/><circle cx="62" cy="45" r="11" fill="#fff"/><circle cx="39" cy="46" r="5.5" fill="#1b2445"/><circle cx="61" cy="46" r="5.5" fill="#1b2445"/><circle cx="41" cy="44" r="1.8" fill="#fff"/><circle cx="63" cy="44" r="1.8" fill="#fff"/><path d="M46 54l4 7 4-7z" fill="#ff9f2e"/><path d="M18 30q32-14 64 0l-4 6q-28-9-56 0z" fill="#d8c48a"/><path d="M27 30q2-22 23-22t23 22z" fill="#e8d59c"/><rect x="27" y="26" width="46" height="5" rx="2" fill="#7a5a2a"/><circle cx="50" cy="92" r="8" fill="#ffcf3f" stroke="#a8781c" stroke-width="2"/><path d="M50 86l2 6-2 6-2-6z" fill="#d33"/><path d="M38 108l-4 4M44 108l0 4M56 108l0 4M62 108l4 4" stroke="#ff9f2e" stroke-width="3" stroke-linecap="round"/></svg>',uv=n=>`<div class="owlrow">${hv}<div class="bubble">${n}</div></div>`,to;function Hu(){as("home"),an(),cv(),Rr.classList.remove("hide"),document.body.classList.add("onhome"),rt=!0,De(18,xe.lon+20,innerWidth<=860?3.6:2.9,1600);let n=sc.map(e=>`<div class="badge ${Ce.badges.includes(e.id)?"got":""}" title="${e.d}"><span class="b">${e.icon}</span>${e.name}</div>`).join("");Rr.innerHTML=`
    <div class="pop"><div class="mut f" style="font-size:16px">A geography adventure for curious explorers</div>
    <h1>Atlas Quest</h1>
    <p class="sub">Spin the globe, crack the secrets of maps, and travel 2,500 years through history.</p>
    ${uv(cc()?`Welcome back, explorer! You have <b>${cc()} \u2B50</b>. Where shall we go today?`:"Hoo! I'm <b>Captain Compass</b>. Ready for a round-the-world adventure?")}
    <div class="homebtns">
      <button class="card hero" data-go="journeys" style="background:linear-gradient(120deg,rgba(63,208,255,.22),rgba(255,122,138,.18));border-color:rgba(63,208,255,.5)"><span class="ic">\u{1F9ED}</span><h3>Great Journeys</h3><small>Follow Ibn Battuta, Marco Polo, Zheng He, Magellan, Al-Biruni and more on animated, narrated adventures.</small></button>
      <button class="card" data-go="explore"><span class="ic">\u{1F30D}</span><h3>Explore</h3><small>Tap any country for flags, capitals and facts.</small></button>
      <button class="card" data-go="academy"><span class="ic">\u{1F393}</span><h3>Map Academy</h3><small>Latitude, longitude, 360\xB0, time zones, great circles\u2026</small></button>
      <button class="card" data-go="history"><span class="ic">\u23F3</span><h3>Time Machine</h3><small>33 eras and 14 empire timelines, from 500 BC to today.</small></button>
      <button class="card" data-go="missions"><span class="ic">\u{1F3AF}</span><h3>Missions</h3><small>6 quiz games: flags, capitals, coordinates and more.</small></button>
    </div>
    <div class="dyk"><b class="f" style="color:var(--acc)">\u{1F4A1} Did you know?</b><div id="dyk" style="margin-top:6px">${Ir(ic)}</div></div>
    <h3 style="margin:18px 0 0">Your badges</h3><div class="badges">${n}</div>
    <h3 style="margin:18px 0 4px">\u2699\uFE0F Graphics</h3><div class="seg" id="gfx">${[["auto","Auto"],["fast","\u26A1 Fast"],["beautiful","\u2728 Beautiful"]].map(([e,t])=>`<button data-g="${e}" class="${Br===e?"on":""}">${t}</button>`).join("")}</div>
    <small class="mut">Now using <b>${Zt?"Fast":"Beautiful"}</b> mode${Ki?` (safe graphics level ${Ki})`:""}. Choose \u26A1 Fast if the game is slow or closes by itself.</small></div>`,Rr.querySelectorAll("[data-go]").forEach(e=>e.onclick=()=>{ye.click(),xn(e.dataset.go)}),Rr.querySelectorAll("[data-g]").forEach(e=>e.onclick=()=>{try{localStorage.setItem("aq.gfx",e.dataset.g)}catch(t){}try{_n&&_n.setLevel&&_n.setLevel(e.dataset.g==="beautiful"?0:Math.min(Ki,1))}catch(t){}location.href=location.pathname+(e.dataset.g==="beautiful"?"":location.search)+"#home"}),clearInterval(to),to=setInterval(()=>{let e=O("#dyk");e?e.textContent=Ir(ic):clearInterval(to)},8e3),nn=e=>{let t=Gn(_t,e.lat,e.lon);t&&ss(`${t.fact?t.fact.f+" ":""}<b>${we(t.name)}</b>, tap Explore to learn more!`)},requestAnimationFrame(fo)}function $n(){document.body.classList.remove("onhome"),Rr.classList.add("hide"),clearInterval(to)}var ai={grid:!1,lines:!1,labels:!1,tz:!1},rc=[];function dv(n){if(rc.forEach(_c),rc=[],n)for(let e of _t)e.fact&&e.fact.a>65e4&&rc.push(jt(e.name,e.fact.ll[0],e.fact.ll[1],"big",!0))}var ro={T\u00FCrkiye:["Turkey"],Czechia:["Czech Republic"],Eswatini:["Swaziland"],Myanmar:["Burma"],"Ivory Coast":["C\xF4te d\u2019Ivoire","Cote d'Ivoire"],"North Macedonia":["Macedonia"],"Timor-Leste":["East Timor"],Netherlands:["Holland"],"United Kingdom":["UK","Britain","Great Britain","England","Scotland","Wales"],"United States":["USA","US","America"],"United Arab Emirates":["UAE"],"DR Congo":["Democratic Republic of the Congo","Zaire"],"Cape Verde":["Cabo Verde"],"Vatican City":["Vatican"],"South Korea":["Korea"],Russia:["Russian Federation"]},ac=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’']/g,"'").toLowerCase().trim();function oc(n){return[n.name,...ro[n.name]||[],n.properties&&n.properties.name,n.fact&&n.fact.o].filter(Boolean)}function fv(n){as("explore"),$n(),an(),rt=!1,xe.dist>3.4&&De(xe.lat,xe.lon,2.7);let e=[...new Set(_t.filter(a=>a.name).flatMap(a=>oc(a).slice(0,1).concat(ro[a.name]||[],a.properties.name&&a.properties.name!==a.name?[a.properties.name]:[])))].sort();pt(`
    <h2>\u{1F30D} Explore the Globe</h2><p class="mut">Tap a country, or search for one. Turn on map layers below.</p>
    <input type="text" id="srch" list="cl" placeholder="\u{1F50E} Search a country\u2026" autocomplete="off"><datalist id="cl">${e.map(a=>`<option value="${we(a)}">`).join("")}</datalist>
    <div id="info" style="margin-top:12px"></div>
    <h3 style="margin:16px 0 4px">Map layers</h3>
    <div class="tog">Latitude & longitude grid<span class="sw" data-l="grid"></span></div>
    <div class="tog">Equator, tropics & polar circles<span class="sw" data-l="lines"></span></div>
    <div class="tog">Time-zone bands<span class="sw" data-l="tz"></span></div>
    <div class="tog">Big country names<span class="sw" data-l="labels"></span></div>
    <p class="mut" style="font-size:13px;margin-top:12px">You've explored <b id="visN">${Ce.visited.length}</b> countries so far. Explore 25 to earn the Globe Trotter badge!</p>
    <p class="mut" style="font-size:11.5px">Map: Natural Earth via world-atlas. Country facts: mledoze/countries. Flags: flag-icons (MIT).</p>`);let t=()=>{ci(),Hn(ai.grid),dv(ai.labels),ai.lines&&(pc(),Hs(0,ft.prime,"Prime Meridian 0\xB0")),r?o(r,!1):ai.tz&&Gs(no)};At.querySelectorAll(".sw").forEach(a=>{a.classList.toggle("on",ai[a.dataset.l]),a.parentElement.onclick=()=>{ai[a.dataset.l]=!ai[a.dataset.l],a.classList.toggle("on"),ye.click(),t()}});let i=a=>{let l=ac(a);return l?_t.find(c=>oc(c).some(h=>ac(h)===l))||(l.length>=3?_t.find(c=>oc(c).some(h=>ac(h).startsWith(l))):null):null},s=()=>{let a=i(O("#srch").value);a?(o(a),O("#srch").blur()):O("#srch").value.trim()&&ss("\u{1F50E} No country found with that name. Try another spelling.",1800)};O("#srch").onchange=s,O("#srch").onkeydown=a=>{a.key==="Enter"&&s()};let r=null;function o(a,l=!0){if(r=a,Gs((c,h)=>{ai.tz&&no(c,h),c.beginPath(),h(a),c.fillStyle="rgba(255,224,90,.55)",c.fill(),c.strokeStyle="#fff6c0",c.lineWidth=3.5,c.stroke()}),l){let[c,h]=d3.geoCentroid(a),d=Math.sqrt(a.area2)*Nn;De(h,c,nt(1.5+d/22,1.6,3.2))}if(O("#info").innerHTML=gv(a),O("#info").querySelectorAll("[data-k]").forEach(c=>c.onclick=()=>{ye.click(),o(Lr[c.dataset.k])}),a.fact&&!Ce.visited.includes(a.key)){Ce.visited.push(a.key),is(),Ks();let c=O("#visN");c&&(c.textContent=Ce.visited.length)}}nn=a=>{let l=Gn(_t,a.lat,a.lon);l?(ye.click(),o(l)):(r=null,Gs((c,h)=>ai.tz&&no(c,h)),O("#info").innerHTML=`<div class="card pop"><h3>\u{1F30A} ${zr(a.lat,a.lon)}</h3><small>${es(a.lat,a.lon)}. About 71% of Earth\u2019s surface is covered by water!</small></div>`)},t(),n&&Lr[n]&&o(Lr[n])}function no(n,e){for(let t=-12;t<=12;t++){let i=Math.max(-180,t*15-7.5),s=Math.min(180,t*15+7.5),[r]=Dr([i,0]),[o]=Dr([s,0]);n.fillStyle=t%2?"rgba(63,208,255,.13)":"rgba(255,207,63,.10)",n.fillRect(r,0,o-r,Ln),n.fillStyle="rgba(255,255,255,.85)",n.font=`800 ${Math.round(15*en/2048)}px Nunito`,n.textAlign="center";let a=t===0?"UTC":`UTC${t>0?"+":"\u2212"}${Math.abs(t)}`;for(let l of[-40,10,55]){let[c,h]=Dr([t*15,l]);n.fillText(a,c,h)}}}var pv=new Set(["BHR","CYP","EGY","IRN","IRQ","ISR","JOR","KWT","LBN","OMN","PSE","QAT","SAU","SYR","TUR","ARE","YEM"]),mv=new Set(["ARM","AZE","GEO"]);function pd(n){let e=n.s||n.r;return pv.has(n.c3)?`Middle East <span class="mut">(UN region: ${we(e)})</span>`:mv.has(n.c3)?`Caucasus <span class="mut">(UN region: ${we(e)})</span>`:we(e)}function gv(n){let e=n.fact;if(!e)return`<div class="card pop"><h3>${we(n.name)}</h3><small>A territory with a special status. We don\u2019t have a full fact card for it yet.</small></div>`;let[[t,i],[s,r]]=n.bounds,o=r<=0?"Southern":i>=0?"Northern":"Northern & Southern",a=t<=s?t<0&&s>0:!1,l=t>s?"Eastern & Western (crosses 180\xB0)":a?"Eastern & Western":s<=0?"Western":"Eastern",h=Object.values(Ei).filter(m=>m.ind&&m.a).sort((m,g)=>g.a-m.a).indexOf(e)+1,d=(e.b||[]).map(m=>Qu[m]).filter(m=>Lr[m]).map(m=>`<button class="chip" data-k="${m}">${Ei[m].f} ${we(Ei[m].n)}</button>`).join(""),u=[];return i<0&&r>0&&u.push("the Equator"),i<23.44&&r>23.44&&u.push("the Tropic of Cancer"),i<-23.44&&r>-23.44&&u.push("the Tropic of Capricorn"),r>66.56&&u.push("the Arctic Circle"),a&&u.push("the Prime Meridian"),`<div class="card pop">
    <div class="row" style="align-items:center;gap:14px">${Ar(e.c)}<div><h3 style="margin:0;font-size:21px">${we(e.n)}</h3><small>${we(e.o)}${ro[e.n]?` \xB7 also called <b>${we(ro[e.n][0])}</b>`:""}</small></div></div>
    <div class="factgrid">
      <div>\u{1F3DB}\uFE0F Capital</div><div>${we(e.cap.join(", ")||"\u2014")}</div>
      <div>\u{1F310} Region</div><div>${pd(e)}</div>
      <div>\u{1F4D0} Area</div><div>${In(e.a)} km\xB2${e.ind&&h?` <span class="mut">(#${h} biggest)</span>`:""}</div>
      <div>\u{1F5E3}\uFE0F Languages</div><div>${we(e.l.slice(0,4).join(", ")||"\u2014")}</div>
      <div>\u{1F4B0} Currency</div><div>${we(e.cur.join(", ")||"\u2014")}</div>
      <div>\u{1F4CD} Centre</div><div>${es(e.ll[0],e.ll[1])}</div>
      <div>\u{1F9ED} Hemispheres</div><div>${o} \xB7 ${l}</div>
      <div>\u{1F30A} Coast?</div><div>${e.ll2?"No, it is landlocked":"Yes, it touches the sea"}</div>
    </div>
    ${u.length?`<div class="tip" style="font-size:14px">\u2728 ${u.join(", ").replace(/^t/,"T").replace(/, ([^,]*)$/," and $1")} ${u.length>1?"run":"runs"} through ${we(e.n)}!</div>`:""}
    ${d?`<div style="margin-top:10px;font-weight:800">\u{1F91D} Neighbours</div><div>${d}</div>`:`<p class="mut" style="font-size:13.5px">No land neighbours. It's an island or surrounded by sea.</p>`}
  </div>`}function Sc(){as("academy"),$n(),an(),rt=!0,De(20,xe.lon,2.8),pt(`<h2>\u{1F393} Map Academy</h2><p class="mut">8 interactive lessons. Each ends with a quick quiz worth up to 3 \u2B50.</p>
    <div style="display:grid;gap:10px;margin-top:12px">${qi.map((n,e)=>`<button class="card" data-i="${e}"><div class="row" style="justify-content:space-between"><span class="ic">${n.icon}</span>${Qs(Ce.lessons[n.id]||0)}</div><h3>${e+1}. ${n.title}</h3><small>${n.blurb}</small></button>`).join("")}</div>`),At.querySelectorAll("[data-i]").forEach(n=>n.onclick=()=>{ye.click(),ao(qi[+n.dataset.i])})}function ao(n,e){$n();let t=0,i=()=>{an(),rt=!1;let s=n.steps[t];pt(`<div class="row" style="justify-content:space-between"><button class="btn sm" id="lx">\u2715 ${e?"Story":"Lessons"}</button><span class="mut f">${n.icon} ${n.title}</span></div>
      <div class="dots">${n.steps.map((r,o)=>`<i class="${o<=t?"on":""}"></i>`).join("")}<i></i></div>
      <h2>${s.t}</h2>${s.html}<div id="scene"></div>
      <div class="row" style="justify-content:space-between;margin-top:16px"><button class="btn" id="lb" ${t?"":"disabled"}>\u2190 Back</button><button class="btn pri" id="ln">${t<n.steps.length-1?"Next \u2192":"Quiz time! \u{1F9E0}"}</button></div>`,!0),O("#lx").onclick=()=>{ye.click(),e?xn("story"):Sc()},O("#lb").onclick=()=>{ye.click(),t--,i()},O("#ln").onclick=()=>{ye.click(),t<n.steps.length-1?(t++,i()):yv(n,e)},(oo[s.s]||oo.globe)(O("#scene"))};i()}function yv(n,e){an(),rt=!0;let t=0,i=0,s=()=>{let o=n.quiz[t];pt(`<div class="mut f">${n.icon} ${n.title} \xB7 Quiz</div><div class="prog"><i style="width:${t/n.quiz.length*100}%"></i></div>
      <h2>Question ${t+1} of ${n.quiz.length}</h2><p style="font-size:17px;font-weight:800">${o.q}</p>
      <div id="opts">${o.o.map((a,l)=>`<button class="opt" data-k="${l}">${a}</button>`).join("")}</div><div id="fb"></div>`,!0),At.querySelectorAll(".opt").forEach(a=>a.onclick=()=>{let l=+a.dataset.k,c=l===o.a;c&&i++,At.querySelectorAll(".opt").forEach(h=>{h.disabled=!0,+h.dataset.k===o.a&&h.classList.add("ok")}),c||a.classList.add("no"),c?ye.good():ye.bad(),O("#fb").innerHTML=`<div class="fb ${c?"ok":"no"} pop">${c?"\u2705 Correct!":"\u274C Not quite."} ${o.why}</div><button class="btn pri" id="qn" style="width:100%">${t<n.quiz.length-1?"Next question \u2192":"See my stars \u2B50"}</button>`,O("#qn").onclick=()=>{ye.click(),t++,t<n.quiz.length?s():r()}})},r=()=>{let o=Math.round(i/n.quiz.length*3);((Ce.lessons[n.id]||0)<o||!(n.id in Ce.lessons))&&(Ce.lessons[n.id]=Math.max(o,Ce.lessons[n.id]||0)),is(),Ks(),o>=2?ye.fanfare():ye.good();let a=qi.indexOf(n),l=qi[a+1];pt(`<div class="result pop"><div style="font-size:60px">${o===3?"\u{1F3C6}":o===2?"\u{1F389}":"\u{1F44D}"}</div><h2>Lesson complete!</h2><div class="s">${Qs(o)}</div>
      <p>You got <b>${i} of ${n.quiz.length}</b> right.</p>
      ${e?'<button class="btn pri" id="nx" style="width:100%">Continue the story \u2192</button>':`<div class="row" style="justify-content:center"><button class="btn" id="rt">\u21BB Try again</button>${l?`<button class="btn pri" id="nx">Next: ${l.title} \u2192</button>`:'<button class="btn pri" id="nx">Back to Academy</button>'}</div>`}</div>`,!0),e?O("#nx").onclick=()=>e(o):(O("#rt").onclick=()=>ao(n),O("#nx").onclick=()=>l?ao(l):Sc())};s()}function Ja(n,e,t,i,s=1){return`<input type="range" id="${n}" min="${e}" max="${t}" value="${i}" step="${s}">`}function Gu(n){return wi.slice().sort((e,t)=>n(e)-n(t))[0]}function md(n,e=.62){let t=document.createElement("canvas");t.className="flat",n.appendChild(t);let i=n.clientWidth||380,s=Math.min(2,devicePixelRatio||1);t.width=i*s,t.height=i*e*s,t.style.height=i*e+"px";let r=t.getContext("2d");return r.scale(s,s),{c:t,ctx:r,w:i,h:i*e}}function vv(n,e,t){if(n==="mercator"){let s=e/(2*Math.PI);return d3.geoMercator().scale(s).translate([e/2,t/2]).clipExtent([[0,0],[e,t]])}return{ortho:d3.geoOrthographic().rotate([-20,-15]),equirect:d3.geoEquirectangular(),equal:d3.geoEqualEarth(),natural:d3.geoNaturalEarth1()}[n].fitExtent([[4,4],[e-4,t-4]],{type:"Sphere"})}function gd(n,e,t={}){let{ctx:i,w:s,h:r}=n,o=vv(e,s,r),a=d3.geoPath(o,i);i.clearRect(0,0,s,r),i.beginPath(),a({type:"Sphere"}),i.fillStyle="#145a9a",i.fill(),i.beginPath(),a(d3.geoGraticule10()),i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=.6,i.stroke();for(let l of _t)i.beginPath(),a(l),i.fillStyle=t.hl&&t.hl(l)||"#d9c58c",i.fill();if(i.beginPath(),a(rs),i.strokeStyle="rgba(30,40,60,.5)",i.lineWidth=.5,i.stroke(),t.tissot){i.fillStyle="rgba(255,70,90,.55)",i.strokeStyle="#fff",i.lineWidth=.6;for(let l=-75;l<=75;l+=25)for(let c=-150;c<=180;c+=30)i.beginPath(),a(d3.geoCircle().center([c,l]).radius(4.5)()),i.fill(),i.stroke()}if(t.routes)for(let l of t.routes){if(i.beginPath(),i.strokeStyle=l.color,i.lineWidth=3,i.setLineDash(l.dash||[]),l.rhumb){let c=null;for(let h of l.pts){let d=o([h.lon,h.lat]);c&&Math.abs(c.lon-h.lon)>180?i.moveTo(...d):c?i.lineTo(...d):i.moveTo(...d),c=h}}else a({type:"LineString",coordinates:[[l.a.lon,l.a.lat],[l.b.lon,l.b.lat]]});i.stroke(),i.setLineDash([])}if(t.pins)for(let l of t.pins){let c=o([l.lon,l.lat]);c&&(i.beginPath(),i.arc(c[0],c[1],4.5,0,7),i.fillStyle="#fff",i.fill(),i.fillStyle="#fff",i.font="800 11px Nunito",i.fillText(l.n,c[0]+6,c[1]-6))}i.beginPath(),a({type:"Sphere"}),i.strokeStyle="rgba(255,255,255,.5)",i.lineWidth=1.2,i.stroke()}var _v={ortho:"\u{1F310} Globe view",equirect:"Equirectangular",mercator:"Mercator",equal:"Equal Earth",natural:"Natural Earth"};function lc(n,e,t){n.innerHTML=`<div class="seg" id="pseg">${Object.entries(_v).map(([o,a])=>`<button data-p="${o}" class="${o===e?"on":""}">${a}</button>`).join("")}</div>`;let i=md(n),s=e,r=()=>gd(i,s,t);n.querySelectorAll("[data-p]").forEach(o=>o.onclick=()=>{ye.click(),s=o.dataset.p,n.querySelectorAll("[data-p]").forEach(a=>a.classList.toggle("on",a===o)),r()}),r()}function xv(){let n="";for(let i=0;i<360;i+=15){let s=i%45===0,r=s?112:118,o=i*mt;n+=`<line x1="${150+Math.sin(o)*r}" y1="${150-Math.cos(o)*r}" x2="${150+Math.sin(o)*128}" y2="${150-Math.cos(o)*128}" stroke="${s?"#fff":"#8fa6d8"}" stroke-width="${s?3:1.5}"/>`}let e=[["N",0],["NE",45],["E",90],["SE",135],["S",180],["SW",225],["W",270],["NW",315]].map(([i,s])=>{let r=s*mt,o=i.length>1?92:94;return`<text x="${150+Math.sin(r)*o}" y="${156-Math.cos(r)*o}" text-anchor="middle" font-family="Fredoka" font-size="${i.length>1?14:22}" fill="${i==="N"?"#ff6b6b":"#fff"}" font-weight="700">${i}</text>`}).join(""),t=[0,90,180,270].map(i=>{let s=i*mt;return`<text x="${150+Math.sin(s)*141}" y="${155-Math.cos(s)*141}" text-anchor="middle" font-size="11" fill="#ffcf3f" font-weight="800">${i}\xB0</text>`}).join("");return`<svg class="compass" viewBox="-14 -14 328 328" id="csvg"><defs><radialGradient id="cg"><stop offset="0" stop-color="#22336e"/><stop offset="1" stop-color="#0d1838"/></radialGradient></defs>
  <circle cx="150" cy="150" r="132" fill="url(#cg)" stroke="#ffcf3f" stroke-width="4"/>${n}${e}${t}
  <path id="arc" fill="rgba(63,208,255,.25)" stroke="none"/>
  <g id="needle"><path d="M150 52 L163 150 L150 160 L137 150Z" fill="#ff5d5d"/><path d="M150 248 L163 150 L150 140 L137 150Z" fill="#e8eefc"/><circle cx="150" cy="150" r="9" fill="#ffcf3f"/></g></svg>
  <div class="big" id="brg" style="text-align:center">0\xB0</div><div class="f" id="brgn" style="text-align:center;font-size:18px;color:var(--acc2)">North</div>`}var bv=["North","North-North-East","North-East","East-North-East","East","East-South-East","South-East","South-South-East","South","South-South-West","South-West","West-South-West","West","West-North-West","North-West","North-North-West"];function Vu(n,e){n.innerHTML=xv()+'<div id="cmsg"></div>';let t=O("#csvg"),i=0,s=!1,r=a=>{i=(Math.round(a)+360)%360,O("#needle").setAttribute("transform",`rotate(${i} 150 150)`),O("#brg").textContent=i+"\xB0",O("#brgn").textContent=bv[Math.round(i/22.5)%16];let l=i*mt,c=i>180?1:0;O("#arc").setAttribute("d",i?`M150 150 L150 40 A110 110 0 ${c} 1 ${150+Math.sin(l)*110} ${150-Math.cos(l)*110} Z`:"")},o=a=>{let l=t.getBoundingClientRect(),c=(a.clientX-l.left)/l.width*300-150,h=(a.clientY-l.top)/l.height*300-150;r(Math.atan2(c,-h)*Nn)};return t.addEventListener("pointerdown",a=>{s=!0,t.setPointerCapture(a.pointerId),o(a)}),t.addEventListener("pointermove",a=>s&&o(a)),t.addEventListener("pointerup",()=>{s=!1,e&&e(i)}),r(0),r}function Wu(n=8253695){let e=Rt(Array.from({length:200},(t,i)=>new I(Math.cos(i/200*Math.PI*2),0,Math.sin(i/200*Math.PI*2))),n,.006,!0);return t=>{let i=Math.cos(t*mt)*1.005;e.scale.set(i,1,i),e.position.y=Math.sin(t*mt)*1.005}}function mc(n){Gs(e=>{e.fillStyle="rgba(63,208,255,.20)",n==="ns"?(e.fillRect(0,0,en,Ln/2),e.fillStyle="rgba(255,207,63,.16)",e.fillRect(0,Ln/2,en,Ln/2)):(e.fillRect(en/2,0,en/2,Ln),e.fillStyle="rgba(255,207,63,.16)",e.fillRect(0,0,en/2,Ln))})}function qu(n,e,t,i){let s=0,r=0,o=()=>{if(s>=e.length){n.innerHTML=`<div class="fb ok pop">\u{1F389} Great navigating! You found ${r} of ${e.length}.</div>`,ye.fanfare();return}let a=e[s];n.innerHTML=`<div class="card"><div class="mut">Target ${s+1} of ${e.length}</div><div class="big" style="font-size:26px">\u{1F4CD} ${es(a.lat,a.lon)}</div><small>Tap the globe at this spot.</small></div><div id="cgf"></div>`};nn=a=>{if(s>=e.length)return;let l=e[s],c=co(a,l);ci(),Hn(!0),$t(a.lat,a.lon,4182271,"You"),$t(l.lat,l.lon,16764735,l.n||"Target"),Rt(so(a,l),16777215,.0025,!1,.7);let h=c<=t;h?(r++,ye.good()):ye.bad(),O("#cgf").innerHTML=`<div class="fb ${h?"ok":"no"} pop">${h?"\u2705":"\u274C"} You were <b>${In(c)} km</b> away. ${l.n?`That's <b>${l.n}</b>!`:""} ${i||""}</div><button class="btn pri" id="cgn" style="width:100%">${s<e.length-1?"Next target \u2192":"Finish"}</button>`,O("#cgn").onclick=()=>{ye.click(),s++,ci(),Hn(!0),o()}},Hn(!0),o()}var oo={globe(n){rt=!0,De(15,xe.lon,2.7),n.innerHTML=""},proj(n){De(20,20,2.8),lc(n,"ortho",{})},greenland(n){De(45,-20,2.6),oi(_t.filter(e=>e.key==="304"),"rgba(98,240,164,.7)","#fff"),oi(_t.filter(e=>e.fact&&e.fact.r==="Africa"),"rgba(255,179,71,.6)","#fff",!0),lc(n,"mercator",{hl:e=>e.key==="304"?"#62f0a4":e.fact&&e.fact.r==="Africa"?"#ffb347":null})},tissot(n){De(30,0,2.8),lc(n,"mercator",{tissot:!0})},compass(n){De(30,xe.lon,2.9),rt=!0,Vu(n)},compassChallenge(n){rt=!0;let e=Xi([45,135,225,315,90,270]).slice(0,3),t=0,i=()=>O("#cmsg").innerHTML=t<3?`<div class="tip">\u{1F3AF} Target ${t+1}/3: turn to <b>${e[t]}\xB0</b> and let go.</div>`:'<div class="fb ok pop">\u{1F389} All 3 bearings found!</div>';Vu(n,s=>{if(t>=3)return;Math.abs((s-e[t]+540)%360-180)<=6?(ye.good(),t++,i()):(ye.bad(),O("#cmsg").innerHTML=`<div class="fb no">That's ${s}\xB0. Try for <b>${e[t]}\xB0</b>.</div>`,setTimeout(()=>t<3&&i(),1300))}),i()},magnetic(n){De(72,-60,2.5),Hn(!0),$t(90,0,16735581,"\u{1F9CA} Geographic North Pole (90\xB0N)"),$t(85.8,139.3,4182271,"\u{1F9F2} Magnetic north pole (2025 model)"),n.innerHTML='<p class="mut" style="font-size:13.5px">In 2025 the magnetic north pole was at about 85.8\xB0N, 139.3\xB0E, drifting toward Siberia.</p>'},equator(n){De(12,xe.lon,2.8),rt=!0,gn(0,ft.eq,"Equator 0\xB0",.006),mc("ns"),jt("Northern Hemisphere",40,xe.lon+10,"big"),jt("Southern Hemisphere",-40,xe.lon+10,"big"),n.innerHTML=""},latSlider(n,e){De(20,30,2.8),Hn(!0),gn(0,ft.eq,null,.004);let t=Wu();n.innerHTML=`${Ja("ls",-90,90,30)}<div class="big" id="lv" style="text-align:center"></div><div id="li" class="card" style="margin-top:8px"></div>`;let i=jt("",0,30,"pin",!1,1.03),s=()=>{let r=+O("#ls").value;t(r),O("#lv").textContent=r===0?"0\xB0 (Equator)":Math.abs(r)===90?r>0?"90\xB0N North Pole":"90\xB0S South Pole":Yi(r).replace(".0",""),i.v=Wt(r,xe.lon,1.03),i.el.textContent=Yi(r).replace(".0","");let o=Gu(l=>Math.abs(l.lat-r)),a=40075*Math.cos(r*mt);O("#li").innerHTML=`<div class="factgrid" style="margin:0"><div>Distance from Equator</div><div>about ${In(Math.abs(r)*111)} km</div><div>Length of this circle</div><div><b>${In(a)} km</b>${e?` (${Math.round(Math.cos(r*mt)*100)}% of the Equator)`:""}</div><div>Near this latitude</div><div>${o.n} (${Yi(o.lat)})</div></div>`,Yt=null,xe.lat=nt(r*.7,-70,70)};O("#ls").oninput=s,s()},latSlider2(n){oo.latSlider(n,!0)},special(n){De(28,xe.lon,2.9),rt=!0,pc(),n.innerHTML=""},prime(n){De(38,0,2.3),Hs(0,ft.prime,"Prime Meridian 0\xB0",.005),$t(51.48,0,16735581,"Greenwich, London"),n.innerHTML=""},lonSlider(n){De(20,0,2.8),Hn(!0),Hs(0,ft.prime,null,.003),mc("ew");let e=Rt(Or(0,1.005),8253695,.006);n.innerHTML=`${Ja("lo",-180,180,45)}<div class="big" id="lov" style="text-align:center"></div><div id="loi" class="card" style="margin-top:8px"></div>`;let t=()=>{let i=+O("#lo").value;e.rotation.y=i*mt,O("#lov").textContent=i===0?"0\xB0 Prime Meridian":Math.abs(i)===180?"180\xB0":zs(i).replace(".0","");let s=Gu(r=>Math.abs((r.lon-i+540)%360-180));O("#loi").innerHTML=`<div class="factgrid" style="margin:0"><div>Hemisphere</div><div>${i===0||Math.abs(i)===180?"On the dividing line!":i>0?"Eastern":"Western"}</div><div>Near this longitude</div><div>${s.n} (${zs(s.lon)})</div></div>`,Yt=null,xe.lon=i,xe.lat=15};O("#lo").oninput=t,t()},meridians(n){De(55,20,2.7),rt=!0;for(let e=-180;e<180;e+=30)Rt(Or(e),e===0?ft.prime:8253695,.003);$t(90,0,16777215,"North Pole: all meridians meet"),n.innerHTML=""},dateline(n){De(10,180,2.6),Hn(!0);let e=[[90,180],[75,180],[68,-169],[65.5,-169],[53,170],[48,180],[5,180],[5,-155],[-11,-150],[-11,-172],[-16,-172.5],[-45,-172.5],[-51,180],[-90,180]];Rt(e.flatMap((t,i)=>{if(!i)return[];let s={lat:e[i-1][0],lon:e[i-1][1]},r={lat:t[0],lon:t[1]};return so(s,r,20,1.005).slice(i>1?1:0)}),ft.anti,.005),jt("\u25C0 West of the line: one day AHEAD",22,160,"line"),jt("East of the line: one day behind \u25B6",22,-160,"line"),n.innerHTML='<p class="mut" style="font-size:13.5px">The purple line is drawn approximately. Countries can choose which side to be on. Samoa jumped across in 2011!</p>'},coordsFree(n){De(30,xe.lon,2.7),Hn(!0),n.innerHTML='<div class="card" id="cf"><small>Tap the globe\u2026</small></div>',nn=e=>{ci(),$t(e.lat,e.lon,16764735,es(e.lat,e.lon));let t=Gn(_t,e.lat,e.lon);O("#cf").innerHTML=`<div class="big" style="font-size:24px">\u{1F4CD} ${es(e.lat,e.lon)}</div><small>${t?we(t.name):zr(e.lat,e.lon)}</small>`,ye.click()}},coordsNull(n){De(8,5,2.6),gn(0,ft.eq,null),Hs(0,ft.prime,null),qu(n,[{lat:0,lon:0,n:"Null Island (0\xB0, 0\xB0)"}],500)},coordsHunt(n){De(25,0,2.9);let e=Xi(wi.filter(t=>["London","New York","Sydney","Tokyo","Cairo","S\xE3o Paulo"].includes(t.n))).slice(0,3).map(t=>({lat:+t.lat.toFixed(1),lon:+t.lon.toFixed(1),n:t.n}));qu(n,e,700)},tzSpin(n){De(15,0,2.8),rt=!0,dc(0,60),Zs=0,n.innerHTML='<p class="mut">Watch day and night as the globe turns.</p>'},tzBands(n){De(15,0,2.9),Gs(no),Hs(0,ft.prime,null,.003);let e=Rt(Or(0,1.006),16777215,.006);n.innerHTML=`${Ja("tz",-180,180,45)}<div class="big" id="tzv" style="text-align:center"></div><div class="card" id="tzi"></div>`;let t=()=>{let i=+O("#tz").value;e.rotation.y=i*mt,Yt=null,xe.lon=i;let s=i/15,r=((12*60+s*60)%1440+1440)%1440,o=Math.round(s),a=String(Math.floor(r/60)).padStart(2,"0"),l=String(Math.round(r%60)).padStart(2,"0");O("#tzv").textContent=`\u{1F552} ${a}:${l}`,O("#tzi").innerHTML=`<small>At <b>${zs(i)}</b>, Sun time is <b>${Math.abs(s).toFixed(1)} hours ${s>=0?"ahead of":"behind"}</b> Greenwich. Nearest standard zone: <b>UTC${o>=0?"+":"\u2212"}${Math.abs(o)}</b>. (${zs(i).replace("\xB0","").split(".")[0]}\xB0 \xF7 15\xB0 = ${Math.abs(s).toFixed(1)} h)</small>`};O("#tz").oninput=t,t()},gcIntro(n){De(30,30,2.9),rt=!0,gn(0,ft.eq,"Equator: a great circle \u2713",.005),gn(23.44,16747109,"Tropic of Cancer: NOT a great circle \u2717",.003);let e=Wt(51.5,0),t=Wt(35.7,139.7),i=e.clone().cross(t).normalize(),s=e.clone().normalize(),r=i.clone().cross(s);Rt(Array.from({length:240},(o,a)=>{let l=a/240*Math.PI*2;return s.clone().multiplyScalar(Math.cos(l)).add(r.clone().multiplyScalar(Math.sin(l))).multiplyScalar(1.005)}),4182271,.005,!0),jt("Another great circle",70,80,"line"),n.innerHTML=""},gcRoute(n,e){let t=wi.map((s,r)=>`<option value="${r}">${s.n}</option>`).join("");n.innerHTML=`<div class="grid2"><select id="ga">${t}</select><select id="gb">${t}</select></div><div class="card" id="gi" style="margin-top:10px"></div><div id="gflat"></div>`,O("#ga").value=wi.findIndex(s=>s.n===(e?"London":"New York")),O("#gb").value=wi.findIndex(s=>s.n===(e?"Los Angeles":"Doha"));let i=()=>{let s=wi[+O("#ga").value],r=wi[+O("#gb").value];if(ci(),s===r){O("#gi").innerHTML="<small>Pick two different cities.</small>";return}let o=so(s,r);Rt(o,ft.gc,.006),sv(o),$t(s.lat,s.lon,16777215,s.n),$t(r.lat,r.lon,16777215,r.n);let a=co(s,r),l=iv(s,r);e&&Rt(Du(s,r).map(h=>Wt(h.lat,h.lon,1.005)),ft.rhumb,.004);let c=d3.geoInterpolate([s.lon,s.lat],[r.lon,r.lat])(.5);De(c[1],c[0],nt(2+a/9e3,2.2,3.3)),O("#gi").innerHTML=`<div class="factgrid" style="margin:0"><div>\u2708\uFE0F Great circle</div><div><b>${In(a)} km</b> (about ${(a/850+.5).toFixed(1)} h flying)</div>${e?`<div>\u{1F4CF} Rhumb line</div><div><b>${In(l)} km</b>: ${In(l-a)} km longer!</div>`:""}</div>`,e&&(O("#gflat").innerHTML="",gd(md(O("#gflat"),.78),"mercator",{routes:[{rhumb:!0,pts:Du(s,r,300),color:"#ff7a8a"},{a:s,b:r,color:"#ffcf3f"}],pins:[s,r]}))};O("#ga").onchange=O("#gb").onchange=()=>{ye.click(),i()},i()},gcFlat(n){oo.gcRoute(n,!0)},tiltIntro(n){De(0,0,3.2),rt=!0,Zs=0;let e={v:0},t=performance.now(),i=Rt([new I(0,-1.45,0),new I(0,1.45,0)],16777215,.006,!1,.9,li),s=()=>{let r=nt((performance.now()-t)/1500,0,1);li.rotation.z=-23.44*mt*(1-Math.pow(1-r,3)),r<1&&i.parent&&requestAnimationFrame(s)};s(),gn(0,ft.eq,null),ns.push(()=>{li.remove(i),i.geometry.dispose(),li.rotation.z=0}),n.innerHTML='<p class="mut" style="font-size:13.5px">The white line is Earth\u2019s axis, tilted 23.4\xB0.</p>'},season(n){pc(!1),De(25,30,3);let e=Wu(16769126),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=[0,31,59,90,120,151,181,212,243,273,304,334];n.innerHTML=`${Ja("ss",0,364,171)}<div class="ticks">${t.map(o=>`<span>${o}</span>`).join("")}</div><div class="big" id="sv" style="text-align:center;font-size:26px;margin-top:8px"></div><div class="card" id="si"></div>`;let s=null,r=()=>{let o=+O("#ss").value,a=-23.44*Math.cos(2*Math.PI/365*(o+10)),l=xe.lon+55;dc(a,l),e(a),s&&qn.remove(s),s=$t(a,l,16769126,"");let c=11;for(;i[c]>o;)c--;let h=`${o-i[c]+1} ${t[c]}`,d=m=>{let g=-Math.tan(m*mt)*Math.tan(a*mt);return g<=-1?24:g>=1?0:2*Math.acos(g)*Nn/15},u=(m,g)=>{let y=d(g);return`<div>${m} (${Yi(g)})</div><div>${y>=24?"\u2600\uFE0F 24 h daylight!":y<=0?"\u{1F319} 0 h, polar night!":`${Math.floor(y)} h ${Math.round(y%1*60)} min`}</div>`};O("#sv").textContent=`${h} \xB7 Sun overhead at ${Yi(a)}`,O("#si").innerHTML=`<b>Hours of daylight today</b><div class="factgrid" style="margin:6px 0 0">${u("Svalbard",78.2)}${u("Reykjav\xEDk",64.1)}${u("London",51.5)}${u("Doha",25.3)}${u("Singapore",1.35)}${u("Sydney",-33.9)}${u("Antarctica coast",-70)}</div>`};O("#ss").oninput=r,r()}},vn=null;function yd(n){if(n.startsWith("/")){let e=new RegExp(n.slice(1,-1));return t=>e.test(t)}return e=>e===n}function Js(n,e){let t=e.map(yd);return n.filter(i=>i.name&&t.some(s=>s(i.name)))}function lo(n,e){let t=Si[n];return t?`<div class="card pop" style="border-color:rgba(255,207,63,.5)"><h3 style="font-size:20px;margin:0">\u{1F3DB}\uFE0F ${t.title}</h3><small>${t.years} \xB7 Capital: ${t.capital}</small><ul style="margin:10px 0 0;padding-left:20px;line-height:1.5">${t.facts.map(i=>`<li>${i}</li>`).join("")}</ul></div>`:""}async function vd(n){var h;as("history"),$n(),an(),rt=!1;let e=(h=Ce.lastEra)!=null?h:0,t=null,i=null,s=new Set;pt(`<div class="row" style="justify-content:space-between"><h2 style="margin:0">\u23F3 Time Machine</h2>${n?'<button class="btn sm" id="hx">\u2715 Story</button>':""}</div>
    <div class="tabs"><button class="on">\u{1F570}\uFE0F Eras</button><button id="toEmp">\u{1F451} Empire timelines</button></div>
    <div class="yearbig" id="yr"></div>
    <input type="range" id="era" min="0" max="${Ct.length-1}" value="${e}" step="1">
    <div class="ticks">${[0,11,21,Ct.length-1].map(d=>`<span>${Xt(Ct[d].y)}</span>`).join("")}</div>
    <div class="row" style="justify-content:center;margin:10px 0"><button class="btn sm" id="ep">\u25C0 Earlier</button><button class="btn sm blue" id="pl">\u25B6 Play</button><button class="btn sm" id="en">Later \u25B6</button></div>
    ${n?'<div id="sprog" class="tip"></div>':""}
    <p id="blurb" style="font-size:15px"></p>
    <div style="font-weight:800;margin-top:6px">\u2728 Famous empires & states in this era</div><div id="chips"></div>
    <div id="hinfo" style="margin-top:10px"></div>
    <div class="tog" style="margin-top:10px">Show today\u2019s borders<span class="sw" id="tb"></span></div>
    <p class="mut" style="font-size:12.5px;margin-top:10px">Historical borders are approximate, and some areas were not ruled by any state. Map data: historical-basemaps (A. Ourednik).</p>`,!0),n&&(O("#hx").onclick=()=>{a(),xn("story")}),O("#toEmp").onclick=()=>{ye.click(),xn("empires")};let r=!1,o=()=>{Gs((d,u)=>{if(r){d.strokeStyle="rgba(255,255,255,.75)",d.lineWidth=1.2;for(let m of _t)d.beginPath(),u(m),d.stroke()}if(i)for(let m of i.feats)d.beginPath(),u(m),d.fillStyle="rgba(255,230,110,.45)",d.fill(),d.strokeStyle="#fff6c0",d.lineWidth=3.5,d.stroke()})};O("#tb").parentElement.onclick=()=>{r=!r,O("#tb").classList.toggle("on",r),o()};let a=()=>{clearInterval(t),t=null;let d=O("#pl");d&&(d.textContent="\u25B6 Play")};ns.push(a);let l=async(d,u=!1)=>{e=nt(d,0,Ct.length-1),Ce.lastEra=e;let m=Ct[e];O("#era").value=e,O("#yr").textContent=Xt(m.y),O("#blurb").innerHTML=m.blurb,O("#hinfo").innerHTML="";let g=await Ws(m.key);if(Ct[e]!==m||!O("#era")||!O("#chips"))return;vn=g,uo(g,m.key),i=null,o(),Ce.eras.includes(m.key)||(Ce.eras.push(m.key),is(),Ks()),s.add(m.key);let y=m.f.map(([p,f])=>({id:p,feats:Js(g,f)})).filter(p=>p.feats.length);if(O("#chips").innerHTML=y.map((p,f)=>`<button class="chip" data-k="${f}">${Si[p.id].title}</button>`).join(""),O("#chips").querySelectorAll("[data-k]").forEach(p=>p.onclick=()=>{ye.click(),a(),c(y[+p.dataset.k],p)}),n){let p=s.size;O("#sprog").innerHTML=p>=5?`\u2705 You visited ${p} eras! <button class="btn sm pri" id="sdone">Complete chapter \u2192</button>`:`\u{1F989} Visit ${5-p} more era${5-p>1?"s":""} to finish this chapter.`;let f=O("#sdone");f&&(f.onclick=()=>{a(),n()})}if(u&&y[0]){let[p,f]=d3.geoCentroid(y[0].feats.sort((S,v)=>v.area2-S.area2)[0]);De(f,p,2.9)}},c=(d,u)=>{i=d,o(),O("#chips").querySelectorAll(".chip").forEach(p=>p.classList.toggle("on",p===u));let m=d.feats.slice().sort((p,f)=>f.area2-p.area2)[0],[g,y]=d3.geoCentroid(m);De(y,g,nt(1.8+Math.sqrt(m.area2)*Nn/25,2,3.2)),O("#hinfo").innerHTML=lo(d.id)};O("#era").oninput=()=>{a(),l(+O("#era").value),ye.click()},O("#ep").onclick=()=>{a(),ye.click(),l(e-1,!0)},O("#en").onclick=()=>{a(),ye.click(),l(e+1,!0)},O("#pl").onclick=()=>{if(ye.click(),t)return a();O("#pl").textContent="\u23F8 Pause",e>=Ct.length-1&&l(0,!0),t=setInterval(()=>{if(e>=Ct.length-1)return a();l(e+1,!0)},3200)},nn=d=>{if(!vn)return;let u=Ct[e],m=Gn(vn,d.lat,d.lon);if(!m||!m.name){i=null,o(),O("#hinfo").innerHTML=`<div class="card pop"><small>${Gn(_t,d.lat,d.lon)?"No named state is recorded here in this map. People lived here in smaller groups, or we simply don\u2019t know the borders.":"\u{1F30A} "+zr(d.lat,d.lon)}</small></div>`;return}ye.click();let g=u.f.find(([y,p])=>p.map(yd).some(f=>f(m.name)));i={feats:g?Js(vn,g[1]):[m]},o(),O("#hinfo").innerHTML=g?lo(g[0]):`<div class="card pop"><h3 style="margin:0">${we(m.name)}</h3><small>A state or people in ${Xt(u.y)}.</small></div>`},De(30,40,2.9),await l(e,!0)}var _d=[{id:"find",icon:"\u{1F50E}",name:"Find It!",d:"A country is named. Tap it on the globe."},{id:"capital",icon:"\u{1F3D9}\uFE0F",name:"Capital Clash",d:"Pick the right capital city."},{id:"flags",icon:"\u{1F6A9}",name:"Flag Flash",d:"Whose flag is this?"},{id:"coords",icon:"\u{1F3AF}",name:"Coordinate Hunter",d:"Pin a latitude & longitude on the globe."},{id:"hemi",icon:"\u{1F9ED}",name:"Hemisphere Sort",d:"North or South? East or West?"},{id:"empire",icon:"\u{1F3DB}\uFE0F",name:"Empire Detective",d:"Name the empire glowing on the map."}],gc="easy",Ka=0;function yc(){as("missions"),$n(),an(),rt=!0,De(20,xe.lon,2.8),pt(`<h2>\u{1F3AF} Missions</h2><p class="mut">Quiz games with 10 rounds each. Get 9+ right for \u2B50\u2B50\u2B50.</p>
    <div class="seg" id="dseg">${["easy","medium","hard"].map(n=>`<button data-d="${n}" class="${n===gc?"on":""}">${{easy:"\u{1F7E2} Easy",medium:"\u{1F7E1} Medium",hard:"\u{1F534} Hard"}[n]}</button>`).join("")}</div>
    <div class="grid2">${_d.map(n=>{let e=Ce.missions[n.id]||{};return`<button class="card" data-m="${n.id}"><span class="ic">${n.icon}</span><h3>${n.name}</h3><small>${n.d}</small><div style="margin-top:6px">${Qs(e.stars||0)} ${e.best?`<small style="display:inline">Best ${e.best}</small>`:""}</div></button>`}).join("")}</div>`),At.querySelectorAll("[data-d]").forEach(n=>n.onclick=()=>{gc=n.dataset.d,At.querySelectorAll("[data-d]").forEach(e=>e.classList.toggle("on",e===n)),ye.click()}),At.querySelectorAll("[data-m]").forEach(n=>n.onclick=()=>{ye.click(),wc(n.dataset.m)})}function $u(n){let e={easy:45e4,medium:7e4,hard:1500}[n];return _t.filter(t=>t.fact&&t.fact.ind&&t.fact.a>=e&&t.name!=="Antarctica")}async function wc(n,e){$n(),an(),rt=!1;let t=++Ka,i=_d.find(U=>U.id===n),s=n==="empire"?8:10,r=0,o=0,a=0,l=0,c=null,h=0,d=!1,u=null,m=e?"easy":gc,g=$u(m);(n==="capital"||n==="flags")&&(g=$u(m==="easy"?"medium":m).filter(U=>U.fact.cap.length)),n==="hemi"&&(g=g.filter(U=>{let[[A,L],[F,X]]=U.bounds;return A<=F&&(X<-1||L>1)&&(F<-1||A>1)}));let y=new Set,p=()=>{let U,A=0;do U=Ir(g);while(y.has(U.key)&&A++<50);return y.add(U.key),U},f=()=>{clearInterval(c),c=null};ns.push(f);let S=()=>`<div class="row" style="justify-content:space-between"><button class="btn sm" id="mx">\u2715 Quit</button><span class="f">${i.icon} ${i.name}</span></div>
    <div class="hudrow" style="margin-top:10px"><span>Round ${r+1}/${s}</span><span>\u{1F525} ${l}</span><span>\u2B50 ${a}</span></div><div class="timer"><i id="tb" style="width:100%"></i></div>`,v=()=>O("#mx").onclick=()=>{f(),e?xn("story"):yc()},T=(U,A)=>{f(),h=U;let L=performance.now();c=setInterval(()=>{h=U-(performance.now()-L)/1e3;let F=O("#tb");F&&(F.style.width=nt(h/U*100,0,100)+"%"),h<=0&&(f(),A())},100)},P=(U,A,L=100)=>{d||(d=!0,f(),U?(o++,l++,a+=L+Math.max(0,Math.round(h*5))+(l>=3?25:0),ye.good()):(l=0,ye.bad()),O("#mfb").innerHTML=`<div class="fb ${U?"ok":"no"} pop">${U?"\u2705 ":"\u274C "}${A}</div><button class="btn pri" id="mn" style="width:100%">${r<s-1?"Next \u2192":"Finish \u{1F3C1}"}</button>`,O("#mn").onclick=()=>{ye.click(),r++,r<s?V():Z()},At.querySelectorAll(".opt").forEach(F=>F.disabled=!0))},C=U=>U.map((A,L)=>`<button class="opt" data-k="${L}">${A}</button>`).join(""),w=(U,A,L)=>At.querySelectorAll(".opt").forEach(F=>F.onclick=()=>{let X=+F.dataset.k,$=U[X]===A;At.querySelectorAll(".opt").forEach(q=>{U[+q.dataset.k]===A&&q.classList.add("ok")}),$||F.classList.add("no"),L($)}),D=(U,A="rgba(255,224,90,.6)")=>{oi([U],A);let[L,F]=d3.geoCentroid(U);De(F,L,nt(1.7+Math.sqrt(U.area2)*Nn/22,1.8,3))},x=(U,A,L=3)=>Xi(g.filter(F=>F!==U&&(F.fact.r===U.fact.r||Math.random()<.25))).map(A).filter((F,X,$)=>F&&F!==A(U)&&$.indexOf(F)===X).slice(0,L),E={find(){u=p(),Cr(),kr=!0,ci(),pt(S()+`<div class="card" style="margin-top:12px;text-align:center"><div class="mut">Find this country on the globe:</div>${Ar(u.fact.c,"flag flagbig")}<div class="big">${we(u.name)}</div><small>${pd(u.fact)}</small></div><div id="mfb"></div>`),nn=U=>{if(d)return;let A=Gn(_t,U.lat,U.lon);if(!A){ss("\u{1F30A} That\u2019s water! Try again.",1200);return}let L=A===u;if(L||oi([A],"rgba(255,93,115,.55)","#ffd0d6"),oi([u],"rgba(62,224,143,.6)","#e6ffef",!L),!L){let[F,X]=d3.geoCentroid(u);De(X,F)}P(L,L?`Yes! That's ${we(u.name)}.`:`That's ${we(A.name)}. ${we(u.name)} is glowing green.`)},T(25,()=>{D(u,"rgba(62,224,143,.6)"),P(!1,`Time's up! Here's ${we(u.name)}.`)})},capital(){u=p(),D(u);let U=u.fact.cap[0],A=Xi([U,...x(u,L=>L.fact.cap[0])]);pt(S()+`<div class="row" style="margin-top:12px;gap:12px">${Ar(u.fact.c)}<div><div class="mut">What is the capital of\u2026</div><div class="big" style="font-size:26px">${we(u.name)}?</div></div></div>${C(A.map(we))}<div id="mfb"></div>`),w(A.map(we),we(U),L=>P(L,`The capital of ${we(u.name)} is <b>${we(U)}</b>.`)),T(20,()=>{At.querySelectorAll(".opt").forEach(L=>{L.textContent===U&&L.classList.add("ok")}),P(!1,`Time's up! It's <b>${we(U)}</b>.`)})},flags(){u=p(),Cr();let U=u.name,A=Xi([U,...x(u,L=>L.name)]);pt(S()+`<div style="text-align:center;margin-top:12px"><div class="mut">Whose flag is this?</div>${Ar(u.fact.c,"flag flagbig")}</div>${C(A.map(we))}<div id="mfb"></div>`),w(A.map(we),we(U),L=>{D(u),P(L,`That's the flag of <b>${we(U)}</b> (capital: ${we(u.fact.cap[0]||"\u2014")}).`)}),T(15,()=>{D(u),P(!1,`Time's up! It's <b>${we(U)}</b>.`)})},coords(){u=p(),Cr(),ci(),Hn(!0),kr=!0;let U={lat:Math.round(u.fact.ll[0]),lon:Math.round(u.fact.ll[1])};pt(S()+`<div class="card" style="margin-top:12px;text-align:center"><div class="mut">Tap the globe at:</div><div class="big">\u{1F4CD} ${es(U.lat,U.lon).replace(/\.0/g,"")}</div><small>Within 800 km scores. Closer = more points!</small></div><div id="mfb"></div>`),nn=A=>{if(d)return;let L=co(A,U);$t(A.lat,A.lon,4182271,"You"),$t(U.lat,U.lon,16764735,"\u{1F3AF}"),Rt(so(A,U),16777215,.003,!1,.8),oi([u],"rgba(255,224,90,.35)"),P(L<=800,`${In(L)} km away. The target is in <b>${we(u.name)}</b>.`,Math.max(0,Math.round(150-L/8)))},T(30,()=>{$t(U.lat,U.lon,16764735,"\u{1F3AF}"),De(U.lat,U.lon),P(!1,`Time's up! It was in ${we(u.name)}.`)})},hemi(){u=p(),Cr(),ci(),De(15,xe.lon,3.3);let[[U,A],[L,F]]=u.bounds,X=`${A>0?"North":"South"} & ${U>0?"East":"West"}`,$=["North & East","North & West","South & East","South & West"];pt(S()+`<div class="row" style="margin-top:12px;gap:12px">${Ar(u.fact.c)}<div><div class="mut">Which hemispheres is it in?</div><div class="big" style="font-size:26px">${we(u.name)}</div></div></div>${C($)}<div id="mfb"></div>`),w($,X,q=>{gn(0,ft.eq,null,.005),Hs(0,ft.prime,null,.005),mc("ns"),oi([u],"rgba(255,224,90,.7)","#fff",!0);let[j,J]=d3.geoCentroid(u);De(J,j,3),P(q,`${we(u.name)} is in the <b>${X.replace("North","Northern").replace("South","Southern").replace("East","Eastern").replace("West","Western")}</b> hemispheres.`)}),T(15,()=>P(!1,`Time's up! It's <b>${X}</b>.`))},async empire(){pt(S()+'<p class="mut">Travelling through time\u2026</p>');let U,A,L,F=0;do{U=Ir(Ct.filter(Y=>Y.y<1990)),L=await Ws(U.key);let G=U.f.map(([Y,se])=>({id:Y,feats:Js(L,se)})).filter(Y=>Y.feats.length&&!y.has(Y.id+U.key));if(A=Ir(G),t!==Ka)return}while(!A&&F++<20);if(t!==Ka)return;y.add(A.id+U.key),vn=L,uo(L,U.key),oi(A.feats,"rgba(255,230,110,.55)","#fff6c0");let X=A.feats.slice().sort((G,Y)=>Y.area2-G.area2)[0],[$,q]=d3.geoCentroid(X);De(q,$,2.9);let j=Si[A.id].title,J=[...new Set([...U.f.map(G=>Si[G[0]].title),...Xi(Object.values(Si).map(G=>G.title))])].filter(G=>G!==j),oe=Xi([j,...J.slice(0,3)]);pt(S()+`<div class="card" style="margin-top:12px;text-align:center"><div class="mut">The year is</div><div class="yearbig">${Xt(U.y)}</div><b>Which empire or state is glowing?</b></div>${C(oe.map(we))}<div id="mfb"></div>`),w(oe.map(we),we(j),G=>P(G,`It's the <b>${j}</b> (${Si[A.id].years}). ${Si[A.id].facts[0]}`)),v(),T(20,()=>P(!1,`Time's up! It's the <b>${j}</b>.`))}},V=async()=>{d=!1,nn=null,await E[n](),t===Ka&&O("#mx")&&v()},Z=()=>{f(),nn=null,kr=!1;let U=o>=s*.9?3:o>=s*.6?2:o>=s*.3?1:0,A=Ce.missions[n]||{};Ce.missions[n]={best:Math.max(A.best||0,a),stars:Math.max(A.stars||0,U)},is(),Ks(),U>=2?ye.fanfare():ye.good(),an(),rt=!0,pt(`<div class="result pop"><div style="font-size:60px">${U===3?"\u{1F3C6}":U===2?"\u{1F389}":U?"\u{1F44D}":"\u{1F4AA}"}</div><h2>${i.name} complete!</h2><div class="s">${Qs(U)}</div>
      <p><b>${o}/${s}</b> correct \xB7 Score <b>${a}</b>${a>=(A.best||0)&&a?" \xB7 \u{1F38A} New best!":""}</p>
      ${e?'<button class="btn pri" id="nx" style="width:100%">Continue the story \u2192</button>':'<div class="row" style="justify-content:center"><button class="btn" id="rt">\u21BB Play again</button><button class="btn pri" id="nx">More missions</button></div>'}</div>`),e?O("#nx").onclick=()=>e(U):(O("#rt").onclick=()=>wc(n),O("#nx").onclick=yc)};V()}var sn=window.AQTTS||null,Te={ok:!!sn||typeof speechSynthesis!="undefined"&&typeof SpeechSynthesisUtterance!="undefined",on:!0,voice:null};try{Te.on=localStorage.getItem("aq.voice")!=="0"}catch(n){}Te.rate=1;Te.pref=null;try{Te.rate=+localStorage.getItem("aq.rate")||.95,Te.pref=localStorage.getItem("aq.vname")}catch(n){}function Xu(n){let e=n.name,t=0;return/natural|neural/i.test(e)&&(t+=60),/premium|enhanced/i.test(e)&&(t+=50),/online/i.test(e)&&(t+=25),/^Google/i.test(e)&&(t+=35),/Samantha|Daniel|Karen|Moira|Serena|Ava|Zoe|Evan|Nathan|Allison|Susan|Tom|Kate|Oliver|Arthur|Martha|Libby|Sonia|Ryan|Aria|Jenny|Guy|Emma|Brian|Andrew|Ava/i.test(e)&&(t+=15),/eSpeak|espeak|Compact|Desktop|Zira|David|Mark|Fred|Albert|Bad News|Bells|Boing|Bubbles|Cellos|Jester|Organ|Trinoids|Whisper|Zarvox|Wobble|Superstar|Junior|Ralph|Kathy|Princess|Grandma|Grandpa|Rocko|Shelley|Flo|Eddy|Reed|Sandy/i.test(e)&&(t-=40),/en[-_](GB|US)/i.test(n.lang)&&(t+=5),t}function xd(){try{return speechSynthesis.getVoices().filter(n=>/^en([-_]|$)/i.test(n.lang)).sort((n,e)=>Xu(e)-Xu(n)||n.name.localeCompare(e.name))}catch(n){return[]}}function Mv(){let n=xd();Te.voice=Te.pref&&n.find(e=>e.name===Te.pref)||n[0]||null}function bd(){if(sn&&sn.disabled&&sn.disabled())return'<div class="card" id="vset" style="margin-top:10px"><h3 style="margin:0 0 6px">\u{1F399}\uFE0F Narrator voice</h3><p class="mut" style="font-size:13.5px;margin:0">The voice was switched off because the phone\u2019s voice engine seemed to crash the app. Stories play as text instead.</p><button class="btn sm" id="vre" style="margin-top:8px">Try the voice again</button></div>';if(sn)return`<div class="card" id="vset" style="margin-top:10px"><h3 style="margin:0 0 6px">\u{1F399}\uFE0F Narrator voice</h3>
    <div style="font-weight:800">Speed <span id="vrv" class="mut">${Te.rate.toFixed(2)}\xD7</span></div><input type="range" id="vrate" min="0.75" max="1.15" step="0.05" value="${Te.rate}">
    <button class="btn blue sm" id="vtest" style="margin-top:6px">\u25B6 Test the voice</button>
    <p class="mut" style="font-size:13px;margin:10px 0 0">The app uses the tablet\u2019s own text-to-speech voice. To change it, open the tablet\u2019s <b>Settings</b> and search for <b>\u201CText-to-speech\u201D</b>. There you can pick the engine, the voice and download better English voices.</p></div>`;let n=xd(),e=n[0],t=navigator.userAgent,i=/iPhone|iPad|Macintosh/.test(t),s=/Edg\//.test(t),r=i?"On iPhone, iPad or Mac you can download even better voices: <b>Settings \u2192 Accessibility \u2192 Spoken Content \u2192 Voices \u2192 English</b>, then pick one marked <b>Enhanced</b> or <b>Premium</b> (Siri-style voices work best). Reload this page afterwards.":s?"You are in Microsoft Edge \u{1F44D}. Look for voices with <b>\u201CNatural\u201D</b> in the name. They sound the most human.":"Tip: the most human-sounding free voices are the <b>\u201CNatural\u201D</b> voices in <b>Microsoft Edge</b>, and the <b>Google</b> voices in Chrome.";return`<div class="card" id="vset" style="margin-top:10px"><h3 style="margin:0 0 6px">\u{1F399}\uFE0F Narrator voice</h3>
    ${n.length?`<select id="vsel">${n.map(o=>`<option value="${we(o.name)}" ${Te.voice&&o.name===Te.voice.name?"selected":""}>${o===e?"\u2B50 ":""}${we(o.name.replace(/^Microsoft /,""))} (${o.lang})</option>`).join("")}</select>
    <div style="margin-top:10px;font-weight:800">Speed <span id="vrv" class="mut">${Te.rate.toFixed(2)}\xD7</span></div><input type="range" id="vrate" min="0.75" max="1.15" step="0.05" value="${Te.rate}">
    <button class="btn blue sm" id="vtest" style="margin-top:6px">\u25B6 Test this voice</button>`:'<p class="mut">No voices found yet. Some browsers load them after a moment, so try reopening this panel.</p>'}
    <p class="mut" style="font-size:13px;margin:10px 0 0">${r}</p></div>`}function Md(){let n=O("#vre");n&&(n.onclick=()=>{try{sn.enableVoice(),sn.initTts()}catch(t){}ss("Voice switched back on. Open a journey to hear it.")});let e=O("#vsel");if(!e&&sn&&O("#vrate")){O("#vrate").oninput=()=>{Te.rate=+O("#vrate").value,O("#vrv").textContent=Te.rate.toFixed(2)+"\xD7";try{localStorage.setItem("aq.rate",Te.rate)}catch(t){}},O("#vtest").onclick=()=>{Te.on=!0,Vs("In 1325, a young man named Ibn Battuta set off from Tangier. He would travel the world for twenty-four years!")};return}e&&(e.onchange=()=>{Te.pref=e.value;try{localStorage.setItem("aq.vname",e.value)}catch(t){}Mv(),Te.ok=!0,Te.on=!0,Vs("Hello explorer! I will be your storyteller.")},O("#vrate").oninput=()=>{Te.rate=+O("#vrate").value,O("#vrv").textContent=Te.rate.toFixed(2)+"\xD7";try{localStorage.setItem("aq.rate",Te.rate)}catch(t){}},O("#vtest").onclick=()=>{Te.ok=!0,Te.on=!0,Vs("In 1325, a young man named Ibn Battuta set off from Tangier. He would travel the world for twenty-four years!")})}var Pr=0;function ji(){Pr++;try{sn?sn.stop():Te.ok&&speechSynthesis.cancel()}catch(n){}}function Vs(n,e){ji();let t=Pr,i=!1,s=()=>{i||t!==Pr||(i=!0,e&&e())},r=n.replace(/<[^>]+>/g,"").replace(/[“”"]/g,"").replace(/°/g," degrees ").replace(/(\d),(\d{3})/g,"$1$2"),o=r.split(/\s+/).length;if(!Te.ok||!Te.on){setTimeout(s,Math.max(4e3,o*320));return}if(sn){try{if(!sn.ready())throw 0;let g="u"+t,y=setTimeout(s,o*650+6e3);window.__aqTtsDone=p=>{p===g&&(clearTimeout(y),setTimeout(s,300))},sn.speak(r,Te.rate,g)}catch(g){setTimeout(s,Math.max(4e3,o*320))}return}let a=r.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[r],l=0,c=!1,h=setTimeout(s,o*560+5e3),d=!1,u=()=>{d||t!==Pr||(d=!0,clearTimeout(h),Te.ok=!1,ji(),ss("\u{1F507} Voice isn\u2019t available in this browser. Showing text instead."),setTimeout(()=>e&&e(),Math.max(4e3,o*320)))};setTimeout(()=>{c||u()},3e3);let m=()=>{if(t!==Pr)return;if(l>=a.length){clearTimeout(h),setTimeout(s,400);return}let g=new SpeechSynthesisUtterance(a[l++].trim());Te.voice?(g.voice=Te.voice,g.lang=Te.voice.lang):g.lang="en-GB",g.rate=Te.rate,g.pitch=1,g.onstart=()=>{c=!0},g.onend=m,g.onerror=y=>{y&&(y.error==="interrupted"||y.error==="canceled")||(c?m():u())};try{speechSynthesis.speak(g)}catch(y){m()}};m()}var Sd=(n,e=1)=>`rgba(${n>>16&255},${n>>8&255},${n&255},${e})`;function wd(n){let e=[],t=[],i=[],s=r=>({lat:r[0],lon:r[1]});for(let r of n.stops){if(r.v){i.push(s(r.v));continue}if(e.length){let o=[s(e[e.length-1].ll),...i,s(r.ll)],a=[],l=0;for(let c=1;c<o.length;c++){let h=o[c-1],d=o[c],u=co(h,d);if(l+=u,u<1)continue;let m=nt(Math.round(u/70),6,220),g=d3.geoInterpolate([h.lon,h.lat],[d.lon,d.lat]);for(let y=a.length?1:0;y<=m;y++){let[p,f]=g(y/m);a.push(Wt(f,p,1.006))}}t.push({pts:l>5?a:null,km:l,mode:r.m||n.icon})}e.push(r),i=[]}return{stops:e,segs:t,total:t.reduce((r,o)=>r+o.km,0)}}function Sv(n){let e=n.clone().normalize();return{lat:Math.asin(nt(e.y,-1,1))*Nn,lon:Math.atan2(-e.z,e.x)*Nn}}function wv(){try{_n&&_n.initTts&&_n.initTts()}catch(n){}as("journeys"),$n(),an(),rt=!0,De(25,60,3);for(let n of wr)for(let e of wd(n).segs)e.pts&&Rt(e.pts,n.color,.0028,!1,.75);Ce.journeys=Ce.journeys||{},pt(`<h2>\u{1F9ED} Great Journeys</h2><p class="mut">Real adventures of famous travellers and geographers. Watch each route draw itself on the globe, listen to the story, and answer questions along the way.</p>
    <div style="display:grid;gap:10px;margin-top:12px">${wr.map((n,e)=>`<button class="card" data-i="${e}" style="border-left:4px solid ${Sd(n.color)}"><div class="row" style="gap:12px;flex-wrap:nowrap"><span class="jicon">${n.icon}</span><div style="flex:1;min-width:0"><div class="row" style="justify-content:space-between"><h3 style="margin:0">${n.name}</h3>${Qs(Ce.journeys[n.id]||0)}</div><small>${n.tag} \xB7 ${n.years}</small></div></div></button>`).join("")}</div>
    ${Te.ok?bd():'<p class="tip" style="font-size:13.5px;margin-top:12px">\u{1F507} This browser has no built-in voice, so the stories will play as text.</p>'}`),Md(),At.querySelectorAll("[data-i]").forEach(n=>n.onclick=()=>{ye.click(),Ed(wr[+n.dataset.i])})}var Ji=0;function Ed(n){$n(),an(),rt=!1;let e=++Ji;ns.push(()=>{Ji++,ji()});let{stops:t,segs:i,total:s}=wd(n),r={i:-1,phase:"intro",paused:!1,correct:0,asked:0,pending:null,skip:null,histOn:!0,label:null,trav:null};i.forEach(w=>{w.pts&&(Rt(w.pts,n.color,.0022,!1,.2),w.mesh=Rt(w.pts,n.color,.0055),w.mesh.geometry.setDrawRange(0,0))});let o=Ct.reduce((w,D)=>Math.abs(D.y-n.era)<Math.abs(w.y-n.era)?D:w,Ct[0]),a=async()=>{if(r.histOn){let w=await Ws(o.key);if(e!==Ji)return;vn=w,uo(w,o.key)}else vc()};De(t[0].ll[0],t[0].ll[1],2.7);let l=new yt(new kn(.013,14,10),new fn({color:16777215}));l.visible=!1,qn.add(l);let c=()=>e===Ji,h=`linear-gradient(135deg,${Sd(n.color,.38)},rgba(20,30,70,.6))`,d=()=>Te.ok?`<button class="btn sm" id="jv" title="Narration voice">${Te.on?"\u{1F50A} Voice on":"\u{1F507} Voice off"}</button>`:"",u=()=>{let w=O("#jv");w&&(w.onclick=()=>{Te.on=!Te.on;try{localStorage.setItem("aq.voice",Te.on?"1":"0")}catch(D){}w.textContent=Te.on?"\u{1F50A} Voice on":"\u{1F507} Voice off",ye.click(),r.phase==="narrate"&&!r.paused?p():Te.on||ji()})};try{_n&&_n.initTts&&_n.initTts()}catch(w){}function m(){pt(`<div class="row" style="justify-content:space-between"><button class="btn sm" id="jx">\u2715 Journeys</button>${d()}</div>
      <div class="jstage" style="background:${h};margin-top:12px"><span class="jemoji">${n.icon}</span><div><div class="f" style="font-size:26px;line-height:1.1">${n.name}</div><div class="mut" style="color:#dfe8ff">${n.years} \xB7 ${n.who}</div></div></div>
      <p style="font-size:16px">${n.intro}</p>
      <div class="factgrid"><div>\u{1F5FA}\uFE0F Starts in</div><div>${n.from}</div><div>\u{1F4CF} Distance</div><div>${n.km}</div><div>\u{1F4CD} Stops</div><div>${t.length}</div><div>\u2753 Questions</div><div>${t.filter(w=>w.q).length} along the way</div></div>
      <div class="tog">Show the world\u2019s borders around ${Xt(o.y)}<span class="sw ${r.histOn?"on":""}" id="jh"></span></div>
      <button class="btn pri" id="jgo" style="width:100%;margin-top:14px;font-size:17px">\u25B6 Start the journey</button>
      ${Te.ok?`<details style="margin-top:10px"><summary class="mut" style="cursor:pointer;font-weight:800">\u{1F399}\uFE0F Choose the narrator voice</summary>${bd()}</details>`:""}`,!0),Md(),O("#jx").onclick=()=>xn("journeys"),u(),O("#jh").parentElement.onclick=()=>{r.histOn=!r.histOn,O("#jh").classList.toggle("on",r.histOn),a()},O("#jgo").onclick=()=>{ye.click(),f(0)}}function g(w,D){let x=r.i;return`<div class="row" style="justify-content:space-between"><button class="btn sm" id="jx">\u2715 Journeys</button><span class="mut f">${n.icon} ${n.name}</span></div>
      <div class="prog"><i style="width:${(x+(r.phase==="travel"?.5:0))/(t.length-1)*100}%"></i></div>
      <div class="hudrow"><span>Stop ${x+1} of ${t.length}</span><span>${r.asked?`\u2705 ${r.correct}/${r.asked}`:""}</span></div>
      <div class="jstage" style="background:${h}"><span class="jemoji">${w.e}</span><div style="min-width:0"><div class="chip" style="background:rgba(0,0,0,.35)">${w.y}</div><div class="f" style="font-size:23px;line-height:1.15;margin-top:4px">${w.p}</div>${D?`<div class="jcap">${D}</div>`:""}</div></div>
      <p id="jt" style="font-size:16px;line-height:1.55">${w.t}</p><div id="jq"></div>
      <div class="row jctl" style="justify-content:center;margin-top:10px"><button class="btn sm" id="jr" title="Replay">\u23EE Replay</button><button class="btn sm blue" id="jp">${r.paused?"\u25B6 Play":"\u23F8 Pause"}</button><button class="btn sm" id="jn" title="Skip">Next \u23ED</button>${d()}</div>`}function y(){O("#jx").onclick=()=>xn("journeys"),u(),O("#jr").onclick=()=>{ye.click(),(r.phase==="narrate"||r.phase==="wait")&&(r.paused=!1,O("#jp").textContent="\u23F8 Pause",p())},O("#jp").onclick=()=>{if(ye.click(),r.paused=!r.paused,O("#jp").textContent=r.paused?"\u25B6 Play":"\u23F8 Pause",r.paused)ji();else if(r.phase==="narrate")p();else if(r.pending){let w=r.pending;r.pending=null,w()}},O("#jn").onclick=()=>{ye.click(),r.phase==="narrate"||r.phase==="wait"?(ji(),r.paused=!1,S()):r.phase==="travel"&&r.skip&&r.skip()}}function p(){c()&&(r.phase="narrate",Vs(t[r.i].t,()=>c()&&r.phase==="narrate"&&S()))}function f(w){if(!c())return;r.i=w;let D=t[w];if(r.label&&(r.label.el.classList.add("dim"),r.label=null),$t(D.ll[0],D.ll[1],n.color,""),r.label=jt(`${D.e} ${we(D.p)}`,D.ll[0],D.ll[1],"pin",!1,1.05),r.trav&&(_c(r.trav),r.trav=null),l.visible=!1,w===0||!i[w-1].pts?De(D.ll[0],D.ll[1],2.4,1200):De(D.ll[0],D.ll[1],nt(xe.dist,2.1,3.1),900),pt(g(D),!0),y(),ye.good(),r.paused){r.phase="narrate";return}p()}function S(){if(!c())return;let w=t[r.i];if(w.q&&!w._done)return T(w);v()}function v(){if(!c())return;r.phase="wait";let w=()=>{c()&&(r.i>=t.length-1?C():P(r.i))};if(r.paused){r.pending=w;return}setTimeout(()=>{!c()||r.phase!=="wait"||(r.paused?r.pending=w:w())},700)}function T(w){r.phase="question";let D=w.q;O("#jq").innerHTML=`<div class="card pop" style="border-color:var(--acc)"><b>\u2753 ${D.q}</b>${D.o.map((x,E)=>`<button class="opt" data-k="${E}">${x}</button>`).join("")}<div id="jfb"></div></div>`,At.scrollTo({top:O("#jq").offsetTop-60,behavior:"smooth"}),Te.ok&&Te.on&&Vs(D.q),O("#jq").querySelectorAll(".opt").forEach(x=>x.onclick=()=>{let E=+x.dataset.k,V=E===D.a;w._done=!0,r.asked++,V&&r.correct++,O("#jq").querySelectorAll(".opt").forEach(Z=>{Z.disabled=!0,+Z.dataset.k===D.a&&Z.classList.add("ok")}),V||x.classList.add("no"),V?ye.good():ye.bad(),ji(),O("#jfb").innerHTML=`<div class="fb ${V?"ok":"no"} pop">${V?"\u2705 Correct!":"\u274C Not quite."} ${D.why}</div><button class="btn pri" id="jc" style="width:100%">Continue the journey \u25B6</button>`,O("#jc").onclick=()=>{ye.click(),r.paused=!1,v()}})}function P(w){let D=i[w],x=t[w+1];r.phase="travel";let E={"\u26F5":"by ship","\u{1F6A2}":"by ship","\u{1F42B}":"by camel caravan","\u{1F42A}":"by camel caravan","\u{1F40E}":"on horseback","\u{1F418}":"overland","\u{1F415}":"by dog sledge","\u{1F6F6}":"by boat"}[D.mode]||"overland",V=document.createElement("div");V.className="jcap pop",V.innerHTML=`${D.mode} Travelling ${E} to <b>${we(x.p)}</b>${D.km>5?` \xB7 ${In(D.km)} km`:""}\u2026`;let Z=At.querySelector(".jstage > div");Z&&Z.appendChild(V);let U=At.querySelector(".prog i");if(U&&(U.style.width=(w+.5)/(t.length-1)*100+"%"),!D.pts){V.innerHTML="\u23F3 Time passes\u2026";let Y=!1,se=()=>{Y||(Y=!0,f(w+1))};r.skip=se,setTimeout(()=>c()&&se(),1600);return}let A=D.pts,L=A.length,F=D.mesh.geometry.index.count,X=nt(2e3+D.km*.32,2400,7500);r.trav=jt(`<span class="bob">${D.mode}</span>`,0,0,"trav",!1,1.035),l.visible=!0;let $=nt(2.05+D.km/11e3,2.15,3.1),q=0,j=performance.now(),J=!1,oe=()=>{J||(J=!0,D.mesh.geometry.setDrawRange(0,F),f(w+1))};r.skip=()=>{q=X};let G=Y=>{if(!c()||J)return;r.paused||(q+=Y-j),j=Y;let se=nt(q/X,0,1),fe=.5-Math.cos(se*Math.PI)/2,de=fe*(L-1),Pe=Math.min(L-2,Math.floor(de)),Le=A[Pe].clone().lerp(A[Pe+1],de-Pe);l.position.copy(Le),r.trav.v.copy(Le).multiplyScalar(1.035/1.006),D.mesh.geometry.setDrawRange(0,Math.floor(fe*F/6)*6),Dn(2);let be=Sv(Le);if(Yt=null,Pn={x:0,y:0},xe.lat+=(nt(be.lat,-80,80)-xe.lat)*.06,xe.lon+=(((be.lon-xe.lon)%360+540)%360-180)*.06,xe.dist+=($-xe.dist)*.04,se>=1)return oe();requestAnimationFrame(G)};requestAnimationFrame(G)}function C(){r.phase="done";let w=t.filter(E=>E.q).length,D=w?Math.round(r.correct/w*3):3;Ce.journeys=Ce.journeys||{},Ce.journeys[n.id]=Math.max(Ce.journeys[n.id]||0,D),is(),Ks(),ye.fanfare(),l.visible=!1,r.label&&r.label.el.classList.add("dim");let x=d3.geoCentroid({type:"MultiPoint",coordinates:t.map(E=>[E.ll[1],E.ll[0]])});De(x[1],x[0],3.3,1800),pt(`<div class="result pop"><div style="font-size:64px" class="jemoji">${n.icon}</div><h2>Journey complete!</h2><div class="s">${Qs(D)}</div>
      <p>You followed <b>${n.name}</b> through <b>${t.length} stops</b>, about <b>${In(s)} km</b> on this map.</p>
      <p class="mut">${r.correct} of ${w} questions right.</p>
      <div class="row" style="justify-content:center"><button class="btn" id="ja">\u21BB Watch again</button><button class="btn pri" id="jm">More journeys</button></div></div>`,!0),Te.ok&&Te.on&&Vs(`Journey complete! You followed ${n.name} for about ${Math.round(s/1e3)*1e3} kilometres.`),O("#ja").onclick=()=>Ed(n),O("#jm").onclick=()=>xn("journeys")}a(),m()}function Ev(n){let e=n.steps.map(t=>Ct.find(i=>i.key===t[0]).y);return`${Xt(Math.min(...e))} \u2013 ${Xt(Math.max(...e))}`}function Tv(){as("empires"),$n(),an(),rt=!0,De(30,45,3),pt(`<h2 style="margin:0">\u23F3 Time Machine</h2>
    <div class="tabs"><button id="toEra">\u{1F570}\uFE0F Eras</button><button class="on">\u{1F451} Empire timelines</button></div>
    <p class="mut">Pick an empire and watch it grow and shrink across the centuries on the globe.</p>
    <div class="grid2">${nc.map((n,e)=>`<button class="card" data-i="${e}"><span class="ic">${n.icon}</span><h3>${n.title}</h3><small>${Ev(n)} \xB7 ${n.steps.length} maps</small>${(Ce.tracks||[]).includes(n.id)?'<small style="color:var(--good)">\u2713 watched</small>':""}</button>`).join("")}</div>
    <p class="mut" style="font-size:12.5px;margin-top:12px">Borders are approximate. The Rashidun Caliphate (632\u2013661) falls between the maps we have, so the caliphates timeline starts with the Umayyads.</p>`,!0),O("#toEra").onclick=()=>{ye.click(),xn("history")},At.querySelectorAll("[data-i]").forEach(n=>n.onclick=()=>{ye.click(),Av(nc[+n.dataset.i])})}async function Av(n){$n(),an(),rt=!1;let e=++Ji,t=()=>e===Ji,i=0,s=null,r=()=>{clearInterval(s),s=null;let g=O("#tp");g&&(g.textContent="\u25B6 Play")};ns.push(()=>{Ji++,r()});let o=n.steps.length,a=new Array(o).fill(null),l=n.steps.map(g=>Ct.find(y=>y.key===g[0]).y);pt(`<div class="row" style="justify-content:space-between"><button class="btn sm" id="tx">\u2190 Empires</button><span class="mut f">${n.icon} ${n.title}</span></div>
    <div class="yearbig" id="ty"></div>
    <input type="range" id="ts" min="0" max="${o-1}" value="0" step="1">
    <div class="row" style="justify-content:center;margin:8px 0"><button class="btn sm" id="tb">\u25C0 Earlier</button><button class="btn sm blue" id="tp">\u25B6 Play</button><button class="btn sm" id="tn">Later \u25B6</button></div>
    <div style="font-weight:800;margin-top:6px">\u{1F4C8} Size on the map over time</div>
    <div class="chart" id="tc">${l.map((g,y)=>`<button data-k="${y}" title="${Xt(g)}" style="height:4px"></button>`).join("")}</div>
    <div class="ticks" style="margin-top:4px"><span>${Xt(l[0])}</span><span>${Xt(l[o-1])}</span></div>
    <div class="tip" id="ta" style="margin-top:10px;font-weight:800"></div>
    <div id="tcard" style="margin-top:10px"></div>
    <details style="margin-top:10px"><summary class="mut" style="cursor:pointer;font-weight:800">About ${n.title}</summary>${lo(n.card)}</details>`,!0),O("#tx").onclick=()=>xn("empires");let c=g=>g>=1e6?`${(g/1e6).toFixed(1)} million km\xB2`:`${In(Math.round(g/1e3)*1e3)} km\xB2`,h=()=>{if(!t()||!O("#tc"))return;let g=Math.max(1,...a.filter(Boolean));O("#tc").querySelectorAll("button").forEach((y,p)=>{y.style.height=a[p]==null?"4px":Math.max(4,a[p]/g*84)+"px",y.classList.toggle("on",p===i),y.title=`${Xt(l[p])}${a[p]?" \xB7 "+c(a[p]):""}`})},d=async g=>{let[y,p]=n.steps[g],f=await Ws(y);return{feats:f,hf:Js(f,p)}},u=g=>g.reduce((y,p)=>y+d3.geoArea(p)*io*io,0),m=async(g,y=!0)=>{let p=nt(g,0,o-1);i=p,O("#ts").value=i,O("#ty").textContent=Xt(l[i]),h();let[f,,S]=n.steps[i],{feats:v,hf:T}=await d(i);if(!t()||i!==p)return;vn=v,uo(v,f),oi(T,"rgba(255,224,90,.55)","#fff6c0"),a[i]=u(T),h();let P=Ct.find(C=>C.key===f);if(O("#ta").innerHTML=T.length?`\u{1F451} In ${Xt(P.y)} it covered about <b>${c(a[i])}</b> on this map.`:"Not shown on this map.",O("#tcard").innerHTML=lo(S)+`<p class="mut" style="font-size:14px;margin-top:8px">\u{1F30D} ${P.blurb}</p>`,y&&T.length){let C=T.slice().sort((x,E)=>E.area2-x.area2)[0],[w,D]=d3.geoCentroid(C);De(D,w,T.length>8?3.3:nt(1.9+Math.sqrt(C.area2)*Nn/24,2.1,3.2))}};O("#ts").oninput=()=>{r(),m(+O("#ts").value)},O("#tb").onclick=()=>{ye.click(),r(),m(i-1)},O("#tn").onclick=()=>{ye.click(),r(),m(i+1)},O("#tc").querySelectorAll("button").forEach(g=>g.onclick=()=>{r(),m(+g.dataset.k)}),O("#tp").onclick=()=>{if(ye.click(),s)return r();O("#tp").textContent="\u23F8 Pause",i>=o-1&&m(0),s=setInterval(()=>{if(i>=o-1)return r();m(i+1)},2600)},nn=g=>{if(!vn)return;let y=Gn(vn,g.lat,g.lon);y&&y.name&&ss(`<b>${we(y.name)}</b> \xB7 ${Xt(l[i])}`,1800)},Ce.tracks=Ce.tracks||[],Ce.tracks.includes(n.id)||(Ce.tracks.push(n.id),is(),Ks()),await m(0),(async()=>{for(let g=0;g<o;g++){if(!t())return;if(a[g]==null){let[y,p]=n.steps[g],f=ks[y]||await Ws(y,!1);a[g]=u(Js(f,p)),h(),Zt&&await Zu(120)}}})()}(async()=>{hd(),requestAnimationFrame(fd),Ti("Loading the world map\u2026");try{await Vy()}catch(n){throw O("#loading").innerHTML='<div class="f" style="font-size:20px;text-align:center;padding:20px">Couldn\u2019t load the map data. Please refresh the page.</div>',n}Ti("Painting the globe\u2026"),await Zu(30),ev(),vc(),Ku(),O("#loading").classList.add("done"),Mc(),setTimeout(()=>{Ti("Ready")},1500),setInterval(()=>{document.hidden||Ti(`Running \xB7 ${(location.hash||"#home").slice(1)} \xB7 ${dd} frames drawn`)},4e3),setTimeout(()=>{O("#hud").textContent==="Tap the globe"&&bc(null)},100)})();window.__aq={view:xe,go:xn,P:Ce,runMission:wc,runLesson:ao,LESSONS:qi,viewHistory:vd,pickLatLon:xc,ERAS:Ct,loadEra:Ws,featuredFeats:Js};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
