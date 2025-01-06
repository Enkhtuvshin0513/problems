let balance = 10000;
let gameResult = [];

const gameChooser = () => {
  const userChoise = parseInt(
    prompt("Yamar togloom togloh we ? 1=haich chuluu 2=coin toss 3=dice")
  );

  let chosenGame;

  switch (userChoise) {
    case 1:
      chosenGame = haichChuluu;
      break;
    case 2:
      chosenGame = coinToss;
      break;
    case 3:
      chosenGame = dice;
      break;

    default:
      chosenGame = null;
  }

  return chosenGame;
};

const haichChuluu = () => {
  return { winner: 1, result: "user haich com daawuu" };
};

const coinToss = () => {
  return { winner: 0, result: "user suld coin too" };
};

const dice = () => {
  return { winner: 1, result: "user 6 dice 2" };
};

const game = () => {
  let result;
  const chosenGame = gameChooser();
  const chosenBalance = parseInt(
    prompt(`Ta hedeer togloh we? tanii balance: ${balance}`)
  );

  if (chosenBalance < balance && chosenGame) {
    result = chosenGame();
  }

  if (result.winner === 1) {
    balance = balance + chosenBalance;

    gameResult.push(result);
  } else {
    balance = balance - chosenBalance;
    gameResult.push(result);
  }

  const playAgain = parseInt(prompt(`Dahiad togloh 1 0`));

  if (playAgain === 1) {
    game();
  } else {
    return console.log(gameResult);
  }
};

game();
