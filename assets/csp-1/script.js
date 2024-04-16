const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.home-text',{origin: 'top'});
sr.reveal('.about-img, .about-text, .project-item, .list-tool, .contact',{origin: 'bottom'});
sr.reveal('.about-text h2, .text-center, .tool h2, .contact-title',{origin: 'top'});
sr.reveal('.footer',{origin: 'top'});

