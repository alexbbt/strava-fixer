<template>
  <v-dialog
    v-model="dialog"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        rounded
        color="primary"
        class="button"
        :disabled="disabled"
        v-on="on"
      >
        Export
      </v-btn>
    </template>

    <v-card flat>
      <v-card-title
        primary-title
      >
        Choose the file name
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
        <v-form v-model="valid">
          <v-text-field
            v-model="name"
            label="File Name"
            outlined
            required
            spellcheck="false"
            :rules="[
              v => !!v || 'File Name is required',
            ]"
          />
        </v-form>
        <v-spacer />
        <v-btn
          color="primary"
          :disabled="!valid"
          @click="dialog = false; submit()"
        >
          Download
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_FILE_NAME } from '../store/getters';

export default {
  name: 'Settings',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
      valid: true,
      name: null,
    };
  },
  computed: {
    ...mapGetters({
      generatedFileName: GET_FILE_NAME,
    }),
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.name = this.generatedFileName;
      }
    },
  },
  methods: {
    submit() {
      this.$emit('submit', this.name);
    },
  },
};
</script>
