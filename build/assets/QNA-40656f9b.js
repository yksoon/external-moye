import{_ as x,u as B,r as L,o as V,C as c,a as $,b as s,c as e,g as n,d as t,j as D,f as i,t as a,F as m,m as f,e as r,q as j,y as v,i as b,s as p,h as A}from"./index-5ce479a0.js";import{L as P}from"./LeftMenu-114a35c1.js";const Q="/img/common/common_lock.png",S={id:"wrapper"},q={id:"container",class:"sub_container"},F={id:"content"},M=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),R={key:0,class:"board_Vtable"},U=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),E={colspan:"4"},G={key:0,src:Q,alt:""},I={colspan:"4"},T=t("li",{class:"imbar"},"|",-1),W={colspan:"4"},Y={key:0},z={colspan:"4"},H={class:"download_li"},J=["href"],K=t("img",{src:v,alt:""},null,-1),O={colspan:"4"},X={class:"board_content"},Z={key:0},tt=t("th",null,"작성자",-1),ot=t("th",null,"등록일",-1),st=t("td",null,"2023-11-10",-1),et={key:1},nt=t("th",null,"첨부파일",-1),at={colspan:"2"},lt={class:"download_li"},_t=["href"],ct=t("img",{src:v,alt:""},null,-1),it={key:2},rt=t("th",null,"내용",-1),dt={class:"board_btn_wrap"},ut={class:"boardW_btn"},ht=["href"],mt={__name:"QNA",setup(ft){const g=B(),o=L({board:null});V(()=>{k()});const d=b.api_file,k=()=>{c(!0);const u=g.params.qna,w={method:"get",url:b.api_admin_get_board+`/${u}`,data:{},callback:_=>C(_),admin:"Y"};$(w);const C=_=>{let h=_.headers.result_code;if(h===p.success||h===p.noData){let N=_.data.result_info;o.board=N,c(!1)}else A("log",_),c(!1)}};return(u,y)=>(s(),e("div",S,[n(" 서브컨텐츠     //S"),t("div",q,[D(P,{subvisual:"subvisual_notice",page:"consulting"}),t("div",F,[M,t("div",null,[o.board?(s(),e("table",R,[U,t("thead",null,[t("tr",null,[t("th",E,[i(a(o.board.subject)+"  ",1),o.board.open_yn==="N"?(s(),e("img",G)):n("v-if",!0)]),n(' <th colspan="3">{{ state.board.subject }}</th> ')]),t("tr",null,[t("td",I,[t("ul",null,[t("li",null,a(o.board.user_name_first_ko+o.board.user_name_last_ko),1),T,t("li",null,a(o.board.reg_dttm),1)])])]),t("tr",null,[t("td",W,[t("b",null,a(o.board.category_type),1)])]),o.board.file_info.length!==0?(s(),e("tr",Y,[t("td",z,[t("div",null,[(s(!0),e(m,null,f(o.board.file_info,l=>(s(),e("div",H,[t("a",{href:`${r(d)}${l.file_path_enc}`},[K,i(" "+a(l.file_name),1)],8,J)]))),256))])])])):n("v-if",!0)]),t("tbody",null,[t("tr",null,[t("td",O,[t("div",X,a(o.board.content),1)])]),n(" 관리자 댓글 답변 "),o.board.comment_info?(s(),e("tr",Z,[tt,t("td",null,a(o.board.comment_info.user_name_ko),1),ot,st])):n("v-if",!0),o.board.comment_info&&o.board.comment_info.file_info.length!==0?(s(),e("tr",et,[nt,t("td",at,[t("div",null,[(s(!0),e(m,null,f(o.board.comment_info.file_info,l=>(s(),e("div",lt,[t("a",{href:`${r(d)}${l.file_path_enc}`},[ct,i(" "+a(l.file_name),1)],8,_t)]))),256))])])])):n("v-if",!0),o.board.comment_info?(s(),e("tr",it,[rt,t("td",null,a(o.board.comment_info.content),1)])):n("v-if",!0)])])):n("v-if",!0),t("div",dt,[t("div",ut,[t("a",{href:r(j).web_consulting_url,class:"back_btn"},"목록",8,ht)])])])])])]))}},vt=x(mt,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/QNA.vue"]]);export{vt as default};
