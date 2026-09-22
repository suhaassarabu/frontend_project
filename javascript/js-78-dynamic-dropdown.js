function fillDropdown(){
  const fruits = ["Apple","Banana","Mango","Orange","Grapes"];
  const select = document.getElementById('dynDropdown');
  select.innerHTML = "";
  fruits.forEach(f=>{
    const opt = document.createElement('option');
    opt.value = f; opt.textContent = f;
    select.appendChild(opt);
  });
}
