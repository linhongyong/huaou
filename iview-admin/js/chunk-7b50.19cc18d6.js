(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b50"],{"059d":function(t,e,a){"use strict";var i=a("66df"),n=a("a93f"),l=new Object;l.addSnjb=function(t,e,a){return i["a"].request({url:"snJbjPzjl/addTemplate",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},l.getSnjbById=function(t,e,a){return i["a"].request({url:"/snJbjPzjl/getSnJbjPzjl?id=".concat(t.id),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},l.getListByCondition=function(t){return n["a"].post({url:"/snJbjPzjl/getListByCondition",data:t})},l.getSnjbList=function(t,e,a){return i["a"].request({url:"snJbjPzjl/list?pageIndex=".concat(t.pageIndex,"&pageSize=").concat(t.pageSize),method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},l.getSnjbListByProjectId=function(t,e,a){return i["a"].request({url:"/snJbjPzjl/listProject",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},l.getSnjbTemplate=function(t,e,a){return i["a"].request({url:"snJbjPzjl/getTemplate?id=".concat(t.id),method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},l.deleteSnjb=function(t,e,a){return i["a"].request({url:"snJbjPzjl/delete?id=".concat(t.id),method:"post"}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},l.updateSnjb=function(t,e,a){return i["a"].request({url:"snJbjPzjl/update",method:"post",data:t}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},l.getDragList=function(t,e,a){return i["a"].request({url:"get_drag_list",method:"get"}).then(function(t){console.log(t),"Success"!=t.data.code?a(t.data):e(t.data)})},e["a"]=l},"06c7":function(t,e,a){"use strict";var i=a("1883"),n=a.n(i);n.a},"077f":function(t,e,a){"use strict";a("66df");var i=a("a93f"),n=new Object;n.getOperationLogListByIdType=function(t){return i["a"].get({url:"/pangzhan/getLogByPzIdAndType",data:t})},e["a"]=n},"0a5f":function(t,e,a){"use strict";var i=a("c93e"),n=a("2f62");e["a"]={computed:Object(i["a"])({},Object(n["e"])({PROJECT:function(t){return t.user.project},BUILDING:function(t){return t.user.building}}),Object(n["c"])({ROLE:"role"})),watch:{PROJECT:{deep:!0,handler:function(t){this.getList()}},BUILDING:{deep:!0,handler:function(t){this.buildingChange()}}},created:function(){this.PROJECT&&this.PROJECT.id&&this.getList(),this.BUILDING&&this.BUILDING.id&&this.buildingChange()}}},1883:function(t,e,a){},"222d":function(t,e,a){},"26b3":function(t,e,a){"use strict";var i=a("31d8"),n=a.n(i);n.a},"30d9":function(t,e,a){},"31d8":function(t,e,a){},4974:function(t,e,a){"use strict";var i=a("bbb3"),n=a.n(i);n.a},"4ee3":function(t,e,a){"use strict";var i=a("222d"),n=a.n(i);n.a},5287:function(t,e,a){},"842a":function(t,e,a){"use strict";var i=a("5287"),n=a.n(i);n.a},"85d1":function(t,e,a){"use strict";var i=a("defd"),n=a.n(i);n.a},ac44:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"旁站监理数据操作记录: "+t.obj.pileCode+"号桩",width:"60%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",t._l(t.operationLogList,function(e){return a("div",{key:e.id,staticClass:"display-flex-center-between"},[a("span",{},[t._v("操作人："+t._s(e.editerName))]),a("div",{staticStyle:{width:"60%"}},[t._v("内容: "+t._s(e.editPoint))]),a("span",{},[t._v("时间："+t._s(e.updateTime))])])}))])},n=[],l=(a("059d"),{data:function(){return{show:!1}},props:{operationLogList:{type:Array,default:function(){return[]}},obj:{type:Object,default:function(){return{}}},value:{type:Boolean,default:function(){return!1}}},methods:{handleOk:function(){this.$emit("input",!1)},handleCancel:function(){this.$emit("input",!1)}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}},mounted:function(){}}),s=l,o=(a("85d1"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,null,null);c.options.__file="operation-record.vue";e["a"]=c.exports},bbb3:function(t,e,a){},c13b:function(t,e,a){"use strict";var i=a("66df"),n=a("a93f"),l=new Object;l.addJxZkGzzPzjl=function(t){return i["a"].request({url:"jxZkGzzPzjl/add",method:"post",data:t})},l.getDetailById=function(t){return n["a"].get({url:"/jxZkGzzPzjl/getJxZkGzzPzjl",data:t})},l.getJxZkGzzPzjlList=function(t){return i["a"].request({url:"/jxZkGzzPzjl/listProject",method:"post",data:t})},l.getJxZkGzzPzjl=function(t){return n["a"].get({url:"jxZkGzzPzjl/getJxZkGzzPzjl?id=".concat(t.id),data:t})},l.getJxgzByCondition=function(t){return i["a"].request({url:"/jxZkGzzPzjl/getGzzByCondition",method:"post",data:t})},l.getListByCondition=function(t){return n["a"].post({url:"/jxZkGzzPzjl/getListByCondition",data:t})},l.deleteJxZkGzzPzjl=function(t){return i["a"].request({url:"jxZkGzzPzjl/delete?id=".concat(t),method:"post"})},l.updateJxZkGzzPzjl=function(t){return i["a"].request({url:"jxZkGzzPzjl/update",method:"post",data:t})},l.getDragList=function(){return i["a"].request({url:"get_drag_list",method:"get"})},l.downloadWord=function(t){return i["a"].request({url:"/jxZkGzzPzjl/download?id=".concat(t),method:"post"})},l.export=function(t){return n["a"].post({url:"/jxZkGzzPzjl/exportExcel",data:t})},l.getSoilVolume=function(t){return n["a"].get({url:"/building/getSoilVolume",data:t})},e["a"]=l},c4f9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("Table",{attrs:{width:"100%",border:"",columns:t.columns,data:t.tableData}}),a("div",{staticStyle:{padding:"18px 10px 18px","text-align":"right",clear:"both"}},[a("Page",{staticClass:"float-l",attrs:{total:t.total,"show-total":"","show-elevator":"","show-sizer":"",current:t.pageIndex},on:{"on-change":t.pageChange,"on-page-size-change":t.pageSizeChange}}),a("div",[a("span",{staticStyle:{"padding-right":"20px"}},[t._v(t._s(t.word)+" m³")]),a("Button",{attrs:{type:"primary"},on:{click:t.showExportModal}},[t._v("导出Excel")])],1)],1)],1),a("Modal",{attrs:{title:"修改机械灌注旁站","ok-text":"提交","footer-hide":!0,width:"60%",scrollable:!0,styles:{top:"0px"}},model:{value:t.editModal.show,callback:function(e){t.$set(t.editModal,"show",e)},expression:"editModal.show"}},[a("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[a("Edit",{attrs:{obj:t.formItem},on:{editModalClose:t.editModalClose}})],1)]),a("Modal",{attrs:{title:"机械灌注旁站详情","ok-text":"确认","footer-hide":!0,width:"60%",scrollable:!0,styles:{top:"0px"}},model:{value:t.detailModal.show,callback:function(e){t.$set(t.detailModal,"show",e)},expression:"detailModal.show"}},[a("div",{attrs:{id:""}},[a("Detail",{attrs:{obj:t.formItem}})],1)]),a("modalExport",{attrs:{roleData:this.modal_export.roleData},model:{value:t.modal_export.show,callback:function(e){t.$set(t.modal_export,"show",e)},expression:"modal_export.show"}}),a("OperationLog",{attrs:{operationLogList:t.operationLogList,obj:t.obj},model:{value:t.isOperationLogShow,callback:function(e){t.isOperationLogShow=e},expression:"isOperationLogShow"}})],1)},n=[],l=(a("c5f6"),a("f751"),a("cadf"),a("551c"),a("097d"),a("fa69")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-6 padding-v-5"},[t._v("\r\n              当日气候：\r\n        "),a("RadioGroup",{model:{value:t.obj.weather,callback:function(e){t.$set(t.obj,"weather",e)},expression:"obj.weather"}},[a("Radio",{attrs:{label:"晴"}},[a("span",[t._v("晴")])]),a("Radio",{attrs:{label:"阴"}},[a("span",[t._v("阴")])]),a("Radio",{attrs:{label:"雨"}},[a("span",[t._v("雨")])])],1)],1),a("div",{staticClass:"flex-6 padding-v-5"},[t._v("施工单位："),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.buildCompany,callback:function(e){t.$set(t.obj,"buildCompany",e)},expression:"obj.buildCompany"}})],1)]),a("div",{staticClass:"flex  padding-left-40"},[a("div",{staticClass:" padding-v-5"},[t._v("一、机械设备：")]),a("div",{staticClass:"flex"},[a("div",{staticClass:" padding-v-5"},[t._v("钻机型号: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.drillModel,callback:function(e){t.$set(t.obj,"drillModel",e)},expression:"obj.drillModel"}})],1),a("div",{staticClass:"padding-v-5 margin-l-10"},[t._v("工作状态: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.workState,callback:function(e){t.$set(t.obj,"workState",e)},expression:"obj.workState"}})],1)])]),a("div",{staticClass:"padding-left-40"},[a("div",{},[t._v("二、材料质量")]),a("div",{staticClass:"padding-left-40"},[a("div",{},[a("div",{},[t._v("钢筋笼配筋：")]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("主筋数量 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.mainBarCount,callback:function(e){t.$set(t.obj,"mainBarCount",e)},expression:"obj.mainBarCount"}})],1),a("div",{staticClass:"flex-3"},[t._v("主筋 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.mainBarType,callback:function(e){t.$set(t.obj,"mainBarType",e)},expression:"obj.mainBarType"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"flex-3"},[t._v("箍筋 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.circularBar,callback:function(e){t.$set(t.obj,"circularBar",e)},expression:"obj.circularBar"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"flex-3"},[t._v("加强箍 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.strongBar,callback:function(e){t.$set(t.obj,"strongBar",e)},expression:"obj.strongBar"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"prefix"},slot:"prefix"})])],1)]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("钢筋笼数量 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.barCageCount,callback:function(e){t.$set(t.obj,"barCageCount",e)},expression:"obj.barCageCount"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("个")])])],1)])]),a("div",{staticClass:"padding-v-5 flex"},[a("div",{},[t._v("钢筋及焊接结论："),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.weldingResult,callback:function(e){t.$set(t.obj,"weldingResult",e)},expression:"obj.weldingResult"}})],1)])])]),a("div",{staticClass:"padding-left-40"},[a("div",{},[t._v("三、施工情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3 padding-v-5"},[t._v("设计桩径  : \r\n                "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.pileDiameter,callback:function(e){t.$set(t.obj,"pileDiameter",e)},expression:"obj.pileDiameter"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("mm")])])],1),a("div",{staticClass:"flex-3"},[t._v("设计桩长 : \r\n                "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.designPileLength,callback:function(e){t.$set(t.obj,"designPileLength",e)},expression:"obj.designPileLength"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1)]),a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("平台标高/护筒标高 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.platformElevation,callback:function(e){t.$set(t.obj,"platformElevation",e)},expression:"obj.platformElevation"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1),a("div",{staticClass:"flex-3"},[t._v("桩顶标高 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.pileTopHeight,callback:function(e){t.$set(t.obj,"pileTopHeight",e)},expression:"obj.pileTopHeight"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1)])]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("开孔时间 : "),a("Input",{staticStyle:{width:"250px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.openTime,callback:function(e){t.$set(t.obj,"openTime",e)},expression:"obj.openTime"}})],1),a("div",{staticClass:"flex-3"},[t._v("终孔时间 : "),a("Input",{staticStyle:{width:"250px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.stopTime,callback:function(e){t.$set(t.obj,"stopTime",e)},expression:"obj.stopTime"}})],1)]),a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("实际孔深 : \r\n            "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.actualDeep,callback:function(e){t.$set(t.obj,"actualDeep",e)},expression:"obj.actualDeep"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1),a("div",{staticClass:"flex-3"},[t._v("有效桩长  :\r\n            "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.validPileLength,callback:function(e){t.$set(t.obj,"validPileLength",e)},expression:"obj.validPileLength"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1)])])]),a("div",{staticClass:"  padding-left-40"},[a("div",{},[t._v("四、灌注情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{},[t._v("砼强度等级C : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.concreteStrongLevel,callback:function(e){t.$set(t.obj,"concreteStrongLevel",e)},expression:"obj.concreteStrongLevel"}})],1)]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3"},[t._v("灌注开始时间 : "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.perfusionStartTime,callback:function(e){t.$set(t.obj,"perfusionStartTime",e)},expression:"obj.perfusionStartTime"}})],1)])]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"padding-v-5 flex"},[a("div",{staticClass:"flex-3"},[t._v("设计坍落度 : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.designSlump,callback:function(e){t.$set(t.obj,"designSlump",e)},expression:"obj.designSlump"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("mm")])])],1),a("div",{staticClass:"flex-3"},[t._v("实测坍落度 : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.actualSlump,callback:function(e){t.$set(t.obj,"actualSlump",e)},expression:"obj.actualSlump"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m³")])])],1),a("div",{staticClass:"flex-3"},[t._v("砼理论方量 : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.theoryVolume,callback:function(e){t.$set(t.obj,"theoryVolume",e)},expression:"obj.theoryVolume"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m³")])])],1)]),a("div",{staticClass:"padding-v-5 flex"},[a("div",{staticClass:"flex-3"},[t._v("砼实灌方量  : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.actualVolume,callback:function(e){t.$set(t.obj,"actualVolume",e)},expression:"obj.actualVolume"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m³")])])],1),a("div",{staticClass:"flex-5 margin-l-10"},[t._v("试块制作组数  : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.sampleMaking,callback:function(e){t.$set(t.obj,"sampleMaking",e)},expression:"obj.sampleMaking"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("组")])])],1),a("div",{staticClass:"flex-1"}),a("div",{staticClass:"flex-1"})])])]),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("孔深照片：")]),t._l(t.obj.actualDeepImg,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("钢筋笼照片组：")]),t._l(t.obj.barCageCountImg,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("岩样照片：")]),t._l(t.obj.deptRockUrl,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticStyle:{"margin-top":"30px"}},[a("div",{staticStyle:{"min-height":"100px"}},[t._v("\r\n         发现问题及处理情况：\r\n         "),a("div",{staticClass:"padding-v-5",staticStyle:{"text-indent":"2em"}},[a("Input",{staticStyle:{width:"90%"},attrs:{placeholder:"",clearable:"",maxlength:500,type:"textarea",rows:5},model:{value:t.obj.problemContent,callback:function(e){t.$set(t.obj,"problemContent",e)},expression:"obj.problemContent"}})],1)])])]),a("div",{staticStyle:{"text-align":"right"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("保存")])],1)])},o=[],c=a("c13b"),d={data:function(){return{formItem:{templateId:0,weather:"",buildCompany:"",building:""},templateList:[]}},props:{obj:{type:Object,default:function(){return{actualDeepImg:[],barCageCountImg:[]}}}},methods:{handleSubmit:function(){var t=this;this.obj.mainBar="".concat(this.obj.mainBarNum,"φ").concat(this.obj.mainBarType);var e=this.obj;c["a"].updateJxZkGzzPzjl(e).then(function(e){console.log(e),"Success"===e.data.code&&t.$Message.success({content:"修改成功！",onClose:function(){t.$emit("editModalClose",!0)}})})}},mounted:function(){}},r=d,u=(a("4ee3"),a("2877")),p=Object(u["a"])(r,s,o,!1,null,null,null);p.options.__file="edit.vue";var h=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("form",{attrs:{action:"http://47.98.132.165:18088//jxZkGzzPzjl/download?id="+t.obj.id,method:"post"}},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"导出word"}})]),a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-6 padding-v-5"},[t._v("当日气候："+t._s(t.obj.weather))])]),a("div",{staticClass:"flex  padding-left-40"},[a("div",{staticClass:" padding-v-5"},[t._v("一、机械设备：")]),a("div",{staticClass:"flex"},[a("div",{staticClass:" padding-v-5"},[t._v("钻机型号："+t._s(t.obj.drillModel))]),a("div",{staticClass:"padding-v-5 padding-left-40"},[t._v("工作状态："+t._s(t.obj.workState))])])]),a("div",{staticClass:"padding-left-40"},[a("div",{},[t._v("二、材料质量")]),a("div",{staticClass:"padding-left-40"},[a("div",{},[a("div",{},[t._v("钢筋笼配筋：")]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("主筋数量 : "+t._s(t.obj.mainBarCount)+" ")]),a("div",{staticClass:"flex-3"},[t._v("主筋:"+t._s(t.obj.mainBarType))]),a("div",{staticClass:"flex-3"},[t._v("箍筋 : "+t._s(t.obj.circularBar))]),a("div",{staticClass:"flex-3"},[t._v("加强箍 : "+t._s(t.obj.strongBar))])]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("钢筋笼数量 : "+t._s(t.obj.barCageCount))])])]),a("div",{staticClass:"padding-v-5 flex"},[a("div",{},[t._v("钢筋及焊接结论：")]),a("div",{},[a("div",{},[t._v(t._s(t.obj.weldingResult))])])])])]),a("div",{staticClass:"padding-left-40"},[a("div",{},[t._v("三、施工情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3"},[t._v("设计桩径  : "+t._s(t.obj.pileDiameter)+"mm")]),a("div",{staticClass:"flex-3"},[t._v("设计桩长 : "+t._s(t.obj.designPileLength)+"m")]),a("div",{staticClass:"flex-3"},[t._v("平台标高/护筒标高 :"+t._s(t.obj.platformElevation)+"m")]),a("div",{staticClass:"flex-3"},[t._v("桩顶标高 : "+t._s(t.obj.pileTopHeight)+"m")])])]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3"},[t._v("开孔时间 : "+t._s(t.obj.openTime))]),a("div",{staticClass:"flex-3"},[t._v("终孔时间 : "+t._s(t.obj.stopTime))]),a("div",{staticClass:"flex-3"},[t._v("实际孔深 : "+t._s(t.obj.actualDeep))])])])]),a("div",{staticClass:"  padding-left-40"},[a("div",{},[t._v("四、灌注情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{},[t._v("砼强度等级 : C"+t._s(t.obj.concreteStrongLevel))])]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3"},[t._v("灌注开始时间 : "+t._s(t.obj.perfusionStartTime))])])]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3"},[t._v("设计坍落度 : "+t._s(t.obj.designSlump)+"mm")]),a("div",{staticClass:"flex-3"},[t._v("实测坍落度 : "+t._s(t.obj.actualSlump)+"mm")]),a("div",{staticClass:"flex-3"},[t._v("砼理论方量 : "+t._s(t.obj.theoryVolume)+"m³")]),a("div",{staticClass:"flex-3"},[t._v("砼实灌方量  : "+t._s(t.obj.actualVolume)+"m³")])]),a("div",{staticClass:"padding-v-5 flex"},[a("div",{staticClass:"flex-3"},[t._v("充盈系数 : "+t._s(t.obj.fillingCoefficient)+"  ")]),a("div",{staticClass:"flex-3"},[t._v("试块制作组数  : "+t._s(t.obj.sampleMaking)+"组")]),a("div",{staticClass:"flex-3"}),a("div",{staticClass:"flex-3"})])])]),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("孔深照片：")]),t._l(t.obj.actualDeepImg,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("钢筋笼照片组：")]),t._l(t.obj.barCageCountImg,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("岩样照片：")]),t._l(t.obj.deptRockUrl,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticStyle:{"margin-top":"30px"}},[a("div",{staticStyle:{"min-height":"100px"}},[t._v("\n         发现问题及处理情况：\n         "),a("div",{staticClass:"padding-v-5",staticStyle:{"text-indent":"2em"}},[t._v("\n         \t"+t._s(t.obj.problemContent?t.obj.problemContent:"施工正常")+"\n         ")])])])])},g=[],v={data:function(){return{formItem:{templateId:0,weather:"",buildCompany:"",building:""},templateList:[]}},props:{obj:{type:Object,default:function(){return{templateId:0,weather:"",buildCompany:"",building:0,actualDeepImg:[],barCageCountImg:[]}}}},methods:{},mounted:function(){}},m=v,b=(a("842a"),Object(u["a"])(m,f,g,!1,null,null,null));b.options.__file="detail.vue";var x=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"导出旁站信息",width:"500px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("Form",{ref:"form",attrs:{model:t.query,rule:t.ruleValidate}},[a("FormItem",{attrs:{label:"楼栋名","label-width":80,prop:"buildingId"}},[a("Select",{model:{value:t.query.buildingId,callback:function(e){t.$set(t.query,"buildingId",e)},expression:"query.buildingId"}},t._l(t.buildList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1),a("template",{slot:"footer"},[a("Button",{attrs:{type:"primary",ghost:""},on:{click:t.handleOk}},[t._v("确定")]),a("Button",{attrs:{type:"primary",ghost:""},on:{click:t.handleCancel}},[t._v("取消")])],1)],2)},j=[],y=a("d78e"),_=function(){return{buildingId:""}},w={name:"modal-export",props:{value:{type:Boolean,default:!1},roleData:Object},data:function(){return{show:!1,query:_(),buildList:[],ruleValidate:{buildingId:{required:!0,message:"暂无楼栋信息",trigger:"blur"}}}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)},roleData:function(t){this.getBuildList()}},methods:{getBuildList:function(){var t=this;y["a"].getBuildList({projectId:Number(this.roleData.id)}).then(function(e){t.buildList=e.map(function(t){var e=t.buildingName,a=t.id;return{label:e,value:a}}),t.query.buildingId=t.buildList.length>0?t.buildList[0].value:""}).catch(function(e){t.$Message.error("获取楼栋数据失败")})},handleOk:function(){var t=this;this.$refs.form.validate(function(e){if(e){t.$emit("input",!1);var a={projectId:Number(t.roleData.id),buildingId:t.query.buildingId};t.exportExcel("http://47.98.132.165:18088/jxZkGzzPzjl/exprotExcel",a)}})},exportExcel:function(t,e){var a=document.createElement("form");for(var i in a.style.display="none",a.action=t,a.method="post",document.body.appendChild(a),e){var n=document.createElement("input");n.type="hidden",n.name=i,n.value=e[i],a.appendChild(n)}a.submit(),a.remove()},handleCancel:function(){this.$emit("input",!1)}}},S=w,k=(a("06c7"),Object(u["a"])(S,C,j,!1,null,"838c4294",null));k.options.__file="modal-export.vue";var I=k.exports,z=a("ac44"),L=a("077f"),B=a("0a5f"),D=a("0ecd"),$={name:"tables_page",mixins:[B["a"]],components:{Tables:l["a"],Edit:h,Detail:x,modalExport:I,OperationLog:z["a"]},data:function(){var t=this;return{columns:[{title:"桩号",key:"pileCode"},{title:"状态",key:"perfusionStartTime",render:function(t,e){return t("div",function(){console.log(e);var t="";return 0==e.row.status?t="未开始":1==e.row.status?t="已开始":2==e.row.status?t="待审核":3==e.row.status&&(t="已完成"),t}())}},{title:"操作",key:"handle",render:function(e,a){return e("div",[e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0001")},on:{click:function(e){console.log(t.tableData[a.index]),t.getDetai(t.tableData[a.index].id,function(){t.detailModal.show=!0})}},style:{marginRight:"5px"}},"查看"),e("Button",{props:{type:"warning",size:"small",disabled:!t.isAccessForButton("0002")},on:{click:function(e){t.getDetai(t.tableData[a.index].id,function(){t.editModal.show=!0})}},style:{marginRight:"5px"}},"修改"),e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.log(a),c["a"].deleteJxZkGzzPzjl(t.tableData[a.index].id).then(function(e){t.tableData.splice(a.index,1),t.$Message.success("删除成功！")})}}},[e("Button",{props:{type:"error",size:"small",disabled:!t.isAccessForButton("0003")},style:{marginRight:"5px"}},"删除")]),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0029")},on:{click:function(e){t.obj=Object.assign({},t.obj,a.row),t.getOperationLogList(t.obj.id),t.isOperationLogShow=!0}},style:{marginRight:"5px"}},"查看操作记录")])}}],tableData:[],addModal:{show:!1},editModal:{show:!1},detailModal:{show:!1},timeToSubmit:!1,formItem:{actualDeepImg:[]},total:0,pageSize:10,pageIndex:1,modal_export:{show:!1,roleData:{}},SoilVolume:0,isOperationLogShow:!1,operationLogList:[],obj:{}}},computed:{word:function(){return"".concat(this.PROJECT.projectName,"项目").concat(this.BUILDING.buildingName,"楼砼实灌总方量：").concat(this.SoilVolume)}},methods:{exportExcel:function(){this.$refs.tables.exportCsv({filename:"table-".concat((new Date).valueOf(),".csv")})},addModalShow:function(){this.addModal.show=!0},addModalClose:function(){console.log("handleModalClose"),this.addModal.show=!1,this.getList()},editModalClose:function(){console.log("editModalClose"),this.editModal.show=!1,this.getList()},getDetai:function(t,e){var a=this;c["a"].getDetailById({id:t}).then(function(t){t.actualDeepImg?t.actualDeepImg=JSON.parse(t.actualDeepImg):t.actualDeepImg=[],t.barCageCountImg?t.barCageCountImg=JSON.parse(t.barCageCountImg):t.barCageCountImg=[],t.deptRockUrl?t.deptRockUrl=JSON.parse(t.deptRockUrl):t.deptRockUrl=[],a.formItem=Object.assign({},a.formItem,t),a.formItem.fillingCoefficient=D["a"].accDiv(t.actualVolume,t.theoryVolume,2),console.log(a.formItem),e&&e()})},getList:function(){var t=this;if(this.PROJECT&&this.PROJECT.id&&this.BUILDING&&this.BUILDING.id){var e={projectId:this.PROJECT.id,buildingNum:this.BUILDING.id,pageIndex:(this.pageIndex-1)*this.pageSize,pageSize:this.pageSize};c["a"].getListByCondition(e).then(function(e){console.log(e),t.tableData=e.list,t.total=e.total})}},buildingChange:function(){this.getSoilVolume(),this.getList()},pageChange:function(t){console.log(t),this.pageIndex=t,this.getList()},pageSizeChange:function(t){console.log(t),this.pageSize=parseInt(t),this.getList()},getSoilVolume:function(){var t=this;this.PROJECT&&this.PROJECT.id&&this.BUILDING&&this.BUILDING.id&&(console.log(this.PROJECT),console.log(this.BUILDING),c["a"].getSoilVolume({projectId:Number(this.PROJECT.id),buildingId:this.BUILDING.id}).then(function(e){t.SoilVolume=e||0}).catch(function(){t.$Message.error("获得水泥总数失败")}))},getOperationLogList:function(t){var e=this;L["a"].getOperationLogListByIdType({pangzhanId:t,type:"0001"}).then(function(t){e.operationLogList=t}).catch(function(){})},showExportModal:function(){this.modal_export.show=!0,this.modal_export.roleData=this.$store.state.user.project}},mounted:function(){}},T=$,P=(a("26b3"),Object(u["a"])(T,i,n,!1,null,null,null));P.options.__file="jxgz.vue";e["default"]=P.exports},defd:function(t,e,a){},fa69:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{overflow:"hidden"},attrs:{id:""}},[t.searchable&&"top"===t.searchPlace?a("div",{staticClass:"search-con search-con-top",staticStyle:{float:"left"}},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns,function(e){return"handle"!==e.key||"expand"!==e.key?a("Option",{key:"search-col-"+e.key,attrs:{value:e.key}},[t._v(t._s(e.title))]):t._e()})),a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),a("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.handleSearch}},[a("Icon",{attrs:{type:"search"}}),t._v("  搜索")],1)],1):t._e(),a("div",{staticStyle:{float:"right"}},[a("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-add"},on:{click:t.addModalShow}})],1)]),a("Table",{ref:"tablesMain",attrs:{data:t.insideTableData,columns:t.insideColumns,stripe:t.stripe,border:t.border,"show-header":t.showHeader,width:t.width,height:t.height,loading:t.loading,"disabled-hover":t.disabledHover,"highlight-row":t.highlightRow,"row-class-name":t.rowClassName,size:t.size,"no-data-text":t.noDataText,"no-filtered-data-text":t.noFilteredDataText},on:{"on-current-change":t.onCurrentChange,"on-select":t.onSelect,"on-select-cancel":t.onSelectCancel,"on-select-all":t.onSelectAll,"on-selection-change":t.onSelectionChange,"on-sort-change":t.onSortChange,"on-filter-change":t.onFilterChange,"on-row-click":t.onRowClick,"on-row-dblclick":t.onRowDblclick,"on-expand":t.onExpand}},[t._t("header",null,{slot:"header"}),t._t("footer",null,{slot:"footer"}),t._t("loading",null,{slot:"loading"})],2),t.searchable&&"bottom"===t.searchPlace?a("div",{staticClass:"search-con search-con-top"},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns,function(e){return"handle"!==e.key?a("Option",{key:"search-col-"+e.key,attrs:{value:e.key}},[t._v(t._s(e.title))]):t._e()})),a("Input",{staticClass:"search-input",attrs:{placeholder:"输入关键字搜索"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),a("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[a("Icon",{attrs:{type:"search"}}),t._v("  搜索")],1)],1):t._e(),a("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)},n=[],l=(a("ac6a"),a("f751"),a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tables-edit-outer"},[t.isEditting?a("div",{staticClass:"tables-editting-con"},[a("Input",{staticClass:"tables-edit-input",attrs:{value:t.value},on:{input:t.handleInput}}),a("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.saveEdit}},[a("Icon",{attrs:{type:"md-checkmark"}})],1),a("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.canceltEdit}},[a("Icon",{attrs:{type:"md-close"}})],1)],1):a("div",{staticClass:"tables-edit-con"},[a("span",{staticClass:"value-con"},[t._v(t._s(t.value))]),t.editable?a("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:t.startEdit}},[a("Icon",{attrs:{type:"md-create"}})],1):t._e()],1)])}),s=[],o={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(t){this.$emit("input",t)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},c=o,d=(a("4974"),a("2877")),r=Object(d["a"])(c,l,s,!1,null,null,null);r.options.__file="edit.vue";var u=r.exports,p={delete:function(t,e,a){return t("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(e),a.$emit("on-delete",e)}}},[t("Button",{props:{type:"text",ghost:!0}},[t("Icon",{props:{type:"md-trash",size:18,color:"#000000"}})])])}},h=p,f=(a("30d9"),{name:"Tables",props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"}},data:function(){return{insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:"",searchValue:"",searchKey:""}},methods:{suportEdit:function(t,e){var a=this;return t.render=function(t,e){return t(u,{props:{params:e,value:a.insideTableData[e.index][e.column.key],edittingCellId:a.edittingCellId,editable:a.editable},on:{input:function(t){a.edittingText=t},"on-start-edit":function(t){a.edittingCellId="editting-".concat(t.index,"-").concat(t.column.key),a.$emit("on-start-edit",t)},"on-cancel-edit":function(t){a.edittingCellId="",a.$emit("on-cancel-edit",t)},"on-save-edit":function(t){a.value[t.row.initRowIndex][t.column.key]=a.edittingText,a.$emit("input",a.value),a.$emit("on-save-edit",Object.assign(t,{value:a.edittingText})),a.edittingCellId=""}}})},t},surportHandle:function(t){var e=this,a=t.options||[],i=[];a.forEach(function(t){h[t]&&i.push(h[t])});var n=t.button?[].concat(i,t.button):i;return t.render=function(t,a){return a.tableData=e.value,t("div",n.map(function(i){return i(t,a,e)}))},t},handleColumns:function(t){var e=this;this.insideColumns=t.map(function(t,a){var i=t;return i.editable&&(i=e.suportEdit(i,a)),"handle"===i.key&&(i=e.surportHandle(i)),i})},setDefaultSearchKey:function(){this.searchKey="expand"!==this.columns[0].key?this.columns[0].key:this.columns.length>1?this.columns[1].key:""},handleClear:function(t){""===t.target.value&&(this.insideTableData=this.value)},handleSearch:function(){var t=this;this.insideTableData=this.value.filter(function(e){return e[t.searchKey].indexOf(t.searchValue)>-1})},handleTableData:function(){this.insideTableData=this.value.map(function(t,e){var a=t;return a.initRowIndex=e,a})},exportCsv:function(t){this.$refs.tablesMain.exportCsv(t)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(t,e){this.$emit("on-current-change",t,e)},onSelect:function(t,e){this.$emit("on-select",t,e)},onSelectCancel:function(t,e){this.$emit("on-select-cancel",t,e)},onSelectAll:function(t){this.$emit("on-select-all",t)},onSelectionChange:function(t){this.$emit("on-selection-change",t)},onSortChange:function(t,e,a){this.$emit("on-sort-change",t,e,a)},onFilterChange:function(t){this.$emit("on-filter-change",t)},onRowClick:function(t,e){this.$emit("on-row-click",t,e)},onRowDblclick:function(t,e){this.$emit("on-row-dblclick",t,e)},onExpand:function(t,e){this.$emit("on-expand",t,e)},addModalShow:function(){this.$emit("addModalShow",!0)}},watch:{columns:function(t){this.handleColumns(t),this.setDefaultSearchKey()},value:function(t){this.handleTableData(),this.handleSearch()}},mounted:function(){this.handleColumns(this.columns),this.setDefaultSearchKey(),this.handleTableData()}}),g=f,v=Object(d["a"])(g,i,n,!1,null,null,null);v.options.__file="tables.vue";var m=v.exports;e["a"]=m}}]);
//# sourceMappingURL=chunk-7b50.19cc18d6.js.map