// this expression will return ANY non-alphanumeric character
const nonAlphaNumeric = /[^a-zA-Z0-9]+/;

exports.cleanString = function(document) {
  return document.split(nonAlphaNumeric);
}
