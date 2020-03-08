import Parser from 'fast-xml-parser';

import { clone, getPoints } from '../utils';

import {
  SET_ORIGINAL_FILE,
  SET_EDITABLE_FILE,
  SET_SELECTED_POINT,
  SET_HOVER_POINT,
  SET_SHOW_BOTTOM_SHEET,
  SET_USER_SETTINGS,
} from './mutations';
import {
  GET_EDITABLE_FILE,
  GET_SELECTED_POINT_INDEX,
  GET_ORIGINAL_FILE,
} from './getters';

export const PARSE_FILE = 'PARSE_FILE';
export const UPDATE_POINT = 'UPDATE_POINT';
export const SET_SELECTED_POINT_INDEX = 'SET_SELECTED_POINT_INDEX';
export const SET_HOVER_POINT_INDEX = 'SET_HOVER_POINT_INDEX';
export const DELETE_SELECTED_POINT = 'DELETE_SELECTED_POINT';
export const SHOW_BOTTOM_SHEET = 'SHOW_BOTTOM_SHEET';
export const HIDE_BOTTOM_SHEET = 'HIDE_BOTTOM_SHEET';
export const PARSE_USER_SETTINGS = 'PARSE_USER_SETTINGS';
export const SAVE_USER_SETTINGS = 'SAVE_USER_SETTINGS';
export const RESET_FILE = 'RESET_FILE';
export const CLOSE_FILE = 'CLOSE_FILE';

const options = {
  ignoreAttributes: false,
};

const actions = {
  [PARSE_FILE]({ commit }, file) {
    const tObj = Parser.getTraversalObj(file, options);
    if (tObj.tagname !== '!xml') {
      throw new Error('Invalid File Format: File is not an XML file');
    }
    if (!tObj.child.gpx) {
      throw new Error('Invalid File Format: File is not a valid GPX file');
    }

    const originalJson = Parser.convertToJson(tObj, options);
    const editableJson = Parser.convertToJson(tObj, options);

    commit(SET_ORIGINAL_FILE, originalJson);
    commit(SET_EDITABLE_FILE, editableJson);
  },
  [UPDATE_POINT](
    { commit, getters },
    {
      index, point, key, value,
    },
  ) {
    const editableJson = clone(getters[GET_EDITABLE_FILE]);
    const selectedPoint = getPoints(editableJson)[index];

    if (!selectedPoint) {
      return;
    }

    if (point) {
      selectedPoint['@_lon'] = `${point[0]}`;
      selectedPoint['@_lat'] = `${point[1]}`;
    } else {
      selectedPoint[key] = value;
    }

    commit(SET_EDITABLE_FILE, editableJson);
  },
  [SET_SELECTED_POINT_INDEX]({ commit }, index) {
    commit(SET_SELECTED_POINT, index);
  },
  [SET_HOVER_POINT_INDEX]({ commit }, index) {
    commit(SET_HOVER_POINT, index);
  },
  [DELETE_SELECTED_POINT]({ commit, getters }) {
    const editableJson = clone(getters[GET_EDITABLE_FILE]);
    const points = getPoints(editableJson);
    const index = getters[GET_SELECTED_POINT_INDEX];

    points.splice(index, 1);

    commit(SET_SELECTED_POINT, Math.min(index, points.length - 1));
    commit(SET_EDITABLE_FILE, editableJson);
  },
  [SHOW_BOTTOM_SHEET]({ commit }) {
    commit(SET_SHOW_BOTTOM_SHEET, true);
  },
  [HIDE_BOTTOM_SHEET]({ commit }) {
    commit(SET_SHOW_BOTTOM_SHEET, false);
  },
  [PARSE_USER_SETTINGS]({ commit }) {
    const settings = window.localStorage.getItem('user-settings');
    commit(SET_USER_SETTINGS, settings ? JSON.parse(settings) : {});
  },
  [SAVE_USER_SETTINGS]({ commit }, settings) {
    window.localStorage.setItem('user-settings', JSON.stringify(settings));
    commit(SET_USER_SETTINGS, settings);
  },
  [RESET_FILE]({ commit, getters }) {
    commit(SET_EDITABLE_FILE, getters[GET_ORIGINAL_FILE]);
  },
  [CLOSE_FILE]({ commit }) {
    commit(SET_EDITABLE_FILE, null);
    commit(SET_ORIGINAL_FILE, null);
  },
};

export default actions;
