import{_ as B,l as f,r as $,o as j,C as d,a as I,v as S,b as l,c as i,g as u,d as t,j as v,F as D,m as M,e as _,q as p,t as c,s as w,h as P,i as z,p as y}from"./index-0f8e3a92.js";import{L as E}from"./LeftMenu-791a8aad.js";const F={id:"wrapper"},R={id:"container",class:"sub_container"},T={id:"content"},U=t("div",{id:"subtitle"},[t("h2",null,"공지사항")],-1),Y=t("div",{class:"form_group"},[t("select",{id:"select_Option",title:"select",name:"sfl"},[t("option",{value:"all"},"검색"),t("option",{value:"제목"},"제목"),t("option",{value:"내용"},"내용"),t("option",{value:"모두"},"제목 + 내용")]),t("div",{class:"placeholder_box"},[t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"}),t("button",{type:"button",onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])],-1),q={class:"board_table"},G=t("colgroup",null,[t("col",{width:"25%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"5%"}),t("col",{width:"10%"})],-1),K=t("thead",null,[t("tr",null,[t("th",null,"제목"),t("th",null,"부제목"),t("th",null,"내용"),t("th",null,"조회수"),t("th",null,"등록일")])],-1),O={key:0},Q=["href"],A=["href"],H=["href"],J={key:1},W=t("tr",null,[t("td",{colSpan:"5"},[t("b",null," 목록이 없습니다. ")])],-1),X=[W],Z={key:0,className:"pagenation"},tt={__name:"Notices",setup(et){const x=f(null),o=$({boardList:[],pageInfo:{}}),h=f(7),m=()=>{const s=window.matchMedia("(max-width: 640px)");h.value=s.matches?4:7};window.addEventListener("resize",m),j(()=>{g(1,y.basic,""),m()});const g=(s,n,r)=>{d(!0);const C={method:"post",url:z.api_admin_boards,data:{page_num:s,page_size:n,search_keyword:r,board_type:"000",show_yn:"Y"},callback:a=>N(a),admin:"Y"};I(C);const N=a=>{let b=a.headers.result_code;if(b===w.success||b===w.noData){let V=a.data.result_info;a.data.page_info,o.boardList=V,d(!1)}else P("log",a),d(!1)}},L=s=>{const n=x.value;g(s,y.basic,n)};return(s,n)=>{const r=S("v-pagination");return l(),i("div",F,[u(" 서브컨텐츠     //S"),t("div",R,[v(E,{subvisual:"subvisual_notice",page:"notice"}),t("div",T,[U,t("div",null,[Y,t("table",q,[G,K,o.boardList.length!==0?(l(),i("tbody",O,[(l(!0),i(D,null,M(o.boardList,(e,k)=>(l(),i("tr",null,[t("td",null,[t("a",{href:`${_(p).web_notices_url}/${e.board_idx}`},c(e.subject),9,Q)]),t("td",null,[t("a",{href:`${_(p).web_notices_url}/${e.board_idx}`},c(e.sub_title),9,A)]),t("td",null,[t("a",{href:`${_(p).web_notices_url}/${e.board_idx}`},c(e.content),9,H)]),t("td",null,c(e.view_count),1),t("td",null,c(e.reg_dttm.split(" ")[0]),1)]))),256))])):(l(),i("tbody",J,X))]),u(` <div class="paginate">\r
                        <ul class="page_btn">\r
                            <a href="#" class="direction"><img src="/img/common/page_Btn_02.jpg" alt="이전페이지"></a>\r
                            <strong>1</strong> <a href="#" class="direction"><img src="/img/common/page_Btn_03.jpg"\r
                                    alt="다음페이지"></a>\r
                        </ul>\r
                    </div> `),o.boardList.length!==0?(l(),i("div",Z,[v(r,{length:o.pageInfo.pages,"total-visible":h.value,rounded:"2",modelValue:o.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=e=>o.pageInfo.page_num=e),L]},null,8,["length","total-visible","modelValue"])])):u("v-if",!0)])])])])}}},nt=B(tt,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/notices/Notices.vue"]]);export{nt as default};
