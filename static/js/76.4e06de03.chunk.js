"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(861),a=n(439),i=n(757),c=n.n(i),s=n(844),u=n(791),o=n(689),p=n(12),l="Cast_cast__container__d3UyY",f="Cast_cast__list__yNezN",h="Cast_cast__item__UfPEI",d="Cast_cast__img__IB6ux",m="Cast_cast__info__XMSaD",_="Cast_cast__notFound__VA52D",v=n(184),y=function(){var t=(0,o.UO)().movieId,e=(0,u.useState)(null),n=(0,a.Z)(e,2),i=n[0],y=n[1];return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.dZ)(t);case 2:n=e.sent,y(n.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(t)}),[t]),i?0===i.length?(0,v.jsx)("div",{className:_,children:"Sorry, we don't have any information about the cast"}):(0,v.jsx)("div",{className:l,children:(0,v.jsx)("ul",{className:f,children:i.map((function(t){return(0,v.jsxs)("li",{className:h,children:[(0,v.jsx)("img",{className:d,src:t.profile_path?"https://image.tmdb.org/t/p/w185".concat(t.profile_path):p,alt:t.name,width:"180px",height:"270px"}),(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{children:(0,v.jsx)("b",{children:t.name})}),(0,v.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})}):(0,v.jsx)("div",{children:"Loading..."})}},844:function(t,e,n){n.d(e,{Fi:function(){return l},H9:function(){return v},To:function(){return h},dZ:function(){return m},kk:function(){return o}});var r=n(861),a=n(757),i=n.n(a),c=n(686),s=n(243),u="6f4e972748a8ce0b96b8a311e5f34016";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(u));case 2:return null===(e=t.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),n=[],e.data.results.forEach((function(t){return n.push({id:t.id,title:t.title})})),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(u));case 2:return null===(n=t.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(e));case 2:return null===(n=t.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return null===(n=t.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return null===(n=t.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},12:function(t,e,n){t.exports=n.p+"static/media/clapper-2140602_1920.bf35eca21ea030f3ddc2.jpg"}}]);
//# sourceMappingURL=76.4e06de03.chunk.js.map