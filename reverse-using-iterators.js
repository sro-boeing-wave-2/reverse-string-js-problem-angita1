// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (str) => {
    var reverseString=str.split("").reverse().join("");
    return reverseString;
};

module.exports = reverse;


