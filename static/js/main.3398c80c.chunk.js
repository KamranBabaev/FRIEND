(this.webpackJsonpFRIEND=this.webpackJsonpFRIEND||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),c=n.n(s),i=(n(110),n(48)),u=n(49),o=n(51),l=n(50),d=(n(111),n(14)),j=n(18),f=n(20),b=n(17),p=n.n(b),m=n.p+"static/media/avatar.7bdf7b93.png",h=n.p+"static/media/profile.a296afc6.svg",O=n.p+"static/media/friends.cc1aa831.svg",g=n.p+"static/media/messages.7be6e02d.svg",v=n.p+"static/media/news.12440c92.svg",x=n.p+"static/media/music.af606310.svg",w=n.p+"static/media/settings.f00ed622.svg",_=n(2),N=Object(j.b)((function(e){return{sidebar:e.sidebar}}))((function(e){var t=e.sidebar.friend.map((function(e){return Object(_.jsxs)("div",{className:p.a.friend,children:[Object(_.jsx)("img",{src:m,alt:""}),e.name]},e.id)}));return Object(_.jsxs)("div",{className:p.a.navbar,children:[Object(_.jsxs)("div",{className:p.a.navbarElements,children:[Object(_.jsx)("div",{className:p.a.items,children:Object(_.jsxs)(f.b,{activeClassName:p.a.activeLink,to:"/profile",children:[Object(_.jsx)("img",{src:h,alt:""}),"\u043f\u0440\u043e\u0444\u0438\u043b\u044c"]})}),Object(_.jsx)("div",{className:p.a.items,children:Object(_.jsxs)(f.b,{activeClassName:p.a.activeLink,to:"/users",children:[Object(_.jsx)("img",{src:O,alt:""}),"\u0434\u0440\u0443\u0437\u044c\u044f"]})}),Object(_.jsx)("div",{className:p.a.items,children:Object(_.jsxs)(f.b,{activeClassName:p.a.activeLink,to:"/dialogs",children:[Object(_.jsx)("img",{src:g,alt:""}),"\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"]})}),Object(_.jsx)("div",{className:p.a.items,children:Object(_.jsxs)(f.b,{activeClassName:p.a.activeLink,to:"/news",children:[Object(_.jsx)("img",{src:v,alt:""}),"\u043d\u043e\u0432\u043e\u0441\u0442\u0438"]})}),Object(_.jsx)("div",{className:p.a.items,children:Object(_.jsxs)(f.b,{activeClassName:p.a.activeLink,to:"/music",children:[Object(_.jsx)("img",{src:x,alt:""}),"\u043c\u0443\u0437\u044b\u043a\u0430"]})}),Object(_.jsx)("div",{className:p.a.items,children:Object(_.jsxs)(f.b,{activeClassName:p.a.activeLink,to:"/settings",children:[Object(_.jsx)("img",{src:w,alt:""}),"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"]})})]}),Object(_.jsxs)("div",{className:p.a.friends,children:[Object(_.jsx)("div",{className:p.a.titleFriends,children:"\u0414\u0440\u0443\u0437\u044c\u044f \u043e\u043d\u043b\u0430\u0439\u043d:"}),t]})]})})),k=n(40),T=n.n(k),I=n(168),C=n(172),y=n(176),S=n(175),E=n(173),A=function(e){return Object(_.jsx)(I.a,{position:"static",children:Object(_.jsxs)("div",{className:T.a.header,children:[Object(_.jsx)(C.a,{variant:"h6",component:"div",className:T.a.title,children:"FRND"}),Object(_.jsxs)("div",{className:T.a.search,children:[Object(_.jsx)("div",{children:Object(_.jsx)(E.a,{className:T.a.searchIcon})}),Object(_.jsx)(y.a,{placeholder:"\u043f\u043e\u0438\u0441\u043a\u2026"})]}),e.isAuth?Object(_.jsxs)("div",{className:T.a.loginBlock,children:[e.login,Object(_.jsx)(S.a,{className:T.a.btn,variant:"contained",onClick:e.logoutTC,children:"\u0432\u044b\u0439\u0442\u0438"})]}):Object(_.jsx)("div",{style:{marginRight:"25px"},children:"\u0432\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b"})]})})},F=n(6),L=n.n(F),U=n(12),D=n(8),P=n(23),M={id:null,email:null,login:null,isAuth:!1,captchaURL:null},R=function(e,t,n,a){return{type:"AUTH/SET-USER-DATA",data:{userId:e,email:t,login:n,isAuth:a}}},H=function(e){return{type:"AUTH/GET-CAPTCHA-SUCCESS",captchaURL:e}},B=function(){return function(){var e=Object(U.a)(L.a.mark((function e(t){var n,a,r,s,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.getMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,s=a.email,c=a.login,t(R(r,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G=function(){return function(){var e=Object(U.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.getCaptcha();case 2:n=e.sent,a=n.data.url,t(H(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(_.jsx)(A,{login:this.props.login,isAuth:this.props.isAuth,logoutTC:this.props.logoutTC})}}]),n}(r.a.Component),Z=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:function(){return function(){var e=Object(U.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(R(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(z),q=n(30),J={initialized:!1},W=n(74),K=n(39),Y="ADD-MESSAGE",V={dialogs:[{id:1,name:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439"},{id:2,name:"\u041f\u0435\u0442\u0440"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:2,message:"\u041f\u043e\u0448\u043b\u0438 \u043f\u0440\u043e\u0439\u0434\u0435\u043c\u0441\u044f!"}],newMessageText:""},X=function(e){return{type:Y,newMessageText:e}},Q=n(53),$=n(63),ee=n.n($),te=n.p+"static/media/avatar.8f6f0a61.png",ne=n(97),ae=n.n(ne),re=n(174),se=function(e){return Object(_.jsx)("div",{className:ae.a.messages,children:Object(_.jsx)(re.a,{variant:"outlined",value:e.message})})},ce=function(e){var t=e.dialogsItem.map((function(e){return Object(_.jsx)(ie,{id:e.id,name:e.name},e.id)})),n=e.messages.map((function(e){return Object(_.jsx)(se,{message:e.message},e.id)}));return Object(_.jsxs)("div",{className:ee.a.dialog,children:[Object(_.jsx)("div",{className:ee.a.friendItem,children:t}),Object(_.jsx)("div",{children:n})]})},ie=function(e){var t="/dialogs/"+e.id;return Object(_.jsx)("div",{children:Object(_.jsxs)(f.b,{className:ee.a.nav,to:t,children:[Object(_.jsx)("img",{src:te}),Object(_.jsx)("div",{children:e.name})]})})},ue=n(44),oe=n.n(ue),le=n(77),de=Object(q.c)(Object(j.b)((function(e){return{messages:e.messagePage.messages,dialogsItem:e.messagePage.dialogs,newMessageText:e.messagePage.newMessageText}}),(function(e){return{onAddMessage:function(t){e(X(t))}}})),le.a)((function(e){var t=Object(j.c)(),n=Object(Q.a)({initialValues:{newMessageText:""},onSubmit:function(e){t(X(e.newMessageText)),n.resetForm()}});return Object(_.jsxs)("div",{className:oe.a.dialogsBlock,children:[Object(_.jsx)("div",{className:oe.a.dialogs,children:Object(_.jsx)(ce,{dialogsItem:e.dialogsItem,messages:e.messages})}),Object(_.jsxs)("form",{onSubmit:n.handleSubmit,className:oe.a.messageForm,children:[Object(_.jsx)("div",{className:oe.a.textForm,children:Object(_.jsx)(re.a,{className:oe.a.inputField,label:"\u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",variant:"outlined",name:"newMessageText",onChange:n.handleChange,value:n.values.newMessageText})}),Object(_.jsx)(S.a,{variant:"contained",type:"submit",children:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})})),je=n(34),fe=n.n(je),be=function(){var e=Object(j.c)(),t=Object(j.d)((function(e){return e.auth.isAuth})),n=Object(Q.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return n.values.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.values.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(t){var a,r,s,c;e((a=t.email,r=t.password,s=!1,c=!1,function(){var e=Object(U.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.login(a,r,s,c);case 2:0===(n=e.sent).data.resultCode?t(B()):(10===n.data.resultCode&&t(G()),!(n.data.messages.length>0)||n.data.messages[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),n.resetForm()}});return t?Object(_.jsx)(d.a,{to:"/profile"}):Object(_.jsxs)("form",{onSubmit:n.handleSubmit,className:fe.a.formBlock,children:[Object(_.jsxs)("div",{className:fe.a.itemForm,children:[Object(_.jsx)("label",{className:fe.a.title,htmlFor:"email",children:"Email: "}),Object(_.jsx)("input",{id:"email",name:"email",type:"email",onChange:n.handleChange,value:n.values.email})]}),Object(_.jsxs)("div",{className:fe.a.itemForm,children:[Object(_.jsx)("label",{className:fe.a.title,htmlFor:"password",children:"Password: "}),Object(_.jsx)("input",{id:"password",name:"password",type:"password",onChange:n.handleChange,value:n.values.password})]}),Object(_.jsxs)("div",{className:fe.a.checkbox,children:[Object(_.jsx)("input",{type:"checkbox",name:"rememberMe",checked:n.values.rememberMe,onChange:n.handleChange}),Object(_.jsx)("label",{className:fe.a.title,htmlFor:"checkbox",children:"\u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})]}),Object(_.jsx)("button",{type:"submit",children:"\u0432\u043e\u0439\u0442\u0438"})]})},pe=r.a.lazy((function(){return n.e(3).then(n.bind(null,182))})),me=r.a.lazy((function(){return n.e(4).then(n.bind(null,183))})),he=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedAppTC()}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(Z,{}),!this.props.initialized&&Object(_.jsx)(W.a,{}),Object(_.jsxs)("div",{className:"App-wrapper",children:[Object(_.jsx)(N,{}),Object(_.jsx)("div",{className:"App-wrapper-content",children:Object(_.jsxs)(a.Suspense,{fallback:Object(_.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:[Object(_.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(_.jsx)(pe,{})}}),Object(_.jsx)(d.b,{exact:!0,path:"/dialogs",render:function(){return Object(_.jsx)(de,{})}}),Object(_.jsx)(d.b,{exact:!0,path:"/users",render:function(){return Object(_.jsx)(me,{})}}),Object(_.jsx)(d.b,{exact:!0,path:"/login",render:function(){return Object(_.jsx)(be,{})}})]})})]})]})}}]),n}(a.Component),Oe=Object(q.c)(d.f,Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializedAppTC:function(){return function(){var e=Object(U.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(B()),e.next=3,Promise.all([n]);case 3:t({type:"SET_INITIALIZED"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(he),ge=n(75),ve={friend:[{id:1,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0439"},{id:2,name:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440"},{id:4,name:"\u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432"},{id:5,name:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439"},{id:6,name:"\u041c\u0430\u043a\u0441\u0438\u043c"}]},xe=n(89),we=n(98),_e=Object(q.b)({profilePage:ge.e,messagePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(D.a)(Object(D.a)({},e),{},{dialogs:Object(K.a)(e.dialogs),messages:[].concat(Object(K.a)(e.messages),[{id:10,message:t.newMessageText}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve;return e},usersPage:xe.h,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-USER-DATA":return Object(D.a)(Object(D.a)({},e),t.data);case"AUTH/GET-CAPTCHA-SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{captchaURL:t.captchaURL});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(D.a)(Object(D.a)({},e),{},{initialized:!0});default:return e}}}),Ne=Object(q.d)(_e,Object(q.a)(we.a));c.a.render(Object(_.jsx)(f.a,{children:Object(_.jsx)(j.a,{store:Ne,children:Object(_.jsx)(Oe,{})})}),document.getElementById("root"))},17:function(e,t,n){e.exports={navbar:"Navbar_navbar__2kShT",navbarElements:"Navbar_navbarElements__1QKN0",items:"Navbar_items__2hxzF",friend:"Navbar_friend__3KIsM",titleFriends:"Navbar_titleFriends__2Ne7I"}},23:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));var a=n(6),r=n.n(a),s=n(12),c=n(94),i=n.n(c).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f96f3f30-1614-4efb-864a-596256d296ea"}}),u={getUsers:function(e,t){return Object(s.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("users?page=".concat(e,"&count=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},isUnfollow:function(e){return Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.delete("follow/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},isFollow:function(e){return Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post("follow/".concat(e),{});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},o={getMe:function(){return Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("auth/me");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},login:function(e,t){var n=arguments;return Object(s.a)(r.a.mark((function a(){var s,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=n.length>2&&void 0!==n[2]&&n[2],c=n.length>3?n[3]:void 0,a.next=4,i.post("auth/login",{email:e,password:t,rememberMe:s,captcha:c});case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}),a)})))()},logout:function(){return Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.delete("auth/login");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},l={getUserByID:function(e){return Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getStatus:function(e){return Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/status/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},updateStatus:function(e){return Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.put("profile/status",{status:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},d={getCaptcha:function(){return i.get("security/get-captcha-url")}}},34:function(e,t,n){e.exports={formBlock:"LoginFormik_formBlock__1IOmP",itemForm:"LoginFormik_itemForm__1oJGi",title:"LoginFormik_title__-E_i1",checkbox:"LoginFormik_checkbox__20IXF"}},40:function(e,t,n){e.exports={header:"Header_header__19xtY",title:"Header_title__3Hutq",search:"Header_search___cCaL",searchIcon:"Header_searchIcon__DYJvE",loginBlock:"Header_loginBlock__1flqr",btn:"Header_btn__1c0pH"}},44:function(e,t,n){e.exports={dialogsBlock:"Dialogs_dialogsBlock__2kjAg",dialogs:"Dialogs_dialogs__3NM6i",messageForm:"Dialogs_messageForm__3ui2a",inputField:"Dialogs_inputField__2w4pb"}},63:function(e,t,n){e.exports={dialog:"DialogItem_dialog__1lXpr",friendItem:"DialogItem_friendItem__3qS02",nav:"DialogItem_nav__2v-SF"}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(139),r=n(2),s=function(){return Object(r.jsx)(a.a,{color:"secondary"})}},75:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return g}));var a=n(6),r=n.n(a),s=n(12),c=n(39),i=n(8),u=n(23),o="ADD-POST",l="SET-USER-PROFILE",d="SET-USER-STATUS",j={posts:[{id:1,title:"\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442 \u0434\u043b\u044f \u0441\u043e\u0446 \u0441\u0435\u0442\u0438.",likeCounts:22},{id:2,title:"\u0412\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0441\u0442, \u043a\u0440\u0435\u0430\u0442\u0438\u0432 \u043d\u0435 \u043c\u043e\u0435...",likeCounts:19}],profile:null,status:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case o:var n={id:5,title:t.newPostText,likeCounts:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[n].concat(Object(c.a)(e.posts))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},b=function(e){return{type:o,newPostText:e}},p=function(e){return{type:d,status:e}},m=function(e){return{type:"DELETE-POST",postId:e}},h=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserByID(e);case 2:a=t.sent,n((r=a.data,{type:l,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(8),r=n(99),s=(n(0),n(14)),c=n(18),i=n(2),u=function(e){return{isAuth:e.auth.isAuth}};function o(e){return Object(c.b)(u)((function(t){var n=t.isAuth,c=Object(r.a)(t,["isAuth"]);return n?Object(i.jsx)(e,Object(a.a)({},c)):Object(i.jsx)(s.a,{to:"/login"})}))}},89:function(e,t,n){"use strict";n.d(t,"h",(function(){return O})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return N})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return T}));var a=n(6),r=n.n(a),s=n(12),c=n(39),i=n(8),u=n(23),o=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e}))},l="FOLLOW",d="UNFOLLOW",j="SET-USERS",f="SET-CURRENT-PAGE",b="SET-TOTAL-USERS-COUNT",p="TOGGLE-IS-FETCHING",m="TOGGLE-IS-FOLLOWING-PROGRESS",h={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userID,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userID,"id",{followed:!1})});case j:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case m:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},g=function(e){return{type:l,userID:e}},v=function(e){return{type:d,userID:e}},x=function(e){return{type:f,currentPage:e}},w=function(e){return{type:p,isFetching:e}},_=function(e,t){return{type:m,isFetching:e,userId:t}},N=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(w(!0)),a(x(e)),n.next=4,u.d.getUsers(e,t);case 4:s=n.sent,a(w(!1)),a((c=s.data.items,{type:j,users:c})),a((r=s.data.totalCount,{type:b,count:r}));case 8:case"end":return n.stop()}var r,c}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,u.d.isFollow(e);case 3:0===t.sent.data.resultCode&&n(g(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,u.d.isUnfollow(e);case 3:0===t.sent.data.resultCode&&n(v(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},97:function(e,t,n){e.exports={messages:"Message_messages__32cnW"}}},[[137,1,2]]]);
//# sourceMappingURL=main.3398c80c.chunk.js.map