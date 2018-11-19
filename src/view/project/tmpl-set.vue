<template>
  <Form >
    <Row  type="flex"  justify="space-around">
      <Col span="4">
        <FormItem label="选择楼栋" prop="building">
            <Select @on-change="onSelectedChange"  v-model="buildValue">
              <Option v-bind:value="'buildingId-'+item.id+'-'+item.buildingCode" v-for="(item, index) in buildList" :key="index" >{{ item.buildingName+' ( 共'+item.pileNum+'根桩)' }}</Option>
            </Select>
        </FormItem>
      </Col>
      <Col span="4">
         <FormItem label="选择旁站类型" prop="currentIndex">
            <Select  @on-change="onSelectedChange" v-model="typeValue">
              <Option value="type-0001-机械灌注桩" >机械灌注桩</Option>
              <Option value="type-0002-水泥搅拌桩" >水泥搅拌桩</Option>
              <Option value="type-0003-预应力搅拌桩" >预应力搅拌桩</Option>
            </Select>
        </FormItem>
      </Col>
      <Col span="4">
         <FormItem label="选择模板" prop="currentIndex">
            <Select  @on-change="onSelectedChange"  v-model="templateValue">
              <Option v-bind:value="'templateId-'+item.id+'-'+item.templateName" v-for="(item, index) in tmplList" :key="index">{{ item.templateName }}</Option>
            </Select>
        </FormItem>
      </Col>
      <Col span="6">
        <FormItem label="模板范围 如：1-100，102,103">
          <Input   v-model="bodyObj.pileRange"></Input>
        </FormItem>
      </Col>
      <Col>
        <FormItem label=" ">
          <Button type="primary" @click="handleSubmit()">保存</Button>
        </FormItem>
        
      </Col>
    </Row>
    <div class="" style="min-height: 300px; padding: 10px 20px;">
    	<div class="" v-if="labelObj.buildingId && labelObj.type">
    	  <h3 class="">{{labelObj.buildingId }}号楼，{{labelObj.type }}模板使用情况</h3>
				<div class="" v-for="item in tmplList" :key="item.id" style="padding: 20px 20px 10px;overflow: hidden;">
					<div style="margin-right: 20px; width: 160px;text-align: right; float: left;margin-top: 5px;"><Tag color="success">{{item.templateName}} 模板:</Tag></div>
					<div v-if="item.pileList.length > 0" style="margin-right: 20px; float: left;margin-top: 5px;" v-for="(itemm, index) in item.pileList" :key="index">
						<span style="padding-right: 5px;">{{itemm.length>1 ? itemm[0]+' 号桩 — '+itemm[itemm.length-1]+'号桩' : itemm[0]+'号桩'}}</span>
					</div>
					<div v-if="item.pileList.length == 0" style="margin-right: 20px; float: left;margin-top: 5px;">暂无</div>
				</div>
    		
    	</div>
    </div>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleReset()">确定</Button>
      <Button style="margin-left: 8px"  @click="handleReset()">取消</Button>
    </FormItem>
  </Form>
  
