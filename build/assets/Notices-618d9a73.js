import{_ as v,r as w,a as y,o as x,C as i,b as L,c as a,d as l,e as k,f as t,g as C,F as N,h as $,i as B,t as o,u as c,j as r,s as p,k as S,l as V}from"./index-b9b461dc.js";import{_ as D,a as P}from"./page_Btn_03-8ea5c8a9.js";import{m as j}from"./pagenationInfoStatic-b864fbdd.js";import{L as F}from"./LeftMenu-2665253e.js";const M={id:"wrapper"},R={id:"container",class:"sub_container"},Y={id:"content"},z=t("div",{id:"subtitle"},[t("h2",null,"공지사항")],-1),E=t("div",{class:"form_group"},[t("select",{id:"select_Option",title:"select",name:"sfl"},[t("option",{value:"all"},"검색"),t("option",{value:"제목"},"제목"),t("option",{value:"내용"},"내용"),t("option",{value:"모두"},"제목 + 내용")]),t("div",{class:"placeholder_box"},[t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"}),t("button",{type:"button",onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])],-1),G={class:"board_table"},I=t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"25%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"5%"}),t("col",{width:"10%"})],-1),O=t("thead",null,[t("tr",null,[t("th",null,"번호"),t("th",null,"제목"),t("th",null,"부제목"),t("th",null,"내용"),t("th",null,"조회수"),t("th",null,"등록일")])],-1),U={key:0},q=["href"],A=["href"],H=["href"],J={key:1},K=t("tr",null,[t("td",null," 목록이 없습니다. ")],-1),Q=[K],T=B('<div class="paginate"><ul class="page_btn"><a href="#" class="direction"><img src="'+D+'" alt="이전페이지"></a><strong>1</strong> <a href="#" class="direction"><img src="'+P+'" alt="다음페이지"></a></ul></div>',1),W={__name:"Notices",setup(X){w(null);const n=y({boardList:[],pageInfo:{}});x(()=>{m(1,j.basic,"")});const m=(d,_,e)=>{i(!0);const f={method:"post",url:V.api_admin_boards,data:{page_num:d,page_size:_,search_keyword:e,board_type:"000",show_yn:"Y"},callback:s=>b(s),admin:"Y"};L(f);const b=s=>{let h=s.headers.result_code;if(h===p.success||h===p.noData){let g=s.data.result_info;s.data.page_info,n.boardList=g,i(!1)}else S("log",s),i(!1)}};return(d,_)=>(a(),l("div",M,[k(" 서브컨텐츠     //S"),t("div",R,[C(F,{page:"notice"}),t("div",Y,[z,t("div",null,[E,t("table",G,[I,O,n.boardList.length!==0?(a(),l("tbody",U,[(a(!0),l(N,null,$(n.boardList,(e,u)=>(a(),l("tr",null,[t("td",null,o(u+1),1),t("td",null,[t("a",{href:`${c(r).web_notice_url}/${e.board_idx}`},o(e.subject),9,q)]),t("td",null,[t("a",{href:`${c(r).web_notice_url}/${e.board_idx}`},o(e.sub_title),9,A)]),t("td",null,[t("a",{href:`${c(r).web_notice_url}/${e.board_idx}`},o(e.content),9,H)]),t("td",null,o(e.view_count),1),t("td",null,o(e.reg_dttm.split(" ")[0]),1)]))),256))])):(a(),l("tbody",J,Q))]),T])])])]))}},at=v(W,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/notice/Notices.vue"]]);export{at as default};
