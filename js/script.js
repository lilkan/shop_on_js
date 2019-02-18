window.addEventListener('DOMContentLoaded', () => {
const   cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart'),
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');


        console.log(badge, cart, close, open, totalCost);



function openCart() {
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cart.style.display = 'none';
    document.body.style.overflow = '';
}
 open.addEventListener('click', openCart);
 close.addEventListener('click', closeCart);

goodsBtn.forEach(function(btn, i) {
        let item = products[i].cloneNode(true),
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');
    btn.addEventListener('click', () =>{
        trigger.remove();
        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn);
        cartWrapper.appendChild(item);
        if (empty) {
            empty.remove();
        };
        });
    removeBtn.addEventListener('click', () =>{
        item.remove();
              if (cartWrapper.children.length == 0) {
            cartWrapper.appendChild(empty);
        };
    }) 
});

})