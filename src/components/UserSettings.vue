<template>
  <v-dialog
    v-model="dialog"
  >
    <template #activator="{ on }">
      <v-btn
        icon
        large
        class="settings"
        color="black"
        v-on="on"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>

    <v-card flat>
      <v-card-title
        primary-title
      >
        Settings
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
        <v-switch
          v-for="setting in settingsArray"
          :key="setting[0]"
          v-model="setting[1]"
          :label="getLabel(setting[0])"
          @change="updateSettings(setting[0], $event)"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_SETTINGS, GET_USER_SETTINGS } from '../store/getters';
import { SAVE_USER_SETTINGS } from '../store/actions';
import { clone } from '../utils';

export default {
  name: 'UserSettings',
  data() {
    return {
      dialog: false,
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
      saveSettings: SAVE_USER_SETTINGS,
    }),
    updateSettings(name, value) {
      const settings = clone(this.userSettings);
      settings[name] = Boolean(value);
      this.saveSettings(settings);
    },
    getLabel(key) {
      const result = key.replace(/([A-Z])/g, ' $1');
      return result.charAt(0).toUpperCase() + result.slice(1);
    },
  },
};
</script>
