import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedPoint: -1,
    hoverPoint: 0,
    originalFile: '',
    editableFile: '',
  },
  mutations,
  actions,
  getters,
});
