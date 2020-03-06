<template>
  <div class="page">
    <div
      class="map"
    >
      <RouteMap />
      <ActionMenu />
      <HeadsUpDisplay />
      <Settings />
    </div>
    <BottomNav />
  </div>
</template>

<script>
// make this a drop area
import { mapGetters } from 'vuex';

import { GET_POINTS } from '../store/getters';

import ActionMenu from '../components/ActionMenu';
import BottomNav from '../components/BottomNav';
import HeadsUpDisplay from '../components/HeadsUpDisplay';
import Settings from '../components/Settings';
import RouteMap from '../components/RouteMap';

export default {
  name: 'MapPage',
  components: {
    ActionMenu,
    BottomNav,
    HeadsUpDisplay,
    Settings,
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
