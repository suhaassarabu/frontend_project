function updateCount(){
  const len = document.getElementById('counterArea').value.length;
  document.getElementById('charCount').textContent = len + " / 200 characters";
}
