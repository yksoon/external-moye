import{_ as V,u as N,j as B,r as S,o as $,C as r,a as j,k as h,b as t,c as a,e as m,d as e,h as d,w as z,F as D,m as R,v as f,x as U,y as F,t as i,g,s as v,f as M,q as Y}from"./index-77c8cc9f.js";import{L as q}from"./LeftMenu-b73d06d2.js";const E={id:"wrapper"},G={id:"container",class:"sub_container"},K={id:"content"},A=e("div",{id:"subtitle"},[e("h2",null,"코치진")],-1),H=e("ul",{class:"people_tab"},[e("li",null,[e("a",{href:""},"스포츠")]),e("li",null,[e("a",{href:""},"음악")]),e("li",null,[e("a",{href:""},"댄스/무용/바둑")]),e("li",null,[e("a",{href:""},"팀/아카데미")])],-1),J=e("h3",{class:"people_title"},"스포츠",-1),O={key:0,class:"people_box"},Q={class:"people"},T=["href"],W={class:"people_thumb"},X=e("span",null,null,-1),Z=[X],ee={key:1,class:"bg-thumb"},se={class:"caption"},oe={class:"info"},te={class:"name"},ae={class:"position"},ne={key:1,style:{display:"flex","justify-content":"center"}},le=e("b",null," 데이터가 없습니다. ",-1),ie=[le],_e={key:2,className:"pagenation"},ce={__name:"Peoples",setup(re){const y=N().params.category,b=B(null),o=S({categoryList:[],peopleList:[],pageInfo:{}}),k=g.api_file;$(()=>{L(1,Y.people,"")});const L=(_,l,c)=>{r(!0);const C={method:"post",url:g.api_admin_list_people,data:{page_num:_,page_size:l,search_keyword:c,category_idx:y,show_yn:"Y"},callback:n=>w(n),admin:"Y"};j(C);const w=n=>{let u=n.headers.result_code;if(u===v.success||u===v.noData){let P=n.data.result_info,I=n.data.page_info;o.peopleList=P,o.pageInfo=I,r(!1)}else M("log",n),r(!1)}},x=_=>{b.value};return(_,l)=>{const c=h("v-pagination"),p=h("aos-vue");return t(),a("div",E,[m(" 서브컨텐츠     //S"),e("div",G,[d(q,{subvisual:"subvisual_people",page:"people"}),e("div",K,[A,d(p,{animation:"fade-up",duration:1e3,delay:400},{default:z(()=>[H,J,o.peopleList.length!==0?(t(),a("div",O,[(t(!0),a(D,null,R(o.peopleList,s=>(t(),a("div",Q,[e("a",{href:`${f(U).web_peoples_url}/${s.people_idx}`},[e("div",W,[s.file_path_enc?(t(),a("div",{key:0,class:"bg-thumb",style:F(`background-image:url('${f(k)}${s.file_path_enc}'); background-size:cover;`)},Z,4)):(t(),a("div",ee)),e("div",se,[e("p",null,i(s.subject),1),e("div",oe,[e("p",te,i(s.name_ko),1),e("span",ae,i(s.category_parent_name_ko)+" / "+i(s.category_child_name_ko),1)])])])],8,T)]))),256))])):(t(),a("div",ne,ie)),o.peopleList.length!==0?(t(),a("div",_e,[d(c,{length:o.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:o.pageInfo.page_num,"onUpdate:modelValue":[l[0]||(l[0]=s=>o.pageInfo.page_num=s),x]},null,8,["length","modelValue"])])):m("v-if",!0)]),_:1})])])])}}},he=V(ce,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{he as default};
