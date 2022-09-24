const myArray = [1, 2, 3, 4, 5];
let sum = 0;
let i = 0;

function average(array) {
  for (const key in array) {
    sum += array[key];
    i++;
  }
  return (sum / i).toFixed(1);
}

console.log(average(myArray));
