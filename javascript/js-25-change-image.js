let i = 1;
function run(){
  i = i === 1 ? 2 : 1;
  if (i === 1) {
    document.getElementById('pic').src = 'https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg';
  } else {
    document.getElementById('pic').src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80';
  }
}
