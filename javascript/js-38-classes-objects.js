class Person{
  constructor(name, age){ this.name = name; this.age = age; }
  intro(){ return `I am ${this.name}, ${this.age} years old.`; }
}
function run(){
  const p = new Person("Meera", 21);
  document.getElementById('output').textContent = p.intro();
}
