  <template>
    <div class="">
    	<Card>
        <Row  type="flex"  justify="space-between">
          <Col span="4">
            <div class="el-tree" style="">
            	<Tree :data="menutree"  @on-select-change="getRoleDetail"></Tree>
            </div>
            
            
          </Col>
          <Col span="19">
            <Card>
            <div class="" style="padding: 20px 20px 80px;">
                      父级：
             	<Dropdown  trigger="click" @on-click="onSelectParent">
                <a class="dropdown display-flex-center-between" href="javascript:void(0)">
                                  请选择父级
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu  slot="list">
                  <div  v-for="item in menutree">
                  	<DropdownItem v-if="!item.children.length" :name="item.id"  style="padding: 5px 20px">{{ item.title }}</DropdownItem>
                    <Dropdown placement="right-start"   trigger="click" v-else>
                      <DropdownItem :name="item.id">
                        {{ item.title }}
                        <Icon type="ios-arrow-forward"></Icon>
                      </DropdownItem>
                      <DropdownMenu slot="list">
                        <div  v-for="item2 in item.children">
                        	<DropdownItem v-if="!item2.children.length" :name="item2.id">{{ item2.title }}</DropdownItem>
                        	<Dropdown  placement="right-start"   trigger="click" v-else>
                        	  <DropdownItem :name="item2.id">
                              {{ item2.title }}
                              <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                        	  <DropdownMenu slot="list">
                        	    <DropdownItem v-for="item3 in item2.children" :name="item3.id">{{ item3.title }}</DropdownItem>
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
              <!--<div class="" style="margin-top: 20px;">
                <RadioGroup v-model="obj.status">
                  <Radio label="1">
                      <span>是</span>
                  </Radio>
                  <Radio label="0">
                      <span>否</span>
                  </Radio>
                </RadioGroup>
              </div>-->
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
            </Card>
          </Col>
          
         </Row>
         <Button type="primary" @click="handleSubmit()">保存</Button>
      </Card>
    </div>
</template>

<script>
  import menuApi from "@/api/menu-api";
  export default {
    data () {
      return {
        menutree: [],
        obj:{
          icon:"+",
          parentId:null
        }
      }
    },
    methods:{
      onSelectParent: function (id) {
      	console.log(id);
      	this.obj.parentId = id

      },
      handleSubmit: function(){
         console.log(this.obj);
        menuApi.addMenu(this.obj).then( data => {
          console.log(data);
          this.$Message.success("操作成功");
          this.getMenus();
        })
       
      },
      getRoleDetail(roles ){
        console.log(roles)
        this.obj = roles[0];
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
        (function traverse(node, result) {//???
          node.forEach(i => {
//          let n = {
//                title: i.menuName,
//                id: i.id,
//            }
          let n = i
          n.title = i.menuName
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