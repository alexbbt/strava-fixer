<template>
  <div class="upload">
    <h1>Upload your Strava GPX File</h1>

    <v-file-input
      accept=".gpx"
      label="GPX File"
      placeholder="Select your Strava GPX File"
      class="file"
      prepend-icon=""
      outlined
      @change="uploadFile"
    />

    <img src="../assets/Exporting your Data and Bulk Export – Eng.png">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { PARSE_FILE } from '../store/actions';

export default {
  name: 'UploadPage',
  methods: {
    ...mapActions({
      parseFile: PARSE_FILE,
    }),
    uploadFile(file) {
      if (!window.FileReader) return; // Browser is not compatible

      const reader = new FileReader();

      reader.onload = (evt) => {
        if (evt.target.readyState !== 2) return;
        if (evt.target.error) {
          // eslint-disable-next-line no-alert
          alert('Error while reading file');
          return;
        }

        this.parseFile(evt.target.result);
        this.$router.push('map');
      };

      reader.readAsText(file);
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload {
    text-align: center;
    padding: 25px;

    .file {
      margin-top: 50px;
      margin-bottom: 25px;
    }

    img {
      width: 100%;
      max-width: 600px;
    }
  }
</style>
