function run(){
  const arr = document.getElementById('arr').value.split(',').map(Number);
  document.getElementById('output').textContent = `Largest: ${Math.max(...arr)}, Smallest: ${Math.min(...arr)}`;
}
