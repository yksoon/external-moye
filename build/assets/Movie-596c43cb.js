import{_ as v,m as g,r as c,a as w,o as y,C as n,b as k,c as i,d,e as o,f as t,g as C,t as a,u as x,j as M,s as _,k as j,l as B}from"./index-6d13be86.js";import{L as D}from"./LeftMenu-ffff98bb.js";const L={id:"wrapper"},V={id:"container",class:"sub_container"},$={id:"content"},N=t("div",{id:"subtitle"},[t("h2",null,"영상 갤러리")],-1),P={"data-aos-duration":"1000","data-aos-delay":"400"},S={key:0,class:"board_Vtable"},R=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),Y={colspan:"3"},E={colspan:"3"},G=t("li",{class:"imbar"},"|",-1),I=t("li",{class:"imbar"},"|",-1),T={colspan:"3"},U={class:"board_content",style:{display:"flex","justify-content":"center","align-items":"center"}},W=["src"],q={class:"board_btn_wrap"},z={class:"boardW_btn"},A=["href"],F={__name:"Movie",setup(H){const u=g();c(null),c(null);const e=w({board:null});y(()=>{m()});const m=()=>{n(!0);const l=u.params.movie,p={method:"get",url:B.api_admin_get_board+`/${l}`,data:{},callback:s=>h(s),admin:"Y"};k(p);const h=s=>{let r=s.headers.result_code;if(r===_.success||r===_.noData){let f=s.data.result_info;e.board=f,n(!1)}else j("log",s),n(!1)}};return(l,b)=>(i(),d("div",L,[o(" 서브컨텐츠     //S"),t("div",V,[C(D,{page:"movie"}),t("div",$,[N,t("div",P,[e.board?(i(),d("table",S,[R,t("thead",null,[t("tr",null,[t("th",Y,a(e.board.subject),1)]),t("tr",null,[t("td",E,[t("ul",null,[t("li",null,a(e.board.reg_user_name_ko),1),G,t("li",null,"조회수 "+a(e.board.view_count),1),I,t("li",null,a(e.board.reg_dttm),1)])])]),o(` <tr>\r
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
                            </tr> `)]),t("tbody",null,[t("tr",null,[t("td",T,[t("div",U,[t("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${e.board.content}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,W)])])])])])):o("v-if",!0),t("div",q,[t("div",z,[t("a",{href:x(M).web_movieGallery_url,class:"back_btn"},"목록 ",8,A),o(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])])])])])]))}},Q=v(F,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/movie/Movie.vue"]]);export{Q as default};
