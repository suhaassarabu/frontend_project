function run(){
  const n = document.getElementById('n').value;
  const digits = n.split('');
  const power = digits.length;
  const sum = digits.reduce((s,d)=>s + Math.pow(Number(d), power), 0);
  document.getElementById('output').textContent = n + (sum == n ? " is an Armstrong number" : " is Not an Armstrong number");
}
