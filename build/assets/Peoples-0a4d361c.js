import{_ as S,u as Y,l as C,r as E,o as F,C as p,a as I,v as T,b as a,c as n,g as l,d as s,j as P,e as u,w as V,F as z,m as B,t as r,q as f,i as v,s as g,h as N,p as $}from"./index-7dc6b772.js";import{L as q}from"./LeftMenu-3244ae55.js";const G={id:"wrapper"},K={id:"container",class:"sub_container"},Q={id:"content"},A=s("div",{id:"subtitle"},[s("h2",null,"코치진")],-1),H={key:0,class:"people_tab"},J=["href"],O=["href"],W={key:1,class:"people_title"},X={key:2,class:"people_box"},Z={class:"people"},ee=["href"],te={class:"people_thumb"},se={key:0,class:"bg-thumb"},oe=["src","alt"],ae={key:1,class:"bg-thumb-noimg"},ne={class:"caption"},le={class:"info"},ie={class:"name"},ce={class:"position"},re={key:3,className:"pagenation"},_e={__name:"Peoples",setup(de){const y=Y(),D=C(null),t=E({categoryIdx:null,categoryList:[],peopleList:[],pageInfo:{}}),U=v.api_file,b=C(7),k=()=>{const i=window.matchMedia("(max-width: 640px)");b.value=i.matches?3:7};window.addEventListener("resize",k),F(()=>{j(1,0,""),k()});const j=(i,c,_)=>{p(!0);const w={method:"post",url:v.api_admin_get_categories,data:{page_num:i,page_size:c,search_keyword:_,category_div:"000"},callback:o=>m(o),admin:"Y"};I(w);const m=o=>{let d=o.headers.result_code;if(d===g.success||d===g.noData){let h=o.data.result_info;t.categoryList=h,t.categoryIdx=y.params.category?y.params.category:null,L(1,$.people,"")}else N("log",o),p(!1)}},L=(i,c,_)=>{const e=v.api_admin_list_people,x={page_num:i,page_size:c,search_keyword:_,category_idx:t.categoryIdx,show_yn:"Y"};I({method:"post",url:e,data:x,callback:o=>m(o),admin:"Y"});const m=o=>{let d=o.headers.result_code;if(d===g.success||d===g.noData){let h=o.data.result_info,R=o.data.page_info;t.peopleList=h,t.pageInfo=R,p(!1)}else N("log",o),p(!1)}},M=i=>{p(!0);const c=D.value;L(i,$.people,c)};return(i,c)=>{const _=T("v-pagination");return a(),n("div",G,[l(" 서브컨텐츠     //S"),s("div",K,[P(q,{subvisual:"subvisual_people",page:"people"}),s("div",Q,[A,s("div",null,[t.categoryList.length?(a(),n("ul",H,[s("li",null,[s("a",{href:u(f).web_peoples_url,class:V(t.categoryIdx?"":"on")},"전체",10,J)]),(a(!0),n(z,null,B(t.categoryList,e=>(a(),n("li",null,[s("a",{href:u(f).web_peoples_url+"/"+e.category_idx,class:V(t.categoryIdx==e.category_idx?"on":"")},r(e.category_name_ko),11,O)]))),256))])):l("v-if",!0),t.categoryList.length?(a(),n("h3",W,r(t.categoryIdx?t.categoryList.filter(e=>e.category_idx==t.categoryIdx)[0].category_name_ko:"전체"),1)):l("v-if",!0),t.peopleList.length!==0?(a(),n("div",X,[(a(!0),n(z,null,B(t.peopleList,e=>(a(),n("div",Z,[s("a",{href:`${u(f).web_peoples_url}/people/${e.people_idx}`},[s("div",te,[l(` <div v-if="people.file_path_enc" class="bg-thumb"\r
                                        :style="\`background-image:url('\${fileBaseUrl}\${people.file_path_enc}'); background-size:cover;\`">\r
                                        <span></span>\r
                                    </div> `),l(" 프로필 이미지 있는 경우 "),e.file_path_enc?(a(),n("div",se,[s("img",{src:u(U)+e.file_path_enc,alt:`${e.name_ko} 프로필이미지`,loading:"lazy"},null,8,oe)])):l("v-if",!0),l(" 프로필 이미지 없을 경우 "),e.file_path_enc?l("v-if",!0):(a(),n("div",ae)),s("div",ne,[s("p",null,r(e.subject),1),s("div",le,[s("p",ie,r(e.name_ko),1),s("span",ce,r(e.category_parent_name_ko)+" / "+r(e.category_child_name_ko),1)])])])],8,ee)]))),256))])):l("v-if",!0),t.peopleList.length!==0?(a(),n("div",re,[P(_,{length:t.pageInfo.pages,"total-visible":b.value,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[c[0]||(c[0]=e=>t.pageInfo.page_num=e),M]},null,8,["length","total-visible","modelValue"])])):l("v-if",!0)])])])])}}},ge=S(_e,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{ge as default};
