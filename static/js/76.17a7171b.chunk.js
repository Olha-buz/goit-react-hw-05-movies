"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{600:function(t,e,r){r.r(e),r.d(e,{fetchCast:function(){return h},fetchGetTranding:function(){return i},fetchMovieId:function(){return f},fetchReviews:function(){return l},fetchSearchMovie:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(294),u="https://api.themoviedb.org/3/",o="3a86e3da3e452faa5b0083627dadb2c7",i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,page:1},t.next=3,s.Z.get("".concat(u,"trending/movie/day"),{params:e});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,page:1,query:e},t.next=3,s.Z.get("".concat(u,"search/movie"),{params:r});case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,page:1},t.next=3,s.Z.get("".concat(u,"movie/").concat(e),{params:r});case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,language:"en-US"},t.prev=1,t.next=4,s.Z.get("".concat(u,"movie/").concat(e,"/credits"),{params:r});case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,language:"en-US"},t.next=3,s.Z.get("".concat(u,"movie/").concat(e,"/reviews"),{params:r});case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(439),a=r(600),c=r(791),s=r(689),u="Cast_castList__ARoWn",o="Cast_castItem__-Jcfe",i="Cast_castInfo__fGvyp",p=r(184),f=function(){var t=(0,c.useState)([]),e=(0,n.Z)(t,2),r=e[0],f=e[1],h=(0,s.UO)().movieId;return(0,c.useEffect)((function(){(0,a.fetchCast)(h).then((function(t){f(t.cast),console.log(t.cast)})).catch((function(t){return console.log(t.message)}))}),[h]),(0,p.jsxs)("ul",{className:u,children:[r.map((function(t){var e=t.id,r=t.profile_path,n=t.original_name,a=t.character;return(0,p.jsxs)("li",{className:o,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r),alt:n,width:120}),(0,p.jsxs)("div",{className:i,children:[(0,p.jsxs)("p",{children:["Actor: ",n]}),(0,p.jsxs)("p",{children:["Character: ",a]})]})]},e)})),";"]})}}}]);
//# sourceMappingURL=76.17a7171b.chunk.js.map