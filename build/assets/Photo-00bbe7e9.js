import{_ as k,u as C,r as w,o as P,C as i,a as x,b as a,c as l,g as n,d as t,j as B,t as s,F as L,m as D,e as d,q as G,i as u,s as h,h as N}from"./index-b8fd19e8.js";import{L as S}from"./LeftMenu-133eb7ee.js";const V={id:"wrapper"},$={id:"container",class:"sub_container"},j={id:"content"},F=t("div",{id:"subtitle"},[t("h2",null,"포토 갤러리")],-1),M={class:"gallery_view"},R={key:0},U={class:"gallery_title"},q={key:0,class:"gallery_subtitle"},E={class:"gallery_info"},I=t("li",{class:"imbar"},"|",-1),Y=t("li",{class:"imbar"},"|",-1),z={style:{"border-bottom":"none"}},A={class:"gallery_content"},H=["src","alt"],J={class:"gallery_content_text"},K={class:"detail_btn_wrap"},O=["href"],Q={__name:"Photo",setup(T){const b=C(),e=w({board:null});P(()=>{p()});const m=u.api_file,p=()=>{i(!0);const _=b.params.photo,g={method:"get",url:u.api_admin_get_board+`/${_}`,data:{},callback:o=>v(o),admin:"Y"};x(g);const v=o=>{let c=o.headers.result_code;if(c===h.success||c===h.noData){let y=o.data.result_info;e.board=y,i(!1)}else N("log",o),i(!1)}};return(_,f)=>(a(),l("div",V,[n(" 서브컨텐츠     //S"),t("div",$,[B(S,{subvisual:"subvisual_notice",page:"photo"}),t("div",j,[F,t("div",M,[e.board?(a(),l("table",R,[t("thead",null,[t("tr",null,[t("th",U,s(e.board.subject),1)]),t("tr",null,[t("th",null,[e.board.sub_title?(a(),l("span",q,s(e.board.sub_title),1)):n("v-if",!0)])]),t("tr",null,[t("td",null,[t("ul",E,[t("li",null,s(e.board.reg_user_name_ko),1),I,t("li",null,"조회수 "+s(e.board.view_count),1),Y,t("li",null,s(e.board.reg_dttm),1)])])])]),t("tbody",null,[t("tr",z,[e.board.file_info.length!==0?(a(!0),l(L,{key:0},D(e.board.file_info,r=>(a(),l("td",null,[t("div",A,[t("img",{src:`${d(m)}${r.file_path_enc}`,alt:r.file_name},null,8,H)])]))),256)):n("v-if",!0)]),t("tr",null,[t("td",null,[t("div",J,s(e.board.content),1)])])])])):n("v-if",!0),t("div",K,[t("a",{href:d(G).web_photoGallery_url,class:"detail_btn"},"목록 ",8,O)])])])])]))}},Z=k(Q,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/photoGallery/Photo.vue"]]);export{Z as default};
