function validateAdm(e){
  e.preventDefault();
  const name = document.getElementById('admName').value.trim();
  const marks = parseFloat(document.getElementById('admMarks').value);
  const course = document.getElementById('admCourse').value;
  const out = document.getElementById('admOut');
  if(!name || !course || isNaN(marks)){ out.textContent = "All fields are required."; return false; }
  if(marks < 0 || marks > 100){ out.textContent = "Enter a valid marks percentage."; return false; }
  out.textContent = "Application submitted for " + course + " with " + marks + "%.";
  return false;
}
