<template>
  <v-bottom-sheet
    v-if="selectedPoint"
    v-model="show"
    persistent
    hide-overlay
  >
    <v-sheet class="sheet">
      <v-btn
        class="float-right"
        color="primary"
        depressed
        @click="hide(); scrollTop()"
      >
        close
      </v-btn>
      <v-container class="point-form">
        <v-row>
          <v-col
            v-if="settings.showTime"
            cols="12"
            sm="6"
          >
            <v-text-field
              type="time"
              :value="timestamp"
              outlined
              label="Time"
              step="1"
              prepend-icon="mdi-clock-outline"
              @input="updatePoint('time', getUpdatedTime($event))"
              @blur="scrollTop"
            />
          </v-col>
          <v-col
            v-if="settings.showElevation"
            cols="12"
            sm="6"
          >
            <v-text-field
              type="number"
              :value="selectedPoint['ele']"
              outlined
              label="Elevation"
              prepend-icon="mdi-elevation-rise"
              @input="updatePoint('ele', $event)"
              @blur="scrollTop"
            />
          </v-col>
          <v-col
            v-if="settings.showLatitude"
            cols="12"
            sm="6"
          >
            <v-text-field
              type="number"
              :value="selectedPoint['@_lat']"
              outlined
              label="Latitude"
              prepend-icon="mdi-latitude"
              @input="updatePoint('@_lat', $event)"
              @blur="scrollTop"
            />
          </v-col>
          <v-col
            v-if="settings.showLongitude"
            cols="12"
            sm="6"
          >
            <v-text-field
              type="number"
              :value="selectedPoint['@_lon']"
              outlined
              label="Longitude"
              prepend-icon="mdi-longitude"
              @input="updatePoint('@_lon', $event)"
              @blur="scrollTop"
            />
          </v-col>
          <v-col
            v-for="extra in filteredExtras"
            :key="extra.name"
            cols="12"
            sm="6"
          >
            <v-text-field
              type="number"
              :value="extra.value"
              outlined
              :label="extra.name"
              :prepend-icon="extra.icon"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

import { HIDE_BOTTOM_SHEET, UPDATE_POINT } from '../store/actions';
import {
  GET_SHOW_BOTTOM_SHEET,
  GET_SELECTED_POINT,
  GET_SELECTED_POINT_INDEX,
  GET_SETTINGS,
  GET_SELECTED_POINT_EXTRAS,
} from '../store/getters';

const TIME_FORMAT = 'HH:mm:ss';

export default {
  name: 'BottomNav',
  computed: {
    ...mapGetters({
      selectedPoint: GET_SELECTED_POINT,
      selectedPointIndex: GET_SELECTED_POINT_INDEX,
      show: GET_SHOW_BOTTOM_SHEET,
      settings: GET_SETTINGS,
      selectedPointExtras: GET_SELECTED_POINT_EXTRAS,
    }),
    timestamp() {
      return moment(this.selectedPoint.time).format(TIME_FORMAT);
    },
    filteredExtras() {
      return this.selectedPointExtras
        .filter((extra) => this.settings[extra.showKey] == null || this.settings[extra.showKey]);
    },
  },
  methods: {
    ...mapActions({
      hide: HIDE_BOTTOM_SHEET,
      updatePointPrivate: UPDATE_POINT,
    }),
    getUpdatedTime(value) {
      const currentTime = moment(this.timestamp, TIME_FORMAT);
      const changedTime = moment(value, TIME_FORMAT);
      const timeChanged = changedTime.diff(currentTime);
      return moment(this.selectedPoint.time).add(timeChanged).toISOString();
    },
    updatePoint(key, value) {
      this.updatePointPrivate({
        index: this.selectedPointIndex,
        key,
        value,
      });
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    },
  },
};
</script>

<style lang="scss">
.sheet {
  padding: 15px;

  .point-form {
    margin-top: 40px;
    padding-top: 0px;
    padding-bottom: 0px;

    .v-text-field__details {
      display: none;
    }
  }
}
</style>
