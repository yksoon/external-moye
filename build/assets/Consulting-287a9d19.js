import{_ as y,r as w,a as C,o as L,C as c,b as x,c as s,d as o,e as a,f as t,g as N,F as $,h as B,u as _,i as m,t as n,j as r,s as h,k as S,l as V}from"./index-7e013ad1.js";import{_ as j,a as D}from"./page_Btn_03-8ea5c8a9.js";import{m as P}from"./pagenationInfoStatic-b864fbdd.js";import{L as F}from"./LeftMenu-8f514868.js";const M="/img/common/lock.png",R={id:"wrapper"},Y={id:"container",class:"sub_container"},z={id:"content"},A=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),E=m('<select id="select_Option" title="select" name="sfl"><option value="all">검색</option><option value="제목">제목</option><option value="내용">내용</option><option value="모두">제목 + 내용</option></select>',1),G=t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"},null,-1),I={class:"board_table"},O=t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"10%"}),t("col",{width:"25%"}),t("col",{width:"*"}),t("col",{width:"10%"}),t("col",{width:"10%"}),t("col",{width:"10%"})],-1),U=t("thead",null,[t("tr",null,[t("th",null,"공개여부"),t("th",null,"문의분야"),t("th",null,"제목"),t("th",null,"내용"),t("th",null,"작성자"),t("th",null,"답변여부"),t("th",null,"등록일")])],-1),q={key:0},H={key:0,src:M,alt:"비밀글입니다."},J={key:0},K=["href"],Q={key:1},T=["href"],W={class:"board_btn_wrap"},X={class:"boardList_btn"},Z=["href"],tt=m('<div class="paginate"><ul class="page_btn"><a href="#" class="direction"><img src="'+j+'" alt="이전페이지"></a><strong>1</strong> <a href="#" class="direction"><img src="'+D+'" alt="다음페이지"></a></ul></div>',1),et={__name:"Consulting",setup(st){w(null);const i=C({boardList:[],pageInfo:{}});L(()=>{f(1,P.basic,"")});const f=(u,d,e)=>{c(!0);const b={method:"post",url:V.api_admin_boards,data:{page_num:u,page_size:d,search_keyword:e,board_type:"100"},callback:l=>v(l),admin:"Y"};x(b);const v=l=>{let p=l.headers.result_code;if(p===h.success||p===h.noData){let k=l.data.result_info;l.data.page_info,i.boardList=k,c(!1)}else S("log",l),c(!1)}},g=()=>{alert("준비중입니다 :-)")};return(u,d)=>(s(),o("div",R,[a(" 서브컨텐츠     //S"),t("div",Y,[N(F,{page:"consulting"}),t("div",z,[A,t("div",null,[t("div",{class:"form_group"},[E,t("div",{class:"placeholder_box"},[G,t("button",{type:"button",onClick:g,onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])]),t("table",I,[O,U,i.boardList.length!==0?(s(),o("tbody",q,[(s(!0),o($,null,B(i.boardList,e=>(s(),o("tr",null,[t("td",null,[e.open_yn==="N"?(s(),o("img",H)):a("v-if",!0)]),t("td",null,n(e.category_type),1),e.open_yn==="Y"?(s(),o("td",J,[t("a",{href:`${_(r).web_consulting_url}/${e.board_idx}`},n(e.subject),9,K)])):a("v-if",!0),e.open_yn==="N"?(s(),o("td",Q,[t("a",null,n(e.subject),1)])):a("v-if",!0),t("td",null,[t("a",{href:`${_(r).web_consulting_url}/${e.board_idx}`},n(e.content),9,T)]),t("td",null,n(e.user_name_ko?e.user_name_ko:e.reg_user_name_ko),1),t("td",null,n(e.comment_info?"답변완료":"미답변"),1),t("td",null,n(e.reg_dttm.split(" ")[0]),1)]))),256))])):a("v-if",!0)]),t("div",W,[t("div",X,[t("a",{href:_(r).web_consulting_write_url,class:"back_btn"},"글쓰기 ",8,Z),a(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])]),tt])])])]))}},_t=y(et,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/consulting/Consulting.vue"]]);export{_t as default};