</template>
<script>
import tools from "_u/tools.js";
import { getStrArrayFromBigArray } from "@/libs/mytools";
import pangzhanTmplApi from "@/api/pangzhan-tmpl-api";
import jxgzTmplApi from '@/api/jxgz-tmpl-api'
import snjbTmplApi from '@/api/snjb-tmpl-api'
export default {
  data() {
    return {
			typeValue:null,//用于清空所选旁站类型
			templateValue: null,//用于清空所选模板
			buildValue: null,
      tmplList:[],
      userList: [],
      pangzhanTmplMapList:[],
      currentIndex: -1,
      searchKey: "",
      bodyObj:{
        pileRange: null
      },
      labelObj:{}
    };
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {}
      }
    },
    buildList:{
      type:Array,
      default () {
        return []
      }
    }
  },
	watch: {
		obj: function (val) {
      this.typeValue =null
			this.buildValue = null
      this.templateValue =null
      this.tmplList = []
    },
	},
  methods: { 
    onSelectedChange: function(keyValueStr){
			if(!keyValueStr) return;
      let keyValueArray = keyValueStr.split('-');
      this.bodyObj[keyValueArray[0]] = keyValueArray[1];
      this.labelObj[keyValueArray[0]] = keyValueArray[2];
      console.log(keyValueArray)
      console.log(this.bodyObj)
      if(keyValueArray[0] == 'type'){
        this.getTemplList ()
      }
			if(keyValueArray[0] == 'buildingId'){
				this.typeValue =null
				this.templateValue =null
				this.tmplList = []
			}
      
    },
    getPangzhanTmplInfo: function(){
      let temp = {
        projectId: this.obj.id,
        buildingId: this.bodyObj.buildingId,
        type: this.bodyObj.type,
        pageIndex: 0,
        pageSize: 10000,
      }
      if(!(temp.projectId && temp.buildingId && temp.type)){ return; }
      
      pangzhanTmplApi.getPangzhanTmplInfo(temp)
      .then(data => {
        console.log(data)
				this.pangzhanTmplMapList = data.list;
				let tmplList = this.tmplList;
				let pzTmplMaps = data.list;
				for(let i=0, len1 = tmplList.length; i< len1; i++){
					tmplList[i].pileList = []
					for(let j=0, len2=pzTmplMaps.length; j<len2; j++){
						if(tmplList[i].id == pzTmplMaps[j].templateId){
								tmplList[i].pileList.push(pzTmplMaps[j].pileCode)
						}
					}
					this.$set(this.tmplList[i],'pileList',getStrArrayFromBigArray(tmplList[i].pileList))
					// tmplList[i].pileList = getStrArrayFromBigArray(tmplList[i].pileList);
					console.log(this.tmplList[i].pileList);
				}
				console.log(this.tmplList)
      })
    },
    getTemplList  : function(){
      if(this.bodyObj.type == "0001"){
				let data = {
					pageIndex: 0, 
					pageSize: 100,
					data: this.obj.id
				}
				jxgzTmplApi.getJxgzTmplListByProjectId(data)
				.then( data =>{
					console.log(data);
					for(let i=0; i<data.list.length; i++){
						data.list[i].pileList = [];
					}
					this.tmplList = data.list
					this.getPangzhanTmplInfo();
				})
      }else if(this.bodyObj.type == "0002"){
        snjbTmplApi.getTmplList({pageIndex: 1, pageSize: 100})
        .then( data => {
          console.log(data)
					for(let i=0; i<data.list.length; i++){
						data.list[i].pileList = [];
					}
					this.tmplList = data.list//接口不统
					this.getPangzhanTmplInfo();
        })
      }else if(this.bodyObj.type == "0003"){
        this.tmplList = [];
      }
      
    },
    handleSubmit() {
      this.bodyObj.projectId = this.obj.id;
      if(!(this.bodyObj.buildingId && this.bodyObj.pileRange && this.bodyObj.type && this.bodyObj.templateId && this.bodyObj.projectId) ){
        this.$Message.error("请填写完整信息");
        return;
      }
      pangzhanTmplApi.setTmplusedRange(this.bodyObj)
      .then(data => {
        console.log(data);
        this.$Message.success("操作成功");
        this.getPangzhanTmplInfo();
        this.bodyObj.pileRange = null;
      })
      .catch(err =>{
        console.log(err)
        this.$Message.error(err.message);
      })

    },
    handleReset(obj) {
      this.bodyObj.pileRange = null;
      this.$emit('modalAction', {type:"close", name:"isPangzhanTmplSetShow"})
    },
  
  },
  mounted() {
  }
};
</script>
<style>
.user-item {
  padding: 5px 10px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.user-item:hover {
  background-color: #efefef;
}
.display-flex-center-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.display-flex-center-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.border {
  /*border:1px solid #ccc;*/
  margin: -10px 0 0px;
}
.menber-row {
  padding: 10px 20px;
}
</style>