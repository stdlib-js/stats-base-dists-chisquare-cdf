// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,e=Object.prototype,t=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,o=e.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(f.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,e){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function v(r){return r!=r}var l=Number.POSITIVE_INFINITY,y=Number.NEGATIVE_INFINITY;function s(r){return r===l||r===y}function p(r){return Math.abs(r)}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var N=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var d=w&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,u,i;if(null==r)return N.call(r);e=r[h],i=h,n=null!=(u=r)&&b.call(u,i);try{r[h]=void 0}catch(n){return N.call(r)}return t=N.call(r),n?r[h]=e:delete r[h],t}:function(r){return N.call(r)},m="function"==typeof Uint32Array;var A="function"==typeof Uint32Array?Uint32Array:null;var _,g="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,e;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(m&&e instanceof Uint32Array||"[object Uint32Array]"===d(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var U=_,x="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null;var I,k="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,e;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),e=n,r=(x&&e instanceof Float64Array||"[object Float64Array]"===d(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var O=I,S="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var E,T="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,e;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),e=n,r=(S&&e instanceof Uint8Array||"[object Uint8Array]"===d(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H=E,V="function"==typeof Uint16Array;var G="function"==typeof Uint16Array?Uint16Array:null;var P,L="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,e;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),e=n,r=(V&&e instanceof Uint16Array||"[object Uint16Array]"===d(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,W={uint16:P,uint8:H};(M=new W.uint16(1))[0]=4660;var Y=52===new W.uint8(M.buffer)[0],q=!0===Y?1:0,C=new O(1),R=new U(C.buffer);function z(r){return C[0]=r,R[q]}var B=!0===Y?1:0,D=new O(1),J=new U(D.buffer);function K(r,n){return D[0]=r,J[B]=n>>>0,D[0]}var Q=.6931471803691238,X=1.9082149292705877e-10;function Z(r){var n,e,t,u,i,f,o,a,c,l,s,p;return 0===r?y:v(r)||r<0?NaN:(i=0,(e=z(r))<1048576&&(i-=54,e=z(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(a=(e&=1048575)+614244&1048576|0)>>20|0,o=(r=K(r,e|1072693248^a))-1,(1048575&2+e)<3?0===o?0===i?0:i*Q+i*X:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*Q-(f-i*X-o)):(a=e-398458|0,c=440401-e|0,u=(s=(p=(l=o/(2+o))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),f=t+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-l*(n+f)):i*Q-(n-(l*(n+f)+i*X)-o)):0===i?o-l*(o-f):i*Q-(l*(o-f)-i*X-o))))}var $=Math.floor,rr=Math.ceil;function nr(r){return r<0?rr(r):$(r)}function er(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),t+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))}var tr=-.16666666666666632;function ur(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(tr+u*e):r-(u*(.5*n-t*e)-n-t*tr)}var ir,fr,or=!0===Y?0:1,ar=new O(1),cr=new U(ar.buffer);!0===Y?(ir=1,fr=0):(ir=0,fr=1);var vr={HIGH:ir,LOW:fr},lr=new O(1),yr=new U(lr.buffer),sr=vr.HIGH,pr=vr.LOW;function wr(r,n){return yr[sr]=r,yr[pr]=n,lr[0]}var Nr,br;!0===Y?(Nr=1,br=0):(Nr=0,br=1);var hr={HIGH:Nr,LOW:br},dr=new O(1),mr=new U(dr.buffer),Ar=hr.HIGH,_r=hr.LOW;function gr(r,n){return dr[0]=n,r[0]=mr[Ar],r[1]=mr[_r],r}function Ur(r,n){return 1===arguments.length?gr([0,0],r):gr(r,n)}var xr=[0,0];function jr(r,n){var e,t;return Ur(xr,r),e=xr[0],e&=2147483647,t=z(n),wr(e|=t&=2147483648,xr[1])}function Ir(r,n,e,t){return v(r)||s(r)?(n[t]=r,n[t+e]=0,n):0!==r&&p(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}c((function(r){return Ir(r,[0,0],1,0)}),"assign",Ir);var kr=[0,0],Or=[0,0];function Sr(r,n){var e,t;return 0===n||0===r||v(r)||s(r)?r:(Ir(r,kr,1,0),n+=kr[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-1023|0}(r=kr[0]),n<-1074?jr(0,r):n>1023?r<0?y:l:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,Ur(Or,r),e=Or[0],e&=2148532223,t*wr(e|=n+1023<<20,Or[1])))}function Fr(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Er=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Tr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Hr=5.960464477539063e-8,Vr=Fr(20),Gr=Fr(20),Pr=Fr(20),Lr=Fr(20);function Mr(r,n,e,t,u,i,f,o,a){var c,v,l,y,s,p,w,N,b;for(y=i,b=t[e],N=e,s=0;N>0;s++)v=Hr*b|0,Lr[s]=b-16777216*v|0,b=t[N-1]+v,N-=1;if(b=Sr(b,u),b-=8*$(.125*b),b-=w=0|b,l=0,u>0?(w+=s=Lr[e-1]>>24-u,Lr[e-1]-=s<<24-u,l=Lr[e-1]>>23-u):0===u?l=Lr[e-1]>>23:b>=.5&&(l=2),l>0){for(w+=1,c=0,s=0;s<e;s++)N=Lr[s],0===c?0!==N&&(c=1,Lr[s]=16777216-N):Lr[s]=16777215-N;if(u>0)switch(u){case 1:Lr[e-1]&=8388607;break;case 2:Lr[e-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=Sr(1,u)))}if(0===b){for(N=0,s=e-1;s>=i;s--)N|=Lr[s];if(0===N){for(p=1;0===Lr[i-p];p++);for(s=e+1;s<=e+p;s++){for(a[o+s]=Er[f+s],v=0,N=0;N<=o;N++)v+=r[N]*a[o+(s-N)];t[s]=v}return Mr(r,n,e+=p,t,u,i,f,o,a)}}if(0===b)for(e-=1,u-=24;0===Lr[e];)e-=1,u-=24;else(b=Sr(b,-u))>=16777216?(v=Hr*b|0,Lr[e]=b-16777216*v|0,u+=24,Lr[e+=1]=v):Lr[e]=0|b;for(v=Sr(1,u),s=e;s>=0;s--)t[s]=v*Lr[s],v*=Hr;for(s=e;s>=0;s--){for(v=0,p=0;p<=y&&p<=e-s;p++)v+=Tr[p]*t[s+p];Pr[e-s]=v}for(v=0,s=e;s>=0;s--)v+=Pr[s];for(n[0]=0===l?v:-v,v=Pr[0]-v,s=1;s<=e;s++)v+=Pr[s];return n[1]=0===l?v:-v,7&w}function Wr(r,n,e,t){var u,i,f,o,a,c,v;for(4,(i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),c=i-(f=t-1),v=f+4,a=0;a<=v;a++)Vr[a]=c<0?0:Er[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Vr[f+(a-c)];Gr[a]=u}return 4,Mr(r,n,4,Gr,o,4,i,f,Vr)}var Yr=Math.round;function qr(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=Yr(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(z(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(z(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t}var Cr=1.5707963267341256,Rr=6077100506506192e-26,zr=2*Rr,Br=4*Rr,Dr=[0,0,0],Jr=[0,0];function Kr(r,n){var e,t,u,i,f,o,a;if((u=2147483647&z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?qr(r,u,n):u<=1073928572?r>0?(a=r-Cr,n[0]=a-Rr,n[1]=a-n[0]-Rr,1):(a=r+Cr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-1):r>0?(a=r-2*Cr,n[0]=a-zr,n[1]=a-n[0]-zr,2):(a=r+2*Cr,n[0]=a+zr,n[1]=a-n[0]+zr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?qr(r,u,n):r>0?(a=r-3*Cr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Cr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?qr(r,u,n):r>0?(a=r-4*Cr,n[0]=a-Br,n[1]=a-n[0]-Br,4):(a=r+4*Cr,n[0]=a+Br,n[1]=a-n[0]+Br,-4);if(u<1094263291)return qr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return ar[0]=r,cr[or]}(r),a=wr(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)Dr[f]=0|a,a=16777216*(a-Dr[f]);for(Dr[2]=a,i=3;0===Dr[i-1];)i-=1;return o=Wr(Dr,Jr,t,i),r<0?(n[0]=-Jr[0],n[1]=-Jr[1],-o):(n[0]=Jr[0],n[1]=Jr[1],o)}var Qr=[0,0];function Xr(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1044381696?1:er(r,0);if(n>=2146435072)return NaN;switch(3&Kr(r,Qr)){case 0:return er(Qr[0],Qr[1]);case 1:return-ur(Qr[0],Qr[1]);case 2:return-er(Qr[0],Qr[1]);default:return ur(Qr[0],Qr[1])}}var Zr=[0,0];function $r(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ur(r,0);if(n>=2146435072)return NaN;switch(3&Kr(r,Zr)){case 0:return ur(Zr[0],Zr[1]);case 1:return er(Zr[0],Zr[1]);case 2:return-ur(Zr[0],Zr[1]);default:return-er(Zr[0],Zr[1])}}var rn=3.141592653589793;var nn=1.4616321449683622,en=1.4616321449683622;function tn(r){var n,e,t,u,i,f,o,a,c,y,w,N,b;if(v(r)||s(r))return r;if(0===r)return l;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Z(r);if(n){if(r>=4503599627370496)return l;if(c=function(r){var n,e;return v(r)||s(r)?NaN:0===(n=p(e=r%2))||1===n?jr(0,e):n<.25?$r(rn*e):n<.75?jr(Xr(rn*(n=.5-n)),e):n<1.25?(e=jr(1,e)-e,$r(rn*e)):n<1.75?-jr(Xr(rn*(n-=1.5)),e):(e-=jr(2,e),$r(rn*e))}(r),0===c)return l;e=Z(rn/p(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(b=-Z(r),r>=nn-1+.27?(w=1-r,t=0):r>=nn-1-.27?(w=r-(en-1),t=1):(w=r,t=2)):(b=0,r>=nn+.27?(w=2-r,t=0):r>=nn-.27?(w=r-en,t=1):(w=r-1,t=2)),t){case 0:f=.07721566490153287+(N=w*w)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(N),i=N*(.3224670334241136+N*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(N)),b+=(o=w*f+i)-.5*w;break;case 1:f=.48383612272381005+(y=(N=w*w)*w)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),i=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,u=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),b+=-.12148629053584961+(o=N*f-(-3638676997039505e-33-y*(i+w*u)));break;case 2:f=w*(w*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(w)-.07721566490153287),i=1+w*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(w),b+=-.5*w+f/i}else if(r<8)switch(o=(w=r-(t=nr(r)))*(w*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(w)-.07721566490153287),a=1+w*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(w),b=.5*w+o/a,N=1,t){case 7:N*=w+6;case 6:N*=w+5;case 5:N*=w+4;case 4:N*=w+3;case 3:b+=Z(N*=w+2)}else r<0x400000000000000?(c=Z(r),y=.4189385332046727+(N=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(w=N*N),b=(r-.5)*(c-1)+y):b=r*(Z(r)-1);return n&&(b=e-b),b}function un(r){return $(r)===r}function fn(r){return 0===r&&1/r===y}function on(r){return un(r/2)}function an(r){return on(r>0?r-1:r+1)}var cn=Math.sqrt,vn=!0===Y?0:1,ln=new O(1),yn=new U(ln.buffer);function sn(r,n){return ln[0]=r,yn[vn]=n>>>0,ln[0]}function pn(r){return 0|r}var wn=[1,1.5],Nn=[0,.5849624872207642],bn=[0,1.350039202129749e-8];var hn=1e300,dn=[0,0],mn=[0,0];function An(r,n){var e,t,u,i,f,o,a,c,w,N,b,h,d,m;if(v(r)||v(n))return NaN;if(Ur(dn,n),f=dn[0],0===dn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return cn(r);if(-.5===n)return 1/cn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:p(r)<1==(n===l)?0:l}(r,n)}if(Ur(dn,r),i=dn[0],0===dn[1]){if(0===i)return function(r,n){return n===y?l:n===l?0:n>0?an(n)?r:0:an(n)?jr(l,r):l}(r,n);if(1===r)return 1;if(-1===r&&an(n))return-1;if(s(r))return r===y?An(-0,-n):n<0?0:l}if(r<0&&!1===un(n))return(r-r)/(r-r);if(u=p(r),e=2147483647&i|0,t=2147483647&f|0,a=f>>>31|0,o=(o=i>>>31|0)&&an(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&z(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===a?o*hn*hn:1e-300*o*1e-300;if(e>1072693248)return 0===a?o*hn*hn:1e-300*o*1e-300;b=function(r,n){var e,t,u,i,f,o;return e=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=sn(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r}(mn,u)}else b=function(r,n,e){var t,u,i,f,o,a,c,v,l,y,s,p,w,N,b,h,d,m,A,_,g;return m=0,e<1048576&&(m-=53,e=z(n*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,e-=1048576),f=sn(u=(h=(n=K(n,e))-(c=wn[_]))*(d=1/(n+c)),0),t=524288+(e>>1|536870912),a=K(0,t+=_<<18),b=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=sn(a=3+(i=f*f)+(b+=(o=d*(h-f*a-f*(n-(a-c))))*(f+u)),0),w=(s=-7.028461650952758e-9*(l=sn(l=(h=f*a)+(d=o*a+(b-(a-3-i))*u),0))+.9617966939259756*(d-(l-h))+bn[_])-((p=sn(p=(y=.9617967009544373*l)+s+(v=Nn[_])+(N=m),0))-N-v-y),r[0]=p,r[1]=w,r}(mn,u,e);if(N=(n-(c=sn(n,0)))*b[0]+n*b[1],w=c*b[0],Ur(dn,h=N+w),d=pn(dn[0]),m=pn(dn[1]),d>=1083179008){if(0!=(d-1083179008|m))return o*hn*hn;if(N+8008566259537294e-32>h-w)return o*hn*hn}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|m))return 1e-300*o*1e-300;if(N<=h-w)return 1e-300*o*1e-300}return h=function(r,n,e){var t,u,i,f,o,a,c,v,l,y,s;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(t=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=i=K(0,t)),r=pn(r=z(c=1-((c=(f=.6931471824645996*(i=sn(i=e+n,0)))+(o=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-f))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Sr(c,v):K(c,r)}(d,w,N),o*h}function _n(r){var n;return v(r)||r===l?r:r===y?0:r>709.782712893384?l:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,e){var t,u,i,f;return Sr(1-(n-(t=r-n)*(i=t-(u=t*t)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(n=nr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function gn(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=_n(r),2.5066282746310007*(e=r>143.01608?(t=An(r,.5*r-.25))*(t/e):An(r,r-.5)/e)*n}function Un(r,n){return n/((1+.5772156649015329*r)*r)}function xn(r){var n,e,t,u;if(un(r)&&r<0||r===y||v(r))return NaN;if(0===r)return fn(r)?y:l;if(r>171.61447887182297)return l;if(r<-170.5674972726612)return 0;if((e=p(r))>33)return r>=0?gn(r):(n=0==(1&(t=$(e)))?-1:1,(u=e-t)>.5&&(u=e-(t+=1)),u=e*$r(rn*u),n*rn/(p(u)*gn(e)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Un(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Un(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var jn=17976931348623157e292;var In=.8450629115104675;function kn(r){var n,e,t,u,i,f,o,a;if(v(r))return NaN;if(r===l)return 0;if(r===y)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(u=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),i=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),f=u/i,r<.25?1-(r+r*f):(u=r*f,.5-(u+=r-.5)));if(e<1.25)return o=(i=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,a=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),n?1+In+o/a:1-In-o/a;if(e<28){if(i=1/(e*e),e<2.857142857142857)u=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;u=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return u=_n(-(t=sn(e,0))*t-.5625)*_n((t-e)*(t+e)+u/i),n?2-u/e:u/e}return n?2:0}function On(r,n){var e;return e=r*Z(n),n>=1?e<709.782712893384&&-n>-708.3964185322641?An(n,r)*_n(-n):r>=1?An(n/_n(n/r),r):_n(e-n):e>-708.3964185322641?An(n,r)*_n(-n):n/r<709.782712893384?An(n/_n(n/r),r):_n(e-n)}function Sn(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e}c(Sn,"factory",(function(r){var n,e,t,u;if(r.length>500)return function(n){return Sn(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var Fn=[0,0,0,0,0,0,0,0,0,0];var En=eval;function Tn(){var r;try{En('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r}var Hn=2220446049250313e-31;var Vn=Tn()?function(r,n){var e,t,u,i,f;if(f={},arguments.length>1&&(f=n),e=f.tolerance||Hn,u=f.maxTerms||1e6,i=f.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(p(e*(i+=t))>=p(t)||0==--u)break}else do{i+=t=r()}while(p(e*i)<p(t)&&--u);return i}:function(r,n){var e,t,u,i,f;f={},arguments.length>1&&(f=n),e=f.tolerance||Hn,u=f.maxTerms||1e6,i=f.initialValue||0;do{i+=t=r()}while(p(e*i)<p(t)&&--u);return i};function Gn(r,n,e){var t;return e=e||0,t=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}}(r,n),Vn(t,{initialValue:e})}var Pn=.6931471803691238,Ln=1.9082149292705877e-10;function Mn(r){var n,e,t,u,i,f,o,a,c,s;if(r<-1||v(r))return NaN;if(-1===r)return y;if(r===l)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,u=r,e=1)}return 0!==s&&(t<9007199254740992?(i=(s=((e=z(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(s=((e=z(c=r))>>20)-1023,i=0),(e&=1048575)<434334?c=K(c,1072693248|e):(s+=1,c=K(c,1071644672|e),e=1048576-e>>2),u=c-1),n=.5*u*u,0===e?0===u?s*Pn+(i+=s*Ln):s*Pn-((a=n*(1-.6666666666666666*u))-(s*Ln+i)-u):(a=(o=(f=u/(2+u))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?u-(n-f*(n+a)):s*Pn-(n-(f*(n+a)+(s*Ln+i))-u))}function Wn(r){return 0===r&&1/r===l}function Yn(r,n){var e,t,u,i;if(2===(e=arguments.length))return v(r)||v(n)?NaN:r===l||n===l?l:r===n&&0===r?Wn(r)?r:n:r>n?r:n;for(t=y,i=0;i<e;i++){if(v(u=arguments[i])||u===l)return u;(u>t||u===t&&0===u&&Wn(u))&&(t=u)}return t}function qn(r,n){var e,t,u,i;if(2===(e=arguments.length))return v(r)||v(n)?NaN:r===y||n===y?y:r===n&&0===r?fn(r)?r:n:r<n?r:n;for(t=l,i=0;i<e;i++){if(v(u=arguments[i])||u===y)return u;(u<t||u===t&&0===u&&fn(u))&&(t=u)}return t}function Cn(r,n){var e,t,u,i,f,o,a,c,v,l;return a=(n-r-10.900511+.5)/(u=r+10.900511-.5),r<1?n<=-708.3964185322641?_n(r*Z(n)-n-tn(r)):An(n,r)*_n(-n)/xn(r):(p(a*a*r)<=100&&r>150?e=_n(e=r*(Mn(a)-a)+-10.400511*n/u):qn(i=r*Z(n/u),f=r-n)<=-708.3964185322641||Yn(i,f)>=709.782712893384?(t=f/r,qn(i,f)/2>-708.3964185322641&&Yn(i,f)/2<709.782712893384?e=(o=An(n/u,r/2)*_n(f/2))*o:qn(i,f)/4>-708.3964185322641&&Yn(i,f)/4<709.782712893384&&n>r?(e=(o=An(n/u,r/4)*_n(f/4))*o,e*=e):e=t>-708.3964185322641&&t<709.782712893384?An(n*_n(t)/u,r):_n(i+f)):e=An(n/u,r)*_n(f),e*=cn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(v=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(v=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),v/l)))}var Rn=.6931471803691238,zn=1.9082149292705877e-10;function Bn(r){var n,e,t,u,i,f,o,a,c,s,p,w;if(r===l||v(r))return r;if(r===y)return-1;if(0===r)return r;if(r<0?(e=!0,o=-r):(e=!1,o=r),o>=38.816242111356935){if(e)return-1;if(o>=709.782712893384)return l}if(i=0|z(o),o>.34657359027997264)o<1.0397207708399179?e?(t=r+Rn,u=-zn,w=-1):(t=r-Rn,u=zn,w=1):(w=e?1.4426950408889634*r-.5:1.4426950408889634*r+.5,t=r-(s=w|=0)*Rn,u=s*zn),c=t-(r=t-u)-u;else{if(i<1016070144)return r;w=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((f-(s=3-f*n))/(6-r*s)),0===w?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===w?.5*(r-p)-.5:1===w?r<-.25?-2*(p-(r+.5)):1+2*(r-p):w<=-2||w>56?(o=K(o=1-(p-r),t=z(o)+(w<<20)|0))-1:(s=1,w<20?o=(s=K(s,t=1072693248-(2097152>>w)|0))-(p-r):(o=r-(p+(s=K(s,t=1023-w<<20|0))),o+=1),K(o,t=z(o)+(w<<20)|0)))}function Dn(r,n,e){var t,u,i,f,o,a,c;if(r<Hn)return-Z(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=Z(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*(f=0===(o=e)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-Z(r),e=n,n=r,r+=1),r<=1.5?(i=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)}(n),u+=.5281534194946289*(t=n*e)+t*i):(i=e*n,f=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)}(-e),u+=.45201730728149414*i+i*f)}function Jn(r,n,e){var t,u,i,f;return t=function(r){return v(r)?NaN:r<0?r<-.5?xn(1+r)-1:Bn(-Mn(r)+Dn(r+2,r+1,r)):r<2?Bn(Dn(r+1,r,r-1)):xn(1+r)-1}(r),u=(t+1)/r,i=function(r,n){var e;if(v(r)||v(n))return NaN;if(0===n)return 0;if(0===r)return-1;if(r<0&&n%2==0&&(r=-r),r>0){if((p(n*(r-1))<.5||p(n)<.2)&&(e=Z(r)*n)<.5)return Bn(e)}else if(nr(n)!==n)return NaN;return An(r,n)-1}(n,r),t-=i,t/=r,f=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}}(r,n),t=-(i+=1)*Vn(f,{initialValue:((e?u:0)-t)/i}),e&&(t=-t),[t,u]}function Kn(r,n,e){var t,u,i,f,o,a,c;if(f=(c=(t="function"==typeof r.next)?r.next().value:r())[1],i=c[0],0===f&&(f=11754943508222875e-54),o=f,a=0,!0===t)do{(c=r.next().value)&&(0===(a=c[1]+c[0]*a)&&(a=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),f*=u=o*(a=1/a))}while(p(u-1)>n&&--e);else do{(c=r())&&(0===(a=c[1]+c[0]*a)&&(a=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),f*=u=o*(a=1/a))}while(c&&p(u-1)>n&&--e);return i/f}function Qn(r,n,e){var t,u,i,f,o,a;if(0===(i=(a=(t="function"==typeof r.next)?r.next().value:r())[1])&&(i=11754943508222875e-54),f=i,o=0,!0===t)do{(a=r.next().value)&&(0===(o=a[1]+a[0]*o)&&(o=11754943508222875e-54),0===(f=a[1]+a[0]/f)&&(f=11754943508222875e-54),i*=u=f*(o=1/o))}while(a&&p(u-1)>n&&--e);else do{(a=r())&&(0===(o=a[1]+a[0]*o)&&(o=11754943508222875e-54),0===(f=a[1]+a[0]/f)&&(f=11754943508222875e-54),i*=u=f*(o=1/o))}while(a&&p(u-1)>n&&--e);return i}function Xn(r,n,e){var t,u,i,f,o,a;o=(a=r())[1],u=a[0],0===o&&(o=11754943508222875e-54),i=o,f=0;do{(a=r())&&(0===(f=a[1]+a[0]*f)&&(f=11754943508222875e-54),0===(i=a[1]+a[0]/i)&&(i=11754943508222875e-54),o*=t=i*(f=1/f))}while(a&&p(t-1)>n&&--e);return u/o}function Zn(r,n,e){var t,u,i,f,o;0===(f=(o=r())[1])&&(f=11754943508222875e-54),u=f,i=0;do{(o=r())&&(0===(i=o[1]+o[0]*i)&&(i=11754943508222875e-54),0===(u=o[1]+o[0]/u)&&(u=11754943508222875e-54),f*=t=u*(i=1/i))}while(o&&p(t-1)>n&&--e);return f}var $n=Tn()?function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||1e6,u=t.tolerance||Hn,t.keep?Qn(r,u,e):Kn(r,u,e)}:function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||Hn,e=t.maxIter||1e6,t.keep?Zn(r,u,e):Xn(r,u,e)};function re(r,n){var e=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}}(r,n);return 1/(n-r+1+$n(e))}function ne(r,n,e,t){var u,i,f,o,a,c,v,y,s,w,N,b,h;if(r<0||n<=0)return NaN;if(i=void 0===e||e,v=t,y=0,n>=170&&!i)return v&&4*n<r?(y=n*Z(r)-r,y+=Z(re(n,r))):!v&&n>4*r?(y=n*Z(r)-r,y+=Z(Gn(n,r,o=0)/n)):0===(y=ne(n,r,!0,v))?v?(y=Z(y=1+1/(12*n)+1/(288*n*n))-n+(n-.5)*Z(n),y+=Z(2.5066282746310007)):(y=n*Z(r)-r,y+=Z(Gn(n,r,o=0)/n)):y=Z(y)+tn(n),y>709.782712893384?l:_n(y);switch(n<30&&n<=r+1&&r<709.782712893384?a=!(s=(b=$(n))===n)&&.5===p(b-n):s=a=!1,s&&r>.6?(v=!v,f=0):a&&r>.2?(v=!v,f=1):r<1.4901161193847656e-8&&n>1?f=6:r<.5?f=-.4/Z(r)<n?2:3:r<1.1?f=.75*r<n?2:3:(c=!1,i&&n>20&&(w=p((r-n)/n),n>200?20/n>w*w&&(c=!0):w<.4&&(c=!0)),c?f=5:r-1/(3*r)<n?f=2:(f=4,v=!v)),f){case 0:y=function(r,n){var e,t,u;if(0!==(t=_n(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t}(n,r),!1===i&&(y*=xn(n));break;case 1:y=function(r,n){var e,t,u,i;if(0!==(u=kn(cn(n)))&&r>1){for(e=_n(-n)/cn(rn*n),e*=n,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u}(n,r),!1===i&&(y*=xn(n));break;case 2:0!==(y=i?Cn(n,r):On(n,r))&&(o=0,u=!1,v&&(o=i?1:xn(n),i||y>=1||jn*y>o?(o/=y,i||n<1||jn/n>o?(o*=-n,u=!0):o=0):o=0)),y*=Gn(n,r,o)/n,u&&(v=!1,y=-y);break;case 3:y=(N=Jn(n,r,v=!v))[0],h=N[1],v=!1,i&&(y/=h);break;case 4:0!==(y=i?Cn(n,r):On(n,r))&&(y*=re(n,r));break;case 5:y=function(r,n){var e,t,u,i,f;return i=r*(u=-Z(1+(t=(n-r)/r))+t),f=cn(2*u),n<r&&(f=-f),Fn[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(f),Fn[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(f),Fn[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(f),Fn[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(f),Fn[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(f),Fn[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(f),Fn[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(f),Fn[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(f),Fn[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(f),Fn[9]=-.0005967612901927463,e=Sn(Fn,1/r),e*=_n(-i)/cn(6.283185307179586*r),n<r&&(e=-e),e+kn(cn(i))/2}(n,r),r>=n&&(v=!v);break;case 6:y=i?An(r,n)/xn(n+1):An(r,n)/n,y*=1-n*r/(n+1)}return i&&y>1&&(y=1),v&&(y=(i?1:xn(n))-y),y}function ee(r,n,e){return v(r)||v(n)||v(e)||n<0||e<=0?NaN:0===n?r<0?0:1:r<=0?0:r===l?1:ne(r*e,n)}function te(r){return function(){return r}}function ue(r){return v(r)?te(NaN):function(n){if(v(n))return NaN;return n<r?0:1}}function ie(r,n){return v(r)||v(n)||r<0||n<=0?te(NaN):0===r?ue(0):function(e){if(e<=0)return 0;if(e===l)return 1;return ne(e*n,r)}}function fe(r,n){return ee(r,n/2,.5)}function oe(r){return ie(r/2,.5)}c((function(r,n){return v(r)||v(n)?NaN:r<n?0:1}),"factory",ue),c(ee,"factory",ie),c(fe,"factory",oe);export{fe as default,oe as factory};
//# sourceMappingURL=mod.js.map
