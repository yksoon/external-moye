import{_ as I,h as L,r as H,o as N,C as u,a as g,b as s,c as o,e as i,d as e,F as y,i as k,j as B,t as r,k as D,l as M,s as m,f as b,g as w,m as P,n as S}from"./index-0557fe6c.js";const Z={id:"wrapper"},q={id:"container",class:"sub_container"},V={id:"content"},Y=e("div",{id:"subtitle"},[e("h2",null,"연혁")],-1),F={class:"history","data-aos-duration":"1000","data-aos-delay":"400"},R={key:0},j={class:"history_box"},z={class:"year"},E={class:"month"},G={key:0},U={key:1},W={key:2},$={class:"title_wrap"},A={class:"history_title"},J={class:"tit"},K={key:0},O=["href"],Q=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},[e("path",{d:"M240-400h480L570-600 450-440l-90-120-120 160ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"})],-1),X=[Q],tt={key:0,class:"subtit"},et={key:1,class:"txt"},st={key:1},ot={class:"board_btn_wrap"},at={class:"boardW_btn"},it=["href"],nt={__name:"Histories",setup(_t){L(null);const a=H({historyTarget:[],historyInfo:[]});N(()=>{x(1,S.people,"")});const x=(c,h,d)=>{u(!0);const f={method:"post",url:w.api_admin_get_histories,data:{page_num:c,page_size:h,search_keyword:d,show_yn:"Y"},callback:_=>n(_),admin:"Y"};g(f);const n=_=>{let l=_.headers.result_code;if(l===m.success||l===m.noData){let T=_.data.result_info;a.historyTarget=T;for(let p=0;p<a.historyTarget.length;p++)C(a.historyTarget[p].history_idx)}else b("log",_)}},C=c=>{u(!0);const h=String(c),v={method:"get",url:w.api_admin_detail_history+`/${h}`,data:{},callback:n=>f(n),admin:"Y"};g(v);const f=n=>{let _=n.headers.result_code,l=n.data.result_info;_===m.success?(u(!1),l.detail_info.length&&a.historyInfo.push(...l.detail_info),console.log(a.historyInfo)):(b("log",n),u(!1),P({type:"alert",message:n.headers.result_message_ko}))}};return(c,h)=>(s(),o("div",Z,[i(" 서브컨텐츠     //S"),e("div",q,[i(' <LeftMenu subvisual="subvisual_notice" page="notice"/> '),e("div",V,[Y,e("div",F,[a.historyInfo.length!==0?(s(),o("div",R,[(s(!0),o(y,null,k(a.historyTarget,d=>(s(),o("div",j,[e("div",z,r(d.target_year),1),e("ul",E,[a.historyInfo.filter(t=>t.history_idx===d.history_idx).length!==0?(s(!0),o(y,{key:0},k(a.historyInfo.filter(t=>t.history_idx===d.history_idx),t=>(s(),o("li",null,[e("div",null,[t.start_date&&t.end_date&&t.start_date!==t.end_date?(s(),o("h6",G,r(t.start_date+"~"+t.end_date)+"월",1)):!t.start_date&&!t.end_date?(s(),o("h6",U,"-")):(s(),o("h6",W,r(t.start_date?t.start_date:t.end_date)+"월",1))]),e("div",$,[e("div",A,[e("p",J,[D(r(t.title)+" ",1),t.place?(s(),o("span",K,"("+r(t.place)+")",1)):i("v-if",!0)]),t.portfolio_link?(s(),o("a",{key:0,href:t.portfolio_link,target:"_blank"},X,8,O)):i("v-if",!0)]),t.sub_title?(s(),o("p",tt,r(t.sub_title),1)):i("v-if",!0),t.content?(s(),o("p",et,r(t.content),1)):i("v-if",!0)])]))),256)):i("v-if",!0)])]))),256))])):i("v-if",!0),a.historyInfo.length===0?(s(),o("div",st," 데이터가 없습니다. ")):i("v-if",!0),e("div",ot,[e("div",at,[e("a",{href:B(M).web_main_url,class:"back_btn"},"목록 ",8,it)])])])])])]))}},dt=I(nt,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/histories/Histories.vue"]]);export{dt as default};