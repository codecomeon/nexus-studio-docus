import O from"./DocsAside.438d64ae.js";import R from"./ProseCodeInline.6545fac7.js";import U from"./Alert.73806698.js";import W from"./DocsPageBottom.28e55466.js";import Y from"./DocsPrevNext.2916ace7.js";import{d as q,W as J,a9 as Q,s as X,K as m,r as V,m as Z,o as ee,ac as oe,b as u,Y as A,w as h,L as t,c as g,g as r,f as y,e as p,$ as te,G as x,t as ne,F as se,n as k,a8 as ae,ad as ce,p as le,i as re,k as _e}from"./entry.9b7e6b06.js";import ie from"./DocsToc.3768a661.js";import"./slot.60709d02.js";import"./node.676c5e99.js";import"./ProseA.080e4e23.js";import"./EditOnLink.vue.5f9def51.js";import"./DocsTocLinks.1f788927.js";const ue=d=>(le("data-v-2b17f4a5"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=q({__name:"DocsPageLayout",setup(d){const{page:s}=J(),{config:f,tree:b}=Q(),L=X(),F=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},T=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),P=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=b.value)==null?void 0:o.length)>1||((l=(c=(n=b.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),H=m(()=>F("bottom",!0)),_=V(!1),a=V(null),v=()=>L.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,N,$,I;const n=O,c=R,l=U,M=W,j=Y,z=ae,E=ie,G=ce;return u(),A(G,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(N=(B=t(f))==null?void 0:B.main)==null?void 0:N.padded,class:k(["docs-page-content",{fluid:(I=($=t(f))==null?void 0:$.main)==null?void 0:I.fluid,"has-toc":t(P),"has-aside":t(S)}])},{default:h(()=>[t(S)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(T)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(T)&&t(s)&&t(H)?(u(),g(se,{key:2},[r(M),r(j)],64)):y("",!0)]),t(P)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=K=>_.value=!t(_))},[fe,r(z,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(E,{onMove:o[1]||(o[1]=K=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Be=_e(ve,[["__scopeId","data-v-2b17f4a5"]]);export{Be as default};
