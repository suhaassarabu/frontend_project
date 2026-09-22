function run(){
  const arr = document.getElementById('arr').value.split(',').map(Number);
  const unique = [...new Set(arr)];
  document.getElementById('output').textContent = "Unique array: " + unique.join(", ");
}
