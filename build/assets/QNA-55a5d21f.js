import{_ as w,u as C,r as N,o as B,C as c,a as x,b as s,c as n,e as a,d as t,h as L,l as i,t as e,F as V,k as D,q as u,w as A,B as P,g as m,s as b,f as Q}from"./index-d52709c2.js";import{L as S}from"./LeftMenu-bf0cd888.js";const $="/img/common/common_lock.png",j={id:"wrapper"},q={id:"container",class:"sub_container"},F={id:"content"},M=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),R={key:0,class:"board_Vtable"},U=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),E={colspan:"3"},G={key:0,src:$,alt:""},I={colspan:"3"},T=t("li",{class:"imbar"},"|",-1),W={colspan:"3"},Y={key:0},z=["href"],H=t("img",{src:P,alt:""},null,-1),J={colspan:"3"},K={class:"board_content"},O={key:0},X={colspan:"2"},Z={class:"board_btn_wrap"},tt={class:"boardW_btn"},ot=["href"],et={__name:"QNA",setup(st){const h=C(),o=N({board:null});B(()=>{f()});const p=m.api_file,f=()=>{c(!0);const _=h.params.qna,v={method:"get",url:m.api_admin_get_board+`/${_}`,data:{},callback:l=>k(l),admin:"Y"};x(v);const k=l=>{let d=l.headers.result_code;if(d===b.success||d===b.noData){let y=l.data.result_info;o.board=y,c(!1)}else Q("log",l),c(!1)}};return(_,g)=>(s(),n("div",j,[a(" 서브컨텐츠     //S"),t("div",q,[L(S,{subvisual:"subvisual_notice",page:"consulting"}),t("div",F,[M,t("div",null,[o.board?(s(),n("table",R,[U,t("thead",null,[t("tr",null,[t("th",E,[i(e(o.board.subject)+"  ",1),o.board.open_yn==="N"?(s(),n("img",G)):a("v-if",!0)]),a(' <th colspan="3">{{ state.board.subject }}</th> ')]),t("tr",null,[t("td",I,[t("ul",null,[t("li",null,e(o.board.user_name_first_ko+o.board.user_name_last_ko),1),T,t("li",null,e(o.board.reg_dttm),1)])])]),t("tr",null,[t("td",W,[t("b",null,e(o.board.category_type),1)])]),o.board.file_info.length!==0?(s(),n("tr",Y,[t("td",null,[t("div",null,[(s(!0),n(V,null,D(o.board.file_info,r=>(s(),n("div",null,[t("a",{href:`${u(p)}${r.file_path_enc}`},[H,i(" "+e(r.file_name),1)],8,z)]))),256))])])])):a("v-if",!0)]),t("tbody",null,[t("tr",null,[t("td",J,[t("div",K,e(o.board.content),1)])]),a(" 관리자 댓글 답변 "),o.board.comment_info?(s(),n("tr",O,[t("th",null,e(o.board.comment_info.reg_user_name_ko),1),t("td",X,e(o.board.comment_info.content),1)])):a("v-if",!0)])])):a("v-if",!0),t("div",Z,[t("div",tt,[t("a",{href:u(A).web_consulting_url,class:"back_btn"},"목록",8,ot)])])])])])]))}},lt=w(et,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/QNA.vue"]]);export{lt as default};
