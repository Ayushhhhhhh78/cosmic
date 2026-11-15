(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="170",Zf=0,eh=1,Jf=2,Vu=1,Gu=2,Zn=3,Ti=0,ze=1,ln=2,Mi=0,As=1,ei=2,nh=3,ih=4,Qf=5,$i=100,tp=101,ep=102,np=103,ip=104,sp=200,rp=201,ap=202,op=203,el=204,nl=205,lp=206,cp=207,hp=208,up=209,dp=210,fp=211,pp=212,mp=213,gp=214,il=0,sl=1,rl=2,Is=3,al=4,ol=5,ll=6,cl=7,Wu=0,_p=1,vp=2,Si=0,xp=1,yp=2,bp=3,Mp=4,Sp=5,wp=6,Ep=7,$u=300,Us=301,Ns=302,hl=303,ul=304,Za=306,Ia=1e3,Xi=1001,dl=1002,fn=1003,Tp=1004,qr=1005,kn=1006,ho=1007,Yi=1008,ii=1009,qu=1010,Xu=1011,Sr=1012,oc=1013,ts=1014,zn=1015,Or=1016,lc=1017,cc=1018,Fs=1020,Yu=35902,ju=1021,Ku=1022,Ln=1023,Zu=1024,Ju=1025,Cs=1026,Os=1027,hc=1028,uc=1029,Qu=1030,dc=1031,fc=1033,Ma=33776,Sa=33777,wa=33778,Ea=33779,fl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,xl=37496,yl=37808,bl=37809,Ml=37810,Sl=37811,wl=37812,El=37813,Tl=37814,Al=37815,Cl=37816,Rl=37817,Pl=37818,Ll=37819,Dl=37820,Il=37821,Ta=36492,Ul=36494,Nl=36495,td=36283,Fl=36284,Ol=36285,kl=36286,Ap=3200,Cp=3201,ed=0,Rp=1,gi="",Re="srgb",Ws="srgb-linear",Ja="linear",ne="srgb",os=7680,sh=519,Pp=512,Lp=513,Dp=514,nd=515,Ip=516,Up=517,Np=518,Fp=519,rh=35044,ah="300 es",ti=2e3,Ua=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,zl=180/Math.PI;function kr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function Op(s,t){return(s%t+t)%t}function fo(s,t,e){return(1-e)*s+e*t}function Js(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],f=i[3],m=i[6],b=i[1],x=i[4],v=i[7],w=i[2],E=i[5],T=i[8];return r[0]=a*g+o*b+l*w,r[3]=a*f+o*x+l*E,r[6]=a*m+o*v+l*T,r[1]=c*g+h*b+u*w,r[4]=c*f+h*x+u*E,r[7]=c*m+h*v+u*T,r[2]=d*g+p*b+_*w,r[5]=d*f+p*x+_*E,r[8]=d*m+p*v+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=e*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Ot;function id(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kp(){const s=Na("canvas");return s.style.display="block",s}const oh={};function hr(s){s in oh||(oh[s]=!0,console.warn(s))}function zp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bp(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hp(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Ja:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const lh=[.64,.33,.3,.6,.15,.06],ch=[.2126,.7152,.0722],hh=[.3127,.329],uh=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Ws]:{primaries:lh,whitePoint:hh,transfer:Ja,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:ch,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:lh,whitePoint:hh,transfer:ne,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:ch,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});let ls;class Vp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Na("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Na("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gp=0;class sd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(mo(i[a].image)):r.push(mo(i[a]))}else r=mo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function mo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wp=0;class Be extends $s{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=Xi,i=Xi,r=kn,a=Yi,o=Ln,l=ii,c=Be.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=kr(),this.name="",this.source=new sd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=$u;Be.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(p+1)/2,w=(m+1)/2,E=(h+d)/4,T=(u+g)/4,R=(_+f)/4;return x>v&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=T/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=R/r),this.set(n,i,r,e),this}let b=Math.sqrt((f-_)*(f-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(f-_)/b,this.y=(u-g)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $p extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends $p{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rd extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qp extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let f=1-o;const m=l*d+c*p+h*_+u*g,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),E=Math.atan2(w,m*b);f=Math.sin(f*E)/w,o=Math.sin(o*E)/w}const v=o*b;if(l=l*f+d*v,c=c*f+p*v,h=h*f+_*v,u=u*f+g*v,f===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new N,fh=new si;class ns{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Yr.subVectors(this.max,Qs),cs.subVectors(t.a,Qs),hs.subVectors(t.b,Qs),us.subVectors(t.c,Qs),ci.subVectors(hs,cs),hi.subVectors(us,hs),Ii.subVectors(cs,us);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ii.y,Ii.x,0];return!_o(e,cs,hs,us,Yr)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,cs,hs,us,Yr))?!1:(jr.crossVectors(ci,hi),e=[jr.x,jr.y,jr.z],_o(e,cs,hs,us,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,Xr=new ns,cs=new N,hs=new N,us=new N,ci=new N,hi=new N,Ii=new N,Qs=new N,Yr=new N,jr=new N,Ui=new N;function _o(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ui.fromArray(s,r);const o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Xp=new ns,tr=new N,vo=new N;class qs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(vo)),this.expandByPoint(tr.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new N,xo=new N,Kr=new N,ui=new N,yo=new N,Zr=new N,bo=new N;class pc{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xo.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(xo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=ui.dot(this.direction),l=-ui.dot(Kr),c=ui.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xo).addScaledVector(Kr,d),p}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,r){yo.subVectors(e,t),Zr.subVectors(n,t),bo.crossVectors(yo,Zr);let a=this.direction.dot(bo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);const l=o*this.direction.dot(Zr.crossVectors(ui,Zr));if(l<0)return null;const c=o*this.direction.dot(yo.cross(ui));if(c<0||l+c>a)return null;const h=-o*ui.dot(bo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,_,g,f){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,_,g,f)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,_,g,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=_,m[11]=g,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,jp)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),di.crossVectors(n,sn),di.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),di.crossVectors(n,sn)),di.normalize(),Jr.crossVectors(sn,di),i[0]=di.x,i[4]=Jr.x,i[8]=sn.x,i[1]=di.y,i[5]=Jr.y,i[9]=sn.y,i[2]=di.z,i[6]=Jr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],f=n[10],m=n[14],b=n[3],x=n[7],v=n[11],w=n[15],E=i[0],T=i[4],R=i[8],M=i[12],y=i[1],P=i[5],I=i[9],C=i[13],U=i[2],O=i[6],G=i[10],k=i[14],F=i[3],j=i[7],it=i[11],ft=i[15];return r[0]=a*E+o*y+l*U+c*F,r[4]=a*T+o*P+l*O+c*j,r[8]=a*R+o*I+l*G+c*it,r[12]=a*M+o*C+l*k+c*ft,r[1]=h*E+u*y+d*U+p*F,r[5]=h*T+u*P+d*O+p*j,r[9]=h*R+u*I+d*G+p*it,r[13]=h*M+u*C+d*k+p*ft,r[2]=_*E+g*y+f*U+m*F,r[6]=_*T+g*P+f*O+m*j,r[10]=_*R+g*I+f*G+m*it,r[14]=_*M+g*C+f*k+m*ft,r[3]=b*E+x*y+v*U+w*F,r[7]=b*T+x*P+v*O+w*j,r[11]=b*R+x*I+v*G+w*it,r[15]=b*M+x*C+v*k+w*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],f=t[11],m=t[15];return _*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+g*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+f*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],f=t[14],m=t[15],b=u*f*c-g*d*c+g*l*p-o*f*p-u*l*m+o*d*m,x=_*d*c-h*f*c-_*l*p+a*f*p+h*l*m-a*d*m,v=h*g*c-_*u*c+_*o*p-a*g*p-h*o*m+a*u*m,w=_*u*l-h*g*l-_*o*d+a*g*d+h*o*f-a*u*f,E=e*b+n*x+i*v+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=b*T,t[1]=(g*d*r-u*f*r-g*i*p+n*f*p+u*i*m-n*d*m)*T,t[2]=(o*f*r-g*l*r+g*i*c-n*f*c-o*i*m+n*l*m)*T,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*T,t[4]=x*T,t[5]=(h*f*r-_*d*r+_*i*p-e*f*p-h*i*m+e*d*m)*T,t[6]=(_*l*r-a*f*r-_*i*c+e*f*c+a*i*m-e*l*m)*T,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*T,t[8]=v*T,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*m-e*u*m)*T,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*m+e*o*m)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*T,t[12]=w*T,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*f+e*u*f)*T,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*f-e*o*f)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,g=a*h,f=a*u,m=o*u,b=l*c,x=l*h,v=l*u,w=n.x,E=n.y,T=n.z;return i[0]=(1-(g+m))*w,i[1]=(p+v)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+m))*E,i[6]=(f+b)*E,i[7]=0,i[8]=(_+x)*T,i[9]=(f-b)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Cn.copy(this);const c=1/r,h=1/a,u=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ti){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,_;if(o===ti)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ua)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ti){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h;let _,g;if(o===ti)_=(a+r)*u,g=-2*u;else if(o===Ua)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new N,Cn=new Qt,Yp=new N(0,0,0),jp=new N(1,1,1),di=new N,Jr=new N,sn=new N,ph=new Qt,mh=new si;class wn{constructor(t=0,e=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kp=0;const gh=new N,fs=new si,Yn=new Qt,Qr=new N,er=new N,Zp=new N,Jp=new si,_h=new N(1,0,0),vh=new N(0,1,0),xh=new N(0,0,1),yh={type:"added"},Qp={type:"removed"},ps={type:"childadded",child:null},Mo={type:"childremoved",child:null};class Pe extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new N,e=new wn,n=new si,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ot}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(xh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(er,Qr,this.up):Yn.lookAt(Qr,er,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Yn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yh),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qp),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new N,jn=new N,So=new N,Kn=new N,ms=new N,gs=new N,bh=new N,wo=new N,Eo=new N,To=new N,Ao=new se,Co=new se,Ro=new se;class Pn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Rn.subVectors(t,e),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Rn.subVectors(i,e),jn.subVectors(n,e),So.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(jn),l=Rn.dot(So),c=jn.dot(jn),h=jn.dot(So),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ao.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(t,e,n,i){return Rn.subVectors(n,e),jn.subVectors(t,e),Rn.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ms.subVectors(i,n),gs.subVectors(r,n),wo.subVectors(t,n);const l=ms.dot(wo),c=gs.dot(wo);if(l<=0&&c<=0)return e.copy(n);Eo.subVectors(t,i);const h=ms.dot(Eo),u=gs.dot(Eo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ms,a);To.subVectors(t,r);const p=ms.dot(To),_=gs.dot(To);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(gs,o);const f=h*_-p*u;if(f<=0&&u-h>=0&&p-_>=0)return bh.subVectors(r,i),o=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(bh,o);const m=1/(f+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Po(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Op(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Po(a,r,t+1/3),this.g=Po(a,r,t),this.b=Po(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Xt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ye(Ne.r*255,0,255))*65536+Math.round(Ye(Ne.g*255,0,255))*256+Math.round(Ye(Ne.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,r=Ne.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Re){Xt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(ta);const n=fo(fi.h,ta.h,e),i=fo(fi.s,ta.s,e),r=fo(fi.l,ta.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Bt;Bt.NAMES=ad;let tm=0;class Xs extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=kr(),this.name="",this.blending=As,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=nl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==nl&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends Xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new N,ea=new Ht;class Dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rh&&(t.usage=this.usage),t}}class od extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ld extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let em=0;const xn=new Qt,Lo=new Pe,_s=new N,rn=new ns,nr=new ns,Ae=new N;class Ve extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(id(t)?ld:od)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(rn.min,nr.min),rn.expandByPoint(Ae),Ae.addVectors(rn.max,nr.max),rn.expandByPoint(Ae)):(rn.expandByPoint(nr.min),rn.expandByPoint(nr.max))}rn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(t,c),Ae.add(_s)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new N,l[R]=new N;const c=new N,h=new N,u=new N,d=new Ht,p=new Ht,_=new Ht,g=new N,f=new N;function m(R,M,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[M].add(g),o[y].add(g),l[R].add(f),l[M].add(f),l[y].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,M=b.length;R<M;++R){const y=b[R],P=y.start,I=y.count;for(let C=P,U=P+I;C<U;C+=3)m(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const x=new N,v=new N,w=new N,E=new N;function T(R){w.fromBufferAttribute(i,R),E.copy(w);const M=o[R];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(E,M);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,M=b.length;R<M;++R){const y=b[R],P=y.start,I=y.count;for(let C=P,U=P+I;C<U;C+=3)T(t.getX(C+0)),T(t.getX(C+1)),T(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let m=0;m<h;m++)d[_++]=c[p++]}return new Dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new Qt,Ni=new pc,na=new qs,Sh=new N,ia=new N,sa=new N,ra=new N,Do=new N,aa=new N,wh=new N,oa=new N;class Gt extends Pe{constructor(t=new Ve,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Do.fromBufferAttribute(u,t),a?aa.addScaledVector(Do,h):aa.addScaledVector(Do.sub(e),h))}e.add(aa)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(na.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(na,Sh)===null||Ni.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Mh.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const f=d[_],m=a[f.materialIndex],b=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let v=b,w=x;v<w;v+=3){const E=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);i=la(this,m,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let f=_,m=g;f<m;f+=3){const b=o.getX(f),x=o.getX(f+1),v=o.getX(f+2);i=la(this,a,t,n,c,h,u,b,x,v),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const f=d[_],m=a[f.materialIndex],b=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let v=b,w=x;v<w;v+=3){const E=v,T=v+1,R=v+2;i=la(this,m,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=_,m=g;f<m;f+=3){const b=f,x=f+1,v=f+2;i=la(this,a,t,n,c,h,u,b,x,v),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function nm(s,t,e,n,i,r,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ti,o),l===null)return null;oa.copy(o),oa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:s}}function la(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ia),s.getVertexPosition(l,sa),s.getVertexPosition(c,ra);const h=nm(s,t,e,n,ia,sa,ra,wh);if(h){const u=new N;Pn.getBarycoord(wh,ia,sa,ra,u),i&&(h.uv=Pn.getInterpolatedAttribute(i,o,l,c,u,new Ht)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,l,c,u,new Ht)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Pn.getNormal(ia,sa,ra,d.normal),h.face=d,h.barycoord=u}return h}class Vt extends Ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function _(g,f,m,b,x,v,w,E,T,R,M){const y=v/T,P=w/R,I=v/2,C=w/2,U=E/2,O=T+1,G=R+1;let k=0,F=0;const j=new N;for(let it=0;it<G;it++){const ft=it*P-C;for(let At=0;At<O;At++){const Yt=At*y-I;j[g]=Yt*b,j[f]=ft*x,j[m]=U,c.push(j.x,j.y,j.z),j[g]=0,j[f]=0,j[m]=E>0?1:-1,h.push(j.x,j.y,j.z),u.push(At/T),u.push(1-it/R),k+=1}}for(let it=0;it<R;it++)for(let ft=0;ft<T;ft++){const At=d+ft+O*it,Yt=d+ft+O*(it+1),K=d+(ft+1)+O*(it+1),D=d+(ft+1)+O*it;l.push(At,Yt,D),l.push(Yt,K,D),F+=6}o.addGroup(p,F,M),p+=F,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=ks(s[e]);for(const i in n)t[i]=n[i]}return t}function im(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function cd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const sm={clone:ks,merge:Ge};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hd extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new N,Eh=new Ht,Th=new Ht;class Fe extends hd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,Th),e.subVectors(Th,Eh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vs=-90,xs=1;class om extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(vs,xs,t,e);i.layers=this.layers,this.add(i);const r=new Fe(vs,xs,t,e);r.layers=this.layers,this.add(r);const a=new Fe(vs,xs,t,e);a.layers=this.layers,this.add(a);const o=new Fe(vs,xs,t,e);o.layers=this.layers,this.add(o);const l=new Fe(vs,xs,t,e);l.layers=this.layers,this.add(l);const c=new Fe(vs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ud extends Be{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lm extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ud(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vt(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Mi});r.uniforms.tEquirect.value=e;const a=new Gt(i,r),o=e.minFilter;return e.minFilter===Yi&&(e.minFilter=kn),new om(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Io=new N,cm=new N,hm=new Ot;class Hi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Io.subVectors(n,e).cross(cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hm.getNormalMatrix(t),i=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new qs,ca=new N;class gc{constructor(t=new Hi,e=new Hi,n=new Hi,i=new Hi,r=new Hi,a=new Hi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],g=i[10],f=i[11],m=i[12],b=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,f-p,v-m).normalize(),n[1].setComponents(l+r,d+c,f+p,v+m).normalize(),n[2].setComponents(l+a,d+h,f+_,v+b).normalize(),n[3].setComponents(l-a,d-h,f-_,v-b).normalize(),n[4].setComponents(l-o,d-u,f-g,v-x).normalize(),e===ti)n[5].setComponents(l+o,d+u,f+g,v+x).normalize();else if(e===Ua)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ca.x=i.normal.x>0?t.max.x:t.min.x,ca.y=i.normal.y>0?t.max.y:t.min.y,ca.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dd(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function um(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class zr extends Ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],g=[],f=[];for(let m=0;m<h;m++){const b=m*d-a;for(let x=0;x<c;x++){const v=x*u-r;_.push(v,-b,0),g.push(0,0,1),f.push(x/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const x=b+c*m,v=b+c*(m+1),w=b+1+c*(m+1),E=b+1+c*m;p.push(x,v,E),p.push(v,w,E)}this.setIndex(p),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Em=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
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
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,s0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,u0=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
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
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,vg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xg=`#define DISTANCE
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
}`,yg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ig=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Ng=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,Og=`#define TOON
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
}`,kg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:vm,aomap_pars_fragment:xm,batching_pars_vertex:ym,batching_vertex:bm,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:wm,iridescence_fragment:Em,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Pm,color_fragment:Lm,color_pars_fragment:Dm,color_pars_vertex:Im,color_vertex:Um,common:Nm,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Om,displacementmap_pars_vertex:km,displacementmap_vertex:zm,emissivemap_fragment:Bm,emissivemap_pars_fragment:Hm,colorspace_fragment:Vm,colorspace_pars_fragment:Gm,envmap_fragment:Wm,envmap_common_pars_fragment:$m,envmap_pars_fragment:qm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:s0,envmap_vertex:Ym,fog_vertex:jm,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:t0,lights_lambert_fragment:e0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:a0,lights_phong_fragment:o0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:d0,lights_fragment_end:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:y0,map_particle_pars_fragment:b0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:S0,morphinstance_vertex:w0,morphcolor_vertex:E0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:C0,normal_fragment_begin:R0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:I0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:k0,opaque_fragment:z0,packing:B0,premultiplied_alpha_fragment:H0,project_vertex:V0,dithering_fragment:G0,dithering_pars_fragment:W0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:Y0,shadowmap_vertex:j0,shadowmask_pars_fragment:K0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:ag,uv_pars_fragment:og,uv_pars_vertex:lg,uv_vertex:cg,worldpos_vertex:hg,background_vert:ug,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:vg,distanceRGBA_vert:xg,distanceRGBA_frag:yg,equirect_vert:bg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:wg,meshbasic_vert:Eg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:Cg,meshmatcap_vert:Rg,meshmatcap_frag:Pg,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:Ig,meshphong_frag:Ug,meshphysical_vert:Ng,meshphysical_frag:Fg,meshtoon_vert:Og,meshtoon_frag:kg,points_vert:zg,points_frag:Bg,shadow_vert:Hg,shadow_frag:Vg,sprite_vert:Gg,sprite_frag:Wg},ot={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Fn={basic:{uniforms:Ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ge([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ge([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ge([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ge([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ge([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ge([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ge([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ge([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ge([ot.common,ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ge([ot.lights,ot.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Fn.physical={uniforms:Ge([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const ha={r:0,b:0,g:0},Oi=new wn,$g=new Qt;function qg(s,t,e,n,i,r,a){const o=new Bt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function g(b){let x=!1;const v=_(b);v===null?m(o,l):v&&v.isColor&&(m(v,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(b,x){const v=_(x);v&&(v.isCubeTexture||v.mapping===Za)?(h===void 0&&(h=new Gt(new Vt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ks(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(x.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(Oi)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==ne,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Gt(new zr(2,2),new Vn({name:"BackgroundMaterial",uniforms:ks(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(ha,cd(s)),n.buffers.color.setClear(ha.r,ha.g,ha.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(o,l)},render:g,addToRenderList:f}}function Xg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(y,P,I,C,U){let O=!1;const G=u(C,I,P);r!==G&&(r=G,c(r.object)),O=p(y,C,I,U),O&&_(y,C,I,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,v(y,P,I,C),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,I){const C=I.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let O=U[P.id];O===void 0&&(O={},U[P.id]=O);let G=O[C];return G===void 0&&(G=d(l()),O[C]=G),G}function d(y){const P=[],I=[],C=[];for(let U=0;U<e;U++)P[U]=0,I[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:C,object:y,attributes:{},index:null}}function p(y,P,I,C){const U=r.attributes,O=P.attributes;let G=0;const k=I.getAttributes();for(const F in k)if(k[F].location>=0){const it=U[F];let ft=O[F];if(ft===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),it===void 0||it.attribute!==ft||ft&&it.data!==ft.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function _(y,P,I,C){const U={},O=P.attributes;let G=0;const k=I.getAttributes();for(const F in k)if(k[F].location>=0){let it=O[F];it===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const ft={};ft.attribute=it,it&&it.data&&(ft.data=it.data),U[F]=ft,G++}r.attributes=U,r.attributesNum=G,r.index=C}function g(){const y=r.newAttributes;for(let P=0,I=y.length;P<I;P++)y[P]=0}function f(y){m(y,0)}function m(y,P){const I=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;I[y]=1,C[y]===0&&(s.enableVertexAttribArray(y),C[y]=1),U[y]!==P&&(s.vertexAttribDivisor(y,P),U[y]=P)}function b(){const y=r.newAttributes,P=r.enabledAttributes;for(let I=0,C=P.length;I<C;I++)P[I]!==y[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function x(y,P,I,C,U,O,G){G===!0?s.vertexAttribIPointer(y,P,I,U,O):s.vertexAttribPointer(y,P,I,C,U,O)}function v(y,P,I,C){g();const U=C.attributes,O=I.getAttributes(),G=P.defaultAttributeValues;for(const k in O){const F=O[k];if(F.location>=0){let j=U[k];if(j===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const it=j.normalized,ft=j.itemSize,At=t.get(j);if(At===void 0)continue;const Yt=At.buffer,K=At.type,D=At.bytesPerElement,J=K===s.INT||K===s.UNSIGNED_INT||j.gpuType===oc;if(j.isInterleavedBufferAttribute){const X=j.data,nt=X.stride,at=j.offset;if(X.isInstancedInterleavedBuffer){for(let _t=0;_t<F.locationSize;_t++)m(F.location+_t,X.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let _t=0;_t<F.locationSize;_t++)f(F.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let _t=0;_t<F.locationSize;_t++)x(F.location+_t,ft/F.locationSize,K,it,nt*D,(at+ft/F.locationSize*_t)*D,J)}else{if(j.isInstancedBufferAttribute){for(let X=0;X<F.locationSize;X++)m(F.location+X,j.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let X=0;X<F.locationSize;X++)f(F.location+X);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let X=0;X<F.locationSize;X++)x(F.location+X,ft/F.locationSize,K,it,ft*D,ft/F.locationSize*X*D,J)}}else if(G!==void 0){const it=G[k];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(F.location,it);break;case 3:s.vertexAttrib3fv(F.location,it);break;case 4:s.vertexAttrib4fv(F.location,it);break;default:s.vertexAttrib1fv(F.location,it)}}}}b()}function w(){R();for(const y in n){const P=n[y];for(const I in P){const C=P[I];for(const U in C)h(C[U].object),delete C[U];delete P[I]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const I in P){const C=P[I];for(const U in C)h(C[U].object),delete C[U];delete P[I]}delete n[y.id]}function T(y){for(const P in n){const I=n[P];if(I[y.id]===void 0)continue;const C=I[y.id];for(const U in C)h(C[U].object),delete C[U];delete I[y.id]}}function R(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:f,disableUnusedAttributes:b}}function Yg(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Ln&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ii&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zn&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:E}}function Kg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Hi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,m=s.get(u);if(!i||_===null||_.length===0||r&&!f)r?h(null):c();else{const b=r?0:n,x=b*4;let v=m.clippingState||null;l.value=v,v=h(_,d,x,p);for(let w=0;w!==x;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const m=p+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<m)&&(f=new Float32Array(m));for(let x=0,v=p;x!==g;++x,v+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function Zg(s){let t=new WeakMap;function e(a,o){return o===hl?a.mapping=Us:o===ul&&(a.mapping=Ns),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===hl||o===ul)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lm(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fd extends hd{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ws=4,Ah=[.125,.215,.35,.446,.526,.582],qi=20,Uo=new fd,Ch=new Bt;let No=null,Fo=0,Oo=0,ko=!1;const Vi=(1+Math.sqrt(5))/2,ys=1/Vi,Rh=[new N(-Vi,ys,0),new N(Vi,ys,0),new N(-ys,0,Vi),new N(ys,0,Vi),new N(0,Vi,-ys),new N(0,Vi,ys),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Fo,Oo),this._renderer.xr.enabled=ko,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Or,format:Ln,colorSpace:Ws,depthBuffer:!1},i=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=Qg(r,t,e)}return i}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ch),h.toneMapping=Si,h.autoClear=!1;const p=new hn({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new Gt(new Vt,p);let g=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,g=!0):(p.color.copy(Ch),g=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;ua(i,b*x,m>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Us||t.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rh[(i-r-1)%Rh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Gt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),g=r/_,f=isFinite(r)?1+Math.floor(h*g):qi;f>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qi}`);const m=[];let b=0;for(let T=0;T<qi;++T){const R=T/g,M=Math.exp(-R*R/2);m.push(M),T===0?b+=M:T<f&&(b+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const v=this._sizeLods[i],w=3*v*(i>x-ws?i-x+ws:0),E=4*(this._cubeSize-v);ua(e,w,E,3*v,2*v),l.setRenderTarget(e),l.render(u,Uo)}}function Jg(s){const t=[],e=[],n=[];let i=s;const r=s-ws+1+Ah.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ws?l=Ah[a-s+ws-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,f=2,m=1,b=new Float32Array(g*_*p),x=new Float32Array(f*_*p),v=new Float32Array(m*_*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,R=E>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(M,g*_*E),x.set(d,f*_*E);const y=[E,E,E,E,E,E];v.set(y,m*_*E)}const w=new Ve;w.setAttribute("position",new Dn(b,g)),w.setAttribute("uv",new Dn(x,f)),w.setAttribute("faceIndex",new Dn(v,m)),t.push(w),i>ws&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(s,t,e){const n=new es(s,t,e);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Qg(s,t,e){const n=new Float32Array(qi),i=new N(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Dh(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ih(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function t_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===hl||l===ul,h=l===Us||l===Ns;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ph(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ph(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function e_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n_(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let f=0,m=g.length;f<m;f++)t.remove(g[f])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let f=0,m=g.length;f<m;f++)t.update(g[f],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let x=0,v=b.length;x<v;x+=3){const w=b[x+0],E=b[x+1],T=b[x+2];d.push(w,E,E,T,T,w)}}else if(_!==void 0){const b=_.array;g=_.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const w=x+0,E=x+1,T=x+2;d.push(w,E,E,T,T,w)}}else return;const f=new(id(d)?ld:od)(d,1);f.version=g;const m=r.get(u);m&&t.remove(m),r.set(u,f)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function i_(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*a,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let f=0;for(let m=0;m<_;m++)f+=p[m];e.update(f,n,1)}function u(d,p,_,g){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],g[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,_);let m=0;for(let b=0;b<_;b++)m+=p[b]*g[b];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function r_(s,t,e){const n=new WeakMap,i=new se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let v=o.attributes.position.count*x,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*w*4*u),T=new rd(E,v,w,u);T.type=zn,T.needsUpdate=!0;const R=x*4;for(let y=0;y<u;y++){const P=f[y],I=m[y],C=b[y],U=v*w*4*y;for(let O=0;O<P.count;O++){const G=O*R;p===!0&&(i.fromBufferAttribute(P,O),E[U+G+0]=i.x,E[U+G+1]=i.y,E[U+G+2]=i.z,E[U+G+3]=0),_===!0&&(i.fromBufferAttribute(I,O),E[U+G+4]=i.x,E[U+G+5]=i.y,E[U+G+6]=i.z,E[U+G+7]=0),g===!0&&(i.fromBufferAttribute(C,O),E[U+G+8]=i.x,E[U+G+9]=i.y,E[U+G+10]=i.z,E[U+G+11]=C.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new Ht(v,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function a_(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class pd extends Be{constructor(t,e,n,i,r,a,o,l,c,h=Cs){if(h!==Cs&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=ts),n===void 0&&h===Os&&(n=Fs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const md=new Be,Uh=new pd(1,1),gd=new rd,_d=new qp,vd=new ud,Nh=[],Fh=[],Oh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function Ys(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Nh[i];if(r===void 0&&(r=new Float32Array(i),Nh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Qa(s,t){let e=Fh[t];e===void 0&&(e=new Int32Array(t),Fh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function o_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function l_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function c_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function h_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function u_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;zh.set(n),s.uniformMatrix2fv(this.addr,!1,zh),Te(e,n)}}function d_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;kh.set(n),s.uniformMatrix3fv(this.addr,!1,kh),Te(e,n)}}function f_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Oh.set(n),s.uniformMatrix4fv(this.addr,!1,Oh),Te(e,n)}}function p_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function m_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function g_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function __(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function v_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function x_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function b_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function M_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uh.compareFunction=nd,r=Uh):r=md,e.setTexture2D(t||r,i)}function S_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_d,i)}function w_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vd,i)}function E_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gd,i)}function T_(s){switch(s){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return v_;case 36294:return x_;case 36295:return y_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return E_}}function A_(s,t){s.uniform1fv(this.addr,t)}function C_(s,t){const e=Ys(t,this.size,2);s.uniform2fv(this.addr,e)}function R_(s,t){const e=Ys(t,this.size,3);s.uniform3fv(this.addr,e)}function P_(s,t){const e=Ys(t,this.size,4);s.uniform4fv(this.addr,e)}function L_(s,t){const e=Ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function D_(s,t){const e=Ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function I_(s,t){const e=Ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function U_(s,t){s.uniform1iv(this.addr,t)}function N_(s,t){s.uniform2iv(this.addr,t)}function F_(s,t){s.uniform3iv(this.addr,t)}function O_(s,t){s.uniform4iv(this.addr,t)}function k_(s,t){s.uniform1uiv(this.addr,t)}function z_(s,t){s.uniform2uiv(this.addr,t)}function B_(s,t){s.uniform3uiv(this.addr,t)}function H_(s,t){s.uniform4uiv(this.addr,t)}function V_(s,t,e){const n=this.cache,i=t.length,r=Qa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||md,r[a])}function G_(s,t,e){const n=this.cache,i=t.length,r=Qa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||_d,r[a])}function W_(s,t,e){const n=this.cache,i=t.length,r=Qa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||vd,r[a])}function $_(s,t,e){const n=this.cache,i=t.length,r=Qa(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||gd,r[a])}function q_(s){switch(s){case 5126:return A_;case 35664:return C_;case 35665:return R_;case 35666:return P_;case 35674:return L_;case 35675:return D_;case 35676:return I_;case 5124:case 35670:return U_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return k_;case 36294:return z_;case 36295:return B_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return $_}}class X_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T_(e.type)}}class Y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q_(e.type)}}class j_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function Bh(s,t){s.seq.push(t),s.map[t.id]=t}function K_(s,t,e){const n=s.name,i=n.length;for(zo.lastIndex=0;;){const r=zo.exec(n),a=zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Bh(e,c===void 0?new X_(o,s,t):new Y_(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new j_(o),Bh(e,u)),e=u}}}class Aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);K_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Hh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Z_=37297;let J_=0;function Q_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Vh=new Ot;function tv(s){Xt._getMatrix(Vh,Xt.workingColorSpace,s);const t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case Ja:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Gh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Q_(s.getShaderSource(t),a)}else return i}function ev(s,t){const e=tv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nv(s,t){let e;switch(t){case xp:e="Linear";break;case yp:e="Reinhard";break;case bp:e="Cineon";break;case Mp:e="ACESFilmic";break;case wp:e="AgX";break;case Ep:e="Neutral";break;case Sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const da=new N;function iv(){Xt.getLuminanceCoefficients(da);const s=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function rv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function av(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ur(s){return s!==""}function Wh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(s){return s.replace(ov,cv)}const lv=new Map;function cv(s,t){let e=zt[t];if(e===void 0){const n=lv.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bl(e)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(s){return s.replace(hv,uv)}function uv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function fv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function mv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wu:t="ENVMAP_BLENDING_MULTIPLY";break;case _p:t="ENVMAP_BLENDING_MIX";break;case vp:t="ENVMAP_BLENDING_ADD";break}return t}function gv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _v(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=dv(e),c=fv(e),h=pv(e),u=mv(e),d=gv(e),p=sv(e),_=rv(r),g=i.createProgram();let f,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ur).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(f=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?zt.tonemapping_pars_fragment:"",e.toneMapping!==Si?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=Bl(a),a=Wh(a,e),a=$h(a,e),o=Bl(o),o=Wh(o,e),o=$h(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=b+f+a,v=b+m+o,w=Hh(i,i.VERTEX_SHADER,x),E=Hh(i,i.FRAGMENT_SHADER,v);i.attachShader(g,w),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),C=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(E).trim();let O=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,E);else{const k=Gh(i,w,"vertex"),F=Gh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+k+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(C===""||U==="")&&(G=!1);G&&(P.diagnostics={runnable:O,programLog:I,vertexShader:{log:C,prefix:f},fragmentShader:{log:U,prefix:m}})}i.deleteShader(w),i.deleteShader(E),R=new Aa(i,g),M=av(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Z_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}let vv=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yv(t),e.set(t,n)),n}}class yv{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}}function bv(s,t,e,n,i,r,a){const o=new mc,l=new xv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,y,P,I,C){const U=I.fog,O=C.geometry,G=M.isMeshStandardMaterial?I.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),F=k&&k.mapping===Za?k.image.height:null,j=_[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const it=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ft=it!==void 0?it.length:0;let At=0;O.morphAttributes.position!==void 0&&(At=1),O.morphAttributes.normal!==void 0&&(At=2),O.morphAttributes.color!==void 0&&(At=3);let Yt,K,D,J;if(j){const ee=Fn[j];Yt=ee.vertexShader,K=ee.fragmentShader}else Yt=M.vertexShader,K=M.fragmentShader,l.update(M),D=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const X=s.getRenderTarget(),nt=s.state.buffers.depth.getReversed(),at=C.isInstancedMesh===!0,_t=C.isBatchedMesh===!0,Lt=!!M.map,Mt=!!M.matcap,vt=!!k,z=!!M.aoMap,ye=!!M.lightMap,Ct=!!M.bumpMap,Rt=!!M.normalMap,Et=!!M.displacementMap,te=!!M.emissiveMap,Tt=!!M.metalnessMap,L=!!M.roughnessMap,S=M.anisotropy>0,W=M.clearcoat>0,Z=M.dispersion>0,et=M.iridescence>0,Q=M.sheen>0,St=M.transmission>0,ct=S&&!!M.anisotropyMap,pt=W&&!!M.clearcoatMap,qt=W&&!!M.clearcoatNormalMap,st=W&&!!M.clearcoatRoughnessMap,mt=et&&!!M.iridescenceMap,Pt=et&&!!M.iridescenceThicknessMap,Dt=Q&&!!M.sheenColorMap,gt=Q&&!!M.sheenRoughnessMap,$t=!!M.specularMap,kt=!!M.specularColorMap,le=!!M.specularIntensityMap,B=St&&!!M.transmissionMap,lt=St&&!!M.thicknessMap,Y=!!M.gradientMap,tt=!!M.alphaMap,dt=M.alphaTest>0,ht=!!M.alphaHash,Nt=!!M.extensions;let _e=Si;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(_e=s.toneMapping);const Ie={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Yt,fragmentShader:K,defines:M.defines,customVertexShaderID:D,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:_t,batchingColor:_t&&C._colorsTexture!==null,instancing:at,instancingColor:at&&C.instanceColor!==null,instancingMorph:at&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?s.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ws,alphaToCoverage:!!M.alphaToCoverage,map:Lt,matcap:Mt,envMap:vt,envMapMode:vt&&k.mapping,envMapCubeUVHeight:F,aoMap:z,lightMap:ye,bumpMap:Ct,normalMap:Rt,displacementMap:d&&Et,emissiveMap:te,normalMapObjectSpace:Rt&&M.normalMapType===Rp,normalMapTangentSpace:Rt&&M.normalMapType===ed,metalnessMap:Tt,roughnessMap:L,anisotropy:S,anisotropyMap:ct,clearcoat:W,clearcoatMap:pt,clearcoatNormalMap:qt,clearcoatRoughnessMap:st,dispersion:Z,iridescence:et,iridescenceMap:mt,iridescenceThicknessMap:Pt,sheen:Q,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:$t,specularColorMap:kt,specularIntensityMap:le,transmission:St,transmissionMap:B,thicknessMap:lt,gradientMap:Y,opaque:M.transparent===!1&&M.blending===As&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:dt,alphaHash:ht,combine:M.combine,mapUv:Lt&&g(M.map.channel),aoMapUv:z&&g(M.aoMap.channel),lightMapUv:ye&&g(M.lightMap.channel),bumpMapUv:Ct&&g(M.bumpMap.channel),normalMapUv:Rt&&g(M.normalMap.channel),displacementMapUv:Et&&g(M.displacementMap.channel),emissiveMapUv:te&&g(M.emissiveMap.channel),metalnessMapUv:Tt&&g(M.metalnessMap.channel),roughnessMapUv:L&&g(M.roughnessMap.channel),anisotropyMapUv:ct&&g(M.anisotropyMap.channel),clearcoatMapUv:pt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(M.sheenRoughnessMap.channel),specularMapUv:$t&&g(M.specularMap.channel),specularColorMapUv:kt&&g(M.specularColorMap.channel),specularIntensityMapUv:le&&g(M.specularIntensityMap.channel),transmissionMapUv:B&&g(M.transmissionMap.channel),thicknessMapUv:lt&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Rt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!O.attributes.uv&&(Lt||tt),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:nt,skinning:C.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:At,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&Xt.getTransfer(M.map.colorSpace)===ne,decodeVideoTextureEmissive:te&&M.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(M.emissiveMap.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===ze,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(b(y,M),x(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const y=_[M.type];let P;if(y){const I=Fn[y];P=sm.clone(I.uniforms)}else P=M.uniforms;return P}function w(M,y){let P;for(let I=0,C=h.length;I<C;I++){const U=h[I];if(U.cacheKey===y){P=U,++P.usedTimes;break}}return P===void 0&&(P=new _v(s,y,M,r),h.push(P)),P}function E(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function Mv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Sv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,_,g,f){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:f},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function o(u,d,p,_,g,f){const m=a(u,d,p,_,g,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(u,d,p,_,g,f){const m=a(u,d,p,_,g,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Sv),n.length>1&&n.sort(d||Yh),i.length>1&&i.sort(d||Yh)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function wv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new jh,s.set(n,[a])):i>=r.length?(a=new jh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ev(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Bt};break;case"SpotLight":e={position:new N,direction:new N,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Tv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Av=0;function Cv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rv(s){const t=new Ev,e=Tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,r=new Qt,a=new Qt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,g=0,f=0,m=0,b=0,x=0,v=0,w=0,E=0,T=0;c.sort(Cv);for(let M=0,y=c.length;M<y;M++){const P=c[M],I=P.color,C=P.intensity,U=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*C,u+=I.g*C,d+=I.b*C;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],C);T++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,F=e.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(I).multiplyScalar(C),G.distance=U,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;const k=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,k.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=k.matrix,P.castShadow){const F=e.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.spotShadow[g]=F,n.spotShadowMap[g]=O,v++}g++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(I).multiplyScalar(C),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=G,f++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const k=P.shadow,F=e.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,n.pointShadow[_]=F,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=P.shadow.matrix,x++}n.point[_]=G,_++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(C),G.groundColor.copy(P.groundColor).multiplyScalar(C),n.hemi[m]=G,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==f||R.hemiLength!==m||R.numDirectionalShadows!==b||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=f,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=f,R.hemiLength=m,R.numDirectionalShadows=b,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=T,n.version=Av++)}function l(c,h){let u=0,d=0,p=0,_=0,g=0;const f=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),u++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function Kh(s){const t=new Rv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pv(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Kh(s),t.set(i,[o])):r>=a.length?(o=new Kh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lv extends Xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dv extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
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
}`;function Nv(s,t,e){let n=new gc;const i=new Ht,r=new Ht,a=new se,o=new Lv({depthPacking:Cp}),l=new Dv,c={},h=e.maxTextureSize,u={[Ti]:ze,[ze]:Ti,[ln]:ln},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Iv,fragmentShader:Uv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ve;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Gt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vu;let m=this.type;this.render=function(E,T,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Mi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const C=m!==Zn&&this.type===Zn,U=m===Zn&&this.type!==Zn;for(let O=0,G=E.length;O<G;O++){const k=E[O],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const j=F.getFrameExtents();if(i.multiply(j),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,F.mapSize.y=r.y)),F.map===null||C===!0||U===!0){const ft=this.type!==Zn?{minFilter:fn,magFilter:fn}:{};F.map!==null&&F.map.dispose(),F.map=new es(i.x,i.y,ft),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const it=F.getViewportCount();for(let ft=0;ft<it;ft++){const At=F.getViewport(ft);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),I.viewport(a),F.updateMatrices(k,ft),n=F.getFrustum(),v(T,R,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Zn&&b(F,R),F.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(M,y,P)};function b(E,T){const R=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new es(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,R,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,R,p,g,null)}function x(E,T,R,M){let y=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=y.uuid,C=T.uuid;let U=c[I];U===void 0&&(U={},c[I]=U);let O=U[C];O===void 0&&(O=y.clone(),U[C]=O,T.addEventListener("dispose",w)),y=O}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Zn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=s.properties.get(y);I.light=R}return y}function v(E,T,R,M,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const C=t.update(E),U=E.material;if(Array.isArray(U)){const O=C.groups;for(let G=0,k=O.length;G<k;G++){const F=O[G],j=U[F.materialIndex];if(j&&j.visible){const it=x(E,j,M,y);E.onBeforeShadow(s,E,T,R,C,it,F),s.renderBufferDirect(R,null,C,it,E,F),E.onAfterShadow(s,E,T,R,C,it,F)}}}else if(U.visible){const O=x(E,U,M,y);E.onBeforeShadow(s,E,T,R,C,O,null),s.renderBufferDirect(R,null,C,O,E,null),E.onAfterShadow(s,E,T,R,C,O,null)}}const I=E.children;for(let C=0,U=I.length;C<U;C++)v(I[C],T,R,M,y)}function w(E){E.target.removeEventListener("dispose",w);for(const R in c){const M=c[R],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Fv={[il]:sl,[rl]:ll,[al]:cl,[Is]:ol,[sl]:il,[ll]:rl,[cl]:al,[ol]:Is};function Ov(s,t){function e(){let B=!1;const lt=new se;let Y=null;const tt=new se(0,0,0,0);return{setMask:function(dt){Y!==dt&&!B&&(s.colorMask(dt,dt,dt,dt),Y=dt)},setLocked:function(dt){B=dt},setClear:function(dt,ht,Nt,_e,Ie){Ie===!0&&(dt*=_e,ht*=_e,Nt*=_e),lt.set(dt,ht,Nt,_e),tt.equals(lt)===!1&&(s.clearColor(dt,ht,Nt,_e),tt.copy(lt))},reset:function(){B=!1,Y=null,tt.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,Y=null,tt=null,dt=null;return{setReversed:function(ht){if(lt!==ht){const Nt=t.get("EXT_clip_control");lt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const _e=dt;dt=null,this.setClear(_e)}lt=ht},getReversed:function(){return lt},setTest:function(ht){ht?X(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!B&&(s.depthMask(ht),Y=ht)},setFunc:function(ht){if(lt&&(ht=Fv[ht]),tt!==ht){switch(ht){case il:s.depthFunc(s.NEVER);break;case sl:s.depthFunc(s.ALWAYS);break;case rl:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case al:s.depthFunc(s.EQUAL);break;case ol:s.depthFunc(s.GEQUAL);break;case ll:s.depthFunc(s.GREATER);break;case cl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ht}},setLocked:function(ht){B=ht},setClear:function(ht){dt!==ht&&(lt&&(ht=1-ht),s.clearDepth(ht),dt=ht)},reset:function(){B=!1,Y=null,tt=null,dt=null,lt=!1}}}function i(){let B=!1,lt=null,Y=null,tt=null,dt=null,ht=null,Nt=null,_e=null,Ie=null;return{setTest:function(ee){B||(ee?X(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!B&&(s.stencilMask(ee),lt=ee)},setFunc:function(ee,En,Wn){(Y!==ee||tt!==En||dt!==Wn)&&(s.stencilFunc(ee,En,Wn),Y=ee,tt=En,dt=Wn)},setOp:function(ee,En,Wn){(ht!==ee||Nt!==En||_e!==Wn)&&(s.stencilOp(ee,En,Wn),ht=ee,Nt=En,_e=Wn)},setLocked:function(ee){B=ee},setClear:function(ee){Ie!==ee&&(s.clearStencil(ee),Ie=ee)},reset:function(){B=!1,lt=null,Y=null,tt=null,dt=null,ht=null,Nt=null,_e=null,Ie=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,g=!1,f=null,m=null,b=null,x=null,v=null,w=null,E=null,T=new Bt(0,0,0),R=0,M=!1,y=null,P=null,I=null,C=null,U=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=k>=2);let j=null,it={};const ft=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Yt=new se().fromArray(ft),K=new se().fromArray(At);function D(B,lt,Y,tt){const dt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(B,ht),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<Y;Nt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(lt+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ht}const J={};J[s.TEXTURE_2D]=D(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=D(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=D(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=D(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(s.DEPTH_TEST),a.setFunc(Is),Ct(!1),Rt(eh),X(s.CULL_FACE),z(Mi);function X(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function nt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function at(B,lt){return u[B]!==lt?(s.bindFramebuffer(B,lt),u[B]=lt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function _t(B,lt){let Y=p,tt=!1;if(B){Y=d.get(lt),Y===void 0&&(Y=[],d.set(lt,Y));const dt=B.textures;if(Y.length!==dt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Nt=dt.length;ht<Nt;ht++)Y[ht]=s.COLOR_ATTACHMENT0+ht;Y.length=dt.length,tt=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Y)}function Lt(B){return _!==B?(s.useProgram(B),_=B,!0):!1}const Mt={[$i]:s.FUNC_ADD,[tp]:s.FUNC_SUBTRACT,[ep]:s.FUNC_REVERSE_SUBTRACT};Mt[np]=s.MIN,Mt[ip]=s.MAX;const vt={[sp]:s.ZERO,[rp]:s.ONE,[ap]:s.SRC_COLOR,[el]:s.SRC_ALPHA,[dp]:s.SRC_ALPHA_SATURATE,[hp]:s.DST_COLOR,[lp]:s.DST_ALPHA,[op]:s.ONE_MINUS_SRC_COLOR,[nl]:s.ONE_MINUS_SRC_ALPHA,[up]:s.ONE_MINUS_DST_COLOR,[cp]:s.ONE_MINUS_DST_ALPHA,[fp]:s.CONSTANT_COLOR,[pp]:s.ONE_MINUS_CONSTANT_COLOR,[mp]:s.CONSTANT_ALPHA,[gp]:s.ONE_MINUS_CONSTANT_ALPHA};function z(B,lt,Y,tt,dt,ht,Nt,_e,Ie,ee){if(B===Mi){g===!0&&(nt(s.BLEND),g=!1);return}if(g===!1&&(X(s.BLEND),g=!0),B!==Qf){if(B!==f||ee!==M){if((m!==$i||v!==$i)&&(s.blendEquation(s.FUNC_ADD),m=$i,v=$i),ee)switch(B){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ei:s.blendFunc(s.ONE,s.ONE);break;case nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ih:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ei:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ih:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,x=null,w=null,E=null,T.set(0,0,0),R=0,f=B,M=ee}return}dt=dt||lt,ht=ht||Y,Nt=Nt||tt,(lt!==m||dt!==v)&&(s.blendEquationSeparate(Mt[lt],Mt[dt]),m=lt,v=dt),(Y!==b||tt!==x||ht!==w||Nt!==E)&&(s.blendFuncSeparate(vt[Y],vt[tt],vt[ht],vt[Nt]),b=Y,x=tt,w=ht,E=Nt),(_e.equals(T)===!1||Ie!==R)&&(s.blendColor(_e.r,_e.g,_e.b,Ie),T.copy(_e),R=Ie),f=B,M=!1}function ye(B,lt){B.side===ln?nt(s.CULL_FACE):X(s.CULL_FACE);let Y=B.side===ze;lt&&(Y=!Y),Ct(Y),B.blending===As&&B.transparent===!1?z(Mi):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const tt=B.stencilWrite;o.setTest(tt),tt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),te(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?X(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(B){y!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),y=B)}function Rt(B){B!==Zf?(X(s.CULL_FACE),B!==P&&(B===eh?s.cullFace(s.BACK):B===Jf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),P=B}function Et(B){B!==I&&(G&&s.lineWidth(B),I=B)}function te(B,lt,Y){B?(X(s.POLYGON_OFFSET_FILL),(C!==lt||U!==Y)&&(s.polygonOffset(lt,Y),C=lt,U=Y)):nt(s.POLYGON_OFFSET_FILL)}function Tt(B){B?X(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function L(B){B===void 0&&(B=s.TEXTURE0+O-1),j!==B&&(s.activeTexture(B),j=B)}function S(B,lt,Y){Y===void 0&&(j===null?Y=s.TEXTURE0+O-1:Y=j);let tt=it[Y];tt===void 0&&(tt={type:void 0,texture:void 0},it[Y]=tt),(tt.type!==B||tt.texture!==lt)&&(j!==Y&&(s.activeTexture(Y),j=Y),s.bindTexture(B,lt||J[B]),tt.type=B,tt.texture=lt)}function W(){const B=it[j];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(B){Yt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Yt.copy(B))}function gt(B){K.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function $t(B,lt){let Y=c.get(lt);Y===void 0&&(Y=new WeakMap,c.set(lt,Y));let tt=Y.get(B);tt===void 0&&(tt=s.getUniformBlockIndex(lt,B.name),Y.set(B,tt))}function kt(B,lt){const tt=c.get(lt).get(B);l.get(lt)!==tt&&(s.uniformBlockBinding(lt,tt,B.__bindingPointIndex),l.set(lt,tt))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,it={},u={},d=new WeakMap,p=[],_=null,g=!1,f=null,m=null,b=null,x=null,v=null,w=null,E=null,T=new Bt(0,0,0),R=0,M=!1,y=null,P=null,I=null,C=null,U=null,Yt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:nt,bindFramebuffer:at,drawBuffers:_t,useProgram:Lt,setBlending:z,setMaterial:ye,setFlipSided:Ct,setCullFace:Rt,setLineWidth:Et,setPolygonOffset:te,setScissorTest:Tt,activeTexture:L,bindTexture:S,unbindTexture:W,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:mt,texImage3D:Pt,updateUBOMapping:$t,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:st,texSubImage2D:Q,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Dt,viewport:gt,reset:le}}function Zh(s,t,e,n){const i=kv(n);switch(e){case ju:return s*t;case Zu:return s*t;case Ju:return s*t*2;case hc:return s*t/i.components*i.byteLength;case uc:return s*t/i.components*i.byteLength;case Qu:return s*t*2/i.components*i.byteLength;case dc:return s*t*2/i.components*i.byteLength;case Ku:return s*t*3/i.components*i.byteLength;case Ln:return s*t*4/i.components*i.byteLength;case fc:return s*t*4/i.components*i.byteLength;case Ma:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wa:case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(s,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(s,8)*Math.max(t,8)/2;case _l:case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ta:case Ul:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case td:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ol:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kv(s){switch(s){case ii:case qu:return{byteLength:1,components:1};case Sr:case Xu:case Or:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case ts:case oc:case zn:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function zv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,S){return p?new OffscreenCanvas(L,S):Na("canvas")}function g(L,S,W){let Z=1;const et=Tt(L);if((et.width>W||et.height>W)&&(Z=W/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(Z*et.width),St=Math.floor(Z*et.height);u===void 0&&(u=_(Q,St));const ct=S?_(Q,St):u;return ct.width=Q,ct.height=St,ct.getContext("2d").drawImage(L,0,0,Q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+St+")."),ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function f(L){return L.generateMipmaps}function m(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,S,W,Z,et=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=S;if(S===s.RED&&(W===s.FLOAT&&(Q=s.R32F),W===s.HALF_FLOAT&&(Q=s.R16F),W===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.R8UI),W===s.UNSIGNED_SHORT&&(Q=s.R16UI),W===s.UNSIGNED_INT&&(Q=s.R32UI),W===s.BYTE&&(Q=s.R8I),W===s.SHORT&&(Q=s.R16I),W===s.INT&&(Q=s.R32I)),S===s.RG&&(W===s.FLOAT&&(Q=s.RG32F),W===s.HALF_FLOAT&&(Q=s.RG16F),W===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RG8UI),W===s.UNSIGNED_SHORT&&(Q=s.RG16UI),W===s.UNSIGNED_INT&&(Q=s.RG32UI),W===s.BYTE&&(Q=s.RG8I),W===s.SHORT&&(Q=s.RG16I),W===s.INT&&(Q=s.RG32I)),S===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),W===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),W===s.UNSIGNED_INT&&(Q=s.RGB32UI),W===s.BYTE&&(Q=s.RGB8I),W===s.SHORT&&(Q=s.RGB16I),W===s.INT&&(Q=s.RGB32I)),S===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),W===s.UNSIGNED_INT&&(Q=s.RGBA32UI),W===s.BYTE&&(Q=s.RGBA8I),W===s.SHORT&&(Q=s.RGBA16I),W===s.INT&&(Q=s.RGBA32I)),S===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),S===s.RGBA){const St=et?Ja:Xt.getTransfer(Z);W===s.FLOAT&&(Q=s.RGBA32F),W===s.HALF_FLOAT&&(Q=s.RGBA16F),W===s.UNSIGNED_BYTE&&(Q=St===ne?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(L,S){let W;return L?S===null||S===ts||S===Fs?W=s.DEPTH24_STENCIL8:S===zn?W=s.DEPTH32F_STENCIL8:S===Sr&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===Fs?W=s.DEPTH_COMPONENT24:S===zn?W=s.DEPTH_COMPONENT32F:S===Sr&&(W=s.DEPTH_COMPONENT16),W}function w(L,S){return f(L)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function E(L){const S=L.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function T(L){const S=L.target;S.removeEventListener("dispose",T),y(S)}function R(L){const S=n.get(L);if(S.__webglInit===void 0)return;const W=L.source,Z=d.get(W);if(Z){const et=Z[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(L),Object.keys(Z).length===0&&d.delete(W)}n.remove(L)}function M(L){const S=n.get(L);s.deleteTexture(S.__webglTexture);const W=L.source,Z=d.get(W);delete Z[S.__cacheKey],a.memory.textures--}function y(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let et=0;et<S.__webglFramebuffer[Z].length;et++)s.deleteFramebuffer(S.__webglFramebuffer[Z][et]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=L.textures;for(let Z=0,et=W.length;Z<et;Z++){const Q=n.get(W[Z]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(W[Z])}n.remove(L)}let P=0;function I(){P=0}function C(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function U(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function O(L,S){const W=n.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,L,S);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+S)}function G(L,S){const W=n.get(L);if(L.version>0&&W.__version!==L.version){K(W,L,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+S)}function k(L,S){const W=n.get(L);if(L.version>0&&W.__version!==L.version){K(W,L,S);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+S)}function F(L,S){const W=n.get(L);if(L.version>0&&W.__version!==L.version){D(W,L,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+S)}const j={[Ia]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[dl]:s.MIRRORED_REPEAT},it={[fn]:s.NEAREST,[Tp]:s.NEAREST_MIPMAP_NEAREST,[qr]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[ho]:s.LINEAR_MIPMAP_NEAREST,[Yi]:s.LINEAR_MIPMAP_LINEAR},ft={[Pp]:s.NEVER,[Fp]:s.ALWAYS,[Lp]:s.LESS,[nd]:s.LEQUAL,[Dp]:s.EQUAL,[Np]:s.GEQUAL,[Ip]:s.GREATER,[Up]:s.NOTEQUAL};function At(L,S){if(S.type===zn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===kn||S.magFilter===ho||S.magFilter===qr||S.magFilter===Yi||S.minFilter===kn||S.minFilter===ho||S.minFilter===qr||S.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,j[S.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,j[S.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,j[S.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,it[S.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==qr&&S.minFilter!==Yi||S.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Yt(L,S){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",E));const Z=S.source;let et=d.get(Z);et===void 0&&(et={},d.set(Z,et));const Q=U(S);if(Q!==L.__cacheKey){et[Q]===void 0&&(et[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),et[Q].usedTimes++;const St=et[L.__cacheKey];St!==void 0&&(et[L.__cacheKey].usedTimes--,St.usedTimes===0&&M(S)),L.__cacheKey=Q,L.__webglTexture=et[Q].texture}return W}function K(L,S,W){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);const et=Yt(L,S),Q=S.source;e.bindTexture(Z,L.__webglTexture,s.TEXTURE0+W);const St=n.get(Q);if(Q.version!==St.__version||et===!0){e.activeTexture(s.TEXTURE0+W);const ct=Xt.getPrimaries(Xt.workingColorSpace),pt=S.colorSpace===gi?null:Xt.getPrimaries(S.colorSpace),qt=S.colorSpace===gi||ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let st=g(S.image,!1,i.maxTextureSize);st=te(S,st);const mt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type);let Dt=x(S.internalFormat,mt,Pt,S.colorSpace,S.isVideoTexture);At(Z,S);let gt;const $t=S.mipmaps,kt=S.isVideoTexture!==!0,le=St.__version===void 0||et===!0,B=Q.dataReady,lt=w(S,st);if(S.isDepthTexture)Dt=v(S.format===Os,S.type),le&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Dt,st.width,st.height,0,mt,Pt,null));else if(S.isDataTexture)if($t.length>0){kt&&le&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,$t[0].width,$t[0].height);for(let Y=0,tt=$t.length;Y<tt;Y++)gt=$t[Y],kt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(s.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,mt,Pt,gt.data);S.generateMipmaps=!1}else kt?(le&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,st.width,st.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,mt,Pt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,st.width,st.height,0,mt,Pt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,$t[0].width,$t[0].height,st.depth);for(let Y=0,tt=$t.length;Y<tt;Y++)if(gt=$t[Y],S.format!==Ln)if(mt!==null)if(kt){if(B)if(S.layerUpdates.size>0){const dt=Zh(gt.width,gt.height,S.format,S.type);for(const ht of S.layerUpdates){const Nt=gt.data.subarray(ht*dt/gt.data.BYTES_PER_ELEMENT,(ht+1)*dt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ht,gt.width,gt.height,1,mt,Nt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,st.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Dt,gt.width,gt.height,st.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,st.depth,mt,Pt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Dt,gt.width,gt.height,st.depth,0,mt,Pt,gt.data)}else{kt&&le&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,$t[0].width,$t[0].height);for(let Y=0,tt=$t.length;Y<tt;Y++)gt=$t[Y],S.format!==Ln?mt!==null?kt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(s.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,mt,Pt,gt.data)}else if(S.isDataArrayTexture)if(kt){if(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,st.width,st.height,st.depth),B)if(S.layerUpdates.size>0){const Y=Zh(st.width,st.height,S.format,S.type);for(const tt of S.layerUpdates){const dt=st.data.subarray(tt*Y/st.data.BYTES_PER_ELEMENT,(tt+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,mt,Pt,dt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,mt,Pt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,mt,Pt,st.data);else if(S.isData3DTexture)kt?(le&&e.texStorage3D(s.TEXTURE_3D,lt,Dt,st.width,st.height,st.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,mt,Pt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,mt,Pt,st.data);else if(S.isFramebufferTexture){if(le)if(kt)e.texStorage2D(s.TEXTURE_2D,lt,Dt,st.width,st.height);else{let Y=st.width,tt=st.height;for(let dt=0;dt<lt;dt++)e.texImage2D(s.TEXTURE_2D,dt,Dt,Y,tt,0,mt,Pt,null),Y>>=1,tt>>=1}}else if($t.length>0){if(kt&&le){const Y=Tt($t[0]);e.texStorage2D(s.TEXTURE_2D,lt,Dt,Y.width,Y.height)}for(let Y=0,tt=$t.length;Y<tt;Y++)gt=$t[Y],kt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt,Pt,gt):e.texImage2D(s.TEXTURE_2D,Y,Dt,mt,Pt,gt);S.generateMipmaps=!1}else if(kt){if(le){const Y=Tt(st);e.texStorage2D(s.TEXTURE_2D,lt,Dt,Y.width,Y.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Pt,st)}else e.texImage2D(s.TEXTURE_2D,0,Dt,mt,Pt,st);f(S)&&m(Z),St.__version=Q.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function D(L,S,W){if(S.image.length!==6)return;const Z=Yt(L,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+W);const Q=n.get(et);if(et.version!==Q.__version||Z===!0){e.activeTexture(s.TEXTURE0+W);const St=Xt.getPrimaries(Xt.workingColorSpace),ct=S.colorSpace===gi?null:Xt.getPrimaries(S.colorSpace),pt=S.colorSpace===gi||St===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,mt=[];for(let tt=0;tt<6;tt++)!qt&&!st?mt[tt]=g(S.image[tt],!0,i.maxCubemapSize):mt[tt]=st?S.image[tt].image:S.image[tt],mt[tt]=te(S,mt[tt]);const Pt=mt[0],Dt=r.convert(S.format,S.colorSpace),gt=r.convert(S.type),$t=x(S.internalFormat,Dt,gt,S.colorSpace),kt=S.isVideoTexture!==!0,le=Q.__version===void 0||Z===!0,B=et.dataReady;let lt=w(S,Pt);At(s.TEXTURE_CUBE_MAP,S);let Y;if(qt){kt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,$t,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){Y=mt[tt].mipmaps;for(let dt=0;dt<Y.length;dt++){const ht=Y[dt];S.format!==Ln?Dt!==null?kt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,ht.width,ht.height,Dt,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,$t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,ht.width,ht.height,Dt,gt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,$t,ht.width,ht.height,0,Dt,gt,ht.data)}}}else{if(Y=S.mipmaps,kt&&le){Y.length>0&&lt++;const tt=Tt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){kt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,mt[tt].width,mt[tt].height,Dt,gt,mt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,mt[tt].width,mt[tt].height,0,Dt,gt,mt[tt].data);for(let dt=0;dt<Y.length;dt++){const Nt=Y[dt].image[tt].image;kt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Nt.width,Nt.height,Dt,gt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,$t,Nt.width,Nt.height,0,Dt,gt,Nt.data)}}else{kt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,gt,mt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Dt,gt,mt[tt]);for(let dt=0;dt<Y.length;dt++){const ht=Y[dt];kt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Dt,gt,ht.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,$t,Dt,gt,ht.image[tt])}}}f(S)&&m(s.TEXTURE_CUBE_MAP),Q.__version=et.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function J(L,S,W,Z,et,Q){const St=r.convert(W.format,W.colorSpace),ct=r.convert(W.type),pt=x(W.internalFormat,St,ct,W.colorSpace),qt=n.get(S),st=n.get(W);if(st.__renderTarget=S,!qt.__hasExternalTextures){const mt=Math.max(1,S.width>>Q),Pt=Math.max(1,S.height>>Q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,pt,mt,Pt,S.depth,0,St,ct,null):e.texImage2D(et,Q,pt,mt,Pt,0,St,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Rt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,et,st.__webglTexture,0,Ct(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,et,st.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function X(L,S,W){if(s.bindRenderbuffer(s.RENDERBUFFER,L),S.depthBuffer){const Z=S.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,Q=v(S.stencilBuffer,et),St=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Ct(S);Rt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Q,S.width,S.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,L)}else{const Z=S.textures;for(let et=0;et<Z.length;et++){const Q=Z[et],St=r.convert(Q.format,Q.colorSpace),ct=r.convert(Q.type),pt=x(Q.internalFormat,St,ct,Q.colorSpace),qt=Ct(S);W&&Rt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,pt,S.width,S.height):Rt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,pt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const et=Z.__webglTexture,Q=Ct(S);if(S.depthTexture.format===Cs)Rt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(S.depthTexture.format===Os)Rt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function at(L){const S=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Z}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,L)}else if(W){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),X(S.__webglDepthbuffer[Z],L,!1);else{const et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),X(S.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(L,S,W){const Z=n.get(L);S!==void 0&&J(Z.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&at(L)}function Lt(L){const S=L.texture,W=n.get(L),Z=n.get(S);L.addEventListener("dispose",T);const et=L.textures,Q=L.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),Q){W.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ct]=[];for(let pt=0;pt<S.mipmaps.length;pt++)W.__webglFramebuffer[ct][pt]=s.createFramebuffer()}else W.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)W.__webglFramebuffer[ct]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(St)for(let ct=0,pt=et.length;ct<pt;ct++){const qt=n.get(et[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&Rt(L)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const pt=et[ct];W.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ct]);const qt=r.convert(pt.format,pt.colorSpace),st=r.convert(pt.type),mt=x(pt.internalFormat,qt,st,pt.colorSpace,L.isXRRenderTarget===!0),Pt=Ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,mt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,W.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),X(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),At(s.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)J(W.__webglFramebuffer[ct][pt],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else J(W.__webglFramebuffer[ct],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);f(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,pt=et.length;ct<pt;ct++){const qt=et[ct],st=n.get(qt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),At(s.TEXTURE_2D,qt),J(W.__webglFramebuffer,L,qt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),f(qt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ct=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),At(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)J(W.__webglFramebuffer[pt],L,S,s.COLOR_ATTACHMENT0,ct,pt);else J(W.__webglFramebuffer,L,S,s.COLOR_ATTACHMENT0,ct,0);f(S)&&m(ct),e.unbindTexture()}L.depthBuffer&&at(L)}function Mt(L){const S=L.textures;for(let W=0,Z=S.length;W<Z;W++){const et=S[W];if(f(et)){const Q=b(L),St=n.get(et).__webglTexture;e.bindTexture(Q,St),m(Q),e.unbindTexture()}}}const vt=[],z=[];function ye(L){if(L.samples>0){if(Rt(L)===!1){const S=L.textures,W=L.width,Z=L.height;let et=s.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(L),ct=S.length>1;if(ct)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const qt=n.get(S[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,W,Z,0,0,W,Z,et,s.NEAREST),l===!0&&(vt.length=0,z.length=0,vt.push(s.COLOR_ATTACHMENT0+pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(vt.push(Q),z.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const qt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const S=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ct(L){return Math.min(i.maxSamples,L.samples)}function Rt(L){const S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(L){const S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function te(L,S){const W=L.colorSpace,Z=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Ws&&W!==gi&&(Xt.getTransfer(W)===ne?(Z!==Ln||et!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function Tt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=k,this.setTextureCube=F,this.rebindTextures=_t,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Rt}function Bv(s,t){function e(n,i=gi){let r;const a=Xt.getTransfer(i);if(n===ii)return s.UNSIGNED_BYTE;if(n===lc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return s.BYTE;if(n===Xu)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===oc)return s.INT;if(n===ts)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===Or)return s.HALF_FLOAT;if(n===ju)return s.ALPHA;if(n===Ku)return s.RGB;if(n===Ln)return s.RGBA;if(n===Zu)return s.LUMINANCE;if(n===Ju)return s.LUMINANCE_ALPHA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===Os)return s.DEPTH_STENCIL;if(n===hc)return s.RED;if(n===uc)return s.RED_INTEGER;if(n===Qu)return s.RG;if(n===dc)return s.RG_INTEGER;if(n===fc)return s.RGBA_INTEGER;if(n===Ma||n===Sa||n===wa||n===Ea)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===vl||n===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===vl)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yl||n===bl||n===Ml||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Ll||n===Dl||n===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Ul||n===Nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===td||n===Fl||n===Ol||n===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Hv extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vv={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),m=this._getHandJoint(c,g);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
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

}`;class $v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:Gv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qv extends $s{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=new $v,f=e.getContextAttributes();let m=null,b=null;const x=[],v=[],w=new Ht;let E=null;const T=new Fe;T.viewport=new se;const R=new Fe;R.viewport=new se;const M=[T,R],y=new Hv;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let D=x[K];return D===void 0&&(D=new Bo,x[K]=D),D.getTargetRaySpace()},this.getControllerGrip=function(K){let D=x[K];return D===void 0&&(D=new Bo,x[K]=D),D.getGripSpace()},this.getHand=function(K){let D=x[K];return D===void 0&&(D=new Bo,x[K]=D),D.getHandSpace()};function C(K){const D=v.indexOf(K.inputSource);if(D===-1)return;const J=x[D];J!==void 0&&(J.update(K.inputSource,K.frame,c||a),J.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",O);for(let K=0;K<x.length;K++){const D=v[K];D!==null&&(v[K]=null,x[K].disconnect(D))}P=null,I=null,g.reset(),t.setRenderTarget(m),p=null,d=null,u=null,i=null,b=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",U),i.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0){const D={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,D),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new es(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let D=null,J=null,X=null;f.depth&&(X=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=f.stencil?Os:Cs,J=f.stencil?Fs:ts);const nt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new es(d.textureWidth,d.textureHeight,{format:Ln,type:ii,depthTexture:new pd(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(K){for(let D=0;D<K.removed.length;D++){const J=K.removed[D],X=v.indexOf(J);X>=0&&(v[X]=null,x[X].disconnect(J))}for(let D=0;D<K.added.length;D++){const J=K.added[D];let X=v.indexOf(J);if(X===-1){for(let at=0;at<x.length;at++)if(at>=v.length){v.push(J),X=at;break}else if(v[at]===null){v[at]=J,X=at;break}if(X===-1)break}const nt=x[X];nt&&nt.connect(J)}}const G=new N,k=new N;function F(K,D,J){G.setFromMatrixPosition(D.matrixWorld),k.setFromMatrixPosition(J.matrixWorld);const X=G.distanceTo(k),nt=D.projectionMatrix.elements,at=J.projectionMatrix.elements,_t=nt[14]/(nt[10]-1),Lt=nt[14]/(nt[10]+1),Mt=(nt[9]+1)/nt[5],vt=(nt[9]-1)/nt[5],z=(nt[8]-1)/nt[0],ye=(at[8]+1)/at[0],Ct=_t*z,Rt=_t*ye,Et=X/(-z+ye),te=Et*-z;if(D.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(te),K.translateZ(Et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),nt[10]===-1)K.projectionMatrix.copy(D.projectionMatrix),K.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const Tt=_t+Et,L=Lt+Et,S=Ct-te,W=Rt+(X-te),Z=Mt*Lt/L*Tt,et=vt*Lt/L*Tt;K.projectionMatrix.makePerspective(S,W,Z,et,Tt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function j(K,D){D===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(D.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let D=K.near,J=K.far;g.texture!==null&&(g.depthNear>0&&(D=g.depthNear),g.depthFar>0&&(J=g.depthFar)),y.near=R.near=T.near=D,y.far=R.far=T.far=J,(P!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,I=y.far),T.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const X=K.parent,nt=y.cameras;j(y,X);for(let at=0;at<nt.length;at++)j(nt[at],X);nt.length===2?F(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),it(K,y,X)};function it(K,D,J){J===null?K.matrix.copy(D.matrixWorld):(K.matrix.copy(J.matrixWorld),K.matrix.invert(),K.matrix.multiply(D.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(D.projectionMatrix),K.projectionMatrixInverse.copy(D.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ft=null;function At(K,D){if(h=D.getViewerPose(c||a),_=D,h!==null){const J=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let X=!1;J.length!==y.cameras.length&&(y.cameras.length=0,X=!0);for(let at=0;at<J.length;at++){const _t=J[at];let Lt=null;if(p!==null)Lt=p.getViewport(_t);else{const vt=u.getViewSubImage(d,_t);Lt=vt.viewport,at===0&&(t.setRenderTargetTextures(b,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(b))}let Mt=M[at];Mt===void 0&&(Mt=new Fe,Mt.layers.enable(at),Mt.viewport=new se,M[at]=Mt),Mt.matrix.fromArray(_t.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(_t.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),at===0&&(y.matrix.copy(Mt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),X===!0&&y.cameras.push(Mt)}const nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const at=u.getDepthInformation(J[0]);at&&at.isValid&&at.texture&&g.init(t,at,i.renderState)}}for(let J=0;J<x.length;J++){const X=v[J],nt=x[J];X!==null&&nt!==void 0&&nt.update(X,D,c||a)}ft&&ft(K,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),_=null}const Yt=new dd;Yt.setAnimationLoop(At),this.setAnimationLoop=function(K){ft=K},this.dispose=function(){}}}const ki=new wn,Xv=new Qt;function Yv(s,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,cd(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,b,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,v)):m.isMeshMatcapMaterial?(r(f,m),_(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),g(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,b,x):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===ze&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===ze&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const b=t.get(m),x=b.envMap,v=b.envMapRotation;x&&(f.envMap.value=x,ki.copy(v),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),f.envMapRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(ki)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,b,x){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=x*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,b){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){const b=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jv(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(_(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",f));const w=x.program;n.updateUBOMapping(b,w);const E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){const x=u();b.__bindingPointIndex=x;const v=s.createBuffer(),w=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,T=v.length;E<T;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,y=R.length;M<y;M++){const P=R[M];if(p(P,E,M,w)===!0){const I=P.__offset,C=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let O=0;O<C.length;O++){const G=C[O],k=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,I+U,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,x,v,w){const E=b.value,T=x+"_"+v;if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:w[T]=E.clone(),!0;{const R=w[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return w[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(b){const x=b.uniforms;let v=0;const w=16;for(let T=0,R=x.length;T<R;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,P=M.length;y<P;y++){const I=M[y],C=Array.isArray(I.value)?I.value:[I.value];for(let U=0,O=C.length;U<O;U++){const G=C[U],k=g(G),F=v%w,j=F%k.boundary,it=F+j;v+=j,it!==0&&w-it<k.storage&&(v+=w-it),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=k.storage}}}const E=v%w;return E>0&&(v+=w-E),b.__size=v,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function f(b){const x=b.target;x.removeEventListener("dispose",f);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Kv{constructor(t={}){const{canvas:e=kp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let f=null,m=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=Si,this.toneMappingExposure=1;const v=this;let w=!1,E=0,T=0,R=null,M=-1,y=null;const P=new se,I=new se;let C=null;const U=new Bt(0);let O=0,G=e.width,k=e.height,F=1,j=null,it=null;const ft=new se(0,0,G,k),At=new se(0,0,G,k);let Yt=!1;const K=new gc;let D=!1,J=!1;const X=new Qt,nt=new Qt,at=new N,_t=new se,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function vt(){return R===null?F:1}let z=n;function ye(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){const H="webgl2";if(z=ye(H,A),z===null)throw ye(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ct,Rt,Et,te,Tt,L,S,W,Z,et,Q,St,ct,pt,qt,st,mt,Pt,Dt,gt,$t,kt,le,B;function lt(){Ct=new e_(z),Ct.init(),kt=new Bv(z,Ct),Rt=new jg(z,Ct,t,kt),Et=new Ov(z,Ct),Rt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),te=new s_(z),Tt=new Mv,L=new zv(z,Ct,Et,Tt,Rt,kt,te),S=new Zg(v),W=new t_(v),Z=new um(z),le=new Xg(z,Z),et=new n_(z,Z,te,le),Q=new a_(z,et,Z,te),Dt=new r_(z,Rt,L),st=new Kg(Tt),St=new bv(v,S,W,Ct,Rt,le,st),ct=new Yv(v,Tt),pt=new wv,qt=new Pv(Ct),Pt=new qg(v,S,W,Et,Q,p,l),mt=new Nv(v,Q,Rt),B=new jv(z,te,Rt,Et),gt=new Yg(z,Ct,te),$t=new i_(z,Ct,te),te.programs=St.programs,v.capabilities=Rt,v.extensions=Ct,v.properties=Tt,v.renderLists=pt,v.shadowMap=mt,v.state=Et,v.info=te}lt();const Y=new qv(v,z);this.xr=Y,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(G,k,!1))},this.getSize=function(A){return A.set(G,k)},this.setSize=function(A,H,$=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,k=H,e.width=Math.floor(A*F),e.height=Math.floor(H*F),$===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(G*F,k*F).floor()},this.setDrawingBufferSize=function(A,H,$){G=A,k=H,F=$,e.width=Math.floor(A*$),e.height=Math.floor(H*$),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,H,$,q){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,H,$,q),Et.viewport(P.copy(ft).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,H,$,q){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,H,$,q),Et.scissor(I.copy(At).multiplyScalar(F).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(A){Et.setScissorTest(Yt=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(A=!0,H=!0,$=!0){let q=0;if(A){let V=!1;if(R!==null){const rt=R.texture.format;V=rt===fc||rt===dc||rt===uc}if(V){const rt=R.texture.type,ut=rt===ii||rt===ts||rt===Sr||rt===Fs||rt===lc||rt===cc,xt=Pt.getClearColor(),yt=Pt.getClearAlpha(),It=xt.r,Ft=xt.g,bt=xt.b;ut?(_[0]=It,_[1]=Ft,_[2]=bt,_[3]=yt,z.clearBufferuiv(z.COLOR,0,_)):(g[0]=It,g[1]=Ft,g[2]=bt,g[3]=yt,z.clearBufferiv(z.COLOR,0,g))}else q|=z.COLOR_BUFFER_BIT}H&&(q|=z.DEPTH_BUFFER_BIT),$&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),qt.dispose(),Tt.dispose(),S.dispose(),W.dispose(),Q.dispose(),le.dispose(),B.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Xc),Y.removeEventListener("sessionend",Yc),Di.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=te.autoReset,H=mt.enabled,$=mt.autoUpdate,q=mt.needsUpdate,V=mt.type;lt(),te.autoReset=A,mt.enabled=H,mt.autoUpdate=$,mt.needsUpdate=q,mt.type=V}function ht(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nt(A){const H=A.target;H.removeEventListener("dispose",Nt),_e(H)}function _e(A){Ie(A),Tt.remove(A)}function Ie(A){const H=Tt.get(A).programs;H!==void 0&&(H.forEach(function($){St.releaseProgram($)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,$,q,V,rt){H===null&&(H=Lt);const ut=V.isMesh&&V.matrixWorld.determinant()<0,xt=Yf(A,H,$,q,V);Et.setMaterial(q,ut);let yt=$.index,It=1;if(q.wireframe===!0){if(yt=et.getWireframeAttribute($),yt===void 0)return;It=2}const Ft=$.drawRange,bt=$.attributes.position;let jt=Ft.start*It,ce=(Ft.start+Ft.count)*It;rt!==null&&(jt=Math.max(jt,rt.start*It),ce=Math.min(ce,(rt.start+rt.count)*It)),yt!==null?(jt=Math.max(jt,0),ce=Math.min(ce,yt.count)):bt!=null&&(jt=Math.max(jt,0),ce=Math.min(ce,bt.count));const he=ce-jt;if(he<0||he===1/0)return;le.setup(V,q,xt,$,yt);let qe,Zt=gt;if(yt!==null&&(qe=Z.get(yt),Zt=$t,Zt.setIndex(qe)),V.isMesh)q.wireframe===!0?(Et.setLineWidth(q.wireframeLinewidth*vt()),Zt.setMode(z.LINES)):Zt.setMode(z.TRIANGLES);else if(V.isLine){let wt=q.linewidth;wt===void 0&&(wt=1),Et.setLineWidth(wt*vt()),V.isLineSegments?Zt.setMode(z.LINES):V.isLineLoop?Zt.setMode(z.LINE_LOOP):Zt.setMode(z.LINE_STRIP)}else V.isPoints?Zt.setMode(z.POINTS):V.isSprite&&Zt.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Zt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))Zt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const wt=V._multiDrawStarts,$n=V._multiDrawCounts,Jt=V._multiDrawCount,Tn=yt?Z.get(yt).bytesPerElement:1,as=Tt.get(q).currentProgram.getUniforms();for(let nn=0;nn<Jt;nn++)as.setValue(z,"_gl_DrawID",nn),Zt.render(wt[nn]/Tn,$n[nn])}else if(V.isInstancedMesh)Zt.renderInstances(jt,he,V.count);else if($.isInstancedBufferGeometry){const wt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,$n=Math.min($.instanceCount,wt);Zt.renderInstances(jt,he,$n)}else Zt.render(jt,he)};function ee(A,H,$){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=ze,A.needsUpdate=!0,$r(A,H,$),A.side=Ti,A.needsUpdate=!0,$r(A,H,$),A.side=ln):$r(A,H,$)}this.compile=function(A,H,$=null){$===null&&($=A),m=qt.get($),m.init(H),x.push(m),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==$&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const q=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const rt=V.material;if(rt)if(Array.isArray(rt))for(let ut=0;ut<rt.length;ut++){const xt=rt[ut];ee(xt,$,V),q.add(xt)}else ee(rt,$,V),q.add(rt)}),x.pop(),m=null,q},this.compileAsync=function(A,H,$=null){const q=this.compile(A,H,$);return new Promise(V=>{function rt(){if(q.forEach(function(ut){Tt.get(ut).currentProgram.isReady()&&q.delete(ut)}),q.size===0){V(A);return}setTimeout(rt,10)}Ct.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let En=null;function Wn(A){En&&En(A)}function Xc(){Di.stop()}function Yc(){Di.start()}const Di=new dd;Di.setAnimationLoop(Wn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(A){En=A,Y.setAnimationLoop(A),A===null?Di.stop():Di.start()},Y.addEventListener("sessionstart",Xc),Y.addEventListener("sessionend",Yc),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,R),m=qt.get(A,x.length),m.init(H),x.push(m),nt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(nt),J=this.localClippingEnabled,D=st.init(this.clippingPlanes,J),f=pt.get(A,b.length),f.init(),b.push(f),Y.enabled===!0&&Y.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&co(rt,H,-1/0,v.sortObjects)}co(A,H,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(j,it),Mt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Mt&&Pt.addToRenderList(f,A),this.info.render.frame++,D===!0&&st.beginShadows();const $=m.state.shadowsArray;mt.render($,A,H),D===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=f.opaque,V=f.transmissive;if(m.setupLights(),H.isArrayCamera){const rt=H.cameras;if(V.length>0)for(let ut=0,xt=rt.length;ut<xt;ut++){const yt=rt[ut];Kc(q,V,A,yt)}Mt&&Pt.render(A);for(let ut=0,xt=rt.length;ut<xt;ut++){const yt=rt[ut];jc(f,A,yt,yt.viewport)}}else V.length>0&&Kc(q,V,A,H),Mt&&Pt.render(A),jc(f,A,H);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,H),le.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],D===!0&&st.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?f=b[b.length-1]:f=null};function co(A,H,$,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){q&&_t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nt);const ut=Q.update(A),xt=A.material;xt.visible&&f.push(A,ut,xt,$,_t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const ut=Q.update(A),xt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_t.copy(A.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),_t.copy(ut.boundingSphere.center)),_t.applyMatrix4(A.matrixWorld).applyMatrix4(nt)),Array.isArray(xt)){const yt=ut.groups;for(let It=0,Ft=yt.length;It<Ft;It++){const bt=yt[It],jt=xt[bt.materialIndex];jt&&jt.visible&&f.push(A,ut,jt,$,_t.z,bt)}}else xt.visible&&f.push(A,ut,xt,$,_t.z,null)}}const rt=A.children;for(let ut=0,xt=rt.length;ut<xt;ut++)co(rt[ut],H,$,q)}function jc(A,H,$,q){const V=A.opaque,rt=A.transmissive,ut=A.transparent;m.setupLightsView($),D===!0&&st.setGlobalState(v.clippingPlanes,$),q&&Et.viewport(P.copy(q)),V.length>0&&Wr(V,H,$),rt.length>0&&Wr(rt,H,$),ut.length>0&&Wr(ut,H,$),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Kc(A,H,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new es(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?Or:ii,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const rt=m.state.transmissionRenderTarget[q.id],ut=q.viewport||P;rt.setSize(ut.z,ut.w);const xt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(U),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Mt&&Pt.render($);const yt=v.toneMapping;v.toneMapping=Si;const It=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),D===!0&&st.setGlobalState(v.clippingPlanes,q),Wr(A,$,q),L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let bt=0,jt=H.length;bt<jt;bt++){const ce=H[bt],he=ce.object,qe=ce.geometry,Zt=ce.material,wt=ce.group;if(Zt.side===ln&&he.layers.test(q.layers)){const $n=Zt.side;Zt.side=ze,Zt.needsUpdate=!0,Zc(he,$,q,qe,Zt,wt),Zt.side=$n,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt))}v.setRenderTarget(xt),v.setClearColor(U,O),It!==void 0&&(q.viewport=It),v.toneMapping=yt}function Wr(A,H,$){const q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,rt=A.length;V<rt;V++){const ut=A[V],xt=ut.object,yt=ut.geometry,It=q===null?ut.material:q,Ft=ut.group;xt.layers.test($.layers)&&Zc(xt,H,$,yt,It,Ft)}}function Zc(A,H,$,q,V,rt){A.onBeforeRender(v,H,$,q,V,rt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,H,$,q,A,rt),V.transparent===!0&&V.side===ln&&V.forceSinglePass===!1?(V.side=ze,V.needsUpdate=!0,v.renderBufferDirect($,H,q,V,A,rt),V.side=Ti,V.needsUpdate=!0,v.renderBufferDirect($,H,q,V,A,rt),V.side=ln):v.renderBufferDirect($,H,q,V,A,rt),A.onAfterRender(v,H,$,q,V,rt)}function $r(A,H,$){H.isScene!==!0&&(H=Lt);const q=Tt.get(A),V=m.state.lights,rt=m.state.shadowsArray,ut=V.state.version,xt=St.getParameters(A,V.state,rt,H,$),yt=St.getProgramCacheKey(xt);let It=q.programs;q.environment=A.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(A.isMeshStandardMaterial?W:S).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,It===void 0&&(A.addEventListener("dispose",Nt),It=new Map,q.programs=It);let Ft=It.get(yt);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===ut)return Qc(A,xt),Ft}else xt.uniforms=St.getUniforms(A),A.onBeforeCompile(xt,v),Ft=St.acquireProgram(xt,yt),It.set(yt,Ft),q.uniforms=xt.uniforms;const bt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(bt.clippingPlanes=st.uniform),Qc(A,xt),q.needsLights=Kf(A),q.lightsStateVersion=ut,q.needsLights&&(bt.ambientLightColor.value=V.state.ambient,bt.lightProbe.value=V.state.probe,bt.directionalLights.value=V.state.directional,bt.directionalLightShadows.value=V.state.directionalShadow,bt.spotLights.value=V.state.spot,bt.spotLightShadows.value=V.state.spotShadow,bt.rectAreaLights.value=V.state.rectArea,bt.ltc_1.value=V.state.rectAreaLTC1,bt.ltc_2.value=V.state.rectAreaLTC2,bt.pointLights.value=V.state.point,bt.pointLightShadows.value=V.state.pointShadow,bt.hemisphereLights.value=V.state.hemi,bt.directionalShadowMap.value=V.state.directionalShadowMap,bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,bt.spotShadowMap.value=V.state.spotShadowMap,bt.spotLightMatrix.value=V.state.spotLightMatrix,bt.spotLightMap.value=V.state.spotLightMap,bt.pointShadowMap.value=V.state.pointShadowMap,bt.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function Jc(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Aa.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Qc(A,H){const $=Tt.get(A);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Yf(A,H,$,q,V){H.isScene!==!0&&(H=Lt),L.resetTextureUnits();const rt=H.fog,ut=q.isMeshStandardMaterial?H.environment:null,xt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ws,yt=(q.isMeshStandardMaterial?W:S).get(q.envMap||ut),It=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ft=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),bt=!!$.morphAttributes.position,jt=!!$.morphAttributes.normal,ce=!!$.morphAttributes.color;let he=Si;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=v.toneMapping);const qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=qe!==void 0?qe.length:0,wt=Tt.get(q),$n=m.state.lights;if(D===!0&&(J===!0||A!==y)){const vn=A===y&&q.id===M;st.setState(q,A,vn)}let Jt=!1;q.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==$n.state.version||wt.outputColorSpace!==xt||V.isBatchedMesh&&wt.batching===!1||!V.isBatchedMesh&&wt.batching===!0||V.isBatchedMesh&&wt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&wt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&wt.instancing===!1||!V.isInstancedMesh&&wt.instancing===!0||V.isSkinnedMesh&&wt.skinning===!1||!V.isSkinnedMesh&&wt.skinning===!0||V.isInstancedMesh&&wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&wt.instancingMorph===!1&&V.morphTexture!==null||wt.envMap!==yt||q.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Ft||wt.morphTargets!==bt||wt.morphNormals!==jt||wt.morphColors!==ce||wt.toneMapping!==he||wt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,wt.__version=q.version);let Tn=wt.currentProgram;Jt===!0&&(Tn=$r(q,H,V));let as=!1,nn=!1,Ks=!1;const ue=Tn.getUniforms(),Un=wt.uniforms;if(Et.useProgram(Tn.program)&&(as=!0,nn=!0,Ks=!0),q.id!==M&&(M=q.id,nn=!0),as||y!==A){Et.buffers.depth.getReversed()?(X.copy(A.projectionMatrix),Bp(X),Hp(X),ue.setValue(z,"projectionMatrix",X)):ue.setValue(z,"projectionMatrix",A.projectionMatrix),ue.setValue(z,"viewMatrix",A.matrixWorldInverse);const oi=ue.map.cameraPosition;oi!==void 0&&oi.setValue(z,at.setFromMatrixPosition(A.matrixWorld)),Rt.logarithmicDepthBuffer&&ue.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ue.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,nn=!0,Ks=!0)}if(V.isSkinnedMesh){ue.setOptional(z,V,"bindMatrix"),ue.setOptional(z,V,"bindMatrixInverse");const vn=V.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),ue.setValue(z,"boneTexture",vn.boneTexture,L))}V.isBatchedMesh&&(ue.setOptional(z,V,"batchingTexture"),ue.setValue(z,"batchingTexture",V._matricesTexture,L),ue.setOptional(z,V,"batchingIdTexture"),ue.setValue(z,"batchingIdTexture",V._indirectTexture,L),ue.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&ue.setValue(z,"batchingColorTexture",V._colorsTexture,L));const Zs=$.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&Dt.update(V,$,Tn),(nn||wt.receiveShadow!==V.receiveShadow)&&(wt.receiveShadow=V.receiveShadow,ue.setValue(z,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Un.envMap.value=yt,Un.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Un.envMapIntensity.value=H.environmentIntensity),nn&&(ue.setValue(z,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&jf(Un,Ks),rt&&q.fog===!0&&ct.refreshFogUniforms(Un,rt),ct.refreshMaterialUniforms(Un,q,F,k,m.state.transmissionRenderTarget[A.id]),Aa.upload(z,Jc(wt),Un,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Aa.upload(z,Jc(wt),Un,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ue.setValue(z,"center",V.center),ue.setValue(z,"modelViewMatrix",V.modelViewMatrix),ue.setValue(z,"normalMatrix",V.normalMatrix),ue.setValue(z,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const vn=q.uniformsGroups;for(let oi=0,li=vn.length;oi<li;oi++){const th=vn[oi];B.update(th,Tn),B.bind(th,Tn)}}return Tn}function jf(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Kf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,H,$){Tt.get(A.texture).__webglTexture=H,Tt.get(A.depthTexture).__webglTexture=$;const q=Tt.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const $=Tt.get(A);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,$=0){R=A,E=H,T=$;let q=!0,V=null,rt=!1,ut=!1;if(A){const yt=Tt.get(A);if(yt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(z.FRAMEBUFFER,null),q=!1;else if(yt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(yt.__hasExternalTextures)L.rebindTextures(A,Tt.get(A.texture).__webglTexture,Tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const bt=A.depthTexture;if(yt.__boundDepthTexture!==bt){if(bt!==null&&Tt.has(bt)&&(A.width!==bt.image.width||A.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ut=!0);const Ft=Tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ft[H])?V=Ft[H][$]:V=Ft[H],rt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?V=Tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ft)?V=Ft[$]:V=Ft,P.copy(A.viewport),I.copy(A.scissor),C=A.scissorTest}else P.copy(ft).multiplyScalar(F).floor(),I.copy(At).multiplyScalar(F).floor(),C=Yt;if(Et.bindFramebuffer(z.FRAMEBUFFER,V)&&q&&Et.drawBuffers(A,V),Et.viewport(P),Et.scissor(I),Et.setScissorTest(C),rt){const yt=Tt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,yt.__webglTexture,$)}else if(ut){const yt=Tt.get(A.texture),It=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,yt.__webglTexture,$||0,It)}M=-1},this.readRenderTargetPixels=function(A,H,$,q,V,rt,ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Et.bindFramebuffer(z.FRAMEBUFFER,xt);try{const yt=A.texture,It=yt.format,Ft=yt.type;if(!Rt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&$>=0&&$<=A.height-V&&z.readPixels(H,$,q,V,kt.convert(It),kt.convert(Ft),rt)}finally{const yt=R!==null?Tt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(A,H,$,q,V,rt,ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const yt=A.texture,It=yt.format,Ft=yt.type;if(!Rt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-q&&$>=0&&$<=A.height-V){Et.bindFramebuffer(z.FRAMEBUFFER,xt);const bt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.bufferData(z.PIXEL_PACK_BUFFER,rt.byteLength,z.STREAM_READ),z.readPixels(H,$,q,V,kt.convert(It),kt.convert(Ft),0);const jt=R!==null?Tt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,jt);const ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await zp(z,ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,rt),z.deleteBuffer(bt),z.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,$=0){A.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-$),V=Math.floor(A.image.width*q),rt=Math.floor(A.image.height*q),ut=H!==null?H.x:0,xt=H!==null?H.y:0;L.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,ut,xt,V,rt),Et.unbindTexture()},this.copyTextureToTexture=function(A,H,$=null,q=null,V=0){A.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,$=null);let rt,ut,xt,yt,It,Ft,bt,jt,ce;const he=A.isCompressedTexture?A.mipmaps[V]:A.image;$!==null?(rt=$.max.x-$.min.x,ut=$.max.y-$.min.y,xt=$.isBox3?$.max.z-$.min.z:1,yt=$.min.x,It=$.min.y,Ft=$.isBox3?$.min.z:0):(rt=he.width,ut=he.height,xt=he.depth||1,yt=0,It=0,Ft=0),q!==null?(bt=q.x,jt=q.y,ce=q.z):(bt=0,jt=0,ce=0);const qe=kt.convert(H.format),Zt=kt.convert(H.type);let wt;H.isData3DTexture?(L.setTexture3D(H,0),wt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(L.setTexture2DArray(H,0),wt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(H,0),wt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const $n=z.getParameter(z.UNPACK_ROW_LENGTH),Jt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Tn=z.getParameter(z.UNPACK_SKIP_PIXELS),as=z.getParameter(z.UNPACK_SKIP_ROWS),nn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,he.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,yt),z.pixelStorei(z.UNPACK_SKIP_ROWS,It),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft);const Ks=A.isDataArrayTexture||A.isData3DTexture,ue=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Un=Tt.get(A),Zs=Tt.get(H),vn=Tt.get(Un.__renderTarget),oi=Tt.get(Zs.__renderTarget);Et.bindFramebuffer(z.READ_FRAMEBUFFER,vn.__webglFramebuffer),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let li=0;li<xt;li++)Ks&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tt.get(A).__webglTexture,V,Ft+li),A.isDepthTexture?(ue&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tt.get(H).__webglTexture,V,ce+li),z.blitFramebuffer(yt,It,rt,ut,bt,jt,rt,ut,z.DEPTH_BUFFER_BIT,z.NEAREST)):ue?z.copyTexSubImage3D(wt,V,bt,jt,ce+li,yt,It,rt,ut):z.copyTexSubImage2D(wt,V,bt,jt,ce+li,yt,It,rt,ut);Et.bindFramebuffer(z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ue?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(wt,V,bt,jt,ce,rt,ut,xt,qe,Zt,he.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(wt,V,bt,jt,ce,rt,ut,xt,qe,he.data):z.texSubImage3D(wt,V,bt,jt,ce,rt,ut,xt,qe,Zt,he):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,bt,jt,rt,ut,qe,Zt,he.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,bt,jt,he.width,he.height,qe,he.data):z.texSubImage2D(z.TEXTURE_2D,V,bt,jt,rt,ut,qe,Zt,he);z.pixelStorei(z.UNPACK_ROW_LENGTH,$n),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Jt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Tn),z.pixelStorei(z.UNPACK_SKIP_ROWS,as),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nn),V===0&&H.generateMipmaps&&z.generateMipmap(wt),Et.unbindTexture()},this.copyTextureToTexture3D=function(A,H,$=null,q=null,V=0){return A.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,$,q,V)},this.initRenderTarget=function(A){Tt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Et.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Et.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class vc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class to extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zv extends Be{constructor(t=null,e=1,n=1,i,r,a,o,l,c=fn,h=fn,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jh extends Dn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bs=new Qt,Qh=new Qt,fa=[],tu=new ns,Jv=new Qt,ir=new Gt,sr=new qs;class Ca extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ns),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),tu.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(tu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),sr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),Qh.multiplyMatrices(n,bs),ir.matrixWorld=Qh,ir.raycast(t,fa);for(let a=0,o=fa.length;a<o;a++){const l=fa[a];l.instanceId=r,l.object=this,e.push(l)}fa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zv(new Float32Array(i*this.count),i,this.count,hc,zn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xc extends Xs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const eu=new Qt,Hl=new pc,pa=new qs,ma=new N;class xd extends Pe{constructor(t=new Ve,e=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;eu.copy(i).invert(),Hl.copy(t.ray).applyMatrix4(eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){const f=c.getX(_);ma.fromBufferAttribute(u,f),nu(ma,f,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p;_<g;_++)ma.fromBufferAttribute(u,_),nu(ma,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nu(s,t,e,n,i,r,a){const o=Hl.distanceSqToPoint(s);if(o<e){const l=new N;Hl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class yc extends Be{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bc extends Ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new N,h=new Ht;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends Ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const g=[],f=n/2;let m=0;b(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function b(){const v=new N,w=new N;let E=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const M=[],y=R/r,P=y*(e-t)+t;for(let I=0;I<=i;I++){const C=I/i,U=C*l+o,O=Math.sin(U),G=Math.cos(U);w.x=P*O,w.y=-y*n+f,w.z=P*G,u.push(w.x,w.y,w.z),v.set(O,T,G).normalize(),d.push(v.x,v.y,v.z),p.push(C,1-y),M.push(_++)}g.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){const y=g[M][R],P=g[M+1][R],I=g[M+1][R+1],C=g[M][R+1];(t>0||M!==0)&&(h.push(y,P,C),E+=3),(e>0||M!==r-1)&&(h.push(P,I,C),E+=3)}c.addGroup(m,E,0),m+=E}function x(v){const w=_,E=new Ht,T=new N;let R=0;const M=v===!0?t:e,y=v===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,f*y,0),d.push(0,y,0),p.push(.5,.5),_++;const P=_;for(let I=0;I<=i;I++){const U=I/i*l+o,O=Math.cos(U),G=Math.sin(U);T.x=M*G,T.y=f*y,T.z=M*O,u.push(T.x,T.y,T.z),d.push(0,y,0),E.x=O*.5+.5,E.y=G*.5*y+.5,p.push(E.x,E.y),_++}for(let I=0;I<i;I++){const C=w+I,U=P+I;v===!0?h.push(U,U+1,C):h.push(U+1,U,C),R+=3}c.addGroup(m,R,v===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mc extends oe{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Mc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Br extends Ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new N,v=new N,w=new N;for(let E=0;E<e.length;E+=3)p(e[E+0],x),p(e[E+1],v),p(e[E+2],w),l(x,v,w,b)}function l(b,x,v,w){const E=w+1,T=[];for(let R=0;R<=E;R++){T[R]=[];const M=b.clone().lerp(v,R/E),y=x.clone().lerp(v,R/E),P=E-R;for(let I=0;I<=P;I++)I===0&&R===E?T[R][I]=M:T[R][I]=M.clone().lerp(y,I/P)}for(let R=0;R<E;R++)for(let M=0;M<2*(E-R)-1;M++){const y=Math.floor(M/2);M%2===0?(d(T[R][y+1]),d(T[R+1][y]),d(T[R][y])):(d(T[R][y+1]),d(T[R+1][y+1]),d(T[R+1][y]))}}function c(b){const x=new N;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(b),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const b=new N;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const v=f(b)/2/Math.PI+.5,w=m(b)/Math.PI+.5;a.push(v,1-w)}_(),u()}function u(){for(let b=0;b<a.length;b+=6){const x=a[b+0],v=a[b+2],w=a[b+4],E=Math.max(x,v,w),T=Math.min(x,v,w);E>.9&&T<.1&&(x<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,x){const v=b*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function _(){const b=new N,x=new N,v=new N,w=new N,E=new Ht,T=new Ht,R=new Ht;for(let M=0,y=0;M<r.length;M+=9,y+=6){b.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),E.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),w.copy(b).add(x).add(v).divideScalar(3);const P=f(w);g(E,y+0,b,P),g(T,y+2,x,P),g(R,y+4,v,P)}}function g(b,x,v,w){w<0&&b.x===1&&(a[x]=b.x-1),v.x===0&&v.z===0&&(a[x]=w/2/Math.PI+.5)}function f(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.vertices,t.indices,t.radius,t.details)}}class eo extends Br{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new eo(t.radius,t.detail)}}class Sc extends Br{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sc(t.radius,t.detail)}}class wc extends Br{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wc(t.radius,t.detail)}}class Hr extends Ve{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new N,_=new Ht;for(let g=0;g<=i;g++){for(let f=0;f<=n;f++){const m=r+f/n*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const f=g*(n+1);for(let m=0;m<n;m++){const b=m+f,x=b,v=b+n+1,w=b+n+2,E=b+1;o.push(x,v,E),o.push(v,w,E)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Me extends Ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,d=new N,p=[],_=[],g=[],f=[];for(let m=0;m<=n;m++){const b=[],x=m/n;let v=0;m===0&&a===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const E=w/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+x*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(E+v,1-x),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const x=h[m][b+1],v=h[m][b],w=h[m+1][b],E=h[m+1][b+1];(m!==0||a>0)&&p.push(x,v,E),(m!==n-1||l<Math.PI)&&p.push(v,w,E)}this.setIndex(p),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _i extends Ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new N,u=new N,d=new N;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const g=_/i*r,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(g),u.y=(t+e*Math.cos(f))*Math.sin(g),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const g=(i+1)*p+_-1,f=(i+1)*(p-1)+_-1,m=(i+1)*(p-1)+_,b=(i+1)*p+_;a.push(g,f,b),a.push(f,m,b)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ve extends Xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class no extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class iu extends no{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ho=new Qt,su=new N,ru=new N;class yd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const au=new Qt,rr=new N,Vo=new N;class Qv extends yd{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),Vo.copy(n.position),Vo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vo),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au)}}class tx extends no{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ex extends yd{constructor(){super(new fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class io extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ec extends no{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ou(){return performance.now()}const lu=new Qt;class ix{constructor(t,e,n=0,i=1/0){this.ray=new pc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(cu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Vl(t[i],this,n,e);return n.sort(cu),n}}function cu(s,t){return s.distance-t.distance}function Vl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Vl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);class sx{#t=new Map;on(t,e){return(this.#t.get(t)??this.#t.set(t,new Set).get(t)).add(e),()=>this.off(t,e)}off(t,e){this.#t.get(t)?.delete(e)}emit(t,e){this.#t.get(t)?.forEach(n=>n(e))}}const rx="cosmix",Gl="kv";let ax;function bd(){return"indexedDB"in globalThis?ax??=new Promise(s=>{const t=indexedDB.open(rx,1);t.onupgradeneeded=()=>t.result.createObjectStore(Gl),t.onsuccess=()=>s(t.result),t.onerror=()=>s(null)}):Promise.resolve(null)}const Md=(s,t,e)=>new Promise((n,i)=>{const r=e(s.transaction(Gl,t).objectStore(Gl));r.onsuccess=()=>n(r.result),r.onerror=()=>i(r.error)});async function vr(s,t=null){try{const e=await bd();if(e)return await Md(e,"readonly",n=>n.get(s))??t}catch{}try{const e=localStorage.getItem("cosmix:"+s);return e?JSON.parse(e):t}catch{return t}}async function Fa(s,t){try{const e=await bd();if(e)return await Md(e,"readwrite",n=>n.put(t,s)),!0}catch{}try{return localStorage.setItem("cosmix:"+s,JSON.stringify(t)),!0}catch{return!1}}const vi={load:s=>vr("save:"+s),async write(s,t={}){const e=Date.now(),i={...await vr("save:"+s)??{world:s,createdAt:e,version:1,mission:0,discoveries:[]},...t,updatedAt:e};return await Fa("save:"+s,i),i},async resetColony(s){const t=await vr("save:"+s);if(!t)return!1;const{colony:e,dustStorm:n,...i}=t;return Fa("save:"+s,i)}},ox={quality:"medium",reducedMotion:!1},hu={async load(){return{...ox,...await vr("settings",{})}},save:s=>Fa("settings",s)},lx={low:1,medium:1.5,high:2};class cx{bus=new sx;scenes=new Map;current=null;settings=null;#t=new nx;async init(t){this.settings=await hu.load(),this.renderer=new Kv({canvas:t,antialias:this.settings.quality!=="low",powerPreference:"high-performance"}),this.applyQuality(),addEventListener("resize",()=>this.#e()),this.#e(),this.renderer.setAnimationLoop(()=>this.#n())}applyQuality(){this.renderer.setPixelRatio(Math.min(devicePixelRatio,lx[this.settings.quality]??1.5)),this.#e()}async updateSettings(t){this.settings={...this.settings,...t},await hu.save(this.settings),this.applyQuality()}register(t,e){this.scenes.set(t,e)}goTo(t,e={}){this.current?.exit?.(),this.current=this.scenes.get(t),this.current.enter?.(e),this.#e(),this.bus.emit("scene",{name:t,params:e})}#e(){const t=innerWidth,e=innerHeight;this.renderer?.setSize(t,e,!1),this.scenes.forEach(n=>n.resize?.(t,e))}#n(){const t=Math.min(this.#t.getDelta(),.1),e=this.#t.elapsedTime;this.current&&(this.current.update?.(t,e),this.renderer.render(this.current.scene,this.current.camera))}}function Sd(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function hx(s){const t=Sd(s),e=64,n=Array.from({length:e*e},t),i=(a,o)=>n[(o%e+e)%e*e+(a%e+e)%e],r=a=>a*a*(3-2*a);return(a,o)=>{let l=0,c=.5,h=4;for(let u=0;u<5;u++,c/=2,h*=2){const d=a*h,p=o*h*.5,_=Math.floor(d),g=Math.floor(p),f=r(d-_),m=r(p-g),b=i(_,g)*(1-f)+i(_+1,g)*f,x=i(_,g+1)*(1-f)+i(_+1,g+1)*f;l+=c*(b*(1-m)+x*m)}return l}}function ux(s,t=512){const e=t*2,n=t,i=document.createElement("canvas");i.width=e,i.height=n;const r=i.getContext("2d"),a=r.createImageData(e,n),o=hx(s==="moon"?7:21),l=s==="moon"?[150,150,154]:[176,84,52],c=s==="moon"?[60,60,66]:[92,42,30];for(let d=0;d<n;d++)for(let p=0;p<e;p++){const _=Math.min(1,Math.max(0,(o(p/e,d/n)-.25)*1.8)),g=(d*e+p)*4;for(let f=0;f<3;f++)a.data[g+f]=c[f]+(l[f]-c[f])*_;a.data[g+3]=255}r.putImageData(a,0,0);const h=Sd(99);for(let d=0;d<(s==="moon"?160:60);d++){const p=h()*e,_=h()*n,g=2+h()*h()*26;r.beginPath(),r.arc(p,_,g,0,6.2832),r.fillStyle="rgba(0,0,0,0.22)",r.fill(),r.lineWidth=Math.max(1,g/6),r.strokeStyle="rgba(255,255,255,0.18)",r.stroke()}const u=new yc(i);return u.colorSpace=Re,u.anisotropy=4,u}function so(s=1800,t=120){const e=new Float32Array(s*3);for(let i=0;i<s;i++){const r=Math.random()*2-1,a=Math.random()*Math.PI*2,o=Math.sqrt(1-r*r),l=t*(.7+Math.random()*.3);e.set([l*o*Math.cos(a),l*r,l*o*Math.sin(a)],i*3)}const n=new Ve;return n.setAttribute("position",new re(e,3)),new xd(n,new xc({color:14674175,size:.35,sizeAttenuation:!0,transparent:!0,opacity:.85,depthWrite:!1}))}function Wl(s,t,e){const n=new Gt(new Me(t,64,48),new ve({map:ux(s),roughness:1,metalness:0}));return e&&n.add(new Gt(new Me(t*1.08,48,32),new Vn({uniforms:{c:{value:new Bt(e)}},side:ze,transparent:!0,blending:ei,depthWrite:!1,vertexShader:"varying vec3 n; void main(){ n = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying vec3 n; void main(){ float i = pow(0.62 - dot(n, vec3(0.,0.,1.)), 3.0); gl_FragColor = vec4(c, 1.) * clamp(i, 0., 1.); }"}))),n}class dx{scene=new to;camera=new Fe(45,1,.1,400);constructor(){this.stars=so(),this.scene.add(this.stars),this.moon=Wl("moon",4),this.moon.position.set(6.5,-1.5,-6),this.scene.add(this.moon);const t=new io(16777215,3);t.position.set(-8,4,6),this.scene.add(t,new Ec(1712192,.6)),this.camera.position.set(0,0,8)}enter(){}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}update(t,e){this.moon.rotation.y+=t*.03,this.stars.rotation.y+=t*.004,this.camera.position.x=Math.sin(e*.07)*.6,this.camera.lookAt(2,-.5,-4)}}function Jn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function wd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wr={duration:.5,overwrite:!1,delay:0},Tc,De,fe,Mn=1e8,ie=1/Mn,$l=Math.PI*2,fx=$l/4,px=0,Ed=Math.sqrt,mx=Math.cos,gx=Math.sin,Le=function(t){return typeof t=="string"},xe=function(t){return typeof t=="function"},ri=function(t){return typeof t=="number"},Ac=function(t){return typeof t>"u"},Gn=function(t){return typeof t=="object"},Ze=function(t){return t!==!1},Cc=function(){return typeof window<"u"},ga=function(t){return xe(t)||Le(t)},Td=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,_x=/random\([^)]+\)/g,vx=/,\s*/g,uu=/(?:-?\.?\d|\.)+/gi,Ad=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cd=/[+-]=-?[.\d]+/,xx=/[^,'"\[\]\s]+/gi,yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,me,Nn,ql,Rc,gn={},Oa={},Rd,Pd=function(t){return(Oa=zs(t,gn))&&en},Pc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Er=function(t,e){return!e&&console.warn(t)},Ld=function(t,e){return t&&(gn[t]=e)&&Oa&&(Oa[t]=e)||gn},Tr=function(){return 0},bx={suppressEvents:!0,isStart:!0,kill:!1},Ra={suppressEvents:!0,kill:!1},Mx={suppressEvents:!0},Lc={},wi=[],Xl={},Dd,an={},Wo={},du=30,Pa=[],Dc="",Ic=function(t){var e=t[0],n,i;if(Gn(e)||xe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Pa.length;i--&&!Pa[i].targetTest(e););n=Pa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new tf(t[i],n)))||t.splice(i,1);return t},Ki=function(t){return t._gsap||Ic(Sn(t))[0]._gsap},Id=function(t,e,n){return(n=t[e])&&xe(n)?t[e]():Ac(n)&&t.getAttribute&&t.getAttribute(e)||n},Je=function(t,e){return(t=t.split(",")).forEach(e)||t},be=function(t){return Math.round(t*1e5)/1e5||0},pe=function(t){return Math.round(t*1e7)/1e7||0},Ps=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Sx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ka=function(){var t=wi.length,e=wi.slice(0),n,i;for(Xl={},wi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Uc=function(t){return!!(t._initted||t._startAt||t.add)},Ud=function(t,e,n,i){wi.length&&!De&&ka(),t.render(e,n,!!(De&&e<0&&Uc(t))),wi.length&&!De&&ka()},Nd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xx).length<2?e:Le(t)?t.trim():t},Fd=function(t){return t},_n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zs=function(t,e){for(var n in e)t[n]=e[n];return t},fu=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Gn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},za=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},xr=function(t){var e=t.parent||me,n=t.keyframes?wx(He(t.keyframes)):_n;if(Ze(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ex=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Od=function(t,e,n,i,r){var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ro=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ai=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Tx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Yl=function(t,e,n,i){return t._startAt&&(De?t._startAt.revert(Ra):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ax=function s(t){return!t||t._ts&&s(t.parent)},pu=function(t){return t._repeat?Bs(t._tTime,t=t.duration()+t._rDelay)*t:0},Bs=function(t,e){var n=Math.floor(t=pe(t/e));return t&&n===t?n-1:n},Ba=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ao=function(t){return t._end=pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},oo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ao(t),n._dirty||Zi(n,t)),t},kd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ba(t.rawTime(),e),(!e._dur||Vr(0,e.totalDuration(),n)-e._tTime>ie)&&e.render(n,!0)),Zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ie}},On=function(t,e,n,i){return e.parent&&Ai(e),e._start=pe((ri(n)?n:!n&&Ha(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==me?bn(t,n,e):t._time)+e._delay),e._end=pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Od(t,e,"_first","_last",t._sort?"_start":0),Ha(e)||(t._recent=e),i||kd(t,e),t._ts<0&&oo(t,t._tTime),t},zd=function(t,e){return(gn.ScrollTrigger||Pc("scrollTrigger",e))&&gn.ScrollTrigger.create(e,t)},Bd=function(t,e,n,i,r){if(Fc(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!De&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dd!==cn.frame)return wi.push(t),t._lazy=[r,i],1},Cx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ha=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Rx=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Cx(t)&&!(!t._initted&&Ha(t))||(t._ts<0||t._dp._ts<0)&&!Ha(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Vr(0,t._tDur,e),h=Bs(l,o),t._yoyo&&h&1&&(a=1-a),h!==Bs(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||De||i||t._zTime===ie||!e&&t._zTime){if(!t._initted&&Bd(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ie:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Yl(t,e,n,!0),t._onUpdate&&!n&&un(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ai(t,1),!n&&!De&&(un(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Px=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Hs=function(t,e,n,i){var r=t._repeat,a=pe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:pe(a*(r+1)+t._rDelay*r):a,o>0&&!i&&oo(t,t._tTime=t._tDur*o),t.parent&&ao(t),n||Zi(t.parent,t),t},mu=function(t){return t instanceof je?Zi(t):Hs(t,t._dur)},Lx={_start:0,endTime:Tr,totalDuration:Tr},bn=function s(t,e,n){var i=t.labels,r=t._recent||Lx,a=t.duration()>=Mn?r.endTime(!1):t._dur,o,l,c;return Le(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(He(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},yr=function(t,e,n){var i=ri(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ze(l.vars.inherit)&&l.parent;a.immediateRender=Ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new we(e[0],a,e[r+1])},Pi=function(t,e){return t||t===0?e(t):e},Vr=function(t,e,n){return n<t?t:n>e?e:n},Oe=function(t,e){return!Le(t)||!(e=yx.exec(t))?"":e[1]},Dx=function(t,e,n){return Pi(n,function(i){return Vr(t,e,i)})},jl=[].slice,Hd=function(t,e){return t&&Gn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Gn(t[0]))&&!t.nodeType&&t!==Nn},Ix=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Le(i)&&!e||Hd(i,1)?(r=n).push.apply(r,Sn(i)):n.push(i)})||n},Sn=function(t,e,n){return fe&&!e&&fe.selector?fe.selector(t):Le(t)&&!n&&(ql||!Vs())?jl.call((e||Rc).querySelectorAll(t),0):He(t)?Ix(t,n):Hd(t)?jl.call(t,0):t?[t]:[]},Kl=function(t){return t=Sn(t)[0]||Er("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Sn(e,n.querySelectorAll?n:n===t?Er("Invalid scope")||Rc.createElement("div"):t)}},Vd=function(t){return t.sort(function(){return .5-Math.random()})},Gd=function(t){if(xe(t))return t;var e=Gn(t)?t:{each:t},n=Ji(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Le(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,p,_){var g=(_||e).length,f=a[g],m,b,x,v,w,E,T,R,M;if(!f){if(M=e.grid==="auto"?0:(e.grid||[1,Mn])[1],!M){for(T=-Mn;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(f=a[g]=[],m=l?Math.min(M,g)*h-.5:i%M,b=M===Mn?0:l?g*u/M-.5:i/M|0,T=0,R=Mn,E=0;E<g;E++)x=E%M-m,v=b-(E/M|0),f[E]=w=c?Math.abs(c==="y"?v:x):Ed(x*x+v*v),w>T&&(T=w),w<R&&(R=w);i==="random"&&Vd(f),f.max=T-R,f.min=R,f.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),f.b=g<0?r-g:r,f.u=Oe(e.amount||e.each)||0,n=n&&g<0?qx(n):n}return g=(f[d]-f.min)/f.max||0,pe(f.b+(n?n(g):g)*f.v)+f.u}},Zl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ri(n)?0:Oe(n))}},Wd=function(t,e){var n=He(t),i,r;return!n&&Gn(t)&&(i=n=t.radius||Mn,t.values?(t=Sn(t.values),(r=!ri(t[0]))&&(i*=i)):t=Zl(t.increment)),Pi(e,n?xe(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Mn,h=0,u=t.length,d,p;u--;)r?(d=t[u].x-o,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,r||h===a||ri(a)?h:h+Oe(a)}:Zl(t))},$d=function(t,e,n,i){return Pi(He(t)?!e:n===!0?!!(n=0):!i,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ux=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Nx=function(t,e){return function(n){return t(parseFloat(n))+(e||Oe(n))}},Fx=function(t,e,n){return Xd(t,e,0,1,n)},qd=function(t,e,n){return Pi(n,function(i){return t[~~e(i)]})},Ox=function s(t,e,n){var i=e-t;return He(t)?qd(t,s(0,t.length),e):Pi(n,function(r){return(i+(r-t)%i)%i+t})},kx=function s(t,e,n){var i=e-t,r=i*2;return He(t)?qd(t,s(0,t.length-1),e):Pi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Ar=function(t){return t.replace(_x,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(vx);return $d(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Xd=function(t,e,n,i,r){var a=e-t,o=i-n;return Pi(r,function(l){return n+((l-t)/a*o||0)})},zx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var a=Le(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=zs(He(t)?[]:{},t));if(!h){for(l in e)Nc.call(o,t,l,"get",e[l]);r=function(_){return zc(_,o)||(a?t.p:t)}}}return Pi(n,r)},gu=function(t,e,n){var i=t.labels,r=Mn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},un=function(t,e,n){var i=t.vars,r=i[e],a=fe,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&wi.length&&ka(),o&&(fe=o),h=l?r.apply(c,l):r.call(c),fe=a,h},dr=function(t){return Ai(t),t.scrollTrigger&&t.scrollTrigger.kill(!!De),t.progress()<1&&un(t,"onInterrupt"),t},Ts,Yd=[],jd=function(t){if(t)if(t=!t.name&&t.default||t,Cc()||t.headless){var e=t.name,n=xe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Tr,render:zc,add:Nc,kill:ny,modifier:ey,rawVars:0},a={targetTest:0,get:0,getSetter:kc,aliases:{},register:0};if(Vs(),t!==i){if(an[e])return;_n(i,_n(za(t,r),a)),zs(i.prototype,zs(r,za(t,a))),an[i.prop=e]=i,t.targetTest&&(Pa.push(i),Lc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ld(e,i),t.register&&t.register(en,i,Qe)}else Yd.push(t)},ae=255,fr={aqua:[0,ae,ae],lime:[0,ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ae],navy:[0,0,128],white:[ae,ae,ae],olive:[128,128,0],yellow:[ae,ae,0],orange:[ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ae,0,0],pink:[ae,192,203],cyan:[0,ae,ae],transparent:[ae,ae,ae,0]},$o=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ae+.5|0},Kd=function(t,e,n){var i=t?ri(t)?[t>>16,t>>8&ae,t&ae]:0:fr.black,r,a,o,l,c,h,u,d,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),fr[t])i=fr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ae,i&ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ae,t&ae]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(uu),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=$o(l+1/3,r,a),i[1]=$o(l,r,a),i[2]=$o(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Ad),n&&i.length<4&&(i[3]=1),i}else i=t.match(uu)||fr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ae,a=i[1]/ae,o=i[2]/ae,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===r?(a-o)/p+(a<o?6:0):u===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Zd=function(t){var e=[],n=[],i=-1;return t.split(Ei).forEach(function(r){var a=r.match(Es)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},_u=function(t,e,n){var i="",r=(t+i).match(Ei),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Kd(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Zd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ei,"1").split(Es),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ei),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},Ei=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in fr)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Bx=/hsl[a]?\(/,Jd=function(t){var e=t.join(" "),n;if(Ei.lastIndex=0,Ei.test(e))return n=Bx.test(e),t[1]=_u(t[1],n),t[0]=_u(t[0],n,Zd(t[1])),!0},Cr,cn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,d,p,_=function g(f){var m=s()-i,b=f===!0,x,v,w,E;if((m>t||m<0)&&(n+=m-e),i+=m,w=i-n,x=w-a,(x>0||b)&&(E=++u.frame,d=w-u.time*1e3,u.time=w=w/1e3,a+=x+(x>=r?0:r-x),v=1),b||(l=c(g)),v)for(p=0;p<o.length;p++)o[p](w,d,E,f)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){Rd&&(!ql&&Cc()&&(Nn=ql=window,Rc=Nn.document||{},gn.gsap=en,(Nn.gsapVersions||(Nn.gsapVersions=[])).push(en.version),Pd(Oa||Nn.GreenSockGlobals||!Nn.gsap&&Nn||{}),Yd.forEach(jd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(f){return setTimeout(f,a-u.time*1e3+1|0)},Cr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Cr=0,c=Tr},lagSmoothing:function(f,m){t=f||1/0,e=Math.min(m||33,t)},fps:function(f){r=1e3/(f||240),a=u.time*1e3+r},add:function(f,m,b){var x=m?function(v,w,E,T){f(v,w,E,T),u.remove(x)}:f;return u.remove(f),o[b?"unshift":"push"](x),Vs(),x},remove:function(f,m){~(m=o.indexOf(f))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},u})(),Vs=function(){return!Cr&&cn.wake()},Wt={},Hx=/^[\d.\-M][\d.\-,\s]/,Vx=/["']/g,Gx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Vx,"").trim():+c,i=l.substr(o+1).trim();return e},Wx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},$x=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Gx(e[1])]:Wx(t).split(",").map(Nd)):Wt._CE&&Hx.test(t)?Wt._CE("",t):n},qx=function(t){return function(e){return 1-t(1-e)}},Ji=function(t,e){return t&&(xe(t)?t:Wt[t]||$x(t))||e},is=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Je(t,function(o){Wt[o]=gn[o]=r,Wt[a=o.toLowerCase()]=n;for(var l in r)Wt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[o+"."+l]=r[l]}),r},Qd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qo=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/$l*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*gx((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Qd(o);return r=$l/r,l.config=function(c,h){return s(t,c,h)},l},Xo=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Qd(n);return i.config=function(r){return s(t,r)},i};Je("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;is(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;is("Elastic",qo("in"),qo("out"),qo());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};is("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);is("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});is("Circ",function(s){return-(Ed(1-s*s)-1)});is("Sine",function(s){return s===1?1:-mx(s*fx)+1});is("Back",Xo("in"),Xo("out"),Xo());Wt.SteppedEase=Wt.steps=gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ie;return function(o){return((i*Vr(0,a,o)|0)+r)*n}}};wr.ease=Wt["quad.out"];Je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Dc+=s+","+s+"Params,"});var tf=function(t,e){this.id=px++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Id,this.set=e?e.getSetter:kc},Rr=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Hs(this,+e.duration,1,1),this.data=e.data,fe&&(this._ctx=fe,fe.data.push(this)),Cr||cn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(oo(this,n),!r._dp||r.parent||kd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&On(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ud(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Bs(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ba(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ie?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(Vr(-Math.abs(this._delay),o,r),i!==!1),ao(this),Tx(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Vs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==ie,a;if(r)for(this._tTime-=ie,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+ie){r=!1;break}a=a._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&On(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ba(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mx);var i=De;return De=n,Uc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),De=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(bn(this,n),Ze(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ze(i)),this._dur||(this._zTime=-ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ie)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=xe(n)?n:Fd,l=function(){var h=i.then;i.then=null,r&&r(),xe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){dr(this)},s})();_n(Rr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var je=(function(s){wd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ze(n.sortChildren),me&&On(n.parent||me,Jn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&zd(Jn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return yr(0,arguments,this),this},e.from=function(i,r,a){return yr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return yr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,xr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new we(i,r,bn(this,a),1),this},e.call=function(i,r,a){return On(this,we.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new we(i,a,bn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,xr(a).immediateRender=Ze(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,xr(o).immediateRender=Ze(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,f,m,b,x,v,w,E,T;if(this!==me&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,v=this._start,x=this._ts,m=!x,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,r,a);if(d=pe(h%f),h===l?(g=this._repeat,d=c):(w=pe(h/f),g=~~w,g&&g===w&&(d=c,g--),d>c&&(d=c)),w=Bs(this._tTime,f),!o&&this._tTime&&w!==g&&this._tTime-w*f-this._dur<=0&&(w=g),E&&g&1&&(d=c-d,T=1),g!==w&&!this._lock){var R=E&&w&1,M=R===(E&&g&1);if(g<w&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(T?0:pe(g*f)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Px(this,pe(o),pe(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!w&&(un(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,a),d!==this._time||!this._ts&&!m){b=0,_&&(h+=this._zTime=-ie);break}}p=_}else{p=this._last;for(var y=i<0?i:d;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,r,a||De&&Uc(p)),d!==this._time||!this._ts&&!m){b=0,_&&(h+=this._zTime=y?-ie:ie);break}}p=_}}if(b&&!r&&(this.pause(),b.render(d>=o?0:-ie)._zTime=d>=o?1:-1,this._ts))return this._start=v,ao(this),this.render(i,r,a);this._onUpdate&&!r&&un(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(un(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(ri(r)||(r=bn(this,r,i)),!(i instanceof Rr)){if(He(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Le(i))return this.addLabel(i,r);if(xe(i))i=we.delayedCall(0,i);else return this}return this!==i?On(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof we?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Le(i)?this.removeLabel(i):xe(i)?this.killTweensOf(i):(i.parent===this&&ro(this,i),i===this._recent&&(this._recent=this._last),Zi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pe(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=bn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=we.delayedCall(0,r||Tr,a);return o.data="isPause",this._hasPause=1,On(this,o,bn(this,i))},e.removePause=function(i){var r=this._first;for(i=bn(this,i);r;)r._start===i&&r.data==="isPause"&&Ai(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)xi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Sn(i),l=this._first,c=ri(r),h;l;)l instanceof we?Sx(l._targets,o)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=bn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,_=we.to(a,_n({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ie,onStart:function(){if(a.pause(),!p){var f=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==f&&Hs(_,f,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,_n({startAt:{time:bn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),gu(this,bn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),gu(this,bn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=pe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Zi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zi(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Mn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,On(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=pe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Hs(a,a===me&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(me._ts&&(Ud(me,Ba(i,me)),Dd=cn.frame),cn.frame>=du){du+=pn.autoSleep||120;var r=me._first;if((!r||!r._ts)&&pn.autoSleep&&cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||cn.sleep()}}},t})(Rr);_n(je.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xx=function(t,e,n,i,r,a,o){var l=new Qe(this._pt,t,e,0,1,af,null,r),c=0,h=0,u,d,p,_,g,f,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ar(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),d=n.match(Go)||[];u=Go.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[h++]&&(f=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:f,c:_.charAt(1)==="="?Ps(f,_)-f:parseFloat(_)-f,m:p&&p<4?Math.round:0},c=Go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cd.test(i)||m)&&(l.e=0),this._pt=l,l},Nc=function(t,e,n,i,r,a,o,l,c,h){xe(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:xe(u)?c?t[e.indexOf("set")||!xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=xe(u)?c?Jx:sf:Oc,_;if(Le(i)&&(~i.indexOf("random(")&&(i=Ar(i)),i.charAt(1)==="="&&(_=Ps(d,i)+(Oe(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Jl)return!isNaN(d*i)&&i!==""?(_=new Qe(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?ty:rf,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Pc(e,i),Xx.call(this,t,e,d,i,p,l||pn.stringFilter,c))},Yx=function(t,e,n,i,r){if(xe(t)&&(t=br(t,r,e,n,i)),!Gn(t)||t.style&&t.nodeType||He(t)||Td(t))return Le(t)?br(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=br(t[o],r,e,n,i);return a},ef=function(t,e,n,i,r,a){var o,l,c,h;if(an[t]&&(o=new an[t]).init(r,o.rawVars?e[t]:Yx(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Qe(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Ts))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},xi,Jl,Fc=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,f=t._targets,m=t.parent,b=m&&m.data==="nested"?m.vars.targets:f,x=t._overwrite==="auto"&&!Tc,v=t.timeline,w=i.easeReverse||u,E,T,R,M,y,P,I,C,U,O,G,k,F;if(v&&(!d||!r)&&(r="none"),t._ease=Ji(r,wr.ease),t._rEase=w&&(Ji(w)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(C=f[0]?Ki(f[0]).harness:0,k=C&&i[C.prop],E=za(i,Lc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&_?Ra:bx),g._lazy=0),a){if(Ai(t._startAt=we.set(f,_n({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Ze(l),startAt:null,delay:0,onUpdate:c&&function(){return un(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De||!o&&!p)&&t._startAt.revert(Ra),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),R=_n({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ze(l),immediateRender:o,stagger:0,parent:m},E),k&&(R[C.prop]=k),Ai(t._startAt=we.set(f,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De?t._startAt.revert(Ra):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ze(l)||l&&!_,T=0;T<f.length;T++){if(y=f[T],I=y._gsap||Ic(f)[T]._gsap,t._ptLookup[T]=O={},Xl[I.id]&&wi.length&&ka(),G=b===f?T:b.indexOf(y),C&&(U=new C).init(y,k||E,t,G,b)!==!1&&(t._pt=M=new Qe(t._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(j){O[j]=M}),U.priority&&(P=1)),!C||k)for(R in E)an[R]&&(U=ef(R,E,t,G,y,b))?U.priority&&(P=1):O[R]=M=Nc.call(t,y,R,"get",E[R],G,b,0,i.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),x&&t._pt&&(xi=t,me.killTweensOf(y,O,t.globalTime(e)),F=!t.parent,xi=0),t._pt&&l&&(Xl[I.id]=1)}P&&of(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,d&&e<=0&&v.render(Mn,!0,!0)},jx=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Jl=1,t.vars[e]="+=0",Fc(t,o),Jl=0,l?Er(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=be(n)+Oe(u.e)),u.b&&(u.b=h.s+Oe(u.b))},Kx=function(t,e){var n=t[0]?Ki(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=zs({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Zx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(He(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},br=function(t,e,n,i,r){return xe(t)?t.call(e,n,i,r):Le(t)&&~t.indexOf("random(")?Ar(t):t},Va=Dc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",nf={};Je(Va+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return nf[s]=1});Va=Va.split(",");var we=(function(s){wd(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:xr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,f=l.scrollTrigger,m=i.parent||me,b=(He(n)||Td(n)?ri(n[0]):"length"in i)?[n]:Sn(n),x,v,w,E,T,R,M,y;if(o._targets=b.length?Ic(b):Er("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||ga(c)||ga(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(x=o.timeline=new je({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:b}),x.kill(),x.parent=x._dp=Jn(o),x._start=0,d||ga(c)||ga(h)){if(E=b.length,M=d&&Gd(d),Gn(d))for(T in d)~Va.indexOf(T)&&(y||(y={}),y[T]=d[T]);for(v=0;v<E;v++)w=za(i,nf),w.stagger=0,P&&(w.easeReverse=P),y&&zs(w,y),R=b[v],w.duration=+br(c,Jn(o),v,R,b),w.delay=(+br(h,Jn(o),v,R,b)||0)-o._delay,!d&&E===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),x.to(R,w,M?M(v,R,b):0),x._ease=Wt.none;x.duration()?c=h=0:o.timeline=0}else if(_){xr(_n(x.vars.defaults,{ease:"none"})),x._ease=Ji(_.ease||i.ease||"none");var I=0,C,U,O;if(He(_))_.forEach(function(G){return x.to(b,G,">")}),x.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||Zx(T,_[T],w,_.easeEach);for(T in w)for(C=w[T].sort(function(G,k){return G.t-k.t}),I=0,v=0;v<C.length;v++)U=C[v],O={ease:U.e,duration:(U.t-(v?C[v-1].t:0))/100*c},O[T]=U.v,x.to(b,O,I),I+=O.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!Tc&&(xi=Jn(o),me.killTweensOf(b),xi=0),On(m,Jn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===pe(m._time)&&Ze(u)&&Ax(Jn(o))&&m.data!=="nested")&&(o._tTime=-ie,o.render(Math.max(0,-h)||0)),f&&zd(Jn(o),f),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ie&&!h?l:i<ie?0:i,d,p,_,g,f,m,b,x;if(!c)Rx(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=pe(u%g),u===l?(_=this._repeat,d=c):(f=pe(u/g),_=~~f,_&&_===f?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(d=c-d),f=Bs(this._tTime,g),d===o&&!a&&this._initted&&_===f)return this._tTime=u,this;_!==f&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(pe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Bd(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==f))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var w=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!f&&(un(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Yl(this,i,r,a),un(this,"onUpdate")),this._repeat&&_!==f&&this.vars.onRepeat&&!r&&this.parent&&un(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Yl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ai(this,1),!r&&!(h&&!o)&&(u||o||m)&&(un(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){Cr||cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Fc(this,c),h=this._ease(c/this._dur),jx(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(oo(this,0),this.parent||Od(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?dr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!De),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,xi&&xi.vars.overwrite!==!0)._first||dr(this),this.parent&&a!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Sn(i):o,c=this._ptLookup,h=this._pt,u,d,p,_,g,f,m;if((!r||r==="all")&&Ex(o,l))return r==="all"&&(this._pt=0),dr(this);for(u=this._op=this._op||[],r!=="all"&&(Le(r)&&(g={},Je(r,function(b){return g[b]=1}),r=g),r=Kx(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],r==="all"?(u[m]=r,_=d,p={}):(p=u[m]=u[m]||{},_=r);for(g in _)f=d&&d[g],f&&((!("kill"in f.d)||f.d.kill(g)===!0)&&ro(this,f,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&dr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return yr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return yr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return me.killTweensOf(i,r,a)},t})(Rr);_n(we.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Je("staggerTo,staggerFrom,staggerFromTo",function(s){we[s]=function(){var t=new je,e=jl.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Oc=function(t,e,n){return t[e]=n},sf=function(t,e,n){return t[e](n)},Jx=function(t,e,n,i){return t[e](i.fp,n)},Qx=function(t,e,n){return t.setAttribute(e,n)},kc=function(t,e){return xe(t[e])?sf:Ac(t[e])&&t.setAttribute?Qx:Oc},rf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ty=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},af=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},zc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ey=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},ny=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ro(this,e,"_pt"):e.dep||(n=1),e=i;return!n},iy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},of=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Qe=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||rf,this.d=l||this,this.set=c||Oc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=iy,this.m=n,this.mt=r,this.tween=i},s})();Je(Dc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Lc[s]=1});gn.TweenMax=gn.TweenLite=we;gn.TimelineLite=gn.TimelineMax=je;me=new je({sortChildren:!1,defaults:wr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Jd;var Qi=[],La={},sy=[],vu=0,ry=0,Yo=function(t){return(La[t]||sy).map(function(e){return e()})},Pr=function(){var t=Date.now(),e=[];t-vu>2&&(Yo("matchMediaInit"),Qi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Nn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Yo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vu=t,Yo("matchMedia"))},lf=(function(){function s(e,n){this.selector=n&&Kl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ry++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){xe(n)&&(r=i,i=n,n=xe);var a=this,o=function(){var c=fe,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Kl(r)),fe=a,u=i.apply(a,arguments),xe(u)&&a._r.push(u),fe=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===xe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=fe;fe=null,n(this),fe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof we&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof je?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof we)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Qi.length;a--;)Qi[a].id===this.id&&Qi.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Pr):o.removeEventListener("change",Pr)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),ay=(function(){function s(e){this.contexts=[],this.scope=e,fe&&fe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Gn(n)||(n={matches:n});var a=new lf(0,r||this.scope),o=a.conditions={},l,c,h;fe&&!a.selector&&(a.selector=fe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Nn.matchMedia(n[c]),l&&(Qi.indexOf(a)<0&&Qi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Pr):l.addEventListener("change",Pr),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Ga={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return jd(i)})},timeline:function(t){return new je(t)},getTweensOf:function(t,e){return me.getTweensOf(t,e)},getProperty:function(t,e,n,i){Le(t)&&(t=Sn(t)[0]);var r=Ki(t||{}).get,a=n?Fd:Nd;return n==="native"&&(n=""),t&&(e?a((an[e]&&an[e].get||r)(t,e,n,i)):function(o,l,c){return a((an[o]&&an[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Sn(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=an[e],o=Ki(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Ts._pt=0,u.init(t,n?h+n:h,Ts,0,[t]),u.render(1,u),Ts._pt&&zc(1,Ts)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=en.to(t,_n((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ji(t.ease,wr.ease)),fu(wr,t||{})},config:function(t){return fu(pn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!an[o]&&!gn[o]&&Er(e+" effect requires "+o+" plugin.")}),Wo[e]=function(o,l,c){return n(Sn(o),_n(l||{},r),c)},a&&(je.prototype[e]=function(o,l,c){return this.add(Wo[e](o,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Wt[t]=Ji(e)},parseEase:function(t,e){return arguments.length?Ji(t,e):Wt},getById:function(t){return me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new je(t),i,r;for(n.smoothChildTiming=Ze(t.smoothChildTiming),me.remove(n),n._dp=0,n._time=n._tTime=me._time,i=me._first;i;)r=i._next,(e||!(!i._dur&&i instanceof we&&i.vars.onComplete===i._targets[0]))&&On(n,i,i._start-i._delay),i=r;return On(me,n,0),n},context:function(t,e){return t?new lf(t,e):fe},matchMedia:function(t){return new ay(t)},matchMediaRefresh:function(){return Qi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Pr()},addEventListener:function(t,e){var n=La[t]||(La[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=La[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ox,wrapYoyo:kx,distribute:Gd,random:$d,snap:Wd,normalize:Fx,getUnit:Oe,clamp:Dx,splitColor:Kd,toArray:Sn,selector:Kl,mapRange:Xd,pipe:Ux,unitize:Nx,interpolate:zx,shuffle:Vd},install:Pd,effects:Wo,ticker:cn,updateRoot:je.updateRoot,plugins:an,globalTimeline:me,core:{PropTween:Qe,globals:Ld,Tween:we,Timeline:je,Animation:Rr,getCache:Ki,_removeLinkedListItem:ro,reverting:function(){return De},context:function(t){return t&&fe&&(fe.data.push(t),t._ctx=fe),fe},suppressOverwrites:function(t){return Tc=t}}};Je("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ga[s]=we[s]});cn.add(je.updateRoot);Ts=Ga.to({},{duration:0});var oy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ly=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=oy(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},jo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Le(r)&&(l={},Je(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ly(o,r)}}}},en=Ga.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)De?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},jo("roundProps",Zl),jo("modifiers"),jo("snap",Wd))||Ga;we.version=je.version=en.version="3.15.1";Rd=1;Cc()&&Vs();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xu,yi,Ls,Bc,ji,yu,Hc,cy=function(){return typeof window<"u"},ai={},Gi=180/Math.PI,Ds=Math.PI/180,Ms=Math.atan2,bu=1e8,Vc=/([A-Z])/g,hy=/(left|right|width|margin|padding|x)/i,uy=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ql=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},py=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},my=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},cf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},hf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},gy=function(t,e,n){return t.style[e]=n},_y=function(t,e,n){return t.style.setProperty(e,n)},vy=function(t,e,n){return t._gsap[e]=n},xy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},yy=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},by=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},ge="transform",tn=ge+"Origin",My=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ai&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Bn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[t]=a.x?a[t]:Qn(i,t),t===tn&&(this.tfm.zOrigin=a.zOrigin);else return Bn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(ge)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(tn,e,"")),t=ge}(r||e)&&this.props.push(t,e,r[t])},uf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Sy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Vc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Hc(),(!r||!r.isStart)&&!n[ge]&&(uf(n),i.zOrigin&&n[tn]&&(n[tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},df=function(t,e){var n={target:t,props:[],revert:Sy,save:My};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},ff,tc=function(t,e){var n=yi.createElementNS?yi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):yi.createElement(t);return n&&n.style?n:yi.createElement(t)},dn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Vc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Gs(e)||e,1)||""},Mu="O,Moz,ms,Ms,Webkit".split(","),Gs=function(t,e,n){var i=e||ji,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Mu[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Mu[a]:"")+t},ec=function(){cy()&&window.document&&(xu=window,yi=xu.document,Ls=yi.documentElement,ji=tc("div")||{style:{}},tc("div"),ge=Gs(ge),tn=ge+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ff=!!Gs("perspective"),Hc=en.core.reverting,Bc=1)},Su=function(t){var e=t.ownerSVGElement,n=tc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ls.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ls.removeChild(n),r},wu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},pf=function(t){var e,n;try{e=t.getBBox()}catch{e=Su(t),n=1}return e&&(e.width||e.height)||n||(e=Su(t)),e&&!e.width&&!e.x&&!e.y?{x:+wu(t,["x","cx","x1"])||0,y:+wu(t,["y","cy","y1"])||0,width:0,height:0}:e},mf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&pf(t))},Ci=function(t,e){if(e){var n=t.style,i;e in ai&&e!==tn&&(e=ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Vc,"-$1").toLowerCase())):n.removeAttribute(e)}},bi=function(t,e,n,i,r,a){var o=new Qe(t._pt,e,n,0,1,a?hf:cf);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Eu={deg:1,rad:1,turn:1},wy={grid:1,flex:1},Ri=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ji.style,l=hy.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",_,g,f,m;if(i===a||!r||Eu[i]||Eu[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),m=t.getCTM&&mf(t),(p||a==="%")&&(ai[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],be(p?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===yi||!g.appendChild)&&(g=yi.body),f=g._gsap,f&&p&&f.width&&l&&f.time===cn.time&&!f.uncache)return be(r/f.width*u);if(p&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=u+i,_=t[h],b?t.style[e]=b:Ci(t,e)}else(p||a==="%")&&!wy[dn(g,"display")]&&(o.position=dn(t,"position")),g===t&&(o.position="static"),g.appendChild(ji),_=ji[h],g.removeChild(ji),o.position="absolute";return l&&p&&(f=Ki(g),f.time=cn.time,f.width=g[h]),be(d?_*r/u:_&&r?u/_*r:0)},Qn=function(t,e,n,i){var r;return Bc||ec(),e in Bn&&e!=="transform"&&(e=Bn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ai[e]&&e!=="transform"?(r=Dr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:$a(dn(t,tn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Wa[e]&&Wa[e](t,e,n)||dn(t,e)||Id(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ri(t,e,r,n)+n:r},Ey=function(t,e,n,i){if(!n||n==="none"){var r=Gs(e,t,1),a=r&&dn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=dn(t,"borderTopColor"))}var o=new Qe(this._pt,t.style,e,0,1,af),l=0,c=0,h,u,d,p,_,g,f,m,b,x,v,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=dn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=dn(t,e)||i,g?t.style[e]=g:Ci(t,e)),h=[n,i],Jd(h),n=h[0],i=h[1],d=n.match(Es)||[],w=i.match(Es)||[],w.length){for(;u=Es.exec(i);)f=u[0],b=i.substring(l,u.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),f!==(g=d[c++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),f.charAt(1)==="="&&(f=Ps(p,f)+v),m=parseFloat(f),x=f.substr((m+"").length),l=Es.lastIndex-x.length,x||(x=x||pn.units[e]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(p=Ri(t,e,g,x)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:p,c:m-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?hf:cf;return Cd.test(i)&&(o.e=0),this._pt=o,o},Tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ty=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Tu[n]||n,e[1]=Tu[i]||i,e.join(" ")},Ay=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ai[o]&&(l=1,o=o==="transformOrigin"?tn:ge),Ci(n,o);l&&(Ci(n,ge),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Dr(n,1),a.uncache=1,uf(i)))}},Wa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Qe(t._pt,e,n,0,0,Ay);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Lr=[1,0,0,1,0,0],gf={},_f=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Au=function(t){var e=dn(t,ge);return _f(e)?Lr:e.substr(7).match(Ad).map(be)},Gc=function(t,e){var n=t._gsap||Ki(t),i=t.style,r=Au(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Lr:r):(r===Lr&&!t.offsetParent&&t!==Ls&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ls.appendChild(t)),r=Au(t),l?i.display=l:Ci(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ls.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},nc=function(t,e,n,i,r,a){var o=t._gsap,l=r||Gc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],f=l[3],m=l[4],b=l[5],x=e.split(" "),v=parseFloat(x[0])||0,w=parseFloat(x[1])||0,E,T,R,M;n?l!==Lr&&(T=p*f-_*g)&&(R=v*(f/T)+w*(-g/T)+(g*b-f*m)/T,M=v*(-_/T)+w*(p/T)-(p*b-_*m)/T,v=R,w=M):(E=pf(t),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),w=E.y+(~(x[1]||x[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&o.smooth?(m=v-c,b=w-h,o.xOffset=u+(m*p+b*g)-m,o.yOffset=d+(m*_+b*f)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=w,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[tn]="0px 0px",a&&(bi(a,o,"xOrigin",c,v),bi(a,o,"yOrigin",h,w),bi(a,o,"xOffset",u,o.xOffset),bi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},Dr=function(t,e){var n=t._gsap||new tf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=dn(t,tn)||"0",h,u,d,p,_,g,f,m,b,x,v,w,E,T,R,M,y,P,I,C,U,O,G,k,F,j,it,ft,At,Yt,K,D;return h=u=d=g=f=m=b=x=v=0,p=_=1,n.svg=!!(t.getCTM&&mf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ge]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ge]!=="none"?l[ge]:"")),i.scale=i.rotate=i.translate="none"),T=Gc(t,n.svg),n.svg&&(n.uncache?(F=t.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),nc(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,E=n.yOrigin||0,T!==Lr&&(P=T[0],I=T[1],C=T[2],U=T[3],h=O=T[4],u=G=T[5],T.length===6?(p=Math.sqrt(P*P+I*I),_=Math.sqrt(U*U+C*C),g=P||I?Ms(I,P)*Gi:0,b=C||U?Ms(C,U)*Gi+g:0,b&&(_*=Math.abs(Math.cos(b*Ds))),n.svg&&(h-=w-(w*P+E*C),u-=E-(w*I+E*U))):(D=T[6],Yt=T[7],it=T[8],ft=T[9],At=T[10],K=T[11],h=T[12],u=T[13],d=T[14],R=Ms(D,At),f=R*Gi,R&&(M=Math.cos(-R),y=Math.sin(-R),k=O*M+it*y,F=G*M+ft*y,j=D*M+At*y,it=O*-y+it*M,ft=G*-y+ft*M,At=D*-y+At*M,K=Yt*-y+K*M,O=k,G=F,D=j),R=Ms(-C,At),m=R*Gi,R&&(M=Math.cos(-R),y=Math.sin(-R),k=P*M-it*y,F=I*M-ft*y,j=C*M-At*y,K=U*y+K*M,P=k,I=F,C=j),R=Ms(I,P),g=R*Gi,R&&(M=Math.cos(R),y=Math.sin(R),k=P*M+I*y,F=O*M+G*y,I=I*M-P*y,G=G*M-O*y,P=k,O=F),f&&Math.abs(f)+Math.abs(g)>359.9&&(f=g=0,m=180-m),p=be(Math.sqrt(P*P+I*I+C*C)),_=be(Math.sqrt(G*G+D*D)),R=Ms(O,G),b=Math.abs(R)>2e-4?R*Gi:0,v=K?1/(K<0?-K:K):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!_f(dn(t,ge)),k&&t.setAttribute("transform",k))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(p*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=be(p),n.scaleY=be(_),n.rotation=be(g)+o,n.rotationX=be(f)+o,n.rotationY=be(m)+o,n.skewX=b+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[tn]=$a(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?Ry:ff?vf:Cy,n.uncache=0,n},$a=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ko=function(t,e,n){var i=Oe(e);return be(parseFloat(e)+parseFloat(Ri(t,"x",n+"px",i)))+i},Cy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vf(t,e)},zi="0deg",ar="0px",Bi=") ",vf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,f=n.transformPerspective,m=n.force3D,b=n.target,x=n.zOrigin,v="",w=m==="auto"&&t&&t!==1||m===!0;if(x&&(u!==zi||h!==zi)){var E=parseFloat(h)*Ds,T=Math.sin(E),R=Math.cos(E),M;E=parseFloat(u)*Ds,M=Math.cos(E),a=Ko(b,a,T*M*-x),o=Ko(b,o,-Math.sin(E)*-x),l=Ko(b,l,R*M*-x+x)}f!==ar&&(v+="perspective("+f+Bi),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(w||a!==ar||o!==ar||l!==ar)&&(v+=l!==ar||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Bi),c!==zi&&(v+="rotate("+c+Bi),h!==zi&&(v+="rotateY("+h+Bi),u!==zi&&(v+="rotateX("+u+Bi),(d!==zi||p!==zi)&&(v+="skew("+d+", "+p+Bi),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Bi),b.style[ge]=v||"translate(0, 0)"},Ry=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,f=n.xOffset,m=n.yOffset,b=n.forceCSS,x=parseFloat(a),v=parseFloat(o),w,E,T,R,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ds,c*=Ds,w=Math.cos(l)*u,E=Math.sin(l)*u,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=Ds,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,E*=M)),w=be(w),E=be(E),T=be(T),R=be(R)):(w=u,R=d,E=T=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Ri(p,"x",a,"px"),v=Ri(p,"y",o,"px")),(_||g||f||m)&&(x=be(x+_-(_*w+g*T)+f),v=be(v+g-(_*E+g*R)+m)),(i||r)&&(M=p.getBBox(),x=be(x+i/100*M.width),v=be(v+r/100*M.height)),M="matrix("+w+","+E+","+T+","+R+","+x+","+v+")",p.setAttribute("transform",M),b&&(p.style[ge]=M)},Py=function(t,e,n,i,r){var a=360,o=Le(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Gi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*bu)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*bu)%a-~~(c/a)*a)),t._pt=d=new Qe(t._pt,e,n,i,c,dy),d.e=h,d.u="deg",t._props.push(n),d},Cu=function(t,e){for(var n in e)t[n]=e[n];return t},Ly=function(t,e,n){var i=Cu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ge]=e,o=Dr(n,1),Ci(n,ge),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ge],a[ge]=e,o=Dr(n,1),a[ge]=c);for(l in ai)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(p=Oe(c),_=Oe(h),u=p!==_?Ri(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new Qe(t._pt,o,l,u,d-u,Ql),t._pt.u=_||0,t._props.push(l));Cu(o,i)};Je("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Wa[t>1?"border"+s:s]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=a.map(function(_){return Qn(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},a.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,u)}});var xf={name:"css",register:ec,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,p,_,g,f,m,b,x,v,w,E,T,R,M;Bc||ec(),this.styles=this.styles||df(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(an[g]&&ef(g,e,n,i,t,r)))){if(p=typeof h,_=Wa[g],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Ar(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ei.lastIndex=0,Ei.test(c)||(f=Oe(c),m=Oe(h),m?f!==m&&(c=Ri(t,g,c,m)+m):f&&(h+=f)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Le(c)&&~c.indexOf("random(")&&(c=Ar(c)),Oe(c+"")||c==="auto"||(c+=pn.units[g]||Oe(Qn(t,g))||""),(c+"").charAt(1)==="="&&(c=Qn(t,g))):c=Qn(t,g),d=parseFloat(c),b=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),g in Bn&&(g==="autoAlpha"&&(d===1&&Qn(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),bi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Bn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ai,x){if(this.styles.save(g),M=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=dn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=dn(t,"perspective"),y?t.style.perspective=y:Ci(t,"perspective")}u=parseFloat(h)}if(v||(w=t._gsap,w.renderTransform&&!e.parseTransform||Dr(t,e.parseTransform),E=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new Qe(this._pt,o,ge,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new Qe(this._pt,w,"scaleY",w.scaleY,(b?Ps(w.scaleY,b+u):u)-w.scaleY||0,Ql),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(tn,0,o[tn]),h=Ty(h),w.svg?nc(t,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==w.zOrigin&&bi(this,w,"zOrigin",w.zOrigin,m),bi(this,o,g,$a(c),$a(h)));continue}else if(g==="svgOrigin"){nc(t,h,1,E,0,this);continue}else if(g in gf){Py(this,w,g,d,b?Ps(d,b+h):h);continue}else if(g==="smoothOrigin"){bi(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){Ly(this,h,t);continue}}else g in o||(g=Gs(g)||g);if(x||(u||u===0)&&(d||d===0)&&!uy.test(h)&&g in o)f=(c+"").substr((d+"").length),u||(u=0),m=Oe(h)||(g in pn.units?pn.units[g]:f),f!==m&&(d=Ri(t,g,c,m)),this._pt=new Qe(this._pt,x?w:o,g,d,(b?Ps(d,b+u):u)-d,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?my:Ql),this._pt.u=m||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=py):f!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=fy);else if(g in o)Ey.call(this,t,g,c,b?b+h:h);else if(g in t)this.add(t,g,c||t[g],b?b+h:h,i,r);else if(g!=="parseTransform"){Pc(g,h);continue}x||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}T&&of(this)},render:function(t,e){if(e.tween._time||!Hc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:Bn,getSetter:function(t,e,n){var i=Bn[e];return i&&i.indexOf(",")<0&&(e=i),e in ai&&e!==tn&&(t._gsap.x||Qn(t,"x"))?n&&yu===n?e==="scale"?xy:vy:(yu=n||{})&&(e==="scale"?yy:by):t.style&&!Ac(t.style[e])?gy:~e.indexOf("-")?_y:kc(t,e)},core:{_removeProperty:Ci,_getMatrix:Gc}};en.utils.checkPrefix=Gs;en.core.getStyleSaver=df;(function(s,t,e,n){var i=Je(s+","+t+","+e,function(r){ai[r]=1});Je(t,function(r){pn.units[r]="deg",gf[r]=1}),Bn[i[13]]=s+","+t,Je(n,function(r){var a=r.split(":");Bn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){pn.units[s]="px"});en.registerPlugin(xf);var Da=en.registerPlugin(xf)||en;Da.core.Tween;const In={moon:{id:"moon",name:"Moon",colonyName:"Selene Outpost",mission:"Lunar Frontier",tagline:"Airless, silent and bright. Restore the outpost before the lunar night.",gravity:1.62,accent:9417983,atmosphere:null,missions:["First Landing","Restore Power","Life Support and Food","Lunar Sample Collection","Expand the Research Outpost"],facts:["Surface gravity is about one sixth of Earth’s.","A lunar day lasts about 29.5 Earth days."]},mars:{id:"mars",name:"Mars",colonyName:"Ares Base",mission:"Mars Frontier",tagline:"Thin air, red dust and buried ice. Build a colony that survives the storms.",gravity:3.71,accent:16747100,atmosphere:14248266,missions:["Arrival and Communications","Restore Power","Locate Water Ice","Extract and Process Water","Oxygen Production","Greenhouse Operations","Dust Storm Protection","Colony Expansion"],facts:["Surface gravity is about 38% of Earth’s.","A Martian day (sol) lasts about 24 h 37 min."]}},Mr=Object.keys(In),Ru={moon:new N(-3.4,0,0),mars:new N(3.4,0,0)};class Dy{scene=new to;camera=new Fe(45,1,.1,400);#t=new ix;#e=new Ht(-2,-2);#n=new N(0,0,0);#a=null;constructor(t,e){this.app=t,this.onPick=e,this.scene.add(so()),this.bodies={moon:Wl("moon",2.2),mars:Wl("mars",1.9,In.mars.atmosphere)};for(const i in this.bodies)this.bodies[i].position.copy(Ru[i]),this.bodies[i].userData.world=i,this.scene.add(this.bodies[i]);const n=new io(16777215,3);n.position.set(0,4,8),this.scene.add(n,new Ec(1712192,.7)),this.camera.position.set(0,0,14),addEventListener("pointermove",i=>{this.#e.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1)}),t.renderer.domElement.addEventListener("click",()=>{this.app.current===this&&this.#a&&this.focus(this.#a,!0)})}enter(){this.selected=null,this.camera.position.set(0,0,14),this.#n.set(0,0,0),document.body.style.cursor="",this.app.bus.emit("worldFocus",null)}exit(){document.body.style.cursor="",Da.killTweensOf(this.camera.position)}focus(t,e){this.selected=t;const n=Ru[t],i=this.app.settings.reducedMotion?0:1.1;Da.to(this.camera.position,{x:n.x*.6,y:0,z:8,duration:i,ease:"power2.inOut"}),Da.to(this.#n,{x:n.x,y:0,z:0,duration:i,ease:"power2.inOut"}),e&&this.app.bus.emit("worldFocus",t)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}update(t){this.#t.setFromCamera(this.#e,this.camera);const e=this.#t.intersectObjects(Object.values(this.bodies),!1)[0];this.#a=e?e.object.userData.world:null,document.body.style.cursor=this.#a?"pointer":"";for(const n in this.bodies){const i=this.bodies[n];i.rotation.y+=t*(n===this.selected||n===this.#a?.18:.06),i.scale.setScalar(i.scale.x+((n===this.#a||n===this.selected?1.05:1)-i.scale.x)*Math.min(1,t*6))}this.camera.lookAt(this.#n)}}function pr(s,t,e=0){let n=Math.imul(s|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function ss(s){let t=s>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296}const Pu=s=>s*s*(3-2*s);function Iy(s,t,e){const n=Math.floor(s),i=Math.floor(t),r=Pu(s-n),a=Pu(t-i),o=pr(n,i,e),l=pr(n+1,i,e),c=pr(n,i+1,e),h=pr(n+1,i+1,e);return o+(l-o)*r+(c-o)*a+(o-l-c+h)*r*a}function Wi(s,t,e,n=4){let i=0,r=.5,a=1;for(let o=0;o<n;o++,a*=2,r*=.5)i+=r*Iy(s*a,t*a,e+o*17);return i}const qa=(s,t,e)=>Math.min(e,Math.max(t,s)),or=(s,t,e)=>{const n=qa((e-s)/(t-s),0,1);return n*n*(3-2*n)},Xa=520,Uy=240,Ny=34,yf=62,bf={moon:{seed:11,rolling:2.2,rollFreq:.012,mountains:38,craters:46,crMin:5,crMax:34,dunes:0},mars:{seed:23,rolling:3,rollFreq:.01,mountains:46,craters:22,crMin:5,crMax:28,dunes:3.2}},Zo={};function Mf(s){if(Zo[s])return Zo[s];const t=bf[s],e=ss(t.seed*31+5),n=[];for(let i=0;i<t.craters;i++){const r=e()*Math.PI*2,a=85+e()*135;let o=t.crMin+(t.crMax-t.crMin)*Math.pow(e(),2.2);o=Math.min(o,(a-yf)/1.6),!(o<t.crMin)&&n.push({x:Math.cos(r)*a,z:Math.sin(r)*a,r:o,depth:o*.28,rim:o*.08})}return Zo[s]=n}function Fy(s){const t=bf[s],e=Mf(s),n=t.seed;return function(r,a){const o=Math.hypot(r,a);let l=(Wi(r*t.rollFreq,a*t.rollFreq,n,4)-.45)*t.rolling*2;l+=(Wi(r*.08,a*.08,n+3,3)-.4)*.8;const c=or(150,245,o);if(c>0){const u=1-Math.abs(Wi(r*.015,a*.015,n+7,5)*2-.95);l+=c*(8+u*u*t.mountains)}const h=or(.55,.8,Wi(r*.006+50,a*.006,n+9,3));if(h>0&&(l+=h*t.mountains*.6*or(80,140,o)),t.dunes){const u=or(.45,.65,Wi(r*.01+200,a*.01,n+11,2));if(u>0){const d=(r*.8+a*.6)*.07+Wi(r*.02,a*.02,n+13,2)*6;l+=u*Math.pow(1-Math.abs(Math.sin(d)),1.6)*t.dunes}}for(const u of e){const d=r-u.x,p=a-u.z,_=d*d+p*p,g=u.r*2;if(_>g*g)continue;const f=Math.sqrt(_)/u.r;f<1&&(l-=u.depth*(1-f*f)),l+=u.rim*Math.exp(-((f-1)*(f-1))/.04)}return l*or(Ny,yf,o)}}const Oy={moon:{a:[.66,.66,.68],b:[.3,.3,.33],seed:5},mars:{a:[.78,.42,.24],b:[.34,.17,.12],seed:8}},ky={low:192,medium:256,high:320};function zy(){const s=document.createElement("canvas");s.width=s.height=256;const t=s.getContext("2d"),e=ss(4);t.fillStyle="#bdbdbd",t.fillRect(0,0,256,256);for(let i=0;i<5e3;i++){const r=1+e()*2.5;t.fillStyle=e()<.5?"rgba(0,0,0,.16)":"rgba(255,255,255,.14)",t.fillRect(e()*256,e()*256,r,r)}const n=new yc(s);return n.wrapS=n.wrapT=Ia,n.repeat.set(Xa/3,Xa/3),n.colorSpace=Re,n.anisotropy=4,n}function By(s,t,e="medium"){const n=ky[e]??256,i=new zr(Xa,Xa,n,n);i.rotateX(-Math.PI/2);const r=i.attributes.position;for(let u=0;u<r.count;u++)r.setY(u,t(r.getX(u),r.getZ(u)));i.computeVertexNormals();const a=i.attributes.normal,o=new Float32Array(r.count*3),l=Oy[s];for(let u=0;u<r.count;u++){const d=r.getX(u),p=r.getZ(u),_=qa((1-a.getY(u))*4.5,0,1),g=.78+.44*Wi(d*.045,p*.045,l.seed,3);for(let f=0;f<3;f++)o[u*3+f]=(l.a[f]+(l.b[f]-l.a[f])*_)*g}i.setAttribute("color",new re(o,3));const c=zy(),h=new Gt(i,new ve({vertexColors:!0,map:c,bumpMap:c,bumpScale:1,roughness:1,metalness:0}));return h.receiveShadow=!0,h.frustumCulled=!1,h.name="terrain",h}const de=(s,t,e,n,i="real")=>({world:s,category:t,title:e,body:n,kind:i}),Ya={"moon.gravity":de("moon","Planetary objects","Low gravity","The Moon’s surface gravity is about 1.62 m/s², roughly one sixth of Earth’s. That is why your jumps here carry so far."),"moon.regolith":de("moon","Geological formations","Regolith","The Moon is covered in regolith: loose dust and rock fragments broken up by billions of years of impacts. With no wind or water to smooth it, the grains stay sharp and abrasive."),"moon.craters":de("moon","Geological formations","Impact craters","Most lunar craters were made by impacts. With no air, wind or running water to erode them, many survive for billions of years. Crater counts and sizes here are generated.","mixed"),"moon.earth":de("moon","Planetary exploration","Earth in the lunar sky","The Moon is tidally locked, so from the near side Earth stays in nearly the same patch of sky and is never visible from the far side. Near-side dishes point at Earth."),"moon.solar":de("moon","Solar energy","Solar power on the Moon","With no atmosphere, sunlight reaches the surface unfiltered, but a lunar night lasts about two weeks, so a base needs energy storage or another source."),"moon.ice":de("moon","Water and ice","Lunar water ice","Water ice has been detected in some permanently shadowed craters near the lunar poles, where sunlight never warms the ground. Ice deposit locations here are generated, not mapped.","mixed"),"moon.rover":de("moon","Planetary exploration","Lunar rovers","Apollo 15, 16 and 17 crews drove Lunar Roving Vehicles on the Moon. The rover here is a simplified model, not a replica.","mixed"),"moon.outpost":de("moon","Radiation","Surface habitats","A lunar habitat must hold air pressure and shield its crew from radiation and micrometeoroids. Covering modules with regolith is one proposed approach. The layout here is simplified.","mixed"),"moon.sample.basalt":de("moon","Geological formations","Basalt","The dark lunar maria are ancient lava plains made of basalt. Returned samples show they erupted billions of years ago."),"moon.sample.anorthosite":de("moon","Geological formations","Anorthosite","The bright lunar highlands are rich in anorthosite, a pale rock. It supports the idea that the early Moon had a deep magma ocean."),"moon.sample.glass":de("moon","Geological formations","Impact glass","Impacts melt rock, which cools quickly into glass beads and fragments found mixed into lunar soil."),"mars.gravity":de("mars","Planetary objects","Martian gravity","Mars has a surface gravity of about 3.71 m/s², around 38% of Earth’s. You jump higher than on Earth but not as high as on the Moon."),"mars.dust":de("mars","Atmospheric science","Red dust","Mars looks red because its dust is rich in iron oxide, the same family of compounds as rust."),"mars.atmosphere":de("mars","Atmospheric science","A thin atmosphere","The Martian atmosphere is mostly carbon dioxide, and surface pressure is less than one percent of Earth’s. It is too thin to breathe and gives little protection from radiation."),"mars.dunes":de("mars","Geological formations","Wind-shaped dunes","Wind moves sand into dunes and ripples on Mars, and orbiters have watched some change over time. Dune placement and size here are generated, not mapped from real sites.","mixed"),"mars.craters":de("mars","Geological formations","Craters on Mars","Impacts have cratered Mars, but wind, dust and past geologic activity have eroded or buried many of them. The craters here are procedurally generated.","mixed"),"mars.solar":de("mars","Solar energy","Solar power on Mars","Sunlight at Mars is only about 43% as strong as at Earth, and dust settling on panels cuts output further. Wind has sometimes cleaned the panels of real rovers."),"mars.comms":de("mars","Planetary exploration","Delayed communication","Radio signals take roughly 3 to 22 minutes one way between Mars and Earth depending on their positions, so crews cannot rely on live control from home."),"mars.ice":de("mars","Water and ice","Subsurface water ice","Water ice lies close to the Martian surface at mid and high latitudes. NASA’s Phoenix lander exposed ice just under the soil in 2008. Deposit locations here are generated, not mapped.","mixed"),"mars.storm":de("mars","Atmospheric science","Dust storms","Mars has dust storms that can last weeks, and some grow to cover the whole planet. They block sunlight, which can starve solar-powered landers. The storm timing in the game is simplified.","mixed"),"mars.rover":de("mars","Planetary exploration","Mars rovers","NASA has landed the rovers Sojourner, Spirit, Opportunity, Curiosity and Perseverance on Mars. The rover here is a simplified model.","mixed"),"mars.outpost":de("mars","Radiation","Surface habitats","A Mars habitat needs pressure, temperature control and radiation shielding because the thin air offers little protection. The layout here is simplified.","mixed"),"mars.sample.basalt":de("mars","Geological formations","Volcanic basalt","Much of the Martian crust is basalt, a volcanic rock. Mars also has the largest volcanoes known in the solar system."),"mars.sample.hematite":de("mars","Geological formations","Hematite","Hematite is an iron oxide. NASA’s Opportunity rover found hematite-rich spherules nicknamed blueberries, evidence that liquid water once soaked the rock there."),"mars.sample.sulfate":de("mars","Water and ice","Sulfate salts","Sulfate minerals form when salty water evaporates, so rovers use them to trace where water once was.")},Sf={moon:{crater:"moon.craters",solar:"moon.solar",habitat:"moon.outpost",dish:"moon.earth",rover:"moon.rover",terminal:["moon.regolith"],gravity:"moon.gravity"},mars:{crater:"mars.craters",solar:"mars.solar",habitat:"mars.outpost",dish:"mars.comms",rover:"mars.rover",terminal:["mars.atmosphere","mars.dust"],dunes:"mars.dunes",gravity:"mars.gravity"}},Hy={moon:[{key:"basalt",label:"Basalt fragment",color:6269183},{key:"anorthosite",label:"Anorthosite chip",color:15266047},{key:"glass",label:"Impact glass bead",color:8257456}],mars:[{key:"basalt",label:"Basalt fragment",color:16753228},{key:"hematite",label:"Hematite spherule",color:16735324},{key:"sulfate",label:"Sulfate crust",color:16050376}]};function Vy(s,t,e="medium"){const n=s==="moon"?1100:900,i=Math.round(n*(e==="low"?.6:1)),r=new Sc(1,1),a=r.attributes.position;for(let f=0;f<a.count;f++){const m=a.getX(f),b=a.getY(f),x=a.getZ(f),v=.75+.5*pr(Math.round(m*50)+Math.round(x*50)*7919,Math.round(b*50),3);a.setXYZ(f,m*v,b*v,x*v)}r.computeVertexNormals();const o=new Ca(r,new ve({roughness:1,flatShading:!0}),i);o.castShadow=o.receiveShadow=!0,o.frustumCulled=!1;const l=ss(s==="moon"?101:202),c=new Qt,h=new si,u=new wn,d=new N,p=new N,_=new Bt,g=[];for(let f=0;f<i;f++){let m,b;do m=(l()*2-1)*225,b=(l()*2-1)*225;while(Math.hypot(m,b)<38);const x=.25+3.2*Math.pow(l(),3.5),v=.55+.3*l(),w=t(m,b);u.set((l()-.5)*.3,l()*6.28,(l()-.5)*.3),h.setFromEuler(u),p.set(m,w+x*v*.25,b),d.set(x*(.8+.4*l()),x*v,x*(.8+.4*l())),o.setMatrixAt(f,c.compose(p,h,d));const E=.3+.3*l();s==="moon"?_.setRGB(E,E,E*1.03):_.setRGB(E*1.5,E*.7,E*.5),o.setColorAt(f,_),x>=.5&&g.push({x:m,z:b,r:x*.85,top:w+x*v*.9})}return{mesh:o,colliders:g}}function Gy(s,t){const e=new Kt,n=[],i=ss(s==="moon"?303:404),r=Hy[s],a=new eo(.28,0),o=new oe(.04,.04,9,6);for(let l=0;l<r.length*2;l++){const c=r[l%r.length];let h,u,d,p=0;do{const f=i()*6.283,m=45+i()*105;h=Math.cos(f)*m,u=Math.sin(f)*m,d=t(h,u)}while(d>10&&++p<30);const _=new Kt;_.position.set(h,d+.3,u),_.add(new Gt(a,new ve({color:c.color,emissive:c.color,emissiveIntensity:.9,roughness:.4})));const g=new Gt(o,new hn({color:c.color,transparent:!0,opacity:.35,blending:ei,depthWrite:!1}));g.position.y=4.5,_.add(g),e.add(_),n.push({id:`${s}.sample#${l}`,kind:"sample",type:c.key,label:c.label,discovery:`${s}.sample.${c.key}`,pos:{x:h,y:d,z:u},range:2.6,active:!0,group:_,beam:g,baseY:d+.3,prompt:`Collect ${c.label}`})}return{group:e,items:n}}const wf=new N(.55,.42,-.72).normalize(),Wy={moon:new N(-.6,.36,.7).normalize(),mars:new N(-.5,.5,.7).normalize()},Jo={low:0,medium:2048,high:3072};function $y(){const s=document.createElement("canvas");s.width=256,s.height=128;const t=s.getContext("2d"),e=ss(6);t.fillStyle="#2a5fb4",t.fillRect(0,0,256,128);for(let i=0;i<26;i++)t.fillStyle=e()<.5?"#4f8a4a":"#8a7a4a",t.beginPath(),t.ellipse(e()*256,20+e()*88,8+e()*24,5+e()*12,e()*3,0,6.283),t.fill();for(let i=0;i<40;i++)t.fillStyle="rgba(255,255,255,.5)",t.beginPath(),t.ellipse(e()*256,e()*128,10+e()*24,3+e()*6,e()*3,0,6.283),t.fill();const n=new yc(s);return n.colorSpace=Re,n}function qy(s,t,e="medium"){const n=[],i=h=>(t.add(h),n.push(h),h),r=Wy[s],a=i(new io(s==="moon"?16777215:16769732,s==="moon"?3.2:2.4));i(a.target),Jo[e]&&(a.castShadow=!0,a.shadow.mapSize.set(Jo[e],Jo[e]),Object.assign(a.shadow.camera,{left:-42,right:42,top:42,bottom:-42,near:1,far:320}),a.shadow.camera.updateProjectionMatrix(),a.shadow.bias=-5e-4,a.shadow.normalBias=.05);const o=[],l=[];let c=null;if(s==="moon"){t.background=new Bt(0),t.fog=null,i(new iu(2107448,657932,.35));const h=i(so(e==="low"?1400:2800,450));h.material.fog=!1,o.push([h,new N]);const u=i(new Gt(new Me(12,32,24),new hn({map:$y(),fog:!1})));o.push([u,wf.clone().multiplyScalar(420)]);const d=i(new Gt(new Me(4,16,12),new hn({color:16777215,fog:!1})));o.push([d,r.clone().multiplyScalar(420)])}else{const h=new Bt().setRGB(.78,.52,.36,Re);t.background=h,t.fog=new vc(h,25,420),i(new iu(14065786,6961704,.95));const u=i(new Gt(new Me(900,32,16),new Vn({side:ze,depthWrite:!1,fog:!1,uniforms:{uSun:{value:r},uDust:{value:0},uDustC:{value:new N(.58,.38,.26)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 uSun; uniform float uDust; uniform vec3 uDustC; varying vec3 vDir; void main(){ float h = clamp(vDir.y,0.,1.); vec3 c = mix(vec3(.78,.52,.36), vec3(.40,.29,.29), pow(h,.55)); float s = max(dot(normalize(vDir),uSun),0.); c += vec3(1.,.8,.55)*(pow(s,48.)*.55 + pow(s,6.)*.12); c = mix(c, uDustC, uDust); gl_FragColor = vec4(c,1.); }"})));u.renderOrder=-10,o.push([u,new N]);const d=e==="low"?250:600,p=new Float32Array(d*3),_=ss(9);for(let m=0;m<d*3;m++)p[m]=(_()-.5)*50;const g=new Ve;g.setAttribute("position",new re(p,3));const f=i(new xd(g,new xc({color:14260844,size:.13,transparent:!0,opacity:.55,depthWrite:!1,blending:ei})));f.frustumCulled=!1,l.push(f),c={dome:u,pts:f,level:-1,sunBase:a.intensity}}return{sun:a,dir:r,setStorm(h){if(!c||Math.abs(h-c.level)<.002)return;c.level=h;const u=(g,f)=>g+(f-g)*h,d=u(.78,.58),p=u(.52,.38),_=u(.36,.26);t.background.setRGB(d,p,_,Re),t.fog.color.setRGB(d,p,_,Re),t.fog.near=u(25,2),t.fog.far=u(420,42),c.dome.material.uniforms.uDustC.value.set(d,p,_),c.dome.material.uniforms.uDust.value=h,a.intensity=c.sunBase*(1-.55*h),c.pts.material.opacity=.55+.35*h,c.pts.material.size=.13+.12*h},update(h,u,d){for(const[_,g]of o)_.position.copy(u).add(g);a.position.set(d.x+r.x*120,d.y+r.y*120,d.z+r.z*120),a.target.position.set(d.x,d.y,d.z);const p=1+4*Math.max(0,c?.level??0);for(const _ of l){_.position.set(d.x,d.y+8,d.z);const g=_.geometry.attributes.position.array;for(let f=0;f<g.length;f+=3){g[f]+=3*p*h,g[f+1]+=.15*h,g[f+2]+=1.2*p*h;for(let m=0;m<3;m++)g[f+m]>25&&(g[f+m]-=50)}_.geometry.attributes.position.needsUpdate=!0}},dispose(){n.forEach(h=>{t.remove(h),h.geometry?.dispose?.(),h.material?.dispose?.(),h.material?.map?.dispose?.()}),t.fog=null}}}const Qo=new N(0,1,0);function Xy(s,t){const e=new Kt,n=[],i=[],r=[],a=Sf[s],o=new ve({color:15132910,roughness:.55,metalness:.15}),l=new ve({color:3817290,roughness:.7,metalness:.3}),c=new ve({color:1780310,roughness:.3,metalness:.6,emissive:462114}),h=new ve({color:t,emissive:t,emissiveIntensity:1.2}),u=new ve({color:12577023,emissive:9426175,emissiveIntensity:.8}),d=(I,C,U,O,G,k=e)=>{const F=new Gt(I,C);return F.position.set(U,O,G),F.castShadow=F.receiveShadow=!0,k.add(F),F},p=(I,C,U,O)=>n.push({x:I,z:C,r:U,top:O}),_=(I,C,U,O,G)=>{const k=new Kt;k.position.set(U,C+.25,O),k.rotation.y=G,e.add(k);const F=d(new oe(C,C,I,28),o,0,0,0,k);F.rotation.z=Math.PI/2;for(let it=-1;it<=1;it+=2)d(new Vt(.5,.4,.06),u,it*I*.22,C*.25,C-.02,k);d(new Vt(I*.8,.12,.05),h,0,-C*.2,C-.01,k),d(new oe(C*.75,C*.75,.5,20),l,0,0,0,k).rotation.z=Math.PI/2;const j=new N(1,0,0).applyAxisAngle(Qo,G);for(let it=-I/2+C;it<=I/2-C+.01;it+=C*1.5)p(U+j.x*it,O+j.z*it,C+.15,C*2+.25);return k};_(10,2.2,0,-10,0),_(10,2.2,9,-5,Math.PI/2);const g=d(new oe(1,1,4,16),l,7,1.2,-10);if(g.rotation.z=Math.PI/2,p(7,-10,1.2,2.2),s==="mars")d(new Me(4,28,14,0,Math.PI*2,0,Math.PI/2),o,-11,.05,-5),d(new oe(4.05,4.05,.3,28),l,-11,.15,-5),p(-11,-5,4.2,4);else for(const I of[-8,-12])d(new oe(1.4,1.4,3.4,20),o,-9,1.9,I),p(-9,I,1.5,3.7);d(new Me(.22,12,8),h,0,4.9,-10);for(let I=0;I<4;I++){const C=-16+I*4.2,U=new Kt;U.position.set(C,1.75,6),U.rotation.x=-.55,e.add(U),d(new Vt(3.8,.1,2.4),c,0,0,0,U),d(new Vt(3.8,.02,.06),l,0,.06,0,U),d(new oe(.09,.09,1.7,8),l,C,.85,6.3),p(C,6.3,.3,1.7)}r.push({id:`${s}.solar`,kind:"solar",name:"Solar array",discovery:a.solar,pos:new N(-10,1.8,6),range:18,scanned:!1}),d(new oe(.15,.2,3,10),l,14,1.5,-6),p(14,-6,.5,3);const f=new Kt;f.position.set(14,3.3,-6),e.add(f);const m=s==="moon"?wf:new N(-.3,.8,-.5).normalize();f.quaternion.copy(new si().setFromUnitVectors(Qo,m));const b=d(new Me(1.9,28,10,0,Math.PI*2,0,.95),new ve({color:15922166,roughness:.4,metalness:.3,side:ln}),0,0,0,f);b.rotation.x=Math.PI,b.position.y=1.9,d(new oe(.05,.05,1.6,6),l,0,.9,0,f),d(new Me(.14,8,6),h,0,1.75,0,f),r.push({id:`${s}.dish`,kind:"dish",name:"Communications dish",discovery:a.dish,pos:new N(14,3.5,-6),range:20,scanned:!1}),r.push({id:`${s}.habitat`,kind:"habitat",name:"Habitat module",discovery:a.habitat,pos:new N(0,2.4,-10),range:18,scanned:!1});const x=new Gt(new bc(9,40),new ve({color:4869720,roughness:.9}));x.rotation.x=-Math.PI/2,x.position.set(0,.03,22),x.receiveShadow=!0,e.add(x);const v=new Gt(new Hr(7.4,8,48),new hn({color:t}));v.rotation.x=-Math.PI/2,v.position.set(0,.05,22),e.add(v);const w=new Kt;w.position.set(3,0,-6.4),e.add(w),d(new Vt(.9,1.1,.5),l,0,.55,0,w),d(new Vt(.7,.45,.04),u,0,.85,.27,w),p(3,-6.4,.6,1.1),i.push({id:"terminal",kind:"terminal",pos:{x:3,y:0,z:-6.4},range:3,active:!0,prompt:"Read environment console",discoveries:a.terminal});const E=new Kt,T=14,R=7,M=.6;E.position.set(T,0,R),E.rotation.y=M,e.add(E),d(new Vt(3.4,.7,2),o,0,1.05,0,E),d(new Vt(1.6,.5,1.4),l,-.3,1.65,0,E),d(new Vt(1.5,.06,1.2),c,.9,1.43,0,E).position.y=1.43,d(new Vt(3.4,.08,.05),h,0,.95,1.01,E);const y=new oe(.5,.5,.34,20);for(const I of[-1.3,0,1.3])for(const C of[-1.2,1.2])d(y,l,I,.5,C,E).rotation.x=Math.PI/2;d(new oe(.05,.05,1.3,6),l,1.2,2.1,.6,E),d(new Vt(.4,.25,.3),o,1.2,2.8,.6,E);const P=new N(1,0,0).applyAxisAngle(Qo,M);for(const I of[-1.1,1.1])p(T+P.x*I,R+P.z*I,1.4,1.7);return i.push({id:"rover",kind:"rover",pos:{x:T,y:0,z:R},range:4.6,active:!0,prompt:"Inspect rover",discoveries:[a.rover]}),{group:e,colliders:n,interactables:i,scannables:r}}const Ut=(s,t,e,n=1)=>({id:s,text:t,get:e,target:n}),$e=s=>t=>t.mod[s]?.built?1:0,Ef=s=>s.explore.reached?1:0,Tf=s=>s.explore.rover?1:0,Yy=s=>s.explore.scannedIds.filter(t=>!t.includes(".ice#")).length,jy=s=>new Set(s.explore.collectedIds.map(t=>Number(t.split("#")[1])%3)).size,Af=s=>s.stats.linked?1:0,Ky=[{id:"landing",title:"First Landing",brief:"Your landing team is down. Find the outpost, check the rover and open a link to Earth.",objectives:[Ut("reach","Walk to the research outpost",Ef),Ut("rover","Inspect the rover",Tf),Ut("scan","Scan 3 features",Yy,3),Ut("link","Establish the Earth link at the comms mast",Af)],reward:{materials:25},done:"Landing confirmed. Mission Control has released a supply allocation."},{id:"power",title:"Restore Power",brief:"The solar array is damaged and the habitat is on a small reserve cell. Repair it and store energy.",objectives:[Ut("repair","Repair the solar array",$e("solar")),Ut("battery","Build a battery bank",$e("battery")),Ut("charge","Charge the batteries to 60%",s=>s.battPct,.6)],reward:{materials:25},done:"Power restored. The outpost can now run life support from stored energy."},{id:"life",title:"Life Support and Food",brief:"Close the loop: mine ice, process water, make oxygen and grow food.",objectives:[Ut("water","Build a water processor",$e("water")),Ut("ice","Load 20 ice into the processor",s=>s.stats.iceLoaded,20),Ut("oxygen","Build an oxygen generator",$e("oxygen")),Ut("o2","Produce 20 oxygen",s=>s.stats.o2Produced,20),Ut("gh","Build a greenhouse",$e("greenhouse")),Ut("food","Grow 15 food",s=>s.stats.foodProduced,15)],reward:{materials:30,food:20},done:"The life-support loop is running."},{id:"samples",title:"Lunar Sample Collection",brief:"Collect rock samples from the surface and analyse them in the outpost lab (uses battery power).",objectives:[Ut("collect","Collect 4 samples",s=>s.explore.collectedIds.length,4),Ut("types","Collect 3 different sample types",jy,3),Ut("analyse","Analyse 3 samples in the lab",s=>s.stats.analyzed,3)],reward:{materials:35},done:"Samples catalogued. Results are queued for transmission to Earth."},{id:"expand",title:"Expand the Research Outpost",brief:"Add power and a second habitat, then keep a larger crew alive.",objectives:[Ut("solar2","Build a second solar array",$e("solar2")),Ut("hab2","Build a second habitat module",$e("hab2")),Ut("maint","Perform maintenance 3 times",s=>s.stats.maintenance,3),Ut("stable","Keep the crew of 4 supplied for 60 s",s=>s.mod.hab2.built?s.stats.stableSeconds:0,60)],reward:{materials:50},done:"The research outpost is expanded. Sandbox play continues."}],Zy=[{id:"arrival",title:"Arrival and Communications",brief:"Find the outpost and call home. Signals take minutes each way, so the link takes time to settle.",objectives:[Ut("reach","Walk to the research outpost",Ef),Ut("rover","Inspect the rover",Tf),Ut("dish","Scan the communications dish",s=>s.explore.scannedIds.includes("mars.dish")?1:0),Ut("link","Establish the Earth link",Af)],reward:{materials:25},done:"Link established. Earth acknowledges your arrival."},{id:"power",title:"Restore Power",brief:"Sunlight is weak and dust covers the panels. Repair the array and store energy.",objectives:[Ut("repair","Repair the solar array",$e("solar")),Ut("battery","Build a battery bank",$e("battery")),Ut("charge","Charge the batteries to 60%",s=>s.battPct,.6)],reward:{materials:25},done:"Power restored."},{id:"ice",title:"Locate Water Ice",brief:"Survey the surface for subsurface ice, then confirm it by extracting some.",objectives:[Ut("survey","Scan 2 ice anomalies",s=>s.explore.scannedIds.filter(t=>t.includes(".ice#")).length,2),Ut("mine","Extract 20 ice",s=>s.stats.iceMined,20)],reward:{materials:25},done:"Ice confirmed. Water processing is now possible."},{id:"water",title:"Extract and Process Water",brief:"Build a water processor, load it with ice and make usable water.",objectives:[Ut("water","Build a water processor",$e("water")),Ut("load","Load 30 ice into the processor",s=>s.stats.iceLoaded,30),Ut("made","Produce 20 water",s=>s.stats.waterProduced,20)],reward:{materials:30},done:"Water supply online."},{id:"oxygen",title:"Oxygen Production",brief:"Split water into oxygen. The generator needs both water and electricity.",objectives:[Ut("gen","Build an oxygen generator",$e("oxygen")),Ut("o2","Produce 30 oxygen",s=>s.stats.o2Produced,30),Ut("reserve","Hold 150 oxygen in reserve",s=>s.res.oxygen,150)],reward:{materials:30},done:"Oxygen production is running."},{id:"greenhouse",title:"Greenhouse Operations",brief:"Grow food. The greenhouse uses water and lighting power.",objectives:[Ut("gh","Build a greenhouse",$e("greenhouse")),Ut("food","Grow 20 food",s=>s.stats.foodProduced,20),Ut("stock","Hold 100 food in reserve",s=>s.res.food,100)],reward:{materials:35},done:"Fresh food is now part of the supply loop."},{id:"storm",title:"Dust Storm Protection",brief:"A dust storm is forecast. Protect the panels, fill the batteries and keep life support alive through it.",objectives:[Ut("shield","Build a dust shield",$e("shield")),Ut("charge","Charge the batteries to 80%",s=>s.battPct,.8),Ut("survive","Survive a dust storm",s=>s.stats.stormsSurvived)],reward:{materials:40},done:"The storm has passed. Storms will recur, so keep reserves up."},{id:"colony",title:"Colony Expansion",brief:"Grow the colony to a crew of four and keep them supplied.",objectives:[Ut("solar2","Build a second solar array",$e("solar2")),Ut("hab2","Build a second habitat module",$e("hab2")),Ut("stable","Keep the crew of 4 supplied for 90 s",s=>s.mod.hab2.built?s.stats.stableSeconds:0,90)],reward:{materials:60},done:"The colony is established. Sandbox play continues."}],Jy={moon:Ky,mars:Zy},Qy={moon:{solar:null,battery:"power",water:"life",oxygen:"life",greenhouse:"life",solar2:"expand",hab2:"expand"},mars:{solar:null,battery:"power",water:"water",oxygen:"oxygen",greenhouse:"greenhouse",shield:"storm",solar2:"colony",hab2:"colony"}},Ir={habitat:{worlds:["moon","mars"],name:"Lunar Habitat",blurb:"Pressurised living quarters for the outpost crew.",cost:{materials:45},max:3,mars:{name:"Mars Habitat",blurb:"Pressurised, radiation-shielded living quarters for the Mars crew.",cost:{materials:50}}},power:{worlds:["moon","mars"],name:"Solar Power Station",blurb:"A field of panels that collects sunlight for the outpost.",cost:{materials:30},max:4,mars:{blurb:"A field of panels for the outpost. Sunlight is weaker at Mars, so the field is larger.",cost:{materials:35}}},lab:{worlds:["moon","mars"],name:"Research Lab",blurb:"A sealed laboratory for studying lunar samples.",cost:{materials:35,battery:3},max:2,mars:{blurb:"A sealed laboratory for studying Martian rock, soil and ice.",cost:{materials:40,battery:3}}},storage:{worlds:["moon"],name:"Storage Unit",blurb:"A sealed container for tools and spare parts.",cost:{materials:20},max:4},extractor:{worlds:["mars"],name:"Water Extraction Unit",blurb:"Drills and heats subsurface ice to pull water out of the Martian ground.",cost:{materials:30,battery:2},max:3}},Wc=Object.keys(Ir),Cf={materials:"construction materials",battery:"kWh battery power"},Ur=s=>s==="moon"||s==="mars",$c=s=>Ur(s)?Wc.filter(t=>Ir[t].worlds.includes(s)):[],js=(s,t)=>{const e=Ir[t];return e&&e.worlds.includes(s)?{...e,...e[s]??{}}:null},tb=()=>Object.fromEntries(Wc.map(s=>[s,0])),Hn=(s,t)=>s.outpost?.[t]??0,Rf=1e-9,_a=s=>({ok:!1,msg:s}),eb=s=>({ok:!0,msg:s}),Pf=(s,t)=>Object.entries(js(s.world,t).cost).filter(([e,n])=>(s.res[e]??0)+Rf<n);function nb(s,t){if(!Ur(s.world))return _a("Construction is not available here.");const e=js(s.world,t);if(!e)return _a(Ir[t]?`${Ir[t].name} cannot be built on ${s.world==="moon"?"the Moon":"Mars"}.`:"Unknown structure.");if(Hn(s,t)>=e.max)return _a(`${e.name}: the outpost already has the maximum of ${e.max}.`);const n=Pf(s,t);if(n.length)return _a(`Not enough resources for ${e.name}. Need ${n.map(([i,r])=>`${r} ${Cf[i]} (have ${Math.floor(s.res[i])})`).join(", ")}.`);for(const[i,r]of Object.entries(e.cost))s.res[i]=Math.max(0,s.res[i]-r);return s.outpost[t]=Hn(s,t)+1,eb(`${e.name} built (${s.outpost[t]} of ${e.max}).`)}function ib(s){return $c(s.world).map(t=>{const e=js(s.world,t),n=Hn(s,t),i=n>=e.max,r=Pf(s,t);return{id:t,name:e.name,blurb:e.blurb,count:n,max:e.max,cost:Object.entries(e.cost).map(([a,o])=>({key:a,label:Cf[a],need:o,have:s.res[a]??0,ok:(s.res[a]??0)+Rf>=o})),canBuild:!i&&!r.length,reason:i?"Maximum built":r.length?"Not enough resources":""}})}const sb=s=>$c(s.world).filter(t=>Hn(s,t)>0).map(t=>({id:t,name:js(s.world,t).name,count:Hn(s,t)})),on={oxygen:300,water:300,food:200,materials:200,ice:80},ic={ice:45,materials:36},rb=6,ab=15,ob=8,Lf={moon:{solarKW:1.4,dustRate:4e-4,storms:!1,linkDelay:4},mars:{solarKW:.8,dustRate:.0012,storms:!0,linkDelay:14}},mn={solar:{name:"Solar array",cost:{materials:8},verb:"Repair",panels:4},battery:{name:"Battery bank",cost:{materials:14}},water:{name:"Water processor",cost:{materials:16},load:1.2,toggle:!0},oxygen:{name:"Oxygen generator",cost:{materials:18},load:1.5,toggle:!0},greenhouse:{name:"Greenhouse",cost:{materials:22},load:1,toggle:!0},shield:{name:"Dust shield",cost:{materials:15}},solar2:{name:"Solar array II",cost:{materials:20},panels:4},hab2:{name:"Habitat module II",cost:{materials:30}}},Df={moon:["solar","battery","water","oxygen","greenhouse","solar2","hab2"],mars:["solar","battery","water","oxygen","greenhouse","shield","solar2","hab2"]},lb={solar:.012,solar2:.012,battery:.01,water:.03,oxygen:.03,greenhouse:.03,shield:.005,hab2:.008},cb={moon:{oxygen:240,water:130,food:110,battery:5,materials:40},mars:{oxygen:260,water:140,food:120,battery:5,materials:40}},Nr=4,hb=50,ub={ice:15,materials:12},Ss=s=>s>=60?1:s<=10?0:(s-10)/50,va=s=>!!s&&s.built&&s.cond>10,mi=(s,t,e)=>Math.min(e,Math.max(t,s));function db(s){const t={};for(const e of Object.keys(mn))t[e]={built:!1,cond:100,on:!0,dust:0};return{v:1,world:s,res:{...cb[s],ice:0},carried:{ice:0,materials:0},mod:t,outpost:tb(),nodes:{},crew:{health:100},stats:{linked:0,linkStart:0,linkProg:0,iceMined:0,iceLoaded:0,waterProduced:0,o2Produced:0,foodProduced:0,matsMined:0,maintenance:0,analyzed:0,stableSeconds:0,stormsSurvived:0,stormsFailed:0,incidents:0},storm:{phase:"none",t:0,next:0,failed:!1,armed:!1},missions:{done:[],obj:{}},rates:Uf(),flags:{lifeOff:0}}}function If(s,t){const e=db(s);if(!t||typeof t!="object"||t.world&&t.world!==s)return e;const n=(i,r)=>Number.isFinite(i)?i:r;for(const i of Object.keys(e.res))e.res[i]=mi(n(t.res?.[i],e.res[i]),0,i==="battery"?1e3:on[i]??1e3);for(const i of["ice","materials"])e.carried[i]=mi(n(t.carried?.[i],0),0,ic[i]);for(const i of Object.keys(e.mod)){const r=t.mod?.[i];r&&(e.mod[i]={built:!!r.built,cond:mi(n(r.cond,100),0,100),on:r.on!==!1,dust:mi(n(r.dust,0),0,1)})}for(const i of Object.keys(e.stats))e.stats[i]=n(t.stats?.[i],0);if(t.nodes&&typeof t.nodes=="object")for(const[i,r]of Object.entries(t.nodes))e.nodes[i]={charges:mi(n(r.charges,Nr),0,Nr),t:n(r.t,0)};for(const i of Wc){const r=js(s,i);r&&(e.outpost[i]=mi(Math.floor(n(t.outpost?.[i],0)),0,r.max))}if(e.crew.health=mi(n(t.crew?.health,100),1,100),t.storm){const i=t.storm;e.storm={phase:["none","forecast","active"].includes(i.phase)?i.phase:"none",t:n(i.t,0),next:n(i.next,0),failed:!!i.failed,armed:!!i.armed}}return Array.isArray(t.missions?.done)&&(e.missions.done=t.missions.done.filter(i=>typeof i=="string")),t.missions?.obj&&typeof t.missions.obj=="object"&&(e.missions.obj=t.missions.obj),e}const fb=s=>({v:s.v,world:s.world,res:s.res,carried:s.carried,mod:s.mod,outpost:s.outpost,nodes:s.nodes,crew:s.crew,stats:s.stats,storm:s.storm,missions:s.missions}),Gr=s=>rb+(s.mod.battery.built?ab*Math.max(.3,Ss(s.mod.battery.cond)):0),ja=s=>s.mod.hab2.built?4:2;function Uf(){const s=()=>({prod:0,cons:0});return{gen:0,demand:0,used:0,curtailed:0,battNet:0,oxygen:s(),water:s(),food:s(),ice:s(),loads:{},health:0}}function sc(s,t,e){const n=Qy[s.world][t];return n==null?!0:s.missions.done.includes(n)||e===n}function pb(s,t,e,n){const i=s.storm;Lf[s.world].storms&&(!i.armed&&(e==="storm"&&s.mod.shield.built||s.missions.done.includes("storm"))&&(i.armed=!0,i.phase="none",i.next=25),i.armed&&(i.phase==="none"?(i.next-=t,i.next<=0&&(i.phase="forecast",i.t=45,i.failed=!1,n.push({type:"storm-forecast"}))):i.phase==="forecast"?(i.t-=t,i.t<=0&&(i.phase="active",i.t=90,n.push({type:"storm-start"}))):(i.t-=t,i.t<=0&&(i.phase="none",i.next=i.failed?60:540,i.failed?s.stats.stormsFailed++:s.stats.stormsSurvived++,n.push({type:"storm-end",survived:!i.failed})))))}function mb(s,t,e){if(!(t>0))return[];const n=[],i=Lf[s.world],r=s.res,a=s.mod,o=s.stats,l=s.rates=Uf();pb(s,t,e,n);const c=s.storm.phase==="active",h=va(a.shield),u=c?h?.4:.12:1,d=c?h?2.5:8:h?.5:1,p=c?h?1.2:2:1;let _=0;for(const k of["solar","solar2"]){const F=a[k];F.built&&(F.dust=Math.min(1,F.dust+i.dustRate*d*t),_+=mn[k].panels*i.solarKW*Ss(F.cond)*(1-.6*F.dust)*u)}const g=ja(s),f=[{id:"life",demand:.8+(a.hab2.built?.5:0),pri:0}],m={oxygen:va(a.oxygen)&&a.oxygen.on&&r.oxygen<on.oxygen*.98&&r.water>.05,water:va(a.water)&&a.water.on&&r.ice>.05&&r.water<on.water*.98,greenhouse:va(a.greenhouse)&&a.greenhouse.on&&r.food<on.food*.98&&r.water>.05};for(const k of["oxygen","water","greenhouse"])m[k]&&f.push({id:k,demand:mn[k].load,pri:f.length});let b=_+Math.min(ob,r.battery*60/t),x=0;for(const k of f)k.granted=Math.max(0,Math.min(k.demand,b-x)),x+=k.granted,k.f=k.granted/k.demand,l.loads[k.id]=k.f;const v=Gr(s),w=r.battery;r.battery=mi(r.battery-Math.max(0,x-_)*t/60,0,v);const E=Math.max(0,_-x);r.battery=Math.min(v,r.battery+E*t/60*.95),l.gen=_,l.demand=f.reduce((k,F)=>k+F.demand,0),l.used=x,l.curtailed=r.battery>=v-1e-6?E:0,l.battNet=(r.battery-w)*60/t;const T=k=>f.find(F=>F.id===k)?.f??0,R=T("life");if(s.flags.lifeOff=R<.99?s.flags.lifeOff+t:0,T("oxygen")>0){let k=Ss(a.oxygen.cond)*T("oxygen");const F=.06*k*t;F>r.water&&(k*=r.water/F);const j=Math.min(.3*k*t,on.oxygen-r.oxygen);r.oxygen+=j,o.o2Produced+=j,r.water-=.06*k*t,l.oxygen.prod+=j/t,l.water.cons+=.06*k}if(T("water")>0){const k=Ss(a.water.cond)*T("water"),F=Math.min(.2*k*t,r.ice,(on.water-r.water)/.9),j=F*.9;r.ice-=F,r.water+=j,o.waterProduced+=j,l.water.prod+=j/t,l.ice.cons+=F/t}if(T("greenhouse")>0){let k=Ss(a.greenhouse.cond)*T("greenhouse");const F=.04*k*t;F>r.water&&(k*=r.water/F);const j=Math.min(.12*k*t,on.food-r.food);r.food+=j,o.foodProduced+=j,r.water-=.04*k*t,l.food.prod+=j/t,l.water.cons+=.04*k}const M=R>=.99?1:1.6,y=a.hab2.built?.03*(1-Ss(a.hab2.cond)):0,P=g*.05*M+y,I=g*.025,C=g*.02;r.oxygen=Math.max(0,r.oxygen-P*t),r.water=Math.max(0,r.water-I*t),r.food=Math.max(0,r.food-C*t),l.oxygen.cons+=P,l.water.cons+=I,l.food.cons+=C;for(const k of Object.keys(a)){const F=a[k];if(!F.built)continue;const j=f.some(it=>it.id===k&&it.f>0);F.cond=Math.max(0,F.cond-lb[k]*(mn[k].toggle?j?1:.1:1)*p*t)}const U={oxygen:r.oxygen<=1e-4,water:r.water<=1e-4,food:r.food<=1e-4},O=(U.oxygen?1.6:0)+(U.water?.35:0)+(U.food?.15:0);if(O?s.crew.health-=O*t:s.crew.health<100&&(s.crew.health=Math.min(100,s.crew.health+.6*t)),l.health=-O,s.crew.health<=0){s.crew.health=40,o.incidents++,s.storm.failed=!0,o.stableSeconds=0,r.materials=Math.floor(r.materials*.8),r.oxygen+=40,r.water+=15,r.food+=10;for(const k of Object.values(a))k.built&&(k.cond=Math.max(5,k.cond-15));n.push({type:"incident"})}const G=!U.oxygen&&!U.water&&!U.food&&R>=.99;c&&(!G||s.crew.health<50)&&(s.storm.failed=!0),a.hab2.built&&(o.stableSeconds=G?o.stableSeconds+t:0);for(const k of Object.values(s.nodes))k.charges<Nr&&(k.t+=t,k.t>=hb&&(k.t=0,k.charges++));return o.linkStart&&!o.linked&&(o.linkProg=Math.min(1,o.linkProg+t/i.linkDelay),o.linkProg>=1&&(o.linked=1,n.push({type:"linked"}))),n}const ke=s=>({ok:!1,msg:s}),Li=s=>({ok:!0,msg:s});function gb(s,t,e){const n=mn[t],i=s.mod[t];if(!n||!i)return ke("Unknown module.");if(i.built)return ke(`${n.name} is already ${t==="solar"?"repaired":"built"}.`);if(!sc(s,t,e))return ke(`${n.name} is not available yet. Progress your missions.`);for(const[r,a]of Object.entries(n.cost))if(s.res[r]<a)return ke(`Need ${a} ${r}. Stored: ${Math.floor(s.res[r])}. Mine more at supply caches and deliver to the depot.`);for(const[r,a]of Object.entries(n.cost))s.res[r]-=a;return i.built=!0,i.cond=100,i.dust=0,Li(t==="solar"?"Solar array repaired.":`${n.name} built.`)}function Lu(s,t){const e=s.mod[t],n=mn[t];return e?.built?e.cond>=95&&e.dust<.05?ke(`${n.name} is in good condition.`):s.res.materials<2?ke("Maintenance needs 2 construction materials."):(s.res.materials-=2,e.cond=Math.min(100,e.cond+35),e.dust=0,s.stats.maintenance++,Li(`${n.name} serviced. Condition ${Math.round(e.cond)}%.`)):ke("Nothing to maintain here yet.")}function Du(s,t,e){const n=s.nodes[t]??={charges:Nr,t:0};if(n.charges<=0)return ke("Deposit exhausted for now. It slowly replenishes.");const i=ic[e]-s.carried[e];if(i<1)return ke(`Carrying capacity full (${ic[e]}).`);const r=Math.min(ub[e],i);return n.charges--,s.carried[e]+=r,e==="ice"?s.stats.iceMined+=r:s.stats.matsMined+=r,Li(`Extracted ${Math.round(r)} ${e}. Carrying ${Math.round(s.carried[e])}.`)}function _b(s){const t=Math.min(s.carried.materials,on.materials-s.res.materials);return t<1?ke(s.carried.materials?"Storage is full.":"You are carrying no materials."):(s.carried.materials-=t,s.res.materials+=t,Li(`Stored ${Math.round(t)} construction materials.`))}function vb(s){if(!s.mod.water.built)return ke("Build a water processor first.");const t=Math.min(s.carried.ice,on.ice-s.res.ice);return t<1?ke(s.carried.ice?"Processor buffer is full.":"You are carrying no ice."):(s.carried.ice-=t,s.res.ice+=t,s.stats.iceLoaded+=t,Li(`Loaded ${Math.round(t)} ice into the processor.`))}function xb(s){return s.res.battery<.6?ke("The lab needs 0.6 kWh of stored energy."):(s.res.battery-=.6,s.stats.analyzed++,Li("Sample analysed."))}function yb(s){return s.stats.linked?ke("Earth link is already established."):s.stats.linkStart?ke("Handshake in progress."):(s.stats.linkStart=1,Li("Uplink started. Waiting for the signal to settle."))}function bb(s,t){const e=s.mod[t];return!e?.built||!mn[t].toggle?ke("Cannot switch this module."):(e.on=!e.on,Li(`${mn[t].name} ${e.on?"enabled":"disabled"}.`))}function Mb(s){const t=[],e=s.res,n=s.rates,i=Gr(s),r=c=>t.push({level:"crit",text:c}),a=c=>t.push({level:"warn",text:c}),o=c=>{const h=n[c].prod-n[c].cons;return h<-1e-4?e[c]/-h:1/0},l=c=>`${Math.floor(c/60)}:${String(Math.floor(c%60)).padStart(2,"0")}`;for(const[c,h]of[["oxygen","Oxygen"],["water","Water"],["food","Food"]])e[c]<=.001?r(`${h} depleted. Crew is taking damage.`):(o(c)<150||e[c]<on[c]*.15)&&(o(c)<60?r:a)(`${h} low${o(c)<1/0?`, runs out in ${l(o(c))}`:""}.`);n.demand>n.gen+.01&&e.battery<.5?r("Power shortage. Loads are being shed."):n.demand>n.gen+.01&&e.battery/i<.25&&a("Battery draining below 25%."),s.flags.lifeOff>0&&r("Life support unpowered. Oxygen use is up 60%.");for(const c of Object.keys(s.mod)){const h=s.mod[c];h.built&&h.cond<=10?r(`${mn[c].name} has failed. Service it (R).`):h.built&&h.cond<40&&a(`${mn[c].name} condition ${Math.round(h.cond)}%.`)}return s.storm.phase==="forecast"&&a(`Dust storm forecast in ${Math.ceil(s.storm.t)} s. Charge batteries.`),s.storm.phase==="active"&&r(`Dust storm. Solar output cut. ${Math.ceil(s.storm.t)} s left.`),s.crew.health<60&&a(`Crew health ${Math.round(s.crew.health)}%.`),t}const Iu={solar:{x:-8.5,z:8.4,r:0},battery:{x:-6,z:1,r:1.6,top:1.6},water:{x:-18,z:-3,r:2,top:2.6},oxygen:{x:-18,z:-10,r:1.6,top:3.4},greenhouse:{x:-24,z:-5,r:4,top:3},shield:{x:-9,z:13,r:0},solar2:{x:24,z:2,r:0},hab2:{x:0,z:-21,r:5,top:4.6}},Sb=s=>`site:${s}`;function wb(s,t,e){const n=new Kt,i=[],r=[],a=[],o={},l=[],c=(C,U={})=>new ve({color:C,roughness:.6,metalness:.2,...U}),h=c(15132910),u=c(3817290,{roughness:.7,metalness:.3}),d=c(1780310,{metalness:.6,roughness:.3,emissive:462114}),p=c(10479808,{transparent:!0,opacity:.45,roughness:.1,emissive:1858104}),_=c(e,{emissive:e,emissiveIntensity:1.1}),g=(C,U,O,G,k,F)=>{const j=new Gt(C,U);return j.position.set(O,G,k),j.castShadow=j.receiveShadow=!0,F.add(j),j},f=new Me(.16,10,8),m={battery:C=>{for(let U=-1;U<=1;U++)g(new Vt(.9,1.5,1.2),h,U*1,.75,0,C),g(new Vt(.6,.12,.05),_,U*1,1,.63,C)},water:C=>{g(new oe(1.3,1.3,2.2,20),h,0,1.1,0,C),g(new Vt(1.6,1,1.2),u,1.9,.5,0,C),g(new oe(.12,.12,2.4,8),u,1,1.6,0,C).rotation.z=Math.PI/2},oxygen:C=>{g(new oe(1,1.2,2.6,20),h,0,1.3,0,C),g(new oe(.5,.5,1.2,16),u,0,3,0,C),g(new Me(.22,10,8),_,0,3.7,0,C)},greenhouse:C=>{const U=g(new Me(3.6,24,12,0,Math.PI*2,0,Math.PI/2),p,0,0,0,C);U.castShadow=!1,g(new oe(3.7,3.7,.25,24),u,0,.1,0,C);for(let O=-1;O<=1;O++)g(new Vt(.9,.3,4.2),c(4164175,{emissive:1727018,emissiveIntensity:.5}),O*1.2,.45,0,C)},shield:C=>{for(let U=-3;U<=3;U++){const O=g(new Vt(1.6,2.8,.18),c(6969938,{roughness:.9}),U*1.8,1.4,0,C);O.rotation.x=-.12}},solar2:C=>{for(let U=0;U<3;U++){const O=new Kt;O.position.set(-4.2+U*4.2,1.6,0),O.rotation.x=-.55,C.add(O),g(new Vt(3.8,.1,2.4),d,0,0,0,O),g(new oe(.09,.09,1.6,8),u,-4.2+U*4.2,.8,.3,C)}},hab2:C=>{const U=g(new oe(2.3,2.3,8,28),h,0,2.55,0,C);U.rotation.z=Math.PI/2;for(let O=-1;O<=1;O+=2)g(new Vt(.5,.4,.06),c(12577023,{emissive:9426175,emissiveIntensity:.8}),O*1.8,2.9,2.3,C);g(new Vt(6,.12,.05),_,0,2.1,2.29,C)}};for(const C of Df[s]){const U=Iu[C],O=new Kt;O.position.set(U.x,0,U.z),n.add(O);const G=new Gt(new Vt(C==="solar2"||C==="shield"?12:C==="greenhouse"?7:C==="hab2"?8:3.6,.12,C==="solar2"?3:C==="greenhouse"?7:C==="hab2"?4.6:3.2),new hn({color:e,transparent:!0,opacity:.35,blending:ei,depthWrite:!1}));G.position.y=.08,O.add(G);const k=new Kt;O.add(k),(m[C]??(()=>{}))(k),k.visible=!1;const F=new hn({color:16730698}),j=new Gt(f,F);j.position.set(0,C==="greenhouse"?3.9:C==="hab2"?5.2:C==="shield"?3.2:C==="solar"?2.2:3.2,0),O.add(j),C==="solar"&&(O.position.set(-8.5,0,6.6),G.scale.set(4.2,1,.8),j.position.set(0,2.2,-.5));const it=o[C]={id:C,def:mn[C],root:O,ghost:G,body:k,lamp:j,lampMat:F,built:!1,pos:{x:U.x,y:0,z:C==="solar"?8.4:U.z}};it.interact={id:Sb(C),kind:"site",site:C,pos:it.pos,range:C==="greenhouse"||C==="hab2"||C==="solar2"?6.5:4.2,active:!0,get prompt(){return it.prompt??""}},i.push(it.interact)}const b=C=>{const U=Iu[C];if(U.r){const O={x:U.x,z:U.z,r:U.r,top:U.top};return a.push(O),O}return null},x=(C,U,O,G,k)=>{const F=new Kt;F.position.set(U,0,O),n.add(F),G(F);const j={id:C,kind:C,pos:{x:U,y:0,z:O},range:3,active:!0,get prompt(){return j.p??k}};return i.push(j),j},v=x("depot",3,-1.5,C=>{g(new Vt(1.8,1,1.2),u,0,.5,0,C),g(new Vt(1.5,.12,.9),_,0,1.06,0,C);for(const[U,O]of[[-.4,1.4],[.4,1.4]])g(new Vt(.6,.5,.6),c(13214282),U,O,0,C)},"Supply depot"),w=x("lab",-4,-3.5,C=>{g(new Vt(1.2,1.1,.8),u,0,.55,0,C),g(new Me(.28,12,8),c(12577023,{emissive:9426175,emissiveIntensity:.9}),0,1.35,0,C)},"Sample analysis lab"),E=x("uplink",12.2,-3.5,C=>{g(new Vt(.9,1.2,.6),u,0,.6,0,C),g(new Vt(.7,.4,.04),_,0,.9,.32,C),g(new oe(.04,.04,1.2,6),u,.3,1.8,0,C)},"Earth uplink");a.push({x:3,z:-1.5,r:1.1,top:1},{x:-4,z:-3.5,r:.8,top:1.1},{x:12.2,z:-3.5,r:.6,top:1.2});const T=ss(s==="moon"?707:808),R=(C,U,O)=>{const G=[];for(let k=0;k<O;k++){let F,j,it=0;do{const ft=T()*6.283,At=C+T()*(U-C);F=Math.cos(ft)*At,j=Math.sin(ft)*At}while(Math.abs(t(F,j)-t(F+3,j+3))>.9&&++it<40);G.push({x:F,z:j,y:t(F,j)})}return G},M=new Vt(.8,.8,.8),y=new oe(.05,.05,8,6),P=new eo(.7,0);return R(38,60,3).forEach((C,U)=>{const O=new Kt;O.position.set(C.x,C.y,C.z),n.add(O),g(M,c(13214282),0,.4,0,O),g(M,c(11569717),.9,.4,.3,O).rotation.y=.5,g(M,c(13214282),.4,1.15,.1,O).rotation.y=.2;const G=new Gt(y,new hn({color:16762726,transparent:!0,opacity:.3,blending:ei,depthWrite:!1}));G.position.y=4,O.add(G);const k={id:`${s}.cache#${U}`,kind:"cache",pos:{x:C.x,y:C.y,z:C.z},range:3.2,active:!0,get prompt(){return k.p??"Salvage construction materials"}};i.push(k),l.push(k)}),R(62,125,3).forEach((C,U)=>{const O=new Kt;O.position.set(C.x,C.y,C.z),n.add(O);const G=new ve({color:13627135,emissive:4892927,emissiveIntensity:.7,roughness:.25,transparent:!0,opacity:.9});g(P,G,0,.5,0,O),g(P,G,.8,.3,.4,O).scale.setScalar(.6),g(P,G,-.6,.25,-.5,O).scale.setScalar(.5);const k=new Gt(y,new hn({color:8376575,transparent:!0,opacity:.35,blending:ei,depthWrite:!1}));k.position.y=4,O.add(k);const F=`${s}.ice#${U}`,j={id:F,kind:"ice",pos:{x:C.x,y:C.y,z:C.z},range:3.2,active:!1,group:O,get prompt(){return j.p??"Extract water ice"}};i.push(j),l.push(j),s==="mars"?(O.visible=!1,r.push({id:F,kind:"ice",name:"Subsurface ice anomaly",discovery:`${s}.ice`,pos:new N(C.x,C.y+1.5,C.z),range:30,scanned:!1})):j.active=!0}),{group:n,interactables:i,scannables:r,colliders:a,sites:o,nodes:l,depot:v,lab:w,uplink:E,addCollider:b}}const Eb={greenhouse:4.7,habitat:3,power:2.7,lab:2.8,utility:2.3},Nf={greenhouse:[[-15.5,23]],habitat:[[17.5,15.5],[-25.5,14],[-27,6],[-26,-13]],power:[[10.5,13.5],[25.5,11.5],[13,27.5],[-12,-27],[12,-27]],lab:[[-13,-18.5],[13,-18.5],[-21,-21]],utility:[[19.5,22.5],[-4,-28],[4,-28],[20,-8.5],[22,-18]]},Tb={moon:"storage",mars:"extractor"},Ab={greenhouse:{r:4.4,h:3.6},habitat:{r:2.9,h:3.8},power:{r:2.4,h:2.6},lab:{r:2.6,h:3.6},utility:{r:2.1,h:3}},Uu={x:0,z:12},Cb=.08,Rb=Object.keys(Nf);function Pb(s,t,e){const n=s==="mars",i=new Kt,r=[],a=[];i.name="colonyStructures";const o=(D,J={})=>new ve({color:D,roughness:.6,metalness:.2,...J}),l=n?{hull:14206132,dark:4864564,panel:2895704,berm:8011562,soil:5911330,crop:8368202,fruit:15245882,grow:16744406,glass:16767426,glassEm:5909024,pipe:8373503}:{hull:15132910,dark:3817290,panel:1780310,berm:9145234,soil:3881792,crop:5226330,fruit:14173242,grow:14676991,glass:12576984,glassEm:1858104,pipe:8373503},c=o(l.hull,{roughness:.55,metalness:.15}),h=o(l.dark,{roughness:.7,metalness:.3}),u=o(4869720,{roughness:.9,metalness:.1}),d=o(l.panel,{roughness:.3,metalness:.6,emissive:462114}),p=o(l.berm,{roughness:1,metalness:0}),_=o(e,{emissive:e,emissiveIntensity:1.1}),g=o(12577023,{emissive:9426175,emissiveIntensity:.8}),f=o(l.glass,{transparent:!0,opacity:.3,roughness:.08,metalness:0,emissive:l.glassEm,emissiveIntensity:.5,side:ln,depthWrite:!1}),m=o(l.soil,{roughness:1,metalness:0}),b=o(l.pipe,{roughness:.3,metalness:.4,emissive:1718874,emissiveIntensity:.4}),x=o(8376575,{emissive:4892927,emissiveIntensity:1,roughness:.3}),v=new hn({color:e}),w=o(l.grow,{emissive:l.grow,emissiveIntensity:1.5}),E=o(l.crop,{roughness:.8,metalness:0,emissive:1727018,emissiveIntensity:.5}),T=o(l.fruit,{roughness:.5,metalness:0,emissive:l.fruit,emissiveIntensity:.35}),R=o(7323498,{roughness:.8,metalness:0,emissive:1727018,emissiveIntensity:.4}),M=new N(0,1,0),y=(D,J,X,nt,at,_t,Lt=!0)=>{const Mt=new Gt(D,J);return Mt.position.set(X,nt,at),Mt.castShadow=Lt,Mt.receiveShadow=!0,_t.add(Mt),Mt},P=(D,J,X)=>new Vt(D,J,X),I=(D,J,X,nt=20)=>new oe(D,J,X,nt),C=(D,J=16,X=10)=>new Me(D,J,X),U=D=>new Me(D,28,14,0,Math.PI*2,0,Math.PI/2),O=(D,J,X,nt)=>y(C(.15,10,8),_,J,X,nt,D,!1),G={habitat(D){if(n){y(I(2.3,2.9,1.25,36),p,0,.625,0,D),y(U(2.3),c,0,1.25,0,D);for(let J=0;J<4;J++){const X=y(new _i(2.32,.05,6,24,Math.PI),h,0,1.25,0,D,!1);X.rotation.y=J*Math.PI/4}for(const J of[-.6,0,.6]){const X=new Kt;X.rotation.y=J,D.add(X);const nt=y(P(.5,.35,.06),g,0,2.2,2.08,X,!1);nt.rotation.x=-.44}y(I(.75,.75,1,18),c,0,.85,2.35,D).rotation.x=Math.PI/2,y(I(.58,.58,.08,18),g,0,.85,2.84,D,!1).rotation.x=Math.PI/2,y(I(.79,.79,.1,18),_,0,.85,2,D,!1).rotation.x=Math.PI/2;for(const J of[-.9,.9])y(I(.16,.2,.9,10),h,J,3.7,-.3,D);y(I(.04,.04,1.2,6),h,0,4.1,.2,D),O(D,0,4.8,.2)}else{for(const nt of[-1.35,1.35])y(P(.5,.9,2.4),h,nt,.45,0,D);const J=2.15;y(I(1.45,1.45,2.8,28),c,0,J,0,D).rotation.z=Math.PI/2;for(const nt of[-1.4,1.4])y(C(1.45,24,14),c,nt,J,0,D);y(I(1.52,1.52,.25,28),h,0,J,0,D).rotation.z=Math.PI/2;for(const nt of[-.9,0,.9])y(P(.5,.38,.06),g,nt,J+.4,1.4,D,!1);y(P(2.6,.1,.05),_,0,J-.35,1.41,D,!1),y(I(.7,.7,1,18),c,-.4,1.7,1.75,D).rotation.x=Math.PI/2,y(I(.55,.55,.08,18),g,-.4,1.7,2.28,D,!1).rotation.x=Math.PI/2;const X=y(P(2.2,.06,1),d,0,3.72,0,D);X.rotation.x=-.12,y(I(.04,.04,1,6),h,1,4.2,0,D),O(D,1,4.75,0)}},power(D){const J=n?3:2,X=n?1.5:2.1,nt=n?.08:.1,at=J*X+(J-1)*nt,_t=new Kt;_t.position.set(0,1.6,-.2),_t.rotation.x=.55,D.add(_t);for(let Lt=0;Lt<J;Lt++)for(const Mt of[-.65,.65])y(P(X,.08,1.2),d,-at/2+X/2+Lt*(X+nt),0,Mt,_t);y(P(at+.1,.05,.07),h,0,.06,0,_t,!1),y(P(.07,.05,2.5),h,0,.06,0,_t,!1);for(const Lt of[-at/2+.3,at/2-.3])y(I(.09,.09,2.2,8),h,Lt,1.1,-.9,D),y(I(.07,.07,1,8),h,Lt,.5,.95,D);y(P(.9,.9,.7),c,0,.5,-1.7,D),y(P(.5,.1,.05),_,0,.7,-1.34,D,!1),y(I(.04,.04,2.6,6),h,n?2:1.9,1.3,-1.2,D),O(D,n?2:1.9,2.7,-1.2)},lab(D){y(P(4.2,.35,3),h,0,.175,0,D),y(P(4,2.2,2.8),c,0,1.45,0,D),y(P(4.1,.12,2.9),h,0,2.61,0,D);for(const J of[-1.2,0,1.2])y(P(.7,.5,.06),g,J,1.75,1.43,D,!1);if(y(P(3.6,.1,.05),_,0,.95,1.42,D,!1),y(P(.06,1.3,.9),g,2.03,1.1,-.2,D,!1),!n)y(I(.95,.95,.12,20),h,-1,2.73,-.2,D),y(U(.9),c,-1,2.79,-.2,D),y(P(.12,.7,.05),_,-1,3.2,.62,D,!1),y(I(.04,.04,1.3,6),h,1.3,3.3,.5,D),O(D,1.3,4,.5);else{y(I(.1,.12,2.4,8),h,-1.2,3.8,0,D),y(P(.5,.25,.5),h,-1.2,5.05,0,D);for(const X of[-1,1]){const nt=y(I(.04,.04,2,6),h,-1.2+X*.35,3.7,0,D);nt.rotation.z=-X*.17}const J=y(new Me(.7,18,8,0,Math.PI*2,0,.9),new ve({color:15922166,roughness:.4,metalness:.3,side:ln}),1.1,3.4,.3,D);J.rotation.x=-.6,y(I(.05,.05,.8,6),h,1.1,2.95,.3,D),O(D,-1.2,5.3,0);for(const[X,nt]of[[2.2,.9],[2.2,.2]])y(P(.5,.45,.5),o(13214282),X,.225,nt,D)}},utility(D){if(n){y(I(1.5,1.7,.2,24),h,0,.1,0,D),y(I(.5,.5,.04,16),o(657932),0,.22,0,D,!1);const J=(nt,at,_t,Lt,Mt)=>{const vt=_t-nt,z=Mt-.2,ye=Lt-at,Ct=Math.hypot(vt,z,ye);y(I(.05,.08,Ct,6),h,(nt+_t)/2,.2+z/2,(at+Lt)/2,D).quaternion.copy(new si().setFromUnitVectors(M,new N(vt/Ct,z/Ct,ye/Ct)))};for(const nt of[-1,1])for(const at of[-1,1])J(nt*.8,at*.8,nt*.25,at*.25,4.6);for(const[nt,at]of[[1.8,1.25],[3.2,.95]])y(P(at,.05,.05),h,0,nt,at/2,D,!1),y(P(at,.05,.05),h,0,nt,-at/2,D,!1),y(P(.05,.05,at),h,at/2,nt,0,D,!1),y(P(.05,.05,at),h,-at/2,nt,0,D,!1);y(I(.07,.07,4.4,8),h,0,2.4,0,D),y(P(.7,.35,.7),h,0,4.7,0,D),O(D,0,5.1,0),y(I(.85,.85,1.7,22),c,.9,1.05,.9,D),y(I(.87,.87,.25,22),x,.9,1.3,.9,D,!1);const X=new Kt;X.position.set(.45,.45,.45),X.rotation.y=-Math.PI/4,D.add(X),y(I(.08,.08,1.2,8),b,0,0,0,X).rotation.z=Math.PI/2,y(P(.6,.8,.5),h,-1.1,.5,.9,D),y(P(.4,.3,.05),g,-1.1,.7,1.16,D,!1)}else{y(P(3.2,1.3,1.4),c,0,.7,0,D);for(let X=-2;X<=2;X++)y(P(.08,1.3,1.5),h,X*.6,.7,0,D,!1);y(P(3,.08,.05),_,0,1,.71,D,!1);const J=y(P(2.6,1.2,1.3),c,.1,1.95,-.1,D);J.rotation.y=.25,y(I(.6,.6,1.6,18),c,0,.65,1.45,D).rotation.z=Math.PI/2,y(I(.62,.62,.15,18),h,.4,.65,1.45,D).rotation.z=Math.PI/2,O(D,-1.3,2.75,-.2)}},greenhouse(D){y(I(4.15,4.15,.12,36),h,0,.06,0,D,!1),y(new _i(4.2,.1,8,40),_,0,.15,0,D,!1).rotation.x=Math.PI/2;const X=y(U(4.2),f,0,.1,0,D,!1);X.renderOrder=2;for(let S=0;S<6;S++){const W=y(new _i(4.22,.05,6,28,Math.PI),c,0,.1,0,D,!1);W.rotation.y=S*Math.PI/6}y(new _i(Math.sqrt(4.2*4.2-2.5*2.5),.04,6,36),c,0,2.6,0,D,!1).rotation.x=Math.PI/2,y(P(1.5,1.5,1.1),c,0,.85,3.95,D),y(P(.8,1.1,.05),g,0,.75,4.5,D,!1),y(P(1.2,.08,.05),_,0,1.55,4.5,D,!1);const nt=[-1.9,0,1.9],at=[];for(const S of nt)y(P(S===0?6.4:6,.45,1),m,0,.35,S,D,!1),y(P(6,.05,.07),c,0,.58,S-.5,D,!1);for(const S of nt)for(const W of[-.24,.24])for(let Z=0;Z<9;Z++)at.push([-2.8+Z*.7+(W>0?.2:0),S+W]);const _t=new Ca(C(.3,8,6),E,at.length),Lt=new Ca(C(.09,6,5),T,at.length),Mt=new Ca(new Mc(.12,.34,6),R,at.length),vt=new Qt,z=new si,ye=new wn,Ct=new N,Rt=new N,Et=new Bt;at.forEach(([S,W],Z)=>{const et=Z*37%11/11;z.setFromEuler(ye.set(0,et*6.28,0)),Ct.set(1,1.15+et*.5,1),Rt.set(S,.58+.3*(1.15+et*.5),W),_t.setMatrixAt(Z,vt.compose(Rt,z,Ct)),_t.setColorAt(Z,Et.setRGB(.55+.45*(1-et),.7+.3*et,.45)),Ct.set(1,1,1),Rt.set(S+.14,.58+.4,W+.12),Lt.setMatrixAt(Z,vt.compose(Rt,z,Ct)),Rt.set(S,.58+.17,W),Mt.setMatrixAt(Z,vt.compose(Rt,z,Ct))}),_t.castShadow=Lt.castShadow=Mt.castShadow=!1,_t.frustumCulled=Lt.frustumCulled=Mt.frustumCulled=!1;const te=new Kt,Tt=new Kt;te.add(_t,Lt),Tt.add(Mt),D.add(te,Tt);const L=[];for(const S of nt){L.push(y(P(5,.06,.25),w,0,1.9,S,D,!1));for(const W of[-2.5,2.5])y(I(.04,.04,1.9,6),h,W,.95,S,D,!1)}for(const S of[-.95,.95])y(I(.05,.05,6,8),b,0,.85,S,D,!1).rotation.z=Math.PI/2;return y(P(.5,.6,.5),h,3.3,.35,0,D,!1),O(D,0,4.45,0),{grown:te,seedlings:Tt,lights:L}}};for(const D of Rb)Nf[D].forEach(([J,X],nt)=>{let at=t(J,X);const _t=Eb[D];for(let vt=0;vt<8;vt++)at=Math.max(at,t(J+Math.cos(vt*Math.PI/4)*_t,X+Math.sin(vt*Math.PI/4)*_t));const Lt=at+Cb,Mt=Ab[D];a.push({type:D,index:nt,x:J,z:X,y:Lt,R:_t,rot:Math.atan2(Uu.x-J,Uu.z-X),group:null,shown:!1,pop:1,collider:{x:J,z:X,r:Mt.r,top:Lt+Mt.h},collided:!1,extra:null})});const k=D=>{const J=new Kt;J.position.set(D.x,D.y,D.z),J.rotation.y=D.rot,J.name=`${D.type}#${D.index}`,i.add(J),y(I(D.R-.25,D.R-.1,.5,40),u,0,-.25,0,J).name="slab";const X=new Gt(new Hr(D.R-.7,D.R-.45,48),v);X.rotation.x=-Math.PI/2,X.position.y=.02,J.add(X),D.extra=G[D.type](J)??null,D.group=J},F=a.filter(D=>D.index===0);for(const D of F)k(D),D.shown=!0,D.collided=!0,r.push(D.collider);let j="",it=!1,ft=null;const At=D=>({habitat:Hn(D,"habitat"),power:Hn(D,"power"),lab:Hn(D,"lab"),utility:Hn(D,Tb[s]),greenhouse:0}),Yt=D=>!!(D.mod?.greenhouse?.built&&D.mod.greenhouse.on!==!1&&D.mod.greenhouse.cond>10);return{group:i,colliders:r,units:a,starters:F.length,visibleCount:()=>a.filter(D=>D.shown).length,isLush:()=>ft,sync(D,J,X){const nt=At(D),at=Yt(D),_t=`${nt.habitat}.${nt.power}.${nt.lab}.${nt.utility}.${at?1:0}`;if(_t===j)return;j=_t;const Lt=!it;it=!0;for(const vt of a){const z=vt.index<=nt[vt.type];if(z&&!vt.shown){if(vt.group||k(vt),vt.group.visible=!0,vt.shown=!0,Lt||(vt.pop=0,vt.group.scale.setScalar(.001)),vt.collided||(vt.collided=!0,J?.add(vt.collider)),X){let ye=X.x-vt.x,Ct=X.z-vt.z,Rt=Math.hypot(ye,Ct);const Et=vt.collider.r+(X.radius??.4)+.3;Rt<Et&&(Rt<1e-4&&(ye=0,Ct=1,Rt=1),X.x=vt.x+ye/Rt*Et,X.z=vt.z+Ct/Rt*Et)}}else!z&&vt.shown&&vt.index>0&&(vt.group.visible=!1,vt.shown=!1)}const Mt=a.find(vt=>vt.type==="greenhouse")?.extra;if(ft=at,Mt){Mt.grown.visible=at,Mt.seedlings.visible=!at;for(const vt of Mt.lights)vt.material=at?w:K()}},update(D,J){for(const X of a)if(X.shown&&X.pop<1){X.pop=Math.min(1,X.pop+D/1.1);const nt=X.pop-1,at=1+2.7*nt*nt*nt+1.7*nt*nt;X.group.scale.setScalar(X.pop>=1?1:Math.max(.001,at))}w.emissiveIntensity=1.3+.25*Math.sin(J*2)}};function K(){return K.m??=o(5592422,{emissive:2236979,emissiveIntensity:.4})}}const Ce={x:0,z:-6,r:14},yn={minPlay:60,minDist:45,warn:12,clear:12,card:6,haze:.2,up:.15},Lb=s=>s==="mars",Db=s=>({phase:s?.done?"done":"idle",done:!!s?.done,play:0,t:0,total:0,level:0,outcome:null,card:0}),Ib=s=>({done:!!s.done}),Nu=(s,t)=>Math.hypot(s-Ce.x,t-Ce.z)<=Ce.r,Ff=(s,t)=>Math.max(0,Math.hypot(s-Ce.x,t-Ce.z)-Ce.r),Ub=s=>Math.round(Math.min(150,Math.max(75,45+s/3)));function Nb(s,t,e){const n=[],i=Math.hypot(e.x-Ce.x,e.z-Ce.z);s.card>0&&(s.card=Math.max(0,s.card-t));const r=()=>{s.phase="clearing",s.outcome="safe",s.done=!0,s.t=yn.clear,s.card=yn.clear+yn.card,n.push({type:"safe"})};s.phase==="idle"?(s.play+=t,s.play>=yn.minPlay&&!e.busy&&i>=yn.minDist&&(s.phase="warning",s.t=yn.warn,n.push({type:"warning",seconds:yn.warn}))):s.phase==="warning"?(s.t-=t,Nu(e.x,e.z)?r():s.t<=0&&(s.phase="active",s.total=s.t=Ub(Ff(e.x,e.z)),n.push({type:"start",seconds:s.total}))):s.phase==="active"?(s.t-=t,Nu(e.x,e.z)?r():s.t<=0&&(s.phase="clearing",s.outcome="exposed",s.t=yn.clear,s.card=yn.clear+yn.card,n.push({type:"expired"}))):s.phase==="clearing"&&(s.t-=t,s.t<=0&&(s.phase=s.outcome==="safe"?"done":"over",n.push({type:"end",outcome:s.outcome})));const a=s.phase==="warning"?yn.haze:s.phase==="active"?1:0;return s.level=Math.min(1,Math.max(0,s.level+Math.min(yn.up*t,Math.max(-.1*t,a-s.level)))),n}function Fb(s,t,e){const n=Math.ceil(Math.max(0,s.t)),i=Math.round(Ff(t,e));return s.phase==="warning"?{phase:s.phase,level:s.level,tone:"warn",nav:!0,dist:i,title:"DUST STORM WARNING",text:`Storm front arriving in ${n} s. Head for the outpost safe zone.`}:s.phase==="active"?{phase:s.phase,level:s.level,tone:"crit",nav:!0,dist:i,title:"DUST STORM",text:`Visibility is low. Reach the outpost safe zone. ${n} s until it passes.`}:s.card<=0&&s.level<=0?null:s.outcome==="safe"?{phase:s.phase,level:s.level,tone:"ok",nav:!1,dist:i,title:"MISSION COMPLETE",text:s.phase==="clearing"?"You reached the outpost shelter. The storm is passing.":"Dust storm survived. Visibility restored."}:s.outcome==="exposed"?{phase:s.phase,level:s.level,tone:"warn",nav:!1,dist:i,title:s.phase==="clearing"?"STORM PASSING":"STORM PASSED",text:s.phase==="clearing"?"You were caught in the open. Visibility is returning.":"Visibility restored. The outpost is your shelter if another storm forms."}:null}function Ob(s){const t=new Kt,e=s(Ce.x,Ce.z),n=a=>new hn({color:8257456,transparent:!0,opacity:a,blending:ei,depthWrite:!1,fog:!1,side:ln}),i=new Gt(new oe(1.5,1.5,90,16,1,!0),n(.4));i.position.set(Ce.x,e+45,Ce.z);const r=new Gt(new Hr(Ce.r-.6,Ce.r,64),n(.5));return r.rotation.x=-Math.PI/2,r.position.set(Ce.x,e+.08,Ce.z),t.add(i,r),t.visible=!1,{group:t,set(a,o=0){t.visible=a,a&&(i.material.opacity=.34+.12*Math.sin(o*4))}}}function kb(s,t,e){const n=In[s],i=Fy(s),r=new Kt;t.add(r);const a=qy(s,t,e),o=By(s,i,e),l=Vy(s,i,e),c=Xy(s,n.accent),h=Gy(s,i),u=wb(s,i,n.accent),d=Pb(s,i,n.accent);r.add(o,l.mesh,c.group,h.group,u.group,d.group);const p=s==="mars"?Ob(i):null;p&&r.add(p.group);const _=[...c.scannables,...u.scannables],g=Sf[s];if(Mf(s).filter(x=>Math.hypot(x.x,x.z)<150).sort((x,v)=>v.r-x.r).slice(0,2).forEach((x,v)=>{const w=Math.hypot(x.x,x.z),E=x.x-x.x/w*x.r,T=x.z-x.z/w*x.r;_.push({id:`${s}.crater#${v}`,kind:"crater",name:"Impact crater",discovery:g.crater,pos:new N(E,i(E,T)+1.5,T),range:28,scanned:!1})}),g.dunes){let x={h:-1e9,x:0,z:0};for(let v=-140;v<=140;v+=8)for(let w=-140;w<=140;w+=8){const E=Math.hypot(v,w),T=i(v,w);E>60&&E<140&&T>x.h&&(x={h:T,x:v,z:w})}_.push({id:"mars.dunes",kind:"dunes",name:"Dune field",discovery:g.dunes,pos:new N(x.x,x.h+1.5,x.z),range:26,scanned:!1})}const m=new wc(.35),b=new hn({color:n.accent,transparent:!0,opacity:.85});for(const x of _)x.marker=new Gt(m,b),x.marker.position.copy(x.pos).y+=x.kind==="crater"||x.kind==="dunes"?2.5:1.8,x.baseY=x.marker.position.y,r.add(x.marker);return{def:n,heightAt:i,root:r,sky:a,beacon:p,scannables:_,colony:u,structures:d,interactables:[...c.interactables,...h.items,...u.interactables],samples:h.items,colliders:[...l.colliders,...c.colliders,...u.colliders,...d.colliders],spawn:{x:0,z:30},half:Uy-2,dispose(){a.dispose(),t.remove(r),r.traverse(x=>{x.geometry?.dispose?.();const v=x.material;(Array.isArray(v)?v:v?[v]:[]).forEach(w=>{w.map?.dispose?.(),w.dispose()})})}}}const Fu=.4,zb=[];class Bb{constructor({heightAt:t,colliders:e=[],half:n=238,cell:i=16}){this.heightAt=t,this.half=n,this.cell=i,this.grid=new Map,e.forEach(r=>this.add(r))}add(t){const e=this.cell,n=t.r+.6;for(let i=Math.floor((t.x-n)/e);i<=Math.floor((t.x+n)/e);i++)for(let r=Math.floor((t.z-n)/e);r<=Math.floor((t.z+n)/e);r++){const a=i+","+r;(this.grid.get(a)??this.grid.set(a,[]).get(a)).push(t)}}near(t,e){return this.grid.get(Math.floor(t/this.cell)+","+Math.floor(e/this.cell))??zb}groundAt(t,e,n){let i=this.heightAt(t,e);for(const r of this.near(t,e)){const a=t-r.x,o=e-r.z;a*a+o*o<r.r*r.r&&r.top<=n+Fu&&r.top>i&&(i=r.top)}return i}#t(t,e,n){const i=this.heightAt(e,n)-t.y;return t.grounded?i<=0||i<=Math.hypot(e-t.x,n-t.z)*1.15+1e-4:i<=.35}step(t,e,n,i,r,a,o,l){if(t.grounded||r){const f=n-t.vx,m=i-t.vz,b=Math.hypot(f,m),x=(t.grounded?24:4)*e;b>x?(t.vx+=f/b*x,t.vz+=m/b*x):(t.vx=n,t.vz=i)}let c=!1;a&&(t.grounded||t.coyote>0)&&(t.vy=l,t.grounded=!1,t.coyote=0,c=!0);const h=t.grounded;t.grounded||(t.vy-=o*e);const u=this.half,d=Math.max(-u,Math.min(u,t.x+t.vx*e)),p=Math.max(-u,Math.min(u,t.z+t.vz*e));this.#t(t,d,p)?(t.x=d,t.z=p):this.#t(t,d,t.z)?(t.x=d,t.vz=0):this.#t(t,t.x,p)?(t.z=p,t.vx=0):(t.vx=0,t.vz=0);for(const f of this.near(t.x,t.z)){if(f.top<=t.y+Fu)continue;let m=t.x-f.x,b=t.z-f.z,x=Math.hypot(m,b);const v=f.r+t.radius;x<v&&(x<1e-4&&(m=1,b=0,x=1),t.x=f.x+m/x*v,t.z=f.z+b/x*v)}const _=t.y;t.y+=t.vy*e;const g=this.groundAt(t.x,t.z,_);return t.vy<=0&&t.y<=g||h&&!c&&_-g<=.45?(t.y=g,t.vy=0,t.grounded=!0,t.coyote=.12):(t.grounded=!1,t.coyote=Math.max(0,t.coyote-e)),c}}const tl={walk:3,run:6,jumpV:2.6};class Hb{constructor(t,e,n){this.physics=t,this.gravity=e,this.body={x:n.x,y:t.groundAt(n.x,n.z,1e3),z:n.z,vx:0,vy:0,vz:0,grounded:!0,coyote:0,radius:.4},this.heading=0,this.speed=0}update(t,e,n,i,r,a){const o=-Math.sin(a),l=-Math.cos(a),c=Math.cos(a),h=-Math.sin(a);let u=o*n+c*e,d=l*n+h*e;const p=Math.hypot(u,d),_=p>1e-4;if(_){const f=i?tl.run:tl.walk;u=u/p*f,d=d/p*f}else u=0,d=0;const g=this.physics.step(this.body,t,u,d,_,r,this.gravity,tl.jumpV);if(this.speed=Math.hypot(this.body.vx,this.body.vz),_){let m=Math.atan2(u,d)-this.heading;m=Math.atan2(Math.sin(m),Math.cos(m)),this.heading+=m*Math.min(1,t*12)}return g}}class Vb{group=new Kt;#t=0;constructor(t=5999871){const e=new ve({color:15856374,roughness:.6}),n=new ve({color:9080732,roughness:.7}),i=new ve({color:13214282,metalness:.9,roughness:.18}),r=new ve({color:t,emissive:t,emissiveIntensity:.6}),a=(c,h,u,d,p,_=this.group)=>{const g=new Gt(c,h);return g.position.set(u,d,p),g.castShadow=!0,_.add(g),g};a(new oe(.3,.27,.62,16),e,0,1.2,0),a(new Vt(.5,.66,.28),n,0,1.25,-.31),a(new Vt(.22,.12,.04),r,0,1.3,.28),a(new Me(.28,20,14),e,0,1.72,0),a(new Me(.2,16,12),i,0,1.72,.12).scale.set(1.15,.85,.7);const l=(c,h,u,d,p)=>{const _=new Kt;return _.position.set(u,d,0),this.group.add(_),a(new oe(h,h*.9,c,10),p,0,-c/2,0,_),_};this.legL=l(.92,.11,-.14,.92,e),this.legR=l(.92,.11,.14,.92,e);for(const c of[this.legL,this.legR])a(new Vt(.2,.14,.34),n,0,-.9,.06,c);this.armL=l(.6,.085,-.4,1.45,e),this.armR=l(.6,.085,.4,1.45,e)}animate(t,e,n,i){this.#t+=t*(2+e*1.6);const r=Math.min(1,e/3),a=Math.sin(this.#t);if(n)this.legL.rotation.x=a*.75*r,this.legR.rotation.x=-a*.75*r,this.armL.rotation.x=-a*.6*r,this.armR.rotation.x=a*.6*r;else{const o=Math.max(-.4,Math.min(.5,i*.12));this.legL.rotation.x=.35+o,this.legR.rotation.x=-.25-o*.5,this.armL.rotation.x=-.9,this.armR.rotation.x=-.9}this.group.children[0].position.y=1.2+(n?Math.abs(a)*.02*r:0)}}class Gb{yaw=0;pitch=.28;dist=5.5;#t=new N;#e=new N;#n=!1;constructor(t,e,n=null){this.camera=t,this.heightAt=e,this.near=n}look(t,e,n){this.yaw-=t*.0022,this.pitch=qa(this.pitch+e*.0022,-.25,1.25),this.dist=qa(this.dist+n*.004,2.5,10)}update(t,e){const n=e.x,i=e.y+1.5,r=e.z,a=!this.#n;a?(this.#t.set(n,i,r),this.#n=!0):this.#t.lerp(this.#e.set(n,i,r),1-Math.exp(-14*t));const o=Math.cos(this.pitch);this.#e.set(this.#t.x+Math.sin(this.yaw)*o*this.dist,this.#t.y+Math.sin(this.pitch)*this.dist,this.#t.z+Math.cos(this.yaw)*o*this.dist);const l=this.heightAt(this.#e.x,this.#e.z)+.6;if(this.#e.y<l&&(this.#e.y=l),this.near)for(let c=0;c<2;c++)for(const h of this.near(this.#e.x,this.#e.z)){if(h.r<.9||this.#e.y>h.top+.4)continue;let u=this.#e.x-h.x,d=this.#e.z-h.z,p=Math.hypot(u,d);const _=h.r+.5;p>=_||(p<.001&&(u=this.#t.x-h.x,d=this.#t.z-h.z,p=Math.hypot(u,d)||1),this.#e.x=h.x+u/p*_,this.#e.z=h.z+d/p*_)}a?this.camera.position.copy(this.#e):this.camera.position.lerp(this.#e,1-Math.exp(-20*t)),this.camera.lookAt(this.#t)}snap(){this.#n=!1}}class Wb{down=new Set;hit=new Set;mdx=0;mdy=0;wheelY=0;locked=!1;fallback=!1;dragging=!1;onLockChange=()=>{};onKey=()=>{};constructor(t){this.el=t,this.h={kd:e=>{["Space","ArrowUp","ArrowDown","Tab"].includes(e.code)&&e.preventDefault(),!e.repeat&&(this.down.add(e.code),this.hit.add(e.code),this.onKey(e.code))},ku:e=>this.down.delete(e.code),blur:()=>this.down.clear(),mm:e=>{(this.locked||this.fallback&&this.dragging)&&Math.abs(e.movementX)<300&&Math.abs(e.movementY)<300&&(this.mdx+=e.movementX,this.mdy+=e.movementY)},md:e=>{e.target===this.el&&(this.dragging=!0)},mu:()=>{this.dragging=!1},wh:e=>{this.wheelY+=e.deltaY},pl:()=>{this.locked=document.pointerLockElement===this.el,this.onLockChange(this.locked)},pe:()=>{this.#n()}}}attach(){const t=this.h;addEventListener("keydown",t.kd),addEventListener("keyup",t.ku),addEventListener("blur",t.blur),addEventListener("mousemove",t.mm),addEventListener("mousedown",t.md),addEventListener("mouseup",t.mu),addEventListener("wheel",t.wh,{passive:!0}),document.addEventListener("pointerlockchange",t.pl),document.addEventListener("pointerlockerror",t.pe)}detach(){const t=this.h;removeEventListener("keydown",t.kd),removeEventListener("keyup",t.ku),removeEventListener("blur",t.blur),removeEventListener("mousemove",t.mm),removeEventListener("mousedown",t.md),removeEventListener("mouseup",t.mu),removeEventListener("wheel",t.wh),document.removeEventListener("pointerlockchange",t.pl),document.removeEventListener("pointerlockerror",t.pe),document.pointerLockElement===this.el&&document.exitPointerLock()}isDown(t){return this.down.has(t)}pressed(t){return this.hit.has(t)}endFrame(){this.hit.clear()}look(){const t=[this.mdx,this.mdy];return this.mdx=this.mdy=0,t}takeWheel(){const t=this.wheelY;return this.wheelY=0,t}requestLock(t=!0){this.#t=t;try{this.el.requestPointerLock?.()?.catch?.(()=>this.#n()),this.el.requestPointerLock||this.#n()}catch{this.#n()}}#t=!0;#e=!1;#n(){this.#e||(this.#e=!0,this.#t?(this.#t=!1,setTimeout(()=>{this.#e=!1,this.requestLock(!1)},1300)):(this.#e=!1,this.fallback=!0,this.onLockChange(!1)))}}const $b=1.4,qb=.6;class Xb{constructor({interactables:t,scannables:e,onInteract:n,onScanned:i}){Object.assign(this,{interactables:t,scannables:e,onInteract:n,onScanned:i}),this.target=null,this.scanTarget=null,this.progress=0}update(t,e,n,i){let r=null,a=1/0;for(const u of this.interactables){if(!u.active)continue;const d=Math.hypot(u.pos.x-e.x,u.pos.z-e.z);d<u.range&&Math.abs(u.pos.y-e.y)<4&&d<a&&(r=u,a=d)}this.target=r;const o=e.x,l=e.y+1.4,c=e.z;let h=null;a=1/0;for(const u of this.scannables){if(u.scanned)continue;const d=u.pos.x-o,p=u.pos.y-l,_=u.pos.z-c,g=Math.hypot(d,p,_);g>u.range||g<.001||(d*n.x+p*n.y+_*n.z)/g<qb||g<a&&(h=u,a=g)}return h!==this.scanTarget&&(this.scanTarget=h,this.progress=0),h&&i?(this.progress+=t/$b,this.progress>=1&&(h.scanned=!0,this.progress=0,this.scanTarget=null,this.onScanned(h))):this.progress=0,{interact:this.target,scan:this.scanTarget,progress:this.progress}}interact(){this.target&&this.onInteract(this.target)}}const Yb=16,mr=3,gr=3,jb=()=>({reached:!1,rover:!1,returned:!1,scannedIds:[],collectedIds:[]});function Of(s){return[{id:"outpost",text:"Walk to the research outpost",done:s.reached},{id:"rover",text:"Inspect the rover",done:s.rover},{id:"scan",text:`Scan ${mr} features`,progress:Math.min(s.scannedIds.length,mr),target:mr,done:s.scannedIds.length>=mr},{id:"samples",text:`Collect ${gr} samples`,progress:Math.min(s.collectedIds.length,gr),target:gr,done:s.collectedIds.length>=gr},{id:"return",text:"Return to the outpost with your findings",done:s.returned}]}function Kb(s,t,e,n){const i=Math.hypot(t,e)<Yb;i&&(s.reached=!0),i&&s.rover&&s.scannedIds.length>=mr&&s.collectedIds.length>=gr&&(s.returned=!0);const r=new Set(n.filter(a=>a.done).map(a=>a.id));return Of(s).filter(a=>a.done&&!r.has(a.id))}const kf=s=>Jy[s.world];function Fr(s){return kf(s).find(t=>!s.missions.done.includes(t.id))??null}const zf=(s,t)=>({res:s.res,mod:s.mod,stats:s.stats,crew:s.crew,storm:s.storm,world:s.world,explore:t,battPct:s.res.battery/Gr(s)});function Bf(s,t,e,n){const i=!!s.missions.obj[t.id]?.[e.id],r=e.get(n),a=i||r>=e.target;return{id:e.id,text:e.text,target:e.target,progress:a?e.target:Math.max(0,Math.min(e.target,r)),done:a,latch:!i&&a}}function Zb(s,t){const e=[],n=zf(s,t);for(let i=0;i<10;i++){const r=Fr(s);if(!r)break;const a=r.objectives.map(l=>Bf(s,r,l,n));for(const l of a)l.latch&&((s.missions.obj[r.id]??={})[l.id]=!0,e.push({type:"objective",mission:r.id,title:r.title,text:l.text}));if(!a.every(l=>l.done))break;s.missions.done.push(r.id);for(const[l,c]of Object.entries(r.reward))s.res[l]=Math.min(on[l]??1e3,s.res[l]+c);const o=Fr(s);e.push({type:"mission",mission:r.id,title:r.title,done:r.done,reward:Hf(r.reward),next:o?.title??null})}return e}const Hf=s=>Object.entries(s).map(([t,e])=>`+${e} ${t}`).join(", ");function Ou(s,t){const e=zf(s,t),n=Fr(s),i=kf(s);return i.map((r,a)=>{const o=s.missions.done.includes(r.id),l=o?"done":n?.id===r.id?"active":"locked";return{id:r.id,title:r.title,brief:r.brief,status:l,reward:Hf(r.reward),requires:a?i[a-1].title:null,completion:r.done,objectives:l==="locked"?r.objectives.map(c=>({text:c.text,target:c.target,progress:0,done:!1})):r.objectives.map(c=>Bf(s,r,c,e))}})}const Jb=[["oxygen","Oxygen"],["water","Water"],["food","Food"],["materials","Construction materials"],["ice","Ice in processor"]],Qb=2,tM=(s,t)=>s.built?s.cond<=10?"Failed":t&&!s.on?"Switched off":s.cond<60?"Degraded":"Online":"Not built";function Vf(s,t,e=!0){const n=In[s],i=t,r=Gr(i),a=Jb.map(([c,h])=>({key:c,name:h,value:i.res[c],cap:on[c]}));a.push({key:"power",name:"Battery power",value:i.res.battery,cap:r,unit:"kWh"});const o=[{id:"habitat",name:"Habitat modules",state:"Online",count:Qb,cond:100}];for(const c of Df[s]){const h=i.mod[c],u=mn[c];o.push({id:c,name:u.name,state:tM(h,!!u.toggle),cond:h.built?h.cond:0,built:h.built,on:h.on,toggle:!!u.toggle,count:c==="hab2"&&h.built?1:0})}const l=o.filter(c=>c.state!=="Not built").length;return{world:s,worldName:n.name,colonyName:n.colonyName,visited:e,mission:n.mission,status:e?i.crew.health<60?"Crew in danger":"Operating":"No landing recorded",population:{crew:ja(i),health:i.crew.health,housing:ja(i),more:i.mod.hab2.built?0:2},resources:a,buildings:o,builtCount:l,totalCount:o.length,structures:Ur(s)?$c(s).map(c=>{const h=js(s,c);return{id:c,name:h.name,count:Hn(i,c),max:h.max}}):null,missionsDone:i.missions.done.length,missionsTotal:n.missions.length}}const Gf=(s,t)=>Vf(s,If(s,t?.colony),!!t),eM=1/60,nM=30;class iM{scene=new to;camera=new Fe(60,1,.1,1200);ready=!1;playing=!1;istate={interact:null,scan:null,progress:0};#t=0;#e=0;#n=0;#a=0;#R=null;#h=null;managing=!1;panelTab="resources";#u=new N;#v=0;#l=t=>{(t?.type==="pagehide"||document.visibilityState==="hidden")&&this.saveNow()};constructor(t){this.app=t}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}#d(t={}){this.app.bus.emit("hud",t)}async enter({world:t}){const e=++this.#t;this.worldId=t,this.ready=!1,this.playing=!1,this.managing=!1,this.#d({loading:!0,world:{name:In[t].name,mission:In[t].mission}});try{const n=await vi.load(t)??{};if(await new Promise(i=>requestAnimationFrame(()=>i())),e!==this.#t)return;this.#x(t,n)}catch(n){console.error(n),this.#d({loading:!1,error:"Could not build this world: "+n.message})}}#x(t,e){const n=this.app.settings.quality,i=this.app.renderer;i.shadowMap.enabled=n!=="low",i.shadowMap.type=Gu,this.world=kb(t,this.scene,n);const r=this.world,a=r.def;this.physics=new Bb({heightAt:r.heightAt,colliders:r.colliders,half:r.half});const o=e.pos&&Number.isFinite(e.pos.x)&&Number.isFinite(e.pos.z)&&Math.abs(e.pos.x)<r.half&&Math.abs(e.pos.z)<r.half?e.pos:r.spawn;this.player=new Hb(this.physics,a.gravity,o),this.astro=new Vb(a.accent),this.scene.add(this.astro.group),this.astro.group.traverse(l=>{l.isMesh&&(l.receiveShadow=!1)}),this.rig=new Gb(this.camera,r.heightAt,(l,c)=>this.physics.near(l,c)),this.rig.snap(),e.pos||(this.rig.yaw=0),this.discoveries=Array.isArray(e.discoveries)?e.discoveries.filter(l=>Ya[l]):[],this.explore={...jb(),...e.explore??{}},this.inventory={...e.inventory??{}};for(const l of r.scannables)this.explore.scannedIds.includes(l.id)&&(l.scanned=!0,l.marker.visible=!1);for(const l of r.samples)this.explore.collectedIds.includes(l.id)&&(l.active=!1,l.group.visible=!1);this.colony=If(t,e.colony),this.#_(),this.storm=Lb(t)?Db(e.dustStorm):null,this.interaction=new Xb({interactables:r.interactables,scannables:r.scannables,onInteract:l=>this.#b(l),onScanned:l=>this.#M(l)}),this.input=new Wb(i.domElement),this.input.onLockChange=l=>{this.playing=(l||this.input.fallback)&&!this.managing,this.#r(!0)},this.input.onKey=l=>{const c={Tab:"resources",KeyM:"missions",KeyC:"colonies",KeyB:"construct"}[l];if(c&&(c!=="construct"||Ur(this.worldId))){this.managing&&this.panelTab===c?this.closePanel():this.managing?(this.panelTab=c,this.#r(!0)):this.playing&&this.openPanel(c);return}if(this.managing&&l==="Escape"){this.closePanel();return}this.input.fallback&&!this.managing&&(l==="Escape"||l==="KeyP")&&(this.playing=!this.playing,this.#r(!0))},this.input.attach(),document.addEventListener("visibilitychange",this.#l),addEventListener("pagehide",this.#l),this.ready=!0,this.#n=0,this.#r(!0)}#y(){const t=this.worldId,e=Mr.find(n=>n!==t);this.#h=null,vi.load(e).then(n=>{this.worldId!==t||!this.ready||(this.#h=Gf(e,n),this.#r(!0))}).catch(()=>{})}openPanel(t="resources"){this.ready&&(this.#y(),this.managing=!0,this.panelTab=t,this.playing=!1,document.pointerLockElement&&document.exitPointerLock(),this.#r(!0))}closePanel(){this.managing&&(this.managing=!1,this.resume())}setPanelTab(t){this.panelTab=t,this.#r(!0)}colonyAction(t){this.ready&&(t.type==="toggle"?this.#i(bb(this.colony,t.id)):t.type==="construct"&&this.#i(nb(this.colony,t.id))&&this.saveNow(),this.#m(),this.#r(!0))}resume(){this.ready&&(this.input.fallback?(this.playing=!0,this.#r(!0)):this.input.requestLock())}async saveNow(){return this.ready?(await vi.write(this.worldId,{pos:{x:this.player.body.x,z:this.player.body.z},inventory:this.inventory,discoveries:this.discoveries,explore:this.explore,colony:fb(this.colony),...this.storm?{dustStorm:Ib(this.storm)}:{},stage:5}),!0):!1}quit(t){this.app.goTo(t)}exit(){this.#t++,this.ready&&this.saveNow(),this.ready=!1,this.playing=!1,this.managing=!1,this.storm=null,this.input?.detach(),this.input=null,document.removeEventListener("visibilitychange",this.#l),removeEventListener("pagehide",this.#l),this.astro&&(this.scene.remove(this.astro.group),this.astro.group.traverse(t=>{t.geometry?.dispose?.(),t.material?.dispose?.()}),this.astro=null),this.world?.dispose(),this.world=null,this.scene.background=null}#s(t,e){this.app.bus.emit("toast",e?`${t}: ${e}`:t)}#o(t){!t||this.discoveries.includes(t)||(this.discoveries.push(t),this.#s("Discovery unlocked",Ya[t].title),this.saveNow())}#f(){const t=Of(this.explore),e=this.player.body,n=Kb(this.explore,e.x,e.z,t);this.#g(),n.length&&this.saveNow()}#b(t){t.kind==="sample"?(t.active=!1,t.group.visible=!1,this.explore.collectedIds.push(t.id),this.inventory[t.type]=(this.inventory[t.type]??0)+1,this.#s("Collected",t.label),this.#o(t.discovery)):t.kind==="rover"?(this.explore.rover=!0,this.#s("Rover inspected","Wheels, mast and solar panel check out."),t.discoveries.forEach(e=>this.#o(e))):t.kind==="terminal"?(this.#s("Environment console","Report logged."),t.discoveries.forEach(e=>this.#o(e))):this.#S(t),this.#m(),this.#f(),this.saveNow()}#M(t){this.explore.scannedIds.push(t.id),t.marker.visible=!1,this.#s("Scanned",t.kind==="ice"?"Ice located. You can extract it.":t.name),this.#o(t.discovery),this.#_(),this.#f(),this.saveNow()}#i(t){return t&&this.#s(t.ok?"Colony":"Cannot do that",t.msg),t?.ok}#p(){return Fr(this.colony)?.id??null}#_(){for(const t of this.world.colony.nodes)t.kind==="ice"&&(t.active=this.worldId==="moon"||this.explore.scannedIds.includes(t.id),t.group.visible=t.active);this.#c()}#c(){const t=this.colony,e=this.#p(),n=this.world.colony;this.world.structures.sync(t,this.physics,this.player.body);for(const r of Object.values(n.sites)){const a=t.mod[r.id],o=sc(t,r.id,e);if(a.built&&!r.built){r.built=!0;const c=n.addCollider(r.id);c&&this.physics.add(c)}r.body.visible=a.built,r.ghost.visible=!a.built&&o,r.interact.active=a.built||o,r.lamp.visible=a.built||r.id==="solar",r.lampMat.color.setHex(a.built?a.cond<=10?16730698:a.on?a.cond<40?16758858:4915098:8028300:16730698);const l=r.def;r.prompt=a.built?r.id==="water"&&t.carried.ice>=1?`Load ${Math.floor(t.carried.ice)} ice into processor`:`Service ${l.name.toLowerCase()} (${Math.round(a.cond)}%)`:`${l.verb??"Build"} ${l.name.toLowerCase()} (${Object.entries(l.cost).map(([c,h])=>`${h} ${c}`).join(", ")})`}const i=n;i.depot.p=t.carried.materials>=1?`Store ${Math.floor(t.carried.materials)} materials`:"Supply depot (store materials here)",i.lab.p="Analyse a sample",i.uplink.p=t.stats.linked?"Earth link established":t.stats.linkStart?`Uplink settling ${Math.round(t.stats.linkProg*100)}%`:"Start Earth uplink";for(const r of n.nodes){const a=t.nodes[r.id]?.charges??Nr;r.p=a>0?`${r.kind==="ice"?"Extract water ice":"Salvage construction materials"} (${a} left)`:"Deposit exhausted, regrowing"}}#S(t){const e=this.colony,n=this.#p();if(t.kind==="site")e.mod[t.site].built?t.site==="water"&&e.carried.ice>=1?this.#i(vb(e)):this.#i(Lu(e,t.site)):this.#i(gb(e,t.site,n));else if(t.kind==="cache")this.#i(Du(e,t.id,"materials"));else if(t.kind==="ice")this.#i(Du(e,t.id,"ice"))&&this.#o(`${this.worldId}.ice`);else if(t.kind==="depot")this.#i(_b(e));else if(t.kind==="uplink")this.#i(yb(e));else if(t.kind==="lab"){const i=Object.keys(this.inventory).find(r=>this.inventory[r]>0);i?this.#i(xb(e))&&this.inventory[i]--:this.#i({ok:!1,msg:"Collect a sample first."})}}#w(){const t=this.player.body;let e=null,n=7;for(const i of Object.values(this.world.colony.sites)){if(!this.colony.mod[i.id].built)continue;const r=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);r<n&&(e=i,n=r)}if(!e)return this.#s("Nothing to service nearby");this.#i(Lu(this.colony,e.id)),this.#m(),this.saveNow()}#m(){this.#c(),this.#g()}#g(){const t=Zb(this.colony,this.explore);if(t.length){for(const e of t)e.type==="objective"?(this.#s("Objective complete",e.text),this.app.bus.emit("mission:objective",{world:this.worldId,...e})):e.type==="mission"&&(this.#s(`Mission complete: ${e.title}`,`${e.done} Reward ${e.reward}.${e.next?` Next: ${e.next}.`:""}`),this.app.bus.emit("mission:complete",{world:this.worldId,...e}));this.#c(),this.saveNow()}}#E(t){for(const e of t){const n={incident:["Crew emergency","Evacuated to the shelter. Some supplies and equipment condition were lost."],linked:["Earth link","Handshake complete. Link established."],"storm-forecast":["Dust storm forecast","Charge batteries and protect the panels."],"storm-start":["Dust storm","Solar output has collapsed."],"storm-end":["Dust storm",e.survived?"The storm has passed. Colony held.":"The storm passed but the colony was in trouble. Another will come."]}[e.type];n&&this.#s(...n),this.app.bus.emit("colony:event",{world:this.worldId,...e}),e.type==="storm-start"&&this.#o("mars.storm"),(e.type==="incident"||e.type==="storm-end"||e.type==="linked")&&this.saveNow()}}#T(t){for(const e of t){const n={warning:["Dust storm warning",`Front arriving in ${e.seconds} s. Head for the outpost safe zone.`],start:["Dust storm","Visibility is dropping. Follow the green beacon to the outpost."],safe:["Mission complete","You reached the outpost shelter. Dust storm survived."],expired:["Dust storm","You were caught in the open. The storm is passing."],end:["Dust storm","The storm has passed. Visibility restored."]}[e.type];n&&this.#s(...n),this.app.bus.emit("hazard:event",{world:this.worldId,hazard:"dust-storm",...e}),e.type==="safe"&&this.saveNow()}}#A(){if(!this.storm)return null;const t=this.player.body,e=Fb(this.storm,t.x,t.z);if(!e)return null;const n=this.#u,i=Ce.x-t.x,r=Ce.z-t.z;return e.angle=Math.atan2(-i*n.z+r*n.x,i*n.x+r*n.z),e}#r(t){if(!this.ready)return;const e=this.istate,n=this.player.body;this.#d({loading:!1,error:null,playing:this.playing,fallback:this.input.fallback,world:{name:this.world.def.name,mission:this.world.def.mission,gravity:this.world.def.gravity},managing:this.managing,panelTab:this.panelTab,...this.#C(),hazard:this.#A(),samples:`${this.explore.collectedIds.length}/${this.world.samples.length}`,discoveries:this.discoveries.length,interact:e.interact?e.interact.prompt:null,scan:e.scan?{name:e.scan.name,progress:e.progress}:null,speed:this.player.speed,airborne:!n.grounded,force:t})}#C(){const t=this.colony,e=Fr(t),n=t.rates,i=Gr(t),r=t.res,a=e?Ou(t,this.explore).find(l=>l.id===e.id).objectives:[],o={missionTitle:e?.title??"All missions complete",missionBrief:e?.brief??"Sandbox play continues. Keep the colony alive.",objectives:a,colony:{res:{...r},cap:on,batt:{kwh:r.battery,cap:i,net:n.battNet},power:{gen:n.gen,demand:n.demand,used:n.used,curtailed:n.curtailed},rates:{oxygen:n.oxygen,water:n.water,food:n.food,ice:n.ice},carried:{...t.carried},crew:{size:ja(t),health:t.crew.health},alerts:Mb(t),storm:{phase:t.storm.phase,t:t.storm.t},link:{done:!!t.stats.linked,prog:t.stats.linkProg}}};return this.managing&&(o.colony.modules=Object.keys(t.mod).filter(l=>this.world.colony.sites[l]).map(l=>{const c=t.mod[l],h=mn[l];return{id:l,name:h.name,built:c.built,cond:c.cond,on:c.on,toggle:!!h.toggle,dust:c.dust,gated:sc(t,l,e?.id??null),load:n.loads[l]??null,cost:h.cost}}),o.missions=Ou(t,this.explore),Ur(this.worldId)&&(o.construction={structures:ib(t),done:sb(t),colonyName:In[this.worldId].colonyName}),this.panelTab==="colonies"&&(o.overview={current:this.worldId,list:Mr.map(l=>l===this.worldId?Vf(l,t,!0):this.#h).filter(Boolean)})),o}update(t,e){if(!this.ready)return;const n=this.input,i=this.player.body;this.#v=e;const[r,a]=n.look(),o=n.takeWheel();if(this.camera.getWorldDirection(this.#u),this.playing){this.rig.look(r,a,o);const l=(n.isDown("KeyD")?1:0)-(n.isDown("KeyA")?1:0),c=(n.isDown("KeyW")?1:0)-(n.isDown("KeyS")?1:0),h=n.isDown("ShiftLeft")||n.isDown("ShiftRight"),u=n.isDown("Space");let d=t,p=!1;for(;d>1e-5;){const g=Math.min(d,eM);p=this.player.update(g,l,c,h,u,this.rig.yaw)||p,d-=g}p&&this.#o(sM(this.worldId));const _=this.istate=this.interaction.update(t,i,this.#u,n.isDown("KeyF"));n.pressed("KeyE")&&_.interact&&this.interaction.interact(),this.astro.animate(t,this.player.speed,i.grounded,i.vy),(this.#n+=t)>nM&&(this.#n=0,this.saveNow())}if(this.playing||this.managing){const l=mb(this.colony,Math.min(t,.1),this.#p());l.length&&this.#E(l),(this.#a+=t)>.25&&(this.#a=0,this.#g())}if(this.storm){if(this.playing){const l=Nb(this.storm,Math.min(t,.1),{x:i.x,z:i.z,busy:this.colony.storm.phase!=="none"});l.length&&this.#T(l)}this.world.sky.setStorm(this.storm.level),this.world.beacon?.set(this.storm.phase==="warning"||this.storm.phase==="active",e)}this.playing&&n.pressed("KeyR")&&this.#w();for(const l of Object.values(this.world.colony.sites))l.ghost.visible&&(l.ghost.material.opacity=.25+.15*Math.sin(e*3));n.endFrame(),this.astro.group.position.set(i.x,i.y,i.z),this.astro.group.rotation.y=this.player.heading,this.rig.update(t,i),this.world.sky.update(t,this.camera.position,i),this.world.structures.update(t,e);for(const l of this.world.scannables)l.marker.visible&&(l.marker.rotation.y+=t*1.5,l.marker.position.y=l.baseY+Math.sin(e*2+l.pos.x)*.15);for(const l of this.world.samples)l.active&&(l.group.position.y=l.baseY+Math.sin(e*2+l.pos.x)*.08,l.group.rotation.y+=t,l.beam.material.opacity=.28+.12*Math.sin(e*3+l.pos.z));(this.#e+=t)>.1&&(this.#e=0,this.playing&&this.#f(),this.#c(),this.#r(!1))}}const sM=s=>`${s}.gravity`;class rM{scene=new to;camera=new Fe(45,1,.1,500);constructor(){this.stars=so(),this.scene.add(this.stars),this.station=new Kt;const t=new ve({color:4873610,roughness:.4,metalness:.8}),e=new ve({color:5999871,roughness:.2,metalness:.9,emissive:1784975,emissiveIntensity:.8}),n=new ve({color:13214282,roughness:.3,metalness:.9,emissive:5915154,emissiveIntensity:.5}),i=new Gt(new Me(1.6,24,16),n);this.station.add(i),this.ring1=new Gt(new _i(4.8,.18,16,64),e),this.ring1.rotation.x=Math.PI/3,this.station.add(this.ring1),this.ring2=new Gt(new _i(6.2,.12,16,64),t),this.ring2.rotation.x=-Math.PI/4,this.ring2.rotation.y=Math.PI/6,this.station.add(this.ring2),this.station.position.set(4.5,-.5,-4),this.scene.add(this.station);const r=new io(16777215,2.5);r.position.set(-6,6,8);const a=new tx(5999871,2,20);a.position.set(4,2,-2),this.scene.add(r,a,new Ec(1054251,.8)),this.camera.position.set(0,0,10)}enter(){this.camera.position.set(0,0,10),this.camera.lookAt(1.5,0,-2)}exit(){}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}update(t,e){this.stars.rotation.y+=t*.003,this.ring1.rotation.z+=t*.12,this.ring2.rotation.z-=t*.08,this.station.rotation.y+=t*.04,this.camera.position.x=Math.sin(e*.08)*.5,this.camera.lookAt(1.5,0,-2)}}const xa=s=>Math.floor(s+1e-6),aM=(s,t)=>Math.max(0,Math.min(100,s/t*100)),_r=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),oM=s=>s==="Online"?"ok":s==="Not built"||s==="Switched off"?"idle":s==="Degraded"?"warn":"bad";function lM(s){return s.structures?`<h4>Outpost structures <span class="ov-count">${s.structures.reduce((e,n)=>e+n.count,0)} built</span></h4><ul class="ov-bl">${s.structures.map(e=>`<li class="ov-b" data-s="${e.count?"ok":"idle"}"><span>${_r(e.name)}</span><em>${e.count?`×${e.count}`:"Not built"}</em></li>`).join("")}</ul>`:""}function cM(s,t,e=!1){const n=s.resources.map(a=>`<div class="ov-res" data-low="${a.cap&&a.value<a.cap*.15&&a.key!=="materials"&&a.key!=="ice"?1:0}"><div class="rl"><span>${a.name}</span><b>${xa(a.value)} / ${xa(a.cap)}${a.unit?" "+a.unit:""}</b></div><div class="bar"><i style="width:${aM(a.value,a.cap).toFixed(0)}%"></i></div></div>`).join(""),i=s.buildings.map(a=>`<li class="ov-b" data-s="${oM(a.state)}"><span>${_r(a.name)}${a.id==="habitat"?` ×${a.count}`:""}</span><em>${a.state}${a.built&&a.state!=="Failed"?` · ${xa(a.cond)}%`:""}</em></li>`).join(""),r=s.population;return`<article class="ov-world" data-w="${s.world}">
    <header class="ov-head"><div><small class="ov-tag">${_r(s.worldName.toUpperCase())}${t?" · you are here":""}</small><h3 class="ov-name">${_r(s.colonyName)}</h3></div><div class="ov-side"><em class="ov-status" data-s="${s.visited?r.health<60?"bad":"ok":"idle"}">${s.status}</em>${e&&s.visited?`<button class="mini ov-reset" data-reset="${s.world}">Reset colony progress</button>`:""}</div></header>
    <h4>Population</h4>
    <div class="ov-pop"><div><b>${r.crew}</b><small>Crew</small></div><div><b>${xa(r.health)}%</b><small>Health</small></div><div><b>${r.housing}</b><small>Housing</small></div></div>
    ${r.more?`<p class="hintline">Habitat module II would house ${r.more} more crew.</p>`:""}
    <h4>Resources</h4>${n}
    <h4>Buildings <span class="ov-count">${s.builtCount} of ${s.totalCount} built</span></h4><ul class="ov-bl">${i}</ul>${lM(s)}
    <p class="hintline">${_r(s.mission)} · ${s.missionsDone} of ${s.missionsTotal} missions complete</p></article>`}const Wf=(s,t=null,e="",n=!1)=>`<div class="ov">${s.map(i=>cM(i,i.world===t,n)).join("")}</div>${e?`<p class="hintline">${e}</p>`:""}`,qc=document.getElementById("ui"),rs=s=>{const t=document.createElement("div");return t.innerHTML=s.trim(),t.firstElementChild};let ku=null;const lo=s=>(ku?.remove(),ku=s,qc.append(s),s);function Ka(s){const t=rs(`<div class="toast" role="status">${s}</div>`);qc.append(t),setTimeout(()=>t.remove(),2600)}function ya(s,t,e){const n=rs(`<section class="panel" aria-label="${s}"><button class="back">Back</button><h2>${s}</h2><div class="body">${t}</div></section>`);return n.querySelector(".back").onclick=()=>{n.remove()},qc.append(n),n}const hM=s=>new Date(s).toLocaleString();function uM(s){const t=lo(rs(`<div class="screen"><h1 class="logo">COSMIX</h1><p class="sub">Explore the Moon and Mars. Build, survive and learn like an astronaut.</p>
    <nav class="nav"><button data-a="start">Start Exploration</button><button data-a="continue">Continue Mission</button><button data-a="worlds">World Selection</button>
    <button data-a="colonies">Colony Management</button><button data-a="lab">Learning Lab</button><button data-a="db">Discovery Database</button><button data-a="settings">Settings</button><button data-a="credits">Credits</button></nav></div>`)),e={start:()=>s.goTo("select"),worlds:()=>s.goTo("select"),async continue(){const n=(await Promise.all(Mr.map(vi.load))).filter(Boolean).sort((i,r)=>r.updatedAt-i.updatedAt);n[0]?s.goTo("world",{world:n[0].world}):Ka("No saved mission yet. Start exploration first.")},async colonies(){const n=ya("Colony Management",""),i=n.querySelector(".body");i.classList.add("wide");const r="Shows each colony as last saved. Enter a world to build, supply and service it. Resetting a colony clears its supplies, buildings, colony missions and storm progress; exploration, samples and discoveries are kept.";let a=null,o=0;const l=async()=>{const c=await Promise.all(Mr.map(async h=>Gf(h,await vi.load(h))));i.innerHTML=Wf(c,null,r,!0)};i.onclick=async c=>{const h=c.target.closest("[data-reset]");if(!h)return;const u=h.dataset.reset;if(clearTimeout(o),a!==u){a=u,h.textContent=`Click again to reset ${In[u].colonyName}`,h.dataset.armed="1",o=setTimeout(()=>{a=null,l()},5e3);return}a=null;const d=await vi.resetColony(u);Ka(d?`${In[u].colonyName} reset`:"Nothing to reset"),l()},await l()},lab:()=>s.goTo("lab"),async db(){const n=(await Promise.all(Mr.map(vi.load))).filter(Boolean).flatMap(i=>i.discoveries??[]).filter(i=>Ya[i]);ya("Discovery Database",n.length?n.map(i=>{const r=Ya[i];return`<div class="row"><span><strong>${r.title}</strong> <small>${In[r.world].name} · ${r.category} · ${r.kind==="real"?"real science":"real science, simplified in the game"}</small><br>${r.body}</span></div>`}).join(""):"<p>No discoveries yet. Scan features and collect samples in a world to unlock entries.</p>")},settings(){const n=ya("Settings",`<div class="row"><label for="q">Graphics quality</label><select id="q"><option>low</option><option>medium</option><option>high</option></select></div>
        <div class="row"><label for="rm">Reduce motion</label><input id="rm" type="checkbox"></div><p><small>Settings stay on this device.</small></p>`),i=n.querySelector("#q"),r=n.querySelector("#rm");i.value=s.settings.quality,r.checked=s.settings.reducedMotion,i.onchange=()=>s.updateSettings({quality:i.value}),r.onchange=()=>s.updateSettings({reducedMotion:r.checked})},credits:()=>ya("Credits","<p>Built with Three.js, GSAP and Vite. Planet textures are generated in code and are stylised, not survey imagery.</p><p>Gravity values: Moon 1.62 m/s², Mars 3.71 m/s². NASA content and attributions are added in Stage 9.</p>")};t.onclick=n=>{const i=n.target.closest("[data-a]")?.dataset.a;i&&e[i]()}}function dM(s){const t=lo(rs('<div class="screen"><button class="back">Main menu</button><p class="hint">Select a world. Each keeps its own save.</p><div class="card" hidden></div></div>'));t.querySelector(".back").onclick=()=>s.goTo("menu");const e=t.querySelector(".card");return s.bus.on("worldFocus",async n=>{if(!n){e.hidden=!0;return}const i=In[n],r=await vi.load(n);e.hidden=!1,e.innerHTML=`<h2>${i.name.toUpperCase()}</h2><p>${i.mission}. ${i.tagline}</p><p>${i.facts[0]}</p><p><small>${r?`Last played ${hM(r.updatedAt)}`:"No save yet"}</small></p><button class="solid">${r?"Resume":"Enter"} ${i.name}</button>`,e.querySelector("button").onclick=()=>s.goTo("world",{world:n})})}const We=(s,t=0)=>Number(s).toFixed(t),ba=(s,t)=>Math.max(0,Math.min(100,s/t*100)),fM=s=>((s.prod-s.cons)*60,`<span class="up">+${We(s.prod*60,1)}</span> <span class="dn">−${We(s.cons*60,1)}</span> /min`),zu=[["oxygen","Oxygen"],["water","Water"],["food","Food"],["materials","Construction materials"],["ice","Ice in processor"]];function pM(s,t){const e=rs('<section class="mgmt" hidden aria-label="Colony management"></section>');let n=!1,i="resources",r="",a="";const o=b=>e.querySelector(b),l=b=>[...e.querySelectorAll(b)];function c(b){e.innerHTML=`<header><div><h2>${b.world.name.toUpperCase()} COLONY</h2><p class="sub2">${b.missionTitle}</p></div>
      <nav><button data-t="resources">Resources</button><button data-t="missions">Missions</button><button data-t="colonies">Colonies</button>${b.construction?'<button data-t="construct">Construction</button>':""}<button data-a="close">Close</button></nav></header>
      <div class="pane" data-p="resources">
        <div class="cols">
          <div class="col"><h3>Supplies</h3>${zu.map(([x,v])=>`<div class="res" data-r="${x}"><div class="rl"><span>${v}</span><b data-v></b></div><div class="bar"><i></i></div><small data-rate></small></div>`).join("")}</div>
          <div class="col"><h3>Electricity</h3>
            <div class="res" data-r="power"><div class="rl"><span>Solar generation</span><b data-gen></b></div><div class="bar"><i data-genbar></i></div><small data-dem></small></div>
            <div class="res" data-r="batt"><div class="rl"><span>Battery storage</span><b data-bv></b></div><div class="bar"><i data-bbar></i></div><small data-bnet></small></div>
            <h3>Crew</h3><div class="res" data-r="crew"><div class="rl"><span data-crew></span><b data-hp></b></div><div class="bar"><i data-hbar></i></div><small data-carry></small></div>
            <h3>Warnings</h3><ul class="warns" data-warns></ul></div>
          <div class="col"><h3>Equipment</h3><div data-mods></div><p class="hintline">Walk up to a module and press E to build or service it, or R to service the nearest one (2 materials, restores 35%).</p></div>
        </div></div>
      <div class="pane" data-p="missions" hidden><div data-miss></div></div>
      <div class="pane" data-p="colonies" hidden><div data-ov></div></div>
      ${b.construction?`<div class="pane" data-p="construct" hidden>
        <p class="hintline top">Build new structures for ${b.construction.colonyName}. Costs are paid from the colony's stored resources. Gather construction materials at supply caches and store them at the depot.</p>
        <div class="bld-grid" data-bld></div><h3>Completed buildings</h3><ul class="ov-bl" data-done></ul></div>`:""}`,l("[data-t]").forEach(x=>x.onclick=()=>t.setPanelTab(x.dataset.t)),o("[data-a=close]").onclick=()=>t.closePanel(),e.onclick=x=>{const v=x.target.closest("[data-tog]"),w=x.target.closest("[data-build]");v?t.colonyAction({type:"toggle",id:v.dataset.tog}):w&&t.colonyAction({type:"construct",id:w.dataset.build})},h=!1,u=!1,d=""}let h=!1,u=!1,d="";function p(b){const x=o("[data-mods]");h||(x.innerHTML=b.modules.map(v=>`<div class="mod" data-m="${v.id}"><div class="rl"><span>${v.name}</span><b data-st></b></div><div class="bar"><i></i></div><div class="rl2"><small data-info></small><button class="mini" data-tog="${v.id}" hidden></button></div></div>`).join(""),h=!0);for(const v of b.modules){const w=x.querySelector(`[data-m="${v.id}"]`),E=w.querySelector("[data-st]"),T=w.querySelector(".bar i"),R=w.querySelector("[data-info]"),M=w.querySelector("[data-tog]"),y=Object.entries(v.cost).map(([I,C])=>`${C} ${I}`).join(", ");if(!v.built){E.textContent=v.gated?"Not built":"Locked",T.style.width="0%",R.textContent=v.gated?`Build at the site: ${y}`:"Unlocks with a later mission",M.hidden=!0,w.dataset.s=v.gated?"idle":"locked";continue}const P=v.cond<=10?"FAILED":v.toggle&&!v.on?"Disabled":v.toggle&&v.load==null?"Idle":v.toggle&&v.load<.99?`Low power ${Math.round(v.load*100)}%`:v.cond<60?"Degraded":"Online";E.textContent=P,T.style.width=`${v.cond}%`,w.dataset.s=v.cond<=10?"bad":v.cond<40?"warn":v.on?"ok":"idle",R.textContent=`Condition ${Math.round(v.cond)}%${v.dust>.02?` · dust ${Math.round(v.dust*100)}%`:""}`,M.hidden=!v.toggle,v.toggle&&(M.textContent=v.on?"Switch off":"Switch on")}}function _(b){const x=b.colony;for(const[v]of zu){const w=o(`[data-r=${v}]`);w.querySelector("[data-v]").textContent=`${We(x.res[v])} / ${x.cap[v]}`,w.querySelector(".bar i").style.width=ba(x.res[v],x.cap[v])+"%",w.dataset.low=x.res[v]<x.cap[v]*.15&&v!=="materials"&&v!=="ice"?"1":"0",w.querySelector("[data-rate]").innerHTML=v==="materials"?`Carrying ${We(x.carried.materials)} to deliver`:v==="ice"?`Carrying ${We(x.carried.ice)} ice to load`:fM(x.rates[v])}o("[data-gen]").textContent=`${We(x.power.gen,1)} kW`,o("[data-genbar]").style.width=ba(x.power.gen,Math.max(x.power.demand,x.power.gen,1))+"%",o("[data-dem]").innerHTML=`Demand ${We(x.power.demand,1)} kW · ${x.power.used+.01<x.power.demand?'<span class="dn">loads shed</span>':x.power.curtailed>.05?"battery full, surplus wasted":"supplied"}`,o("[data-bv]").textContent=`${We(x.batt.kwh,1)} / ${We(x.batt.cap,0)} kWh`,o("[data-bbar]").style.width=ba(x.batt.kwh,x.batt.cap)+"%",o("[data-r=batt]").dataset.low=x.batt.kwh/x.batt.cap<.15?"1":"0",o("[data-bnet]").innerHTML=x.batt.net>.01?`<span class="up">Charging ${We(x.batt.net,1)} kW</span>`:x.batt.net<-.01?`<span class="dn">Discharging ${We(-x.batt.net,1)} kW</span>`:"Steady",o("[data-crew]").textContent=`Crew of ${x.crew.size}`,o("[data-hp]").textContent=`Health ${We(x.crew.health)}%`,o("[data-hbar]").style.width=x.crew.health+"%",o("[data-r=crew]").dataset.low=x.crew.health<60?"1":"0",o("[data-carry]").textContent=`Carrying ${We(x.carried.materials)} materials, ${We(x.carried.ice)} ice`,o("[data-warns]").innerHTML=x.alerts.length?x.alerts.map(v=>`<li class="${v.level}">${v.text}</li>`).join(""):'<li class="ok">All systems nominal.</li>',p(x)}function g(b){const x=JSON.stringify(b);if(x===r)return;r=x;const v=(w,E)=>E===1?"":E<1?` ${Math.round(w*100)}/${Math.round(E*100)}%`:` ${Math.floor(w)}/${E}`;o("[data-miss]").innerHTML=b.map((w,E)=>`<article class="mis ${w.status}"><div class="mh"><span class="mn">${String(E+1).padStart(2,"0")}</span><h3>${w.title}</h3><em>${w.status==="done"?"Complete":w.status==="active"?"Active":"Locked"}</em></div>
      ${w.status==="locked"?`<p class="dim">Unlocks when you complete: ${w.requires}.</p>`:`<p>${w.brief}</p><ul>${w.objectives.map(T=>`<li class="${T.done?"done":""}">${T.text}${v(T.progress,T.target)}${T.target!==1&&!T.done?`<div class="bar"><i style="width:${ba(T.progress,T.target)}%"></i></div>`:""}</li>`).join("")}</ul>`}
      <p class="dim">Reward: ${w.reward}${w.status==="done"?` · ${w.completion}`:""}</p></article>`).join("")}function f(b){const x=o("[data-bld]");u||(x.innerHTML=b.structures.map(w=>`<article class="bld" data-b="${w.id}"><div class="rl"><h4>${w.name}</h4><b data-n></b></div><p class="bld-blurb">${w.blurb}</p>
        <ul class="bld-cost">${w.cost.map(E=>`<li data-k="${E.key}"><span>${E.need} ${E.label}</span><b data-have></b></li>`).join("")}</ul>
        <div class="rl2"><small data-why></small><button class="mini" data-build="${w.id}">Build</button></div></article>`).join(""),u=!0);for(const w of b.structures){const E=x.querySelector(`[data-b="${w.id}"]`);E.dataset.ok=w.canBuild?"1":"0",E.querySelector("[data-n]").textContent=`Built ${w.count} / ${w.max}`,E.querySelector("[data-why]").textContent=w.reason,E.querySelector("[data-build]").disabled=!w.canBuild;for(const T of w.cost){const R=E.querySelector(`[data-k="${T.key}"]`);R.dataset.ok=T.ok?"1":"0",R.querySelector("[data-have]").textContent=`have ${We(T.have,T.key==="battery"?1:0)}`}}const v=JSON.stringify(b.done);v!==d&&(d=v,o("[data-done]").innerHTML=b.done.length?b.done.map(w=>`<li class="ov-b" data-s="ok"><span>${w.name}</span><em>×${w.count}</em></li>`).join(""):'<li class="ov-b" data-s="idle"><span>Nothing built yet</span><em>—</em></li>')}function m(b){const x=JSON.stringify(b);if(x===a)return;a=x;const v=b.list.length<2?"Loading the other colony from its save…":"The colony you are not in shows its last saved state.";o("[data-ov]").innerHTML=Wf(b.list,b.current,v)}return{el:e,update(b){if(!b.managing){n&&(n=!1,e.hidden=!0);return}n||(n=!0,e.hidden=!1,c(b),r="",a=""),i=b.panelTab,l("[data-p]").forEach(x=>x.hidden=x.dataset.p!==i),l("[data-t]").forEach(x=>x.classList.toggle("on",x.dataset.t===i)),i==="resources"?_(b):i==="missions"?b.missions&&g(b.missions):i==="construct"?b.construction&&f(b.construction):b.overview&&m(b.overview)}}}const mM="WASD move · Shift run · Space jump · Mouse look · Wheel zoom · E interact · hold F scan · R service · Tab colony · C colonies · B build · M missions · Esc pause";function gM(s,t){const e=lo(rs(`<div class="play">
    <div class="obj" hidden><h3></h3><p class="brief"></p><ul></ul></div><div class="alerts" hidden></div>
    <div class="cstrip" hidden></div>
    <div class="stormveil" hidden></div><div class="storm" hidden><b></b><span class="st-txt"></span><span class="st-nav" hidden><i class="st-arrow">▲</i><em></em></span></div>
    <div class="stats" hidden><span data-k="g"></span><span data-k="s"></span><span data-k="d"></span></div>
    <div class="cross" hidden></div><div class="scanbar" hidden><i></i><span></span></div><div class="prompt" hidden></div>
    <div class="veil"><div class="veil-box"><h2></h2><p class="msg">Loading…</p><p class="keys">${mM}</p>
      <div class="veil-actions" hidden><button class="solid" data-a="resume">Resume</button><button data-a="save">Save</button><button data-a="select">World selection</button><button data-a="menu">Main menu</button></div></div></div>
  </div>`)),n=f=>e.querySelector(f),i=n(".veil"),r=n(".veil-actions"),a=n(".msg"),o=n(".veil-box h2"),l=pM(s,t);e.append(l.el);let c="",h="",u=!1;const d=s.bus.on("hud",f=>{if(f.world&&(o.textContent=f.world.mission),f.loading){a.textContent="Preparing terrain…",r.hidden=!0,i.hidden=!1;return}if(f.error){a.textContent=f.error,r.hidden=!1,n("[data-a=resume]").hidden=!0;return}if(f.playing!==void 0&&(f.playing&&(u=!0),i.hidden=f.playing||f.managing,r.hidden=!1,n("[data-a=resume]").hidden=!1,n("[data-a=resume]").textContent=u?"Resume":"Start exploring",a.textContent=f.fallback?"Mouse lock is unavailable here. Hold the mouse button and drag to look. Esc or P pauses.":u?"Paused":"Click to capture the mouse and begin."),!f.objectives)return;for(const E of[".obj",".stats",".cross"])n(E).hidden=!1;const m=JSON.stringify([f.objectives,f.missionTitle]),b=E=>E.target===1?"":E.target<1?` (${Math.round(E.progress*100)}/${Math.round(E.target*100)}%)`:` (${Math.floor(E.progress)}/${E.target})`;m!==c&&(c=m,n(".obj h3").textContent=f.missionTitle,n(".brief").textContent=f.missionBrief,n(".obj ul").innerHTML=f.objectives.map(E=>`<li class="${E.done?"done":""}">${E.text}${b(E)}</li>`).join("")),f.colony&&(l.update(f),p(f.colony)),_(f.hazard??null),n("[data-k=g]").textContent=`Gravity ${f.world.gravity} m/s²`,n("[data-k=s]").textContent=`Samples ${f.samples}`,n("[data-k=d]").textContent=`Discoveries ${f.discoveries}`;const x=n(".scanbar"),v=n(".prompt");x.hidden=!f.scan,f.scan&&(x.querySelector("i").style.width=`${Math.round(f.scan.progress*100)}%`,x.querySelector("span").textContent=f.scan.progress>0?`Scanning ${f.scan.name}`:`Hold F to scan ${f.scan.name}`);const w=f.interact?`E  ${f.interact}`:"";v.hidden=!w,v.textContent=w});function p(f){const b=[["O₂",f.res.oxygen,f.cap.oxygen],["H₂O",f.res.water,f.cap.water],["Food",f.res.food,f.cap.food],["Power",f.batt.kwh,f.batt.cap]].map(([T,R,M])=>`<div class="cs ${R/M<.15?"low":""}"><span>${T}</span><i><b style="width:${Math.min(100,R/M*100).toFixed(0)}%"></b></i></div>`).join("")+`<div class="cs2">${f.power.gen.toFixed(1)} kW in · ${f.power.used.toFixed(1)} kW used</div>`+(f.carried.ice>=1||f.carried.materials>=1?`<div class="cs2">Carrying ${Math.floor(f.carried.materials)} materials · ${Math.floor(f.carried.ice)} ice</div>`:""),x=f.alerts.filter(T=>T.level==="crit").concat(f.alerts.filter(T=>T.level==="warn")).slice(0,3),v=b+JSON.stringify(x);if(v===h)return;h=v;const w=n(".cstrip");w.hidden=!1,w.innerHTML=b;const E=n(".alerts");E.hidden=!x.length,E.innerHTML=x.map(T=>`<div class="${T.level}">${T.text}</div>`).join("")}function _(f){const m=n(".storm"),b=n(".stormveil");if(!f){m.hidden=b.hidden=!0;return}m.hidden=!1,m.className=`storm ${f.tone}`,b.hidden=f.level<=0,b.style.opacity=(f.level*.45).toFixed(2),m.querySelector("b").textContent=f.title,m.querySelector(".st-txt").textContent=f.text;const x=m.querySelector(".st-nav");x.hidden=!f.nav,f.nav&&(x.querySelector("i").style.transform=`rotate(${f.angle.toFixed(2)}rad)`,x.querySelector("em").textContent=f.dist>0?`Safe zone ${f.dist} m`:"Safe zone reached")}const g=s.bus.on("toast",Ka);return e.addEventListener("click",async f=>{const m=f.target.closest("[data-a]")?.dataset.a;m==="resume"&&t.resume(),m==="save"&&Ka(await t.saveNow()?"Progress saved":"Nothing to save yet"),(m==="select"||m==="menu")&&s.goTo(m==="menu"?"menu":"select")}),()=>{d(),g()}}const rc=[{id:"gravity",name:"Lunar Gravity Challenge",tagline:"Moon vs Earth physics and jump simulation",icon:"▲",category:"Astrophysics & Biomechanics",world:"moon",accent:"#5b8cff",concept:"Gravitational acceleration (g = GM/R²), parabolic trajectory, apex height (v²/2g), hang time.",maxScore:{beginner:100,advanced:150},briefing:"Earth gravity is 9.81 m/s², while the Moon has only 1.62 m/s² (about one-sixth). Because gravity pulls downward with less acceleration, the same muscle or thruster launch impulse sends an astronaut six times higher and keeps them airborne nearly six times longer! Adjust launch velocities, angles and suit payload masses to hit target science platforms and clear obstacle craters."},{id:"crater",name:"Crater Detective",tagline:"Impact morphology & planetary surface shaping",icon:"◎",category:"Planetary Geology",world:"moon",accent:"#8fb4ff",concept:"Simple vs complex craters, central rebound peaks, ejecta blankets, kinetic energy (E = ½mv²), and stratigraphic superposition.",maxScore:{beginner:100,advanced:150},briefing:"Impact cratering is the dominant geological process shaping airless worlds. Small meteorites carve simple bowl-shaped craters, while massive hypervelocity impactors produce complex craters with central peaks and terraced walls. By inspecting morphological cross-sections and crater superposition (which crater overlaps which), planetary geologists reconstruct billions of years of solar system history."},{id:"rover",name:"Mars Rover Navigator",tagline:"Path planning & obstacle avoidance across Martian terrain",icon:"◈",category:"Robotics & Autonomous Systems",world:"mars",accent:"#ff8a5c",concept:"Autonomous path planning, wheel slip on regolith dunes, battery power budget, communication signal latency.",maxScore:{beginner:100,advanced:150},briefing:"Radio signals between Earth and Mars take anywhere from 3 to 22 minutes to travel each way due to the vast distance. Real rovers like Curiosity and Perseverance cannot be joy-sticked in real time: engineers must pre-program command pipelines, calculate wheel slip on steep dunes, and manage strict watt-hour power budgets to reach science targets safely."},{id:"resources",name:"Mission Resource Manager",tagline:"Life support & closed-loop outpost survival balancing",icon:"▣",category:"Life Support & Systems Engineering",world:"mars",accent:"#4aff9a",concept:"Environmental Control and Life Support Systems (ECLSS), Sabatier CO₂ reduction, water recovery filtration, load shedding.",maxScore:{beginner:100,advanced:150},briefing:"Deep space missions require closed-loop Environmental Control and Life Support Systems (ECLSS). Human crew continuously consume oxygen, water, and food while generating carbon dioxide and waste. Balance power allocation between MOXIE/Sabatier oxygen generators, urine and greywater filtration, and cabin air scrubbers to keep the crew healthy across multi-sol expeditions."},{id:"solar",name:"Solar Power Engineer",tagline:"Photovoltaic angles, sun tracking & energy generation",icon:"☀",category:"Renewable Power & Orbital Mechanics",world:"mars",accent:"#ffcf7a",concept:"Lambert's cosine law (P = P₀ cos θ), solar elevation/azimuth tracking, Martian atmospheric dust opacity (τ).",maxScore:{beginner:100,advanced:150},briefing:"Solar panels produce maximum electrical power when sunlight strikes perpendicular to the photovoltaic cells (θ = 0°). According to Lambert's cosine law, power drops as the cosine of the angle of incidence. Rotate panel tilt and azimuth to track the sun across the sky, clean off accumulated Martian dust, and bank sufficient kilowatt-hours to survive the cold alien night."},{id:"ecosystem",name:"Martian Ecosystem",tagline:"Greenhouse hydro/lighting/nutrients & plant growth",icon:"⚘",category:"Space Botany & Agronomy",world:"mars",accent:"#8b6bff",concept:"Bioregenerative Life Support (BLSS), Photosynthetically Active Radiation (PAR), perchlorate soil washing, N-P-K nutrient balance.",maxScore:{beginner:100,advanced:150},briefing:"Growing fresh food on Mars is essential for long-term human exploration. Natural Martian regolith contains toxic perchlorate salts that must be leached before planting. Plants require a precise balance of red/blue LED spectrums, soil moisture, elevated CO₂, and Nitrogen-Phosphorus-Potassium nutrients to complete their growth cycle and provide life-sustaining calories."}],Bu=[{threshold:0,title:"Cadet Trainee",badge:"○"},{threshold:200,title:"Science Specialist",badge:"◔"},{threshold:500,title:"Flight Engineer",badge:"◑"},{threshold:900,title:"Senior Science Officer",badge:"◕"},{threshold:1300,title:"Cosmix Mission Commander",badge:"●"}];function _M(s){let t=Bu[0];for(const e of Bu)s>=e.threshold&&(t=e);return t}const $f="learning:scores";async function qf(){const s=await vr($f,{});return s&&typeof s=="object"?s:{}}async function vM(s,t,e,n={}){const i=await qf(),r=i[s]?.[t]?.score??0,a=Math.max(r,Math.round(e)),o=e>=120?3:e>=80?2:e>0?1:0,l={...i,[s]:{...i[s]??{},[t]:{score:a,stars:Math.max(i[s]?.[t]?.stars??0,o),completed:!0,updatedAt:Date.now(),...n}}};return await Fa($f,l),{updated:l,bestScore:a,stars:o}}function xM(s){let t=0;for(const e of rc){const n=s[e.id]??{},i=n.beginner?.score??0,r=n.advanced?.score??0;t+=i+r}return t}class yM{constructor(t="beginner"){this.difficulty=t,this.g=1.62,this.gEarth=9.81,this.reset()}reset(){this.active=!1,this.t=0,this.x=0,this.y=0,this.vx=0,this.vy=0,this.v0=6,this.angle=this.difficulty==="beginner"?90:45,this.mass=120,this.apexY=0,this.flightTime=0,this.trajectory=[],this.earthTrajectory=[],this.landed=!1,this.targetHit=!1,this.crashed=!1,this.attempts=0,this.stage=0,this.difficulty==="beginner"?this.targets=[{height:4.2,tolerance:.8,name:"Lander Antenna"},{height:7.5,tolerance:1,name:"Habitat Gantry"},{height:12,tolerance:1.2,name:"Observation Shelf"}]:(this.obstacle={x:14,width:4,height:4.5},this.targetZone={minX:24,maxX:32},this.maxSafeImpactV=5.5)}getTarget(){return this.difficulty==="beginner"?this.targets[this.stage]??this.targets[this.targets.length-1]:this.targetZone}calcTheory(t,e,n=this.g){const i=e*Math.PI/180,r=t*Math.cos(i),a=t*Math.sin(i),o=a*a/(2*n),l=2*a/n,c=t*t*Math.sin(2*i)/n;return{vx:r,vy:a,apex:o,hangTime:l,range:c}}launch(t,e,n=120){this.v0=t,this.angle=e,this.mass=n;const i=e*Math.PI/180;this.vx=t*Math.cos(i),this.vy=t*Math.sin(i),this.x=0,this.y=0,this.t=0,this.apexY=0,this.active=!0,this.landed=!1,this.targetHit=!1,this.crashed=!1,this.attempts++,this.trajectory=[{x:0,y:0}],this.earthTrajectory=[];const r=i,a=t*Math.cos(r),o=t*Math.sin(r),l=.04;let c=0,h=0,u=o;for(let d=0;d<100;d++)if(this.earthTrajectory.push({x:c,y:Math.max(0,h)}),c+=a*l,h+=u*l-.5*this.gEarth*l*l,u-=this.gEarth*l,h<0){this.earthTrajectory.push({x:c,y:0});break}}step(t){if(!(!this.active||this.landed)){if(this.t+=t,this.x+=this.vx*t,this.y+=this.vy*t-.5*this.g*t*t,this.vy-=this.g*t,this.apexY=Math.max(this.apexY,this.y),this.trajectory.push({x:this.x,y:Math.max(0,this.y)}),this.difficulty==="advanced"&&this.obstacle&&this.x>=this.obstacle.x&&this.x<=this.obstacle.x+this.obstacle.width&&this.y<=this.obstacle.height){this.active=!1,this.landed=!0,this.crashed=!0;return}if(this.y<=0&&this.t>.05)if(this.y=0,this.active=!1,this.landed=!0,this.flightTime=this.t,this.difficulty==="beginner"){const e=this.getTarget();Math.abs(this.apexY-e.height)<=e.tolerance&&(this.targetHit=!0)}else{const e=this.x>=this.targetZone.minX&&this.x<=this.targetZone.maxX,n=Math.abs(this.vy)<=this.maxSafeImpactV;e&&n&&!this.crashed?this.targetHit=!0:n||(this.crashed=!0)}}}}class bM{constructor(t,e={}){this.container=t,this.options=e,this.difficulty=e.difficulty??"beginner",this.sim=new yM(this.difficulty),this.score=0,this.totalPointsAwarded=0,this.onComplete=e.onComplete??(()=>{}),this.initDOM(),this.startLoop()}initDOM(){this.container.innerHTML=`
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Gravity</span><b class="val">1.62 m/s² (Moon)</b></div>
          <div class="hud-item"><span class="label">Target Objective</span><b class="val target-desc">--</b></div>
          <div class="hud-item"><span class="label">Apex Height</span><b class="val apex-val">0.0 m</b></div>
          <div class="hud-item"><span class="label">Hang Time</span><b class="val time-val">0.0 s</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls">
          <div class="ctrl-group">
            <label>Launch Velocity: <span class="v-val">6.0</span> m/s</label>
            <input type="range" class="v-slider" min="2" max="18" step="0.2" value="6.0">
          </div>
          ${this.difficulty==="advanced"?`
          <div class="ctrl-group">
            <label>Launch Angle: <span class="a-val">45</span>°</label>
            <input type="range" class="a-slider" min="15" max="85" step="1" value="45">
          </div>
          <div class="ctrl-group">
            <label>Suit Payload Mass: <span class="m-val">120</span> kg</label>
            <input type="range" class="m-slider" min="80" max="180" step="10" value="120">
          </div>
          `:`
          <div class="ctrl-group">
            <label>Physics Comparison</label>
            <span class="ctrl-note">Comparing Moon (1.62 m/s², Blue) vs Earth (9.81 m/s², Green)</span>
          </div>
          `}
          <div class="ctrl-buttons">
            <button class="solid btn-launch">Launch Jump</button>
            <button class="btn-reset">Reset</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Key Science Fact:</strong> On Earth, a jump launch speed of 6 m/s achieves an apex of only 1.83 m ($h = v^2/2g$). On the Moon, that exact same launch reaches 11.11 m — more than 6 times higher!
        </div>
      </div>
    `,this.canvas=this.container.querySelector(".game-canvas"),this.ctx=this.canvas.getContext("2d"),this.vSlider=this.container.querySelector(".v-slider"),this.vVal=this.container.querySelector(".v-val"),this.aSlider=this.container.querySelector(".a-slider"),this.aVal=this.container.querySelector(".a-val"),this.mSlider=this.container.querySelector(".m-slider"),this.mVal=this.container.querySelector(".m-val"),this.btnLaunch=this.container.querySelector(".btn-launch"),this.btnReset=this.container.querySelector(".btn-reset"),this.feedback=this.container.querySelector(".feedback-banner"),this.targetDesc=this.container.querySelector(".target-desc"),this.apexVal=this.container.querySelector(".apex-val"),this.timeVal=this.container.querySelector(".time-val"),this.scoreVal=this.container.querySelector(".score-val"),this.resizeCanvas(),window.addEventListener("resize",this.onResize),this.vSlider.oninput=()=>{this.vVal.textContent=parseFloat(this.vSlider.value).toFixed(1)},this.aSlider&&(this.aSlider.oninput=()=>{this.aVal.textContent=this.aSlider.value}),this.mSlider&&(this.mSlider.oninput=()=>{this.mVal.textContent=this.mSlider.value}),this.btnLaunch.onclick=()=>this.handleLaunch(),this.btnReset.onclick=()=>{this.sim.reset(),this.hideFeedback(),this.updateHUD()},this.updateHUD()}onResize=()=>this.resizeCanvas();resizeCanvas(){if(!this.canvas)return;const t=this.canvas.parentElement.getBoundingClientRect();this.canvas.width=Math.max(400,t.width||600),this.canvas.height=360}updateHUD(){if(this.difficulty==="beginner"){const t=this.sim.getTarget();this.targetDesc.textContent=`${t.name}: ${t.height.toFixed(1)} m (±${t.tolerance}m) [Stage ${this.sim.stage+1}/3]`}else this.targetDesc.textContent="Clear ridge at 14m, land softly between 24m – 32m";this.scoreVal.textContent=this.score}handleLaunch(){if(this.sim.active)return;const t=parseFloat(this.vSlider.value),e=this.aSlider?parseFloat(this.aSlider.value):90,n=this.mSlider?parseFloat(this.mSlider.value):120;this.sim.launch(t,e,n),this.hideFeedback()}showFeedback(t,e=!0){this.feedback.hidden=!1,this.feedback.className=`feedback-banner ${e?"good":"warn"}`,this.feedback.innerHTML=t}hideFeedback(){this.feedback.hidden=!0}startLoop(){let t=performance.now();const e=n=>{const i=Math.min((n-t)/1e3,.05);t=n,this.update(i),this.render(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}update(t){const e=this.sim.active;this.sim.step(t),e&&(this.apexVal.textContent=`${this.sim.apexY.toFixed(1)} m`,this.timeVal.textContent=`${this.sim.t.toFixed(1)} s`),e&&this.sim.landed&&this.handleLanded()}handleLanded(){if(this.difficulty==="beginner"){const t=this.sim.getTarget();if(Math.abs(this.sim.apexY-t.height),this.sim.targetHit)this.score+=35,this.updateHUD(),this.sim.stage<this.sim.targets.length-1?(this.showFeedback(`✔ Target reached! Apex: ${this.sim.apexY.toFixed(1)} m. Hang time: ${this.sim.flightTime.toFixed(1)} s. Advance to next target platform!`,!0),setTimeout(()=>{this.sim.stage++,this.sim.reset(),this.updateHUD(),this.hideFeedback()},2e3)):(this.score=Math.min(100,this.score),this.showFeedback(`★ EXCELLENT! All 3 Lunar altitude targets conquered! Score: ${this.score}`,!0),setTimeout(()=>{this.onComplete({activityId:"gravity",difficulty:"beginner",score:this.score,stars:3,summary:"Mastered lunar vertical kinematics. Achieved apexes up to 12.0m demonstrating $h = v^2/(2g)$ with 1/6th Earth gravity."})},1800));else{const e=this.sim.apexY<t.height?"Too low":"Overshot";this.showFeedback(`⚠ ${e}! Reached ${this.sim.apexY.toFixed(1)} m (needed ${t.height.toFixed(1)} m). On Earth that jump would only reach ${(this.sim.apexY/6.05).toFixed(1)} m. Adjust velocity!`,!1)}}else if(this.sim.targetHit){const t=Math.abs(this.sim.vy),e=Math.round(150-Math.min(30,(this.sim.attempts-1)*10));this.score=Math.max(90,e),this.updateHUD(),this.showFeedback(`✔ PERFECT LANDING! Cleared obstacle, touched down at ${this.sim.x.toFixed(1)} m with safe impact speed of ${t.toFixed(1)} m/s! Score: ${this.score}`,!0),setTimeout(()=>{this.onComplete({activityId:"gravity",difficulty:"advanced",score:this.score,stars:3,summary:"Successfully calculated lunar ballistic trajectory over crater terrain, landing safely within the target survey shelf."})},1800)}else if(this.sim.crashed)this.showFeedback(`✖ Mission Failure: ${this.sim.x<this.sim.obstacle.x+this.sim.obstacle.width?"Crashed into crater ridge obstacle!":"Hard impact! Impact speed exceeded EVA suit limit (5.5 m/s)."}. Try a higher launch angle or adjust velocity.`,!1);else{const t=this.sim.x<this.sim.targetZone.minX?"Landed short of target zone.":"Overshot target landing pad!";this.showFeedback(`⚠ ${t} Touchdown at ${this.sim.x.toFixed(1)} m. Adjust launch angle and speed.`,!1)}}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height,i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#040714"),i.addColorStop(.75,"#0b1026"),i.addColorStop(.85,"#232838"),i.addColorStop(1,"#181b24"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.7)";for(let p=0;p<40;p++){const _=p*137.5%e,g=p*83.1%(n*.7);t.fillRect(_,g,p%3===0?2:1,p%3===0?2:1)}const r=50,a=n-45,o=(e-90)/(this.difficulty==="beginner"?12:36),l=(n-90)/14,c=p=>r+p*o,h=p=>a-p*l;t.strokeStyle="#4a536b",t.lineWidth=2,t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke(),t.fillStyle="#2d3345",t.fillRect(0,a,e,n-a),t.strokeStyle="rgba(180, 196, 255, 0.12)",t.fillStyle="rgba(180, 196, 255, 0.4)",t.font="10px monospace";for(let p=2;p<=14;p+=2){const _=h(p);t.beginPath(),t.moveTo(r-10,_),t.lineTo(e-20,_),t.stroke(),t.fillText(`${p}m`,r-35,_+3)}if(this.difficulty==="advanced")for(let p=5;p<=35;p+=5){const _=c(p);t.beginPath(),t.moveTo(_,a-5),t.lineTo(_,a+5),t.stroke(),t.fillText(`${p}m`,_-8,a+18)}if(this.difficulty==="beginner"){const p=this.sim.getTarget(),_=h(p.height),g=h(p.height-p.tolerance),f=h(p.height+p.tolerance);t.fillStyle="rgba(91, 140, 255, 0.16)",t.fillRect(r,f,e-r-40,g-f),t.strokeStyle="#5b8cff",t.lineWidth=2,t.setLineDash([6,4]),t.beginPath(),t.moveTo(r,_),t.lineTo(e-40,_),t.stroke(),t.setLineDash([]),t.fillStyle="#5b8cff",t.font="11px sans-serif",t.fillText(`▶ Target: ${p.name} (${p.height}m)`,r+12,_-6)}else{const p=this.sim.obstacle,_=c(p.x),g=p.width*o,f=h(p.height);t.fillStyle="#7a3b2e",t.beginPath(),t.moveTo(_,a),t.lineTo(_+g*.2,f),t.lineTo(_+g*.8,f),t.lineTo(_+g,a),t.closePath(),t.fill(),t.strokeStyle="#ff6b4a",t.stroke(),t.fillStyle="#ffcf7a",t.font="10px sans-serif",t.fillText("Crater Ridge",_+4,f-6);const m=this.sim.targetZone,b=c(m.minX),x=c(m.maxX);t.fillStyle="rgba(74, 255, 154, 0.22)",t.fillRect(b,a-6,x-b,8),t.strokeStyle="#4aff9a",t.strokeRect(b,a-6,x-b,8),t.fillStyle="#4aff9a",t.fillText("▼ Target Landing Shelf",b+4,a-14)}if(this.sim.earthTrajectory.length>1){t.strokeStyle="rgba(74, 255, 154, 0.45)",t.lineWidth=2,t.setLineDash([3,3]),t.beginPath(),t.moveTo(c(this.sim.earthTrajectory[0].x),h(this.sim.earthTrajectory[0].y));for(const _ of this.sim.earthTrajectory)t.lineTo(c(_.x),h(_.y));t.stroke(),t.setLineDash([]);const p=this.sim.earthTrajectory[this.sim.earthTrajectory.length-1];t.fillStyle="rgba(74, 255, 154, 0.7)",t.font="10px sans-serif",t.fillText("Earth Trajectory (g = 9.81)",c(p.x)+4,h(p.y)-6)}if(this.sim.trajectory.length>1){t.strokeStyle="#5b8cff",t.lineWidth=3,t.beginPath(),t.moveTo(c(this.sim.trajectory[0].x),h(this.sim.trajectory[0].y));for(const p of this.sim.trajectory)t.lineTo(c(p.x),h(p.y));if(t.stroke(),this.sim.apexY>.5){const p=h(this.sim.apexY);t.fillStyle="#ffcf7a",t.beginPath(),t.arc(c(this.sim.x*.5),p,4,0,Math.PI*2),t.fill(),t.fillText(`Apex: ${this.sim.apexY.toFixed(1)}m`,c(this.sim.x*.5)+6,p-4)}}const u=c(this.sim.x),d=h(this.sim.y);t.save(),t.translate(u,d),t.fillStyle="#f1f2f6",t.fillRect(-6,-24,12,16),t.fillStyle="#8a8f9c",t.fillRect(-10,-22,4,12),t.fillStyle="#ffffff",t.beginPath(),t.arc(0,-29,6,0,Math.PI*2),t.fill(),t.fillStyle="#c9a24a",t.beginPath(),t.arc(2,-29,3,0,Math.PI*2),t.fill(),t.strokeStyle="#f1f2f6",t.lineWidth=3,t.beginPath(),t.moveTo(-3,-8),t.lineTo(-4,0),t.moveTo(3,-8),t.lineTo(4,0),t.stroke(),t.restore()}destroy(){this.animId&&cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.onResize)}}const lr=[{id:"case_simple",name:"Case 1: Linné Crater (Lunar Mare Serenitatis)",type:"Simple Crater",diameter:"2.2 km",depth:"0.6 km",features:["Bowl-shaped floor","Sharp raised rim","No central peak","Overturned rock layers"],description:"A classic young simple crater. The meteorite impact excavated a parabolic transient cavity that retained its bowl geometry without post-impact wall collapse.",correctTypeIndex:0,requiredFeature:"Raised Rim & Bowl Floor"},{id:"case_complex",name:"Case 2: Tycho Crater (Lunar Southern Highlands)",type:"Complex Crater",diameter:"85 km",depth:"4.8 km",features:["Hydrodynamic central rebound peak","Terraced slumped walls","Flat impact-melt floor","Bright ray system"],description:"Hypervelocity impact of a massive asteroid. The target rocks momentarily acted as a fluid, rebounding upward into a towering central peak while gravity collapsed the rim into stepped terraces.",correctTypeIndex:1,requiredFeature:"Central Rebound Peak"},{id:"case_basin",name:"Case 3: Mare Orientale (Western Lunar Limb)",type:"Multi-Ring Basin",diameter:"930 km",depth:"3.0 km",features:["Multiple concentric mountain rings","Cordillera & Rook mountain arcs","Flooded dark basalt center"],description:"A colossal cataclysmic impact. Shockwaves fractured the planetary crust into multiple concentric mountain ranges like frozen ripples on a pond.",correctTypeIndex:2,requiredFeature:"Concentric Ring Scarp"},{id:"case_degraded",name:"Case 4: Gusev Crater (Martian Highlands)",type:"Degraded / Infilled Crater",diameter:"166 km",depth:"1.2 km",features:["Eroded subdued rim","Fluvial sediment channels","Aeolian dust infill","Flat sedimentary floor"],description:"An ancient Noachian impact on Mars heavily modified by flowing water, ancient lake sediments, and billions of years of atmospheric wind erosion.",correctTypeIndex:3,requiredFeature:"Eroded Subdued Rim"}],Hu=["Simple Crater","Complex Crater","Multi-Ring Basin","Degraded / Infilled Crater"];class MM{constructor(t,e={}){this.container=t,this.options=e,this.difficulty=e.difficulty??"beginner",this.onComplete=e.onComplete??(()=>{}),this.currentCase=0,this.score=0,this.identifiedParts=new Set,this.selectedType=null,this.inspectX=.5,this.advStage="impact",this.impactorD=1.2,this.impactorV=20,this.impactorAngle=45,this.simulatingImpact=!1,this.impactAnimT=0,this.superposAnswer=["","",""],this.initDOM(),this.startLoop()}initDOM(){this.container.innerHTML=`
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Investigation</span><b class="val case-title">--</b></div>
          <div class="hud-item"><span class="label">Crater Dimensions</span><b class="val crater-dim">--</b></div>
          <div class="hud-item"><span class="label">Evidence Discovered</span><b class="val evidence-val">0 / 3</b></div>
          <div class="hud-item"><span class="label">Geology Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls">
          ${this.difficulty==="beginner"?`
            <div class="investigation-controls">
              <div class="features-row">
                <span class="ctrl-label">Inspect Cross-Section Features:</span>
                <div class="feature-buttons">
                  <button class="mini feat-btn" data-f="rim">Raised Rim</button>
                  <button class="mini feat-btn" data-f="floor">Crater Floor</button>
                  <button class="mini feat-btn" data-f="peak">Central Peak / Ring</button>
                  <button class="mini feat-btn" data-f="ejecta">Ejecta Blanket</button>
                </div>
              </div>
              <div class="type-classify-row">
                <span class="ctrl-label">Classify Morphology:</span>
                <div class="type-buttons">
                  ${Hu.map((t,e)=>`<button class="solid type-btn" data-idx="${e}">${t}</button>`).join("")}
                </div>
              </div>
            </div>
            `:`
            <div class="adv-crater-controls">
              <div class="adv-tabs">
                <button class="mini tab-btn ${this.advStage==="impact"?"on":""}" data-tab="impact">Stage 1: Impact Kinetic Energy</button>
                <button class="mini tab-btn ${this.advStage==="superposition"?"on":""}" data-tab="superposition">Stage 2: Stratigraphic Superposition</button>
              </div>
              <div class="adv-panel-content"></div>
            </div>
            `}
        </div>

        <div class="science-callout">
          <strong>Planetary Science Note:</strong> The transition from simple to complex craters occurs at smaller diameters on planets with higher gravity ($D_{crit} propto 1/g$). On the Moon (1.62 m/s²), transition occurs at ~15-20 km; on Earth (9.81 m/s²), it occurs at only ~2-4 km!
        </div>
      </div>
    `,this.canvas=this.container.querySelector(".game-canvas"),this.ctx=this.canvas.getContext("2d"),this.caseTitle=this.container.querySelector(".case-title"),this.craterDim=this.container.querySelector(".crater-dim"),this.evidenceVal=this.container.querySelector(".evidence-val"),this.scoreVal=this.container.querySelector(".score-val"),this.feedback=this.container.querySelector(".feedback-banner"),this.resizeCanvas(),window.addEventListener("resize",this.onResize),this.difficulty==="beginner"?this.wireBeginnerControls():this.wireAdvancedControls(),this.updateHUD()}onResize=()=>this.resizeCanvas();resizeCanvas(){if(!this.canvas)return;const t=this.canvas.parentElement.getBoundingClientRect();this.canvas.width=Math.max(400,t.width||600),this.canvas.height=360}wireBeginnerControls(){this.container.querySelectorAll(".feat-btn").forEach(t=>{t.onclick=()=>{const e=t.dataset.f;this.identifiedParts.add(e),t.classList.add("found"),this.showFeatureDescription(e),this.updateHUD()}}),this.container.querySelectorAll(".type-btn").forEach(t=>{t.onclick=()=>{const e=parseInt(t.dataset.idx,10);this.handleClassification(e)}})}showFeatureDescription(t){const e=lr[this.currentCase],n={rim:"Inspecting Raised Rim: Overturned rock strata (flap) elevated above the pre-impact planetary surface.",floor:`Inspecting Crater Floor: ${e.type==="Simple Crater"?"Deep parabolic bowl filled with breccia rubble.":"Flat melted sheet created by extreme shock pressure & heat."}`,peak:`Inspecting Center: ${e.type==="Complex Crater"?"Prominent central rebound peak! Bedrock bounced upward hydrodynamically.":e.type==="Multi-Ring Basin"?"Concentric peak rings formed by planetary-scale crustal ripples.":"No rebound peak present (impact energy too low)."}`,ejecta:"Inspecting Ejecta Blanket: Continuous shattered debris blanket thinning outward from the crater rim."};this.showFeedback(n[t]??"Feature examined.",!0)}handleClassification(t){const e=lr[this.currentCase];t===e.correctTypeIndex?(this.score+=25,this.showFeedback(`✔ CORRECT! ${e.name} is a ${e.type}. ${e.description}`,!0),this.updateHUD(),setTimeout(()=>{this.currentCase<lr.length-1?(this.currentCase++,this.identifiedParts.clear(),this.container.querySelectorAll(".feat-btn").forEach(n=>n.classList.remove("found")),this.hideFeedback(),this.updateHUD()):(this.score=100,this.showFeedback("★ EXCELLENT DETECTIVE WORK! All 4 planetary impact cases solved! Score: 100",!0),setTimeout(()=>{this.onComplete({activityId:"crater",difficulty:"beginner",score:100,stars:3,summary:"Correctly classified simple, complex, multi-ring and degraded impact craters across the Moon and Mars."})},1800))},2500)):this.showFeedback(`⚠ Incorrect classification: Selected ${Hu[t]}. Look at the floor depth and whether a central peak or multi-rings exist!`,!1)}wireAdvancedControls(){const t=this.container.querySelectorAll(".tab-btn");t.forEach(e=>{e.onclick=()=>{this.advStage=e.dataset.tab,t.forEach(n=>n.classList.toggle("on",n===e)),this.renderAdvPanel(),this.updateHUD()}}),this.renderAdvPanel()}renderAdvPanel(){const t=this.container.querySelector(".adv-panel-content");if(t)if(this.advStage==="impact"){t.innerHTML=`
        <div class="adv-impact-box">
          <p class="adv-task">Target: Reconstruct Copernican Complex Crater (Diameter: 93 km, Depth: 3.8 km on the Moon).</p>
          <div class="adv-inputs">
            <div class="ctrl-group">
              <label>Asteroid Impactor Diameter: <span class="d-val">${this.impactorD}</span> km</label>
              <input type="range" class="d-slider" min="0.5" max="8.0" step="0.1" value="${this.impactorD}">
            </div>
            <div class="ctrl-group">
              <label>Impact Velocity: <span class="v-val">${this.impactorV}</span> km/s</label>
              <input type="range" class="v-slider" min="11" max="45" step="1" value="${this.impactorV}">
            </div>
            <div class="ctrl-group">
              <label>Impact Angle: <span class="a-val">${this.impactorAngle}</span>°</label>
              <input type="range" class="a-slider" min="15" max="90" step="5" value="${this.impactorAngle}">
            </div>
          </div>
          <div class="adv-impact-actions">
            <button class="solid btn-sim-impact">Simulate Hypervelocity Impact</button>
            <div class="energy-readout">Kinetic Energy: <b class="ke-val">--</b> Megatons TNT | Predicted Crater: <b class="pc-val">--</b> km</div>
          </div>
        </div>
      `;const e=t.querySelector(".d-slider"),n=t.querySelector(".v-slider"),i=t.querySelector(".a-slider"),r=t.querySelector(".d-val"),a=t.querySelector(".v-val"),o=t.querySelector(".a-val"),l=t.querySelector(".ke-val"),c=t.querySelector(".pc-val"),h=()=>{this.impactorD=parseFloat(e.value),this.impactorV=parseFloat(n.value),this.impactorAngle=parseFloat(i.value),r.textContent=this.impactorD.toFixed(1),a.textContent=this.impactorV,o.textContent=this.impactorAngle;const u=this.impactorD*1e3/2,p=4/3*Math.PI*Math.pow(u,3)*3e3,_=this.impactorV*1e3,f=(.5*p*_*_/4184e12).toFixed(0),m=this.impactorAngle*Math.PI/180,b=(1.8*Math.pow(this.impactorD,.78)*Math.pow(this.impactorV,.44)*Math.pow(1.62,-.22)*Math.pow(Math.sin(m),.33)*4.8).toFixed(1);l.textContent=f,c.textContent=b,this.lastDcrater=parseFloat(b)};e.oninput=h,n.oninput=h,i.oninput=h,h(),t.querySelector(".btn-sim-impact").onclick=()=>{this.simulatingImpact=!0,this.impactAnimT=0,this.hideFeedback(),setTimeout(()=>{this.simulatingImpact=!1,Math.abs(this.lastDcrater-93)<=12?(this.score=75,this.showFeedback(`✔ IMPACT MATCH! Excavated a ${this.lastDcrater} km complex crater matching Copernicus (Target: 93 km)!`,!0),this.updateHUD()):this.showFeedback(`⚠ Excavated crater is ${this.lastDcrater} km (${this.lastDcrater<93?"Too small":"Too large"}). Adjust impactor size and speed.`,!1)},1200)}}else t.innerHTML=`
        <div class="adv-superpos-box">
          <p class="adv-task">Task: Order the 3 overlapping lunar craters (Alpha, Beta, Gamma) from OLDEST to NEWEST based on rim cross-cutting & ejecta overlap.</p>
          <div class="superpos-ordering">
            <div class="order-step">
              <span>1. Oldest (Bottom layer):</span>
              <select class="ord-sel" data-pos="0">
                <option value="">-- Choose --</option>
                <option value="A">Crater Alpha</option>
                <option value="B">Crater Beta</option>
                <option value="C">Crater Gamma</option>
              </select>
            </div>
            <div class="order-step">
              <span>2. Intermediate:</span>
              <select class="ord-sel" data-pos="1">
                <option value="">-- Choose --</option>
                <option value="A">Crater Alpha</option>
                <option value="B">Crater Beta</option>
                <option value="C">Crater Gamma</option>
              </select>
            </div>
            <div class="order-step">
              <span>3. Youngest (Top cross-cut):</span>
              <select class="ord-sel" data-pos="2">
                <option value="">-- Choose --</option>
                <option value="A">Crater Alpha</option>
                <option value="B">Crater Beta</option>
                <option value="C">Crater Gamma</option>
              </select>
            </div>
            <button class="solid btn-check-superpos">Verify Stratigraphy</button>
          </div>
        </div>
      `,t.querySelectorAll(".ord-sel").forEach(e=>{e.onchange=()=>{const n=parseInt(e.dataset.pos,10);this.superposAnswer[n]=e.value}}),t.querySelector(".btn-check-superpos").onclick=()=>{this.superposAnswer.join("")==="ABC"?(this.score+=75,this.updateHUD(),this.showFeedback(`✔ OUTSTANDING! Stratigraphic sequence verified: Alpha (Oldest) → Beta → Gamma (Youngest). Cross-cutting relationships confirmed! Score: ${this.score}`,!0),setTimeout(()=>{this.onComplete({activityId:"crater",difficulty:"advanced",score:Math.min(150,this.score),stars:3,summary:"Mastered impact kinetic energy scaling and stratigraphic superposition age determination."})},1800)):this.showFeedback("⚠ Sequence incorrect. Hint: Check which crater's ejecta blanket lies undisturbed on top of the other rims!",!1)}}showFeedback(t,e=!0){this.feedback.hidden=!1,this.feedback.className=`feedback-banner ${e?"good":"warn"}`,this.feedback.innerHTML=t}hideFeedback(){this.feedback.hidden=!0}updateHUD(){if(this.difficulty==="beginner"){const t=lr[this.currentCase];this.caseTitle.textContent=`${t.name} [Case ${this.currentCase+1}/4]`,this.craterDim.textContent=`Ø ${t.diameter} · Depth ${t.depth}`,this.evidenceVal.textContent=`${this.identifiedParts.size} / 4 Features`}else this.caseTitle.textContent=this.advStage==="impact"?"Stage 1: Kinetic Energy Scaling":"Stage 2: Superposition Forensics",this.craterDim.textContent=this.advStage==="impact"?"Target: 93 km Copernicus":"3 Overlapping Craters",this.evidenceVal.textContent=this.advStage==="impact"?"Impactor Parameters":"Stratigraphy Puzzle";this.scoreVal.textContent=this.score}startLoop(){let t=performance.now();const e=n=>{const i=Math.min((n-t)/1e3,.05);t=n,this.update(i),this.render(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}update(t){this.simulatingImpact&&(this.impactAnimT+=t*3)}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.fillStyle="#070a14",t.fillRect(0,0,e,n),this.difficulty==="beginner"?this.renderBeginnerCase(t,e,n):this.advStage==="impact"?this.renderAdvImpact(t,e,n):this.renderAdvSuperpos(t,e,n)}renderBeginnerCase(t,e,n){const i=lr[this.currentCase],r=n*.58;t.fillStyle="rgba(255,255,255,0.85)",t.font="14px sans-serif",t.fillText(`${i.name} — Geological Cross-Section`,30,32),t.strokeStyle="#41485c",t.lineWidth=1,t.beginPath(),t.moveTo(20,r),t.lineTo(e-20,r),t.stroke(),t.beginPath(),t.moveTo(30,r);const a=e*.5,o=e*.35,l=a-o,c=a+o;i.id==="case_simple"?(t.lineTo(l-20,r),t.quadraticCurveTo(l,r-25,l+20,r+10),t.quadraticCurveTo(a,r+110,c-20,r+10),t.quadraticCurveTo(c,r-25,c+20,r),t.lineTo(e-30,r)):i.id==="case_complex"?(t.lineTo(l-30,r),t.lineTo(l,r-35),t.lineTo(l+35,r+20),t.lineTo(l+60,r+40),t.lineTo(a-35,r+65),t.lineTo(a-10,r+10),t.lineTo(a,r-15),t.lineTo(a+10,r+10),t.lineTo(a+35,r+65),t.lineTo(c-60,r+40),t.lineTo(c-35,r+20),t.lineTo(c,r-35),t.lineTo(c+30,r),t.lineTo(e-30,r)):i.id==="case_basin"?(t.lineTo(l-60,r),t.lineTo(l-40,r-40),t.lineTo(l-10,r-5),t.lineTo(l+20,r-30),t.lineTo(l+50,r+40),t.lineTo(c-50,r+40),t.lineTo(c-20,r-30),t.lineTo(c+10,r-5),t.lineTo(c+40,r-40),t.lineTo(c+60,r),t.lineTo(e-30,r)):(t.lineTo(l-20,r),t.quadraticCurveTo(l,r-10,l+30,r+15),t.lineTo(c-30,r+15),t.quadraticCurveTo(c,r-10,c+20,r),t.lineTo(e-30,r)),t.lineTo(e-30,n-20),t.lineTo(30,n-20),t.closePath();const h=t.createLinearGradient(0,r-40,0,n);h.addColorStop(0,"#2b3040"),h.addColorStop(1,"#151822"),t.fillStyle=h,t.fill(),t.strokeStyle="#5b8cff",t.lineWidth=2,t.stroke(),t.font="11px sans-serif",t.fillStyle="#ffcf7a",this.identifiedParts.has("rim")&&t.fillText("▼ Raised Rim Crest",l-25,r-45),this.identifiedParts.has("floor")&&t.fillText("▼ Melt Sheet / Floor",a-45,r+85),this.identifiedParts.has("peak")&&i.id==="case_complex"&&t.fillText("▲ Central Rebound Peak",a-55,r-25),this.identifiedParts.has("ejecta")&&t.fillText("► Ejecta Blanket Strata",l-75,r-10)}renderAdvImpact(t,e,n){const i=n*.65;if(t.fillStyle="rgba(255,255,255,0.85)",t.font="14px sans-serif",t.fillText("Hypervelocity Impact Excavation Simulation",30,32),this.simulatingImpact){const o=this.impactAnimT%3*60;t.fillStyle="rgba(255, 200, 100, 0.4)",t.beginPath(),t.arc(e*.5,i,o,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(e*.5,i,18,0,Math.PI*2),t.fill()}t.fillStyle="#262a36",t.fillRect(0,i,e,n-i);const r=Math.min(e*.7,(this.lastDcrater??50)*3),a=e*.5;t.fillStyle="#0f121a",t.beginPath(),t.ellipse(a,i+10,r*.5,45,0,0,Math.PI),t.fill(),t.strokeStyle="#ff6b4a",t.lineWidth=2,t.stroke(),t.fillStyle="#ffcf7a",t.font="12px monospace",t.fillText(`Excavated Diameter: ${(this.lastDcrater??0).toFixed(1)} km`,a-85,i+35)}renderAdvSuperpos(t,e,n){t.fillStyle="rgba(255,255,255,0.85)",t.font="14px sans-serif",t.fillText("Stratigraphic Superposition: Orbital Map View",30,32),t.fillStyle="#1c2130",t.strokeStyle="#525a75",t.lineWidth=2,t.beginPath(),t.arc(e*.38,n*.52,90,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#8a93ad",t.font="13px sans-serif",t.fillText("Crater Alpha (Oldest, heavily cratered & weathered)",e*.22,n*.35),t.fillStyle="#22293d",t.strokeStyle="#7382ab",t.beginPath(),t.arc(e*.55,n*.56,65,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#cdd3e6",t.fillText("Crater Beta (Intermediate: cuts Alpha rim)",e*.44,n*.55),t.strokeStyle="rgba(200, 220, 255, 0.35)",t.lineWidth=2,t.setLineDash([4,4]);for(let i=0;i<Math.PI*2;i+=Math.PI/4)t.beginPath(),t.moveTo(e*.65,n*.5),t.lineTo(e*.65+Math.cos(i)*95,n*.5+Math.sin(i)*95),t.stroke();t.setLineDash([]),t.fillStyle="#2c3550",t.strokeStyle="#5b8cff",t.lineWidth=3,t.beginPath(),t.arc(e*.65,n*.5,38,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#5b8cff",t.fillText("Crater Gamma (Youngest: rays overlie Beta)",e*.52,n*.42)}destroy(){this.animId&&cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.onResize)}}class SM{constructor(t,e={}){this.container=t,this.options=e,this.difficulty=e.difficulty??"beginner",this.onComplete=e.onComplete??(()=>{}),this.gridSize=this.difficulty==="beginner"?7:9,this.commandQueue=[],this.executing=!1,this.samplesCollected=0,this.requiredSamples=this.difficulty==="beginner"?2:3,this.battery=100,this.maxBattery=100,this.score=0,this.roverDir=0,this.roverPos={x:0,y:0},this.uplinkPos={x:this.gridSize-1,y:this.gridSize-1},this.setupMap(),this.initDOM(),this.startLoop()}setupMap(){const t=this.gridSize;this.roverPos={x:0,y:0},this.roverDir=0,this.samplesCollected=0,this.battery=100,this.grid=Array.from({length:t},()=>Array(t).fill("empty")),this.grid[0][0]="start",this.grid[t-1][t-1]="uplink",this.difficulty==="beginner"?(this.grid[2][2]="sample",this.grid[4][5]="sample",this.grid[1][4]="recharge",this.grid[1][2]="boulder",this.grid[3][3]="boulder",this.grid[4][2]="dune",this.grid[5][4]="boulder"):(this.grid[2][3]="sample",this.grid[5][2]="sample",this.grid[6][6]="sample",this.grid[3][6]="recharge",this.grid[7][1]="recharge",this.grid[1][2]="boulder",this.grid[2][5]="boulder",this.grid[4][4]="boulder",this.grid[5][5]="boulder",this.grid[7][4]="boulder",this.grid[2][1]="dune",this.grid[3][4]="dune",this.grid[6][3]="dune",this.grid[5][7]="dune")}initDOM(){this.container.innerHTML=`
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Rover Telemetry</span><b class="val pos-val">(0, 0) E</b></div>
          <div class="hud-item"><span class="label">Battery Storage</span><b class="val batt-val">100 / 100 Wh</b></div>
          <div class="hud-item"><span class="label">Samples Analyzed</span><b class="val sample-val">0 / ${this.requiredSamples}</b></div>
          <div class="hud-item"><span class="label">Signal Latency</span><b class="val lat-val">${this.difficulty==="beginner"?"0.2s (Local)":"14m 22s (Earth-Mars)"}</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls rover-ctrl-bar">
          <div class="command-palette">
            <button class="mini cmd-btn" data-c="F">▲ Forward</button>
            <button class="mini cmd-btn" data-c="L">↶ Turn Left</button>
            <button class="mini cmd-btn" data-c="R">↷ Turn Right</button>
            <button class="mini cmd-btn" data-c="D">⚙ Drill Sample</button>
            <button class="mini cmd-btn" data-c="C">☀ Clean & Charge</button>
          </div>

          <div class="queue-display">
            <span class="ctrl-label">Command Uplink Pipeline:</span>
            <div class="queue-list"><span class="queue-empty">Queue is empty</span></div>
          </div>

          <div class="queue-actions">
            <button class="solid btn-exec">${this.difficulty==="beginner"?"Execute Commands":"Transmit Uplink Packet"}</button>
            <button class="btn-clear">Clear Queue</button>
            <button class="btn-reset-map">Reset Map</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Autonomous Navigation (AutoNav):</strong> NASA's Perseverance rover uses stereo cameras and dedicated compute to map terrain hazards in real time, enabling it to drive autonomously up to 200 meters per sol without waiting for Earth operators!
        </div>
      </div>
    `,this.canvas=this.container.querySelector(".game-canvas"),this.ctx=this.canvas.getContext("2d"),this.posVal=this.container.querySelector(".pos-val"),this.battVal=this.container.querySelector(".batt-val"),this.sampleVal=this.container.querySelector(".sample-val"),this.scoreVal=this.container.querySelector(".score-val"),this.queueList=this.container.querySelector(".queue-list"),this.feedback=this.container.querySelector(".feedback-banner"),this.resizeCanvas(),window.addEventListener("resize",this.onResize),this.container.querySelectorAll(".cmd-btn").forEach(t=>{t.onclick=()=>{if(!this.executing){if(this.commandQueue.length>=16){this.showFeedback("Command queue buffer full (max 16 instructions).",!1);return}this.commandQueue.push(t.dataset.c),this.renderQueue()}}}),this.container.querySelector(".btn-clear").onclick=()=>{this.executing||(this.commandQueue=[],this.renderQueue())},this.container.querySelector(".btn-reset-map").onclick=()=>{this.executing||(this.setupMap(),this.commandQueue=[],this.renderQueue(),this.updateHUD(),this.hideFeedback())},this.container.querySelector(".btn-exec").onclick=()=>{this.executeQueue()},this.updateHUD()}onResize=()=>this.resizeCanvas();resizeCanvas(){if(!this.canvas)return;const t=this.canvas.parentElement.getBoundingClientRect();this.canvas.width=Math.max(400,t.width||600),this.canvas.height=360}renderQueue(){if(this.commandQueue.length===0){this.queueList.innerHTML='<span class="queue-empty">Queue is empty</span>';return}const t={F:"Fwd",L:"Left",R:"Right",D:"Drill",C:"Charge"};this.queueList.innerHTML=this.commandQueue.map((e,n)=>`<span class="queue-pill">${n+1}:${t[e]}</span>`).join(" ")}updateHUD(){const t=["E","S","W","N"];this.posVal.textContent=`(${this.roverPos.x}, ${this.roverPos.y}) ${t[this.roverDir]}`,this.battVal.textContent=`${Math.round(this.battery)} / ${this.maxBattery} Wh`,this.sampleVal.textContent=`${this.samplesCollected} / ${this.requiredSamples}`,this.scoreVal.textContent=this.score}showFeedback(t,e=!0){this.feedback.hidden=!1,this.feedback.className=`feedback-banner ${e?"good":"warn"}`,this.feedback.innerHTML=t}hideFeedback(){this.feedback.hidden=!0}async executeQueue(){if(this.executing||this.commandQueue.length===0)return;this.executing=!0,this.hideFeedback();for(let e=0;e<this.commandQueue.length;e++){const n=this.commandQueue[e];if(await this.runCommand(n),this.updateHUD(),this.battery<=0){this.showFeedback("⚠ BATTERY DEPLETED! Rover lost power in Martian terrain.",!1),this.executing=!1;return}await new Promise(i=>setTimeout(i,400))}if(this.executing=!1,this.commandQueue=[],this.renderQueue(),this.roverPos.x===this.uplinkPos.x&&this.roverPos.y===this.uplinkPos.y)if(this.samplesCollected>=this.requiredSamples){const e=Math.round(this.battery*.4),n=this.difficulty==="beginner"?80:110;this.score=Math.min(this.difficulty==="beginner"?100:150,n+e),this.updateHUD(),this.showFeedback(`✔ MISSION SUCCESS! Reached communications uplink with all ${this.samplesCollected} samples! Remaining battery: ${Math.round(this.battery)} Wh. Score: ${this.score}`,!0),setTimeout(()=>{this.onComplete({activityId:"rover",difficulty:this.difficulty,score:this.score,stars:3,summary:"Successfully planned and executed autonomous route across Martian terrain, safely collecting rock core samples."})},1800)}else this.showFeedback(`⚠ Reached uplink station, but only collected ${this.samplesCollected}/${this.requiredSamples} required science samples!`,!1)}async runCommand(t){const e=this.gridSize;if(t==="L")this.roverDir=(this.roverDir+3)%4,this.battery=Math.max(0,this.battery-2);else if(t==="R")this.roverDir=(this.roverDir+1)%4,this.battery=Math.max(0,this.battery-2);else if(t==="F"){const n=[1,0,-1,0][this.roverDir],i=[0,1,0,-1][this.roverDir],r=this.roverPos.x+n,a=this.roverPos.y+i;if(r<0||r>=e||a<0||a>=e){this.showFeedback("⚠ Boundary collision prevented by AutoNav hazard avoidance!",!1),this.battery=Math.max(0,this.battery-4);return}const o=this.grid[a][r];if(o==="boulder"){this.showFeedback("⚠ Boulder collision! Obstacle blocked movement.",!1),this.battery=Math.max(0,this.battery-6);return}this.roverPos.x=r,this.roverPos.y=a,o==="dune"?this.battery=Math.max(0,this.battery-12):this.battery=Math.max(0,this.battery-5)}else t==="D"?this.grid[this.roverPos.y][this.roverPos.x]==="sample"?(this.samplesCollected++,this.grid[this.roverPos.y][this.roverPos.x]="empty",this.battery=Math.max(0,this.battery-10),this.showFeedback("✔ Rock sample collected and hermetically sealed!",!0)):(this.battery=Math.max(0,this.battery-8),this.showFeedback("No sample found here (drilled ordinary regolith).",!1)):t==="C"&&(this.grid[this.roverPos.y][this.roverPos.x]==="recharge"?(this.battery=Math.min(this.maxBattery,this.battery+35),this.showFeedback("☀ Solar panels angled to sun! Recharged +35 Wh.",!0)):(this.battery=Math.min(this.maxBattery,this.battery+8),this.showFeedback("Low ambient sunlight: trickle charged +8 Wh.",!0)))}startLoop(){performance.now();const t=e=>{this.render(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.fillStyle="#180a06",t.fillRect(0,0,e,n);const i=this.gridSize,r=20,a=Math.min((e-r*2)/i,(n-r*2)/i),o=(e-a*i)/2,l=(n-a*i)/2;for(let p=0;p<i;p++)for(let _=0;_<i;_++){const g=o+_*a,f=l+p*a,m=this.grid[p][_];m==="dune"?t.fillStyle="#4a2312":m==="boulder"?t.fillStyle="#2d1810":m==="recharge"?t.fillStyle="rgba(255, 207, 122, 0.18)":m==="uplink"?t.fillStyle="rgba(91, 140, 255, 0.22)":t.fillStyle="#26120b",t.fillRect(g,f,a,a),t.strokeStyle="#4d281a",t.lineWidth=1,t.strokeRect(g,f,a,a),m==="boulder"?(t.fillStyle="#8f4f35",t.beginPath(),t.arc(g+a*.5,f+a*.5,a*.35,0,Math.PI*2),t.fill()):m==="dune"?(t.strokeStyle="#d97d4a",t.lineWidth=2,t.beginPath(),t.moveTo(g+4,f+a*.7),t.bezierCurveTo(g+a*.3,f+a*.3,g+a*.7,f+a*.9,g+a-4,f+a*.4),t.stroke()):m==="sample"?(t.fillStyle="#5effad",t.beginPath(),t.arc(g+a*.5,f+a*.5,a*.22,0,Math.PI*2),t.fill(),t.strokeStyle="#2b945f",t.stroke()):m==="recharge"?(t.fillStyle="#ffcf7a",t.font=`${Math.round(a*.45)}px sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("☀",g+a*.5,f+a*.5)):m==="uplink"&&(t.fillStyle="#5b8cff",t.font=`${Math.round(a*.45)}px sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("◎",g+a*.5,f+a*.5))}const c=o+this.roverPos.x*a+a*.5,h=l+this.roverPos.y*a+a*.5;t.save(),t.translate(c,h),t.rotate(this.roverDir*Math.PI/2),t.fillStyle="#eef1fa",t.fillRect(-a*.3,-a*.25,a*.6,a*.5),t.fillStyle="#1b2a56",t.fillRect(-a*.2,-a*.18,a*.35,a*.36),t.fillStyle="#3a3f4a";const u=a*.16,d=a*.08;t.fillRect(-a*.35,-a*.32,u,d),t.fillRect(0,-a*.32,u,d),t.fillRect(a*.22,-a*.32,u,d),t.fillRect(-a*.35,a*.24,u,d),t.fillRect(0,a*.24,u,d),t.fillRect(a*.22,a*.24,u,d),t.fillStyle="#ffcf7a",t.beginPath(),t.arc(a*.22,0,a*.08,0,Math.PI*2),t.fill(),t.restore()}destroy(){this.animId&&cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.onResize)}}class wM{constructor(t,e={}){this.container=t,this.options=e,this.difficulty=e.difficulty??"beginner",this.onComplete=e.onComplete??(()=>{}),this.maxSols=this.difficulty==="beginner"?5:8,this.crewSize=4,this.score=0,this.running=!1,this.reset(),this.initDOM(),this.startLoop()}reset(){this.sol=1,this.hour=8,this.crewHealth=100,this.crewMorale=100,this.sciencePoints=0,this.oxygen=120,this.water=240,this.battery=65,this.maxBattery=80,this.food=100,this.co2Level=600,this.systems={moxie:"nominal",waterRecycler:!0,scrubber:"nominal",thermal:"normal",scienceLab:!1},this.dustStorm=!1,this.waterLeak=!1,this.scrubberAlert=!1,this.incidentsResolved=0}initDOM(){this.container.innerHTML=`
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Mission Time</span><b class="val time-val">Sol 1 · 08:00</b></div>
          <div class="hud-item"><span class="label">Crew Status</span><b class="val health-val">100% Health</b></div>
          <div class="hud-item"><span class="label">Cabin CO₂</span><b class="val co2-val">600 ppm</b></div>
          <div class="hud-item"><span class="label">Power Grid</span><b class="val power-val">Balanced</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls resource-ctrl-grid">
          <div class="res-col">
            <div class="subsys-card">
              <div class="subsys-head"><span>O₂ Generator (MOXIE)</span><b class="moxie-status">NOMINAL (3.5 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini mox-btn" data-s="off">Off</button>
                <button class="mini mox-btn on" data-s="nominal">Nominal</button>
                <button class="mini mox-btn" data-s="boost">Boost</button>
              </div>
            </div>

            <div class="subsys-card">
              <div class="subsys-head"><span>Water Recovery System</span><b class="wrs-status">ONLINE (2.0 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini wrs-btn" data-on="0">Bypass</button>
                <button class="mini wrs-btn on" data-on="1">Filter & Recycle</button>
              </div>
            </div>
          </div>

          <div class="res-col">
            <div class="subsys-card">
              <div class="subsys-head"><span>CO₂ Air Scrubber</span><b class="scrub-status">NOMINAL (1.5 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini scrub-btn" data-s="low">Low</button>
                <button class="mini scrub-btn on" data-s="nominal">Nominal</button>
                <button class="mini scrub-btn" data-s="boost">Boost</button>
              </div>
            </div>

            <div class="subsys-card">
              <div class="subsys-head"><span>Science Lab & Comms</span><b class="lab-status">OFFLINE (0 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini lab-btn on" data-on="0">Powered Down</button>
                <button class="mini lab-btn" data-on="1">Run Research (4.0 kW)</button>
              </div>
            </div>
          </div>

          <div class="res-col actions-col">
            <button class="solid btn-tick-hour">Advance 4 Hours</button>
            <button class="mini btn-tick-sol">Advance Full Sol</button>
            <button class="btn-res-reset">Emergency Reset</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Environmental Control & Life Support:</strong> On the International Space Station and future Martian outposts, the Water Recovery System recycles up to 98% of all human moisture (sweat, breath condensate, and urine) back into potable drinking water!
        </div>
      </div>
    `,this.canvas=this.container.querySelector(".game-canvas"),this.ctx=this.canvas.getContext("2d"),this.timeVal=this.container.querySelector(".time-val"),this.healthVal=this.container.querySelector(".health-val"),this.co2Val=this.container.querySelector(".co2-val"),this.powerVal=this.container.querySelector(".power-val"),this.scoreVal=this.container.querySelector(".score-val"),this.feedback=this.container.querySelector(".feedback-banner"),this.resizeCanvas(),window.addEventListener("resize",this.onResize),this.container.querySelectorAll(".mox-btn").forEach(t=>{t.onclick=()=>{this.systems.moxie=t.dataset.s,this.container.querySelectorAll(".mox-btn").forEach(e=>e.classList.toggle("on",e===t)),this.updateHUD()}}),this.container.querySelectorAll(".wrs-btn").forEach(t=>{t.onclick=()=>{this.systems.waterRecycler=t.dataset.on==="1",this.container.querySelectorAll(".wrs-btn").forEach(e=>e.classList.toggle("on",e===t)),this.updateHUD()}}),this.container.querySelectorAll(".scrub-btn").forEach(t=>{t.onclick=()=>{this.systems.scrubber=t.dataset.s,this.container.querySelectorAll(".scrub-btn").forEach(e=>e.classList.toggle("on",e===t)),this.updateHUD()}}),this.container.querySelectorAll(".lab-btn").forEach(t=>{t.onclick=()=>{this.systems.scienceLab=t.dataset.on==="1",this.container.querySelectorAll(".lab-btn").forEach(e=>e.classList.toggle("on",e===t)),this.updateHUD()}}),this.container.querySelector(".btn-tick-hour").onclick=()=>this.tickTime(4),this.container.querySelector(".btn-tick-sol").onclick=()=>this.tickTime(24),this.container.querySelector(".btn-res-reset").onclick=()=>{this.reset(),this.updateHUD(),this.hideFeedback()},this.updateHUD()}onResize=()=>this.resizeCanvas();resizeCanvas(){if(!this.canvas)return;const t=this.canvas.parentElement.getBoundingClientRect();this.canvas.width=Math.max(400,t.width||600),this.canvas.height=360}updateHUD(){this.timeVal.textContent=`Sol ${this.sol} / ${this.maxSols} · ${String(this.hour).padStart(2,"0")}:00`,this.healthVal.textContent=`${Math.round(this.crewHealth)}% Health`,this.co2Val.textContent=`${Math.round(this.co2Level)} ppm`,this.scoreVal.textContent=this.score;const e=this.hour>=6&&this.hour<=18?this.dustStorm?5.5:16:0,n=(this.systems.moxie==="boost"?4.5:this.systems.moxie==="nominal"?2.5:0)+(this.systems.waterRecycler?1.2:0)+(this.systems.scrubber==="boost"?2.2:this.systems.scrubber==="nominal"?1:.5)+(this.systems.scienceLab?3.5:0)+1.2,i=e-n;this.powerVal.textContent=`${i>=0?"+":""}${i.toFixed(1)} kW (Batt: ${Math.round(this.battery)} kWh)`}showFeedback(t,e=!0){this.feedback.hidden=!1,this.feedback.className=`feedback-banner ${e?"good":"warn"}`,this.feedback.innerHTML=t}hideFeedback(){this.feedback.hidden=!0}tickTime(t){for(let e=0;e<t;e++){this.hour=(this.hour+1)%24,this.hour===0&&this.sol++,this.difficulty==="advanced"&&(this.sol===3&&this.hour===10&&!this.dustStorm?(this.dustStorm=!0,this.showFeedback("⚠ DUST STORM WARNING: Atmospheric dust has reduced solar generation by 65%! Shed load!",!1)):this.sol===5&&this.hour===14&&!this.waterLeak?(this.waterLeak=!0,this.showFeedback("⚠ WRS VALVE LEAK: Water recycling efficiency compromised. Ration water!",!1)):this.sol===6&&this.dustStorm&&(this.dustStorm=!1,this.showFeedback("✔ Dust storm has cleared! Solar panels operating at full insolation.",!0)));const n=this.crewSize*.84/24,i=this.crewSize*2.5/24,r=this.crewSize*1/24;this.oxygen=Math.max(0,this.oxygen-n),this.water=Math.max(0,this.water-(this.systems.waterRecycler&&!this.waterLeak?i*.1:i)),this.food=Math.max(0,this.food-r),this.co2Level+=18,this.systems.moxie==="boost"?this.oxygen+=n*1.8:this.systems.moxie==="nominal"&&(this.oxygen+=n*1.1),this.systems.scrubber==="boost"?this.co2Level=Math.max(450,this.co2Level-38):this.systems.scrubber==="nominal"?this.co2Level=Math.max(500,this.co2Level-22):this.systems.scrubber==="low"&&(this.co2Level=Math.max(600,this.co2Level-10));const o=this.hour>=6&&this.hour<=18?this.dustStorm?5.5:16:0,l=(this.systems.moxie==="boost"?4.5:this.systems.moxie==="nominal"?2.5:0)+(this.systems.waterRecycler?1.2:0)+(this.systems.scrubber==="boost"?2.2:this.systems.scrubber==="nominal"?1:.5)+(this.systems.scienceLab?3.5:0)+1.2,c=o-l;this.battery=Math.max(0,Math.min(this.maxBattery,this.battery+c)),this.systems.scienceLab&&this.battery>5&&(this.sciencePoints+=2),this.oxygen<=5&&(this.crewHealth=Math.max(0,this.crewHealth-3)),this.water<=5&&(this.crewHealth=Math.max(0,this.crewHealth-2)),this.co2Level>2e3&&(this.crewHealth=Math.max(0,this.crewHealth-2.5)),this.battery<=0&&(this.crewHealth=Math.max(0,this.crewHealth-2))}if(this.updateHUD(),this.crewHealth<=0){this.showFeedback("✖ CRITICAL MISSION FAILURE: Habitat life support collapse. Crew evacuated.",!1);return}if(this.sol>this.maxSols){const e=this.difficulty==="beginner"?80:120,n=Math.round(this.crewHealth/100*20)+Math.min(10,Math.round(this.sciencePoints*.1));this.score=Math.min(this.difficulty==="beginner"?100:150,e+n),this.updateHUD(),this.showFeedback(`✔ EXPEDITION COMPLETED! Survived all ${this.maxSols} Sols with ${Math.round(this.crewHealth)}% crew health! Score: ${this.score}`,!0),setTimeout(()=>{this.onComplete({activityId:"resources",difficulty:this.difficulty,score:this.score,stars:3,summary:`Maintained stable closed-loop oxygen, water, and power balance throughout a ${this.maxSols}-Sol mission.`})},1800)}}startLoop(){performance.now();const t=e=>{this.render(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.fillStyle="#080d1a",t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.85)",t.font="14px sans-serif",t.fillText(`Life Support ECLSS Status Monitor — Sol ${this.sol}`,25,30);const i=[{name:"Oxygen (O₂)",val:this.oxygen,max:140,unit:"kg",color:"#5b8cff"},{name:"Water (H₂O)",val:this.water,max:280,unit:"L",color:"#4aff9a"},{name:"Power Storage",val:this.battery,max:this.maxBattery,unit:"kWh",color:"#ffcf7a"},{name:"Ration Supplies",val:this.food,max:120,unit:"units",color:"#8b6bff"}],r=60,a=18,o=e*.55;i.forEach((h,u)=>{const d=r+u*44;t.fillStyle="#cdd3e6",t.font="12px sans-serif",t.fillText(h.name,25,d+14),t.fillStyle="#ffffff",t.textAlign="right",t.fillText(`${h.val.toFixed(1)} / ${h.max} ${h.unit}`,25+o,d+14),t.textAlign="left",t.fillStyle="rgba(180, 196, 255, 0.12)",t.fillRect(25,d+20,o,a);const p=Math.max(0,Math.min(1,h.val/h.max));t.fillStyle=p<.2?"#ff5a5a":h.color,t.fillRect(25,d+20,o*p,a)});const l=e*.68;t.fillStyle="#1c2438",t.fillRect(l,60,e-l-25,200),t.strokeStyle="#344163",t.strokeRect(l,60,e-l-25,200),t.fillStyle="#ffcf7a",t.font="12px sans-serif",t.fillText("Environmental Diagnostics",l+15,85),t.fillStyle="#cdd3e6",t.font="11px sans-serif",t.fillText(`Cabin CO₂: ${Math.round(this.co2Level)} ppm`,l+15,115),t.fillStyle=this.co2Level>1800?"#ff5a5a":this.co2Level>1100?"#ffcf7a":"#4aff9a",t.fillText(this.co2Level>1800?"⚠ DANGEROUS LEVEL":this.co2Level>1100?"ELEVATED":"✔ OPTIMAL AIR",l+15,132),t.fillStyle="#cdd3e6",t.fillText(`Crew Health: ${Math.round(this.crewHealth)}%`,l+15,165),t.fillStyle=this.crewHealth<50?"#ff5a5a":"#4aff9a",t.fillRect(l+15,175,120*(this.crewHealth/100),10),t.fillStyle="#cdd3e6",t.fillText(`Science Research: ${this.sciencePoints} pts`,l+15,215);const c=this.hour>=6&&this.hour<=18;t.fillStyle=c?"#ffcf7a":"#5b8cff",t.font="12px sans-serif",t.fillText(c?"☀ Diurnal Phase: Sun Insolation High":"◐ Nocturnal Phase: Night Load On Battery",25,n-25)}destroy(){this.animId&&cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.onResize)}}class EM{constructor(t,e={}){this.container=t,this.options=e,this.difficulty=e.difficulty??"beginner",this.onComplete=e.onComplete??(()=>{}),this.tilt=45,this.azimuth=0,this.hour=8,this.totalKWh=0,this.batteryKWh=20,this.maxBatteryKWh=50,this.dustLevel=.05,this.targetKWh=this.difficulty==="beginner"?320:450,this.score=0,this.cleanedCount=0,this.initDOM(),this.startLoop()}getSunPosition(t){if(t<6||t>18)return{elevation:-10,azimuth:0,isNight:!0};const e=(t-6)/12,n=Math.sin(e*Math.PI)*65,i=(e-.5)*160;return{elevation:n,azimuth:i,isNight:!1}}calcIncidence(){const t=this.getSunPosition(this.hour);if(t.isNight)return{cosTheta:0,thetaDeg:90,powerKW:0};const e=t.elevation*Math.PI/180,n=this.tilt*Math.PI/180,i=(t.azimuth-this.azimuth)*Math.PI/180;let r=Math.sin(e)*Math.cos(n)+Math.cos(e)*Math.sin(n)*Math.cos(i);r=Math.max(0,Math.min(1,r));const a=Math.acos(r)*180/Math.PI,o=12,l=Math.max(0,1-this.dustLevel),c=o*r*l;return{cosTheta:r,thetaDeg:a,powerKW:c}}initDOM(){this.container.innerHTML=`
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Time of Day</span><b class="val time-val">08:00 (Morning)</b></div>
          <div class="hud-item"><span class="label">Sun Elevation</span><b class="val sun-val">25° El · -53° Az</b></div>
          <div class="hud-item"><span class="label">Alignment Quality</span><b class="val align-val">92% (θ = 22°)</b></div>
          <div class="hud-item"><span class="label">Output Power</span><b class="val power-val">10.2 kW</b></div>
          <div class="hud-item"><span class="label">Energy Generated</span><b class="val kwh-val">0 / ${this.targetKWh} kWh</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls solar-ctrl-grid">
          <div class="ctrl-group">
            <label>Panel Tilt (β): <span class="tilt-val">${this.tilt}</span>°</label>
            <input type="range" class="tilt-slider" min="0" max="90" step="1" value="${this.tilt}">
          </div>

          ${this.difficulty==="advanced"?`
          <div class="ctrl-group">
            <label>Panel Azimuth (ϕ): <span class="az-val">${this.azimuth}</span>°</label>
            <input type="range" class="az-slider" min="-80" max="80" step="2" value="${this.azimuth}">
          </div>
          <div class="ctrl-group">
            <label>Dust Accumulation: <span class="dust-val">${Math.round(this.dustLevel*100)}</span>%</label>
            <button class="mini btn-clean-dust">Deploy Electrostatic Wiper (-10 kWh)</button>
          </div>
          `:`
          <div class="ctrl-group">
            <label>Tracking Mode</label>
            <span class="ctrl-note">Single-Axis Elevation Tracking (Auto-Azimuth)</span>
          </div>
          `}

          <div class="ctrl-buttons">
            <button class="solid btn-advance-time">Advance Time (+2 Hours)</button>
            <button class="btn-solar-reset">Reset Sol</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Lambert's Cosine Law:</strong> Solar irradiance collected by a flat surface decreases as $I = I_0 cos 	heta$, where $	heta$ is the angle between incident solar rays and the surface normal. When $	heta = 0^circ$ (perpendicular), energy yield is 100%; at $	heta = 60^circ$, yield drops by half!
        </div>
      </div>
    `,this.canvas=this.container.querySelector(".game-canvas"),this.ctx=this.canvas.getContext("2d"),this.timeVal=this.container.querySelector(".time-val"),this.sunVal=this.container.querySelector(".sun-val"),this.alignVal=this.container.querySelector(".align-val"),this.powerVal=this.container.querySelector(".power-val"),this.kwhVal=this.container.querySelector(".kwh-val"),this.feedback=this.container.querySelector(".feedback-banner"),this.tiltSlider=this.container.querySelector(".tilt-slider"),this.tiltVal=this.container.querySelector(".tilt-val"),this.azSlider=this.container.querySelector(".az-slider"),this.azVal=this.container.querySelector(".az-val"),this.resizeCanvas(),window.addEventListener("resize",this.onResize),this.tiltSlider.oninput=()=>{this.tilt=parseFloat(this.tiltSlider.value),this.tiltVal.textContent=this.tilt,this.updateHUD()},this.azSlider&&(this.azSlider.oninput=()=>{this.azimuth=parseFloat(this.azSlider.value),this.azVal.textContent=this.azimuth,this.updateHUD()});const t=this.container.querySelector(".btn-clean-dust");t&&(t.onclick=()=>{if(this.batteryKWh<10){this.showFeedback("⚠ Insufficient battery power to run electrostatic dust wiper (needs 10 kWh)!",!1);return}this.batteryKWh-=10,this.dustLevel=.02,this.cleanedCount++,this.showFeedback("✔ Electrostatic dust pulse executed! Panels cleaned (98% transmittance).",!0),this.updateHUD()}),this.container.querySelector(".btn-advance-time").onclick=()=>{this.advanceTime(2)},this.container.querySelector(".btn-solar-reset").onclick=()=>{this.hour=8,this.totalKWh=0,this.batteryKWh=20,this.dustLevel=.05,this.updateHUD(),this.hideFeedback()},this.updateHUD()}onResize=()=>this.resizeCanvas();resizeCanvas(){if(!this.canvas)return;const t=this.canvas.parentElement.getBoundingClientRect();this.canvas.width=Math.max(400,t.width||600),this.canvas.height=360}showFeedback(t,e=!0){this.feedback.hidden=!1,this.feedback.className=`feedback-banner ${e?"good":"warn"}`,this.feedback.innerHTML=t}hideFeedback(){this.feedback.hidden=!0}updateHUD(){const t=this.getSunPosition(this.hour),{cosTheta:e,thetaDeg:n,powerKW:i}=this.calcIncidence();this.timeVal.textContent=`${String(this.hour).padStart(2,"0")}:00 ${t.isNight?"(Night)":""}`,this.sunVal.textContent=`${Math.round(t.elevation)}° El · ${Math.round(t.azimuth)}° Az`,this.alignVal.textContent=`${Math.round(e*100)}% (θ = ${Math.round(n)}°)`,this.powerVal.textContent=`${i.toFixed(1)} kW`,this.kwhVal.textContent=`${Math.round(this.totalKWh)} / ${this.targetKWh} kWh`;const r=this.container.querySelector(".dust-val");r&&(r.textContent=Math.round(this.dustLevel*100))}advanceTime(t=2){const{powerKW:e}=this.calcIncidence(),n=e*t;if(this.totalKWh+=n,this.batteryKWh=Math.min(this.maxBatteryKWh,this.batteryKWh+n*.4),this.difficulty==="advanced"&&(this.dustLevel=Math.min(.65,this.dustLevel+.04)),this.hour+=t,this.updateHUD(),this.hour>18){const i=this.totalKWh>=this.targetKWh,r=this.difficulty==="advanced"?this.batteryKWh>=35:!0;if(i&&r){const a=this.difficulty==="beginner"?85:120,o=Math.min(30,Math.round((this.totalKWh-this.targetKWh)*.3));this.score=Math.min(this.difficulty==="beginner"?100:150,a+o),this.showFeedback(`✔ SOL COMPLETE! Target achieved: ${Math.round(this.totalKWh)} kWh generated! Night battery reserves: ${Math.round(this.batteryKWh)} kWh. Score: ${this.score}`,!0),setTimeout(()=>{this.onComplete({activityId:"solar",difficulty:this.difficulty,score:this.score,stars:3,summary:"Maximized photovoltaic output using Lambert's cosine law and managed diurnal battery reserves."})},1800)}else this.showFeedback(`⚠ Sol ended with ${Math.round(this.totalKWh)} kWh (Target: ${this.targetKWh} kWh). ${r?"":"Battery critically low for night heating."} Reset and adjust panel tracking angle closer to normal incidence!`,!1)}}startLoop(){performance.now();const t=e=>{this.render(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height,i=this.getSunPosition(this.hour),r=t.createLinearGradient(0,0,0,n);i.isNight?(r.addColorStop(0,"#03050d"),r.addColorStop(1,"#0c101e")):(r.addColorStop(0,"#1d1210"),r.addColorStop(.7,"#42241b"),r.addColorStop(1,"#24130e")),t.fillStyle=r,t.fillRect(0,0,e,n);const a=n*.72;if(t.fillStyle="#1c0d0a",t.fillRect(0,a,e,n-a),!i.isNight){const h=e*.5+i.azimuth/80*(e*.38),u=a-i.elevation/65*(a-50),d=t.createRadialGradient(h,u,6,h,u,40);d.addColorStop(0,"#ffffff"),d.addColorStop(.3,"#ffcf7a"),d.addColorStop(1,"rgba(255, 207, 122, 0)"),t.fillStyle=d,t.beginPath(),t.arc(h,u,40,0,Math.PI*2),t.fill(),t.fillStyle="#fff4db",t.beginPath(),t.arc(h,u,12,0,Math.PI*2),t.fill();const p=e*.5,_=a-20;t.strokeStyle="rgba(255, 207, 122, 0.45)",t.lineWidth=2,t.setLineDash([4,4]),t.beginPath(),t.moveTo(h,u),t.lineTo(p,_),t.stroke(),t.setLineDash([])}const o=e*.5,l=a-10;t.fillStyle="#3a3f4a",t.fillRect(o-8,l,16,a-l+10),t.save(),t.translate(o,l);const c=(this.tilt-90)*Math.PI/180;t.rotate(c),t.fillStyle="#1c2438",t.fillRect(-70,-10,140,20),t.strokeStyle="#5b8cff",t.lineWidth=2,t.strokeRect(-70,-10,140,20),t.fillStyle="#183163";for(let h=-65;h<65;h+=22)t.fillRect(h,-8,18,16);t.strokeStyle="#4aff9a",t.lineWidth=2,t.beginPath(),t.moveTo(0,-10),t.lineTo(0,-50),t.stroke(),t.fillStyle="#4aff9a",t.font="10px sans-serif",t.fillText("Normal →",4,-40),t.restore()}destroy(){this.animId&&cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.onResize)}}class TM{constructor(t,e={}){this.container=t,this.options=e,this.difficulty=e.difficulty??"beginner",this.onComplete=e.onComplete??(()=>{}),this.cropType="Martian Red Potatoes",this.growthStage=0,this.stageNames=["Seedling / Sprouting","Vegetative Canopy","Tuber Formation","Ready for Harvest"],this.plantHealth=100,this.growthProgress=0,this.score=0,this.moisture=55,this.lightHours=16,this.temperature=22,this.perchlorates=.05,this.nutrientN=100,this.nutrientP=100,this.nutrientK=100,this.deficiency=null,this.perchlorateAlert=!1,this.initDOM(),this.startLoop()}initDOM(){this.container.innerHTML=`
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Crop Cultivar</span><b class="val crop-val">${this.cropType}</b></div>
          <div class="hud-item"><span class="label">Growth Stage</span><b class="val stage-val">${this.stageNames[this.growthStage]}</b></div>
          <div class="hud-item"><span class="label">Biomass Health</span><b class="val health-val">100%</b></div>
          <div class="hud-item"><span class="label">Soil Moisture</span><b class="val moist-val">55% (Optimal)</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls eco-ctrl-grid">
          <div class="ctrl-group">
            <label>Irrigation Pump: <span class="moist-val-num">${this.moisture}</span>% Moisture</label>
            <input type="range" class="moist-slider" min="20" max="90" step="5" value="${this.moisture}">
          </div>

          <div class="ctrl-group">
            <label>LED Photoperiod: <span class="light-val-num">${this.lightHours}</span> hrs/sol</label>
            <input type="range" class="light-slider" min="8" max="24" step="1" value="${this.lightHours}">
          </div>

          <div class="ctrl-group">
            <label>Greenhouse Temperature: <span class="temp-val-num">${this.temperature}</span>°C</label>
            <input type="range" class="temp-slider" min="10" max="35" step="1" value="${this.temperature}">
          </div>

          ${this.difficulty==="advanced"?`
          <div class="ctrl-group adv-fert-group">
            <label>Nutrient & Regolith Treatment:</label>
            <div class="fert-buttons">
              <button class="mini btn-dose-n">+ Nitrogen (N)</button>
              <button class="mini btn-dose-p">+ Phosphorus (P)</button>
              <button class="mini btn-flush-regolith">Leach Perchlorates</button>
            </div>
          </div>
          `:""}

          <div class="ctrl-buttons">
            <button class="solid btn-advance-cycle">Advance Growth Cycle (+3 Sols)</button>
            <button class="btn-eco-reset">Reset Greenhouse</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Bioregenerative Agriculture:</strong> Plants in extraterrestrial habitats do double duty: they produce fresh calorie-dense carbohydrates and vitamins for the crew while scrubbing CO₂ and producing breathable oxygen via photosynthesis ($6CO_2 + 6H_2O 	o C_6H_{12}O_6 + 6O_2$)!
        </div>
      </div>
    `,this.canvas=this.container.querySelector(".game-canvas"),this.ctx=this.canvas.getContext("2d"),this.stageVal=this.container.querySelector(".stage-val"),this.healthVal=this.container.querySelector(".health-val"),this.moistVal=this.container.querySelector(".moist-val"),this.scoreVal=this.container.querySelector(".score-val"),this.feedback=this.container.querySelector(".feedback-banner"),this.moistSlider=this.container.querySelector(".moist-slider"),this.moistValNum=this.container.querySelector(".moist-val-num"),this.lightSlider=this.container.querySelector(".light-slider"),this.lightValNum=this.container.querySelector(".light-val-num"),this.tempSlider=this.container.querySelector(".temp-slider"),this.tempValNum=this.container.querySelector(".temp-val-num"),this.resizeCanvas(),window.addEventListener("resize",this.onResize),this.moistSlider.oninput=()=>{this.moisture=parseInt(this.moistSlider.value,10),this.moistValNum.textContent=this.moisture,this.updateHUD()},this.lightSlider.oninput=()=>{this.lightHours=parseInt(this.lightSlider.value,10),this.lightValNum.textContent=this.lightHours,this.updateHUD()},this.tempSlider.oninput=()=>{this.temperature=parseInt(this.tempSlider.value,10),this.tempValNum.textContent=this.temperature,this.updateHUD()},this.difficulty==="advanced"&&(this.container.querySelector(".btn-dose-n").onclick=()=>{this.nutrientN=100,this.deficiency==="nitrogen"?(this.deficiency=null,this.showFeedback("✔ Nitrogen dosed! Leaf chlorosis reversed.",!0)):this.showFeedback("Nitrogen fertilizer supplemented.",!0)},this.container.querySelector(".btn-dose-p").onclick=()=>{this.nutrientP=100,this.deficiency==="phosphorus"?(this.deficiency=null,this.showFeedback("✔ Phosphorus dosed! Root stunting corrected.",!0)):this.showFeedback("Phosphorus fertilizer supplemented.",!0)},this.container.querySelector(".btn-flush-regolith").onclick=()=>{this.perchlorates=.02,this.perchlorateAlert=!1,this.showFeedback("✔ Bacterial perchlorate reduction flush complete! Soil toxicity neutralized.",!0)}),this.container.querySelector(".btn-advance-cycle").onclick=()=>{this.advanceCycle()},this.container.querySelector(".btn-eco-reset").onclick=()=>{this.growthStage=0,this.plantHealth=100,this.growthProgress=0,this.moisture=55,this.lightHours=16,this.temperature=22,this.perchlorates=.05,this.deficiency=null,this.updateHUD(),this.hideFeedback()},this.updateHUD()}onResize=()=>this.resizeCanvas();resizeCanvas(){if(!this.canvas)return;const t=this.canvas.parentElement.getBoundingClientRect();this.canvas.width=Math.max(400,t.width||600),this.canvas.height=360}showFeedback(t,e=!0){this.feedback.hidden=!1,this.feedback.className=`feedback-banner ${e?"good":"warn"}`,this.feedback.innerHTML=t}hideFeedback(){this.feedback.hidden=!0}updateHUD(){this.stageVal.textContent=`${this.stageNames[this.growthStage]} [${this.growthStage+1}/4]`,this.healthVal.textContent=`${Math.round(this.plantHealth)}%`;const t=this.moisture>=45&&this.moisture<=65?"Optimal":this.moisture<45?"Dry / Wilting":"Over-watered";this.moistVal.textContent=`${this.moisture}% (${t})`,this.scoreVal.textContent=this.score}advanceCycle(){let t=0;if(this.moisture<40||this.moisture>70?t-=12:this.moisture>=45&&this.moisture<=65&&(t+=4),this.temperature<18||this.temperature>28?t-=10:this.temperature>=20&&this.temperature<=24&&(t+=4),this.lightHours<12||this.lightHours>22?t-=8:this.lightHours>=14&&this.lightHours<=18&&(t+=4),this.difficulty==="advanced"&&(this.growthStage===1&&!this.deficiency?(this.deficiency="nitrogen",this.showFeedback("⚠ DIAGNOSTIC ALERT: Upper leaves displaying pale yellow chlorosis! Nitrogen deficiency detected. Dose Nitrogen fertilizer!",!1)):this.growthStage===2&&!this.perchlorateAlert&&(this.perchlorates=.22,this.perchlorateAlert=!0,this.showFeedback("⚠ TOXICITY WARNING: Perchlorate salt leaching detected in regolith bed! Run perchlorate flush.",!1)),this.deficiency&&(t-=14),this.perchlorates>.15&&(t-=15)),this.plantHealth=Math.max(10,Math.min(100,this.plantHealth+t)),this.plantHealth>30&&this.growthStage++,this.updateHUD(),this.growthStage>=3){const e=this.difficulty==="beginner"?80:110,n=Math.round(this.plantHealth/100*(this.difficulty==="beginner"?20:40));this.score=e+n,this.updateHUD(),this.showFeedback(`✔ BOUNTIFUL HARVEST! Yielded 48 kg of Martian Red Potatoes with ${Math.round(this.plantHealth)}% crop health! Score: ${this.score}`,!0),setTimeout(()=>{this.onComplete({activityId:"ecosystem",difficulty:this.difficulty,score:this.score,stars:3,summary:"Cultivated and harvested a full potato crop cycle inside a closed-loop Martian greenhouse bioregenerative life support facility."})},1800)}}startLoop(){performance.now();const t=e=>{this.render(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;t.fillStyle="#0b0f1a",t.fillRect(0,0,e,n);const i=t.createLinearGradient(0,0,0,n*.6);i.addColorStop(0,"rgba(230, 80, 255, 0.28)"),i.addColorStop(1,"rgba(230, 80, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,e,n*.6),t.fillStyle="#1e2438",t.fillRect(40,20,e-80,14);for(let l=60;l<e-60;l+=24)t.fillStyle=l%48===0?"#ff4081":"#448aff",t.fillRect(l,32,10,4);const r=n*.62;t.fillStyle="#3d2419",t.fillRect(50,r,e-100,n-r-30),t.strokeStyle="#5a3828",t.lineWidth=3,t.strokeRect(50,r,e-100,n-r-30);const a=5,o=(e-160)/(a-1);for(let l=0;l<a;l++){const c=80+l*o;this.drawPlant(t,c,r,this.growthStage)}t.fillStyle="rgba(255, 255, 255, 0.85)",t.font="12px sans-serif",t.fillText("PAR Spectrum: 450nm Blue + 660nm Red LED",60,60),this.deficiency==="nitrogen"&&(t.fillStyle="#ffcf7a",t.fillText("⚠ Visible Chlorosis (Pale Leaves)",60,80))}drawPlant(t,e,n,i){if(t.save(),t.translate(e,n),i===0)t.strokeStyle="#7dffb0",t.lineWidth=3,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(-4,-15,-8,-20),t.moveTo(0,0),t.quadraticCurveTo(4,-15,8,-20),t.stroke();else if(i===1){t.strokeStyle="#4aff9a",t.lineWidth=4,t.beginPath(),t.moveTo(0,0),t.lineTo(0,-55),t.stroke(),t.fillStyle=this.deficiency==="nitrogen"?"#e6df7e":"#3be88b";for(const[r,a]of[[-18,-35],[18,-40],[-15,-55],[15,-60],[0,-70]])t.beginPath(),t.ellipse(r,a,14,8,Math.PI/4,0,Math.PI*2),t.fill()}else if(i>=2){t.strokeStyle="#38b872",t.lineWidth=5,t.beginPath(),t.moveTo(0,0),t.lineTo(0,-65),t.stroke(),t.fillStyle="#2db867";for(const[r,a]of[[-25,-40],[25,-45],[-22,-65],[22,-70],[0,-85]])t.beginPath(),t.ellipse(r,a,18,10,Math.PI/4,0,Math.PI*2),t.fill();t.fillStyle="#c76e48",t.beginPath(),t.ellipse(-14,25,16,12,.2,0,Math.PI*2),t.ellipse(14,35,18,13,-.3,0,Math.PI*2),t.fill(),t.strokeStyle="#8c482a",t.lineWidth=2,t.stroke()}t.restore()}destroy(){this.animId&&cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.onResize)}}const AM={gravity:bM,crater:MM,rover:SM,resources:wM,solar:EM,ecosystem:TM};function CM(s){let t=null,e=null,n="beginner",i={};const r=lo(rs(`
    <div class="screen lab-screen">
      <header class="lab-header">
        <button class="back lab-back" data-a="menu">&larr; Main Menu</button>
        <div class="lab-title-group">
          <h1 class="lab-title">LEARNING LAB</h1>
          <p class="lab-sub">Interactive Astronaut Training · Physics, Planetary Geology & Space Systems</p>
        </div>
        <div class="lab-rank-box">
          <div class="rank-badge"><span class="badge-icon">○</span> <span class="badge-title">Cadet Trainee</span></div>
          <div class="total-score-val">0 / 1500 PTS</div>
        </div>
      </header>

      <main class="lab-body">
        <div class="lab-hub-view">
          <div class="activity-grid"></div>
        </div>

        <div class="lab-game-view" hidden>
          <div class="game-topbar">
            <button class="mini btn-back-hub">&larr; Lab Hub</button>
            <div class="game-meta">
              <h2 class="active-game-title">--</h2>
              <span class="active-game-concept">--</span>
            </div>
            <div class="diff-toggle">
              <button class="mini btn-diff ${n==="beginner"?"on":""}" data-d="beginner">Beginner</button>
              <button class="mini btn-diff ${n==="advanced"?"on":""}" data-d="advanced">Advanced</button>
            </div>
            <button class="mini btn-show-briefing">Instructions & Science</button>
          </div>

          <div class="game-workspace"></div>
        </div>
      </main>

      <div class="lab-modal-veil" hidden>
        <div class="lab-modal-box">
          <h3 class="modal-title">--</h3>
          <div class="modal-content"></div>
          <div class="modal-actions">
            <button class="solid btn-modal-close">Got It</button>
          </div>
        </div>
      </div>
    </div>
  `)),a=v=>r.querySelector(v),o=a(".lab-hub-view"),l=a(".lab-game-view"),c=a(".game-workspace"),h=a(".activity-grid"),u=a(".lab-modal-veil"),d=a(".modal-title"),p=a(".modal-content"),_=a(".modal-actions");async function g(){i=await qf();const v=xM(i),w=_M(v);a(".badge-icon").textContent=w.badge,a(".badge-title").textContent=w.title,a(".total-score-val").textContent=`${v} / 1500 PTS`,f()}function f(){h.innerHTML=rc.map(v=>{const w=i[v.id]??{},E=w.beginner?.score??0,T=w.advanced?.score??0,R=w.beginner?.stars??0,M=w.advanced?.stars??0,y=P=>"★".repeat(P)+"☆".repeat(3-P);return`
        <div class="act-card" data-act="${v.id}" style="--accent: ${v.accent}">
          <div class="act-card-head">
            <span class="act-icon">${v.icon}</span>
            <div class="act-meta">
              <span class="act-category">${v.category}</span>
              <h3 class="act-name">${v.name}</h3>
            </div>
          </div>
          <p class="act-tagline">${v.tagline}</p>
          <div class="act-scores-row">
            <div class="score-pill">
              <span class="pill-label">Beginner</span>
              <b class="pill-val">${E>0?`${E} pts ${y(R)}`:"Incomplete"}</b>
            </div>
            <div class="score-pill">
              <span class="pill-label">Advanced</span>
              <b class="pill-val">${T>0?`${T} pts ${y(M)}`:"Incomplete"}</b>
            </div>
          </div>
          <button class="solid btn-launch-act" data-act="${v.id}">Enter Simulation</button>
        </div>
      `}).join(""),h.querySelectorAll(".btn-launch-act").forEach(v=>{v.onclick=()=>{const w=v.dataset.act;m(w,"beginner")}})}function m(v,w="beginner"){if(e=rc.find(T=>T.id===v),!e)return;n=w,t?.destroy&&(t.destroy(),t=null),o.hidden=!0,l.hidden=!1,a(".active-game-title").textContent=e.name,a(".active-game-concept").textContent=e.concept,a('.btn-diff[data-d="beginner"]').classList.toggle("on",n==="beginner"),a('.btn-diff[data-d="advanced"]').classList.toggle("on",n==="advanced"),c.innerHTML="";const E=AM[v];E&&(t=new E(c,{difficulty:n,onComplete:b}))}async function b(v){const{activityId:w,difficulty:E,score:T,stars:R,summary:M}=v;await vM(w,E,T,{summary:M}),await g(),d.textContent=`CHALLENGE COMPLETED: ${e.name.toUpperCase()}`;const y="★".repeat(R)+"☆".repeat(Math.max(0,3-R));p.innerHTML=`
      <div class="completion-box">
        <div class="completion-stars">${y}</div>
        <div class="completion-score">+${T} PTS AWARDED</div>
        <p class="completion-summary">${M}</p>
        <div class="completion-science">
          <strong>Scientific Debriefing:</strong> ${e.briefing}
        </div>
      </div>
    `,_.innerHTML=`
      ${E==="beginner"?'<button class="solid btn-modal-next">Proceed to Advanced Difficulty</button>':'<button class="solid btn-modal-hub">Return to Lab Hub</button>'}
      <button class="mini btn-modal-replay">Replay Challenge</button>
    `,u.hidden=!1;const P=_.querySelector(".btn-modal-next");P&&(P.onclick=()=>{u.hidden=!0,m(e.id,"advanced")});const I=_.querySelector(".btn-modal-hub");I&&(I.onclick=()=>{u.hidden=!0,x()});const C=_.querySelector(".btn-modal-replay");C&&(C.onclick=()=>{u.hidden=!0,m(e.id,n)})}function x(){t?.destroy&&(t.destroy(),t=null),l.hidden=!0,o.hidden=!1,g()}return a(".btn-back-hub").onclick=()=>x(),a('.btn-diff[data-d="beginner"]').onclick=()=>{n!=="beginner"&&m(e.id,"beginner")},a('.btn-diff[data-d="advanced"]').onclick=()=>{n!=="advanced"&&m(e.id,"advanced")},a(".btn-show-briefing").onclick=()=>{e&&(d.textContent=e.name,p.innerHTML=`
      <div class="briefing-box">
        <h4>Core Scientific Concept</h4>
        <p>${e.concept}</p>
        <h4>Educational Briefing</h4>
        <p>${e.briefing}</p>
        <h4>Instructions (${n.toUpperCase()})</h4>
        <p>${n==="beginner"?"Beginner mode provides guided telemetry, visual tolerances, and step-by-step assistance.":"Advanced mode introduces real-world spaceflight constraints: obstacle trajectories, communication latency, dust accumulation, and emergency system failures."}</p>
      </div>
    `,_.innerHTML='<button class="solid btn-modal-close">Return to Simulation</button>',u.hidden=!1,_.querySelector(".btn-modal-close").onclick=()=>{u.hidden=!0})},a(".btn-modal-close").onclick=()=>{u.hidden=!0},a(".lab-back").onclick=()=>{t?.destroy&&(t.destroy(),t=null),s.goTo("menu")},g(),()=>{t?.destroy&&(t.destroy(),t=null)}}const Ke=new cx;await Ke.init(document.getElementById("gl"));Ke.register("menu",new dx);Ke.register("select",new Dy(Ke,s=>Ke.goTo("world",{world:s})));Ke.register("lab",new rM);const Xf=new iM(Ke);Ke.register("world",Xf);let cr=null;Ke.bus.on("scene",({name:s,params:t})=>{cr?.(),cr=null,s==="menu"&&uM(Ke),s==="select"&&(cr=dM(Ke)),s==="lab"&&(cr=CM(Ke)),s==="world"&&(cr=gM(Ke,Xf))});Ke.goTo("menu");
