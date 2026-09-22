function changeAll(){
  document.querySelectorAll('.multiBox').forEach((el,i)=>{
    el.style.color = "#3b82f6";
    el.textContent = "Updated Box " + (i+1);
  });
}
