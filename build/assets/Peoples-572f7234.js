import{_ as R,u as U,j as Y,r as j,o as F,C as d,a as x,v as M,b as a,c as n,e as p,d as t,h as w,p as u,w as C,F as I,k as P,t as i,q as f,x as q,g as y,s as g,f as V,n as z}from"./index-5e9984de.js";import{L as E}from"./LeftMenu-5540c4cb.js";const G={id:"wrapper"},K={id:"container",class:"sub_container"},A={id:"content"},H=t("div",{id:"subtitle"},[t("h2",null,"코치진")],-1),J={key:0,class:"people_tab"},O=["href"],Q=["href"],T={key:1,class:"people_title"},W={key:2,class:"people_box"},X={class:"people"},Z=["href"],ee={class:"people_thumb"},se=t("span",null,null,-1),te=[se],oe={key:1,class:"bg-thumb"},ae={class:"caption"},ne={class:"info"},le={class:"name"},ce={class:"position"},ie={key:3,className:"pagenation"},re={__name:"Peoples",setup(_e){const v=U(),N=Y(null),e=j({categoryIdx:null,categoryList:[],peopleList:[],pageInfo:{}}),B=y.api_file;F(()=>{D(1,0,"")});const D=(c,l,r)=>{d(!0);const L={method:"post",url:y.api_admin_get_categories,data:{page_num:c,page_size:l,search_keyword:r,category_div:"000"},callback:o=>m(o),admin:"Y"};x(L);const m=o=>{let _=o.headers.result_code;if(_===g.success||_===g.noData){let h=o.data.result_info;e.categoryList=h,e.categoryIdx=v.params.category?v.params.category:null,b(1,z.people,"")}else V("log",o),d(!1)}},b=(c,l,r)=>{d(!0);const s=y.api_admin_list_people,k={page_num:c,page_size:l,search_keyword:r,category_idx:e.categoryIdx,show_yn:"Y"};x({method:"post",url:s,data:k,callback:o=>m(o),admin:"Y"});const m=o=>{let _=o.headers.result_code;if(_===g.success||_===g.noData){let h=o.data.result_info,$=o.data.page_info;e.peopleList=h,e.pageInfo=$,d(!1)}else V("log",o),d(!1)}},S=c=>{const l=N.value;b(c,z.people,l)};return(c,l)=>{const r=M("v-pagination");return a(),n("div",G,[p(" 서브컨텐츠     //S"),t("div",K,[w(E,{subvisual:"subvisual_people",page:"people"}),t("div",A,[H,t("div",null,[e.categoryList.length?(a(),n("ul",J,[t("li",null,[t("a",{href:u(f).web_peoples_url,class:C(e.categoryIdx?"":"on")},"전체",10,O)]),(a(!0),n(I,null,P(e.categoryList,s=>(a(),n("li",null,[t("a",{href:u(f).web_peoples_url+"/"+s.category_idx,class:C(e.categoryIdx==s.category_idx?"on":"")},i(s.category_name_ko),11,Q)]))),256))])):p("v-if",!0),e.categoryList.length?(a(),n("h3",T,i(e.categoryIdx?e.categoryList.filter(s=>s.category_idx==e.categoryIdx)[0].category_name_ko:"전체"),1)):p("v-if",!0),e.peopleList.length!==0?(a(),n("div",W,[(a(!0),n(I,null,P(e.peopleList,s=>(a(),n("div",X,[t("a",{href:`${u(f).web_peoples_url}/people/${s.people_idx}`},[t("div",ee,[s.file_path_enc?(a(),n("div",{key:0,class:"bg-thumb",style:q(`background-image:url('${u(B)}${s.file_path_enc}'); background-size:cover;`)},te,4)):(a(),n("div",oe)),t("div",ae,[t("p",null,i(s.subject),1),t("div",ne,[t("p",le,i(s.name_ko),1),t("span",ce,i(s.category_parent_name_ko)+" / "+i(s.category_child_name_ko),1)])])])],8,Z)]))),256))])):p("v-if",!0),e.peopleList.length!==0?(a(),n("div",ie,[w(r,{length:e.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:e.pageInfo.page_num,"onUpdate:modelValue":[l[0]||(l[0]=s=>e.pageInfo.page_num=s),S]},null,8,["length","modelValue"])])):p("v-if",!0)])])])])}}},ue=R(re,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{ue as default};
