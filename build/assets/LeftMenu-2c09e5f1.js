import{_ as S,u as A,j as G,r as N,o as $,C as _,a as k,b as r,c,e as i,d as e,q as l,w as t,v as o,F as z,g,s as p,f as y,m as D}from"./index-6357eddb.js";const F={key:0},I=e("div",{id:"subvisual",class:"subvisual_intro"},[e("div",{class:"sub_txt"},[e("h2",null," 모두의예체능 소개 ")])],-1),R={id:"leftmenu"},U={id:"lnb"},V=["href"],Y=["href"],j=["href"],q=["href"],E=["href"],H=["href"],J={key:1},K=e("div",{id:"subvisual",class:"subvisual_business"},[e("div",{class:"sub_txt"},[e("h2",null," 사업소개 ")])],-1),O={id:"leftmenu"},Q={id:"lnb"},T=["href"],W=["href"],X=["href"],Z={key:2},ee=e("div",{id:"subvisual",class:"subvisual_notice"},[e("div",{class:"sub_txt"},[e("h2",null," 고객센터 ")])],-1),se={id:"leftmenu"},le={id:"lnb"},te=["href"],oe=["href"],ae={key:0},ie=["href"],ne=["href"],ue=["href"],re={key:3},ce=e("div",{id:"subvisual",class:"subvisual_people"},[e("div",{class:"sub_txt"},[e("h2",null," 교육서비스 ")])],-1),de={id:"leftmenu"},_e={id:"lnb"},he=["href"],fe={__name:"LeftMenu",props:{page:String,subvisual:String},setup(s){const d=s;A(),G(null);const a=N({lastBoard:[],board:[],filePath:null});$(()=>{d.subvisual==="subvisual_notice"&&x(1,1,"")});const B=g.api_file,x=(h,f,w)=>{_(!0);const m={method:"post",url:g.api_admin_boards,data:{page_num:h,page_size:f,search_keyword:w,board_type:"400"},callback:u=>n(u),admin:"Y"};k(m);const n=u=>{let b=u.headers.result_code;if(b===p.success||b===p.noData){let M=u.data.result_info;a.lastBoard=M,a.lastBoard?L(a.lastBoard[0].board_idx):_(!1)}else y("log",u),_(!1)}},L=h=>{const f=String(h),C={method:"get",url:g.api_admin_get_board+`/${f}`,data:{},callback:n=>m(n),admin:"Y"};k(C);const m=n=>{let u=n.headers.result_code,b=n.data.result_info;u===p.success?(a.board=b,a.filePath=a.board.file_info.length?a.board.file_info[0].file_path_enc:"",_(!1)):(y("log",n),_(!1),D({type:"alert",message:n.headers.result_message_ko}))}},v=()=>{alert("준비중입니다 :-)")};return(h,f)=>(r(),c(z,null,[i(" 모두의예체능 소개 "),d.subvisual==="subvisual_intro"?(r(),c("div",F,[I,e("div",R,[e("div",U,[e("ul",null,[e("li",null,[e("a",{href:l(t).web_greetings_url,class:o(s.page==="greetings"?"on":"")},"인사말",10,V)]),e("li",null,[e("a",{href:l(t).web_introduction_url,class:o(s.page==="introduction"?"on":"")},"모두의 예체능 소개",10,Y)]),e("li",null,[e("a",{href:l(t).web_members_url,class:o(s.page==="members"?"on":"")},"조직 및 구성",10,j)]),e("li",null,[e("a",{href:l(t).web_histories_url,class:o(s.page==="histories"?"on":"")},"연혁",10,q)]),e("li",null,[e("a",{href:l(t).web_ci_url,class:o(s.page==="ci"?"on":"")},"CI",10,E)]),e("li",null,[e("a",{href:l(t).web_location_url,class:o(s.page==="location"?"on":"")},"오시는길",10,H)])])])])])):i("v-if",!0),i(" 사업소개 "),d.subvisual==="subvisual_business"?(r(),c("div",J,[K,e("div",O,[e("div",Q,[e("ul",null,[e("li",null,[e("a",{href:l(t).web_businessAreas_url,class:o(s.page==="category"?"on":"")},"사업분야",10,T)]),e("li",null,[e("a",{href:l(t).web_businessAreas_url,class:o(s.page==="platform"?"on":"")},"플랫폼 서비스 소개",10,W)]),e("li",null,[e("a",{href:l(t).web_promotion_url,class:o(s.page==="promotion"?"on":"")},"예체능 시설 Promotion",10,X)])])])])])):i("v-if",!0),i(" 고객센터 "),d.subvisual==="subvisual_notice"?(r(),c("div",Z,[ee,e("div",se,[e("div",le,[e("ul",null,[e("li",null,[e("a",{href:l(t).web_notices_url,class:o(s.page==="notice"?"on":"")},"공지사항",10,te)]),e("li",null,[e("a",{href:l(t).web_consulting_url,class:o(s.page==="consulting"?"on":"")},"상담문의",10,oe)]),a.board?(r(),c("li",ae,[e("a",{href:`${l(B)}${a.filePath}`},"회사소개서 다운로드",8,ie)])):i("v-if",!0),e("li",null,[e("a",{href:l(t).web_photoGallery_url,class:o(s.page==="photo"?"on":"")},"포토 갤러리",10,ne)]),e("li",null,[e("a",{href:l(t).web_movieGallery_url,class:o(s.page==="movie"?"on":"")},"영상 갤러리",10,ue)])])])])])):i("v-if",!0),i(" 교육서비스 "),d.subvisual==="subvisual_people"?(r(),c("div",re,[ce,e("div",de,[e("div",_e,[e("ul",null,[e("li",null,[e("a",{href:l(t).web_peoples_url,class:o(s.page==="people"?"on":"")},"코치진",10,he)]),e("li",null,[e("a",{onClick:v},"Class 130 Category")]),e("li",null,[e("a",{onClick:v},"성장과정별 교육")]),e("li",null,[e("a",{onClick:v},"예정교육")])])])])])):i("v-if",!0)],64))}},ve=S(fe,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/LeftMenu.vue"]]);export{ve as L};
