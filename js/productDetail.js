"use strict";

(() => {
	const store = window.LumenStore;
	if (!store) {
		return;
	}

	const params = new URLSearchParams(window.location.search);
	const productId = params.get("id");
	const product = store.getProductById(productId) || store.products[0];

	const categoryNode = document.getElementById("productCategory");
	const nameNode = document.getElementById("productName");
	const priceNode = document.getElementById("productPrice");
	const descriptionNode = document.getElementById("productDescription");
	const mainImageNode = document.getElementById("mainProductImage");
	const thumbnailsNode = document.getElementById("thumbnailGallery");
	const relatedGridNode = document.getElementById("relatedProductsGrid");

	const quantityInput = document.getElementById("quantityInput");
	const increaseQtyBtn = document.getElementById("increaseQty");
	const decreaseQtyBtn = document.getElementById("decreaseQty");
	const addToCartBtn = document.getElementById("addToCartBtn");
	const cartStatusNode = document.getElementById("cartStatus");

	const descriptionAccordionNode = document.getElementById("productDescriptionAccordion");
	const tastingNotesNode = document.getElementById("productTastingNotes");
	const howItWorksNode = document.getElementById("productHowItWorks");
	const accordionHeaders = document.querySelectorAll(".accordion-header");

	if (!product || !nameNode || !priceNode || !mainImageNode || !thumbnailsNode || !relatedGridNode) {
		return;
	}

	let quantity = 1;

	const setMainImage = (src, altText) => {
		mainImageNode.style.opacity = "0.2";
		mainImageNode.src = src;
		mainImageNode.alt = altText;

		requestAnimationFrame(() => {
			mainImageNode.style.opacity = "1";
		});
	};

	const renderThumbnails = () => {
		const gallery = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
		setMainImage(gallery[0], product.name);

		thumbnailsNode.innerHTML = gallery
			.map((image, index) => {
				const isActive = index === 0 ? "active" : "";
				return `
					<button type="button" class="thumb-btn ${isActive}" data-image="${image}" aria-label="View image ${index + 1} of ${product.name}">
						<img src="${image}" alt="${product.name} thumbnail ${index + 1}" loading="lazy">
					</button>
				`;
			})
			.join("");
	};

	const renderProduct = () => {
		if (categoryNode) {
			categoryNode.textContent = product.category;
		}

		nameNode.textContent = product.name;
		priceNode.textContent = store.formatPrice(product.price);

		if (descriptionNode) {
			descriptionNode.textContent = product.description || "Hand-poured in small batches for clean burn performance and modern atmosphere.";
		}

		if (descriptionAccordionNode) {
			descriptionAccordionNode.textContent = product.description || "Hand-poured in small batches for clean burn performance and modern atmosphere.";
		}

		if (tastingNotesNode) {
			tastingNotesNode.textContent = product.tastingNotes || "Warm amber, vanilla, cedarwood.";
		}

		if (howItWorksNode) {
			howItWorksNode.textContent = product.howItWorks || "Trim wick before each burn and allow wax to melt evenly. Burn for 2-3 hours at a time. Discontinue use when 1cm of wax remains.";
		}

		renderThumbnails();
	};

	const renderRelatedProducts = () => {
		const related = store.products
			.filter((item) => item.id !== product.id)
			.slice(0, 4);

		relatedGridNode.innerHTML = related
			.map((item) => {
				const href = `product.html?id=${encodeURIComponent(item.id)}`;
				return `
					<div class="col-6 col-md-3">
						<article class="related-card" data-product-id="${item.id}">
							<a class="related-link" href="${href}" aria-label="View ${item.name} details">
								<div class="related-image-wrap">
									<img src="${item.image}" alt="${item.name}" class="related-image" loading="lazy">
								</div>
							</a>
							<div class="related-meta">
								<h3 class="related-name"><a class="related-link" href="${href}">${item.name}</a></h3>
								<p class="related-price">${store.formatPrice(item.price)}</p>
								<button type="button" class="related-add-cart-btn" data-product-id="${item.id}">Add to Cart</button>
							</div>
						</article>
					</div>
				`;
			})
			.join("");
	};

	const updateQuantityView = () => {
		if (quantityInput) {
			quantityInput.value = String(quantity);
		}
	};

	const setStatus = (text) => {
		if (cartStatusNode) {
			cartStatusNode.textContent = text;
		}
	};

	const closeAllAccordionSections = () => {
		document.querySelectorAll(".accordion-content.show").forEach((openContent) => {
			openContent.classList.remove("show");
		});

		document.querySelectorAll(".accordion-header[aria-expanded='true']").forEach((openHeader) => {
			openHeader.setAttribute("aria-expanded", "false");
		});
	};

	thumbnailsNode.addEventListener("click", (event) => {
		const trigger = event.target.closest(".thumb-btn");
		if (!trigger) {
			return;
		}

		const image = trigger.dataset.image;
		if (!image) {
			return;
		}

		thumbnailsNode.querySelectorAll(".thumb-btn").forEach((button) => {
			button.classList.remove("active");
		});
		trigger.classList.add("active");
		setMainImage(image, product.name);
	});

	if (increaseQtyBtn) {
		increaseQtyBtn.addEventListener("click", () => {
			quantity = Math.min(quantity + 1, 99);
			updateQuantityView();
		});
	}

	if (decreaseQtyBtn) {
		decreaseQtyBtn.addEventListener("click", () => {
			quantity = Math.max(quantity - 1, 1);
			updateQuantityView();
		});
	}

	if (addToCartBtn) {
		addToCartBtn.addEventListener("click", () => {
			store.addToCart(product, quantity);
			store.showToast(`${quantity} ${quantity === 1 ? "item" : "items"} added to cart`);
			setStatus("");
		});
	}

	relatedGridNode.addEventListener("click", (event) => {
		const addButton = event.target.closest(".related-add-cart-btn");
		if (!addButton) {
			return;
		}

		const relatedProductId = addButton.dataset.productId;
		if (!relatedProductId) {
			return;
		}

		const relatedProduct = store.getProductById(relatedProductId);
		if (!relatedProduct) {
			return;
		}

		store.addToCart(relatedProduct, 1);
		store.showToast(`${relatedProduct.name} added to cart`);
		const originalLabel = addButton.textContent;
		addButton.textContent = "Added";
		addButton.disabled = true;

		window.setTimeout(() => {
			addButton.textContent = originalLabel;
			addButton.disabled = false;
		}, 900);
	});

	accordionHeaders.forEach((header) => {
		header.addEventListener("click", () => {
			const contentId = header.getAttribute("aria-controls");
			const contentNode = document.getElementById(contentId);

			if (!contentNode) {
				return;
			}

			const isCurrentlyOpen = contentNode.classList.contains("show");

			document.querySelectorAll(".accordion-content.show").forEach((openContent) => {
				openContent.classList.remove("show");
			});

			document.querySelectorAll(".accordion-header[aria-expanded='true']").forEach((openHeader) => {
				openHeader.setAttribute("aria-expanded", "false");
			});

			if (!isCurrentlyOpen) {
				contentNode.classList.add("show");
				header.setAttribute("aria-expanded", "true");
			}
		});
	});

	renderProduct();
	renderRelatedProducts();
	updateQuantityView();
	closeAllAccordionSections();
})();
