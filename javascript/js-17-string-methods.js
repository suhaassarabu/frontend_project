function run(){
  const s = "  Hello JavaScript World  ";
  document.getElementById('output').innerHTML = `
    trim(): "${s.trim()}"<br>
    upper: ${s.toUpperCase()}<br>
    slice(2,7): ${s.trim().slice(0,5)}<br>
    includes("Java"): ${s.includes("Java")}<br>
    replace: ${s.trim().replace("World","Universe")}`;
}
