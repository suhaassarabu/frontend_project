function run(){
  const n = Number(document.getElementById('n').value);
  let fact = 1;
  for(let i=2;i<=n;i++) fact *= i;
  document.getElementById('output').textContent = `Factorial of ${n} is ${fact}`;
}
