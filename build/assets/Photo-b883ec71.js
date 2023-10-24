import{_ as w,n as y,r as x,a as C,o as $,C as i,b as B,c as a,d as l,e as s,f as t,g as P,t as n,F as L,h as j,u as _,j as D,l as u,s as m,k as V}from"./index-c92460f2.js";import{L as N}from"./LeftMenu-3ab05182.js";const S={id:"wrapper"},U={id:"container",class:"sub_container"},F={id:"content"},M=t("div",{id:"subtitle"},[t("h2",null,"포토 갤러리")],-1),R={"data-aos-duration":"1000","data-aos-delay":"400"},E={key:0,class:"board_Vtable"},G=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),I={colspan:"3"},W={colspan:"3"},Y=t("li",{class:"imbar"},"|",-1),q=t("li",{class:"imbar"},"|",-1),z={style:{"border-bottom":"none"}},A={colspan:"3"},H={class:"board_content"},J=["src","alt"],K={colspan:"3"},O={class:"board_content"},Q={class:"board_btn_wrap"},T={class:"boardW_btn"},X=["href"],Z={__name:"Photo",setup(tt){const h=y();x(null);const o=C({board:null});$(()=>{p()});const b=u.api_file,p=()=>{i(!0);const c=h.params.photo,g={method:"get",url:u.api_admin_get_board+`/${c}`,data:{},callback:e=>v(e),admin:"Y"};B(g);const v=e=>{let d=e.headers.result_code;if(d===m.success||d===m.noData){let k=e.data.result_info;o.board=k,i(!1)}else V("log",e),i(!1)}};return(c,f)=>(a(),l("div",S,[s(" 서브컨텐츠     //S"),t("div",U,[P(N,{page:"photo"}),t("div",F,[M,t("div",R,[o.board?(a(),l("table",E,[G,t("thead",null,[t("tr",null,[t("th",I,n(o.board.subject),1)]),t("tr",null,[t("td",W,[t("ul",null,[t("li",null,n(o.board.reg_user_name_ko),1),Y,t("li",null,"조회수 "+n(o.board.view_count),1),q,t("li",null,n(o.board.reg_dttm),1)])])]),s(" <tr> "),s(' <td colspan="3"> '),s(` <ul>\r
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
                                    </ul> `),s(" </td> "),s(" </tr> ")]),t("tbody",null,[t("tr",z,[o.board.file_info.length!==0?(a(!0),l(L,{key:0},j(o.board.file_info,r=>(a(),l("td",A,[t("div",H,[t("img",{src:`${_(b)}${r.file_path_enc}`,alt:r.file_name},null,8,J)])]))),256)):s("v-if",!0)]),t("tr",null,[t("td",K,[t("div",O,n(o.board.content),1)])])])])):s("v-if",!0),t("div",Q,[t("div",T,[t("a",{href:_(D).web_photo_url,class:"back_btn"},"목록 ",8,X),s(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])])])])])]))}},et=w(Z,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/photo/Photo.vue"]]);export{et as default};
