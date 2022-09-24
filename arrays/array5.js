// Первый способ
const myArray1 = [1, 2, 3, 4, 5];

function transfer1(array) {
  array.push(array.shift());
}

transfer1(myArray1);
console.log(myArray1);

// Второй способ
const myArray2 = [1, 2, 3, 4, 5];

function transfer2(array) {
  array.splice(array.length, 0, array.shift());
}

transfer2(myArray2);
console.log(myArray2);
