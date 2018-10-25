<template>
  <div style="min-height: 500px;">
    <Row>
      <Col span="12">
        <Tree :data="menutree" show-checkbox @on-check-change="updateSelectedMenu"></Tree>
      </Col>
    </Row>
    <div id="" style="text-align: right; position: absolute; bottom: 20px; right: 20px;">
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
      parentIdMaps: [],//[parentId, id]组成的数组
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
      menuApi.getMenus(null,
        data => {
          console.log(data);
          this.menuList = data.result.list;
          this.machiningMenus(data.result.list)
					this.getparentIdMaps(data.result.list);
					
        }
      );
    },
    machiningMenus: function(menuList){
      var result = [];
      let ownerMenus = this.obj.ownerMenus;
      (function traverse(node, result) {//???
        node.forEach((i, index) => {
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
						expand: true,
          }
          if(i.childMenus.length){
            n.children = []
            traverse(i.childMenus, n.children)
          }else{
						n.checked = count == ownerMenus.length ? false : true
					}
          result.push(n);
        })
      })(menuList, result);
      console.log(result)
      this.menutree = result;
    },
		getParents(idMaps, id){
			let parentIds = [];
			(function traverse(id) {//
				idMaps.forEach((idMap, index) => {
					if(idMap[1] == id){
						// console.log(idMap[0]);
						parentIds.push(idMap[0]);
						traverse(idMap[0])
					}
				})
			})(id);
			return parentIds
		},
		getparentIdMaps(menuList){
			let idmap = [];
			(function traverse(nodes, parentId) {//???
				nodes.forEach((node, index) => {
					idmap.push([parentId, node.id]);
					if(node.childMenus){
						traverse(node.childMenus, node.id)
					}
				})
			})(menuList, 0);
			this.parentIdMaps = idmap
			console.log(this.parentIdMaps);
		},
    handleSubmit (obj) {
      let that = this
			let ids = [];
			console.log(this.selectedMenuIds);
			for(let i=0; i< this.selectedMenuIds.length; i++){
				let temp = this.getParents(this.parentIdMaps, this.selectedMenuIds[i]);
				console.log(temp);
				ids = ids.concat(temp)
			}
			ids = ids.concat(this.selectedMenuIds)
			let menuIds = Array.from(new Set(ids));
			console.log(menuIds)
      roleApi.setRoleMenu({roleId: this.obj.id, menuIds}).then( data => {
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
