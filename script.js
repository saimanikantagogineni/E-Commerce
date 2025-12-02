let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item
function addToCart(name, price) {
    cart.push({ name, price: Number(price) });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added!");
}

// Show items in cart
function showCart() {
    const box = document.getElementById('cart-items');
    if (!box) return;

    let total = 0;
    box.innerHTML = '';
    cart.forEach((item, index) => {
        const price = Number(item.price) || 0;
        box.innerHTML += <p>${item.name} - $${price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>;
        total += price;
    });

    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.innerText = 'Total: $' + total.toFixed(2);
}

// Remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

showCart();
