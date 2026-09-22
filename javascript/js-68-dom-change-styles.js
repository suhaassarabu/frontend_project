function changeStyle(){
  const box = document.getElementById('styleBox');
  const colors = ['#3b82f6','#ef4444','#22c55e','#f59e0b','#a855f7'];
  box.style.background = colors[Math.floor(Math.random()*colors.length)];
  box.style.borderRadius = Math.floor(Math.random()*30) + "px";
}
