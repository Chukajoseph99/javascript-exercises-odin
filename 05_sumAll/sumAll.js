function sumAll(sumStart, sumEnd) {
    let totalSum = 0;
    if(sumStart < 0){
        return "ERROR";}
    if(sumEnd === NaN){
        return "ERROR";}
    
        for(let i = sumStart; i <= sumEnd; i++){
            totalSum += i;
            console.log(totalSum);
    }
    return totalSum;
}

// Do not edit below this line
module.exports = sumAll;