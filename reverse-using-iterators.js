// The intent of this file is to reverse the string using iterators (for, foreach)

const reverse = (str) => {
  let i = str.length - 1;
  let result = '';
  for (i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
};

module.exports = reverse;
