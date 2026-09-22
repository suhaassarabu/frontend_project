function filterTable(){
  const val = document.getElementById('tableSearch').value.toLowerCase();
  document.querySelectorAll('#searchTable tr').forEach((row,i)=>{
    if(i===0) return;
    row.style.display = row.textContent.toLowerCase().includes(val) ? "" : "none";
  });
}
