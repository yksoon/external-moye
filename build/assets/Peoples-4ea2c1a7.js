import{_ as I,u as N,j as B,r as S,o as $,C as r,a as j,k as u,b as o,c as a,e as h,d as e,h as m,m as z,w as D,i as R,F as U,l as F,v as f,x as M,y as Y,t as i,g,s as v,f as q,q as E}from"./index-e0b6bbd1.js";import{L as G}from"./LeftMenu-d4ce622e.js";const K={id:"wrapper"},A={id:"container",class:"sub_container"},H={id:"content"},J=e("div",{id:"subtitle"},[e("h2",null,"코치진")],-1),O=R('<ul class="people_tab"><li><a href="">스포츠</a></li><li><a href="">음악</a></li><li><a href="">댄스/무용/바둑</a></li><li><a href="">팀/아카데미</a></li></ul><h3 class="people_title">스포츠</h3>',2),Q={class:"people"},T=["href"],W={class:"people_thumb"},X=e("span",null,null,-1),Z=[X],ee={key:1,class:"bg-thumb"},se={class:"caption"},te={class:"info"},oe={class:"name"},ae={class:"position"},ne={key:1,style:{display:"flex","justify-content":"center"}},le=e("b",null," 데이터가 없습니다. ",-1),ie=[le],ce={key:2,className:"pagenation"},_e={__name:"Peoples",setup(re){const y=N().params.category,b=B(null),t=S({categoryList:[],peopleList:[],pageInfo:{}}),k=g.api_file;$(()=>{L(1,E.people,"")});const L=(c,l,_)=>{r(!0);const C={method:"post",url:g.api_admin_list_people,data:{page_num:c,page_size:l,search_keyword:_,category_idx:y,show_yn:"Y"},callback:n=>w(n),admin:"Y"};j(C);const w=n=>{let p=n.headers.result_code;if(p===v.success||p===v.noData){let P=n.data.result_info,V=n.data.page_info;t.peopleList=P,t.pageInfo=V,r(!1)}else q("log",n),r(!1)}},x=c=>{b.value};return(c,l)=>{const _=u("aos-vue"),d=u("v-pagination");return o(),a("div",K,[h(" 서브컨텐츠     //S"),e("div",A,[m(G,{subvisual:"subvisual_people",page:"people"}),e("div",H,[J,e("div",null,[O,t.peopleList.length!==0?(o(),z(_,{key:0,class:"people_box",animation:"fade-up",duration:1e3,delay:400},{default:D(()=>[(o(!0),a(U,null,F(t.peopleList,s=>(o(),a("div",Q,[e("a",{href:`${f(M).web_peoples_url}/${s.people_idx}`},[e("div",W,[s.file_path_enc?(o(),a("div",{key:0,class:"bg-thumb",style:Y(`background-image:url('${f(k)}${s.file_path_enc}'); background-size:cover;`)},Z,4)):(o(),a("div",ee)),e("div",se,[e("p",null,i(s.subject),1),e("div",te,[e("p",oe,i(s.name_ko),1),e("span",ae,i(s.category_parent_name_ko)+" / "+i(s.category_child_name_ko),1)])])])],8,T)]))),256))]),_:1})):(o(),a("div",ne,ie)),t.peopleList.length!==0?(o(),a("div",ce,[m(d,{length:t.pageInfo.pages,"total-visible":7,rounded:"2",modelValue:t.pageInfo.page_num,"onUpdate:modelValue":[l[0]||(l[0]=s=>t.pageInfo.page_num=s),x]},null,8,["length","modelValue"])])):h("v-if",!0)])])])])}}},he=I(_e,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/education/peoples/Peoples.vue"]]);export{he as default};
