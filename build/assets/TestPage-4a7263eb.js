import{_ as i,Q as d,R as p,o as m,b as c,c as f,d as o,n as r,C}from"./index-c7bad43e.js";const g={name:"TestPage",setup(){d(p().getCodes),m(()=>{});const a=()=>{const e=()=>{console.log("이제 이 로직을 실행합니다")};r({type:"confirm",title:"타이틀",message:"내용2222222",callback:()=>e()})},n=()=>{r({type:"alert",title:"알럿",message:"내용33333"})},s=()=>{C(!0)};return{handelConfirmOpen:()=>a(),handelAlertOpen:()=>n(),handelSpinner:()=>s()}}},h=o("h1",null,"Test Page",-1);function u(a,n,s,e,l,k){return c(),f("div",null,[h,o("div",null,[o("a",{onClick:n[0]||(n[0]=(...t)=>e.handelAlertOpen&&e.handelAlertOpen(...t))},"test Alert")]),o("div",null,[o("a",{onClick:n[1]||(n[1]=(...t)=>e.handelConfirmOpen&&e.handelConfirmOpen(...t))},"test Confirm")]),o("div",null,[o("a",{onClick:n[2]||(n[2]=(...t)=>e.handelSpinner&&e.handelSpinner(...t))},"test Spinner")])])}const S=i(g,[["render",u],["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/admin/TestPage.vue"]]);export{S as default};
