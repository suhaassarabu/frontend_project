function calcBMI(){
  const h = parseFloat(document.getElementById('bmiHeight').value) / 100;
  const w = parseFloat(document.getElementById('bmiWeight').value);
  const out = document.getElementById('bmiOut');
  if(!h || !w){ out.textContent = "Enter valid height and weight."; return; }
  const bmi = (w / (h*h)).toFixed(1);
  let category;
  if(bmi < 18.5) category = "Underweight";
  else if(bmi < 25) category = "Normal";
  else if(bmi < 30) category = "Overweight";
  else category = "Obese";
  out.textContent = "BMI: " + bmi + " (" + category + ")";
}
