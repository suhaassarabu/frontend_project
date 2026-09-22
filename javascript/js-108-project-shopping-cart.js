let cartTotal = 0;
function addProduct(name, price){
  cartTotal += price;
  const li = document.createElement('li');
  li.textContent = name + " - ₹" + price;
  document.getElementById('shopCartList').appendChild(li);
  document.getElementById('shopCartTotal').textContent = "Total: ₹" + cartTotal;
}
