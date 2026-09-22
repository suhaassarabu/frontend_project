function addRow(){
  const name = document.getElementById('rowName').value.trim();
  if(!name) return;
  const table = document.getElementById('rowTable');
  const tr = table.insertRow();
  const c1 = tr.insertCell(0); c1.textContent = name;
  const c2 = tr.insertCell(1);
  const btn = document.createElement('button');
  btn.textContent = "Delete"; btn.className = "btn";
  btn.onclick = () => tr.remove();
  c2.appendChild(btn);
  document.getElementById('rowName').value = "";
}
