let ctInterval = null;
function startCountdown(){
  clearInterval(ctInterval);
  let remaining = Number(document.getElementById('ctSeconds').value);
  const display = document.getElementById('ctDisplay');
  display.textContent = remaining;
  ctInterval = setInterval(()=>{
    remaining--;
    if(remaining <= 0){ clearInterval(ctInterval); display.textContent = "Time's up!"; }
    else display.textContent = remaining;
  }, 1000);
}
