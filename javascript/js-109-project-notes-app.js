function getNotes(){ return JSON.parse(localStorage.getItem('notes') || '[]'); }
function renderNotes(){
  document.getElementById('notesList').innerHTML = getNotes().map(n=>"<li>"+n+"</li>").join("");
}
function saveNote(){
  const val = document.getElementById('noteInput').value.trim();
  if(!val) return;
  const notes = getNotes();
  notes.push(val);
  localStorage.setItem('notes', JSON.stringify(notes));
  document.getElementById('noteInput').value = "";
  renderNotes();
}
renderNotes();
