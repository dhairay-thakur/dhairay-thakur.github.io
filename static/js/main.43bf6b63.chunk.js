(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{80:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,s,d,l,h,b,p,j=t(0),m=t.n(j),g=t(64),u=t.n(g),x=t(3),f=t(4),w=Object(f.a)(i||(i=Object(x.a)(["\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\n\nhtml{\n    @media (max-width:1300px){\n        font-size:75%;\n    }\n\n}\n\nbody{\n    background:#2A2D34;\n    font-family: 'Poppins', sans-serif;\n    overflow-x:hidden;\n        @media (max-width:800px){\n        /* background-color:gray; */\n    }\n}\n\nbutton{\n    font-family: 'Poppins', sans-serif;\n    font-weight:600;\n    cursor: pointer;\n    padding:1rem 2rem;\n    margin:0rem 2rem 0rem 0rem;\n    border:3px solid #B8FB3C;\n    outline:none;\n    border-radius: 10rem;\n    background:transparent;\n    color:white;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n    transition: all 0.5s ease;\n    h4{\n        cursor: pointer;\n        font-family: 'Poppins', sans-serif;\n        font-weight:normal;\n        font-size: 1rem;\n    }\n    &:hover{\n        background-color:#B8FB3C;\n        color:#2A2D34;\n        border-radius: 10rem;\n    }\n    &:active{\n        background-color:#B8FB3C;\n        color:#2A2D34;\n        border-radius: 10rem;\n    }\n}\nhr{\n    height:5;\n    width:50%;\n    color:#B8FB3C;\n    background:#B8FB3C;\n    border-color:#B8FB3C;\n}\nh1{\n    font-weight:bold;\n    font-size:4rem;\n}\nh2{\n    font-weight:lighter;\n    font-size:4rem;\n}\nh3{\n    color:white;\n}\nh4{\n    font-weight:bold;\n}\nspan{\n    font-weight:bold;\n    color:#B8FB3C\n}\na{\n    font-size:1.1.rem;\n    text-decoration: none;\n}\np{\n    padding: 2rem 0rem;\n    color: #ccc;\n    font-size: 1.4rem;\n    line-height:150%;\n\n}\n\n\n\n"]))),O=t(22),v=t(81),y=t(8),k=t(2),z=f.b.span(a||(a=Object(x.a)(["\n  width: 16px;\n  height: 16px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  padding-top: 0.5rem;\n  margin-left: 0.5rem;\n  background: #b8fb3c;\n  display: inline-block;\n"]))),B=f.b.nav(r||(r=Object(x.a)(["\n  min-height: 8vh;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0rem 10rem;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background: #344966;\n  a {\n    color: white;\n    text-decoration: none;\n  }\n  ul {\n    display: flex;\n    list-style: none;\n  }\n  li {\n    padding-right: 2rem;\n    position: relative;\n  }\n  h1 {\n    cursor: pointer;\n    font-size: 30px;\n    color: white;\n  }\n  @media (max-width: 800px) {\n    flex-direction: column;\n    padding: 1rem 0rem;\n    ul {\n      justify-content: space-around;\n      width: 100%;\n    }\n    li {\n      padding: 0;\n      font-size: 1.2rem;\n    }\n    h1 {\n      font-size: 25px;\n    }\n  }\n"]))),C=Object(f.b)(v.a.div)(o||(o=Object(x.a)(["\n  height: 0.1rem;\n  background: #b8fb3c;\n  width: 0%;\n  position: absolute;\n"]))),S=function(n){var e=Object(y.f)().pathname;return Object(k.jsxs)(B,{children:[Object(k.jsx)(v.a.h1,{whileHover:{scale:1.2},onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})},children:Object(k.jsxs)(O.b,{to:"/",children:["DT",Object(k.jsx)(z,{})]})}),Object(k.jsxs)("ul",{children:[Object(k.jsxs)(v.a.li,{whileHover:{scale:1.2},children:[Object(k.jsx)(O.b,{to:"/",children:"About"}),Object(k.jsx)(C,{transition:{duration:.5},initial:{width:"0%"},animate:{width:"/"===e?"60%":"0%"}})]}),Object(k.jsxs)(v.a.li,{whileHover:{scale:1.2},children:[Object(k.jsx)(O.b,{to:"/work",children:"Work"}),Object(k.jsx)(C,{transition:{duration:.5},initial:{width:"0%"},animate:{width:"/work"===e?"60%":"0%"}})]}),Object(k.jsxs)(v.a.li,{whileHover:{scale:1.2},children:[Object(k.jsx)(O.b,{to:"/contact",children:"Contact"}),Object(k.jsx)(C,{transition:{duration:.5},initial:{width:"0%"},animate:{width:"/contact"===e?"70%":"0%"}})]})]})]})},A=f.b.div(c||(c=Object(x.a)(["\n  min-height: 92vh;\n  display: flex;\n  flex-wrap: wrap-reverse;\n  padding: 5rem 10rem;\n  color: white;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 800px) {\n    display: block;\n    padding: 2rem 2rem;\n    text-align: center;\n  }\n"]))),I=f.b.div(s||(s=Object(x.a)(["\n  flex: 1;\n  padding-right: 5rem;\n  h2 {\n    font-weight: lighter;\n  }\n  @media (max-width: 800px) {\n    padding: 0;\n    button {\n      margin: 1rem 2rem 5rem;\n    }\n  }\n"]))),F=f.b.div(d||(d=Object(x.a)(["\n  flex: 1;\n  overflow: hidden;\n  img {\n    width: 30vw;\n    height: 30vw;\n    object-fit: cover;\n    border-radius: 30vw;\n  }\n  @media (max-width: 800px) {\n    img {\n      width: 50vw;\n      height: 50vw;\n      border-radius: 50vw;\n      object-fit: cover;\n    }\n  }\n"]))),D=f.b.div(l||(l=Object(x.a)(["\n  overflow: hidden;\n"]))),P={hidden:{opacity:0,y:-300},show:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.5}}},T={hidden:{opacity:0},show:{opacity:1,transition:{duration:.5,ease:"easeOut"}}},E={hidden:{opacity:0,x:-100},show:{opacity:1,x:0,transition:{duration:.25}}},U={hidden:{opacity:0,y:-100},show:{opacity:1,y:0,transition:{duration:.5}}},H={hidden:{x:-100},show:{x:0,transition:{ease:"easeOut",duration:.5,staggerChildren:.25}}},M={hidden:{opacity:0,scale:1.5},show:{opacity:1,scale:1,transition:{duration:.5,ease:"easeOut"}}},N={hidden:{x:"-130%",skew:"45deg"},show:{x:"100%",skew:"0deg",transition:{duration:.75,ease:"easeOut"}}},J={hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:.1,ease:"easeOut"}}},R={hidden:{opacity:0,scale:.7,transition:{ease:"easeOut",duration:.5}},show:{opacity:1,scale:1,transition:{staggerChildren:.5,ease:"easeOut",duration:.5}}},L=f.b.svg(h||(h=Object(x.a)(["\n  position: absolute;\n  left: 0;\n  z-index: -1;\n"]))),_=function(n){return Object(k.jsx)(L,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)(v.a.path,{initial:{pathLength:0,pathOffset:1},animate:{pathLength:1,pathOffset:0,transition:{duration:.75}},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"#B8FB3C",strokeOpacity:"0.1",strokeWidth:"10"})})},G=function(n){return Object(k.jsxs)(A,{children:[Object(k.jsxs)(I,{as:v.a.div,variants:H,initial:"hidden",animate:"show",children:[Object(k.jsxs)(v.a.div,{className:"title",children:[Object(k.jsx)(D,{as:v.a.div,children:Object(k.jsx)(v.a.h3,{variants:E,children:"Hi there! My name is"})}),Object(k.jsx)(D,{as:v.a.div,variants:E,children:Object(k.jsx)(v.a.h1,{children:Object(k.jsx)("span",{children:"Dhairay Thakur"})})})]}),Object(k.jsxs)(v.a.p,{variants:E,children:["Senior Undergraduate at IIT (BHU), Varanasi ",Object(k.jsx)("br",{}),"Software Engineer to be..",Object(k.jsx)("br",{}),"Self taught Designer and Developer\ud83d\udc96"]}),Object(k.jsx)(v.a.button,{variants:T,onClick:function(){return window.open("https://drive.google.com/file/d/1v8j_5Ec8k-NPUR2-5COVUJCEI9FegDdi/view?usp=sharing")},children:Object(k.jsx)(v.a.h4,{whileHover:{scale:1.2},children:"Resume"})}),Object(k.jsx)(v.a.button,{onClick:function(){return window.open("mailto:dhairaythakur.che18@iitbhu.ac.in?subject=Contacting From Portfolio&body=")},variants:T,children:Object(k.jsx)(v.a.h4,{whileHover:{scale:1.2},children:"Say Hi!"})})]}),Object(k.jsx)(F,{children:Object(k.jsx)(v.a.img,{variants:M,src:"./img/dt.jpg",alt:"dhairay",width:500})}),Object(k.jsx)(_,{})]})},V=t(36),W=t(68),q=t(83),Q=function(){var n=Object(q.a)(),e=Object(W.a)({threshold:.3}),t=Object(V.a)(e,2),i=t[0];return t[1]?n.start("show"):n.start("hidden"),[i,n]};var X,K,Y,Z,$=Object(f.b)(v.a.div)(b||(b=Object(x.a)(['\n  min-height: 93vh;\n  display: flex;\n  flex-direction: column;\n  padding: 5rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.75);\n  background-image: url("./img/bg.jpg");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* background-color: #0d1821; */\n  h2 {\n    padding-bottom: 2rem;\n  }\n  @media (max-width: 800px) {\n    padding: 5rem 1rem;\n  }\n  h2 {\n    padding-bottom: 0rem;\n  }\n']))),nn=f.b.div(p||(p=Object(x.a)(["\n  flex: 1;\n  padding: 0rem 5rem;\n  align-items: center;\n  justify-content: center;\n  border-width: 1rem;\n  border-color: white;\n  h2 {\n    font-size: 3rem;\n  }\n  h3 {\n    font-weight: lighter;\n    font-size: 1.5rem;\n  }\n  @media (max-width: 1300px) {\n    h3 {\n      font-weight: lighter;\n      font-size: 2rem;\n    }\n  }\n  @media (max-width: 800px) {\n    padding: 5rem 1rem;\n    h3 {\n      font-weight: lighter;\n      font-size: 1.5rem;\n    }\n  }\n"]))),en=function(n){var e=Q(),t=Object(V.a)(e,2),i=t[0],a=t[1];return Object(k.jsx)($,{ref:i,animate:a,variants:R,children:Object(k.jsxs)(nn,{children:[Object(k.jsx)("h2",{children:"About Me"}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("br",{}),"I'm a 21 year old Engineering Student from New Delhi, currently pursuing B. Tech. from Indian Institute of Technology, (BHU), Varanasi.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"Fueled by my hunger for knowledge and determination to turn information into action, I am a self taught developer with a strong inclination towards Programming and Software Development, along with some experience on real world software projects.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"Apart from that, I'm also a UI/UX enthusiast and love exploring UI effects, animations and creating intuitive and dynamic user experiences."]})]})})},tn=Object(f.b)(v.a.div)(X||(X=Object(x.a)(["\n  h2 {\n    font-size: 1.5rem;\n    padding: 1rem;\n    color: wheat;\n  }\n"]))),an=f.b.div(K||(K=Object(x.a)(["\n  display: flex;\n"]))),rn=f.b.div(Y||(Y=Object(x.a)(["\n  padding: 0rem 1.5rem;\n  img {\n    height: 7vh;\n  }\n  h3 {\n    font-weight: lighter;\n    font-size: 1rem;\n  }\n  @media (max-width: 800px) {\n    padding: 0rem 2vw;\n    img {\n      height: 7vw;\n    }\n    h3 {\n      font-size: 2vw;\n    }\n  }\n"]))),on=function(n){var e=n.title,t=n.skills;return Object(k.jsxs)(tn,{variants:E,children:[Object(k.jsx)("h2",{children:e}),Object(k.jsx)(an,{children:t.map((function(n){return Object(k.jsxs)(rn,{children:[Object(k.jsx)("img",{src:"../img/".concat(n.icon),alt:n.title}),Object(k.jsx)("h3",{children:n.title})]},n.icon)}))})]})},cn=[{title:"C/C++",icon:"c.png"},{title:"Javascript",icon:"javascript.png"},{title:"Python",icon:"python.png"},{title:"Java",icon:"java.png"}],sn=[{title:"React/React Native",icon:"react.png"},{title:"NodeJs",icon:"nodejs.png"},{title:"Flutter",icon:"flutter.png"},{title:"Android",icon:"android.png"}],dn=[{title:"MySQL",icon:"mysql.png"},{title:"MongoDB",icon:"mongodb.png"}],ln=[{title:"Git",icon:"git.png"},{title:"Github",icon:"github.png"},{title:"Firebase",icon:"firebase.png"},{title:"PhotoShop",icon:"ps.png"},{title:"Illustrator",icon:"illustrator.png"}],hn=[{title:"Cisco",description:"Software Engineer Intern - Security Business Group",img:"cisco.png",link:"https://www.cisco.com/c/en_in/index.html"},{title:"Newzera",description:"Software Engineer Intern - Mobile Application Development",img:"newzera.png",link:"https://www.newzera.com/"}],bn=[{title:"Sell-It-Up Application",description:"A cross-platform mobile application built using React Native which serves as a marketplace for selling the stuff you don't need anymore. The app is connected to a dedicated Backend built using NodeJS and ExpressJS, with MongoDB as the associated database.",img:"sell-it-up.jpg",link:"https://github.com/dhairay-thakur/SellItUp-Application---Frontend"},{title:"Loyalty Points Blockchain",description:"An open and integrated system of loyalty points management, built using blockchain technology. Users can receive and redeem loyalty points that are interoperable across multiple programs, and can transfer points to another user registered on the same loyalty network.",img:"blockchain.jpg",link:"https://github.com/dhairay-thakur/loyalty-points-blockchain"},{title:"Article Summarizer",description:"An app that takes an article link and generates a picture present in it, with a summary of the content which can then be shared as an Instagram Story directly from the application. The API used by the application is built using Flask and frontend is built using React Native.",img:"article-summarizer.jpg",link:"https://github.com/dhairay-thakur/article-summarizer"},{title:"Stocks Bot",description:"A Discord bot built using python that provides hourly and daily stock updates and also supports certain query commands for stock details of a company plotted on a graph.",img:"stock-bot.jpg",link:"https://github.com/dhairay-thakur/stock-bot"},{title:"Expense Tracker",description:"A cross-platform mobile application built using Flutter to keep track of your expenses, with the spendings of the user over the last 7 days shown in the form of a Bar Graph. ",img:"expense-tracker.jpg",link:"https://github.com/dhairay-thakur/expense_tracker"},{title:"Music Player",description:"A fully functional Music Player Application built using ReactJS having a dedicated library and responsive UI. ",img:"music-player.jpg",link:"https://github.com/dhairay-thakur/music-player"}],pn=[{icon:"mail.png",link:"mailto:dhairaythakur.che18@iitbhu.ac.in?subject=Contacting From Portfolio&body="},{link:"https://github.com/dhairay-thakur/",icon:"github.png"},{link:"https://www.linkedin.com/in/dhairay-thakur/",icon:"linkedin.png"},{link:"http://instagram.com/dhairay_thakur",icon:"instagram.png"},{link:"https://twitter.com/DhairayT",icon:"twitter.png"},{link:"https://www.facebook.com/dhairay.thakur/",icon:"fb.png"}];var jn,mn,gn,un,xn,fn,wn,On,vn,yn,kn=Object(f.b)(v.a.div)(Z||(Z=Object(x.a)(["\n  min-height: 93vh;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  h1 {\n    font-size: 2.5rem;\n  }\n"]))),zn=function(n){var e=Q(),t=Object(V.a)(e,2),i=t[0],a=t[1];return Object(k.jsxs)(kn,{ref:i,animate:a,variants:R,children:[Object(k.jsx)("h1",{children:"Skills"}),Object(k.jsx)("hr",{}),Object(k.jsx)(on,{title:"Languages",skills:cn}),Object(k.jsx)(on,{title:"Frameworks",skills:sn}),Object(k.jsx)(on,{title:"Databases",skills:dn}),Object(k.jsx)(on,{title:"Others",skills:ln})]})},Bn=function(){var n=Object(y.f)().pathname;return Object(j.useEffect)((function(){window.scroll({top:0,left:0})}),[n]),null},Cn=function(n){return Object(k.jsxs)(v.a.div,{variants:P,initial:"hidden",animate:"show",exit:"exit",children:[Object(k.jsx)(G,{}),Object(k.jsx)(en,{}),Object(k.jsx)(zn,{}),Object(k.jsx)(Bn,{})]})},Sn=f.b.div(jn||(jn=Object(x.a)(["\n  border: white solid 1px;\n  width: 30vw;\n  margin: 1rem;\n  img {\n    width: 30vw;\n    height: 20vw;\n    padding: 1rem;\n    object-fit: cover;\n  }\n  h2 {\n    font-size: 1.5rem;\n    font-weight: lighter;\n    color: white;\n    cursor: pointer;\n  }\n  h3 {\n    font-weight: normal;\n    font-size: 1rem;\n    padding: 1rem;\n    cursor: pointer;\n  }\n  @media (max-width: 800px) {\n    width: 80vw;\n    img {\n      width: 80vw;\n      height: 53vw;\n      padding: 1rem;\n      object-fit: cover;\n    }\n  }\n"]))),An=function(n){var e=n.title,t=n.description,i=n.img,a=n.link;return Object(k.jsx)(Sn,{children:Object(k.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",children:[Object(k.jsx)(v.a.img,{variants:M,src:"../img/".concat(i),alt:e}),Object(k.jsx)("h2",{children:e}),Object(k.jsx)("h3",{children:t})]})})},In={hidden:{opacity:0},show:{opacity:1,transition:{duration:.8,when:"beforeChildren"}},exit:{opacity:0,transition:{duration:.5}}},Fn=Object(f.b)(v.a.div)(mn||(mn=Object(x.a)(["\n  min-height: 93vh;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  h1 {\n    font-size: 2.5rem;\n  }\n"]))),Dn=f.b.div(gn||(gn=Object(x.a)(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n  flex-wrap: wrap;\n  @media (max-width: 800px) {\n    width: auto;\n    flex-direction: column;\n  }\n"]))),Pn=Object(f.b)(v.a.div)(un||(un=Object(x.a)(["\n  position: fixed;\n  left: 0;\n  top: 8vh;\n  width: 100%;\n  height: 100vh;\n  background: #d8ddef;\n  z-index: 2;\n"]))),Tn=Object(f.b)(Pn)(xn||(xn=Object(x.a)(["\n  background: #ee6352;\n"]))),En=Object(f.b)(Pn)(fn||(fn=Object(x.a)(["\n  background: #45b69c;\n"]))),Un=Object(f.b)(Pn)(wn||(wn=Object(x.a)(["\n  background: #fac05e;\n"]))),Hn=function(n){return Object(k.jsxs)(Fn,{variants:In,initial:"hidden",animate:"show",exit:"exit",children:[Object(k.jsxs)(v.a.div,{variants:J,initial:"hidden",animate:"show",children:[Object(k.jsx)(Pn,{variants:N}),Object(k.jsx)(Tn,{variants:N}),Object(k.jsx)(En,{variants:N}),Object(k.jsx)(Un,{variants:N})]}),Object(k.jsx)(v.a.h1,{variants:T,children:"Work Experience"}),Object(k.jsx)("hr",{}),Object(k.jsx)(Dn,{variants:T,children:hn.map((function(n,e){return Object(k.jsx)(An,{title:n.title,description:n.description,img:n.img,link:n.link},n.link)}))}),Object(k.jsx)("br",{}),Object(k.jsx)(v.a.h1,{variants:T,children:"Personal Projects"}),Object(k.jsx)("hr",{}),Object(k.jsx)(Dn,{variants:T,children:bn.map((function(n,e){return Object(k.jsx)(An,{title:n.title,description:n.description,img:n.img,link:n.link},n.link)}))}),Object(k.jsx)(Bn,{})]})},Mn=f.b.div(On||(On=Object(x.a)(["\n  min-height: 93vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 10rem;\n  color: white;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 2rem;\n  }\n  p {\n    position: absolute;\n    bottom: 0;\n    right: 2rem;\n    font-size: 1rem;\n  }\n  @media (max-width: 800px) {\n    padding: 1rem 1rem;\n  }\n"]))),Nn=Object(f.b)(v.a.div)(vn||(vn=Object(x.a)(["\n  display: flex;\n  @media (max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),Jn=Object(f.b)(v.a.div)(yn||(yn=Object(x.a)(["\n  align-items: center;\n  padding: 3rem 2.5rem;\n  img {\n    height: 7vw;\n  }\n  @media (max-width: 800px) {\n    padding: 1rem 2.5rem;\n    img {\n      height: 10vw;\n    }\n  }\n"]))),Rn=function(n){return Object(k.jsxs)(Mn,{as:v.a.div,variants:P,initial:"hidden",animate:"show",exit:"exit",children:[Object(k.jsx)(v.a.h1,{variants:U,children:"Lets Get in Touch"}),Object(k.jsx)("hr",{}),Object(k.jsx)(Nn,{children:pn.map((function(n){return Object(k.jsx)(Jn,{variants:U,children:Object(k.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:Object(k.jsx)(v.a.img,{src:"../img/".concat(n.icon),alt:n.icon,whileHover:{scale:1.2},whileTap:{scale:.8}})})})}))}),Object(k.jsx)(v.a.p,{variants:E,children:"Dhairay Thakur \xa9\ufe0f2021"})]})},Ln=t(82),_n=function(){var n=Object(y.f)();return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(w,{}),Object(k.jsx)(S,{}),Object(k.jsx)(Ln.a,{exitBeforeEnter:!0,children:Object(k.jsxs)(y.c,{location:n,children:[Object(k.jsx)(y.a,{path:"/",exact:!0,children:Object(k.jsx)(Cn,{})}),Object(k.jsx)(y.a,{path:"/work",children:Object(k.jsx)(Hn,{})}),Object(k.jsx)(y.a,{path:"/contact",children:Object(k.jsx)(Rn,{})})]},n.pathname)})]})};u.a.render(Object(k.jsx)(m.a.StrictMode,{children:Object(k.jsx)(O.a,{children:Object(k.jsx)(_n,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.43bf6b63.chunk.js.map