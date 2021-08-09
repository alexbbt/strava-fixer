<template>
  <v-dialog
    v-model="dialog"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        large
        class="settings"
        color="black"
        v-on="on"
      >
        <v-icon>mdi-merge</v-icon>
      </v-btn>
    </template>

    <v-card flat>
      <v-card-title
        primary-title
      >
        Merge with another GPX File
        <v-spacer />
        <v-btn
          icon
          text
          color="black"
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
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
      </v-card-text>
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
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_SETTINGS, GET_USER_SETTINGS } from '../store/getters';
import { IMPORT_FILE, MERGE_FILE } from '../store/actions';

export default {
  name: 'Settings',
  data() {
    return {
      dialog: false,
      error: false,
      errorTitle: '',
      errorMessage: '',
    };
  },
  computed: {
    ...mapGetters({
      settings: GET_SETTINGS,
      userSettings: GET_USER_SETTINGS,
    }),
    settingsArray() {
      return Object.entries(this.settings);
    },
  },
  methods: {
    ...mapActions({
      importFile: IMPORT_FILE,
      mergeFile: MERGE_FILE,
    }),
    async uploadFile(file) {
      this.loader = this.$loading.show();

      const result = await this.importFile(file);

      if (result.success) {
        try {
          this.mergeFile(result.data);
          this.dialog = false;
        } catch (e) {
          this.showError('Error parsing file', e.toString());
        }
      } else {
        this.showError(result.error.title, result.error.message);
      }

      this.loader.hide();
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
  },
};
</script>
