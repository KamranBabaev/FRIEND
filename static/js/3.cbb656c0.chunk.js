(this.webpackJsonpFRIEND=this.webpackJsonpFRIEND||[]).push([[3],{177:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s(76);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],i=!0,a=!1,n=void 0;try{for(var r,c=t[Symbol.iterator]();!(i=(r=c.next()).done)&&(s.push(r.value),!e||s.length!==e);i=!0);}catch(o){a=!0,n=o}finally{try{i||null==c.return||c.return()}finally{if(a)throw n}}return s}}(t,e)||Object(i.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},179:function(t,e,s){t.exports={profileInfo:"ProfileInfo_profileInfo__2uM4E",user:"ProfileInfo_user__Uv8qA",description:"ProfileInfo_description__PEbEq",name:"ProfileInfo_name__3Ghws"}},180:function(t,e,s){t.exports={container:"Post_container__13bza",posts:"Post_posts__2znaa",imgAvatar:"Post_imgAvatar__YDTRY",likeAndDelete:"Post_likeAndDelete__28S8F",likesBlock:"Post_likesBlock__L_4vL",deleteIcon:"Post_deleteIcon__2imM8"}},181:function(t,e,s){t.exports={myPosts:"MyPosts_myPosts__1bdgn",inputField:"MyPosts_inputField__1jzm3",blockWithPosts:"MyPosts_blockWithPosts__1zG86"}},182:function(t,e,s){"use strict";s.r(e);var i=s(8),a=s(48),n=s(49),r=s(51),c=s(50),o=s(0),l=s.n(o),u=s(179),A=s.n(u),d=s.p+"static/media/avatar.35b2083a.jpg",j=s(74),b=s(177),h=s(2);function p(t){var e=Object(o.useState)(!1),s=Object(b.a)(e,2),i=s[0],a=s[1],n=Object(o.useState)(t.status),r=Object(b.a)(n,2),c=r[0],l=r[1];return Object(o.useEffect)((function(){l(t.status)}),[t.status]),Object(h.jsx)("div",{children:i?Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",onChange:function(t){var e=t.currentTarget.value;l(e)},onBlur:function(){a(!1),t.userUpdateStatus(c)},value:c,autoFocus:!0})}):Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){a(!0)},children:c||"\u0441\u0442\u0430\u0442\u0443\u0441 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d..."})})})}var f=s.p+"static/media/avka.16363d60.png",m=function(t){if(!t.profile)return Object(h.jsx)(j.a,{});return Object(h.jsxs)("div",{className:A.a.profileInfo,children:[Object(h.jsxs)("div",{className:A.a.user,children:[Object(h.jsx)("img",{src:d,alt:""}),Object(h.jsxs)("div",{className:A.a.inform,children:[Object(h.jsx)("div",{className:A.a.name,children:"\u041a\u0410\u041c\u0420\u0410\u041d \u0411\u0410\u0411\u0410\u0415\u0412"}),Object(h.jsx)("div",{children:"\u0441\u0442\u0430\u0442\u0443\u0441: \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"}),Object(h.jsx)("div",{children:"\u0432\u043e\u0437\u0440\u0430\u0441\u0442: 27 \u043b\u0435\u0442"}),Object(h.jsx)("div",{children:"\u0437\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c: \u0441\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(h.jsx)("div",{children:"\u0433\u043e\u0440\u043e\u0434: \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0420\u043e\u0441\u0441\u0438\u044f"})]})]}),Object(h.jsx)("div",{className:A.a.user,children:Object(h.jsxs)("div",{className:A.a.inform,children:[Object(h.jsx)("img",{src:t.profile.photos.small||f,alt:""}),Object(h.jsx)("div",{className:A.a.name,children:t.profile.fullName}),Object(h.jsx)(p,{status:t.status,userUpdateStatus:t.userUpdateStatus,getUserStatus:t.getUserStatus}),Object(h.jsxs)("div",{className:A.a.aboutMe,children:["\u041e\u0431\u043e \u043c\u043d\u0435:",t.profile.aboutMe||" \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d..."]}),Object(h.jsx)("div",{className:A.a.jobStatus,children:t.profile.lookingForAJob?Object(h.jsx)("div",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: \u0440\u0430\u0431\u043e\u0442\u0430\u044e"}):Object(h.jsx)("div",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: \u0432 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b"})}),Object(h.jsxs)("div",{className:A.a.contacts,children:["\u041c\u043e\u0439 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u043c: ",t.profile.contacts.instagram||" \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d..."]})]})})]})},v=s(75),g=s(18),O=s(180),x=s.n(O),P=s.p+"static/media/avatar.fd7aeb24.jpg",I=function(t){var e=Object(o.useState)(!1),s=Object(b.a)(e,2),i=s[0],a=s[1];return Object(h.jsxs)("div",{className:x.a.container,children:[Object(h.jsxs)("div",{className:x.a.posts,children:[Object(h.jsx)("img",{className:x.a.imgAvatar,alt:"",src:P}),Object(h.jsx)("div",{className:x.a.title,children:t.title})]}),Object(h.jsxs)("div",{className:x.a.likeAndDelete,children:[Object(h.jsxs)("div",{className:x.a.likesBlock,children:[Object(h.jsx)("img",{className:x.a.liked,alt:"",onClick:i?function(t){i&&a(!1)}:function(t){i||a(!0)},src:i?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA2QAAANkBj64lFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIBSURBVEiJtZa9a1NRGIef9yQtiBSJUwcFJ28SEWoRhICJIk0sfuAiTipOjgVxcnQQ/wXHogidRKHQJG1v700NRaqDgZYWB1GRTkZaY8Ryz+vSlKipuam973K45/ze53c+7vkQVSXKMJHSgXj7x9L5zMFY0H8NZRhRR5W3ChUNjJd23bV2be3i6UT8h+TEyFksQ4KsIrwJYj8n0lPVLy2dtKZoJZ+7rMojYLBDR5qKXk2V/UmApXz2nFF5Bgx00K6JcNspeS+2DZZHcjcExruMdhORm6IaKDwG+v8lFtHrTsl/IrV89nDcUgMOdDEAsFtlmLWra0yPxfssdzQcPCy4FQkTyJix6MkeknoKRU8ZQY5HZQBywgAfo8IrfDaishCVgUEXDfA0KgMLE8aZnnMVnkfAL6bK/qQB0Ji5C9T3EL4uQTAGW/91esp9h7EjAl/3AP4Ny6gzO7+ybQCQLFZei9UCsP4f8O9quJCc8aqtit925tEZ/5ViCsDGLuBNMVxKFT2/vfKvrZ8quwsiOkpva9JAuOIUvdk/GzqeLU7Jf2mxQ4rOh4AvonY4WfJKnRp3PLzS5cqHVGLwDKr3gaCDxAIPG/VGJjldWd2JI2Hu5OVCLisB4whHAFDeI+ZWsuzOdcsNZQDwKZPZt7G/7x7AQGPzwaFqtRkmL7TBbiPyV8UvRtu9tcOb95QAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAzgAAAM4BlP6ToAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG3SURBVEiJtda7axRRFMfxz0yCCqYQF4uAjUU6sdho1EpEMWoCWmjvg4BiIYogRKtYWVilsbG1szHVChEVG8EHAUHRP0DxhWDARdFjMXeXZd3sZnXnwCnm3t/5njv3nntmsohQpuWl0jHc+pBl2QacwXZU8RFP8DAi7rRpj2IvdmETnuMpbkbE16ausUVZlk3iFr6ghhcYxZ7kiziJSLop3MbjxNqCExjC6YiogZRgGnVcxlBEaPWU6CXe4g0eYGMHXY7ZtIjpxuIreIeL7QFtwRXcw32M9NBeT8xKhms4iJ0R8bvbgfVjWZYt4W6OCSwMEp5sERM5xvFswHB4hPEcy1hfQoI1WM4V9VstIUE1sc3gvR6V0Y9jJDFnKG7zK8wNMMEcXmO4MTCJHzg+APgx/MRURGidOKW4zQf+A74/Mc42x9oE5xRVtfsf4DvwTVtH6CS8pGh4h/uA78MnXP1rboWAWfzCPNZ1Aa/FjaTtWCTdVnUIHxRddFuH+a1YwmccWZHT49VHFd2zjgvIkp/Hd0Xb3tyVsYr9zXElJaklr6exvGd8Hwc5hoXkY6uNa34yy7LS/yr+ALQL5v07Cuh3AAAAAElFTkSuQmCC"}),i?t.likeCounts+1:t.likeCounts]}),Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAnwAAAJ8B8Iwk5wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF3SURBVEiJ7daxalRBFAbg7yyiUYKIBoxWViaFsoWFkmcQ8gbiK9iIiCK+g9rZWmsnNqktBIs8gtFGhSxBluh6LHYS70727l7WSsiBnzvzz5nzz/0vM3NlpjbgLF5ggKwwwDMsz6rRMzvu4jo2cKXCBvq4M6vAiZqIiDM4Wbq38RqfpszdLWObEfGqcPuZ+WMiq2HHRbzDyFE7umKEt7gwzaL72MMKTi+IFQzxoM2ibxhk5miKJXMjIn7iO38X3hR4iTcYRMT+IgLG3+4zNg9Fi/8HK7iGD7i5oMB73MjM7QOitugXMjM/NkQvZeaX0l42Ttirx0o/S43DmLcPYCsibpX2owKF25o3+cg+mBJLBRrPmm+NLm/wT3EscCzwHwh02Wi/CzSeNd8e1R28jmHF9dEr7VWslnYP/Sp3iPUJrkpYMj7P12Zd5C0/CGv4ilNNfuK4hoh4jqt4Yny2d4nLeIrtzLzXalERO4/H2NH9Lt7BQ5yr6/0BxVgiMIZL0VoAAAAASUVORK5CYII=",className:x.a.deleteIcon,onClick:function(){return t.deletePost(t.id)},alt:""})]})]})},U=s(53),S=s(181),k=s.n(S),N=s(174),C=s(175),B=Object(g.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{onAddPost:function(e){t(Object(v.a)(e))},deletePost:function(e){t(Object(v.b)(e))}}}))((function(t){var e=Object(g.c)(),s=t.posts.map((function(e){return Object(h.jsx)(I,{id:e.id,likeCounts:e.likeCounts,title:e.title,deletePost:t.deletePost},e.id)})),i=Object(U.a)({initialValues:{newPostText:""},onSubmit:function(t){t.newPostText.trim().length>0&&e(Object(v.a)(t.newPostText)),i.resetForm()}});return Object(h.jsxs)("div",{className:k.a.myPosts,children:[Object(h.jsxs)("form",{onSubmit:i.handleSubmit,children:[Object(h.jsx)("div",{className:k.a.textForm,children:Object(h.jsx)(N.a,{className:k.a.inputField,label:"\u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442...",variant:"outlined",name:"newPostText",onChange:i.handleChange,value:i.values.newPostText})}),Object(h.jsx)(C.a,{variant:"contained",type:"submit",children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(h.jsx)("div",{className:k.a.blockWithPosts,children:s})]})})),R=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{profile:t.profile,status:t.status,userUpdateStatus:t.userUpdateStatus,getUserStatus:t.getUserStatus}),Object(h.jsx)(B,{})]})},y=s(14),M=s(77),F=s(30),w=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autorizedUserID)||this.props.history.push("/login"),this.props.getUsersProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(R,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,userUpdateStatus:this.props.userUpdateStatus,getUserStatus:this.props.getUserStatus}))})}}]),s}(l.a.Component);e.default=Object(F.c)(Object(g.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,autorizedUserID:t.auth.userId,isAuth:t.auth.isAuth}}),{getUsersProfile:v.d,getUserStatus:v.c,userUpdateStatus:v.f}),y.f,M.a)(w)}}]);
//# sourceMappingURL=3.cbb656c0.chunk.js.map