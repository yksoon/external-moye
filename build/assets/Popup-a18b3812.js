import{_ as f,u as b,r as v,o as C,C as s,a as g,b as c,c as p,d as o,t as l,e as P,s as r,f as k,g as y}from"./index-37cb9f5e.js";const w={id:"wrapper"},x={id:"container",class:"sub_container"},D={"data-aos-duration":"1000","data-aos-delay":"400"},B={key:0,class:"board_Vtable"},V=o("colgroup",null,[o("col",{width:"*"})],-1),L={colspan:"3"},N={colspan:"3"},R={class:"board_content"},S={__name:"Popup",setup(E){const d=b(),e=v({popup:null});C(()=>{u()});const u=()=>{s(!0);const a=d.params.popup,i={method:"get",url:y.api_admin_detail_popup+`/${a}`,data:{},callback:t=>m(t),admin:"Y"};g(i);const m=t=>{let n=t.headers.result_code;if(n===r.success||n===r.noData){let h=t.data.result_info;e.popup=h,s(!1)}else k("log",t),s(!1)}};return(a,_)=>(c(),p("div",w,[o("div",x,[o("div",D,[e.popup?(c(),p("table",B,[V,o("thead",null,[o("tr",null,[o("th",L,l(e.popup.title),1)])]),o("tbody",null,[o("tr",null,[o("td",N,[o("div",R,l(e.popup.content),1)])])])])):P("v-if",!0)])])]))}},M=f(S,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/Popup.vue"]]);export{M as default};
