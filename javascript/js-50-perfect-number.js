function run(){
  const n = Number(document.getElementById('n').value);
  let sum = 0;
  for(let i=1;i<n;i++){ if(n % i === 0) sum += i; }
  document.getElementById('output').textContent = n + (sum === n ? " is a Perfect number" : " is Not a Perfect number");
}
