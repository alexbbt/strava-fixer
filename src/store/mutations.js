export const SET_ORIGINAL_FILE = 'SET_ORIGINAL_FILE';
export const SET_EDITABLE_FILE = 'SET_EDITABLE_FILE';
export const SET_SELECTED_POINT = 'SET_SELECTED_POINT';
export const SET_HOVER_POINT = 'SET_HOVER_POINT';
export const SET_SHOW_BOTTOM_SHEET = 'SET_SHOW_BOTTOM_SHEET';
export const SET_USER_SETTINGS = 'SET_USER_SETTINGS';

export const MUTATIONS_TO_IGNORE = [
  SET_ORIGINAL_FILE,
  SET_SELECTED_POINT,
  SET_HOVER_POINT,
  SET_SHOW_BOTTOM_SHEET,
  SET_USER_SETTINGS,
];

const mutations = {
  emptyState(state) {
    state.editableFile = state.originalFile;
  },
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
  [SET_SHOW_BOTTOM_SHEET](state, show) {
    state.showBottomSheet = show;
  },
  [SET_USER_SETTINGS](state, userSettings) {
    state.userSettings = userSettings;
  },
};

export default mutations;
