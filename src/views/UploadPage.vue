<template>
  <div class="upload">
    <h1>Upload your Strava GPX File</h1>
    <input
      ref="file"
      type="file"
      accept=".gpx"
      @change="uploadFile"
    >
  </div>
</template>

<script>
// make this a drop area
import { mapActions } from 'vuex';
import { PARSE_FILE } from '../store/actions';

export default {
  name: 'UploadPage',
  methods: {
    ...mapActions({
      parseFile: PARSE_FILE,
    }),
    uploadFile(event) {
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

      reader.readAsText(event.target.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload {
    text-align: center;
  }
</style>
