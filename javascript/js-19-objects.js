function run(){
  const student = { name:"Ravi", age:20, course:"CS", greet(){ return "Hi, I am " + this.name; } };
  document.getElementById('output').innerHTML = `Name: ${student.name}<br>Age: ${student.age}<br>${student.greet()}`;
}
