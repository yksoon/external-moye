import{_ as C,u as x,l as d,r as y,o as N,C as c,a as B,b as a,c as n,g as i,d as t,j as L,t as e,F as V,m as D,e as u,f as $,q as P,z as S,i as h,s as b,h as j}from"./index-b8fd19e8.js";import{L as F}from"./LeftMenu-133eb7ee.js";const M="/img/common/x_btn.png",R={id:"wrapper"},U={id:"container",class:"sub_container"},q={id:"content"},z=t("div",{id:"subtitle"},[t("h2",null,"공지사항")],-1),E={key:0,class:"board_Vtable"},G=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),I={colspan:"3"},T={colspan:"3"},W=t("li",{class:"imbar"},"|",-1),Y=t("li",{class:"imbar"},"|",-1),A={key:0,colspan:"3"},H={class:"download_li"},J=["href"],K=t("img",{src:S},null,-1),O=t("div",{class:"attachment",style:{display:"none"}},[t("div",{class:"xbtn"},[t("img",{src:M})])],-1),Q={colspan:"3"},X={class:"board_content"},Z={class:"board_btn_wrap"},tt={class:"boardW_btn"},st=["href"],et={__name:"Notice",setup(ot){const m=x();d(null),d(null);const s=y({board:null});N(()=>{f()});const p=h.api_file,f=()=>{c(!0);const r=m.params.notice,g={method:"get",url:h.api_admin_get_board+`/${r}`,data:{},callback:o=>w(o),admin:"Y"};B(g);const w=o=>{let _=o.headers.result_code;if(_===b.success||_===b.noData){let k=o.data.result_info;s.board=k,c(!1)}else j("log",o),c(!1)}};return(r,v)=>(a(),n("div",R,[i(" 서브컨텐츠     //S"),t("div",U,[L(F,{subvisual:"subvisual_notice",page:"notice"}),t("div",q,[z,t("div",null,[s.board?(a(),n("table",E,[G,t("thead",null,[t("tr",null,[t("th",I,e(s.board.subject),1)]),t("tr",null,[t("td",T,[t("ul",null,[t("li",null,e(s.board.reg_user_name_ko),1),W,t("li",null,e(s.board.view_count),1),Y,t("li",null,e(s.board.reg_dttm),1)])])]),t("tr",null,[s.board.file_info.length!==0?(a(),n("td",A,[t("ul",null,[(a(!0),n(V,null,D(s.board.file_info,l=>(a(),n("li",H,[t("a",{class:"attachment_parent",href:`${u(p)}${l.file_path_enc}`},[K,$(" "+e(l.file_name),1)],8,J),O]))),256))])])):i("v-if",!0)])]),t("tbody",null,[t("tr",null,[t("td",Q,[t("div",X,e(s.board.content),1)])])])])):i("v-if",!0),t("div",Z,[t("div",tt,[t("a",{href:u(P).web_notices_url,class:"back_btn"},"목록 ",8,st)])])])])])]))}},lt=C(et,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/notices/Notice.vue"]]);export{lt as default};