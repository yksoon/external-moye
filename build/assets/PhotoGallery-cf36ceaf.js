import{_ as y,r as k,a as L,o as w,C as n,b as C,c as a,d as o,e as d,f as s,g as x,F as P,h as B,i as N,u,j as S,q as G,t as r,l as h,s as m,k as V}from"./index-b9b461dc.js";import{_ as $,a as z}from"./page_Btn_03-8ea5c8a9.js";import{m as D}from"./pagenationInfoStatic-b864fbdd.js";import{L as j}from"./LeftMenu-2665253e.js";const F={id:"wrapper"},M={id:"container",class:"sub_container"},R={id:"content"},U=s("div",{id:"subtitle"},[s("h2",null,"포토 갤러리")],-1),Y={"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"},q={key:0,class:"gallery_box"},E={class:"col-md-3 gallery_thumb"},I=["href"],A={class:"thumbnail"},H=s("span",null,null,-1),J=[H],K={key:1,class:"bg-thumb"},O={class:"caption"},Q={class:"info"},T={class:"datetime"},W={class:"hits"},X=N('<div class="paginate"><ul class="page_btn"><a href="#" class="direction"><img src="'+$+'" alt="이전페이지"></a><strong>1</strong> <a href="#" class="direction"><img src="'+z+'" alt="다음페이지"></a></ul></div>',1),Z={__name:"PhotoGallery",setup(ss){k(null);const i=L({boardList:[],pageInfo:{}});w(()=>{f(1,D.basic,"")});const p=h.api_file,f=(c,l,t)=>{n(!0);const g={method:"post",url:h.api_admin_boards,data:{page_num:c,page_size:l,search_keyword:t,board_type:"200",show_yn:"Y"},callback:e=>b(e),admin:"Y"};C(g);const b=e=>{let _=e.headers.result_code;if(_===m.success||_===m.noData){let v=e.data.result_info;e.data.page_info,i.boardList=v,n(!1)}else V("log",e),n(!1)}};return(c,l)=>(a(),o("div",F,[d(" 서브컨텐츠     //S"),s("div",M,[x(j,{page:"photo"}),s("div",R,[U,s("div",Y,[i.boardList.length!==0?(a(),o("div",q,[(a(!0),o(P,null,B(i.boardList,t=>(a(),o("div",E,[s("a",{href:`${u(S).web_photo_url}/${t.board_idx}`},[s("div",A,[t.file_info.length?(a(),o("div",{key:0,class:"bg-thumb",style:G(`background-image:url('${u(p)}${t.file_info[0].file_path_enc}'); background-size:cover;`)},J,4)):(a(),o("div",K)),s("div",O,[s("p",null,r(t.subject),1),s("div",Q,[s("span",T,r(t.reg_dttm),1),s("span",W,"조회수 : "+r(t.view_count),1)])])])],8,I)]))),256))])):d("v-if",!0),X])])])]))}},rs=y(Z,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/photo/PhotoGallery.vue"]]);export{rs as default};
