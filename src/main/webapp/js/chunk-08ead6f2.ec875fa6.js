(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08ead6f2"],{2140:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("div",{staticClass:"container"},[a("div",{staticClass:"alternation"},[a("router-link",{attrs:{to:"/signup"}},[a("button",{staticClass:"button button-rounded"},[e._v("普通注册")])]),a("router-link",{attrs:{to:"/clubsignup"}},[a("button",{staticClass:"button button-rounded"},[e._v("社团注册")])])],1),a("Panel",{staticClass:"panel"},[a("InputInfo",e._b({model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}},"InputInfo",{isTrue:!1,isFalse:!1,type:"text",placeholder:"用户名"},!1)),a("InputInfo",e._b({model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},"InputInfo",{isTrue:!1,isFalse:!1,type:"password",placeholder:"密码"},!1)),a("InputInfo",e._b({on:{blur:e.checkPassword},model:{value:e.repassword,callback:function(t){e.repassword=t},expression:"repassword"}},"InputInfo",{isTrue:e.isCorrect,isFalse:e.isDiffrent,msg:"两次输入的密码不一致",type:"password",placeholder:"确认密码"},!1))],1),a("div",[e._v("基本信息")]),a("Panel",{staticClass:"panel"},[a("InputInfo",e._b({model:{value:e.realName,callback:function(t){e.realName=t},expression:"realName"}},"InputInfo",{isTrue:!1,isFalse:!1,type:"text",placeholder:"真实姓名"},!1)),a("InputInfo",e._b({model:{value:e.email,callback:function(t){e.email=t},expression:"email"}},"InputInfo",{isTrue:e.isSent,isFalse:e.notFilledEmail,msg:"请输入正确的邮箱",type:"email",placeholder:"邮箱"},!1)),a("InputInfo",e._b({model:{value:e.captcha,callback:function(t){e.captcha=t},expression:"captcha"}},"InputInfo",{isTrue:!1,isFalse:!1,type:"text",placeholder:"验证码"},!1),[a("button",{staticClass:"button button-primary button-rounded button-captcha",on:{click:e.sendCaptcha}},[e._v("发送验证码")])]),a("InputInfo",e._b({model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},"InputInfo",{isTrue:!1,isFalse:!1,type:"tel",placeholder:"手机号码"},!1))],1),a("div",[e._v("注册信息")]),a("Panel",{staticClass:"panel"},[a("InputInfo",e._b({model:{value:e.clubName,callback:function(t){e.clubName=t},expression:"clubName"}},"InputInfo",{isTrue:!1,isFalse:!1,type:"text",placeholder:"社团名称"},!1)),a("select",{directives:[{name:"model",rawName:"v-model",value:e.clubType,expression:"clubType"}],attrs:{name:"select"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.clubType=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"value1"}},[e._v("Value 1")]),a("option",{attrs:{value:"value2",selected:""}},[e._v("Value 2")]),a("option",{attrs:{value:"value3"}},[e._v("Value 3")])]),a("InputInfo",e._b({model:{value:e.description,callback:function(t){e.description=t},expression:"description"}},"InputInfo",{isTrue:!1,isFalse:!1,type:"text",placeholder:"社团描述"},!1)),a("button",{staticClass:"button button-primary button-rounded button-signup",on:{click:e.signUp}},[e._v("注册")])],1)],1)])},n=[],o=(a("386d"),a("7662")),l=a("9c97"),i=a("bc3a"),r=a.n(i),c={components:{InputInfo:o["a"],Panel:l["a"]},data:function(){return{userName:"",password:"",realName:"",email:"",captcha:"",phone:"",clubName:"",clubType:"",description:"",repassword:"",notFilledEmail:!1,isCorrect:!1,isDiffrent:!1,isSent:!1}},methods:{checkPassword:function(){this.isCorrect=!1,this.repassword&&(this.password!==this.repassword?this.isDiffrent=!0:(this.isCorrect=!0,this.isDiffrent=!1))},sendCaptcha:function(){var e=this;-1===this.email.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)?this.notFilledEmail=!0:(this.notFilledEmail=!1,r.a.post("/reg/club/captcha",{email:this.email},{headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){console.log(t.data),t.data.code?alert(t.data.msg):e.isSent=!0}).catch(function(e){console.log(e)}))},signUp:function(){var e={userName:this.userName,password:this.password,realName:this.realName,email:this.email,captcha:this.captcha,phone:this.phone,clubName:this.clubName,clubType:this.clubType,description:this.description},t="/reg/club",a=!1;for(var s in console.log(e),e)if(e.hasOwnProperty(s)){var n=e[s];if(!n){alert("还有未填项！"),a=!1;break}a=!0}a&&r.a.post(t,e,{headers:{"Content-Type":"x-www-form-urlencoded"}}).then(function(e){console.log(e.data),2===e.data.code&&-1!==e.data.msg.search(/JDBC/)?alert("数据库正在重新连接，请重试"):0!==e.data.code&&alert(e.data.msg)}).catch(function(e){console.log(e)})}}},u=c,p=(a("26f5"),a("2877")),d=Object(p["a"])(u,s,n,!1,null,"577fc750",null);t["default"]=d.exports},"26f5":function(e,t,a){"use strict";var s=a("b482"),n=a.n(s);n.a},b482:function(e,t,a){}}]);
//# sourceMappingURL=chunk-08ead6f2.ec875fa6.js.map