(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c542"],{"30d9":function(e,t,a){},"37c5":function(e,t,a){"use strict";var o=a("d8ee"),n=a.n(o);n.a},4974:function(e,t,a){"use strict";var o=a("bbb3"),n=a.n(o);n.a},"5def":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("Card",[a("Table",{attrs:{width:"100%",border:"",columns:e.columns2,data:e.roleList}}),a("div",{staticStyle:{padding:"18px 10px 18px","text-align":"right",clear:"both"}},[a("Page",{staticClass:"float-l",attrs:{total:e.total,"show-total":"","show-elevator":"","show-sizer":"",current:e.pageIndex},on:{"on-change":e.pageChange,"on-page-size-change":e.pageSizeChange}}),a("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add"},on:{click:function(t){e.addModal.show=!0}}})],1)],1),a("Modal",{attrs:{title:"修改角色信息","footer-hide":!0,width:"60%"},model:{value:e.editModal.show,callback:function(t){e.$set(e.editModal,"show",t)},expression:"editModal.show"}},[a("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[a("Edit",{attrs:{obj:e.role},on:{editModalClose:e.editModalClose}})],1)]),a("Modal",{attrs:{title:"添加角色","footer-hide":!0,width:"60%"},model:{value:e.addModal.show,callback:function(t){e.$set(e.addModal,"show",t)},expression:"addModal.show"}},[a("div",{staticStyle:{width:"80%, margin:0 auto"},attrs:{id:""}},[a("Add",{on:{addModalClose:e.addModalClose}})],1)])],1)},n=[],l=(a("cadf"),a("551c"),a("097d"),a("fa69")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"obj",attrs:{model:e.obj,rules:e.ruleCustom}},[a("Row",{attrs:{type:"flex",justify:"space-around"}},[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"角色",prop:"roleName"}},[a("Input",{attrs:{placeholder:""},model:{value:e.obj.roleName,callback:function(t){e.$set(e.obj,"roleName",t)},expression:"obj.roleName"}})],1)],1),a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"说明",prop:"remark"}},[a("Input",{attrs:{placeholder:""},model:{value:e.obj.remark,callback:function(t){e.$set(e.obj,"remark",t)},expression:"obj.remark"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",{attrs:{span:"12"}},[a("div",{staticStyle:{"padding-left":"20px"}},[a("FormItem",{attrs:{label:"是否项目角色 :"}},[a("RadioGroup",{model:{value:e.obj.type,callback:function(t){e.$set(e.obj,"type",t)},expression:"obj.type"}},[a("Radio",{attrs:{label:"1"}},[e._v("是")]),a("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1)])],1),a("FormItem",{staticStyle:{"text-align":"right"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("obj")}}},[e._v("保存")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){e.handleReset("obj")}}},[e._v("取消")])],1)],1)},s=[],r=a("7c6d"),c={data:function(){var e=function(e,t,a){""===t&&a(new Error("必填")),a()},t=function(e,t,a){""===t&&a(new Error("必填")),a()};return{ruleCustom:{roleName:[{validator:e,trigger:"blur"}],remark:[{validator:t,trigger:"blur"}]}}},props:{obj:{type:Object,default:function(){return{}}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(a){a?r["a"].updateRole(t.obj,function(a){console.log(a),t.$refs[e].resetFields(),t.$Message.success({content:"修改成功！",onClose:function(){t.$emit("editModalClose",!0)}})},function(e){t.$Message.error(e.message)}):t.$Message.error("提交失败!")})},handleReset:function(e){this.$refs[e].resetFields(),this.$emit("editModalClose",!0)}},mounted:function(){}},d=c,u=a("2877"),h=Object(u["a"])(d,i,s,!1,null,null,null);h.options.__file="role-edit.vue";var p=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"obj",attrs:{model:e.obj,rules:e.ruleCustom}},[a("Row",{attrs:{type:"flex",justify:"space-around"}},[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"角色",prop:"roleName"}},[a("Input",{attrs:{placeholder:""},model:{value:e.obj.roleName,callback:function(t){e.$set(e.obj,"roleName",t)},expression:"obj.roleName"}})],1)],1),a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"说明",prop:"remark"}},[a("Input",{attrs:{placeholder:""},model:{value:e.obj.remark,callback:function(t){e.$set(e.obj,"remark",t)},expression:"obj.remark"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",{attrs:{span:"12"}},[a("div",{staticStyle:{"padding-left":"20px"}},[a("FormItem",{attrs:{label:"是否项目角色 :"}},[a("RadioGroup",{model:{value:e.obj.type,callback:function(t){e.$set(e.obj,"type",t)},expression:"obj.type"}},[a("Radio",{attrs:{label:"1"}},[e._v("是")]),a("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1)])],1),a("FormItem",{staticStyle:{"text-align":"right"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("obj")}}},[e._v("保存")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){e.handleReset("obj")}}},[e._v("取消")])],1)],1)},m=[],g={data:function(){var e=function(e,t,a){""===t&&a(new Error("必填")),a()},t=function(e,t,a){""===t&&a(new Error("必填")),a()};return{ruleCustom:{roleName:[{validator:e,trigger:"blur"}],remark:[{validator:t,trigger:"blur"}]},obj:{roleName:"",remark:"",type:"0"}}},props:{},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(a){a?r["a"].addRole(t.obj,function(a){console.log(a),t.$refs[e].resetFields(),t.$Message.success({content:"添加成功！",onClose:function(){t.$emit("addModalClose",!0)}})},function(e){t.$Message.error(e.message)}):t.$Message.error("提交失败!")})},handleReset:function(e){this.$refs[e].resetFields(),this.$emit("addModalClose",!0)}},mounted:function(){}},b=g,y=Object(u["a"])(b,f,m,!1,null,null,null);y.options.__file="role-add.vue";var v=y.exports,x={components:{Tables:l["a"],Edit:p,Add:v},data:function(){var e=this;return{editModal:{show:!1},addModal:{show:!1},role:{},columns2:[{title:"角色",key:"roleName"},{title:"说明",key:"remark"},{title:"是否项目角色",key:"type"},{title:"操作",key:"action",render:function(t,a){return t("div",[t("Button",{props:{type:"success",size:"small"},on:{click:function(t){e.editModal.show=!0,e.role=e.roleList[a.index],console.log(e.role)}},style:{marginRight:"5px"}},"修改"),t("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(a.index),r["a"].deleteRole({id:e.roleList[a.index].id},function(){e.roleList.splice(a.index,1),e.$Message.success("删除成功！"),e.total=e.total-1})}}},[t("Button",{props:{type:"error",size:"small"}},"删除")])])}}],roleList:[],pageIndex:1,pageSize:10,total:0}},methods:{addModalClose:function(){this.addModal.show=!1,this.getRoles()},editModalClose:function(){this.editModal.show=!1,this.getRoles()},getRoles:function(){var e=this;r["a"].getRoles({pageIndex:this.pageSize*(this.pageIndex-1)+1,pageSize:this.pageSize},function(t){console.log(t),e.roleList=t.result.list,e.total=t.result.total})},pageChange:function(e){console.log(e),this.pageIndex=e,this.getRoles()},pageSizeChange:function(e){console.log(e),this.pageSize=parseInt(e),this.getRoles()}},mounted:function(){this.getRoles()}},C=x,k=(a("37c5"),Object(u["a"])(C,o,n,!1,null,null,null));k.options.__file="role.vue";t["default"]=k.exports},"7c6d":function(e,t,a){"use strict";a("cadf"),a("551c"),a("097d");var o=a("66df"),n=new Object;n.addRole=function(e,t,a){o["a"].request({url:"/role/add",method:"post",data:e}).then(function(e){console.log(e),"Success"!=e.data.code?a(e.data):t(e.data)})},n.deleteRole=function(e,t,a){o["a"].request({url:"/role/delete?id=".concat(e.id),method:"post"}).then(function(e){console.log(e),"Success"!=e.data.code?a(e.data):t(e.data)})},n.updateRole=function(e,t,a){o["a"].request({url:"/role/update",method:"post",data:e}).then(function(e){console.log(e),"Success"!=e.data.code?a(e.data):t(e.data)})},n.getRoles=function(e,t,a){o["a"].request({url:"/role/list?pageIndex=".concat(e.pageIndex,"&pageSize=").concat(e.pageSize),method:"post"}).then(function(e){console.log(e),"Success"!=e.data.code?a(e.data):t(e.data)})},n.getRolesByType=function(e,t,a){o["a"].request({url:"/role/getRolesByType?type=".concat(e.type),method:"get"}).then(function(e){console.log(e),"Success"!=e.data.code?a(e.data):t(e.data)})},t["a"]=n},bbb3:function(e,t,a){},d8ee:function(e,t,a){},fa69:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{overflow:"hidden"},attrs:{id:""}},[e.searchable&&"top"===e.searchPlace?a("div",{staticClass:"search-con search-con-top",staticStyle:{float:"left"}},[a("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l(e.columns,function(t){return"handle"!==t.key||"expand"!==t.key?a("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v(e._s(t.title))]):e._e()})),a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":e.handleClear},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),a("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[a("Icon",{attrs:{type:"search"}}),e._v("  搜索")],1)],1):e._e(),a("div",{staticStyle:{float:"right"}},[a("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-add"},on:{click:e.addModalShow}})],1)]),a("Table",{ref:"tablesMain",attrs:{data:e.insideTableData,columns:e.insideColumns,stripe:e.stripe,border:e.border,"show-header":e.showHeader,width:e.width,height:e.height,loading:e.loading,"disabled-hover":e.disabledHover,"highlight-row":e.highlightRow,"row-class-name":e.rowClassName,size:e.size,"no-data-text":e.noDataText,"no-filtered-data-text":e.noFilteredDataText},on:{"on-current-change":e.onCurrentChange,"on-select":e.onSelect,"on-select-cancel":e.onSelectCancel,"on-select-all":e.onSelectAll,"on-selection-change":e.onSelectionChange,"on-sort-change":e.onSortChange,"on-filter-change":e.onFilterChange,"on-row-click":e.onRowClick,"on-row-dblclick":e.onRowDblclick,"on-expand":e.onExpand}},[e._t("header",null,{slot:"header"}),e._t("footer",null,{slot:"footer"}),e._t("loading",null,{slot:"loading"})],2),e.searchable&&"bottom"===e.searchPlace?a("div",{staticClass:"search-con search-con-top"},[a("Select",{staticClass:"search-col",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l(e.columns,function(t){return"handle"!==t.key?a("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v(e._s(t.title))]):e._e()})),a("Input",{staticClass:"search-input",attrs:{placeholder:"输入关键字搜索"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),a("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[a("Icon",{attrs:{type:"search"}}),e._v("  搜索")],1)],1):e._e(),a("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)},n=[],l=(a("ac6a"),a("f751"),a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tables-edit-outer"},[e.isEditting?a("div",{staticClass:"tables-editting-con"},[a("Input",{staticClass:"tables-edit-input",attrs:{value:e.value},on:{input:e.handleInput}}),a("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.saveEdit}},[a("Icon",{attrs:{type:"md-checkmark"}})],1),a("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:e.canceltEdit}},[a("Icon",{attrs:{type:"md-close"}})],1)],1):a("div",{staticClass:"tables-edit-con"},[a("span",{staticClass:"value-con"},[e._v(e._s(e.value))]),e.editable?a("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:e.startEdit}},[a("Icon",{attrs:{type:"md-create"}})],1):e._e()],1)])}),i=[],s={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(e){this.$emit("input",e)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},r=s,c=(a("4974"),a("2877")),d=Object(c["a"])(r,l,i,!1,null,null,null);d.options.__file="edit.vue";var u=d.exports,h={delete:function(e,t,a){return e("Poptip",{props:{confirm:!0,title:"你确定要删除吗?"},on:{"on-ok":function(){console.warn(t),a.$emit("on-delete",t)}}},[e("Button",{props:{type:"text",ghost:!0}},[e("Icon",{props:{type:"md-trash",size:18,color:"#000000"}})])])}},p=h,f=(a("30d9"),{name:"Tables",props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"}},data:function(){return{insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:"",searchValue:"",searchKey:""}},methods:{suportEdit:function(e,t){var a=this;return e.render=function(e,t){return e(u,{props:{params:t,value:a.insideTableData[t.index][t.column.key],edittingCellId:a.edittingCellId,editable:a.editable},on:{input:function(e){a.edittingText=e},"on-start-edit":function(e){a.edittingCellId="editting-".concat(e.index,"-").concat(e.column.key),a.$emit("on-start-edit",e)},"on-cancel-edit":function(e){a.edittingCellId="",a.$emit("on-cancel-edit",e)},"on-save-edit":function(e){a.value[e.row.initRowIndex][e.column.key]=a.edittingText,a.$emit("input",a.value),a.$emit("on-save-edit",Object.assign(e,{value:a.edittingText})),a.edittingCellId=""}}})},e},surportHandle:function(e){var t=this,a=e.options||[],o=[];a.forEach(function(e){p[e]&&o.push(p[e])});var n=e.button?[].concat(o,e.button):o;return e.render=function(e,a){return a.tableData=t.value,e("div",n.map(function(o){return o(e,a,t)}))},e},handleColumns:function(e){var t=this;this.insideColumns=e.map(function(e,a){var o=e;return o.editable&&(o=t.suportEdit(o,a)),"handle"===o.key&&(o=t.surportHandle(o)),o})},setDefaultSearchKey:function(){this.searchKey="expand"!==this.columns[0].key?this.columns[0].key:this.columns.length>1?this.columns[1].key:""},handleClear:function(e){""===e.target.value&&(this.insideTableData=this.value)},handleSearch:function(){var e=this;this.insideTableData=this.value.filter(function(t){return t[e.searchKey].indexOf(e.searchValue)>-1})},handleTableData:function(){this.insideTableData=this.value.map(function(e,t){var a=e;return a.initRowIndex=t,a})},exportCsv:function(e){this.$refs.tablesMain.exportCsv(e)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(e,t){this.$emit("on-current-change",e,t)},onSelect:function(e,t){this.$emit("on-select",e,t)},onSelectCancel:function(e,t){this.$emit("on-select-cancel",e,t)},onSelectAll:function(e){this.$emit("on-select-all",e)},onSelectionChange:function(e){this.$emit("on-selection-change",e)},onSortChange:function(e,t,a){this.$emit("on-sort-change",e,t,a)},onFilterChange:function(e){this.$emit("on-filter-change",e)},onRowClick:function(e,t){this.$emit("on-row-click",e,t)},onRowDblclick:function(e,t){this.$emit("on-row-dblclick",e,t)},onExpand:function(e,t){this.$emit("on-expand",e,t)},addModalShow:function(){this.$emit("addModalShow",!0)}},watch:{columns:function(e){this.handleColumns(e),this.setDefaultSearchKey()},value:function(e){this.handleTableData(),this.handleSearch()}},mounted:function(){this.handleColumns(this.columns),this.setDefaultSearchKey(),this.handleTableData()}}),m=f,g=Object(c["a"])(m,o,n,!1,null,null,null);g.options.__file="tables.vue";var b=g.exports;t["a"]=b}}]);