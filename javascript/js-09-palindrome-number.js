function run(){
  const n = document.getElementById('n').value;
  const reversed = n.split('').reverse().join('');
  document.getElementById('output').textContent = n + (n === reversed ? " is a Palindrome" : " is Not a Palindrome");
}
