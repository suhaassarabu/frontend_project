const data = {
  India: {
    "Tamil Nadu": ["Chennai","Coimbatore","Madurai"],
    "Telangana": ["Hyderabad","Warangal"]
  }
};
function loadStates(){
  const country = document.getElementById('country').value;
  const stateSel = document.getElementById('state');
  stateSel.innerHTML = "<option value=''>Select State</option>";
  document.getElementById('city').innerHTML = "<option value=''>Select City</option>";
  if(data[country]){
    Object.keys(data[country]).forEach(s=>{
      const opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      stateSel.appendChild(opt);
    });
  }
}
function loadCities(){
  const country = document.getElementById('country').value;
  const state = document.getElementById('state').value;
  const citySel = document.getElementById('city');
  citySel.innerHTML = "<option value=''>Select City</option>";
  if(data[country] && data[country][state]){
    data[country][state].forEach(c=>{
      const opt = document.createElement('option');
      opt.value = c; opt.textContent = c;
      citySel.appendChild(opt);
    });
  }
}
