import{_ as L,j as w,r as C,o as x,C as c,a as G,v as V,b as o,c as a,e as d,d as e,h as m,F as M,k as N,p as B,q as I,x as S,t as p,s as v,f as j,g as z,n as h}from"./index-4fb67497.js";import{L as D}from"./LeftMenu-fc307158.js";const P={id:"wrapper"},$={id:"container",class:"sub_container"},F={id:"content"},R=e("div",{id:"subtitle"},[e("h2",null,"영상 갤러리")],-1),U={key:0,class:"movie_wrap"},Y={class:"movie"},q=["href"],E={class:"thumb"},K=e("span",null,null,-1),A=[K],H={key:1,class:"bg-thumb"},J={class:"title"},O={class:"info"},Q={class:"datetime"},T={key:1,className:"pagenation"},W={__name:"MovieGallery",setup(X){const g=w(null),t=C({boardList:[],pageInfo:{}});x(()=>{_(1,h.basic,"")});const _=(l,n,r)=>{c(!0);const b={method:"post",url:z.api_admin_boards,data:{page_num:l,page_size:n,search_keyword:r,board_type:"300",show_yn:"Y"},callback:i=>y(i),admin:"Y"};G(b);const y=i=>{let u=i.headers.result_code;if(u===v.success||u===v.noData){let k=i.data.result_info;i.data.page_info,t.boardList=k,c(!1)}else j("log",i),c(!1)}},f=l=>{const n=g.value;_(l,h.basic,n)};return(l,n)=>{const r=V("v-pagination");return o(),a("div",P,[d(" 서브컨텐츠     //S"),e("div",$,[m(D,{subvisual:"subvisual_notice",page:"movie"}),e("div",F,[R,e("div",null,[t.boardList.length!==0?(o(),a("div",U,[(o(!0),a(M,null,N(t.boardList,s=>(o(),a("div",Y,[e("a",{href:`${B(I).web_movieGallery_url}/${s.board_idx}`},[e("div",E,[s.content?(o(),a("div",{key:0,style:S(`background-image:url('https://img.youtube.com/vi/${s.content}/0.jpg'); background-size:cover;`),class:"bg-thumb"},A,4)):(o(),a("div",H)),e("div",J,[e("p",null,p(s.subject),1),e("div",O,[e("span",Q,p(s.reg_dttm),1)])])])],8,q)]))),256))])):d("v-if",!0),t.boardList.length!==0?(o(),a("div",T,[m(r,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=s=>t.pageInfo.page_num=s),f]},null,8,["length","modelValue"])])):d("v-if",!0)])])])])}}},te=L(W,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/movieGallery/MovieGallery.vue"]]);export{te as default};
