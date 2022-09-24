const myArray = [2, 4, 6];

function checkEven(array) {
  for (const key in array) {
    if (array[key] % 2 != 0) {
      return false;
    }
  }
  return true;
}

console.log(checkEven(myArray));
