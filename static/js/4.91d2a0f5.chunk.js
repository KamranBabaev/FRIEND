(this.webpackJsonpFRIEND=this.webpackJsonpFRIEND||[]).push([[4],{177:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(76);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){o=!0,s=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},178:function(e,n,t){e.exports={users:"Users_users__tad4V",info:"Users_info__1jUB1",avaAndBtn:"Users_avaAndBtn__2Fitd",pagination:"Users_pagination__tc9u3",selectedPage:"Users_selectedPage__dYIm4"}},183:function(e,n,t){"use strict";t.r(n);var r=t(48),o=t(49),s=t(51),i=t(50),a=t(18),u=t(89),c=t(0),A=t.n(c),l=t(178),g=t.n(l),f=t.p+"static/media/user_icon.86033422.png",p=t(20),d=t(74),h=t(177),j=t(2),b=function(e){for(var n=Math.ceil(e.totalUsersCount/e.pageSize),t=[],r=1;r<=n;r++)t.push(r);var o=Math.ceil(n/10),s=Object(c.useState)(1),i=Object(h.a)(s,2),a=i[0],u=i[1],A=10*(a-1)+1,l=10*a;return Object(j.jsxs)("div",{className:g.a.pagination,children:[a>=1&&Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAA3NCSVQICAjb4U/gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAkUlEQVRIS+2VYQ7AEAxG2zmWoziMOIU7cEVi68ISk0ViumSJ90f0x/eCAtMBMLLlkY0l6PIo8N5DjDHPXkBddEdrTZ2VrLW5Mk4jKOFKqRRCyNVxKsHscOIScIQTp4ArnEAKN8YAIoKUEoQQh2se7PeAfYu+OeQCh6QSELMljYAoEpanouCcm7KC9WV2+bsAYAfCU+3PAu6pRAAAAABJRU5ErkJggg==",alt:"",onClick:function(){return u(a-1)}}),t.filter((function(e){return e>=A&&e<=l})).map((function(n){return Object(j.jsx)("span",{className:e.currentPage===n?g.a.selectedPage:"",onClick:function(t){e.onPageChanged(n)},children:n})})),o>a&&Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACzAAAAswG504oEAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAB5QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhow4rQAAAAl0Uk5TAANVaICkwMP+MDMkcwAAAC1JREFUGFdjYKAWEELmWDogcUSnIHEYI/FKpcFBxRRUDnYTRImRQHUOikPJBQDFjBAzzgV84wAAAABJRU5ErkJggg==",alt:"",onClick:function(){return u(a+1)}})]})},w=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(n){return Object(j.jsxs)("div",{className:g.a.users,children:[Object(j.jsxs)("div",{className:g.a.avaAndBtn,children:[Object(j.jsxs)(p.b,{to:"/profile/"+n.id,children:[e.isFetching?Object(j.jsx)(d.a,{}):null,Object(j.jsx)("img",{src:null!==n.photos.small?n.photos.small:f,alt:""})]}),n.followed?Object(j.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===n.id})),onClick:function(){e.unfollowMode(n.id)},children:"unfollow"}):Object(j.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===n.id})),onClick:function(){e.followMode(n.id)},style:{background:"coral"},children:"follow"})]}),Object(j.jsxs)("div",{className:g.a.info,children:[Object(j.jsxs)("div",{children:["\u0438\u043c\u044f: ",Object(j.jsx)("b",{children:n.name})]}),Object(j.jsx)("div",{children:"\u0441\u0442\u0430\u0442\u0443\u0441: \u0432 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(j.jsx)("div",{children:"\u0433\u043e\u0440\u043e\u0434: \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0420\u043e\u0441\u0441\u0438\u044f"})]})]},n.id)}))]})},v=t(30);function m(e,n){return e===n}function O(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function P(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var C=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=0,i=r.pop(),a=P(r),u=e.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(t)),c=e((function(){for(var e=[],n=a.length,t=0;t<n;t++)e.push(a[t].apply(null,arguments));return u.apply(null,e)}));return c.resultFunc=i,c.dependencies=a,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,t=null,r=null;return function(){return O(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var U=C((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return e}))})),y=function(e){return e.usersPage.pageSize},x=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},E=function(e){return e.usersPage.followingInProgress},F=t(77),R=function(e){Object(s.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).onPageChanged=function(n){e.props.requestUsers(n,e.props.pageSize),e.props.setCurrentPage(n)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.props.isFetching?Object(j.jsx)(d.a,{}):Object(j.jsx)(w,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching,followMode:this.props.followMode,unfollowMode:this.props.unfollowMode})})}}]),t}(A.a.Component);n.default=Object(v.c)(Object(a.b)((function(e){return{users:U(e),pageSize:y(e),totalUsersCount:x(e),currentPage:S(e),isFetching:I(e),followingInProgress:E(e)}}),{follow:u.a,unfollow:u.f,setCurrentPage:u.d,toggleIsFollowingProgress:u.e,requestUsers:u.c,followMode:u.b,unfollowMode:u.g}),F.a)(R)}}]);
//# sourceMappingURL=4.91d2a0f5.chunk.js.map