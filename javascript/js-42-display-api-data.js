async function run(){
  const list = document.getElementById('apiList');
  list.innerHTML = "Loading...";
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();
  list.innerHTML = data.map(p => `<li>${p.title}</li>`).join('');
}
