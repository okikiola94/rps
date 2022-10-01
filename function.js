const game = () => {
    let pScore = 0;
    let cScore = 0;
    let playerName = document.querySelector(".player-score h2");
  
    function getInputVal() {
      let inputVal = document.getElementById("myInput").value;
      return inputVal;
    }
  
    const startGame = () => {
      const playButton = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const matchScreen = document.querySelector(".match");
      // let playerName = document.querySelector(".player-name");
      let defaultPlayerName = document.querySelector(".player-score h2");
  
      playButton.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        matchScreen.classList.add("fadeIn");
        defaultPlayerName.textContent = getInputVal();
      });
    };
    const playMatch = () => {
      const playerOption = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
      const computerOptions = ["rock", "paper", "scissors"];
  
      hands.forEach((hand) => {
        hand.addEventListener("animationend", function () {
          this.style.animation = "";
        });
      });
  
      playerOption.forEach((option) => {
        option.addEventListener("click", function () {
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
          //call compareHand fn
          setTimeout(() => {
            compareHands(this.textContent, computerChoice);
            updateScore();
            //update images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
  
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      let winner = document.querySelector(".winner");
      playerScore = document.querySelector(".player-score p");
      computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      // if (winner.textContent === "Player Wins") {
      //   pScore++;
      // } else if (winner.textContent === "Computer Wins") {
      //   cScore++;
      // } else {
      //   return;
      // }
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      let winner = document.querySelector(".winner");
      //check for tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
  
      //check for rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = playerName.textContent + " Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
        }
      }
  
      //check for scissors
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
        }
      }
  
      //check for paper
      if (playerChoice === "rock") {
        if (computerChoice === "paper") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
        }
      }
    };
  
    startGame();
    playMatch();
  };
  
  game();
  