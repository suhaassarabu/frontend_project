document.getElementById('delegateList').addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    document.getElementById('delegateOut').textContent = "You clicked: " + e.target.textContent;
  }
});
