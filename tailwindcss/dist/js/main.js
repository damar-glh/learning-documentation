// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active'); // toggle bisa on dan of
    navMenu.classList.toggle('hidden');
})

// navbar-fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; // mengambil top halaman

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}