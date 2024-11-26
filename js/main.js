function navSlide(){
    burger = document.querySelector('.burger');
    nav = document.querySelector('.navbar');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('bread');
    });

}
navSlide();

