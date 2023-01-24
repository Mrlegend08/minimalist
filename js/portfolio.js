const elBurger = document.querySelector('.site-header__burger');
const elModal = document.querySelector('.site-header__modal');
let icon = true;
elBurger.addEventListener('click', function(evt) {
    
    if (icon === true) {
        elModal.classList.toggle('back')
        elBurger.src = "/images/icons/close.svg"
        icon = false;
    }else{
        elBurger.src = "/images/icons/burger.svg"
        elModal.classList.toggle('back')
        icon = true;
    }
});