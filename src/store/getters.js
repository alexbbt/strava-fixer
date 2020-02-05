import Parser from 'fast-xml-parser';
import XMLFormatter from 'xml-formatter';
import moment from 'moment';

import {
  getPoints,
  distanceBetweenPoints,
  parseCoordinates,
} from '../utils';

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
export const GET_GEO_JSON_LAYER = 'GET_GEO_JSON_LAYER';
export const GET_COLOR_GRADIENT = 'GET_COLOR_GRADIENT';
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
        .map(point => parseCoordinates(point));
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
    lineMetrics: true,
    data: {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: getters[GET_COORDINATES](state),
      },
    },
  }),
  [GET_GEO_JSON_LAYER]: state => ({
    id: 'route',
    type: 'line',
    source: 'route',
    paint: {
      'line-width': 4,
      // 'line-gradient' must be specified using an expression
      // with the special 'line-progress' property
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        ...getters[GET_COLOR_GRADIENT](state),
      ],
    },
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
  }),
  [GET_COLOR_GRADIENT]: (state) => {
    const points = getters[GET_POINTS](state);

    if (!points || points.length === 0) {
      return [];
    }

    let totalDistance = 0;
    let totalDuration = 0;
    let minSpeed = 999;
    let maxSpeed = 0;
    let stats = [0];

    for (let index = 0; index < points.length - 1; index += 1) {
      const current = points[index];
      const next = points[index + 1];
      const distance = distanceBetweenPoints(
        parseCoordinates(current),
        parseCoordinates(next),
      );

      const duration = moment(next.time).diff(moment(current.time));
      const speed = distance / duration * 10000000;

      totalDistance += distance;
      totalDuration += duration;
      minSpeed = Math.min(minSpeed, speed);
      maxSpeed = Math.max(maxSpeed, speed);

      // Push the speed and current distance
      stats.push(speed, totalDistance);
    }

    const averageSpeed = totalDistance / totalDuration * 10000000;
    const bottom = ((averageSpeed - minSpeed) / 2) + minSpeed;
    const top = ((maxSpeed - averageSpeed) / 2) + maxSpeed;
    console.log(minSpeed, bottom, averageSpeed, top, maxSpeed, averageSpeed);

    // console.log(minSpeed - averageSpeed, maxSpeed - averageSpeed, averageSpeed);
    // const minSpeedScaleFactor = 100 / (minSpeed - averageSpeed);
    // const maxSpeedScaleFactor = 100 / (maxSpeed - averageSpeed);

    // console.log(minSpeedScaleFactor, maxSpeedScaleFactor);

    // const speeds = [];

    const indiesToRemove = [];

    stats = stats.map((stat, index) => {
      if (index % 2 === 0) {
        const distanceThroughRun = stat;

        if (distanceThroughRun === stats[index - 2]) {
          indiesToRemove.push(index);
        }
        // Calculate percentage
        return (distanceThroughRun / totalDistance) * 100;
      }
      const speed = stat;
      // Calculate color from speed
      // let speedFromAverage;
      // if (speed < averageSpeed) {
      //   speedFromAverage = -1 * (speed - averageSpeed) / (minSpeed - averageSpeed);
      // } else {
      //   speedFromAverage = (speed - averageSpeed) / (maxSpeed - averageSpeed);
      // }
      // // speedFromAverage **= 3;
      // speeds.push(speedFromAverage);
      // if (index < 10) {
      //   console.log(
      //     speed,
      //     speedFromAverage,
      //     `#${gradient.colourAt(speedFromAverage)}`,
      //     // scale(speedFromAverage).hex(),
      //   );
      // }
      if (speed < bottom) {
        return 'red';
      }
      if (speed < top) {
        return 'yellow';
      }
      return 'green';
      // return scale(speed).hex();
      // return `#${gradient.colourAt(speedFromAverage)}`;
    });

    indiesToRemove.reverse().forEach((index) => {
      stats.splice(index, 2);
    });

    // console.log(Math.min(...speeds), Math.max(...speeds));

    // remove `100%` from end;
    stats.pop();

    console.log(stats);

    return stats;
  },
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
