btn = document.querySelector("button");
input = document.querySelector("input");

btn.onclick = function () {
  if (input.value == "") {
    alert("Вы ничего не ввели в поле");
  } else {
    alert(`Вы ввели '${input.value}'`);
  }
};
