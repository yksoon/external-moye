import{_ as P,u as V,h as I,r as N,o as S,C as d,a as B,l as $,b as o,c as a,e as p,d as e,n as u,F as z,i as D,p as R,q as h,v as U,w as j,t as i,g as m,s as g,f as F,m as M}from"./index-19e16e48.js";import{L as Y}from"./LeftMenu-f0d741b3.js";const q={id:"wrapper"},E={id:"container",class:"sub_container"},G={id:"content"},K=e("div",{id:"subtitle"},[e("h2",null,"코치진")],-1),A={"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400"},H=R('<ul class="people_tab"><li><a href="">스포츠</a></li><li><a href="">음악</a></li><li><a href="">댄스/무용/바둑</a></li><li><a href="">팀/아카데미</a></li></ul><h3 class="people_title">스포츠</h3>',2),J={key:0,class:"people_box"},O={class:"people"},Q=["href"],T={class:"people_thumb"},W=e("span",null,null,-1),X=[W],Z={key:1,class:"bg-thumb"},ee={class:"caption"},se={class:"info"},te={class:"name"},oe={class:"position"},ae={key:1,style:{display:"flex","justify-content":"center"}},ne=e("b",null," 데이터가 없습니다. ",-1),le=[ne],ie={key:2,className:"pagenation"},ce={__name:"Peoples",setup(_e){const f=V().params.category,v=I(null),t=N({categoryList:[],peopleList:[],pageInfo:{}}),y=m.api_file;S(()=>{b(1,M.people,"")});const b=(c,l,_)=>{d(!0);const L={method:"post",url:m.api_admin_list_people,data:{page_num:c,page_size:l,search_keyword:_,category_idx:f,show_yn:"Y"},callback:n=>C(n),admin:"Y"};B(L);const C=n=>{let r=n.headers.result_code;if(r===g.success||r===g.noData){let w=n.data.result_info,x=n.data.page_info;t.peopleList=w,t.pageInfo=x,d(!1)}else F("log",n),d(!1)}},k=c=>{v.value};return(c,l)=>{const _=$("v-pagination");return o(),a("div",q,[p(" 서브컨텐츠     //S"),e("div",E,[u(Y,{subvisual:"subvisual_people",page:"people"}),e("div",G,[K,e("div",A,[H,t.peopleList.length!==0?(o(),a("div",J,[(o(!0),a(z,null,D(t.peopleList,s=>(o(),a("div",O,[e("a",{href:`${h(U).web_peoples_url}/${s.people_idx}`},[e("div",T,[s.file_path_enc?(o(),a("div",{key:0,class:"bg-thumb",style:j(`background-image:url('${h(y)}${s.file_path_enc}'); background-size:cover;`)},X,4)):(o(),a("div",Z)),e("div",ee,[e("p",null,i(s.subject),1),e("div",se,[e("p",te,i(s.name_ko),1),e("span",oe,i(s.category_parent_name_ko)+" / "+i(s.category_child_name_ko),1)])])])],8,Q)]))),256))])):(o(),a("div",ae,le)),t.peopleList.length!==0?(o(),a("div",ie,[u(_,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[l[0]||(l[0]=s=>t.pageInfo.page_num=s),k]},null,8,["length","modelValue"])])):p("v-if",!0)])])])])}}},he=P(ce,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{he as default};
