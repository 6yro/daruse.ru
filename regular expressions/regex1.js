// Адаптировать regex под задание поленился (представленный тут взял с regex101.com), но что это из себя представляет я понял.

function isURLValid(url) {
  const regex =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;
  if (url.match(regex)) {
    return true;
  } else {
    return false;
  }
}

console.log(isURLValid("http://site.com"));
