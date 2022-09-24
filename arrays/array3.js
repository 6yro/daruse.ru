const myArray = [1, 2, 5, 12, 15, 21];

function multiple5(array) {
  return array.filter((el) => el % 5 == 0);
}

console.log(multiple5(myArray));
