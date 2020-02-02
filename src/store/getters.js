import Parser from 'fast-xml-parser';
import XMLFormatter from 'xml-formatter';

import { getPoints } from '../utils';

export const GET_ORIGINAL_FILE = 'GET_ORIGINAL_FILE';
export const GET_EDITABLE_FILE = 'GET_EDITABLE_FILE';
export const GET_ACTIVITY_NAME = 'GET_ACTIVITY_NAME';
export const GET_SELECTED_POINT = 'GET_SELECTED_POINT';
export const GET_SELECTED_POINT_INDEX = 'GET_SELECTED_POINT_INDEX';
export const GET_HOVER_POINT = 'GET_HOVER_POINT';
export const GET_HOVER_POINT_INDEX = 'GET_HOVER_POINT_INDEX';
export const GET_POINTS = 'GET_POINTS';
export const GET_COORDINATES = 'GET_COORDINATES';
export const GET_CENTER_POINT = 'GET_CENTER_POINT';
export const GET_GEO_JSON = 'GET_GEO_JSON';
export const GET_XML_STRING = 'GET_XML_STRING';

const getters = {
  [GET_ORIGINAL_FILE]: state => state.originalFile,
  [GET_EDITABLE_FILE]: state => state.editableFile,
  [GET_SELECTED_POINT_INDEX]: state => state.selectedPoint,
  [GET_SELECTED_POINT]: state => getters[GET_POINTS](state)[state.selectedPoint],
  [GET_HOVER_POINT_INDEX]: state => state.hoverPoint,
  [GET_HOVER_POINT]: state => getters[GET_POINTS](state)[state.hoverPoint],
  [GET_ACTIVITY_NAME]: (state) => {
    if (!state.originalFile) {
      return '';
    }
    return state.originalFile.gpx.trk.name.replace(/\s/, '_');
  },
  [GET_COORDINATES]: (state) => {
    if (state.editableFile) {
      return getPoints(state.editableFile)
        .map(point => point && [
          parseFloat(point['@_lon']),
          parseFloat(point['@_lat']),
        ]);
    }
    return false;
  },
  [GET_POINTS]: (state) => {
    if (state.editableFile) {
      return getPoints(state.editableFile);
    }
    return false;
  },
  [GET_CENTER_POINT]: (state) => {
    const points = getters[GET_COORDINATES](state);
    const { length } = points;
    return points.reduce((center, p, i) => {
      /* eslint-disable no-param-reassign */
      center[0] += p[0];
      center[1] += p[1];

      if (i === length - 1) {
        center[0] /= length;
        center[1] /= length;
      }

      return center;
      /* eslint-enable no-param-reassign */
    }, [0, 0]);
  },
  [GET_GEO_JSON]: state => ({
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: getters[GET_COORDINATES](state),
      },
    },
  }),
  [GET_XML_STRING]: (state) => {
    // eslint-disable-next-line new-cap
    const parser = new Parser.j2xParser({
      ignoreAttributes: false,
    });
    const xml = parser.parse(state.editableFile);

    return XMLFormatter(`<?xml version="1.0" encoding="UTF-8"?>${xml}`, {
      collapseContent: true,
      indentation: ' ',
    });
  },
};

export default getters;
