let computerScore = 0; 
let playerScore = 0;
const buttons = document.querySelectorAll('button');
const results = document.createElement('div');
const compScoreBoard = document.createElement('div');
const playerScoreBoard = document.createElement('div');
const roundResults = document.createElement('div')
const finalResults = document.createElement('div')
document.body.appendChild(finalResults);
results.appendChild(roundResults);
results.appendChild(compScoreBoard);
results.appendChild(playerScoreBoard);
document.body.appendChild(results);
let playerSelection = '';

/*Player selects the button for their choice, Once clicked, 
Button id attribute is assigned as player selection and playRound is called.
Scoreboard is created added as text content to results div element
*/
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.getAttribute('id')
        playRound();
        compScoreBoard.textContent = "Computer Score: " + computerScore;
        playerScoreBoard.textContent = "Your Score: " + playerScore;
    });
});

//Switch Statement to randomly generate Computer's Choice
function getComputerChoice() {
  let getRandomNumber = Math.floor(Math.random() * 3)
  switch (getRandomNumber) {
    case 0:
      return 'rock'
      break
    case 1:
      return 'paper'
      break
    case 2:
      return 'scissors'
      
  };
};

/* Declaring computerSelection as getComputerChoice(), if statement that assigns the round point to the winning score.
if statement that when a score reaches 5, it will display content who won or lost on the DOM div element:finalResults.
*/
function playRound() {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
            roundResults.textContent = "Tie Round! (No Points!)";    
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors')
            || (computerSelection === 'paper' && playerSelection ==='rock')
            || (computerSelection === 'scissors' && playerSelection === 'paper')) {
                computerScore += 1;
                roundResults.textContent = "Big L on that round...";
    } else {
            roundResults.textContent = "Ayoooo, you won a round!";    
            playerScore += 1;
    }

    if (playerScore >= 5) {
        results.style.display = "none";
        finalResults.style.textAlign = "center";
        finalResults.style.fontSize = "200px";
        finalResults.textContent = "You Won!";

    } else if(computerScore >= 5) {
        results.style.display = "none";
        finalResults.style.textAlign = "center";
        finalResults.style.fontSize = "100px";
        finalResults.textContent = "You Lost...Better luck Next Time.";
    } else {
        return;
    };
};