//==========================================================================================//
/*            _____                                                       _______      
          ---'   __\_                                             _______(____   `---  
                    _)                GA WD Immersive            (_____               
                    __)             Scissors Paper Rock         (______            
                   __)                  Tom Ulman                  (_____           
          ---.______)                     2015                       (___________.---  
      
*/
//==========================================================================================//


////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
"use strict";

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'. or a score will not be logged!");
    
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

//==========================================================================================//

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = (move === "rock" || move === "paper" || move === "scissors" || move === "dynamite" || move === "computers are superior") ? move : getInput();
    return move;
}

//==========================================================================================//

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}




function kaboom() {
alert("                                                                           c=====e\n" +
                                                                    "                                                                                 H\n" +
      "   __________                                                  _,,__H__\n" +
     "  (__((__((___()                                               / / |           |\n" +
    " (__((__((___()()______________________/ /  |ACME  |\n" +
   "(__((__((___()()()-------------------------------------'   |______|\n\n\n\n" +
   "                                 That's Cheating!\n\n\n\n")   ;                    
}

//==========================================================================================//

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
      // Shhhhhh!!!!
      // Secret!
  playerMove === "dynamite"
  )  {   kaboom();
        
      winner = "Player";
      
      
  } else if (
    // Never Admit It!!
  playerMove === "computers are superior"
  )  {  
      winner = "defeat";
      
      
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

//==========================================================================================//

function playToFive() {
    alert("Let's play Rock, Paper, Scissors. First to 5 wins");
    var playerWins = 0;
    var computerWins = 0;
    var defeat = 0;
    var gamesNeededToWin = 5;
   
   var winner = false;
    
    while (winner === false) {
        var game = getWinner();
        
        if (game.winner === 'Player') {
            playerWins = playerWins + 1;
        } else if (game.winner === 'defeat') {
            defeat = defeat = 5;
            computerWins = "The end of humanity";
        } else if (game.winner === 'Computer') {
            computerWins = computerWins + 1;
        }
        
        console.log
        ('Player chose ' + game.playerMove + ' while Computer chose \n' + game.computerMove);
        alert 
        ('Player chose ' + game.playerMove + ' while Computer chose \n' + game.computerMove);
        console.log
        ('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        alert 
        ('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        
        if (playerWins === gamesNeededToWin ||
            computerWins === gamesNeededToWin ||
            defeat === gamesNeededToWin) {
            winner = true;   
        }
    }
    
    // Announces the winner.
    
        if (computerWins == 5)  {
            
        alert('Computer Wins! If only you had some dynamite.. Start Again!');
        console.log('Computer Wins! If only you had some dynamite.. Start Again!');
        
        } else if (defeat == 5) {
            
        alert("The computer, satisfied with your input has conceeded.");
        alert('Player Loses! The computer is now smug. Start Again!');
        console.log('Player Loses! The computer is now smug. Start Again!');
        
        } else if (playerWins == 5) {
            
        alert("Player Wins! Would the game have gone faster if someone admitted that computers are superior? Start Again!");
        console.log("Player Wins! Would the game have gone faster if someone admitted that computers are superior? Start Again!");
        }
    
    alert("Final score is " + [playerWins, computerWins]);
    console.log("Final score is " + [playerWins, computerWins]);
    return [playerWins, computerWins];
    
}

//==========================================================================================//

function playTo(x) {
    alert("Let's play Rock, Paper, Scissors. First to " + x +  " wins");
    var playerWins = 0;
    var computerWins = 0;
    var defeat = 0;
    var gamesNeededToWin = x;
   
    var winner = false;
    
    while (winner === false) {
        var game = getWinner();
        
         if (game.winner === 'Player') {
            playerWins = playerWins + 1;
        } else if (game.winner === 'defeat') {
            defeat = defeat = x;
            computerWins = "The end of humanity";
        } else if (game.winner === 'Computer') {
            computerWins = computerWins + 1;
        }
        
        console.log
        ('Player chose ' + game.playerMove + ' while Computer chose \n' + game.computerMove);
        alert
        ('Player chose ' + game.playerMove + ' while Computer chose \n' + game.computerMove);
        console.log
        ('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        alert 
        ('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        
        if (playerWins === gamesNeededToWin || computerWins === gamesNeededToWin || defeat === gamesNeededToWin) {
            winner = true;   
        }
    }    
        // Announces the winner.
    
        if (computerWins == x)  {
            
        alert('Computer Wins! If only you had some dynamite.. Start Again!');
        console.log('Computer Wins! If only you had some dynamite.. Start Again!');
        
        } else if (defeat == x) {
            
        alert("The computer, satisfied with your input has conceeded.");
        alert ('Player Loses! The computer is now smug. Start Again!');
        console.log('Player Loses! The computer is now smug. Start Again!');
        
        } else if (playerWins == x) {
            
        alert ("Player Wins! Would the game have gone faster if someone admitted that computers are superior? Start Again!");
        console.log("Player Wins! Would the game have gone faster if someone admitted that computers are superior? Start Again!");
        }
    
     alert("Final score is " + [playerWins, computerWins]);
    console.log("Final score is " + [playerWins, computerWins]);
    return [playerWins, computerWins];
    
}

//==========================================================================================//

function gamesToPlay() {
    
       var x =  prompt("Enter a number of games to play to!");
       var num1 = parseInt(x);
    
       if (isNaN(x) === false) {
   
       alert( "We are going to play to " + x);
       playTo(num1);
  
       }else if (isNaN(x) === true){
           
     alert("please choose a number");
     gamesToPlay();
 }
}

//==========================================================================================//

function playAgain() {
    
    if (confirm
    ("Would you like to play again?") === true) {
        chooseGames();

    } else {
        
        null;
         
    }
}

//==========================================================================================//

function chooseGames() {
    
    if (confirm
        ("Would you like to choose a number of games to play?\n\n If not choose cancel and the default of 5 will be chosen.") === true) {
            
        gamesToPlay();
        playAgain();
        
    } else {
        
        playToFive();
        playAgain();
    }
}

chooseGames();







