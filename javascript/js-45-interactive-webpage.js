function submitFb(){
  const val = document.getElementById('fb').value.trim();
  if(!val) return;
  const li = document.createElement('li');
  li.textContent = val;
  document.getElementById('fbList').prepend(li);
  document.getElementById('fb').value = "";
}
