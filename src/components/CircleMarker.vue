<template>
  <MglMarker
    :coordinates="coordinates"
    anchor="center"
    :draggable="draggable"
    @dragstart="$emit('dragstart', $event)"
    @dragend="$emit('dragend', $event)"
    @click="$emit('click')"
  >
    <svg
      slot="marker"
      height="20"
      width="20"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="black"
        stroke-width="1"
        :fill="color"
      />
    </svg>
  </MglMarker>
</template>
<script>
import { MglMarker } from 'vue-mapbox';

export default {
  name: 'CircleMarker',
  components: {
    MglMarker,
  },
  props: {
    color: {
      type: String,
      default: 'blue',
    },
    coordinates: {
      type: Array,
      required: true,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
