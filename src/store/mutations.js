export const SET_ORIGINAL_FILE = 'SET_ORIGINAL_FILE';
export const SET_EDITABLE_FILE = 'SET_EDITABLE_FILE';

const mutations = {
  [SET_ORIGINAL_FILE](state, file) {
    state.originalFile = file;
  },
  [SET_EDITABLE_FILE](state, file) {
    state.editableFile = file;
  },
};

export default mutations;
