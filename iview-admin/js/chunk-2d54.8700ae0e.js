(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d54"],{"0532":function(e,t,n){"use strict";var a=n("b5ab"),o=n.n(a);o.a},"779d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("Card",[n("Row",{attrs:{type:"flex",justify:"space-between"}},[n("Col",{attrs:{span:"6"}},[n("div",{staticClass:"el-tree"},[n("div",{staticStyle:{"margin-bottom":"35px"}},[n("Button",{attrs:{type:"primary",icon:"md-add",size:"small"},on:{click:function(t){e.addMenu()}}},[e._v("添加")]),n("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"error",icon:"md-trash",size:"small",disabled:!e.isAccessForButton("0020")},on:{click:function(t){e.deleteMenu()}}},[e._v("删除")])],1),n("Tree",{attrs:{data:e.menutree},on:{"on-select-change":e.getRoleDetail}})],1)]),n("Col",{attrs:{span:"17"}},[n("Card",[n("div",{staticStyle:{padding:"20px 20px 80px"}},[e.menutree.length?n("span",[e._v("父级：")]):e._e(),e.menutree.length?n("Dropdown",{on:{"on-click":e.onSelectParent}},[n("a",{staticClass:"dropdown display-flex-center-between",attrs:{href:"javascript:void(0)"}},[e._v("\n                    "+e._s(e.obj.parentName?e.obj.parentName:"请选择父级")+"\n                    "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(e.menutree,function(t){return n("div",{key:t.id},[t.children.length?n("Dropdown",{attrs:{placement:"right-start"}},[n("DropdownItem",{attrs:{name:t.id+"-"+t.menuName}},[e._v("\n                        "+e._s(t.title)+"\n                        "),n("Icon",{attrs:{type:"ios-arrow-forward"}})],1),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(t.children,function(t){return n("div",{key:t.id},[t.children.length?n("Dropdown",{attrs:{placement:"right-start"}},[n("DropdownItem",{attrs:{name:t.id+"-"+t.menuName}},[e._v("\n                              "+e._s(t.title)+"\n                              "),n("Icon",{attrs:{type:"ios-arrow-forward"}})],1),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(t.children,function(t){return n("DropdownItem",{key:t.id+"-"+t.menuName,attrs:{name:t.id+"-"+t.menuName}},[e._v(e._s(t.title))])}))],1):n("DropdownItem",{attrs:{name:t.id+"-"+t.menuName}},[e._v(e._s(t.title))])],1)}))],1):n("DropdownItem",{staticStyle:{padding:"5px 20px"},attrs:{name:t.id+"-"+t.menuName}},[e._v(e._s(t.title))])],1)}))],1):e._e(),n("div",{staticStyle:{"margin-top":"40px"}},[e._v("\n                             名称：\n                "),n("Input",{staticStyle:{width:"80%"},attrs:{placeholder:""},model:{value:e.obj.menuName,callback:function(t){e.$set(e.obj,"menuName",t)},expression:"obj.menuName"}})],1),n("div",{staticStyle:{"margin-top":"40px"}},[e._v("\n                              代码：\n                "),n("Input",{staticStyle:{width:"80%"},attrs:{placeholder:""},model:{value:e.obj.url,callback:function(t){e.$set(e.obj,"url",t)},expression:"obj.url"}})],1),n("div",{staticStyle:{"margin-top":"40px"}},[e._v("\n                            类型：\n              \t"),n("RadioGroup",{model:{value:e.obj.type,callback:function(t){e.$set(e.obj,"type",t)},expression:"obj.type"}},[n("Radio",{attrs:{label:"0"}},[n("span",[e._v("菜单")])]),n("Radio",{attrs:{label:"1"}},[n("span",[e._v("按钮")])])],1)],1),n("div",{staticClass:"display-flex-center",staticStyle:{"margin-top":"40px"}},[e._v("\n                              序号：\n                 "),n("div",{staticStyle:{width:"80%","padding-left":"10px"}},[n("Slider",{model:{value:e.obj.orderNum,callback:function(t){e.$set(e.obj,"orderNum",t)},expression:"obj.orderNum"}})],1)]),n("div",{staticStyle:{"margin-top":"40px"}},[e._v("\n                              备注：\n                "),n("Input",{staticStyle:{width:"80%"},attrs:{placeholder:""},model:{value:e.obj.perms,callback:function(t){e.$set(e.obj,"perms",t)},expression:"obj.perms"}})],1)],1),n("div",{staticStyle:{"text-align":"right",padding:"30px 10px 10px"}},[n("Button",{attrs:{type:"primary",disabled:!e.isAccessForButton("0019")},on:{click:function(t){e.handleSubmit()}}},[e._v("保存")])],1)])],1)],1)],1)],1)},o=[],s=(n("ac6a"),n("28a5"),n("9e77")),i=function(){return{icon:"+",parentId:null,parentName:null,type:"0"}},r={data:function(){return{menutree:[],obj:i()}},methods:{getCheckedBoxs:function(e){console.log(e),this.checkedBoxs=e},addMenu:function(){this.obj=i()},deleteMenu:function(){var e=this,t=this.obj.id;s["a"].deleteById({id:t}).then(function(){e.$Message.success("操作成功"),e.obj=i(),e.getMenus()})},onSelectParent:function(e){console.log(e),this.obj.parentId=e.split("-")[0],this.obj.parentName=e.split("-")[1]},handleSubmit:function(){var e=this;console.log(this.obj),this.obj.menuName&&this.obj.perms&&this.obj.url?this.obj.id?s["a"].updateMenu(this.obj).then(function(t){console.log(t),e.$Message.success("操作成功"),e.getMenus(),e.obj=i()}).catch(function(t){console.log(t.message),e.$Message.error(t.message)}):s["a"].addMenu(this.obj).then(function(t){console.log(t),e.$Message.success("操作成功"),e.getMenus(),e.obj=i()}).catch(function(t){console.log(t.message),e.$Message.error(t.message)}):this.$Message.error("缺少参数")},getRoleDetail:function(e){console.log(e),e&&e.length&&(this.obj.id=e[0].id,this.obj.parentId=e[0].parentId,this.obj.menuName=e[0].menuName,this.obj.url=e[0].url,this.obj.type=e[0].type,this.obj.perms=e[0].perms)},getMenus:function(){var e=this;s["a"].getMenus(null,function(t){console.log(t),e.menuList=t.result.list,e.machiningMenus(t.result.list)})},machiningMenus:function(e){var t=[];(function e(t,n){t.forEach(function(t){var a=t;1==t.type?a.title="".concat(t.menuName,"(").concat(t.url,")"):a.title=t.menuName,a.expand=!0,t.childMenus&&(a.children=[],e(t.childMenus,a.children)),n.push(a)})})(e,t),this.menutree=t}},mounted:function(){this.getMenus()}},u=r,l=(n("0532"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,null,null);d.options.__file="menu.vue";t["default"]=d.exports},"9e77":function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var a=n("66df"),o=n("a93f"),s=new Object;s.addMenu=function(e){return new Promise(function(t,n){a["a"].request({url:"/menu/add",method:"post",data:e}).then(function(e){"Success"==e.data.code?t(e.data):n(e.data)})})},s.deleteMenu=function(e,t,n){a["a"].request({url:"/menu/delete?id=".concat(e.id),method:"post"}).then(function(e){console.log(e),"Success"!=e.data.code?n(e.data):t(e.data)})},s.updateMenu=function(e,t,n){a["a"].request({url:"/menu/update",method:"post",data:e}).then(function(e){console.log(e),"Success"!=e.data.code?n(e.data):t(e.data)})},s.getMenus=function(e,t,n){a["a"].request({url:"/menu/list",method:"get"}).then(function(e){"Success"!=e.data.code?n(e.data):t(e.data)})},s.addMenu=function(e){return o["a"].post({url:"/menu/add",data:e})},s.updateMenu=function(e){return o["a"].post({url:"/menu/update",data:e})},s.getMenuList=function(e){return o["a"].post({url:"/menu/list",data:e})},s.getMenusByRoleId=function(e){return o["a"].get({url:"/roleMenu/getMenusByRoleId",data:e})},s.getMenusByParentId=function(e){return o["a"].get({url:"/menu/getMenusByParentId",data:e})},s.getMenuTreeByUserId=function(e){return o["a"].get({url:"/menuTree/getByUserId",data:e,defaultValue:"menuList"})},s.deleteById=function(e){return o["a"].post({url:"/menu/delete?id=".concat(e.id),data:e})},s.getMenusLevel1=function(e,t,n){a["a"].request({url:"/menu/getMenusByParentId?parentId=0",method:"get"}).then(function(e){"Success"!=e.data.code?n(e.data):t(e.data)})},t["a"]=s},b5ab:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2d54.8700ae0e.js.map