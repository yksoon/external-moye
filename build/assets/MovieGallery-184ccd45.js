import{_ as v,r as b,a as f,o as y,C as n,b as k,c as a,d as o,e as c,f as s,g as L,F as w,h as C,i as x,u as M,j as N,A as S,t as r,s as u,k as B,l as G,m as V}from"./index-f845d2ea.js";import{_ as j,a as z}from"./page_Btn_03-8ea5c8a9.js";import{L as D}from"./LeftMenu-3e3643e0.js";const P={id:"wrapper"},$={id:"container",class:"sub_container"},F={id:"content"},R=s("div",{id:"subtitle"},[s("h2",null,"영상 갤러리")],-1),Y={"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"},A={key:0,class:"gallery_box"},E={class:"col-md-3 gallery_thumb"},I=["href"],U={class:"thumbnail"},q=s("span",null,null,-1),H={key:1,class:"bg-thumb"},J={class:"caption"},K={class:"info"},O={class:"datetime"},Q={class:"hits"},T=x('<div class="paginate"><ul class="page_btn"><a href="#" class="direction"><img src="'+j+'" alt="이전페이지"></a><strong>1</strong> <a href="#" class="direction"><img src="'+z+'" alt="다음페이지"></a></ul></div>',1),W={__name:"MovieGallery",setup(X){b(null);const i=f({boardList:[],pageInfo:{}});y(()=>{m(1,V.basic,"")});const m=(l,d,e)=>{n(!0);const h={method:"post",url:G.api_admin_boards,data:{page_num:l,page_size:d,search_keyword:e,board_type:"300",show_yn:"Y"},callback:t=>p(t),admin:"Y"};k(h);const p=t=>{let _=t.headers.result_code;if(_===u.success||_===u.noData){let g=t.data.result_info;t.data.page_info,i.boardList=g,n(!1)}else B("log",t),n(!1)}};return(l,d)=>(a(),o("div",P,[c(" 서브컨텐츠     //S"),s("div",$,[L(D,{page:"movie"}),s("div",F,[R,s("div",Y,[i.boardList.length!==0?(a(),o("div",A,[(a(!0),o(w,null,C(i.boardList,e=>(a(),o("div",E,[s("a",{href:`${M(N).web_movie_url}/${e.board_idx}`},[s("div",U,[e.content?(a(),o("div",{key:0,style:S(`background-image:url('https://img.youtube.com/vi/${e.content}/0.jpg'); background-size:cover;`),class:"bg-thumb"},[c(' <div style="background-color:lightblue;" class="bg-thumb"> '),q],4)):(a(),o("div",H)),s("div",J,[s("p",null,r(e.subject),1),s("div",K,[s("span",O,r(e.reg_dttm),1),s("span",Q,"조회수 : "+r(e.view_count),1)])])])],8,I)]))),256))])):c("v-if",!0),T])])])]))}},os=v(W,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/movie/MovieGallery.vue"]]);export{os as default};
