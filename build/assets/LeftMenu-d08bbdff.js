import{_ as P,n as x,r as M,a as N,o as S,C as t,b as p,c as g,d as v,f as e,u as l,j as d,B as _,e as $,l as f,s as h,k as B,y as z}from"./index-c84c5c44.js";const D=e("div",{id:"subvisual",class:"subvisual"},[e("div",{class:"sub_txt"},[e("h2",{"data-aos":"fade-in","data-aos-duration":"500"}," 고객센터 ")])],-1),R={id:"leftmenu"},U={id:"lnb"},V=["href"],Y=["href"],j={key:0},E=["href"],G=["href"],I=["href"],q={__name:"LeftMenu",props:{page:String},setup(n){x(),M(null);const s=N({lastBoard:[],board:[],filePath:null});S(()=>{k(1,1,"")});const C=f.api_file,k=(r,i,m)=>{t(!0);const u={method:"post",url:f.api_admin_boards,data:{page_num:r,page_size:i,search_keyword:m,board_type:"400"},callback:o=>a(o),admin:"Y"};p(u);const a=o=>{let c=o.headers.result_code;if(c===h.success||c===h.noData){let y=o.data.result_info;s.lastBoard=y,s.lastBoard?L(s.lastBoard[0].board_idx):t(!1)}else B("log",o),t(!1)}},L=r=>{const i=String(r),b={method:"get",url:f.api_admin_get_board+`/${i}`,data:{},callback:a=>u(a),admin:"Y"};p(b);const u=a=>{let o=a.headers.result_code,c=a.data.result_info;o===h.success?(s.board=c,s.filePath=s.board.file_info.length?s.board.file_info[0].file_path_enc:"",t(!1)):(B("log",a),t(!1),z({type:"alert",message:a.headers.result_message_ko}))}};return(r,i)=>(g(),v("div",null,[D,e("div",R,[e("div",U,[e("ul",null,[e("li",null,[e("a",{href:l(d).web_notice_url,class:_(n.page==="notice"?"on":"")},"공지사항",10,V)]),e("li",null,[e("a",{href:l(d).web_consulting_url,class:_(n.page==="consulting"?"on":"")},"상담문의",10,Y)]),s.board?(g(),v("li",j,[e("a",{href:`${l(C)}${s.filePath}`},"회사소개서 다운로드",8,E)])):$("v-if",!0),e("li",null,[e("a",{href:l(d).web_photo_url,class:_(n.page==="photo"?"on":"")},"포토 갤러리",10,G)]),e("li",null,[e("a",{href:l(d).web_movie_url,class:_(n.page==="movie"?"on":"")},"영상 갤러리",10,I)])])])])]))}},F=P(q,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/LeftMenu.vue"]]);export{F as L};
