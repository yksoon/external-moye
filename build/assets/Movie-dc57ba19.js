import{_ as f,u as g,h as d,r as w,o as y,C as n,a as k,b as l,c as i,e as a,d as e,q as x,k as C,t as o,j as M,l as j,s as _,f as B,g as D}from"./index-37cb9f5e.js";import{L}from"./LeftMenu-67194a46.js";const N={id:"wrapper"},V={id:"container",class:"sub_container"},P={id:"content"},S=e("div",{id:"subtitle"},[e("h2",null,"영상 갤러리")],-1),R={class:"movie_view","data-aos-duration":"1000","data-aos-delay":"400"},T={key:0},Y=e("colgroup",null,[e("col",{width:"18%"}),e("col",{width:"*"}),e("col",{width:"*"})],-1),$={colspan:"3",class:"movie_title"},q={key:0,class:"movie_subtitle"},E={colspan:"3"},G={class:"movie_info"},I=e("li",{class:"imbar"},"|",-1),U=e("li",{class:"imbar"},"|",-1),z={colspan:"3"},A={class:"movie_content",style:{display:"flex","justify-content":"center","align-items":"center"}},F=["src"],H={class:"detail_btn_wrap"},J=["href"],K={__name:"Movie",setup(O){const u=g();d(null),d(null);const t=w({board:null});y(()=>{m()});const m=()=>{n(!0);const r=u.params.movie,p={method:"get",url:D.api_admin_get_board+`/${r}`,data:{},callback:s=>h(s),admin:"Y"};k(p);const h=s=>{let c=s.headers.result_code;if(c===_.success||c===_.noData){let v=s.data.result_info;t.board=v,n(!1)}else B("log",s),n(!1)}};return(r,b)=>(l(),i("div",N,[a(" 서브컨텐츠     //S"),e("div",V,[x(L,{subvisual:"subvisual_notice",page:"movie"}),e("div",P,[S,e("div",R,[t.board?(l(),i("table",T,[Y,e("thead",null,[e("tr",null,[e("th",$,[C(o(t.board.subject)+" ",1),t.board.sub_title?(l(),i("span",q,o(t.board.sub_title),1)):a("v-if",!0)])]),e("tr",null,[e("td",E,[e("ul",G,[e("li",null,o(t.board.reg_user_name_ko),1),I,e("li",null,"조회수 "+o(t.board.view_count),1),U,e("li",null,o(t.board.reg_dttm),1)])])]),a(` <tr>\r
                                <td colspan="3">\r
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
                            </tr> `)]),e("tbody",null,[e("tr",null,[e("td",z,[e("div",A,[e("iframe",{src:`https://www.youtube.com/embed/${t.board.content}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,F)])])])])])):a("v-if",!0),e("div",H,[e("a",{href:M(j).web_movie_url,class:"detail_btn"},"목록 ",8,J)])])])])]))}},Z=f(K,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/movie/Movie.vue"]]);export{Z as default};
