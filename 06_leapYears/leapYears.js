const leapYears = function(year) {
    if(year % 400 === 0 || year % 4 === 0 ){
        return true;
    }
    if(year % 100 === 0 ){
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;


leapYears
✓ works with non century years (11 ms)
✕ works with non century years (31 ms)
✓ works with ridiculously futuristic non century years (2 ms)
✕ works with century years (3 ms)
✓ works with century years (2 ms)
✕ works with century years (3 ms)