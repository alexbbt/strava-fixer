<template>
  <v-dialog
    v-model="open"
  >
    <template #activator="{ on: dialog }">
      <v-tooltip right>
        <template #activator="{ on: tooltip }">
          <v-btn
            fab
            dark
            small
            :color="fabColor"
            v-on="{ ...tooltip, ...dialog }"
          >
            <v-icon>{{ fabIcon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ fabTooltip }}</span>
      </v-tooltip>
    </template>

    <v-card flat>
      <v-card-title
        primary-title
      >
        {{ modelTitle }}
        <v-spacer />
      </v-card-title>

      <v-card-text>
        {{ modelText }}
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="default"
          text
          @click="open = false; $emit('cancel')"
        >
          Cancel
        </v-btn>
        <v-btn
          dark
          :color="confirmColor"
          @click="open = false; $emit('confirm')"
        >
          {{ confirmText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'FABTooltipModel',
  props: {
    fabColor: {
      type: String,
      required: true,
    },
    fabIcon: {
      type: String,
      required: true,
    },
    fabTooltip: {
      type: String,
      required: true,
    },
    modelTitle: {
      type: String,
      required: true,
    },
    modelText: {
      type: String,
      required: true,
    },
    confirmColor: {
      type: String,
      required: true,
    },
    confirmText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>
