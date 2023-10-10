document.addEventListener("DOMContentLoaded", function () {
    // Simulated menu items (in a real system, this data would come from a database)
    const menuItems = [
        { id: 1, name: "Pizza", price: 120, image: "pizza.jpg" },
        { id: 2, name: "Burger", price: 8, image: "burger.jpg" },
        { id: 3, name: "Pasta", price: 12, image: "pasta.jpg" },
        { id: 4, name: "French Fries", price: 20, image: "fries.jpg" },
        // Add more menu items with images
    ];

    // Cart to store selected items
    const cart = [];

    // Checkout form elements
    const checkoutModal = document.getElementById("checkout-modal");
    const checkoutForm = document.getElementById("checkout-form");

    // Bill modal elements
    const billModal = document.getElementById("bill-modal");
    const billDetails = document.getElementById("bill-details");
    const closeBillBtn = document.getElementById("close-bill");

    // Function to display menu items
    function displayMenu() {
        const menuContainer = document.querySelector(".menu-items");
        menuContainer.innerHTML = "";

        menuItems.forEach((item) => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item";
            menuItem.innerHTML = `
                <div class="menu-item-content">
                    <img src="${item.image}" alt="${item.name}" class="food-image">
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            `;

            menuItem.querySelector(".add-to-cart").addEventListener("click", () => {
                addToCart(item);
            });

            menuContainer.appendChild(menuItem);
        });
    }

    // Function to add an item to the cart
    function addToCart(item) {
        cart.push(item);
        displayCart();
    }

    // Function to display the cart
    function displayCart() {
        const cartList = document.querySelector(".cart-items");
        cartList.innerHTML = "";

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `${item.name} - $${item.price}`;
            cartList.appendChild(cartItem);
        });
    }

    // Function to show the checkout modal
    function showCheckoutModal() {
        checkoutModal.style.display = "block";
    }

    // Function to close the checkout modal
    function closeCheckoutModal() {
        checkoutModal.style.display = "none";
    }

    // Function to handle the checkout form submission
    checkoutForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const quantity = parseInt(document.getElementById("quantity").value);
        const paymentMethod = document.getElementById("payment-method").value;

        // Calculate the total price
        const totalPrice = cart.reduce((total, item) => total + item.price, 0) * quantity;

        // Generate the bill details
        const billHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Items:</strong> ${cart.map((item) => item.name).join(", ")}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        `;

        // Display the bill
        billDetails.innerHTML = billHTML;
        billModal.style.display = "block";

        // Clear the cart
        cart.length = 0;
        displayCart();

        // Open a new tab with the order summary
        openOrderSummaryPage(billHTML);
    });

    // Function to open a new tab with the order summary
    function openOrderSummaryPage(orderSummary) {
        const orderSummaryPage = window.open("", "_blank");
        if (orderSummaryPage) {
            orderSummaryPage.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Order Summary</title>
                </head>
                <body>
                    <h1>Order Summary</h1>
                    <div id="order-details">
                        ${orderSummary}
                    </div>
                </body>
                </html>
            `);
        } else {
            alert("Unable to open the order summary page. Please ensure pop-ups are allowed for this website.");
        }
    }

    // Function to close the bill modal
    closeBillBtn.addEventListener("click", function () {
        billModal.style.display = "none";
    });

    // Initialize the menu and cart
    displayMenu();
    displayCart();

    // Event listener for the checkout button
    document.getElementById("checkout-btn").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
            showCheckoutModal();
        }
    });

    // Event listener to close the checkout modal when the close button is clicked
    const closeCheckoutBtn = checkoutModal.querySelector(".close");
    closeCheckoutBtn.addEventListener("click", closeCheckoutModal);

    // Event listener to close the checkout modal when clicking outside the modal
    window.addEventListener("click", function (e) {
        if (e.target === checkoutModal) {
            closeCheckoutModal();
        }
    });
});
