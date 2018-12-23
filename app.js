const game = function () {

  let gameData = {

    playerScore: 0,
    computerScore: 0,
    gameCnt: 1,
    maxRounds: 5,
  }

  
  
  const computerPlay = () => {
    // random returns rock, paper, or scissors
    const choice = ['rock', 'paper', 'scissors'];

    let n = Math.floor(Math.random() * choice.length);
    return choice[n];
  }
  
  const playRound = (playerSelection, computerSelection) => {
    
    // getCounts();
    playerSelection = getInput();
    computerSelection = computerPlay();

    console.log('')
    console.log('----------')
    console.log(`Round ${gameData.gameCnt}`)
    if (playerSelection == computerSelection) {
      console.log(playerSelection + ' and ' + computerSelection + 
        ' are the same, no winner')
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
          gameData.computerScore++
          console.log('You lose, paper beats rock')
        } else if (computerSelection == 'scissors') {
          gameData.playerScore++
          console.log('You win, rock beats scissors')
        }
      }

      else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
          gameData.playerScore++
          console.log('You win, scissors beats paper')
        } else if (computerSelection = 'rock') {
          gameData.computerScore++
          console.log('You lose, rock beats scissors')
        }
      }
      
      else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
          gameData.playerScore++
          console.log('You win, paper beats rock')
        } else if (computerSelection == 'scissors') {
          gameData.computerScore++
          console.log('You lose, scissors beats paper')
        }
      }
    gameData.gameCnt++

    console.log(`Your score: ${gameData.playerScore}`)
    console.log(`Computer's score: ${gameData.computerScore}`)
    console.log('----------')
    console.log('')

    if (gameData.gameCnt <= gameData.maxRounds) {
      playRound();
    } else {
      if (gameData.playerScore > gameData.computerScore) {
        console.log(`Player wins with a score of ${gameData.playerScore}`)
      } else if (gameData.playerScore < gameData.computerScore) {
        console.log(`Computer wins with a score of ${gameData.computerScore}`)
      }
    }
  }

  const getInput = () => {
    let userInput = prompt('rock, paper, or scissors?').toLowerCase();
    return userInput;
  }
  console.log(playRound())
}

window.onload = console.log(game())
