function getCart(){ return JSON.parse(localStorage.getItem('cart') || '[]'); }
function renderCart(){
  const cart = getCart();
  document.getElementById('cartList').innerHTML = cart.map(i=>"<li>"+i+"</li>").join("");
}
function addToCart(){
  const cart = getCart();
  cart.push("Item " + (cart.length + 1));
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}
function clearCart(){ localStorage.removeItem('cart'); renderCart(); }
renderCart();
