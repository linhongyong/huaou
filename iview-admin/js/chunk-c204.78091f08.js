(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c204"],{"1b0d":function(t,e,a){},"355f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("Card",[a("div",{staticClass:"display-flex-center"},[a("div",{staticStyle:{"margin-right":"20px"}},[a("span",{staticStyle:{"font-size":"12px","margin-right":"10px"}},[t._v("旁站状态 :")]),a("Select",{staticStyle:{width:"200px"},on:{"on-change":t.selectOption},model:{value:t.currentStatus,callback:function(e){t.currentStatus=e},expression:"currentStatus"}},t._l(t.OptionList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.lable))])}))],1),a("Input",{staticStyle:{width:"200px"},attrs:{search:"","enter-button":"搜索桩号",placeholder:"不限"},on:{"on-search":t.searchByPileCode}}),a("div",{staticStyle:{"margin-left":"20px"}},[a("span",{staticStyle:{"font-size":"12px","margin-right":"10px"}},[t._v("打印次数 :")]),a("Select",{staticStyle:{width:"200px"},on:{"on-change":t.selectOption2},model:{value:t.currentPrintNum,callback:function(e){t.currentPrintNum=e},expression:"currentPrintNum"}},[a("Option",{attrs:{value:"null"}},[t._v("不限")]),a("Option",{attrs:{value:"0"}},[t._v("0次")]),a("Option",{attrs:{value:"1"}},[t._v("一次或多次")])],1)],1)],1)]),a("Card",[a("Table",{attrs:{width:"100%",border:"",columns:t.columns2,data:t.snjbList}}),a("div",{staticStyle:{padding:"18px 10px 40px","text-align":"right",clear:"both"}},[a("Page",{staticClass:"float-l",attrs:{total:t.total,"show-total":"","show-elevator":"","show-sizer":"",current:t.pageIndex},on:{"on-change":t.pageChange,"on-page-size-change":t.pageSizeChange}})],1)],1),a("Card",[a("div",{staticClass:"display-flex-center",staticStyle:{padding:"10px"}},[a("div",{staticStyle:{display:"inline-block","margin-right":"50px"}},[a("Input",{staticStyle:{width:"300px"},attrs:{clearable:"",maxlength:200,placeholder:"输入桩号范围(如:1,2,3 或 1-3)"},model:{value:t.ranges,callback:function(e){t.ranges=e},expression:"ranges"}},[a("Button",{attrs:{slot:"append",type:"primary"},on:{click:t.batchExportWords},slot:"append"},[t._v("批量导出word")])],1)],1),a("Button",{attrs:{type:"primary"},on:{click:t.batchExportImages}},[t._v(t._s("导出"+t.BUILDING.buildingName+"水泥搅拌桩旁站相关图片"))])],1)]),a("Modal",{attrs:{title:"修改水泥旁站","footer-hide":!0,width:"60%",scrollable:!0},model:{value:t.editModal.show,callback:function(e){t.$set(t.editModal,"show",e)},expression:"editModal.show"}},[a("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[a("Edit",{attrs:{obj:t.detail},on:{editModalClose:t.editModalClose}})],1)]),a("Modal",{attrs:{title:"添加模板","footer-hide":!0,width:"60%",scrollable:!0},model:{value:t.addModal.show,callback:function(e){t.$set(t.addModal,"show",e)},expression:"addModal.show"}},[a("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[a("Add",{on:{addModalClose:t.addModalClose}})],1)]),a("Modal",{attrs:{title:"水泥旁站详情","ok-text":"确认","footer-hide":!0,width:"60%",scrollable:!0,styles:{top:"0px"}},model:{value:t.detailModal.show,callback:function(e){t.$set(t.detailModal,"show",e)},expression:"detailModal.show"}},[a("div",{attrs:{id:""}},[a("Detail",{attrs:{obj:t.detail}})],1)]),a("OperationLog",{attrs:{operationLogList:t.operationLogList,obj:t.obj},model:{value:t.isOperationLogShow,callback:function(e){t.isOperationLogShow=e},expression:"isOperationLogShow"}})],1)},s=[],l=(a("f751"),a("cadf"),a("551c"),a("097d"),a("fa69")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("div",{staticClass:" padding-v-5"},[a("div",{staticClass:" padding-v-5"},[t._v("一、机械设备：")]),a("div",{staticClass:"flex padding-v-5  padding-left-40"},[a("div",{staticClass:" padding-v-5"},[t._v("搅拌机型号: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.blenderModel,callback:function(e){t.$set(t.obj,"blenderModel",e)},expression:"obj.blenderModel"}})],1),a("div",{staticClass:"padding-v-5 margin-l-10"},[t._v("工作状态: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.blenderState,callback:function(e){t.$set(t.obj,"blenderState",e)},expression:"obj.blenderState"}})],1),a("div",{staticClass:"padding-v-5 margin-l-10"},[t._v("配套设备: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.matchingEquipment,callback:function(e){t.$set(t.obj,"matchingEquipment",e)},expression:"obj.matchingEquipment"}})],1)])]),a("div",{staticClass:" padding-v-5"},[a("div",{},[t._v("二、材料质量")]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("水泥品种 : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.cementVarieties,callback:function(e){t.$set(t.obj,"cementVarieties",e)},expression:"obj.cementVarieties"}})],1),a("div",{staticClass:"flex-3"},[t._v("供应单位 : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.supplier,callback:function(e){t.$set(t.obj,"supplier",e)},expression:"obj.supplier"}})],1),a("div",{staticClass:"flex-3"},[t._v("质保、试验资料 : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.tryData,callback:function(e){t.$set(t.obj,"tryData",e)},expression:"obj.tryData"}})],1)])]),a("div",{staticClass:" padding-v-5"},[a("div",{},[t._v("三、成桩情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("桩号  : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.pileStartNum,callback:function(e){t.$set(t.obj,"pileStartNum",e)},expression:"obj.pileStartNum"}})],1),a("div",{staticClass:"flex-3"},[t._v("桩号 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.pileEndNum,callback:function(e){t.$set(t.obj,"pileEndNum",e)},expression:"obj.pileEndNum"}})],1),a("div",{staticClass:"flex-3"},[t._v("实际桩长 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.actualPileLength,callback:function(e){t.$set(t.obj,"actualPileLength",e)},expression:"obj.actualPileLength"}})],1),a("div",{staticClass:"flex-3"},[t._v("灰浆水灰比 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.hjshProp,callback:function(e){t.$set(t.obj,"hjshProp",e)},expression:"obj.hjshProp"}})],1)]),a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3 padding-v-5"},[t._v("成桩开始时间  : "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.finishPileStartTime,callback:function(e){t.$set(t.obj,"finishPileStartTime",e)},expression:"obj.finishPileStartTime"}})],1),a("div",{staticClass:"flex-3 padding-v-5"},[t._v("成桩结束时间 : "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.finishPileEndTime,callback:function(e){t.$set(t.obj,"finishPileEndTime",e)},expression:"obj.finishPileEndTime"}})],1)]),a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("日完成桩数 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.eachPlieCementCount,callback:function(e){t.$set(t.obj,"eachPlieCementCount",e)},expression:"obj.eachPlieCementCount"}}),t._v("根")],1),a("div",{staticClass:"flex-3"},[t._v("日完成 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.dayFinishCount,callback:function(e){t.$set(t.obj,"dayFinishCount",e)},expression:"obj.dayFinishCount"}}),t._v("m3")],1)])])]),a("div",{staticStyle:{"text-align":"right","margin-top":"50px"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("保存")])],1)])},o=[],d=a("059d"),r={data:function(){return{}},props:{obj:{type:Object,default:function(){return{}}}},methods:{handleSubmit:function(t){var e=this;d["a"].updateSnjb(this.obj,function(t){console.log(t),e.$Message.success({content:"修改成功！",onClose:function(){e.$emit("editModalClose",!0)}})},function(t){e.$Message.error(t.message)})},handleReset:function(t){this.$refs[t].resetFields(),this.$emit("editModalClose",!0)}},mounted:function(){}},c=r,p=(a("367d"),a("2877")),u=Object(p["a"])(c,n,o,!1,null,null,null);u.options.__file="snjb-edit.vue";var b=u.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-6 padding-v-5"},[t._v("模板名称："),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.templateName,callback:function(e){t.$set(t.obj,"templateName",e)},expression:"obj.templateName"}})],1),a("div",{staticClass:"flex-6 padding-v-5"},[t._v("模板备注："),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.remark,callback:function(e){t.$set(t.obj,"remark",e)},expression:"obj.remark"}})],1)]),a("div",{staticClass:" padding-v-5"},[a("div",{staticClass:" padding-v-5"},[t._v("一、机械设备：")]),a("div",{staticClass:"flex padding-v-5  padding-left-40"},[a("div",{staticClass:" padding-v-5"},[t._v("搅拌机型号: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.blenderModel,callback:function(e){t.$set(t.obj,"blenderModel",e)},expression:"obj.blenderModel"}})],1),a("div",{staticClass:"padding-v-5 margin-l-10"},[t._v("工作状态: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.blenderState,callback:function(e){t.$set(t.obj,"blenderState",e)},expression:"obj.blenderState"}})],1),a("div",{staticClass:"padding-v-5 margin-l-10"},[t._v("配套设备: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.matchingEquipment,callback:function(e){t.$set(t.obj,"matchingEquipment",e)},expression:"obj.matchingEquipment"}})],1)])]),a("div",{staticClass:" padding-v-5"},[a("div",{},[t._v("二、材料质量")]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("水泥品种 : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.cementVarieties,callback:function(e){t.$set(t.obj,"cementVarieties",e)},expression:"obj.cementVarieties"}})],1),a("div",{staticClass:"flex-3"},[t._v("供应单位 : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.supplier,callback:function(e){t.$set(t.obj,"supplier",e)},expression:"obj.supplier"}})],1),a("div",{staticClass:"flex-3"},[t._v("质保、试验资料 : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.tryData,callback:function(e){t.$set(t.obj,"tryData",e)},expression:"obj.tryData"}})],1)])]),a("div",{staticClass:" padding-v-5"},[a("div",{},[t._v("三、成桩情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3"},[t._v("设计桩径  : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.desigePileDiameter,callback:function(e){t.$set(t.obj,"desigePileDiameter",e)},expression:"obj.desigePileDiameter"}})],1),a("div",{staticClass:"flex-3"},[t._v("桩底标高 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.desigePileLength,callback:function(e){t.$set(t.obj,"desigePileLength",e)},expression:"obj.desigePileLength"}})],1),a("div",{staticClass:"flex-3"},[t._v("桩顶标高 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.pileBottomHeight,callback:function(e){t.$set(t.obj,"pileBottomHeight",e)},expression:"obj.pileBottomHeight"}})],1),a("div",{staticClass:"flex-3"},[t._v("设计桩长 : "),a("Input",{staticStyle:{width:"80px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.pileTopHeight,callback:function(e){t.$set(t.obj,"pileTopHeight",e)},expression:"obj.pileTopHeight"}})],1)])])]),a("div",{staticStyle:{"text-align":"right","margin-top":"50px"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("保存")])],1)])},h=[],g={data:function(){return{obj:{roleName:"",remark:"",type:"0"}}},props:{},methods:{handleSubmit:function(t){var e=this;this.obj.templateName?d["a"].addSnjb(this.obj,function(t){console.log(t),e.$Message.success({content:"添加成功！",onClose:function(){e.$emit("addModalClose",!0)}})},function(t){e.$Message.error(t.message)}):this.$Message.error("请填写项目名称！")},handleReset:function(t){this.$refs[t].resetFields(),this.$emit("addModalClose",!0)}},mounted:function(){}},m=g,f=(a("388c"),Object(p["a"])(m,v,h,!1,null,null,null));f.options.__file="snjb-add.vue";var x=f.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("div",{staticStyle:{position:"absolute",top:"10px",right:"60px"}},[a("button",{staticClass:"btn",staticStyle:{"margin-left":"20px",cursor:"pointer"},on:{click:t.exportWord}},[t._v("导出word")]),a("button",{staticClass:"btn",staticStyle:{"margin-left":"20px",cursor:"pointer"},on:{click:t.printTable}},[t._v("直接打印")])]),a("div",{attrs:{id:"myElementId"}},[a("div",{staticClass:"display-flex-center-between",staticStyle:{"font-weight":"bolder","font-size":"larger"}},[a("div",[t._v("监C4")]),a("div",[t._v("编 号："+t._s(t.obj.number))])]),a("h1",{staticStyle:{padding:"20px","text-align":"center"}},[t._v("旁站监理记录("+t._s(t.obj.severalAxes)+"水泥搅拌桩)")]),a("div",{staticStyle:{"font-size":"larger","padding-bottom":"5px"}},[t._v("工程名称："+t._s(t.obj.projectName))]),a("div",{staticClass:"border-t border-l border-r",staticStyle:{"font-size":"larger"}},[a("div",{staticClass:"flex border-b"},[a("div",{staticClass:"flex-1 p-10"},[t._v("当日气候："+t._s(t.obj.weather))]),a("div",{staticClass:"border-l flex-1 p-10"},[t._v("施工单位："+t._s(t.obj.buildCompany))])]),a("div",{staticClass:"border-b p-10"},[a("span",[t._v("旁站的部位或工序：")]),a("span",[t._v(t._s(t.buildingCode))]),a("span",{},[t._v(" "+t._s(t.obj.pileStartNum)+";")])]),a("div",{staticClass:"flex border-b"},[a("div",{staticClass:"flex-1 p-10"},[t._v("旁站监理开始时间："+t._s(t.obj.lookStartTime)+"；")]),a("div",{staticClass:"border-l flex-1 p-10"},[t._v("旁站监理结束时间："+t._s(t.obj.lookEndTime)+"；")])]),a("div",{staticClass:"p-10 border-b"},[a("div",{},[t._v("一、机械设备")]),a("div",{staticClass:"padding-left-40"},[a("span",[t._v("搅拌机型号： "+t._s(t.obj.blenderModel)+"； ")]),a("span",{staticClass:"p-l-10"},[t._v("工作状态： "+t._s(t.obj.blenderState))])]),a("div",{},[t._v("二、材料质量")]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",{staticClass:"p-l-10"},[t._v("水泥品种： "+t._s(t.obj.cementVarieties)+"；")]),a("span",{staticClass:"p-l-10"},[t._v("供应单位： "+t._s(t.obj.supplier)+"；")]),a("span",{staticClass:"p-l-10"},[t._v("质保、试验资料： "+t._s(t.obj.tryData)+"；")])]),a("div",{},[t._v("三、成桩情况")]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("设计桩径： "+t._s(t.obj.desigePileDiameter)+"  mm；")]),a("span",{staticClass:"p-l-10"},[t._v("相对桩底标高："+t._s(t.obj.pileBottomHeight)+"；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("桩顶标高："+t._s(t.obj.pileTopHeight)+"  m；")]),a("span",{staticClass:"p-l-10"},[t._v("设计桩长： "+t._s(t.obj.desigePileLength)+"  m；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("实际桩长："+t._s(t.obj.actualPileLength)+"  m；")]),a("span",{staticClass:"p-l-10"},[t._v("灰浆水灰比： "+t._s(t.obj.hjshProp)+"；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("成桩时间："+t._s(t.obj.finishPileStartTime)+"；")]),t._v(" 至 "),a("span",{staticClass:"p-l-10"},[t._v(t._s(t.obj.finishPileEndTime)+"  m；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("每桩孔水泥用量："+t._s(t.obj.eachPlieCementCount)+" kg；")]),a("span",{staticClass:"p-l-10"},[t._v("设计桩长： "+t._s(t.obj.desigePileLength)+"  m；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("水泥掺入量："+t._s(t.obj.cementMixingAmount)+"%；")]),a("span",{staticClass:"p-l-10"},[t._v("设计桩长： "+t._s(t.obj.desigePileLength)+"  m；")])])]),a("div",{staticClass:"p-10 border-b"},[a("div",[t._v("发现的问题及处理情况：")]),a("div",{staticClass:"p-10 padding-left-40 ",staticStyle:{"min-height":"50px"}},[t._v(t._s(t.obj.problemContent?t.obj.problemContent:"施工正常"))])]),a("div",{staticClass:"p-10 border-b"},[a("div",[t._v("整改意见：")]),a("div",{staticClass:"p-10 padding-left-40 ",staticStyle:{"min-height":"50px"}},[t._v(t._s(t.obj.rectification))])]),a("div",{staticClass:"p-10 border-b"},[a("div",[t._v("处理结果：")]),a("div",{staticClass:"p-10 padding-left-40 ",staticStyle:{"min-height":"50px"}},[t._v(t._s(t.obj.dealResult))])]),a("div",{staticClass:"p-10 border-b",staticStyle:{"text-align":"right","min-height":"50px"}},[a("div",{},[t._v("旁站监理人员："+t._s(t.obj.superName))]),a("div",{},[t._v("日期："),a("DateTimeToDate",{attrs:{timedate:t.obj.updateTime}})],1)])])])])},_=[],C=a("1157"),y=a.n(C),S=a("8bdf"),w=a("89f2"),L=a("077f");Object(S["a"])(y.a);var k={components:{DateTimeToDate:w["a"]},data:function(){return{}},props:{obj:{type:Object,default:function(){return{}}}},computed:{buildingCode:function(){return this.$store.state.user.building.buildingCode}},methods:{exportWord:function(){var t={id:this.obj.id};L["a"].exportSNJBWord(t)},printTable:function(){y()("#myElementId").print()}},mounted:function(){}},I=k,$=(a("de72"),Object(p["a"])(I,j,_,!1,null,null,null));$.options.__file="snjb-detail.vue";var M=$.exports,P=a("0a5f"),O=a("ac44"),B={mixins:[P["a"]],components:{Tables:l["a"],Edit:b,Add:x,Detail:M,OperationLog:O["a"]},data:function(){var t=this;return{editModal:{show:!1},addModal:{show:!1},detailModal:{show:!1},detail:{},columns2:[{title:"桩号",key:"pileStartNum"},{title:"状态",key:"perfusionStartTime",render:function(t,e){return t("div",function(){var t="";return 0==e.row.status?t="未开始":1==e.row.status?t="进行中":2==e.row.status?t="待审核":3==e.row.status?t="已完成":4==e.row.status?t="待审核":5==e.row.status&&(t="已完成"),t}())}},{title:"操作",key:"action",render:function(e,a){return e("div",[e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0008")},on:{click:function(e){3!=a.row.status&&5!=a.row.status&&t.isAccessForButton("39")?t.$Message.error("未完成旁站，暂不允许查看"):t.getDetail(t.snjbList[a.index],function(){t.detailModal.show=!0})}},style:{marginRight:"5px"}},"查看"),e("Button",{props:{type:"warning",size:"small",disabled:!t.isAccessForButton("0007")},on:{click:function(e){t.getDetail(t.snjbList[a.index],function(){t.editModal.show=!0})}},style:{marginRight:"5px"}},"修改"),e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(a.index),d["a"].deleteSnjb({id:t.snjbList[a.index].id},function(){t.snjbList.splice(a.index,1),t.$Message.success("删除成功！"),t.total=t.total-1})}}},[e("Button",{props:{type:"error",size:"small",disabled:!t.isAccessForButton("0009")},style:{marginRight:"5px"}},"删除")]),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0030")},on:{click:function(e){console.log(a.row),t.obj=Object.assign({},t.obj,a.row),t.obj.pileCode=a.row.pileStartNum,t.getOperationLogList(t.obj.id),t.isOperationLogShow=!0}},style:{marginRight:"5px"}},"查看操作记录")])}}],ranges:null,snjbList:[],pageIndex:1,pageSize:10,total:0,isOperationLogShow:!1,operationLogList:[],obj:{},statusList:[1,2,3,4,5],currentPrintNum:"null",pileCode:null,currentStatus:1,OptionList:[{lable:"不限",value:1},{lable:"进行中",value:2},{lable:"待审核",value:3},{lable:"已完成",value:4},{lable:"未开始",value:5}]}},computed:{projectId:function(){return this.PROJECT.id},buildingId:function(){return this.BUILDING.id}},methods:{selectOption:function(t){1==t?this.statusList=[1,2,3,4,5]:2==t?this.statusList=[1]:3==t?this.statusList=[2]:4==t?this.statusList=[3,5]:5==t&&(this.statusList=[0]),this.getList()},selectOption2:function(t){this.printNum=t,this.getList()},searchByPileCode:function(t){var e=parseInt(t);e>=0?(this.pileCode=e,this.getList()):t?this.$Message.error("桩号不正确"):(this.pileCode=null,this.getList())},batchExportWords:function(){var t={ranges:this.ranges,type:"0002",projectId:this.projectId,buildingId:this.buildingId};L["a"].exportWordsBatchPZ(t)},batchExportImages:function(){var t={projectId:this.projectId,buildingId:this.buildingId};L["a"].exportImagesBatchPZ(t)},addModalClose:function(){this.addModal.show=!1,this.getList()},editModalClose:function(){this.editModal.show=!1,this.getList()},detailModalClose:function(){this.detailModal.show=!1,this.getList()},getDetail:function(t,e){var a=this;d["a"].getSnjbById({id:t.id,okfn:e},function(t){console.log("--------------------------------------------------------------"),t.result.tryDataUrl?t.result.tryDataUrl=JSON.parse(t.result.tryDataUrl):t.result.tryDataUrl=[],a.detail=t.result,e&&e()})},getList:function(){var t=this,e={projectId:this.PROJECT.id,buildingId:this.BUILDING.id,type:"0002",statusList:this.statusList,pileCode:this.pileCode,pageNum:this.pageIndex,pageSize:this.pageSize};L["a"].getListByCondition(e).then(function(e){console.log(e),t.snjbList=e.list,t.total=e.total})},buildingChange:function(){this.getList()},getOperationLogList:function(t){var e=this;L["a"].getOperationLogListByIdType({pangzhanId:t,type:"0002"}).then(function(t){e.operationLogList=t}).catch(function(){})},pageChange:function(t){console.log(t),this.pageIndex=t,this.getList()},pageSizeChange:function(t){console.log(t),this.pageSize=parseInt(t),this.getList()}},mounted:function(){}},E=B,N=(a("f2f2"),Object(p["a"])(E,i,s,!1,null,null,null));N.options.__file="snjb.vue";e["default"]=N.exports},"367d":function(t,e,a){"use strict";var i=a("552a"),s=a.n(i);s.a},"388c":function(t,e,a){"use strict";var i=a("1b0d"),s=a.n(i);s.a},"552a":function(t,e,a){},"84fa":function(t,e,a){},"85d1":function(t,e,a){"use strict";var i=a("defd"),s=a.n(i);s.a},"8a73":function(t,e,a){},ac44:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"旁站监理数据操作记录: "+t.obj.pileCode+"号桩",width:"60%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",t._l(t.operationLogList,function(e){return a("div",{key:e.id,staticClass:"display-flex-center-between"},[a("span",{},[t._v("操作人："+t._s(e.editerName))]),a("div",{staticStyle:{width:"60%"}},[t._v("内容: "+t._s(e.editPoint))]),a("span",{},[t._v("时间："+t._s(e.updateTime))])])}))])},s=[],l=(a("059d"),{data:function(){return{show:!1}},props:{operationLogList:{type:Array,default:function(){return[]}},obj:{type:Object,default:function(){return{}}},value:{type:Boolean,default:function(){return!1}}},methods:{handleOk:function(){this.$emit("input",!1)},handleCancel:function(){this.$emit("input",!1)}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}},mounted:function(){}}),n=l,o=(a("85d1"),a("2877")),d=Object(o["a"])(n,i,s,!1,null,null,null);d.options.__file="operation-record.vue";e["a"]=d.exports},de72:function(t,e,a){"use strict";var i=a("8a73"),s=a.n(i);s.a},defd:function(t,e,a){},f2f2:function(t,e,a){"use strict";var i=a("84fa"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-c204.78091f08.js.map