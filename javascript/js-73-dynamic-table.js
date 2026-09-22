function buildTable(){
  const data = [["Name","Score"],["Asha","88"],["Ravi","92"],["Meera","79"]];
  const table = document.getElementById('dynTable');
  table.innerHTML = "";
  data.forEach((row,i)=>{
    const tr = document.createElement('tr');
    row.forEach(cell=>{
      const el = document.createElement(i===0 ? 'th':'td');
      el.textContent = cell;
      tr.appendChild(el);
    });
    table.appendChild(tr);
  });
}
