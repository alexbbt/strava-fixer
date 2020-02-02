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
      :coordinates="hoverPointCoordinates"
      @click="clickPoint()"
    />
    <CircleMarker
      v-if="selectedPointCoordinates"
      color="green"
      :coordinates="selectedPointCoordinates"
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

import { UPDATE_POINT, SET_SELECTED_POINT_INDEX, SET_HOVER_POINT_INDEX } from '../store/actions';
import {
  GET_COORDINATES, GET_CENTER_POINT, GET_GEO_JSON, GET_SELECTED_POINT_INDEX, GET_HOVER_POINT_INDEX,
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
      selectedPointIndex: GET_SELECTED_POINT_INDEX,
      hoverPointIndex: GET_HOVER_POINT_INDEX,
    }),
    selectedPointCoordinates() {
      if (this.selectedPointIndex === -1) {
        return null;
      }
      return this.coordinates[this.selectedPointIndex];
    },
    hoverPointCoordinates() {
      return this.coordinates[this.hoverPointIndex];
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
      setSelectedPointIndex: SET_SELECTED_POINT_INDEX,
      setHoverPointIndex: SET_HOVER_POINT_INDEX,
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
    clickPoint() {
      this.setSelectedPointIndex(this.hoverPointIndex);
    },
    handleMouseMove(event) {
      if (this.dragging || !this.coordinates) {
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

      this.setHoverPointIndex(index);
    },
    handlePointDrag(event) {
      const cords = event.marker.getLngLat();
      this.updatePoint({
        index: this.selectedPointIndex,
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
