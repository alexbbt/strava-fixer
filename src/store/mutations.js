export const SET_ORIGINAL_FILE = 'SET_ORIGINAL_FILE';
export const SET_EDITABLE_FILE = 'SET_EDITABLE_FILE';
export const SET_CURRENT_POINT = 'SET_CURRENT_POINT';

const mutations = {
  [SET_ORIGINAL_FILE](state, file) {
    state.originalFile = file;
  },
  [SET_EDITABLE_FILE](state, file) {
    state.editableFile = file;
  },
  [SET_CURRENT_POINT](state, index) {
    state.currentPoint = parseInt(index, 10);
  },
};

export default mutations;
