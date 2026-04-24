"use strict";

(() => {
	const PRODUCT_CATALOG = [
		{
			id: "quiet-chypre-jar",
			name: "Quiet Chypre",
			price: 17,
			category: "Candle Jar",
			badge: "New",
			image: "../img/pexels-828860-2586073.jpg",
			images: [
				"../img/pexels-828860-2586073.jpg",
				"../img/pexels-alleksana-7670761.jpg",
				"../img/pexels-828860-2586073.jpg",
				"../img/pexels-828860-2586073.jpg"
			],
			description: "Quiet Chypre brings a sense of calm, intention, and quiet balance to your space. It opens with soft clarity and settles into a clean, earthy warmth that never overwhelms creating a steady atmosphere for slow routines, focused moments, and reflective evenings.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Calm · Grounded · Restful"
						},
						{
							title: "Vibe",
							description: "Thoughtful · Balanced · Introspective"
						},
						{
							title: "Smells Like",
							description: "Fresh dark fruits at first light, unfolding into gentle florals layered with earthy depth. Settles into a soft, mossy base with a subtle, lingering warmth."
						},
						{
							title: "Fragrance Notes",
							description: "Top: Blackcurrant · Pineapple · Apple<br>Middle: Patchouli · Rose · Jasmine<br>Base: Oakmoss · Vanilla · Ambergris"
						}
					]
				},
				{
					title: "Benefits",
					description: "Helps ease restlessness and quiet mental noise, supporting a sense of calm and emotional balance. Creates a composed, settled atmosphere—ideal for evening routines, unwinding, and moments of quiet focus. Well suited for spaces dedicated to rest, reading, or reflective work."
				}
			]
		},
		{
			id: "clear-night-jar",
			name: "Clear Night",
			price: 17,
			category: "Candle Jar",
			badge: "",
			image: "../img/pexels-flavia-hitomi-3334329-6421207.jpg",
			images: [
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-liogooo-13898254.jpg",
				"../img/pexels-gstudio-16212410.jpg",
				"../img/pexels-alleksana-7670761.jpg"
			],
			description: "A clean, minimal gourmand fragrance inspired by the quiet neutrality of vodka. Smooth and weightless, it brings clarity without sweetness designed to reset the atmosphere and support focus, stillness, and balance.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Clean · Calm · Neutral"
						},
						{
							title: "Vibe",
							description: "Minimal · Modern · Clear"
						},
						{
							title: "Smells Like",
							description: "Soft, cool neutrality—like clean air with a smooth, weightless finish. No sweetness, heaviness, or sharp edges."
						},
						{
							title: "Aroma Profile",
							description: "Gourmand fragrance inspired by the clean, neutral character of vodka"
						}
					]
				},
				{
					title: "Benefits",
					description: "Helps clear mental clutter, support focus, and reduce sensory overload. Creates a calm, controlled atmosphere—ideal for workspaces, studios, and quiet routines."
				}
			]
		},
		{
			id: "neroli-veil-jar",
			name: "Neroli Veil",
			price: 17,
			category: "Candle Jar",
			badge: "Best Seller",
			image: "../img/pexels-medhat-ayad-122846-439227.jpg",
			images: [
				"../img/pexels-medhat-ayad-122846-439227.jpg",
				"../img/pexels-gstudio-16212410.jpg",
				"../img/pexels-liogooo-13898254.jpg",
				"../img/pexels-vika-glitter-392079-1648771.jpg"
			],
			description: "Neroli Veil brings a sense of gentle clarity and quiet refreshment. It opens with soft citrus brightness, then settles into an airy floral calm—creating a light, restorative atmosphere. Subtle and refined, it’s designed for slow mornings, open spaces, and moments of emotional reset.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Fresh · Calm · Clear"
						},
						{
							title: "Vibe",
							description: "Soft · Minimal · Restful"
						},
						{
							title: "Smells Like",
							description: "Fresh orange peel on first impression, unfolding into smooth floral citrus from neroli, and finishing with a clean, softly sweet orange blossom."
						},
						{
							title: "Fragrance Notes",
							description: "Top: Orange<br>Middle: Neroli Oilne<br>Base: Orange Blossom"
						}
					]
				},
				{
					title: "Benefits",
					description: "Supports emotional calm without heaviness. Helps ease mental tension and restlessness while encouraging a light, positive mood. Promotes gentle focus and clarity, creating an atmosphere that feels clean, open, and breathable. Ideal for mornings, light spaces, and moments when you want a subtle refresh."
				}

			]
		},
		{
			id: "soft-resin-jar",
			name: "Soft Resin",
			price: 17,
			category: "Candle Jar",
			badge: "",
			image: "../img/pexels-rdne-8903690.jpg",
			images: [
				"../img/pexels-rdne-8903690.jpg",
				"../img/pexels-pavel-danilyuk-7222031.jpg",
				"../img/pexels-peg1997-12503617.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg"
			],
			description: "Soft Resin is a warm, muted scent that feels quietly grounding. It opens with dry herbal clarity, then softens into gentle spice and resin warmth. The result is a calm, steady atmosphere—like a quiet presence that settles the space without demanding attention. Designed to slow the pace and restore balance, it feels earthy, composed, and reassuring.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Grounded · Calm · Quiet Warmth "
						},
						{
							title: "Vibe",
							description: "Earthy · Minimal · Centered"
						},
						{
							title: "Smells Like",
							description: "Dry tea leaves with a subtle herbal edge, softened by warm spices and delicate florals. It settles into a smooth resin base of musk, wood, and amber."
						},
						{
							title: "Fragrance Notes",
							description: "Top: Tea Leaves · Mugwort<br>Middle: Orange Blossom · Pepper · Cardamom · Coriander<br>Base: Musk · Woody Notes · Amber"
						}
					]
				},
				{
					title: "Benefits",
					description: "Helps reduce mental overstimulation supports emotional grounding and stability. Encourages calm focus and inward attention creates a comforting, settled atmosphere ideal for rest, reflection, and end-of-day routines"
				}

			]
		},
		{
			id: "soft-resin-tin",
			name: "Soft Resin Tin",
			price: 8,
			category: "Candle Tin",
			badge: "New",
			image: "../img/pexels-liogooo-13898254.jpg",
			images: [
				"../img/pexels-liogooo-13898254.jpg",
				"../img/pexels-828860-2586073.jpg",
				"../img/pexels-medhat-ayad-122846-439227.jpg",
				"../img/pexels-vika-glitter-392079-1648771.jpg"
			],
			description: "Soft Resin is a warm, muted scent with a grounded character. It opens with dry herbal notes, softens into gentle spices, and settles into a light resinous warmth. The atmosphere is calm and steady, designed to slow the pace and restore balance. Poured in a compact tin, suitable for travel and small spaces.",
			details: [
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Grounded · Calm · Quiet Warmth "
						},
						{
							title: "Vibe",
							description: "Earthy · Minimal · Centered"
						},
						{
							title: "Smells Like",
							description: "Dry tea leaves with a subtle herbal edge, softened by warm spices and delicate florals. It settles into a smooth resin base of musk, wood, and amber."
						},
						{
							title: "Fragrance Notes",
							description: "Top: Tea Leaves · Mugwort<br>Middle: Orange Blossom · Pepper · Cardamom · Coriander<br>Base: Musk · Woody Notes · Amber"
						}
					]
				},
				{
					title: "Benefits",
					description: "Helps reduce mental overstimulation supports emotional grounding and stability. Encourages calm focus and inward attention creates a comforting, settled atmosphere ideal for rest, reflection, and end-of-day routines"
				}
			]
		},
		{
			id: "neroli-veil-tin",
			name: "Neroli Veil Tin",
			price: 8,
			category: "Candle Tin",
			badge: "",
			image: "../img/pexels-peg1997-12503617.jpg",
			images: [
				"../img/pexels-peg1997-12503617.jpg",
				"../img/pexels-rdne-8903690.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-pavel-danilyuk-7222031.jpg"
			],
			description: "Neroli Veil brings a sense of gentle clarity and quiet refreshment. It opens with soft citrus brightness, then settles into an airy floral calm—creating a light, restorative atmosphere. Subtle and refined, it’s designed for slow mornings, open spaces, and moments of emotional reset.",
			details: [
				
				{
					title: "Product Details",
					description: "4 oz / 113 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Fresh · Calm · Clear"
						},
						{
							title: "Vibe",
							description: "Soft · Minimal · Restful"
						},
						{
							title: "Smells Like",
							description: "Fresh orange peel on first impression, unfolding into smooth floral citrus from neroli, and finishing with a clean, softly sweet orange blossom."
						},
						{
							title: "Fragrance Notes",
							description: "Top: Orange<br>Middle: Neroli Oilne<br>Base: Orange Blossom"
						}
					]
				},
				{
					title: "Benefits",
					description: "Supports emotional calm without heaviness. Helps ease mental tension and restlessness while encouraging a light, positive mood. Promotes gentle focus and clarity, creating an atmosphere that feels clean, open, and breathable. Ideal for mornings, light spaces, and moments when you want a subtle refresh."
				}

			]
		},
		{
			id: "clear-night-tin",
			name: "Clear Night Tin",
			price: 8,
			category: "Candle Tin",
			badge: "New",
			image: "../img/pexels-peg1997-12503617.jpg",
			images: [
				"../img/pexels-peg1997-12503617.jpg",
				"../img/pexels-rdne-8903690.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-pavel-danilyuk-7222031.jpg"
			],
			description: "A clean, minimal gourmand fragrance inspired by the quiet neutrality of vodka. Smooth and weightless, it brings clarity without sweetness designed to reset the atmosphere and support focus, stillness, and balance.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Clean · Calm · Neutral"
						},
						{
							title: "Vibe",
							description: "Minimal · Modern · Clear"
						},
						{
							title: "Smells Like",
							description: "Soft, cool neutrality—like clean air with a smooth, weightless finish. No sweetness, heaviness, or sharp edges."
						},
						{
							title: "Aroma Profile",
							description: "Gourmand fragrance inspired by the clean, neutral character of vodka"
						}
					]
				},
				{
					title: "Benefits",
					description: "Helps clear mental clutter, support focus, and reduce sensory overload. Creates a calm, controlled atmosphere—ideal for workspaces, studios, and quiet routines."
				}
			]
		},
		{
			id: "quiet-chypre-tin",
			name: "Quiet Chypre",
			price: 8,
			category: "Candle Tin",
			badge: "New",
			image: "../img/pexels-pavel-danilyuk-7222031.jpg",
			images: [
				"../img/pexels-pavel-danilyuk-7222031.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-gstudio-16212410.jpg",
				"../img/pexels-liogooo-13898254.jpg"
			],
			description: "Quiet Chypre brings a sense of calm, intention, and quiet balance to your space. It opens with soft clarity and settles into a clean, earthy warmth that never overwhelms creating a steady atmosphere for slow routines, focused moments, and reflective evenings.",
			details: [
				
				{
					title: "Product Details",
					description: "4 oz / 113 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 40 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Scent Details",
					notes: [
						{
							title: "Mood",
							description: "Calm · Grounded · Restful"
						},
						{
							title: "Vibe",
							description: "Thoughtful · Balanced · Introspective"
						},
						{
							title: "Smells Like",
							description: "Fresh dark fruits at first light, unfolding into gentle florals layered with earthy depth. Settles into a soft, mossy base with a subtle, lingering warmth."
						},
						{
							title: "Fragrance Notes",
							description: "Top: Blackcurrant · Pineapple · Apple<br>Middle: Patchouli · Rose · Jasmine<br>Base: Oakmoss · Vanilla · Ambergris"
						}
					]
				},
				{
					title: "Benefits",
					description: "Helps ease restlessness and quiet mental noise, supporting a sense of calm and emotional balance. Creates a composed, settled atmosphere—ideal for evening routines, unwinding, and moments of quiet focus. Well suited for spaces dedicated to rest, reading, or reflective work."
				}
			]
		},
		{
			id: "candle-tin-set",
			name: "Candle Tin Set",
			price: 27,
			category: "Bundle",
			badge: "New",
			image: "../img/pexels-medhat-ayad-122846-439227.jpg",
			images: [
				"../img/pexels-medhat-ayad-122846-439227.jpg",
				"../img/pexels-vika-glitter-392079-1648771.jpg",
				"../img/pexels-alleksana-7670761.jpg",
				"../img/pexels-828860-2586073.jpg"
			],
			description: "Candle tin set of 4 featuring a curated scent bundle designed for different moods and moments. Each tin is compact and travel-friendly, offering a balanced range of calm, grounding, and warm atmospheres. Suitable for daily use, rotation, or gifting."
		},
		{
			id: "candle-care-kit",
			name: "Candle Care Kit",
			price: 28,
			category: "Accessories",
			badge: "New",
			image: "../img/pexels-alleksana-7670761.jpg",
			images: [
				"../img/pexels-alleksana-7670761.jpg",
				"../img/pexels-828860-2586073.jpg",
				"../img/pexels-medhat-ayad-122846-439227.jpg",
				"../img/pexels-vika-glitter-392079-1648771.jpg"
			],
			description: "Complete maintenance set with trimmer and snuffer to keep every burn cleaner and longer lasting."
		}
	];

	const CART_KEY = "lumen_cart";

	const getProductById = (id) => PRODUCT_CATALOG.find((product) => product.id === id) || null;

	const formatPrice = (value) => `$${Number(value).toFixed(2)}`;

	const getCart = () => {
		try {
			const raw = localStorage.getItem(CART_KEY);
			if (!raw) {
				return [];
			}

			const parsed = JSON.parse(raw);
			return Array.isArray(parsed) ? parsed : [];
		} catch (error) {
			return [];
		}
	};

	const saveCart = (cart) => {
		localStorage.setItem(CART_KEY, JSON.stringify(cart));
		window.dispatchEvent(new CustomEvent("lumen:cart-updated"));
	};

	const addToCart = (product, quantity) => {
		if (!product) {
			return;
		}

		const qty = Math.min(Math.max(Number(quantity) || 1, 1), 99);
		const cart = getCart();
		const existing = cart.find((item) => item.id === product.id);

		if (existing) {
			existing.quantity = Math.min(existing.quantity + qty, 99);
		} else {
			cart.push({
				id: product.id,
				name: product.name,
				price: product.price,
				image: product.image,
				quantity: qty
			});
		}

		saveCart(cart);
	};

	const showToast = (message) => {
		let container = document.getElementById("toastContainer");
		if (!container) {
			container = document.createElement("div");
			container.id = "toastContainer";
			container.className = "toast-container";
			document.body.appendChild(container);
		}

		const toast = document.createElement("div");
		toast.className = "toast toast-success";
		toast.setAttribute("role", "status");
		toast.setAttribute("aria-live", "polite");
		toast.textContent = message;

		container.appendChild(toast);

		setTimeout(() => {
			toast.classList.add("show");
		}, 10);

		setTimeout(() => {
			toast.classList.remove("show");
			setTimeout(() => {
				toast.remove();
			}, 300);
		}, 2500);
	};

	window.LumenStore = {
		products: PRODUCT_CATALOG,
		getProductById,
		formatPrice,
		getCart,
		saveCart,
		addToCart,
		showToast
	};
})();
