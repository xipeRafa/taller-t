(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{59:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(23),a=r(13),s=r(67),i=r(45),j=r(40),o=(r(50),r(60),r(61),j.a.initializeApp({apiKey:"AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",authDomain:"scopic-73416.firebaseapp.com",projectId:"scopic-73416",storageBucket:"scopic-73416.appspot.com",messagingSenderId:"475263107333",appId:"1:475263107333:web:27180a036864e16618376c"})),l=(j.a.firestore.FieldValue.serverTimestamp,o.firestore()),u=(o.storage(),o.auth()),b=function(e){var t=Object(c.useState)(0),r=Object(a.a)(t,2),n=r[0],s=(r[1],Object(c.useState)(!0)),j=Object(a.a)(s,2),o=j[0];j[1];return Object(c.useState)((function(){l.collection("auctions").add(Object(i.a)({},e))}),[e]),{progress:n,isCompleted:o}},d=r(2),O=function(e){var t=e.auction,r=e.setAuction,n=b(t),a=n.progress,i=n.isCompleted;return Object(c.useEffect)((function(){i&&r(null)}),[i,r]),Object(d.jsx)(s.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(a,"%")}})},x=r(20),h=r.n(x),p=r(24),m=r(68),f=r(65),v=r(44),g=r(69),w=r(66),C=Object(c.createContext)(),y=function(e){var t=e.children,r=Object(c.useState)(null),n=Object(a.a)(r,2),s=n[0],i=n[1];return Object(c.useEffect)((function(){return u.onAuthStateChanged((function(e){i(e)}))}),[]),Object(d.jsx)(C.Provider,{value:{currentUser:s,register:function(e,t){return u.createUserWithEmailAndPassword(e,t)},login:function(e,t){return u.signInWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},bidAuction:function(e){return l.collection("auctions").doc(e).update({acuerdo:!0})}},children:t})},N=function(e){var t=e.setAuction,r=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useRef)(),s=Object(c.useRef)(),i=Object(c.useRef)(),j=Object(c.useRef)(),o=Object(c.useRef)(),l=Object(c.useContext)(C).currentUser,u=function(){var e=Object(p.a)(h.a.mark((function e(c){var u,b,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),u=new Date,b=u.setHours(u.getHours()),d={email:l.email,unidad:r.current.value,desc:n.current.value,costo:Number(a.current.value),taxista:s.current.value,coments:i.current.value,duration:b,categorie:j.current.value},t(d),o.current.reset();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=!!l;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:u,className:b?"border border-danger w-75 p-3 mt-5":"d-none",style:{marginLeft:"12.5%"},ref:o,children:[Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(f.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(g.a.Group,{className:"bg-secondary text-center p-2 text-white w-100 mb-4",children:["Encargado en Turno: ",null===l||void 0===l?void 0:l.email.slice(0,-10)]})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsx)(g.a.Group,{className:"mb-4",children:Object(d.jsx)(g.a.Control,{type:"number",required:!0,ref:r,placeholder:"Numero de Unidad"})})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsx)(g.a.Group,{className:"mb-3",children:Object(d.jsx)(g.a.Control,{type:"text",required:!0,ref:s,placeholder:"KL de Taxista"})})})}),Object(d.jsx)(f.a,{children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(g.a.Label,{children:"Categoria"}),Object(d.jsxs)(g.a.Control,{as:"select",multiple:!1,ref:j,className:"mb-3",children:[Object(d.jsx)("option",{disabled:!0,children:"Selecciona una Opcion        "}),Object(d.jsx)("option",{value:"Mantenimiento",children:" Mantenimiento  "}),Object(d.jsx)("option",{value:"Reparacion",children:"    Reparacion     "}),Object(d.jsx)("option",{value:"Choque",children:"        Choque         "}),Object(d.jsx)("option",{value:"Llantas",children:"       LLantas        "})]})]})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(g.a.Group,{className:"mb-3",children:[Object(d.jsx)(g.a.Label,{children:"Descripcion"}),Object(d.jsx)(g.a.Control,{type:"text",required:!0,ref:n})]})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(g.a.Group,{className:"mb-3",children:[Object(d.jsx)(g.a.Label,{children:"Costo Total"}),Object(d.jsx)(g.a.Control,{type:"number",required:!0,ref:a})]})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Comentarios"}),Object(d.jsx)(g.a.Control,{type:"text",required:!0,ref:i})]})})})]}),Object(d.jsx)(m.a.Footer,{children:Object(d.jsx)(w.a,{variant:"danger",type:"submit",className:"w-100",children:"Guardar Ticket"})})]})})},R=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),r=t[0],n=t[1];return Object(d.jsxs)("div",{className:"container-fluid",children:[r&&Object(d.jsx)(O,{auction:r,setAuction:n}),Object(d.jsx)("div",{children:Object(d.jsx)(N,{setAuction:n})})]})},S=r(70),k=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),r=(t[0],t[1]),n=Object(c.useState)(""),s=Object(a.a)(n,2),i=s[0],j=s[1],o=Object(c.useRef)(),l=Object(c.useRef)(),u=Object(c.useContext)(C).login,b=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(""),e.prev=2,e.next=5,u(o.current.value,l.current.value);case 5:r(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),j("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:b,className:"",children:[Object(d.jsx)(m.a.Header,{children:Object(d.jsx)(m.a.Title,{children:"Entrar"})}),Object(d.jsxs)(m.a.Body,{children:[i&&Object(d.jsx)(S.a,{variant:"danger",children:i}),Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Email "}),Object(d.jsx)(g.a.Control,{type:"email",required:!0,ref:o,className:"mb-3"})]}),Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Password"}),Object(d.jsx)(g.a.Control,{type:"password",required:!0,ref:l,className:"mb-4"})]})]}),Object(d.jsx)(m.a.Footer,{children:Object(d.jsx)(w.a,{variant:"dark",type:"submit",className:"w-100 mb-5 mt-5",children:"Entrar"})})]})})},L=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(""),i=Object(a.a)(s,2),j=i[0],o=i[1],l=Object(c.useRef)(),u=Object(c.useRef)(),b=Object(c.useRef)(),O=Object(c.useContext)(C).register,x=function(){return n(!1)},f=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o(""),u.current.value===b.current.value){e.next=4;break}return e.abrupt("return",o("Passwords does not match"));case 4:return e.prev=4,e.next=7,O(l.current.value,u.current.value);case 7:x(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),o(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(m.a,{centered:!0,show:r,onHide:x,children:Object(d.jsxs)("form",{onSubmit:f,children:[Object(d.jsx)(m.a.Header,{children:Object(d.jsx)(m.a.Title,{children:"Registro"})}),Object(d.jsxs)(m.a.Body,{children:[j&&Object(d.jsx)(S.a,{variant:"danger",children:j}),Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Email"}),Object(d.jsx)(g.a.Control,{type:"email",required:!0,ref:l})]}),Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Password"}),Object(d.jsx)(g.a.Control,{type:"password",required:!0,ref:u})]}),Object(d.jsxs)(g.a.Group,{children:[Object(d.jsx)(g.a.Label,{children:"Confirmar Password"}),Object(d.jsx)(g.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(d.jsxs)(m.a.Footer,{children:[Object(d.jsx)(w.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(d.jsx)(w.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},A=function(){var e=Object(c.useContext)(C),t=e.currentUser,r=e.logout,n=!!t;return Object(d.jsx)("nav",{className:"container-fluid bg-danger",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("div",{className:n?"col-11 navbar-brand text-white":"m-5 text-white fs-1",children:"TALLER TAXIS C-10"}),t?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{onClick:function(){return r()},className:n?"m-2 text-center col-1 text-white":"border",children:"SALIR"})}):Object(d.jsxs)("div",{className:"border col-8 mb-5 mt-5",style:{backgroundColor:"rgb(244,234,234)"},children:[Object(d.jsx)(k,{}),Object(d.jsx)(L,{})]})]})})})},G=function(){return Object(d.jsxs)(y,{children:[Object(d.jsx)(A,{}),Object(d.jsx)(R,{})]})};r(58);Object(n.render)(Object(d.jsx)(G,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.f352d0be.chunk.js.map