import{_ as C,u as S,r as $,o as y,C as d,a as v,b as m,c as f,d as i,t as w,e as x,f as R,g as h,s as k,h as I,i as U}from"./index-875ae363.js";var P={exports:{}};(function(g,_){(function(){var s={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},u={install:function(o,e){e&&this.config(e.expires,e.path,e.domain,e.secure,e.sameSite),o.prototype&&(o.prototype.$cookies=this),o.config&&o.config.globalProperties&&(o.config.globalProperties.$cookies=this,o.provide("$cookies",this)),o.$cookies=this},config:function(o,e,t,c,a){s.expires=o||"1d",s.path=e?"; path="+e:"; path=/",s.domain=t?"; domain="+t:"",s.secure=c?"; Secure":"",s.sameSite=a?"; SameSite="+a:"; SameSite=Lax"},get:function(o){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(o).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(e&&(e.substring(0,1)==="{"&&e.substring(e.length-1,e.length)==="}"||e.substring(0,1)==="["&&e.substring(e.length-1,e.length)==="]"))try{e=JSON.parse(e)}catch{return e}return e},set:function(o,e,t,c,a,l,r){if(o){if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(o))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+o)}else throw new Error("Cookie name is not found in the first argument.");e&&typeof e=="object"&&(e=JSON.stringify(e));var n="";if(t=t??s.expires,t&&t!=0)switch(t.constructor){case Number:t===1/0||t===-1?n="; expires=Fri, 31 Dec 9999 23:59:59 GMT":n="; max-age="+t;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(t)){var p=t.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(t.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":n="; max-age="+ +p*2592e3;break;case"d":n="; max-age="+ +p*86400;break;case"h":n="; max-age="+ +p*3600;break;case"min":n="; max-age="+ +p*60;break;case"s":n="; max-age="+p;break;case"y":n="; max-age="+ +p*31104e3;break}}else n="; expires="+t;break;case Date:n="; expires="+t.toUTCString();break}return document.cookie=encodeURIComponent(o)+"="+encodeURIComponent(e)+n+(a?"; domain="+a:s.domain)+(c?"; path="+c:s.path)+(l==null?s.secure:l?"; Secure":"")+(r==null?s.sameSite:r?"; SameSite="+r:""),this},remove:function(o,e,t){return!o||!this.isKey(o)?!1:(document.cookie=encodeURIComponent(o)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+t:s.domain)+(e?"; path="+e:s.path)+"; SameSite=Lax",!0)},isKey:function(o){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(o).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var o=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=0;e<o.length;e++)o[e]=decodeURIComponent(o[e]);return o}};g.exports=u,typeof window<"u"&&(window.$cookies=u)})()})(P);const D={class:"popup"},N={key:0,class:"board_Vtable"},L=i("colgroup",null,[i("col",{width:"*"})],-1),E={colspan:"3"},T={class:"board_content"},Y={key:0},B={class:"check"},G={class:"popup"},J={__name:"Popup",props:{popupIdx:Number},setup(g){const s=S().params.popup,u=$({popup:null});y(()=>{o()});const o=()=>{d(!0);const l={method:"get",url:U.api_admin_detail_popup+`/${s}`,data:{},callback:n=>r(n),admin:"Y"};v(l);const r=n=>{let p=n.headers.result_code;if(p===k.success||p===k.noData){let b=n.data.result_info;u.popup=b,d(!1)}else I("log",n),d(!1)}},e=(c,a,l)=>{const r=new Date;r.setTime(r.getTime()+l*24*60*60*1e3),document.cookie=`${c}=${a};expires=${r.toUTCString()};path=/`},t=c=>{const a=Date.now();e(`popup_viewed_${c}`,a,1),window.close()};return(c,a)=>(m(),f("div",D,[u.popup?(m(),f("table",N,[L,i("tbody",null,[i("tr",null,[i("td",E,[i("div",T,w(u.popup.content),1)])]),u.popup.option_24_hours_yn==="Y"?(m(),f("tr",Y,[i("td",B,[i("p",G,[i("label",null,[i("input",{type:"checkbox",name:"chk",value:"Y",style:{"vertical-align":"middle"},onClick:a[0]||(a[0]=l=>t(x(s)))}),R(" 24시간 동안 열지 않기 ")])]),h(` <p class="popup"><label><input type="checkbox" name="chk" value="Y" \r
                                        style="vertical-align:middle;"> 더 이상 보지 않기</label></p> `)])])):h("v-if",!0)])])):h("v-if",!0)]))}},K=C(J,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/common/Popup.vue"]]);export{K as default};
