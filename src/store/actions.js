import Parser from 'fast-xml-parser';

import { clone, getPoints } from '../utils';

import {
  SET_ORIGINAL_FILE,
  SET_EDITABLE_FILE,
  SET_CURRENT_POINT,
} from './mutations';
import { GET_EDITABLE_FILE } from './getters';

export const PARSE_FILE = 'PARSE_FILE';
export const UPDATE_POINT = 'UPDATE_POINT';
export const SET_CURRENT_POINT_INDEX = 'SET_CURRENT_POINT_INDEX';

const options = {
  ignoreAttributes: false,
};

const actions = {
  [PARSE_FILE]({ commit }, file) {
    const tObj = Parser.getTraversalObj(file, options);
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
    const currentPoint = getPoints(editableJson)[index];

    if (point) {
      currentPoint['@_lon'] = `${point[0]}`;
      currentPoint['@_lat'] = `${point[1]}`;
    } else {
      currentPoint[key] = value;
    }

    commit(SET_EDITABLE_FILE, editableJson);
  },
  [SET_CURRENT_POINT_INDEX]({ commit }, index) {
    commit(SET_CURRENT_POINT, index);
  },
};

export default actions;
