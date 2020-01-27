import Parser from 'fast-xml-parser';

import { clone } from '../utils';

import { SET_ORIGINAL_FILE, SET_EDITABLE_FILE } from './mutations';
import { GET_EDITABLE_FILE } from './getters';

export const PARSE_FILE = 'PARSE_FILE';
export const UPDATE_POINT = 'UPDATE_POINT';

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
  [UPDATE_POINT]({ commit, getters }, { point, index }) {
    const editableJson = clone(getters[GET_EDITABLE_FILE]);
    const currentPoint = editableJson.gpx.trk.trkseg.trkpt[index];

    currentPoint['@_lon'] = `${point[0]}`;
    currentPoint['@_lat'] = `${point[1]}`;

    commit(SET_EDITABLE_FILE, editableJson);
  },
};

export default actions;
