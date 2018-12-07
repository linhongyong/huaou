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
				console.log("watch,PROJECT")
        this.getList();
      }
    },
    BUILDING: {
      deep: true,
      handler(building) {
				console.log("watch,BUILDING")
        this.buildingChange();
      }
    }
  },
  created() {
    if (this.PROJECT && this.PROJECT.id) {
			console.log("created，getList");
			this.getList();
		}
//     if (this.BUILDING && this.BUILDING.id){
// 			console.log("created，buildingChange");
// 			this.buildingChange();
// 		}
  }
};
