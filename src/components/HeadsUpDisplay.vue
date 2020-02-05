<template>
  <div
    v-if="point"
    class="hud"
  >
    <p>{{ time }}</p>
    <p>{{ color }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

import { GET_HOVER_POINT, GET_COLOR_GRADIENT, GET_HOVER_POINT_INDEX } from '../store/getters';

export default {
  name: 'HeadsUpDisplay',
  computed: {
    ...mapGetters({
      point: GET_HOVER_POINT,
      index: GET_HOVER_POINT_INDEX,
      colors: GET_COLOR_GRADIENT,
    }),
    time() {
      return moment(this.point.time).format('LTS');
    },
    color() {
      return this.colors[(this.index * 2) + 1];
    },
  },
};
</script>

<style lang="scss" scoped>
.hud {
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px;
  background: white;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;

  p {
    margin: 0;
  }
}
</style>
