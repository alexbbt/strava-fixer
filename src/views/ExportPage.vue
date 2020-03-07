<template>
  <div class="upload">
    <h1>Export Modified File</h1>
    <p>Changed Points {{ diff }} </p>
    <v-btn
      outlined
      rounded
      color="primary"
      class="button"
      @click="back"
    >
      Go Back
    </v-btn>
    <v-btn
      rounded
      color="primary"
      class="button"
      @click="exportFile"
    >
      Export
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import diff from 'diff-arrays-of-objects';

import {
  GET_EDITABLE_FILE, GET_ORIGINAL_FILE, GET_ACTIVITY_NAME, GET_XML_STRING,
} from '../store/getters';
import { getPoints, clone } from '../utils';

export default {
  name: 'ExportPage',
  computed: {
    ...mapGetters({
      original: GET_ORIGINAL_FILE,
      modified: GET_EDITABLE_FILE,
      activityName: GET_ACTIVITY_NAME,
      xml: GET_XML_STRING,
    }),
    diff() {
      if (this.original === '' || this.modified === '') {
        return null;
      }

      const originalPoints = clone(getPoints(this.original));
      const changedValues = clone(getPoints(this.modified));

      const changes = diff(originalPoints, changedValues, 'time');

      return originalPoints.length - changes.same.length;
    },
  },
  mounted() {
    if (!this.original) {
      this.$router.push('upload');
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    exportFile() {
      const element = document.createElement('a');
      element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(this.xml)}`);
      element.setAttribute('download', `${this.activityName}.gpx`);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload {
    text-align: center;

    .button {
      margin: 2px;
    }
  }
</style>
