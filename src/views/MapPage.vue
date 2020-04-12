<template>
  <Vue100vh>
    <div
      class="map"
    >
      <RouteMap />
      <ActionMenu />
    </div>
    <TopNav />
    <BottomNav />
  </Vue100vh>
</template>

<script>
import { mapGetters } from 'vuex';
import Vue100vh from 'vue-div-100vh';

import { GET_POINTS } from '../store/getters';

import ActionMenu from '../components/ActionMenu';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import RouteMap from '../components/RouteMap';

export default {
  name: 'MapPage',
  components: {
    Vue100vh,
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
    window.points = this.points;
  },
};
</script>

<style lang="scss" scoped>
.map {
  height: 100%;
  position: relative;
}
</style>
