function sumAll(...nums){ return nums.reduce((a,b)=>a+b,0); }
function run(){
  const arr1 = [1,2,3];
  const arr2 = [...arr1, 4, 5];
  document.getElementById('output').innerHTML = `Spread: ${arr2}<br>Rest sumAll(1,2,3,4): ${sumAll(1,2,3,4)}`;
}
