"use strict";

(() => {
	const navToggle = document.getElementById("navToggle");
	const siteNav = document.querySelector(".site-nav");
	const siteNavLinks = document.getElementById("siteNavLinks");

	if (navToggle && siteNav && siteNavLinks) {
		const closeMenu = () => {
			siteNav.classList.remove("is-open");
			navToggle.setAttribute("aria-expanded", "false");
		};

		navToggle.addEventListener("click", () => {
			const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
			siteNav.classList.toggle("is-open", !isExpanded);
			navToggle.setAttribute("aria-expanded", String(!isExpanded));
		});

		siteNavLinks.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", closeMenu);
		});

		window.addEventListener("resize", () => {
			if (window.innerWidth > 767.98) {
				closeMenu();
			}
		});
	}

	const store = window.LumenStore;
	const featuredGrid = document.getElementById("featuredProductGrid");

	if (!store || !featuredGrid) {
		return;
	}

	const getFeaturedProducts = () => {
		const preferred = ["amber-nocturne-jar", "white-fig-jar", "santal-dusk-jar", "velvet-cedar-jar"];
		const selected = preferred
			.map((id) => store.getProductById(id))
			.filter(Boolean);

		if (selected.length >= 4) {
			return selected.slice(0, 4);
		}

		return store.products.slice(0, 4);
	};

	const renderFeaturedProducts = () => {
		const featuredProducts = getFeaturedProducts();

		featuredGrid.innerHTML = featuredProducts
			.map((product) => {
				const detailHref = `product.html?id=${encodeURIComponent(product.id)}`;
				return `
					<div class="col-6 col-md-3">
						<div class="product-card">
							<div class="product-image-wrap">
								<a href="${detailHref}" aria-label="View ${product.name} product details">
									<img src="${product.image}" alt="${product.name}" class="img-fluid product-image" loading="lazy">
								</a>
							</div>
							<div class="product-meta">
								<h3 class="product-name"><a href="${detailHref}" aria-label="View ${product.name} product details">${product.name}</a></h3>
								<p class="product-price">${store.formatPrice(product.price)}</p>
								<div class="product-actions">
									<button type="button" class="featured-add-btn" data-product-id="${product.id}">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
				`;
			})
			.join("");
	};

	featuredGrid.addEventListener("click", (event) => {
		const addButton = event.target.closest(".featured-add-btn");
		if (!addButton) {
			return;
		}

		const selectedProduct = store.getProductById(addButton.dataset.productId);
		if (!selectedProduct) {
			return;
		}

		store.addToCart(selectedProduct, 1);
		store.showToast(`${selectedProduct.name} added to cart`);
		addButton.textContent = "Added";
		addButton.disabled = true;
		setTimeout(() => {
			addButton.textContent = "Add to Cart";
			addButton.disabled = false;
		}, 900);
	});

	renderFeaturedProducts();
})();
