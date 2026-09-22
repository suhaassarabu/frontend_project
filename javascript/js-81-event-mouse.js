const box = document.getElementById('mouseBox');
const log = document.getElementById('mouseOut');
['click','dblclick','mouseover','mouseout','mousemove'].forEach(evt=>{
  box.addEventListener(evt, ()=>{ if(evt!=='mousemove'){ log.textContent = "Event: " + evt; } });
});
