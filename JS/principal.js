
const usernav = document.getElementById('nav');
const close = document.getElementById('close');

let username = JSON.parse(localStorage.getItem('user'));


close.addEventListener('click', function(event){
    localStorage.clear('usuario');
    location.href = 'index.html';
});

console.log(usernombre);