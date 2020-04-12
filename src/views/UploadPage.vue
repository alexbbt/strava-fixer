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
      :clearable="false"
      @change="uploadFile"
    />

    <img src="../assets/Exporting your Data and Bulk Export – Eng.png">
    <div>
      <v-alert
        v-model="error"
        class="alert"
        close-text="Close Error Message"
        dismissible
        prominent
        transition="scroll-y-transition"
        type="error"
      >
        <div class="title">
          {{ errorTitle }}
        </div>
        <div>{{ errorMessage }}</div>
      </v-alert>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { PARSE_FILE } from '../store/actions';

export default {
  name: 'UploadPage',
  data() {
    return {
      loader: null,
      loadingTimeout: null,
      errorTimeout: null,
      error: false,
      errorTitle: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions({
      parseFile: PARSE_FILE,
    }),
    stopLoading() {
      if (this.loader) {
        this.loader.hide();
        this.loader = null;
        window.clearTimeout(this.loadingTimeout);
        return true;
      }
      return false;
    },
    showError(title, message) {
      this.error = true;
      this.errorTitle = title;
      this.errorMessage = message;
      window.clearTimeout(this.errorTimeout);
      this.errorTimeout = setTimeout(() => {
        this.error = false;
      }, 5000);
    },
    uploadFile(file) {
      if (!file) {
        this.showError('Error reading file', 'No File Selected');
        return;
      }

      if (!window.FileReader) {
        // Browser is not compatible
        this.showError('Error reading file', 'Browser is not compatable');
        return;
      }

      this.stopLoading();
      this.loader = this.$loading.show();

      const reader = new FileReader();

      reader.onload = (evt) => {
        if (evt.target.readyState !== 2) return;
        if (evt.target.error) {
          this.stopLoading();
          this.showError('Error reading file', evt.target.error);
          return;
        }

        try {
          this.parseFile(evt.target.result);
          this.$router.push('map');
          this.stopLoading();
        } catch (e) {
          this.stopLoading();
          this.showError('Error parsing file', e.toString());
        }
      };

      reader.readAsText(file);

      this.loadingTimeout = setTimeout(() => {
        if (this.stopLoading()) {
          this.showError('File took too long to parse');
        }
      }, 10000);
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload {
    text-align: center;
    padding: 25px;

    .file {
      margin: 50px auto 25px;
      max-width: 600px;
    }

    img {
      width: 100%;
      max-width: 600px;
    }

    .alert {
      text-align: left;
      position: absolute;
      top: 25px;
      left: 25px;
      right: 25px;
    }
  }
</style>
