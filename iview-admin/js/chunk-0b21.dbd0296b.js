(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b21"],{"483e":function(t,e,a){"use strict";var i=a("fc43"),s=a.n(i);s.a},"4f6e":function(t,e,a){"use strict";var i=a("8f47"),s=a.n(i);s.a},"81da":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("div",{staticStyle:{padding:"10px"}}),a("Table",{attrs:{width:"100%",border:"",columns:t.columns,data:t.tableData}}),a("div",{staticStyle:{padding:"18px 10px 40px","text-align":"right",clear:"both"}},[a("Page",{staticClass:"float-l",attrs:{total:t.total,"show-total":"","show-elevator":"","show-sizer":"",current:t.pageIndex},on:{"on-change":t.pageChange,"on-page-size-change":t.pageSizeChange}})],1)],1),a("Modal",{attrs:{title:"修改预应力管桩旁站","ok-text":"提交","footer-hide":!0,width:"60%",scrollable:!0,styles:{top:"0px"}},model:{value:t.editModal.show,callback:function(e){t.$set(t.editModal,"show",e)},expression:"editModal.show"}},[a("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[a("Edit",{attrs:{obj:t.formItem},on:{editModalClose:t.editModalClose}})],1)]),a("Modal",{attrs:{title:"预应力管桩旁站详情","ok-text":"确认",width:"60%",scrollable:!0},model:{value:t.detailModal.show,callback:function(e){t.$set(t.detailModal,"show",e)},expression:"detailModal.show"}},[a("div",{attrs:{id:""}},[a("Detail",{attrs:{obj:t.formItem}})],1)]),a("OperationLog",{attrs:{operationLogList:t.operationLogList,obj:t.obj},model:{value:t.isOperationLogShow,callback:function(e){t.isOperationLogShow=e},expression:"isOperationLogShow"}})],1)},s=[],l=(a("f751"),a("fa69")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-6 padding-v-5"},[t._v("\r\n              当日气候：\r\n        "),a("RadioGroup",{model:{value:t.obj.weather,callback:function(e){t.$set(t.obj,"weather",e)},expression:"obj.weather"}},[a("Radio",{attrs:{label:"晴"}},[a("span",[t._v("晴")])]),a("Radio",{attrs:{label:"阴"}},[a("span",[t._v("阴")])]),a("Radio",{attrs:{label:"雨"}},[a("span",[t._v("雨")])])],1)],1),a("div",{staticClass:"flex-6 padding-v-5"},[t._v("施工单位："),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.buildCompany,callback:function(e){t.$set(t.obj,"buildCompany",e)},expression:"obj.buildCompany"}})],1)]),a("div",{staticClass:"flex  padding-left-40"},[a("div",{staticClass:" padding-v-5"},[t._v("一、机械设备：")]),a("div",{staticClass:"flex"},[a("div",{staticClass:" padding-v-5"},[t._v("钻机型号: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.drillModel,callback:function(e){t.$set(t.obj,"drillModel",e)},expression:"obj.drillModel"}})],1),a("div",{staticClass:"padding-v-5 margin-l-10"},[t._v("工作状态: "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.workState,callback:function(e){t.$set(t.obj,"workState",e)},expression:"obj.workState"}})],1)])]),a("div",{staticClass:"padding-left-40"},[a("div",{},[t._v("二、材料质量")]),a("div",{staticClass:"padding-left-40"},[a("div",{},[a("div",{},[t._v("钢筋笼配筋：")]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("主筋数量 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.mainBarCount,callback:function(e){t.$set(t.obj,"mainBarCount",e)},expression:"obj.mainBarCount"}})],1),a("div",{staticClass:"flex-3"},[t._v("主筋类型 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.mainBarType,callback:function(e){t.$set(t.obj,"mainBarType",e)},expression:"obj.mainBarType"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"flex-3"},[t._v("箍筋 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.circularBar,callback:function(e){t.$set(t.obj,"circularBar",e)},expression:"obj.circularBar"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"flex-3"},[t._v("加强箍 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.strongBar,callback:function(e){t.$set(t.obj,"strongBar",e)},expression:"obj.strongBar"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"prefix"},slot:"prefix"})])],1)]),a("div",{staticClass:"padding-v-5 flex padding-left-40"},[a("div",{staticClass:"flex-3"},[t._v("钢筋笼数量 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.barCageCount,callback:function(e){t.$set(t.obj,"barCageCount",e)},expression:"obj.barCageCount"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("个")])])],1)])]),a("div",{staticClass:"padding-v-5 flex"},[a("div",{},[t._v("钢筋及焊接结论："),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.weldingResult,callback:function(e){t.$set(t.obj,"weldingResult",e)},expression:"obj.weldingResult"}})],1)])])]),a("div",{staticClass:"padding-left-40"},[a("div",{},[t._v("三、施工情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3 padding-v-5"},[t._v("设计桩径  : \r\n                "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.pileDiameter,callback:function(e){t.$set(t.obj,"pileDiameter",e)},expression:"obj.pileDiameter"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("mm")])])],1),a("div",{staticClass:"flex-3"},[t._v("设计桩长 : \r\n                "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.designPileLength,callback:function(e){t.$set(t.obj,"designPileLength",e)},expression:"obj.designPileLength"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1)]),a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("平台标高/护筒标高 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.platformElevation,callback:function(e){t.$set(t.obj,"platformElevation",e)},expression:"obj.platformElevation"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1),a("div",{staticClass:"flex-3"},[t._v("桩顶标高 : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.pileTopHeight,callback:function(e){t.$set(t.obj,"pileTopHeight",e)},expression:"obj.pileTopHeight"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1)])]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("开孔时间 : "),a("Input",{staticStyle:{width:"250px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.openTime,callback:function(e){t.$set(t.obj,"openTime",e)},expression:"obj.openTime"}})],1),a("div",{staticClass:"flex-3"},[t._v("终孔时间 : "),a("Input",{staticStyle:{width:"250px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.stopTime,callback:function(e){t.$set(t.obj,"stopTime",e)},expression:"obj.stopTime"}})],1)]),a("div",{staticClass:"flex padding-v-5"},[a("div",{staticClass:"flex-3"},[t._v("实际孔深 : \r\n            "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.actualDeep,callback:function(e){t.$set(t.obj,"actualDeep",e)},expression:"obj.actualDeep"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1),a("div",{staticClass:"flex-3"},[t._v("有效桩长  :\r\n            "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.validPileLength,callback:function(e){t.$set(t.obj,"validPileLength",e)},expression:"obj.validPileLength"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m")])])],1)])])]),a("div",{staticClass:"  padding-left-40"},[a("div",{},[t._v("四、灌注情况：")]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{},[t._v("砼强度等级C : "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.concreteStrongLevel,callback:function(e){t.$set(t.obj,"concreteStrongLevel",e)},expression:"obj.concreteStrongLevel"}})],1)]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-3"},[t._v("灌注开始时间 : "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.perfusionStartTime,callback:function(e){t.$set(t.obj,"perfusionStartTime",e)},expression:"obj.perfusionStartTime"}})],1)])]),a("div",{staticClass:"padding-v-5 padding-left-40"},[a("div",{staticClass:"padding-v-5 flex"},[a("div",{staticClass:"flex-3"},[t._v("设计坍落度 : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.designSlump,callback:function(e){t.$set(t.obj,"designSlump",e)},expression:"obj.designSlump"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("mm")])])],1),a("div",{staticClass:"flex-3"},[t._v("实测坍落度 : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.actualSlump,callback:function(e){t.$set(t.obj,"actualSlump",e)},expression:"obj.actualSlump"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m³")])])],1),a("div",{staticClass:"flex-3"},[t._v("砼理论方量 : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.theoryVolume,callback:function(e){t.$set(t.obj,"theoryVolume",e)},expression:"obj.theoryVolume"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m³")])])],1)]),a("div",{staticClass:"padding-v-5 flex"},[a("div",{staticClass:"flex-3"},[t._v("砼实灌方量  : \r\n               "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",maxlength:200},model:{value:t.obj.actualVolume,callback:function(e){t.$set(t.obj,"actualVolume",e)},expression:"obj.actualVolume"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("m³")])])],1),a("div",{staticClass:"flex-5 margin-l-10"},[t._v("试块制作组数  : \r\n              "),a("Input",{staticStyle:{width:"100px"},attrs:{placeholder:"",clearable:"",maxlength:200},model:{value:t.obj.sampleMaking,callback:function(e){t.$set(t.obj,"sampleMaking",e)},expression:"obj.sampleMaking"}},[a("span",{staticStyle:{"line-height":"30px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("组")])])],1),a("div",{staticClass:"flex-1"}),a("div",{staticClass:"flex-1"})])])]),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("孔深照片：")]),t._l(t.obj.actualDeepImg,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("钢筋笼照片组：")]),t._l(t.obj.barCageCountImg,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticClass:"flex"},[a("span",{staticClass:"padding-left-40"},[t._v("岩样照片：")]),t._l(t.obj.deptRockUrl,function(t,e){return a("img",{key:e,attrs:{src:t,width:"100",height:"100"}})})],2),a("div",{staticStyle:{"margin-top":"30px"}},[a("div",{staticStyle:{"min-height":"100px"}},[t._v("\r\n         发现问题及处理情况：\r\n         "),a("div",{staticClass:"padding-v-5",staticStyle:{"text-indent":"2em"}},[a("Input",{staticStyle:{width:"90%"},attrs:{placeholder:"",clearable:"",maxlength:500,type:"textarea",rows:5},model:{value:t.obj.problemContent,callback:function(e){t.$set(t.obj,"problemContent",e)},expression:"obj.problemContent"}})],1)])])]),a("div",{staticStyle:{"text-align":"right"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit()}}},[t._v("保存")])],1)])},n=[],d=a("c13b"),r={data:function(){return{formItem:{templateId:0,weather:"",buildCompany:"",building:""},templateList:[]}},props:{obj:{type:Object,default:function(){return{actualDeepImg:[],barCageCountImg:[]}}}},methods:{handleSubmit:function(){var t=this;this.obj.mainBar="".concat(this.obj.mainBarNum,"φ").concat(this.obj.mainBarType);var e=this.obj;d["a"].updateJxZkGzzPzjl(e).then(function(e){console.log(e),"Success"===e.data.code&&t.$Message.success({content:"修改成功！",onClose:function(){t.$emit("editModalClose",!0)}})})}},mounted:function(){}},c=r,p=(a("4f6e"),a("2877")),u=Object(p["a"])(c,o,n,!1,null,null,null);u.options.__file="edit.vue";var f=u.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"90%",margin:"0 auto"}},[a("div",{staticStyle:{"text-align":"right",position:"absolute",top:"10px",right:"60px"}},[a("form",{staticStyle:{display:"inline-block"},attrs:{action:"https://www.therethey.com//jxZkGzzPzjl/download?id="+t.obj.id,method:"post"}},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"导出word"}})]),a("button",{staticClass:"btn",staticStyle:{"margin-left":"10px"},on:{click:t.printTable}},[t._v("打印")])]),a("div",{attrs:{id:"myElementId"}},[t._m(0),a("h1",{staticStyle:{padding:"20px","text-align":"center"}},[t._v("旁站监理记录 （预应力管桩）")]),a("div",{staticStyle:{"font-size":"larger","padding-bottom":"5px"}},[t._v("工程名称："+t._s(t.obj.projectName))]),a("div",{staticClass:"border-t border-l border-r",staticStyle:{"font-size":"larger"}},[a("div",{staticClass:"flex border-b"},[a("div",{staticClass:"flex-1 p-10"},[t._v("当日气候："+t._s(t.obj.weather))]),a("div",{staticClass:"border-l flex-1 p-10"},[t._v("施工单位："+t._s(t.obj.buildCompany))])]),a("div",{staticClass:"border-b p-10"},[a("span",[t._v("旁站的部位或工序：")]),a("span",[t._v(t._s(t.buildingCode))]),a("span",{},[t._v(" "+t._s(t.obj.pileCode)+" ;")])]),a("div",{staticClass:"flex border-b"},[a("div",{staticClass:"flex-1 p-10"},[t._v("旁站监理开始时间："+t._s(t.obj.startTime)+"；")]),a("div",{staticClass:"border-l flex-1 p-10"},[t._v("旁站监理结束时间："+t._s(t.obj.endTime)+"；")])]),a("div",{staticClass:"p-10 border-b"},[a("div",{},[t._v("一、机械设备： "+t._s(t.obj.equipment)+"；"),a("span",{staticClass:"p-l-10"},[t._v("桩机号： "+t._s(t.obj.workState))])]),a("div",{},[t._v("二、人员情况\t")]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",{staticClass:"p-l-10"},[t._v("管理人员： "+t._s(t.obj.administrator)+"；")]),a("span",{staticClass:"p-l-10"},[t._v("特种操作人员： "+t._s(t.obj.operator)+"；")])]),a("div",{},[a("span",[t._v("三、材料质量： "+t._s(t.obj.material_quality)+" ；")])]),a("div",{},[t._v("四、施工情况")]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("设计桩长： "+t._s(t.obj.pileLength)+"  m；")]),a("span",{staticClass:"p-l-10"},[t._v("设计直径:   "+t._s(t.obj.designDiameter)+" m；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",{staticClass:"p-l-10"},[t._v("管桩壁厚：  "+t._s(t.obj.pileTopHeight)+"  m；")]),a("span",{staticClass:"p-l-10"},[t._v("放样:   "+t._s(t.obj.lofting)+" m；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("地面标高A："+t._s(t.obj.ground_height)+"  m；")]),a("span",{staticClass:"p-l-10"},[t._v(" 桩顶标高B： "+t._s(t.obj.pileTopHeight)+"  m；")]),a("span",{staticClass:"p-l-10"},[t._v("送桩深度（A-B）：  "+t._s(t.obj.designPileLength)+" mm；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("配桩情况节（m）："+t._s(t.obj.pileMatching)+"  m；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("冷却情况（分钟）："+t._s(t.obj.currentHoleDepth)+"  m；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("最后压力值（pa）："+t._s(t.obj.lastPressure)+" ；")]),a("span",{staticClass:"p-l-10"},[t._v(" 最后10cm锤击数： "+t._s(t.obj.lastTenHitLrrigation)+"  次；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("最后10击灌入量："+t._s(t.obj.lastTenHitLrrigation)+"mm ；")]),a("span",{staticClass:"p-l-10"},[t._v(" 垂直度： "+t._s(t.obj.currentDropCageLength)+"  次；")])]),a("div",{staticClass:"padding-left-40 p-5-l-10"},[a("span",[t._v("实际桩顶标高："+t._s(t.obj.actualElevation)+" m；")]),a("span",{staticClass:"p-l-10"},[t._v(" 总锤击数： "+t._s(t.obj.currentDropCageLength)+"  次；")])])]),a("div",{staticClass:"p-10 border-b"},[a("div",[t._v("发现的问题及处理情况：")]),a("div",{staticClass:"p-10 padding-left-40 ",staticStyle:{"min-height":"50px"}},[t._v(t._s(t.obj.problem?t.obj.problem:"施工正常"))])]),a("div",{staticClass:"p-10 border-b"},[a("div",[t._v("整改意见：")]),a("div",{staticClass:"p-10 padding-left-40 ",staticStyle:{"min-height":"50px"}},[t._v(t._s(t.obj.suggestion))])]),a("div",{staticClass:"p-10 border-b"},[a("div",[t._v("处理结果：")]),a("div",{staticClass:"p-10 padding-left-40 ",staticStyle:{"min-height":"50px"}},[t._v(t._s(t.obj.result))])]),a("div",{staticClass:"p-10 border-b",staticStyle:{"text-align":"right","min-height":"50px"}},[a("div",{},[t._v("旁站监理人员："+t._s(t.obj.superName))]),a("div",{},[t._v("日期："),a("DateTimeToDate",{attrs:{timedate:t.obj.updateTime}})],1)])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-flex-center-between",staticStyle:{"font-weight":"bolder","font-size":"larger"}},[a("div",[t._v("监C4")]),a("div",[t._v("编 号：0001")])])}],h=(a("cadf"),a("551c"),a("097d"),a("1157")),b=a.n(h),m=a("8bdf"),x=a("89f2");Object(m["a"])(b.a);var j={components:{DateTimeToDate:x["a"]},data:function(){return{formItem:{templateId:0,weather:"",buildCompany:"",building:""},templateList:[]}},props:{obj:{type:Object,default:function(){return{templateId:0,weather:"",buildCompany:"",building:0,actualDeepImg:[],barCageCountImg:[]}}}},computed:{buildingCode:function(){return this.$store.state.user.building.buildingCode}},methods:{printTable:function(){b()("#myElementId").print()}},mounted:function(){}},_=j,C=(a("cff5"),Object(p["a"])(_,g,v,!1,null,null,null));C.options.__file="detail.vue";var y=C.exports,z=a("ac44"),w=a("66df"),S=a("a93f"),k=new Object;k.addJxZkGzzPzjl=function(t){return w["a"].request({url:"jxZkGzzPzjl/add",method:"post",data:t})},k.getDetailById=function(t){return S["a"].get({url:"/yylgzpz/getDetailById",data:t})},k.getYylgzpzList=function(t){return S["a"].post({url:"/yylgzpz/list",data:t})},k.deleteById=function(t){return S["a"].post({url:"/yylgzpz/deleteById?id=".concat(t.id),data:t})},k.getJxZkGzzPzjl=function(t){return S["a"].get({url:"jxZkGzzPzjl/getJxZkGzzPzjl?id=".concat(t.id),data:t})},k.getJxgzByCondition=function(t){return w["a"].request({url:"/jxZkGzzPzjl/getGzzByCondition",method:"post",data:t})},k.getListByCondition=function(t){return S["a"].post({url:"/jxZkGzzPzjl/getListByCondition",data:t})},k.deleteJxZkGzzPzjl=function(t){return w["a"].request({url:"jxZkGzzPzjl/delete?id=".concat(t),method:"post"})},k.updateJxZkGzzPzjl=function(t){return w["a"].request({url:"jxZkGzzPzjl/update",method:"post",data:t})},k.getDragList=function(){return w["a"].request({url:"get_drag_list",method:"get"})},k.downloadWord=function(t){return w["a"].request({url:"/jxZkGzzPzjl/download?id=".concat(t),method:"post"})},k.export=function(t){return S["a"].post({url:"/jxZkGzzPzjl/exportExcel",data:t})},k.getSoilVolume=function(t){return S["a"].get({url:"/building/getSoilVolume",data:t})};var I=k,L=a("077f"),B=a("0a5f"),P=(a("0ecd"),{name:"tables_page",mixins:[B["a"]],components:{Tables:l["a"],Edit:f,Detail:y,OperationLog:z["a"]},data:function(){var t=this;return{columns:[{title:"桩号",key:"pileCode"},{title:"状态",key:"perfusionStartTime",render:function(t,e){return t("div",function(){var t="";return 0==e.row.status?t="未开始":1==e.row.status?t="已开始":2==e.row.status?t="待审核":3==e.row.status?t="已完成":4==e.row.status?t="待审核":5==e.row.status&&(t="已完成"),t}())}},{title:"操作",key:"handle",render:function(e,a){return e("div",[e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0032")},on:{click:function(e){3!=a.row.status&&5!=a.row.status&&t.isAccessForButton("39")?t.$Message.error("未完成旁站，暂不允许查看"):(console.log(a.row),t.getDetailById(a.row.id))}},style:{marginRight:"5px"}},"查看"),e("Button",{props:{type:"warning",size:"small",disabled:!t.isAccessForButton("0033")},on:{click:function(e){t.getDetai(t.tableData[a.index].id,function(){t.editModal.show=!0})}},style:{marginRight:"5px"}},"修改"),e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.log(a);var e={id:a.row.id};I.deleteById(e).then(function(e){t.tableData.splice(a.index,1),t.$Message.success("删除成功！")})}}},[e("Button",{props:{type:"error",size:"small",disabled:!t.isAccessForButton("0034")},style:{marginRight:"5px"}},"删除")]),e("Button",{props:{type:"success",size:"small",disabled:!t.isAccessForButton("0031")},on:{click:function(e){t.obj=Object.assign({},t.obj,a.row),t.getOperationLogList(t.obj.id),t.isOperationLogShow=!0}},style:{marginRight:"5px"}},"查看操作记录")])}}],tableData:[],addModal:{show:!1},editModal:{show:!1},detailModal:{show:!1},timeToSubmit:!1,formItem:{actualDeepImg:[]},total:0,pageSize:10,pageIndex:1,modal_export:{show:!1,roleData:{}},SoilVolume:0,isOperationLogShow:!1,operationLogList:[],obj:{}}},computed:{projectId:function(){return this.PROJECT.id},buildingId:function(){return this.BUILDING.id}},methods:{exportExcel:function(){this.$refs.tables.exportCsv({filename:"table-".concat((new Date).valueOf(),".csv")})},addModalShow:function(){this.addModal.show=!0},addModalClose:function(){console.log("handleModalClose"),this.addModal.show=!1,this.getList()},editModalClose:function(){console.log("editModalClose"),this.editModal.show=!1,this.getList()},getDetailById:function(t,e){var a=this;I.getDetailById({id:t}).then(function(t){a.formItem=t,a.detailModal.show=!0})},getList:function(){var t=this;if(this.PROJECT&&this.PROJECT.id&&this.BUILDING&&this.BUILDING.id){var e={projectId:this.PROJECT.id,buildingId:this.BUILDING.id,pageIndex:(this.pageIndex-1)*this.pageSize,pageSize:this.pageSize};I.getYylgzpzList(e).then(function(e){console.log(e),t.tableData=e.list,t.total=e.total})}},buildingChange:function(){this.getList()},pageChange:function(t){console.log(t),this.pageIndex=t,this.getList()},pageSizeChange:function(t){console.log(t),this.pageSize=parseInt(t),this.getList()},getOperationLogList:function(t){var e=this;L["a"].getOperationLogListByIdType({pangzhanId:t,type:"0003"}).then(function(t){e.operationLogList=t}).catch(function(){})}},mounted:function(){}}),$=P,D=(a("483e"),Object(p["a"])($,i,s,!1,null,null,null));D.options.__file="yyl.vue";e["default"]=D.exports},"85d1":function(t,e,a){"use strict";var i=a("defd"),s=a.n(i);s.a},"8f47":function(t,e,a){},ac44:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"旁站监理数据操作记录: "+t.obj.pileCode+"号桩",width:"60%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",t._l(t.operationLogList,function(e){return a("div",{key:e.id,staticClass:"display-flex-center-between"},[a("span",{},[t._v("操作人："+t._s(e.editerName))]),a("div",{staticStyle:{width:"60%"}},[t._v("内容: "+t._s(e.editPoint))]),a("span",{},[t._v("时间："+t._s(e.updateTime))])])}))])},s=[],l=(a("059d"),{data:function(){return{show:!1}},props:{operationLogList:{type:Array,default:function(){return[]}},obj:{type:Object,default:function(){return{}}},value:{type:Boolean,default:function(){return!1}}},methods:{handleOk:function(){this.$emit("input",!1)},handleCancel:function(){this.$emit("input",!1)}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}},mounted:function(){}}),o=l,n=(a("85d1"),a("2877")),d=Object(n["a"])(o,i,s,!1,null,null,null);d.options.__file="operation-record.vue";e["a"]=d.exports},c13b:function(t,e,a){"use strict";var i=a("66df"),s=a("a93f"),l=new Object;l.addJxZkGzzPzjl=function(t){return i["a"].request({url:"jxZkGzzPzjl/add",method:"post",data:t})},l.getDetailById=function(t){return s["a"].get({url:"/jxZkGzzPzjl/getJxZkGzzPzjl",data:t})},l.getJxZkGzzPzjlList=function(t){return i["a"].request({url:"/jxZkGzzPzjl/listProject",method:"post",data:t})},l.getJxZkGzzPzjl=function(t){return s["a"].get({url:"jxZkGzzPzjl/getJxZkGzzPzjl?id=".concat(t.id),data:t})},l.getJxgzByCondition=function(t){return i["a"].request({url:"/jxZkGzzPzjl/getGzzByCondition",method:"post",data:t})},l.getListByCondition=function(t){return s["a"].post({url:"/jxZkGzzPzjl/getListByCondition",data:t})},l.deleteJxZkGzzPzjl=function(t){return i["a"].request({url:"jxZkGzzPzjl/delete?id=".concat(t),method:"post"})},l.updateJxZkGzzPzjl=function(t){return i["a"].request({url:"jxZkGzzPzjl/update",method:"post",data:t})},l.getDragList=function(){return i["a"].request({url:"get_drag_list",method:"get"})},l.downloadWord=function(t){return i["a"].request({url:"/jxZkGzzPzjl/download?id=".concat(t),method:"post"})},l.export=function(t){return s["a"].post({url:"/jxZkGzzPzjl/exportExcel",data:t})},l.getSoilVolume=function(t){return s["a"].get({url:"/building/getSoilVolume",data:t})},e["a"]=l},c5b1:function(t,e,a){},cff5:function(t,e,a){"use strict";var i=a("c5b1"),s=a.n(i);s.a},defd:function(t,e,a){},fc43:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0b21.dbd0296b.js.map