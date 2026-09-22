let count = 0;
document.getElementById('clickBtn').addEventListener('click', function(){
  count++;
  document.getElementById('output').textContent = "Button clicked " + count + " time(s)";
});
