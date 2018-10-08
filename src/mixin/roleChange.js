import {
  mapState
} from 'vuex'


export default ({
  computed: {
    ...mapState({
      ROLE: state => state.user.role
    })
  },
  watch: {
    ROLE(val) {
      getList(val)
    }
  },
})
