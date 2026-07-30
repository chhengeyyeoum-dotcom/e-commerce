"use strict";

(() => {
	const store = window.LumenStore;
	if (!store) {
		return;
	}

	const cartItemsNode = document.getElementById("cartItems");
	const subtotalNode = document.getElementById("cartSubtotal");
	const shippingNode = document.getElementById("cartShipping");
	const totalNode = document.getElementById("cartTotal");
	const mobileCheckoutBtn = document.getElementById("mobileCheckoutBtn");
	const checkoutSection = document.querySelector(".checkout-section");
	const desktopCheckoutBtn = document.querySelector(".desktop-checkout-btn");
	const samplesBox = document.querySelector(".samples-box");
	const checkoutHeading = document.querySelector(".checkout-heading");
	const summaryBlock = document.querySelector(".summary-block");
	const paymentBlock = document.querySelector(".payment-block");
	const promoBlock = document.querySelector(".promo-block");

	if (!cartItemsNode || !subtotalNode || !shippingNode || !totalNode) {
		return;
	}

	const DELIVERY_FEE = 0;
	const INSTAGRAM_CHECKOUT_URL = "https://www.instagram.com/lumenmoe/";
	let cart = store.getCart();

	const persistCart = () => {
		store.saveCart(cart);
		renderCart();
	};

	const updateQuantity = (itemId, quantity) => {
		cart = cart.map((item) => {
			if (item.id !== itemId) {
				return item;
			}

			return {
				...item,
				quantity: Math.min(Math.max(Number(quantity) || 1, 1), 99)
			};
		});

		persistCart();
	};

	const removeItem = (itemId) => {
		cart = cart.filter((item) => item.id !== itemId);
		persistCart();
	};

	const getSubtotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	const updateMobileCheckoutText = (amount) => {
		if (!mobileCheckoutBtn) {
			return;
		}

		mobileCheckoutBtn.textContent = `Continue to Instagram Checkout - ${store.formatPrice(amount)}`;
	};

	const setCheckoutState = ({ isEmpty, total = 0 }) => {
		const isMediumUp = window.matchMedia("(min-width: 768px)").matches;

		if (samplesBox) {
			samplesBox.style.display = isEmpty ? "none" : "";
		}

		if (checkoutSection) {
			checkoutSection.style.display = isEmpty && !isMediumUp ? "none" : "";
			checkoutSection.classList.toggle("empty-state", isEmpty && isMediumUp);
		}

		if (checkoutHeading) {
			checkoutHeading.style.display = isEmpty ? "none" : "";
		}

		if (summaryBlock) {
			summaryBlock.style.display = isEmpty ? "none" : "";
		}

		if (paymentBlock) {
			paymentBlock.style.display = isEmpty ? "none" : "";
		}

		if (promoBlock) {
			promoBlock.style.display = isEmpty ? "none" : "";
		}

		if (desktopCheckoutBtn) {
			desktopCheckoutBtn.textContent = isEmpty ? "Go Shopping" : "Continue to Instagram Checkout";
			desktopCheckoutBtn.setAttribute("href", isEmpty ? "index.html" : INSTAGRAM_CHECKOUT_URL);
		}

		if (mobileCheckoutBtn) {
			mobileCheckoutBtn.textContent = isEmpty
				? "Go Shopping"
				: `Continue to Instagram Checkout - ${store.formatPrice(total)}`;
			mobileCheckoutBtn.dataset.destination = isEmpty ? "index.html" : INSTAGRAM_CHECKOUT_URL;
		}
	};

	const handleMobileCtaClick = () => {
		const destination = mobileCheckoutBtn?.dataset.destination || INSTAGRAM_CHECKOUT_URL;
		window.location.href = destination;
	};

	const renderCart = () => {
		if (!cart.length) {
			cartItemsNode.innerHTML = `
				<div class="empty-cart-alert" role="status" aria-live="polite">
					<p class="mb-0 d-flex align-items-center gap-2">
						<i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
						<span>Your cart is empty. Browse the shop to add products.</span>
					</p>
				</div>
			`;
			subtotalNode.textContent = store.formatPrice(0);
			shippingNode.textContent = store.formatPrice(0);
			totalNode.textContent = store.formatPrice(0);
			setCheckoutState({ isEmpty: true });
			return;
		}

		cartItemsNode.innerHTML = cart
			.map((item) => {
				const lineTotal = item.price * item.quantity;
				return `
					<article class="product-card p-2 p-md-3" data-item-id="${item.id}">
						<div class="d-flex gap-3 align-items-start">
							<div class="product-image-wrap" style="width: 110px; min-width: 110px;">
								<img src="${item.image}" alt="${item.name}" class="img-fluid product-image" loading="lazy">
							</div>
							<div class="flex-grow-1">
								<h3 class="product-name mb-1">${item.name}</h3>
								<p class="product-price mb-2">${store.formatPrice(item.price)} each</p>
								<div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
									<div class="d-inline-flex align-items-center overflow-hidden">
										<button type="button" class="qty-btn" data-action="decrease" aria-label="Decrease quantity">-</button>
										<input type="text" inputmode="numeric" pattern="[0-9]*" class="qty-input" min="1" max="99" value="${item.quantity}">
										<button type="button" class="qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
									</div>
									<strong>${store.formatPrice(lineTotal)}</strong>
									<button type="button" class="btn btn-link text-danger text-decoration-none p-0" data-action="remove">Remove</button>
								</div>
							</div>
						</div>
					</article>
				`;
			})
			.join("");

		const subtotal = getSubtotal();
		const total = subtotal > 0 ? subtotal + DELIVERY_FEE : 0;
		subtotalNode.textContent = store.formatPrice(subtotal);
		shippingNode.textContent = subtotal > 0 ? "Free Delivery" : store.formatPrice(0);
		totalNode.textContent = store.formatPrice(total);
		setCheckoutState({ isEmpty: false, total });
	};

	cartItemsNode.addEventListener("click", (event) => {
		const card = event.target.closest("[data-item-id]");
		if (!card) {
			return;
		}

		const itemId = card.dataset.itemId;
		if (!itemId) {
			return;
		}

		const action = event.target.dataset.action;
		if (action === "remove") {
			removeItem(itemId);
			return;
		}

		if (action !== "increase" && action !== "decrease") {
			return;
		}

		const qtyInput = card.querySelector(".qty-input");
		const current = Number(qtyInput?.value) || 1;
		updateQuantity(itemId, action === "increase" ? current + 1 : current - 1);
	});

	cartItemsNode.addEventListener("change", (event) => {
		if (!event.target.matches(".qty-input")) {
			return;
		}

		const card = event.target.closest("[data-item-id]");
		if (!card || !card.dataset.itemId) {
			return;
		}

		updateQuantity(card.dataset.itemId, event.target.value);
	});

	if (mobileCheckoutBtn) {
		mobileCheckoutBtn.addEventListener("click", handleMobileCtaClick);
	}

	renderCart();
})();
