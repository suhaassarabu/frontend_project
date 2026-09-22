function run(){
  const a=Number(document.getElementById('a').value), b=Number(document.getElementById('b').value), c=Number(document.getElementById('c').value);
  const largest = Math.max(a,b,c);
  document.getElementById('output').textContent = "Largest number is: " + largest;
}
