import Parser from 'fast-xml-parser';
import XMLFormatter from 'xml-formatter';
import moment from 'moment';
import Rainbow from 'rainbowvis.js';

import {
  getPoints,
  distanceBetweenPoints,
  parseCoordinates,
  clone,
} from '../utils';

const DEFAULT_SETTINGS = {
  showTime: true,
  showElevation: true,
  showLatitude: true,
  showLongitude: true,
};

const NAME_MAP = {
  hr: 'Heart Rate',
};

const ICON_MAP = {
  hr: 'mdi-heart-pulse',
};

function GET_EXTRAS(point) {
  if (!point || !point.extensions) {
    return [];
  }

  return Object.values(point.extensions)
    .reduce((extras, extension) => {
      Object.entries(extension)
        .forEach(([key, value]) => {
          const name = key.replace('gpxtpx:', '');
          const showKey = `show ${NAME_MAP[name] || name}`
            .replace(/\s(.)/g, a => a.toUpperCase())
            .replace(/\s/g, '')
            .replace(/^(.)/, b => b.toLowerCase());

          extras.push({
            showKey,
            name: NAME_MAP[name] || name,
            icon: ICON_MAP[name],
            value,
          });
        });
      return extras;
    }, []);
}

export const GET_ORIGINAL_FILE = 'GET_ORIGINAL_FILE';
export const GET_EDITABLE_FILE = 'GET_EDITABLE_FILE';
export const GET_SHOW_BOTTOM_SHEET = 'GET_SHOW_BOTTOM_SHEET';
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
export const GET_COLOR_FEATURES = 'GET_COLOR_FEATURES';
export const GET_XML_STRING = 'GET_XML_STRING';
export const GET_USER_SETTINGS = 'GET_USER_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';
export const GET_SELECTED_POINT_EXTRAS = 'GET_SELECTED_POINT_EXTRAS';

const getters = {
  [GET_ORIGINAL_FILE]: state => state.originalFile,
  [GET_EDITABLE_FILE]: state => state.editableFile,
  [GET_SHOW_BOTTOM_SHEET]: state => state.showBottomSheet,
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
      type: 'FeatureCollection',
      features: getters[GET_COLOR_FEATURES](state),
    },
  }),
  [GET_GEO_JSON_LAYER]: () => ({
    id: 'route',
    type: 'line',
    source: 'route',
    paint: {
      'line-width': 6,
      'line-color': ['get', 'color'],
    },
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
  }),
  [GET_COLOR_FEATURES]: (state) => {
    const points = getters[GET_POINTS](state);

    if (!points || points.length === 0) {
      return [];
    }

    let totalDistance = 0;
    let totalDuration = 0;
    let minSpeed = 999;
    let maxSpeed = 0;
    const speeds = [];

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
      speeds.push(speed);
    }

    const averageSpeed = totalDistance / totalDuration * 10000000;

    const gradient = new Rainbow();
    gradient.setNumberRange(-1, 1);
    gradient.setSpectrum('red', 'yellow', 'green');

    const features = [];
    let lastFeature;

    speeds.forEach((speed, index) => {
      // Calculate color from speed
      let speedFromAverage;
      if (speed < averageSpeed) {
        speedFromAverage = -1 * (speed - averageSpeed) / (minSpeed - averageSpeed);
      } else {
        speedFromAverage = (speed - averageSpeed) / (maxSpeed - averageSpeed);
      }

      const color = `#${gradient.colourAt(speedFromAverage)}`;

      if (!lastFeature || lastFeature.properties.color !== color) {
        if (lastFeature) {
          // Push current as last of old feature
          const cords = parseCoordinates(points[index]);
          lastFeature.geometry.coordinates.push(cords);
        }

        // Make new feature
        lastFeature = {
          type: 'Feature',
          properties: {
            color,
          },
          geometry: {
            type: 'LineString',
            coordinates: [
            ],
          },
        };
        features.push(lastFeature);

        // Then push same point onto new feature.
      }

      // Push point on to existing feature.
      const cords = parseCoordinates(points[index]);
      lastFeature.geometry.coordinates.push(cords);
    });

    // Push last point onto end of last feature.
    const lastPoint = points[points.length - 1];
    const cords = parseCoordinates(lastPoint);
    lastFeature.geometry.coordinates.push(cords);

    return features;
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
  [GET_USER_SETTINGS]: state => clone(state.userSettings),
  [GET_SETTINGS]: state => ({
    ...DEFAULT_SETTINGS,
    ...GET_EXTRAS(getters[GET_POINTS](state)[0])
      .reduce((map, current) => {
        // eslint-disable-next-line no-param-reassign
        map[current.showKey] = true;
        return map;
      }, {}),
    ...clone(state.userSettings),
  }),
  [GET_SELECTED_POINT_EXTRAS]: (state) => {
    const point = getters[GET_POINTS](state)[state.selectedPoint];

    return GET_EXTRAS(point);
  },
};

export default getters;
