<template>
  <Form >
    <Row  type="flex"  justify="space-around">
      <Col span="3">
        <FormItem label="选择楼栋" prop="building">
            <Select @on-change="onSelectedChange">
              <Option v-bind:value="'buildingId-'+item.id+'-'+item.buildingCode" v-for="(item, index) in buildList" :key="index">{{ item.buildingCode }}</Option>
            </Select>
        </FormItem>
      </Col>
      <Col span="4">
         <FormItem label="选择旁站类型" prop="currentIndex">
            <Select  @on-change="onSelectedChange">
              <Option value="type-0001-机械灌注桩" label="机械灌注桩"></Option>
              <Option value="type-0002-水泥搅拌桩" label="水泥搅拌桩"></Option>
              <Option value="type-0003-预应力搅拌桩" label="预应力搅拌桩"></Option>
            </Select>
        </FormItem>
      </Col>
      <Col span="4">
         <FormItem label="选择模板" prop="currentIndex">
            <Select  @on-change="onSelectedChange">
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
        <FormItem label="              ">
          <Button type="primary" @click="handleSubmit()">保存</Button>
        </FormItem>
        
      </Col>
    </Row>
    <div class="" style="min-height: 300px; padding: 10px 20px;">
    	<div class="" v-if="labelObj.buildingId && labelObj.type">
    	  <h3 class="">{{labelObj.buildingId }}号楼，{{labelObj.type }}模板使用情况</h3>
    	  <div class="between"  style="padding-right: 20px; margin-top: 10px;">
    	  	<span v-for="item in pangzhanTmplMapList"  style="padding-right: 30px; padding-top: 16px;">
            <span>{{item.pileCode}}号桩</span> : <span>{{item.templateName}}</span>
          </span>
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
import pangzhanTmplApi from "@/api/pangzhan-tmpl-api";
import jxgzTmplApi from '@/api/jxgz-tmpl-api'
import snjbTmplApi from '@/api/snjb-tmpl-api'

export default {
  data() {
    return {
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
  methods: { 
    onSelectedChange: function(keyValueStr){
      let keyValueArray = keyValueStr.split('-');
      this.bodyObj[keyValueArray[0]] = keyValueArray[1];
      this.labelObj[keyValueArray[0]] = keyValueArray[2];
      console.log(keyValueArray)
      console.log(this.bodyObj)
      if(keyValueArray[0] == 'type'){
        this.getTmplListByTmplType()
      }
      if(keyValueArray[0] == 'buildingId' || keyValueArray[0] == 'type'){
        this.getPangzhanTmplInfo();
      }
      
    },
    getPangzhanTmplInfo: function(){
      let temp = {
        projectId: this.obj.id,
        buildingId: this.bodyObj.buildingId,
        type: this.bodyObj.type,
//      pageIndex: 1,
//      pageSize: 100,
      }
      if(!(temp.projectId && temp.buildingId && temp.type)){ return; }
      
      pangzhanTmplApi.getPangzhanTmplInfo(temp)
      .then(data => {
        console.log(data)
        this.pangzhanTmplMapList = data.list;
      })
    },
    getTmplListByTmplType: function(){
      if(this.bodyObj.type == "0001"){
        jxgzTmplApi.getJxgzTmplList({pageIndex: 1, pageSize: 100}, (data) => {
          console.log(data)
          this.tmplList = data.result.list
        })
      }else if(this.bodyObj.type == "0002"){
        snjbTmplApi.getTmplList({pageIndex: 1, pageSize: 100})
        .then( data => {
          console.log(data)
          this.tmplList = data.list//接口不统一
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
    getList(role) {
      
    }
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