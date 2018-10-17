import {
  mapState,
  mapGetters
} from 'vuex';

export default {
  computed: {
    ...mapState({
      PROJECT: (state) => state.user.project,
      BUILDING: (state) => state.user.building
    }),
    ...mapGetters({
      ROLE: 'role'
    })
  },
  watch: {
    PROJECT: {
      deep: true,
      handler(project) {
        this.getList();
      }
    },
    BUILDING: {
      deep: true,
      handler(building) {
        this.buildingChange();
      }
    }
  },
  created() {
    if (this.PROJECT.id) this.getList();
    if (this.BUILDING.id) this.buildingChange();
  }
};
