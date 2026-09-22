function press(v){ document.getElementById('calcDisplay').value += v; }
function clearCalc(){ document.getElementById('calcDisplay').value = ""; }
function calcEq(){
  try{ document.getElementById('calcDisplay').value = eval(document.getElementById('calcDisplay').value); }
  catch(e){ document.getElementById('calcDisplay').value = "Error"; }
}
