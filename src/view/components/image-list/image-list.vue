<template>
  <div>
  	<img  v-for="(item, index) in images" v-bind:key="index" :src="item" width="100" height="100"/>
		<div v-if="!images.length" style="margin-left: 20px;"> 暂无相关照片 </div>
  </div>
	
</template>

<script>
export default {
  name: 'count_to_page',
  components: {
  },
  data () {
    return {
      
    }
  },
	props: {
		urlsString: {
			type: String,
			default () {
				return ""
			}
		}
	},
	computed: {
		images() {
			if (!this.urlsString || this.urlsString == "[]") {
				return [];
			} else {
				let urls = JSON.parse(this.urlsString);
				return urls;
			}
		}
	},
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less">

</style>
