// The intent of this file is to reverse
// the string using built in functions.
function reverse(str) {
  const result = str.split('').reverse().join('');
  return result;
}
module.exports = reverse;
