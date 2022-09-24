const result = document.querySelector("p");

document.querySelector(".math-buttons").addEventListener("click", (e) => {
  if (result.innerHTML == 0) {
    if (e.target.classList.contains("math-buttons__number-item")) {
      result.innerHTML = result.innerHTML.replace(
        result.innerHTML,
        e.target.innerHTML
      );
      return;
    } else if (e.target.classList.contains("math-buttons__operation-item")) {
      result.innerHTML += e.target.innerHTML;
      return;
    }
  }
  if (
    e.target.classList.contains("math-buttons__number-item") |
    e.target.classList.contains("math-buttons__operation-item")
  ) {
    result.innerHTML += e.target.innerHTML;
  }
});

document.querySelector(".result__calc").addEventListener("click", (e) => {
  result.innerHTML = eval(result.innerHTML);
});
