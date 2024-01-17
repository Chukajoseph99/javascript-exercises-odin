const palindromes = function (str) {
    let string = str.toLowerCase().replace(/[\W]/g, "");

    let reverseStr = "";
    for(let i = string.length - 1; i >= 0; i--){
        reverseStr += string[i];
    }
    if(string === reverseStr){
        return true;
    }else{
        return false;
    }
};
console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
