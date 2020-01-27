export const GET_ORIGINAL_FILE = 'GET_ORIGINAL_FILE';
export const GET_EDITABLE_FILE = 'GET_EDITABLE_FILE';
export const GET_POINTS = 'GET_POINTS';
export const GET_CENTER_POINT = 'GET_CENTER_POINT';
export const GET_GEO_JSON = 'GET_GEO_JSON';

const getters = {
  [GET_ORIGINAL_FILE]: state => state.originalFile,
  [GET_EDITABLE_FILE]: state => state.editableFile,
  [GET_POINTS]: (state) => {
    if (state.editableFile) {
      return state.editableFile.gpx.trk.trkseg.trkpt
        .map(point => [
          parseFloat(point['@_lon']),
          parseFloat(point['@_lat']),
        ]);
    }
    return false;
  },
  [GET_CENTER_POINT]: (state) => {
    const points = getters[GET_POINTS](state);
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
        coordinates: getters[GET_POINTS](state),
      },
    },
  }),
};

export default getters;
