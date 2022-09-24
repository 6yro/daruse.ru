btn = document.querySelector("button");
input = document.querySelector("input");

btn.onclick = function () {
  input.setAttribute("value", "test@email.ru");
};
