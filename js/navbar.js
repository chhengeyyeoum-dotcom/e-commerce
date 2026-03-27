const navbar = document.getElementById("mainNavbar");
const navCollapse = document.getElementById("primaryNav");
const navLinks = navCollapse ? navCollapse.querySelectorAll(".nav-link") : [];
const cartLinks = navbar ? navbar.querySelectorAll('a[href="cart.html"]') : [];
const CART_KEY = "lumen_cart";

const ensureCartBadgeStyles = () => {
    if (document.getElementById("cartCountBadgeStyles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "cartCountBadgeStyles";
    style.textContent = `
        #mainNavbar a[href="cart.html"] {
            position: relative;
        }

        #mainNavbar .cart-count-badge {
            position: absolute;
            top: -6px;
            right: -9px;
            min-width: 18px;
            height: 18px;
            padding: 0 4px;
            border-radius: 999px;
            background: #111;
            color: #fff;
            font-size: 11px;
            font-weight: 600;
            line-height: 18px;
            text-align: center;
            pointer-events: none;
        }
    `;

    document.head.appendChild(style);
};

const getCartCount = () => {
    try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) {
            return 0;
        }

        const cart = JSON.parse(raw);
        if (!Array.isArray(cart)) {
            return 0;
        }

        return cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
    } catch (error) {
        return 0;
    }
};

const getOrCreateBadge = (link) => {
    let badge = link.querySelector(".cart-count-badge");
    if (badge) {
        return badge;
    }

    badge = document.createElement("span");
    badge.className = "cart-count-badge";
    badge.setAttribute("aria-hidden", "true");
    link.appendChild(badge);
    return badge;
};

const updateCartBadge = () => {
    if (!cartLinks.length) {
        return;
    }

    const count = getCartCount();
    cartLinks.forEach((link) => {
        const badge = getOrCreateBadge(link);
        badge.textContent = String(count);
    });
};

const handleNavbarState = () => {
    if (!navbar) {
        return;
    }

    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", handleNavbarState, { passive: true });
window.addEventListener("load", handleNavbarState);
window.addEventListener("load", updateCartBadge);
window.addEventListener("storage", updateCartBadge);
window.addEventListener("lumen:cart-updated", updateCartBadge);

if (cartLinks.length) {
    ensureCartBadgeStyles();
    updateCartBadge();
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (!navCollapse || !navCollapse.classList.contains("show")) {
            return;
        }

        const bootstrapCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        bootstrapCollapse.hide();
    });
});
