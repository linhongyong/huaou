import {
  mapState
} from 'vuex';

export default {
  computed: {
    ...mapState({
      ROLE: (state) => state.user.role,
      PROJECT_ID: (state) => state.user.role.projectId,
    })
  },
  watch: {
    ROLE: {
      deep: true,
      handler() {
        this.getList();
      }
    },
    PROJECT_ID() {
      this.getList();
    }
  },
  created() {
    if (this.ROLE.projectId) this.getList();
  }
};
