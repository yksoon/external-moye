import{_ as p,u as v,r as g,o as k,C as i,a as w,b as a,c as r,g as e,d as t,j as y,f as C,t as n,e as N,q as B,s as d,h as x,i as V}from"./index-af57bcfa.js";import{L as $}from"./LeftMenu-437f5f2f.js";const D="/img/common/common_lock.png",L={id:"wrapper"},j={id:"container",class:"sub_container"},A={id:"content"},P=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),Q={key:0,class:"board_Vtable"},S=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),U={colspan:"3"},q={key:0,src:D,alt:""},M={colspan:"3"},R=t("li",{class:"imbar"},"|",-1),E={colspan:"3"},G={colspan:"3"},I={class:"board_content"},T={key:0},W={colspan:"2"},Y={class:"board_btn_wrap"},z={class:"boardW_btn"},F=["href"],H={__name:"QNA",setup(J){const _=v(),o=g({board:null});k(()=>{m()});const m=()=>{i(!0);const l=_.params.qna,f={method:"get",url:V.api_admin_get_board+`/${l}`,data:{},callback:s=>b(s),admin:"Y"};w(f);const b=s=>{let c=s.headers.result_code;if(c===d.success||c===d.noData){let h=s.data.result_info;o.board=h,i(!1)}else x("log",s),i(!1)}};return(l,u)=>(a(),r("div",L,[e(" 서브컨텐츠     //S"),t("div",j,[y($,{subvisual:"subvisual_notice",page:"consulting"}),t("div",A,[P,t("div",null,[o.board?(a(),r("table",Q,[S,t("thead",null,[t("tr",null,[t("th",U,[C(n(o.board.subject)+"  ",1),o.board.open_yn==="N"?(a(),r("img",q)):e("v-if",!0)]),e(' <th colspan="3">{{ state.board.subject }}</th> ')]),t("tr",null,[t("td",M,[t("ul",null,[t("li",null,n(o.board.user_name_first_ko+o.board.user_name_last_ko),1),R,t("li",null,n(o.board.reg_dttm),1)])])]),t("tr",null,[t("td",E,[t("b",null,n(o.board.category_type),1)])]),e(` <tr v-if="state.board.file_info.length !== 0">\r
                                <td>\r
                                    <div>\r
                                        <div v-for="item in state.board.file_info" class="download_li">\r
                                            <a :href="\`\${fileBaseUrl}\${item.file_path_enc}\`">\r
                                                <img src="/img/common/file.svg" alt="" />\r
                                                {{ item.file_name }}\r
                                            </a>\r
                                        </div>\r
                                    </div>\r
                                </td>\r
                            </tr> `)]),t("tbody",null,[t("tr",null,[t("td",G,[t("div",I,n(o.board.content),1)])]),e(" 관리자 댓글 답변 "),o.board.comment_info?(a(),r("tr",T,[t("th",null,n(o.board.comment_info.user_name_ko),1),t("td",W,n(o.board.comment_info.content),1)])):e("v-if",!0),e(` <tr v-if="state.board.comment_info && state.board.comment_info.file_info.length !== 0">\r
                                <td>\r
                                    <div>\r
                                        <div v-for="item in state.board.comment_info.file_info" class="download_li">\r
                                            <a :href="\`\${fileBaseUrl}\${item.file_path_enc}\`">\r
                                                <img src="/img/common/file.svg" alt="" />\r
                                                {{ item.file_name }}\r
                                            </a>\r
                                        </div>\r
                                    </div>\r
                                </td>\r
                            </tr> `)])])):e("v-if",!0),t("div",Y,[t("div",z,[t("a",{href:N(B).web_consulting_url,class:"back_btn"},"목록",8,F)])])])])])]))}},Z=p(H,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/QNA.vue"]]);export{Z as default};
