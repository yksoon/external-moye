import{_ as w,n as C,r as N,a as x,o as B,C as c,b as L,c as s,d as a,e as n,f as t,g as V,p as i,t as e,F as D,h as j,u,j as A,z as P,l as h,s as m,k as Q}from"./index-3b5ed396.js";import{L as S}from"./LeftMenu-4be890b6.js";const $="/img/common/common_lock.png",F={id:"wrapper"},M={id:"container",class:"sub_container"},R={id:"content"},U=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),q={"data-aos-duration":"1000","data-aos-delay":"400"},z={key:0,class:"board_Vtable"},E=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),G={colspan:"3"},I={key:0,src:$,alt:""},T={colspan:"3"},W=t("li",{class:"imbar"},"|",-1),Y={colspan:"3"},H={key:0},J=["href"],K=t("img",{src:P,alt:""},null,-1),O={colspan:"3"},X={class:"board_content"},Z={key:0},tt={colspan:"2"},ot={class:"board_btn_wrap"},et={class:"boardW_btn"},st=["href"],at={__name:"QNA",setup(nt){const b=C();N(null);const o=x({board:null});B(()=>{p()});const f=h.api_file,p=()=>{c(!0);const _=b.params.qna,v={method:"get",url:h.api_admin_get_board+`/${_}`,data:{},callback:r=>k(r),admin:"Y"};L(v);const k=r=>{let d=r.headers.result_code;if(d===m.success||d===m.noData){let y=r.data.result_info;o.board=y,c(!1)}else Q("log",r),c(!1)}};return(_,g)=>(s(),a("div",F,[n(" 서브컨텐츠     //S"),t("div",M,[V(S,{page:"consulting"}),t("div",R,[U,t("div",q,[o.board?(s(),a("table",z,[E,t("thead",null,[t("tr",null,[t("th",G,[i(e(o.board.subject)+"  ",1),o.board.open_yn==="N"?(s(),a("img",I)):n("v-if",!0)]),n(' <th colspan="3">{{ state.board.subject }}</th> ')]),t("tr",null,[t("td",T,[t("ul",null,[t("li",null,e(o.board.user_name_first_ko+o.board.user_name_last_ko),1),W,t("li",null,e(o.board.reg_dttm),1)])])]),t("tr",null,[t("td",Y,[t("b",null,e(o.board.category_type),1)])]),o.board.file_info.length!==0?(s(),a("tr",H,[t("td",null,[t("div",null,[(s(!0),a(D,null,j(o.board.file_info,l=>(s(),a("div",null,[t("a",{href:`${u(f)}${l.file_path_enc}`},[K,i(" "+e(l.file_name),1)],8,J)]))),256))])])])):n("v-if",!0)]),t("tbody",null,[t("tr",null,[t("td",O,[t("div",X,e(o.board.content),1)])]),n(" 관리자 댓글 답변 "),o.board.comment_info?(s(),a("tr",Z,[t("th",null,e(o.board.comment_info.reg_user_name_ko),1),t("td",tt,e(o.board.comment_info.content),1)])):n("v-if",!0)])])):n("v-if",!0),t("div",ot,[t("div",et,[t("a",{href:u(A).web_consulting_url,class:"back_btn"},"목록",8,st)])])])])])]))}},ct=w(at,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/consulting/QNA.vue"]]);export{ct as default};
