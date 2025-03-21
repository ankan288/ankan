// Cart Array to Store Selected Items
let cart = [];

// Function to Add Items to Cart
function addToCart(mealName) {
    // Check if item is already in the cart
    let existingItem = cart.find(item => item.name === mealName);
    
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if exists
    } else {
        cart.push({ name: mealName, quantity: 1 }); // Add new item
    }

    updateCartCount();
}

// Function to Update Cart Count Display
function updateCartCount() {
    const cartButton = document.querySelector(".cart-button");
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        cartButton.textContent = `Items in Cart (${totalItems})`;
    } else {
        cartButton.textContent = `Items in Cart`;
    }
}

// Function to Open Cart and Show Selected Items
function openCart() {
    let cartList = document.getElementById("cart-items-list");
    cartList.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            let listItem = document.createElement("li");
            listItem.textContent = `${item.name} (x${item.quantity})`;
            cartList.appendChild(listItem);
        });
    }

    document.getElementById("checkout-modal").classList.remove("hidden");
}

// Function to Proceed to Step 2 (Enter Details)
function proceedToStep2() {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");
}

// Function to Proceed to Step 3 (Payment)
function proceedToStep3() {
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");
}

// Function to Close Checkout Modal
function closeCheckout() {
    document.getElementById("checkout-modal").classList.add("hidden");
}

// Mobile Menu Toggle Function
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Event Listener for Cart Button
document.querySelector(".cart-button").addEventListener("click", openCart);
