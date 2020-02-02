export const SET_ORIGINAL_FILE = 'SET_ORIGINAL_FILE';
export const SET_EDITABLE_FILE = 'SET_EDITABLE_FILE';
export const SET_SELECTED_POINT = 'SET_SELECTED_POINT';
export const SET_HOVER_POINT = 'SET_HOVER_POINT';

const mutations = {
  [SET_ORIGINAL_FILE](state, file) {
    state.originalFile = file;
  },
  [SET_EDITABLE_FILE](state, file) {
    state.editableFile = file;
  },
  [SET_SELECTED_POINT](state, index) {
    state.selectedPoint = parseInt(index, 10);
  },
  [SET_HOVER_POINT](state, index) {
    state.hoverPoint = parseInt(index, 10);
  },
};

export default mutations;
