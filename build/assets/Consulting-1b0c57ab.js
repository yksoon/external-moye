import{_ as B,j as M,r as S,o as D,C as r,a as O,v as P,b as a,c as l,e as _,d as t,h as m,F as U,k as $,p as j,i as q,t as c,q as u,s as g,f as A,g as F,y as R,n as f}from"./index-4a9badc4.js";import{L as Y}from"./LeftMenu-d7d9e680.js";const z="/img/common/lock.png",E={id:"wrapper"},G={id:"container",class:"sub_container"},K={id:"content"},Q=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),H=q('<select id="select_Option" title="select" name="sfl"><option value="all">검색</option><option value="제목">제목</option><option value="내용">내용</option><option value="모두">제목 + 내용</option></select>',1),J=t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"},null,-1),T={class:"board_table"},W=t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"10%"}),t("col",{width:"10%"}),t("col",{width:"10%"})],-1),X=t("thead",null,[t("tr",null,[t("th",null,"공개여부"),t("th",null,"문의분야"),t("th",null,"제목"),t("th",null,"작성자"),t("th",null,"답변여부"),t("th",null,"등록일")])],-1),Z={key:0},tt=["onClick"],ot={key:0,src:z,alt:"비밀글입니다."},et={key:1},nt=t("tr",null,[t("td",{colSpan:"6"},[t("b",null," 데이터가 없습니다. ")])],-1),st=[nt],at={class:"board_btn_wrap"},lt={class:"boardList_btn"},it=["href"],ct={key:0,className:"pagenation"},dt={__name:"Consulting",setup(rt){const b=M(null),s=S({boardList:[],pageInfo:{}});D(()=>{p(1,f.basic,"")});const p=(e,n,d)=>{r(!0);const N={method:"post",url:F.api_admin_boards,data:{page_num:e,page_size:n,search_keyword:d,board_type:"100",show_yn:"Y"},callback:i=>x(i),admin:"Y"};O(N);const x=i=>{let h=i.headers.result_code;if(h===g.success||h===g.noData){let V=i.data.result_info,I=i.data.page_info;s.boardList=V,s.pageInfo=I,r(!1)}else A("log",i),r(!1)}},v=e=>{R({title:"비밀번호 확인",component:"QNAPwdCheckModal",width:"800",boardIdx:e,modData:{},handleNeedUpdate:()=>w()})},w=e=>{location.replace(`${u.web_consulting_url}/${e}`)},y=e=>{const n=b.value;p(e,f.basic,n)},k=(e,n)=>{e==="N"?v(n):location.href=u.web_consulting_url+"/"+n},C=()=>{alert("준비중입니다 :-)")};return(e,n)=>{const d=P("v-pagination");return a(),l("div",E,[_(" 서브컨텐츠     //S"),t("div",G,[m(Y,{subvisual:"subvisual_notice",page:"consulting"}),t("div",K,[Q,t("div",null,[t("div",{class:"form_group"},[H,t("div",{class:"placeholder_box"},[J,t("button",{type:"button",onClick:C,onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])]),t("table",T,[W,X,s.boardList.length!==0?(a(),l("tbody",Z,[(a(!0),l(U,null,$(s.boardList,o=>(a(),l("tr",{onClick:L=>k(o.open_yn,o.board_idx)},[t("td",null,[o.open_yn==="N"?(a(),l("img",ot)):_("v-if",!0)]),t("td",null,c(o.category_type),1),t("td",null,c(o.subject),1),t("td",null,c(o.user_name_first_ko+o.user_name_last_ko),1),t("td",null,c(o.comment_info?"답변완료":"미답변"),1),t("td",null,c(o.reg_dttm.split(" ")[0]),1)],8,tt))),256))])):(a(),l("tbody",et,st))]),t("div",at,[t("div",lt,[t("a",{href:j(u).web_consulting_write_url,class:"back_btn"},"글쓰기 ",8,it)])]),s.boardList.length!==0?(a(),l("div",ct,[m(d,{length:s.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:s.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=o=>s.pageInfo.page_num=o),y]},null,8,["length","modelValue"])])):_("v-if",!0)])])])])}}},pt=B(dt,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/Consulting.vue"]]);export{pt as default};
