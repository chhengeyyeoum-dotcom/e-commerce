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
	const galleryMainWrapNode = document.querySelector(".gallery-main-wrap");
	const relatedGridNode = document.getElementById("relatedProductsGrid");
	const relatedPrevBtn = document.getElementById("relatedPrevBtn");
	const relatedNextBtn = document.getElementById("relatedNextBtn");

	const quantityInput = document.getElementById("quantityInput");
	const increaseQtyBtn = document.getElementById("increaseQty");
	const decreaseQtyBtn = document.getElementById("decreaseQty");
	const addToCartBtn = document.getElementById("addToCartBtn");
	const cartStatusNode = document.getElementById("cartStatus");
	const productOptionsNode = document.getElementById("productOptions");

	const descriptionAccordionNode = document.getElementById("productDescriptionAccordion");
	const tastingNotesNode = document.getElementById("productTastingNotes");
	const howItWorksNode = document.getElementById("productHowItWorks");
	const accordionHeaders = document.querySelectorAll(".accordion-header");

	const accordionContainer = document.getElementById("productAccordion");

	if (!product || !nameNode || !priceNode || !mainImageNode || !thumbnailsNode || !relatedGridNode) {
		return;
	}

	let quantity = 1;
	let selectedOption = product.options?.[0] || null;
	let selectedFragrances = [];
	let selectedTrays = [];
	let selectedTrayImage = null;

	const setMainImage = (src, altText) => {
		mainImageNode.style.opacity = "0.2";
		mainImageNode.src = src;
		mainImageNode.alt = altText;

		requestAnimationFrame(() => {
			mainImageNode.style.opacity = "1";
		});
	};

	const renderThumbnails = (activeImage) => {
		const productGallery = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
		const trayImages = product.bundleConfig?.trays?.map((tray) => tray.image) || [];
		const gallery = [...new Set([...productGallery, ...trayImages])];
		const selectedImage = activeImage || gallery[0];
		setMainImage(selectedImage, product.name);

		thumbnailsNode.innerHTML = gallery
			.map((image, index) => {
				const isActive = image === selectedImage ? "active" : "";
				return `
					<button type="button" class="thumb-btn ${isActive}" data-image="${image}" aria-label="View image ${index + 1} of ${product.name}">
						<img src="${image}" alt="${product.name} thumbnail ${index + 1}" loading="lazy">
					</button>
				`;
			})
			.join("");

		renderMobileCarousel(gallery);
	};

	const renderMobileCarousel = (gallery) => {
		if (!galleryMainWrapNode) {
			return;
		}

		let carouselNode = galleryMainWrapNode.querySelector(".mobile-gallery-carousel");

		if (!carouselNode) {
			carouselNode = document.createElement("div");
			carouselNode.className = "mobile-gallery-carousel";
			galleryMainWrapNode.appendChild(carouselNode);
		}

		carouselNode.innerHTML = gallery
			.map((image, index) => {
				return `
					<div class="mobile-gallery-slide" aria-label="Image ${index + 1} of ${gallery.length}">
							<img src="${image}" alt="${product.name} image ${index + 1}" loading="lazy">
					</div>
				`;
			})
			.join("");
	};

	const renderProduct = () => {
		if (categoryNode) {
			categoryNode.textContent = product.category;
		}

		nameNode.textContent = product.name;
		const bundlePricing = store.getBundlePricing(product);
		if (bundlePricing) {
			priceNode.innerHTML = `
				<span class="bundle-value-price">${store.formatPrice(bundlePricing.valuePrice)}</span>
				<strong class="bundle-price">${store.formatPrice(product.price)}</strong>
			`;
		} else {
			priceNode.textContent = store.formatPrice(product.price);
		}

		if (descriptionNode) {
			descriptionNode.textContent = product.description || "Hand-poured in small batches for clean burn performance and modern atmosphere.";
		}

		renderProductOptions();
		renderAccordion();
		renderThumbnails();
	};

	const renderProductOptions = () => {
		if (!productOptionsNode) {
			return;
		}

		if (product.bundleConfig) {
			selectedFragrances = [];
			selectedTrays = [];
			productOptionsNode.innerHTML = `
				<section class="bundle-option-accordion" data-option-section="fragrance">
					<button type="button" class="bundle-option-header" aria-expanded="true" aria-controls="bundle-fragrance-panel">
						<span>
							<strong>Choose a fragrance</strong>
							<small class="bundle-option-summary" id="bundleFragranceSummary">None selected</small>
						</span>
						<i class="bi bi-chevron-down" aria-hidden="true"></i>
					</button>
					<div class="bundle-option-panel show" id="bundle-fragrance-panel">
						<fieldset class="mb-3">
							<p class="bundle-selection-help">Select ${product.bundleConfig.size} of 4 available fragrances.</p>
							${product.bundleConfig.fragrances.map((fragrance) => `
								<div class="form-check">
									<input class="form-check-input bundle-fragrance-input" type="checkbox" name="bundleFragrance" id="bundle-fragrance-${fragrance.id}" data-fragrance-id="${fragrance.id}" data-fragrance-label="${fragrance.label}">
									<label class="form-check-label" for="bundle-fragrance-${fragrance.id}">${fragrance.label}</label>
								</div>
							`).join("")}
							<p class="bundle-selection-status mb-0" id="bundleSelectionStatus" aria-live="polite">0 of ${product.bundleConfig.size} selected</p>
						</fieldset>
					</div>
				</section>
				${product.bundleConfig.trays ? `
					<section class="bundle-option-accordion" data-option-section="tray">
						<button type="button" class="bundle-option-header" aria-expanded="false" aria-controls="bundle-tray-panel">
							<span>
								<strong>Choose a tray</strong>
								<small class="bundle-option-summary" id="bundleTraySummary">None selected</small>
							</span>
							<i class="bi bi-chevron-down" aria-hidden="true"></i>
						</button>
						<div class="bundle-option-panel" id="bundle-tray-panel">
							<fieldset class="mb-3">
								<p class="bundle-selection-help">Select one tray.</p>
								<div class="bundle-tray-name-options">
									${product.bundleConfig.trays.map((tray) => `
										<div class="form-check">
											<input class="form-check-input bundle-tray-input" type="radio" name="bundleTray" id="bundle-tray-${tray.id}" data-tray-id="${tray.id}">
											<label class="form-check-label" for="bundle-tray-${tray.id}">${tray.label}</label>
										</div>
									`).join("")}
								</div>
							</fieldset>
						</div>
					</section>
				` : ""}
			`;

			const updateBundleSelection = () => {
				selectedFragrances = [...productOptionsNode.querySelectorAll(".bundle-fragrance-input:checked")]
					.map((input) => ({ id: input.dataset.fragranceId, label: input.dataset.fragranceLabel }));
				const statusNode = productOptionsNode.querySelector("#bundleSelectionStatus");
				if (statusNode) {
					statusNode.textContent = `${selectedFragrances.length} of ${product.bundleConfig.size} selected`;
				}
				const summaryNode = productOptionsNode.querySelector("#bundleFragranceSummary");
				if (summaryNode) {
					summaryNode.textContent = selectedFragrances.length
						? selectedFragrances.map(({ label }) => label).join(", ")
						: "None selected";
				}
			};

			const setSectionExpanded = (section, expanded) => {
				const header = section.querySelector(".bundle-option-header");
				const panel = section.querySelector(".bundle-option-panel");
				header.setAttribute("aria-expanded", String(expanded));
				panel.classList.toggle("show", expanded);
			};

			productOptionsNode.querySelectorAll(".bundle-option-header").forEach((header) => {
				header.addEventListener("click", () => {
					const section = header.closest(".bundle-option-accordion");
					setSectionExpanded(section, header.getAttribute("aria-expanded") !== "true");
				});
			});

			productOptionsNode.querySelectorAll(".bundle-fragrance-input").forEach((input) => {
				input.addEventListener("change", () => {
					const checkedInputs = productOptionsNode.querySelectorAll(".bundle-fragrance-input:checked");
					if (checkedInputs.length > product.bundleConfig.size) {
						input.checked = false;
					}
					updateBundleSelection();
					if (selectedFragrances.length === product.bundleConfig.size) {
						setSectionExpanded(input.closest(".bundle-option-accordion"), false);
					}
				});
			});

			productOptionsNode.querySelectorAll(".bundle-tray-input").forEach((input) => {
				input.addEventListener("change", () => {
					selectedTrays = [...productOptionsNode.querySelectorAll(".bundle-tray-input:checked")]
						.map((checkedInput) => product.bundleConfig.trays.find((tray) => tray.id === checkedInput.dataset.trayId))
						.filter(Boolean);
					selectedTrayImage = selectedTrays[0]?.image || null;
					renderThumbnails(selectedTrayImage || undefined);
					const summaryNode = productOptionsNode.querySelector("#bundleTraySummary");
					if (summaryNode) {
						summaryNode.textContent = selectedTrays[0]?.label || "None selected";
					}
					setSectionExpanded(input.closest(".bundle-option-accordion"), false);
				});
			});
			return;
		}

		if (!Array.isArray(product.options) || !product.options.length) {
			return;
		}

		productOptionsNode.innerHTML = `
			<fieldset class="mb-3">
				<legend class="quantity-label mb-2">Choose size</legend>
				${product.options.map((option, index) => `
					<div class="form-check">
						<input class="form-check-input product-option-input" type="checkbox" name="productOption" id="product-option-${option.id}" data-option-id="${option.id}" ${index === 0 ? "checked" : ""}>
						<label class="form-check-label" for="product-option-${option.id}">
							${option.label} ${store.formatPrice(option.price)} <span class="text-muted">(${option.description})</span>
						</label>
					</div>
				`).join("")}
			</fieldset>
		`;

		productOptionsNode.querySelectorAll(".product-option-input").forEach((input) => {
			input.addEventListener("change", () => {
				if (!input.checked) {
					input.checked = true;
					return;
				}

				productOptionsNode.querySelectorAll(".product-option-input").forEach((otherInput) => {
					if (otherInput !== input) {
						otherInput.checked = false;
					}
				});

				selectedOption = product.options.find((option) => option.id === input.dataset.optionId) || product.options[0];
				priceNode.textContent = store.formatPrice(selectedOption.price);
			});
		});
	};

	const renderAccordion = () => {
		if (!accordionContainer || !product.details) {
			return;
		}

		accordionContainer.innerHTML = product.details.map((item, index) => {
			const isFirst = index === 0;
			const contentId = `accordion-content-${index}`;
			const headerId = `accordion-header-${index}`;

			let contentHtml;
			if (item.notes) {
				contentHtml = item.notes.map(note => `
					<div class="note-item">
						<h4 class="note-title">${note.title}</h4>
						<p class="note-description">${note.description}</p>
					</div>
				`).join("");
			} else {
				contentHtml = `<p>${item.description}</p>`;
			}

			return `
				<div class="accordion-item">
					<button type="button" class="accordion-header" id="${headerId}" aria-expanded="${isFirst}" aria-controls="${contentId}">
						<span>${item.title}</span>
						<i class="bi bi-plus"></i>
					</button>
					<div id="${contentId}" class="accordion-content ${isFirst ? 'show' : ''}" role="region" aria-labelledby="${headerId}">
						<div class="accordion-body">
							${contentHtml}
						</div>
					</div>
				</div>
			`;
		}).join("");

		// Re-add event listeners to the new accordion headers
		const newAccordionHeaders = accordionContainer.querySelectorAll(".accordion-header");
		newAccordionHeaders.forEach((header) => {
			header.addEventListener("click", () => {
				const content = header.nextElementSibling;
				const isExpanded = header.getAttribute("aria-expanded") === "true";

				// Close all sections
				accordionContainer.querySelectorAll(".accordion-header").forEach(h => {
					if (h !== header) {
						h.setAttribute("aria-expanded", "false");
						h.nextElementSibling.classList.remove("show");
						h.querySelector("i").classList.remove("bi-dash");
						h.querySelector("i").classList.add("bi-plus");
					}
				});

				// Toggle current section
				header.setAttribute("aria-expanded", String(!isExpanded));
				content.classList.toggle("show");
				const icon = header.querySelector("i");
				if (!isExpanded) {
					icon.classList.remove("bi-plus");
					icon.classList.add("bi-dash");
				} else {
					icon.classList.remove("bi-dash");
					icon.classList.add("bi-plus");
				}
			});
		});
	};

	const renderRelatedProducts = () => {
		const related = store.getRecommendations(product.id, 4);

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
								<p class="related-price">${store.getBundlePricing(item) ? `<span class="bundle-value-price">${store.formatPrice(store.getBundlePricing(item).valuePrice)}</span><span class="bundle-price">${store.formatPrice(item.price)}</span>` : store.formatPrice(item.price)}</p>
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

	const scrollRelatedProducts = (direction) => {
		if (!relatedGridNode) {
			return;
		}

		const firstItem = relatedGridNode.querySelector("[class*='col-']");
		if (!firstItem) {
			return;
		}

		const gridStyle = window.getComputedStyle(relatedGridNode);
		const gap = Number.parseFloat(gridStyle.columnGap || gridStyle.gap || "0") || 0;
		const step = firstItem.getBoundingClientRect().width + gap;

		relatedGridNode.scrollBy({
			left: step * direction,
			behavior: "smooth",
		});
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

		const matchingTray = product.bundleConfig?.trays?.find((tray) => tray.image === image);
		if (matchingTray) {
			const trayInput = productOptionsNode.querySelector(`[data-tray-id="${matchingTray.id}"]`);
			if (trayInput) {
				trayInput.checked = true;
				selectedTrays = [matchingTray];
				selectedTrayImage = matchingTray.image;
				const traySummary = productOptionsNode.querySelector("#bundleTraySummary");
				if (traySummary) {
					traySummary.textContent = matchingTray.label;
				}
			}
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
			if (product.bundleConfig) {
				if (selectedFragrances.length !== product.bundleConfig.size) {
					setStatus(`Please select exactly ${product.bundleConfig.size} fragrances.`);
					return;
				}
				if (product.bundleConfig.trays && !selectedTrays.length) {
					setStatus("Please select a tray.");
					return;
				}

				selectedOption = {
					id: [...selectedFragrances, ...selectedTrays].map(({ id }) => id).sort().join("-"),
					label: [...selectedFragrances, ...selectedTrays].map(({ label }) => label).join(", "),
					price: product.price,
					selectedFragrances,
					selectedTrays
				};
			}

			store.addToCart(product, quantity, selectedOption);
			store.showToast(`${quantity} ${quantity === 1 ? "item" : "items"} added to cart`);
			setStatus("");
		});
	}

	if (relatedPrevBtn) {
		relatedPrevBtn.addEventListener("click", () => {
			scrollRelatedProducts(-1);
		});
	}

	if (relatedNextBtn) {
		relatedNextBtn.addEventListener("click", () => {
			scrollRelatedProducts(1);
		});
	}

	window.addEventListener("lumen:recommendations-updated", renderRelatedProducts);

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

		if (relatedProduct.bundleConfig) {
			window.location.href = `product.html?id=${encodeURIComponent(relatedProduct.id)}`;
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

	store.recordProductView(product);
	renderProduct();
	renderRelatedProducts();
	updateQuantityView();
	closeAllAccordionSections();
})();
