import{_ as k,u as w,h as x,r as C,o as $,C as i,a as B,b as o,c as l,e as s,d as t,q as P,t as n,F as L,i as j,j as _,l as D,g as u,s as m,f as N}from"./index-63c720bd.js";import{L as S}from"./LeftMenu-f15d19b1.js";const U={id:"wrapper"},V={id:"container",class:"sub_container"},F={id:"content"},M=t("div",{id:"subtitle"},[t("h2",null,"포토 갤러리")],-1),R={class:"gallery_view","data-aos-duration":"1000","data-aos-delay":"400"},q={key:0},E={class:"gallery_title"},G={key:0,class:"gallery_subtitle"},I={class:"gallery_info"},Y=t("li",{class:"imbar"},"|",-1),z=t("li",{class:"imbar"},"|",-1),A={style:{"border-bottom":"none"}},H={class:"gallery_content"},J=["src","alt"],K={class:"gallery_content_text"},O={class:"detail_btn_wrap"},Q=["href"],T={__name:"Photo",setup(W){const b=w();x(null);const e=C({board:null});$(()=>{f()});const h=u.api_file,f=()=>{i(!0);const c=b.params.photo,g={method:"get",url:u.api_admin_get_board+`/${c}`,data:{},callback:a=>v(a),admin:"Y"};B(g);const v=a=>{let d=a.headers.result_code;if(d===m.success||d===m.noData){let y=a.data.result_info;e.board=y,i(!1)}else N("log",a),i(!1)}};return(c,p)=>(o(),l("div",U,[s(" 서브컨텐츠     //S"),t("div",V,[P(S,{subvisual:"subvisual_notice",page:"photo"}),t("div",F,[M,t("div",R,[e.board?(o(),l("table",q,[t("thead",null,[t("tr",null,[t("th",E,n(e.board.subject),1)]),t("tr",null,[t("th",null,[e.board.sub_title?(o(),l("span",G,n(e.board.sub_title),1)):s("v-if",!0)])]),t("tr",null,[t("td",null,[t("ul",I,[t("li",null,n(e.board.reg_user_name_ko),1),Y,t("li",null,"조회수 "+n(e.board.view_count),1),z,t("li",null,n(e.board.reg_dttm),1)])])]),s(" <tr> "),s(' <td colspan="3"> '),s(` <ul>\r
                                        <li class="download_li">\r
                                            <a href="#none" onclick class="attachment_parent">첨부파일\r
                                                <img src="/img/common/files.jpg">\r
                                            </a>\r
                                            <div class="attachment" style="display:none;">\r
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>\r
                                            </div>\r
                                        </li>\r
                                    </ul> `),s(` <ul\r
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
                                    </ul> `),s(" </td> "),s(" </tr> ")]),t("tbody",null,[t("tr",A,[e.board.file_info.length!==0?(o(!0),l(L,{key:0},j(e.board.file_info,r=>(o(),l("td",null,[t("div",H,[t("img",{src:`${_(h)}${r.file_path_enc}`,alt:r.file_name},null,8,J)])]))),256)):s("v-if",!0)]),t("tr",null,[t("td",null,[t("div",K,n(e.board.content),1)])])])])):s("v-if",!0),t("div",O,[t("a",{href:_(D).web_photo_url,class:"detail_btn"},"목록 ",8,Q),s(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])])])])]))}},tt=k(T,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/photo/Photo.vue"]]);export{tt as default};
