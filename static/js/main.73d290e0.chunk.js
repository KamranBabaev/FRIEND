(this.webpackJsonpFRIEND=this.webpackJsonpFRIEND||[]).push([[0],{129:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return A})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return N})),n.d(t,"g",(function(){return T}));var r=n(6),a=n.n(r),c=n(10),s=n(33),i=n(5),u=n(21),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",f="SET-USERS",b="SET-CURRENT-PAGE",j="SET-TOTAL-USERS-COUNT",p="TOGGLE-IS-FETCHING",O="TOGGLE-IS-FOLLOWING-PROGRESS",m={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userID,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userID,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case b:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case O:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},g=function(e){return{type:l,userID:e}},v=function(e){return{type:d,userID:e}},x=function(e){return{type:b,currentPage:e}},w=function(e){return{type:p,isFetching:e}},A=function(e,t){return{type:O,isFetching:e,userId:t}},k=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),r(x(e)),n.next=4,u.c.getUsers(e,t);case 4:c=n.sent,r(w(!1)),r((s=c.data.items,{type:f,users:s})),r((a=c.data.totalCount,{type:j,count:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(A(!0,e)),t.next=3,u.c.isFollow(e);case 3:0===t.sent.data.resultCode&&n(g(e)),n(A(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(A(!0,e)),t.next=3,u.c.isUnfollow(e);case 3:0===t.sent.data.resultCode&&n(v(e)),n(A(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},13:function(e,t,n){e.exports={navbar:"Navbar_navbar__2kShT",navbarElements:"Navbar_navbarElements__1QKN0",items:"Navbar_items__2hxzF",friend:"Navbar_friend__3KIsM",titleFriends:"Navbar_titleFriends__2Ne7I"}},131:function(e,t,n){e.exports={messages:"Message_messages__32cnW"}},163:function(e,t,n){},164:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n(6),a=n.n(r),c=n(10),s=n(130),i=n.n(s).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f96f3f30-1614-4efb-864a-596256d296ea"}}),u={getUsers:function(e,t){return Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("users?page=".concat(e,"&count=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},isUnfollow:function(e){return Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.delete("follow/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},isFollow:function(e){return Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post("follow/".concat(e),{});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},o={getMe:function(){return Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("auth/me");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},login:function(e,t){var n=arguments;return Object(c.a)(a.a.mark((function r(){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=n.length>2&&void 0!==n[2]&&n[2],r.next=3,i.post("auth/login",{email:e,password:t,rememberMe:c});case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})))()},logout:function(){return Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.delete("auth/login");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},l={getUserByID:function(e){return Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getStatus:function(e){return Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/status/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},updateStatus:function(e){return Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.put("profile/status",{status:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},288:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(65),s=n.n(c),i=(n(163),n(53)),u=n(54),o=n(64),l=n(63),d=(n(164),n(12)),f=n(14),b=n(16),j=n(13),p=n.n(j),O=n.p+"static/media/avatar.7bdf7b93.png",m=n.p+"static/media/profile.a296afc6.svg",h=n.p+"static/media/friends.cc1aa831.svg",g=n.p+"static/media/messages.7be6e02d.svg",v=n.p+"static/media/news.12440c92.svg",x=n.p+"static/media/music.af606310.svg",w=n.p+"static/media/settings.f00ed622.svg",A=n(1),k=Object(f.b)((function(e){return{sidebar:e.sidebar}}))((function(e){var t=e.sidebar.friend.map((function(e){return Object(A.jsxs)("div",{className:p.a.friend,children:[Object(A.jsx)("img",{src:O,alt:""}),e.name]},e.id)}));return Object(A.jsxs)("div",{className:p.a.navbar,children:[Object(A.jsxs)("div",{className:p.a.navbarElements,children:[Object(A.jsx)("div",{className:p.a.items,children:Object(A.jsxs)(b.b,{activeClassName:p.a.activeLink,to:"/profile",children:[Object(A.jsx)("img",{src:m,alt:""}),"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"]})}),Object(A.jsx)("div",{className:p.a.items,children:Object(A.jsxs)(b.b,{activeClassName:p.a.activeLink,to:"/users",children:[Object(A.jsx)("img",{src:h,alt:""}),"\u0414\u0440\u0443\u0437\u044c\u044f"]})}),Object(A.jsx)("div",{className:p.a.items,children:Object(A.jsxs)(b.b,{activeClassName:p.a.activeLink,to:"/dialogs",children:[Object(A.jsx)("img",{src:g,alt:""}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"]})}),Object(A.jsx)("div",{className:p.a.items,children:Object(A.jsxs)(b.b,{activeClassName:p.a.activeLink,to:"/news",children:[Object(A.jsx)("img",{src:v,alt:""}),"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"]})}),Object(A.jsx)("div",{className:p.a.items,children:Object(A.jsxs)(b.b,{activeClassName:p.a.activeLink,to:"/music",children:[Object(A.jsx)("img",{src:x,alt:""}),"\u041c\u0443\u0437\u044b\u043a\u0430"]})}),Object(A.jsx)("div",{className:p.a.items,children:Object(A.jsxs)(b.b,{activeClassName:p.a.activeLink,to:"/settings",children:[Object(A.jsx)("img",{src:w,alt:""}),"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"]})})]}),Object(A.jsxs)("div",{className:p.a.friends,children:[Object(A.jsx)("div",{className:p.a.titleFriends,children:"\u0414\u0440\u0443\u0437\u044c\u044f \u043e\u043d\u043b\u0430\u0439\u043d:"}),t]})]})})),N=n(50),T=n.n(N),_=function(e){return Object(A.jsxs)("div",{className:T.a.header,children:[Object(A.jsx)("div",{className:T.a.logo,children:"FRND"}),Object(A.jsxs)("div",{className:T.a.searchBlock,children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAACC0lEQVRo3u2YP08CMRiHD00QNm8k4cTRHaJx12/AqB9DRxJX4wThA+gGGlZ1gI3EEWf/kGiMm4NGEg36uBhtywXuLj3aob+Npr/y5Pr27dvX85ycnJyckotlqtTpMmQEjBjSpU6VZRMw23T4IFwfdNieJ8wmV8zWFZvzgMnR5Jto+qZJLl2cgAHxNCBID2eNR+LrkbW0vs4kzhstdqhQ9DyKVNihxVsIUpBG7Kib9cI+SyEzl9jnZWLjdMcSTeUvWvhTZvu0lPlN3Qf9Szo9tQiemnQav7QmASXv1CK6anJe0pmV5c3KRPRllI3Tlb3pSKHsx3D6Unh39OD40p21F9O9J91xvg6gqrDkK/mY7jyvgr+qA6ghLNhO4G8L/oYOoJ6w4G4C/67g7+kAehAWLCfwlwX/gw4gMQYKwvhUCfMKYgzqABoLC2YTAGWF4U/bvtCzbTE0sO2UXdqWh45sy9Q6rleNd9l7WIVp8rY/ta0eqthVMV7YVVOPWbfr1XFg17usz6JNL1c4ZsGet/2/hqya7370ORF+3VMy2R8ac8AiC9KYfqTIHbRzNkIrpzSQZvQY3zkTKyeGc0Ga6MI+cU2XQ7bU1gur3CtId6yYbSCXHFJCpMA00p2CdGsaacUhJUQqmkUKuFWQbhzSTCTTQAqSeRzP8zyK3FiE84dkD84vkk04Tk5OTk6x9QODdupMk0QS6AAAAABJRU5ErkJggg==",width:28,height:28,alt:""}),Object(A.jsx)("input",{placeholder:"\u043f\u043e\u0438\u0441\u043a..."})]}),Object(A.jsx)("div",{className:T.a.loginBlock,children:e.isAuth?Object(A.jsxs)("div",{children:[e.login,Object(A.jsx)("button",{onClick:e.logoutTC,children:"\u0432\u044b\u0439\u0442\u0438"})]}):Object(A.jsx)(b.b,{to:"/Login",children:"LOGIN"})})]})},C=n(36),y=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(A.jsx)(_,{login:this.props.login,isAuth:this.props.isAuth,logoutTC:this.props.logoutTC})}}]),n}(a.a.Component),E=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:C.d})(y),S=n(11),I=n(6),F=n.n(I),U=n(10),D=n(5),L={initialized:!1},M=n(92),P=n(33),R="ADD-MESSAGE",z={dialogs:[{id:1,name:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439"},{id:2,name:"\u041f\u0435\u0442\u0440"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:2,message:"\u041f\u043e\u0448\u043b\u0438 \u043f\u0440\u043e\u0439\u0434\u0435\u043c\u0441\u044f!"}]},G=n(51),B=n.n(G),Q=n(89),J=n.n(Q),K=n.p+"static/media/avatar.8f6f0a61.png",V=function(e){var t="/dialogs/"+e.id;return Object(A.jsx)("div",{className:J.a.dialog,children:Object(A.jsxs)(b.b,{activeClassName:J.a.nav,to:t,children:[Object(A.jsx)("img",{src:K}),e.name]})})},W=n(131),H=n.n(W),q=function(e){return Object(A.jsx)("div",{className:H.a.messages,children:e.message})},Y=n(126),Z=n(127),X=n(94),$=n(71),ee=Object($.a)(10),te=Object(Z.a)({form:"dialogsAddMessageForm"})((function(e){return Object(A.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(A.jsx)(Y.a,{component:X.b,name:"newMessageText",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",validate:[$.b,ee]}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{children:"SEND"})})]})})),ne=n(95),re=Object(S.d)(Object(f.b)((function(e){return{messages:e.messagePage.messages,dialogsItem:e.sidebar.friend,newMessageText:e.messagePage.newMessageText}}),(function(e){return{onAddMessage:function(t){e(function(e){return{type:R,newMessageText:e}}(t))}}})),ne.a)((function(e){var t=e.dialogsItem.map((function(e){return Object(A.jsx)(V,{id:e.id,name:e.name},e.id)})),n=e.messages.map((function(e){return Object(A.jsx)(q,{message:e.message},e.id)}));return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:B.a.dialogs,children:[Object(A.jsx)("div",{className:B.a.d_items,children:t}),Object(A.jsx)("div",{className:B.a.messages,children:n})]}),Object(A.jsx)("div",{className:B.a.item,children:Object(A.jsx)(te,{onSubmit:function(t){e.onAddMessage(t.newMessageText)}})})]})})),ae=a.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),ce=a.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),se=a.a.lazy((function(){return n.e(5).then(n.bind(null,295))})),ie=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(A.jsxs)("div",{className:"App-wrapper",children:[Object(A.jsx)(E,{}),Object(A.jsx)(k,{}),Object(A.jsx)("div",{className:"App-wrapper-content",children:Object(A.jsxs)(r.Suspense,{fallback:Object(A.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:[Object(A.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(A.jsx)(ae,{})}}),Object(A.jsx)(d.b,{exact:!0,path:"/dialogs",render:function(){return Object(A.jsx)(re,{})}}),Object(A.jsx)(d.b,{exact:!0,path:"/users",render:function(){return Object(A.jsx)(ce,{})}}),Object(A.jsx)(d.b,{exact:!0,path:"/login",render:function(){return Object(A.jsx)(se,{})}})]})})]}):Object(A.jsx)(M.a,{})}}]),n}(r.Component),ue=Object(S.d)(d.f,Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializedAppTC:function(){return function(){var e=Object(U.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(Object(C.b)()),e.next=3,Promise.all([n]);case 3:t({type:"SET_INITIALIZED"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ie),oe=n(96),le={friend:[{id:1,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0439"},{id:2,name:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440"},{id:4,name:"\u0421\u0442\u0430\u0441"},{id:5,name:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439"},{id:6,name:"\u041c\u0430\u043a\u0441\u0438\u043c"}]},de=n(129),fe=n(133),be=n(128),je=Object(S.c)({profilePage:oe.e,messagePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(D.a)(Object(D.a)({},e),{},{dialogs:Object(P.a)(e.dialogs),messages:[].concat(Object(P.a)(e.messages),[{id:10,message:t.newMessageText}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le;return e},usersPage:de.h,auth:C.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(D.a)(Object(D.a)({},e),{},{initialized:!0});default:return e}},form:be.a}),pe=Object(S.e)(je,Object(S.a)(fe.a));s.a.render(Object(A.jsx)(b.a,{children:Object(A.jsx)(f.a,{store:pe,children:Object(A.jsx)(ue,{})})}),document.getElementById("root"))},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return j}));var r=n(6),a=n.n(r),c=n(10),s=n(5),i=n(21),u=n(52),o={id:null,email:null,login:null,isAuth:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-USER-DATA":return Object(s.a)(Object(s.a)({},e),t.data);default:return e}},d=function(e,t,n,r){return{type:"AUTH/SET-USER-DATA",data:{userId:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.email,u=r.login,t(d(c,s,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?c(f()):(o=s.data.messages.length>0?s.data.messages[0]:"some error",c(Object(u.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},50:function(e,t,n){e.exports={header:"Header_header__19xtY",logo:"Header_logo__1kbZV",loginBlock:"Header_loginBlock__1flqr",searchBlock:"Header_searchBlock__1onPG"}},51:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3NM6i",item:"Dialogs_item__EkW7C"}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"\u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435..."},a=function(e){return function(t){if(t.length>e)return"\u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},86:function(e,t,n){e.exports={error:"FormsControl_error__7iFlF",formSummaryError:"FormsControl_formSummaryError__V2cQO",formBlock:"FormsControl_formBlock__2m8Yu",inputs:"FormsControl_inputs__2C9V3",checkBox:"FormsControl_checkBox__2H8tp"}},89:function(e,t,n){e.exports={dialog:"DialogItem_dialog__1lXpr"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n.p+"static/media/loader.d3fbaf2b.gif",a=n(1),c=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(40),c=n(86),s=n.n(c),i=n(1),u=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:[Object(i.jsx)("div",{children:n.children}),r?Object(i.jsx)("span",{children:t.error}):""]})},o=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(5),a=n(40),c=(n(0),n(12)),s=n(14),i=n(1),u=function(e){return{isAuth:e.auth.isAuth}};function o(e){return Object(s.b)(u)((function(t){var n=t.isAuth,s=Object(a.a)(t,["isAuth"]);return n?Object(i.jsx)(e,Object(r.a)({},s)):Object(i.jsx)(c.a,{to:"/login"})}))}},96:function(e,t,n){"use strict";n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return g}));var r=n(6),a=n.n(r),c=n(10),s=n(33),i=n(5),u=n(21),o="ADD-POST",l="SET-USER-PROFILE",d="SET-USER-STATUS",f={posts:[{id:1,title:"\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442 \u0434\u043b\u044f \u0441\u043e\u0446 \u0441\u0435\u0442\u0438.",likeCounts:22},{id:2,title:"\u0412\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0441\u0442, \u043a\u0440\u0435\u0430\u0442\u0438\u0432 \u043d\u0435 \u043c\u043e\u0435...",likeCounts:19}],profile:null,status:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case o:var n={id:5,title:t.newPostText,likeCounts:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[n].concat(Object(s.a)(e.posts))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},j=function(e){return{type:o,newPostText:e}},p=function(e){return{type:d,status:e}},O=function(e){return{type:"DELETE-POST",postId:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserByID(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[288,1,2]]]);
//# sourceMappingURL=main.73d290e0.chunk.js.map