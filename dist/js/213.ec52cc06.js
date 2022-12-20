"use strict";(self["webpackChunkworktalk"]=self["webpackChunkworktalk"]||[]).push([[213],{3067:function(e,o,t){t.d(o,{Pf:function(){return r},SK:function(){return m},ZP:function(){return d},_u:function(){return c},dQ:function(){return s},dq:function(){return i},k2:function(){return l},qv:function(){return p},uJ:function(){return n}});var a=t(3376);function l(){return a.x.get("host/spaceAll")}function i(){return a.x.get("hostActivated")}function n(e){return a.x.post("host/spaceCreate",e,{headers:{"Content-Type":"multipart/form-data"}})}function s(e,o){return a.x.post("host/spaceUpdate/"+e,o,{headers:{"Content-Type":"multipart/form-data"}})}function r(e){return a.x["delete"]("spaceImgDelete",{params:{spaceImgId:e}})}function m(e){return a.x.post("host/roomCreate",e,{headers:{"Content-Type":"multipart/form-data"}})}function c(e,o){return a.x.post("host/roomUpdate/"+e,o,{headers:{"Content-Type":"multipart/form-data"}})}function d(e){return a.x["delete"]("roomImgDelete",{params:{roomImgId:e}})}function p(e){return a.x["delete"]("host/spaceDelete/"+e)}},2900:function(e,o,t){t.d(o,{JY:function(){return n},Ju:function(){return m},OS:function(){return c},Zy:function(){return r},aq:function(){return i},bQ:function(){return l},lC:function(){return s}});var a=t(3376);function l(e,o,t,l,i,n,s,r){return a.e.get("main",{params:{pageNum:e,searchSpaceType:o,searchSpaceName:t,searchAddress:l,searchStartDate:i,searchEndDate:n,searchStartTime:s,searchEndTime:r}})}function i(e){return a.e.get("spaceOne/"+e)}function n(){return a.x.get("member/isValid")}function s(e){return a.e.get("spaceOne/"+e+"/rooms")}function r(e){return a.e.get("roomOne/"+e)}function m(){return a.x.get("mileage/total")}function c(){return a.x.get("mileage")}},4213:function(e,o,t){t.r(o),t.d(o,{default:function(){return Qe}});var a=t(3396),l=t(7139);const i={class:"backgound"},n={class:"createBox"},s={class:"spaceName"};function r(e,o,t,r,m,c){const d=(0,a.up)("desk-update"),p=(0,a.up)("meeting-room-update"),f=(0,a.up)("office-update");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",n,[(0,a._)("div",s,[(0,a._)("span",{class:(0,l.C_)(m.spaceTypeClass)},(0,l.zw)(m.spaceType),3),(0,a._)("span",null,"공간명 : "+(0,l.zw)(m.name),1)]),"데스크"==m.spaceType?((0,a.wg)(),(0,a.j4)(d,{key:0})):"회의실"==m.spaceType?((0,a.wg)(),(0,a.j4)(p,{key:1})):((0,a.wg)(),(0,a.j4)(f,{key:2}))])])}var m=t(9242);const c=e=>((0,a.dD)("data-v-b1cb032a"),e=e(),(0,a.Cn)(),e),d={class:"roomContainer"},p=c((()=>(0,a._)("p",null,"방설명",-1))),f=["onUpdate:modelValue"],u={key:0,class:"warning"},g=c((()=>(0,a._)("p",null,"운영시간",-1))),h=["onUpdate:modelValue","onChange"],I=c((()=>(0,a._)("option",{hidden:""}," 시작시간 ",-1))),D=["value","disabled"],w=["onUpdate:modelValue"],v=c((()=>(0,a._)("option",{hidden:""}," 종료시간 ",-1))),_=["value","disabled"],C=c((()=>(0,a._)("p",null,"편의시설",-1))),k={class:"iconItems"},O=["onClick"],b=c((()=>(0,a._)("p",null,"데스크 사진등록",-1))),T=c((()=>(0,a._)("span",{class:"boxName"},"업로드된 사진",-1))),y={class:"imgBox"},U=["onClick"],x=["src"],E=c((()=>(0,a._)("span",{class:"boxName"},"추가사진 등록",-1))),P={class:"imgBox"},S=["onClick"],L=["src"],A={class:"spaceImg"},R=["for"],M=["id"],N={key:0,class:"addSubmitBtn"};function V(e,o,t,i,n,s){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("form",{class:"roomItems",onSubmit:o[1]||(o[1]=(0,m.iM)(((...e)=>s.roomUpdateSubmit&&s.roomUpdateSubmit(...e)),["prevent"]))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.roomUpdate,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"roomItem"},[(0,a._)("div",null,[(0,a._)("p",null,"방이름 : "+(0,l.zw)(e.roomName),1)]),(0,a._)("div",null,[p,(0,a._)("p",{class:(0,l.C_)([e.roomDetail.length>="100"?"warning":"noWarning","roomNameCount"])},(0,l.zw)(e.roomDetail.length)+" / 100자 ",3),(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":o=>e.roomDetail=o,class:"roomDetail",rows:"3",placeholder:"방의 설명을 작성해 주세요."},null,8,f),[[m.nr,e.roomDetail]]),e.roomDetail.length>="100"?((0,a.wg)(),(0,a.iD)("p",u," 방설명은 100자를 초과할 수 없습니다. ")):(0,a.kq)("",!0)]),(0,a._)("div",null,[g,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":o=>e.workStart=o,class:"workStart",onChange:o=>s.endTimeDataCheck(e.workStart)},[I,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.startTimeData,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e.value,disabled:e.disabled},(0,l.zw)(e.time),9,D)))),128))],40,h),[[m.bM,e.workStart]]),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":o=>e.workEnd=o,class:"workEnd"},[v,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.endTimeData,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e.value,disabled:e.disabled},(0,l.zw)(e.time),9,_)))),128))],8,w),[[m.bM,e.workEnd]])]),(0,a._)("div",null,[C,(0,a._)("div",k,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.offeringOptionData,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:(0,l.C_)(["iconItem",s.optionCheck(e,o.value)]),onClick:t=>s.optionAdd(e,o.value)},[(0,a._)("i",{class:(0,l.C_)(o.class)},null,2),(0,a._)("p",null,(0,l.zw)(o.name),1)],10,O)))),128))])]),(0,a._)("div",null,[b,T,(0,a._)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.roomImgDtoList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"filePreview"},[(0,a._)("i",{class:"fa-solid fa-trash-can fa-lg imgDelete",onClick:o=>s.roomImgDelete(e)},null,8,U),(0,a._)("img",{class:"preViewImg",src:e.roomImgUrl},null,8,x)])))),128))]),E,(0,a._)("div",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.roomImgPreview,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:"filePreview"},[(0,a._)("i",{class:"fa-solid fa-xmark previewImgDelete fa-lg",onClick:t=>s.fileDeleteButton(e,o.num)},null,8,S),(0,a._)("img",{class:"preViewImg",src:o.url},null,8,L)])))),128)),(0,a._)("div",A,[(0,a._)("label",{for:"img"+t,class:"imgBtn"},"사진추가",8,R),(0,a._)("input",{id:"img"+t,ref_for:!0,ref:"spaceImg",type:"file",multiple:"",accept:".jpg, .png",hidden:"",onChange:o[0]||(o[0]=e=>s.fileUpload(e))},null,40,M)])])])])))),128)),n.roomUpdate.length>=1?((0,a.wg)(),(0,a.iD)("button",N," 수 정 ")):(0,a.kq)("",!0)],32)])}t(7658);var $=t(2900),B=t(3067),K={data(){return{roomUpdate:[],startTimeData:"",endTimeData:"",offeringOptionData:[{name:"주차",class:"fa-solid fa-square-parking fa-2x",value:"PARKING"},{name:"인터넷/와이파이",class:"fa-solid fa-wifi fa-2x",value:"INTERNET_WIFI"},{name:"화이트보드",class:"fa-solid fa-tv fa-2x",value:"WHITEBOARD"},{name:"TV/프로젝터",class:"fa-solid fa-utensils fa-2x",value:"TV_PROJECTOR"},{name:"음식물반입가능",class:"fa-solid fa-utensils fa-2x",value:"FOOD"},{name:"복사/인쇄기",class:"fa-solid fa-print fa-2x",value:"PRINTER"},{name:"PC/노트북",class:"fa-solid fa-computer fa-2x",value:"PC_LAPTOP"},{name:"의자/테이블",class:"fa-solid fa-chair fa-2x",value:"CHAIR_TABLE"},{name:"정수기",class:"fa-solid fa-faucet-drip fa-2x",value:"WATER"}]}},created(){this.createTime(),this.roomCall()},methods:{async roomCall(){try{const e=await(0,$.lC)(this.$route.params.spaceId);for(let o=0;o<e.data.length;o++)e.data[o].roomImg=[],e.data[o].roomImgPreview=[];this.roomUpdate=e.data}catch(e){console.log(e)}},createTime(){let e=[];for(let o=0;o<25;o++)if(o<10){let t={time:"0"+o+":00",value:o,disabled:!1};e.push(t)}else{let t={time:o+":00",value:o,disabled:!1};e.push(t)}this.startTimeData=e,this.endTimeData=e},endTimeDataCheck(e){let o=[];for(let t=0;t<Number(e)+1;t++)if(t<10){let e={time:"0"+t+":00",value:"0"+t,disabled:!0};o.push(e)}else{let e={time:t+":00",value:t,disabled:!0};o.push(e)}for(let t=Number(e)+1;t<25;t++)if(t<10){let e={time:"0"+t+":00",value:"0"+t,disabled:!1};o.push(e)}else{let e={time:t+":00",value:t,disabled:!1};o.push(e)}this.endTimeData=o},optionCheck(e,o){return null==e.offeringOption||(null!=e.offeringOption||""!=e.offeringOption)&&-1==e.offeringOption.indexOf(o)?"noSelect":"selected"},optionAdd(e,o){null==e.offeringOption?e.offeringOption=o:-1==e.offeringOption.indexOf(o)?e.offeringOption+=o:e.offeringOption=e.offeringOption.replace(o,"")},fileUpload(e){const o=e.path[0].id.slice(3);for(let t=0;t<e.target.files.length;t++)this.roomUpdate[o].roomImg=[...this.roomUpdate[o].roomImg,{file:e.target.files[t],num:t}],this.roomUpdate[o].roomImgPreview.push({url:URL.createObjectURL(e.target.files[t]),num:t})},fileDeleteButton(e,o){for(let t=0;t<e.roomImg.length;t++)e.roomImg[t].num==o&&e.roomImg.splice(t,1);for(let t=0;t<e.roomImgPreview.length;t++)e.roomImgPreview[t].num==o&&e.roomImgPreview.splice(t,1)},async roomImgDelete(e){console.log(e);const o=await(0,B.ZP)(e.roomImgId);console.log(o),this.spaceDataCall()},async roomUpdateSubmit(){const e=this.roomUpdate;try{for(let o=0;o<e.length;o++){let t=new FormData;if(t.append("spaceId",this.$route.params.spaceId),t.append("spaceId",e[o].roomId),t.append("roomDetail",e[o].roomDetail),t.append("roomPrice",e[o].roomPrice),t.append("workStart",e[o].workStart),t.append("workEnd",e[o].workEnd),t.append("roomType",e[o].roomImgDtoList),t.append("offeringOption",e[o].offeringOption),null!=e[o].roomImg)for(let l=0;l<e[o].roomImg.length;l++)t.append("multipartFileList",e[o].roomImg[l].file),console.log(e[o].roomImg[l].file);const a=await(0,B._u)(e[o].roomId,t);console.log(a)}alert("방의 정보가 수정되었습니다."),this.$router.push("/host")}catch(o){console.log(o)}}}},H=t(89);const W=(0,H.Z)(K,[["render",V],["__scopeId","data-v-b1cb032a"]]);var Y=W;const z={class:"roomContainer"},G={class:"inputBox"},q=(0,a._)("p",null,"가격설정",-1),F=["placeholder"],j={class:"inputBox"},Z=(0,a._)("span",null,"오피스 설명",-1),J={key:0,class:"warning"},Q=(0,a._)("p",null,"편의시설",-1),X={class:"iconItems"},ee=["onClick"],oe={class:"inputBox"},te=(0,a._)("p",null,"오피스 사진등록",-1),ae=(0,a._)("span",{class:"boxName"},"업로드된 사진",-1),le={class:"imgBox"},ie=["onClick"],ne=["src"],se=(0,a._)("span",{class:"boxName"},"추가사진 등록",-1),re={class:"imgBox"},me=["onClick"],ce=["src"],de={class:"spaceImg"},pe=(0,a._)("label",{for:"imgBtn",class:"imgBtn"},"사진추가",-1),fe=(0,a._)("button",{class:"submitBtn"}," 저장 ",-1);function ue(e,o,t,i,n,s){return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("form",{onSubmit:o[3]||(o[3]=(0,m.iM)(((...e)=>s.officeRoomSubmitCheck&&s.officeRoomSubmitCheck(...e)),["prevent"]))},[(0,a._)("div",G,[q,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>n.officeUpdate.roomPrice=e),class:"officeTitle",type:"text",placeholder:n.officeUpdate.roomPrice},null,8,F),[[m.nr,n.officeUpdate.roomPrice]])]),(0,a._)("div",j,[0!=n.officeUpdate.length?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[Z,(0,a._)("p",{class:(0,l.C_)([s.textCount(n.officeUpdate.roomDetail)>="100"?"warning":"noWarning","roomNameCount"])},(0,l.zw)(s.textCount(n.officeUpdate.roomDetail))+" / 100자 ",3),(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":o[1]||(o[1]=e=>n.officeUpdate.roomDetail=e),class:"officeDetail",rows:"10",placeholder:"오피스의 설명을 작성해 주세요."},null,512),[[m.nr,n.officeUpdate.roomDetail]]),s.textCount(n.officeUpdate.roomDetail)>="100"?((0,a.wg)(),(0,a.iD)("p",J," 방설명은 100자를 초과할 수 없습니다. ")):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0)]),(0,a._)("div",null,[Q,(0,a._)("div",X,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.offeringOptionData,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:(0,l.C_)(["iconItem",s.optionCheck(n.officeUpdate,e.value)]),onClick:o=>s.optionAdd(n.officeUpdate,e.value)},[(0,a._)("i",{class:(0,l.C_)(e.class)},null,2),(0,a._)("p",null,(0,l.zw)(e.name),1)],10,ee)))),128))])]),(0,a._)("div",oe,[te,ae,(0,a._)("div",le,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.officeUpdate.roomImgDtoList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"filePreview"},[(0,a._)("i",{class:"fa-solid fa-trash-can fa-lg imgDelete",onClick:o=>s.roomImgDelete(e)},null,8,ie),(0,a._)("img",{class:"preViewImg",src:e.roomImgUrl},null,8,ne)])))),128))]),se,(0,a._)("div",re,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.roomImgPreview,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"filePreview"},[(0,a._)("i",{class:"fa-solid fa-xmark previewImgDelete fa-lg",onClick:o=>s.fileDeleteButton(e.num)},null,8,me),(0,a._)("img",{class:"preViewImg",src:e.url},null,8,ce)])))),128)),(0,a._)("div",de,[pe,(0,a._)("input",{id:"imgBtn",ref:"spaceImg",type:"file",multiple:"",accept:".jpg, .png",hidden:"",onChange:o[2]||(o[2]=e=>s.fileUpload(e))},null,544)])])]),fe],32)])}var ge={data(){return{officeUpdate:{roomDetail:"더미"},roomImg:[],roomImgPreview:[],offeringOptionData:[{name:"주차",class:"fa-solid fa-square-parking fa-2x",value:"PARKING"},{name:"인터넷/와이파이",class:"fa-solid fa-wifi fa-2x",value:"INTERNET_WIFI"},{name:"화이트보드",class:"fa-solid fa-chalkboard fa-2x",value:"WHITEBOARD"},{name:"TV/프로젝터",class:"fa-solid fa-tv fa-2x",value:"TV_PROJECTOR"},{name:"음식물반입가능",class:"fa-solid fa-utensils fa-2x",value:"FOOD"},{name:"복사/인쇄기",class:"fa-solid fa-print fa-2x",value:"PRINTER"},{name:"PC/노트북",class:"fa-solid fa-computer fa-2x",value:"PC_LAPTOP"},{name:"의자/테이블",class:"fa-solid fa-chair fa-2x",value:"CHAIR_TABLE"},{name:"정수기",class:"fa-solid fa-faucet-drip fa-2x",value:"WATER"}]}},async created(){await this.roomCall()},methods:{async roomCall(){try{this.officeUpdate=[];const e=await(0,$.lC)(this.$route.params.spaceId);console.log(e.data[0]),console.log(e.data[0].roomDetail.length),this.officeUpdate=e.data[0]}catch(e){console.log(e)}},optionCheck(e,o){return null==e.offeringOption||(null!=e.offeringOption||""!=e.offeringOption)&&-1==e.offeringOption.indexOf(o)?"noSelect":"selected"},optionAdd(e,o){null==e.offeringOption?e.offeringOption=o:-1==e.offeringOption.indexOf(o)?e.offeringOption+=o:e.offeringOption=e.offeringOption.replace(o,"")},fileUpload(e){for(let o=0;o<e.target.files.length;o++)this.roomImg=[...this.roomImg,{file:e.target.files[o],num:o}];for(let o=0;o<e.target.files.length;o++)this.roomImgPreview.push({url:URL.createObjectURL(e.target.files[o]),num:o})},fileDeleteButton(e){for(let o=0;o<this.roomImg.length;o++)this.roomImg[o].num==e&&this.roomImg.splice(o,1);for(let o=0;o<this.roomImgPreview.length;o++)this.roomImgPreview[o].num==e&&this.roomImgPreview.splice(o,1)},textCount(e){return console.log(e),e.length},async roomImgDelete(e){console.log(e);const o=await(0,B.ZP)(e.roomImgId);console.log(o),this.spaceDataCall()},officeRoomSubmitCheck(){const e=this.officeUpdate;let o="";e.roomPrice?e.roomDetail?e.roomDetail>100?(o="오피스 설명이 100자를 초과했습니다.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o)):0==e.roomImgDtoList.length&&0==this.roomImg.length?(o="오피스의 사진을 추가해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o)):this.officeRoomSubmit():(o="오피스 설명을 작성해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o)):(o="가격을 설정해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o))},async officeRoomSubmit(){try{const e=this.officeUpdate;let o=new FormData;if(o.append("spaceId",this.$route.params.spaceId),o.append("roomId",e.roomId),o.append("roomDetail",e.roomDetail),o.append("roomPrice",e.roomPrice),o.append("workStart",e.workStart),o.append("workEnd",e.workEnd),o.append("roomType",e.roomImgDtoList),o.append("offeringOption",e.room),null!=e.roomImg)for(let a=0;a<this.roomImg.length;a++)o.append("multipartFileList",this.roomImg[a].file);for(let a of o.keys())console.log(`${a}:${o.get(a)}`);const t=await(0,B._u)(e.roomId,o);console.log(t),200==t.status&&(alert("방의 정보가 수정되었습니다."),this.$router.push("/host"))}catch(e){console.log(e)}}}};const he=(0,H.Z)(ge,[["render",ue]]);var Ie=he;const De=e=>((0,a.dD)("data-v-106e0838"),e=e(),(0,a.Cn)(),e),we={class:"roomContainer"},ve=De((()=>(0,a._)("p",null,"방설명",-1))),_e=["onUpdate:modelValue"],Ce={key:0,class:"warning"},ke=De((()=>(0,a._)("p",null,"운영시간",-1))),Oe=["onUpdate:modelValue","onChange"],be=De((()=>(0,a._)("option",{hidden:""}," 시작시간 ",-1))),Te=["value","disabled"],ye=["onUpdate:modelValue"],Ue=De((()=>(0,a._)("option",{hidden:""}," 종료시간 ",-1))),xe=["value","disabled"],Ee=De((()=>(0,a._)("p",null,"편의시설",-1))),Pe={class:"iconItems"},Se=["onClick"],Le=De((()=>(0,a._)("p",null,"회의실 사진등록",-1))),Ae=De((()=>(0,a._)("span",{class:"boxName"},"업로드된 사진",-1))),Re={class:"imgBox"},Me=["onClick"],Ne=["src"],Ve=De((()=>(0,a._)("span",{class:"boxName"},"추가사진 등록",-1))),$e={class:"imgBox"},Be=["onClick"],Ke=["src"],He={class:"spaceImg"},We=["for"],Ye=["id"],ze={key:0,class:"addSubmitBtn"};function Ge(e,o,t,i,n,s){return(0,a.wg)(),(0,a.iD)("div",we,[(0,a._)("form",{class:"roomItems",onSubmit:o[1]||(o[1]=(0,m.iM)(((...e)=>s.roomUpdateSubmitCheck&&s.roomUpdateSubmitCheck(...e)),["prevent"]))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.roomUpdate,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"roomItem"},[(0,a._)("div",null,[(0,a._)("p",null,"방이름 : "+(0,l.zw)(e.roomName),1),(0,a._)("p",null,"방종류 : "+(0,l.zw)(s.roomTypeCheck(e.roomType)),1),(0,a._)("p",null,"가격 : "+(0,l.zw)(e.roomPrice)+" / 시간",1)]),(0,a._)("div",null,[ve,(0,a._)("p",{class:(0,l.C_)([e.roomDetail.length>="100"?"warning":"noWarning","roomNameCount"])},(0,l.zw)(e.roomDetail.length)+" / 100자 ",3),(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":o=>e.roomDetail=o,class:"roomDetail",rows:"3",placeholder:"방의 설명을 작성해 주세요."},null,8,_e),[[m.nr,e.roomDetail]]),e.roomDetail.length>="100"?((0,a.wg)(),(0,a.iD)("p",Ce," 방설명은 100자를 초과할 수 없습니다. ")):(0,a.kq)("",!0)]),(0,a._)("div",null,[ke,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":o=>e.workStart=o,class:"workStart",onChange:o=>s.endTimeDataCheck(e.workStart)},[be,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.startTimeData,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e.value,disabled:e.disabled},(0,l.zw)(e.time),9,Te)))),128))],40,Oe),[[m.bM,e.workStart]]),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":o=>e.workEnd=o,class:"workEnd"},[Ue,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.endTimeData,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e.value,disabled:e.disabled},(0,l.zw)(e.time),9,xe)))),128))],8,ye),[[m.bM,e.workEnd]])]),(0,a._)("div",null,[Ee,(0,a._)("div",Pe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.offeringOptionData,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:(0,l.C_)(["iconItem",s.optionCheck(e,o.value)]),onClick:t=>s.optionAdd(e,o.value)},[(0,a._)("i",{class:(0,l.C_)(o.class)},null,2),(0,a._)("p",null,(0,l.zw)(o.name),1)],10,Se)))),128))])]),(0,a._)("div",null,[Le,Ae,(0,a._)("div",Re,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.roomImgDtoList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"filePreview"},[(0,a._)("i",{class:"fa-solid fa-trash-can fa-lg imgDelete",onClick:o=>s.roomImgDelete(e)},null,8,Me),(0,a._)("img",{class:"preViewImg",src:e.roomImgUrl},null,8,Ne)])))),128))]),Ve,(0,a._)("div",$e,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.roomImgPreview,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:"filePreview"},[(0,a._)("i",{class:"fa-solid fa-xmark previewImgDelete fa-lg",onClick:t=>s.fileDeleteButton(e,o.num)},null,8,Be),(0,a._)("img",{class:"preViewImg",src:o.url},null,8,Ke)])))),128)),(0,a._)("div",He,[(0,a._)("label",{for:"img"+t,class:"imgBtn"},"사진추가",8,We),(0,a._)("input",{id:"img"+t,ref_for:!0,ref:"spaceImg",type:"file",multiple:"",accept:".jpg, .png",hidden:"",onChange:o[0]||(o[0]=e=>s.fileUpload(e))},null,40,Ye)])])])])))),128)),n.roomUpdate.length>=1?((0,a.wg)(),(0,a.iD)("button",ze," 저 장 ")):(0,a.kq)("",!0)],32)])}var qe={data(){return{roomUpdate:[],startTimeData:"",endTimeData:"",offeringOptionData:[{name:"주차",class:"fa-solid fa-square-parking fa-2x",value:"PARKING"},{name:"인터넷/와이파이",class:"fa-solid fa-wifi fa-2x",value:"INTERNET_WIFI"},{name:"화이트보드",class:"fa-solid fa-chalkboard fa-2x",value:"WHITEBOARD"},{name:"TV/프로젝터",class:"fa-solid fa-tv fa-2x",value:"TV_PROJECTOR"},{name:"음식물반입가능",class:"fa-solid fa-utensils fa-2x",value:"FOOD"},{name:"복사/인쇄기",class:"fa-solid fa-print fa-2x",value:"PRINTER"},{name:"PC/노트북",class:"fa-solid fa-computer fa-2x",value:"PC_LAPTOP"},{name:"의자/테이블",class:"fa-solid fa-chair fa-2x",value:"CHAIR_TABLE"},{name:"정수기",class:"fa-solid fa-faucet-drip fa-2x",value:"WATER"}]}},created(){this.createTime(),this.roomCall()},methods:{async roomCall(){try{const e=await(0,$.lC)(this.$route.params.spaceId);for(let o=0;o<e.data.length;o++)e.data[o].roomImg=[],e.data[o].roomImgPreview=[];this.roomUpdate=e.data}catch(e){console.log(e)}},createTime(){let e=[];for(let o=0;o<25;o++)if(o<10){let t={time:"0"+o+":00",value:o,disabled:!1};e.push(t)}else{let t={time:o+":00",value:o,disabled:!1};e.push(t)}this.startTimeData=e,this.endTimeData=e},roomTypeCheck(e){return"MEETING4"==e?"회의실 4인":"MEETING6"==e?"회의실 6인":"MEETING8"==e?"회의실 8~10인":"MEETING20"==e?"회의실 20인":void 0},endTimeDataCheck(e){let o=[];for(let t=0;t<Number(e)+1;t++)if(t<10){let e={time:"0"+t+":00",value:"0"+t,disabled:!0};o.push(e)}else{let e={time:t+":00",value:t,disabled:!0};o.push(e)}for(let t=Number(e)+1;t<25;t++)if(t<10){let e={time:"0"+t+":00",value:"0"+t,disabled:!1};o.push(e)}else{let e={time:t+":00",value:t,disabled:!1};o.push(e)}this.endTimeData=o},optionCheck(e,o){return null==e.offeringOption||(null!=e.offeringOption||""!=e.offeringOption)&&-1==e.offeringOption.indexOf(o)?"noSelect":"selected"},optionAdd(e,o){null==e.offeringOption?e.offeringOption=o:-1==e.offeringOption.indexOf(o)?e.offeringOption+=o:e.offeringOption=e.offeringOption.replace(o,"")},fileUpload(e){const o=e.path[0].id.slice(3);for(let t=0;t<e.target.files.length;t++)this.roomUpdate[o].roomImg=[...this.roomUpdate[o].roomImg,{file:e.target.files[t],num:t}],this.roomUpdate[o].roomImgPreview.push({url:URL.createObjectURL(e.target.files[t]),num:t})},fileDeleteButton(e,o){for(let t=0;t<e.roomImg.length;t++)e.roomImg[t].num==o&&e.roomImg.splice(t,1);for(let t=0;t<e.roomImgPreview.length;t++)e.roomImgPreview[t].num==o&&e.roomImgPreview.splice(t,1)},async roomImgDelete(e){console.log(e);const o=await(0,B.ZP)(e.roomImgId);console.log(o),this.roomCall()},roomUpdateSubmitCheck(){const e=this.roomUpdate;let o="",t=0;for(let a=0;a<e.length;a++)e[a].roomDetail?e[a].roomDetail.length>100?(o=a+1+"번 방의 설명이 100자를 초과했습니다.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o)):e[a].workStart>=e[a].workEnd?(o=a+1+"번 방의 운영시작이 운용종료보다 큽니다.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o)):0==e[a].roomImgDtoList.length&&0==e[a].roomImg.length?(o=a+1+"번 방의 사진을 추가해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o)):t++:(o=a+1+"번 방의 설명을 작성해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",o));t==e.length&&this.roomUpdateSubmit()},async roomUpdateSubmit(){const e=this.roomUpdate;try{for(let o=0;o<e.length;o++){let t=new FormData;if(t.append("spaceId",this.$route.params.spaceId),t.append("roomId",e[o].roomId),t.append("roomDetail",e[o].roomDetail),t.append("roomPrice",e[o].roomPrice),t.append("workStart",e[o].workStart),t.append("workEnd",e[o].workEnd),t.append("roomImgDtoList",e[o].roomImgDtoList),t.append("offeringOption",e[o].offeringOption),null!=e[o].roomImg)for(let l=0;l<e[o].roomImg.length;l++)t.append("multipartFileList",e[o].roomImg[l].file),console.log(e[o].roomImg[l].file);for(let e of t.keys())console.log(`${e}:${t.get(e)}`);const a=await(0,B._u)(e[o].roomId,t);console.log(a)}alert("방의 정보가 수정되었습니다."),this.$router.push("/host")}catch(o){console.log(o)}}}};const Fe=(0,H.Z)(qe,[["render",Ge],["__scopeId","data-v-106e0838"]]);var je=Fe,Ze={components:{DeskUpdate:Y,OfficeUpdate:Ie,MeetingRoomUpdate:je},data(){return{name:this.$route.params.name,spaceType:"",spaceTypeClass:""}},computed:{},created(){const e=this.$route.params.spaceType;"2"==e?(this.spaceType="데스크",this.spaceTypeClass="deskLabel LabelDesign"):"3"==e?(this.spaceType="회의실",this.spaceTypeClass="meetingRoomLabel LabelDesign"):(this.spaceType="오피스",this.spaceTypeClass="officeLabel LabelDesign"),this.$store.dispatch("SPINNERVIEW")},methods:{}};const Je=(0,H.Z)(Ze,[["render",r],["__scopeId","data-v-425c9104"]]);var Qe=Je}}]);
//# sourceMappingURL=213.ec52cc06.js.map