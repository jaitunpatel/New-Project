function renderCheckoutPage() {
    const app = document.getElementById('app');
    const currentPage = window.location.hash; // Get the current page from the URL hash
    app.innerHTML = `
        <div class="navbar">
            <div class="logo">Logo</div>
            <div class="placeholders">
                <span>Placeholder 1</span>
                <span>Placeholder 2</span>
                <span>Placeholder 3</span>
            </div>
        </div>
        <div class="landing-page menu-page-container">
            <div class="content">
                <nav class="breadcrumb">
                    <a href="#/" class="breadcrumb-item ${currentPage === '#' ? 'current-page' : ''}">Home</a>
                    <span class="breadcrumb-separator">&gt;</span>
                    <a href="#/menus" class="breadcrumb-item ${currentPage === '#/menus' ? 'current-page' : ''}">Menu</a>
                    <span class="breadcrumb-separator">&gt;</span>
                    <a href="#/checkout" class="breadcrumb-item ${currentPage === '#/checkout' ? 'current-page' : ''}">Checkout</a>
                </nav>
            </div>
        
            <div class="checkout-page-wrapper">
                <div class="checkoutContainer">
                    <form class="info">
                        <div class="col-50 leftCol">
                            <h3>Billing Address</h3>
                            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Bill">
                            <label for="email"><i class="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="Group8@COMP3020.com">
                            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
                            <label for="city"><i class="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="Winnipeg">

                        </div>
                        <div class="col-50">
                            <h3>Payment</h3>
                            <label for='cname'>Name on Card</label>
                            <input type='text' id='cname' name='cardname' placeholder='Bill Zhang'>
                            <label for='ccnum'>Credit card number</label>
                            <input type='text' id='ccnum' name='cardnumber' placeholder='1111-2222-3333-4444'>
                            <label for='expmonth'>Exp Month</label>
                            <input type='text' id='expmonth' name='expmonth' placeholder='September'>
                            <div class='row'>
                                <div class='col-50'>
                                    <label for='expyear'>Exp Year</label>
                                    <input type='text' id='expyear' name='expyear' placeholder='2018'>
                                </div>
                                <div class='col-50'>
                                    <label for='cvv'>CVV</label>
                                    <input type='text' id='cvv' name='cvv' placeholder='352'>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- Checkout Items Section -->
                <div class='checkoutItems'>
                    <!-- Checkout items and subtotal -->
                    <div id='cartItems'></div>
                    <div class='subtotal'>
                        <strong id='cartSubtotalLabel'>Subtotal:</strong> 
                        <span id='cartSubtotal'>0.00</span>
                    </div>

                    <!-- Place Order Button -->
                    <div class='checkoutPageButton'>PLACE ORDER</div>
                </div>
            </div>
        </div>
    `;

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartSubtotalElement = document.getElementById('cartSubtotal');
    const cartSubtotalLabel = document.getElementById('cartSubtotalLabel');

    let subtotal = 0;
    
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
    
        subtotal += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <div class="cart-item-quantity">
                <span class="quantity">${item.quantity}</span>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsElement.appendChild(cartItem);
        cartSubtotalLabel.innerHTML = '<strong>Subtotal:</strong>';
        cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    });
}
