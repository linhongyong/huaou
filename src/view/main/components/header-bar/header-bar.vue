<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger>
    <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb>

    <div class="custom-content-con">
      <Select v-model="projectId" style="width:200px" class="i-select" @on-change="handleSelectChange">
        <Option v-for="item in projectList" :value="item.id" :key="item.id">{{ item.projectName }}</Option>
      </Select>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import siderTrigger from './sider-trigger'
  import customBreadCrumb from './custom-bread-crumb'
  import './header-bar.less'
  import apiProject from '@/api/project-api'
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'HeaderBar',
    components: {
      siderTrigger,
      customBreadCrumb
    },
    props: {
      collapsed: Boolean
    },
    computed: {
      ...mapState({
        role: state => state.user.role
      }),
      breadCrumbList() {
        return this.$store.state.app.breadCrumbList
      },
    },
    data() {
      return {
        projectId: '',
        projectList: []
      }
    },
    created() {
      this.getList()
    },
    methods: {
      handleCollpasedChange(state) {
        this.$emit('on-coll-change', state)
      },
      getList() {
        apiProject.getOwnList()
          .then((data) => {
            this.projectList = data;
            // 默认选择第一个项目
            if (this.projectList.length > 0) {
              this.projectId = this.projectList[0].id;
              this.$store.commit('setRole', this.projectList[0])
            }
          }).catch((err) => {
            this.$Message.error('获取项目列表失败')
          });
      },
      handleSelectChange(id) {
        this.$store.commit('setRole', this.projectList.find((item) => item.id === id))
        console.log(this.$store);
      }
    }
  }
</script>
<style scoped>
  .i-select {
    vertical-align: top;
    margin-right: 20px;
    float: left;
    margin-top: 16px;
  }
</style>

