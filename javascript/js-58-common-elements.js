function run(){
  const a = document.getElementById('arr1').value.split(',').map(Number);
  const b = document.getElementById('arr2').value.split(',').map(Number);
  const common = a.filter(x => b.includes(x));
  document.getElementById('output').textContent = "Common elements: " + common.join(", ");
}
