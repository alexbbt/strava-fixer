<template>
  <v-dialog
    v-model="showDialog"
    width="325px"
  >
    <template #activator="{ on }">
      <v-text-field
        :value="prettyTimestamp"
        label="Activity Start Time"
        outlined
        prepend-icon="mdi-calendar"
        readonly
        required
        v-on="on"
      />
    </template>
    <v-tabs
      v-model="tab"
      grow
      background-color="primary"
    >
      <v-tab key="date">
        <v-icon>mdi-calendar</v-icon>
      </v-tab>
      <v-tab key="time">
        <v-icon>mdi-clock-outline</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items
      v-model="tab"
      class="tab-body"
    >
      <v-tab-item key="date">
        <!-- Show original date here -->
        <v-date-picker
          v-model="date"
          required
          full-width
          :show-current="originalDate"
        />
      </v-tab-item>
      <v-tab-item key="time">
        <!-- Show original time here -->
        <v-time-picker
          v-model="time"
          required
          use-seconds
          full-width
          ampm-in-title
          scrollable
        />
      </v-tab-item>
    </v-tabs-items>
    <v-window class="dialog-buttons">
      <v-btn
        text
        color="primary"
        @click="showDialog = false; resetValues()"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="save"
      >
        Save
      </v-btn>
    </v-window>
  </v-dialog>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateTimeModal',
  props: {
    timestamp: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tab: null,
      showDialog: false,
      date: null,
      time: null,
    };
  },
  computed: {
    originalDate() {
      return moment(this.timestamp).format('YYYY-MM-DD');
    },
    originalTime() {
      return moment(this.timestamp).format('HH:mm:ss');
    },
    prettyTimestamp() {
      return moment(this.timestamp).format('llll');
    },
  },
  mounted() {
    this.resetValues();
    window.moment = moment;
  },
  updated() {
    // this.resetValues();
  },
  methods: {
    resetValues() {
      this.date = this.originalDate;
      this.time = this.originalTime;
    },
    save() {
      const modified = moment(`${this.date}T${this.time}`);

      this.$emit('diff', modified.diff(this.timestamp, 'seconds'));
      this.$emit('change', modified.utc().format());

      this.showDialog = false;
    },
  },
};
</script>

<style lang="scss">
.tab-body {
  min-height: 400px;

  .v-picker__title {
    min-height: 102px;
  }

  .v-picker {
    border-radius: 0px !important;
    box-shadow: none !important;
  }
}

.dialog-buttons {
  text-align: right;
  background: white;
}
</style>
