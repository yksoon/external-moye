import{_ as P,h as V,r as x,o as B,C as r,a as N,p as G,b as o,c as a,e as c,d as e,q as p,F as I,i as S,j as h,l as $,w as z,t as m,g as f,s as g,f as D,n as v}from"./index-37cb9f5e.js";import{L as U}from"./LeftMenu-67194a46.js";const j={id:"wrapper"},F={id:"container",class:"sub_container"},M={id:"content"},R=e("div",{id:"subtitle"},[e("h2",null,"포토 갤러리")],-1),Y={"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"},q={key:0,class:"gallery_wrap"},E={class:"gallery"},K=["href"],A={class:"thumb"},H=e("span",null,null,-1),J=[H],O={key:1,class:"bg-thumb"},Q={class:"title"},T={class:"info"},W={class:"datetime"},X={key:1,className:"pagenation"},Z={__name:"PhotoGallery",setup(ee){const b=V(null),t=x({boardList:[],pageInfo:{}});B(()=>{_(1,v.basic,"")});const y=f.api_file,_=(l,n,d)=>{r(!0);const w={method:"post",url:f.api_admin_boards,data:{page_num:l,page_size:n,search_keyword:d,board_type:"200",show_yn:"Y"},callback:i=>L(i),admin:"Y"};N(w);const L=i=>{let u=i.headers.result_code;if(u===g.success||u===g.noData){let C=i.data.result_info;i.data.page_info,t.boardList=C,r(!1)}else D("log",i),r(!1)}},k=l=>{const n=b.value;_(l,v.basic,n)};return(l,n)=>{const d=G("v-pagination");return o(),a("div",j,[c(" 서브컨텐츠     //S"),e("div",F,[p(U,{subvisual:"subvisual_notice",page:"photo"}),e("div",M,[R,e("div",Y,[t.boardList.length!==0?(o(),a("div",q,[(o(!0),a(I,null,S(t.boardList,s=>(o(),a("div",E,[e("a",{href:`${h($).web_photo_url}/${s.board_idx}`},[e("div",A,[s.file_info.length?(o(),a("div",{key:0,class:"bg-thumb",style:z(`background-image:url('${h(y)}${s.file_info[0].file_path_enc}'); background-size:cover;`)},J,4)):(o(),a("div",O)),e("div",Q,[e("p",null,m(s.subject),1),e("div",T,[e("span",W,m(s.reg_dttm),1)])])])],8,K)]))),256))])):c("v-if",!0),t.boardList.length!==0?(o(),a("div",X,[p(d,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=s=>t.pageInfo.page_num=s),k]},null,8,["length","modelValue"])])):c("v-if",!0)])])])])}}},ae=P(Z,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/photo/PhotoGallery.vue"]]);export{ae as default};
