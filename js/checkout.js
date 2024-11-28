function renderCheckoutPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="navbar">
            <div class="logo">Logo</div>
            <div class="placeholders">
                <span>Placeholder 1</span>
                <span>Placeholder 2</span>
                <span>Placeholder 3</span>
            </div>
        </div>
        <nav class="breadcrumb">
            <a href="#/" class="breadcrumb-item">Home</a>
            <span class="breadcrumb-separator">&gt;</span>
            <a href="#/menus" class="breadcrumb-item">Menu</a>
            <span class="breadcrumb-separator">&gt;</span>
            <a href="#/checkout" class="breadcrumb-item">Checkout</a>
        </nav>
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
                        <div class="row">
                            <div class="col-50">
                                <label for="province">Province</label>
                                <input type="text" id="province" name="province" placeholder="MB">
                            </div>
                            <div class="col-50">
                                <label for="zip">Zip</label>
                                <input type="text" id="zip" name="zip" placeholder="N1N 1M1">
                            </div>
                        </div>
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
    `;

    // Event listener for Place Order Button
    const placeOrderButton = document.querySelector('.checkoutPageButton');
    placeOrderButton.addEventListener('click', function() {
        const checkoutModal = document.getElementById('checkoutModal');
        checkoutModal.classList.remove('hidden'); // Show modal
    });

    // Close modal when clicking on the close button
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        const checkoutModal = document.getElementById('checkoutModal');
        checkoutModal.classList.add('hidden'); // Hide modal
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const checkoutModal = document.getElementById('checkoutModal');
        if (event.target === checkoutModal) {
            checkoutModal.classList.add('hidden'); // Hide modal
        }
    });

    updateBreadcrumb('#/checkout');
}