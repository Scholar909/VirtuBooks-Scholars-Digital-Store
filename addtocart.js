document.addEventListener('DOMContentLoaded', function(){
    const cartItemList = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((dataTitle, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = dataTitle;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        
deleteButton.addEventListener('click', function(){
removeCartItem(index);
        });

listItem.appendChild(deleteButton);
cartItemList.appendChild(listItem);
    });

    function removeCartItem(index){
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.reload();
    }
    updateCartDisplay();
    
function updateCartDisplay(){
    const countDisplay = document.getElementById('count');
           
    countDisplay.innerText = cart.length;
    }
});


