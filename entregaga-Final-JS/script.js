
// Cargar el carrito desde el Local Storage o inicializarlo como vacío
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice, productImage) {
    const product = { name: productName, price: productPrice, image: productImage };
    cart.push(product);
    updateLocalStorage();
    alert("Producto agregado al carrito"); // Mensaje de confirmación
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateLocalStorage();
    displayCart();
}

// Función para actualizar el Local Storage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para mostrar los productos en el carrito
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const itemDetails = document.createElement('span');
        itemDetails.innerHTML = `<img src="${item.image}" alt="${item.name}">${item.name} - $${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(index);

        cartItem.appendChild(itemDetails);
        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);

        total += item.price;
    });

    document.getElementById('total').textContent = `Total: $${total}`;
}

// Mostrar el carrito al cargar la página, si estamos en carrito.html
if (document.getElementById('cart-items')) {
    displayCart();
}
