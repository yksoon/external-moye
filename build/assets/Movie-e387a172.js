import{_ as f,u as g,h as d,r as y,o as w,C as n,a as k,b as l,c as r,e as a,d as e,q as C,t as o,j as x,l as M,s as _,f as j,g as B}from"./index-35faa2dc.js";import{L as D}from"./LeftMenu-e87c1836.js";const L={id:"wrapper"},G={id:"container",class:"sub_container"},N={id:"content"},P=e("div",{id:"subtitle"},[e("h2",null,"영상 갤러리")],-1),S={class:"movie_view","data-aos-duration":"1000","data-aos-delay":"400"},V={key:0},R={class:"movie_title"},Y={key:0,class:"movie_subtitle"},$={class:"movie_info"},q=e("li",{class:"imbar"},"|",-1),E=e("li",{class:"imbar"},"|",-1),I={colspan:"3"},T={class:"movie_content",style:{display:"flex","justify-content":"center","align-items":"center"}},U=["src"],z={class:"detail_btn_wrap"},A=["href"],F={__name:"Movie",setup(H){const u=g();d(null),d(null);const t=y({board:null});w(()=>{m()});const m=()=>{n(!0);const i=u.params.movie,p={method:"get",url:B.api_admin_get_board+`/${i}`,data:{},callback:s=>h(s),admin:"Y"};k(p);const h=s=>{let c=s.headers.result_code;if(c===_.success||c===_.noData){let v=s.data.result_info;t.board=v,n(!1)}else j("log",s),n(!1)}};return(i,b)=>(l(),r("div",L,[a(" 서브컨텐츠     //S"),e("div",G,[C(D,{subvisual:"subvisual_notice",page:"movie"}),e("div",N,[P,e("div",S,[t.board?(l(),r("table",V,[e("thead",null,[e("tr",null,[e("th",R,o(t.board.subject),1)]),e("tr",null,[e("th",null,[t.board.sub_title?(l(),r("span",Y,o(t.board.sub_title),1)):a("v-if",!0)])]),e("tr",null,[e("td",null,[e("ul",$,[e("li",null,o(t.board.reg_user_name_ko),1),q,e("li",null,"조회수 "+o(t.board.view_count),1),E,e("li",null,o(t.board.reg_dttm),1)])])]),a(` <tr>\r
                                <td>\r
                                    <ul>\r
                                        <li class="download_li">\r
                                            <a href="#none" onclick class="attachment_parent">첨부파일\r
                                                <img src="/img/common/files.jpg">\r
                                            </a>\r
                                            <div class="attachment" style="display:none;">\r
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>\r
                                            </div>\r
                                        </li>\r
                                    </ul>\r
                                </td>\r
                            </tr> `)]),e("tbody",null,[e("tr",null,[e("td",I,[e("div",T,[e("iframe",{src:`https://www.youtube.com/embed/${t.board.content}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,U)])])])])])):a("v-if",!0),e("div",z,[e("a",{href:x(M).web_movieGallery_url,class:"detail_btn"},"목록 ",8,A)])])])])]))}},Q=f(F,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/movieGallery/Movie.vue"]]);export{Q as default};
