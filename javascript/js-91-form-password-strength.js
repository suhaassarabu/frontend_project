function checkStrength(){
  const val = document.getElementById('strengthPw').value;
  let score = 0;
  if(val.length >= 8) score++;
  if(/[A-Z]/.test(val)) score++;
  if(/[0-9]/.test(val)) score++;
  if(/[^A-Za-z0-9]/.test(val)) score++;
  const levels = ["Very Weak","Weak","Fair","Good","Strong"];
  document.getElementById('strengthOut').textContent = "Strength: " + levels[score];
}
