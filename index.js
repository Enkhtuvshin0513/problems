let balance = 10000;
const result = [];

const gameChooser = () => {
  const game = parseInt(prompt("1 2 3 "));

  switch (game) {
    case 1:
      return haichChuluu();
    case 2:
      return coinToss();
    case 3:
      return dice();
  }
};

const haichChuluu = () => {
  const playAgain = parseInt(prompt("dahin toglohuu"));
  if (playAgain === 1) {
    gameChooser();
  } else {
    result.push({ game: "haichchuluu" });
    console.log(result);
  }
};

gameChooser();
result.