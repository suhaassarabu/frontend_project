let count = 0;
function addItem(){
  count++;
  const li = document.createElement('li');
  li.textContent = "Item " + count;
  document.getElementById('dynList').appendChild(li);
}
