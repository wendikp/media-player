(this["webpackJsonpmedia-player-app"]=this["webpackJsonpmedia-player-app"]||[]).push([[0],{65:function(t,e,n){},66:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var a,c,r=n(0),s=n.n(r),i=n(25),o=n.n(i),l=(n(65),n(20)),u=n(7),j=(n(66),n(15)),b=n.n(j),m=n(21),d=n(23),h=n(18),p="ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm",x=function(){var t=Object(m.a)(b.a.mark((function t(e){var n,a,c,r,s,i,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.napster.com/v2.1/tracks/".concat(e,"?apikey=").concat(p));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.next=8,a.tracks[0];case 8:return c=t.sent,r=c.albumId,s=c.previewURL,i=c.artistName,o=c.name,console.log(a.tracks[0]),t.abrupt("return",{thumbnailSrc:"https://api.napster.com/imageserver/v2/albums/".concat(r,"/images/356x237.jpg"),songSrc:s,name:o,artistName:i});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(m.a)(b.a.mark((function t(){var e,n,a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,fetch("https://api.napster.com/v2.1/tracks/top?apikey=".concat(p));case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,c=a.tracks,t.next=10,c.forEach((function(t){var n={thumbnailSrc:"https://api.napster.com/imageserver/v2/albums/".concat(t.albumId,"/images/356x237.jpg"),name:t.name,artistName:t.artistName,trackId:t.trackId,songSrc:t.previewURL};e.push(n)}));case 10:return t.abrupt("return",e);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=n(19),g=n(2),v=Object(r.createContext)({currentSong:{thumbnailSrc:"",songSrc:"",name:"",artistName:"",trackId:""},setCurrentSong:function(){}}),y=function(t){var e=t.children,n=t.initialSong,a=Object(r.useState)(n),c=Object(d.a)(a,2),s=c[0],i=c[1];return Object(g.jsx)(v.Provider,{value:{currentSong:s,setCurrentSong:i},children:e})},S=n(95),k=n(97),N=n(104),w=n(98),I=n(101),C=n(99),P=n(100),E=n(38),L=n.n(E),F=Object(S.a)((function(t){return{root:{display:"flex",marginBottom:"20px"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"151px",objectFit:"cover",float:"right",marginLeft:"auto"},controls:{display:"flex",minWidth:"50vw",alignItems:"center",paddingLeft:t.spacing(1),paddingBottom:t.spacing(1)}}}));function M(t){var e=t.name,n=t.artistName,a=t.thumbnailSrc,c=t.trackId,s=t.songSrc,i=Object(k.a)(),o=F(i),u=Object(r.useContext)(v).setCurrentSong;return Object(g.jsxs)(N.a,{className:o.root,children:[Object(g.jsx)("div",{className:o.details,children:Object(g.jsxs)(w.a,{className:o.content,children:[Object(g.jsx)(C.a,{component:"h5",variant:"h5",children:e}),Object(g.jsx)(C.a,{variant:"subtitle1",color:"textSecondary",children:n}),Object(g.jsx)(P.a,{variant:"contained",color:"secondary",startIcon:Object(g.jsx)(L.a,{}),onClick:function(){u({name:e,artistName:n,thumbnailSrc:a,trackId:c,songSrc:s})},component:l.b,to:"/playing",children:"Play"})]})}),Object(g.jsx)(I.a,{className:o.cover,image:a})]})}var D,T=O.a.h1(a||(a=Object(h.a)(["\n  color: white;\n"]))),B=O.a.div(c||(c=Object(h.a)(["\n  font-weight: 700;\n  color: white;\n"]))),Y=function(t){return t.tracks.map((function(t,e){return Object(g.jsx)(M,{name:t.name,trackId:t.trackId,thumbnailSrc:t.thumbnailSrc,artistName:t.artistName,songSrc:t.songSrc},e)}))},W=function(){return Object(g.jsx)(B,{children:"Loading.. Please wait.."})},z=function(){var t=s.a.useState([]),e=Object(d.a)(t,2),n=e[0],a=e[1],c=s.a.useState(!1),r=Object(d.a)(c,2),i=r[0],o=r[1];return s.a.useEffect((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o(!0),function(){t.apply(this,arguments)}(),o(!1)}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(T,{children:"Playlist Page"}),i?Object(g.jsx)(W,{}):Object(g.jsx)(Y,{tracks:n})]})},J=n(43),R=Object(S.a)((function(t){return{root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"151px",objectFit:"cover",float:"right",marginLeft:"auto"},controls:{display:"flex",minWidth:"50vw",alignItems:"center",paddingLeft:t.spacing(1),paddingBottom:t.spacing(1)}}}));function U(t){var e=t.name,n=t.artistName,a=t.thumbnailSrc,c=t.songSrc,r=Object(k.a)(),s=R(r);return Object(g.jsxs)("div",{children:[Object(g.jsxs)(N.a,{className:s.root,children:[Object(g.jsx)("div",{className:s.details,children:Object(g.jsxs)(w.a,{className:s.content,children:[Object(g.jsx)(C.a,{component:"h5",variant:"h5",children:e}),Object(g.jsx)(C.a,{component:"subtitle1",variant:"textSecondary",children:n})]})}),Object(g.jsx)(I.a,{className:s.cover,image:a,component:"img"})]}),Object(g.jsx)("div",{style:{marginTop:"10px"},children:Object(g.jsx)("audio",{src:c,controls:!0,style:{width:"100%"}})})]})}var Z,A,H,q=O.a.h1(D||(D=Object(h.a)(["\n    color: white;\n"]))),G=function(){return Object(g.jsx)(q,{children:"No Music Played. Please choose music first at playlist!"})},K=function(){var t=s.a.useContext(v),e=t.currentSong,n=t.setCurrentSong;return s.a.useEffect((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var a,c,r,s,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e.trackId);case 2:a=t.sent,c=a.thumbnailSrc,r=a.name,s=a.artistName,i=a.songSrc,console.log(i),n(Object(J.a)(Object(J.a)({},e),{},{thumbnailSrc:c,name:r,artistName:s,songSrc:i}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.trackId&&function(){t.apply(this,arguments)}()}),[]),Object(g.jsxs)("div",{children:[""===e.trackId&&Object(g.jsx)(G,{}),""!==e.trackId&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(q,{children:"Current Playing..."}),Object(g.jsx)(U,{name:e.name,thumbnailSrc:e.thumbnailSrc,songSrc:e.songSrc,artistName:e.artistName})]})]})},Q=n(50),V=n.n(Q),X=O.a.div(Z||(Z=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-contents: center;\n  align-items: center;\n"]))),$=O.a.h1(A||(A=Object(h.a)(["\n  color: #DFE6E9;\n  text-align: center;\n"]))),_=O.a.div(H||(H=Object(h.a)(["\n  color: #DFE6E9;\n"]))),tt=function(){return Object(g.jsxs)(X,{children:[Object(g.jsx)(V.a,{style:{color:"white",fontSize:"100px"}}),Object(g.jsx)($,{children:"Welcome to MyPlayer"}),Object(g.jsx)(_,{children:"Play your favorite song here."})]})},et=n(102),nt=n(103),at=n(52),ct=n.n(at),rt=n(51),st=n.n(rt),it=Object(S.a)({root:{width:"100vw"},content:{color:"#2D3436"},navbar:{backgroundColor:"#DFE6E9",left:0,bottom:0,width:"100%",overflow:"hidden",position:"fixed"}}),ot=function(){var t=it(),e=s.a.useState("recents"),n=Object(d.a)(e,2),a=n[0],c=n[1];return Object(g.jsxs)(et.a,{value:a,onChange:function(t,e){return function(t,e){c(e)}(0,e)},className:t.navbar,showLabels:!0,children:[Object(g.jsx)(nt.a,{component:l.b,to:"/",label:"Home",value:"home",icon:Object(g.jsx)(st.a,{}),className:t.content}),Object(g.jsx)(nt.a,{component:l.b,to:"/playing",label:"Playing",value:"playing",icon:Object(g.jsx)(L.a,{}),className:t.content}),Object(g.jsx)(nt.a,{component:l.b,to:"/playlist",label:"Playlist",value:"playlist",icon:Object(g.jsx)(ct.a,{}),className:t.content})]})};var lt=function(){return Object(g.jsx)(y,{initialSong:{thumbnailSrc:"",songSrc:"",name:"",artistName:"",trackId:""},children:Object(g.jsxs)(l.a,{children:[Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{path:"/playing",children:Object(g.jsx)(K,{})}),Object(g.jsx)(u.a,{path:"/playlist",children:Object(g.jsx)(z,{})}),Object(g.jsx)(u.a,{path:"/",children:Object(g.jsx)(tt,{})})]}),Object(g.jsx)(ot,{})]})})},ut=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};o.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(lt,{})}),document.getElementById("root")),ut()}},[[76,1,2]]]);
//# sourceMappingURL=main.4f68e7f8.chunk.js.map