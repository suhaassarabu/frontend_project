document.getElementById('dblBox').addEventListener('dblclick', function(){
  this.style.background = this.style.background === "rgb(34, 197, 94)" ? "#3b82f6" : "#22c55e";
  this.textContent = "Double-clicked!";
});
