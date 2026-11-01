"use strict";

(() => {
	const PRODUCT_CATALOG = [
		{
			id: "quiet-chypre-jar",
			name: "Quiet Chypre",
			price: 22,
			category: "Candle Jar",
			badge: "New",
			image: "img/quiet chypre-jar.jpg",
			images: [
				"img/quiet chypre-jar.jpg",
				
			],
			description: "Quiet Chypre brings a sense of calm, intention, and quiet balance to your space. It opens with soft clarity and settles into a clean, earthy warmth that never overwhelms creating a steady atmosphere for slow routines, focused moments, and reflective evenings.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 45 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/Clear night-jar.jpg",
			images: [
				"img/Clear night-jar.jpg"
				
			],
			description: "A clean, minimal gourmand fragrance inspired by the quiet neutrality of vodka. Smooth and weightless, it brings clarity without sweetness designed to reset the atmosphere and support focus, stillness, and balance.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 45 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/neroli veil- jar.jpg",
			images: [
				"img/neroli veil- jar.jpg"
				
			],
			description: "Neroli Veil brings a sense of gentle clarity and quiet refreshment. It opens with soft citrus brightness, then settles into an airy floral calm—creating a light, restorative atmosphere. Subtle and refined, it’s designed for slow mornings, open spaces, and moments of emotional reset.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 45 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/soft resin-jar.jpg",
			images: [
				"img/soft resin-jar.jpg"
				
			],
			description: "Soft Resin is a warm, muted scent that feels quietly grounding. It opens with dry herbal clarity, then softens into gentle spice and resin warmth. The result is a calm, steady atmosphere—like a quiet presence that settles the space without demanding attention. Designed to slow the pace and restore balance, it feels earthy, composed, and reassuring.",
			details: [
				
				{
					title: "Product Details",
					description: "10 oz / 283 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of up to 45 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/soft resin-tin.jpg",
			images: [
				"img/soft resin-tin.jpg",
				
			],
			description: "Soft Resin is a warm, muted scent with a grounded character. It opens with dry herbal notes, softens into gentle spices, and settles into a light resinous warmth. The atmosphere is calm and steady, designed to slow the pace and restore balance. Poured in a compact tin, suitable for travel and small spaces.",
			details: [
				{
					title: "Product Details",
					description: "4 oz / 113 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of 20 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/neroli veil-tin.jpg",
			images: [
				"img/neroli veil-tin.jpg",
				
				
			],
			description: "Neroli Veil brings a sense of gentle clarity and quiet refreshment. It opens with soft citrus brightness, then settles into an airy floral calm—creating a light, restorative atmosphere. Subtle and refined, it’s designed for slow mornings, open spaces, and moments of emotional reset.",
			details: [
				
				{
					title: "Product Details",
					description: "4 oz / 113 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of 20 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/Clear night-tin.jpg",
			images: [
				"img/clear night-tin.jpg",
				
				
			],
			description: "A clean, minimal gourmand fragrance inspired by the quiet neutrality of vodka. Smooth and weightless, it brings clarity without sweetness designed to reset the atmosphere and support focus, stillness, and balance.",
			details: [
				
				{
					title: "Product Details",
					description: "4 oz / 113 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of 20 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/quiet chypre-tin.jpg",
			images: [
				"img/quiet chypre-tin.jpg",
				
			],
			description: "Quiet Chypre brings a sense of calm, intention, and quiet balance to your space. It opens with soft clarity and settles into a clean, earthy warmth that never overwhelms creating a steady atmosphere for slow routines, focused moments, and reflective evenings.",
			details: [
				
				{
					title: "Product Details",
					description: "4 oz / 113 g candle crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of 20 hours.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
			image: "img/Bundle 1.jpg",
			images: [
				"img/bundle 1.jpg",
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
			image: "img/bundle 2.jpg",
			images: [
				"img/bundle 2.jpg",
		
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
			image: "img/Tin set.jpg",
			images: [
		
				"img/Tin set.jpg",
			],
			description: "A complete sensory journey with all four signature tin scents. This curated collection brings variety and balance to any space, allowing you to explore each fragrance and discover your perfect moments.",
			details: [
				{
					title: "Bundle Contents",
					description: "Includes four 4 oz / 113 g of each candle tin: Clear Night, Soft Resin, Neroli Veil, and Quiet Chypre. Each crafted with a natural coconut soy wax blend for a clean, even burn. Infused with fine fragrance oils for a long-lasting scent experience, with a burn time of 20 hours each.<br><br>Plant-based and non-toxic, free from phthalates, and safe for everyday indoor use when used as directed. Designed for consistent performance and quiet, intentional moments."
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
		},
		{
			id: "the signature-gift-set",
			name: "The Signature Gift Set",
			price: 25,
			category: "Bundle",
			badge: "Custom",
			image: "img/Signature set.jpg",
			images: [
				"img/Signature set.jpg",
			],
			description: "A beautifully paired candle jar and handcrafted concrete tray, perfect for creating a calm and elegant atmosphere in any space.",
			details: [
				{
					title: "Gift Set Details",
					description: "Includes a Lumen Moe candle jar paired with a handcrafted concrete tray (color variant). Together, they create a calm and elegant presentation for any space."
				},
				{
					title: "Customization",
					description: "The candle jar and concrete tray are designed to complement each other as a complete, ready-to-display set."
				},
				{
					title: "Best For",
					description: "Ideal for adding a calm, elegant touch to living spaces, bedside tables, desks, and thoughtful gifts."
				}
			]
		},
		{
			id: "the-floral-set",
			name: "The Floral Set",
			price: null,
			category: "Bundle",
			badge: "Custom",
			image: "img/Flower.jpg",
			images: [
				"img/Flower.jpg",
			],
			description: "A personalized candle arrangement adorned with decorative flowers. Customize your set to suit your style, occasion, and preferred quantity. Price varies depending on customization and quantity.",
			details: [
				{
					title: "Gift Set Details",
					description: "Includes a personalized candle arrangement decorated with flowers for a beautiful and thoughtful presentation."
				},
				{
					title: "Customization",
					description: "Customize the arrangement to match your preferred style, occasion, and quantity. Pricing varies based on your selections."
				},
				{
					title: "Best For",
					description: "Ideal for birthdays, celebrations, special occasions, event styling, and personalized gifts."
				}
			]
		},
		{
			id: "blue-heart-tray-with-lumen-moe-band",
			name: "Blue Heart Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Blue Heart Tray with Lumen Moe Band.jpg",
			images: [
				"img/Blue Heart Tray with Lumen Moe Band.jpg",
			],
			description: "A handcrafted heart-shaped tray with a soft blue finish and Lumen Moe branding, designed to bring a playful accent to quiet spaces.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast and finished with a smooth surface for displaying candles, jewelry, and small everyday essentials.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Bedside tables, dressers, desks, gifting, and small decorative displays."
				}
			]
		},
		{
			id: "cobalt-marbled-tray-with-brand-band",
			name: "Cobalt Marbled Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Cobalt Marbled Tray with Brand Band.jpg",
			images: [
				"img/Cobalt Marbled Tray with Brand Band.jpg",
			],
			description: "A handcrafted cobalt marbled tray with a rich, expressive finish for elevated everyday display.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast and finished with a unique marbled surface. Each piece has its own natural variation.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Coffee tables, shelves, desks, and displaying candles or small essentials."
				}
			]
		},
		{
			id: "lavender-tray-with-lumen-moe-band",
			name: "Lavender Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Lavender Tray with Lumen Moe Band.jpg",
			images: [
				"img/Lavender Tray with Lumen Moe Band.jpg",
			],
			description: "A softly toned lavender tray that adds a calm, refined accent to your everyday rituals.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast with a smooth finish for displaying candles, jewelry, and small personal items.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Bedside tables, vanities, desks, and thoughtful gifts."
				}
			]
		},
		{
			id: "marbled-blue-tray",
			name: "Marbled Blue Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Marbled Blue Tray.jpg",
			images: [
				"img/Marbled Blue Tray.jpg",
			],
			description: "A cool-toned marbled tray with an organic pattern that brings texture and character to a space.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast and finished with a one-of-a-kind blue marbled surface.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Displaying candles, jewelry, and small everyday essentials."
				}
			]
		},
		{
			id: "marbled-orange-lumen-moe-tray",
			name: "Marbled Orange Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Marbled Orange Lumen Moe Tray.jpg",
			images: [
				"img/Marbled Orange Lumen Moe Tray.jpg",
			],
			description: "A warm orange marbled tray that brings a bright, handcrafted accent to quiet interiors.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast and finished with a distinctive orange marbled surface and Lumen Moe character.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Coffee tables, shelves, desks, and decorative displays."
				}
			]
		},
		{
			id: "marbled-resin-tray-with-lumen-moe-sleeve",
			name: "Marbled Red Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Marbled Resin Tray with Lumen Moe Sleeve.jpg",
			images: [
				"img/Marbled Resin Tray with Lumen Moe Sleeve.jpg",
			],
			description: "A refined marbled red tray with a smooth finish for styling candles and daily essentials.",
			details: [
				{
					title: "Product Details",
					description: "Hand-finished marbled red tray with a unique marbled pattern and durable smooth surface.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Candle displays, entryway styling, bedside tables, and gifting."
				}
			]
		},
		{
			id: "marbled-tray-with-lumen-moe-band",
			name: "Mocha Swirl Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Marbled Tray with Lumen Moe Band.jpg",
			images: [
				"img/Marbled Tray with Lumen Moe Band.jpg",
			],
			description: "Inspired by the coffee-like marbling. A handcrafted tray with a smooth finish for everyday styling.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast and finished with a distinctive marbled surface. Each tray is naturally unique.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Candles, jewelry, small essentials, and curated home displays."
				}
			]
		},
		{
			id: "mauve-lumen-moe-tray",
			name: "Dusty Rose Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Mauve Lumen Moe Tray.jpg",
			images: [
				"img/Mauve Lumen Moe Tray.jpg",
			],
			description: "A muted Dusty Rose tray with a soft, modern presence for intentional everyday styling.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast with a smooth Dusty Rose finish and Lumen Moe branding.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Vanities, bedside tables, desks, and gifting."
				}
			]
		},
		{
			id: "minimalist-lumen-moe-tray",
			name: "Minimalist Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Minimalist Lumen Moe Tray Product Shot.jpg",
			images: [
				"img/Minimalist Lumen Moe Tray Product Shot.jpg",
			],
			description: "A clean-lined minimalist tray designed to keep everyday objects beautifully grounded.",
			details: [
				{
					title: "Product Details",
					description: "Hand-finished with a simple, timeless form and a smooth surface for everyday use.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Candles, jewelry, keys, desks, shelves, and bedside styling."
				}
			]
		},
		{
			id: "red-heart-tray",
			name: "Red Heart Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Red Heart Tray.jpg",
			images: [
				"img/Red Heart Tray.jpg",
			],
			description: "A handcrafted red heart-shaped tray that adds a warm, expressive touch to a room.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast with a smooth finish for small decorative objects and everyday essentials.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Gifting, bedside tables, vanities, and joyful decorative displays."
				}
			]
		},
		{
			id: "sage-green-tray",
			name: "Sage Green Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Sage Green Tray.jpg",
			images: [
				"img/Sage Green Tray.jpg",
			],
			description: "A calm sage green tray that brings a natural, understated accent to everyday spaces.",
			details: [
				{
					title: "Product Details",
					description: "Hand-cast and finished with a smooth sage green surface.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Candles, jewelry, desks, shelves, and bedside tables."
				}
			]
		},
		{
			id: "tan-oval-tray",
			name: "Tan Oval Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Tan Oval Tray.jpg",
			images: [
				"img/Tan Oval Tray.jpg",
			],
			description: "A warm tan oval tray with a timeless silhouette for simple, considered styling.",
			details: [
				{
					title: "Product Details",
					description: "Hand-finished oval tray with a smooth surface and a versatile neutral tone.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Coffee tables, entryways, bedside tables, and candle displays."
				}
			]
		},
		{
			id: "two-tone-teal-and-cream-resin-tray",
			name: "Two-Tone Teal and Cream Tray",
			price: 4.8,
			category: "Home Decor",
			badge: "NEW",
			image: "img/Two-Tone Teal and Cream Resin Tray.jpg",
			images: [
				"img/Two-Tone Teal and Cream Resin Tray.jpg",
			],
			description: "A two-tone casting tray pairing teal and cream for a balanced, contemporary accent.",
			details: [
				{
					title: "Product Details",
					description: "Hand-finished casting tray with a smooth two-tone surface. Each piece has its own character.<br><br>Size: 9 cm wide x 17.5 cm long x 1.5 cm thick."
				},
				{
					title: "Best For",
					description: "Displaying candles, jewelry, small essentials, and curated home accents."
				}
			]
		},
		{
			id: "matches",
			name: "Matches",
			price: 1,
			category: "Accessories",
			badge: "NEW",
			image: "img/Lumen Moe Match Bottle Arrangement.jpg",
			images: [
				"img/Lumen Moe Match Bottle Arrangement.jpg",
			],
			options: [
				{
					id: "small",
					label: "Small",
					price: 1,
					description: "Best for candles tins"
				},
				{
					id: "large",
					label: "Large",
					price: 1.5,
					description: "Best for candle jars"
				}
			],
			description: "A Lumen Moe match bottle arrangement designed to pair beautifully with your candle ritual.",
			details: [
				{
					title: "Product Details",
					description: "Small — $1.00, best for candles tins. Large — $1.50, best for candle jars, each bottle contains 10 matches."
				},
				{
					title: "Best For",
					description: "Lighting candles and keeping your home fragrance ritual beautifully styled."
				}
			]
		},
	];

	const CART_KEY = "lumen_cart";
	const RECOMMENDATION_KEY = "lumen_recommendations";
	const MAX_RECOMMENDATION_HISTORY = 40;
	const RECOMMENDATION_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;

	const readRecommendationState = () => {
		try {
			const raw = localStorage.getItem(RECOMMENDATION_KEY);
			const parsed = raw ? JSON.parse(raw) : {};
			const productActivity = parsed && typeof parsed.products === "object" && parsed.products !== null
				? Object.values(parsed.products)
				: [];
			const lastRecordedActivityAt = productActivity.reduce((latest, activity) => Math.max(
				latest,
				Number(activity?.lastViewedAt) || 0,
				Number(activity?.lastAddedAt) || 0
			), 0);
			const lastActivityAt = Number(parsed?.lastActivityAt) || lastRecordedActivityAt;
			if (lastActivityAt && Date.now() - lastActivityAt >= RECOMMENDATION_EXPIRY_MS) {
				localStorage.removeItem(RECOMMENDATION_KEY);
				return { products: {}, recent: [], lastActivityAt: 0 };
			}

			return {
				products: parsed && typeof parsed.products === "object" && parsed.products !== null
					? parsed.products
					: {},
				recent: Array.isArray(parsed?.recent) ? parsed.recent.filter(Boolean).slice(0, MAX_RECOMMENDATION_HISTORY) : [],
				lastActivityAt
			};
		} catch (error) {
			return { products: {}, recent: [], lastActivityAt: 0 };
		}
	};

	const saveRecommendationState = (state) => {
		try {
			localStorage.setItem(RECOMMENDATION_KEY, JSON.stringify(state));
		} catch (error) {
			return false;
		}
		return true;
	};

	const updateRecommendationActivity = (product, activity) => {
		if (!product || !product.id) {
			return;
		}

		const state = readRecommendationState();
		const existing = state.products[product.id] || {
			views: 0,
			additions: 0,
			lastViewedAt: 0,
			lastAddedAt: 0
		};

		state.products[product.id] = {
			views: existing.views + (activity.views || 0),
			additions: existing.additions + (activity.additions || 0),
			lastViewedAt: activity.views ? Date.now() : existing.lastViewedAt,
			lastAddedAt: activity.additions ? Date.now() : existing.lastAddedAt
		};

		if (activity.views) {
			state.recent = [product.id, ...state.recent.filter((id) => id !== product.id)]
				.slice(0, MAX_RECOMMENDATION_HISTORY);
		}

		state.lastActivityAt = Date.now();
		saveRecommendationState(state);
		window.dispatchEvent(new CustomEvent("lumen:recommendations-updated"));
	};

	const getProductMetadata = (product) => {
		const detailText = (product.details || [])
			.flatMap((detail) => detail.notes || [detail])
			.map((detail) => `${detail.title || ""} ${detail.description || ""}`)
			.join(" ");

		return `${product.category || ""} ${product.description || ""} ${detailText}`
			.toLowerCase()
			.split(/[^a-z0-9]+/)
			.filter((word) => word.length > 2);
	};

	const getRecommendations = (currentProductId, limit = 4) => {
		const available = PRODUCT_CATALOG.filter((product) => (
			product.id !== currentProductId &&
			typeof product.price === "number" &&
			Number.isFinite(product.price) &&
			typeof product.image === "string" &&
			product.image.length > 0
		));

		if (available.length <= limit) {
			return [...available];
		}

		const state = readRecommendationState();
		const activityEntries = Object.entries(state.products);
		const hasBehavior = activityEntries.some(([, activity]) => (
			(activity.views || 0) > 0 || (activity.additions || 0) > 0
		));
		const metadata = new Map(available.map((item) => [item.id, getProductMetadata(item)]));
		const recentProducts = state.recent
			.map((id) => PRODUCT_CATALOG.find((item) => item.id === id))
			.filter(Boolean);
		const recentCategories = recentProducts.map((item) => item.category).filter(Boolean);
		const recentTokens = new Set(recentProducts.flatMap((item) => getProductMetadata(item)));
		const now = Date.now();

		const scored = available.map((product) => {
			const activity = state.products[product.id] || {};
			const tokens = metadata.get(product.id) || [];
			const categoryMatches = recentCategories.filter((category) => category === product.category).length;
			const noteMatches = tokens.filter((token) => recentTokens.has(token)).length;
			const daysSinceActivity = activity.lastViewedAt
				? Math.max((now - activity.lastViewedAt) / 86400000, 0)
				: Infinity;
			const recencyScore = Number.isFinite(daysSinceActivity) ? 3 / (1 + daysSinceActivity) : 0;
			const behaviorScore = hasBehavior
				? (activity.views || 0) + ((activity.additions || 0) * 4) + recencyScore + (categoryMatches * 2) + (noteMatches * 0.15)
				: 0;

			return {
				product,
				score: behaviorScore + (Math.random() * (hasBehavior ? 0.8 : 10))
			};
		});

		return scored
			.sort((a, b) => b.score - a.score)
			.slice(0, limit)
			.map(({ product }) => product);
	};

	const recordProductView = (product) => updateRecommendationActivity(product, { views: 1 });
	const recordCartAddition = (product, quantity = 1) => updateRecommendationActivity(product, {
		additions: Math.max(Number(quantity) || 1, 1)
	});

	const getProductById = (id) => PRODUCT_CATALOG.find((product) => product.id === id) || null;

	const formatPrice = (value) => typeof value === "string"
		? value
		: value === null || value === undefined
			? "Custom Price"
			: `$${Number(value).toFixed(2)}`;

	const getCart = () => {
		try {
			const raw = sessionStorage.getItem(CART_KEY);
			if (!raw) {
				return [];
			}

			const parsed = JSON.parse(raw);
			return Array.isArray(parsed)
				? parsed.map((item) => ({
					...item,
					image: typeof item.image === "string"
						? item.image.replace(/^\.\.\/img\//, "img/")
						: item.image
				}))
				: [];
		} catch (error) {
			return [];
		}
	};

	const saveCart = (cart) => {
		sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
		window.dispatchEvent(new CustomEvent("lumen:cart-updated"));
	};

	const addToCart = (product, quantity, selectedOption) => {
		if (!product) {
			return;
		}
		if (typeof product.price === "string" || product.price === null || product.price === undefined) {
			showToast("Please contact us to customize this set and confirm its price.");
			return;
		}

		const qty = Math.min(Math.max(Number(quantity) || 1, 1), 99);
		const option = product.options?.find((item) => item.id === selectedOption?.id) || product.options?.[0];
		const price = option ? option.price : product.price;
		const itemId = option ? `${product.id}:${option.id}` : product.id;
		const itemName = option ? `${product.name} (${option.label})` : product.name;
		recordCartAddition(product, qty);
		const cart = getCart();
		const existing = cart.find((item) => item.id === itemId);

		if (existing) {
			existing.quantity = Math.min(existing.quantity + qty, 99);
		} else {
			cart.push({
				id: itemId,
				productId: product.id,
				name: itemName,
				price,
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
		getRecommendations,
		recordProductView,
		formatPrice,
		getCart,
		saveCart,
		addToCart,
		showToast
	};
})();
