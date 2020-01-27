<template>
  <div class="upload">
    <h1>Export Modified File</h1>
    <p>Changed Points {{ diff }} </p>
    <button @click="back">Go Back</button>
    <button @click="exportFile">Export</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  GET_EDITABLE_FILE, GET_ORIGINAL_FILE, GET_ACTIVITY_NAME, GET_XML_STRING,
} from '../store/getters';
import { getPoints } from '../utils';

export default {
  name: 'export',
  mounted() {
    if (!this.original) {
      this.$router.push('upload');
    }
  },
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

      const originalPoints = getPoints(this.original);
      const changedValues = getPoints(this.modified).filter((point, index) => {
        const og = originalPoints[index];
        if (og['@_lng'] !== point['@_lng']) {
          return true;
        }
        if (og['@_lat'] !== point['@_lat']) {
          return true;
        }
        return false;
      });
      return changedValues.length;
    },
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
  }
</style>
