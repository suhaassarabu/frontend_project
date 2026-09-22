function run(){
  const s = document.getElementById('s').value.toLowerCase().replace(/[^a-z0-9]/g,'');
  const rev = s.split('').reverse().join('');
  document.getElementById('output').textContent = (s === rev) ? "It is a Palindrome" : "Not a Palindrome";
}
