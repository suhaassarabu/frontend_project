function run(){
  const first = document.querySelector('.qItem');
  const all = document.querySelectorAll('.qItem');
  document.getElementById('out2').innerHTML =
    "First match: " + first.textContent + "<br>Total matches: " + all.length;
}
