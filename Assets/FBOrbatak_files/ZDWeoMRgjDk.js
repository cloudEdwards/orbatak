/*!CK:3143097831!*//*1417462414,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["G+OAW"]); }

__d("PagesInfoTabNav",["CSS","DOM","Event","PageTransitions","URI"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){return k(window.location).getPath();}function m(){return k(window.location.href).getQueryData().edited;}function n(o,p,q,r){"use strict";this.$PagesInfoTabNav0=l();this.$PagesInfoTabNav1=k(window.location).getQueryData().sk;this.$PagesInfoTabNav2=o;this.$PagesInfoTabNav3=this.$PagesInfoTabNav2[0];this.$PagesInfoTabNav4='';this.$PagesInfoTabNav5=[];this.$PagesInfoTabNav6=[];this.$PagesInfoTabNav2.forEach(function(s){var t='[data-id="'+s+'"]',u=h.scry(p,t)[0],v=h.scry(q,t)[0];this.$PagesInfoTabNav5.push(u);this.$PagesInfoTabNav6.push(v);i.listen(u,'click',this.$PagesInfoTabNav7.bind(this,s));}.bind(this),this);j.registerHandler(function(s){var t=s.getQueryData();if(this.$PagesInfoTabNav0===l()&&this.$PagesInfoTabNav0===s.getPath()&&this.$PagesInfoTabNav1===t.sk&&m()===t.edited&&!t.ext){this.$PagesInfoTabNav8(s.getQueryData().tab);j.transitionComplete();return true;}}.bind(this));this.$PagesInfoTabNav7(r);}n.prototype.$PagesInfoTabNav7=function(o){"use strict";var p=k(window.location).addQueryData({tab:o}).removeQueryData('ext').toString();j.go(p);};n.prototype.$PagesInfoTabNav8=function(o){"use strict";if(this.$PagesInfoTabNav4==o)return;if(!o)o=this.$PagesInfoTabNav3;this.$PagesInfoTabNav5.forEach(function(p){var q=p.getAttribute('data-id');if(q==o){g.addClass(p,'selected');}else g.removeClass(p,'selected');});this.$PagesInfoTabNav6.forEach(function(p){var q=p.getAttribute('data-id');if(q==o){g.show(p);}else g.hide(p);});this.$PagesInfoTabNav4=o;};e.exports=n;},null);
__d("legacy:pages-publish",["pages_publish"],function(a,b,c,d){a.pages_publish=b('pages_publish');},3);