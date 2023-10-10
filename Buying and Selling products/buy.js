document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutPage = document.getElementById("checkout-page");
    const checkoutDetails = document.getElementById("checkout-details");
    const checkoutTotal = document.getElementById("checkout-total");
    const orderDetailsButton = document.getElementById("order-details");
    let cart = [];

    // Event listener for "Add to Cart" buttons
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            const existingItem = cart.find((item) => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    // Event listener for "Checkout" button
    orderDetailsButton.addEventListener("click", () => {
        populateCheckoutDetails();
        checkoutPage.style.display = "block";
    });

    // Update the shopping cart
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            `;
            cartItems.appendChild(row);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Populate and display checkout details
    function populateCheckoutDetails() {
        checkoutDetails.innerHTML = "";
        let checkoutTotalValue = 0;

        cart.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            `;
            checkoutDetails.appendChild(row);
            checkoutTotalValue += item.price * item.quantity;
        });

        checkoutTotal.textContent = checkoutTotalValue.toFixed(2);
    }
});
