import{_ as P,l as m,r as B,o as N,C as d,a as z,v as I,b as o,c as a,g as c,d as e,j as g,F as S,m as $,e as f,q as j,x as D,t as v,i as b,s as y,h as M,p as w}from"./index-b54a5cd3.js";import{L as U}from"./LeftMenu-5fd5b4a1.js";const E={id:"wrapper"},F={id:"container",class:"sub_container"},R={id:"content"},T=e("div",{id:"subtitle"},[e("h2",null,"포토 갤러리")],-1),Y={key:0,class:"gallery_wrap"},q={class:"gallery"},K=["href"],Q={class:"thumb"},A=e("span",null,null,-1),H=[A],J={key:1,class:"bg-thumb"},O={class:"title"},W={class:"info"},X={class:"datetime"},Z={key:1,className:"pagenation"},ee={__name:"PhotoGallery",setup(se){const k=m(null),t=B({boardList:[],pageInfo:{}}),_=m(7),u=()=>{const n=window.matchMedia("(max-width: 640px)");_.value=n.matches?4:7};window.addEventListener("resize",u),N(()=>{p(1,w.basic,""),u()});const L=b.api_file,p=(n,i,r)=>{d(!0);const x={method:"post",url:b.api_admin_boards,data:{page_num:n,page_size:i,search_keyword:r,board_type:"200",show_yn:"Y"},callback:l=>V(l),admin:"Y"};z(x);const V=l=>{let h=l.headers.result_code;if(h===y.success||h===y.noData){let G=l.data.result_info;l.data.page_info,t.boardList=G,d(!1)}else M("log",l),d(!1)}},C=n=>{const i=k.value;p(n,w.basic,i)};return(n,i)=>{const r=I("v-pagination");return o(),a("div",E,[c(" 서브컨텐츠     //S"),e("div",F,[g(U,{subvisual:"subvisual_notice",page:"photo"}),e("div",R,[T,e("div",null,[t.boardList.length!==0?(o(),a("div",Y,[(o(!0),a(S,null,$(t.boardList,s=>(o(),a("div",q,[e("a",{href:`${f(j).web_photoGallery_url}/${s.board_idx}`},[e("div",Q,[s.file_info.length?(o(),a("div",{key:0,class:"bg-thumb",style:D(`background-image:url('${f(L)}${s.file_info[0].file_path_enc}'); background-size:cover; background-color:#eee;`)},H,4)):(o(),a("div",J)),e("div",O,[e("p",null,v(s.subject),1),e("div",W,[e("span",X,v(s.reg_dttm),1)])])])],8,K)]))),256))])):c("v-if",!0),t.boardList.length!==0?(o(),a("div",Z,[g(r,{length:t.pageInfo.pages,"total-visible":_.value,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[i[0]||(i[0]=s=>t.pageInfo.page_num=s),C]},null,8,["length","total-visible","modelValue"])])):c("v-if",!0)])])])])}}},ne=P(ee,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/photoGallery/PhotoGallery.vue"]]);export{ne as default};
