// shopping-cart.js

// Initialize an empty shopping cart array
const cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    let total = 0;

    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(productName, price);
    });
});

// Function to add an item to the shopping cart
function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price,
    };
    cart.push(item);
    updateCartDisplay();
}

// Initialize the cart display on page load
updateCartDisplay();
