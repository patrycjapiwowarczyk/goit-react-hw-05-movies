"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[363],{844:function(e,t,i){i.d(t,{Fi:function(){return d},H9:function(){return h},To:function(){return f},dZ:function(){return m},kk:function(){return l}});var n=i(861),a=i(757),r=i.n(a),s=i(686),o=i(243),c="6f4e972748a8ce0b96b8a311e5f34016";function l(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(r().mark((function e(){var t,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c));case 2:return null===(t=e.sent)&&s.Notify.failure("Fetching movies failed, please try again later"),i=[],t.data.results.forEach((function(e){return i.push({id:e.id,title:e.title})})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(r().mark((function e(t){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c));case 2:return null===(i=e.sent)&&s.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(r().mark((function e(t){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return null===(i=e.sent)&&s.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(r().mark((function e(t){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return null===(i=e.sent)&&s.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(r().mark((function e(t){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return null===(i=e.sent)&&s.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},363:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(791),a=i(439),r=i(844),s=i(689),o=i(87),c={movieDetails__container:"MovieDetails_movieDetails__container__Iaylr",movieDetails:"MovieDetails_movieDetails__EqwEX",movieDetails__poster:"MovieDetails_movieDetails__poster__KnEKw",movieDetails__title:"MovieDetails_movieDetails__title__2ympJ",movieDetails__genres:"MovieDetails_movieDetails__genres__x6kEb",additionalInfo:"MovieDetails_additionalInfo__qmwMY",additionalInfo__list:"MovieDetails_additionalInfo__list__1QymM",additionalInfo__item:"MovieDetails_additionalInfo__item__BKbKm"},l=i(12),u=i(184),d=function(){var e=(0,s.UO)().movieId,t=(0,n.useState)(null),i=(0,a.Z)(t,2),d=i[0],p=i[1];if((0,n.useEffect)((function(){(0,r.Fi)(e).then((function(e){p(e)}))}),[e]),!d)return(0,u.jsx)("div",{children:"Loading..."});var f=d.title,_=d.poster_path,m=d.release_date,v=d.vote_average,h=d.overview,x=d.genres,g=m.substring(0,4),y=Math.ceil(10*v);return(0,u.jsxs)("div",{className:c.movieDetails__container,children:[(0,u.jsxs)("div",{className:c.movieDetails,children:[(0,u.jsx)("div",{className:c.movieDetails__img,children:(0,u.jsx)("img",{className:c.movieDetails__poster,src:_?"https://image.tmdb.org/t/p/w500".concat(_):l,alt:f})}),(0,u.jsxs)("div",{className:c.movieDetails__info,children:[(0,u.jsxs)("h1",{className:c.movieDetails__title,children:[f," (",g,")"]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"User score:"})," ",y]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Overview:"})," ",h]}),(0,u.jsxs)("ul",{className:c.movieDetails__genres,children:[(0,u.jsx)("b",{children:"Genres:"})," ",x.map((function(e){return(0,u.jsx)("li",{children:e.name},e.id)}))]})]})]}),(0,u.jsxs)("div",{className:c.additionalInfo,children:[(0,u.jsx)("b",{children:"Additional information:"}),(0,u.jsxs)("ul",{className:c.additionalInfo__list,children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{className:c.additionalInfo__item,to:"cast",from:"/",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{className:c.additionalInfo__item,to:"reviews",from:"/",children:"Reviews"})})]})]}),(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading subpage..."}),children:(0,u.jsx)(s.j3,{})})]})},p=function(){return(0,u.jsx)(d,{})}},12:function(e,t,i){e.exports=i.p+"static/media/clapper-2140602_1920.bf35eca21ea030f3ddc2.jpg"}}]);
//# sourceMappingURL=363.f207b042.chunk.js.map