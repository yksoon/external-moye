import{_ as P,l as b,r as S,o as j,C as r,a as z,v as O,b as a,c as l,g as u,d as t,j as f,F as U,m as $,e as q,t as c,q as _,s as v,h as A,i as E,z as F,p as w}from"./index-f689ee2f.js";import{L as Q}from"./LeftMenu-b1ffe6f1.js";const R="/img/common/lock.png",T={id:"wrapper"},Y={id:"container",class:"sub_container"},G={id:"content"},K=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),H=t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"},null,-1),J={class:"board_table"},W=t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"10%"}),t("col",{width:"10%"}),t("col",{width:"10%"})],-1),X=t("thead",null,[t("tr",null,[t("th",null,"공개여부"),t("th",null,"문의분야"),t("th",null,"제목"),t("th",null,"작성자"),t("th",null,"답변여부"),t("th",null,"등록일")])],-1),Z={key:0},tt=["onClick"],et={key:0,src:R,alt:"비밀글입니다."},ot={key:1},st=t("tr",null,[t("td",{colSpan:"6"},[t("b",null," 목록이 없습니다. ")])],-1),nt=[st],at={class:"board_btn_wrap"},lt={class:"boardList_btn"},it=["href"],ct={key:0,className:"pagenation"},dt={__name:"Consulting",setup(rt){const y=b(null),n=S({boardList:[],pageInfo:{}}),p=b(7),h=()=>{const e=window.matchMedia("(max-width: 640px)");p.value=e.matches?4:7};window.addEventListener("resize",h),j(()=>{m(1,w.basic,""),h()});const m=(e,s,d)=>{r(!0);const I={method:"post",url:E.api_admin_boards,data:{page_num:e,page_size:s,search_keyword:d,board_type:"100",show_yn:"Y"},callback:i=>M(i),admin:"Y"};z(I);const M=i=>{let g=i.headers.result_code;if(g===v.success||g===v.noData){let B=i.data.result_info,D=i.data.page_info;n.boardList=B,n.pageInfo=D,r(!1)}else A("log",i),r(!1)}},k=e=>{F({title:"비밀번호 확인",component:"QNAPwdCheckModal",width:"800",boardIdx:e,modData:{},handleNeedUpdate:()=>C()})},C=e=>{location.replace(`${_.web_consulting_url}/${e}`)},L=e=>{const s=y.value;m(e,w.basic,s)},x=(e,s)=>{e==="N"?k(s):location.href=_.web_consulting_url+"/"+s},N=()=>(event.returnValue=!1,alert("준비중입니다."),!1);return(e,s)=>{const d=O("v-pagination");return a(),l("div",T,[u(" 서브컨텐츠     //S"),t("div",Y,[f(Q,{subvisual:"subvisual_notice",page:"consulting"}),t("div",G,[K,t("div",null,[t("div",{class:"form_group"},[t("div",{class:"placeholder_box"},[H,t("button",{type:"button",onClick:N,onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])]),t("table",J,[W,X,n.boardList.length!==0?(a(),l("tbody",Z,[(a(!0),l(U,null,$(n.boardList,o=>(a(),l("tr",{onClick:V=>x(o.open_yn,o.board_idx)},[t("td",null,[o.open_yn==="N"?(a(),l("img",et)):u("v-if",!0)]),t("td",null,c(o.category_type),1),t("td",null,c(o.subject),1),t("td",null,c(o.user_name_first_ko+o.user_name_last_ko),1),t("td",null,c(o.process_status_cd==="000"?"답변완료":"미답변"),1),t("td",null,c(o.reg_dttm.split(" ")[0]),1)],8,tt))),256))])):(a(),l("tbody",ot,nt))]),t("div",at,[t("div",lt,[t("a",{href:q(_).web_consulting_write_url,class:"back_btn"},"글쓰기 ",8,it)])]),n.boardList.length!==0?(a(),l("div",ct,[f(d,{length:n.pageInfo.pages,"total-visible":p.value,rounded:"2",modelValue:n.pageInfo.page_num,"onUpdate:modelValue":[s[0]||(s[0]=o=>n.pageInfo.page_num=o),L]},null,8,["length","total-visible","modelValue"])])):u("v-if",!0)])])])])}}},pt=P(dt,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/Consulting.vue"]]);export{pt as default};
