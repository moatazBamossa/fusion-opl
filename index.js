const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const Menu = document.querySelector("#navation");

menuBtn.addEventListener('click', ()=> {
    Menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';

})
closeBtn.addEventListener('click', ()=> {
    Menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
})
