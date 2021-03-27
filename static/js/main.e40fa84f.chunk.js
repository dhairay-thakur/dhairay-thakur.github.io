(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{80:function(n,e,t){"use strict";t.r(e);var i,a,r,c,s,o,d,l,h,j,b,u=t(0),m=t.n(u),p=t(64),x=t.n(p),g=t(3),O=t(4),f=Object(O.a)(i||(i=Object(g.a)(["\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\n\nbody{\n    background:#2A2D34;\n    font-family: 'Poppins', sans-serif;\n    overflow-x:hidden;\n}\n\nbutton{\n    font-family: 'Poppins', sans-serif;\n    font-weight:600;\n    cursor: pointer;\n    padding:1rem 2rem;\n    margin:0rem 2rem 0rem 0rem;\n    border:3px solid #B8FB3C;\n    outline:none;\n    border-radius: 10rem;\n    background:transparent;\n    color:white;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n    transition: all 0.5s ease;\n    h4{\n        cursor: pointer;\n        font-family: 'Poppins', sans-serif;\n        font-weight:normal;\n        font-size: 1rem;\n    }\n    &:hover{\n        background-color:#B8FB3C;\n        color:#2A2D34;\n        border-radius: 10rem;\n    }\n    &:active{\n        background-color:#B8FB3C;\n        color:#2A2D34;\n        border-radius: 10rem;\n    }\n}\nhr{\n    height:5;\n    width:50%;\n    color:#B8FB3C;\n    background:#B8FB3C;\n    border-color:#B8FB3C;\n}\nh1{\n    font-weight:bold;\n    font-size:4rem;\n}\nh2{\n    font-weight:lighter;\n    font-size:4rem;\n}\nh3{\n    color:white;\n}\nh4{\n    font-weight:bold;\n}\nspan{\n    font-weight:bold;\n    color:#B8FB3C\n}\na{\n    font-size:1.1.rem;\n}\np{\n    padding: 2rem 0rem;\n    color: #ccc;\n    font-size: 1.4rem;\n    line-height:150%;\n\n}\n\n\n\n"]))),v=t(22),w=t(81),y=t(8),k=t(2),C=O.b.span(a||(a=Object(g.a)(["\n  width: 16px;\n  height: 16px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  padding-top: 0.5rem;\n  margin-left: 0.5rem;\n  background: #b8fb3c;\n  display: inline-block;\n"]))),B=O.b.nav(r||(r=Object(g.a)(["\n  min-height: 8vh;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0rem 10rem;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background: #344966;\n  a {\n    color: white;\n    text-decoration: none;\n  }\n  ul {\n    display: flex;\n    list-style: none;\n  }\n  li {\n    padding-right: 2rem;\n    position: relative;\n  }\n  h1 {\n    cursor: pointer;\n    font-size: 30px;\n    color: white;\n  }\n"]))),z=Object(O.b)(w.a.div)(c||(c=Object(g.a)(["\n  height: 0.1rem;\n  background: #b8fb3c;\n  width: 0%;\n  position: absolute;\n"]))),q=function(n){var e=Object(y.f)().pathname;return Object(k.jsxs)(B,{children:[Object(k.jsx)(w.a.h1,{whileHover:{scale:1.2},onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})},children:Object(k.jsxs)(v.b,{to:"/",children:["DT",Object(k.jsx)(C,{})]})}),Object(k.jsxs)("ul",{children:[Object(k.jsxs)(w.a.li,{whileHover:{scale:1.2},children:[Object(k.jsx)(v.b,{to:"/",children:"About"}),Object(k.jsx)(z,{transition:{duration:.5},initial:{width:"0%"},animate:{width:"/"===e?"60%":"0%"}})]}),Object(k.jsxs)(w.a.li,{whileHover:{scale:1.2},children:[Object(k.jsx)(v.b,{to:"/work",children:"Work"}),Object(k.jsx)(z,{transition:{duration:.5},initial:{width:"0%"},animate:{width:"/work"===e?"60%":"0%"}})]}),Object(k.jsxs)(w.a.li,{whileHover:{scale:1.2},children:[Object(k.jsx)(v.b,{to:"/contact",children:"Contact"}),Object(k.jsx)(z,{transition:{duration:.5},initial:{width:"0%"},animate:{width:"/contact"===e?"70%":"0%"}})]})]})]})},E=O.b.div(s||(s=Object(g.a)(["\n  min-height: 92vh;\n  display: flex;\n  flex-wrap: wrap-reverse;\n  padding: 5rem 10rem;\n  color: white;\n  align-items: center;\n  justify-content: space-between;\n"]))),F=O.b.div(o||(o=Object(g.a)(["\n  flex: 1;\n  padding-right: 5rem;\n  h2 {\n    font-weight: lighter;\n  }\n"]))),D=O.b.div(d||(d=Object(g.a)(["\n  flex: 1;\n  overflow: hidden;\n  img {\n    width: 60vh;\n    height: 60vh;\n    object-fit: cover;\n    border-radius: 60vh;\n  }\n"]))),A=O.b.div(l||(l=Object(g.a)(["\n  overflow: hidden;\n"]))),H={hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.5}}},S={hidden:{opacity:0},show:{opacity:1,transition:{duration:.5,ease:"easeOut"}}},L={hidden:{opacity:0,x:-50},show:{opacity:1,x:0,transition:{duration:.25}}},M={hidden:{opacity:0,y:-100},show:{opacity:1,y:0,transition:{duration:.5}}},P={hidden:{x:-100},show:{x:0,transition:{ease:"easeOut",duration:.5,staggerChildren:.25}}},T={hidden:{opacity:0,scale:1.5},show:{opacity:1,scale:1,transition:{duration:.5,ease:"easeOut"}}},J={hidden:{x:"-130%",skew:"45deg"},show:{x:"100%",skew:"0deg",transition:{duration:.75,ease:"easeOut"}}},I={hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:.1,ease:"easeOut"}}},N={hidden:{opacity:0,scale:.7,transition:{ease:"easeOut",duration:.5}},show:{opacity:1,scale:1,transition:{ease:"easeOut",duration:.5}}},U=O.b.svg(h||(h=Object(g.a)(["\n  position: absolute;\n  left: 0;\n  z-index: -1;\n"]))),W=function(n){return Object(k.jsx)(U,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)(w.a.path,{initial:{pathLength:0,pathOffset:1},animate:{pathLength:1,pathOffset:0,transition:{duration:.75}},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"#B8FB3C",strokeOpacity:"0.1",strokeWidth:"10"})})},G=function(n){return Object(k.jsxs)(E,{children:[Object(k.jsxs)(F,{as:w.a.div,variants:P,initial:"hidden",animate:"show",children:[Object(k.jsxs)(w.a.div,{className:"title",children:[Object(k.jsx)(A,{as:w.a.div,children:Object(k.jsx)(w.a.h3,{variants:L,children:"Hi there! My name is"})}),Object(k.jsx)(A,{as:w.a.div,variants:L,children:Object(k.jsx)(w.a.h1,{children:Object(k.jsx)("span",{children:"Dhairay Thakur"})})})]}),Object(k.jsxs)(w.a.p,{variants:L,children:["Junior Undergraduate at IIT (BHU), Varanasi ",Object(k.jsx)("br",{}),"Software Engineer to be..",Object(k.jsx)("br",{}),"Experienced Mobile App Developer\ud83d\udc96"]}),Object(k.jsx)(w.a.button,{variants:S,onClick:function(){return alert("Will Be Updated Soon")},children:Object(k.jsx)(w.a.h4,{whileHover:{scale:1.2},children:"Resume"})}),Object(k.jsx)(w.a.button,{onClick:function(){return window.open("mailto:dhairaythakur.che18@iitbhu.ac.in?subject=Contacting From Portfolio&body=")},variants:S,children:Object(k.jsx)(w.a.h4,{whileHover:{scale:1.2},children:"Say Hi!"})})]}),Object(k.jsx)(D,{children:Object(k.jsx)(w.a.img,{variants:T,src:"./img/dt.jpg",alt:"dhairay",width:500})}),Object(k.jsx)(W,{})]})},R=t(36),_=t(68),Q=t(83),V=function(){var n=Object(Q.a)(),e=Object(_.a)({threshold:.3}),t=Object(R.a)(e,2),i=t[0];return t[1]?n.start("show"):n.start("hidden"),[i,n]};var K,X,Y,Z,$=Object(O.b)(w.a.div)(j||(j=Object(g.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 5rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  background-color: #0d1821;\n"]))),nn=O.b.div(b||(b=Object(g.a)(["\n  flex: 1;\n  padding: 0rem 5rem;\n  align-items: center;\n  justify-content: center;\n  border-width: 1rem;\n  border-color: white;\n  h1 {\n  }\n  h2 {\n    font-size: 3rem;\n  }\n  h3 {\n    font-weight: lighter;\n    font-size: 1.5rem;\n  }\n"]))),en=function(n){var e=V(),t=Object(R.a)(e,2),i=t[0],a=t[1];return Object(k.jsx)($,{ref:i,animate:a,variants:N,children:Object(k.jsxs)(nn,{children:[Object(k.jsx)("h2",{children:"About Me"}),Object(k.jsx)("h3",{children:"dhjgdjasg vjdsadjksa djksmhksav nsnvcj scvhsa asc"}),Object(k.jsx)("h3",{children:"dhjgdjasg vjdsadjksa djksmhksav nsnvcj scvhsa asc"})]})})},tn=O.b.div(K||(K=Object(g.a)(["\n  h2 {\n    font-size: 1.5rem;\n    padding: 1rem;\n  }\n"]))),an=O.b.div(X||(X=Object(g.a)(["\n  display: flex;\n"]))),rn=O.b.div(Y||(Y=Object(g.a)(["\n  padding: 0rem 1.5rem;\n  img {\n    height: 7vh;\n  }\n  h3 {\n    font-weight: lighter;\n    font-size: 1rem;\n  }\n"]))),cn=function(n){var e=n.title,t=n.skills;return Object(k.jsxs)(tn,{children:[Object(k.jsx)("h2",{children:e}),Object(k.jsx)(an,{children:t.map((function(n){return Object(k.jsxs)(rn,{children:[Object(k.jsx)("img",{src:"../img/".concat(n.icon),alt:n.title}),Object(k.jsx)("h3",{children:n.title})]},n.icon)}))})]})},sn=[{title:"C/C++",icon:"c.png"},{title:"Javascript",icon:"javascript.png"},{title:"Python",icon:"python.png"},{title:"Java",icon:"java.png"}],on=[{title:"React/React Native",icon:"react.png"},{title:"NodeJs",icon:"nodejs.png"},{title:"Flutter",icon:"flutter.png"},{title:"Android",icon:"android.png"}],dn=[{title:"MySQL",icon:"mysql.png"},{title:"MongoDB",icon:"mongodb.png"}],ln=[{title:"Git",icon:"git.png"},{title:"Github",icon:"github.png"},{title:"Firebase",icon:"firebase.png"},{title:"PhotoShop",icon:"ps.png"},{title:"Illustrator",icon:"illustrator.png"}];var hn,jn,bn,un,mn,pn,xn,gn,On,fn,vn=Object(O.b)(w.a.div)(Z||(Z=Object(g.a)(["\n  min-height: 93vh;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  h1 {\n    font-size: 2.5rem;\n  }\n"]))),wn=function(n){var e=V(),t=Object(R.a)(e,2),i=t[0],a=t[1];return Object(k.jsxs)(vn,{ref:i,animate:a,variants:N,children:[Object(k.jsx)("h1",{children:"Skills"}),Object(k.jsx)("hr",{}),Object(k.jsx)(cn,{title:"Languages",skills:sn}),Object(k.jsx)(cn,{title:"Frameworks",skills:on}),Object(k.jsx)(cn,{title:"Databases",skills:dn}),Object(k.jsx)(cn,{title:"Others",skills:ln})]})},yn=function(){var n=Object(y.f)().pathname;return Object(u.useEffect)((function(){window.scroll({top:0,left:0})}),[n]),null},kn=function(n){return Object(k.jsxs)(w.a.div,{variants:H,initial:"hidden",animate:"show",exit:"exit",children:[Object(k.jsx)(G,{}),Object(k.jsx)(en,{}),Object(k.jsx)(wn,{}),Object(k.jsx)(yn,{})]})},Cn=O.b.div(hn||(hn=Object(g.a)(["\n  border: white solid 1px;\n  width: 30vw;\n  margin: 1rem;\n  img {\n    max-width: 30vw;\n    padding: 1rem;\n  }\n  h2 {\n    font-size: 1.5rem;\n    font-weight: lighter;\n  }\n  h3 {\n    font-weight: normal;\n    font-size: 1rem;\n    padding: 1rem;\n  }\n"]))),Bn=function(n){var e=n.title,t=n.description;n.img,n.link;return Object(k.jsxs)(Cn,{children:[Object(k.jsx)(w.a.img,{variants:T,src:"./logo192.png",alt:""}),Object(k.jsx)("h2",{children:e}),Object(k.jsx)("h3",{children:t})]})},zn={hidden:{opacity:0},show:{opacity:1,transition:{duration:.8,when:"beforeChildren"}},exit:{opacity:0,transition:{duration:.5}}},qn="\nLorem ipsum dolor sit amet, pro ex duis facer. Sea at quem hinc postea, eos duis veritus id. Te eam summo veritus detracto. Eam minim malorum explicari ea, an vel sint eros. Latine integre constituam qui ex. An velit perfecto eum, at magna nusquam splendide mei, partem assentior cu cum.\nEa duo quas audiam efficiantur, sea no probatus menandri. Id eum nullam menandri perpetua, vim at detraxit accusamus interpretaris, solet ubique duo ea. Mei ad case facer deleniti, vel dicam vituperatoribus ei. Eu impedit alienum quo, usu ne vivendo urbanitas ea est molestie argumentum referrentur.\nDoctus quaeque numquam vis et, pro case falli ne, unum iracundia nam at. Laudem convenire urbanitas nam ut. Eu mel erat adhuc docendi. Ex mel vidit exerci, et diam vero has, his eu magna recteque. Liber solet graeci cu usu, aperiam integre nostrud ei usu, iusto offendit mei ea.\nBrute quodsi lobortis has ei, ea mea mundi intellegat voluptatibus, ne pro accumsan comprehensam. Et harum molestie vulputate eos, percipit tincidunt pri no, vis quis eius putant eu. Odio legimus phaedrum vim te, id sed lucilius repudiandae. Ut rebum graece iuvaret pri. Ei velit tempor sea, eos id sonet cetero, melius explicari ne has.\nAt hinc munere epicuri nec, eu duis percipit vim, has saepe instructior ex. Ei per civibus blandit. Ad soluta dictas doctus vel. Ne docendi gubergren pertinacia per. Duo meliore quaestio no, ut has duis dictas necessitatibus.\n",En=Object(O.b)(w.a.div)(jn||(jn=Object(g.a)(["\n  min-height: 93vh;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  h1 {\n    font-size: 2.5rem;\n  }\n"]))),Fn=O.b.div(bn||(bn=Object(g.a)(["\n  display: flex;\n"]))),Dn=Object(O.b)(w.a.div)(un||(un=Object(g.a)(["\n  position: fixed;\n  left: 0;\n  top: 8vh;\n  width: 100%;\n  height: 100vh;\n  background: #d8ddef;\n  z-index: 2;\n"]))),An=Object(O.b)(Dn)(mn||(mn=Object(g.a)(["\n  background: #ee6352;\n"]))),Hn=Object(O.b)(Dn)(pn||(pn=Object(g.a)(["\n  background: #45b69c;\n"]))),Sn=Object(O.b)(Dn)(xn||(xn=Object(g.a)(["\n  background: #fac05e;\n"]))),Ln=function(n){return Object(k.jsxs)(En,{variants:zn,initial:"hidden",animate:"show",exit:"exit",children:[Object(k.jsxs)(w.a.div,{variants:I,initial:"hidden",animate:"show",children:[Object(k.jsx)(Dn,{variants:J}),Object(k.jsx)(An,{variants:J}),Object(k.jsx)(Hn,{variants:J}),Object(k.jsx)(Sn,{variants:J})]}),Object(k.jsx)(w.a.h1,{variants:S,children:"My Work"}),Object(k.jsx)("hr",{}),Object(k.jsxs)(Fn,{variants:S,children:[Object(k.jsx)(Bn,{title:"Sample Project",description:qn}),Object(k.jsx)(Bn,{title:"Sample Project",description:qn})]}),Object(k.jsx)(yn,{})]})},Mn=[{icon:"mail.png",link:"mailto:dhairaythakur.che18@iitbhu.ac.in?subject=Contacting From Portfolio&body="},{link:"https://github.com/dhairay-thakur/",icon:"github.png"},{link:"https://www.linkedin.com/in/dhairay-thakur/",icon:"linkedin.png"},{link:"http://instagram.com/dhairay_thakur",icon:"instagram.png"},{link:"https://twitter.com/DhairayT",icon:"twitter.png"},{link:"https://www.facebook.com/dhairay.thakur/",icon:"fb.png"}],Pn=O.b.div(gn||(gn=Object(g.a)(["\n  min-height: 93vh;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 2rem;\n  }\n  p {\n    position: absolute;\n    bottom: 0;\n    font-size: 1rem;\n  }\n"]))),Tn=Object(O.b)(w.a.div)(On||(On=Object(g.a)(["\n  display: flex;\n"]))),Jn=Object(O.b)(w.a.div)(fn||(fn=Object(g.a)(["\n  align-items: center;\n  padding: 3rem 2.5rem;\n  img {\n    height: 7vw;\n  }\n"]))),In=function(n){return Object(k.jsxs)(Pn,{as:w.a.div,variants:H,initial:"hidden",animate:"show",exit:"exit",children:[Object(k.jsx)(w.a.h1,{variants:M,children:"Lets Get in Touch"}),Object(k.jsx)("hr",{}),Object(k.jsx)(Tn,{children:Mn.map((function(n){return Object(k.jsx)(Jn,{variants:M,children:Object(k.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:Object(k.jsx)(w.a.img,{src:"../img/".concat(n.icon),alt:n.icon,whileHover:{scale:1.2},whileTap:{scale:.8}})})})}))}),Object(k.jsx)(w.a.p,{variants:L,children:"Dhairay Thakur \xa9\ufe0f2020"})]})},Nn=t(82),Un=function(){var n=Object(y.f)();return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(f,{}),Object(k.jsx)(q,{}),Object(k.jsx)(Nn.a,{exitBeforeEnter:!0,children:Object(k.jsxs)(y.c,{location:n,children:[Object(k.jsx)(y.a,{path:"/",exact:!0,children:Object(k.jsx)(kn,{})}),Object(k.jsx)(y.a,{path:"/work",children:Object(k.jsx)(Ln,{})}),Object(k.jsx)(y.a,{path:"/contact",children:Object(k.jsx)(In,{})})]},n.pathname)})]})};x.a.render(Object(k.jsx)(m.a.StrictMode,{children:Object(k.jsx)(v.a,{children:Object(k.jsx)(Un,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.e40fa84f.chunk.js.map