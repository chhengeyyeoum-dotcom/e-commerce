"use strict";

(() => {
	const PRODUCT_CATALOG = [
		{
			id: "amber-nocturne-jar",
			name: "Amber Nocturne",
			price: 42,
			category: "Candle Jar",
			badge: "New",
			image: "../img/pexels-828860-2586073.jpg",
			images: [
				"../img/pexels-828860-2586073.jpg",
				"../img/pexels-alleksana-7670761.jpg",
				"../img/pexels-828860-2586073.jpg",
				"../img/pexels-828860-2586073.jpg"
			],
			description: "Warm amber, spiced vanilla, and soft musk in a hand-poured glass vessel for slow evenings and layered ambience."
		},
		{
			id: "white-fig-jar",
			name: "White Fig",
			price: 38,
			category: "Candle Jar",
			badge: "",
			image: "../img/pexels-flavia-hitomi-3334329-6421207.jpg",
			images: [
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-liogooo-13898254.jpg",
				"../img/pexels-gstudio-16212410.jpg",
				"../img/pexels-alleksana-7670761.jpg"
			],
			description: "Fresh fig leaf and creamy woods create a clean, modern profile made for daytime rituals and airy interiors."
		},
		{
			id: "santal-dusk-jar",
			name: "Santal Dusk",
			price: 46,
			category: "Candle Jar",
			badge: "Best Seller",
			image: "../img/pexels-medhat-ayad-122846-439227.jpg",
			images: [
				"../img/pexels-medhat-ayad-122846-439227.jpg",
				"../img/pexels-gstudio-16212410.jpg",
				"../img/pexels-liogooo-13898254.jpg",
				"../img/pexels-vika-glitter-392079-1648771.jpg"
			],
			description: "Sandalwood and dry cedar notes settle into a smoky finish that gives depth, calm, and quiet sophistication."
		},
		{
			id: "velvet-cedar-jar",
			name: "Velvet Cedar",
			price: 44,
			category: "Candle Jar",
			badge: "",
			image: "../img/pexels-rdne-8903690.jpg",
			images: [
				"../img/pexels-rdne-8903690.jpg",
				"../img/pexels-pavel-danilyuk-7222031.jpg",
				"../img/pexels-peg1997-12503617.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg"
			],
			description: "Velvety cedar, patchouli, and a hint of cocoa deliver a richer atmosphere for night routines and cozy spaces."
		},
		{
			id: "linen-smoke-tin",
			name: "Linen Smoke Tin",
			price: 24,
			category: "Candle Tin",
			badge: "New",
			image: "../img/pexels-liogooo-13898254.jpg",
			images: [
				"../img/pexels-liogooo-13898254.jpg",
				"../img/pexels-828860-2586073.jpg",
				"../img/pexels-medhat-ayad-122846-439227.jpg",
				"../img/pexels-vika-glitter-392079-1648771.jpg"
			],
			description: "Travel-friendly tin with cotton linen and pale smoke for subtle scent moments in smaller rooms."
		},
		{
			id: "citrus-halo-tin",
			name: "Citrus Halo Tin",
			price: 22,
			category: "Candle Tin",
			badge: "",
			image: "../img/pexels-peg1997-12503617.jpg",
			images: [
				"../img/pexels-peg1997-12503617.jpg",
				"../img/pexels-rdne-8903690.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-pavel-danilyuk-7222031.jpg"
			],
			description: "Bright citrus peel and neroli notes in a compact tin designed for desks, travel bags, and gift sets."
		},
		{
			id: "evening-ritual-duo",
			name: "Evening Ritual Duo",
			price: 68,
			category: "Bundle",
			badge: "Bundle",
			image: "../img/pexels-peg1997-12503617.jpg",
			images: [
				"../img/pexels-peg1997-12503617.jpg",
				"../img/pexels-rdne-8903690.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-pavel-danilyuk-7222031.jpg"
			],
			description: "A pairing of warm woods and resinous amber candles curated to set a calm evening atmosphere."
		},
		{
			id: "signature-discovery-set",
			name: "Signature Discovery Set",
			price: 74,
			category: "Bundle",
			badge: "New",
			image: "../img/pexels-pavel-danilyuk-7222031.jpg",
			images: [
				"../img/pexels-pavel-danilyuk-7222031.jpg",
				"../img/pexels-flavia-hitomi-3334329-6421207.jpg",
				"../img/pexels-gstudio-16212410.jpg",
				"../img/pexels-liogooo-13898254.jpg"
			],
			description: "Our best introductions in one set, ideal for gifting or discovering multiple scent moods at home."
		},
		{
			id: "matte-wick-trimmer",
			name: "Matte Wick Trimmer",
			price: 16,
			category: "Accessories",
			badge: "",
			image: "../img/pexels-medhat-ayad-122846-439227.jpg",
			images: [
				"../img/pexels-medhat-ayad-122846-439227.jpg",
				"../img/pexels-vika-glitter-392079-1648771.jpg",
				"../img/pexels-alleksana-7670761.jpg",
				"../img/pexels-828860-2586073.jpg"
			],
			description: "Precision steel trimmer to keep wicks clean, improve burn quality, and extend candle performance."
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
