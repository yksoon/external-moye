import{_ as P,u as V,j as I,r as N,o as S,C as r,a as B,p as $,b as o,c as a,e as d,d as e,h as u,F as j,k as z,i as D,q as h,v as R,w as U,t as i,g as m,s as g,f as F,n as M}from"./index-cd813bc6.js";import{L as Y}from"./LeftMenu-b85ae142.js";const q={id:"wrapper"},E={id:"container",class:"sub_container"},G={id:"content"},K=e("div",{id:"subtitle"},[e("h2",null,"코치진")],-1),A=D('<ul class="people_tab"><li><a href="">스포츠</a></li><li><a href="">음악</a></li><li><a href="">댄스/무용/바둑</a></li><li><a href="">팀/아카데미</a></li></ul><h3 class="people_title">스포츠</h3>',2),H={key:0,class:"people_box"},J={class:"people"},O=["href"],Q={class:"people_thumb"},T=e("span",null,null,-1),W=[T],X={key:1,class:"bg-thumb"},Z={class:"caption"},ee={class:"info"},se={class:"name"},te={class:"position"},oe={key:1,style:{display:"flex","justify-content":"center"}},ae=e("b",null," 데이터가 없습니다. ",-1),ne=[ae],le={key:2,className:"pagenation"},ie={__name:"Peoples",setup(ce){const f=V().params.category,v=I(null),t=N({categoryList:[],peopleList:[],pageInfo:{}}),b=m.api_file;S(()=>{y(1,M.people,"")});const y=(c,l,_)=>{r(!0);const L={method:"post",url:m.api_admin_list_people,data:{page_num:c,page_size:l,search_keyword:_,category_idx:f,show_yn:"Y"},callback:n=>C(n),admin:"Y"};B(L);const C=n=>{let p=n.headers.result_code;if(p===g.success||p===g.noData){let w=n.data.result_info,x=n.data.page_info;t.peopleList=w,t.pageInfo=x,r(!1)}else F("log",n),r(!1)}},k=c=>{v.value};return(c,l)=>{const _=$("v-pagination");return o(),a("div",q,[d(" 서브컨텐츠     //S"),e("div",E,[u(Y,{subvisual:"subvisual_people",page:"people"}),e("div",G,[K,e("div",null,[A,t.peopleList.length!==0?(o(),a("div",H,[(o(!0),a(j,null,z(t.peopleList,s=>(o(),a("div",J,[e("a",{href:`${h(R).web_peoples_url}/${s.people_idx}`},[e("div",Q,[s.file_path_enc?(o(),a("div",{key:0,class:"bg-thumb",style:U(`background-image:url('${h(b)}${s.file_path_enc}'); background-size:cover;`)},W,4)):(o(),a("div",X)),e("div",Z,[e("p",null,i(s.subject),1),e("div",ee,[e("p",se,i(s.name_ko),1),e("span",te,i(s.category_parent_name_ko)+" / "+i(s.category_child_name_ko),1)])])])],8,O)]))),256))])):(o(),a("div",oe,ne)),t.peopleList.length!==0?(o(),a("div",le,[u(_,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[l[0]||(l[0]=s=>t.pageInfo.page_num=s),k]},null,8,["length","modelValue"])])):d("v-if",!0)])])])])}}},ue=P(ie,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{ue as default};
