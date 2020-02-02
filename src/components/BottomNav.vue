<template>
  <div>
    <p>Current Point</p>
    <div class="row">
      <div class="alex-one-half column">
        <label for="time">Time</label>
        <input
          name="time"
          type="datetime"
          :value="currentPoint['time']"
          @input="updatePoint('time', $event.target.value)"
        >
      </div>
      <div class="alex-one-half column">
        <label for="ele">Elevation</label>
        <input
          name="ele"
          type="text"
          :value="currentPoint['ele']"
          @input="updatePoint('ele', $event.target.value)"
        >
      </div>
    </div>
    <div class="row">
      <div class="alex-one-half column">
        <label for="lat">Lat</label>
        <input
          name="lat"
          type="text"
          :value="currentPoint['@_lat']"
          @input="updatePoint('@_lat', $event.target.value)"
        >
      </div>
      <div class="alex-one-half column">
        <label for="lon">Long</label>
        <input
          name="lon"
          type="text"
          :value="currentPoint['@_lon']"
          @input="updatePoint('@_lon', $event.target.value)"
        >
      </div>
    </div>
    <hr>
    <router-link
      class="button button-primary"
      to="/export"
    >
      Export
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { UPDATE_POINT, SET_SELECTED_POINT_INDEX } from '../store/actions';
import { GET_SELECTED_POINT, GET_SELECTED_POINT_INDEX } from '../store/getters';

export default {
  name: 'BottomNav',
  computed: {
    ...mapGetters({
      selectedPoint: GET_SELECTED_POINT,
      selectedPointIndex: GET_SELECTED_POINT_INDEX,
    }),
  },
  methods: {
    ...mapActions({
      updatePointPrivate: UPDATE_POINT,
      setSelectedPointIndex: SET_SELECTED_POINT_INDEX,
    }),
    updatePoint(key, value) {
      console.log(JSON.stringify(this.selectedPoint, null, 2));
      this.updatePointPrivate({
        index: this.selectedPointIndex,
        key,
        value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  box-sizing: border-box; /* Include the padding in width calculation */

  &.side-nav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change based on screen size */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    // transition: 0.5s; /* 0.5 second transition effect to slide in the side-nav */
    color: #f1f1f1;

    @media only screen and (min-width: 550px) {
      & {
        width: 200px;
        padding: 40px 20px 20px 20px;
      }
    }

    .button {
      width: 100%;
    }
  }

  &.bottom-nav {
    height: 0; /* 0 height - change based on screen size */
    width: 100%; /* 100% Full-width */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    bottom: 0; /* Stay at the top */
    left: 0;
    right: 0;
    background-color: #111; /* Black*/
    color: #f1f1f1;

    @media only screen and (max-width: 550px) {
      & {
        height: 400px;
        padding: 40px 20px 20px 20px;
      }
    }
  }
}
</style>
