<template>
  <MglMap
    :accessToken="accessToken"
    :mapStyle="style"
    @load="onMapLoad"
    @zoom="handleFrameChange"
    @move="handleFrameChange"
  >
    <MglGeojsonLayer
      sourceId="route"
      :source="geoJsonLine"
      layerId="mapLayer"
      :layer="geojsonLineLayer"
    />
    <!-- <MglGeojsonLayer
      sourceId="points"
      :source="geoJsonPoints"
      layerId="pointsLayer"
      :layer="geojsonPointesLayer"
    /> -->
    <MglMarker v-for="(point, index) in filteredPoints"
      :key="index"
      :coordinates="point"
      color="blue"
      :draggable="true"
    />
  </MglMap>
</template>

<script>
// make this a drop area
import { mapGetters } from 'vuex';
import Mapbox from 'mapbox-gl';
import { MglMap, MglGeojsonLayer, MglMarker } from 'vue-mapbox';

import { GET_ORIGINAL_FILE } from '../store/getters';

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
      geojsonPointesLayer: {
        id: 'points-layer',
        type: 'symbol',
      },
      zoom: 12,
      position: '',
      filteredPoints: [],
    };
  },
  mounted() {
    if (this.file === '') {
      this.$router.push('upload');
    }
    // console.log(this.file);
  },
  computed: {
    ...mapGetters({
      file: GET_ORIGINAL_FILE,
    }),
    points() {
      if (!this.file) {
        return [[0, 0]];
      }
      return this.file.gpx.trk.trkseg.trkpt
        .map(point => [
          parseFloat(point['@_lon']),
          parseFloat(point['@_lat']),
        ]);
    },
    center() {
      const { length } = this.points;
      return this.points.reduce((center, p, i) => {
        /* eslint-disable no-param-reassign */
        center[0] += p[0];
        center[1] += p[1];

        if (i === length - 1) {
          center[0] /= length;
          center[1] /= length;
        }

        return center;
        /* eslint-enable no-param-reassign */
      }, [0, 0]);
    },
    geoJsonLine() {
      return {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: this.points,
          },
        },
      };
    },
    geoJsonPoints() {
      return {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          properties: {},
          features: this.points.map(point => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: point,
            },
          })),
        },
      };
    },
  },
  methods: {
    handleFrameChange(event) {
      const zoom = Math.round(event.map.getZoom() * 2) / 2;
      const position = event.map.getBounds().toString();
      if (
        (this.zoom !== zoom)
          || (this.position !== position)
      ) {
        this.zoom = zoom;
        this.position = position;

        if (zoom > 14.5) {
          const bounds = event.map.getBounds();
          this.filteredPoints = this.points.filter(point => bounds.contains(point));
        } else {
          this.filteredPoints = [];
        }

        // console.log(this.zoom);
        // window.map = event.map;
      }
    },
    async onMapLoad(event) {
      this.map = event.component.map;

      const asyncActions = event.component.actions;
      const newParams = await asyncActions.flyTo({
        center: this.center,
        zoom: 12,
        speed: 1,
      });
      console.log(newParams);
      // window.marker = this.$refs['marker-1'];
    },
  },
};
</script>
