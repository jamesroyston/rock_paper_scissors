/*****************************
   *
    Rock Paper Scissors
    Coded by: James Royston III
    Completed:
    for The Odin Project
   *
 *
******************************/
const model = ( () => {

  // home of our data

  const gameData =  {
    playerScore: 0,
    computerScore: 0,
    userInput: '',
    maxScore: 5,
    haveWinner: false,
  }

  const scoreCheck = () => {
    // determine the winner logic

    // pseudocode
    // if playerscore || computerscore === maxscore
    // if playerscore < comp then comp is winner
    // else comp is winner

    if (gameData.playerScore === gameData.maxScore ||
          gameData.computerScore === gameData.maxScore) {
        gameData.haveWinner = true
        if (gameData.playerScore < gameData.computerScore) {
          console.warn( '%cComputer is the winner!',
              'color: red; font-size: 24px;') // 
          controller.displayWinner()
          controller.removeListeners()
          return
        } else {
          console.warn('%cHuman is the winner!', 'color: red; font-size: 24px;')
          controller.displayWinner()
          controller.removeListeners()
          return
        }
    } else {
      console.log("No winner! Keep Playing!")
    }
  }

  const computerPlay = () => {
    // random returns rock, paper, or scissors
    const choice = ['rock', 'paper', 'scissors'];

    let n = Math.floor(Math.random() * choice.length);
    return choice[n];
  }
  
  const playRound = (playerSelection, computerSelection) => {


    playerSelection = gameData.userInput
    computerSelection = computerPlay()

    console.log('')
    console.log('----------')
    console.log(`Round ${gameData.gameCnt}`)

    // game logic

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
        } else if (computerSelection == 'rock') {
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
    
    // update UI Scoreboard after round
    view.DOMstrings.playerScore.innerHTML = gameData.playerScore
    view.DOMstrings.computerScore.innerHTML = gameData.computerScore
    
    console.log(`Your score: ${gameData.playerScore}`)
    console.log(`Computer's score: ${gameData.computerScore}`)
    console.log('----------')
    console.log('')

    scoreCheck();
  }
  
  
    const rock = () => {
      gameData.userInput = 'rock'
      playRound()
    }
    const paper = () => {
      gameData.userInput = 'paper'
      playRound()
    }
    const scissors = () => {
      gameData.userInput = 'scissors'
      playRound()
    }

  return {
    gameData,
    playRound,
    rock,
    paper,
    scissors,
  }

})();


const view = ( () => {
  
  // home of our views/UI
  const DOMstrings = {
    scoreboard: document.querySelector('#scoreboard'),
    rock: document.querySelector('#rock'),
    paper: document.querySelector('#paper'),
    scissors: document.querySelector('#scissors'),
    playerScore: document.querySelector('#playerScore'),
    computerScore: document.querySelector('#computerScore'),
  }

  return {
    DOMstrings,
  }

})();



const controller = ( (modelCtrl, viewCtrl) => {

  // home of the interactions between the view/controller
  return {

    displayWinner: () => {
      if (modelCtrl.gameData.playerScore === 5) {
        viewCtrl.DOMstrings.scoreboard.innerHTML +=
            '<br /><span style="font-size: 28px;">Human Wins!</span>'
        viewCtrl.DOMstrings.scoreboard.style.backgroundColor = 'red'
      } else if (modelCtrl.gameData.computerScore === 5) {
        viewCtrl.DOMstrings.scoreboard.innerHTML +=
            '<br /><span style="font-size: 28px;">Computer Wins!</span>'
        viewCtrl.DOMstrings.scoreboard.style.backgroundColor = 'red'
      }
    },

    setupListeners: () => {
      viewCtrl.DOMstrings.rock.addEventListener('click', modelCtrl.rock)
      viewCtrl.DOMstrings.paper.addEventListener('click', modelCtrl.paper)
      viewCtrl.DOMstrings.scissors.addEventListener('click', modelCtrl.scissors)
    },

    removeListeners: () => {
      viewCtrl.DOMstrings.rock.removeEventListener('click', modelCtrl.rock)
      viewCtrl.DOMstrings.paper.removeEventListener('click', modelCtrl.paper)
      viewCtrl.DOMstrings.scissors.removeEventListener('click', modelCtrl.scissors)
    },

    init: () => {
      controller.setupListeners()
    }
  }
  
})(model, view);




window.onload = controller.init;
