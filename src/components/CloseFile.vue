<template>
  <span>
    <v-speed-dial
      v-model="fab"
      direction="bottom"
      transition="slide-y-transition"
      class="fab"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="black"
          icon
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </template>
      <FABTooltipModel
        fab-color="orange"
        fab-icon="mdi-refresh"
        fab-tooltip="Reset all changes"
        model-title="Reset?"
        model-text="This will reset all of your changes."
        confirm-color="orange"
        confirm-text="Reset"
        @cancel="fab = false;"
        @confirm="fab = false; resetFile()"
      />
      <FABTooltipModel
        fab-color="error"
        fab-icon="mdi-close"
        fab-tooltip="Close GPX File"
        model-title="Close File?"
        model-text="
          This will take you back to the upload page.
          No Changes will be saved. Tthis cannot be undone.
        "
        confirm-color="error"
        confirm-text="Close"
        @cancel="fab = false;"
        @confirm="fab = false; goToUploadPage(); closeFile();"
      />
    </v-speed-dial>
  </span>
</template>

<script>
import { mapActions } from 'vuex';
import { RESET_FILE, CLOSE_FILE } from '../store/actions';

import FABTooltipModel from './FABTooltipModel';

export default {
  name: 'Settings',
  components: {
    FABTooltipModel,
  },
  data() {
    return {
      fab: false,
      reset: false,
      close: false,
    };
  },
  methods: {
    ...mapActions({
      resetFile: RESET_FILE,
      closeFile: CLOSE_FILE,
    }),
    goToUploadPage() {
      this.$router.push('/upload');
    },
  },
};
</script>

<style lang="scss" scoped>
.fab {
  display: inline;
}
</style>
