const out = document.getElementById('bubbleOut');
document.getElementById('outerDiv').addEventListener('click', ()=>{ out.textContent += "Outer (bubble) "; }, false);
document.getElementById('innerDiv').addEventListener('click', ()=>{ out.textContent = "Inner clicked -> "; }, false);
document.getElementById('outerDiv').addEventListener('click', ()=>{ }, true);
