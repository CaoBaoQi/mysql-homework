"use strict";(self["webpackChunkstu_score_front"]=self["webpackChunkstu_score_front"]||[]).push([[192],{3858:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("h1",[t._v("大学生成绩管理系统")]),e("el-button",{attrs:{type:"success",round:"",icon:"el-icon-switch-button"},on:{click:t.logout}},[t._v("退出登录")])],1)},n=[],i=(s(7658),s(4161)),l=s(7344),r={name:"Header",methods:{logout(){i.Z.get(l.Z.baseURL+"/logout",{headers:{Authorization:this.$store.state.token}}).then((t=>{(t.data.code="20000")?(this.$store.commit("REMOVE_INFO"),this.$router.push("/login"),this.$message.success(t.data.msg)):this.$message.error("注销失败")}))}}},o=r,c=s(3736),u=(0,c.Z)(o,a,n,!1,null,"7573ff2d",null),d=u.exports},6192:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("TeaLeftSide")],1),e("el-container",[e("el-header",{staticStyle:{padding:"0 10px"}},[e("Header")],1),e("el-main",{staticStyle:{padding:"0 10px"}},[e("router-view")],1)],1)],1)},n=[],i=s(3858),l=function(){var t=this,e=t._self._c;return e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff",router:!0,"active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[e("el-menu-item",{attrs:{index:"/teacher/index"}},[e("i",{staticClass:"el-icon-user"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("个人信息")])]),e("el-menu-item",{attrs:{index:"/teacher/classScore"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("本班成绩表")])]),e("el-menu-item",{attrs:{index:"/teacher/majorScore"}},[e("i",{staticClass:"el-icon-s-grid"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("本专业成绩表")])]),e("el-menu-item",{attrs:{index:"/teacher/hasSendMsg"}},[e("i",{staticClass:"el-icon-chat-line-square"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("已发消息")])])],1)},r=[],o={name:"TeaLeftSide",methods:{handleOpen(t,e){},handleClose(t,e){}}},c=o,u=s(3736),d=(0,u.Z)(c,l,r,!1,null,"4f432843",null),h=d.exports,f={name:"Teacher",components:{Header:i.Z,TeaLeftSide:h}},m=f,p=(0,u.Z)(m,a,n,!1,null,"01b8496b",null),_=p.exports},7344:function(t,e){const s={assertsSubDirectory:"static",assertsPublicPath:"/",baseURL:"http://118.31.60.230:8091",timeout:2e4,changeOrigin:!0};e["Z"]=s}}]);
//# sourceMappingURL=192.7f2f352f.js.map