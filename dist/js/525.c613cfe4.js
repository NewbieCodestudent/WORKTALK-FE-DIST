"use strict";(self["webpackChunkworktalk"]=self["webpackChunkworktalk"]||[]).push([[525],{1525:function(i,a,e){e.r(a),e.d(a,{default:function(){return T}});var t=e(3396);const o=i=>((0,t.dD)("data-v-96d2ae8a"),i=i(),(0,t.Cn)(),i),s={class:"loginPage"},n=o((()=>(0,t._)("h1",null,"워크토크 로그인",-1)));function l(i,a,e,o,l,c){const r=(0,t.up)("form-login");return(0,t.wg)(),(0,t.iD)("div",s,[n,(0,t.Wm)(r)])}var c=e(9242);const r=i=>((0,t.dD)("data-v-8a7509ac"),i=i(),(0,t.Cn)(),i),d={key:0,class:"loginBackground"},p={key:1,class:"findBoxEmail"},h={key:0,class:"approve"},k={key:1,class:"warning"},u={key:2,class:"findBoxPw"},m={key:0,class:"approve"},f={key:1,class:"warning"},C={class:"loginFromItems"},w={key:0,class:"warning"},E={class:"loginFromItems"},g=r((()=>(0,t._)("div",{class:"loginFromItems"},[(0,t._)("button",{id:"submit"}," 로그인 ")],-1))),y={class:"helpBox"},V=r((()=>(0,t._)("span",null,"회원가입",-1))),_={class:"kakaoLogin"},v=r((()=>(0,t._)("p",null,"또는",-1))),I=r((()=>(0,t._)("img",{src:"//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"},null,-1))),x=[I];function L(i,a,e,o,s,n){const l=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",null,[""!=s.findBoxType?((0,t.wg)(),(0,t.iD)("div",d)):(0,t.kq)("",!0),"email"==s.findBoxType?((0,t.wg)(),(0,t.iD)("div",p,[(0,t._)("i",{class:"fa-solid fa-xmark findBoxClose fa-lg",onClick:a[0]||(a[0]=(...i)=>n.findBoxClose&&n.findBoxClose(...i))}),(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>s.findEmail=i),class:"findEmail",type:"text",placeholder:"가입한 이메일을 입력해주세요."},null,512),[[c.nr,s.findEmail]]),(0,t._)("input",{class:"findEmailBtn",type:"button",value:"조회",onClick:a[2]||(a[2]=i=>n.emailVeificaionSend("email"))}),"N"==s.emailVerificationKakaoYn?((0,t.wg)(),(0,t.iD)("p",h," 가입된 이메일입니다. ")):(0,t.kq)("",!0),!s.emailVerificationKakaoYn&&200==s.emailVerificationCodeCheck||"Y"==s.emailVerificationKakaoYn?((0,t.wg)(),(0,t.iD)("p",k," 가입되지 않은 이메일입니다. ")):(0,t.kq)("",!0)])):(0,t.kq)("",!0),"pw"==s.findBoxType?((0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("i",{class:"fa-solid fa-xmark findBoxClose fa-lg",onClick:a[3]||(a[3]=(...i)=>n.findBoxClose&&n.findBoxClose(...i))}),(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[4]||(a[4]=i=>s.findEmail=i),class:"findEmail",type:"text",placeholder:"가입한 이메일을 입력해주세요."},null,512),[[c.nr,s.findEmail]]),(0,t._)("input",{class:"findEmailBtn",type:"button",value:"임시비밀번호발급",onClick:a[5]||(a[5]=i=>n.emailVeificaionSend("pw"))}),200==s.emailVerificationCodeCheck?((0,t.wg)(),(0,t.iD)("p",m," 임시비밀번호가 발급되었습니다. ")):(0,t.kq)("",!0),500==s.emailVerificationCodeCheck?((0,t.wg)(),(0,t.iD)("p",f," 가입되지 않은 이메일입니다. ")):(0,t.kq)("",!0)])):(0,t.kq)("",!0),(0,t._)("form",{class:"loginForm",onSubmit:a[11]||(a[11]=(0,c.iM)(((...i)=>n.loginCkeck&&n.loginCkeck(...i)),["prevent"]))},[(0,t._)("div",C,[(0,t.wy)((0,t._)("input",{id:"email","onUpdate:modelValue":a[6]||(a[6]=i=>s.email=i),type:"text",placeholder:"이메일"},null,512),[[c.nr,s.email]]),!n.userEmailValid&&s.email?((0,t.wg)(),(0,t.iD)("span",w,"이메일 형식이 아닙니다.")):(0,t.kq)("",!0)]),(0,t._)("div",E,[(0,t.wy)((0,t._)("input",{id:"pw","onUpdate:modelValue":a[7]||(a[7]=i=>s.pw=i),type:"password",placeholder:"비밀번호"},null,512),[[c.nr,s.pw]])]),g,(0,t._)("div",y,[(0,t._)("span",{onClick:a[8]||(a[8]=i=>n.findBoxOpen("email"))},"이메일확인"),(0,t._)("span",{onClick:a[9]||(a[9]=i=>n.findBoxOpen("pw"))},"비밀번호찾기"),(0,t.Wm)(l,{to:"/join"},{default:(0,t.w5)((()=>[V])),_:1})]),(0,t._)("div",_,[v,(0,t._)("a",{onClick:a[10]||(a[10]=i=>n.kakaoLogin())},x)])],32)])}e(7658);var $=e(9895);function B(i){let a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(String(i).toLowerCase())}var D=e(1598),A={data(){return{email:"",pw:"",findEmail:"",emailVerificationCodeCheck:"",emailVerificationKakaoYn:"",findBoxType:""}},computed:{userEmailValid(){return B(this.email)}},created(){console.log(this.$route.params),this.$route.params.token&&this.kakaoTokenCall()},methods:{loginCkeck(){let i="";this.email?this.userEmailValid?this.pw?this.loginOk():(i="비밀번호를 입력해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",i)):(i="이메일 형식으로 입력해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",i)):(i="이메일을 입력해주세요.",this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",i))},async loginOk(){const i={email:this.email,pw:this.pw};this.pwClear();try{const a=await this.$store.dispatch("LOGIN",i),e=(0,D.Z)(a.token);"ROLE_HOST"==e.auth?this.$router.push("/host"):"ROLE_MASTER"==e.auth?this.$router.push("/master"):this.$router.push("/")}catch(a){let i="이메일과 비밀번호를 확인해주세요.";this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",i)}},pwClear(){this.pw=""},findBoxOpen(i){this.findBoxType=i},findBoxClose(){this.findBoxType="",this.findEmail="",this.emailVerificationCodeCheck=""},async emailVeificaionSend(i){this.$store.dispatch("SPINNERVIEW",!0);try{let a;a="pw"==i?await(0,$.te)(this.findEmail):await(0,$.TS)(this.findEmail),console.log(a),this.emailVerificationCodeCheck=a.request.status,this.emailVerificationKakaoYn=a.data.KakaoYn}catch(a){console.log(a),this.emailVerificationCodeCheck=a.request.status}this.$store.dispatch("SPINNERVIEW",!1)},kakaoLogin(){window.Kakao.Auth.authorize({redirectUri:"http://15.165.247.125:8100/user/kakao/callback"})},async kakaoTokenCall(){try{const i=this.$route.query.code;await this.$store.dispatch("KAKAOLOGIN",i);let a="예약을 이용하시려면 전화번호를 입력해주세요.";this.$store.dispatch("MODALVIEWCLICK",!0),this.$store.dispatch("MODALMESSAGE",a),this.$router.push("/profile")}catch(i){console.log(i)}}}},O=e(89);const S=(0,O.Z)(A,[["render",L],["__scopeId","data-v-8a7509ac"]]);var M=S,K={components:{FormLogin:M},created(){this.$store.dispatch("SPINNERVIEW",!1)}};const q=(0,O.Z)(K,[["render",l],["__scopeId","data-v-96d2ae8a"]]);var T=q}}]);
//# sourceMappingURL=525.c613cfe4.js.map