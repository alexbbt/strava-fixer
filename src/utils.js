/* eslint-disable import/prefer-default-export */
export function distanceBetweenPoints(a, b) {
  return (
    ((a[0] - b[0]) ** 2)
      + ((a[1] - b[1]) ** 2)
  );
}

export function clone(obj) {
  return JSON.parse(
    JSON.stringify(
      obj,
    ),
  );
}
