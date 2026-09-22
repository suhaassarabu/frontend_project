function addTodo(){
  const input = document.getElementById('todoInput');
  if(!input.value.trim()) return;
  const li = document.createElement('li');
  li.textContent = input.value;
  const del = document.createElement('button');
  del.textContent = "Delete";
  del.className = "btn";
  del.style.marginLeft = "10px";
  del.onclick = () => li.remove();
  li.appendChild(del);
  document.getElementById('todoList').appendChild(li);
  input.value = "";
}
