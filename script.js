// script.js

// Loading Screen Functionality
function showLoadingScreen() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoadingScreen() {
    document.getElementById('loading').style.display = 'none';
}

// Product Selection Functionality
const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 12.99 },
];

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
        productDiv.onclick = () => selectProduct(product);
        productContainer.appendChild(productDiv);
    });
}

let selectedProduct = null;

function selectProduct(product) {
    selectedProduct = product;
    document.getElementById('selected-product').innerText = `Selected: ${product.name}`;
}

// Payment Flow Functionality
function proceedToPayment() {
    if (!selectedProduct) {
        alert('Please select a product first!');
        return;
    }
    // Payment process logic here
    alert(`Proceeding to payment for ${selectedProduct.name}`);
}

// Support Functionality
function contactSupport() {
    alert('Contacting support...');
    // Support contact logic here
}

// Initialize script
window.onload = function() {
    hideLoadingScreen();
    displayProducts();
};
