"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{844:function(e,t,n){n.d(t,{Fi:function(){return l},H9:function(){return _},To:function(){return h},dZ:function(){return m},kk:function(){return o}});var r=n(861),a=n(757),i=n.n(a),c=n(686),s=n(243),u="6f4e972748a8ce0b96b8a311e5f34016";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(u));case 2:return null===(t=e.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),n=[],t.data.results.forEach((function(e){return n.push({id:e.id,title:e.title})})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u));case 2:return null===(n=e.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return null===(n=e.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return null===(n=e.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return null===(n=e.sent)&&c.Notify.failure("Fetching movies failed, please try again later"),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},959:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),a=n(439),i=n(757),c=n.n(i),s=n(791),u=n(87),o=n(844),p="MoviesSearching_moviesSearching__container__46blC",l="MoviesSearching_moviesSearching__YThh0",f="MoviesSearching_moviesSearching__form__FNtcH",h="MoviesSearching_moviesSearching__input__pf9rP",v="MoviesSearching_moviesSearching__button__A4sRv",m="MoviesSearching_moviesSearching__list__eJ17g",d="MoviesSearching_moviesSearching__link__C3CCg",_=n(184),g=function(){var e,t=(0,s.useState)([]),n=(0,a.Z)(t,2),i=n[0],g=n[1],y=(0,s.useState)([""]),x=(0,a.Z)(y,2),k=x[0],w=x[1],b=(0,u.lr)(),S=(0,a.Z)(b,2),Z=S[0],N=S[1],j=null!==(e=Z.get("name"))&&void 0!==e?e:"";(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.To)(j);case 2:t=e.sent,g(t.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(j),w(j)}),[j]);var C=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,(0,o.To)(k);case 3:n=e.sent,g(n.results),N({name:k});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("div",{className:l,children:(0,_.jsxs)("form",{className:f,onSubmit:C,children:[(0,_.jsx)("input",{className:h,type:"text",placeholder:"Enter a movie name",value:k,onChange:function(e){w(e.target.value)},id:"movie_search"}),(0,_.jsx)("button",{className:v,type:"submit",children:"Search"})]})}),(0,_.jsx)("div",{children:(0,_.jsx)("ul",{className:m,children:i.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)(u.rU,{className:d,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})})]})},y=function(){return(0,_.jsx)(g,{})}}}]);
//# sourceMappingURL=959.6a8017bb.chunk.js.map