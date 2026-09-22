class Animal{
  constructor(name){ this.name = name; }
  speak(){ return `${this.name} makes a sound.`; }
}
class Dog extends Animal{
  speak(){ return `${this.name} barks. (${super.speak()})`; }
}
function run(){
  const d = new Dog("Rex");
  document.getElementById('output').textContent = d.speak();
}
