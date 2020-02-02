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
      color="blue"
      :coordinates="hoverPoint.coordinates"
      @click="clickPoint(hoverPoint.index)"
    />
    <CircleMarker
      v-if="currentPointCoordinates"
      color="green"
      :coordinates="currentPointCoordinates"
      :draggable="true"
      @dragstart="dragging = true"
      @dragend="dragging = false; handlePointDrag($event)"
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
      hoverPoint: {
        index: 0,
        coordinates: [0, 0],
      },
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
      if (this.currentPointIndex === -1) {
        return null;
      }
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

      const fitBounds = this.coordinates.reduce(
        (bounds, coord) => bounds.extend(coord),
        new Mapbox.LngLatBounds(this.coordinates[0], this.coordinates[0]),
      );

      asyncActions.fitBounds(fitBounds, {
        padding: 20,
        duration: 0,
      });
    },
    clickPoint(event) {
      this.setCurrentPointIndex(event);
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
      const { index, point } = this.coordinates
        .map((p, i) => ({
          point: p,
          index: i,
        }))
        .sort((a, b) => (
          distanceBetweenPoints(a.point, cords)
          - distanceBetweenPoints(b.point, cords)
        ))
        .shift();

      this.hoverPoint.index = index;
      this.hoverPoint.coordinates = point;
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
