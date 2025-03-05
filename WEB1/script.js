
const buttons = document.querySelectorAll('.buy');


const cartContainer = document.getElementById('cart-items');


function updateCart() {
   
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    

    cartContainer.innerHTML = '';
    

    if (cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name} - ${item.price}</span>
                <span class="remove" onclick="removeFromCart(${index})">Remove</span>
            `;
            cartContainer.appendChild(itemElement);
        });
    } else {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}


function addToCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { name, price };

    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));

  
    updateCart();
}


function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
 
    cartItems.splice(index, 1);
    

    localStorage.setItem('cart', JSON.stringify(cartItems));
    

    updateCart();
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
    
        const card = button.closest('.cards');
        
    
        const name = card.getAttribute('data-name');
        const price = card.getAttribute('data-price');
        
      
        addToCart(name, price);
    });
});


updateCart();
