function log(msg){ document.getElementById('formEvtOut').textContent = "Event: " + msg; }
function handleSubmit(e){ e.preventDefault(); log('submit'); return false; }
