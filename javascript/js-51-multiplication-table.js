function run(){
  const n = Number(document.getElementById('n').value);
  let rows = [];
  for(let i=1;i<=10;i++) rows.push(`${n} x ${i} = ${n*i}`);
  document.getElementById('output').innerHTML = rows.join('<br>');
}
