function genPassword(){
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pw = "";
  for(let i=0;i<12;i++){ pw += chars[Math.floor(Math.random()*chars.length)]; }
  document.getElementById('pwGenOut').textContent = pw;
}
