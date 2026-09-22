function run(){
  const arr = document.getElementById('arr').value.split(',').map(s=>s.trim());
  const freq = {};
  arr.forEach(el => { freq[el] = (freq[el] || 0) + 1; });
  document.getElementById('output').innerHTML = Object.entries(freq).map(([k,v]) => `${k}: ${v}`).join('<br>');
}
