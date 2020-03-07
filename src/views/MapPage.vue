<template>
  <div class="page">
    <div
      class="map"
    >
      <RouteMap />
      <ActionMenu />
    </div>
    <TopNav />
    <BottomNav />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { GET_POINTS } from '../store/getters';

import ActionMenu from '../components/ActionMenu';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import RouteMap from '../components/RouteMap';

export default {
  name: 'MapPage',
  components: {
    ActionMenu,
    TopNav,
    BottomNav,
    RouteMap,
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
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  width: 100%;

  .map {
    height: 100%;
    position: relative;
  }
}
</style>
