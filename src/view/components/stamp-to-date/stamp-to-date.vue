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
		timestamp: {
			type: Number,
			default () {
				return 0
			}
		}
	},
	computed: {
		date() {
			console.log(this.timestamp);
			return this.formatTime(new Date(this.timestamp))
		}
	},
  methods: {
    formatTime: function (date) {
			console.log(date);
      let that = this;
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return [year, month, day].map(that.formatNumber).join('-')
    },
    formatNumber: function (n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    },
  },
  mounted () {
  }
}
</script>

<style lang="less">

</style>
