import{_ as P,u as L,y as w,r as V,o as j,C as u,a as B,b as s,c as l,g as i,d as o,j as D,e as h,t as n,f as r,F as m,m as v,i as g,s as y,h as M}from"./index-5ed6ca0f.js";import{L as N}from"./LeftMenu-34bcbbbf.js";const E={id:"wrapper"},R={id:"container",class:"sub_container"},$={id:"content"},F=o("div",{id:"subtitle"},[o("h2",null,"코치진")],-1),O={key:0,class:"p_detail_wrap"},T={class:"p_detail"},U={class:"detail_info"},Y=o("span",{class:"deco"},"MOYE",-1),A={class:"thumb"},G=["src"],q={class:"profile"},z={class:"profile_top"},H={class:"category"},J={class:"profile_en"},K={key:0},Q={key:1},W={key:2},X={class:"about"},Z={key:0},ee=o("span",null,"생년월일",-1),oe={key:1},te=o("span",null,"연락처",-1),se={key:2},le=o("span",null,"성별",-1),ie={key:3},ne=o("span",null,"E-MAIL",-1),pe={key:4,class:"full"},ae=o("span",null,"메모",-1),_e={class:"detail_cv"},ce={key:0,class:"deco"},re={key:1},de={class:"detail_cv_list"},fe={class:"detail_btn_wrap"},ue={class:""},he={__name:"People",setup(me){const b=L(),k=w(),e=V({people:null,profileSection:[],profileInfo:[]});j(()=>{x()});const C=g.api_file,x=()=>{u(!0);const d=b.params.people,t={method:"get",url:g.api_admin_detail_people+`/${d}`,data:{},callback:c=>a(c),admin:"Y"};B(t);const a=c=>{let f=c.headers.result_code;if(f===y.success||f===y.noData){let I=c.data.result_info;e.people=I,e.people.profile_info.length!==0&&S(e.people.profile_info),u(!1)}else M("log",c),u(!1)}},S=d=>{const p=d,_=p.length;if(p){for(let t=0;t<_;t++)e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length===0&&(e.profileSection=[...e.profileSection,{idx:t,sectionCode:p[t].profile_type_cd,sectionValue:p[t].profile_type}]);for(let t=0;t<_;t++)if(e.profileSection.filter(a=>a.sectionCode===p[t].profile_type_cd).length!==0){const a=e.profileSection.filter(f=>f.sectionCode===p[t].profile_type_cd)[0],c={parentIdx:a.idx,profileType:a.sectionCode,profileContent:p[t].profile_content,inputIdx:t+1};e.profileInfo=[...e.profileInfo,c]}}};return(d,p)=>(s(),l("div",E,[i(" 서브컨텐츠     //S"),o("div",R,[D(N,{subvisual:"subvisual_people",page:"people"}),o("div",$,[F,e.people?(s(),l("div",O,[i(' <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> '),o("div",T,[o("div",U,[Y,o("div",A,[o("img",{style:{"background-color":"#eee"},src:e.people.file_info.length?`${h(C)}${e.people.file_info[0].file_path_enc}`:"/img/web/sub/default_full.jpg"},null,8,G)]),o("div",q,[o("div",z,[o("h5",null,n(e.people.name_ko),1),o("div",H,[o("span",null,n(e.people.category_child_name_ko),1),o("span",null,n(e.people.people_type),1)])]),o("p",J,[e.people.name_cn?(s(),l("span",K,n(e.people.name_cn),1)):i("v-if",!0),e.people.name_cn&&e.people.name_en?(s(),l("span",Q," / ")):i("v-if",!0),e.people.name_en?(s(),l("span",W,n(e.people.name_en),1)):i("v-if",!0)]),o("div",X,[e.people.birth?(s(),l("p",Z,[ee,r(n(e.people.birth),1)])):i("v-if",!0),e.people.mobile1&&e.people.mobile2&&e.people.mobile3?(s(),l("p",oe,[te,r(n(e.people.mobile1)+"-"+n(e.people.mobile2)+"-"+n(e.people.mobile3),1)])):i("v-if",!0),e.people.gender?(s(),l("p",se,[le,r(n(e.people.gender),1)])):i("v-if",!0),e.people.email?(s(),l("p",ie,[ne,r(n(e.people.email),1)])):i("v-if",!0),e.people.people_memo?(s(),l("p",pe,[ae,r(n(e.people.people_memo),1)])):i("v-if",!0)])])]),o("div",_e,[i(" 프로필 없으면 보이게 "),e.profileSection.length===0?(s(),l("span",ce,n(e.people.name_ko),1)):i("v-if",!0),e.profileSection.length!==0?(s(),l("div",re,[(s(!0),l(m,null,v(e.profileSection,_=>(s(),l("div",de,[o("h6",null,n(_.sectionValue),1),o("ul",null,[e.profileInfo.filter(t=>t.parentIdx===_.idx).length!==0?(s(!0),l(m,{key:0},v(e.profileInfo.filter(t=>t.parentIdx===_.idx),t=>(s(),l("li",null,n(t.profileContent),1))),256)):i("v-if",!0)])]))),256))])):i("v-if",!0)])]),o("div",fe,[o("div",ue,[o("a",{onClick:p[0]||(p[0]=()=>h(k).go(-1)),class:"detail_btn"},"목록으로 가기 ")])])])):i("v-if",!0)])])]))}},ye=P(he,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/People.vue"]]);export{ye as default};
