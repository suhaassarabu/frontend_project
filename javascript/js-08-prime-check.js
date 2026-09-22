function run(){
  const n = Number(document.getElementById('n').value);
  let isPrime = n > 1;
  for(let i=2;i*i<=n;i++){ if(n % i === 0){ isPrime = false; break; } }
  document.getElementById('output').textContent = n + (isPrime ? " is Prime" : " is Not Prime");
}
