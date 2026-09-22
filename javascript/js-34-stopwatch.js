let swTime = 0, swInterval = null;
function format(t){
  const h = String(Math.floor(t/3600)).padStart(2,'0');
  const m = String(Math.floor((t%3600)/60)).padStart(2,'0');
  const s = String(t%60).padStart(2,'0');
  return `${h}:${m}:${s}`;
}
function startSW(){ if(swInterval) return; swInterval = setInterval(()=>{ swTime++; document.getElementById('swDisplay').textContent = format(swTime); },1000); }
function stopSW(){ clearInterval(swInterval); swInterval = null; }
function resetSW(){ stopSW(); swTime = 0; document.getElementById('swDisplay').textContent = format(swTime); }
