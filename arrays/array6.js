const staff = [
  { name: "Иван", age: 23 },
  { name: "Петр", age: 29 },
  { name: "Александр", age: 34 },
  { name: "Яна", age: 12 },
  { name: "Алена", age: 18 },
];

function myFn(array) {
  return array.map((el) => (array[el] = `Имя: ${el.name}, возраст: ${el.age}`));
}

console.log(myFn(staff));
