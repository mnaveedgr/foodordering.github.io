let navbar = document.querySelector('.navbar');
document.querySelector('#menu-card').onclick = () => {
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
}


document.querySelector('#search').onclick = () => {
    document.querySelector('.search').classList.toggle('active')
    navbar.classList.remove('active');
    document.querySelector('shopping-cart').classList.remove('active')
    document.querySelector('.login-form').classList.remove('active')
}
document.querySelector('#remove').onclick = () => {
    document.querySelector('.search').classList.remove('active')
}


document.querySelector('#shop').onclick = () => {
    document.querySelector('.shopping-cart').classList.toggle('active')
    document.querySelector('.search').classList.remove('active')
    document.querySelector('.login-form').classList.remove('active')
    navbar.classList.remove('active');
}
document.querySelector('#cart-remove').onclick = () => {
    document.querySelector('.shopping-cart').classList.remove('active')
}

document.querySelector('#user').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active')
    document.querySelector('.search').classList.remove('active')
    navbar.classList.remove('active');
    document.querySelector('.shopping-cart').classList.remove('active')
}
document.querySelector('').onclick = () => {
    document.querySelector('.login-form').classList.remove('active')
}