const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){

    if (Event.type === 'touchstart') Event.preventDefault

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    
    Event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        Event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        Event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
