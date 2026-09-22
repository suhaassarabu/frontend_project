function showNav(){
  document.getElementById('navOut').innerHTML =
    "App name: " + navigator.appName + "<br>" +
    "Platform: " + navigator.platform + "<br>" +
    "Language: " + navigator.language + "<br>" +
    "Online: " + navigator.onLine;
}
