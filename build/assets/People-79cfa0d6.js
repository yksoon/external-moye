import{_ as I,u as P,r as w,o as L,C as u,a as V,b as s,c as l,e as n,d as o,q as h,t as i,l as r,F as m,k as v,v as B,g,s as y,f as D}from"./index-ea1bb856.js";const j={id:"wrapper"},E={id:"container",class:"sub_container"},M={id:"content"},N=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),$={key:0,class:"p_detail_wrap"},F={class:"p_detail"},O={class:"detail_info"},R=o("span",{class:"deco"},"MOYE",-1),T={class:"thumb"},U=["src"],Y={class:"profile"},q={class:"profile_top"},A={class:"category"},G={class:"profile_en"},z={key:0},H={key:1},J={key:2},K={class:"about"},Q={key:0},W=o("span",null,"생년월일",-1),X={key:1},Z=o("span",null,"연락처",-1),ee={key:2},oe=o("span",null,"성별",-1),te={key:3},se=o("span",null,"E-MAIL",-1),le={key:4,class:"full"},ne=o("span",null,"메모",-1),ie={class:"detail_cv"},pe={key:0,class:"deco"},_e={key:1},ae={class:"detail_cv_list"},ce={class:"detail_btn_wrap"},re={class:""},de=["href"],fe={__name:"People",setup(ue){const k=P(),e=w({people:null,profileSection:[],profileInfo:[]});L(()=>{C()});const b=g.api_file,C=()=>{u(!0);const d=k.params.people,t={method:"get",url:g.api_admin_detail_people+`/${d}`,data:{},callback:c=>_(c),admin:"Y"};V(t);const _=c=>{let f=c.headers.result_code;if(f===y.success||f===y.noData){let S=c.data.result_info;e.people=S,e.people.profile_info.length!==0&&x(e.people.profile_info),u(!1)}else D("log",c),u(!1)}},x=d=>{const p=d,a=p.length;if(p){for(let t=0;t<a;t++)e.profileSection.filter(_=>_.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<a;t++)if(e.profileSection.filter(_=>_.sectionCode===p[t].profile_type_cd).length!==0){const _=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],c={parentIdx:_.idx,profileType:_.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,c]}}};return(d,p)=>(s(),l("div",j,[n(" 서브컨텐츠     //S"),o("div",E,[o("div",M,[N,e.people?(s(),l("div",$,[n(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",F,[o("div",O,[R,o("div",T,[o("img",{style:{"background-color":"#eee"},src:e.people.file_info.length!==0?`${h(b)}${e.people.file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,U)]),o("div",Y,[o("div",q,[o("h5",null,i(e.people.name_ko),1),o("div",A,[o("span",null,i(e.people.category_child_name_ko),1),o("span",null,i(e.people.people_type),1)])]),o("p",G,[e.people.name_en?(s(),l("span",z,i(e.people.name_en),1)):n("v-if",!0),e.people.name_en&&e.people.name_cn?(s(),l("span",H," / ")):n("v-if",!0),e.people.name_cn?(s(),l("span",J,i(e.people.name_en),1)):n("v-if",!0)]),o("div",K,[e.people.birth?(s(),l("p",Q,[W,r(i(e.people.birth),1)])):n("v-if",!0),e.people.mobile?(s(),l("p",X,[Z,r(i(e.people.mobile),1)])):n("v-if",!0),e.people.gender?(s(),l("p",ee,[oe,r(i(e.people.gender),1)])):n("v-if",!0),e.people.email?(s(),l("p",te,[se,r(i(e.people.email),1)])):n("v-if",!0),e.people.people_memo?(s(),l("p",le,[ne,r(i(e.people.people_memo),1)])):n("v-if",!0)])])]),o("div",ie,[n(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",pe,i(e.people.name_ko),1)):n("v-if",!0),e.profileSection.length!==0?(s(),l("div",_e,[(s(!0),l(m,null,v(e.profileSection,a=>(s(),l("div",ae,[o("h6",null,i(a.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===a.idx).length!==0?(s(!0),l(m,{key:0},v(e.profileInfo.filter(t=>t.parentIdx===a.idx),t=>(s(),l("li",null,i(t.profileContent),1))),256)):n("v-if",!0)])]))),256))])):n("v-if",!0)])]),o("div",ce,[o("div",re,[o("a",{href:h(B).web_peoples_url,class:"detail_btn"},"목록으로 가기 ",8,de)])])])):n("v-if",!0)])])]))}},me=I(fe,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/People.vue"]]);export{me as default};