// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
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

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
  let snakeEyesEl = document.getElementById("snakeEyesEl");
  if (snakeEyesEl) {
    snakeEyesEl.style.display = "none"; // Hide snakeEyesEl if it exists
  }
}

function roll5Times() {
  // DISPLAY MENU TITLE
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  //RANDOM DICE ROLL & TOTAL
  for (n = 0; n < 5; n++) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
  let snakeEyesEl = document.getElementById("snakeEyesEl");
  if (snakeEyesEl) {
    snakeEyesEl.style.display = "none"; // Hide snakeEyesEl if it exists
  }
}

function rollNTimes() {
  // DISPLAY MENU TITLE
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";

  //PROMPT USER TO DEFINE 'n'
  let input = prompt("Input 'n' value");

  //RANDOM DICE ROLL & TOTAL
  for (let n = 0; n < input; n++) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;
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
  // DISPLAY MENU TITLE
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  let snakeEyesEl = document.getElementById("snakeEyesEl");
  snakeEyesEl.style.display = "block"; // Show the text

  let snakeEyesCountEl = document.getElementById("snakeEyesCount");
  snakeEyesCountEl.textContent = "0"; // Reset the count

  let numSnakeEyes = 0;

  // Define total, die1, and die2 OUTSIDE the loop but do not declare them
  let total, die1, die2;

  // do...while statement: loop code while both dice do NOT = 1
  do {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);

    // numSnakeEyes only when both dice are NOT 1
    if (die1 !== 1 && die2 !== 1) {
      numSnakeEyes++;
      snakeEyesCountEl.textContent = numSnakeEyes;
    }
    // repeat until both dice = 1
  } while (die1 !== 1 || die2 !== 1);
}
