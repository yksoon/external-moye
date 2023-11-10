import{_ as F,u as W,l as o,r as B,o as A,C as b,b as y,c as g,g as k,d as e,j as P,A as D,B as K,f as E,n,a as j,i as M,s as Q,D as V,q}from"./index-5476b1d3.js";import{L as z}from"./LeftMenu-e50edd7f.js";const I={boardIdx:0,userIdx:0,channelType:"",importantType:"",boardType:"",processStatus:"",detailType:"",categoryType:"",subject:"",subTitle:"",content:"",securityCode:"",showYn:"Y",openYn:"Y",boardPwd:"",alimYn:"",userNameFirstKo:"",userNameLastKo:"",userNameFirstEn:"",userNameLastEn:"",localYn:"",email:"",gender:"",birthYyyy:"",birthMm:"",birthDd:"",interPhoneNumber:"",mobile1:"",mobile2:"",mobile3:"",mobileAgency:"",fileContent:"",userNameKo:"",userNameEn:"",regUserIdx:0,regUserNameKo:"",regUserNameEn:"",modUserIdx:0,modUserNameKo:"",modUserNameEn:"",modDttm:""},R={id:"wrapper"},S={id:"container",class:"sub_container"},$={id:"content"},O=e("div",{id:"subtitle"},[e("h2",null,"상담문의")],-1),G={class:"board_Wtable"},X=e("colgroup",null,[e("col",{width:"15%"}),e("col",{width:"*"})],-1),H={class:"boardW_title"},J=e("th",null,"제목",-1),Z={class:"input-group"},ee={class:"placeholder_Title_Big",style:{display:"inline-block",position:"relative","vertical-align":"middle",float:"left"}},te={class:"input-group-Big"},se={key:0,class:"boardW_title",id:"passwd"},le=e("th",null,"비밀번호",-1),ae={class:"placeholder_Title_Big",style:{display:"inline-block",position:"relative","vertical-align":"middle",float:"left"}},oe={class:"boardW_title"},ne=e("th",null,"작성자",-1),ie={class:"placeholder_Title_Big",style:{display:"inline-block",position:"relative","vertical-align":"middle",float:"left"}},re={class:"boardW_title"},ce=e("th",null,"문의분야",-1),ue=e("option",{value:"000"},"개인레슨",-1),de=e("option",{value:"100"},"그룹레슨",-1),pe=e("option",{value:"200"},"제휴문의",-1),me=[ue,de,pe],_e=e("th",null,"문의내용",-1),he={colspan:"2"},be={class:"userContent",style:{margin:"10px 0 20px"}},ve=e("th",null,"파일첨부",-1),fe={class:"fileicon"},ye=e("div",{style:{"margin-bottom":"5"}},[e("b",null," 여러 파일 선택이 가능합니다. 여러 파일 선택 시 ctrl 누른 후 선택하시면 됩니다. ")],-1),ge=e("span",{class:"ok_btn"},[e("a",{href:"javascript:history.back();"},"취소")],-1),ke={__name:"QNAWrite",setup(xe){W();const r=o(!1),v=o(!1),c=o(null),u=o(null),i=o(null),p=o(null),m=o(null),f=o(null);B({board:null}),A(()=>{b(!1)});const x=t=>{if(t.files.length>5)return n({type:"alert",message:"파일은 5개까지 업로드 가능합니다."}),t.value="",!1},w=()=>{if(C()){b(!0);const t=new FormData,a=I;let s={},_=[];const h=r.value?"N":"Y",d=h==="N"?m.value.value:null;s={...a,showYn:"Y",openYn:h,boardType:"100",detail_type:"000",categoryType:v.value.value,userNameFirstKo:c.value.value,userNameLastKo:u.value.value,subject:i.value.value,subTitle:i.value.value,content:p.value.value,boardPwd:d};for(const l in s)t.append(l,s[l]);_=Array.from(f.value.files);let L=_.length;for(let l=0;l<L;l++)t.append("attachmentFile",_[l]);const U={method:"post_multi",url:M.api_admin_reg_board,data:t,admin:"Y",callback:l=>Y(l)};j(U);const Y=l=>{l.headers.result_code===Q.success?(b(!1),N(),n({type:"alert",message:"문의 등록이 완료 되었습니다",callback:()=>T()})):(b(!1),n({type:"alert",message:"잠시 후 다시 시도해주세요"}))}}},N=()=>{const t="https://talkapi.lgcns.com/request/kakao.json",a={"Content-Type":"application/json",authToken:"TEiR6d7xkfOtQyzl3XoU4Q==",serverName:"moye123",paymentType:"P"};let s="";switch(v.value.value){case"000":s="개인레슨";break;case"100":s="그룹레슨";break;case"200":s="제휴문의";break}const h={service:2210082248,message:`[상담문의-#{${s}}] #{${c.value.value+u.value.value}}님의 "#{${i.value.value}}" 문의글이 등록되었습니다.`,mobile:"01024124594",title:"상담문의 알림",template:"10047",buttons:[{name:"홈페이지 상담문의 목록",type:"WL",url_pc:"https://www.mo-ye.com/support/consulting",url_mobile:"https://www.mo-ye.com/support/consulting"},{name:"관리자페이지",type:"WL",url_pc:"https://www.mo-ye.com/admin",url_mobile:"https://www.mo-ye.com/admin"}]};V.post(t,h,{headers:a}).then(d=>{console.log("알림톡 전송 성공:",d.data)}).catch(d=>{console.error("알림톡 전송 실패:",d)})},T=()=>{location.replace(q.web_consulting_url)},C=()=>{if(!i.value.value){n({type:"alert",message:"제목을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{i.value.focus()},0)};return!1}if(!c.value.value){n({type:"alert",message:"작성자명을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{c.value.focus()},0)};return!1}if(!u.value.value){n({type:"alert",message:"작성자명을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{u.value.focus()},0)};return!1}if(!p.value.value){n({type:"alert",message:"내용을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{p.value.focus()},0)};return!1}if(r.value&&!m.value){n({type:"alert",message:"비밀번호를 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{m.value.focus()},0)};return!1}return!0};return(t,a)=>(y(),g("div",R,[k(" 서브컨텐츠     //S"),e("div",S,[P(z,{psubvisual:"subvisual_notice",age:"consulting"}),e("div",$,[O,e("div",null,[e("table",G,[X,e("thead",null,[e("tr",H,[J,e("td",null,[e("div",Z,[e("div",ee,[e("input",{type:"text",id:"placeholder",name:"title",ref_key:"inputTitle",ref:i,autofocus:"",class:"title"},null,512)]),e("span",te,[e("label",null,[D(e("input",{type:"checkbox",name:"hidden_yn","onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s)},null,512),[[K,r.value]]),E("  비밀글")])])])])]),r.value?(y(),g("tr",se,[le,e("td",null,[e("div",ae,[e("input",{type:"password",id:"placeholder",name:"passwd",ref_key:"inputPassword",ref:m,autofocus:"",style:{height:"31px","line-height":"31px",width:"120px",padding:"0px 15px! important","box-sizing":"border-box"}},null,512)])])])):k("v-if",!0),e("tr",oe,[ne,e("td",null,[e("div",ie,[e("input",{type:"text",id:"placeholder",name:"username",ref_key:"inputUserFirstName",ref:c,autofocus:"",style:{height:"31px","line-height":"31px",width:"120px",padding:"0px 15px! important","box-sizing":"border-box"},placeholder:"성"},null,512),e("input",{type:"text",id:"placeholder",name:"username",ref_key:"inputUserLastName",ref:u,autofocus:"",style:{height:"31px","line-height":"31px",width:"120px",padding:"0px 15px! important","box-sizing":"border-box"},placeholder:"이름"},null,512)])])]),e("tr",re,[ce,e("td",null,[e("select",{class:"select wp100",ref_key:"selectCategory",ref:v},me,512)])])]),e("tbody",null,[e("tr",null,[_e,e("td",he,[e("div",be,[e("textarea",{name:"ir1",ref_key:"inputContent",ref:p,id:"ir1"},null,512)])])]),e("tr",null,[ve,e("td",fe,[ye,e("div",null,[e("input",{type:"file",ref_key:"inputAttachmentFile",ref:f,multiple:"",onChange:a[1]||(a[1]=s=>x(s.target))},null,544)])])])])]),e("div",{class:"boardW_btn"},[e("span",{class:"back_btn"},[e("a",{onClick:w},"확인")]),ge])])])])]))}},Ce=F(ke,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/support/consulting/QNAWrite.vue"]]);export{Ce as default};
