import{_ as C,u as x,j as d,r as y,o as N,C as i,a as B,b as n,c as a,e as l,d as t,h as L,t as e,F as V,k as $,q as u,l as D,v as j,g as b,s as h,f as P}from"./index-0435ce16.js";import{L as S}from"./LeftMenu-bbd70c6d.js";const F="/img/common/files.jpg",M="/img/common/x_btn.png",R={id:"wrapper"},U={id:"container",class:"sub_container"},q={id:"content"},E=t("div",{id:"subtitle"},[t("h2",null,"공지사항")],-1),G={key:0,class:"board_Vtable"},I=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),T={colspan:"3"},W={colspan:"3"},Y=t("li",{class:"imbar"},"|",-1),z=t("li",{class:"imbar"},"|",-1),A={key:0,colspan:"3"},H={class:"download_li"},J=["href"],K=t("img",{src:F},null,-1),O=t("div",{class:"attachment",style:{display:"none"}},[t("div",{class:"xbtn"},[t("img",{src:M})])],-1),Q={colspan:"3"},X={class:"board_content"},Z={class:"board_btn_wrap"},tt={class:"boardW_btn"},st=["href"],et={__name:"Notice",setup(ot){const p=x();d(null),d(null);const s=y({board:null});N(()=>{f()});const m=b.api_file,f=()=>{i(!0);const r=p.params.notice,v={method:"get",url:b.api_admin_get_board+`/${r}`,data:{},callback:o=>k(o),admin:"Y"};B(v);const k=o=>{let _=o.headers.result_code;if(_===h.success||_===h.noData){let w=o.data.result_info;s.board=w,i(!1)}else P("log",o),i(!1)}};return(r,g)=>(n(),a("div",R,[l(" 서브컨텐츠     //S"),t("div",U,[L(S,{subvisual:"subvisual_notice",page:"notice"}),t("div",q,[E,t("div",null,[s.board?(n(),a("table",G,[I,t("thead",null,[t("tr",null,[t("th",T,e(s.board.subject),1)]),t("tr",null,[t("td",W,[t("ul",null,[t("li",null,e(s.board.reg_user_name_ko),1),Y,t("li",null,e(s.board.view_count),1),z,t("li",null,e(s.board.reg_dttm),1)])])]),t("tr",null,[s.board.file_info.length!==0?(n(),a("td",A,[(n(!0),a(V,null,$(s.board.file_info,c=>(n(),a("ul",null,[t("li",H,[t("a",{class:"attachment_parent",href:`${u(m)}${c.file_path_enc}`},[D(e(c.file_name)+" ",1),K],8,J),O])]))),256))])):l("v-if",!0)])]),t("tbody",null,[t("tr",null,[t("td",Q,[t("div",X,e(s.board.content),1)])])])])):l("v-if",!0),t("div",Z,[t("div",tt,[t("a",{href:u(j).web_notices_url,class:"back_btn"},"목록 ",8,st),l(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])])])])])]))}},lt=C(et,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/notices/Notice.vue"]]);export{lt as default};
