import{_ as I,u as P,r as w,o as L,C as u,a as V,b as s,c as l,e as n,d as o,v as h,t as i,n as r,F as m,l as v,x as B,g as y,s as g,f as D}from"./index-e0b6bbd1.js";const j={id:"wrapper"},E={id:"container",class:"sub_container"},M={id:"content"},N=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),$={key:0,class:"p_detail_wrap","data-aos-duration":"1000","data-aos-delay":"400"},F={class:"p_detail"},O={class:"detail_info"},R=o("span",{class:"deco"},"MOYE",-1),T={class:"thumb"},U=["src"],Y={class:"profile"},A={class:"profile_top"},G={class:"category"},q={class:"profile_en"},z={key:0},H={key:1},J={key:2},K={class:"about"},Q={key:0},W=o("span",null,"생년월일",-1),X={key:1},Z=o("span",null,"연락처",-1),ee={key:2},oe=o("span",null,"성별",-1),te={key:3},se=o("span",null,"E-MAIL",-1),le={key:4,class:"full"},ne=o("span",null,"메모",-1),ie={class:"detail_cv"},pe={key:0,class:"deco"},ae={key:1},_e={class:"detail_cv_list"},ce={class:"detail_btn_wrap"},re={class:""},de=["href"],fe={__name:"People",setup(ue){const k=P(),e=w({people:null,profileSection:[],profileInfo:[]});L(()=>{C()});const b=y.api_file,C=()=>{u(!0);const d=k.params.people,t={method:"get",url:y.api_admin_detail_people+`/${d}`,data:{},callback:c=>a(c),admin:"Y"};V(t);const a=c=>{let f=c.headers.result_code;if(f===g.success||f===g.noData){let S=c.data.result_info;e.people=S,e.people.profile_info.length!==0&&x(e.people.profile_info),u(!1)}else D("log",c),u(!1)}},x=d=>{const p=d,_=p.length;if(p){for(let t=0;t<_;t++)e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<_;t++)if(e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length!==0){const a=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],c={parentIdx:a.idx,profileType:a.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,c]}}};return(d,p)=>(s(),l("div",j,[n(" 서브컨텐츠     //S"),o("div",E,[o("div",M,[N,e.people?(s(),l("div",$,[n(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",F,[o("div",O,[R,o("div",T,[o("img",{style:{"background-color":"#eee"},src:e.people.file_info.length!==0?`${h(b)}${e.people.file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,U)]),o("div",Y,[o("div",A,[o("h5",null,i(e.people.name_ko),1),o("div",G,[o("span",null,i(e.people.category_child_name_ko),1),o("span",null,i(e.people.people_type),1)])]),o("p",q,[e.people.name_en?(s(),l("span",z,i(e.people.name_en),1)):n("v-if",!0),e.people.name_en&&e.people.name_cn?(s(),l("span",H," / ")):n("v-if",!0),e.people.name_cn?(s(),l("span",J,i(e.people.name_en),1)):n("v-if",!0)]),o("div",K,[e.people.birth?(s(),l("p",Q,[W,r(i(e.people.birth),1)])):n("v-if",!0),e.people.mobile?(s(),l("p",X,[Z,r(i(e.people.mobile),1)])):n("v-if",!0),e.people.gender?(s(),l("p",ee,[oe,r(i(e.people.gender),1)])):n("v-if",!0),e.people.email?(s(),l("p",te,[se,r(i(e.people.email),1)])):n("v-if",!0),e.people.people_memo?(s(),l("p",le,[ne,r(i(e.people.people_memo),1)])):n("v-if",!0)])])]),o("div",ie,[n(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",pe,i(e.people.name_ko),1)):n("v-if",!0),e.profileSection.length!==0?(s(),l("div",ae,[(s(!0),l(m,null,v(e.profileSection,_=>(s(),l("div",_e,[o("h6",null,i(_.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===_.idx).length!==0?(s(!0),l(m,{key:0},v(e.profileInfo.filter(t=>t.parentIdx===_.idx),t=>(s(),l("li",null,i(t.profileContent),1))),256)):n("v-if",!0)])]))),256))])):n("v-if",!0)])]),o("div",ce,[o("div",re,[o("a",{href:h(B).web_peoples_url,class:"detail_btn"},"목록으로 가기 ",8,de)])])])):n("v-if",!0)])])]))}},me=I(fe,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/People.vue"]]);export{me as default};
