import{_ as S,u as I,r as P,o as L,C as u,a as w,b as s,c as l,e as n,d as o,h as V,p as B,t as i,l as r,F as h,k as m,g as v,s as g,f as D}from"./index-c8387cb8.js";import{L as M}from"./LeftMenu-4ebf1af5.js";const N={id:"wrapper"},$={id:"container",class:"sub_container"},j={id:"content"},E=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),F={key:0,class:"p_detail_wrap"},O={class:"p_detail"},R={class:"detail_info"},T=o("span",{class:"deco"},"MOYE",-1),U={class:"thumb"},Y=["src"],A={class:"profile"},G={class:"profile_top"},q={class:"category"},z={class:"profile_en"},H={key:0},J={key:1},K={key:2},Q={class:"about"},W={key:0},X=o("span",null,"생년월일",-1),Z={key:1},ee=o("span",null,"연락처",-1),oe={key:2},te=o("span",null,"성별",-1),se={key:3},le=o("span",null,"E-MAIL",-1),ne={key:4,class:"full"},ie=o("span",null,"메모",-1),pe={class:"detail_cv"},ae={key:0,class:"deco"},_e={key:1},ce={class:"detail_cv_list"},re={class:"detail_btn_wrap"},de={class:""},fe={__name:"People",setup(ue){const y=I(),e=P({people:null,profileSection:[],profileInfo:[]});L(()=>{b()});const k=v.api_file,b=()=>{u(!0);const d=y.params.people,t={method:"get",url:v.api_admin_detail_people+`/${d}`,data:{},callback:c=>a(c),admin:"Y"};w(t);const a=c=>{let f=c.headers.result_code;if(f===g.success||f===g.noData){let x=c.data.result_info;e.people=x,e.people.profile_info.length!==0&&C(e.people.profile_info),u(!1)}else D("log",c),u(!1)}},C=d=>{const p=d,_=p.length;if(p){for(let t=0;t<_;t++)e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<_;t++)if(e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length!==0){const a=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],c={parentIdx:a.idx,profileType:a.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,c]}}};return(d,p)=>(s(),l("div",N,[n(" 서브컨텐츠     //S"),o("div",$,[V(M,{subvisual:"subvisual_people",page:"people"}),o("div",j,[E,e.people?(s(),l("div",F,[n(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",O,[o("div",R,[T,o("div",U,[o("img",{style:{"background-color":"#eee"},src:e.people.file_path_enc.length!==0?`${B(k)}${e.people.file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,Y)]),o("div",A,[o("div",G,[o("h5",null,i(e.people.name_ko),1),o("div",q,[o("span",null,i(e.people.category_child_name_ko),1),o("span",null,i(e.people.people_type),1)])]),o("p",z,[e.people.name_en?(s(),l("span",H,i(e.people.name_en),1)):n("v-if",!0),e.people.name_en&&e.people.name_cn?(s(),l("span",J," / ")):n("v-if",!0),e.people.name_cn?(s(),l("span",K,i(e.people.name_en),1)):n("v-if",!0)]),o("div",Q,[e.people.birth?(s(),l("p",W,[X,r(i(e.people.birth),1)])):n("v-if",!0),e.people.mobile?(s(),l("p",Z,[ee,r(i(e.people.mobile),1)])):n("v-if",!0),e.people.gender?(s(),l("p",oe,[te,r(i(e.people.gender),1)])):n("v-if",!0),e.people.email?(s(),l("p",se,[le,r(i(e.people.email),1)])):n("v-if",!0),e.people.people_memo?(s(),l("p",ne,[ie,r(i(e.people.people_memo),1)])):n("v-if",!0)])])]),o("div",pe,[n(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",ae,i(e.people.name_ko),1)):n("v-if",!0),e.profileSection.length!==0?(s(),l("div",_e,[(s(!0),l(h,null,m(e.profileSection,_=>(s(),l("div",ce,[o("h6",null,i(_.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===_.idx).length!==0?(s(!0),l(h,{key:0},m(e.profileInfo.filter(t=>t.parentIdx===_.idx),t=>(s(),l("li",null,i(t.profileContent),1))),256)):n("v-if",!0)])]))),256))])):n("v-if",!0)])]),o("div",re,[o("div",de,[o("a",{onClick:p[0]||(p[0]=()=>this.$route.go(-1)),class:"detail_btn"},"목록으로 가기 ")])])])):n("v-if",!0)])])]))}},ve=S(fe,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/People.vue"]]);export{ve as default};
