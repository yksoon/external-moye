import{_ as V,u as L,x as w,r as j,o as B,C as h,a as D,b as s,c as l,g as i,d as o,j as M,e as m,t as n,f as d,F as v,m as g,i as b,s as y,h as N}from"./index-5cf0a388.js";import{L as E}from"./LeftMenu-7f4908c6.js";const R={id:"wrapper"},$={id:"container",class:"sub_container"},F={id:"content"},O=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),T={key:0,class:"p_detail_wrap"},U={class:"p_detail"},Y={class:"detail_info"},A=o("span",{class:"deco"},"MOYE",-1),G={class:"thumb"},q=["src"],z={class:"profile"},H={class:"profile_top"},J={class:"category"},K={class:"profile_en"},Q={key:0},W={key:1},X={key:2},Z={class:"about"},ee={key:0},oe=o("span",null,"생년월일",-1),te={key:1},se=o("span",null,"연락처",-1),le={key:2},ie=o("span",null,"성별",-1),ne={key:3},pe=o("span",null,"E-MAIL",-1),ae={key:4,class:"full"},_e=o("span",null,"메모",-1),ce={class:"detail_cv"},re={key:0,class:"deco"},de={key:1},fe={class:"detail_cv_list"},ue={class:"detail_btn_wrap"},he={class:""},me={__name:"People",setup(ve){const k=L(),C=w(),e=j({people:null,profileSection:[],profileInfo:[]});B(()=>{S()});const x=b.api_file,S=()=>{h(!0);const a=k.params.people,t={method:"get",url:b.api_admin_detail_people+`/${a}`,data:{},callback:r=>_(r),admin:"Y"};D(t);const _=r=>{let f=r.headers.result_code;if(f===y.success||f===y.noData){let P=r.data.result_info;e.people=P,e.people.profile_info.length!==0&&I(e.people.profile_info),h(!1)}else N("log",r),h(!1)}},I=a=>{const p=a,c=p.length;if(p){for(let t=0;t<c;t++)e.profileSection.filter(_=>_.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<c;t++)if(e.profileSection.filter(_=>_.sectionCode===p[t].profile_type_cd).length!==0){const _=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],r={parentIdx:_.idx,profileType:_.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,r]}}},u=a=>!!(a&&a.length>0&&a!==" "&&a!=="null");return(a,p)=>(s(),l("div",R,[i(" 서브컨텐츠     //S"),o("div",$,[M(E,{subvisual:"subvisual_people",page:"people"}),o("div",F,[O,e.people?(s(),l("div",T,[i(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",U,[o("div",Y,[A,o("div",G,[o("img",{style:{"background-color":"#eee"},src:e.people.file_info.length?`${m(x)}${e.people.file_info[0].file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,q)]),o("div",z,[o("div",H,[o("h5",null,n(e.people.name_ko),1),o("div",J,[o("span",null,n(e.people.category_child_name_ko),1),o("span",null,n(e.people.people_type),1)])]),o("p",K,[e.people.name_cn?(s(),l("span",Q,n(e.people.name_cn),1)):i("v-if",!0),e.people.name_cn&&e.people.name_en?(s(),l("span",W," / ")):i("v-if",!0),e.people.name_en?(s(),l("span",X,n(e.people.name_en),1)):i("v-if",!0)]),o("div",Z,[e.people.birth?(s(),l("p",ee,[oe,d(n(e.people.birth),1)])):i("v-if",!0),u(e.people.mobile1)&&u(e.people.mobile2)&&u(e.people.mobile3)?(s(),l("p",te,[se,d(n(e.people.mobile1)+"-"+n(e.people.mobile2)+"-"+n(e.people.mobile3),1)])):i("v-if",!0),e.people.gender?(s(),l("p",le,[ie,d(n(e.people.gender),1)])):i("v-if",!0),e.people.email?(s(),l("p",ne,[pe,d(n(e.people.email),1)])):i("v-if",!0),e.people.people_memo?(s(),l("p",ae,[_e,d(n(e.people.people_memo),1)])):i("v-if",!0)])])]),o("div",ce,[i(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",re,n(e.people.name_ko),1)):i("v-if",!0),e.profileSection.length!==0?(s(),l("div",de,[(s(!0),l(v,null,g(e.profileSection,c=>(s(),l("div",fe,[o("h6",null,n(c.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===c.idx).length!==0?(s(!0),l(v,{key:0},g(e.profileInfo.filter(t=>t.parentIdx===c.idx),t=>(s(),l("li",null,n(t.profileContent),1))),256)):i("v-if",!0)])]))),256))])):i("v-if",!0)])]),o("div",ue,[o("div",he,[o("a",{onClick:p[0]||(p[0]=()=>m(C).go(-1)),class:"detail_btn"},"목록으로 가기 ")])])])):i("v-if",!0)])])]))}},ye=V(me,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/People.vue"]]);export{ye as default};
