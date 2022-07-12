let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (user, computer, secret) => {
  const userRange = Math.abs(secret - user);
  const compRange = Math.abs(secret - computer);
  if (userRange <= compRange) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
