module.exports = function ellipsis(text) {
  if (text && text.length > 100) {
    return `${text.substring(0, 100)}...`;
  }
  return text;
};
