const largestProductOfThree = (array) => {
  // TODO: solution here
  let array1 = array;
  let high3 = [];
  for (let i = 0; i < 3; i++) {
    let value = Math.max(...array1);
    high3.push(value);
    array1.splice(array1.indexOf(value), 1);
  }
  return multiply(high3);

  function multiply(array) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
      sum = sum * array[i];
    }
    /*for (numbers of array) {
            sum = sum * numbers;
        }
        */
    return sum;
  }
};

let array1 = [ 2, 13, 7, 3, 5, 11 ];

console.log(largestProductOfThree(array1));
