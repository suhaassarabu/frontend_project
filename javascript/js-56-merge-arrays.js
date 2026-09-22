function run(){
  const a = document.getElementById('arr1').value.split(',').map(Number);
  const b = document.getElementById('arr2').value.split(',').map(Number);
  document.getElementById('output').textContent = "Merged: " + [...a, ...b].join(", ");
}
