const repeatString = function(string, num) {
    if (num === -1){
        return "ERROR";
    }
    let i;
    let word = "";
    for(i = 0; i < num; i++){
    word += string;
    }  
    return word;
};

console.log(repeatString("hey",3));

// Do not edit below this line
module.exports = repeatString;
