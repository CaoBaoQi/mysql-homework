"use strict";(self["webpackChunkstu_score_front"]=self["webpackChunkstu_score_front"]||[]).push([[174],{9174:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"adminChooseCourse"},[e("font",{staticStyle:{margin:"0 auto"}}),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"给所有学生选好当前可选的必修课程",placement:"top"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.adminChooseCourse}},[t._v("一键选课")])],1)],1),e("div",{staticClass:"entertainment"},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"给所有学生的已选课程的未打分课程进行随机打分",placement:"left"}},[e("el-button",{attrs:{round:"",type:"primary"},on:{click:t.adminScoreRandomly}},[t._v("一键打分")])],1),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"清空所有学生的成绩",placement:"bottom"}},[e("el-button",{attrs:{round:"",type:"primary"},on:{click:t.cancelAllScore}},[t._v("分数置空")])],1),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"撤销所有学生的选课记录",placement:"right"}},[e("el-button",{attrs:{round:"",type:"primary"},on:{click:t.cancelChooseCourse}},[t._v("一键退课")])],1)],1)])},o=[],n=s(4161),c=s(7344),r={name:"OneClick",methods:{adminChooseCourse(){n.Z.get(c.Z.baseURL+"/admin/adminChooseCourse",{headers:{Authorization:this.$store.state.token}}).then((t=>{"20000"==t.data.code?this.$message.success(t.data.msg):this.$message.error(t.data.msg)}))},adminScoreRandomly(){this.$confirm("确认执行一键打分？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((()=>{n.Z.get(c.Z.baseURL+"/admin/adminScoreRandomly",{headers:{Authorization:this.$store.state.token}}).then((t=>{"20000"==t.data.code?this.$message.success(t.data.msg):this.$message.error(t.data.msg)}))})).catch((()=>{this.$message({type:"info",message:"已取消一键打分"})}))},cancelAllScore(){this.$confirm("确认执行分数置空？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((()=>{n.Z["delete"](c.Z.baseURL+"/score/cancelAllScore",{headers:{Authorization:this.$store.state.token}}).then((t=>{"20000"==t.data.code?this.$message.success(t.data.msg):this.$message.error(t.data.msg)}))})).catch((()=>{this.$message({type:"info",message:"已取消分数置空"})}))},cancelChooseCourse(){this.$confirm("确认执行一键退课？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((()=>{n.Z["delete"](c.Z.baseURL+"/chooseCourse/cancelChooseCourse",{headers:{Authorization:this.$store.state.token}}).then((t=>{"20000"==t.data.code?this.$message.success(t.data.msg):this.$message.error(t.data.msg)}))})).catch((()=>{this.$message({type:"info",message:"已取消一键退课"})}))}}},i=r,l=s(3736),m=(0,l.Z)(i,a,o,!1,null,"f7f0b8c4",null),h=m.exports},7344:function(t,e){const s={assertsSubDirectory:"static",assertsPublicPath:"/",baseURL:"http://118.31.60.230:8091",timeout:2e4,changeOrigin:!0};e["Z"]=s}}]);
//# sourceMappingURL=174.6e86dd73.js.map