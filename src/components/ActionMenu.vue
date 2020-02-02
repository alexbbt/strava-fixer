<template>
  <v-speed-dial
    v-model="fab"
    :absolute="true"
    :bottom="true"
    :right="true"
    direction="top"
    transition="slide-y-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon v-if="fab">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-pencil
        </v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      small
      color="indigo"
      @click.stop="$emit('line')"
    >
      <v-icon>mdi-chart-timeline-variant</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="green"
      @click.stop="$emit('edit')"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
      @click.stop="deletePoint"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
import { mapActions } from 'vuex';

import { DELETE_SELECTED_POINT } from '../store/actions';

export default {
  name: 'ActionMenu',
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    ...mapActions({
      deletePoint: DELETE_SELECTED_POINT,
    }),
  },
};
</script>
