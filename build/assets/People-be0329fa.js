import{_ as S,u as I,r as P,o as w,C as u,a as L,b as s,c as l,e as n,d as o,q as V,t as i,l as r,F as h,k as m,g as v,s as g,f as B}from"./index-7989a54d.js";const D={id:"wrapper"},$={id:"container",class:"sub_container"},j={id:"content"},E=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),M={key:0,class:"p_detail_wrap"},N={class:"p_detail"},F={class:"detail_info"},O=o("span",{class:"deco"},"MOYE",-1),R={class:"thumb"},T=["src"],U={class:"profile"},Y={class:"profile_top"},q={class:"category"},A={class:"profile_en"},G={key:0},z={key:1},H={key:2},J={class:"about"},K={key:0},Q=o("span",null,"생년월일",-1),W={key:1},X=o("span",null,"연락처",-1),Z={key:2},ee=o("span",null,"성별",-1),oe={key:3},te=o("span",null,"E-MAIL",-1),se={key:4,class:"full"},le=o("span",null,"메모",-1),ne={class:"detail_cv"},ie={key:0,class:"deco"},pe={key:1},_e={class:"detail_cv_list"},ae={class:"detail_btn_wrap"},ce={class:""},re={__name:"People",setup(de){const y=I(),e=P({people:null,profileSection:[],profileInfo:[]});w(()=>{b()});const k=v.api_file,b=()=>{u(!0);const d=y.params.people,t={method:"get",url:v.api_admin_detail_people+`/${d}`,data:{},callback:c=>_(c),admin:"Y"};L(t);const _=c=>{let f=c.headers.result_code;if(f===g.success||f===g.noData){let x=c.data.result_info;e.people=x,e.people.profile_info.length!==0&&C(e.people.profile_info),u(!1)}else B("log",c),u(!1)}},C=d=>{const p=d,a=p.length;if(p){for(let t=0;t<a;t++)e.profileSection.filter(_=>_.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<a;t++)if(e.profileSection.filter(_=>_.sectionCode===p[t].profile_type_cd).length!==0){const _=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],c={parentIdx:_.idx,profileType:_.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,c]}}};return(d,p)=>(s(),l("div",D,[n(" 서브컨텐츠     //S"),o("div",$,[o("div",j,[E,e.people?(s(),l("div",M,[n(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",N,[o("div",F,[O,o("div",R,[o("img",{style:{"background-color":"#eee"},src:e.people.file_info.length!==0?`${V(k)}${e.people.file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,T)]),o("div",U,[o("div",Y,[o("h5",null,i(e.people.name_ko),1),o("div",q,[o("span",null,i(e.people.category_child_name_ko),1),o("span",null,i(e.people.people_type),1)])]),o("p",A,[e.people.name_en?(s(),l("span",G,i(e.people.name_en),1)):n("v-if",!0),e.people.name_en&&e.people.name_cn?(s(),l("span",z," / ")):n("v-if",!0),e.people.name_cn?(s(),l("span",H,i(e.people.name_en),1)):n("v-if",!0)]),o("div",J,[e.people.birth?(s(),l("p",K,[Q,r(i(e.people.birth),1)])):n("v-if",!0),e.people.mobile?(s(),l("p",W,[X,r(i(e.people.mobile),1)])):n("v-if",!0),e.people.gender?(s(),l("p",Z,[ee,r(i(e.people.gender),1)])):n("v-if",!0),e.people.email?(s(),l("p",oe,[te,r(i(e.people.email),1)])):n("v-if",!0),e.people.people_memo?(s(),l("p",se,[le,r(i(e.people.people_memo),1)])):n("v-if",!0)])])]),o("div",ne,[n(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",ie,i(e.people.name_ko),1)):n("v-if",!0),e.profileSection.length!==0?(s(),l("div",pe,[(s(!0),l(h,null,m(e.profileSection,a=>(s(),l("div",_e,[o("h6",null,i(a.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===a.idx).length!==0?(s(!0),l(h,{key:0},m(e.profileInfo.filter(t=>t.parentIdx===a.idx),t=>(s(),l("li",null,i(t.profileContent),1))),256)):n("v-if",!0)])]))),256))])):n("v-if",!0)])]),o("div",ae,[o("div",ce,[o("a",{onClick:p[0]||(p[0]=()=>this.$router.go(-1)),class:"detail_btn"},"목록으로 가기 ")])])])):n("v-if",!0)])])]))}},ue=S(re,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/People.vue"]]);export{ue as default};
