const slides = ["Slide 1","Slide 2","Slide 3","Slide 4"];
let idx = 0;
function show(){ document.getElementById('slideText').textContent = slides[idx]; }
function nextSlide(){ idx = (idx+1) % slides.length; show(); }
function prevSlide(){ idx = (idx-1+slides.length) % slides.length; show(); }
