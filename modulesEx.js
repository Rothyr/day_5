
///*  MODULES EXERCISE  *///


//  NON ACCESSIBLE AREA  //

var numbers = []

function pushToNumbers(input) {
  numbers.push(input);
}


function sortedNumbers () {
  numbers.sort(function (a , b) {
  return a - b
})
  return numbers;
};


// ACCESSIBLE AREA  //


module.exports = {
  pushToNumbers: function (input) {
    numbers.push(input)
  },
  sortedNumber: function () {
    var sorted = sortedNumbers();
    console.log(sorted);
  }
};

