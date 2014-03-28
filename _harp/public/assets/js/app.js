/*! skrollr 0.6.22 (2014-02-21) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render},ft=r.forceHeight!==!1,ft&&(zt=r.scale||1),pt=r.mobileDeceleration||E,gt=r.smoothScrolling!==!1,dt=r.smoothScrollingDuration||x,vt={targetTop:it.getScrollTop()},_t=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),_t?(st=t.getElementById("skrollr-body"),st&&at(),X(),Ct(o,[y,S],[T])):Ct(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Lt)&&($t=t,Lt=e,Mt=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.22"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,x=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",N=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,V=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,z=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,M=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,B=/[a-z\-]+-gradient/g,_="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(_=n.match(e)||+n==n&&t[n].match(e))break;if(!_)return _=G="",r;_=_[0],"-"===_.slice(0,1)?(G=_,_={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[_]):G="-"+_.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[_.toLowerCase()+"RequestAnimationFrame"],r=Nt();return(_t||!t)&&(t=function(t){var n=Nt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Nt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[_.toLowerCase()+"CancelAnimationFrame"];return(_t||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=yt;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var d=m.name.match(V);if(null!==d){var v={props:m.value,element:i};s.push(v);var h=d[1];h&&(v.constant=h.substr(1));var y=d[2];/p$/.test(y)?(v.isPercentage=!0,v.offset=(0|y.slice(0,-1))/100):v.offset=0|y;var T=d[3],b=d[4]||T;T&&T!==A&&T!==F?(v.mode="relative",v.anchors=[T,b]):(v.mode="absolute",T===F?v.isEnd=!0:v.isPercentage||(v.offset=v.offset*zt))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=lt[k].styleAttr,w=lt[k].classAttr):(k=i[H]=Bt++,S=i.style.cssText,w=Ft(i)),lt[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},Ct(i,[g],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Nt(),o=it.getScrollTop();return mt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:U[t.easing||w],done:t.done},mt.topDiff||(mt.done&&mt.done.call(it,!1),mt=r),it},n.prototype.stopAnimateTo=function(){mt&&mt.done&&mt.done.call(it,!0),mt=r},n.prototype.isAnimatingTo=function(){return!!mt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,_t?Gt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return _t?Gt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),kt(),Ct(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Vt=0,zt=1,ut=r,pt=r,Ot="down",qt=-1,Lt=0,$t=0,Mt=!1,mt=r,gt=r,dt=r,vt=r,ht=r,Bt=0,yt=r,_t=!1,Gt=0,Tt=r};var X=function(){var n,i,l,c,g,d,v,h,y,T,b,S;St(o,[f,u,p,m].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(g=o.clientY,d=o.clientX,T=e.timeStamp,N.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=g,l=d,y=T;break;case u:N.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=g-v,S=T-b,it.setScrollTop(Gt-h,!0),v=g,b=T;break;default:case p:case m:var a=i-g,w=l-d,k=w*w+a*a;if(49>k){if(!N.test(n.tagName)){n.focus();var E=t.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(E)}return}n=r;var x=h/S;x=s.max(s.min(x,3),-3);var A=s.abs(x/pt),F=x*A+.5*pt*A*A,C=it.getScrollTop()-F,D=0;C>Vt?(D=(Vt-C)/F,C=Vt):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,p,m=o.clientHeight,g=xt();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,p=g[l.constant]||0,l.frame=u,l.isPercentage&&(u*=m,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=p,ft&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,At()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],p=g[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+p);e.keyFrames.sort(Pt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(Ct(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=nt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Ct(c,[g,v],[d,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],x=u[w+1];for(o in E.props)if(l.call(E.props,o)){var A=(f-E.frame)/(x.frame-E.frame);A=E.props[o].easing(A),a=rt(E.props[o].value,x.props[o].value,A),a=nt(a),i.setStyle(c,o,a)}break}}},Z=function(){Mt&&(Mt=!1,Et());var e,t,n=it.getScrollTop(),o=Nt();if(mt)o>=mt.endTime?(n=mt.targetTop,e=mt.done,mt=r):(t=mt.easing((o-mt.startTime)/mt.duration),n=0|mt.startTop+t*mt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:It,endTime:It+dt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/dt),n=0|vt.startTop+t*vt.topDiff)}if(_t&&st&&i.setStyle(st,"transform","translate(0, "+-Gt+"px) "+Tt),ht||qt!==n){Ot=n>qt?"down":qt>n?"up":Ot,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Vt,direction:Ot},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}It=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=z.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return M.lastIndex=0,e=e.replace(M,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(B.lastIndex=0,e=e.replace(B,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Ct(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ft(n),n.style.cssText=r.styleAttr,Ct(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{_&&(n[_+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,pt,mt,gt,dt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Kt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},kt=function(){for(var e,t=0,r=Kt.length;r>t;t++)e=Kt[t],wt(e.element,e.name,e.listener);Kt=[]},Et=function(){var e=it.getScrollTop();Vt=0,ft&&!_t&&(a.style.height="auto"),j(),ft&&!_t&&(a.style.height=Vt+o.clientHeight+"px"),_t?it.setScrollTop(s.min(it.getScrollTop(),Vt)):it.setScrollTop(e,!0),ht=!0},xt=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},At=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ft=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Ct=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Ht(i).replace(Ht(o[l])," ");i=Dt(i);for(var c=0,f=n.length;f>c;c++)-1===Ht(i).indexOf(Ht(n[c]))&&(i+=" "+n[c]);t[a]=Dt(i)},Dt=function(e){return e.replace(P,"")},Ht=function(e){return" "+e+" "},Nt=Date.now||function(){return+new Date},Pt=function(e,t){return e.frame-t.frame},Vt=0,zt=1,Ot="down",qt=-1,It=Nt(),Lt=0,$t=0,Mt=!1,Bt=0,_t=!1,Gt=0,Kt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):e.skrollr=i})(window,document);
/* End Skrollr */
/*! select 0.5.1 */
(function(){var t,e,o,i,n,r,s,l,h,a,p,u,c,f,d,g,m={}.hasOwnProperty,v=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1},b=[].slice;null==window.Tether&&(window.Tether={}),a=function(t){var e,o,i,n,r;if(o=getComputedStyle(t).position,"fixed"===o)return t;for(i=void 0,e=t;e=e.parentNode;){try{n=getComputedStyle(e)}catch(s){}if(null==n)return e;if(/(auto|scroll)/.test(n.overflow+n["overflow-y"]+n["overflow-x"])&&("absolute"!==o||"relative"===(r=n.position)||"absolute"===r||"fixed"===r))return e}return document.body},f=function(){var t;return t=0,function(){return t++}}(),g={},h=function(t){var e,i,r,s,l;if(r=t._tetherZeroElement,null==r&&(r=t.createElement("div"),r.setAttribute("data-tether-id",f()),n(r.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(r),t._tetherZeroElement=r),e=r.getAttribute("data-tether-id"),null==g[e]){g[e]={},l=r.getBoundingClientRect();for(i in l)s=l[i],g[e][i]=s;o(function(){return g[e]=void 0})}return g[e]},u=null,s=function(t){var e,o,i,n,r,s,l;t===document?(o=document,t=document.documentElement):o=t.ownerDocument,i=o.documentElement,e={},l=t.getBoundingClientRect();for(n in l)s=l[n],e[n]=s;return r=h(o),e.top-=r.top,e.left-=r.left,null==e.width&&(e.width=document.body.scrollWidth-e.left-e.right),null==e.height&&(e.height=document.body.scrollHeight-e.top-e.bottom),e.top=e.top-i.clientTop,e.left=e.left-i.clientLeft,e.right=o.body.clientWidth-e.width-e.left,e.bottom=o.body.clientHeight-e.height-e.top,e},l=function(t){return t.offsetParent||document.documentElement},n=function(t){var e,o,i,n,r,s,l;for(null==t&&(t={}),e=[],Array.prototype.push.apply(e,arguments),l=e.slice(1),r=0,s=l.length;s>r;r++)if(i=l[r])for(o in i)m.call(i,o)&&(n=i[o],t[o]=n);return t},c=function(t,e){var o,i,n,r,s;if(null!=t.classList){for(r=e.split(" "),s=[],i=0,n=r.length;n>i;i++)o=r[i],s.push(t.classList.remove(o));return s}return t.className=t.className.replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},e=function(t,e){var o,i,n,r,s;if(null!=t.classList){for(r=e.split(" "),s=[],i=0,n=r.length;n>i;i++)o=r[i],s.push(t.classList.add(o));return s}return c(t,e),t.className+=" "+e},p=function(t,e){return null!=t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},d=function(t,o,i){var n,r,s,l,h,a;for(r=0,l=i.length;l>r;r++)n=i[r],v.call(o,n)<0&&p(t,n)&&c(t,n);for(a=[],s=0,h=o.length;h>s;s++)n=o[s],p(t,n)?a.push(void 0):a.push(e(t,n));return a},i=[],o=function(t){return i.push(t)},r=function(){var t,e;for(e=[];t=i.pop();)e.push(t());return e},t=function(){function t(){}return t.prototype.on=function(t,e,o,i){var n;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})},t.prototype.once=function(t,e,o){return this.on(t,e,o,!0)},t.prototype.off=function(t,e){var o,i,n;if(null!=(null!=(i=this.bindings)?i[t]:void 0)){if(null==e)return delete this.bindings[t];for(o=0,n=[];o<this.bindings[t].length;)this.bindings[t][o].handler===e?n.push(this.bindings[t].splice(o,1)):n.push(o++);return n}},t.prototype.trigger=function(){var t,e,o,i,n,r,s,l,h;if(o=arguments[0],t=2<=arguments.length?b.call(arguments,1):[],null!=(s=this.bindings)?s[o]:void 0){for(n=0,h=[];n<this.bindings[o].length;)l=this.bindings[o][n],i=l.handler,e=l.ctx,r=l.once,i.apply(null!=e?e:this,t),r?h.push(this.bindings[o].splice(n,1)):h.push(n++);return h}},t}(),Tether.Utils={getScrollParent:a,getBounds:s,getOffsetParent:l,extend:n,addClass:e,removeClass:c,hasClass:p,updateClasses:d,defer:o,flush:r,uniqueId:f,Evented:t}}).call(this),function(){var t,e,o,i,n,r,s,l,h,a,p,u,c,f,d,g,m,v,b,y,C,w,O,T,E,S,A,x=[].slice,L=function(t,e){return function(){return t.apply(e,arguments)}};if("undefined"==typeof Tether||null===Tether)throw new Error("You must include the utils.js file before tether.js");A=Tether.Utils,f=A.getScrollParent,d=A.getSize,c=A.getOuterSize,p=A.getBounds,u=A.getOffsetParent,h=A.extend,i=A.addClass,C=A.removeClass,T=A.updateClasses,l=A.defer,a=A.flush,E=function(t,e,o){return null==o&&(o=1),t+o>=e&&e>=t-o},O=function(){var t,e,o,i,n;for(t=document.createElement("div"),n=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0,i=n.length;i>o;o++)if(e=n[o],void 0!==t.style[e])return e}(),w=[],y=function(){var t,e,o;for(e=0,o=w.length;o>e;e++)t=w[e],t.position(!1);return a()},g=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?t:+new Date},function(){var t,e,o,i,n,r,s,l,h;for(e=null,o=null,i=null,n=function(){if(null!=o&&o>16)return o=Math.min(o-16,250),i=setTimeout(n,250),void 0;if(!(null!=e&&g()-e<10))return null!=i&&(clearTimeout(i),i=null),e=g(),y(),o=g()-e},l=["resize","scroll","touchmove"],h=[],r=0,s=l.length;s>r;r++)t=l[r],h.push(window.addEventListener(t,n));return h}(),t={center:"center",left:"right",right:"left"},e={middle:"middle",top:"bottom",bottom:"top"},o={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},s=function(o,i){var n,r;return n=o.left,r=o.top,"auto"===n&&(n=t[i.left]),"auto"===r&&(r=e[i.top]),{left:n,top:r}},r=function(t){var e,i;return{left:null!=(e=o[t.left])?e:t.left,top:null!=(i=o[t.top])?i:t.top}},n=function(){var t,e,o,i,n,r,s;for(e=1<=arguments.length?x.call(arguments,0):[],o={top:0,left:0},n=0,r=e.length;r>n;n++)s=e[n],i=s.top,t=s.left,"string"==typeof i&&(i=parseFloat(i,10)),"string"==typeof t&&(t=parseFloat(t,10)),o.top+=i,o.left+=t;return o},m=function(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t},v=b=function(t){var e,o,i;return i=t.split(" "),o=i[0],e=i[1],{top:o,left:e}},S=function(){function t(t){this.position=L(this.position,this);var e,o,i,n,r;for(w.push(this),this.history=[],this.setOptions(t,!1),n=Tether.modules,o=0,i=n.length;i>o;o++)e=n[o],null!=(r=e.initialize)&&r.call(this);this.position()}return t.modules=[],t.prototype.getClass=function(t){var e,o;return(null!=(e=this.options.classes)?e[t]:void 0)?this.options.classes[t]:(null!=(o=this.options.classes)?o[t]:void 0)!==!1?this.options.classPrefix?""+this.options.classPrefix+"-"+t:t:""},t.prototype.setOptions=function(t,e){var o,n,r,s,l,a;for(this.options=t,null==e&&(e=!0),o={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},this.options=h(o,this.options),l=this.options,this.element=l.element,this.target=l.target,this.targetModifier=l.targetModifier,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),a=["element","target"],r=0,s=a.length;s>r;r++){if(n=a[r],null==this[n])throw new Error("Tether Error: Both element and target must be defined");null!=this[n].jquery?this[n]=this[n][0]:"string"==typeof this[n]&&(this[n]=document.querySelector(this[n]))}if(i(this.element,this.getClass("element")),i(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");return this.targetAttachment=v(this.options.targetAttachment),this.attachment=v(this.options.attachment),this.offset=b(this.options.offset),this.targetOffset=b(this.options.targetOffset),null!=this.scrollParent&&this.disable(),this.scrollParent="scroll-handle"===this.targetModifier?this.target:f(this.target),this.options.enabled!==!1?this.enable(e):void 0},t.prototype.getTargetBounds=function(){var t,e,o,i,n,r,s,l,h;if(null==this.targetModifier)return p(this.target);switch(this.targetModifier){case"visible":return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:(t=p(this.target),n={height:t.height,width:t.width,top:t.top,left:t.left},n.height=Math.min(n.height,t.height-(pageYOffset-t.top)),n.height=Math.min(n.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),n.height=Math.min(innerHeight,n.height),n.height-=2,n.width=Math.min(n.width,t.width-(pageXOffset-t.left)),n.width=Math.min(n.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),n.width=Math.min(innerWidth,n.width),n.width-=2,n.top<pageYOffset&&(n.top=pageYOffset),n.left<pageXOffset&&(n.left=pageXOffset),n);case"scroll-handle":return h=this.target,h===document.body?(h=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=p(h),l=getComputedStyle(h),o=h.scrollWidth>h.clientWidth||"scroll"===[l.overflow,l.overflowX]||this.target!==document.body,r=0,o&&(r=15),i=t.height-parseFloat(l.borderTopWidth)-parseFloat(l.borderBottomWidth)-r,n={width:15,height:.975*i*(i/h.scrollHeight),left:t.left+t.width-parseFloat(l.borderLeftWidth)-15},e=0,408>i&&this.target===document.body&&(e=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(n.height=Math.max(n.height,24)),s=h.scrollTop/(h.scrollHeight-i),n.top=s*(i-n.height-e)+t.top+parseFloat(l.borderTopWidth),this.target===document.body&&(n.height=Math.max(n.height,24)),n}},t.prototype.clearCache=function(){return this._cache={}},t.prototype.cache=function(t,e){return null==this._cache&&(this._cache={}),null==this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]},t.prototype.enable=function(t){return null==t&&(t=!0),i(this.target,this.getClass("enabled")),i(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),t?this.position():void 0},t.prototype.disable=function(){return C(this.target,this.getClass("enabled")),C(this.element,this.getClass("enabled")),this.enabled=!1,null!=this.scrollParent?this.scrollParent.removeEventListener("scroll",this.position):void 0},t.prototype.destroy=function(){var t,e,o,i,n;for(this.disable(),n=[],t=o=0,i=w.length;i>o;t=++o){if(e=w[t],e===this){w.splice(t,1);break}n.push(void 0)}return n},t.prototype.updateAttachClasses=function(t,e){var o,i,n,r,s,h,a,p,u,c=this;for(null==t&&(t=this.attachment),null==e&&(e=this.targetAttachment),r=["left","top","bottom","right","middle","center"],(null!=(u=this._addAttachClasses)?u.length:void 0)&&this._addAttachClasses.splice(0,this._addAttachClasses.length),o=null!=this._addAttachClasses?this._addAttachClasses:this._addAttachClasses=[],t.top&&o.push(""+this.getClass("element-attached")+"-"+t.top),t.left&&o.push(""+this.getClass("element-attached")+"-"+t.left),e.top&&o.push(""+this.getClass("target-attached")+"-"+e.top),e.left&&o.push(""+this.getClass("target-attached")+"-"+e.left),i=[],s=0,a=r.length;a>s;s++)n=r[s],i.push(""+this.getClass("element-attached")+"-"+n);for(h=0,p=r.length;p>h;h++)n=r[h],i.push(""+this.getClass("target-attached")+"-"+n);return l(function(){return null!=c._addAttachClasses?(T(c.element,c._addAttachClasses,i),T(c.target,c._addAttachClasses,i),c._addAttachClasses=void 0):void 0})},t.prototype.position=function(t){var e,o,i,l,h,c,f,d,g,v,b,y,C,w,O,T,E,S,A,x,L,M,H,P,B,k,_,N,W,q,D,F,z=this;if(null==t&&(t=!0),this.enabled){for(this.clearCache(),A=s(this.targetAttachment,this.attachment),this.updateAttachClasses(this.attachment,A),e=this.cache("element-bounds",function(){return p(z.element)}),P=e.width,i=e.height,0===P&&0===i&&null!=this.lastSize?(W=this.lastSize,P=W.width,i=W.height):this.lastSize={width:P,height:i},M=L=this.cache("target-bounds",function(){return z.getTargetBounds()}),g=m(r(this.attachment),{width:P,height:i}),x=m(r(A),M),h=m(this.offset,{width:P,height:i}),c=m(this.targetOffset,M),g=n(g,h),x=n(x,c),l=L.left+x.left-g.left,H=L.top+x.top-g.top,q=Tether.modules,B=0,_=q.length;_>B;B++)if(f=q[B],O=f.position.call(this,{left:l,top:H,targetAttachment:A,targetPos:L,elementPos:e,offset:g,targetOffset:x,manualOffset:h,manualTargetOffset:c}),null!=O&&"object"==typeof O){if(O===!1)return!1;H=O.top,l=O.left}if(d={page:{top:H,bottom:document.body.scrollHeight-H-i,left:l,right:document.body.scrollWidth-l-P},viewport:{top:H-pageYOffset,bottom:pageYOffset-H-i+innerHeight,left:l-pageXOffset,right:pageXOffset-l-P+innerWidth}},(null!=(D=this.options.optimizations)?D.moveElement:void 0)!==!1&&null==this.targetModifier){for(b=this.cache("target-offsetparent",function(){return u(z.target)}),w=this.cache("target-offsetparent-bounds",function(){return p(b)}),C=getComputedStyle(b),o=getComputedStyle(this.element),y=w,v={},F=["Top","Left","Bottom","Right"],k=0,N=F.length;N>k;k++)S=F[k],v[S]=parseFloat(C["border"+S+"Width"]);w.right=document.body.scrollWidth-w.left-y.width+v.right,w.bottom=document.body.scrollHeight-w.top-y.height+v.bottom,d.page.top>=w.top+v.top&&d.page.bottom>=w.bottom&&d.page.left>=w.left+v.left&&d.page.right>=w.right&&(E=b.scrollTop,T=b.scrollLeft,d.offset={top:d.page.top-w.top+E-v.top,left:d.page.left-w.left+T-v.left})}return this.move(d),this.history.unshift(d),this.history.length>3&&this.history.pop(),t&&a(),!0}},t.prototype.move=function(t){var e,o,i,n,r,s,a,p,c,f,d,g,m,v,b,y,C,w=this;if(null!=this.element.parentNode){p={};for(f in t){p[f]={};for(n in t[f]){for(i=!1,y=this.history,v=0,b=y.length;b>v;v++)if(a=y[v],!E(null!=(C=a[f])?C[n]:void 0,t[f][n])){i=!0;break}i||(p[f][n]=!0)}}e={top:"",left:"",right:"",bottom:""},c=function(t,o){var i,n,r;return(null!=(r=w.options.optimizations)?r.gpu:void 0)===!1?(t.top?e.top=""+o.top+"px":e.bottom=""+o.bottom+"px",t.left?e.left=""+o.left+"px":e.right=""+o.right+"px"):(t.top?(e.top=0,n=o.top):(e.bottom=0,n=-o.bottom),t.left?(e.left=0,i=o.left):(e.right=0,i=-o.right),e[O]="translateX("+Math.round(i)+"px) translateY("+Math.round(n)+"px)","msTransform"!==O?e[O]+=" translateZ(0)":void 0)},r=!1,(p.page.top||p.page.bottom)&&(p.page.left||p.page.right)?(e.position="absolute",c(p.page,t.page)):(p.viewport.top||p.viewport.bottom)&&(p.viewport.left||p.viewport.right)?(e.position="fixed",c(p.viewport,t.viewport)):null!=p.offset&&p.offset.top&&p.offset.left?(e.position="absolute",s=this.cache("target-offsetparent",function(){return u(w.target)}),u(this.element)!==s&&l(function(){return w.element.parentNode.removeChild(w.element),s.appendChild(w.element)}),c(p.offset,t.offset),r=!0):(e.position="absolute",c({top:!0,left:!0},t.page)),r||"BODY"===this.element.parentNode.tagName||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element)),m={},g=!1;for(n in e)d=e[n],o=this.element.style[n],""===o||""===d||"top"!==n&&"left"!==n&&"bottom"!==n&&"right"!==n||(o=parseFloat(o),d=parseFloat(d)),o!==d&&(g=!0,m[n]=e[n]);return g?l(function(){return h(w.element.style,m)}):void 0}},t}(),Tether.position=y,window.Tether=h(S,Tether)}.call(this),function(){var t,e,o,i,n,r,s,l,h,a,p=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1};a=Tether.Utils,s=a.getOuterSize,r=a.getBounds,l=a.getSize,i=a.extend,h=a.updateClasses,o=a.defer,e={left:"right",right:"left",top:"bottom",bottom:"top",middle:"middle"},t=["left","top","right","bottom"],n=function(e,o){var i,n,s,l,h,a,p;if("scrollParent"===o?o=e.scrollParent:"window"===o&&(o=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),o===document&&(o=o.documentElement),null!=o.nodeType)for(n=l=r(o),h=getComputedStyle(o),o=[n.left,n.top,l.width+n.left,l.height+n.top],i=a=0,p=t.length;p>a;i=++a)s=t[i],s=s[0].toUpperCase()+s.substr(1),"Top"===s||"Left"===s?o[i]+=parseFloat(h["border"+s+"Width"]):o[i]-=parseFloat(h["border"+s+"Width"]);return o},Tether.modules.push({position:function(e){var s,l,a,u,c,f,d,g,m,v,b,y,C,w,O,T,E,S,A,x,L,M,H,P,B,k,_,N,W,q,D,F,z,Y,X,j,I,U,R,Z,V,$,G,J,K,Q,te,ee=this;if(k=e.top,b=e.left,L=e.targetAttachment,!this.options.constraints)return!0;for(S=function(e){var o,i,n,r;for(ee.removeClass(e),r=[],i=0,n=t.length;n>i;i++)o=t[i],r.push(ee.removeClass(""+e+"-"+o));return r},Z=this.cache("element-bounds",function(){return r(ee.element)}),v=Z.height,_=Z.width,0===_&&0===v&&null!=this.lastSize&&(V=this.lastSize,_=V.width,v=V.height),H=this.cache("target-bounds",function(){return ee.getTargetBounds()}),M=H.height,P=H.width,x={},m={},l=[this.getClass("pinned"),this.getClass("out-of-bounds")],$=this.options.constraints,N=0,F=$.length;F>N;N++)g=$[N],g.outOfBoundsClass&&l.push(g.outOfBoundsClass),g.pinnedClass&&l.push(g.pinnedClass);for(W=0,z=l.length;z>W;W++)for(d=l[W],G=["left","top","right","bottom"],q=0,Y=G.length;Y>q;q++)A=G[q],l.push(""+d+"-"+A);for(s=[],x=i({},L),m=i({},this.attachment),J=this.options.constraints,D=0,X=J.length;X>D;D++){if(g=J[D],B=g.to,a=g.attachment,O=g.pin,null==a&&(a=""),p.call(a," ")>=0?(K=a.split(" "),f=K[0],c=K[1]):c=f=a,u=n(this,B),("target"===f||"both"===f)&&(k<u[1]&&"top"===x.top&&(k+=M,x.top="bottom"),k+v>u[3]&&"bottom"===x.top&&(k-=M,x.top="top")),"together"===f&&(k<u[1]&&"top"===x.top&&("bottom"===m.top?(k+=M,x.top="bottom",k+=v,m.top="top"):"top"===m.top&&(k+=M,x.top="bottom",k-=v,m.top="bottom")),k+v>u[3]&&"bottom"===x.top&&("top"===m.top?(k-=M,x.top="top",k-=v,m.top="bottom"):"bottom"===m.top&&(k-=M,x.top="top",k+=v,m.top="top"))),("target"===c||"both"===c)&&(b<u[0]&&"left"===x.left&&(b+=P,x.left="right"),b+_>u[2]&&"right"===x.left&&(b-=P,x.left="left")),"together"===c&&(b<u[0]&&"left"===x.left?"right"===m.left?(b+=P,x.left="right",b+=_,m.left="left"):"left"===m.left&&(b+=P,x.left="right",b-=_,m.left="right"):b+_>u[2]&&"right"===x.left&&("left"===m.left?(b-=P,x.left="left",b-=_,m.left="right"):"right"===m.left&&(b-=P,x.left="left",b+=_,m.left="left"))),("element"===f||"both"===f)&&(k<u[1]&&"bottom"===m.top&&(k+=v,m.top="top"),k+v>u[3]&&"top"===m.top&&(k-=v,m.top="bottom")),("element"===c||"both"===c)&&(b<u[0]&&"right"===m.left&&(b+=_,m.left="left"),b+_>u[2]&&"left"===m.left&&(b-=_,m.left="right")),"string"==typeof O?O=function(){var t,e,o,i;for(o=O.split(","),i=[],e=0,t=o.length;t>e;e++)w=o[e],i.push(w.trim());return i}():O===!0&&(O=["top","left","right","bottom"]),O||(O=[]),T=[],y=[],k<u[1]&&(p.call(O,"top")>=0?(k=u[1],T.push("top")):y.push("top")),k+v>u[3]&&(p.call(O,"bottom")>=0?(k=u[3]-v,T.push("bottom")):y.push("bottom")),b<u[0]&&(p.call(O,"left")>=0?(b=u[0],T.push("left")):y.push("left")),b+_>u[2]&&(p.call(O,"right")>=0?(b=u[2]-_,T.push("right")):y.push("right")),T.length)for(E=null!=(Q=this.options.pinnedClass)?Q:this.getClass("pinned"),s.push(E),U=0,j=T.length;j>U;U++)A=T[U],s.push(""+E+"-"+A);if(y.length)for(C=null!=(te=this.options.outOfBoundsClass)?te:this.getClass("out-of-bounds"),s.push(C),R=0,I=y.length;I>R;R++)A=y[R],s.push(""+C+"-"+A);(p.call(T,"left")>=0||p.call(T,"right")>=0)&&(m.left=x.left=!1),(p.call(T,"top")>=0||p.call(T,"bottom")>=0)&&(m.top=x.top=!1),(x.top!==L.top||x.left!==L.left||m.top!==this.attachment.top||m.left!==this.attachment.left)&&this.updateAttachClasses(m,x)}return o(function(){return h(ee.target,s,l),h(ee.element,s,l)}),{top:k,left:b}}})}.call(this),function(){var t,e,o,i;i=Tether.Utils,e=i.getBounds,o=i.updateClasses,t=i.defer,Tether.modules.push({position:function(i){var n,r,s,l,h,a,p,u,c,f,d,g,m,v,b,y,C,w,O,T,E,S,A,x,L,M=this;if(d=i.top,a=i.left,E=this.cache("element-bounds",function(){return e(M.element)}),h=E.height,g=E.width,f=this.getTargetBounds(),l=d+h,p=a+g,n=[],d<=f.bottom&&l>=f.top)for(S=["left","right"],m=0,C=S.length;C>m;m++)u=S[m],((A=f[u])===a||A===p)&&n.push(u);if(a<=f.right&&p>=f.left)for(x=["top","bottom"],v=0,w=x.length;w>v;v++)u=x[v],((L=f[u])===d||L===l)&&n.push(u);for(s=[],r=[],c=["left","top","right","bottom"],s.push(this.getClass("abutted")),b=0,O=c.length;O>b;b++)u=c[b],s.push(""+this.getClass("abutted")+"-"+u);for(n.length&&r.push(this.getClass("abutted")),y=0,T=n.length;T>y;y++)u=n[y],r.push(""+this.getClass("abutted")+"-"+u);return t(function(){return o(M.target,r,s),o(M.element,r,s)}),!0}})}.call(this),function(){Tether.modules.push({position:function(t){var e,o,i,n,r,s,l;return s=t.top,e=t.left,this.options.shift?(o=function(t){return"function"==typeof t?t.call(this,{top:s,left:e}):t},i=o(this.options.shift),"string"==typeof i?(i=i.split(" "),i[1]||(i[1]=i[0]),r=i[0],n=i[1],r=parseFloat(r,10),n=parseFloat(n,10)):(l=[i.top,i.left],r=l[0],n=l[1]),s+=r,e+=n,{top:s,left:e}):void 0}})}.call(this),function(){var t,e,o,i,n,r,s,l,h,a,p,u,c,f,d,g,m,v,b,y,C,w=function(t,e){return function(){return t.apply(e,arguments)}},O={}.hasOwnProperty,T=function(t,e){function o(){this.constructor=t}for(var i in e)O.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t};C=Tether.Utils,a=C.extend,l=C.addClass,g=C.removeClass,c=C.hasClass,p=C.getBounds,i=C.Evented,e=13,o=27,n=32,s=38,t=40,b="ontouchstart"in document.documentElement,h=b?"touchstart":"click",y=function(){return b&&(640>=innerWidth||640>=innerHeight)},f=function(t){return Array.prototype.reduce.call(t,function(t,e){return t===e?e:!1})},u=function(){var t;return null!=(t=document.querySelector(".select-target-focused"))?t.selectInstance:void 0},m="",v=void 0,d=void 0,document.addEventListener("keypress",function(t){var e,o,i,r;if((i=u())&&0!==t.charCode)return t.keyCode===n&&t.preventDefault(),clearTimeout(v),v=setTimeout(function(){return m=""},500),m+=String.fromCharCode(t.charCode),e=i.findOptionsByPrefix(m),1===e.length?(i.selectOption(e[0]),void 0):m.length>1&&f(m)&&(o=i.findOptionsByPrefix(m[0]),o.length)?(r=o.indexOf(i.getChosen()),r+=1,r%=o.length,i.selectOption(o[r]),void 0):(e.length&&i.selectOption(e[0]),void 0)}),document.addEventListener("keydown",function(i){var r,l,h;if(r=u())if(((l=i.keyCode)===s||l===t||l===o)&&i.preventDefault(),r.isOpen())switch(i.keyCode){case s:case t:return r.moveHighlight(i.keyCode);case e:return r.selectHighlightedOption();case o:return r.close(),r.target.focus()}else if((h=i.keyCode)===s||h===t||h===n)return r.open()}),r=function(t){function e(t){if(this.options=t,this.update=w(this.update,this),this.options=a({},e.defaults,this.options),this.select=this.options.el,null!=this.select.selectInstance)throw new Error("This element has already been turned into a Select");this.setupTarget(),this.renderTarget(),this.setupDrop(),this.renderDrop(),this.setupSelect(),this.setupTether(),this.bindClick(),this.bindMutationEvents(),this.value=this.select.value}return T(e,t),e.defaults={alignToHighlighed:"auto",className:"select-theme-default"},e.prototype.useNative=function(){return this.options.useNative===!0||y()&&this.options.useNative!==!1},e.prototype.setupTarget=function(){var t,e=this;return this.target=document.createElement("a"),this.target.href="javascript:;",l(this.target,"select-target"),t=this.select.getAttribute("tabindex")||0,this.target.setAttribute("tabindex",t),this.options.className&&l(this.target,this.options.className),this.target.selectInstance=this,this.target.addEventListener("click",function(){return e.isOpen()?e.target.blur():e.target.focus()}),this.target.addEventListener("focus",function(){return l(e.target,"select-target-focused")}),this.target.addEventListener("blur",function(t){return e.isOpen()&&t.relatedTarget&&!e.drop.contains(t.relatedTarget)&&e.close(),g(e.target,"select-target-focused")}),this.select.parentNode.insertBefore(this.target,this.select.nextSibling)},e.prototype.setupDrop=function(){var t=this;return this.drop=document.createElement("div"),l(this.drop,"select"),this.options.className&&l(this.drop,this.options.className),document.body.appendChild(this.drop),this.drop.addEventListener("click",function(e){return c(e.target,"select-option")&&t.pickOption(e.target),e.stopPropagation()}),this.drop.addEventListener("mousemove",function(e){return c(e.target,"select-option")?t.highlightOption(e.target):void 0}),this.content=document.createElement("div"),l(this.content,"select-content"),this.drop.appendChild(this.content)},e.prototype.open=function(){var t,e,o=this;return l(this.target,"select-open"),this.useNative()?(this.select.style.display="block",setTimeout(function(){var t;return t=document.createEvent("MouseEvents"),t.initEvent("mousedown",!0,!0),o.select.dispatchEvent(t)}),void 0):(l(this.drop,"select-open"),setTimeout(function(){return o.tether.enable()}),(e=this.drop.querySelector(".select-option-selected"))?(this.highlightOption(e),this.scrollDropContentToOption(e),t=function(){var t,i,n;return c(o.drop,"tether-abutted-left")||c(o.drop,"tether-abutted-bottom")?(t=p(o.drop),n=p(e),i=t.top-(n.top+n.height),o.drop.style.top=(parseFloat(o.drop.style.top)||0)+i+"px"):void 0},("always"===this.options.alignToHighlighted||"auto"===this.options.alignToHighlighted&&this.content.scrollHeight<=this.content.clientHeight)&&setTimeout(t),this.trigger("open")):void 0)},e.prototype.close=function(){return g(this.target,"select-open"),this.useNative()?(this.select.style.display="none",void 0):(this.tether.disable(),g(this.drop,"select-open"),this.trigger("close"))},e.prototype.toggle=function(){return this.isOpen()?this.close():this.open()},e.prototype.isOpen=function(){return c(this.drop,"select-open")},e.prototype.bindClick=function(){var t=this;return this.target.addEventListener(h,function(e){return e.preventDefault(),t.toggle()}),document.addEventListener(h,function(e){return!t.isOpen()||e.target===t.drop||t.drop.contains(e.target)||e.target===t.target||t.target.contains(e.target)?void 0:t.close()})},e.prototype.setupTether=function(){return this.tether=new Tether({element:this.drop,target:this.target,attachment:"top left",targetAttachment:"bottom left",classPrefix:"select",constraints:[{to:"window",attachment:"together"}]})},e.prototype.renderTarget=function(){var t,e,o,i;for(this.target.innerHTML="",i=this.select.querySelectorAll("option"),e=0,o=i.length;o>e;e++)if(t=i[e],t.selected){this.target.innerHTML=t.innerHTML;break}return this.target.appendChild(document.createElement("b"))},e.prototype.renderDrop=function(){var t,e,o,i,n,r;for(o=document.createElement("ul"),l(o,"select-options"),r=this.select.querySelectorAll("option"),i=0,n=r.length;n>i;i++)t=r[i],e=document.createElement("li"),l(e,"select-option"),e.setAttribute("data-value",t.value),e.innerHTML=t.innerHTML,t.selected&&l(e,"select-option-selected"),o.appendChild(e);return this.content.innerHTML="",this.content.appendChild(o)},e.prototype.update=function(){return this.renderDrop(),this.renderTarget()},e.prototype.setupSelect=function(){return this.select.selectInstance=this,l(this.select,"select-select"),this.select.addEventListener("change",this.update)},e.prototype.bindMutationEvents=function(){return null!=window.MutationObserver?(this.observer=new MutationObserver(this.update),this.observer.observe(this.select,{childList:!0,attributes:!0,characterData:!0,subtree:!0})):this.select.addEventListener("DOMSubtreeModified",this.update)},e.prototype.findOptionsByPrefix=function(t){var e;return e=this.drop.querySelectorAll(".select-option"),t=t.toLowerCase(),Array.prototype.filter.call(e,function(e){return e.innerHTML.toLowerCase().substr(0,t.length)===t})},e.prototype.findOptionsByValue=function(t){var e;return e=this.drop.querySelectorAll(".select-option"),Array.prototype.filter.call(e,function(e){return e.getAttribute("data-value")===t})},e.prototype.getChosen=function(){return this.isOpen()?this.drop.querySelector(".select-option-highlight"):this.drop.querySelector(".select-option-selected")},e.prototype.selectOption=function(t){return this.isOpen()?(this.highlightOption(t),this.scrollDropContentToOption(t)):this.pickOption(t,!1)},e.prototype.resetSelection=function(){return this.selectOption(this.drop.querySelector(".select-option"))},e.prototype.highlightOption=function(t){var e;return e=this.drop.querySelector(".select-option-highlight"),null!=e&&g(e,"select-option-highlight"),l(t,"select-option-highlight"),this.trigger("highlight",{option:t})},e.prototype.moveHighlight=function(t){var e,o,i,n;return(e=this.drop.querySelector(".select-option-highlight"))?(n=this.drop.querySelectorAll(".select-option"),o=Array.prototype.indexOf.call(n,e),o>=0&&(t===s?o-=1:o+=1,!(0>o||o>=n.length))?(i=n[o],this.highlightOption(i),this.scrollDropContentToOption(i)):void 0):(this.highlightOption(this.drop.querySelector(".select-option")),void 0)},e.prototype.scrollDropContentToOption=function(t){var e,o;return this.content.scrollHeight>this.content.clientHeight?(e=p(this.content),o=p(t),this.content.scrollTop=o.top-(e.top-this.content.scrollTop)):void 0},e.prototype.selectHighlightedOption=function(){return this.pickOption(this.drop.querySelector(".select-option-highlight"))},e.prototype.pickOption=function(t,e){var o=this;return null==e&&(e=!0),this.value=this.select.value=t.getAttribute("data-value"),this.triggerChange(),e?setTimeout(function(){return o.close(),o.target.focus()}):void 0},e.prototype.triggerChange=function(){var t;return t=document.createEvent("HTMLEvents"),t.initEvent("change",!0,!1),this.select.dispatchEvent(t),this.trigger("change",{value:this.select.value})},e.prototype.change=function(t){var e;if(e=this.findOptionsByValue(t),!e.length)throw new Error('Select Error: An option with the value "'+t+"\" doesn't exist");return this.pickOption(e[0],!1)},e}(i),r.init=function(t){var e,o,i,n,s;if(null==t&&(t={}),"loading"===document.readyState)return document.addEventListener("DOMContentLoaded",function(){return r.init(t)}),void 0;for(null==t.selector&&(t.selector="select"),n=document.querySelectorAll(t.selector),s=[],o=0,i=n.length;i>o;o++)e=n[o],e.selectInstance?s.push(void 0):s.push(new r(a({el:e},t)));return s},window.Select=r}.call(this);


/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

(function($) {
  $.transit = {
    version: "0.9.9",

    // Map of $.css() keys to values for 'transitionProperty'.
    // See https://developer.mozilla.org/en/CSS/CSS_transitions#Properties_that_can_be_animated
    propertyMap: {
      marginLeft    : 'margin',
      marginRight   : 'margin',
      marginBottom  : 'margin',
      marginTop     : 'margin',
      paddingLeft   : 'padding',
      paddingRight  : 'padding',
      paddingBottom : 'padding',
      paddingTop    : 'padding'
    },

    // Will simply transition "instantly" if false
    enabled: true,

    // Set this to false if you don't want to use the transition end property.
    useTransitionEnd: false
  };

  var div = document.createElement('div');
  var support = {};

  // Helper function to get the proper vendor property name.
  // (`transition` => `WebkitTransition`)
  function getVendorPropertyName(prop) {
    // Handle unprefixed versions (FF16+, for example)
    if (prop in div.style) return prop;

    var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

    if (prop in div.style) { return prop; }

    for (var i=0; i<prefixes.length; ++i) {
      var vendorProp = prefixes[i] + prop_;
      if (vendorProp in div.style) { return vendorProp; }
    }
  }

  // Helper function to check if transform3D is supported.
  // Should return true for Webkits and Firefox 10+.
  function checkTransform3dSupport() {
    div.style[support.transform] = '';
    div.style[support.transform] = 'rotateY(90deg)';
    return div.style[support.transform] !== '';
  }

  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  // Check for the browser's transitions support.
  support.transition      = getVendorPropertyName('transition');
  support.transitionDelay = getVendorPropertyName('transitionDelay');
  support.transform       = getVendorPropertyName('transform');
  support.transformOrigin = getVendorPropertyName('transformOrigin');
  support.filter          = getVendorPropertyName('Filter');
  support.transform3d     = checkTransform3dSupport();

  var eventNames = {
    'transition':       'transitionEnd',
    'MozTransition':    'transitionend',
    'OTransition':      'oTransitionEnd',
    'WebkitTransition': 'webkitTransitionEnd',
    'msTransition':     'MSTransitionEnd'
  };

  // Detect the 'transitionend' event needed.
  var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;

  // Populate jQuery's `$.support` with the vendor prefixes we know.
  // As per [jQuery's cssHooks documentation](http://api.jquery.com/jQuery.cssHooks/),
  // we set $.support.transition to a string of the actual property name used.
  for (var key in support) {
    if (support.hasOwnProperty(key) && typeof $.support[key] === 'undefined') {
      $.support[key] = support[key];
    }
  }

  // Avoid memory leak in IE.
  div = null;

  // ## $.cssEase
  // List of easing aliases that you can use with `$.fn.transition`.
  $.cssEase = {
    '_default':       'ease',
    'in':             'ease-in',
    'out':            'ease-out',
    'in-out':         'ease-in-out',
    'snap':           'cubic-bezier(0,1,.5,1)',
    // Penner equations
    'easeOutCubic':   'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc':     'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc':    'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc':  'cubic-bezier(.785,.135,.15,.86)',
    'easeInExpo':     'cubic-bezier(.95,.05,.795,.035)',
    'easeOutExpo':    'cubic-bezier(.19,1,.22,1)',
    'easeInOutExpo':  'cubic-bezier(1,0,0,1)',
    'easeInQuad':     'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad':    'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad':  'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart':    'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart':   'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint':    'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint':   'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine':     'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine':    'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine':  'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack':     'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack':    'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack':  'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // ## 'transform' CSS hook
  // Allows you to use the `transform` property in CSS.
  //
  //     $("#hello").css({ transform: "rotate(90deg)" });
  //
  //     $("#hello").css('transform');
  //     //=> { rotate: '90deg' }
  //
  $.cssHooks['transit:transform'] = {
    // The getter returns a `Transform` object.
    get: function(elem) {
      return $(elem).data('transform') || new Transform();
    },

    // The setter accepts a `Transform` object or a string.
    set: function(elem, v) {
      var value = v;

      if (!(value instanceof Transform)) {
        value = new Transform(value);
      }

      // We've seen the 3D version of Scale() not work in Chrome when the
      // element being scaled extends outside of the viewport.  Thus, we're
      // forcing Chrome to not use the 3d transforms as well.  Not sure if
      // translate is affectede, but not risking it.  Detection code from
      // http://davidwalsh.name/detecting-google-chrome-javascript
      if (support.transform === 'WebkitTransform' && !isChrome) {
        elem.style[support.transform] = value.toString(true);
      } else {
        elem.style[support.transform] = value.toString();
      }

      $(elem).data('transform', value);
    }
  };

  // Add a CSS hook for `.css({ transform: '...' })`.
  // In jQuery 1.8+, this will intentionally override the default `transform`
  // CSS hook so it'll play well with Transit. (see issue #62)
  $.cssHooks.transform = {
    set: $.cssHooks['transit:transform'].set
  };

  // ## 'filter' CSS hook
  // Allows you to use the `filter` property in CSS.
  //
  //     $("#hello").css({ filter: 'blur(10px)' });
  //
  $.cssHooks.filter = {
    get: function(elem) {
      return elem.style[support.filter];
    },
    set: function(elem, value) {
      elem.style[support.filter] = value;
    }
  };

  // jQuery 1.8+ supports prefix-free transitions, so these polyfills will not
  // be necessary.
  if ($.fn.jquery < "1.8") {
    // ## 'transformOrigin' CSS hook
    // Allows the use for `transformOrigin` to define where scaling and rotation
    // is pivoted.
    //
    //     $("#hello").css({ transformOrigin: '0 0' });
    //
    $.cssHooks.transformOrigin = {
      get: function(elem) {
        return elem.style[support.transformOrigin];
      },
      set: function(elem, value) {
        elem.style[support.transformOrigin] = value;
      }
    };

    // ## 'transition' CSS hook
    // Allows you to use the `transition` property in CSS.
    //
    //     $("#hello").css({ transition: 'all 0 ease 0' });
    //
    $.cssHooks.transition = {
      get: function(elem) {
        return elem.style[support.transition];
      },
      set: function(elem, value) {
        elem.style[support.transition] = value;
      }
    };
  }

  // ## Other CSS hooks
  // Allows you to rotate, scale and translate.
  registerCssHook('scale');
  registerCssHook('translate');
  registerCssHook('rotate');
  registerCssHook('rotateX');
  registerCssHook('rotateY');
  registerCssHook('rotate3d');
  registerCssHook('perspective');
  registerCssHook('skewX');
  registerCssHook('skewY');
  registerCssHook('x', true);
  registerCssHook('y', true);

  // ## Transform class
  // This is the main class of a transformation property that powers
  // `$.fn.css({ transform: '...' })`.
  //
  // This is, in essence, a dictionary object with key/values as `-transform`
  // properties.
  //
  //     var t = new Transform("rotate(90) scale(4)");
  //
  //     t.rotate             //=> "90deg"
  //     t.scale              //=> "4,4"
  //
  // Setters are accounted for.
  //
  //     t.set('rotate', 4)
  //     t.rotate             //=> "4deg"
  //
  // Convert it to a CSS string using the `toString()` and `toString(true)` (for WebKit)
  // functions.
  //
  //     t.toString()         //=> "rotate(90deg) scale(4,4)"
  //     t.toString(true)     //=> "rotate(90deg) scale3d(4,4,0)" (WebKit version)
  //
  function Transform(str) {
    if (typeof str === 'string') { this.parse(str); }
    return this;
  }

  Transform.prototype = {
    // ### setFromString()
    // Sets a property from a string.
    //
    //     t.setFromString('scale', '2,4');
    //     // Same as set('scale', '2', '4');
    //
    setFromString: function(prop, val) {
      var args =
        (typeof val === 'string')  ? val.split(',') :
        (val.constructor === Array) ? val :
        [ val ];

      args.unshift(prop);

      Transform.prototype.set.apply(this, args);
    },

    // ### set()
    // Sets a property.
    //
    //     t.set('scale', 2, 4);
    //
    set: function(prop) {
      var args = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[prop]) {
        this.setter[prop].apply(this, args);
      } else {
        this[prop] = args.join(',');
      }
    },

    get: function(prop) {
      if (this.getter[prop]) {
        return this.getter[prop].apply(this);
      } else {
        return this[prop] || 0;
      }
    },

    setter: {
      // ### rotate
      //
      //     .css({ rotate: 30 })
      //     .css({ rotate: "30" })
      //     .css({ rotate: "30deg" })
      //     .css({ rotate: "30deg" })
      //
      rotate: function(theta) {
        this.rotate = unit(theta, 'deg');
      },

      rotateX: function(theta) {
        this.rotateX = unit(theta, 'deg');
      },

      rotateY: function(theta) {
        this.rotateY = unit(theta, 'deg');
      },

      // ### scale
      //
      //     .css({ scale: 9 })      //=> "scale(9,9)"
      //     .css({ scale: '3,2' })  //=> "scale(3,2)"
      //
      scale: function(x, y) {
        if (y === undefined) { y = x; }
        this.scale = x + "," + y;
      },

      // ### skewX + skewY
      skewX: function(x) {
        this.skewX = unit(x, 'deg');
      },

      skewY: function(y) {
        this.skewY = unit(y, 'deg');
      },

      // ### perspectvie
      perspective: function(dist) {
        this.perspective = unit(dist, 'px');
      },

      // ### x / y
      // Translations. Notice how this keeps the other value.
      //
      //     .css({ x: 4 })       //=> "translate(4px, 0)"
      //     .css({ y: 10 })      //=> "translate(4px, 10px)"
      //
      x: function(x) {
        this.set('translate', x, null);
      },

      y: function(y) {
        this.set('translate', null, y);
      },

      // ### translate
      // Notice how this keeps the other value.
      //
      //     .css({ translate: '2, 5' })    //=> "translate(2px, 5px)"
      //
      translate: function(x, y) {
        if (this._translateX === undefined) { this._translateX = 0; }
        if (this._translateY === undefined) { this._translateY = 0; }

        if (x !== null && x !== undefined) { this._translateX = unit(x, 'px'); }
        if (y !== null && y !== undefined) { this._translateY = unit(y, 'px'); }

        this.translate = this._translateX + "," + this._translateY;
      }
    },

    getter: {
      x: function() {
        return this._translateX || 0;
      },

      y: function() {
        return this._translateY || 0;
      },

      scale: function() {
        var s = (this.scale || "1,1").split(',');
        if (s[0]) { s[0] = parseFloat(s[0]); }
        if (s[1]) { s[1] = parseFloat(s[1]); }

        // "2.5,2.5" => 2.5
        // "2.5,1" => [2.5,1]
        return (s[0] === s[1]) ? s[0] : s;
      },

      rotate3d: function() {
        var s = (this.rotate3d || "0,0,0,0deg").split(',');
        for (var i=0; i<=3; ++i) {
          if (s[i]) { s[i] = parseFloat(s[i]); }
        }
        if (s[3]) { s[3] = unit(s[3], 'deg'); }

        return s;
      }
    },

    // ### parse()
    // Parses from a string. Called on constructor.
    parse: function(str) {
      var self = this;
      str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
        self.setFromString(prop, val);
      });
    },

    // ### toString()
    // Converts to a `transition` CSS property string. If `use3d` is given,
    // it converts to a `-webkit-transition` CSS property string instead.
    toString: function(use3d) {
      var re = [];

      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          // Don't use 3D transformations if the browser can't support it.
          if ((!support.transform3d) && (
            (i === 'rotateX') ||
            (i === 'rotateY') ||
            (i === 'perspective') ||
            (i === 'transformOrigin'))) { continue; }

          if (i[0] !== '_') {
            if (use3d && (i === 'scale')) {
              re.push(i + "3d(" + this[i] + ",1)");
            } else if (use3d && (i === 'translate')) {
              re.push(i + "3d(" + this[i] + ",0)");
            } else {
              re.push(i + "(" + this[i] + ")");
            }
          }
        }
      }

      return re.join(" ");
    }
  };

  function callOrQueue(self, queue, fn) {
    if (queue === true) {
      self.queue(fn);
    } else if (queue) {
      self.queue(queue, fn);
    } else {
      fn();
    }
  }

  // ### getProperties(dict)
  // Returns properties (for `transition-property`) for dictionary `props`. The
  // value of `props` is what you would expect in `$.css(...)`.
  function getProperties(props) {
    var re = [];

    $.each(props, function(key) {
      key = $.camelCase(key); // Convert "text-align" => "textAlign"
      key = $.transit.propertyMap[key] || $.cssProps[key] || key;
      key = uncamel(key); // Convert back to dasherized

      // Get vendor specify propertie
      if (support[key])
        key = uncamel(support[key]);

      if ($.inArray(key, re) === -1) { re.push(key); }
    });

    return re;
  }

  // ### getTransition()
  // Returns the transition string to be used for the `transition` CSS property.
  //
  // Example:
  //
  //     getTransition({ opacity: 1, rotate: 30 }, 500, 'ease');
  //     //=> 'opacity 500ms ease, -webkit-transform 500ms ease'
  //
  function getTransition(properties, duration, easing, delay) {
    // Get the CSS properties needed.
    var props = getProperties(properties);

    // Account for aliases (`in` => `ease-in`).
    if ($.cssEase[easing]) { easing = $.cssEase[easing]; }

    // Build the duration/easing/delay attributes for it.
    var attribs = '' + toMS(duration) + ' ' + easing;
    if (parseInt(delay, 10) > 0) { attribs += ' ' + toMS(delay); }

    // For more properties, add them this way:
    // "margin 200ms ease, padding 200ms ease, ..."
    var transitions = [];
    $.each(props, function(i, name) {
      transitions.push(name + ' ' + attribs);
    });

    return transitions.join(', ');
  }

  // ## $.fn.transition
  // Works like $.fn.animate(), but uses CSS transitions.
  //
  //     $("...").transition({ opacity: 0.1, scale: 0.3 });
  //
  //     // Specific duration
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500);
  //
  //     // With duration and easing
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');
  //
  //     // With callback
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, function() { ... });
  //
  //     // With everything
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() { ... });
  //
  //     // Alternate syntax
  //     $("...").transition({
  //       opacity: 0.1,
  //       duration: 200,
  //       delay: 40,
  //       easing: 'in',
  //       complete: function() { /* ... */ }
  //      });
  //
  $.fn.transition = $.fn.transit = function(properties, duration, easing, callback) {
    var self  = this;
    var delay = 0;
    var queue = true;

    var theseProperties = jQuery.extend(true, {}, properties);

    // Account for `.transition(properties, callback)`.
    if (typeof duration === 'function') {
      callback = duration;
      duration = undefined;
    }

    // Account for `.transition(properties, options)`.
    if (typeof duration === 'object') {
      easing = duration.easing;
      delay = duration.delay || 0;
      queue = duration.queue || true;
      callback = duration.complete;
      duration = duration.duration;
    }

    // Account for `.transition(properties, duration, callback)`.
    if (typeof easing === 'function') {
      callback = easing;
      easing = undefined;
    }

    // Alternate syntax.
    if (typeof theseProperties.easing !== 'undefined') {
      easing = theseProperties.easing;
      delete theseProperties.easing;
    }

    if (typeof theseProperties.duration !== 'undefined') {
      duration = theseProperties.duration;
      delete theseProperties.duration;
    }

    if (typeof theseProperties.complete !== 'undefined') {
      callback = theseProperties.complete;
      delete theseProperties.complete;
    }

    if (typeof theseProperties.queue !== 'undefined') {
      queue = theseProperties.queue;
      delete theseProperties.queue;
    }

    if (typeof theseProperties.delay !== 'undefined') {
      delay = theseProperties.delay;
      delete theseProperties.delay;
    }

    // Set defaults. (`400` duration, `ease` easing)
    if (typeof duration === 'undefined') { duration = $.fx.speeds._default; }
    if (typeof easing === 'undefined')   { easing = $.cssEase._default; }

    duration = toMS(duration);

    // Build the `transition` property.
    var transitionValue = getTransition(theseProperties, duration, easing, delay);

    // Compute delay until callback.
    // If this becomes 0, don't bother setting the transition property.
    var work = $.transit.enabled && support.transition;
    var i = work ? (parseInt(duration, 10) + parseInt(delay, 10)) : 0;

    // If there's nothing to do...
    if (i === 0) {
      var fn = function(next) {
        self.css(theseProperties);
        if (callback) { callback.apply(self); }
        if (next) { next(); }
      };

      callOrQueue(self, queue, fn);
      return self;
    }

    // Save the old transitions of each element so we can restore it later.
    var oldTransitions = {};

    var run = function(nextCall) {
      var bound = false;

      // Prepare the callback.
      var cb = function() {
        if (bound) { self.unbind(transitionEnd, cb); }

        if (i > 0) {
          self.each(function() {
            this.style[support.transition] = (oldTransitions[this] || null);
          });
        }

        if (typeof callback === 'function') { callback.apply(self); }
        if (typeof nextCall === 'function') { nextCall(); }
      };

      if ((i > 0) && (transitionEnd) && ($.transit.useTransitionEnd)) {
        // Use the 'transitionend' event if it's available.
        bound = true;
        self.bind(transitionEnd, cb);
      } else {
        // Fallback to timers if the 'transitionend' event isn't supported.
        window.setTimeout(cb, i);
      }

      // Apply transitions.
      self.each(function() {
        if (i > 0) {
          this.style[support.transition] = transitionValue;
        }
        $(this).css(properties);
      });
    };

    // Defer running. This allows the browser to paint any pending CSS it hasn't
    // painted yet before doing the transitions.
    var deferredRun = function(next) {
        this.offsetWidth; // force a repaint
        run(next);
    };

    // Use jQuery's fx queue.
    callOrQueue(self, queue, deferredRun);

    // Chainability.
    return this;
  };

  function registerCssHook(prop, isPixels) {
    // For certain properties, the 'px' should not be implied.
    if (!isPixels) { $.cssNumber[prop] = true; }

    $.transit.propertyMap[prop] = support.transform;

    $.cssHooks[prop] = {
      get: function(elem) {
        var t = $(elem).css('transit:transform');
        return t.get(prop);
      },

      set: function(elem, value) {
        var t = $(elem).css('transit:transform');
        t.setFromString(prop, value);

        $(elem).css({ 'transit:transform': t });
      }
    };

  }

  // ### uncamel(str)
  // Converts a camelcase string to a dasherized string.
  // (`marginLeft` => `margin-left`)
  function uncamel(str) {
    return str.replace(/([A-Z])/g, function(letter) { return '-' + letter.toLowerCase(); });
  }

  // ### unit(number, unit)
  // Ensures that number `number` has a unit. If no unit is found, assume the
  // default is `unit`.
  //
  //     unit(2, 'px')          //=> "2px"
  //     unit("30deg", 'rad')   //=> "30deg"
  //
  function unit(i, units) {
    if ((typeof i === "string") && (!i.match(/^[\-0-9\.]+$/))) {
      return i;
    } else {
      return "" + i + units;
    }
  }

  // ### toMS(duration)
  // Converts given `duration` to a millisecond string.
  //
  // toMS('fast') => $.fx.speeds[i] => "200ms"
  // toMS('normal') //=> $.fx.speeds._default => "400ms"
  // toMS(10) //=> '10ms'
  // toMS('100ms') //=> '100ms'
  //
  function toMS(duration) {
    var i = duration;

    // Allow string durations like 'fast' and 'slow', without overriding numeric values.
    if (typeof i === 'string' && (!i.match(/^[\-0-9\.]+/))) { i = $.fx.speeds[i] || $.fx.speeds._default; }

    return unit(i, 'ms');
  }

  // Export some functions for testable-ness.
  $.transit.getTransitionValue = getTransition;
})(jQuery);
/*
$(document).ready(function() {
    $('.who').hover(
        function () {
            $('.who span').transition({ x: '40px' });
        },
        function () {
            $('.who span').transition({ x: '-40px' });
        }
    );
});
*/
Select.init();

$('header').transition({ y: '60px', opacity: 1 }, 2000);
