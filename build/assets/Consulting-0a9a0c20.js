import{_ as B,j as M,r as D,o as O,C as u,a as P,p as S,b as l,c as i,e as d,d as t,h,F as U,k as $,q as j,i as q,t as c,v as _,s as g,f as A,g as F,y as R,n as f}from"./index-94d4bb4c.js";import{L as Y}from"./LeftMenu-5af45518.js";const z="/img/common/lock.png",E={id:"wrapper"},G={id:"container",class:"sub_container"},K={id:"content"},Q=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),H=q('<select id="select_Option" title="select" name="sfl"><option value="all">검색</option><option value="제목">제목</option><option value="내용">내용</option><option value="모두">제목 + 내용</option></select>',1),J=t("input",{type:"text",id:"placeholder",name:"stx",value:"",autofocus:"autofocus",placeholder:"검색"},null,-1),T={class:"board_table"},W=t("colgroup",null,[t("col",{width:"5%"}),t("col",{width:"10%"}),t("col",{width:"*"}),t("col",{width:"10%"}),t("col",{width:"10%"}),t("col",{width:"10%"})],-1),X=t("thead",null,[t("tr",null,[t("th",null,"공개여부"),t("th",null,"문의분야"),t("th",null,"제목"),t("th",null,"작성자"),t("th",null,"답변여부"),t("th",null,"등록일")])],-1),Z={key:0},tt=["onClick"],et={key:0,src:z,alt:"비밀글입니다."},ot={class:"board_btn_wrap"},nt={class:"boardList_btn"},st=["href"],at={key:0,className:"pagenation"},lt={__name:"Consulting",setup(it){const b=M(null),s=D({boardList:[],pageInfo:{}});O(()=>{p(1,f.basic,"")});const p=(o,n,r)=>{u(!0);const N={method:"post",url:F.api_admin_boards,data:{page_num:o,page_size:n,search_keyword:r,board_type:"100",show_yn:"Y"},callback:a=>x(a),admin:"Y"};P(N);const x=a=>{let m=a.headers.result_code;if(m===g.success||m===g.noData){let V=a.data.result_info,I=a.data.page_info;s.boardList=V,s.pageInfo=I,u(!1)}else A("log",a),u(!1)}},v=o=>{R({title:"비밀번호 확인",component:"QNAPwdCheckModal",width:"800",boardIdx:o,modData:{},handleNeedUpdate:()=>w()})},w=o=>{location.replace(`${_.web_consulting_url}/${o}`)},k=o=>{const n=b.value;p(o,f.basic,n)},y=(o,n)=>{o==="N"?v(n):location.href=_.web_consulting_url+"/"+n},C=()=>{alert("준비중입니다 :-)")};return(o,n)=>{const r=S("v-pagination");return l(),i("div",E,[d(" 서브컨텐츠     //S"),t("div",G,[h(Y,{subvisual:"subvisual_notice",page:"consulting"}),t("div",K,[Q,t("div",null,[t("div",{class:"form_group"},[H,t("div",{class:"placeholder_box"},[J,t("button",{type:"button",onClick:C,onclick:"document.fsearch.submit()",class:"btn_primary"},"검색")])]),t("table",T,[W,X,s.boardList.length!==0?(l(),i("tbody",Z,[(l(!0),i(U,null,$(s.boardList,e=>(l(),i("tr",{onClick:L=>y(e.open_yn,e.board_idx)},[t("td",null,[e.open_yn==="N"?(l(),i("img",et)):d("v-if",!0)]),t("td",null,c(e.category_type),1),t("td",null,c(e.subject),1),t("td",null,c(e.user_name_first_ko+e.user_name_last_ko),1),t("td",null,c(e.comment_info?"답변완료":"미답변"),1),t("td",null,c(e.reg_dttm.split(" ")[0]),1)],8,tt))),256))])):d("v-if",!0)]),t("div",ot,[t("div",nt,[t("a",{href:j(_).web_consulting_write_url,class:"back_btn"},"글쓰기 ",8,st)])]),s.boardList.length!==0?(l(),i("div",at,[h(r,{length:s.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:s.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=e=>s.pageInfo.page_num=e),k]},null,8,["length","modelValue"])])):d("v-if",!0)])])])])}}},rt=B(lt,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/Consulting.vue"]]);export{rt as default};
