"use strict";

(() => {
	const store = window.LumenStore;
	if (!store) {
		return;
	}

	const productGrid = document.getElementById("productGrid");
	const filterButtons = document.querySelectorAll(".filter-btn");
	const sortSelects = document.querySelectorAll(".js-sort-select");
	const mobileCategoryPanel = document.getElementById("mobileCategoryControls");
	const mobileSortPanel = document.getElementById("mobileSortControls");

	if (!productGrid) {
		return;
	}

	let activeCategory = "all";
	let activeSort = "featured";

	const getFilteredProducts = () => {
		if (activeCategory === "all") {
			return [...store.products];
		}

		return store.products.filter((product) => product.category === activeCategory);
	};

	const sortProducts = (list) => {
		const sorted = [...list];

		switch (activeSort) {
			case "name-asc":
				sorted.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "price-asc":
				sorted.sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				sorted.sort((a, b) => b.price - a.price);
				break;
			default:
				break;
		}

		return sorted;
	};

	const createProductCard = (product) => {
		const badgeMarkup = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
		const productLink = `product.html?id=${encodeURIComponent(product.id)}`;

		return `
			<div class="col-6 col-md-3">
				<article class="product-card" data-product-id="${product.id}">
					<a class="product-link" href="${productLink}" aria-label="View ${product.name} details">
						<div class="product-image-wrap">
							${badgeMarkup}
							<img src="${product.image}" alt="${product.name}" class="img-fluid product-image" loading="lazy">
						</div>
					</a>
					<div class="product-meta">
						<h3 class="product-name">
							<a class="product-link" href="${productLink}">${product.name}</a>
						</h3>
						<p class="product-price">${store.formatPrice(product.price)}</p>
						<button type="button" class="shop-add-cart-btn" data-product-id="${product.id}">Add to Cart</button>
					</div>
				</article>
			</div>
		`;
	};

	const renderProducts = () => {
		const filtered = getFilteredProducts();
		const output = sortProducts(filtered);

		productGrid.innerHTML = output.map((product) => createProductCard(product)).join("");
	};

	const syncFilterButtons = () => {
		filterButtons.forEach((button) => {
			const isActive = (button.dataset.category || "all") === activeCategory;
			button.classList.toggle("active", isActive);
			button.setAttribute("aria-pressed", isActive ? "true" : "false");
		});
	};

	const syncSortSelects = () => {
		sortSelects.forEach((select) => {
			select.value = activeSort;
		});
	};

	const closeMobilePanel = (panelNode) => {
		if (!panelNode || !window.matchMedia("(max-width: 767.98px)").matches) {
			return;
		}

		const collapseInstance = bootstrap.Collapse.getOrCreateInstance(panelNode);
		collapseInstance.hide();
	};

	filterButtons.forEach((button) => {
		button.addEventListener("click", () => {
			activeCategory = button.dataset.category || "all";
			syncFilterButtons();
			renderProducts();
			closeMobilePanel(mobileCategoryPanel);
		});
	});

	sortSelects.forEach((sortSelect) => {
		sortSelect.addEventListener("change", (event) => {
			activeSort = event.target.value;
			syncSortSelects();
			renderProducts();
			closeMobilePanel(mobileSortPanel);
		});
	});

	productGrid.addEventListener("click", (event) => {
		const addButton = event.target.closest(".shop-add-cart-btn");
		if (!addButton) {
			return;
		}

		const productId = addButton.dataset.productId;
		if (!productId) {
			return;
		}

		const product = store.getProductById(productId);
		if (!product) {
			return;
		}

		store.addToCart(product, 1);
		store.showToast(`${product.name} added to cart`);
		const originalLabel = addButton.textContent;
		addButton.textContent = "Added";
		addButton.disabled = true;

		window.setTimeout(() => {
			addButton.textContent = originalLabel;
			addButton.disabled = false;
		}, 900);
	});

	syncFilterButtons();
	syncSortSelects();
	renderProducts();
})();
