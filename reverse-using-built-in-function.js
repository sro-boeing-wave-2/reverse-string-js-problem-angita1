// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  var i;
  var result="";
  for(i=str.length-1;i>=0;i--){
      result+=str[i];
  }
  return result;
};

module.exports = reverse;
 //Here the built-in function "split" separates all the characters in the 
                                                  //string and the "reverse" function reverse all the characters
                                                  //the reversed characters are then comblined using "join" funtion.