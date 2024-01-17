const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(arr) {
    let titleArray = [];
    for(let i = 0; i < arr.length; i++){
        titleArray.push(arr[i].title);
        
    }
    return titleArray;
};

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
