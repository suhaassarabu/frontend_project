function showLoc(){
  document.getElementById('locOut').innerHTML =
    "Href: " + location.href + "<br>" +
    "Protocol: " + location.protocol + "<br>" +
    "Hostname: " + (location.hostname || "local file");
}
