import{_ as k,u as C,r as w,o as P,C as i,a as x,b as a,c as l,e as n,d as t,h as B,t as s,F as L,k as D,q as d,v as G,g as u,s as h,f as N}from"./index-ea1bb856.js";import{L as S}from"./LeftMenu-bf1177ba.js";const V={id:"wrapper"},$={id:"container",class:"sub_container"},F={id:"content"},M=t("div",{id:"subtitle"},[t("h2",null,"포토 갤러리")],-1),R={class:"gallery_view"},U={key:0},j={class:"gallery_title"},q={key:0,class:"gallery_subtitle"},E={class:"gallery_info"},I=t("li",{class:"imbar"},"|",-1),Y=t("li",{class:"imbar"},"|",-1),z={style:{"border-bottom":"none"}},A={class:"gallery_content"},H=["src","alt"],J={class:"gallery_content_text"},K={class:"detail_btn_wrap"},O=["href"],Q={__name:"Photo",setup(T){const b=C(),e=w({board:null});P(()=>{m()});const f=u.api_file,m=()=>{i(!0);const _=b.params.photo,g={method:"get",url:u.api_admin_get_board+`/${_}`,data:{},callback:o=>v(o),admin:"Y"};x(g);const v=o=>{let c=o.headers.result_code;if(c===h.success||c===h.noData){let y=o.data.result_info;e.board=y,i(!1)}else N("log",o),i(!1)}};return(_,p)=>(a(),l("div",V,[n(" 서브컨텐츠     //S"),t("div",$,[B(S,{subvisual:"subvisual_notice",page:"photo"}),t("div",F,[M,t("div",R,[e.board?(a(),l("table",U,[t("thead",null,[t("tr",null,[t("th",j,s(e.board.subject),1)]),t("tr",null,[t("th",null,[e.board.sub_title?(a(),l("span",q,s(e.board.sub_title),1)):n("v-if",!0)])]),t("tr",null,[t("td",null,[t("ul",E,[t("li",null,s(e.board.reg_user_name_ko),1),I,t("li",null,"조회수 "+s(e.board.view_count),1),Y,t("li",null,s(e.board.reg_dttm),1)])])])]),t("tbody",null,[t("tr",z,[e.board.file_info.length!==0?(a(!0),l(L,{key:0},D(e.board.file_info,r=>(a(),l("td",null,[t("div",A,[t("img",{src:`${d(f)}${r.file_path_enc}`,alt:r.file_name},null,8,H)])]))),256)):n("v-if",!0)]),t("tr",null,[t("td",null,[t("div",J,s(e.board.content),1)])])])])):n("v-if",!0),t("div",K,[t("a",{href:d(G).web_photoGallery_url,class:"detail_btn"},"목록 ",8,O)])])])])]))}},Z=k(Q,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/photoGallery/Photo.vue"]]);export{Z as default};
