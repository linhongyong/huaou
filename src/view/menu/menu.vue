  <template>
    <div class="">
    	<Card>
        <Row>
          <Col span="6">
            <Tree :data="menutree"></Tree>
            
          </Col>
          <Col span="18">
            <div class="">
             	<Dropdown  trigger="click" @on-click="onSelectParent">
                <a href="javascript:void(0)">
                             选择父级
                    <Icon type="ios-arrow-down"></Icon>
                    
                </a>
                <DropdownMenu  slot="list">
                  <div  v-for="item in menutree">
                  	<DropdownItem v-if="!item.children.length" :name="item.id">{{ item.title }}</DropdownItem>
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
              : 选择的父id: {{ obj.parentId }}
              <div class="">
                             名称：
                <Input placeholder="" style="width: auto" v-model="obj.menuName"/>
              </div>
              <div class="">
                              代码：
                <Input placeholder="Enter name" style="width: auto"  v-model="obj.url"/>
              </div>
              <div class="">
              	<RadioGroup v-model="obj.type" >
                  <Radio label="0">
                      <span>菜单</span>
                  </Radio>
                  <Radio label="1">
                      <span>按钮</span>
                  </Radio>
                </RadioGroup>
              </div>
              <div class="">
                <RadioGroup v-model="obj.status">
                  <Radio label="1">
                      <span>是</span>
                  </Radio>
                  <Radio label="0">
                      <span>否</span>
                  </Radio>
                </RadioGroup>
              </div>
              <div class="">
                              序号
                <Slider v-model="obj.orderNum"></Slider>
              </div>
              <div class="">
                              备注
                <Input placeholder="Enter name" style="width: auto"  v-model="obj.perms"/>
              </div>
             </div>
            
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
          if(false){  return; }
            let n = {
                  title: i.menuName,
                  id: i.id,
              }
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
/*      console.log(this.$router.options.routes);
      let routes = this.$router.options.routes;
      var result = [];    // 存放结果
      (function traverse(node, result) {
        node.forEach(i => {
          if(i.meta.hideInMenu){  return; }
          let n = {
                title: i.meta.title,
            }
            if(i.children){
              n.children = []
              traverse(i.children, n.children)
            }
            
            result.push(n);
        })
      })(routes, result);
      this.menutree = result
      console.log(result);*/
      
    }
  }
  
</script>

<style>
</style>