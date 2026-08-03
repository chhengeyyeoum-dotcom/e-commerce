const navbar = document.getElementById("mainNavbar") || document.querySelector(".site-nav");
const navCollapse = document.getElementById("primaryNav");
const navToggle = document.getElementById("navToggle");
const siteNav = document.querySelector(".site-nav");
const siteNavLinks = document.getElementById("siteNavLinks");
const navLinks = navCollapse ? navCollapse.querySelectorAll(".nav-link") : (siteNavLinks ? siteNavLinks.querySelectorAll("a") : []);
const cartLinks = navbar ? navbar.querySelectorAll('a[href="cart.html"]') : [];
const CART_KEY = "lumen_cart";

const initializeNavbar = () => {
    if (window.__lumenNavbarInitialized) {
        return;
    }

    const closeMenu = () => {
        if (siteNav) {
            siteNav.classList.remove("is-open");
        }

        if (navToggle) {
            navToggle.setAttribute("aria-expanded", "false");
        }
    };

    const handleNavbarState = () => {
        if (!navbar) {
            return;
        }

        navbar.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    if (navToggle && siteNav && siteNavLinks) {
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

    window.addEventListener("scroll", handleNavbarState, { passive: true });
    window.addEventListener("load", handleNavbarState);
    window.addEventListener("load", updateCartBadge);
    window.addEventListener("storage", updateCartBadge);
    window.addEventListener("lumen:cart-updated", updateCartBadge);

    if (cartLinks.length) {
        ensureCartBadgeStyles();
        updateCartBadge();
    }

    window.__lumenNavbarInitialized = true;
};

const ensureCartBadgeStyles = () => {
    if (document.getElementById("cartCountBadgeStyles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "cartCountBadgeStyles";
    style.textContent = `
        .site-nav a[href="cart.html"],
        #mainNavbar a[href="cart.html"] {
            position: relative;
        }

        .site-nav .cart-count-badge,
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
        if (count <= 0) {
            const badge = link.querySelector(".cart-count-badge");
            if (badge) {
                badge.remove();
            }
            return;
        }

        const badge = getOrCreateBadge(link);
        badge.textContent = String(count);
    });
};

initializeNavbar();

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (!navCollapse || !navCollapse.classList.contains("show")) {
            return;
        }

        if (window.bootstrap && window.bootstrap.Collapse) {
            const bootstrapCollapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapse);
            bootstrapCollapse.hide();
        }
    });
});
