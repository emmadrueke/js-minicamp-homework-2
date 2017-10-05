// Do not change any of the function names

function getBiggest(x, y) {
  if ( x > y ) {
    return x;
  } else if (y > x){
      return y;
  } else {
      return x || y;
  }

  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}


function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if(language === 'English') {
      return 'Hello!';
  } else if (language === 'Spanish') {
      return 'Hola!';
  } else {
      return 'Hello!';
  }
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  if (num === 10){
    return true;
  } else if (num === 5){
      return true;
  } else{
      return false;
  }
  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {
  if (20 < num && num < 50){
    return true;
  } else {
      return false;
  }
  // return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  if (num - Math.floor(num) === 0){
    return true;
  } else{
      return false;
  }
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
 
  if (num % 3 ===0 && num % 5 === 0){
    return 'fizzbuzz';
  } else if (num % 5 === 0){
      return 'buzz';
  } else if ( num % 3 === 0){
      return 'fizz';
  } else {
      return num;
  }
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  if (num % 2 === 0){
    return false;
  } else if (num === 0 || num === 1){
     return false;
  }
  for (var i = 3; i * i <= num; i += 2){
    if (num % i === 0){
      return false;
    }
  } return true;
} 

function returnFirst(arr) {
  return arr[0];
  // return the first item from the array
}

function returnLast(arr) {
  return arr[arr.length-1];
  // return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;

  // return the length of the array
}

function incrementByOne(arr) {
  for (var i=0; i < arr.length ; i++){
    arr[i] += 1;
  }
  return arr;
    

  // arr is an array of integers  
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  var sentence = words.join(' ');
  return sentence;
}

function contains(arr, item) {
  for(var i = 0; i < arr.length; i++){
    if (arr[i] === item){
      return true;
    }
  }
  return false;

  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];

  }return sum;

  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  var sum = 0;
  for (var i = 0; i < testScores.length; i++){
    sum = sum + testScores[i];

  }
  return sum/testScores.length;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  return Math.max.apply(null, numbers);
  // numbers is an array of integers
  // return the largest integer
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
