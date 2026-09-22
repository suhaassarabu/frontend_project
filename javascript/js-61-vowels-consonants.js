function run(){
  const s = document.getElementById('s').value.toLowerCase();
  let vowels = 0, consonants = 0;
  for(const ch of s){
    if(/[a-z]/.test(ch)){ "aeiou".includes(ch) ? vowels++ : consonants++; }
  }
  document.getElementById('output').textContent = `Vowels: ${vowels}, Consonants: ${consonants}`;
}
