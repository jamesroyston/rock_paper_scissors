/*****************************
   *
    Rock Paper Scissors
    Coded by: James Royston III
    Completed:
    for The Odin Project
   *
 *
******************************/

const init = (function () {


  const initialize = () => {
    view.renderButtons();
    view.renderScoreboard();
  }

  const model = {

    // home of our data

    gameData: {
      playerScore: 0,
      computerScore: 0,
      gameCnt: 1,
      maxRounds: 5,
      userInput: '',
    },

    computerPlay: function () {
      // random returns rock, paper, or scissors
      const choice = ['rock', 'paper', 'scissors'];

      let n = Math.floor(Math.random() * choice.length);
      return choice[n];
    },

    playRound: function (playerSelection, computerSelection) {
    
      // getCounts();
      playerSelection = this.gameData.userInput;
      computerSelection = this.computerPlay();

      console.log('')
      console.log('----------')
      console.log(`Round ${this.gameData.gameCnt}`)
      if (playerSelection == computerSelection) {
        console.log(playerSelection + ' and ' + computerSelection + 
          ' are the same, no winner')
      } else if (playerSelection == 'rock') {
          if (computerSelection == 'paper') {
            this.gameData.computerScore++
            console.log('You lose, paper beats rock')
          } else if (computerSelection == 'scissors') {
            this.gameData.playerScore++
            console.log('You win, rock beats scissors')
          }
        }
  
        else if (playerSelection == 'scissors') {
          if (computerSelection == 'paper') {
            this.gameData.playerScore++
            console.log('You win, scissors beats paper')
          } else if (computerSelection == 'rock') {
            this.gameData.computerScore++
            console.log('You lose, rock beats scissors')
          }
        }
        
        else if (playerSelection == 'paper') {
          if (computerSelection == 'rock') {
            this.gameData.playerScore++
            console.log('You win, paper beats rock')
          } else if (computerSelection == 'scissors') {
            this.gameData.computerScore++
            console.log('You lose, scissors beats paper')
          }
        }
      this.gameData.gameCnt++
  
      
      console.log(`Your score: ${this.gameData.playerScore}`)
      console.log(`Computer's score: ${this.gameData.computerScore}`)
      console.log('----------')
      console.log('')
  
      if (this.gameData.gameCnt <= this.gameData.maxRounds) {
        console.log('awaiting user input')
      } else {
        if (this.gameData.playerScore > this.gameData.computerScore) {
          console.log(`Player wins with a score of ${this.gameData.playerScore}`)
        } else if (this.gameData.playerScore < this.gameData.computerScore) {
          console.log(`Computer wins with a score of ${this.gameData.computerScore}`)
        }
      }
    },


  }
  
  
  
  const view = {
    
    // home of our views/UI
    DOMstrings: {
      app: document.querySelector('#app')
    },

    renderButtons: function () {
      
      // grab the injection point in the DOM
      

      // create Elements for buttons
      const rock = document.createElement('button')
      const paper = document.createElement('button')
      const scissors = document.createElement('button')

      rock.textContent = 'Rock'
      paper.textContent = 'Paper'
      scissors.textContent = 'Scissors'

      const buttons = [rock, paper, scissors]
      buttons.forEach(buttons => {
        this.DOMstrings.app.appendChild(buttons)
      })

      rock.addEventListener('click', controller.chooseRock)
      paper.addEventListener('click', controller.choosePaper)
      scissors.addEventListener('click', controller.chooseScissors)

    },

    renderScoreboard: function () {
      const scoreboard = document.createElement('div');
      scoreboard.id = 'scoreboard'

      this.DOMstrings.app.appendChild(scoreboard)

      
    }

  }

  
  
  
  const controller = {

    // home of the interactions between the view/controller

    chooseRock: function() {
      model.gameData.userInput = 'rock';
      model.playRound();
    },
    choosePaper: function() {
      model.gameData.userInput = 'paper';
      model.playRound();
    },
    chooseScissors: function() {
      model.gameData.userInput = 'scissors';
      model.playRound();
    }
  }

  initialize();
})();

window.onload = console.log(init);
