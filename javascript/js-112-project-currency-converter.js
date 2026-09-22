async function convertCurrency(){
  const amt = parseFloat(document.getElementById('currAmt').value);
  const from = document.getElementById('currFrom').value;
  const to = document.getElementById('currTo').value;
  const out = document.getElementById('currOut');
  if(!amt){ out.textContent = "Enter a valid amount."; return; }
  out.textContent = "Loading...";
  try{
    const data = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`).then(r=>r.json());
    const rate = data.rates[to];
    out.textContent = amt + " " + from + " = " + (amt*rate).toFixed(2) + " " + to;
  }catch(err){ out.textContent = "Could not fetch rates (offline or blocked)."; }
}
