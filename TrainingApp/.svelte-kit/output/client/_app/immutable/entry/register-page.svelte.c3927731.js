import{S as J,i as K,s as Q,k as N,y as R,a as S,q as $,l as E,m as k,z as X,h as b,c as O,r as j,n as _,b as G,E as p,A as Y,L as q,M as B,u as z,g as Z,d as x,B as ee,N as te}from"../chunks/index.7d26dc88.js";import{s as se,a as le}from"../chunks/staticData.51458e3e.js";import{S as ae}from"../chunks/select.60956264.js";import{t as v}from"../chunks/translation.f723c923.js";function F(s){let a,e=v.get("AUserWithThisNameAlreadyExists").get(s[3].value)+"",r;return{c(){a=N("p"),r=$(e),this.h()},l(l){a=E(l,"P",{class:!0});var c=k(a);r=j(c,e),c.forEach(b),this.h()},h(){_(a,"class","svelte-t28plw")},m(l,c){G(l,a,c),p(a,r)},p(l,c){c&8&&e!==(e=v.get("AUserWithThisNameAlreadyExists").get(l[3].value)+"")&&z(r,e)},d(l){l&&b(a)}}}function ne(s){let a,e,r,l,c,o,g=(s[3].value==="Русский"?"Регистрация":v.get("register").get(s[3].value))+"",d,U,u,A,y,f,m,C,T,I=v.get("register").get(s[3].value)+"",P,M,w,W,D;l=new ae({props:{options:s[4],optionNow:s[3],setOptionNow:s[5]}});let n=s[2]&&F(s);return{c(){a=N("main"),e=N("section"),r=N("div"),R(l.$$.fragment),c=S(),o=N("h1"),d=$(g),U=S(),u=N("input"),y=S(),f=N("input"),C=S(),T=N("button"),P=$(I),M=S(),n&&n.c(),this.h()},l(t){a=E(t,"MAIN",{class:!0});var h=k(a);e=E(h,"SECTION",{class:!0});var i=k(e);r=E(i,"DIV",{class:!0});var H=k(r);X(l.$$.fragment,H),H.forEach(b),c=O(i),o=E(i,"H1",{});var L=k(o);d=j(L,g),L.forEach(b),U=O(i),u=E(i,"INPUT",{type:!0,placeholder:!0,class:!0}),y=O(i),f=E(i,"INPUT",{type:!0,placeholder:!0,class:!0}),C=O(i),T=E(i,"BUTTON",{class:!0});var V=k(T);P=j(V,I),V.forEach(b),M=O(i),n&&n.l(i),i.forEach(b),h.forEach(b),this.h()},h(){_(r,"class","select svelte-t28plw"),_(u,"type","text"),_(u,"placeholder",A=v.get("name").get(s[3].value)),_(u,"class","svelte-t28plw"),_(f,"type","password"),_(f,"placeholder",m=v.get("password").get(s[3].value)),_(f,"class","svelte-t28plw"),_(T,"class","svelte-t28plw"),_(e,"class","svelte-t28plw"),_(a,"class","svelte-t28plw")},m(t,h){G(t,a,h),p(a,e),p(e,r),Y(l,r,null),p(e,c),p(e,o),p(o,d),p(e,U),p(e,u),q(u,s[0]),p(e,y),p(e,f),q(f,s[1]),p(e,C),p(e,T),p(T,P),p(e,M),n&&n.m(e,null),w=!0,W||(D=[B(u,"input",s[8]),B(u,"input",s[9]),B(f,"input",s[10]),B(T,"click",s[7])],W=!0)},p(t,[h]){const i={};h&8&&(i.optionNow=t[3]),l.$set(i),(!w||h&8)&&g!==(g=(t[3].value==="Русский"?"Регистрация":v.get("register").get(t[3].value))+"")&&z(d,g),(!w||h&8&&A!==(A=v.get("name").get(t[3].value)))&&_(u,"placeholder",A),h&1&&u.value!==t[0]&&q(u,t[0]),(!w||h&8&&m!==(m=v.get("password").get(t[3].value)))&&_(f,"placeholder",m),h&2&&f.value!==t[1]&&q(f,t[1]),(!w||h&8)&&I!==(I=v.get("register").get(t[3].value)+"")&&z(P,I),t[2]?n?n.p(t,h):(n=F(t),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i(t){w||(Z(l.$$.fragment,t),w=!0)},o(t){x(l.$$.fragment,t),w=!1},d(t){t&&b(a),ee(l),n&&n.d(),W=!1,te(D)}}}function re(s,a,e){let r;const l=[{value:"Русский",src:"Русский.png"},{value:"English",src:"English.png"}],c=m=>e(3,r=m);let o="",g="",d=!1;const U=()=>!isNaN(Number(o[0]))||o[0]==="-"||o[0]==="="||o[0]==="+",u=()=>{fetch(`${se}/register?username=${o}&password=${g}`).then(m=>{if(m.ok)return e(2,d=!1),m.json();e(2,d=!0)}).then(m=>{if(m[0]){e(2,d=!0);return}le(m),location="/"})};function A(){o=this.value,e(0,o)}const y=()=>{U()&&e(0,o="")};function f(){g=this.value,e(1,g)}return e(3,r=c(l[0])),[o,g,d,r,l,c,U,u,A,y,f]}class ce extends J{constructor(a){super(),K(this,a,re,ne,Q,{})}}export{ce as default};