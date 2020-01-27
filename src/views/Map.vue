<template>
    <MglMap
      ref="map"
      :accessToken="accessToken"
      :mapStyle="style"
      @load="onMapLoad"
      @mousemove="handleMouseMove"
    >
      <MglGeojsonLayer
        sourceId="route"
        :source="geoJson"
        layerId="mapLayer"
        :layer="geojsonLineLayer"
      />
      <MglMarker v-if="currentPoint.show"
        :coordinates="currentPoint.point"
        anchor="center"
        :draggable="true"
        @dragstart="currentPoint.dragging = true"
        @dragend="currentPoint.dragging = false; handlePointDrag($event)"
      >
        <svg slot="marker" height="20" width="20">
          <circle cx="10" cy="10" r="8" stroke="black" stroke-width="1" fill="blue" />
        </svg>
      </MglMarker>
    </MglMap>
</template>

<script>
// make this a drop area
import { mapGetters, mapActions } from 'vuex';
import Mapbox from 'mapbox-gl';
import { MglMap, MglGeojsonLayer, MglMarker } from 'vue-mapbox';

import { distanceBetweenPoints } from '../utils';

import { UPDATE_POINT } from '../store/actions';
import { GET_POINTS, GET_CENTER_POINT, GET_GEO_JSON } from '../store/getters';

export default {
  components: {
    MglMap,
    MglGeojsonLayer,
    MglMarker,
  },
  data() {
    return {
      Mapbox,
      accessToken:
        'pk.eyJ1IjoiYWxleGJidCIsImEiOiJjaWZwdThvaWhhZDdsaXVseHVjMXluOGJvIn0.unltT8GfFsFml3Z6KrOMLA',
      style: 'mapbox://styles/mapbox/light-v10',
      geojsonLineLayer: {
        id: 'route-layer',
        type: 'line',
      },
      currentPoint: {
        show: false,
        point: [0, 0],
        index: -1,
        lastUpdate: 0,
        dragging: false,
      },
      lastGeo: '',
    };
  },
  mounted() {
    if (!this.points) {
      this.$router.push('upload');
    }
  },
  computed: {
    ...mapGetters({
      points: GET_POINTS,
      center: GET_CENTER_POINT,
      geoJson: GET_GEO_JSON,
    }),
  },
  methods: {
    ...mapActions({
      updatePoint: UPDATE_POINT,
    }),
    handleMouseMove(event) {
      if (this.currentPoint.dragging) {
        return;
      }

      if (Date.now() - 200 < this.currentPoint.lastUpdate) {
        // custom debounce.
        return;
      }
      this.currentPoint.lastUpdate = Date.now();

      window.event = event;
      const cords = [
        event.mapboxEvent.lngLat.lng,
        event.mapboxEvent.lngLat.lat,
      ];
      const { point, index } = this.points
        .map((p, i) => ({
          point: p,
          index: i,
        }))
        .sort((a, b) => (
          distanceBetweenPoints(a.point, cords)
          - distanceBetweenPoints(b.point, cords)
        ))
        .shift();
      this.currentPoint.index = index;
      this.currentPoint.point = point;
      this.currentPoint.show = true;
    },
    handlePointDrag(event) {
      const cords = event.marker.getLngLat();
      this.updatePoint({
        index: this.currentPoint.index,
        point: [
          cords.lng,
          cords.lat,
        ],
      });
    },
    onMapLoad(event) {
      const asyncActions = event.component.actions;
      asyncActions.jumpTo({
        center: this.center,
        zoom: 12,
        speed: 1,
      });
    },
  },
};
</script>
