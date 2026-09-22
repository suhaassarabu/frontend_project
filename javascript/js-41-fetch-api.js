async function run(){
  const out = document.getElementById('output');
  out.textContent = "Fetching...";
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    out.innerHTML = `Name: ${data.name}<br>Email: ${data.email}<br>City: ${data.address.city}`;
  }catch(e){ out.textContent = "Fetch failed: " + e.message; }
}
