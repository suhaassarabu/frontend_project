function run(){
  const s = document.getElementById('s').value;
  const freq = {};
  for(const ch of s){ freq[ch] = (freq[ch] || 0) + 1; }
  document.getElementById('output').innerHTML = Object.entries(freq).map(([k,v]) => `'${k}': ${v}`).join('<br>');
}
