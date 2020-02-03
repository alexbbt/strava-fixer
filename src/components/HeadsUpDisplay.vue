<template>
  <div
    v-if="point"
    class="hud"
  >
    <p>{{ time }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

import { GET_HOVER_POINT } from '../store/getters';

export default {
  name: 'HeadsUpDisplay',
  computed: {
    ...mapGetters({
      point: GET_HOVER_POINT,
    }),
    time() {
      return moment(this.point.time).format('LTS');
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
