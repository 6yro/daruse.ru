const hours = new Date();
function myFn(name) {
  if (hours.getHours() < 8) {
    return `Доброй ночи ${name}`;
  } else if (hours.getHours() < 12) {
    return `Доброе утро ${name}`;
  } else if (hours.getHours() < 18) {
    return `Добрый день ${name}`;
  } else if (hours.getHours() < 00) {
    return `Добрый вечер ${name}`;
  }
}
console.log(myFn("Mikhail"));
