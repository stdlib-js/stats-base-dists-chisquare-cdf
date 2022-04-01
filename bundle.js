// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,t=Object.prototype,u=t.toString,i=t.__defineGetter__,f=t.__defineSetter__,o=t.__lookupGetter__,a=t.__lookupSetter__;var c=e,v=function(r,n,e){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((v="value"in e)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=e.value,r.__proto__=c):r[n]=e.value),l="get"in e,y="set"in e,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,e.get),y&&f&&f.call(r,n,e.set),r},l=n()?c:v;var y=function(r,n,e){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})};var s=function(r){return r!=r},p=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY,h=p,w=b;var N=function(r){return r===h||r===w};var d=function(r){return Math.abs(r)};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return m&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var U=function(r){return g.call(r)},x=Object.prototype.hasOwnProperty;var j=function(r,n){return null!=r&&x.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",k=j,O=I,S=_;var T=U,F=function(r){var n,e,t;if(null==r)return S.call(r);e=r[O],n=k(r,O);try{r[O]=void 0}catch(n){return S.call(r)}return t=S.call(r),n?r[O]=e:delete r[O],t},E=A()?F:T,H=E,V="function"==typeof Uint32Array;var G="function"==typeof Uint32Array?Uint32Array:null,P=function(r){return V&&r instanceof Uint32Array||"[object Uint32Array]"===H(r)},L=G;var M=function(){var r,n;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,4294967296,4294967297]),r=P(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var W="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},q=M()?W:Y,C=E,R="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null,B=function(r){return R&&r instanceof Float64Array||"[object Float64Array]"===C(r)},D=z;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D([1,3.14,-3.14,NaN]),r=B(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var K="function"==typeof Float64Array?Float64Array:void 0,Q=function(){throw new Error("not implemented")},X=J()?K:Q,Z=E,$="function"==typeof Uint8Array;var rr="function"==typeof Uint8Array?Uint8Array:null,nr=function(r){return $&&r instanceof Uint8Array||"[object Uint8Array]"===Z(r)},er=rr;var tr=function(){var r,n;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,256,257]),r=nr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ur="function"==typeof Uint8Array?Uint8Array:void 0,ir=function(){throw new Error("not implemented")},fr=tr()?ur:ir,or=E,ar="function"==typeof Uint16Array;var cr="function"==typeof Uint16Array?Uint16Array:null,vr=function(r){return ar&&r instanceof Uint16Array||"[object Uint16Array]"===or(r)},lr=cr;var yr=function(){var r,n;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,65536,65537]),r=vr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var sr,pr="function"==typeof Uint16Array?Uint16Array:void 0,br=function(){throw new Error("not implemented")},hr={uint16:yr()?pr:br,uint8:fr};(sr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(sr.buffer)[0],Nr=q,dr=!0===wr?1:0,mr=new X(1),Ar=new Nr(mr.buffer);var _r=function(r){return mr[0]=r,Ar[dr]},gr=q,Ur=!0===wr?1:0,xr=new X(1),jr=new gr(xr.buffer);var Ir=function(r,n){return xr[0]=r,jr[Ur]=n>>>0,xr[0]},kr=Ir;var Or=_r,Sr=kr,Tr=s,Fr=b,Er=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Hr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Vr=.6931471803691238,Gr=1.9082149292705877e-10,Pr=1048575;var Lr=function(r){var n,e,t,u,i,f,o,a,c,v,l;return 0===r?Fr:Tr(r)||r<0?NaN:(u=0,(e=Or(r))<1048576&&(u-=54,e=Or(r*=0x40000000000000)),e>=2146435072?r+r:(u+=(e>>20)-1023|0,u+=(o=(e&=Pr)+614244&1048576|0)>>20|0,f=(r=Sr(r,e|1072693248^o))-1,(Pr&2+e)<3?0===f?0===u?0:u*Vr+u*Gr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Vr-(i-u*Gr-f)):(o=e-398458|0,a=440401-e|0,t=(v=(l=(c=f/(2+f))*c)*l)*Er(v),i=l*Hr(v)+t,(o|=a)>0?(n=.5*f*f,0===u?f-(n-c*(n+i)):u*Vr-(n-(c*(n+i)+u*Gr)-f)):0===u?f-c*(f-i):u*Vr-(c*(f-i)-u*Gr-f))))},Mr=Math.floor,Wr=Math.ceil,Yr=Mr,qr=Wr;var Cr=function(r){return r<0?qr(r):Yr(r)};var Rr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},zr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Br=function(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*Rr(i),t+=u*u*zr(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))},Dr=-.16666666666666632;var Jr=function(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(Dr+u*e):r-(u*(.5*n-t*e)-n-t*Dr)},Kr=q,Qr=!0===wr?0:1,Xr=new X(1),Zr=new Kr(Xr.buffer);var $r,rn,nn=function(r){return Xr[0]=r,Zr[Qr]};!0===wr?($r=1,rn=0):($r=0,rn=1);var en=q,tn={HIGH:$r,LOW:rn},un=new X(1),fn=new en(un.buffer),on=tn.HIGH,an=tn.LOW;var cn,vn,ln=function(r,n){return fn[on]=r,fn[an]=n,un[0]},yn=ln;!0===wr?(cn=1,vn=0):(cn=0,vn=1);var sn=q,pn={HIGH:cn,LOW:vn},bn=new X(1),hn=new sn(bn.buffer),wn=pn.HIGH,Nn=pn.LOW;var dn=function(r,n){return bn[0]=n,r[0]=hn[wn],r[1]=hn[Nn],r};var mn=function(r,n){return 1===arguments.length?dn([0,0],r):dn(r,n)},An=mn,_n=An,gn=_r,Un=yn,xn=[0,0];var jn=function(r,n){var e,t;return _n(xn,r),e=xn[0],e&=2147483647,t=gn(n),Un(e|=t&=2147483648,xn[1])},In=N,kn=s,On=d;var Sn=function(r,n){return kn(n)||In(n)?(r[0]=n,r[1]=0,r):0!==n&&On(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Tn=function(r,n){return 1===arguments.length?Sn([0,0],r):Sn(r,n)},Fn=_r;var En=function(r){var n=Fn(r);return(n=(2146435072&n)>>>20)-1023|0},Hn=p,Vn=b,Gn=s,Pn=N,Ln=jn,Mn=Tn,Wn=En,Yn=An,qn=yn,Cn=[0,0],Rn=[0,0];var zn=function(r,n){var e,t;return 0===n||0===r||Gn(r)||Pn(r)?r:(Mn(Cn,r),n+=Cn[1],(n+=Wn(r=Cn[0]))<-1074?Ln(0,r):n>1023?r<0?Vn:Hn:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,Yn(Rn,r),e=Rn[0],e&=2148532223,t*qn(e|=n+1023<<20,Rn[1])))},Bn=zn;var Dn=function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e};var Jn=Mr,Kn=Bn,Qn=function(r){return Dn(0,r)},Xn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Zn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],$n=16777216,re=5.960464477539063e-8,ne=Qn(20),ee=Qn(20),te=Qn(20),ue=Qn(20);function ie(r,n,e,t,u,i,f,o,a){var c,v,l,y,s,p,b,h,w;for(y=i,w=t[e],h=e,s=0;h>0;s++)v=re*w|0,ue[s]=w-$n*v|0,w=t[h-1]+v,h-=1;if(w=Kn(w,u),w-=8*Jn(.125*w),w-=b=0|w,l=0,u>0?(b+=s=ue[e-1]>>24-u,ue[e-1]-=s<<24-u,l=ue[e-1]>>23-u):0===u?l=ue[e-1]>>23:w>=.5&&(l=2),l>0){for(b+=1,c=0,s=0;s<e;s++)h=ue[s],0===c?0!==h&&(c=1,ue[s]=16777216-h):ue[s]=16777215-h;if(u>0)switch(u){case 1:ue[e-1]&=8388607;break;case 2:ue[e-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Kn(1,u)))}if(0===w){for(h=0,s=e-1;s>=i;s--)h|=ue[s];if(0===h){for(p=1;0===ue[i-p];p++);for(s=e+1;s<=e+p;s++){for(a[o+s]=Xn[f+s],v=0,h=0;h<=o;h++)v+=r[h]*a[o+(s-h)];t[s]=v}return ie(r,n,e+=p,t,u,i,f,o,a)}}if(0===w)for(e-=1,u-=24;0===ue[e];)e-=1,u-=24;else(w=Kn(w,-u))>=$n?(v=re*w|0,ue[e]=w-$n*v|0,u+=24,ue[e+=1]=v):ue[e]=0|w;for(v=Kn(1,u),s=e;s>=0;s--)t[s]=v*ue[s],v*=re;for(s=e;s>=0;s--){for(v=0,p=0;p<=y&&p<=e-s;p++)v+=Zn[p]*t[s+p];te[e-s]=v}for(v=0,s=e;s>=0;s--)v+=te[s];for(n[0]=0===l?v:-v,v=te[0]-v,s=1;s<=e;s++)v+=te[s];return n[1]=0===l?v:-v,7&b}var fe=function(r,n,e,t){var u,i,f,o,a,c,v;for(4,(i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),c=i-(f=t-1),v=f+4,a=0;a<=v;a++)ne[a]=c<0?0:Xn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*ne[f+(a-c)];ee[a]=u}return 4,ie(r,n,4,ee,o,4,i,f,ne)},oe=Math.round,ae=_r;var ce=_r,ve=nn,le=yn,ye=fe,se=function(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=oe(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(ae(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(ae(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t},pe=1.5707963267341256,be=6077100506506192e-26,he=2*be,we=3*be,Ne=4*be,de=[0,0,0],me=[0,0];var Ae=function(r,n){var e,t,u,i,f,o,a;if((u=2147483647&ce(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?se(r,u,n):u<=1073928572?r>0?(a=r-pe,n[0]=a-be,n[1]=a-n[0]-be,1):(a=r+pe,n[0]=a+be,n[1]=a-n[0]+be,-1):r>0?(a=r-2*pe,n[0]=a-he,n[1]=a-n[0]-he,2):(a=r+2*pe,n[0]=a+he,n[1]=a-n[0]+he,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?se(r,u,n):r>0?(a=r-3*pe,n[0]=a-we,n[1]=a-n[0]-we,3):(a=r+3*pe,n[0]=a+we,n[1]=a-n[0]+we,-3):1075388923===u?se(r,u,n):r>0?(a=r-4*pe,n[0]=a-Ne,n[1]=a-n[0]-Ne,4):(a=r+4*pe,n[0]=a+Ne,n[1]=a-n[0]+Ne,-4);if(u<1094263291)return se(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=ve(r),a=le(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)de[f]=0|a,a=16777216*(a-de[f]);for(de[2]=a,i=3;0===de[i-1];)i-=1;return o=ye(de,me,t,i),r<0?(n[0]=-me[0],n[1]=-me[1],-o):(n[0]=me[0],n[1]=me[1],o)},_e=_r,ge=Br,Ue=Jr,xe=Ae,je=[0,0];var Ie=_r,ke=Br,Oe=Jr,Se=Ae,Te=[0,0];var Fe=function(r){var n;if(n=Ie(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Oe(r,0);if(n>=2146435072)return NaN;switch(3&Se(r,Te)){case 0:return Oe(Te[0],Te[1]);case 1:return ke(Te[0],Te[1]);case 2:return-Oe(Te[0],Te[1]);default:return-ke(Te[0],Te[1])}},Ee=3.141592653589793,He=s,Ve=N,Ge=function(r){var n;if(n=_e(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ge(r,0);if(n>=2146435072)return NaN;switch(3&xe(r,je)){case 0:return ge(je[0],je[1]);case 1:return-Ue(je[0],je[1]);case 2:return-ge(je[0],je[1]);default:return Ue(je[0],je[1])}},Pe=Fe,Le=d,Me=jn,We=Ee;var Ye=s,qe=N,Ce=d,Re=Lr,ze=Cr,Be=function(r){var n,e;return He(r)||Ve(r)?NaN:0===(n=Le(e=r%2))||1===n?Me(0,e):n<.25?Pe(We*e):n<.75?Me(Ge(We*(n=.5-n)),e):n<1.25?(e=Me(1,e)-e,Pe(We*e)):n<1.75?-Me(Ge(We*(n-=1.5)),e):(e-=Me(2,e),Pe(We*e))},De=p,Je=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Ke=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Qe=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Xe=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Ze=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},$e=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},rt=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},nt=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},et=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},tt=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},ut=1.4616321449683622,it=1.4616321449683622;var ft=function(r){var n,e,t,u,i,f,o,a;if(Ye(r)||qe(r))return r;if(0===r)return De;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Re(r);if(n){if(r>=4503599627370496)return De;if(0===(u=Be(r)))return De;e=Re(3.141592653589793/Ce(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-Re(r),r>=ut-1+.27?(f=1-r,t=0):r>=ut-1-.27?(f=r-(it-1),t=1):(f=r,t=2)):(a=0,r>=ut+.27?(f=2-r,t=0):r>=ut-.27?(f=r-it,t=1):(f=r-1,t=2)),t){case 0:a+=f*(.07721566490153287+(o=f*f)*Je(o))+o*(.3224670334241136+o*Ke(o))-.5*f;break;case 1:a+=-.12148629053584961+((o=f*f)*(.48383612272381005+(i=o*f)*Ze(i))-(-3638676997039505e-33-i*(i*$e(i)-.1475877229945939+f*(.06462494023913339+i*rt(i)))));break;case 2:a+=-.5*f+f*(f*nt(f)-.07721566490153287)/(1+f*et(f))}else if(r<8)switch(a=.5*(f=r-(t=ze(r)))+f*(f*Xe(f)-.07721566490153287)/(1+f*Qe(f)),o=1,t){case 7:o*=f+6;case 6:o*=f+5;case 5:o*=f+4;case 4:o*=f+3;case 3:a+=Re(o*=f+2)}else a=r<0x400000000000000?(r-.5)*((u=Re(r))-1)+(i=.4189385332046727+(o=1/r)*tt(f=o*o)):r*(Re(r)-1);return n&&(a=e-a),a},ot=Mr;var at=function(r){return ot(r)===r},ct=b;var vt=function(r){return 0===r&&1/r===ct},lt=at;var yt=function(r){return lt(r/2)};var st=function(r){return yt(r>0?r-1:r+1)},pt=Math.sqrt,bt=q,ht=!0===wr?0:1,wt=new X(1),Nt=new bt(wt.buffer);var dt=function(r,n){return wt[0]=r,Nt[ht]=n>>>0,wt[0]};var mt=function(r){return 0|r},At=st,_t=jn,gt=b,Ut=p;var xt=_r;var jt=d,It=p;var kt=_r,Ot=dt,St=kr,Tt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ft=1048576,Et=[1,1.5],Ht=[0,.5849624872207642],Vt=[0,1.350039202129749e-8];var Gt=dt,Pt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Lt=_r,Mt=kr,Wt=dt,Yt=mt,qt=Bn,Ct=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Rt=2147483647,zt=1048575,Bt=1048576;var Dt=s,Jt=st,Kt=N,Qt=at,Xt=pt,Zt=d,$t=An,ru=dt,nu=mt,eu=b,tu=p,uu=function(r,n){return n===gt?Ut:n===Ut?0:n>0?At(n)?r:0:At(n)?_t(Ut,r):Ut},iu=function(r,n){return(2147483647&xt(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},fu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:jt(r)<1==(n===It)?0:It},ou=function(r,n,e){var t,u,i,f,o,a,c,v,l,y,s,p,b,h,w,N,d,m,A,_;return m=0,e<Ft&&(m-=53,e=kt(n*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,e-=Ft),t=524288+(e>>1|536870912),o=(d=1/((n=St(n,e))+(c=Et[_])))*((N=n-c)-(f=Ot(u=N*d,0))*(a=St(0,t+=_<<18))-f*(n-(a-c))),w=(i=u*u)*i*Tt(i),a=Ot(a=3+(i=f*f)+(w+=o*(f+u)),0),b=(s=-7.028461650952758e-9*(l=Ot(l=(N=f*a)+(d=o*a+(w-(a-3-i))*u),0))+.9617966939259756*(d-(l-N))+Vt[_])-((p=Ot(p=(y=.9617967009544373*l)+s+(v=Ht[_])+(h=m),0))-h-v-y),r[0]=p,r[1]=b,r},au=function(r,n){var e,t,u,i,f;return e=(f=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Pt(u)))-((t=Gt(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r},cu=function(r,n,e){var t,u,i,f,o,a,c,v,l;return l=((v=r&Rt|0)>>20)-1023|0,c=0,v>1071644672&&(u=Mt(0,((c=r+(Bt>>l+1)>>>0)&~(zt>>(l=((c&Rt)>>20)-1023|0)))>>>0),c=(c&zt|Bt)>>20-l>>>0,r<0&&(c=-c),n-=u),o=(f=.6931471805599453*(e-((u=Wt(u=e+n,0))-n))+-1.904654299957768e-9*u)-((a=(i=.6931471824645996*u)+f)-i),t=a-(u=a*a)*Ct(u),r=Lt(a=1-(a*t/(t-2)-(o+a*o)-a)),r=Yt(r),a=(r+=c<<20>>>0)>>20<=0?qt(a,c):Mt(a,r)},vu=2147483647,lu=1083179008,yu=1e300,su=1e-300,pu=[0,0],bu=[0,0];var hu=function r(n,e){var t,u,i,f,o,a,c,v,l,y,s,p,b,h;if(Dt(n)||Dt(e))return NaN;if($t(pu,e),o=pu[0],0===pu[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return Xt(n);if(-.5===e)return 1/Xt(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(Kt(e))return fu(n,e)}if($t(pu,n),f=pu[0],0===pu[1]){if(0===f)return uu(n,e);if(1===n)return 1;if(-1===n&&Jt(e))return-1;if(Kt(n))return n===eu?r(-0,-e):e<0?0:tu}if(n<0&&!1===Qt(e))return(n-n)/(n-n);if(i=Zt(n),t=f&vu|0,u=o&vu|0,c=o>>>31|0,a=(a=f>>>31|0)&&Jt(e)?-1:1,u>1105199104){if(u>1139802112)return iu(n,e);if(t<1072693247)return 1===c?a*yu*yu:a*su*su;if(t>1072693248)return 0===c?a*yu*yu:a*su*su;s=au(bu,i)}else s=ou(bu,i,t);if(y=(e-(v=ru(e,0)))*s[0]+e*s[1],l=v*s[0],$t(pu,p=y+l),b=nu(pu[0]),h=nu(pu[1]),b>=lu){if(0!=(b-lu|h))return a*yu*yu;if(y+8008566259537294e-32>p-l)return a*yu*yu}else if((b&vu)>=1083231232){if(0!=(b-3230714880|h))return a*su*su;if(y<=p-l)return a*su*su}return a*(p=cu(b,l,y))},wu=hu;var Nu=Bn,du=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var mu=s,Au=Cr,_u=b,gu=p,Uu=function(r,n,e){var t,u,i;return i=(t=r-n)-(u=t*t)*du(u),Nu(1-(n-t*i/(2-i)-r),e)},xu=1.4426950408889634,ju=1/(1<<28);var Iu=function(r){var n;return mu(r)||r===gu?r:r===_u?0:r>709.782712893384?gu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ju?1+r:(n=Au(r<0?xu*r-.5:xu*r+.5),Uu(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};var ku=wu,Ou=Iu,Su=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Tu=s,Fu=at,Eu=vt,Hu=d,Vu=Mr,Gu=Fe,Pu=p,Lu=b,Mu=Ee,Wu=function(r){var n,e,t;return n=1+(n=1/r)*Su(n),e=Ou(r),2.5066282746310007*(e=r>143.01608?(t=ku(r,.5*r-.25))*(t/e):ku(r,r-.5)/e)*n},Yu=function(r,n){return n/((1+.5772156649015329*r)*r)},qu=function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)};var Cu=function(r){var n,e,t,u;if(Fu(r)&&r<0||r===Lu||Tu(r))return NaN;if(0===r)return Eu(r)?Lu:Pu;if(r>171.61447887182297)return Pu;if(r<-170.5674972726612)return 0;if((e=Hu(r))>33)return r>=0?Wu(r):(n=0==(1&(t=Vu(e)))?-1:1,(u=e-t)>.5&&(u=e-(t+=1)),u=e*Gu(Mu*u),n*Mu/(Hu(u)*Wu(e)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Yu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Yu(r,u);u/=r,r+=1}return 2===r?u:u*qu(r-=2)},Ru=709.782712893384,zu=Iu;var Bu=function(r,n){var e,t,u;if(0!==(t=zu(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t};var Du=s,Ju=Iu,Ku=dt,Qu=p,Xu=b,Zu=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},$u=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},ri=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},ni=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},ei=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},ti=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},ui=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},ii=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},fi=.8450629115104675;var oi=function(r){var n,e,t,u,i,f,o,a;if(Du(r))return NaN;if(r===Qu)return 0;if(r===Xu)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(f=(u=.12837916709551256+(t=r*r)*Zu(t))/(i=1+t*$u(t)),r<.25?1-(r+r*f):(u=r*f,.5-(u+=r-.5)));if(e<1.25)return o=(i=e-1)*ri(i)-.0023621185607526594,a=1+i*ni(i),n?1+fi+o/a:1-fi-o/a;if(e<28){if(i=1/(e*e),e<2.857142857142857)u=i*ei(i)-.009864944034847148,i=1+i*ti(i);else{if(r<-6)return 2;u=i*ui(i)-.0098649429247001,i=1+i*ii(i)}return t=Ku(e,0),u=Ju(-t*t-.5625)*Ju((t-e)*(t+e)+u/i),n?2-u/e:u/e}return n?2:0},ai=oi,ci=pt,vi=Iu;var li=function(r,n){var e,t,u,i;if(0!==(u=ai(ci(n)))&&r>1){for(e=vi(-n)/ci(3.141592653589793*n),e*=n,.5,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u},yi=-708.3964185322641,si=Iu,pi=wu,bi=Lr,hi=Ru,wi=yi;var Ni=function(r,n){var e;return e=r*bi(n),n>=1?e<hi&&-n>wi?pi(n,r)*si(-n):r>=1?pi(n/si(n/r),r):si(e-n):e>wi?pi(n,r)*si(-n):n/r<hi?pi(n/si(n/r),r):si(e-n)};var di=function(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e},mi=di;var Ai=di;y(Ai,"factory",(function(r){var n,e,t,u;if(r.length>500)return function(n){return mi(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var _i=Ai,gi=oi,Ui=pt,xi=Iu,ji=Lr,Ii=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333},ki=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852},Oi=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)},Si=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))},Ti=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117},Fi=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813},Ei=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)},Hi=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))},Vi=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094},Gi=[0,0,0,0,0,0,0,0,0,0];var Pi=function(r,n){var e,t,u,i,f;return i=r*(u=-ji(1+(t=(n-r)/r))+t),f=Ui(2*u),n<r&&(f=-f),Gi[0]=Ii(f),Gi[1]=ki(f),Gi[2]=Oi(f),Gi[3]=Si(f),Gi[4]=Ti(f),Gi[5]=Fi(f),Gi[6]=Ei(f),Gi[7]=Hi(f),Gi[8]=Vi(f),Gi[9]=-.0005967612901927463,e=_i(Gi,1/r),e*=xi(-i)/Ui(6.283185307179586*r),n<r&&(e=-e),e+=gi(Ui(i))/2},Li=eval;var Mi=function(){var r;try{Li('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r},Wi=Mi,Yi=2220446049250313e-31,qi=d,Ci=Yi,Ri=1e6;var zi=function(r,n){var e,t,u,i,f;if(f={},arguments.length>1&&(f=n),e=f.tolerance||Ci,u=f.maxTerms||Ri,i=f.initialValue||0,!0===("function"==typeof r.next)){for(t of r)if(qi(e*(i+=t))>=qi(t)||0==--u)break}else do{i+=t=r()}while(qi(e*i)<qi(t)&&--u);return i},Bi=d,Di=Yi,Ji=1e6;var Ki,Qi=function(r,n){var e,t,u,i,f;f={},arguments.length>1&&(f=n),e=f.tolerance||Di,u=f.maxTerms||Ji,i=f.initialValue||0;do{i+=t=r()}while(Bi(e*i)<Bi(t)&&--u);return i},Xi=zi,Zi=Qi;Ki=Wi()?Xi:Zi;var $i=Ki,rf=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}};var nf=function(r,n,e){var t;return e=e||0,t=rf(r,n),$i(t,{initialValue:e})};var ef=s,tf=_r,uf=kr,ff=p,of=b,af=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},cf=.6931471803691238,vf=1.9082149292705877e-10;var lf=function(r){var n,e,t,u,i,f,o,a,c,v;if(r<-1||ef(r))return NaN;if(-1===r)return of;if(r===ff)return r;if(0===r)return r;if(v=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,e=1)}return 0!==v&&(t<9007199254740992?(i=(v=((e=tf(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(v=((e=tf(c=r))>>20)-1023,i=0),(e&=1048575)<434334?c=uf(c,1072693248|e):(v+=1,c=uf(c,1071644672|e),e=1048576-e>>2),u=c-1),n=.5*u*u,0===e?0===u?v*cf+(i+=v*vf):v*cf-((a=n*(1-.6666666666666666*u))-(v*vf+i)-u):(a=(o=(f=u/(2+u))*f)*af(o),0===v?u-(n-f*(n+a)):v*cf-(n-(f*(n+a)+(v*vf+i))-u))},yf=p;var sf=function(r){return 0===r&&1/r===yf},pf=s,bf=b,hf=p;var wf=function(r,n){var e,t,u,i;if(2===(e=arguments.length))return pf(r)||pf(n)?NaN:r===hf||n===hf?hf:r===n&&0===r?sf(r)?r:n:r>n?r:n;for(t=bf,i=0;i<e;i++){if(pf(u=arguments[i])||u===hf)return u;(u>t||u===t&&0===u&&sf(u))&&(t=u)}return t},Nf=vt,df=s,mf=b,Af=p;var _f=function(r,n){var e,t,u,i;if(2===(e=arguments.length))return df(r)||df(n)?NaN:r===mf||n===mf?mf:r===n&&0===r?Nf(r)?r:n:r<n?r:n;for(t=Af,i=0;i<e;i++){if(df(u=arguments[i])||u===mf)return u;(u<t||u===t&&0===u&&Nf(u))&&(t=u)}return t},gf=function(r){var n,e;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),e=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),e=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/e)},Uf=ft,xf=Cu,jf=lf,If=pt,kf=d,Of=Iu,Sf=wu,Tf=wf,Ff=_f,Ef=Lr,Hf=Ru,Vf=yi,Gf=10.900511;var Pf=function(r,n){var e,t,u,i,f,o,a;return a=(n-r-Gf+.5)/(u=r+Gf-.5),r<1?n<=Vf?Of(r*Ef(n)-n-Uf(r)):Sf(n,r)*Of(-n)/xf(r):(kf(a*a*r)<=100&&r>150?(e=r*(jf(a)-a)+n*(.5-Gf)/u,e=Of(e)):(i=r*Ef(n/u),Ff(i,f=r-n)<=Vf||Tf(i,f)>=Hf?(t=f/r,Ff(i,f)/2>Vf&&Tf(i,f)/2<Hf?e=(o=Sf(n/u,r/2)*Of(f/2))*o:Ff(i,f)/4>Vf&&Tf(i,f)/4<Hf&&n>r?(e=(o=Sf(n/u,r/4)*Of(f/4))*o,e*=e):e=t>Vf&&t<Hf?Sf(n*Of(t)/u,r):Of(i+f)):e=Sf(n/u,r)*Of(f)),e*=If(u/2.718281828459045)/gf(r))};var Lf=s,Mf=_r,Wf=kr,Yf=p,qf=b,Cf=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},Rf=.6931471803691238,zf=1.9082149292705877e-10,Bf=1.4426950408889634;var Df=function(r){var n,e,t,u,i,f,o,a,c,v,l,y;if(r===Yf||Lf(r))return r;if(r===qf)return-1;if(0===r)return r;if(r<0?(e=!0,o=-r):(e=!1,o=r),o>=38.816242111356935){if(e)return-1;if(o>=709.782712893384)return Yf}if(i=0|Mf(o),o>.34657359027997264)o<1.0397207708399179?e?(t=r+Rf,u=-zf,y=-1):(t=r-Rf,u=zf,y=1):(y=e?Bf*r-.5:Bf*r+.5,t=r-(v=y|=0)*Rf,u=v*zf),c=t-(r=t-u)-u;else{if(i<1016070144)return r;y=0}return l=(a=r*(n=.5*r))*(((f=1+a*Cf(a))-(v=3-f*n))/(6-r*v)),0===y?r-(r*l-a):(l=r*(l-c)-c,l-=a,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(t=Mf(o=1-(l-r))+(y<<20)|0,(o=Wf(o,t))-1):(v=1,y<20?o=(v=Wf(v,t=1072693248-(2097152>>y)|0))-(l-r):(o=r-(l+(v=Wf(v,t=1023-y<<20|0))),o+=1),t=Mf(o)+(y<<20)|0,Wf(o,t)))},Jf=s,Kf=d,Qf=Df,Xf=Lr,Zf=wu,$f=Cr;var ro=Lr,no=function(r){var n,e;return 0===r?-.01803556856784494:((r<0?-r:r)<=1?(n=r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(r*(r*(0*r-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,e=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+-2.2335276320861708e-7*r))))))):(n=0+(r=1/r)*(r*(r*(r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+-.01803556856784494*r)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),e=r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+1*r))))))-2.2335276320861708e-7),n/e)},eo=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)},to=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)};var uo=Cu,io=Df,fo=lf,oo=s,ao=function(r,n,e){var t,u,i;if(r<2220446049250313e-31)return-ro(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=ro(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*no(e)}return r<1&&(u+=-ro(r),e=n,n=r,r+=1),u+=r<=1.5?.5281534194946289*(t=n*e)+t*(i=eo(n)):.45201730728149414*(i=e*n)+i*to(-e)};var co=function(r,n){var e;if(Jf(r)||Jf(n))return NaN;if(0===n)return 0;if(0===r)return-1;if(r<0&&n%2==0&&(r=-r),r>0){if((Kf(n*(r-1))<.5||Kf(n)<.2)&&(e=Xf(r)*n)<.5)return Qf(e)}else if($f(n)!==n)return NaN;return Zf(r,n)-1},vo=Ki,lo=function(r){return oo(r)?NaN:r<0?r<-.5?uo(1+r)-1:io(-fo(r)+ao(r+2,r+1,r)):r<2?io(ao(r+1,r,r-1)):uo(1+r)-1},yo=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}};var so=function(r,n,e){var t,u,i,f;return u=((t=lo(r))+1)/r,t-=i=co(n,r),t/=r,f=yo(r,n),t=-(i+=1)*vo(f,{initialValue:((e?u:0)-t)/i}),e&&(t=-t),[t,u]},po=11754943508222875e-54,bo=d,ho=po,wo=Yi,No=1e6;function mo(r,n,e){var t,u,i,f,o,a,c;if(f=(c=(t="function"==typeof r.next)?r.next().value:r())[1],i=c[0],0===f&&(f=ho),o=f,a=0,!0===t)do{(c=r.next().value)&&(0===(a=c[1]+c[0]*a)&&(a=ho),0===(o=c[1]+c[0]/o)&&(o=ho),f*=u=o*(a=1/a))}while(bo(u-1)>n&&--e);else do{(c=r())&&(0===(a=c[1]+c[0]*a)&&(a=ho),0===(o=c[1]+c[0]/o)&&(o=ho),f*=u=o*(a=1/a))}while(c&&bo(u-1)>n&&--e);return i/f}function Ao(r,n,e){var t,u,i,f,o,a;if(0===(i=(a=(t="function"==typeof r.next)?r.next().value:r())[1])&&(i=ho),f=i,o=0,!0===t)do{(a=r.next().value)&&(0===(o=a[1]+a[0]*o)&&(o=ho),0===(f=a[1]+a[0]/f)&&(f=ho),i*=u=f*(o=1/o))}while(a&&bo(u-1)>n&&--e);else do{(a=r())&&(0===(o=a[1]+a[0]*o)&&(o=ho),0===(f=a[1]+a[0]/f)&&(f=ho),i*=u=f*(o=1/o))}while(a&&bo(u-1)>n&&--e);return i}var _o=function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||No,u=t.tolerance||wo,t.keep?Ao(r,u,e):mo(r,u,e)},go=d,Uo=Yi,xo=po,jo=1e6;function Io(r,n,e){var t,u,i,f,o,a;o=(a=r())[1],u=a[0],0===o&&(o=xo),i=o,f=0;do{(a=r())&&(0===(f=a[1]+a[0]*f)&&(f=xo),0===(i=a[1]+a[0]/i)&&(i=xo),o*=t=i*(f=1/f))}while(a&&go(t-1)>n&&--e);return u/o}function ko(r,n,e){var t,u,i,f,o;0===(f=(o=r())[1])&&(f=xo),u=f,i=0;do{(o=r())&&(0===(i=o[1]+o[0]*i)&&(i=xo),0===(u=o[1]+o[0]/u)&&(u=xo),f*=t=u*(i=1/i))}while(o&&go(t-1)>n&&--e);return f}var Oo=function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||Uo,e=t.maxIter||jo,t.keep?ko(r,u,e):Io(r,u,e)},So=_o,To=Oo;var Fo=Wi()?So:To,Eo=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}};var Ho=ft,Vo=Mr,Go=Cu,Po=d,Lo=Iu,Mo=wu,Wo=Lr,Yo=17976931348623157e292,qo=Ru,Co=p,Ro=Bu,zo=li,Bo=Ni,Do=Pi,Jo=nf,Ko=Pf,Qo=so,Xo=function(r,n){var e=Eo(r,n);return 1/(n-r+1+Fo(e))};var Zo=function r(n,e,t,u){var i,f,o,a,c,v,l,y,s,p,b,h,w;if(n<0||e<=0)return NaN;if(f=void 0===t||t,l=u,y=0,e>=170&&!f)return l&&4*e<n?(y=e*Wo(n)-n,y+=Wo(Xo(e,n))):!l&&e>4*n?(y=e*Wo(n)-n,y+=Wo(Jo(e,n,a=0)/e)):0===(y=r(e,n,!0,l))?l?(y=Wo(y=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*Wo(e),y+=Wo(2.5066282746310007)):(y=e*Wo(n)-n,y+=Wo(Jo(e,n,a=0)/e)):y=Wo(y)+Ho(e),y>qo?Co:Lo(y);switch(e<30&&e<=n+1&&n<qo?c=!(s=(h=Vo(e))===e)&&.5===Po(h-e):s=c=!1,s&&n>.6?(l=!l,o=0):c&&n>.2?(l=!l,o=1):n<1.4901161193847656e-8&&e>1?o=6:n<.5?o=-.4/Wo(n)<e?2:3:n<1.1?o=.75*n<e?2:3:(v=!1,f&&e>20&&(p=Po((n-e)/e),e>200?20/e>p*p&&(v=!0):p<.4&&(v=!0)),v?o=5:n-1/(3*n)<e?o=2:(o=4,l=!l)),o){case 0:y=Ro(e,n),!1===f&&(y*=Go(e));break;case 1:y=zo(e,n),!1===f&&(y*=Go(e));break;case 2:0!==(y=f?Ko(e,n):Bo(e,n))&&(a=0,i=!1,l&&(a=f?1:Go(e),f||y>=1||Yo*y>a?(a/=y,f||e<1||Yo/e>a?(a*=-e,i=!0):a=0):a=0)),y*=Jo(e,n,a)/e,i&&(l=!1,y=-y);break;case 3:y=(b=Qo(e,n,l=!l))[0],w=b[1],l=!1,f&&(y/=w);break;case 4:0!==(y=f?Ko(e,n):Bo(e,n))&&(y*=Xo(e,n));break;case 5:y=Do(e,n),n>=e&&(l=!l);break;case 6:y=f?Mo(n,e)/Go(e+1):Mo(n,e)/e,y*=1-e*n/(e+1)}return f&&y>1&&(y=1),l&&(y=(f?1:Go(e))-y),y},$o=Zo,ra=$o,na=s,ea=p;var ta=function(r,n,e){return na(r)||na(n)||na(e)||n<0||e<=0?NaN:0===n?r<0?0:1:r<=0?0:r===ea?1:ra(r*e,n)};var ua=function(r){return function(){return r}},ia=s;var fa=ua,oa=s;var aa=function(r,n){return ia(r)||ia(n)?NaN:r<n?0:1};y(aa,"factory",(function(r){return oa(r)?fa(NaN):function(n){if(oa(n))return NaN;return n<r?0:1}}));var ca=ua,va=aa.factory,la=$o,ya=s,sa=p;var pa=ta;y(pa,"factory",(function(r,n){return ya(r)||ya(n)||r<0||n<=0?ca(NaN):0===r?va(0):function(e){if(e<=0)return 0;if(e===sa)return 1;return la(e*n,r)}}));var ba=pa;var ha=pa.factory;var wa=function(r,n){return ba(r,n/2,.5)};return y(wa,"factory",(function(r){return ha(r/2,.5)})),wa}));
//# sourceMappingURL=bundle.js.map