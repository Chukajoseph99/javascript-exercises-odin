function removeFromArray(arr, ...theArgs) {
  for (let i = 0; i < theArgs.length; i++) {
    let arrIndex = arr.indexOf(theArgs[i]);
    if (arr.includes(theArgs[i])) {
      arr.splice(arrIndex, 1);
    }
  }
  return arr;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
