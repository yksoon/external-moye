import{_ as x,l as v,r as V,o as G,C as d,a as M,v as N,b as o,c as a,g as c,d as e,j as h,F as j,m as z,e as B,q as I,x as S,t as g,s as f,h as D,i as P,p as b}from"./index-d22e7374.js";import{L as $}from"./LeftMenu-e88e22a6.js";const E={id:"wrapper"},F={id:"container",class:"sub_container"},R={id:"content"},T=e("div",{id:"subtitle"},[e("h2",null,"영상 갤러리")],-1),U={key:0,class:"movie_wrap"},Y={class:"movie"},q=["href"],K={class:"thumb"},Q=e("span",null,null,-1),A=[Q],H={key:1,style:{"background-color":"#f2f2f2"},class:"bg-thumb"},J={class:"title"},O={class:"info"},W={class:"datetime"},X={key:1,className:"pagenation"},Z={__name:"MovieGallery",setup(ee){const y=v(null),t=V({boardList:[],pageInfo:{}}),_=v(7),u=()=>{const n=window.matchMedia("(max-width: 640px)");_.value=n.matches?4:7};window.addEventListener("resize",u),G(()=>{m(1,b.basic,""),u()});const m=(n,i,r)=>{d(!0);const k={method:"post",url:P.api_admin_boards,data:{page_num:n,page_size:i,search_keyword:r,board_type:"300",show_yn:"Y"},callback:l=>L(l),admin:"Y"};M(k);const L=l=>{let p=l.headers.result_code;if(p===f.success||p===f.noData){let C=l.data.result_info;l.data.page_info,t.boardList=C,d(!1)}else D("log",l),d(!1)}},w=n=>{const i=y.value;m(n,b.basic,i)};return(n,i)=>{const r=N("v-pagination");return o(),a("div",E,[c(" 서브컨텐츠     //S"),e("div",F,[h($,{subvisual:"subvisual_notice",page:"movie"}),e("div",R,[T,e("div",null,[t.boardList.length!==0?(o(),a("div",U,[(o(!0),a(j,null,z(t.boardList,s=>(o(),a("div",Y,[e("a",{href:`${B(I).web_movieGallery_url}/${s.board_idx}`},[e("div",K,[s.file_info.length===0?(o(),a("div",{key:0,style:S(`background-image:url('https://img.youtube.com/vi/${s.content}/0.jpg'); background-size:cover;`),class:"bg-thumb"},A,4)):(o(),a("div",H)),e("div",J,[e("p",null,g(s.subject),1),e("div",O,[e("span",W,g(s.reg_dttm),1)])])])],8,q)]))),256))])):c("v-if",!0),t.boardList.length!==0?(o(),a("div",X,[h(r,{length:t.pageInfo.pages,"total-visible":_.value,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[i[0]||(i[0]=s=>t.pageInfo.page_num=s),w]},null,8,["length","total-visible","modelValue"])])):c("v-if",!0)])])])])}}},ae=x(Z,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/movieGallery/MovieGallery.vue"]]);export{ae as default};
