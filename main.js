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
}

// function snakeEyes() {
//   // DISPLAY MENU TITLE
//   outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";
//   //DEFINE
//   let numSnakeEyes = 0;
//   //RANDOM DICE ROLL & TOTAL
//   while (total > 2) {
//     let die1 = Math.floor(Math.random() * 6) + 1;
//     let die2 = Math.floor(Math.random() * 6) + 1;
//     let total = die1 + die2;
//     let pEl = document.createElement("p");
//     pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
//     outputEl.appendChild(pEl);
//     if (total < 3) {
//       numSnakeEyes++;
//     }
//   }

function snakeEyes() {
  // DISPLAY MENU TITLE
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  //INITIALIZING --> TESTING VARIABLE --> UPDATE VARIABLE
  while (total > 2) {
    let SnakeEyesEl = document.getElementById("snake-eyes");
    let numSnakeEyes = 0;
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
    if (total < 3) {
      numSnakeEyes = numSnakeEyes + 1;
      SnakeEyesEl.innerHTML = numSnakeEyes;
    }
  }
}
