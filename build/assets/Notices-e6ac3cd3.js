import{_ as C,j as N,r as B,o as V,C as d,a as $,v as j,b as a,c as l,e as u,d as t,h as f,F as I,k as D,t as i,p as _,q as p,s as b,f as P,g as S,n as v}from"./index-c8387cb8.js";import{L as F}from"./LeftMenu-4ebf1af5.js";const M={id:"wrapper"},R={id:"container",class:"sub_container"},U={id:"content"},Y=t("div",{id:"subtitle"},[t("h2",null,"공지사항")],-1),q=t("div",{class:"form_group"},[t("select",{id:"select_Option",title:"select",name:"sfl"},[t("option",{value:"all"},"검색"),t("option",{value:"제목"},"제목"),t("option",{value:"내용"},"내용"),t("option",{value:"모두"},"제목 + 내용")]),t("div",{class:"placeholder_box"},[t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"}),t("button",{type:"button",onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])],-1),z={class:"board_table"},E=t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"25%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"5%"}),t("col",{width:"10%"})],-1),G=t("thead",null,[t("tr",null,[t("th",null,"번호"),t("th",null,"제목"),t("th",null,"부제목"),t("th",null,"내용"),t("th",null,"조회수"),t("th",null,"등록일")])],-1),K={key:0},O=["href"],A=["href"],H=["href"],J={key:1},Q=t("tr",null,[t("td",null," 목록이 없습니다. ")],-1),T=[Q],W={key:0,className:"pagenation"},X={__name:"Notices",setup(Z){const w=N(null),o=B({boardList:[],pageInfo:{}});V(()=>{h(1,v.basic,"")});const h=(c,s,r)=>{d(!0);const k={method:"post",url:S.api_admin_boards,data:{page_num:c,page_size:s,search_keyword:r,board_type:"000",show_yn:"Y"},callback:n=>L(n),admin:"Y"};$(k);const L=n=>{let g=n.headers.result_code;if(g===b.success||g===b.noData){let x=n.data.result_info;n.data.page_info,o.boardList=x,d(!1)}else P("log",n),d(!1)}},y=c=>{const s=w.value;h(c,v.basic,s)};return(c,s)=>{const r=j("v-pagination");return a(),l("div",M,[u(" 서브컨텐츠     //S"),t("div",R,[f(F,{subvisual:"subvisual_notice",page:"notice"}),t("div",U,[Y,t("div",null,[q,t("table",z,[E,G,o.boardList.length!==0?(a(),l("tbody",K,[(a(!0),l(I,null,D(o.boardList,(e,m)=>(a(),l("tr",null,[t("td",null,i(m+1),1),t("td",null,[t("a",{href:`${_(p).web_notices_url}/${e.board_idx}`},i(e.subject),9,O)]),t("td",null,[t("a",{href:`${_(p).web_notices_url}/${e.board_idx}`},i(e.sub_title),9,A)]),t("td",null,[t("a",{href:`${_(p).web_notices_url}/${e.board_idx}`},i(e.content),9,H)]),t("td",null,i(e.view_count),1),t("td",null,i(e.reg_dttm.split(" ")[0]),1)]))),256))])):(a(),l("tbody",J,T))]),u(` <div class="paginate">\r
                        <ul class="page_btn">\r
                            <a href="#" class="direction"><img src="/img/common/page_Btn_02.jpg" alt="이전페이지"></a>\r
                            <strong>1</strong> <a href="#" class="direction"><img src="/img/common/page_Btn_03.jpg"\r
                                    alt="다음페이지"></a>\r
                        </ul>\r
                    </div> `),o.boardList.length!==0?(a(),l("div",W,[f(r,{length:o.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:o.pageInfo.page_num,"onUpdate:modelValue":[s[0]||(s[0]=e=>o.pageInfo.page_num=e),y]},null,8,["length","modelValue"])])):u("v-if",!0)])])])])}}},ot=C(X,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/notices/Notices.vue"]]);export{ot as default};
