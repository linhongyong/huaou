<template>
  <Modal v-model="show" :title="'旁站监理数据操作记录: '+obj.pileCode+'号桩'"   width="60%">
		<div>
			<div class="display-flex-center-between" v-for="item in operationLogList" :key="item.id">
				<span class="">操作人：{{ item.editerName }}</span>
				<div class="" style="width: 60%;">内容: {{ item.editPoint }}</div>
				<span class="">时间：{{ item.updateTime }}</span>
			</div>
		</div>
  </Modal>
</template>
<script>
import snjbApi from '@/api/snjb-api'
export default {
  data () {
	return {
		show: false,
	}
  },
  props: {
    operationLogList: {
      type: Array,
      default () {
        return []
      }
    },
		obj: {
			type: Object,
			default () { return {} }
		},
		value:{
			type: Boolean,
			default (){ return false }
		}
  },
  methods: {
    handleOk() { this.$emit("input", false); },
    handleCancel() { this.$emit("input", false); }
  },
  watch: {
  	value(val) { this.show = val; },
  	show(val) { this.$emit("input", val); },
  },
  mounted () {

  }
}
</script>
<style>
  
</style>