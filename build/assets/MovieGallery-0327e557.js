import{_ as L,j as w,r as C,o as x,C as r,a as G,k as V,b as o,c as a,e as c,d as e,h as m,F as M,m as N,v as B,x as I,y as S,t as p,s as h,f as j,g as z,q as v}from"./index-77c8cc9f.js";import{L as D}from"./LeftMenu-b73d06d2.js";const P={id:"wrapper"},$={id:"container",class:"sub_container"},F={id:"content"},R=e("div",{id:"subtitle"},[e("h2",null,"영상 갤러리")],-1),U={"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"},Y={key:0,class:"movie_wrap"},q={class:"movie"},E=["href"],K={class:"thumb"},A=e("span",null,null,-1),H=[A],J={key:1,class:"bg-thumb"},O={class:"title"},Q={class:"info"},T={class:"datetime"},W={key:1,className:"pagenation"},X={__name:"MovieGallery",setup(Z){const g=w(null),t=C({boardList:[],pageInfo:{}});x(()=>{_(1,v.basic,"")});const _=(l,n,d)=>{r(!0);const b={method:"post",url:z.api_admin_boards,data:{page_num:l,page_size:n,search_keyword:d,board_type:"300",show_yn:"Y"},callback:i=>y(i),admin:"Y"};G(b);const y=i=>{let u=i.headers.result_code;if(u===h.success||u===h.noData){let k=i.data.result_info;i.data.page_info,t.boardList=k,r(!1)}else j("log",i),r(!1)}},f=l=>{const n=g.value;_(l,v.basic,n)};return(l,n)=>{const d=V("v-pagination");return o(),a("div",P,[c(" 서브컨텐츠     //S"),e("div",$,[m(D,{subvisual:"subvisual_notice",page:"movie"}),e("div",F,[R,e("div",U,[t.boardList.length!==0?(o(),a("div",Y,[(o(!0),a(M,null,N(t.boardList,s=>(o(),a("div",q,[e("a",{href:`${B(I).web_movieGallery_url}/${s.board_idx}`},[e("div",K,[s.content?(o(),a("div",{key:0,style:S(`background-image:url('https://img.youtube.com/vi/${s.content}/0.jpg'); background-size:cover;`),class:"bg-thumb"},H,4)):(o(),a("div",J)),e("div",O,[e("p",null,p(s.subject),1),e("div",Q,[e("span",T,p(s.reg_dttm),1)])])])],8,E)]))),256))])):c("v-if",!0),t.boardList.length!==0?(o(),a("div",W,[m(d,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=s=>t.pageInfo.page_num=s),f]},null,8,["length","modelValue"])])):c("v-if",!0)])])])])}}},oe=L(X,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/movieGallery/MovieGallery.vue"]]);export{oe as default};
