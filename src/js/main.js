/* Garlicjs dist/garlic-standalone.min.js build version 1.2.4 http://garlicjs.org */
var Zepto=function(){function c(a){return"[object Function]"==Q.call(a)}function l(a){return a instanceof Object}function x(a){return l(a)&&a.__proto__==Object.prototype}function e(a){return a instanceof Array}function g(a){return"number"==typeof a.length}function z(a){return B.call(a,function(a){return a!==n&&null!==a})}function h(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function s(a){return a in F?
F[a]:F[a]=RegExp("(^|\\s)"+a+"(\\s|$)")}function k(a){return"children"in a?A.call(a.children):b.map(a.childNodes,function(a){if(1==a.nodeType)return a})}function v(a,b,d){for(t in b)d&&x(b[t])?(x(a[t])||(a[t]={}),v(a[t],b[t],d)):b[t]!==n&&(a[t]=b[t])}function p(a,u){return u===n?b(a):b(a).filter(u)}function q(a,b,d,f){return c(b)?b.call(a,d,f):b}function y(a,b){var d=a.className,c=d&&d.baseVal!==n;if(b===n)return c?d.baseVal:d;c?d.baseVal=b:a.className=b}function C(a){var u;try{return a?"true"==a||
("false"==a?!1:"null"==a?null:isNaN(u=Number(a))?/^[\[\{]/.test(a)?b.parseJSON(a):a:u):a}catch(d){return a}}function D(a,b){b(a);for(var d in a.childNodes)D(a.childNodes[d],b)}var n,t,b,f,m=[],A=m.slice,B=m.filter,w=window.document,G={},F={},H=w.defaultView.getComputedStyle,K={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,M=/^(?:body|html)$/i,S="val css html text data width height offset".split(" "),
I=w.createElement("table"),N=w.createElement("tr"),O={tr:w.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:N,th:N,"*":w.createElement("div")},T=/complete|loaded|interactive/,U=/^\.([\w-]+)$/,V=/^#([\w-]*)$/,W=/^[\w-]+$/,Q={}.toString,r={},J,E,P=w.createElement("div");return r.matches=function(a,b){if(!a||1!==a.nodeType)return!1;var d=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(d)return d.call(a,b);var c,d=a.parentNode,f=!d;return f&&(d=P).appendChild(a),
c=~r.qsa(d,b).indexOf(a),f&&P.removeChild(a),c},J=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},E=function(a){return B.call(a,function(b,d){return a.indexOf(b)==d})},r.fragment=function(a,u,d){a.replace&&(a=a.replace(R,"<$1></$2>"));u===n&&(u=L.test(a)&&RegExp.$1);u in O||(u="*");var c,f,e=O[u];return e.innerHTML=""+a,f=b.each(A.call(e.childNodes),function(){e.removeChild(this)}),x(d)&&(c=b(f),b.each(d,function(a,b){-1<S.indexOf(a)?c[a](b):c.attr(a,b)})),f},r.Z=
function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||"",a},r.isZ=function(a){return a instanceof r.Z},r.init=function(a,u){if(!a)return r.Z();if(c(a))return b(w).ready(a);if(r.isZ(a))return a;var d;if(e(a))d=z(a);else if(l(a))d=[x(a)?b.extend({},a):a],a=null;else if(L.test(a))d=r.fragment(a.trim(),RegExp.$1,u),a=null;else{if(u!==n)return b(u).find(a);d=r.qsa(w,a)}return r.Z(d,a)},b=function(a,b){return r.init(a,b)},b.extend=function(a){var b,d=A.call(arguments,1);return"boolean"==
typeof a&&(b=a,a=d.shift()),d.forEach(function(d){v(a,d,b)}),a},r.qsa=function(a,b){var d;return a===w&&V.test(b)?(d=a.getElementById(RegExp.$1))?[d]:[]:1!==a.nodeType&&9!==a.nodeType?[]:A.call(U.test(b)?a.getElementsByClassName(RegExp.$1):W.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},b.contains=function(a,b){return a!==b&&a.contains(b)},b.isFunction=c,b.isObject=l,b.isArray=e,b.isPlainObject=x,b.inArray=function(a,b,d){return m.indexOf.call(b,a,d)},b.camelCase=J,b.trim=function(a){return a.trim()},
b.uuid=0,b.support={},b.expr={},b.map=function(a,u){var d,c=[],f;if(g(a))for(f=0;f<a.length;f++)d=u(a[f],f),null!=d&&c.push(d);else for(f in a)d=u(a[f],f),null!=d&&c.push(d);return 0<c.length?b.fn.concat.apply([],c):c},b.each=function(a,b){var d;if(g(a))for(d=0;d<a.length&&!1!==b.call(a[d],d,a[d]);d++);else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},b.grep=function(a,b){return B.call(a,b)},window.JSON&&(b.parseJSON=JSON.parse),b.fn={forEach:m.forEach,reduce:m.reduce,push:m.push,sort:m.sort,
indexOf:m.indexOf,concat:m.concat,map:function(a){return b(b.map(this,function(b,d){return a.call(b,d,b)}))},slice:function(){return b(A.apply(this,arguments))},ready:function(a){return T.test(w.readyState)?a(b):w.addEventListener("DOMContentLoaded",function(){a(b)},!1),this},get:function(a){return a===n?A.call(this):this[a]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},
each:function(a){return this.forEach(function(b,d){a.call(b,d,b)}),this},filter:function(a){return c(a)?this.not(this.not(a)):b(B.call(this,function(b){return r.matches(b,a)}))},add:function(a,c){return b(E(this.concat(b(a,c))))},is:function(a){return 0<this.length&&r.matches(this[0],a)},not:function(a){var u=[];if(c(a)&&a.call!==n)this.each(function(b){a.call(this,b)||u.push(this)});else{var d="string"==typeof a?this.filter(a):g(a)&&c(a.item)?A.call(a):b(a);this.forEach(function(a){0>d.indexOf(a)&&
u.push(a)})}return b(u)},has:function(a){return this.filter(function(){return l(a)?b.contains(this,a):b(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!l(a)?a:b(a)},last:function(){var a=this[this.length-1];return a&&!l(a)?a:b(a)},find:function(a){var c;return 1==this.length?c=b(r.qsa(this[0],a)):c=this.map(function(){return r.qsa(this,a)}),c},closest:function(a,c){for(var d=this[0];d&&!r.matches(d,a);)d=d!==c&&d!==w&&
d.parentNode;return b(d)},parents:function(a){for(var c=[],d=this;0<d.length;)d=b.map(d,function(a){if((a=a.parentNode)&&a!==w&&0>c.indexOf(a))return c.push(a),a});return p(c,a)},parent:function(a){return p(E(this.pluck("parentNode")),a)},children:function(a){return p(this.map(function(){return k(this)}),a)},contents:function(){return this.map(function(){return A.call(this.childNodes)})},siblings:function(a){return p(this.map(function(a,b){return B.call(k(b.parentNode),function(a){return a!==b})}),
a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return b.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null);if("none"==H(this,"").getPropertyValue("display")){var a=this.style,b;b=this.nodeName;var d,c;b=(G[b]||(d=w.createElement(b),w.body.appendChild(d),c=H(d,"").getPropertyValue("display"),d.parentNode.removeChild(d),"none"==c&&(c="block"),G[b]=c),G[b]);a.display=b}})},replaceWith:function(a){return this.before(a).remove()},
wrap:function(a){var f=c(a);if(this[0]&&!f)var d=b(a).get(0),e=d.parentNode||1<this.length;return this.each(function(c){b(this).wrapAll(f?a.call(this,c):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){b(this[0]).before(a=b(a));for(var c;(c=a.children()).length;)a=c.first();b(a).append(this)}return this},wrapInner:function(a){var f=c(a);return this.each(function(d){var c=b(this),e=c.contents();d=f?a.call(this,d):a;e.length?e.wrapAll(d):c.append(d)})},unwrap:function(){return this.parent().each(function(){b(this).replaceWith(b(this).children())}),
this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var c=b(this);(a===n?"none"==c.css("display"):a)?c.show():c.hide()})},prev:function(a){return b(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return b(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return a===n?0<this.length?this[0].innerHTML:null:this.each(function(c){var d=this.innerHTML;
b(this).empty().append(q(this,a,c,d))})},text:function(a){return a===n?0<this.length?this[0].textContent:null:this.each(function(){this.textContent=a})},attr:function(a,b){var c;return"string"==typeof a&&b===n?0==this.length||1!==this[0].nodeType?n:"value"==a&&"INPUT"==this[0].nodeName?this.val():!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:this.each(function(c){if(1===this.nodeType)if(l(a))for(t in a){c=t;var d=a[t];null==d?this.removeAttribute(c):this.setAttribute(c,d)}else c=q(this,
b,c,this.getAttribute(a)),null==c?this.removeAttribute(a):this.setAttribute(a,c)})},removeAttr:function(a){return this.each(function(){1===this.nodeType&&this.removeAttribute(a)})},prop:function(a,b){return b===n?this[0]?this[0][a]:n:this.each(function(c){this[a]=q(this,b,c,this[a])})},data:function(a,b){var c=this.attr("data-"+h(a),b);return null!==c?C(c):n},val:function(a){return a===n?0<this.length?this[0].multiple?b(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):
this[0].value:n:this.each(function(b){this.value=q(this,a,b,this.value)})},offset:function(){if(0==this.length)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(a,b){if(2>arguments.length&&"string"==typeof a)return 0==this.length?n:this[0].style[J(a)]||H(this[0],"").getPropertyValue(a);var c="";for(t in a)!a[t]&&0!==a[t]?this.each(function(){this.style.removeProperty(h(t))}):c+=h(t)+":"+
("number"==typeof a[t]&&!K[h(t)]?a[t]+"px":a[t])+";";return"string"==typeof a&&(!b&&0!==b?this.each(function(){this.style.removeProperty(h(a))}):c=h(a)+":"+("number"==typeof b&&!K[h(a)]?b+"px":b)),this.each(function(){this.style.cssText+=";"+c})},index:function(a){return a?this.indexOf(b(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return 1>this.length?!1:s(a).test(y(this[0]))},addClass:function(a){return this.each(function(c){f=[];var d=y(this);q(this,a,c,d).split(/\s+/g).forEach(function(a){b(this).hasClass(a)||
f.push(a)},this);f.length&&y(this,d+(d?" ":"")+f.join(" "))})},removeClass:function(a){return this.each(function(b){if(a===n)return y(this,"");f=y(this);q(this,a,b,f).split(/\s+/g).forEach(function(a){f=f.replace(s(a)," ")});y(this,f.trim())})},toggleClass:function(a,c){return this.each(function(d){d=q(this,a,d,y(this));(c===n?!b(this).hasClass(d):c)?b(this).addClass(d):b(this).removeClass(d)})},scrollTop:function(){if(this.length)return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(this.length){var a=
this[0],c=this.offsetParent(),d=this.offset(),f=M.test(c[0].nodeName)?{top:0,left:0}:c.offset();return d.top-=parseFloat(b(a).css("margin-top"))||0,d.left-=parseFloat(b(a).css("margin-left"))||0,f.top+=parseFloat(b(c[0]).css("border-top-width"))||0,f.left+=parseFloat(b(c[0]).css("border-left-width"))||0,{top:d.top-f.top,left:d.left-f.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||w.body;a&&!M.test(a.nodeName)&&"static"==b(a).css("position");)a=a.offsetParent;
return a})}},["width","height"].forEach(function(a){b.fn[a]=function(c){var d,f=a.replace(/./,function(a){return a[0].toUpperCase()});return c===n?this[0]==window?window["inner"+f]:this[0]==w?w.documentElement["offset"+f]:(d=this.offset())&&d[a]:this.each(function(d){var f=b(this);f.css(a,q(this,c,d,f[a]()))})}}),["after","prepend","before","append"].forEach(function(a,c){var d=c%2;b.fn[a]=function(){var a=b.map(arguments,function(a){return l(a)?a:r.fragment(a)}),f,e=1<this.length;return 1>a.length?
this:this.each(function(m,g){f=d?g:g.parentNode;g=0==c?g.nextSibling:1==c?g.firstChild:2==c?g:null;a.forEach(function(a){if(e)a=a.cloneNode(!0);else if(!f)return b(a).remove();D(f.insertBefore(a,g),function(a){null!=a.nodeName&&"SCRIPT"===a.nodeName.toUpperCase()&&(!a.type||"text/javascript"===a.type)&&!a.src&&window.eval.call(window,a.innerHTML)})})})};b.fn[d?a+"To":"insert"+(c?"Before":"After")]=function(c){return b(c)[a](this),this}}),r.Z.prototype=b.fn,r.uniq=E,r.deserializeValue=C,b.zepto=r,
b}();window.Zepto=Zepto;"$"in window||(window.$=Zepto);
(function(c){function l(b){return b._zid||(b._zid=p++)}function x(b,c,g,k){c=e(c);if(c.ns)var h=RegExp("(?:^| )"+c.ns.replace(" "," .* ?")+"(?: |$)");return(v[l(b)]||[]).filter(function(b){return b&&(!c.e||b.e==c.e)&&(!c.ns||h.test(b.ns))&&(!g||l(b.fn)===l(g))&&(!k||b.sel==k)})}function e(b){b=(""+b).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function g(b,f,e){c.isObject(b)?c.each(b,e):b.split(/\s/).forEach(function(b){e(b,f)})}function z(b,f,m,k,h,q){var p=l(b),n=v[p]||(v[p]=[]);g(f,
m,function(f,g){var m=e(f);m.fn=g;m.sel=k;m.e in y&&(g=function(b){var f=b.relatedTarget;if(!f||f!==this&&!c.contains(this,f))return m.fn.apply(this,arguments)});m.del=h&&h(g,f);var p=m.del||g;m.proxy=function(c){var f=p.apply(b,[c].concat(c.data));return!1===f&&(c.preventDefault(),c.stopPropagation()),f};m.i=n.length;n.push(m);b.addEventListener(y[m.e]||m.e,m.proxy,m.del&&("focus"==m.e||"blur"==m.e)||!!q)})}function h(b,c,e,k,h){var q=l(b);g(c||"",e,function(c,f){x(b,c,f,k).forEach(function(c){delete v[q][c.i];
b.removeEventListener(y[c.e]||c.e,c.proxy,c.del&&("focus"==c.e||"blur"==c.e)||!!h)})})}function s(b){var f,e={originalEvent:b};for(f in b)!n.test(f)&&void 0!==b[f]&&(e[f]=b[f]);return c.each(t,function(c,f){e[c]=function(){return this[f]=C,b[c].apply(b,arguments)};e[f]=D}),e}function k(b){if(!("defaultPrevented"in b)){b.defaultPrevented=!1;var c=b.preventDefault;b.preventDefault=function(){this.defaultPrevented=!0;c.call(this)}}}var v={},p=1,q={},y={mouseenter:"mouseover",mouseleave:"mouseout"};q.click=
q.mousedown=q.mouseup=q.mousemove="MouseEvents";c.event={add:z,remove:h};c.proxy=function(b,f){if(c.isFunction(b)){var e=function(){return b.apply(f,arguments)};return e._zid=l(b),e}if("string"==typeof f)return c.proxy(b[f],b);throw new TypeError("expected function");};c.fn.bind=function(b,c){return this.each(function(){z(this,b,c)})};c.fn.unbind=function(b,c){return this.each(function(){h(this,b,c)})};c.fn.one=function(b,c){return this.each(function(e,g){z(this,b,c,null,function(b,c){return function(){var f=
b.apply(g,arguments);return h(g,c,b),f}})})};var C=function(){return!0},D=function(){return!1},n=/^([A-Z]|layer[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};c.fn.delegate=function(b,f,e){return this.each(function(g,k){z(k,f,e,b,function(f){return function(e){var g,m=c(e.target).closest(b,k).get(0);if(m)return g=c.extend(s(e),{currentTarget:m,liveFired:k}),f.apply(m,[g].concat([].slice.call(arguments,
1)))}})})};c.fn.undelegate=function(b,c,e){return this.each(function(){h(this,c,e,b)})};c.fn.live=function(b,f){return c(document.body).delegate(this.selector,b,f),this};c.fn.die=function(b,f){return c(document.body).undelegate(this.selector,b,f),this};c.fn.on=function(b,f,e){return!f||c.isFunction(f)?this.bind(b,f||e):this.delegate(f,b,e)};c.fn.off=function(b,f,e){return!f||c.isFunction(f)?this.unbind(b,f||e):this.undelegate(f,b,e)};c.fn.trigger=function(b,f){if("string"==typeof b||c.isPlainObject(b))b=
c.Event(b);return k(b),b.data=f,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})};c.fn.triggerHandler=function(b,f){var e,g;return this.each(function(k,h){e=s("string"==typeof b?c.Event(b):b);e.data=f;e.target=h;c.each(x(h,b.type||b),function(b,c){g=c.proxy(e);if(e.isImmediatePropagationStopped())return!1})}),g};"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){c.fn[b]=
function(c){return c?this.bind(b,c):this.trigger(b)}});["focus","blur"].forEach(function(b){c.fn[b]=function(c){return c?this.bind(b,c):this.each(function(){try{this[b]()}catch(c){}}),this}});c.Event=function(b,c){"string"!=typeof b&&(c=b,b=c.type);var e=document.createEvent(q[b]||"Events"),g=!0;if(c)for(var k in c)"bubbles"==k?g=!!c[k]:e[k]=c[k];return e.initEvent(b,g,!0,null,null,null,null,null,null,null,null,null,null,null,null),e.isDefaultPrevented=function(){return this.defaultPrevented},e}})(Zepto);
(function(c){function l(e,v){var p=e[s],p=p&&g[p];if(void 0===v)return p||x(e);if(p){if(v in p)return p[v];var q=h(v);if(q in p)return p[q]}return z.call(c(e),v)}function x(k,v,p){var q=k[s]||(k[s]=++c.uuid);k=g[q]||(g[q]=e(k));return void 0!==v&&(k[h(v)]=p),k}function e(e){var g={};return c.each(e.attributes,function(e,k){0==k.name.indexOf("data-")&&(g[h(k.name.replace("data-",""))]=c.zepto.deserializeValue(k.value))}),g}var g={},z=c.fn.data,h=c.camelCase,s=c.expando="Zepto"+ +new Date;c.fn.data=
function(e,g){return void 0===g?c.isPlainObject(e)?this.each(function(g,h){c.each(e,function(c,e){x(h,c,e)})}):0==this.length?void 0:l(this[0],e):this.each(function(){x(this,e,g)})};c.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var v=this[s],p=v&&g[v];p&&c.each(e,function(){delete p[h(this)]})})}})(Zepto);!function(c){var l=function(c){this.defined="undefined"!==typeof localStorage};l.prototype={constructor:l,get:function(c,g){return localStorage.getItem(c)?localStorage.getItem(c):"undefined"!==typeof g?g:null},has:function(c){return localStorage.getItem(c)?!0:!1},set:function(c,g,l){"string"===typeof g&&(""===g?this.destroy(c):localStorage.setItem(c,g));return"function"===typeof l?l():!0},destroy:function(c,g){localStorage.removeItem(c);return"function"===typeof g?g():!0},clean:function(c){for(var g=
localStorage.length-1;0<=g;g--)"undefined"===typeof Array.indexOf&&-1!==localStorage.key(g).indexOf("garlic:")&&localStorage.removeItem(localStorage.key(g));return"function"===typeof c?c():!0},clear:function(c){localStorage.clear();return"function"===typeof c?c():!0}};var x=function(c,g,l){this.init("garlic",c,g,l)};x.prototype={constructor:x,init:function(e,g,l,h){this.type=e;this.$element=c(g);this.options=this.getOptions(h);this.storage=l;this.path=this.options.getPath(this.$element)||this.getPath();
this.parentForm=this.$element.closest("form");this.$element.addClass("garlic-auto-save");this.expiresFlag=!this.options.expires?!1:(this.$element.data("expires")?this.path:this.getPath(this.parentForm))+"_flag";this.$element.on(this.options.events.join("."+this.type+" "),!1,c.proxy(this.persist,this));if(this.options.destroy)c(this.parentForm).on("submit reset",!1,c.proxy(this.destroy,this));this.retrieve()},getOptions:function(e){return c.extend({},c.fn[this.type].defaults,e,this.$element.data())},
persist:function(){this.val!==this.getVal()&&(this.val=this.getVal(),this.options.expires&&this.storage.set(this.expiresFlag,((new Date).getTime()+1E3*this.options.expires).toString()),this.storage.set(this.path,this.getVal()),this.options.onPersist(this.$element,this.getVal()))},getVal:function(){return!this.$element.is("input[type=checkbox]")?this.$element.val():this.$element.prop("checked")?"checked":"unchecked"},retrieve:function(){if(this.storage.has(this.path)){if(this.options.expires){var c=
(new Date).getTime();if(this.storage.get(this.expiresFlag)<c.toString()){this.storage.destroy(this.path);return}this.$element.attr("expires-in",Math.floor((parseInt(this.storage.get(this.expiresFlag))-c)/1E3))}c=this.storage.get(this.path);if(this.options.conflictManager.enabled&&this.detectConflict())return this.conflictManager();if(this.$element.is("input[type=radio], input[type=checkbox]")){if("checked"===c||this.$element.val()===c)return this.$element.attr("checked",!0);"unchecked"===c&&this.$element.attr("checked",
!1)}else this.$element.val(c),this.$element.trigger("input"),this.options.onRetrieve(this.$element,c)}},detectConflict:function(){var e=this;if(this.$element.is("input[type=checkbox], input[type=radio]"))return!1;if(this.$element.val()&&this.storage.get(this.path)!==this.$element.val()){if(this.$element.is("select")){var g=!1;this.$element.find("option").each(function(){0!==c(this).index()&&(c(this).attr("selected")&&c(this).val()!==e.storage.get(this.path))&&(g=!0)});return g}return!0}return!1},
conflictManager:function(){if("function"===typeof this.options.conflictManager.onConflictDetected&&!this.options.conflictManager.onConflictDetected(this.$element,this.storage.get(this.path)))return!1;this.options.conflictManager.garlicPriority?(this.$element.data("swap-data",this.$element.val()),this.$element.data("swap-state","garlic"),this.$element.val(this.storage.get(this.path))):(this.$element.data("swap-data",this.storage.get(this.path)),this.$element.data("swap-state","default"));this.swapHandler();
this.$element.addClass("garlic-conflict-detected");this.$element.closest("input[type=submit]").attr("disabled",!0)},swapHandler:function(){var e=c(this.options.conflictManager.template);this.$element.after(e.text(this.options.conflictManager.message));e.on("click",!1,c.proxy(this.swap,this))},swap:function(){var e=this.$element.data("swap-data");this.$element.data("swap-state","garlic"===this.$element.data("swap-state")?"default":"garlic");this.$element.data("swap-data",this.$element.val());c(this.$element).val(e)},
destroy:function(){this.storage.destroy(this.path)},remove:function(){this.remove();this.$element.is("input[type=radio], input[type=checkbox]")?c(this.$element).prop("checked",!1):this.$element.val("")},getPath:function(e){"undefined"===typeof e&&(e=this.$element);if(this.options.getPath(e))return this.options.getPath(e);if(1!=e.length)return!1;for(var g="",l=e.is("input[type=checkbox]"),h=e;h.length;){e=h[0];var s=e.nodeName;if(!s)break;var s=s.toLowerCase(),h=h.parent(),k=h.children(s);if(c(e).is("form, input, select, textarea")||
l)if(s+=c(e).attr("name")?"."+c(e).attr("name"):"",1<k.length&&!c(e).is("input[type=radio]")&&(s+=":eq("+k.index(e)+")"),g=s+(g?">"+g:""),"form"==e.nodeName.toLowerCase())break}return"garlic:"+document.domain+(this.options.domain?"*":window.location.pathname)+">"+g},getStorage:function(){return this.storage}};c.fn.garlic=function(e,g){function z(g){var k=c(g),l=k.data("garlic"),y=c.extend({},h,k.data());if(("undefined"===typeof y.storage||y.storage)&&"password"!==c(g).attr("type"))if(l||k.data("garlic",
l=new x(g,s,y)),"string"===typeof e&&"function"===typeof l[e])return l[e]()}var h=c.extend(!0,{},c.fn.garlic.defaults,e,this.data()),s=new l,k=!1;if(!s.defined)return!1;this.each(function(){c(this).is("form")?c(this).find(h.inputs).each(function(){c(this).is(h.excluded)||(k=z(c(this)))}):c(this).is(h.inputs)&&!c(this).is(h.excluded)&&(k=z(c(this)))});return"function"===typeof g?g():k};c.fn.garlic.Constructor=x;c.fn.garlic.defaults={destroy:!0,inputs:"input, textarea, select",excluded:'input[type="file"], input[type="hidden"], input[type="submit"]',
events:"DOMAttrModified textInput input change click keypress paste focus".split(" "),domain:!1,expires:!1,conflictManager:{enabled:!1,garlicPriority:!0,template:'<span class="garlic-swap"></span>',message:"This is your saved data. Click here to see default one",onConflictDetected:function(c,g){return!0}},getPath:function(c){},onRetrieve:function(c,g){},onPersist:function(c,g){}};c(window).on("load",function(){c('[data-persist="garlic"]').each(function(){c(this).garlic()})})}(window.jQuery||window.Zepto);
(function ( window, document, undefined ) {

	'use strict';


	 /**
	 * Selectors
	 */

	// Files
	var svgSymbols = 'sprite.svg';

	// Class Names
	var fontsLoaded = 'fonts-loaded';

	// Elements
	var checklist = document.getElementById('js-checklist');
	var inputCount = checklist.querySelectorAll('.control').length;
	var progressBar = document.getElementById('js-progress-bar');
	var progressCount = document.getElementById('js-progress-count');


	/**
	* Methods
	*/

	var loadSVG = (function() {
		var ajax = new XMLHttpRequest();
		ajax.open('GET', svgSymbols, true);
		ajax.send();
		ajax.onload = function() {
			var div = document.createElement('div');
			div.style.display = 'none';
			div.innerHTML = ajax.responseText;
			document.body.insertBefore(div, document.body.childNodes[0]);
		};
	})();

	var loadFonts = (function() {
		var fontA = new FontFaceObserver('Gotham Book Regular', {
			weight: 400
		});

		var fontB = new FontFaceObserver('Gotham Bold Regular', {
			weight: 800
		});

		Promise
			.all([
				fontA.check(),
				fontB.check()
			])
			.then(function() {
				document.body.className += ' ' + fontsLoaded;
		});
	})();

	var supportsSvg = function() {
		var div = document.createElement('div');
		div.innerHTML = '<svg/>';
		return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
	};

	var iconsFallback = function() {

		// Get all SVGs on the page and how many there are
		var svgs = document.getElementsByTagName('svg'),
		svgL = svgs.length;

		// Loop through all SVGs on the page
		while( svgL-- ) {

			// If SVG isn't the first one, continue ...
			if(svgL > 0) {

				// Get title attribute of SVG
				var svgTitle = svgs[svgL].getAttribute('title');

				// Get all  elements from each SVG
				var uses = svgs[svgL].getElementsByTagName('use'),
				usesL = uses.length;

				// Loop through all  elements within an SVG
				while( usesL-- ) {

					// Get the 'xlink:href' attributes
					var svgId = uses[usesL].getAttribute('xlink:href');

					// Remove first character from variable (This removes the #)
					svgId = svgId.substring(1, svgId.length);

					// Create New Image
					var newImg = document.createElement('img');

					// Assign src attribute
					newImg.src = 'assets/dist/icons/png/' + svgId + '.png';

					// Assign alt attribute
					newImg.alt = svgTitle ? svgTitle : '';

					// Insert new element straight after the SVG in question
					svgs[svgL].parentNode.insertBefore(newImg, svgs[svgL].nextSibling);

				}

				// Remove all SVG nodes
				svgs[svgL].parentNode.removeChild(svgs[svgL]);
			}
		}
	};

	var forEach = function ( collection, callback, scope ) {
		if ( Object.prototype.toString.call( collection ) === '[object Object]') {
			for ( var prop in collection ) {
				if ( Object.prototype.hasOwnProperty.call( collection, prop )) {
					callback.call( scope, collection[prop], prop, collection );
				}
			}
		} else {
			for (var i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, collection[i], i, collection);
			}
		}
	};

	var checklistProgress = function() {
		var checklistChildren = checklist.querySelectorAll('input');
		var checkedCount = 0;
		forEach(checklistChildren, function (value) {
			if (value.checked) {
				checkedCount++;
			}
		});
		return checkedCount / inputCount * 100 + '%';
	};

	var updateChecklistProgress = function() {
		progressBar.style.width = checklistProgress();
		progressCount.innerHTML = parseFloat(checklistProgress()).toFixed(0) + '%';
	};

	var resetChecklist = function() {
		localStorage.clear();
		document.location.reload(!0);
	};

	var clickEventHandler = function( event ) {
		if ( event.target.type === 'reset' ) {
			resetChecklist();
		}
	};


	/**
	* Events/APIs/init
	*/

	if ( !supportsSvg() ) {
		iconsFallback();
	}

	$( '#js-checklist' ).garlic();

	updateChecklistProgress();

	checklist.addEventListener('change', function(event) {
		updateChecklistProgress();
	});

	document.addEventListener( 'click', clickEventHandler, false );

})( window, document );
//# sourceMappingURL=maps/main.js.map
