import Parser from 'fast-xml-parser';

import { SET_ORIGINAL_FILE } from './mutations';

export const PARSE_FILE = 'PARSE_FILE';

const options = {
  ignoreAttributes: false,
};

const actions = {
  [PARSE_FILE]({ commit }, file) {
    const tObj = Parser.getTraversalObj(file, options);
    const jsonObj = Parser.convertToJson(tObj, options);

    commit(SET_ORIGINAL_FILE, jsonObj);
  },
};

export default actions;
