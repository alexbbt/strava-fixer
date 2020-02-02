<template>
  <div class="page">
    <SideBottomNav />
    <div class="map">
      <RouteMap />
    </div>
    <SideBottomNav />
  </div>
</template>

<script>
// make this a drop area
import { mapGetters } from 'vuex';

import { GET_POINTS } from '../store/getters';

import RouteMap from '../components/RouteMap.vue';
import SideBottomNav from '../components/SideBottomNav.vue';

export default {
  name: 'MapPage',
  components: {
    RouteMap,
    SideBottomNav,
  },
  data() {
    return {
      currentPointIndex: 0,
    };
  },
  computed: {
    ...mapGetters({
      points: GET_POINTS,
    }),
  },
  mounted() {
    if (!this.points) {
      this.$router.push('upload');
    }
    window.points = this.points;
  },
  methods: {
    setCurrentPointIndex(index) {
      console.log(index);
      this.currentPointIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;

  .map {
    height: 100%;

    @media only screen and (max-width: 550px) {
      & {
        height: calc(100% - 400px);
      }
    }
  }
}
</style>
