async function getWeather(){
  const city = document.getElementById('weatherCity').value.trim();
  const out = document.getElementById('weatherOut');
  if(!city){ out.textContent = "Enter a city name."; return; }
  out.textContent = "Loading...";
  try{
    const geo = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(city)).then(r=>r.json());
    if(!geo.results || !geo.results.length){ out.textContent = "City not found."; return; }
    const { latitude, longitude, name } = geo.results[0];
    const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`).then(r=>r.json());
    const cw = weather.current_weather;
    out.innerHTML = name + ": " + cw.temperature + "&deg;C, wind " + cw.windspeed + " km/h";
  }catch(err){ out.textContent = "Could not fetch weather (offline or blocked)."; }
}
