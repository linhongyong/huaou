(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12cf"],{"02c9":function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return l});n("ac6a"),n("cadf"),n("551c"),n("097d");var o=function(t,e){var n=[];return function t(e,n,o){e.forEach(function(e,a){for(var i=0;i<n.length;i++)if(e.meta.title==n[i].menuName){if(e.meta.hideInMenu=!1,e.children){var l=e.children;e.children=[],t(l,n[i].childMenus,e.children)}break}o.push(e)})}(t,e,n),n},a=function(t,e,n){var o=[];return function t(o,a){o.forEach(function(o,i){if(o[e]==n&&a.push(o),o.childMenus&&o.childMenus.length){var l=o.childMenus;a[i].childMenus=[],t(l,a[i].childMenus)}})}(t,o),o},i=function(t,e,n){var o=[];return function t(a){a.forEach(function(a,i){a[e]==n&&o.push(a),a.childMenus&&a.childMenus.length&&t(a.childMenus)})}(t),o},l=function(t){if(!t||!t.length)return[];var e=[],n=0;return e[n]=[t[0]],t.reduce(function(t,o){return o-t===1?e[n].push(o):e[++n]=[o],o}),e}},"0a96":function(t,e,n){"use strict";var o=n("9775"),a=n.n(o);a.a},"16ee":function(t,e,n){"use strict";var o=n("6a74"),a=n.n(o);a.a},"30d9":function(t,e,n){},"421f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("Card",[n("Table",{attrs:{width:"100%",border:"",columns:t.columns2,data:t.joinedList}}),n("div",{staticStyle:{padding:"18px 10px 18px","text-align":"right",clear:"both"}},[n("Page",{staticClass:"float-l",attrs:{total:t.total,"show-total":"","show-elevator":"","show-sizer":"",current:t.pageIndex},on:{"on-change":t.pageChange,"on-page-size-change":t.pageSizeChange}}),n("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add",disabled:!this.isAccessForButton("0013")},on:{click:function(e){t.addModal.show=!0}}})],1)],1),n("Modal",{attrs:{title:"修改工程信息: "+t.obj.projectName,"footer-hide":!0,width:"60%"},on:{"on-cancel":t.onCancelEditModal},model:{value:t.editModal.show,callback:function(e){t.$set(t.editModal,"show",e)},expression:"editModal.show"}},[n("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[n("Edit",{attrs:{obj:t.project},on:{editModalClose:t.editModalClose}})],1)]),n("Modal",{attrs:{title:"创建工程","footer-hide":!0,width:"60%"},model:{value:t.addModal.show,callback:function(e){t.$set(t.addModal,"show",e)},expression:"addModal.show"}},[n("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[n("Add",{on:{addModalClose:t.addModalClose}})],1)]),n("Modal",{attrs:{title:"设置旁站模板："+t.obj.projectName,"footer-hide":!0,width:"60%"},model:{value:t.isPangzhanTmplSetShow,callback:function(e){t.isPangzhanTmplSetShow=e},expression:"isPangzhanTmplSetShow"}},[n("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[n("TmplSet",{attrs:{obj:t.obj,buildList:t.buildList},on:{modalAction:t.onModalAction}})],1)]),n("Modal",{attrs:{title:"设置项目人员和职务: "+t.obj.projectName,"footer-hide":!0,width:"60%"},model:{value:t.isProjectStaffsRoleSetShow,callback:function(e){t.isProjectStaffsRoleSetShow=e},expression:"isProjectStaffsRoleSetShow"}},[n("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[n("setRole",{attrs:{obj:t.obj},on:{modalAction:t.onModalAction}})],1)]),n("modalBuilding",{attrs:{data:t.project},model:{value:t.modal_building.show,callback:function(e){t.$set(t.modal_building,"show",e)},expression:"modal_building.show"}})],1)},a=[],i=(n("7f7f"),n("f751"),n("cadf"),n("551c"),n("097d"),n("fa69")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{ref:"obj",attrs:{model:t.obj,rules:t.ruleCustom}},[n("Row",{attrs:{type:"flex",justify:"center"}},[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"项目名称",prop:"projectName"}},[n("Input",{attrs:{placeholder:""},model:{value:t.obj.projectName,callback:function(e){t.$set(t.obj,"projectName",e)},expression:"obj.projectName"}})],1)],1)],1),n("FormItem",{staticStyle:{"text-align":"right"}},[n("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit("obj")}}},[t._v("保存")]),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset("obj")}}},[t._v("取消")])],1)],1)},s=[],r=n("7b6c"),c=n("d78e"),u=n("7c6d"),d=n("f087"),p={data:function(){var t=function(t,e,n){""===e&&n(new Error("必填")),n()},e=function(t,e,n){-1===e&&n(new Error("必填")),n()};return{ruleCustom:{projectName:[{validator:t,trigger:"blur"}],currentRoleIndex:[{validator:e,trigger:"blur"}]},roleList:[],userList:[],currentRoleIndex:-1,searchKey:""}},props:{obj:{type:Object,default:function(){return{}}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(n){n?c["a"].updateProject({id:e.obj.id,projectName:e.obj.projectName},function(n){e.$refs[t].resetFields(),e.$Message.success({content:"修改成功！",onClose:function(){e.$emit("editModalClose",!0)}})},function(t){e.$Message.error("修改失败")}):e.$Message.error("提交失败!")})},handleReset:function(t){this.$refs[t].resetFields(),this.$emit("editModalClose",!0)}}},h=p,f=(n("56b4"),n("2877")),m=Object(f["a"])(h,l,s,!1,null,null,null);m.options.__file="project-edit.vue";var g=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{ref:"obj",attrs:{model:t.obj,rules:t.ruleCustom}},[n("Row",{attrs:{type:"flex",justify:"center"}},[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"项目名称",prop:"projectName"}},[n("Input",{attrs:{placeholder:""},model:{value:t.obj.projectName,callback:function(e){t.$set(t.obj,"projectName",e)},expression:"obj.projectName"}})],1)],1)],1),n("FormItem",{staticStyle:{"text-align":"right"}},[n("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit("obj")}}},[t._v("保存")]),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset("obj")}}},[t._v("取消")])],1)],1)},y=[],j={data:function(){var t=function(t,e,n){""===e&&n(new Error("必填")),n()};return{ruleCustom:{projectName:[{validator:t,trigger:"blur"}]},obj:{projectName:""}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(n){n?c["a"].addProjectByName({projectName:e.obj.projectName}).then(function(n){e.$refs[t].resetFields(),e.$Message.success({content:"添加成功！",onClose:function(){e.$emit("addModalClose",!0)}})}).catch(function(t){e.$Message.error("添加失败")}):e.$Message.error("提交失败!")})},handleReset:function(t){this.$refs[t].resetFields(),this.$emit("addModalClose",!0)}}},v=j,x=(n("16ee"),Object(f["a"])(v,b,y,!1,null,null,null));x.options.__file="project-add.vue";var S=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",[n("Row",{attrs:{type:"flex",justify:"space-around"}},[n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{label:"选择楼栋",prop:"building"}},[n("Select",{on:{"on-change":t.onSelectedChange},model:{value:t.buildValue,callback:function(e){t.buildValue=e},expression:"buildValue"}},t._l(t.buildList,function(e,o){return n("Option",{key:o,attrs:{value:"buildingId-"+e.id+"-"+e.buildingCode}},[t._v(t._s(e.buildingName+" ( 共"+e.pileNum+"根桩)"))])}))],1)],1),n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{label:"选择旁站类型",prop:"currentIndex"}},[n("Select",{on:{"on-change":t.onSelectedChange},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},[n("Option",{attrs:{value:"type-0001-机械灌注桩"}},[t._v("机械灌注桩")]),n("Option",{attrs:{value:"type-0002-水泥搅拌桩"}},[t._v("水泥搅拌桩")]),n("Option",{attrs:{value:"type-0003-预应力搅拌桩"}},[t._v("预应力搅拌桩")])],1)],1)],1),n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{label:"选择模板",prop:"currentIndex"}},[n("Select",{on:{"on-change":t.onSelectedChange},model:{value:t.templateValue,callback:function(e){t.templateValue=e},expression:"templateValue"}},t._l(t.tmplList,function(e,o){return n("Option",{key:o,attrs:{value:"templateId-"+e.id+"-"+e.templateName}},[t._v(t._s(e.templateName))])}))],1)],1),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"模板范围 如：1-100，102,103"}},[n("Input",{model:{value:t.bodyObj.pileRange,callback:function(e){t.$set(t.bodyObj,"pileRange",e)},expression:"bodyObj.pileRange"}})],1)],1),n("Col",[n("FormItem",{attrs:{label:" "}},[n("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("保存")])],1)],1)],1),n("div",{staticStyle:{"min-height":"300px",padding:"10px 20px"}},[t.labelObj.buildingId&&t.labelObj.type?n("div",{},[n("h3",{},[t._v(t._s(t.labelObj.buildingId)+"号楼，"+t._s(t.labelObj.type)+"模板使用情况")]),t._l(t.tmplList,function(e){return n("div",{key:e.id,staticStyle:{padding:"20px 20px 10px",overflow:"hidden"}},[n("div",{staticStyle:{"margin-right":"20px",width:"160px","text-align":"right",float:"left","margin-top":"5px"}},[n("Tag",{attrs:{color:"success"}},[t._v(t._s(e.templateName)+" 模板:")])],1),t._l(e.pileList,function(o,a){return e.pileList.length>0?n("div",{key:a,staticStyle:{"margin-right":"20px",float:"left","margin-top":"5px"}},[n("span",{staticStyle:{"padding-right":"5px"}},[t._v(t._s(o.length>1?o[0]+" 号桩 — "+o[o.length-1]+"号桩":o[0]+"号桩"))])]):t._e()}),0==e.pileList.length?n("div",{staticStyle:{"margin-right":"20px",float:"left","margin-top":"5px"}},[t._v("暂无")]):t._e()],2)})],2):t._e()]),n("FormItem",{staticStyle:{"text-align":"right"}},[n("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleReset()}}},[t._v("确定")]),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset()}}},[t._v("取消")])],1)],1)},w=[],_=(n("28a5"),n("02c9")),C=(n("66df"),n("a93f")),T=new Object;T.setTmplusedRange=function(t){return C["a"].post({url:"/template/analyzeTemplateRange",data:t})},T.getPangzhanTmplInfo=function(t){return C["a"].post({url:"/template/getTemplateRange",data:t})};var I=T,L=n("ece3"),R=n("be10"),M={data:function(){return{typeValue:null,templateValue:null,buildValue:null,tmplList:[],userList:[],pangzhanTmplMapList:[],currentIndex:-1,searchKey:"",bodyObj:{pileRange:null},labelObj:{}}},props:{obj:{type:Object,default:function(){return{}}},buildList:{type:Array,default:function(){return[]}}},watch:{obj:function(t){this.typeValue=null,this.buildValue=null,this.templateValue=null,this.tmplList=[]}},methods:{onSelectedChange:function(t){if(t){var e=t.split("-");this.bodyObj[e[0]]=e[1],this.labelObj[e[0]]=e[2],console.log(e),console.log(this.bodyObj),"type"==e[0]&&this.getTemplList(),"buildingId"==e[0]&&(this.typeValue=null,this.templateValue=null,this.tmplList=[])}},getPangzhanTmplInfo:function(){var t=this,e={projectId:this.obj.id,buildingId:this.bodyObj.buildingId,type:this.bodyObj.type,pageIndex:1,pageSize:100};e.projectId&&e.buildingId&&e.type&&I.getPangzhanTmplInfo(e).then(function(e){console.log(e),t.pangzhanTmplMapList=e.list;for(var n=t.tmplList,o=e.list,a=0,i=n.length;a<i;a++){n[a].pileList=[];for(var l=0,s=o.length;l<s;l++)n[a].id==o[l].templateId&&n[a].pileList.push(o[l].pileCode);t.$set(t.tmplList[a],"pileList",Object(_["b"])(n[a].pileList)),console.log(t.tmplList[a].pileList)}console.log(t.tmplList)})},getTemplList:function(){var t=this;if("0001"==this.bodyObj.type){var e={pageIndex:0,pageSize:100,data:this.obj.id};L["a"].getJxgzTmplListByProjectId(e).then(function(e){console.log(e);for(var n=0;n<e.list.length;n++)e.list[n].pileList=[];t.tmplList=e.list,t.getPangzhanTmplInfo()})}else"0002"==this.bodyObj.type?R["a"].getTmplList({pageIndex:1,pageSize:100}).then(function(e){console.log(e);for(var n=0;n<e.list.length;n++)e.list[n].pileList=[];t.tmplList=e.list,t.getPangzhanTmplInfo()}):"0003"==this.bodyObj.type&&(this.tmplList=[])},handleSubmit:function(){var t=this;this.bodyObj.projectId=this.obj.id,this.bodyObj.buildingId&&this.bodyObj.pileRange&&this.bodyObj.type&&this.bodyObj.templateId&&this.bodyObj.projectId?I.setTmplusedRange(this.bodyObj).then(function(e){console.log(e),t.$Message.success("操作成功"),t.getPangzhanTmplInfo(),t.bodyObj.pileRange=null}).catch(function(e){console.log(e),t.$Message.error(e.message)}):this.$Message.error("请填写完整信息")},handleReset:function(t){this.bodyObj.pileRange=null,this.$emit("modalAction",{type:"close",name:"isPangzhanTmplSetShow"})}},mounted:function(){}},$=M,z=(n("0a96"),Object(f["a"])($,k,w,!1,null,null,null));z.options.__file="tmpl-set.vue";var B=z.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{ref:"obj",attrs:{model:t.obj,rules:t.ruleCustom}},[n("Row",{staticStyle:{"font-size":"16px","margin-bottom":"20px"},attrs:{type:"flex"}},[n("Col",{attrs:{span:"12"}})],1),n("Row",{staticClass:"border",attrs:{type:"flex",justify:"space-around"}},[n("Col",{attrs:{span:"11"}},[n("FormItem",{attrs:{label:"选择职务类型",prop:"currentRoleIndex"}},[n("Select",{on:{"on-change":t.onRoleChange}},t._l(t.roleList,function(e,o){return n("Option",{key:o,attrs:{value:o}},[t._v(t._s(e.roleName))])}))],1)],1),n("Col",{attrs:{span:"11"}},[n("FormItem",{attrs:{label:"搜索 - 添加对应职务用户"}},[n("Input",{on:{"on-change":t.searchUser},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),n("div",{staticStyle:{"z-index":"9999",width:"100%",position:"absolute","background-color":"#fff"},attrs:{id:""}},t._l(t.userList,function(e,o){return""!=e.userName||""!=e.mobile?n("div",{key:o},[n("div",{staticClass:"user-item display-flex-center-between"},[n("div",{},[t._v(t._s(e.userName)+"("+t._s(e.mobile)+")")]),n("span",{staticStyle:{color:"#2d8cf0",cursor:"pointer"},on:{click:function(e){t.selectUser(o)}}},[t._v("添加")])])]):t._e()}))],1)],1)],1),n("div",{staticStyle:{"min-height":"150px"}},t._l(t.obj.roleTypeList,function(e){return n("Row",{key:e.id,staticClass:"menber-row",attrs:{type:"flex"}},[n("span",{},[n("Tag",{attrs:{color:"success"}},[t._v(t._s(e)+" : ")])],1),t._l(t.obj.hooks[e],function(o,a){return n("span",{key:a,staticStyle:{"padding-left":"20px","font-size":"18px"}},[n("Tag",{attrs:{closable:"",name:a+"-"+e+"-"+o.id},on:{"on-close":t.removeRoleUser}},[t._v(t._s(o.userName)+" ")])],1)})],2)})),n("FormItem",{staticStyle:{"text-align":"right"}},[n("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("确定")]),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset()}}},[t._v("取消")])],1)],1)},N=[],P={data:function(){var t=function(t,e,n){""===e&&n(new Error("必填")),n()},e=function(t,e,n){-1===e&&n(new Error("必填")),n()};return{ruleCustom:{projectName:[{validator:t,trigger:"blur"}],currentRoleIndex:[{validator:e,trigger:"blur"}]},roleList:[],userList:[],currentRoleIndex:-1,searchKey:""}},props:{obj:{type:Object,default:function(){return{}}}},methods:{removeRoleUser:function(t,e){var n=this;console.log(e);var o=e.split("-")[0],a=e.split("-")[1],i=e.split("-")[2];c["a"].deleteUserRole({id:i},function(t){for(var e in n.obj.hooks[a].splice(o,1),console.log(n.obj.hooks[a]),n.obj.hooks=Object.assign({},n.obj.hooks),n.obj.roleTypeList=[],n.obj.hooks)if(0==n.obj.hooks[e].length){var i=n.obj;delete i.hooks[e]}else n.obj.roleTypeList.push(e);n.$Message.success(t.message),console.log(n.obj.roleTypeList),console.log(n.obj.hooks[a]),console.log(n.obj.hooks)})},selectUser:function(t){var e=this;console.log(t),-1!=this.currentRoleIndex?c["a"].addUserRole({roleId:this.roleList[this.currentRoleIndex].id,userId:this.userList[t].id,projectId:this.obj.project.id},function(n){for(var o in e.hooks=r["a"].addhooks(e.obj.hooks,e.roleList[e.currentRoleIndex].roleName,e.userList[t]),e.obj.roleTypeList=[],e.obj.hooks)e.obj.roleTypeList.push(o);e.userList=[],e.searchKey="",console.log(e.obj.hooks),console.log(e.obj.userRoles),e.$Message.success(n.message)},function(t){e.$Message.error(t.message)}):this.$Message.error("请选择职务!")},onRoleChange:function(t){console.log(t),this.currentRoleIndex=t},searchUser:function(t){var e=this;console.log(t.data),d["a"].searchUsers({searchStr:t.data},function(t){console.log(t.result),t.result.length>3&&(t.result.length=3),e.userList=t.result})},handleSubmit:function(){this.$emit("modalAction",{type:"close",name:"isProjectStaffsRoleSetShow"})},handleReset:function(t){this.obj.hooks=[],this.obj.roleTypeList=[],this.$emit("modalAction",{type:"close",name:"isProjectStaffsRoleSetShow"})}},mounted:function(){var t=this;u["a"].getRolesByType({type:1},function(e){console.log(e),t.roleList=e.result})}},D=P,F=(n("bb90"),Object(f["a"])(D,O,N,!1,null,null,null));F.options.__file="setProjectRole.vue";var E=F.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{title:"设置楼栋信息: "+t.data.projectName,width:"80%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("Form",{ref:"form",attrs:{inline:"",model:t.buildData,rules:t.ruleValidate}},[n("FormItem",{attrs:{label:"楼栋名","label-width":80,prop:"buildingName"}},[n("Input",{model:{value:t.buildData.buildingName,callback:function(e){t.$set(t.buildData,"buildingName",e)},expression:"buildData.buildingName"}})],1),n("FormItem",{attrs:{label:"楼栋编号","label-width":80,prop:"buildingCode"}},[n("Input",{model:{value:t.buildData.buildingCode,callback:function(e){t.$set(t.buildData,"buildingCode",e)},expression:"buildData.buildingCode"}})],1),n("FormItem",{attrs:{label:"总桩数","label-width":80}},[n("InputNumber",{attrs:{min:0,max:1e3},model:{value:t.buildData.pileNum,callback:function(e){t.$set(t.buildData,"pileNum",e)},expression:"buildData.pileNum"}})],1),n("FormItem",{attrs:{"label-width":20}},[0===t.buttonType?n("Button",{attrs:{type:"primary"},on:{click:t.addBuildData}},[t._v("添加")]):n("Button",{attrs:{type:"primary"},on:{click:t.updateBuildData}},[t._v("确认修改")])],1)],1),n("Table",{attrs:{columns:t.columns,data:t.buildList}}),n("template",{slot:"footer"},[n("Button",{attrs:{type:"primary"},on:{click:t.handleOk}},[t._v("确定")]),n("Button",{attrs:{type:"primary",ghost:""},on:{click:t.handleCancel}},[t._v("取消")])],1)],2)},J=[],A=(n("c5f6"),n("c276"),function(){return{buildingName:"",buildingCode:"",pileNum:0}}),K={props:{value:{type:Boolean,default:!1},data:Object},data:function(){var t=this;return{show:!1,buildData:A(),buildList:[],buttonType:0,columns:[{title:"楼栋名",key:"buildingName"},{title:"楼栋代码",key:"buildingCode"},{title:"总桩数",key:"pileNum"},{title:"操作",render:function(e,n){return e("div",[e("Button",{props:{type:"success",size:"small"},on:{click:function(e){var o=n.row;o.buildingName,o.buildingCode,o.pileNum;t.buildData=Object.assign({},n.row),t.buttonType=1}},style:{marginRight:"5px"}},"修改")])}}],ruleValidate:{buildingName:{required:!0,message:"请输入楼栋名",trigger:"blur"},buildingCode:{required:!0,message:"请输入楼栋代码",trigger:"blur"}}}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)},data:function(t){this.data.isModalBuildingShow&&this.getBuildList()}},methods:{getBuildList:function(){var t=this;c["a"].getBuildList({projectId:Number(this.data.id)}).then(function(e){t.buildList=e}).catch(function(e){t.$Message.error("获取楼栋数据失败")})},addBuildData:function(){var t=this;this.$refs.form.validate(function(e){e&&c["a"].addBuild(Object.assign(t.buildData,{projectId:Number(t.data.id)})).then(function(){t.$Message.success("添加成功"),t.buildData=A(),t.getBuildList()}).catch(function(e){t.$Message.error("添加失败")})})},updateBuildData:function(){var t=this;this.$refs.form.validate(function(e){e&&c["a"].updateBuild(Object.assign(t.buildData,{projectId:Number(t.data.id)})).then(function(){t.$Message.success("修改成功"),t.buildData=A(),t.getBuildList(),t.buttonType=0}).catch(function(e){t.$Message.error("修改失败"),t.buttonType=0})})},handleOk:function(){this.$emit("input",!1)},handleCancel:function(){this.$emit("input",!1)}}},q=K,U=Object(f["a"])(q,V,J,!1,null,null,null);U.options.__file="modal-building.vue";var G=U.exports,Z={components:{Tables:i["a"],Edit:g,Add:S,TmplSet:B,setRole:E,modalBuilding:G},data:function(){var t=this;return{isPangzhanTmplSetShow:!1,isProjectStaffsRoleSetShow:!1,obj:{},editModal:{show:!1},addModal:{show:!1},setModal:{show:!1},setRoleModal:{show:!1},modal_building:{show:!1},project:{},hooks:{},roleTypeList:[],columns2:[{title:"工程名",key:"projectName"},{title:"Action",key:"action",render:function(e,n){return e("div",[e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0018")},on:{click:function(e){t.project=n.row,t.editModal.show=!0}},style:{marginRight:"5px"}},"修改"),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0014")},on:{click:function(e){t.obj=Object.assign({},t.obj,t.joinedList[n.index]),t.getBuildList(t.obj.id),t.isPangzhanTmplSetShow=!0}},style:{marginRight:"5px"}},"设置旁站模板"),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0015")},on:{click:function(e){c["a"].getProjectDetail({id:t.joinedList[n.index].id},function(e){t.hooks={},t.roleTypeList=[],console.log(e);for(var n=0;n<e.result.userRoleDTOS.length;n++)t.addhooks(e.result.userRoleDTOS[n].roleName,e.result.userRoleDTOS[n]);for(var o in t.hooks)t.roleTypeList.push(o);e.result.hooks=t.hooks,e.result.roleTypeList=t.roleTypeList,e.result.projectName=e.result.project.projectName,t.obj=e.result,t.isProjectStaffsRoleSetShow=!0,console.log(t.obj)},function(e){t.$Message.error(e.message)})}},style:{marginRight:"5px"}},"设置项目用户和职务"),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0016")},on:{click:function(e){n.row.isModalBuildingShow=!0,t.project=n.row,t.modal_building.show=!0}},style:{marginRight:"5px"}},"设置楼栋信息"),e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(n.index),c["a"].deleteProject({id:t.joinedList[n.index].id},function(){t.joinedList.splice(n.index,1),t.total=t.total-1,t.$Message.success("删除成功！")})}}},[e("Button",{props:{type:"error",size:"small",disabled:!t.isAccessForButton("0017")}},"删除")])])}}],joinedList:[],buildList:[],pageIndex:1,pageSize:10,total:0}},methods:{onModalAction:function(t){console.log(t),"close"==t.type?this[t.name]=!1:"show"==t.type?this[t.name]=!0:console.error("不存在这种模态框行为"),this.getJoinedList()},addhooks:function(t,e){var n=this.hooks[t];n||(n=[]),n.push(e),this.hooks[t]=n},addModalClose:function(){this.addModal.show=!1,this.getJoinedList()},editModalClose:function(){this.hooks=[],this.roleTypeList=[],this.editModal.show=!1,this.getJoinedList()},getJoinedList:function(){var t=this;c["a"].getJoinedList({},function(e){console.log(e),t.joinedList=e.result,t.total=e.result.length})},getList:function(){var t=this;c["a"].getList({},function(e){console.log(e),t.joinedList=e.result,t.total=e.result.length})},getBuildList:function(t){var e=this;c["a"].getBuildList({projectId:t}).then(function(t){e.buildList=t}).catch(function(t){e.$Message.error("获取楼栋数据失败")})},pageChange:function(t){console.log(t),this.pageIndex=t,this.getJoinedList()},pageSizeChange:function(t){console.log(t),this.pageSize=parseInt(t),this.getJoinedList()},onCancelEditModal:function(){this.hooks=[],this.roleTypeList=[]},setRoleModalClose:function(){this.setRoleModal.show=!1,this.obj={}}},mounted:function(){this.getJoinedList(),d["a"].getMenusOwn().then(function(t){console.log(t)})}},H=Z,Q=(n("e3fe"),Object(f["a"])(H,o,a,!1,null,null,null));Q.options.__file="project.vue";e["default"]=Q.exports},4974:function(t,e,n){"use strict";var o=n("bbb3"),a=n.n(o);a.a},"56b4":function(t,e,n){"use strict";var o=n("c457"),a=n.n(o);a.a},"6a74":function(t,e,n){},"7c6d":function(t,e,n){"use strict";var o=n("66df"),a=n("a93f"),i=new Object;i.addRole=function(t,e,n){o["a"].request({url:"/role/add",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.deleteRole=function(t){return a["a"].post({url:"/role/delete?id=".concat(t.id),data:t})},i.updateRole=function(t,e,n){o["a"].request({url:"/role/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getRoles=function(t,e,n){o["a"].request({url:"/role/list?pageIndex=".concat(t.pageIndex,"&pageSize=").concat(t.pageSize),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getRolesByType=function(t,e,n){o["a"].request({url:"/role/getRolesByType?type=".concat(t.type),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.setRoleMenu=function(t){return a["a"].post({url:"/roleMenu/add",data:t})},e["a"]=i},9775:function(t,e,n){},"987e":function(t,e,n){},"9b438":function(t,e,n){},bb90:function(t,e,n){"use strict";var o=n("9b438"),a=n.n(o);a.a},bbb3:function(t,e,n){},be10:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var o=n("66df"),a=n("a93f"),i=new Object;i.getTmplList=function(t){return a["a"].post({url:"/snJbjPzjlTemplate/list?pageIndex=".concat(t.pageIndex,"&pageSize=").concat(t.pageSize),data:t})},i.addSnjbTmpl=function(t,e,n){return o["a"].request({url:"snJbjPzjlTemplate/addTemplate",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getSnjbTmplList=function(t,e,n){return o["a"].request({url:"snJbjPzjlTemplate/list?pageIndex=".concat(t.pageIndex,"&pageSize=").concat(t.pageSize),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getSnjbTemplate=function(t,e,n){return o["a"].request({url:"snJbjPzjlTemplate/getTemplate?id=".concat(t.id),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.deleteSnjbTmpl=function(t,e,n){return o["a"].request({url:"snJbjPzjlTemplate/delete?id=".concat(t.id),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.updateSnjbTmpl=function(t,e,n){return o["a"].request({url:"snJbjPzjlTemplate/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getDragList=function(t,e,n){return o["a"].request({url:"get_drag_list",method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},e["a"]=i},c457:function(t,e,n){},e3fe:function(t,e,n){"use strict";var o=n("987e"),a=n.n(o);a.a},ece3:function(t,e,n){"use strict";var o=n("66df"),a=n("a93f"),i=new Object;i.addJxgzTmpl=function(t,e,n){return o["a"].request({url:"jxZkGzzPzjlTemplate/addTemplate",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getJxgzTmplList=function(t,e,n){return o["a"].request({url:"jxZkGzzPzjlTemplate/list?pageIndex=".concat(t.pageIndex,"&pageSize=").concat(t.pageSize),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getJxgzTmplListByProjectId=function(t){return a["a"].post({url:"/jxZkGzzPzjlTemplate/listByProjectId",data:t})},i.getJxZkGzzPzjlTemplate=function(t,e,n){return o["a"].request({url:"jxZkGzzPzjlTemplate/getTemplate?id=".concat(t.id),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.deleteJxgzTmpl=function(t,e,n){return o["a"].request({url:"jxZkGzzPzjlTemplate/delete?id=".concat(t.id),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.updateJxgzTmpl=function(t,e,n){return o["a"].request({url:"jxZkGzzPzjlTemplate/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},i.getDragList=function(t,e,n){return o["a"].request({url:"get_drag_list",method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?n(t.data):e(t.data)})},e["a"]=i},fa69:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{overflow:"hidden"},attrs:{id:""}},[t.searchable&&"top"===t.searchPlace?n("div",{staticClass:"search-con search-con-top",staticStyle:{float:"left"}},[n("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns,function(e){return"handle"!==e.key||"expand"!==e.key?n("Option",{key:"search-col-"+e.key,attrs:{value:e.key}},[t._v(t._s(e.title))]):t._e()})),n("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),n("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.handleSearch}},[n("Icon",{attrs:{type:"search"}}),t._v("  搜索")],1)],1):t._e(),n("div",{staticStyle:{float:"right"}},[n("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-add"},on:{click:t.addModalShow}})],1)]),n("Table",{ref:"tablesMain",attrs:{data:t.insideTableData,columns:t.insideColumns,stripe:t.stripe,border:t.border,"show-header":t.showHeader,width:t.width,height:t.height,loading:t.loading,"disabled-hover":t.disabledHover,"highlight-row":t.highlightRow,"row-class-name":t.rowClassName,size:t.size,"no-data-text":t.noDataText,"no-filtered-data-text":t.noFilteredDataText},on:{"on-current-change":t.onCurrentChange,"on-select":t.onSelect,"on-select-cancel":t.onSelectCancel,"on-select-all":t.onSelectAll,"on-selection-change":t.onSelectionChange,"on-sort-change":t.onSortChange,"on-filter-change":t.onFilterChange,"on-row-click":t.onRowClick,"on-row-dblclick":t.onRowDblclick,"on-expand":t.onExpand}},[t._t("header",null,{slot:"header"}),t._t("footer",null,{slot:"footer"}),t._t("loading",null,{slot:"loading"})],2),t.searchable&&"bottom"===t.searchPlace?n("div",{staticClass:"search-con search-con-top"},[n("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns,function(e){return"handle"!==e.key?n("Option",{key:"search-col-"+e.key,attrs:{value:e.key}},[t._v(t._s(e.title))]):t._e()})),n("Input",{staticClass:"search-input",attrs:{placeholder:"输入关键字搜索"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),n("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[n("Icon",{attrs:{type:"search"}}),t._v("  搜索")],1)],1):t._e(),n("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)},a=[],i=(n("ac6a"),n("f751"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tables-edit-outer"},[t.isEditting?n("div",{staticClass:"tables-editting-con"},[n("Input",{staticClass:"tables-edit-input",attrs:{value:t.value},on:{input:t.handleInput}}),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.saveEdit}},[n("Icon",{attrs:{type:"md-checkmark"}})],1),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.canceltEdit}},[n("Icon",{attrs:{type:"md-close"}})],1)],1):n("div",{staticClass:"tables-edit-con"},[n("span",{staticClass:"value-con"},[t._v(t._s(t.value))]),t.editable?n("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:t.startEdit}},[n("Icon",{attrs:{type:"md-create"}})],1):t._e()],1)])}),l=[],s={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(t){this.$emit("input",t)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},r=s,c=(n("4974"),n("2877")),u=Object(c["a"])(r,i,l,!1,null,null,null);u.options.__file="edit.vue";var d=u.exports,p={delete:function(t,e,n){return t("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(e),n.$emit("on-delete",e)}}},[t("Button",{props:{type:"text",ghost:!0}},[t("Icon",{props:{type:"md-trash",size:18,color:"#000000"}})])])}},h=p,f=(n("30d9"),{name:"Tables",props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"}},data:function(){return{insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:"",searchValue:"",searchKey:""}},methods:{suportEdit:function(t,e){var n=this;return t.render=function(t,e){return t(d,{props:{params:e,value:n.insideTableData[e.index][e.column.key],edittingCellId:n.edittingCellId,editable:n.editable},on:{input:function(t){n.edittingText=t},"on-start-edit":function(t){n.edittingCellId="editting-".concat(t.index,"-").concat(t.column.key),n.$emit("on-start-edit",t)},"on-cancel-edit":function(t){n.edittingCellId="",n.$emit("on-cancel-edit",t)},"on-save-edit":function(t){n.value[t.row.initRowIndex][t.column.key]=n.edittingText,n.$emit("input",n.value),n.$emit("on-save-edit",Object.assign(t,{value:n.edittingText})),n.edittingCellId=""}}})},t},surportHandle:function(t){var e=this,n=t.options||[],o=[];n.forEach(function(t){h[t]&&o.push(h[t])});var a=t.button?[].concat(o,t.button):o;return t.render=function(t,n){return n.tableData=e.value,t("div",a.map(function(o){return o(t,n,e)}))},t},handleColumns:function(t){var e=this;this.insideColumns=t.map(function(t,n){var o=t;return o.editable&&(o=e.suportEdit(o,n)),"handle"===o.key&&(o=e.surportHandle(o)),o})},setDefaultSearchKey:function(){this.searchKey="expand"!==this.columns[0].key?this.columns[0].key:this.columns.length>1?this.columns[1].key:""},handleClear:function(t){""===t.target.value&&(this.insideTableData=this.value)},handleSearch:function(){var t=this;this.insideTableData=this.value.filter(function(e){return e[t.searchKey].indexOf(t.searchValue)>-1})},handleTableData:function(){this.insideTableData=this.value.map(function(t,e){var n=t;return n.initRowIndex=e,n})},exportCsv:function(t){this.$refs.tablesMain.exportCsv(t)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(t,e){this.$emit("on-current-change",t,e)},onSelect:function(t,e){this.$emit("on-select",t,e)},onSelectCancel:function(t,e){this.$emit("on-select-cancel",t,e)},onSelectAll:function(t){this.$emit("on-select-all",t)},onSelectionChange:function(t){this.$emit("on-selection-change",t)},onSortChange:function(t,e,n){this.$emit("on-sort-change",t,e,n)},onFilterChange:function(t){this.$emit("on-filter-change",t)},onRowClick:function(t,e){this.$emit("on-row-click",t,e)},onRowDblclick:function(t,e){this.$emit("on-row-dblclick",t,e)},onExpand:function(t,e){this.$emit("on-expand",t,e)},addModalShow:function(){this.$emit("addModalShow",!0)}},watch:{columns:function(t){this.handleColumns(t),this.setDefaultSearchKey()},value:function(t){this.handleTableData(),this.handleSearch()}},mounted:function(){this.handleColumns(this.columns),this.setDefaultSearchKey(),this.handleTableData()}}),m=f,g=Object(c["a"])(m,o,a,!1,null,null,null);g.options.__file="tables.vue";var b=g.exports;e["a"]=b}}]);
//# sourceMappingURL=chunk-12cf.95a5143f.js.map