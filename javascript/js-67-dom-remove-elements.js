function addItem(){
  const li = document.createElement('li');
  li.textContent = "Item " + (document.getElementById('remList').children.length + 1);
  document.getElementById('remList').appendChild(li);
}
function removeItem(){
  const list = document.getElementById('remList');
  if(list.lastElementChild) list.removeChild(list.lastElementChild);
}
