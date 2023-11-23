// Dice Roll Simulator

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Function Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random dice roll and total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;
  
  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
  
  let snakeEyesEl = document.getElementById("snakeEyesEl");
  if (snakeEyesEl) {
    snakeEyesEl.style.display = "none"; // Hide snakeEyesEl if it exists anywhere but the function snakeEyes
  }
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  //set n value to 0 to begin, and as long as n is less than 5, keep rolling 
  for (n = 0; n < 5; n++) {
    
     // Random dice roll and total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;
    
    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
  
  let snakeEyesEl = document.getElementById("snakeEyesEl");
  if (snakeEyesEl) {
    snakeEyesEl.style.display = "none"; // Hide snakeEyesEl if it exists anywhere but the function snakeEyes
  }
}

function rollNTimes() {
  //Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";

  //Prompt user to define n
  let input = prompt("Input 'n' value");

  //start with n at 0, and from there, as long as n is less than whatever number the user inputs, keep rolling the dice
  for (let n = 0; n < input; n++) {

    //Random dice and total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;
    
    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
  
  let snakeEyesEl = document.getElementById("snakeEyesEl");
  if (snakeEyesEl) {
    snakeEyesEl.style.display = "none"; // Hide snakeEyesEl if it exists
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  let snakeEyesEl = document.getElementById("snakeEyesEl");
  snakeEyesEl.style.display = "block"; // Show snakeEyesEl text

  // Declare the counter
  let snakeEyesCount = 0;

  // Declare total, die1, and die2 OUTSIDE the loop
  let total, die1, die2;

  // do...while statement: roll at least once; loop code while both dice do NOT = 1
  do {
    //Random dice and total
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);

    // add one to snakeEyesCount only when both dice do NOT = 1
    if (die1 !== 1 && die2 !== 1) {
      snakeEyesCount++;
    }
    // Repeat until both dice = 1 
  } while (die1 !== 1 || die2 !== 1);

  // Set the final count after the loop finishes
  let snakeEyesCountEl = document.getElementById("snakeEyesCount");
  snakeEyesCountEl.innerHTML = snakeEyesCount;
}

