import Vue from 'vue';
import Vuex from 'vuex';
import VuexUndoRedo from 'vuex-undo-redo';
import createPersistedState from 'vuex-persistedstate';

import actions from './actions';
import getters from './getters';
import mutations, { MUTATIONS_TO_IGNORE } from './mutations';

Vue.use(Vuex);
Vue.use(VuexUndoRedo, {
  ignoreMutations: MUTATIONS_TO_IGNORE,
});

export default new Vuex.Store({
  state: {
    selectedPoint: -1,
    hoverPoint: 0,
    originalFile: null,
    editableFile: null,
    showBottomSheet: false,
    userSettings: {},
  },
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
});
