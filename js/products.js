"use strict";

(() => {
	const PRODUCT_CATALOG = [
		{
			id: "quiet-chypre-jar",
			name: "Quiet Chypre",
			price: 22,
			category: "Candle Jar",
			badge: "New",
			image: "../img/quiet chypre box.JPG",
			images: [
				"../img/quiet chypre box.JPG",
				"../img/quiet chypre s1.JPG",
				"../img/quiet chypre set.JPG",
				"../img/quiet chypre single.JPG",
				
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
			price: 22,
			category: "Candle Jar",
			badge: "",
			image: "../img/clear night box.jpg",
			images: [
				"../img/clear night box.jpg",
				"../img/clear night pair.JPG",
				"../img/clear night set.jpg",
				"../img/clear night single.JPG",
				
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
			price: 22,
			category: "Candle Jar",
			badge: "Best Seller",
			image: "../img/neroli veil box.jpg",
			images: [
				"../img/neroli veil box.jpg",
				"../img/neroli set.JPG",
				"../img/neroli veil pair.JPG",
				"../img/neroli veil single.JPG",
				
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
							description: "Top: Orange<br>Middle: Neroli Oil<br>Base: Orange Blossom"
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
			price: 22,
			category: "Candle Jar",
			badge: "",
			image: "../img/soft resin box.JPG",
			images: [
				"../img/soft resin box.JPG",
				"../img/soft resin s1.JPG",
				"../img/soft resin set.JPG",
				"../img/soft resin single.JPG",
				
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
			price: 10,
			category: "Candle Tin",
			badge: "New",
			image: "../img/soft resin Tin.JPG",
			images: [
				"../img/soft resin Tin.JPG",
				
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
			price: 10,
			category: "Candle Tin",
			badge: "",
			image: "../img/neroli veil Tin.JPG",
			images: [
				"../img/neroli veil Tin.JPG",
				
				
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
							description: "Top: Orange<br>Middle: Neroli Oil<br>Base: Orange Blossom"
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
			price: 10,
			category: "Candle Tin",
			badge: "New",
			image: "../img/clear night Tin.JPG",
			images: [
				"../img/clear night Tin.JPG",
				
				
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
			price: 10,
			category: "Candle Tin",
			badge: "New",
			image: "../img/quiet chypre Tin.JPG",
			images: [
				"../img/quiet chypre Tin.JPG",
				
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
			id: "night-resin-set",
			name: "Night Resin Set",
			price: 27,
			category: "Bundle",
			badge: "$32 Value",
			image: "../img/bundle 1.JPG",
			images: [
				"../img/bundle 1.JPG",
				/*"../img/pexels-vika-glitter-392079-1648771.jpg",
				"../img/pexels-alleksana-7670761.jpg",
				"../img/pexels-828860-2586073.jpg"*/
			],
			description: "A calm, low-light pairing. Clear Night brings a cool, quiet atmosphere, while Soft Resin adds a warm, grounded layer. The balance feels steady and composed, suited for evening routines and slow transitions.",
			details: [
				{
					title: "Bundle Contents",
					description: "Includes 10 oz / 283 g Clear Night candle jar and 4 oz / 113 g Soft Resin candle tin. Both crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 65 hours each.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Fragrance Pairing",
					notes: [
						{
							title: "Clear Night",
							description: "Clean · Calm · Neutral - A minimal gourmand fragrance inspired by vodka's quiet neutrality"
						},
						{
							title: "Soft Resin",
							description: "Grounded · Calm · Quiet Warmth - A warm, muted scent with dry herbal clarity softening into gentle spice and resin warmth"
						},
						{
							title: "Together",
							description: "These two fragrances create a balanced, composed atmosphere. Clear Night's cool clarity complements Soft Resin's warm grounding, creating a versatile pairing for any moment."
						}
					]
				},
				{
					title: "Benefits",
					description: "Experience the harmony of complementary scents that work together to create a calm, settled atmosphere. Save 15% compared to purchasing individually. Perfect for personal use or as a thoughtfully curated gift for someone who appreciates intentional fragrance experiences."
				}
			]
		},
		{
			id: "veiled-chypre-set",
			name: "Veiled Chypre Set",
			price: 27,
			category: "Bundle",
			badge: "$32 Value",
			image: "../img/bunle 2.JPG",
			images: [
				"../img/bunle 2.JPG",
		
			],
			description: "A balanced contrast. Quiet Chypre brings an earthy structure. Neroli Veil adds a light, clean lift. The result feels composed and softly refreshing. It's a versatile pairing that works for both mornings and evenings, and creates a calm, steady atmosphere in any space.",
			details: [
				{
					title: "Bundle Contents",
					description: "Includes 10 oz / 283 g Quiet Chypre candle jar and 4 oz / 113 g Neroli Veil candle tin. Both crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 65 hours each.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Fragrance Pairing",
					notes: [
						{
							title: "Quiet Chypre",
							description: "Calm · Grounded · Restful - Opens with soft clarity and settles into clean, earthy warmth"
						},
						{
							title: "Neroli Veil",
							description: "Fresh · Calm · Clear - Soft citrus brightness unfolding into airy floral calm"
						},
						{
							title: "Together",
							description: "These fragrances create a balanced contrast that feels composed and softly refreshing. The earthy grounding of Quiet Chypre balances the light lift of Neroli Veil, creating a versatile pairing for both mornings and evenings."
						}
					]
				},
				{
					title: "Benefits",
					description: "Experience the harmony of complementary scents designed to work together. Save 15% compared to purchasing individually. Perfect for creating a personalized scent journey, or as a thoughtfully curated gift for someone who values intentional fragrance experiences."
				}
			]
		},
		{
			id: "candle-tin-set-4",
			name: "Candle Tin Set of 4",
			price: 32,
			category: "Bundle",
			badge: "$40 Value",
			image: "../img/tin set.JPG",
			images: [
		
				"../img/tin set.JPG",
				"../img/tin sett.JPG",
			],
			description: "A complete sensory journey with all four signature tin scents. This curated collection brings variety and balance to any space, allowing you to explore each fragrance and discover your perfect moments.",
			details: [
				{
					title: "Bundle Contents",
					description: "Includes four 4 oz / 113 g candle tins: Clear Night, Soft Resin, Neroli Veil, and Quiet Chypre. Each crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 20 hours each.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
				},
				{
					title: "Fragrance Collection",
					notes: [
						{
							title: "Clear Night",
							description: "Clean · Calm · Neutral - A minimal gourmand fragrance inspired by vodka's quiet neutrality"
						},
						{
							title: "Soft Resin",
							description: "Grounded · Calm · Quiet Warmth - A warm, muted scent with dry herbal clarity softening into gentle spice and resin warmth"
						},
						{
							title: "Neroli Veil",
							description: "Fresh · Calm · Clear - Soft citrus brightness unfolding into airy floral calm"
						},
						{
							title: "Quiet Chypre",
							description: "Calm · Grounded · Restful - Opens with soft clarity and settles into clean, earthy warmth"
						}
					]
				},
				{
					title: "Benefits",
					description: "Explore a complete palette of our signature scents. Perfect for discovering new favorites, layering fragrances in different spaces, or sharing the Lumen experience with loved ones. Save 20% compared to purchasing tins individually. Ideal as a gift for fragrance enthusiasts."
				}
			]
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
