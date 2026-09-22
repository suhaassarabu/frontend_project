function run(){
  const arr = document.getElementById('arr').value.split(',').map(Number).sort((a,b)=>a-b);
  document.getElementById('output').textContent = "Sorted: " + arr.join(", ");
}
