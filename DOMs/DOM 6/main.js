btn = document.querySelector("button");
square = document.querySelector("p");

btn.onclick = function () {
  if (square.style.display !== "none") {
    square.style.display = "none";
    btn.innerHTML = "показать квадрат";
  } else {
    square.style.display = "block";
    btn.innerHTML = "скрыть квадрат";
  }
};
