import{_ as f,n as b,a as v,o as C,C as e,b as g,d as c,e as p,g as o,t as l,f as k,s as r,k as P,l as y}from"./index-19648a2f.js";const w={id:"wrapper"},x={id:"container",class:"sub_container"},D={"data-aos-duration":"1000","data-aos-delay":"400"},B={key:0,class:"board_Vtable"},V=o("colgroup",null,[o("col",{width:"*"})],-1),L={colspan:"3"},N={colspan:"3"},R={class:"board_content"},S={__name:"Popup",setup(E){const d=b(),s=v({popup:null});C(()=>{u()});const u=()=>{e(!0);const a=d.params.popup,i={method:"get",url:y.api_admin_detail_popup+`/${a}`,data:{},callback:t=>m(t),admin:"Y"};g(i);const m=t=>{let n=t.headers.result_code;if(n===r.success||n===r.noData){let h=t.data.result_info;s.popup=h,e(!1)}else P("log",t),e(!1)}};return(a,_)=>(c(),p("div",w,[o("div",x,[o("div",D,[s.popup?(c(),p("table",B,[V,o("thead",null,[o("tr",null,[o("th",L,l(s.popup.title),1)])]),o("tbody",null,[o("tr",null,[o("td",N,[o("div",R,l(s.popup.content),1)])])])])):k("v-if",!0)])])]))}},M=f(S,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/Popup.vue"]]);export{M as default};