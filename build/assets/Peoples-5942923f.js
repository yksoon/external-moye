import{_ as U,u as Y,l as C,r as E,o as F,C as d,a as I,v as T,b as a,c as n,g as p,d as s,j as P,e as u,w as V,F as z,m as N,t as c,q as f,x as q,i as y,s as g,h as B,p as D}from"./index-f570b778.js";import{L as G}from"./LeftMenu-4ccdc0b4.js";const K={id:"wrapper"},Q={id:"container",class:"sub_container"},A={id:"content"},H=s("div",{id:"subtitle"},[s("h2",null,"코치진")],-1),J={key:0,class:"people_tab"},O=["href"],W=["href"],X={key:1,class:"people_title"},Z={key:2,class:"people_box"},ee={class:"people"},te=["href"],se={class:"people_thumb"},oe=s("span",null,null,-1),ae=[oe],ne={key:1,class:"bg-thumb"},le={class:"caption"},ie={class:"info"},ce={class:"name"},re={class:"position"},_e={key:3,className:"pagenation"},de={__name:"Peoples",setup(pe){const v=Y(),S=C(null),e=E({categoryIdx:null,categoryList:[],peopleList:[],pageInfo:{}}),$=y.api_file,b=C(7),k=()=>{const l=window.matchMedia("(max-width: 640px)");b.value=l.matches?4:7};window.addEventListener("resize",k),F(()=>{j(1,0,""),k()});const j=(l,i,r)=>{d(!0);const w={method:"post",url:y.api_admin_get_categories,data:{page_num:l,page_size:i,search_keyword:r,category_div:"000"},callback:o=>m(o),admin:"Y"};I(w);const m=o=>{let _=o.headers.result_code;if(_===g.success||_===g.noData){let h=o.data.result_info;e.categoryList=h,e.categoryIdx=v.params.category?v.params.category:null,x(1,D.people,"")}else B("log",o),d(!1)}},x=(l,i,r)=>{d(!0);const t=y.api_admin_list_people,L={page_num:l,page_size:i,search_keyword:r,category_idx:e.categoryIdx,show_yn:"Y"};I({method:"post",url:t,data:L,callback:o=>m(o),admin:"Y"});const m=o=>{let _=o.headers.result_code;if(_===g.success||_===g.noData){let h=o.data.result_info,R=o.data.page_info;e.peopleList=h,e.pageInfo=R,d(!1)}else B("log",o),d(!1)}},M=l=>{const i=S.value;x(l,D.people,i)};return(l,i)=>{const r=T("v-pagination");return a(),n("div",K,[p(" 서브컨텐츠     //S"),s("div",Q,[P(G,{subvisual:"subvisual_people",page:"people"}),s("div",A,[H,s("div",null,[e.categoryList.length?(a(),n("ul",J,[s("li",null,[s("a",{href:u(f).web_peoples_url,class:V(e.categoryIdx?"":"on")},"전체",10,O)]),(a(!0),n(z,null,N(e.categoryList,t=>(a(),n("li",null,[s("a",{href:u(f).web_peoples_url+"/"+t.category_idx,class:V(e.categoryIdx==t.category_idx?"on":"")},c(t.category_name_ko),11,W)]))),256))])):p("v-if",!0),e.categoryList.length?(a(),n("h3",X,c(e.categoryIdx?e.categoryList.filter(t=>t.category_idx==e.categoryIdx)[0].category_name_ko:"전체"),1)):p("v-if",!0),e.peopleList.length!==0?(a(),n("div",Z,[(a(!0),n(z,null,N(e.peopleList,t=>(a(),n("div",ee,[s("a",{href:`${u(f).web_peoples_url}/people/${t.people_idx}`},[s("div",se,[t.file_path_enc?(a(),n("div",{key:0,class:"bg-thumb",style:q(`background-image:url('${u($)}${t.file_path_enc}'); background-size:cover;`)},ae,4)):(a(),n("div",ne)),s("div",le,[s("p",null,c(t.subject),1),s("div",ie,[s("p",ce,c(t.name_ko),1),s("span",re,c(t.category_parent_name_ko)+" / "+c(t.category_child_name_ko),1)])])])],8,te)]))),256))])):p("v-if",!0),e.peopleList.length!==0?(a(),n("div",_e,[P(r,{length:e.pageInfo.pages,"total-visible":b.value,rounded:"2",modelValue:e.pageInfo.page_num,"onUpdate:modelValue":[i[0]||(i[0]=t=>e.pageInfo.page_num=t),M]},null,8,["length","total-visible","modelValue"])])):p("v-if",!0)])])])])}}},me=U(de,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{me as default};
