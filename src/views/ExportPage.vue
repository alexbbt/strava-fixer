<template>
  <div class="upload">
    <h1>Export Modified File</h1>
    <div class="data">
      <p
        v-for="row in diff"
        :key="row.name"
      >
        <strong>{{ row.name }}:</strong> {{ row.value }}
      </p>
    </div>
    <MetaDataForm v-model="formIsValid" />
    <v-btn
      outlined
      rounded
      color="primary"
      class="button"
      @click="back"
    >
      Go Back
    </v-btn>
    <ExportFileModal
      :disabled="!formIsValid"
      @submit="exportFile"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import diff from 'diff-arrays-of-objects';

import MetaDataForm from '../components/MetaDataForm';
import ExportFileModal from '../components/ExportFileModal';

import {
  GET_EDITABLE_FILE,
  GET_TIME_SHIFTED_ORIGINAL_FILE,
  GET_XML_STRING,
} from '../store/getters';
import { getPoints, clone } from '../utils';

export default {
  name: 'ExportPage',
  components: {
    MetaDataForm,
    ExportFileModal,
  },
  data() {
    return {
      formIsValid: false,
    };
  },
  computed: {
    ...mapGetters({
      original: GET_TIME_SHIFTED_ORIGINAL_FILE,
      modified: GET_EDITABLE_FILE,
      xml: GET_XML_STRING,
    }),
    diff() {
      if (!this.original || !this.modified) {
        return null;
      }

      const originalPoints = clone(getPoints(this.original));
      const changedValues = clone(getPoints(this.modified));

      const changes = diff(originalPoints, changedValues, 'time');

      return [
        {
          name: 'Total Changed',
          value: originalPoints.length - changes.same.length,
        },
        {
          name: 'Updated',
          value: changes.updated.length + changes.added.length,
        },
        {
          name: 'Removed',
          value: changes.removed.length - changes.added.length,
        },
      ];
    },
  },
  mounted() {
    if (!this.original) {
      this.$router.push('upload');
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    exportFile(fileName) {
      const element = document.createElement('a');
      element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(this.xml)}`);
      element.setAttribute('download', fileName);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload {
    text-align: center;

    .data {
      max-width: 200px;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      margin-bottom: 16px;

      p {
        margin-bottom: 0;
      }
    }

    .button {
      margin: 2px;
    }
  }
</style>
