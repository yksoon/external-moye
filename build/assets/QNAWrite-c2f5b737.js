import{_ as F,m as U,r as s,a as B,c as v,d as y,e as h,f as e,g as W,w as A,v as P,n as K,p as a,C as m,b as D,l as E,s as z,j as V}from"./index-fc4292d7.js";import{L as j}from"./LeftMenu-496dbbe6.js";const I={boardIdx:0,userIdx:0,channelType:"",importantType:"",boardType:"",processStatus:"",detailType:"",categoryType:"",subject:"",subTitle:"",content:"",securityCode:"",showYn:"Y",openYn:"Y",boardPwd:"",alimYn:"",userNameFirstKo:"",userNameLastKo:"",userNameFirstEn:"",userNameLastEn:"",localYn:"",email:"",gender:"",birthYyyy:"",birthMm:"",birthDd:"",interPhoneNumber:"",mobile1:"",mobile2:"",mobile3:"",mobileAgency:"",fileContent:"",userNameKo:"",userNameEn:"",regUserIdx:0,regUserNameKo:"",regUserNameEn:"",modUserIdx:0,modUserNameKo:"",modUserNameEn:"",modDttm:""},M={id:"wrapper"},Q={id:"container",class:"sub_container"},S={id:"content"},R=e("div",{id:"subtitle"},[e("h2",null,"상담문의")],-1),q={"data-aos-duration":"1000","data-aos-delay":"400"},G={class:"board_Wtable"},O=e("colgroup",null,[e("col",{width:"15%"}),e("col",{width:"*"})],-1),H={class:"boardW_title"},J=e("th",null,"제목",-1),X={class:"input-group"},Z={class:"placeholder_Title_Big",style:{display:"inline-block",position:"relative","vertical-align":"middle",float:"left"}},$={class:"input-group-Big",style:{"vertical-align":"middle",padding:"8px 10px","font-size":"13px","font-weight":"400","line-height":"1",color:"#555","text-align":"center","border-radius":"2px",float:"left"}},ee={key:0,class:"boardW_title",id:"passwd"},te=e("th",null,"비밀번호",-1),le={class:"placeholder_Title_Big",style:{display:"inline-block",position:"relative","vertical-align":"middle",float:"left"}},se={class:"boardW_title"},ae=e("th",null,"작성자",-1),oe={class:"placeholder_Title_Big",style:{display:"inline-block",position:"relative","vertical-align":"middle",float:"left"}},ne={class:"boardW_title"},ie=e("th",null,"문의분야",-1),re=e("option",{value:"000"},"개인레슨",-1),ce=e("option",{value:"100"},"그룹레슨",-1),de=e("option",{value:"200"},"제휴문의",-1),ue=[re,ce,de],pe=e("th",null,"문의내용",-1),_e={colspan:"2"},he={class:"userContent",style:{margin:"10px 0 20px"}},me=e("th",null,"파일첨부",-1),be={class:"fileicon"},fe=e("div",{style:{"margin-bottom":"5"}},[e("b",null," 여러 파일 선택이 가능합니다. 여러 파일 선택 시 ctrl 누른 후 선택하시면 됩니다. ")],-1),ge=e("span",{class:"ok_btn"},[e("a",{href:"javascript:history.back();"},"취소")],-1),ve={__name:"QNAWrite",setup(ye){U();const i=s(!1),b=s(!1),c=s(null),d=s(null),r=s(null);s(null);const u=s(null),p=s(null),f=s(null);B({board:null});const x=t=>{if(t.files.length>5)return a({type:"alert",message:"파일은 5개까지 업로드 가능합니다."}),t.value="",!1},k=()=>{if(w()){m(!0);const t=new FormData,o=I;let n={},_=[];const g=i.value?"N":"Y",T=g==="N"?p.value.value:null;n={...o,showYn:"Y",openYn:g,boardType:"100",detail_type:"000",categoryType:b.value.value,userNameFirstKo:c.value.value,userNameLastKo:d.value.value,subject:r.value.value,subTitle:r.value.value,content:u.value.value,boardPwd:T};for(const l in n)t.append(l,n[l]);_=Array.from(f.value.files);let C=_.length;for(let l=0;l<C;l++)t.append("attachmentFile",_[l]);const L={method:"post_multi",url:E.api_admin_reg_board,data:t,admin:"Y",callback:l=>Y(l)};D(L);const Y=l=>{l.headers.result_code===z.success?(m(!1),a({type:"alert",message:"문의 등록이 완료 되었습니다",callback:()=>N()})):(m(!1),a({type:"alert",message:"잠시 후 다시 시도해주세요"}))}}},N=()=>{location.replace(V.web_consulting_url)},w=()=>{if(!r.value.value){a({type:"alert",message:"제목을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{r.value.focus()},0)};return!1}if(!c.value.value){a({type:"alert",message:"작성자명을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{c.value.focus()},0)};return!1}if(!d.value.value){a({type:"alert",message:"작성자명을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{d.value.focus()},0)};return!1}if(!u.value.value){a({type:"alert",message:"내용을 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{u.value.focus()},0)};return!1}if(i.value&&!p.value){a({type:"alert",message:"비밀번호를 입력해주세요",callback:()=>t()});const t=()=>{setTimeout(()=>{p.value.focus()},0)};return!1}return!0};return(t,o)=>(v(),y("div",M,[h(" 서브컨텐츠     //S"),e("div",Q,[W(j,{page:"consulting"}),e("div",S,[R,e("div",q,[e("table",G,[O,e("thead",null,[e("tr",H,[J,e("td",null,[e("div",X,[e("div",Z,[e("input",{type:"text",id:"placeholder",name:"title",ref_key:"inputTitle",ref:r,autofocus:"",style:{height:"31px","line-height":"31px",width:"800px",padding:"0px 15px! important","box-sizing":"border-box"}},null,512)]),e("span",$,[e("label",null,[A(e("input",{type:"checkbox",name:"hidden_yn","onUpdate:modelValue":o[0]||(o[0]=n=>i.value=n)},null,512),[[P,i.value]]),K("  비밀글")])])])])]),i.value?(v(),y("tr",ee,[te,e("td",null,[e("div",le,[e("input",{type:"password",id:"placeholder",name:"passwd",ref_key:"inputPassword",ref:p,autofocus:"",style:{height:"31px","line-height":"31px",width:"120px",padding:"0px 15px! important","box-sizing":"border-box"}},null,512)])])])):h("v-if",!0),e("tr",se,[ae,e("td",null,[e("div",oe,[e("input",{type:"text",id:"placeholder",name:"username",ref_key:"inputUserFirstName",ref:c,autofocus:"",style:{height:"31px","line-height":"31px",width:"120px",padding:"0px 15px! important","box-sizing":"border-box"},placeholder:"성"},null,512),e("input",{type:"text",id:"placeholder",name:"username",ref_key:"inputUserLastName",ref:d,autofocus:"",style:{height:"31px","line-height":"31px",width:"120px",padding:"0px 15px! important","box-sizing":"border-box"},placeholder:"이름"},null,512)])])]),e("tr",ne,[ie,e("td",null,[e("select",{class:"select wp100",ref_key:"selectCategory",ref:b},ue,512)])])]),e("tbody",null,[e("tr",null,[pe,e("td",_e,[e("div",he,[e("textarea",{name:"ir1",ref_key:"inputContent",ref:u,id:"ir1",style:{width:"100%",height:"350px"}},null,512)])])]),e("tr",null,[me,e("td",be,[fe,e("div",null,[e("input",{type:"file",ref_key:"inputAttachmentFile",ref:f,multiple:"",onChange:o[1]||(o[1]=n=>x(n.target))},null,544)])])])])]),h(` <div class="input-group bottom_check">\r
                        <span class="input-group-addon cclyoung">\r
                        </span>\r
                        <div class="placeholder_box">\r
                            <label for="placeholder" style="top:4px;">?의 값을 입력하세요.</label>\r
                            <input type="text" id="placeholder" name="chk_text" style="height:25px;" />\r
                        </div>\r
                    </div> `),e("div",{class:"boardW_btn"},[e("span",{class:"back_btn"},[e("a",{onClick:k},"확인")]),ge])])])])]))}},we=F(ve,[["__file","C:/Users/LG/Desktop/server/159/moye/frontend/web-src/src/components/web/consulting/QNAWrite.vue"]]);export{we as default};
