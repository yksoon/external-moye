import{_ as v,j as f,E as y,G as b,H as P,o as w,b as K,c as C,d as e,m as d,C as _,a as I,e as U,g as x,s as L}from"./index-0435ce16.js";/* empty css              */const T="/img/admin/logo_adm.png",D={name:"Signin",setup(){const l=f(null),s=f(null),i=y(),n=b(),r=P(),m=r.getUserToken;w(()=>{m&&i.push({name:"admin"})});const t=()=>{if(!l.value.value){d({type:"alert",message:"아이디를 입력해주세요",callback:()=>o()});const o=()=>{setTimeout(()=>{l.value.focus()},0)};return!1}if(!s.value.value){d({type:"alert",message:"비밀번호를 입력해주세요",callback:()=>o()});const o=()=>{setTimeout(()=>{s.value.focus()},0)};return!1}h()},h=()=>{_(!0);const o=x.api_admin_signin,g={user_id:l.value.value,user_pwd:s.value.value,admin_yn:"Y"},k=a=>{if(a.headers.result_code===L.success){let c=a.data.result_info,p=["md_licenses_number","user_pwd","user_role","user_salt"];for(let u=0;u<p.length;u++)delete c[p[u]];n.setUserInfo(c),r.setUserToken(c.token),_(!1),i.push({name:"admin"})}else _(!1),d({type:"alert",message:a.headers.result_message_ko})};I({method:"post",url:o,data:g,callback:a=>k(a),admin:"Y"})};return{inputID:l,inputPW:s,clickLogin:t,handleOnKeyPress:o=>{o.key==="Enter"&&t()}}}},O={class:"wrap"},S={class:"admin"},W={class:"login_wrap"},B={class:"login"},E=e("h1",null,[e("img",{src:T,alt:"",style:{width:"210px"}})],-1),N=e("p",null,"로그인을 해주세요",-1),G={class:"input_id"},R=e("h5",null,"아이디",-1),V=e("h5",null,"비밀번호",-1),Y={class:"flex login_btn"},j=e("div",null,[U(` <input type="checkbox" id="id_remember" />\r
                                <label for="id_remember">아이디 저장</label> `)],-1);function H(l,s,i,n,r,m){return K(),C("div",O,[e("div",S,[e("header",null,[e("div",W,[e("div",B,[E,N,e("div",G,[R,e("input",{type:"text",class:"input",placeholder:"ID",id:"inputID",ref:"inputID",onKeydown:s[0]||(s[0]=(...t)=>n.handleOnKeyPress&&n.handleOnKeyPress(...t)),autofocus:""},null,544)]),e("div",null,[V,e("input",{type:"password",class:"input",placeholder:"PW",id:"inputPW",ref:"inputPW",onKeydown:s[1]||(s[1]=(...t)=>n.handleOnKeyPress&&n.handleOnKeyPress(...t))},null,544)]),e("div",Y,[j,e("div",null,[e("a",{class:"subbtn on",onClick:s[2]||(s[2]=(...t)=>n.clickLogin&&n.clickLogin(...t)),style:{cursor:"pointer"}}," 로그인 ")])])])])])])])}const J=v(D,[["render",H],["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/admin/Signin.vue"]]);export{J as default};
