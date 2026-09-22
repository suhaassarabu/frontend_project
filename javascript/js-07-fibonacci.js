function run(){
  const n = Number(document.getElementById('n').value);
  let a=0,b=1,series=[a,b];
  for(let i=2;i<n;i++){ let c=a+b; series.push(c); a=b; b=c; }
  document.getElementById('output').textContent = series.slice(0,n).join(", ");
}
