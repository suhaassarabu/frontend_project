function run(){
  const arr = document.getElementById('arr').value.split(',').map(Number);
  const sum = arr.reduce((a,b)=>a+b,0);
  document.getElementById('output').textContent = `Sum: ${sum}, Average: ${(sum/arr.length).toFixed(2)}`;
}
