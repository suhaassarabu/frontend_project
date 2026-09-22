function run(){
  const byId = document.getElementById('idTarget');
  const byClass = document.getElementsByClassName('classTarget');
  document.getElementById('out1').innerHTML =
    "By ID: " + byId.textContent + "<br>By Class count: " + byClass.length;
}
