let count = 0;
function render(){ document.getElementById('counterVal').textContent = count; }
function change(n){ count += n; render(); }
function reset(){ count = 0; render(); }
