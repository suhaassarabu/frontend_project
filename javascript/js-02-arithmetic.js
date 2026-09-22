function run(){
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('output').innerHTML =
    `Sum: ${a+b}<br>Difference: ${a-b}<br>Product: ${a*b}<br>Quotient: ${(a/b).toFixed(2)}<br>Remainder: ${a%b}`;
}
