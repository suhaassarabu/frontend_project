function run(){
  const email = document.getElementById('email').value;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById('output').textContent = re.test(email) ? "Valid email address" : "Invalid email address";
}
