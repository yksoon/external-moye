import{_ as $,u as j,j as R,r as U,o as Y,C as d,a as L,p as F,b as a,c as n,e as p,d as s,h as x,F as w,k as C,t as c,q as h,v as I,w as M,x as q,g as f,s as u,f as P,n as V}from"./index-7989a54d.js";import{L as E}from"./LeftMenu-7b0b2527.js";const G={id:"wrapper"},K={id:"container",class:"sub_container"},A={id:"content"},H=s("div",{id:"subtitle"},[s("h2",null,"코치진")],-1),J={key:0,class:"people_tab"},O=["href"],Q={key:1,class:"people_title"},T={key:2,class:"people_box"},W={class:"people"},X=["href"],Z={class:"people_thumb"},ee=s("span",null,null,-1),te=[ee],se={key:1,class:"bg-thumb"},oe={class:"caption"},ae={class:"info"},ne={class:"name"},le={class:"position"},ie={key:3,style:{display:"flex","justify-content":"center"}},ce=s("b",null," 데이터가 없습니다. ",-1),re=[ce],_e={key:4,className:"pagenation"},de={__name:"Peoples",setup(pe){const y=j(),z=R(null),e=U({categoryIdx:null,categoryList:[],peopleList:[],pageInfo:{}}),N=f.api_file;Y(()=>{B(1,0,"")});const B=(i,l,r)=>{d(!0);const k={method:"post",url:f.api_admin_get_categories,data:{page_num:i,page_size:l,search_keyword:r,category_div:"000"},callback:o=>g(o),admin:"Y"};L(k);const g=o=>{let _=o.headers.result_code;if(_===u.success||_===u.noData){let m=o.data.result_info;e.categoryList=m,e.categoryIdx=y.params.category?y.params.category:e.categoryList[0].category_idx,v(1,V.people,"")}else P("log",o),d(!1)}},v=(i,l,r)=>{d(!0);const t=f.api_admin_list_people,b={page_num:i,page_size:l,search_keyword:r,category_idx:e.categoryIdx,show_yn:"Y"};L({method:"post",url:t,data:b,callback:o=>g(o),admin:"Y"});const g=o=>{let _=o.headers.result_code;if(_===u.success||_===u.noData){let m=o.data.result_info,S=o.data.page_info;e.peopleList=m,e.pageInfo=S,d(!1)}else P("log",o),d(!1)}},D=i=>{const l=z.value;v(i,V.people,l)};return(i,l)=>{const r=F("v-pagination");return a(),n("div",G,[p(" 서브컨텐츠     //S"),s("div",K,[x(E,{subvisual:"subvisual_people",page:"people"}),s("div",A,[H,s("div",null,[e.categoryList.length?(a(),n("ul",J,[(a(!0),n(w,null,C(e.categoryList,t=>(a(),n("li",null,[s("a",{href:h(I).web_peoples_url+"/"+t.category_idx,class:M(e.categoryIdx==t.category_idx?"on":"")},c(t.category_name_ko),11,O)]))),256))])):p("v-if",!0),e.categoryList.length?(a(),n("h3",Q,c(e.categoryList.filter(t=>t.category_idx==e.categoryIdx)[0].category_name_ko),1)):p("v-if",!0),e.peopleList.length!==0?(a(),n("div",T,[(a(!0),n(w,null,C(e.peopleList,t=>(a(),n("div",W,[s("a",{href:`${h(I).web_peoples_url}/people/${t.people_idx}`},[s("div",Z,[t.file_path_enc?(a(),n("div",{key:0,class:"bg-thumb",style:q(`background-image:url('${h(N)}${t.file_path_enc}'); background-size:cover;`)},te,4)):(a(),n("div",se)),s("div",oe,[s("p",null,c(t.subject),1),s("div",ae,[s("p",ne,c(t.name_ko),1),s("span",le,c(t.category_parent_name_ko)+" / "+c(t.category_child_name_ko),1)])])])],8,X)]))),256))])):(a(),n("div",ie,re)),e.peopleList.length!==0?(a(),n("div",_e,[x(r,{length:e.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:e.pageInfo.page_num,"onUpdate:modelValue":[l[0]||(l[0]=t=>e.pageInfo.page_num=t),D]},null,8,["length","modelValue"])])):p("v-if",!0)])])])])}}},me=$(de,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{me as default};
