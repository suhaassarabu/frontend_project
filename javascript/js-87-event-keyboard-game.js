let x = 10, y = 80;
document.addEventListener('keydown', e=>{
  const step = 10;
  if(e.key === 'ArrowRight') x += step;
  if(e.key === 'ArrowLeft') x -= step;
  if(e.key === 'ArrowUp') y -= step;
  if(e.key === 'ArrowDown') y += step;
  x = Math.max(0, Math.min(270, x));
  y = Math.max(0, Math.min(170, y));
  const p = document.getElementById('player');
  p.style.left = x + "px";
  p.style.top = y + "px";
});
