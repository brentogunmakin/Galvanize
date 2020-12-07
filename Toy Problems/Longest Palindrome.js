var longestPalindrome = function (string) {
let arrOfString = [];
arrOfString = string.split('');
arrOfString = arrOfString.filter(item => item != ' ');
return arrOfString;
};



console.log(longestPalindrome('Hello World'))