import{_ as x,u as B,r as L,o as V,C as c,a as $,b as e,c as s,g as a,d as t,j as D,f as i,t as n,F as m,m as f,e as r,q as j,y as v,i as b,s as p,h as A}from"./index-202fc3b2.js";import{L as P}from"./LeftMenu-31a9ef97.js";const Q="/img/common/common_lock.png",S={id:"wrapper"},q={id:"container",class:"sub_container"},F={id:"content"},M=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),R={key:0,class:"board_Vtable"},U=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),E={colspan:"4"},G={key:0,src:Q,alt:""},I={colspan:"4"},T=t("li",{class:"imbar"},"|",-1),W={colspan:"4"},Y={key:0},z={colspan:"4"},H={class:"download_li"},J=["href"],K=t("img",{src:v,alt:""},null,-1),O={colspan:"4"},X={class:"board_content"},Z={key:0},tt=t("th",null,"작성자",-1),ot=t("th",null,"등록일",-1),et={key:1},st=t("th",null,"첨부파일",-1),nt={colspan:"2"},at={class:"download_li"},lt=["href"],_t=t("img",{src:v,alt:""},null,-1),ct={key:2},it=t("th",null,"내용",-1),rt={class:"board_btn_wrap"},dt={class:"boardW_btn"},ut=["href"],ht={__name:"QNA",setup(mt){const g=B(),o=L({board:null});V(()=>{k()});const d=b.api_file,k=()=>{c(!0);const u=g.params.qna,w={method:"get",url:b.api_admin_get_board+`/${u}`,data:{},callback:_=>C(_),admin:"Y"};$(w);const C=_=>{let h=_.headers.result_code;if(h===p.success||h===p.noData){let N=_.data.result_info;o.board=N,c(!1)}else A("log",_),c(!1)}};return(u,y)=>(e(),s("div",S,[a(" 서브컨텐츠     //S"),t("div",q,[D(P,{subvisual:"subvisual_notice",page:"consulting"}),t("div",F,[M,t("div",null,[o.board?(e(),s("table",R,[U,t("thead",null,[t("tr",null,[t("th",E,[i(n(o.board.subject)+"  ",1),o.board.open_yn==="N"?(e(),s("img",G)):a("v-if",!0)]),a(' <th colspan="3">{{ state.board.subject }}</th> ')]),t("tr",null,[t("td",I,[t("ul",null,[t("li",null,n(o.board.user_name_first_ko+o.board.user_name_last_ko),1),T,t("li",null,n(o.board.reg_dttm),1)])])]),t("tr",null,[t("td",W,[t("b",null,n(o.board.category_type),1)])]),o.board.file_info.length!==0?(e(),s("tr",Y,[t("td",z,[t("div",null,[(e(!0),s(m,null,f(o.board.file_info,l=>(e(),s("div",H,[t("a",{href:`${r(d)}${l.file_path_enc}`},[K,i(" "+n(l.file_name),1)],8,J)]))),256))])])])):a("v-if",!0)]),t("tbody",null,[t("tr",null,[t("td",O,[t("div",X,n(o.board.content),1)])]),a(" 관리자 댓글 답변 "),o.board.comment_info?(e(),s("tr",Z,[tt,t("td",null,n(o.board.comment_info.user_name_ko),1),ot,t("td",null,n(o.board.comment_info.reg_dttm),1)])):a("v-if",!0),o.board.comment_info&&o.board.comment_info.file_info?(e(),s("tr",et,[st,t("td",nt,[t("div",null,[(e(!0),s(m,null,f(o.board.comment_info.file_info,l=>(e(),s("div",at,[t("a",{href:`${r(d)}${l.file_path_enc}`},[_t,i(" "+n(l.file_name),1)],8,lt)]))),256))])])])):a("v-if",!0),o.board.comment_info?(e(),s("tr",ct,[it,t("td",null,n(o.board.comment_info.content),1)])):a("v-if",!0)])])):a("v-if",!0),t("div",rt,[t("div",dt,[t("a",{href:r(j).web_consulting_url,class:"back_btn"},"목록",8,ut)])])])])])]))}},pt=x(ht,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/QNA.vue"]]);export{pt as default};
