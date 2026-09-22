function run(){
  const arr = [...new Set(document.getElementById('arr').value.split(',').map(Number))].sort((a,b)=>b-a);
  document.getElementById('output').textContent = "Second largest: " + (arr[1] !== undefined ? arr[1] : "N/A");
}
