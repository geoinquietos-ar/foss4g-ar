module.exports = function columnWidth(columns) {
  let width = 100;
  if (typeof columns === 'number' && columns > 0) {
    width /= columns;
  }
  return `${width}%`;
};
