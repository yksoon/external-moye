import{_ as k,u as v,r as g,o as C,C as c,a as x,b as l,c as u,d as e,t as y,e as w,f as P,g as r,s as _,h as D,i as $}from"./index-b54a5cd3.js";const T={class:"popup"},N={key:0,class:"board_Vtable"},V=e("colgroup",null,[e("col",{width:"*"})],-1),Y={colspan:"3"},B={class:"board_content"},S={key:0},I={class:"check"},L={class:"popup"},R={__name:"Popup",props:{popupIdx:Number},setup(U){const i=v().params.popup,p=g({popup:null});C(()=>{m()});const m=()=>{c(!0);const n={method:"get",url:$.api_admin_detail_popup+`/${i}`,data:{},callback:a=>s(a),admin:"Y"};x(n);const s=a=>{let d=a.headers.result_code;if(d===_.success||d===_.noData){let f=a.data.result_info;p.popup=f,c(!1)}else D("log",a),c(!1)}},h=(t,o,n)=>{const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3),document.cookie=`${t}=${o};expires=${s.toUTCString()};path=/`},b=t=>{const o=Date.now();h(`popup_viewed_${t}`,o,1),window.close()};return(t,o)=>(l(),u("div",T,[p.popup?(l(),u("table",N,[V,e("tbody",null,[e("tr",null,[e("td",Y,[e("div",B,y(p.popup.content),1)])]),p.popup.option_24_hours_yn==="Y"?(l(),u("tr",S,[e("td",I,[e("p",L,[e("label",null,[e("input",{type:"checkbox",name:"chk",value:"Y",style:{"vertical-align":"middle"},onClick:o[0]||(o[0]=n=>b(w(i)))}),P(" 24시간 동안 열지 않기 ")])]),r(` <p class="popup"><label><input type="checkbox" name="chk" value="Y" \r
                                        style="vertical-align:middle;"> 더 이상 보지 않기</label></p> `)])])):r("v-if",!0)])])):r("v-if",!0)]))}},M=k(R,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/Popup.vue"]]);export{M as default};
