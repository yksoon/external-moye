import{_ as V,l as b,r as B,o as j,C as r,a as I,v as S,b as l,c as i,g as u,d as t,j as v,F as D,m as M,t as c,s as f,h as P,q as z,i as E,p as w}from"./index-194d284b.js";import{L as F}from"./LeftMenu-2d0a42d5.js";const R={id:"wrapper"},T={id:"container",class:"sub_container"},U={id:"content"},Y=t("div",{id:"subtitle"},[t("h2",null,"공지사항")],-1),q=t("div",{class:"form_group"},[t("div",{class:"placeholder_box"},[t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"}),t("button",{type:"button",onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])],-1),G={class:"board_table"},K=t("colgroup",null,[t("col",{width:"25%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"5%"}),t("col",{width:"10%"})],-1),O=t("thead",null,[t("tr",null,[t("th",null,"제목"),t("th",null,"부제목"),t("th",null,"내용"),t("th",null,"조회수"),t("th",null,"등록일")])],-1),Q={key:0},$=["onClick"],A={key:1},H=t("tr",null,[t("td",{colSpan:"5"},[t("b",null," 목록이 없습니다. ")])],-1),J=[H],W={key:0,className:"pagenation"},X={__name:"Notices",setup(Z){const y=b(null),s=B({boardList:[],pageInfo:{}}),_=b(7),p=()=>{const o=window.matchMedia("(max-width: 640px)");_.value=o.matches?4:7};window.addEventListener("resize",p),j(()=>{m(1,w.basic,""),p()});const m=(o,n,d)=>{r(!0);const h={method:"post",url:E.api_admin_boards,data:{page_num:o,page_size:n,search_keyword:d,board_type:"900",show_yn:"Y"},callback:a=>x(a),admin:"Y"};I(h);const x=a=>{let g=a.headers.result_code;if(g===f.success||g===f.noData){let N=a.data.result_info;a.data.page_info,s.boardList=N,r(!1)}else P("log",a),r(!1)}},k=o=>{const n=y.value;m(o,w.basic,n)},C=o=>{location.href=z.web_notices_url+"/"+o};return(o,n)=>{const d=S("v-pagination");return l(),i("div",R,[u(" 서브컨텐츠     //S"),t("div",T,[v(F,{subvisual:"subvisual_notice",page:"notice"}),t("div",U,[Y,t("div",null,[q,t("table",G,[K,O,s.boardList.length!==0?(l(),i("tbody",Q,[(l(!0),i(D,null,M(s.boardList,(e,L)=>(l(),i("tr",{onClick:h=>C(e.board_idx)},[t("td",null,c(e.subject),1),t("td",null,c(e.sub_title),1),t("td",null,c(e.content),1),t("td",null,c(e.view_count),1),t("td",null,c(e.reg_dttm.split(" ")[0]),1)],8,$))),256))])):(l(),i("tbody",A,J))]),u(` <div class="paginate">\r
                        <ul class="page_btn">\r
                            <a href="#" class="direction"><img src="/img/common/page_Btn_02.jpg" alt="이전페이지"></a>\r
                            <strong>1</strong> <a href="#" class="direction"><img src="/img/common/page_Btn_03.jpg"\r
                                    alt="다음페이지"></a>\r
                        </ul>\r
                    </div> `),s.boardList.length!==0?(l(),i("div",W,[v(d,{length:s.pageInfo.pages,"total-visible":_.value,rounded:"2",modelValue:s.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=e=>s.pageInfo.page_num=e),k]},null,8,["length","total-visible","modelValue"])])):u("v-if",!0)])])])])}}},ot=V(X,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/notices/Notices.vue"]]);export{ot as default};
