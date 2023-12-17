function reverseString(string){
    let array = string.split("");
    let myArray = [];
    let i;
// console.log(array);
    for(i = 0; i < string.length; i++){
        myArray.unshift(array[i]);
    }  
        return(myArray.join(""));

}

// Do not edit below this line
module.exports = reverseString;
// console.log(reverseString("Hello"))