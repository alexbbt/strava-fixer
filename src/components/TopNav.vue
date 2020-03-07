<template>
  <div class="top-nav">
    <div class="left">
      <HeadsUpDisplay />
    </div>
    <div class="right">
      <v-btn
        icon
        large
        to="/export"
        color="black"
      >
        <v-icon>mdi-file-export</v-icon>
      </v-btn>
      <Settings />
    </div>
  </div>
</template>

<script>
import HeadsUpDisplay from './HeadsUpDisplay';
import Settings from './Settings';

export default {
  name: 'MapPage',
  components: {
    HeadsUpDisplay,
    Settings,
  },
};
</script>

<style lang="scss" scoped>
.top-nav {

  .left {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0px;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0px;
  }
}
</style>
