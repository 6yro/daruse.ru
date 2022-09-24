const myArray = [2, 4, 6];

function checkEven(array) {
  for (const key in array) {
    if (array[key] % 2 != 0) {
      return true;
    }
  }
  return false;
}

console.log(checkEven(myArray));
