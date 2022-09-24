btnLock = document.querySelector("#lock");
btnUnlock = document.querySelector("#unlock");
input = document.querySelector("input");

btnLock.onclick = function () {
  input.setAttribute("disabled", true);
};

btnUnlock.onclick = function () {
  input.removeAttribute("disabled");
};
