import{_ as S,u as N,h as $,r as z,o as D,C as n,a as B,b as f,c as h,e as i,d as e,j as l,l as r,B as d,F,g as v,s as g,f as y,m as R}from"./index-63c720bd.js";const U={key:0},V=e("div",{id:"subvisual",class:"subvisual_notice"},[e("div",{class:"sub_txt"},[e("h2",{"data-aos":"fade-in","data-aos-duration":"500"}," 고객센터 ")])],-1),Y={id:"leftmenu"},j={id:"lnb"},A=["href"],E=["href"],G={key:0},I=["href"],q=["href"],H=["href"],J={key:1},K=e("div",{id:"subvisual",class:"subvisual_people"},[e("div",{class:"sub_txt"},[e("h2",{"data-aos":"fade-in","data-aos-duration":"500"}," 교육서비스 ")])],-1),O={id:"leftmenu"},Q={id:"lnb"},T=["href"],W={__name:"LeftMenu",props:{page:String,subvisual:String},setup(o){const m=o;N(),$(null);const s=z({lastBoard:[],board:[],filePath:null});D(()=>{m.subvisual==="subvisual_notice"&&L(1,1,"")});const w=v.api_file,L=(u,c,C)=>{n(!0);const p={method:"post",url:v.api_admin_boards,data:{page_num:u,page_size:c,search_keyword:C,board_type:"400"},callback:t=>a(t),admin:"Y"};B(p);const a=t=>{let _=t.headers.result_code;if(_===g.success||_===g.noData){let M=t.data.result_info;s.lastBoard=M,s.lastBoard?x(s.lastBoard[0].board_idx):n(!1)}else y("log",t),n(!1)}},x=u=>{const c=String(u),k={method:"get",url:v.api_admin_get_board+`/${c}`,data:{},callback:a=>p(a),admin:"Y"};B(k);const p=a=>{let t=a.headers.result_code,_=a.data.result_info;t===g.success?(s.board=_,s.filePath=s.board.file_info.length?s.board.file_info[0].file_path_enc:"",n(!1)):(y("log",a),n(!1),R({type:"alert",message:a.headers.result_message_ko}))}},b=()=>{alert("준비중입니다 :-)")};return(u,c)=>(f(),h(F,null,[i(" 고객센터 "),m.subvisual==="subvisual_notice"?(f(),h("div",U,[V,e("div",Y,[e("div",j,[e("ul",null,[e("li",null,[e("a",{href:l(r).web_notice_url,class:d(o.page==="notice"?"on":"")},"공지사항",10,A)]),e("li",null,[e("a",{href:l(r).web_consulting_url,class:d(o.page==="consulting"?"on":"")},"상담문의",10,E)]),s.board?(f(),h("li",G,[e("a",{href:`${l(w)}${s.filePath}`},"회사소개서 다운로드",8,I)])):i("v-if",!0),e("li",null,[e("a",{href:l(r).web_photo_url,class:d(o.page==="photo"?"on":"")},"포토 갤러리",10,q)]),e("li",null,[e("a",{href:l(r).web_movieGallery_url,class:d(o.page==="movie"?"on":"")},"영상 갤러리",10,H)])])])])])):i("v-if",!0),i(" 교육서비스 "),m.subvisual==="subvisual_people"?(f(),h("div",J,[K,e("div",O,[e("div",Q,[e("ul",null,[e("li",null,[e("a",{href:l(r).web_people_url,class:d(o.page==="people"?"on":"")},"코치진",10,T)]),e("li",null,[e("a",{onClick:b},"Class 130 Category")]),e("li",null,[e("a",{onClick:b},"성장과정별 교육")]),e("li",null,[e("a",{onClick:b},"예정교육")])])])])])):i("v-if",!0)],64))}},Z=S(W,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/LeftMenu.vue"]]);export{Z as L};
