(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dfd"],{"02c9":function(t,e,o){"use strict";o.d(e,"d",function(){return n}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return i}),o.d(e,"b",function(){return l});o("ac6a");var n=function(t,e){var o=[];return function t(e,o,n){e.forEach(function(e,a){for(var i=0;i<o.length;i++)if(e.meta.title==o[i].menuName){if(e.meta.hideInMenu=!1,e.children){var l=e.children;e.children=[],t(l,o[i].childMenus,e.children)}break}n.push(e)})}(t,e,o),o},a=function(t,e,o){var n=[];return function t(n,a){n.forEach(function(n,i){if(n[e]==o&&a.push(n),n.childMenus&&n.childMenus.length){var l=n.childMenus;a[i].childMenus=[],t(l,a[i].childMenus)}})}(t,n),n},i=function(t,e,o){var n=[];return function t(a){a.forEach(function(a,i){a[e]==o&&n.push(a),a.childMenus&&a.childMenus.length&&t(a.childMenus)})}(t),n},l=function(t){if(!t||!t.length)return[];var e=[],o=0;return e[o]=[t[0]],t.reduce(function(t,n){return n-t===1?e[o].push(n):e[++o]=[n],n}),e}},"0a96":function(t,e,o){"use strict";var n=o("9775"),a=o.n(n);a.a},"16ee":function(t,e,o){"use strict";var n=o("6a74"),a=o.n(n);a.a},"30d9":function(t,e,o){},"421f":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("Card",[o("Table",{attrs:{width:"100%",border:"",columns:t.columns2,data:t.joinedList}}),o("div",{staticStyle:{padding:"18px 10px 18px","text-align":"right",clear:"both"}},[o("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add",disabled:!this.isAccessForButton("0013")},on:{click:function(e){t.addModal.show=!0}}})],1)],1),o("Modal",{attrs:{title:"修改工程信息: "+t.obj.projectName,"footer-hide":!0,width:"60%"},on:{"on-cancel":t.onCancelEditModal},model:{value:t.editModal.show,callback:function(e){t.$set(t.editModal,"show",e)},expression:"editModal.show"}},[o("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[o("Edit",{attrs:{obj:t.project},on:{editModalClose:t.editModalClose}})],1)]),o("Modal",{attrs:{title:"创建工程","footer-hide":!0,width:"60%"},model:{value:t.addModal.show,callback:function(e){t.$set(t.addModal,"show",e)},expression:"addModal.show"}},[o("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[o("Add",{on:{addModalClose:t.addModalClose}})],1)]),o("Modal",{attrs:{title:"设置旁站模板："+t.obj.projectName,"footer-hide":!0,width:"60%"},model:{value:t.isPangzhanTmplSetShow,callback:function(e){t.isPangzhanTmplSetShow=e},expression:"isPangzhanTmplSetShow"}},[o("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[o("TmplSet",{attrs:{obj:t.obj,buildList:t.buildList},on:{modalAction:t.onModalAction}})],1)]),o("Modal",{attrs:{title:"设置项目人员和职务: "+t.obj.projectName,"footer-hide":!0,width:"60%"},model:{value:t.isProjectStaffsRoleSetShow,callback:function(e){t.isProjectStaffsRoleSetShow=e},expression:"isProjectStaffsRoleSetShow"}},[o("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[o("setRole",{attrs:{obj:t.obj},on:{modalAction:t.onModalAction}})],1)]),o("buildingSet",{attrs:{obj:t.obj,buildList:t.buildList},on:{updateBuildList:t.getBuildList},model:{value:t.isBuildingSetShow,callback:function(e){t.isBuildingSetShow=e},expression:"isBuildingSetShow"}})],1)},a=[],i=(o("7f7f"),o("f751"),o("fa69")),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Form",{ref:"obj",attrs:{model:t.obj,rules:t.ruleCustom}},[o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"项目名称",prop:"projectName"}},[o("Input",{attrs:{placeholder:""},model:{value:t.obj.projectName,callback:function(e){t.$set(t.obj,"projectName",e)},expression:"obj.projectName"}})],1)],1)],1),o("FormItem",{staticStyle:{"text-align":"right"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit("obj")}}},[t._v("保存")]),o("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset("obj")}}},[t._v("取消")])],1)],1)},s=[],r=o("7b6c"),c=o("d78e"),u=o("7c6d"),d=o("f087"),p={data:function(){var t=function(t,e,o){""===e&&o(new Error("必填")),o()},e=function(t,e,o){-1===e&&o(new Error("必填")),o()};return{ruleCustom:{projectName:[{validator:t,trigger:"blur"}],currentRoleIndex:[{validator:e,trigger:"blur"}]},roleList:[],userList:[],currentRoleIndex:-1,searchKey:""}},props:{obj:{type:Object,default:function(){return{}}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(o){o?c["a"].updateProject({id:e.obj.id,projectName:e.obj.projectName},function(o){e.$refs[t].resetFields(),e.$Message.success({content:"修改成功！",onClose:function(){e.$emit("editModalClose",!0)}})},function(t){e.$Message.error("修改失败")}):e.$Message.error("提交失败!")})},handleReset:function(t){this.$refs[t].resetFields(),this.$emit("editModalClose",!0)}}},h=p,f=(o("56b4"),o("2877")),m=Object(f["a"])(h,l,s,!1,null,null,null);m.options.__file="project-edit.vue";var g=m.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Form",{ref:"obj",attrs:{model:t.obj,rules:t.ruleCustom}},[o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"项目名称",prop:"projectName"}},[o("Input",{attrs:{placeholder:""},model:{value:t.obj.projectName,callback:function(e){t.$set(t.obj,"projectName",e)},expression:"obj.projectName"}})],1)],1)],1),o("FormItem",{staticStyle:{"text-align":"right"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit("obj")}}},[t._v("保存")]),o("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset("obj")}}},[t._v("取消")])],1)],1)},y=[],j={data:function(){var t=function(t,e,o){""===e&&o(new Error("必填")),o()};return{ruleCustom:{projectName:[{validator:t,trigger:"blur"}]},obj:{projectName:""}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(o){o?c["a"].addProjectByName({projectName:e.obj.projectName}).then(function(o){e.$refs[t].resetFields(),e.$Message.success({content:"添加成功！",onClose:function(){e.$emit("addModalClose",!0)}})}).catch(function(t){e.$Message.error("添加失败")}):e.$Message.error("提交失败!")})},handleReset:function(t){this.$refs[t].resetFields(),this.$emit("addModalClose",!0)}}},v=j,S=(o("16ee"),Object(f["a"])(v,b,y,!1,null,null,null));S.options.__file="project-add.vue";var x=S.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Form",[o("Row",{attrs:{type:"flex",justify:"space-around"}},[o("Col",{attrs:{span:"4"}},[o("FormItem",{attrs:{label:"选择楼栋",prop:"building"}},[o("Select",{on:{"on-change":t.onSelectedChange},model:{value:t.buildValue,callback:function(e){t.buildValue=e},expression:"buildValue"}},t._l(t.buildList,function(e,n){return o("Option",{key:n,attrs:{value:"buildingId-"+e.id+"-"+e.buildingCode}},[t._v(t._s(e.buildingName+" ( 共"+e.pileNum+"根桩)"))])}))],1)],1),o("Col",{attrs:{span:"4"}},[o("FormItem",{attrs:{label:"选择旁站类型",prop:"currentIndex"}},[o("Select",{on:{"on-change":t.onSelectedChange},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},[o("Option",{attrs:{value:"type-0001-机械灌注桩"}},[t._v("机械灌注桩")]),o("Option",{attrs:{value:"type-0002-水泥搅拌桩"}},[t._v("水泥搅拌桩")]),o("Option",{attrs:{value:"type-0003-预应力搅拌桩"}},[t._v("预应力搅拌桩")])],1)],1)],1),o("Col",{attrs:{span:"4"}},[o("FormItem",{attrs:{label:"选择模板",prop:"currentIndex"}},[o("Select",{on:{"on-change":t.onSelectedChange},model:{value:t.templateValue,callback:function(e){t.templateValue=e},expression:"templateValue"}},t._l(t.tmplList,function(e,n){return o("Option",{key:n,attrs:{value:"templateId-"+e.id+"-"+e.templateName}},[t._v(t._s(e.templateName))])}))],1)],1),o("Col",{attrs:{span:"6"}},[o("FormItem",{attrs:{label:"模板范围 如：1-100，102,103"}},[o("Input",{model:{value:t.bodyObj.pileRange,callback:function(e){t.$set(t.bodyObj,"pileRange",e)},expression:"bodyObj.pileRange"}})],1)],1),o("Col",[o("FormItem",{attrs:{label:" "}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("保存")])],1)],1)],1),o("div",{staticStyle:{"min-height":"300px",padding:"10px 20px"}},[t.labelObj.buildingId&&t.labelObj.type?o("div",{},[o("h3",{},[t._v(t._s(t.labelObj.buildingId)+"号楼，"+t._s(t.labelObj.type)+"模板使用情况")]),t._l(t.tmplList,function(e){return o("div",{key:e.id,staticStyle:{padding:"20px 20px 10px",overflow:"hidden"}},[o("div",{staticStyle:{"margin-right":"20px",width:"160px","text-align":"right",float:"left","margin-top":"5px"}},[o("Tag",{attrs:{color:"success"}},[t._v(t._s(e.templateName)+" 模板:")])],1),t._l(e.pileList,function(n,a){return e.pileList.length>0?o("div",{key:a,staticStyle:{"margin-right":"20px",float:"left","margin-top":"5px"}},[o("span",{staticStyle:{"padding-right":"5px"}},[t._v(t._s(n.length>1?n[0]+" 号桩 — "+n[n.length-1]+"号桩":n[0]+"号桩"))])]):t._e()}),0==e.pileList.length?o("div",{staticStyle:{"margin-right":"20px",float:"left","margin-top":"5px"}},[t._v("暂无")]):t._e()],2)})],2):t._e()]),o("FormItem",{staticStyle:{"text-align":"right"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleReset()}}},[t._v("确定")]),o("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset()}}},[t._v("取消")])],1)],1)},w=[],C=(o("28a5"),o("02c9")),T=(o("66df"),o("a93f")),I=new Object;I.setTmplusedRange=function(t){return T["a"].post({url:"/template/analyzeTemplateRange",data:t})},I.getPangzhanTmplInfo=function(t){return T["a"].post({url:"/template/getTemplateRange",data:t})};var _=I,L=o("ece3"),R=o("be10"),B=o("ce28"),$={data:function(){return{typeValue:null,templateValue:null,buildValue:null,tmplList:[],userList:[],pangzhanTmplMapList:[],currentIndex:-1,searchKey:"",bodyObj:{pileRange:null},labelObj:{}}},props:{obj:{type:Object,default:function(){return{}}},buildList:{type:Array,default:function(){return[]}}},watch:{obj:function(t){this.typeValue=null,this.buildValue=null,this.templateValue=null,this.tmplList=[]}},methods:{onSelectedChange:function(t){if(t){var e=t.split("-");this.bodyObj[e[0]]=e[1],this.labelObj[e[0]]=e[2],console.log(e),console.log(this.bodyObj),"type"==e[0]&&this.getTemplList(),"buildingId"==e[0]&&(this.typeValue=null,this.templateValue=null,this.tmplList=[])}},getPangzhanTmplInfo:function(){var t=this,e={projectId:this.obj.id,buildingId:this.bodyObj.buildingId,type:this.bodyObj.type,pageIndex:0,pageSize:1e4};e.projectId&&e.buildingId&&e.type&&_.getPangzhanTmplInfo(e).then(function(e){console.log(e),t.pangzhanTmplMapList=e.list;for(var o=t.tmplList,n=e.list,a=0,i=o.length;a<i;a++){o[a].pileList=[];for(var l=0,s=n.length;l<s;l++)o[a].id==n[l].templateId&&o[a].pileList.push(n[l].pileCode);t.$set(t.tmplList[a],"pileList",Object(C["b"])(o[a].pileList)),console.log(t.tmplList[a].pileList)}console.log(t.tmplList)})},getTemplList:function(){var t=this,e={pageIndex:0,pageSize:100,data:this.obj.id};"0001"==this.bodyObj.type?L["a"].getTmplList(e).then(function(e){console.log(e);for(var o=0;o<e.list.length;o++)e.list[o].pileList=[];t.tmplList=e.list,t.getPangzhanTmplInfo()}):"0002"==this.bodyObj.type?R["a"].getTmplList(e).then(function(e){console.log(e);for(var o=0;o<e.list.length;o++)e.list[o].pileList=[];t.tmplList=e.list,t.getPangzhanTmplInfo()}):"0003"==this.bodyObj.type&&B["a"].getTmplList(e).then(function(e){console.log(e);for(var o=0;o<e.list.length;o++)e.list[o].pileList=[];t.tmplList=e.list,t.getPangzhanTmplInfo()})},handleSubmit:function(){var t=this;this.bodyObj.projectId=this.obj.id,this.bodyObj.buildingId&&this.bodyObj.pileRange&&this.bodyObj.type&&this.bodyObj.templateId&&this.bodyObj.projectId?_.setTmplusedRange(this.bodyObj).then(function(e){console.log(e),t.$Message.success("操作成功"),t.getPangzhanTmplInfo(),t.bodyObj.pileRange=null}).catch(function(e){console.log(e),t.$Message.error(e.message)}):this.$Message.error("请填写完整信息")},handleReset:function(t){this.bodyObj.pileRange=null,this.$emit("modalAction",{type:"close",name:"isPangzhanTmplSetShow"})}},mounted:function(){}},M=$,O=(o("0a96"),Object(f["a"])(M,k,w,!1,null,null,null));O.options.__file="tmpl-set.vue";var z=O.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Form",{ref:"obj",attrs:{model:t.obj,rules:t.ruleCustom}},[o("Row",{staticStyle:{"font-size":"16px","margin-bottom":"20px"},attrs:{type:"flex"}},[o("Col",{attrs:{span:"12"}})],1),o("Row",{staticClass:"border",attrs:{type:"flex",justify:"space-around"}},[o("Col",{attrs:{span:"11"}},[o("FormItem",{attrs:{label:"选择职务类型",prop:"currentRoleIndex"}},[o("Select",{on:{"on-change":t.onRoleChange}},t._l(t.roleList,function(e,n){return o("Option",{key:n,attrs:{value:n}},[t._v(t._s(e.roleName))])}))],1)],1),o("Col",{attrs:{span:"11"}},[o("FormItem",{attrs:{label:"搜索 - 添加对应职务用户"}},[o("Input",{on:{"on-change":t.searchUser},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),o("div",{staticStyle:{"z-index":"9999",width:"100%",position:"absolute","background-color":"#fff"},attrs:{id:""}},t._l(t.userList,function(e,n){return""!=e.userName||""!=e.mobile?o("div",{key:n},[o("div",{staticClass:"user-item display-flex-center-between"},[o("div",{},[t._v(t._s(e.userName)+"("+t._s(e.mobile)+")")]),o("span",{staticStyle:{color:"#2d8cf0",cursor:"pointer"},on:{click:function(e){t.selectUser(n)}}},[t._v("添加")])])]):t._e()}))],1)],1)],1),o("div",{staticStyle:{"min-height":"150px"}},t._l(t.obj.roleTypeList,function(e){return o("Row",{key:e.id,staticClass:"menber-row",attrs:{type:"flex"}},[o("span",{},[o("Tag",{attrs:{color:"success"}},[t._v(t._s(e)+" : ")])],1),t._l(t.obj.hooks[e],function(n,a){return o("span",{key:a,staticStyle:{"padding-left":"20px","font-size":"18px"}},[o("Tag",{attrs:{closable:"",name:a+"-"+e+"-"+n.id},on:{"on-close":t.removeRoleUser}},[t._v(t._s(n.userName)+" ")])],1)})],2)})),o("FormItem",{staticStyle:{"text-align":"right"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("确定")]),o("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleReset()}}},[t._v("取消")])],1)],1)},P=[],D={data:function(){var t=function(t,e,o){""===e&&o(new Error("必填")),o()},e=function(t,e,o){-1===e&&o(new Error("必填")),o()};return{ruleCustom:{projectName:[{validator:t,trigger:"blur"}],currentRoleIndex:[{validator:e,trigger:"blur"}]},roleList:[],userList:[],currentRoleIndex:-1,searchKey:""}},props:{obj:{type:Object,default:function(){return{}}}},methods:{removeRoleUser:function(t,e){var o=this;console.log(e);var n=e.split("-")[0],a=e.split("-")[1],i=e.split("-")[2];c["a"].deleteUserRole({id:i},function(t){for(var e in o.obj.hooks[a].splice(n,1),console.log(o.obj.hooks[a]),o.obj.hooks=Object.assign({},o.obj.hooks),o.obj.roleTypeList=[],o.obj.hooks)if(0==o.obj.hooks[e].length){var i=o.obj;delete i.hooks[e]}else o.obj.roleTypeList.push(e);o.$Message.success(t.message),console.log(o.obj.roleTypeList),console.log(o.obj.hooks[a]),console.log(o.obj.hooks)})},selectUser:function(t){var e=this;console.log(t),-1!=this.currentRoleIndex?c["a"].addUserRole({roleId:this.roleList[this.currentRoleIndex].id,userId:this.userList[t].id,projectId:this.obj.project.id},function(o){for(var n in e.hooks=r["a"].addhooks(e.obj.hooks,e.roleList[e.currentRoleIndex].roleName,e.userList[t]),e.obj.roleTypeList=[],e.obj.hooks)e.obj.roleTypeList.push(n);e.userList=[],e.searchKey="",console.log(e.obj.hooks),console.log(e.obj.userRoles),e.$Message.success(o.message)},function(t){e.$Message.error(t.message)}):this.$Message.error("请选择职务!")},onRoleChange:function(t){console.log(t),this.currentRoleIndex=t},searchUser:function(t){var e=this;console.log(t.data),d["a"].searchUsers({searchStr:t.data},function(t){console.log(t.result),t.result.length>3&&(t.result.length=3),e.userList=t.result})},handleSubmit:function(){this.$emit("modalAction",{type:"close",name:"isProjectStaffsRoleSetShow"})},handleReset:function(t){this.obj.hooks=[],this.obj.roleTypeList=[],this.$emit("modalAction",{type:"close",name:"isProjectStaffsRoleSetShow"})}},mounted:function(){var t=this;u["a"].getRolesByType({type:1},function(e){console.log(e),t.roleList=e.result})}},F=D,E=(o("bb90"),Object(f["a"])(F,N,P,!1,null,null,null));E.options.__file="setProjectRole.vue";var A=E.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Modal",{attrs:{title:"设置楼栋信息: "+t.obj.projectName,width:"60%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("Form",{ref:"form",attrs:{inline:"",model:t.buildData,rules:t.ruleValidate}},[o("FormItem",{attrs:{label:"楼栋名","label-width":80,prop:"buildingName"}},[o("Input",{attrs:{maxlength:30},model:{value:t.buildData.buildingName,callback:function(e){t.$set(t.buildData,"buildingName",e)},expression:"buildData.buildingName"}})],1),o("FormItem",{attrs:{label:"楼栋编号","label-width":80,prop:"buildingCode"}},[o("Input",{attrs:{maxlength:30},model:{value:t.buildData.buildingCode,callback:function(e){t.$set(t.buildData,"buildingCode",e)},expression:"buildData.buildingCode"}})],1),o("FormItem",{attrs:{label:"总桩数","label-width":80}},[o("InputNumber",{attrs:{min:0,max:5e3},model:{value:t.buildData.pileNum,callback:function(e){t.$set(t.buildData,"pileNum",e)},expression:"buildData.pileNum"}})],1),o("FormItem",{attrs:{"label-width":20}},[0===t.buttonType?o("Button",{attrs:{type:"primary"},on:{click:t.addBuildData}},[t._v("添加")]):o("Button",{attrs:{type:"primary"},on:{click:t.updateBuildData}},[t._v("确认修改")])],1)],1),o("Table",{attrs:{columns:t.columns,data:t.buildList,"highlight-row":""}}),o("template",{slot:"footer"},[o("Button",{attrs:{type:"primary"},on:{click:t.handleOk}},[t._v("确定")]),o("Button",{attrs:{type:"primary",ghost:""},on:{click:t.handleCancel}},[t._v("取消")])],1)],2)},J=[],q=(o("c5f6"),o("c276"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Form",{ref:"obj",attrs:{inline:"",model:t.obj,rules:t.ruleValidate}},[o("FormItem",{attrs:{label:"开始桩号","label-width":80,prop:"buildingName"}},[o("Input",{model:{value:t.obj.startPileCode,callback:function(e){t.$set(t.obj,"startPileCode",e)},expression:"obj.startPileCode"}})],1),o("FormItem",{attrs:{label:"结束桩号","label-width":80,prop:"buildingCode"}},[o("Input",{model:{value:t.obj.endPileCode,callback:function(e){t.$set(t.obj,"endPileCode",e)},expression:"obj.endPileCode"}})],1),o("FormItem",{attrs:{label:"使用前缀","label-width":80}},[o("InputNumber",{attrs:{min:0,max:1e3},model:{value:t.obj.prefix,callback:function(e){t.$set(t.obj,"prefix",e)},expression:"obj.prefix"}})],1),o("FormItem",{attrs:{"label-width":20}},[0===t.buttonType?o("Button",{attrs:{type:"primary"},on:{click:t.addBuildData}},[t._v("添加")]):o("Button",{attrs:{type:"primary"},on:{click:t.updateBuildData}},[t._v("确认修改")])],1)],1),o("Table",{attrs:{columns:t.columns,data:t.prefixList}}),o("div",{staticStyle:{"margin-bottom":"50px"}})],1)}),K=[],G={data:function(){return{obj:{},show:!1,buttonType:0,columns:[{title:"开始桩号",key:"startPileCode"},{title:"结束桩号",key:"endPileCode"},{title:"使用前缀",key:"prefix"},{title:"操作",render:function(t,e){return t("div",[t("Button",{props:{type:"success",size:"small"},on:{click:function(t){}},style:{marginRight:"5px"}},"修改")])}}],prefixList:[{startPileCode:1,endPileCode:10,prefix:"A"},{startPileCode:11,endPileCode:20,prefix:"B"}]}},props:{rowObj:{type:Object,default:function(){return{}}}}},U=G,Z=Object(f["a"])(U,q,K,!1,null,null,null);Z.options.__file="building-set-expendRow.vue";var H=Z.exports,Y=function(){return{buildingName:"",buildingCode:"",pileNum:0}},Q={components:{expandRow:H},data:function(){var t=this;return{show:!1,buildData:Y(),buttonType:0,columns:[{title:"楼栋名",key:"buildingName"},{title:"楼栋代码",key:"buildingCode"},{title:"总桩数",key:"pileNum"},{title:"操作",render:function(e,o){return e("div",[e("Button",{props:{type:"success",size:"small"},on:{click:function(e){var n=o.row;n.buildingName,n.buildingCode,n.pileNum;t.buildData=Object.assign({},o.row),t.buttonType=1}},style:{marginRight:"5px"}},"修改")])}}],ruleValidate:{buildingName:{required:!0,message:"请输入楼栋名",trigger:"blur"},buildingCode:{required:!0,message:"请输入楼栋代码",trigger:"blur"}}}},props:{obj:{type:Object,default:function(){return{}}},buildList:{type:Array,default:function(){return[]}},value:{type:Boolean,default:function(){return!1}}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}},methods:{addBuildData:function(){var t=this;this.$refs.form.validate(function(e){e&&c["a"].addBuild(Object.assign(t.buildData,{projectId:Number(t.obj.id)})).then(function(){t.$Message.success("添加成功"),t.buildData=Y(),t.getBuildList()}).catch(function(e){t.$Message.error("添加失败")})})},updateBuildData:function(){var t=this;this.$refs.form.validate(function(e){e&&c["a"].updateBuild(Object.assign(t.buildData,{projectId:Number(t.obj.id)})).then(function(){t.$Message.success("修改成功"),t.buildData=Y(),t.getBuildList(),t.buttonType=0}).catch(function(e){t.$Message.error("修改失败"),t.buttonType=0})})},getBuildList:function(){this.$emit("updateBuildList",this.obj.id)},handleOk:function(){this.$emit("input",!1)},handleCancel:function(){this.$emit("input",!1)}}},W=Q,X=Object(f["a"])(W,V,J,!1,null,null,null);X.options.__file="building-set.vue";var tt=X.exports,et=o("69d0"),ot={mixins:[et["a"]],components:{Tables:i["a"],Edit:g,Add:x,TmplSet:z,setRole:A,buildingSet:tt},data:function(){var t=this;return{isPangzhanTmplSetShow:!1,isProjectStaffsRoleSetShow:!1,obj:{},editModal:{show:!1},addModal:{show:!1},setModal:{show:!1},setRoleModal:{show:!1},isBuildingSetShow:!1,project:{},hooks:{},roleTypeList:[],columns2:[{title:"工程名",key:"projectName"},{title:"Action",key:"action",render:function(e,o){return e("div",[e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0018")},on:{click:function(e){t.project=o.row,t.editModal.show=!0}},style:{marginRight:"5px"}},"修改"),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0014")},on:{click:function(e){t.obj=Object.assign({},t.obj,t.joinedList[o.index]),t.getBuildList(t.obj.id),t.isPangzhanTmplSetShow=!0}},style:{marginRight:"5px"}},"设置旁站模板"),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0015")},on:{click:function(e){c["a"].getProjectDetail({id:t.joinedList[o.index].id},function(e){t.hooks={},t.roleTypeList=[],console.log(e);for(var o=0;o<e.result.userRoleDTOS.length;o++)t.addhooks(e.result.userRoleDTOS[o].roleName,e.result.userRoleDTOS[o]);for(var n in t.hooks)t.roleTypeList.push(n);e.result.hooks=t.hooks,e.result.roleTypeList=t.roleTypeList,e.result.projectName=e.result.project.projectName,t.obj=e.result,t.isProjectStaffsRoleSetShow=!0,console.log(t.obj)},function(e){t.$Message.error(e.message)})}},style:{marginRight:"5px"}},"设置项目用户和职务"),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0016")},on:{click:function(e){t.obj=Object.assign({},t.obj,o.row),t.getBuildList(t.obj.id),t.isBuildingSetShow=!0}},style:{marginRight:"5px"}},"设置楼栋信息"),e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(o.index),c["a"].deleteProject({id:t.joinedList[o.index].id},function(){t.joinedList.splice(o.index,1),t.total=t.total-1,t.$Message.success("删除成功！")})}}},[e("Button",{props:{type:"error",size:"small",disabled:!t.isAccessForButton("0017")}},"删除")])])}}],buildList:[],pageIndex:1,pageSize:10}},computed:{joinedList:function(){var t=this.$store.state.user.projects;return t},total:function(){return this.$store.state.user.projects.length}},methods:{onModalAction:function(t){console.log(t),"close"==t.type?this[t.name]=!1:"show"==t.type?this[t.name]=!0:console.error("不存在这种模态框行为"),this.getList()},addhooks:function(t,e){var o=this.hooks[t];o||(o=[]),o.push(e),this.hooks[t]=o},addModalClose:function(){this.addModal.show=!1,this.getList()},editModalClose:function(){this.hooks=[],this.roleTypeList=[],this.editModal.show=!1,this.getList()},getList:function(){this.$store.state.user.isCanSeeAllProject?this.getProjectList():this.getJoinedList()},getBuildList:function(t){var e=this;c["a"].getBuildList({projectId:t}).then(function(t){e.buildList=t}).catch(function(t){e.$Message.error("获取楼栋数据失败")})},onCancelEditModal:function(){this.hooks=[],this.roleTypeList=[]},setRoleModalClose:function(){this.setRoleModal.show=!1,this.obj={}}},mounted:function(){}},nt=ot,at=(o("e3fe"),Object(f["a"])(nt,n,a,!1,null,null,null));at.options.__file="project.vue";e["default"]=at.exports},4974:function(t,e,o){"use strict";var n=o("bbb3"),a=o.n(n);a.a},"56b4":function(t,e,o){"use strict";var n=o("c457"),a=o.n(n);a.a},"69d0":function(t,e,o){"use strict";o("ac6a");var n=o("c93e"),a=(o("cadf"),o("551c"),o("097d"),o("2f62")),i=o("f087"),l=o("d78e");e["a"]={computed:{},watch:{},methods:Object(n["a"])({},Object(a["d"])(["setMenuList","setButtonList","setBuildings","setRoles","setProjects","setProject","setBuilding","setIsCanSeeAllProject"]),{getRoles:function(){var t=this;i["a"].getRoles().then(function(e){t.setRoles(e);var o=!1;localStorage.setItem("roles",JSON.stringify(e)),e.forEach(function(t){"老板"!=t.roleName&&"管理员"!=t.roleName&&"系统管理员"!=t.roleName&&"超级系统管理员"!=t.roleName||(this.setIsCanSeeAllProject(!0),o=!0,localStorage.setItem("isCanSeeAllProject",!0))},t),o?(console.log("获得所有项目"),t.getProjectList()):(console.log("获得参与项目"),t.getJoinedList())})},getProjectList:function(){var t=this;l["a"].getProjectList().then(function(e){e&&e.length||(e=[]),t.setProjects(e),localStorage.setItem("projects",JSON.stringify(e)),e.length>0?(localStorage.setItem("project",JSON.stringify(e[0])),t.setProject(e[0])):(localStorage.setItem("project","{}"),t.setProject({}))}).catch(function(e){t.$Message.error("获取项目列表失败")})},getJoinedList:function(){var t=this;l["a"].getJoinedList().then(function(e){t.setProjects(e),localStorage.setItem("projects",JSON.stringify(e)),e.length>0&&(localStorage.setItem("project",JSON.stringify(e[0])),t.setProject(e[0]))}).catch(function(e){t.$Message.error("获取项目列表失败")})},getBuildList:function(t){var e=this;console.log("getBuildList------"),l["a"].getBuildList({projectId:t}).then(function(t){console.log("---------getBuildList"),t&&t.length||(t=[]),localStorage.setItem("buildings",JSON.stringify(t)),e.setBuildings(t),t.length>0?(localStorage.setItem("building",JSON.stringify(t[0])),e.setBuilding(t[0])):(localStorage.setItem("building","{}"),e.setBuilding({}))})}}),created:function(){localStorage.getItem("isCanSeeAllProject")&&this.setIsCanSeeAllProject(!0)}}},"6a74":function(t,e,o){},"7c6d":function(t,e,o){"use strict";var n=o("66df"),a=o("a93f"),i=new Object;i.addRole=function(t,e,o){n["a"].request({url:"/role/add",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.deleteRole=function(t){return a["a"].post({url:"/role/delete?id=".concat(t.id),data:t})},i.updateRole=function(t,e,o){n["a"].request({url:"/role/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getRoles=function(t,e,o){n["a"].request({url:"/role/list?pageIndex=".concat(t.pageIndex,"&pageSize=").concat(t.pageSize),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getRolesByType=function(t,e,o){n["a"].request({url:"/role/getRolesByType?type=".concat(t.type),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.setRoleMenu=function(t){return a["a"].post({url:"/roleMenu/add",data:t})},e["a"]=i},9775:function(t,e,o){},"987e":function(t,e,o){},"9b438":function(t,e,o){},bb90:function(t,e,o){"use strict";var n=o("9b438"),a=o.n(n);a.a},bbb3:function(t,e,o){},be10:function(t,e,o){"use strict";var n=o("66df"),a=o("a93f"),i=new Object;i.getTmplList=function(t){return a["a"].post({url:"/snJbjPzjlTemplate/listByProjectId?pageNum=".concat(t.pageNum,"&pageSize=").concat(t.pageSize),data:t})},i.addSnjbTmpl=function(t,e,o){return n["a"].request({url:"snJbjPzjlTemplate/addTemplate",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getSnjbTemplate=function(t,e,o){return n["a"].request({url:"snJbjPzjlTemplate/getTemplate?id=".concat(t.id),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.deleteSnjbTmpl=function(t,e,o){return n["a"].request({url:"snJbjPzjlTemplate/delete?id=".concat(t.id),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.updateSnjbTmpl=function(t,e,o){return n["a"].request({url:"snJbjPzjlTemplate/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getDragList=function(t,e,o){return n["a"].request({url:"get_drag_list",method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},e["a"]=i},c457:function(t,e,o){},ce28:function(t,e,o){"use strict";var n=o("66df"),a=o("a93f"),i=new Object;i.getTmplList=function(t){return a["a"].post({url:"/yylGzTemplate/listByProjectId?pageNum=".concat(t.pageNum,"&pageSize=").concat(t.pageSize),data:t})},i.addYylTmpl=function(t,e,o){return n["a"].request({url:"/yylGzTemplate/addTemplate",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getYylTemplate=function(t,e,o){return n["a"].request({url:"yyljPzjlTemplate/getTemplate?id=".concat(t.id),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.deleteYylTmpl=function(t,e,o){return n["a"].request({url:"/yylGzTemplate/delete?id=".concat(t.id),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.updateYylTmpl=function(t,e,o){return n["a"].request({url:"/yylGzTemplate/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getDragList=function(t,e,o){return n["a"].request({url:"get_drag_list",method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},e["a"]=i},e3fe:function(t,e,o){"use strict";var n=o("987e"),a=o.n(n);a.a},ece3:function(t,e,o){"use strict";var n=o("66df"),a=o("a93f"),i=new Object;i.addJxgzTmpl=function(t,e,o){return n["a"].request({url:"jxZkGzzPzjlTemplate/addTemplate",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getJxgzTmplList=function(t,e,o){return n["a"].request({url:"jxZkGzzPzjlTemplate/list?pageIndex=".concat(t.pageIndex,"&pageSize=").concat(t.pageSize),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getTmplList=function(t){return a["a"].post({url:"/jxZkGzzPzjlTemplate/listByProjectId",data:t})},i.getJxZkGzzPzjlTemplate=function(t,e,o){return n["a"].request({url:"jxZkGzzPzjlTemplate/getTemplate?id=".concat(t.id),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.deleteJxgzTmpl=function(t,e,o){return n["a"].request({url:"jxZkGzzPzjlTemplate/delete?id=".concat(t.id),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.updateJxgzTmpl=function(t,e,o){return n["a"].request({url:"jxZkGzzPzjlTemplate/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},i.getDragList=function(t,e,o){return n["a"].request({url:"get_drag_list",method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?o(t.data):e(t.data)})},e["a"]=i},fa69:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticStyle:{overflow:"hidden"},attrs:{id:""}},[t.searchable&&"top"===t.searchPlace?o("div",{staticClass:"search-con search-con-top",staticStyle:{float:"left"}},[o("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns,function(e){return"handle"!==e.key||"expand"!==e.key?o("Option",{key:"search-col-"+e.key,attrs:{value:e.key}},[t._v(t._s(e.title))]):t._e()})),o("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),o("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.handleSearch}},[o("Icon",{attrs:{type:"search"}}),t._v("  搜索")],1)],1):t._e(),o("div",{staticStyle:{float:"right"}},[o("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-add"},on:{click:t.addModalShow}})],1)]),o("Table",{ref:"tablesMain",attrs:{data:t.insideTableData,columns:t.insideColumns,stripe:t.stripe,border:t.border,"show-header":t.showHeader,width:t.width,height:t.height,loading:t.loading,"disabled-hover":t.disabledHover,"highlight-row":t.highlightRow,"row-class-name":t.rowClassName,size:t.size,"no-data-text":t.noDataText,"no-filtered-data-text":t.noFilteredDataText},on:{"on-current-change":t.onCurrentChange,"on-select":t.onSelect,"on-select-cancel":t.onSelectCancel,"on-select-all":t.onSelectAll,"on-selection-change":t.onSelectionChange,"on-sort-change":t.onSortChange,"on-filter-change":t.onFilterChange,"on-row-click":t.onRowClick,"on-row-dblclick":t.onRowDblclick,"on-expand":t.onExpand}},[t._t("header",null,{slot:"header"}),t._t("footer",null,{slot:"footer"}),t._t("loading",null,{slot:"loading"})],2),t.searchable&&"bottom"===t.searchPlace?o("div",{staticClass:"search-con search-con-top"},[o("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns,function(e){return"handle"!==e.key?o("Option",{key:"search-col-"+e.key,attrs:{value:e.key}},[t._v(t._s(e.title))]):t._e()})),o("Input",{staticClass:"search-input",attrs:{placeholder:"输入关键字搜索"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),o("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[o("Icon",{attrs:{type:"search"}}),t._v("  搜索")],1)],1):t._e(),o("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)},a=[],i=(o("ac6a"),o("f751"),o("c5f6"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tables-edit-outer"},[t.isEditting?o("div",{staticClass:"tables-editting-con"},[o("Input",{staticClass:"tables-edit-input",attrs:{value:t.value},on:{input:t.handleInput}}),o("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.saveEdit}},[o("Icon",{attrs:{type:"md-checkmark"}})],1),o("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.canceltEdit}},[o("Icon",{attrs:{type:"md-close"}})],1)],1):o("div",{staticClass:"tables-edit-con"},[o("span",{staticClass:"value-con"},[t._v(t._s(t.value))]),t.editable?o("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:t.startEdit}},[o("Icon",{attrs:{type:"md-create"}})],1):t._e()],1)])}),l=[],s={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(t){this.$emit("input",t)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},r=s,c=(o("4974"),o("2877")),u=Object(c["a"])(r,i,l,!1,null,null,null);u.options.__file="edit.vue";var d=u.exports,p={delete:function(t,e,o){return t("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(e),o.$emit("on-delete",e)}}},[t("Button",{props:{type:"text",ghost:!0}},[t("Icon",{props:{type:"md-trash",size:18,color:"#000000"}})])])}},h=p,f=(o("30d9"),{name:"Tables",props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"}},data:function(){return{insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:"",searchValue:"",searchKey:""}},methods:{suportEdit:function(t,e){var o=this;return t.render=function(t,e){return t(d,{props:{params:e,value:o.insideTableData[e.index][e.column.key],edittingCellId:o.edittingCellId,editable:o.editable},on:{input:function(t){o.edittingText=t},"on-start-edit":function(t){o.edittingCellId="editting-".concat(t.index,"-").concat(t.column.key),o.$emit("on-start-edit",t)},"on-cancel-edit":function(t){o.edittingCellId="",o.$emit("on-cancel-edit",t)},"on-save-edit":function(t){o.value[t.row.initRowIndex][t.column.key]=o.edittingText,o.$emit("input",o.value),o.$emit("on-save-edit",Object.assign(t,{value:o.edittingText})),o.edittingCellId=""}}})},t},surportHandle:function(t){var e=this,o=t.options||[],n=[];o.forEach(function(t){h[t]&&n.push(h[t])});var a=t.button?[].concat(n,t.button):n;return t.render=function(t,o){return o.tableData=e.value,t("div",a.map(function(n){return n(t,o,e)}))},t},handleColumns:function(t){var e=this;this.insideColumns=t.map(function(t,o){var n=t;return n.editable&&(n=e.suportEdit(n,o)),"handle"===n.key&&(n=e.surportHandle(n)),n})},setDefaultSearchKey:function(){this.searchKey="expand"!==this.columns[0].key?this.columns[0].key:this.columns.length>1?this.columns[1].key:""},handleClear:function(t){""===t.target.value&&(this.insideTableData=this.value)},handleSearch:function(){var t=this;this.insideTableData=this.value.filter(function(e){return e[t.searchKey].indexOf(t.searchValue)>-1})},handleTableData:function(){this.insideTableData=this.value.map(function(t,e){var o=t;return o.initRowIndex=e,o})},exportCsv:function(t){this.$refs.tablesMain.exportCsv(t)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(t,e){this.$emit("on-current-change",t,e)},onSelect:function(t,e){this.$emit("on-select",t,e)},onSelectCancel:function(t,e){this.$emit("on-select-cancel",t,e)},onSelectAll:function(t){this.$emit("on-select-all",t)},onSelectionChange:function(t){this.$emit("on-selection-change",t)},onSortChange:function(t,e,o){this.$emit("on-sort-change",t,e,o)},onFilterChange:function(t){this.$emit("on-filter-change",t)},onRowClick:function(t,e){this.$emit("on-row-click",t,e)},onRowDblclick:function(t,e){this.$emit("on-row-dblclick",t,e)},onExpand:function(t,e){this.$emit("on-expand",t,e)},addModalShow:function(){this.$emit("addModalShow",!0)}},watch:{columns:function(t){this.handleColumns(t),this.setDefaultSearchKey()},value:function(t){this.handleTableData(),this.handleSearch()}},mounted:function(){this.handleColumns(this.columns),this.setDefaultSearchKey(),this.handleTableData()}}),m=f,g=Object(c["a"])(m,n,a,!1,null,null,null);g.options.__file="tables.vue";var b=g.exports;e["a"]=b}}]);
//# sourceMappingURL=chunk-1dfd.b4f18ccf.js.map