function run(){
  const n = document.getElementById('n').value;
  const sum = n.split('').reduce((s,d)=>s+Number(d),0);
  document.getElementById('output').textContent = "Sum of digits: " + sum;
}
