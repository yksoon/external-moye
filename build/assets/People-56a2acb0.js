import{_ as I,u as P,r as w,o as B,C as u,a as L,b as s,c as l,e as i,d as o,j as h,t as n,k as r,F as m,i as v,l as V,g,s as y,f as j}from"./index-7c8ef93c.js";const D={id:"wrapper"},E={id:"container",class:"sub_container"},M={id:"content"},N=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),Y={key:0,class:"p_detail_wrap","data-aos-duration":"1000","data-aos-delay":"400"},$={class:"p_detail"},F={class:"detail_info"},O=o("span",{class:"deco"},"MOYE",-1),R={class:"thumb"},T=["src"],U={class:"profile"},A={class:"profile_top"},G={class:"category"},q=o("p",{class:"profile_en"},[o("span",null,"You Byeong Soo"),r(" / "),o("span",null,"有炳水")],-1),z={class:"about"},H={key:0},J=o("span",null,"생년월일",-1),K={key:1},Q=o("span",null,"연락처",-1),W={key:2},X=o("span",null,"성별",-1),Z={key:3},ee=o("span",null,"E-MAIL",-1),oe={key:4,class:"full"},te=o("span",null,"메모",-1),se={class:"detail_cv"},le={key:0,class:"deco"},ie={key:1},ne={class:"detail_cv_list"},pe={class:"detail_btn_wrap"},ae={class:""},_e=["href"],ce={__name:"People",setup(re){const b=P(),e=w({people:null,profileSection:[],profileInfo:[]});B(()=>{C()});const k=g.api_file,C=()=>{u(!0);const d=b.params.people,t={method:"get",url:g.api_admin_detail_people+`/${d}`,data:{},callback:c=>a(c),admin:"Y"};L(t);const a=c=>{let f=c.headers.result_code;if(f===y.success||f===y.noData){let x=c.data.result_info;e.people=x,e.people.profile_info.length!==0&&S(e.people.profile_info),u(!1)}else j("log",c),u(!1)}},S=d=>{const p=d,_=p.length;if(p){for(let t=0;t<_;t++)e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<_;t++)if(e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length!==0){const a=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],c={parentIdx:a.idx,profileType:a.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,c]}}};return(d,p)=>(s(),l("div",D,[i(" 서브컨텐츠     //S"),o("div",E,[o("div",M,[N,e.people?(s(),l("div",Y,[i(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",$,[o("div",F,[O,o("div",R,[o("img",{style:{"background-color":"#eee"},src:e.people.file_info.length!==0?`${h(k)}${e.people.file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,T)]),o("div",U,[o("div",A,[o("h5",null,n(e.people.name_ko),1),o("div",G,[o("span",null,n(e.people.category_child_name_ko),1),o("span",null,n(e.people.people_type),1)])]),q,o("div",z,[e.people.birth?(s(),l("p",H,[J,r(n(e.people.birth),1)])):i("v-if",!0),e.people.mobile?(s(),l("p",K,[Q,r(n(e.people.mobile),1)])):i("v-if",!0),e.people.gender?(s(),l("p",W,[X,r(n(e.people.gender),1)])):i("v-if",!0),e.people.email?(s(),l("p",Z,[ee,r(n(e.people.email),1)])):i("v-if",!0),e.people.people_memo?(s(),l("p",oe,[te,r(n(e.people.people_memo),1)])):i("v-if",!0)])])]),o("div",se,[i(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",le,n(e.people.name_ko),1)):i("v-if",!0),e.profileSection.length!==0?(s(),l("div",ie,[(s(!0),l(m,null,v(e.profileSection,_=>(s(),l("div",ne,[o("h6",null,n(_.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===_.idx).length!==0?(s(!0),l(m,{key:0},v(e.profileInfo.filter(t=>t.parentIdx===_.idx),t=>(s(),l("li",null,n(t.profileContent),1))),256)):i("v-if",!0)])]))),256))])):i("v-if",!0)])]),o("div",pe,[o("div",ae,[o("a",{href:h(V).web_people_url,class:"detail_btn"},"목록으로 가기 ",8,_e)])])])):i("v-if",!0)])])]))}},fe=I(ce,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/peoples/People.vue"]]);export{fe as default};
