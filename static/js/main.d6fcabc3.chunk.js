(this["webpackJsonpgitlime-website"]=this["webpackJsonpgitlime-website"]||[]).push([[0],{29:function(e,A,t){},32:function(e,A,t){},41:function(e,A,t){"use strict";t.r(A);var a=t(0),c=t(1),s=t(18),n=t.n(s),r=(t(29),t(30),t(31),t.p+"static/media/header_img.9f20edad.svg"),i=t(19),l=t(20),o=t(10),d=t(23),j=t(22),b=(t(32),function(e){Object(d.a)(t,e);var A=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=A.call(this,e)).count=a.count.bind(Object(o.a)(a)),a.state={days:0,minutes:0,hours:0,secounds:0,time_up:""},a.x=null,a.deadline=null,a}return Object(l.a)(t,[{key:"count",value:function(){var e=(new Date).getTime(),A=this.deadline-e,t=Math.floor(A/864e5),a=Math.floor(A%864e5/36e5),c=Math.floor(A%36e5/6e4),s=Math.floor(A%6e4/1e3),n=t<10?"0"+t:t,r=a<10?"0"+a:a,i=c<10?"0"+c:c,l=s<10?"0"+s:s;this.setState({days:n,minutes:i,hours:r,seconds:l}),A<0&&(clearInterval(this.x),this.setState({days:0,minutes:0,hours:0,seconds:0,time_up:"TIME IS UP"}))}},{key:"componentDidMount",value:function(){this.deadline=new Date("Oct 08, 2022 21:00:00").getTime(),this.x=setInterval(this.count,1e3)}},{key:"render",value:function(){var e=this.state,A=e.days,t=e.seconds,c=e.hours,s=e.minutes;return Object(a.jsxs)("div",{id:"countdown",className:"row",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("p",{id:"day",children:A}),Object(a.jsx)("span",{className:"text",children:"Days"})]})}),Object(a.jsx)("div",{className:"col-3",children:Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("p",{id:"hour",children:c}),Object(a.jsx)("span",{className:"text",children:"Hours"})]})}),Object(a.jsx)("div",{className:"col-3",children:Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("p",{id:"minute",children:s}),Object(a.jsx)("span",{className:"text",children:"Minutes"})]})}),Object(a.jsx)("div",{className:"col-3",children:Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("p",{id:"second",children:t}),Object(a.jsx)("span",{className:"text",children:"Seconds"})]})})]})}}]),t}(c.Component)),m=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"header",className:"d-flex align-items-center",children:Object(a.jsx)("div",{className:"container-fluid nav_bg",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-10 mx-auto",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column",children:[Object(a.jsxs)("h1",{children:[e.name," ",Object(a.jsx)("strong",{className:"brand-name",children:e.companyName})]}),Object(a.jsx)("h2",{className:"my-3",children:e.subText}),Object(a.jsxs)("div",{className:"mt-3",children:[Object(a.jsx)("p",{children:"Want to be the first to know when we launch?"}),Object(a.jsxs)("address",{children:["Say hello  at ",Object(a.jsx)("a",{href:"mailto:hello@gitlime.com",style:{color:"#51b037"},children:"hello@gitlime.com"}),".",Object(a.jsx)("br",{}),Object(a.jsx)(b,{})]})]})]}),Object(a.jsx)("div",{className:"col-lg-6 order-1 order-lg-2 header-img",children:Object(a.jsx)("img",{src:e.imgSrc,className:"img-fluid animated",alt:"home-img"})})]})})})})})})},x=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(m,{name:"One-stop solutions at ",imgSrc:r,visit:"#",btnName:"Get Started",subText:"We focus on the nature of your business and what you need for a fruitful online presence to ultimately push revenues further up.",companyName:"GitLime"})})},h=t.p+"static/media/contact_us.0d0f4178.svg",u=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(m,{name:"Welcome To About Page",imgSrc:h,visit:"/contact",btnName:"Contact Us",subText:"We are the team of talented developer making Websites",companyName:"\u092a\u0902\u091b\u0940.com"})})},g=[{imgSrc:t.p+"static/media/s1.f411634c.svg",title:"Website & Web App Development",description:"Are you looking for a boost on your sale, we are here to provide you all solution at one place",btnText:"Contact Us"},{imgSrc:t.p+"static/media/s2.7faf4917.svg",title:"Stock Photography",description:"We are Happy To Help You",btnText:"Contact Us"},{imgSrc:t.p+"static/media/s3.93a6d0d8.svg",title:"Social Media Managment",description:"We are Happy To Help You",btnText:"Contact Us"},{imgSrc:t.p+"static/media/s4.70f4f38b.svg",title:"Travel & Tourism",description:"We are Happy To Help You",btnText:"Contact Us"},{imgSrc:t.p+"static/media/s5.f558d7c5.svg",title:"Event Management",description:"We are Happy To Help You",btnText:"Contact Us"},{imgSrc:t.p+"static/media/s6.38731d61.svg",title:"Education & Training",description:"We are Happy To Help You",btnText:"Contact Us"}],p=t(7),v=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"col-md-4 col-10 mx-auto",children:Object(a.jsxs)("div",{className:"card h-100 text-center",children:[Object(a.jsx)("img",{src:e.imgSrc,className:"card-img-top h-100",alt:"props.title"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title font-weight-bold",children:e.title}),Object(a.jsxs)("p",{className:"card-text",children:[e.description,"."]}),Object(a.jsx)(p.b,{to:"/contact",className:"btn btn-primary universal-btn",children:e.btnText})]})]})})})},O=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"my-5",children:[Object(a.jsx)("h1",{className:"text-center",children:"Our Services"}),Object(a.jsx)("div",{className:"container-fluid mb-5",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-10 mx-auto",children:Object(a.jsx)("div",{className:"row gy-4",children:g&&g.length>0&&g.map((function(e,A){return Object(a.jsx)(v,{imgSrc:e.imgSrc,title:e.title,description:e.description,btnText:e.btnText},A)}))})})})})]})})},f=t(11),C=t(17),B=t(12),N=function(){var e=Object(c.useState)({fullName:"",phone:"",email:"",message:""}),A=Object(B.a)(e,2),t=A[0],s=A[1],n=function(e){var A=e.target,t=A.name,a=A.value;s((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(f.a)({},t,a))}))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"my-5",children:[Object(a.jsx)("h1",{className:"text-center",children:"Contact Us"}),Object(a.jsx)("div",{className:"container mb-5 contact_div",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-6 col-10 mx-auto",children:Object(a.jsx)("div",{className:"row gy-4",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("A Person whos name is ".concat(t.fullName," & mobile number ").concat(t.phone," with email ").concat(t.email," is try to connect you.his message is ").concat(t.message))},children:[Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Full Name"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",name:"fullName",value:t.fullName,onChange:n,placeholder:"Enter Your Full Name"})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Contact Number"}),Object(a.jsx)("input",{type:"number",class:"form-control",id:"exampleFormControlInput1",name:"phone",value:t.phone,onChange:n,placeholder:"Enter Your Contact Number"})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Email address"}),Object(a.jsx)("input",{type:"email",class:"form-control",id:"exampleFormControlInput1",name:"email",value:t.email,onChange:n,placeholder:"name@example.com"})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Message"}),Object(a.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"message",value:t.message,onChange:n})]}),Object(a.jsx)("div",{class:"col-12",children:Object(a.jsx)("button",{class:"btn btn-outline-primary",type:"submit",children:"Submit form"})})]})})})})})]})})},I=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container-fluid nav_bg",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-10 mx-auto",children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-transparent customNavbar",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(p.b,{exact:!0,className:"navbar-brand",to:"/",children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",class:"d-inline-block align-top",style:{maxWidth:"150px",padding:"20px"}})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})})]})})})})})})},y=function(){var e=Object(c.useState)("2022"),A=Object(B.a)(e,2),t=A[0],s=A[1];return Object(c.useEffect)((function(){var e=(new Date).getFullYear();return s(e),function(){s("")}}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("footer",{className:"bg-light text-center footer",children:Object(a.jsxs)("p",{children:["\xa9 ",t," ",Object(a.jsx)("strong",{children:"gitLime.com"})," All rights reserved."]})})})},D=t(2),P=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I,{}),Object(a.jsxs)(D.d,{children:[Object(a.jsx)(D.b,{exact:!0,path:"/",component:x}),Object(a.jsx)(D.b,{exact:!0,path:"/about",component:u}),Object(a.jsx)(D.b,{exact:!0,path:"/service",component:O}),Object(a.jsx)(D.b,{exact:!0,path:"/contact",component:N}),Object(a.jsx)(D.a,{to:"/"})]}),Object(a.jsx)(y,{})]})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(A){var t=A.getCLS,a=A.getFID,c=A.getFCP,s=A.getLCP,n=A.getTTFB;t(e),a(e),c(e),s(e),n(e)}))};n.a.render(Object(a.jsx)(p.a,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),Q()}},[[41,1,2]]]);
//# sourceMappingURL=main.d6fcabc3.chunk.js.map