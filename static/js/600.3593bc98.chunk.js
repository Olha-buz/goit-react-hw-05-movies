"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[600],{600:function(e,t,n){n.r(t),n.d(t,{fetchCast:function(){return l},fetchGetTranding:function(){return o},fetchMovieId:function(){return p},fetchReviews:function(){return h},fetchSearchMovie:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(294),i="https://api.themoviedb.org/3/",s="3a86e3da3e452faa5b0083627dadb2c7",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s,page:1},e.next=3,u.Z.get("".concat(i,"trending/movie/day"),{params:t});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,page:1,query:t},e.next=3,u.Z.get("".concat(i,"search/movie"),{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,page:1},e.next=3,u.Z.get("".concat(i,"movie/").concat(t),{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,language:"en-US"},e.prev=1,e.next=4,u.Z.get("".concat(i,"movie/").concat(t,"/credits"),{params:n});case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,language:"en-US"},e.next=3,u.Z.get("".concat(i,"movie/").concat(t,"/reviews"),{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},854:function(e,t,n){n.r(t);var r=n(154),a=n(184);t.default=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.Rf,{color:"#4fa94d",width:"100",visible:!0,ariaLabel:"falling-circles-loading"})})}},510:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(689),a=n(87),c={movieList:"MovieList_movieList__uFrOZ",movieItemLink:"MovieList_movieItemLink__plUV2"},u=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{className:c.movieList,children:t.length>0&&t.map((function(e){return(0,u.jsx)("li",{className:c.movieItem,children:(0,u.jsx)(a.Link,{className:c.movieItemLink,to:"/movies/".concat(e.id),state:{from:n},children:(0,u.jsx)("h4",{children:e.title})})},e.id)}))})}},488:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),a=n(600),c=n(854),u=n(510),i=n(791),s="SearchForm_searchForm__NsJpF",o="SearchForm_searchInput__h6REp",f="SearchForm_searchBtn__rp2a7",p=n(184),l=function(e){var t=e.setParams,n=(0,i.useState)(""),a=(0,r.Z)(n,2),c=a[0],u=a[1];return(0,p.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault(),t(c)},children:[(0,p.jsx)("input",{className:o,type:"text",value:c,placeholder:"Enter movie to search",onChange:function(e){u(e.target.value)}}),(0,p.jsx)("button",{className:f,type:"submit",children:"Search"})]})},h=n(87),m=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],o=(0,h.useSearchParams)(),f=(0,r.Z)(o,2),m=f[0],v=f[1],d=(0,i.useState)(!1),g=(0,r.Z)(d,2),x=g[0],_=g[1],k=(0,i.useState)(!1),w=(0,r.Z)(k,2),Z=w[0],y=w[1],b=m.get("query");(0,i.useEffect)((function(){b&&(_(!0),(0,a.fetchSearchMovie)(b).then((function(e){s(e),y(0===e.length)})).catch((function(e){console.log(e.message)})).finally((function(){_(!1)})))}),[b]);return(0,p.jsxs)("div",{children:[(0,p.jsx)(l,{setParams:function(e){v({query:e})}}),x&&(0,p.jsx)(c.default,{}),Z&&(0,p.jsx)("h2",{children:"Nothing find"}),n.length>0&&(0,p.jsx)(u.Z,{movies:n})]})}}}]);
//# sourceMappingURL=600.3593bc98.chunk.js.map