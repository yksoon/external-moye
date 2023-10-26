import{_ as k,u as w,h as x,r as C,o as $,C as i,a as B,b as o,c as l,e,d as t,q as P,t as a,F as L,i as j,j as _,l as D,g as u,s as m,f as N}from"./index-37cb9f5e.js";import{L as S}from"./LeftMenu-67194a46.js";const U={id:"wrapper"},V={id:"container",class:"sub_container"},F={id:"content"},M=t("div",{id:"subtitle"},[t("h2",null,"포토 갤러리")],-1),R={class:"gallery_view","data-aos-duration":"1000","data-aos-delay":"400"},q={key:0},E={class:"gallery_title"},G={class:"gallery_info"},I=t("li",{class:"imbar"},"|",-1),Y=t("li",{class:"imbar"},"|",-1),z={style:{"border-bottom":"none"}},A={class:"gallery_content"},H=["src","alt"],J={class:"gallery_content"},K={class:"detail_btn_wrap"},O=["href"],Q={__name:"Photo",setup(T){const h=w();x(null);const s=C({board:null});$(()=>{b()});const f=u.api_file,b=()=>{i(!0);const c=h.params.photo,g={method:"get",url:u.api_admin_get_board+`/${c}`,data:{},callback:n=>v(n),admin:"Y"};B(g);const v=n=>{let d=n.headers.result_code;if(d===m.success||d===m.noData){let y=n.data.result_info;s.board=y,i(!1)}else N("log",n),i(!1)}};return(c,p)=>(o(),l("div",U,[e(" 서브컨텐츠     //S"),t("div",V,[P(S,{subvisual:"subvisual_notice",page:"photo"}),t("div",F,[M,t("div",R,[s.board?(o(),l("table",q,[t("thead",null,[t("tr",null,[t("th",E,a(s.board.subject),1)]),t("tr",null,[t("td",null,[t("ul",G,[t("li",null,a(s.board.reg_user_name_ko),1),I,t("li",null,"조회수 "+a(s.board.view_count),1),Y,t("li",null,a(s.board.reg_dttm),1)])])]),e(" <tr> "),e(' <td colspan="3"> '),e(` <ul>\r
                                        <li class="download_li">\r
                                            <a href="#none" onclick class="attachment_parent">첨부파일\r
                                                <img src="/img/common/files.jpg">\r
                                            </a>\r
                                            <div class="attachment" style="display:none;">\r
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>\r
                                            </div>\r
                                        </li>\r
                                    </ul> `),e(` <ul\r
                                        v-if="state.board.file_info.length !== 0"\r
                                        v-for="item in state.board.file_info"\r
                                    >\r
                                        <li class="download_li">\r
                                            <a class="attachment_parent" :href="\`\${fileBaseUrl}\${item.file_path_enc}\`">{{ item.file_name }}\r
                                                <img src="/img/common/files.jpg">\r
                                            </a>\r
                                            <div class="attachment" style="display:none;">\r
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>\r
                                            </div>\r
                                        </li>\r
                                    </ul> `),e(" </td> "),e(" </tr> ")]),t("tbody",null,[t("tr",z,[s.board.file_info.length!==0?(o(!0),l(L,{key:0},j(s.board.file_info,r=>(o(),l("td",null,[t("div",A,[t("img",{src:`${_(f)}${r.file_path_enc}`,alt:r.file_name},null,8,H)])]))),256)):e("v-if",!0)]),t("tr",null,[t("td",null,[t("div",J,a(s.board.content),1)])])])])):e("v-if",!0),t("div",K,[t("a",{href:_(D).web_photo_url,class:"detail_btn"},"목록 ",8,O),e(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])])])])]))}},Z=k(Q,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/photo/Photo.vue"]]);export{Z as default};
