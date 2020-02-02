<template>
  <MglMap
    ref="map"
    :access-token="accessToken"
    :map-style="style"
    @load="onMapLoad"
    @mousemove="handleMouseMove"
  >
    <MglGeojsonLayer
      source-id="route"
      :source="geoJson"
      layer-id="mapLayer"
      :layer="geojsonLayer"
    />
    <CircleMarker
      :coordinates="currentPointCoordinates"
      @dragstart="dragging = true"
      @dragend="dragging = false; handlePointDrag($event)"
      @click="clickPoint"
    />
  </MglMap>
</template>

<script>
import Mapbox from 'mapbox-gl';
import { MglMap, MglGeojsonLayer } from 'vue-mapbox';

import { mapGetters, mapActions } from 'vuex';

import { distanceBetweenPoints } from '../utils';

import { UPDATE_POINT, SET_CURRENT_POINT_INDEX } from '../store/actions';
import {
  GET_COORDINATES, GET_CENTER_POINT, GET_GEO_JSON, GET_CURRENT_POINT_INDEX,
} from '../store/getters';

import CircleMarker from './CircleMarker';

export default {
  name: 'RouteMap',
  components: {
    MglMap,
    MglGeojsonLayer,
    CircleMarker,
  },
  data() {
    return {
      Mapbox,
      accessToken:
          'pk.eyJ1IjoiYWxleGJidCIsImEiOiJjaWZwdThvaWhhZDdsaXVseHVjMXluOGJvIn0.unltT8GfFsFml3Z6KrOMLA',
      style: 'mapbox://styles/mapbox/light-v10',
      geojsonLayer: {
        id: 'route',
        type: 'line',
      },
      lastUpdate: 0,
      dragging: false,
    };
  },
  computed: {
    ...mapGetters({
      coordinates: GET_COORDINATES,
      center: GET_CENTER_POINT,
      geoJson: GET_GEO_JSON,
      currentPointIndex: GET_CURRENT_POINT_INDEX,
    }),
    currentPointCoordinates() {
      return this.coordinates[this.currentPointIndex];
    },
  },
  beforeDestroy() {
    if (this.$refs.map && this.$refs.map.map) {
      this.$refs.map.map.remove();
    }
  },
  methods: {
    ...mapActions({
      updatePoint: UPDATE_POINT,
      setCurrentPointIndex: SET_CURRENT_POINT_INDEX,
    }),
    onMapLoad(event) {
      const asyncActions = event.component.actions;
      asyncActions.jumpTo({
        center: this.center,
        zoom: 12,
        speed: 1,
      });
    },
    clickPoint(event) {
      console.log(event);
    },
    handleMouseMove(event) {
      if (this.dragging) {
        return;
      }

      if (Date.now() - 200 < this.lastUpdate) {
      // custom debounce.
        return;
      }
      this.lastUpdate = Date.now();

      window.event = event;
      const cords = [
        event.mapboxEvent.lngLat.lng,
        event.mapboxEvent.lngLat.lat,
      ];
      const { index } = this.coordinates
        .map((p, i) => ({
          point: p,
          index: i,
        }))
        .sort((a, b) => (
          distanceBetweenPoints(a.point, cords)
          - distanceBetweenPoints(b.point, cords)
        ))
        .shift();

      console.log(index);
      this.setCurrentPointIndex(index);
    },
    handlePointDrag(event) {
      const cords = event.marker.getLngLat();
      this.updatePoint({
        index: this.currentPointIndex,
        point: [
          cords.lng,
          cords.lat,
        ],
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
