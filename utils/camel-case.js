// swiped from https://gist.github.com/jonlabelle/5375315

/**
 * "Safer" String.toLowerCase()
 */
function lowerCase(str) {
  return str.toLowerCase();
}

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
  return str.toUpperCase();
}

function removeNonWord(str) {
  return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
}

function toCamelCase(str) {
  str = removeNonWord(str)
    .replace(/\-/g, " ") //convert all hyphens to spaces
    .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
    .replace(/\s+/g, "") //remove spaces
    .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
  return str
}

module.exports = toCamelCase