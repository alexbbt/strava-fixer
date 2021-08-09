<template>
  <div class="top-nav">
    <div class="left">
      <HeadsUpDisplay />
    </div>
    <div class="right">
      <CloseFile />
      <v-btn
        icon
        large
        color="black"
        :disabled="canUndo === 0"
        @click="undo"
      >
        <v-icon>mdi-undo</v-icon>
      </v-btn>
      <v-btn
        icon
        large
        color="black"
        :disabled="canRedo === 0"
        @click="redo"
      >
        <v-icon>mdi-redo</v-icon>
      </v-btn>
      <v-btn
        icon
        large
        to="/export"
        color="black"
      >
        <v-icon>mdi-file-export</v-icon>
      </v-btn>
      <Merge />
      <Settings />
    </div>
  </div>
</template>

<script>
import HeadsUpDisplay from './HeadsUpDisplay';
import Settings from './Settings';
import CloseFile from './CloseFile';
import Merge from './Merge';

export default {
  name: 'MapPage',
  components: {
    HeadsUpDisplay,
    Settings,
    CloseFile,
    Merge,
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
