document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", function () {
        const productType = document.getElementById("product-type").value;
        const productName = document.getElementById("product-name").value;
        const productAddress = document.getElementById("product-address").value;
        const productPrice = document.getElementById("price").value;
        const productImageInput = document.getElementById("product-image-upload");
        
        const productImage = productImageInput.files[0];

        // Validate input
        if (!productType || !productName || !productAddress || !productImage || !productPrice) {
            alert("Please fill in all fields.");
            return;
        }

        // Create a new page to display the product details
        const productPage = window.open("", "_blank");
        productPage.document.open();
        productPage.document.write(`
            <html>
            <head>
                <title>${productName}</title>
            </head>
            <body>
                <h1>${productName}</h1>
                <p>Type: ${productType}</p>
                <p>Address: ${productAddress}</p>
                <p>Rs: ${productPrice}</p>
                <img src="${URL.createObjectURL(productImage)}" alt="${productName}" width="300">
            </body>
            </html>
        `);
        productPage.document.close();

        // Reset the form
        document.getElementById("product-type").value = "";
        document.getElementById("product-name").value = "";
        document.getElementById("product-address").value = "";
        document.getElementById("price").value = "";
        document.getElementById("product-image-upload").value = "";
    });
});
