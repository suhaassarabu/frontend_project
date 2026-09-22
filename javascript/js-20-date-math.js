function run(){
  const now = new Date();
  document.getElementById('output').innerHTML = `Today: ${now.toDateString()}<br>
    Math.PI: ${Math.PI.toFixed(4)}<br>Math.sqrt(81): ${Math.sqrt(81)}<br>Math.random(): ${Math.random().toFixed(3)}`;
}
