import{_ as I,u as P,r as w,o as L,C as u,a as V,b as s,c as l,e as i,d as o,j as h,t as n,k as r,F as m,i as v,l as j,g,s as y,f as B}from"./index-0557fe6c.js";const D={id:"wrapper"},E={id:"container",class:"sub_container"},M={id:"content"},N=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),$={key:0,class:"p_detail_wrap","data-aos-duration":"1000","data-aos-delay":"400"},F={class:"p_detail"},O={class:"detail_info"},R=o("span",{class:"deco"},"MOYE",-1),T={class:"thumb"},U=["src"],Y={class:"profile"},A={class:"profile_top"},G={class:"category"},q={class:"profile_en"},z={key:0},H=o("span",null,"有炳水",-1),J={class:"about"},K={key:0},Q=o("span",null,"생년월일",-1),W={key:1},X=o("span",null,"연락처",-1),Z={key:2},ee=o("span",null,"성별",-1),oe={key:3},te=o("span",null,"E-MAIL",-1),se={key:4,class:"full"},le=o("span",null,"메모",-1),ie={class:"detail_cv"},ne={key:0,class:"deco"},pe={key:1},ae={class:"detail_cv_list"},_e={class:"detail_btn_wrap"},ce={class:""},re=["href"],de={__name:"People",setup(fe){const b=P(),e=w({people:null,profileSection:[],profileInfo:[]});L(()=>{C()});const k=g.api_file,C=()=>{u(!0);const d=b.params.people,t={method:"get",url:g.api_admin_detail_people+`/${d}`,data:{},callback:c=>a(c),admin:"Y"};V(t);const a=c=>{let f=c.headers.result_code;if(f===y.success||f===y.noData){let S=c.data.result_info;e.people=S,e.people.profile_info.length!==0&&x(e.people.profile_info),u(!1)}else B("log",c),u(!1)}},x=d=>{const p=d,_=p.length;if(p){for(let t=0;t<_;t++)e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<_;t++)if(e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length!==0){const a=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],c={parentIdx:a.idx,profileType:a.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,c]}}};return(d,p)=>(s(),l("div",D,[i(" 서브컨텐츠     //S"),o("div",E,[o("div",M,[N,e.people?(s(),l("div",$,[i(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",F,[o("div",O,[R,o("div",T,[o("img",{style:{"background-color":"#eee"},src:e.people.file_info.length!==0?`${h(k)}${e.people.file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,U)]),o("div",Y,[o("div",A,[o("h5",null,n(e.people.name_ko),1),o("div",G,[o("span",null,n(e.people.category_child_name_ko),1),o("span",null,n(e.people.people_type),1)])]),o("p",q,[e.people.name_en?(s(),l("span",z,n(e.people.name_en),1)):i("v-if",!0),r(" / "),H]),o("div",J,[e.people.birth?(s(),l("p",K,[Q,r(n(e.people.birth),1)])):i("v-if",!0),e.people.mobile?(s(),l("p",W,[X,r(n(e.people.mobile),1)])):i("v-if",!0),e.people.gender?(s(),l("p",Z,[ee,r(n(e.people.gender),1)])):i("v-if",!0),e.people.email?(s(),l("p",oe,[te,r(n(e.people.email),1)])):i("v-if",!0),e.people.people_memo?(s(),l("p",se,[le,r(n(e.people.people_memo),1)])):i("v-if",!0)])])]),o("div",ie,[i(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",ne,n(e.people.name_ko),1)):i("v-if",!0),e.profileSection.length!==0?(s(),l("div",pe,[(s(!0),l(m,null,v(e.profileSection,_=>(s(),l("div",ae,[o("h6",null,n(_.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===_.idx).length!==0?(s(!0),l(m,{key:0},v(e.profileInfo.filter(t=>t.parentIdx===_.idx),t=>(s(),l("li",null,n(t.profileContent),1))),256)):i("v-if",!0)])]))),256))])):i("v-if",!0)])]),o("div",_e,[o("div",ce,[o("a",{href:h(j).web_people_url,class:"detail_btn"},"목록으로 가기 ",8,re)])])])):i("v-if",!0)])])]))}},he=I(de,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/peoples/People.vue"]]);export{he as default};
