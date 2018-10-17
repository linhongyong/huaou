<template>
  <div>
    <Row>
      <Col span="12">
        <Tree :data="menutree" show-checkbox @on-check-change="updateSelectedMenu"></Tree>
      </Col>
    </Row>
    <div id="">
    	 <Button type="primary" @click="handleSubmit()">保存</Button>
      <Button style="margin-left: 8px"  @click="handleReset()">取消</Button>

    </div>
     
  </div>
  
</template>
<script>
import roleApi from '@/api/role-api'
import menuApi from "@/api/menu-api";
export default {
  data () {
    
    return {
      menutree: [],
      selectedMenuIds: [],
      
    }
  },
  props: {
    obj: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    obj(val) {
      this.getMenus();
    },
  },
  methods: {
    updateSelectedMenu:function (nodes) {
    	this.selectedMenuIds = nodes.map(function(node){
    	  return node.id
    	});
      console.log(this.selectedMenuIds)
    },
    getMenus() {
      menuApi.getMenus(null
        ,
        data => {
          console.log(data);
          this.menuList = data.result.list;
          this.machiningMenus(data.result.list)
        }
      );
    },
    machiningMenus: function(menuList){
      var result = [];
      let ownerMenus = this.obj.ownerMenus;
      (function traverse(node, result) {//???
        node.forEach(i => {
          let count = 0
          for(let j=0; j<ownerMenus.length; j++){
            if(ownerMenus[j].id == i.id){
              break
            }
            count++
          }
          let n = {
            title: i.menuName,
            id: i.id,
            checked: count == ownerMenus.length ? false : true
          }
          if(i.childMenus){
            n.children = []
            traverse(i.childMenus, n.children)
          }
          
          result.push(n);
        })
      })(menuList, result);
      console.log(result)
      this.menutree = result;
    },
    handleSubmit (obj) {
      let that = this
      roleApi.setRoleMenu({roleId: this.obj.id, menuIds: this.selectedMenuIds}).then( data => {
        console.log(data);
        this.$Message.success("操作成功");
        this.$emit('modalAction', {type:"close", name:"isRoleMenuSetShow"})
      })

    },
    handleReset (obj) {
     this.$emit('modalAction', {type:"close", name:"isRoleMenuSetShow"})
    },
    
  },
  created:function(){
    
  },
  mounted () {
    
  }
}
</script>
