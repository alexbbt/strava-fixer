<template>
  <v-form @input="$emit('input', $event)">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            :value="activityName"
            label="Activity Name"
            outlined
            required
            :rules="[
              v => !!v || 'Activity Name is required',
            ]"
            @change="updateActivityName"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <DateTimeModal
            :timestamp="activityTimestamp"
            @diff="shiftTime"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import DateTimeModal from './DateTimeModal';

import { GET_EDITABLE_FILE, GET_ACTIVITY_NAME, GET_ACTIVITY_TIMESTAMP } from '../store/getters';
import { UPDATE_ACTIVITY_NAME, SHIFT_TIME } from '../store/actions';

export default {
  name: 'MetaDataForm',
  components: {
    DateTimeModal,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      editableFile: GET_EDITABLE_FILE,
      activityName: GET_ACTIVITY_NAME,
      activityTimestamp: GET_ACTIVITY_TIMESTAMP,
    }),
  },
  mounted() {
    window.editableFile = this.editableFile;
  },
  methods: {
    ...mapActions({
      updateActivityName: UPDATE_ACTIVITY_NAME,
      shiftTime: SHIFT_TIME,
    }),
    log(...args) {
      console.log(...args);
    },
  },
};
</script>

<style lang="scss">
</style>
