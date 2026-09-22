function delayedValue(cb){ setTimeout(()=>cb(42), 500); }
function promiseValue(){ return new Promise(resolve => setTimeout(()=>resolve(100), 500)); }
async function run(){
  const out = document.getElementById('output');
  out.textContent = "Loading...";
  delayedValue(val => { out.textContent = "Callback result: " + val; });
  const promiseResult = await promiseValue();
  out.textContent += " | Promise/async-await result: " + promiseResult;
}
