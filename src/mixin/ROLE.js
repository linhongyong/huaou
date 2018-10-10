import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      ROLE: (state) => state.user.role
    })
  },
  watch: {
    ROLE() {
      this.getList();
    }
  },
  created() {
    if (this.ROLE) this.getList();
  }
};
