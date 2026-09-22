function applyTheme(){
  const theme = localStorage.getItem('siteTheme') || 'dark';
  document.body.style.background = theme === 'light' ? '#f1f5f9' : '';
  document.body.style.color = theme === 'light' ? '#111' : '';
  document.getElementById('themeStatus').textContent = "Current theme: " + theme;
}
function toggleTheme(){
  const current = localStorage.getItem('siteTheme') || 'dark';
  localStorage.setItem('siteTheme', current === 'dark' ? 'light' : 'dark');
  applyTheme();
}
applyTheme();
