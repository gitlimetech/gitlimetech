(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{2226:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var i=n(30266),o=n(809),r=n.n(o),s=n(67294),a=n(9008),c=n(9477),l=n.n(c),p=n(92809),d=n(86010),u=n(11543),g=n(282),m=n(17812),h=n(30553),f=n(43832),j=n(43910),y=n(41749),x=n(22318),b=n(63560),M=n(62225),Z=n(80671),N=n(56899),L=n(91630),v=n.n(L),w=n(12625),D=n(10219),z=n(68216),k=n(25997),I=n(13444),O=n(50982),S=n(92953),T=n(83165),C=n(14670),E=n(13258),H=n(85893),P=["classes","errorMessages","validatorListener","requiredError","value"];function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,S.Z)(e);if(t){var o=(0,S.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,O.Z)(this,n)}}var B=T.Z[500],G=function(e){(0,I.Z)(n,e);var t=R(n);function n(){return(0,z.Z)(this,n),t.apply(this,arguments)}return(0,k.Z)(n,[{key:"renderValidatorComponent",value:function(){var e=this,t=this.props,n=(t.classes,t.errorMessages,t.validatorListener,t.requiredError,t.value,(0,D.Z)(t,P));return(0,H.jsxs)("div",{children:[(0,H.jsx)(E.Z,Y(Y({},n),{},{ref:function(t){e.input=t}})),this.errorText()]})}},{key:"errorText",value:function(){var e=this.props.classes;return this.state.isValid?null:(0,H.jsx)("div",{className:e.checkbox,children:this.getErrorMessage()})}}]),n}(M.nE),A=(0,C.Z)((function(e){return{checkbox:{left:42,fontSize:12,color:B,position:"absolute",marginTop:e.spacing()}}}))(G),_=(0,n(41120).Z)((function(e){var t,n;return{formWrap:{marginTop:e.spacing(10),position:"relative",textAlign:"center",color:e.palette.text.secondary,"& h3":(0,p.Z)({fontFamily:"Roboto Condensed",fontWeight:e.typography.fontWeightBold,color:"dark"===e.palette.type?e.palette.primary.light:e.palette.primary.dark},e.breakpoints.down("md"),{fontSize:36})},logoHeader:{},logo:{display:"flex",alignItems:"center",marginBottom:e.spacing(5),"&$logoHeader":{flexDirection:"column",alignItems:"center",position:"relative",zIndex:10},"& img":{width:64},"& p, span":{display:"block",fontSize:24,paddingBottom:4,fontWeight:e.typography.fontWeightBold}},desc:(0,p.Z)({},e.breakpoints.up("md"),{fontSize:20,padding:e.spacing(0,10)}),input:{width:"100%"},form:(0,p.Z)({textAlign:"left",position:"relative",marginTop:e.spacing(5),paddingBottom:e.spacing(10)},e.breakpoints.up("lg"),{padding:e.spacing(0,15,10)}),btnArea:(t={marginTop:e.spacing(5),"& label":{position:"relative",textAlign:"left"}},(0,p.Z)(t,e.breakpoints.up("sm"),{display:"flex",justifyContent:"space-between"}),(0,p.Z)(t,e.breakpoints.down("xs"),{textAlign:"center","& button":{marginTop:e.spacing(5)}}),(0,p.Z)(t,"& span",{"& a":{color:e.palette.primary.main}}),t),decoration:{position:"fixed",width:"100%",height:"120%",top:0,left:0,overflow:"hidden"},primary:{background:e.palette.primary.main,position:"absolute",opacity:.08,transform:"rotate(45deg)"},secondary:{background:e.palette.secondary.main,position:"absolute",opacity:.1,transform:"rotate(45deg)"},decoTop:{"& $primary":{borderRadius:80,width:405,height:405,top:-200,right:-50},"& $secondary":{borderRadius:40,width:205,height:205,top:24,right:-100}},decoBottom:{"& $primary":{borderRadius:40,width:205,height:205,bottom:180,left:-110},"& $secondary":{borderRadius:80,width:405,height:405,bottom:-100,left:-100}},rightIcon:{marginLeft:e.spacing()},backtohome:(n={width:80,height:80,position:"absolute",left:60,top:-60},(0,p.Z)(n,e.breakpoints.down("sm"),{left:"calc(50% - 40px)",top:-120}),(0,p.Z)(n,"& i",{fontSize:36,color:e.palette.text.disabled}),(0,p.Z)(n,"& > span i:first-child",{opacity:1,transition:"opacity 0.3s ease"}),(0,p.Z)(n,"& > span i:last-child",{position:"absolute",right:0,opacity:0,transition:"all 0.3s ease"}),(0,p.Z)(n,"&:hover",{"& > span i:first-child":{opacity:0},"& > span i:last-child":{right:28,opacity:1}}),n)}}));function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=(0,w.withTranslation)(["common"])((function(e){var t=e.t,n=_(),i=(0,N.XK)(),o=(0,s.useState)({name:"",email:"",phone:"",company:"",message:""}),r=o[0],a=o[1];(0,s.useEffect)((function(){M.WS.addValidationRule("isTruthy",(function(e){return e}))}));var c=(0,s.useState)(!1),l=c[0],L=c[1],w=(0,s.useState)(!1),D=w[0],z=w[1],k=function(e){return function(t){a(U(U({},r),{},(0,p.Z)({},e,t.target.value)))}};return(0,H.jsxs)("div",{className:n.formWrap,children:[(0,H.jsx)(b.Z,{anchorOrigin:{vertical:"top",horizontal:"right"},open:l,autoHideDuration:4e3,onClose:function(){L(!1)},ContentProps:{"aria-describedby":"message-id"},message:(0,H.jsx)("span",{id:"message-id",children:"Message Sent"})},"top right"),(0,H.jsx)(u.Z,{mdUp:!0,children:(0,H.jsx)("div",{className:(0,d.Z)(n.logo,n.logoHeader),children:(0,H.jsx)("a",{href:Z.Z.agency.home,children:(0,H.jsx)("img",{src:v(),alt:"logo"})})})}),(0,H.jsx)(u.Z,{smDown:!0,children:(0,H.jsxs)(m.Z,{href:Z.Z.agency.home,className:n.backtohome,children:[(0,H.jsx)("i",{className:"ion-ios-home-outline"}),(0,H.jsx)("i",{className:"ion-ios-arrow-round-back"})]})}),(0,H.jsxs)(f.Z,{maxWidth:"md",children:[(0,H.jsx)(x.Z,{variant:"h3",gutterBottom:!0,className:i.title,children:t("common:contact_title")}),(0,H.jsx)(x.Z,{className:(0,d.Z)(n.desc,i.subtitle2),children:t("common:contact_subtitle")}),(0,H.jsx)("div",{className:n.form,children:(0,H.jsxs)(M.WS,{onSubmit:function(){L(!0)},onError:function(e){return console.log(e)},children:[(0,H.jsxs)(y.Z,{container:!0,spacing:6,children:[(0,H.jsx)(y.Z,{item:!0,sm:6,xs:12,children:(0,H.jsx)(M.bM,{className:n.input,label:t("common:form_name"),onChange:k("name"),name:"Name",value:r.name,validators:["required"],errorMessages:["This field is required"]})}),(0,H.jsx)(y.Z,{item:!0,sm:6,xs:12,children:(0,H.jsx)(M.bM,{className:n.input,label:t("common:form_email"),onChange:k("email"),name:"Email",value:r.email,validators:["required","isEmail"],errorMessages:["This field is required","email is not valid"]})}),(0,H.jsx)(y.Z,{item:!0,sm:6,xs:12,children:(0,H.jsx)(M.bM,{className:n.input,label:t("common:form_phone"),onChange:k("phone"),name:"Phone",value:r.phone})}),(0,H.jsx)(y.Z,{item:!0,sm:6,xs:12,children:(0,H.jsx)(M.bM,{className:n.input,label:t("common:form_company"),onChange:k("company"),name:"Company",value:r.company})}),(0,H.jsx)(y.Z,{item:!0,xs:12,children:(0,H.jsx)(M.bM,{multiline:!0,rows:"6",className:n.input,label:t("common:form_message"),onChange:k("message"),name:"Message",value:r.message})})]}),(0,H.jsxs)("div",{className:n.btnArea,children:[(0,H.jsx)(h.Z,{control:(0,H.jsx)(A,{validators:["isTruthy"],errorMessages:"This field is required",checked:D,value:D,onChange:function(e){z(e.target.checked)},color:"primary"}),label:(0,H.jsxs)("span",{children:[t("common:form_terms"),(0,H.jsx)("br",{}),(0,H.jsx)("a",{href:"#",children:t("common:form_privacy")})]})}),(0,H.jsxs)(g.Z,{variant:"outlined",type:"submit",color:"primary",size:"large",children:[t("common:form_send"),(0,H.jsx)(j.Z,{className:n.rightIcon})]})]})]})})]})]})}));function V(){var e=_();return(0,H.jsxs)("div",{className:e.decoration,children:[(0,H.jsxs)("div",{className:e.decoTop,children:[(0,H.jsx)("div",{className:e.primary}),(0,H.jsx)("div",{className:e.secondary})]}),(0,H.jsxs)("div",{className:e.decoBottom,children:[(0,H.jsx)("div",{className:e.primary}),(0,H.jsx)("div",{className:e.secondary})]})]})}function K(){return(0,H.jsxs)(s.Fragment,{children:[(0,H.jsx)(a.default,{children:(0,H.jsxs)("title",{children:[l().agency.name,"\xa0 - Contact"]})}),(0,H.jsxs)("div",{children:[(0,H.jsx)(V,{}),(0,H.jsx)(J,{})]})]})}K.getInitialProps=(0,i.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common"]});case 1:case"end":return e.stop()}}),e)})));var X=(0,w.withTranslation)("common")(K)},9477:function(e){e.exports={agency:{name:"Gitlime",desc:"One-stop solutions at GitLime",prefix:"gitlime",footerText:"gitlime - All Rights Reserved 2022",logoText:"Gitlime technologies",projectName:"Gitlime",url:"gitlime.com",img:"/static/images/logos/logo.png",notifMsg:"Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula."}}},80671:function(e,t){"use strict";t.Z={agency:{home:"/",contact:"/contact"}}},56899:function(e,t,n){"use strict";n.d(t,{Lr:function(){return r},XK:function(){return s}});var i=n(92809),o=n(41120),r=(0,o.Z)({textCenter:{textAlign:"center"},textLeft:{textAlign:"left"},textRight:{textAlign:"right"}}),s=((0,o.Z)({floatLeft:{float:"left"},floatRight:{float:"right"}}),(0,o.Z)((function(e){var t,n,o,r;return{title:(t={fontWeight:e.typography.fontWeightBold,fontSize:48,lineHeight:"72px"},(0,i.Z)(t,e.breakpoints.down("md"),{fontSize:38,lineHeight:"60px"}),(0,i.Z)(t,e.breakpoints.down("xs"),{fontSize:28,lineHeight:"44px"}),t),title2:(n={fontSize:36,lineHeight:"56px",fontWeight:e.typography.fontWeightBold},(0,i.Z)(n,e.breakpoints.down("md"),{fontSize:32,lineHeight:"48px"}),(0,i.Z)(n,e.breakpoints.down("xs"),{fontSize:24,lineHeight:"36px"}),n),subtitle:(o={fontWeight:e.typography.fontWeightMedium,fontSize:28,lineHeight:"44px"},(0,i.Z)(o,e.breakpoints.down("md"),{fontSize:24,lineHeight:"36px"}),(0,i.Z)(o,e.breakpoints.down("xs"),{fontSize:18,lineHeight:"28px"}),o),subtitle2:(r={fontWeight:e.typography.fontWeightRegular,fontSize:22,lineHeight:"32px"},(0,i.Z)(r,e.breakpoints.down("md"),{fontSize:20,lineHeight:"32px"}),(0,i.Z)(r,e.breakpoints.down("xs"),{fontSize:16,lineHeight:"24px"}),r),paragraph:{fontWeight:e.typography.fontWeightRegular,fontSize:16,lineHeight:"24px"},caption:(0,i.Z)({fontWeight:e.typography.fontWeightRegular,fontSize:16,lineHeight:"24px"},e.breakpoints.down("xs"),{fontSize:14,lineHeight:"22px"})}})));(0,o.Z)((function(e){return{lgDown:(0,i.Z)({},e.breakpoints.down("lg"),{display:"none"}),mdDown:(0,i.Z)({},e.breakpoints.down("md"),{display:"none"}),smDown:(0,i.Z)({},e.breakpoints.down("sm"),{display:"none"}),xsDown:(0,i.Z)({},e.breakpoints.down("xs"),{display:"none"}),lgUp:(0,i.Z)({},e.breakpoints.up("lg"),{display:"none"}),mdUp:(0,i.Z)({},e.breakpoints.up("md"),{display:"none"}),smUp:(0,i.Z)({},e.breakpoints.up("sm"),{display:"none"})}}))},93269:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(2226)}])},91630:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODEuNiA1MDMuNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgxLjYgNTAzLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDNBOUY0O30KCS5zdDF7ZmlsbDojMjE5NkYzO30KCS5zdDJ7ZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ2OS40LDI5Mi45TDI3MC45LDQ5MS40Yy0xNi4zLDE2LjMtNDIuOSwxNi4zLTU5LjIsMEwxMy4zLDI5Mi45Qy0zLDI3Ni42LTMsMjUwLDEzLjMsMjMzLjdMMjExLjcsMzUuMwoJCWMxNi4zLTE2LjMsNDIuOS0xNi4zLDU5LjIsMGwxOTguNCwxOTguNEM0ODUuNywyNTAsNDg1LjcsMjc2LjYsNDY5LjQsMjkyLjl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDY4LjMsMjY5LjlMMjY5LjksNDY4LjNjLTE2LjMsMTYuMy00Mi45LDE2LjMtNTkuMiwwTDEyLjIsMjY5LjljLTE2LjMtMTYuMy0xNi4zLTQyLjksMC01OS4yTDIxMC42LDEyLjIKCQljMTYuMy0xNi4zLDQyLjktMTYuMyw1OS4yLDBsMTk4LjQsMTk4LjRDNDg0LjYsMjI2LjksNDg0LjYsMjUzLjYsNDY4LjMsMjY5Ljl6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTE0LjksMzM5LjNWMTgzaDE5LjV2MTM5SDIwN3YxNy4zSDExNC45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNDgsMjg5LjZ2LTc5LjJoMTguNXY3OC4xYzAsMjMsMTIuOSwzNy41LDM2LjgsMzcuNWMyMy45LDAsMzctMTQuNSwzNy0zNy41di03OC4xaDE4LjV2NzkuMgoJCQljMCwzMS45LTE4LjgsNTIuNS01NS42LDUyLjVDMjY2LjUsMzQyLjEsMjQ4LDMyMS4zLDI0OCwyODkuNnoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"}},function(e){e.O(0,[122,560,84,774,888,179],(function(){return t=93269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);