import{_ as h,b as o,c as a,g as n,d as s,e as l,q as i,x as t,F as f,i as v}from"./index-ee2eb5c0.js";const b={key:0},g=s("div",{id:"subvisual",class:"subvisual_intro"},[s("div",{class:"sub_txt"},[s("h2",null," 모두의예체능 소개 ")])],-1),m={id:"leftmenu"},p={id:"lnb"},w=["href"],y=["href"],k=["href"],x=["href"],P=["href"],C={key:1},F=s("div",{id:"subvisual",class:"subvisual_business"},[s("div",{class:"sub_txt"},[s("h2",null," 사업소개 ")])],-1),L={id:"leftmenu"},A={id:"lnb"},B=["href"],S=["href"],G=["href"],I={key:2},M=s("div",{id:"subvisual",class:"subvisual_people"},[s("div",{class:"sub_txt"},[s("h2",null," 교육서비스 ")])],-1),N={id:"leftmenu"},V={id:"lnb"},D=["href"],E=["href"],U=["href"],q=["href"],z={key:3},J=s("div",{id:"subvisual",class:"subvisual_partnership"},[s("div",{class:"sub_txt"},[s("h2",null," Partnership ")])],-1),O={id:"leftmenu"},j={id:"lnb"},H=["href"],K={key:4},Q=s("div",{id:"subvisual",class:"subvisual_app"},[s("div",{class:"sub_txt"},[s("h2",null," 모두의예체능 APP ")])],-1),R={id:"leftmenu"},T={id:"lnb"},W=["href"],X={key:5},Y=s("div",{id:"subvisual",class:"subvisual_notice"},[s("div",{class:"sub_txt"},[s("h2",null," 고객센터 ")])],-1),Z={id:"leftmenu"},$={id:"lnb"},ss=["href"],es=["href"],ls=["href"],is=["href"],ts={__name:"LeftMenu",props:{page:String,subvisual:String},setup(e){const u=e,c=v.api_file,_=()=>(event.returnValue=!1,alert("준비중입니다."),!1),d=()=>{const r=JSON.parse(sessionStorage.getItem("companyFile")).companyFile;if(r){window.location.href=c+r;return}else _()};return(r,ns)=>(o(),a(f,null,[n(" 모두의예체능 소개 "),u.subvisual==="subvisual_intro"?(o(),a("div",b,[g,s("div",m,[s("div",p,[s("ul",null,[s("li",null,[s("a",{href:l(i).web_greetings_url,class:t(e.page==="greetings"?"on":"")},"인사말",10,w)]),s("li",null,[s("a",{href:l(i).web_introduction_url,class:t(e.page==="introduction"?"on":"")},"모두의 예체능 소개",10,y)]),n(` <li><a :href="routerPath.web_members_url" :class="page === 'members' ? 'on' : ''">조직 및 구성</a></li> `),s("li",null,[s("a",{href:l(i).web_histories_url,class:t(e.page==="histories"?"on":"")},"연혁",10,k)]),s("li",null,[s("a",{href:l(i).web_ci_url,class:t(e.page==="ci"?"on":"")},"CI",10,x)]),s("li",null,[s("a",{href:l(i).web_location_url,class:t(e.page==="location"?"on":"")},"오시는길",10,P)])])])])])):n("v-if",!0),n(" 사업소개 "),u.subvisual==="subvisual_business"?(o(),a("div",C,[F,s("div",L,[s("div",A,[s("ul",null,[s("li",null,[s("a",{href:l(i).web_businessAreas_url,class:t(e.page==="category"?"on":"")},"사업분야",10,B)]),s("li",null,[s("a",{href:l(i).web_platform_url,class:t(e.page==="platform"?"on":"")},"플랫폼 서비스 소개",10,S)]),s("li",null,[s("a",{href:l(i).web_promotion_url,class:t(e.page==="promotion"?"on":"")},"예체능 시설 Promotion",10,G)])])])])])):n("v-if",!0),n(" 교육서비스 "),u.subvisual==="subvisual_people"?(o(),a("div",I,[M,s("div",N,[s("div",V,[s("ul",null,[s("li",null,[s("a",{href:l(i).web_peoples_url,class:t(e.page==="people"?"on":"")},"코치진",10,D)]),s("li",null,[s("a",{href:l(i).web_categories_url,class:t(e.page==="class"?"on":"")},"Class 130 Category",10,E)]),s("li",null,[s("a",{href:l(i).web_growthProcess_url,class:t(e.page==="growth"?"on":"")},"성장과정별 교육",10,U)]),s("li",null,[s("a",{href:l(i).web_scheduledEducation_url,class:t(e.page==="schedule"?"on":"")},"예정교육",10,q)])])])])])):n("v-if",!0),n(" 파트너쉽 "),u.subvisual==="subvisual_partnership"?(o(),a("div",z,[J,s("div",O,[s("div",j,[s("ul",null,[s("li",null,[s("a",{href:l(i).web_partnership_url,class:t(e.page==="partnership"?"on":"")},"파트너쉽",10,H)])])])])])):n("v-if",!0),n(" 모두의예체능 "),u.subvisual==="subvisual_app"?(o(),a("div",K,[Q,s("div",R,[s("div",T,[s("ul",null,[s("li",null,[s("a",{href:l(i).web_appIntro_url,class:t(e.page==="app"?"on":"")},"모두의예체능 APP",10,W)])])])])])):n("v-if",!0),n(" 고객센터 "),u.subvisual==="subvisual_notice"?(o(),a("div",X,[Y,s("div",Z,[s("div",$,[s("ul",null,[s("li",null,[s("a",{href:l(i).web_notices_url,class:t(e.page==="notice"?"on":"")},"공지사항",10,ss)]),s("li",null,[s("a",{href:l(i).web_consulting_url,class:t(e.page==="consulting"?"on":"")},"상담문의",10,es)]),s("li",null,[s("a",{onClick:d},"회사소개서 다운로드")]),s("li",null,[s("a",{href:l(i).web_photoGallery_url,class:t(e.page==="photo"?"on":"")},"포토 갤러리",10,ls)]),s("li",null,[s("a",{href:l(i).web_movieGallery_url,class:t(e.page==="movie"?"on":"")},"영상 갤러리",10,is)])])])])])):n("v-if",!0)],64))}},as=h(ts,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/LeftMenu.vue"]]);export{as as L};
