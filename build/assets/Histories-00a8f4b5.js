import{_ as T,l as I,r as H,o as N,C as u,a as v,b as e,c as s,g as r,d as o,j as B,F as y,m as k,t as _,f as D,s as p,h as x,i as b,n as M,p as S}from"./index-ce0bf5b9.js";import{L as V}from"./LeftMenu-d063b98f.js";const Z={id:"wrapper"},q={id:"container",class:"sub_container"},P={id:"content"},Y=o("div",{id:"subtitle"},[o("h2",null,"연혁")],-1),F={class:"history"},R={key:0},j={class:"history_box"},z={class:"year"},E={class:"month"},G={key:0},U={key:1},$={key:2},A={class:"title_wrap"},J={class:"history_title"},K={class:"tit"},O={key:0},Q=["href"],W=o("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},[o("path",{d:"M240-400h480L570-600 450-440l-90-120-120 160ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"})],-1),X=[W],tt={key:0,class:"subtit"},et={key:1,class:"txt"},st={__name:"Histories",setup(ot){I(null);const a=H({historyTarget:[],historyInfo:[]});N(()=>{w(1,S.people,"")});const w=(c,h,d)=>{u(!0);const f={method:"post",url:b.api_admin_get_histories,data:{page_num:c,page_size:h,search_keyword:d,show_yn:"Y"},callback:n=>i(n),admin:"Y"};v(f);const i=n=>{let l=n.headers.result_code;if(l===p.success||l===p.noData){let L=n.data.result_info;a.historyTarget=L;for(let m=0;m<a.historyTarget.length;m++)C(a.historyTarget[m].history_idx)}else x("log",n)}},C=c=>{u(!0);const h=String(c),g={method:"get",url:b.api_admin_detail_history+`/${h}`,data:{},callback:i=>f(i),admin:"Y"};v(g);const f=i=>{let n=i.headers.result_code,l=i.data.result_info;n===p.success?(u(!1),l.detail_info.length&&a.historyInfo.push(...l.detail_info),console.log(a.historyInfo)):(x("log",i),u(!1),M({type:"alert",message:i.headers.result_message_ko}))}};return(c,h)=>(e(),s("div",Z,[r(" 서브컨텐츠     //S"),o("div",q,[B(V,{subvisual:"subvisual_intro",page:"histories"}),o("div",P,[Y,o("div",F,[a.historyInfo.length!==0?(e(),s("div",R,[(e(!0),s(y,null,k(a.historyTarget,d=>(e(),s("div",j,[o("div",z,_(d.target_year),1),o("ul",E,[a.historyInfo.filter(t=>t.history_idx===d.history_idx).length!==0?(e(!0),s(y,{key:0},k(a.historyInfo.filter(t=>t.history_idx===d.history_idx),t=>(e(),s("li",null,[o("div",null,[t.start_date&&t.end_date&&t.start_date!==t.end_date?(e(),s("h6",G,_(t.start_date+"~"+t.end_date)+"월",1)):!t.start_date&&!t.end_date?(e(),s("h6",U,"-")):(e(),s("h6",$,_(t.start_date?t.start_date:t.end_date)+"월",1))]),o("div",A,[o("div",J,[o("p",K,[D(_(t.title)+" ",1),t.place?(e(),s("span",O,"("+_(t.place)+")",1)):r("v-if",!0)]),t.portfolio_link?(e(),s("a",{key:0,href:t.portfolio_link,target:"_blank"},X,8,Q)):r("v-if",!0)]),t.sub_title?(e(),s("p",tt,_(t.sub_title),1)):r("v-if",!0),t.content?(e(),s("p",et,_(t.content),1)):r("v-if",!0)])]))),256)):r("v-if",!0)])]))),256))])):r("v-if",!0)])])])]))}},nt=T(st,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/moyeIntro/histories/Histories.vue"]]);export{nt as default};