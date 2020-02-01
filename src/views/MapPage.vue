<template>
  <div class="page">
    <div class="sidenav" :class="{ 'show-nav': showNav }">
      <a class="closebtn" @click="closeNav">&times;</a>
      <p>Current Point</p>
      <label for="index">index</label>
      <input class="u-full-width" name="index"
        type="number" v-model.number="currentPointIndex" min="0"
      >
      <label for="time">Time</label>
      <input class="u-full-width" name="time" type="datetime"
        :value="currentPoint['time']"
        @input="updatePoint('time', $event.target.value)"
      >
      <label for="ele">Elevation</label>
      <input class="u-full-width" name="ele" type="text"
        :value="currentPoint['ele']"
        @input="updatePoint('ele', $event.target.value)"
      >
      <label for="lat">Lat</label>
      <input class="u-full-width" name="lat" type="text"
        :value="currentPoint['@_lat']"
        @input="updatePoint('@_lat', $event.target.value)"
      >
      <label for="lon">Long</label>
      <input class="u-full-width" name="lon" type="text"
        :value="currentPoint['@_lon']"
        @input="updatePoint('@_lon', $event.target.value)"
      >
      <hr>
      <router-link class="button button-primary" to="/export">Export</router-link>
    </div>
    <div class="map">
      <RouteMap
        :currentPointIndex="currentPointIndexSafe"
        @set-current-point="setCurrentPointIndex"
      />
    </div>
    <span class="openbtn" @click="openNav">&#9776;</span>
    <button class="deletebtn" @click="deletePoint">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
// make this a drop area
import { mapGetters, mapActions } from 'vuex';

import { GET_POINTS } from '../store/getters';
import { UPDATE_POINT } from '../store/actions';

import RouteMap from '../components/RouteMap.vue';

export default {
  name: 'map-page',
  components: {
    RouteMap,
  },
  data() {
    return {
      currentPointIndex: 0,
      lastUpdte: 0,
      lastGeo: '',
      showNav: false,
    };
  },
  mounted() {
    if (!this.points) {
      this.$router.push('upload');
    }
    window.points = this.points;
  },
  computed: {
    ...mapGetters({
      points: GET_POINTS,
    }),
    currentPoint() {
      return this.points[this.currentPointIndexSafe];
    },
    currentPointIndexSafe() {
      return this.currentPointIndex || 0;
    },
  },
  methods: {
    ...mapActions({
      updatePointPrivate: UPDATE_POINT,
    }),
    setCurrentPointIndex(index) {
      this.currentPointIndex = index;
    },
    updatePoint(key, value) {
      console.log(JSON.stringify(this.currentPoint, null, 2));
      this.updatePointPrivate({
        index: this.currentPointIndex,
        key,
        value,
      });
    },
    closeNav() {
      this.showNav = false;
    },
    openNav() {
      this.showNav = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;

  .openbtn {
    cursor: pointer;
    font-size: 36px;
    line-height: 36px;
    height: 36px;
    width: 36px;
    margin: 4px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .deletebtn {
    position: absolute;
    top: 0;
    right: 0;
  }

  .sidenav {
    box-sizing: border-box; /* Include the padding in width calculation */
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    // transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    color: #f1f1f1;

    .closebtn {
      text-decoration: none;
      position: absolute;
      display: block;
      color: #818181;
      top: 0;
      right: 20px;
      font-size: 36px;
      cursor: pointer;
    }

    &.show-nav {
      width: 200px;
      padding: 40px 20px 20px 20px;
    }

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

  .map {
    height: 100%;
  }
}
</style>
