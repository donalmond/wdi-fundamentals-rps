////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
/*'use strict';*/

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = (move === "rock" || move === "paper" || move === "scissors") ? move : getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
  var winner;

  // gives values in case somebody doesn't pass in arguments for player or computer
  playerMove = getPlayerMove(playerMove);
  computerMove = getComputerMove(computerMove);
  
  console.log(playerMove);
  console.log(computerMove);

  if (
    playerMove === "rock" && computerMove === "scissors" ||
    playerMove === "paper" && computerMove === "rock" ||
    playerMove === "scissors" && computerMove === "paper"
  ) {
    winner = "Player";
  } else if (
    playerMove === "rock" && computerMove === "paper" ||
    playerMove === "paper" && computerMove === "scissors" ||
    playerMove === "scissors" && computerMove === "rock"
  ) {
    winner = "Computer";
  } else {
    winner = "Tie";
  }

  return {
      winner: winner,
      playerMove: playerMove,
      computerMove: computerMove
  };
}




function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gamesNeededToWin = 5;
   
   var winner = false;
    
    while (winner === false) {
        var game = getWinner();
        
        if (game.winner === 'Player') {
            playerWins = playerWins + 1;
        } else if (game.winner === 'Computer') {
            computerWins = computerWins + 1;
        }
        
        console.log('Player chose ' + game.playerMove + ' while Computer chose \n' + game.computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        
        if (playerWins === gamesNeededToWin || computerWins === gamesNeededToWin) {
            winner = true;   
        }
    }
    // Announces the winner.
    if (computerWins == 5)  {
        return 'Computer Wins! Start Again!';
    } else if (playerWins == 5) {
        return 'Player Wins! Start Again!';
    }
    
    return [playerWins, computerWins];
    
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gamesNeededToWin = x;
   
   var winner = false;
    
    while (winner === false) {
        var game = getWinner();
        
        if (game.winner === 'Player') {
            playerWins = playerWins + 1;
        } else if (game.winner === 'Computer') {
            computerWins = computerWins + 1;
        }
        
        console.log('Player chose ' + game.playerMove + ' while Computer chose \n' + game.computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        
        if (playerWins === gamesNeededToWin || computerWins === gamesNeededToWin) {
            winner = true;   
        }
        // Announces the winner.
    }
       if (computerWins == x)  {
        return 'Computer Wins! Start Again!';
    } else if (playerWins == x) {
        return 'Player Wins! Start Again!';
    }
    
    return [playerWins, computerWins];
    
}
