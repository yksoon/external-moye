import{_ as D,l as b,r as O,o as P,C as r,a as j,v as z,b as a,c as l,g as _,d as t,j as f,F as U,m as $,e as q,k as A,t as c,q as u,s as v,h as E,i as F,z as Q,p as w}from"./index-404fc349.js";import{L as R}from"./LeftMenu-c09adb9a.js";const T="/img/common/lock.png",Y={id:"wrapper"},G={id:"container",class:"sub_container"},K={id:"content"},H=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),J=A('<select id="select_Option" title="select" name="sfl"><option value="all">검색</option><option value="제목">제목</option><option value="내용">내용</option><option value="모두">제목 + 내용</option></select>',1),W=t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"},null,-1),X={class:"board_table"},Z=t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"10%"}),t("col",{width:"10%"}),t("col",{width:"10%"})],-1),tt=t("thead",null,[t("tr",null,[t("th",null,"공개여부"),t("th",null,"문의분야"),t("th",null,"제목"),t("th",null,"작성자"),t("th",null,"답변여부"),t("th",null,"등록일")])],-1),et={key:0},ot=["onClick"],st={key:0,src:T,alt:"비밀글입니다."},nt={key:1},at=t("tr",null,[t("td",{colSpan:"6"},[t("b",null," 목록이 없습니다. ")])],-1),lt=[at],it={class:"board_btn_wrap"},ct={class:"boardList_btn"},dt=["href"],rt={key:0,className:"pagenation"},_t={__name:"Consulting",setup(ut){const y=b(null),n=O({boardList:[],pageInfo:{}}),p=b(7),h=()=>{const e=window.matchMedia("(max-width: 640px)");p.value=e.matches?4:7};window.addEventListener("resize",h),P(()=>{m(1,w.basic,""),h()});const m=(e,s,d)=>{r(!0);const I={method:"post",url:F.api_admin_boards,data:{page_num:e,page_size:s,search_keyword:d,board_type:"100",show_yn:"Y"},callback:i=>M(i),admin:"Y"};j(I);const M=i=>{let g=i.headers.result_code;if(g===v.success||g===v.noData){let B=i.data.result_info,S=i.data.page_info;n.boardList=B,n.pageInfo=S,r(!1)}else E("log",i),r(!1)}},k=e=>{Q({title:"비밀번호 확인",component:"QNAPwdCheckModal",width:"800",boardIdx:e,modData:{},handleNeedUpdate:()=>C()})},C=e=>{location.replace(`${u.web_consulting_url}/${e}`)},L=e=>{const s=y.value;m(e,w.basic,s)},x=(e,s)=>{e==="N"?k(s):location.href=u.web_consulting_url+"/"+s},N=()=>{alert("준비중입니다 :-)")};return(e,s)=>{const d=z("v-pagination");return a(),l("div",Y,[_(" 서브컨텐츠     //S"),t("div",G,[f(R,{subvisual:"subvisual_notice",page:"consulting"}),t("div",K,[H,t("div",null,[t("div",{class:"form_group"},[J,t("div",{class:"placeholder_box"},[W,t("button",{type:"button",onClick:N,onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])]),t("table",X,[Z,tt,n.boardList.length!==0?(a(),l("tbody",et,[(a(!0),l(U,null,$(n.boardList,o=>(a(),l("tr",{onClick:V=>x(o.open_yn,o.board_idx)},[t("td",null,[o.open_yn==="N"?(a(),l("img",st)):_("v-if",!0)]),t("td",null,c(o.category_type),1),t("td",null,c(o.subject),1),t("td",null,c(o.user_name_first_ko+o.user_name_last_ko),1),t("td",null,c(o.comment_info?"답변완료":"미답변"),1),t("td",null,c(o.reg_dttm.split(" ")[0]),1)],8,ot))),256))])):(a(),l("tbody",nt,lt))]),t("div",it,[t("div",ct,[t("a",{href:q(u).web_consulting_write_url,class:"back_btn"},"글쓰기 ",8,dt)])]),n.boardList.length!==0?(a(),l("div",rt,[f(d,{length:n.pageInfo.pages,"total-visible":p.value,rounded:"2",modelValue:n.pageInfo.page_num,"onUpdate:modelValue":[s[0]||(s[0]=o=>n.pageInfo.page_num=o),L]},null,8,["length","total-visible","modelValue"])])):_("v-if",!0)])])])])}}},mt=D(_t,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/Consulting.vue"]]);export{mt as default};
