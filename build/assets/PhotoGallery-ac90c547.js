import{_ as x,j as G,r as P,o as V,C as c,a as B,v as N,b as o,c as a,e as d,d as e,h as p,F as I,k as S,p as h,q as $,x as z,t as m,g,s as f,f as D,n as v}from"./index-4fb67497.js";import{L as U}from"./LeftMenu-fc307158.js";const j={id:"wrapper"},F={id:"container",class:"sub_container"},M={id:"content"},R=e("div",{id:"subtitle"},[e("h2",null,"포토 갤러리")],-1),Y={key:0,class:"gallery_wrap"},q={class:"gallery"},E=["href"],K={class:"thumb"},A=e("span",null,null,-1),H=[A],J={key:1,class:"bg-thumb"},O={class:"title"},Q={class:"info"},T={class:"datetime"},W={key:1,className:"pagenation"},X={__name:"PhotoGallery",setup(Z){const b=G(null),t=P({boardList:[],pageInfo:{}});V(()=>{_(1,v.basic,"")});const y=g.api_file,_=(i,n,r)=>{c(!0);const L={method:"post",url:g.api_admin_boards,data:{page_num:i,page_size:n,search_keyword:r,board_type:"200",show_yn:"Y"},callback:l=>w(l),admin:"Y"};B(L);const w=l=>{let u=l.headers.result_code;if(u===f.success||u===f.noData){let C=l.data.result_info;l.data.page_info,t.boardList=C,c(!1)}else D("log",l),c(!1)}},k=i=>{const n=b.value;_(i,v.basic,n)};return(i,n)=>{const r=N("v-pagination");return o(),a("div",j,[d(" 서브컨텐츠     //S"),e("div",F,[p(U,{subvisual:"subvisual_notice",page:"photo"}),e("div",M,[R,e("div",null,[t.boardList.length!==0?(o(),a("div",Y,[(o(!0),a(I,null,S(t.boardList,s=>(o(),a("div",q,[e("a",{href:`${h($).web_photoGallery_url}/${s.board_idx}`},[e("div",K,[s.file_info.length?(o(),a("div",{key:0,class:"bg-thumb",style:z(`background-image:url('${h(y)}${s.file_info[0].file_path_enc}'); background-size:cover; background-color:#eee;`)},H,4)):(o(),a("div",J)),e("div",O,[e("p",null,m(s.subject),1),e("div",Q,[e("span",T,m(s.reg_dttm),1)])])])],8,E)]))),256))])):d("v-if",!0),t.boardList.length!==0?(o(),a("div",W,[p(r,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=s=>t.pageInfo.page_num=s),k]},null,8,["length","modelValue"])])):d("v-if",!0)])])])])}}},oe=x(X,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/photoGallery/PhotoGallery.vue"]]);export{oe as default};
