let target = Math.floor(Math.random()*100)+1;
let attempts = 0;
function checkGuess(){
  const g = Number(document.getElementById('guess').value);
  attempts++;
  const out = document.getElementById('output');
  if(g === target) out.textContent = `Correct! The number was ${target}. Attempts: ${attempts}`;
  else if(g < target) out.textContent = "Too low! Try again.";
  else out.textContent = "Too high! Try again.";
}
function resetGame(){ target = Math.floor(Math.random()*100)+1; attempts = 0; document.getElementById('output').textContent = "New game started!"; }
