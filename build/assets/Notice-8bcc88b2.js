import{_ as x,n as $,r as _,a as y,o as C,C as c,b as N,c as n,d as a,e as r,f as t,g as B,t as e,F as L,h as P,u,p as V,j as D,l as h,s as b,k as j}from"./index-9d5cbec0.js";import{L as I}from"./LeftMenu-4d1e197f.js";const S="/img/common/files.jpg",F="/img/common/x_btn.png",M={id:"wrapper"},R={id:"container",class:"sub_container"},U={id:"content"},E=t("div",{id:"subtitle"},[t("h2",null,"공지사항")],-1),G={"data-aos-duration":"1000","data-aos-delay":"400"},T={key:0,class:"board_Vtable"},W=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"*"}),t("col",{width:"*"})],-1),Y={colspan:"3"},q={colspan:"3"},z=t("li",{class:"imbar"},"|",-1),A=t("li",{class:"imbar"},"|",-1),H={key:0,colspan:"3"},J={class:"download_li"},K=["href"],O=t("img",{src:S},null,-1),Q=t("div",{class:"attachment",style:{display:"none"}},[t("div",{class:"xbtn"},[t("img",{src:F})])],-1),X={colspan:"3"},Z={class:"board_content"},tt={class:"board_btn_wrap"},ot={class:"boardW_btn"},et=["href"],st={__name:"Notice",setup(nt){const p=$();_(null),_(null);const o=y({board:null});C(()=>{f()});const m=h.api_file,f=()=>{c(!0);const d=p.params.notice,v={method:"get",url:h.api_admin_get_board+`/${d}`,data:{},callback:s=>k(s),admin:"Y"};N(v);const k=s=>{let i=s.headers.result_code;if(i===b.success||i===b.noData){let w=s.data.result_info;o.board=w,c(!1)}else j("log",s),c(!1)}};return(d,g)=>(n(),a("div",M,[r(" 서브컨텐츠     //S"),t("div",R,[B(I,{page:"notice"}),t("div",U,[E,t("div",G,[o.board?(n(),a("table",T,[W,t("thead",null,[t("tr",null,[t("th",Y,e(o.board.subject),1)]),t("tr",null,[t("td",q,[t("ul",null,[t("li",null,e(o.board.reg_user_name_ko),1),z,t("li",null,e(o.board.view_count),1),A,t("li",null,e(o.board.reg_dttm),1)])])]),t("tr",null,[o.board.file_info.length!==0?(n(),a("td",H,[(n(!0),a(L,null,P(o.board.file_info,l=>(n(),a("ul",null,[t("li",J,[t("a",{class:"attachment_parent",href:`${u(m)}${l.file_path_enc}`},[V(e(l.file_name)+" ",1),O],8,K),Q])]))),256))])):r("v-if",!0)])]),t("tbody",null,[t("tr",null,[t("td",X,[t("div",Z,e(o.board.content),1)])])]),r(` <tfoot>\r
                            <tr>\r
                                <td>이전글</td>\r
                                <td colspan="2">\r
                                    <a :href="\`\${routerPath.web_notice_url}/\${boardIdx-1}\`">\r
                                    </a>\r
                                </td>\r
                            </tr>\r
                            <tr>\r
                                <td>다음글</td>\r
                                <td colspan="2">\r
                                    <a :href="\`\${routerPath.web_notice_url}/\${boardIdx+1}\`">\r
                                    </a>\r
                                </td>\r
                            </tr>\r
                        </tfoot> `)])):r("v-if",!0),t("div",tt,[t("div",ot,[t("a",{href:u(D).web_notice_url,class:"back_btn"},"목록 ",8,et),r(` <span class="left2_btn"><?=$btn_link['delete']?></span>\r
                            <span class="back_btn"><?=$btn_link['update']?></span> `)])])])])])]))}},lt=x(st,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/notice/Notice.vue"]]);export{lt as default};
