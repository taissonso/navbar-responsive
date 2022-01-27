onload = () => {
    let menu = document.querySelector('.menu');
    let fechar = document.querySelector('.fechar');

    menu.addEventListener('click', abrirMenu);
    fechar.addEventListener('click', fecharMenu);
    
    function abrirMenu () {
        this.classList.add("active");
        document.querySelector('.fechar').classList.add('open');
        document.querySelector('nav').classList.add('menu-mobile');
    }

    function fecharMenu () {
        this.classList.remove('open');
        document.querySelector('.menu').classList.remove('active');
        document.querySelector('nav').classList.remove('menu-mobile');
    }
}


