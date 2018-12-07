<template>
  <span>{{date}}</span>
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
		timedate: {
			type: String,
			default () {
				return ""
			}
		}
	},
	computed: {
		date() {
			return this.formatDate(this.timedate)
		}
	},
  methods: {
    formatDate: function (date) {
			if(!date){
				return;
			}
			let list = date.split(" ");
			console.log(list[0]);
      return list.length && list[0]
    },
  },
  mounted () {
  }
}
</script>

<style lang="less">

</style>
