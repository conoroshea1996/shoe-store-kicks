// show cart

(function(){
    const cartInfo = document.querySelector('#cart-info');
    const cart = document.querySelector('#cart');

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    });

})();

//add item to cart 
(function(){
    const cartButton = document.querySelectorAll('.store-item-icon');

    cartButton.forEach(function(button){
        button.addEventListener('click', function(event){
           // console.log(event.target);

           if (event.target.parentElement.classList.contains('store-item-icon')){

                console.log(event.target.parentElement.parentElement);
                

           }
        });
    });

})();