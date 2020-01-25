<template>
  <div class="about">
    <h1>Upload your Strava GPX File</h1>
    <input ref="file" type="file" @change="uploadFile" />
  </div>
</template>

<script>
// make this a drop area
import { mapMutations } from 'vuex';
import { SET_ORIGINAL_FILE } from '../store/mutations';

export default {
  methods: {
    ...mapMutations({
      setFile: SET_ORIGINAL_FILE,
    }),
    uploadFile(event) {
      if (!window.FileReader) return; // Browser is not compatible

      const reader = new FileReader();

      reader.onload = (evt) => {
        if (evt.target.readyState !== 2) return;
        if (evt.target.error) {
          alert('Error while reading file');
          return;
        }

        this.setFile(evt.target.result);
      };

      reader.readAsText(event.target.files[0]);
    },
  },
};
</script>
