btn = document.querySelector("button");
firstInput = document.querySelector("#firstInput");
secondInput = document.querySelector("#secondInput");

btn.onclick = function () {
  [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value];
};
