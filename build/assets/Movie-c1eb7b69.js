import{_ as w,u as k,l as d,r as x,o as C,C as l,a as B,b as n,c as i,g as s,d as e,j as $,t as a,e as _,q as j,i as u,s as m,h as M}from"./index-5cf0a388.js";import{L as D}from"./LeftMenu-7f4908c6.js";const L={id:"wrapper"},G={id:"container",class:"sub_container"},N={id:"content"},P=e("div",{id:"subtitle"},[e("h2",null,"영상 갤러리")],-1),S={class:"movie_view"},U={key:0},V={class:"movie_title"},R={key:0,class:"movie_subtitle"},Y={class:"movie_info"},q=e("li",{class:"imbar"},"|",-1),E=e("li",{class:"imbar"},"|",-1),I={key:0},T={colspan:"3"},z={class:"movie_content",style:{display:"flex","justify-content":"center","align-items":"center"}},A=["src"],F={key:1},H={colspan:"3"},J={class:"movie_content",style:{display:"flex","justify-content":"center","align-items":"center"}},K={controls:"",style:{width:"100%",height:"100%"}},O=["src"],Q={class:"detail_btn_wrap"},W=["href"],X={__name:"Movie",setup(Z){const f=k();d(null),d(null);const t=x({board:null});C(()=>{b()});const h=u.api_file,b=()=>{l(!0);const r=f.params.movie,v={method:"get",url:u.api_admin_get_board+`/${r}`,data:{},callback:o=>y(o),admin:"Y"};B(v);const y=o=>{let c=o.headers.result_code;if(c===m.success||c===m.noData){let g=o.data.result_info;t.board=g,l(!1)}else M("log",o),l(!1)}};return(r,p)=>(n(),i("div",L,[s(" 서브컨텐츠     //S"),e("div",G,[$(D,{subvisual:"subvisual_notice",page:"movie"}),e("div",N,[P,e("div",S,[t.board?(n(),i("table",U,[e("thead",null,[e("tr",null,[e("th",V,a(t.board.subject),1)]),e("tr",null,[e("th",null,[t.board.sub_title?(n(),i("span",R,a(t.board.sub_title),1)):s("v-if",!0)])]),e("tr",null,[e("td",null,[e("ul",Y,[e("li",null,a(t.board.reg_user_name_ko),1),q,e("li",null,"조회수 "+a(t.board.view_count),1),E,e("li",null,a(t.board.reg_dttm),1)])])]),s(` <tr v-if="state.board.file_info.length">\r
                                <td>\r
                                    <ul v-for="item in state.board.file_info">\r
                                        <li class="download_li">\r
                                            <a class="attachment_parent" :href="\`\${fileBaseUrl}\${item.file_path_enc}\`">첨부파일\r
                                                <img src="/img/common/files.jpg">\r
                                            </a>\r
                                            <div class="attachment" style="display:none;">\r
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>\r
                                            </div>\r
                                        </li>\r
                                    </ul>\r
                                </td>\r
                            </tr> `)]),e("tbody",null,[t.board.file_info.length===0?(n(),i("tr",I,[e("td",T,[e("div",z,[e("iframe",{src:`https://www.youtube.com/embed/${t.board.content}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,A)])])])):s("v-if",!0),t.board.file_info.length!==0?(n(),i("tr",F,[e("td",H,[e("div",J,[e("video",K,[e("source",{src:`${_(h)}${t.board.file_info[0].file_path_enc}`,type:"video/mp4"},null,8,O)])])])])):s("v-if",!0)])])):s("v-if",!0),e("div",Q,[e("a",{href:_(j).web_movieGallery_url,class:"detail_btn"},"목록 ",8,W)])])])])]))}},oe=w(X,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/movieGallery/Movie.vue"]]);export{oe as default};
