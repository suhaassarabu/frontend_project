let total = 0;
function addExpense(){
  const name = document.getElementById('expName').value.trim();
  const amt = parseFloat(document.getElementById('expAmt').value);
  if(!name || isNaN(amt)) return;
  total += amt;
  const li = document.createElement('li');
  li.textContent = name + " - ₹" + amt.toFixed(2);
  document.getElementById('expList').appendChild(li);
  document.getElementById('expTotal').textContent = "Total: ₹" + total.toFixed(2);
  document.getElementById('expName').value = "";
  document.getElementById('expAmt').value = "";
}
