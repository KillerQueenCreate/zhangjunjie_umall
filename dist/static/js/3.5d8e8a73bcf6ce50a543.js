webpackJsonp([3],{MWAP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),i=o.n(n),l=o("NYxO"),a=o("wliq"),r=o("vLgD"),s={grops:[],components:{},data:function(){return{}},computed:i()({},Object(l.c)({list:"menu/list"})),methods:i()({},Object(l.b)({reqListAction:"menu/reqListAction"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.t)(t).then(function(t){200==t.data.code?(Object(a.a)(t.data.msg),e.reqListAction()):Object(a.b)(t.data.msg)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},dele:function(t){var e=this;Object(r.t)(t).then(function(t){200==t.data.code?(Object(a.a)(t.data.msg),e.reqListAction()):Object(a.b)(t.data.msg)})}}),mounted:function(){this.reqListAction()}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","tree-props":{children:"children"}}},[o("el-table-column",{attrs:{prop:"id",label:"菜单编号",sortable:"",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"title",label:"菜单名称",sortable:"",width:"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"address",label:"菜单图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("i",{class:t.row.icon})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"url",label:"地址"}}),t._v(" "),o("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?o("el-button",{attrs:{type:"primary"}},[t._v("启用")]):o("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"status",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary"},on:{click:function(o){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),o("del-btn",{on:{confirm:function(o){return t.dele(e.row.id)}}})]}}])})],1)},staticRenderFns:[]};var d=o("VU/8")(s,c,!1,function(t){o("THXt")},"data-v-7158d124",null).exports,u=o("YaEn"),f={props:["info"],components:{},data:function(){return{icons:["el-icon-platform-eleme","el-icon-star-off","el-icon-goods","el-icon-help","el-icon-setting"],indexRoutes:u.b,form:{pid:0,title:"",icon:"",type:1,url:"",status:1}}},computed:i()({},Object(l.c)({list:"menu/list"})),methods:i()({},Object(l.b)({reqListAction:"menu/reqListAction"}),{cancel:function(){this.info.isshow=!1},empty:function(){this.form={pid:0,title:"",icon:"",type:1,url:"",status:1}},close:function(){this.info.isAdd&&this.empty()},changePid:function(){0==this.form.pid?this.form.type=1:this.form.type=2},add:function(){var t=this;Object(r.s)(this.form).then(function(e){200==e.data.code?(Object(a.a)(e.data.msg),t.empty(),t.cancel(),t.reqListAction()):Object(a.b)(e.data.msg)})},look:function(t){var e=this;Object(r.u)(t).then(function(o){200==o.data.code?(e.form=o.data.list,e.form.id=t):Object(a.b)(o.data.msg)})},update:function(){var t=this;Object(r.w)(this.form).then(function(e){200==e.data.code?(Object(a.a)(e.data.msg),t.empty(),t.cancel(),t.reqListAction()):Object(a.b)(e.data.msg)})}}),mounted:function(){}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",{attrs:{title:t.info.isAdd?"添加菜单":"编辑菜单",visible:t.info.isshow},on:{"update:visible":function(e){return t.$set(t.info,"isshow",e)},closed:t.close}},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"菜单名称"}},[o("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"上级菜单"}},[o("el-select",{attrs:{placeholder:"请选择上级菜单"},on:{change:t.changePid},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[o("el-option",{attrs:{label:"顶级菜单",value:0}}),t._v(" "),t._l(t.list,function(t){return o("el-option",{key:t.id,attrs:{value:t.id,label:t.title}})})],2)],1),t._v(" "),o("el-form-item",{attrs:{label:"菜单类型"}},[o("el-radio",{attrs:{label:1,disabled:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("目录")]),t._v(" "),o("el-radio",{attrs:{label:2,disabled:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("菜单")])],1),t._v(" "),1==t.form.type?o("el-form-item",{attrs:{label:"菜单图标"}},[o("el-select",{attrs:{placeholder:"请选择上级菜单"},model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}},t._l(t.icons,function(t){return o("el-option",{key:t,attrs:{value:t}},[o("i",{class:t})])}),1)],1):o("el-form-item",{attrs:{label:"菜单地址"}},[o("el-select",{attrs:{placeholder:"请选择上级菜单"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}},t._l(t.indexRoutes,function(t){return o("el-option",{key:t.path,attrs:{label:t.name,value:"/"+t.path}})}),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"状态"}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?o("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]):o("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},staticRenderFns:[]};var p={grops:[],components:{vList:d,vAdd:o("VU/8")(f,m,!1,function(t){o("OV17")},"data-v-48261147",null).exports},data:function(){return{info:{isshow:!1,isAdd:!0}}},computed:i()({},Object(l.c)({})),methods:i()({},Object(l.b)({}),{willAdd:function(){this.info.isshow=!0,this.info.isAdd=!0},edit:function(t){this.info.isshow=!0,this.info.isAdd=!1,this.$refs.add.look(t)}}),mounted:function(){}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.willAdd()}}},[t._v("添加")]),t._v(" "),o("v-list",{on:{edit:t.edit}}),t._v(" "),o("v-add",{ref:"add",attrs:{info:t.info}})],1)},staticRenderFns:[]};var v=o("VU/8")(p,b,!1,function(t){o("rwiQ")},"data-v-297f40fe",null);e.default=v.exports},OV17:function(t,e){},THXt:function(t,e){},rwiQ:function(t,e){}});
//# sourceMappingURL=3.5d8e8a73bcf6ce50a543.js.map