function calcGrade(){
  const marks = parseFloat(document.getElementById('gradeMarks').value);
  const out = document.getElementById('gradeOut');
  if(isNaN(marks) || marks < 0 || marks > 100){ out.textContent = "Enter valid marks (0-100)."; return; }
  let grade;
  if(marks >= 90) grade = "A+";
  else if(marks >= 80) grade = "A";
  else if(marks >= 70) grade = "B";
  else if(marks >= 60) grade = "C";
  else if(marks >= 40) grade = "D";
  else grade = "Fail";
  out.textContent = "Grade: " + grade;
}
