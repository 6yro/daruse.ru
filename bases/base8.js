function base7() {
  for (let i = 1; i < 101; i++) {
    if (i < 18) {
      console.log(i + " ребенок");
    } else if (i < 31) {
      console.log(i + " молодой");
    } else if (i < 56) {
      console.log(i + " зрелый");
    } else if (i < 101) {
      console.log(i + " старый");
    }
  }
}

function info(name, age) {
  base7();
  if (age < 18) {
    console.log(`${name} имеет возраст ${age} и он ребенок`);
  } else if (age < 31) {
    console.log(`${name} имеет возраст ${age} и он молодой`);
  } else if (age < 56) {
    console.log(`${name} имеет возраст ${age} и он зрелый`);
  } else if (age >= 56) {
    console.log(`${name} имеет возраст ${age} и он старый`);
  }
}

info("Mikhail", 16);
