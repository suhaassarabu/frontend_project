function run(){
  let x = 10; const y = 20;
  const name = "Student";
  const greeting = `Hello, ${name}! x + y = ${x+y}`;
  const [first, second] = [1,2];
  const {a, b} = {a:100, b:200};
  document.getElementById('output').innerHTML = `${greeting}<br>Array destructure: ${first}, ${second}<br>Object destructure: ${a}, ${b}`;
}
