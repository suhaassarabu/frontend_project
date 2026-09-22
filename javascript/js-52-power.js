function run(){
  const base = Number(document.getElementById('base').value), exp = Number(document.getElementById('exp').value);
  document.getElementById('output').textContent = `${base}^${exp} = ${Math.pow(base,exp)}`;
}
