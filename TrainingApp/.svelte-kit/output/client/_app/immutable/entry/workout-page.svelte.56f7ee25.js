import{S as U,i as C,s as D,q,r as d,b as g,u as H,I as b,h as _,k as p,a as O,l as y,c as w,m as E,D as G,n as v,E as k,e as M,d as $,f as P,g as N,v as F,y as A,z as S,A as R,B,M as z}from"../chunks/index.7d26dc88.js";import{L as K}from"../chunks/loading.ce31d138.js";import{u as L,s as J}from"../chunks/staticData.51458e3e.js";function Q(a){let e=a[0]+1+"",t,l,n;return{c(){t=q(e),l=q("/"),n=q(a[1])},l(s){t=d(s,e),l=d(s,"/"),n=d(s,a[1])},m(s,i){g(s,t,i),g(s,l,i),g(s,n,i)},p(s,[i]){i&1&&e!==(e=s[0]+1+"")&&H(t,e),i&2&&H(n,s[1])},i:b,o:b,d(s){s&&_(t),s&&_(l),s&&_(n)}}}function V(a,e,t){let{i:l}=e,{quanity:n}=e;return a.$$set=s=>{"i"in s&&t(0,l=s.i),"quanity"in s&&t(1,n=s.quanity)},[l,n]}class W extends U{constructor(e){super(),C(this,e,V,Q,D,{i:0,quanity:1})}}function X(a){let e,t,l,n,s=a[3](a[0])+"",i,o,f,m=a[1][a[2].language||"Русский"]+"",c;return{c(){e=p("img"),l=O(),n=p("h3"),i=q(s),o=O(),f=p("h1"),c=q(m),this.h()},l(r){e=y(r,"IMG",{src:!0,alt:!0,class:!0}),l=w(r),n=y(r,"H3",{class:!0});var u=E(n);i=d(u,s),u.forEach(_),o=w(r),f=y(r,"H1",{class:!0});var h=E(f);c=d(h,m),h.forEach(_),this.h()},h(){G(e.src,t=a[1].src)||v(e,"src",t),v(e,"alt",""),v(e,"class","svelte-1s7r1wc"),v(n,"class","svelte-1s7r1wc"),v(f,"class","svelte-1s7r1wc")},m(r,u){g(r,e,u),g(r,l,u),g(r,n,u),k(n,i),g(r,o,u),g(r,f,u),k(f,c)},p(r,[u]){u&2&&!G(e.src,t=r[1].src)&&v(e,"src",t),u&1&&s!==(s=r[3](r[0])+"")&&H(i,s),u&2&&m!==(m=r[1][r[2].language||"Русский"]+"")&&H(c,m)},i:b,o:b,d(r){r&&_(e),r&&_(l),r&&_(n),r&&_(o),r&&_(f)}}}function Y(a,e,t){let{exercise:l}=e,{quanitityOrTime:n}=e,{quantity:s}=e,{further:i}=e,o=JSON.parse(localStorage.getItem("user"))||null;const f=r=>n?o&&o.language==="English"?r+" times":r+" раз":o&&o.language==="English"?r+" seconds":r+" секунд",m=()=>{s||i(),clearInterval(c)},c=setInterval(()=>!n&&s?t(0,s--,s):m(),1e3);return a.$$set=r=>{"exercise"in r&&t(1,l=r.exercise),"quanitityOrTime"in r&&t(4,n=r.quanitityOrTime),"quantity"in r&&t(0,s=r.quantity),"further"in r&&t(5,i=r.further)},[s,l,o,f,n,i]}class Z extends U{constructor(e){super(),C(this,e,Y,X,D,{exercise:1,quanitityOrTime:4,quantity:0,further:5})}}function x(a){let e,t,l,n,s,i,o,f=L&&L.language==="Engish"?"Relax":"Отдых",m;return{c(){e=p("img"),l=O(),n=p("h3"),s=q(a[0]),i=O(),o=p("h1"),m=q(f),this.h()},l(c){e=y(c,"IMG",{src:!0,alt:!0,class:!0}),l=w(c),n=y(c,"H3",{class:!0});var r=E(n);s=d(r,a[0]),r.forEach(_),i=w(c),o=y(c,"H1",{class:!0});var u=E(o);m=d(u,f),u.forEach(_),this.h()},h(){G(e.src,t=`${J}?src=relax.png`)||v(e,"src",t),v(e,"alt",""),v(e,"class","svelte-t94c2l"),v(n,"class","svelte-t94c2l"),v(o,"class","svelte-t94c2l")},m(c,r){g(c,e,r),g(c,l,r),g(c,n,r),k(n,s),g(c,i,r),g(c,o,r),k(o,m)},p(c,[r]){r&1&&H(s,c[0])},i:b,o:b,d(c){c&&_(e),c&&_(l),c&&_(n),c&&_(i),c&&_(o)}}}function ee(a,e,t){let l=30;return setInterval(()=>t(0,l--,l),1e3),[l]}class te extends U{constructor(e){super(),C(this,e,ee,x,D,{})}}function le(a){let e,t;return e=new K({}),{c(){A(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,n){R(e,l,n),t=!0},p:b,i(l){t||(N(e.$$.fragment,l),t=!0)},o(l){$(e.$$.fragment,l),t=!1},d(l){B(e,l)}}}function se(a){let e,t,l,n,s,i,o,f;l=new W({props:{i:a[2],quanity:a[0][0].length}}),i=new Z({props:{exercise:a[1][a[0][0][a[2]].id],quanitityOrTime:a[0][0][a[2]].quantity,quantity:a[0][0][a[2]].quantity||a[0][0][a[2]].times,further:a[4]}});function m(u,h){return u[0][0].length-1>u[2]?ie:ne}let c=m(a),r=c(a);return{c(){e=p("section"),t=p("header"),A(l.$$.fragment),n=O(),s=p("main"),A(i.$$.fragment),o=O(),r.c(),this.h()},l(u){e=y(u,"SECTION",{class:!0});var h=E(e);t=y(h,"HEADER",{class:!0});var I=E(t);S(l.$$.fragment,I),I.forEach(_),n=w(h),s=y(h,"MAIN",{});var T=E(s);S(i.$$.fragment,T),T.forEach(_),o=w(h),r.l(h),h.forEach(_),this.h()},h(){v(t,"class","svelte-2ve36k"),v(e,"class","svelte-2ve36k")},m(u,h){g(u,e,h),k(e,t),R(l,t,null),k(e,n),k(e,s),R(i,s,null),k(e,o),r.m(e,null),f=!0},p(u,h){const I={};h&4&&(I.i=u[2]),h&1&&(I.quanity=u[0][0].length),l.$set(I);const T={};h&7&&(T.exercise=u[1][u[0][0][u[2]].id]),h&5&&(T.quanitityOrTime=u[0][0][u[2]].quantity),h&5&&(T.quantity=u[0][0][u[2]].quantity||u[0][0][u[2]].times),i.$set(T),c===(c=m(u))&&r?r.p(u,h):(r.d(1),r=c(u),r&&(r.c(),r.m(e,null)))},i(u){f||(N(l.$$.fragment,u),N(i.$$.fragment,u),f=!0)},o(u){$(l.$$.fragment,u),$(i.$$.fragment,u),f=!1},d(u){u&&_(e),B(l),B(i),r.d()}}}function re(a){let e,t;return e=new te({}),{c(){A(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,n){R(e,l,n),t=!0},p:b,i(l){t||(N(e.$$.fragment,l),t=!0)},o(l){$(e.$$.fragment,l),t=!1},d(l){B(e,l)}}}function ne(a){let e,t,l,n;return{c(){e=p("button"),t=q("Завершить"),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var i=E(e);t=d(i,"Завершить"),i.forEach(_),this.h()},h(){v(e,"class","svelte-2ve36k")},m(s,i){g(s,e,i),k(e,t),l||(n=z(e,"click",a[5]),l=!0)},p:b,d(s){s&&_(e),l=!1,n()}}}function ie(a){let e,t=a[0][0][a[2]].quantity&&j(a);return{c(){t&&t.c(),e=M()},l(l){t&&t.l(l),e=M()},m(l,n){t&&t.m(l,n),g(l,e,n)},p(l,n){l[0][0][l[2]].quantity?t?t.p(l,n):(t=j(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&_(e)}}}function j(a){let e,t,l,n;return{c(){e=p("button"),t=q(">>"),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var i=E(e);t=d(i,">>"),i.forEach(_),this.h()},h(){v(e,"class","svelte-2ve36k")},m(s,i){g(s,e,i),k(e,t),l||(n=z(e,"click",a[4]),l=!0)},p:b,d(s){s&&_(e),l=!1,n()}}}function ae(a){let e,t,l,n;const s=[re,se,le],i=[];function o(f,m){return f[3]?0:f[1].length&&f[0].length?1:2}return e=o(a),t=i[e]=s[e](a),{c(){t.c(),l=M()},l(f){t.l(f),l=M()},m(f,m){i[e].m(f,m),g(f,l,m),n=!0},p(f,[m]){let c=e;e=o(f),e===c?i[e].p(f,m):(F(),$(i[c],1,1,()=>{i[c]=null}),P(),t=i[e],t?t.p(f,m):(t=i[e]=s[e](f),t.c()),N(t,1),t.m(l.parentNode,l))},i(f){n||(N(t),n=!0)},o(f){$(t),n=!1},d(f){i[e].d(f),f&&_(l)}}}function ue(a,e,t){let l=new Array,n=new Array,s=0,i=!1;const o=()=>{t(3,i=!0),setTimeout(()=>{t(3,i=!1),t(2,s++,s)},3e4)};return fetch(`${J}/startTraining?id=${L.programId}`).then(m=>m.json()).then(m=>{t(0,[l,n]=m,l,t(1,n))}),[l,n,s,i,o,()=>{location="/"}]}class _e extends U{constructor(e){super(),C(this,e,ue,ae,D,{})}}export{_e as default};