const questions = [
  { q:"Capital of France?", options:["Paris","Berlin","Rome"], answer:"Paris" },
  { q:"HTML stands for?", options:["Hyper Text Markup Language","Home Tool","High Text"], answer:"Hyper Text Markup Language" },
  { q:"2 + 2 = ?", options:["3","4","5"], answer:"4" }
];
function renderQuiz(){
  const box = document.getElementById('quizBox');
  box.innerHTML = questions.map((item,i)=>`
    <p><b>${i+1}. ${item.q}</b><br>
    ${item.options.map(o=>`<label><input type="radio" name="q${i}" value="${o}"> ${o}</label><br>`).join('')}
    </p>`).join('');
}
function submitQuiz(){
  let score = 0;
  questions.forEach((item,i)=>{
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if(selected && selected.value === item.answer) score++;
  });
  document.getElementById('output').textContent = `You scored ${score} out of ${questions.length}`;
}
renderQuiz();
