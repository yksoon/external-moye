import{_ as L,r as w,a as C,o as x,C as d,b as B,c as V,d as a,e as o,f as l,g as e,h as g,F as j,i as M,u as N,j as G,A as I,t as _,s as p,k as S,l as z,m as h}from"./index-19648a2f.js";import{L as D}from"./LeftMenu-fa86a4d5.js";const P={id:"wrapper"},$={id:"container",class:"sub_container"},F={id:"content"},R=e("div",{id:"subtitle"},[e("h2",null,"영상 갤러리")],-1),U={"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"},Y={key:0,class:"gallery_box"},A={class:"col-md-3 gallery_thumb"},E=["href"],K={class:"thumbnail"},q=e("span",null,null,-1),H={key:1,class:"bg-thumb"},J={class:"caption"},O={class:"info"},Q={class:"datetime"},T={class:"hits"},W={key:1,className:"pagenation"},X={__name:"MovieGallery",setup(Z){const v=w(null),t=C({boardList:[],pageInfo:{}});x(()=>{u(1,h.basic,"")});const u=(r,n,c)=>{d(!0);const f={method:"post",url:z.api_admin_boards,data:{page_num:r,page_size:n,search_keyword:c,board_type:"300",show_yn:"Y"},callback:i=>y(i),admin:"Y"};B(f);const y=i=>{let m=i.headers.result_code;if(m===p.success||m===p.noData){let k=i.data.result_info;i.data.page_info,t.boardList=k,d(!1)}else S("log",i),d(!1)}},b=r=>{const n=v.value;u(r,h.basic,n)};return(r,n)=>{const c=V("v-pagination");return a(),o("div",P,[l(" 서브컨텐츠     //S"),e("div",$,[g(D,{page:"movie"}),e("div",F,[R,e("div",U,[t.boardList.length!==0?(a(),o("div",Y,[(a(!0),o(j,null,M(t.boardList,s=>(a(),o("div",A,[e("a",{href:`${N(G).web_movieGallery_url}/${s.board_idx}`},[e("div",K,[s.content?(a(),o("div",{key:0,style:I(`background-image:url('https://img.youtube.com/vi/${s.content}/0.jpg'); background-size:cover;`),class:"bg-thumb"},[l(' <div style="background-color:lightblue;" class="bg-thumb"> '),q],4)):(a(),o("div",H)),e("div",J,[e("p",null,_(s.subject),1),e("div",O,[e("span",Q,_(s.reg_dttm),1),e("span",T,"조회수 : "+_(s.view_count),1)])])])],8,E)]))),256))])):l("v-if",!0),l(` <div class="paginate">\r
                        <ul class="page_btn">\r
                            <a href="#" class="direction"><img src="/img/common/page_Btn_02.jpg" alt="이전페이지"></a>\r
                            <strong>1</strong> <a href="#" class="direction"><img src="/img/common/page_Btn_03.jpg"\r
                                    alt="다음페이지"></a>\r
                        </ul>\r
                    </div> `),t.boardList.length!==0?(a(),o("div",W,[g(c,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[n[0]||(n[0]=s=>t.pageInfo.page_num=s),b]},null,8,["length","modelValue"])])):l("v-if",!0)])])])])}}},ae=L(X,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/movie/MovieGallery.vue"]]);export{ae as default};
