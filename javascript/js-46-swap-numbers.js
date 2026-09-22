function run(){
  let a = Number(document.getElementById('a').value), b = Number(document.getElementById('b').value);
  a = a + b; b = a - b; a = a - b;
  document.getElementById('output').textContent = `After swap: a = ${a}, b = ${b}`;
}
