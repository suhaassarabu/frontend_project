const item = document.getElementById('dragItem');
const zone = document.getElementById('dropZone');
item.addEventListener('dragstart', e=>{ e.dataTransfer.setData('text', 'dragItem'); });
zone.addEventListener('dragover', e=>{ e.preventDefault(); });
zone.addEventListener('drop', e=>{
  e.preventDefault();
  zone.appendChild(item);
  zone.style.borderColor = "#22c55e";
});
