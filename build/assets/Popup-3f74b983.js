import{_ as f,u as b,r as v,o as C,C as s,a as g,b as n,c as p,d as o,t as c,e as P,s as l,f as k,g as x}from"./index-a5914089.js";const w={id:"wrapper"},y={id:"container",class:"sub_container"},D={key:0,class:"board_Vtable"},B=o("colgroup",null,[o("col",{width:"*"})],-1),N={colspan:"3"},V={colspan:"3"},I={class:"board_content"},L={__name:"Popup",props:{popupIdx:Number},setup(R){const r=b().params.popup,e=v({popup:null});C(()=>{u()});const u=()=>{s(!0);const i={method:"get",url:x.api_admin_detail_popup+`/${r}`,data:{},callback:t=>m(t),admin:"Y"};g(i);const m=t=>{let a=t.headers.result_code;if(a===l.success||a===l.noData){let h=t.data.result_info;e.popup=h,s(!1)}else k("log",t),s(!1)}};return(d,_)=>(n(),p("div",w,[o("div",y,[o("div",null,[e.popup?(n(),p("table",D,[B,o("thead",null,[o("tr",null,[o("th",N,c(e.popup.title),1)])]),o("tbody",null,[o("tr",null,[o("td",V,[o("div",I,c(e.popup.content),1)])])])])):P("v-if",!0)])])]))}},G=f(L,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/Popup.vue"]]);export{G as default};
