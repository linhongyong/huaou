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
        console.log(`project发生改变: ${project}`);
        this.getList();
      }
    },
    BUILDING: {
      deep: true,
      handler(building) {
        console.log(`building发生改变: ${building}`);
        this.buildingChange();
      }
    }
  },
  created() {
    if (this.PROJECT.id) this.getList();
    if (this.BUILDING.id) this.buildingChange();
  }
};
