(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a.p+"static/media/mtechTransparent.4ebc9db7.png"},function(e,t,a){e.exports=a.p+"static/media/btechTransparent.9645112f.png"},function(e,t,a){e.exports=a.p+"static/media/profileTransparent.30cdab2e.png"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/here.e3a69f7b.jpg"},function(e,t,a){e.exports=a.p+"static/media/DN.d42a2095.jpg"},function(e,t,a){e.exports=a.p+"static/media/jpmc.3fe4792b.png"},function(e,t,a){e.exports=a.p+"static/media/MovieTrailers.2471efe9.png"},function(e,t,a){e.exports=a.p+"static/media/BoardGames.662d6f9f.png"},function(e,t,a){e.exports=a.p+"static/media/MernPos.9b205973.png"},function(e,t,a){e.exports=a.p+"static/media/ChatBot.e9bd5835.png"},function(e,t,a){e.exports=a.p+"static/media/MyWay.d964cc21.png"},function(e,t,a){e.exports=a.p+"static/media/SendMyCell.c0a1e607.png"},function(e,t,a){e.exports=a.p+"static/media/SignatureVerifier.7ea1077b.png"},function(e,t,a){e.exports=a.p+"static/media/RaceIt.ceca7292.png"},function(e,t,a){e.exports=a.p+"static/media/Meditation.ee0c1479.png"},function(e,t,a){e.exports=a.p+"static/media/SnakeLadder.a4f8c787.png"},function(e,t,a){e.exports=a.p+"static/media/MobileMailImg.9a528d41.png"},function(e,t,a){e.exports=a.p+"static/media/PortFolioImg.03a1fc5d.png"},function(e,t,a){e.exports=a.p+"static/media/SeaAdventures.42c2c485.png"},,function(e,t,a){e.exports=a.p+"static/media/menuBG.950cb34d.png"},function(e,t,a){e.exports=a(68)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(28),l=a.n(c),r=(a(52),a(5)),s=a(3),o=(a(53),a(27),a(54),a(29)),m=a.n(o),d=a(30),u=a.n(d),p=a(31),E=a.n(p),v=[{id:"JPMorganChase",title:"FrontEnd Developer",company:i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.jpmorganchase.com/")}},"JP Morgan Chase & Co."),image:E.a,techstack:["React","Redux","TypeScript"],time:i.a.createElement(i.a.Fragment,null,"Since ",i.a.createElement("br",null)," Apr 2024"),content:[i.a.createElement(i.a.Fragment,null,"Working on design & development of JPMC SPG application")]},{id:"HereTech",title:"FrontEnd Developer",company:i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.here.com/")}},"Here Tech"),image:m.a,techstack:["Angular","React","Redux","TypeScript"],time:i.a.createElement(i.a.Fragment,null,"Jan 2022 ",i.a.createElement("br",null),"- Mar 2023"),content:[i.a.createElement(i.a.Fragment,null,"Working on design & development of",i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.here.com/platform/HD-live-map")}}," HD Live Map Viewer "),"and",i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://wego.here.com/")}}," Here WEGO Web "))]},{id:"DN",title:"FullStack Developer",company:i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.dieboldnixdorf.com/")}},"Diebold Nixdorf"),image:u.a,techstack:["C#.Net","Angular","SQL","NodeJS"],time:i.a.createElement(i.a.Fragment,null,"Jul 2018 ",i.a.createElement("br",null),"- Dec 2021"),content:[i.a.createElement(i.a.Fragment,null,"Worked on design & development"," ",i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/pos-systems/")}}," Retail POS Systems "),"and",i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/self-service-overview/")}}," Retail Self-Service Systems "))]}],g=function(e){var t=e.url;return Object(n.useEffect)((function(){window.location.replace(t)}),[]),null},f=-1,h=0,b=1,N=2,w=3,k=4,y=5,S=["About","Experience","Skills","Education","Work","Contact"],T=function(e,t){var a=t>-1?S[t].toLowerCase():"welcome";return Object(n.useEffect)((function(){e!==t?document.getElementById(a).classList.add("off"):document.getElementById(a).classList.remove("off")}),[e]),a};function M(){var e=new Date("2018-07-18"),t=new Date,a=t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear());return{years:Math.floor(a/12),months:a%12}}function x(e){var t=e.selectedTab,a=T(t,b);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:a,className:"main-view off"},i.a.createElement("div",{className:"header"},"Experience"),i.a.createElement("div",{className:"total-exp"},function(){var e=M();return e.years+" years, "+e.months+" months"}()),i.a.createElement("div",{className:"content-container"},v.map((function(e){return i.a.createElement("div",{className:"d-flex edex-item"},i.a.createElement("div",{className:"edex-span"},e.time),i.a.createElement("div",{className:"edex-value"},i.a.createElement("div",{className:"edex-title"},e.title),i.a.createElement("div",{className:"edex-company"},e.company),i.a.createElement("div",{className:"edex-techstack"},e.techstack.map((function(e){return i.a.createElement("span",{className:"techstack-item"},e)}))),i.a.createElement("ul",{className:"edex-content"},e.content.map((function(e){return i.a.createElement("li",null,e)}))),i.a.createElement("div",{className:"edex-image-mobile"},i.a.createElement("img",{src:e.image,alt:"hereImg"}))),i.a.createElement("div",{className:"edex-image"},i.a.createElement("img",{src:e.image,alt:"hereImg"})))})))))}var C=a(7);function L(e){var t=e.selectedTab,a=e.setSelectedTab,n=T(t,h);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:n,className:"main-view off"},i.a.createElement("div",{className:"header"},"About"),i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"content"},"Hi, I am ",i.a.createElement("span",{className:"highlight name"},"Tejas Jadhav"),".",i.a.createElement("br",null)," A 90s kid living in Mumbai."),i.a.createElement("div",{className:"content"},"Full-Stack / Front-end ",i.a.createElement("span",{className:"highlight"}," Web Developer ")," & FreeLancer with over",i.a.createElement("span",{className:"highlight"}," ",M().years," years of experience"),".",i.a.createElement("br",null),"I have a ",i.a.createElement("span",{className:"highlight"},"Master degree")," in Computer Engineering."),i.a.createElement("div",{className:"content"},"Well-organised nerd with passion of ",i.a.createElement("span",{className:"highlight"}," solving problems ")," having high attention to detail.",i.a.createElement("br",null),"A huge fan of ",i.a.createElement("span",{className:"highlight"},"cricket "),", PC games and TV shows"),i.a.createElement("div",{className:"content"},"Interested in working with me ?",i.a.createElement("br",null),i.a.createElement(C.b,{to:"/Contact"},i.a.createElement("div",{className:"link",onClick:function(){a(y)}},"Let's get in Touch"))))))}a(56);var j=a(11);function J(e){var t=e.selectedTab,a=T(t,y);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:a,className:"main-view off"},i.a.createElement("div",{className:"header"},"Contact"),i.a.createElement("div",{className:"content"},"Have a question?",i.a.createElement("br",null),i.a.createElement("div",{className:"contact-caption"},"Don't hesitate to Email me...")),i.a.createElement("div",{className:"contact-container d-flex-col"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"contact-label"},"E-mail :"),i.a.createElement("div",{className:"contact-icon"},i.a.createElement(j.b,null)),i.a.createElement("div",{className:"contact-value"},i.a.createElement("span",{className:"link",onClick:function(){return window.location.assign("mailto:tjadhav95@gmail.com")}},"tjadhav95@gmail.com")," ","/"," ",i.a.createElement("span",{className:"link",onClick:function(){return window.location.assign("mailto:tejasjadhav.ire@gmail.com")}},"tejasjadhav.ire@gmail.com"))),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"contact-label"},"LinkedIn :"),i.a.createElement("div",{className:"contact-icon"},i.a.createElement(j.e,null)),i.a.createElement("div",{className:"contact-value"},i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.linkedin.com/in/tejas-jadhav-765043110/")}},"tejas-jadhav-765043110"))),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"contact-label"},"Facebook :"),i.a.createElement("div",{className:"contact-icon"},i.a.createElement(j.c,null)),i.a.createElement("div",{className:"contact-value"},i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.facebook.com/tejasjadhav95/")}},"tejasjadhav95"))),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"contact-label"},"GitHub :"),i.a.createElement("div",{className:"contact-icon"},i.a.createElement(j.d,null)),i.a.createElement("div",{className:"contact-value"},i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://github.com/TeeeJaey")}},"TeeeJaey")," ","/"," ",i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://gist.github.com/TeeeJaey")}},"TeeeJaey-gists"))))))}a(57);var A=a(23),I=a.n(A),B=a(24),F=a.n(B);function P(e){var t=e.selectedTab,a=T(t,w);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:a,className:"main-view off"},i.a.createElement("div",{className:"header"},"Education"),i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"d-flex edex-item"},i.a.createElement("div",{className:"edex-span"},"Jun 2017 ",i.a.createElement("br",null),"- May 2019"),i.a.createElement("div",{className:"edex-value"},i.a.createElement("div",{className:"edex-title"},"Master of Technology - Computer Engineering"),i.a.createElement("div",{className:"edex-company"},i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://engineering.nmims.edu/")}},"Narsee Monjee Institute of Management Studies")),i.a.createElement("ul",{className:"edex-content"},i.a.createElement("li",null,"Passed out with a CGPA of ",i.a.createElement("span",{className:"highlight"},"3.32")),i.a.createElement("li",null,"Wrote & Published a Technical Research paper on"," ",i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://www.irjet.net/archives/V6/i4/IRJET-V6I4130.pdf")}},"Handwritten Signature Verification"))),i.a.createElement("div",{className:"edex-image-mobile"},i.a.createElement("img",{src:I.a,alt:"mtechImg"}))),i.a.createElement("div",{className:"edex-image"},i.a.createElement("img",{src:I.a,alt:"mtechImg"}))),i.a.createElement("div",{className:"d-flex edex-item"},i.a.createElement("div",{className:"edex-span"},"May 2013 ",i.a.createElement("br",null),"- Jun 2017"),i.a.createElement("div",{className:"edex-value"},i.a.createElement("div",{className:"edex-title"},"Bachelor of Technology - Computer Engineering"),i.a.createElement("div",{className:"edex-company"},i.a.createElement("span",{className:"link",onClick:function(){return window.open("https://engineering.nmims.edu/")}},"Narsee Monjee Institute of Management Studies")),i.a.createElement("ul",{className:"edex-content"},i.a.createElement("li",null,"Passed out with a CGPA of ",i.a.createElement("span",{className:"highlight"},"2.70"))),i.a.createElement("div",{className:"edex-image-mobile"},i.a.createElement("img",{src:F.a,alt:"btechImg"}))),i.a.createElement("div",{className:"edex-image"},i.a.createElement("img",{src:F.a,alt:"btechImg"}))))))}var R=a(6),O=(a(58),[{title:"Front-End",items:[{title:"React with hooks",points:9},{title:"JavaScript / TS",points:9},{title:"HTML-CSS",points:9},{title:"Redux",points:8},{title:"Angular",points:8},{title:"VueJS",points:6}]},{title:"Back-End",items:[{title:"NodeJS",points:8},{title:"ExpressJS",points:8},{title:"C#.Net",points:7},{title:"Python",points:7},{title:"Java",points:5}]},{title:"Database",items:[{title:"MongoDB",points:8},{title:"SQL Server",points:8},{title:"MySQL",points:7},{title:"Firebase / Firestore",points:7}]},{title:"Language",items:[{title:"English",points:9},{title:"Hindi",points:9},{title:"Marathi",points:9},{title:"Spanish",points:5}]}]);a(59);function U(e){var t=e.skill;return i.a.createElement("div",{className:"skill-graph"},t.title,i.a.createElement("div",{className:"graph-container"},t.items.map((function(e,t){return i.a.createElement("div",{key:t,className:"skill-item"},i.a.createElement("span",{className:"title"},e.title),i.a.createElement("span",{className:"skill-bar"},i.a.createElement("span",{className:"skill-bar-filled point-"+e.points}),i.a.createElement("span",{className:"skill-points"},e.points)))}))))}function H(e){var t=e.selectedTab,a=T(t,N);return Object(n.useEffect)((function(){var e=document.getElementsByClassName("skill-bar-filled");if(t!==N){var a,n=Object(R.a)(e);try{for(n.s();!(a=n.n()).done;){a.value.classList.add("width-0")}}catch(i){n.e(i)}finally{n.f()}}else setTimeout((function(){var t,a=Object(R.a)(e);try{for(a.s();!(t=a.n()).done;){t.value.classList.remove("width-0")}}catch(i){a.e(i)}finally{a.f()}}),800)}),[t]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:a,className:"main-view off"},i.a.createElement("div",{className:"header"},"Skills"),i.a.createElement("div",{className:"content-container"},O.map((function(e,t){return i.a.createElement(U,{key:t,skill:e})})))))}a(60);var D=a(25),W=a.n(D);function V(e){var t=e.selectedTab,a=T(t,f),c=function(e){e.classList.add("animate"),setTimeout((function(){e.classList.remove("animate")}),750)},l=Object(n.useCallback)((function(){var e=document.getElementById("T"),t=document.getElementById("E"),a=document.getElementById("J"),n=document.getElementById("A"),i=document.getElementById("S");return setTimeout((function(){return c(e)}),1e3),setTimeout((function(){return c(t)}),1100),setTimeout((function(){return c(a)}),1200),setTimeout((function(){return c(n)}),1300),setTimeout((function(){return c(i)}),1400),e.addEventListener("mouseover",(function(){return c(e)})),t.addEventListener("mouseover",(function(){return c(t)})),a.addEventListener("mouseover",(function(){return c(a)})),n.addEventListener("mouseover",(function(){return c(n)})),i.addEventListener("mouseover",(function(){return c(i)})),function(){e.removeEventListener("mouseover",(function(){return c(e)})),t.removeEventListener("mouseover",(function(){return c(t)})),a.removeEventListener("mouseover",(function(){return c(a)})),n.removeEventListener("mouseover",(function(){return c(n)})),i.removeEventListener("mouseover",(function(){return c(i)}))}}),[]);return Object(n.useEffect)((function(){return l()}),[l]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:a,className:"main-view off"},i.a.createElement("div",{className:"content-container d-flex"},i.a.createElement("div",null,i.a.createElement("div",{className:"welcome-content"},"Hi, ",i.a.createElement("br",null),"I'm"," ",i.a.createElement("span",{className:"welcome-name waviy"},i.a.createElement("span",{className:"waviy-char",id:"T"},"T"),i.a.createElement("span",{className:"waviy-char",id:"E"},"E"),i.a.createElement("span",{className:"waviy-char",id:"J"},"J"),i.a.createElement("span",{className:"waviy-char",id:"A"},"A"),i.a.createElement("span",{className:"waviy-char",id:"S"},"S"))),i.a.createElement("hr",{style:{borderColor:"rgb(5 253 216 / 0.5)"}}),i.a.createElement("div",{className:"welcome-caption"},"Software Developer"),i.a.createElement("hr",{style:{borderColor:"rgb(5 253 216 / 0.5)"}})),i.a.createElement("div",{className:"profile-pic"},i.a.createElement("img",{src:W.a,alt:W.a})))))}a(61);var G=a(32),Y=a.n(G),Q=a(33),q=a.n(Q),z=a(34),K=a.n(z),Z=a(35),X=a.n(Z),$=a(36),_=a.n($),ee=a(37),te=a.n(ee),ae=a(38),ne=a.n(ae),ie=a(39),ce=a.n(ie),le=a(40),re=a.n(le),se=a(41),oe=a.n(se),me=a(42),de=a.n(me),ue=a(43),pe=a.n(ue),Ee=a(44),ve=a.n(Ee),ge={MovieTrailers:{id:"MovieTrailers",image:Y.a,title:"Movie Trailers",time:"Oct 2021",techstack:["React-hooks","Redux","JavaScript","HTML-CSS","Lazy-Loading"],description:["A Movie trailers application to watch trailers of different movies, each having genres, languages etc.","Responsive enough to be viewed on any device. (desktop to mobile)"],codeUrl:"https://github.com/TeeeJaey/Movie-Trailers-React",liveUrl:"https://teeejaey.github.io/Movie-Trailers-React/"},BoardGames:{id:"BoardGames",image:q.a,title:"Board Games",time:"Aug 2020 - Ongoing",techstack:["JavaScript","Vue-JS","HTML-CSS"],description:["Set of Board games made in HTML / JavaScript","Include games like Business, Wordle, Ludo, Tetris, 2048, etc."],codeUrl:"https://github.com/TeeeJaey/BoardGames",liveUrl:"https://teeejaey.github.io/BoardGames"},MernPos:{id:"MernPos",image:K.a,title:"MernPos",time:"Jan 2021 - Mar 2021",techstack:["NodeJS","MongoDB","ExpressJS","React","JavaScript","HTML-CSS"],description:["A Mern Stack Point of SALE application","Enables user to signin to the app, add commodities, perform payment and complete transaction","Also creates a pdf receipt in the end of each transaction"],codeUrl:"https://github.com/TeeeJaey/MernPos"},ChatBot:{id:"ChatBot",image:X.a,title:"ChatBot",time:"Dec 2021",techstack:["React","TypeScript","HTML-CSS"],description:["A simple non-AI chatting assistant written in React","Ask questions like - 'who r u?, 'who made u?', 'who is batman?' ,'i am hungry'","Best viewed on a phone"],codeUrl:"https://github.com/TeeeJaey/ChatBot",liveUrl:"https://teeejaey.github.io/ChatBot"},SeaAdventures:{id:"SeaAdventures",image:ve.a,title:"SeaAdventures",time:"Aug 2023",techstack:["HTML","CSS","Javascript"],description:["A simple CSS Animation based game","More stages will soon be added","Best viewed on a laptop/desktop"],codeUrl:"https://github.com/TeeeJaey/SeaAdventures",liveUrl:"https://teeejaey.github.io/SeaAdventures"},Meditation:{id:"Meditation",image:re.a,title:"Meditation App",time:"Sep 2021",techstack:["React-hooks","Firebase-FireStore DB","HTML-CSS"],description:["A Meditation App where two users (trainer and seeker) can simultaneously undergo a meditation period","There is no meditation in reality","Seeker will request and trainer will accept and then the timer starts"],codeUrl:"https://github.com/TeeeJaey/Meditation-App"},SendMyCell:{id:"SendMyCell",image:te.a,title:"Send My Cell",time:"Jan 2019 - Feb 2019",techstack:["PHP","HTML-CSS","JavaScript","MySQL"],description:["SendMyCell is a project on E-Commerce Website & database designing.","It is an online store for mobiles","There is a dashboard page, registration page, product page and also cart page"],codeUrl:"https://github.com/TeeeJaey/SendMyCell"},SignatureVerifier:{id:"SignatureVerifierImg",image:ne.a,title:"Signature Verifier",time:"Jan 2019 - May 2019",techstack:["Python","OpenCV","MySQL"],description:["Handwritten Signature Verification & writer Identification using Image Processing","It uses LBP to extract features and train the system","It uses KNN to classify the test images"],codeUrl:"https://github.com/TeeeJaey/SignatureVerifier"},RaceIt:{id:"RaceIt",image:ce.a,title:"Race It",time:"Jan 2017 - April 2017",techstack:["Unity 3D","C#"],description:["A car racing game designed on Unity 3D engine","Allows player to race with his/her car against few other cars"],codeUrl:"https://github.com/TeeeJaey/RaceIt-1.0"},PortFolio:{id:"PortFolio",image:pe.a,title:"Portfolio",time:"Feb 2018",techstack:["React","Javascript","HTML-CSS"],description:["My portfolio App written in React","Can be viewed in desktop or mobiles"],codeUrl:"https://github.com/TeeeJaey/PortFolio",liveUrl:"https://teeejaey.github.io"},SnakeLadder:{id:"SnakeLadder",image:oe.a,title:"Snake & Ladder",time:"Oct 2018",techstack:["Android","Java"],description:["Android app developed on Android studio","Snakes and Ladders, a very famous board game form the 70s"],codeUrl:"https://github.com/TeeeJaey/Snakes-Ladder"},MyWay:{id:"MyWay",image:_.a,title:"MyWay",time:"Feb 2018",techstack:["HTML-CSS","JavaScript"],description:["Tried to copy a bootstrap tempelate that I found online."],codeUrl:"https://github.com/TeeeJaey/MYWAY",liveUrl:"https://teeejaey.github.io/Projects/MyWay/MYWAY.html"},MobileMail:{id:"MobileMail",image:de.a,title:"Mobile Mail",time:"Feb 2018",techstack:["HTML-CSS"],description:["A mobile mail page UI"],codeUrl:"https://gist.github.com/TeeeJaey/7c448bc5f0c990d9144a59f6b37b452f",liveUrl:"https://teeejaey.github.io/Projects/mobile.html"}};a(62);function fe(e){var t=e.image,a=e.name,n=e.workItemClicked;return i.a.createElement("li",null,i.a.createElement(C.b,{to:a},i.a.createElement("div",{className:"work-item",onClick:function(){return n(a)}},i.a.createElement("img",{src:t,alt:a}),i.a.createElement("div",{className:"work-item-overlay"}))))}var he=a(17),be=a(45);a(63);function Ne(e){var t=e.work,a=e.onClose;return i.a.createElement("div",{className:"work-open"},i.a.createElement("div",{className:"work-open-container"},i.a.createElement(C.b,{to:"/Work"},i.a.createElement(he.a,{className:"word-open-close-btn",onClick:function(){return a()}})),i.a.createElement("img",{src:t.image,alt:t.id}),i.a.createElement("div",{className:"work-open-right"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"title"},t.title),i.a.createElement("div",{className:"timespan"},t.time)),i.a.createElement("div",{className:"techstack"},t.techstack.map((function(e,t){return i.a.createElement("span",{key:t,className:"techstack-item"},e)}))),i.a.createElement("div",{className:"work-btns"},t.liveUrl&&i.a.createElement("div",{className:"work-btn",onClick:function(){return window.open(t.liveUrl)}},"Run Live ",i.a.createElement(he.b,{className:"work-btn-icon"})),t.codeUrl&&i.a.createElement("div",{className:"work-btn",onClick:function(){return window.open(t.codeUrl)}},"View Code ",i.a.createElement(be.a,{className:"work-btn-icon"})))),i.a.createElement("div",{className:"work-open-bottom"},i.a.createElement("h4",null,"Description"),i.a.createElement("ul",{className:"work-open-desc"},t.description.map((function(e,t){return i.a.createElement("li",{key:t},e)}))))))}function we(e){e.match;var t=e.selectedTab,a=e.setSelectedTab,c=Object(s.l)(),l=Object(n.useState)(null),o=Object(r.a)(l,2),m=o[0],d=o[1],u=T(t,k);return Object(n.useEffect)((function(){if(t===k){var e=c.pathname.split("/")[2];e&&setTimeout((function(){return d(e)}),1e3)}}),[t]),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:m,element:i.a.createElement(Ne,{onClose:function(){return d(null)},work:ge[m]})})),i.a.createElement("div",{id:u,className:"main-view off"},i.a.createElement("div",{className:"header"},"Work"),i.a.createElement("div",{className:"text"},"I have made some really cool ",i.a.createElement("span",{className:"highlight"},"personal projects"),i.a.createElement("br",null),"Checkout my",i.a.createElement("span",{className:"link",onClick:function(){a(6)}}," github page "),"for more"),i.a.createElement("div",{className:"work-list"},i.a.createElement("ul",null,Object.keys(ge).map((function(e,t){return i.a.createElement(fe,{key:t,workItemClicked:function(e){return d(e)},image:ge[e].image,name:e})}))))))}a(64);function ke(){return i.a.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"60.000000pt",height:"72.000000pt",viewBox:"0 0 53.000000 72.000000",preserveAspectRatio:"xMidYMid meet"},i.a.createElement("g",{transform:"translate(-9,72.000000) scale(0.100000,-0.100000)",fill:"var(--theme-blue)",stroke:"none"},i.a.createElement("path",{d:"M380 442 c0 -318 -1 -322 -71 -322 -61 0 -89 40 -89 126 l0 45 -67 -3 -68 -3 3 -69 c6 -158 87 -225 256 -214 80 5 134 38 165 100 20 42 21 59 21 331 l0 287 -75 0 -75 0 0 -278z"})),i.a.createElement("g",{transform:"rotate(-180 28 35) translate(0.000000,72.000000) scale(1.100000,-1.100000) ",fill:"var(--theme-red)",stroke:"none"},i.a.createElement("path",{d:"M 32 72 L 22 70 L 21.5 8.4 L 0 8.4 L 0 0 L 52.5 0 L 52.5 8.4 L 31 8.4 L 31 70 Z"})))}var ye=a(46),Se=a.n(ye);function Te(e){var t=e.selectedTab,a=e.menuBtns,c=e.setSelectedTab,l=e.showingMobileMenu,r=e.setShowingMobileMenu;return Object(n.useEffect)((function(){for(var e=document.getElementsByClassName("menu-btn"),t=e.length-1;t>=0;t--)e[t].classList.add("animated");for(var a=document.getElementsByClassName("menu-bar"),n=a.length-1;n>=0;n--)a[n].classList.remove("animated");var i=setTimeout((function(){for(var e=document.getElementsByClassName("animated"),t=e.length-1;t>=0;t--)e[t].classList.remove("animated")}),1800);return function(){clearTimeout(i)}}),[]),Object(n.useEffect)((function(){var e=document.getElementsByClassName("menu-bar");l?e[0].classList.add("showing"):e[0].classList.remove("showing")}),[l]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"menu-bar showing animated"},i.a.createElement("div",{className:"menu-bg-color"}),i.a.createElement("img",{className:"menu-bg",src:Se.a,alt:"menu-bg"}),i.a.createElement("div",{className:"mobile-close-icon",onClick:function(){return r(!1)}},i.a.createElement(he.a,null)),i.a.createElement(C.b,{to:"/"},i.a.createElement("div",{className:"text-svg animated",onClick:function(){c(-1),r(!1)}},i.a.createElement(ke,null))),i.a.createElement("div",{className:"menu-btns"},a.map((function(e,a){return i.a.createElement(C.b,{to:"/"+e,key:a},i.a.createElement("div",{className:"menu-btn  btn"+a+(t===a?" selected":""),onClick:function(){c(a),r(!1)}},e))})))))}a(65);function Me(){return Object(n.useEffect)((function(){var e=document.getElementsByClassName("sea-animated");e&&e[0].classList.remove("sea-animated")}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"sea sea-animated"},i.a.createElement("div",{className:"circle-wrapper"},i.a.createElement("div",{className:"bubble"}),i.a.createElement("div",{className:"bubble"}),i.a.createElement("div",{className:"submarine-wrapper"},i.a.createElement("div",{className:"submarine-body"},i.a.createElement("div",{className:"window"}),i.a.createElement("div",{className:"engine"}),i.a.createElement("div",{className:"light-source"}),i.a.createElement("div",{className:"light"})),i.a.createElement("div",{className:"helix"}),i.a.createElement("div",{className:"hat"},i.a.createElement("div",{className:"leds-wrapper"},i.a.createElement("div",{className:"periscope"}),i.a.createElement("div",{className:"leds"})))))))}a(66),a(67);function xe(){return i.a.createElement("div",{id:"bubbles"},i.a.createElement("div",{className:"bubble x1"}),i.a.createElement("div",{className:"bubble x2"}),i.a.createElement("div",{className:"bubble x3"}),i.a.createElement("div",{className:"bubble x4"}),i.a.createElement("div",{className:"bubble x5"}),i.a.createElement("div",{className:"bubble x6"}))}function Ce(){var e=Object(s.l)(),t=Object(n.useState)(-2),a=Object(r.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),m=Object(r.a)(o,2),d=m[0],u=m[1];return Object(n.useEffect)((function(){var t=e.pathname.split("/")[1];t?setTimeout((function(){return l(S.indexOf(t))}),500):setTimeout((function(){return l(f)}),500)}),[e.pathname]),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"mobile-menu-btn",onClick:function(){return u(!0)}},i.a.createElement(j.a,null)),i.a.createElement(xe,null),i.a.createElement(Te,{showingMobileMenu:d,setShowingMobileMenu:function(e){return u(e)},selectedTab:c,menuBtns:S,setSelectedTab:function(e){return l(e)}}),i.a.createElement(Me,null),i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",element:i.a.createElement(V,{selectedTab:c})}),i.a.createElement(s.a,{path:"/"+S[0],element:i.a.createElement(L,{selectedTab:c,setSelectedTab:function(e){return l(e)}})}),i.a.createElement(s.a,{path:"/"+S[1],element:i.a.createElement(x,{selectedTab:c})}),i.a.createElement(s.a,{path:"/"+S[2],element:i.a.createElement(H,{selectedTab:c})}),i.a.createElement(s.a,{path:"/"+S[3],element:i.a.createElement(P,{selectedTab:c})}),i.a.createElement(s.a,{path:"/"+S[4]+"/*",element:i.a.createElement(we,{selectedTab:c,setSelectedTab:function(e){return l(e)}})}),i.a.createElement(s.a,{path:"/"+S[5],element:i.a.createElement(J,{selectedTab:c})}),i.a.createElement(s.a,{path:"/Resume",element:i.a.createElement(g,{url:"https://drive.google.com/file/d/1gfGhRxDbSj5LKB2D0EsdT5Ja3Ley6tH8/view"})})))}l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C.a,null,i.a.createElement(Ce,null))),document.getElementById("root"))}]),[[47,1,2]]]);
//# sourceMappingURL=main.25001238.chunk.js.map