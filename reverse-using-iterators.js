// The intent of this file is to reverse the string using iterators (for, foreach)

const reverse = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
};

module.exports = reverse;
