import{u as U,k as se,l as ae,m as _,q as te,P as le,s as re,x as ue,y as L,z as R,A as ie,B as M,C as a,D as oe,R as j,E as ne,G as ce,H as ve,I as pe,J as de,K as Ee,L as he,M as ye,N as Ae,O as k,Q as me,S as ge,T as Be,U as $,V as I,W as fe}from"./app-DTJsE06d.js";const He=["/","/intro.html","/%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%A4%96/","/%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%A4%96/%E9%A5%AD%E5%90%8E%E9%9A%8F%E7%AC%94.html","/%E5%AE%9E%E9%AA%8C%E5%AE%A4/todo.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/","/%E7%95%99%E8%A8%80%E5%A2%99/","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Java/Java%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Java/java%E5%9F%BA%E7%A1%80.html","/404.html","/%E5%AE%9E%E9%AA%8C%E5%AE%A4/","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Java/","/category/","/category/%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%A4%96/","/category/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/","/tag/","/tag/%E9%9A%8F%E7%AC%94/","/tag/java/","/tag/%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/","/tag/%E5%9F%BA%E7%A1%80/","/article/","/star/","/timeline/"],Ce="SEARCH_PRO_QUERY_HISTORY",A=U(Ce,[]),Re=()=>{const{queryHistoryCount:t}=k,l=t>0;return{enabled:l,queryHistory:A,addQueryHistory:r=>{l&&(A.value=Array.from(new Set([r,...A.value.slice(0,t-1)])))},removeQueryHistory:r=>{A.value=[...A.value.slice(0,r),...A.value.slice(r+1)]}}},b=t=>He[t.id]+("anchor"in t?`#${t.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:J}=k,m=U(ke,[]),Fe=()=>{const t=J>0;return{enabled:t,resultHistory:m,addResultHistory:l=>{if(t){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),m.value=[r,...m.value.slice(0,J-1)]}},removeResultHistory:l=>{m.value=[...m.value.slice(0,l),...m.value.slice(l+1)]}}},Qe=t=>{const l=pe(),r=_(),F=de(),i=L(0),f=R(()=>i.value>0),E=Ee([]);return he(()=>{const{search:h,terminate:Q}=ye(),g=Ae(c=>{const B=c.join(" "),{searchFilter:w=d=>d,splitWord:q,suggestionsFilter:O,...y}=l.value;B?(i.value+=1,h(c.join(" "),r.value,y).then(d=>w(d,B,r.value,F.value)).then(d=>{i.value-=1,E.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(E.value=[])})):E.value=[]},k.searchDelay-k.suggestDelay);M([t,r],([c])=>g(c),{immediate:!0}),me(()=>{Q()})}),{isSearching:f,results:E}};var qe=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),F=_(),i=te(le),{enabled:f,addQueryHistory:E,queryHistory:h,removeQueryHistory:Q}=Re(),{enabled:g,resultHistory:c,addResultHistory:B,removeResultHistory:w}=Fe(),q=f||g,O=re(t,"queries"),{results:y,isSearching:d}=Qe(O),u=ue({isQuery:!0,index:0}),v=L(0),p=L(0),P=R(()=>q&&(h.value.length>0||c.value.length>0)),x=R(()=>y.value.length>0),S=R(()=>y.value[v.value]||null),Y=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:h.value.length-1):u.index=s-1},V=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},z=()=>{v.value=v.value>0?v.value-1:y.value.length-1,p.value=S.value.contents.length-1},G=()=>{v.value=v.value<y.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<S.value.contents.length-1?p.value+=1:G()},N=()=>{p.value>0?p.value-=1:z()},D=e=>e.map(s=>fe(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[o,C=""]=Be(s)?s[F.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",D([o,...n,C])))}return e.display.map(s=>a("div",D(s)))},H=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(s)}})]))])):null,Z=()=>g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{H()}},()=>[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>D(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),w(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(x.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=S.value.contents[p.value];E(t.queries.join(" ")),B(s),r.push(b(s)),H()}}else if(g){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(c.value[s].link),H())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!x.value:!P.value}],id:"search-pro-results"},t.queries.length?d.value?a(oe,{hint:i.value.searching}):x.value?a("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:s},o)=>{const C=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:C}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const T=C&&p.value===ee;return a(j,{to:b(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{E(t.queries.join(" ")),B(n),H()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:q?P.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{qe as default};
