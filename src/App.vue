<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import { PARSE_USER_SETTINGS } from './store/actions';

export default {
  name: 'App',
  mounted() {
    this.parseSettings();
  },
  methods: {
    ...mapActions({
      parseSettings: PARSE_USER_SETTINGS,
    }),
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden;
  touch-action: none;
  -ms-touch-action: none;
}
</style>
