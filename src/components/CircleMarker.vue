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
      :height="size * 2"
      :width="size * 2"
    >
      <circle
        :cx="size"
        :cy="size"
        :r="size - 2"
        :stroke="outline"
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
      default: 'none',
    },
    coordinates: {
      type: Array,
      required: true,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    outline() {
      if (this.color === 'none') {
        return 'blue';
      }
      return 'black';
    },
  },
};
</script>
