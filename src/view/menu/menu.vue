  <template>
    <div class="">
    	<Card>
        <Row  type="flex"  justify="space-between">
          <Col span="6">
            <div class="el-tree" style="">
							<div style="margin-bottom: 35px;">
								<Button type="primary" icon="md-add" size="small"  @click="addMenu()">添加</Button>
								<Button type="error" icon="md-trash" size="small"  @click="deleteMenu()" style="margin-left: 10px;" :disabled="!isAccessForButton('0020')">删除</Button>
							</div>
            	<Tree :data="menutree"  @on-select-change="getRoleDetail"></Tree>
            </div>
            
            
          </Col>
          <Col span="17">
            <Card>
            <div class="" style="padding: 20px 20px 80px;">
              <span  v-if="menutree.length">父级：</span>
             	<Dropdown   @on-click="onSelectParent"  v-if="menutree.length">
                <a class="dropdown display-flex-center-between" href="javascript:void(0)">
                    {{obj.parentName ? obj.parentName : '请选择父级'}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu  slot="list">
                  <div  v-for="item in menutree" v-bind:key = "item.id">
                  	<DropdownItem v-if="!item.children.length" :name="item.id+'-'+item.menuName"  style="padding: 5px 20px">{{ item.title }}</DropdownItem>
                    <Dropdown placement="right-start"   v-else>
                      <DropdownItem :name="item.id+'-'+item.menuName">
                        {{ item.title }}
                        <Icon type="ios-arrow-forward"></Icon>
                      </DropdownItem>
                      <DropdownMenu slot="list">
                        <div  v-for="item2 in item.children"  v-bind:key = "item2.id">
                        	<DropdownItem v-if="!item2.children.length" :name="item2.id+'-'+item2.menuName">{{ item2.title }}</DropdownItem>
                        	<Dropdown  placement="right-start"    v-else>
                        	  <DropdownItem :name="item2.id+'-'+item2.menuName">
                              {{ item2.title }}
                              <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                        	  <DropdownMenu slot="list">
                        	    <DropdownItem v-for="item3 in item2.children"  v-bind:key ="item3.id+'-'+item3.menuName" :name="item3.id+'-'+item3.menuName">{{ item3.title }}</DropdownItem>
                              <!--<div  v-for="item2 in item.children">
                                <DropdownItem v-if="!item2.children.length">{{ item2.title }}</DropdownItem>
                                <Dropdown v-else>
                                  <DropdownItem>
                                    {{ item2.title }}
                                    <Icon type="ios-arrow-forward"></Icon>
                                  </DropdownItem>
                                </Dropdown>
                              </div>-->
                            </DropdownMenu>
                        	</Dropdown>
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </DropdownMenu>
              </Dropdown>
              <!--: 请选择父级id: {{ obj.parentId }}-->
              <div class="" style="margin-top: 40px;">
                             名称：
                <Input placeholder="" style="width: 80%" v-model="obj.menuName"/>
              </div>
              <div class="" style="margin-top: 40px;">
                              代码：
                <Input placeholder="" style="width: 80%"  v-model="obj.url"/>
              </div>
              <div class="" style="margin-top: 40px;">
                            类型：
              	<RadioGroup v-model="obj.type" >
                  <Radio label="0">
                      <span>菜单</span>
                  </Radio>
                  <Radio label="1">
                      <span>按钮</span>
                  </Radio>
                </RadioGroup>
              </div>
              <div class="display-flex-center" style="margin-top: 40px;">
                              序号：
                 <div class="" style="width: 80%; padding-left: 10px;">
                 	<Slider v-model="obj.orderNum" ></Slider>
                 </div>
                              
               
              </div>
              <div class="" style="margin-top: 40px;">
                              备注：
                <Input placeholder="" style="width: 80%"  v-model="obj.perms"/>
              </div>
             </div>
						 <div style="text-align: right;padding: 30px 10px 10px;">
						 	<Button type="primary" @click="handleSubmit()" :disabled="!isAccessForButton('0019')">保存</Button>
						 </div>
            </Card>
          </Col>
          
         </Row>
				 
         
      </Card>
    </div>
</template>

<script>
  import menuApi from "@/api/menu-api";
	const initObj = () => ({
	  icon:"+",
	  parentId:null,
	  parentName: null,
		type:0+""
	});
  export default {
    data () {
      return {
        menutree: [],
        obj: initObj()
      }
    },
    methods:{
			getCheckedBoxs: function (nodes) {//多选框
				console.log(nodes);
				this.checkedBoxs = nodes;
			},
			addMenu: function(){
				this.obj = {
          icon:"+",
          parentId:null
        }
			},
			deleteMenu: function () {
				let id = this.obj.id
				menuApi.deleteById({id})
				.then(() => {
					this.$Message.success("操作成功");
					this.obj = initObj();
					this.getMenus()
				})
			},
      onSelectParent: function (idName) {
      	console.log(idName);
      	this.obj.parentId = idName.split("-")[0]
				this.obj.parentName =  idName.split("-")[1]
				
      },
      handleSubmit: function(){
        console.log(this.obj);
				if(!this.obj.menuName || !this.obj.perms || !this.obj.url){
					this.$Message.error("缺少参数");return;
				}
				if(this.obj.id){
					menuApi.updateMenu(this.obj).then( data => {
						console.log(data);
						this.$Message.success("操作成功");
						this.getMenus();
						this.obj = initObj();
					})
					.catch((err) => {
						console.log(err.message);
						this.$Message.error(err.message);
					})
				}
				else{
					menuApi.addMenu(this.obj)
					.then( data => {
						console.log(data);
						this.$Message.success("操作成功");
						this.getMenus();
						this.obj = initObj();
					})
					.catch((err) => {
						console.log(err.message);
						this.$Message.error(err.message);
					})
				}
        
				
       
      },
      getRoleDetail(roles ){
        console.log(roles)
				this.obj.id = roles[0].id;
        this.obj.parentId = roles[0].parentId;
				this.obj.menuName = roles[0].menuName;
				this.obj.url = roles[0].url;
				this.obj.type = roles[0].type;
				this.obj.perms = roles[0].perms;
				// this.obj = Object.assign({},roles[0])
      },
      getMenus() {//获得菜单树
        menuApi.getMenus(null,
          data => {
            console.log(data);
            this.menuList = data.result.list;
            this.machiningMenus(data.result.list)
          }
        );
      },
      machiningMenus: function(menuList){
        var result = [];
        (function traverse(node, result) {//???
          node.forEach(i => {
          let n = i
					if(i.type == 1){
						n.title = `${i.menuName}(${i.url})`
					}else{
						n.title = i.menuName
					}
					n.expand = true
              if(i.childMenus){
                n.children = []
                traverse(i.childMenus, n.children)
              }
              result.push(n);
          })
        })(menuList, result);
        
        this.menutree = result;
      }
    },
    mounted() {
      this.getMenus();
    }
  }
  
</script>

<style>
.dropdown{
  border: 1px solid #d1dbe5;
  padding: 5px 10px;
  width: 200px;
  border-radius: 5px;
  color: inherit;
}
a:hover{
  color: inherit;
}
.el-tree {
    cursor: default;
    background: #fff;
    border: 1px solid #d1dbe5;
    padding: 10px 20px;
}
</style>