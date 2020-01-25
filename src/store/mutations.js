export const SET_ORIGINAL_FILE = 'SET_ORIGINAL_FILE';

const mutations = {
  [SET_ORIGINAL_FILE](state, file) {
    state.originalFile = file;
  },
};

export default mutations;
