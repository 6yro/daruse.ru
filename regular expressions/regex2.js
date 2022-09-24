function isPhoneNumberValid(number) {
  const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if (number.match(regex)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPhoneNumberValid("+7 (999) 111 22 33"));
