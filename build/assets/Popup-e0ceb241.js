import{_ as f,u as b,r as v,o as C,C as s,a as g,b as c,c as p,d as o,t as l,e as P,s as r,f as k,g as w}from"./index-b46ff5b1.js";const x={id:"wrapper"},y={id:"container",class:"sub_container"},D={key:0,class:"board_Vtable"},B=o("colgroup",null,[o("col",{width:"*"})],-1),V={colspan:"3"},L={colspan:"3"},N={class:"board_content"},R={__name:"Popup",setup(S){const u=b(),e=v({popup:null});C(()=>{d()});const d=()=>{s(!0);const a=u.params.popup,i={method:"get",url:w.api_admin_detail_popup+`/${a}`,data:{},callback:t=>m(t),admin:"Y"};g(i);const m=t=>{let n=t.headers.result_code;if(n===r.success||n===r.noData){let h=t.data.result_info;e.popup=h,s(!1)}else k("log",t),s(!1)}};return(a,_)=>(c(),p("div",x,[o("div",y,[o("div",null,[e.popup?(c(),p("table",D,[B,o("thead",null,[o("tr",null,[o("th",V,l(e.popup.title),1)])]),o("tbody",null,[o("tr",null,[o("td",L,[o("div",N,l(e.popup.content),1)])])])])):P("v-if",!0)])])]))}},I=f(R,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/Popup.vue"]]);export{I as default};
