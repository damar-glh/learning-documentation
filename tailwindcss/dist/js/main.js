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
    const toTop = document.querySelector('#to-top');
    if(window.pageYOffset > fixedNav){ // scroll Y
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden'); // remove 'hidden'
        toTop.classList.add('flex');
    } else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}