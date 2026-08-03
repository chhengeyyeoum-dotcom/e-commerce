"use strict";

(() => {
	const store = window.LumenStore;
	if (!store) {
		return;
	}

	const checkoutForm = document.getElementById("checkoutForm");
	const placeOrderBtn = document.getElementById("placeOrderBtn");
	const mobilePlaceOrderBtn = document.getElementById("mobilePlaceOrderBtn");
	const checkoutItemsNode = document.getElementById("checkoutItems");
	const checkoutTotalNode = document.getElementById("checkoutTotal");
	const orderConfirmationNode = document.getElementById("orderConfirmation");

	if (!checkoutForm || !placeOrderBtn || !checkoutItemsNode || !checkoutTotalNode) {
		return;
	}

	const DELIVERY_FEE = 0;
	let cart = store.getCart();

	const getSubtotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	const renderCheckoutItems = () => {
		if (!cart.length) {
			checkoutItemsNode.innerHTML = '<li class="text-muted">Your cart is empty</li>';
			checkoutTotalNode.textContent = store.formatPrice(0);
			if (placeOrderBtn) {
				placeOrderBtn.disabled = true;
			}
			return;
		}

		checkoutItemsNode.innerHTML = cart
			.map((item) => {
				const lineTotal = item.price * item.quantity;
				return `
					<li class="summary-item d-flex justify-content-between align-items-center py-2 border-bottom">
						<div>
							<span class="d-block">${item.name}</span>
							<small class="text-muted">Qty: ${item.quantity}</small>
						</div>
						<strong>${store.formatPrice(lineTotal)}</strong>
					</li>
				`;
			})
			.join("");

		const subtotal = getSubtotal();
		const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);
		checkoutTotalNode.textContent = store.formatPrice(total);

		if (mobilePlaceOrderBtn) {
			mobilePlaceOrderBtn.textContent = `Continue to payment - ${store.formatPrice(total)}`;
		}

		if (placeOrderBtn) {
			placeOrderBtn.disabled = false;
		}

		if (mobilePlaceOrderBtn) {
			mobilePlaceOrderBtn.disabled = false;
		}
	};

	const clearCart = () => {
		store.saveCart([]);
		cart = [];
	};

	const showOrderConfirmation = (formData) => {
		checkoutForm.classList.add("d-none");
		placeOrderBtn.classList.add("d-none");

		if (mobilePlaceOrderBtn) {
			mobilePlaceOrderBtn.classList.add("d-none");
		}

		if (orderConfirmationNode) {
			orderConfirmationNode.classList.remove("d-none");

			const orderDate = new Date().toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric"
			});

			const subtotal = getSubtotal();
			const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);

			orderConfirmationNode.innerHTML = `
				<div class="alert alert-success" role="alert">
					<h4 class="alert-heading mb-2">Order Confirmed!</h4>
					<p class="mb-2">Thank you for your order, <strong>${escapeHtml(formData.fullName)}</strong>.</p>
					<p class="mb-2">Order placed on: <strong>${orderDate}</strong></p>
					<p class="mb-2">We'll send a confirmation email to <strong>${escapeHtml(formData.email)}</strong></p>
					<hr>
					<p class="mb-2">
						<small>Subtotal: ${store.formatPrice(subtotal)}</small><br>
						<small>Delivery: ${subtotal > 0 ? "Free Delivery" : store.formatPrice(0)}</small><br>
						<strong>Total: ${store.formatPrice(total)}</strong>
					</p>
					<hr>
					<p class="mb-0 text-center mt-3">
						<a href="index.html" class="btn btn-primary">Continue Shopping</a>
					</p>
				</div>
			`;
		}
	};

	const escapeHtml = (text) => {
		const map = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#039;"
		};
		return (text || "").replace(/[&<>"']/g, (m) => map[m]);
	};

	const validateForm = () => {
		let isValid = true;

		const fullName = checkoutForm.querySelector("#fullName");
		const email = checkoutForm.querySelector("#email");
		const phone = checkoutForm.querySelector("#phone");
		const address = checkoutForm.querySelector("#address");

		if (fullName && !fullName.value.trim()) {
			fullName.classList.add("is-invalid");
			isValid = false;
		} else if (fullName) {
			fullName.classList.remove("is-invalid");
		}

		if (email && !email.value.trim()) {
			email.classList.add("is-invalid");
			isValid = false;
		} else if (email && !isValidEmail(email.value)) {
			email.classList.add("is-invalid");
			isValid = false;
		} else if (email) {
			email.classList.remove("is-invalid");
		}

		if (phone && !phone.value.trim()) {
			phone.classList.add("is-invalid");
			isValid = false;
		} else if (phone) {
			phone.classList.remove("is-invalid");
		}

		if (address && !address.value.trim()) {
			address.classList.add("is-invalid");
			isValid = false;
		} else if (address) {
			address.classList.remove("is-invalid");
		}

		return isValid;
	};

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	if (checkoutForm) {
		checkoutForm.addEventListener("submit", (e) => {
			e.preventDefault();

			if (!validateForm()) {
				store.showToast("Please fill in all required fields correctly");
				return;
			}

			if (!cart.length) {
				store.showToast("Your cart is empty");
				return;
			}

			const fullName = checkoutForm.querySelector("#fullName").value;
			const email = checkoutForm.querySelector("#email").value;
			const phone = checkoutForm.querySelector("#phone").value;
			const address = checkoutForm.querySelector("#address").value;

			const formData = { fullName, email, phone, address };

			// Simulate order processing
			placeOrderBtn.disabled = true;
			placeOrderBtn.textContent = "Processing...";

			if (mobilePlaceOrderBtn) {
				mobilePlaceOrderBtn.disabled = true;
				mobilePlaceOrderBtn.textContent = "Processing...";
			}

			setTimeout(() => {
				clearCart();
				showOrderConfirmation(formData);
				store.showToast("Order placed successfully!");

				// Update cart badge automatically
				window.dispatchEvent(new CustomEvent("lumen:cart-updated"));
			}, 800);
		});
	}

	if (mobilePlaceOrderBtn && checkoutForm) {
		mobilePlaceOrderBtn.addEventListener("click", () => {
			checkoutForm.requestSubmit();
		});
	}

	renderCheckoutItems();
})();
