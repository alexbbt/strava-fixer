import moment from 'moment';

/* eslint-disable import/prefer-default-export */
export function distanceBetweenPoints(a, b) {
  return Math.sqrt(
    ((a[0] - b[0]) ** 2)
      + ((a[1] - b[1]) ** 2),
  );
}

export function clone(obj) {
  return JSON.parse(
    JSON.stringify(
      obj,
    ),
  );
}

export function getPoints(gpxFile) {
  return gpxFile.gpx.trk.trkseg.trkpt;
}

export function appendPoints(a, b) {
  return [...getPoints(a), ...getPoints(b)];
}

export function parseCoordinates(point) {
  if (point) {
    return [
      parseFloat(point['@_lon'], 10),
      parseFloat(point['@_lat'], 10),
    ];
  }
  return null;
}

export function speedToColor(speed, min, max) {
  const fastestColor = 0x008800;
  const slowestColor = 0x880000;

  const speedPercentage = (speed - min) / (max - min);
  const colorDiff = fastestColor - slowestColor;

  const color = slowestColor + (colorDiff * speedPercentage);

  return Math.round(color).toString(16);
}

export function distanceFromAverage(average, speed) {
  return (speed * 100) / average;
}

export function shiftTimeStamps(gpxFile, difference) {
  const clonedGpxFile = clone(gpxFile);

  function shiftTime(timestamp) {
    return moment(timestamp)
      .add(difference, 'seconds')
      .utc()
      .format();
  }

  // eslint-disable-next-line no-param-reassign
  clonedGpxFile.gpx.metadata.time = shiftTime(clonedGpxFile.gpx.metadata.time);

  getPoints(clonedGpxFile)
    .forEach((point) => {
      // eslint-disable-next-line no-param-reassign
      point.time = shiftTime(point.time);
    });

  return clonedGpxFile;
}
