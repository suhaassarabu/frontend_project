function tick(){
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}
tick();
setInterval(tick, 1000);
