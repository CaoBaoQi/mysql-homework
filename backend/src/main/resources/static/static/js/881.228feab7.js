"use strict";(self["webpackChunkstu_score_front"]=self["webpackChunkstu_score_front"]||[]).push([[881],{7881:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[0==t.msgList.length?e("h1",{staticStyle:{"text-align":"center"}},[t._v("消息为空")]):t._e(),t._l(t.msgList,(function(s,a){return e("el-card",{staticStyle:{margin:"20px auto"},attrs:{header:""}},[e("div",{staticStyle:{margin:"10px auto"}},[t._v("内容："+t._s(s.msgContent))]),e("div",{staticStyle:{margin:"10px auto"}},[t._v("时间："+t._s(s.msgTime))]),e("div",[e("el-button",{staticStyle:{float:"right"},attrs:{round:"",type:"primary"},on:{click:function(e){return t.delMsg(s)}}},[t._v("删除")])],1)])})),e("el-backtop",{attrs:{"visibility-height":200}},[e("div",{staticStyle:{"{\n      height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .30)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v(" ↑ ")])])],2)},i=[],n=s(4161),r=s(7344),o={name:"StuMessage",data(){return{msgList:[{msgTime:""}]}},methods:{getMsgList(){n.Z.get(r.Z.baseURL+"/stuMessage/getMsgsByStuId?stuId="+this.$store.state.userInfo.stuId,{headers:{Authorization:this.$store.state.token}}).then((t=>{"20000"==t.data.code&&(this.msgList=t.data.data)}))},delMsg(t){this.$confirm("确认删除该消息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((()=>{n.Z["delete"](r.Z.baseURL+"/stuMessage/delById?msgId="+t.msgId+"&stuId="+t.stuId,{headers:{Authorization:this.$store.state.token}}).then((t=>{"20000"==t.data.code?(this.getMsgList(),this.$message.success(t.data.msg)):this.$message.error(t.data.msg)})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))}))}},created(){this.getMsgList()}},c=o,g=s(3736),u=(0,g.Z)(c,a,i,!1,null,"046ed12d",null),d=u.exports},7344:function(t,e){const s={assertsSubDirectory:"static",assertsPublicPath:"/",baseURL:"http://118.31.60.230:8091",timeout:2e4,changeOrigin:!0};e["Z"]=s}}]);
//# sourceMappingURL=881.228feab7.js.map