import{_ as f,m as v,r as g,a as y,o as x,C as o,b as k,c as d,d as c,e as n,f as t,g as w,t as a,u as C,j as N,s as i,k as $,l as j}from"./index-b9b461dc.js";import{L as B}from"./LeftMenu-2665253e.js";const D={id:"wrapper"},L={id:"container",class:"sub_container"},V={id:"content"},A=t("div",{id:"subtitle"},[t("h2",null,"상담문의")],-1),P={"data-aos-duration":"1000","data-aos-delay":"400"},Q={key:0,class:"board_Vtable"},S=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),M={colspan:"3"},R={colspan:"3"},q=t("li",{class:"imbar"},"|",-1),z={colspan:"3"},E={colspan:"3"},G={class:"board_content"},I=t("tr",null,[n(` <td colspan="3" style="padding:0;">\r
                                    <div class="reply_area">\r
                                        <form name="reply_form" method="post">\r
                                            <div class="reply_box">\r
                                                <?if($member[level] < 90){?>\r
                                                <ul>\r
                                                    <li class="user"><span>작성자</span><input type="text" name="username"\r
                                                            id="" value="" /></li>\r
                                                    <li class="user_pw"><span>비밀번호</span><input type="password"\r
                                                            name="passwd" id="" value="" /></li>\r
                                                </ul>\r
                                                <?}?>\r
                                                <input type="hidden" name="modify_idx" />\r
                                                <p>\r
                                                    <span>내용</span>\r
                                                    <textarea name="re_context" class="input"\r
                                                        style="height:65px; resize:none;"></textarea>\r
                                                </p>\r
                                            </div>\r
                                            <div class="reply_btn_box">\r
                                                <a href="javascript:reply_write('<?=$idx?>','<?=$bo_idx?>','insert');"\r
                                                    class="reply_btn">등록</a>\r
                                            </div>\r
                                        </form>\r
                                        <div id="reply_area" style="width:100%"></div>\r
                                    </div>\r
                                </td> `)],-1),U={class:"board_btn_wrap"},W={class:"boardW_btn"},Y=["href"],F={__name:"QNA",setup(H){const _=v();g(null);const e=y({board:null});x(()=>{p()});const p=()=>{o(!0);const r=_.params.qna,m={method:"get",url:j.api_admin_get_board+`/${r}`,data:{},callback:s=>b(s),admin:"Y"};k(m);const b=s=>{let l=s.headers.result_code;if(l===i.success||l===i.noData){let h=s.data.result_info;e.board=h,o(!1)}else $("log",s),o(!1)}};return(r,u)=>(d(),c("div",D,[n(" 서브컨텐츠     //S"),t("div",L,[w(B,{page:"consulting"}),t("div",V,[A,t("div",P,[e.board?(d(),c("table",Q,[S,t("thead",null,[t("tr",null,[n(' <th colspan="3">{{ state.board.subject }} &nbsp;<img src="/img/common/common_lock.png" alt=""></th> '),t("th",M,a(e.board.subject),1)]),t("tr",null,[t("td",R,[t("ul",null,[t("li",null,a(e.board.reg_user_name_ko),1),q,t("li",null,a(e.board.reg_dttm),1)])])]),t("tr",null,[t("td",z,[t("b",null,a(e.board.category_type),1)])])]),t("tbody",null,[t("tr",null,[t("td",E,[t("div",G,a(e.board.content),1)])]),I,n(` <tr v-if="state.board.comment_info.length !== 0" v-for="comment in state.board.commont_info">\r
                                <th>{{ comment.reg_user_name_ko }}</th>\r
                                <td colspan="2">{{ comment.content }}</td>\r
                            </tr> `)])])):n("v-if",!0),t("div",U,[t("div",W,[t("a",{href:C(N).web_consulting_url,class:"back_btn"},"목록 ",8,Y),n(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])])])])])]))}},T=f(F,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/consulting/QNA.vue"]]);export{T as default};
