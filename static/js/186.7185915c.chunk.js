"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{600:function(e,t,r){r.r(t),r.d(t,{fetchCast:function(){return h},fetchGetTranding:function(){return i},fetchMovieId:function(){return f},fetchReviews:function(){return v},fetchSearchMovie:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(294),s="https://api.themoviedb.org/3/",o="3a86e3da3e452faa5b0083627dadb2c7",i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o,page:1},e.next=3,u.Z.get("".concat(s,"trending/movie/day"),{params:t});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:o,page:1,query:t},e.next=3,u.Z.get("".concat(s,"search/movie"),{params:r});case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:o,page:1},e.next=3,u.Z.get("".concat(s,"movie/").concat(t),{params:r});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:o,language:"en-US"},e.prev=1,e.next=4,u.Z.get("".concat(s,"movie/").concat(t,"/credits"),{params:r});case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:o,language:"en-US"},e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{params:r});case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},186:function(e,t,r){r.r(t);var n=r(439),a=r(600),c=r(791),u=r(689),s=r(184);t.default=function(){var e=(0,c.useState)([]),t=(0,n.Z)(e,2),r=t[0],o=t[1],i=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,a.fetchReviews)(i).then((function(e){return o(e)})).catch((function(e){console.log(e.message),o([])}))}),[i]),(0,s.jsxs)("div",{children:[r.length>0&&(0,s.jsx)("ul",{children:r.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}),0===r.length&&(0,s.jsx)("p",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=186.7185915c.chunk.js.map