function run(){
  const nums = [1,2,3,4,5,6];
  const doubled = nums.map(n=>n*2);
  const evens = nums.filter(n=>n%2===0);
  const total = nums.reduce((a,b)=>a+b,0);
  document.getElementById('output').innerHTML = `map: ${doubled}<br>filter(even): ${evens}<br>reduce(sum): ${total}`;
}
