const fibonacci = function(n) {
    let fibArray = [0, 1];
    for(let i = 2; i < n; i++){   
        let nextItem = fibArray[i - 1] + fibArray[i - 2]
        fibArray.push(nextItem);
        // fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
    }
    return fibArray;
};
console.log(fibonacci(7))
// Do not edit below this line
module.exports = fibonacci;
