ladder = {
  step: 0,
  showStep: function () {
    console.log(this.step);
  },
  up: function () {
    this.step++;
  },
  down: function () {
    this.step--;
  },
};

ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
ladder.up();
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1
