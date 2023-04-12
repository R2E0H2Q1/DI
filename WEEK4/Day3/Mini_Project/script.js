function playTheGame(){
    confirm();
    let userInput = prompt("Please enter a number between 0 and 10:");

    if (isNaN(userInput) || userInput < 0 || userInput > 10) {
        alert("Sorry it's not a good number, Goodbye");
    } else {
        let computerNumber = Math.round(Math.random() * 10);
        alert("Computer number is " + computerNumber);
    }
}


function playTheGame() {
  
  let userinquiry = confirm('Would you like to play the game?');
  
  if (userinquiry) {
    // Ask the user to enter a number between 0 and 10
    let userInput = prompt("Please enter a number between 0 and 10:");

    // Check if the user entered a number and it's between 0 and 10
    if (isNaN(userInput) || userInput < 0 || userInput > 10) {
      alert("Sorry it's not a good number, Goodbye");
    } else {
      // Generate a random number between 0 and 10
      let computerNumber = Math.round(Math.random() * 10);
      alert("Computer number is " + computerNumber);
    }
  } else {
    alert("No problem, Goodbye");
  }
}
