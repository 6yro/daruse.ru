const square = document.querySelectorAll("p");

document.querySelector(".squares").addEventListener("click", (e) => {
  if (e.target.classList.contains("squares")) {
    return;
  }
  if (document.querySelector(".square--green")) {
    document
      .querySelector(".square--green")
      .classList.replace("square--green", "square--red");
  }
  e.target.classList.add("square--green");
});
