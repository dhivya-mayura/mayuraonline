// ================================
// Style Haven Main Script
// ================================

const STORE_PHONE_NUMBER = "919999999999"; // Replace with your real WhatsApp number.

const products = [
    {
        id: 1,
        name: "Classic Linen Shirt",
        category: "Men",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900",
        short: "Breathable linen shirt for smart everyday style.",
        description: "A lightweight linen shirt designed for comfort and clean everyday styling.",
        fabric: "Linen Blend",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Beige", "Navy"]
    },
    {
        id: 2,
        name: "Relaxed Cotton Kurta",
        category: "Men",
        price: "₹1,599",
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=900",
        short: "Comfortable kurta for festive and casual occasions.",
        description: "A soft cotton kurta with a relaxed fit, ideal for festive and semi-casual wear.",
        fabric: "Cotton",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["Cream", "Olive", "Black"]
    },
    {
        id: 3,
        name: "Elegant Floral Dress",
        category: "Women",
        price: "₹1,899",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900",
        short: "A graceful floral dress for day outings.",
        description: "A flowy floral dress with a flattering fit, perfect for casual gatherings and brunches.",
        fabric: "Rayon",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Pink", "Blue", "Yellow"]
    },
    {
        id: 4,
        name: "Premium Co-Ord Set",
        category: "Women",
        price: "₹2,199",
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900",
        short: "Modern matching set with a polished look.",
        description: "A stylish co-ord set created for comfort, movement, and effortless fashion.",
        fabric: "Cotton Blend",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Brown", "Black", "Sage"]
    },
    {
        id: 5,
        name: "Kids Casual Set",
        category: "Kids",
        price: "₹999",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900",
        short: "Soft and playful outfit for active kids.",
        description: "A comfortable kids set made with soft fabric for everyday play and outings.",
        fabric: "Soft Cotton",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        colors: ["Red", "Blue", "Green"]
    },
    {
        id: 6,
        name: "Festive Kids Wear",
        category: "Kids",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900",
        short: "Bright festive wear for special days.",
        description: "A festive kids outfit with comfortable stitching and cheerful styling.",
        fabric: "Cotton Silk",
        sizes: ["2-3Y", "4-5Y", "6-7Y"],
        colors: ["Maroon", "Gold", "Purple"]
    },
    {
        id: 7,
        name: "Designer Ethnic Kurti",
        category: "Ethnic Wear",
        price: "₹1,799",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900",
        short: "Elegant ethnic kurti for festive styling.",
        description: "A designer ethnic kurti with rich detailing and a comfortable fit.",
        fabric: "Rayon Blend",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Red", "Mustard", "Teal"]
    },
    {
        id: 8,
        name: "Traditional Festive Set",
        category: "Ethnic Wear",
        price: "₹2,499",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=900",
        short: "Traditional festive outfit with premium finish.",
        description: "A complete traditional set designed for celebrations, festivals, and family events.",
        fabric: "Silk Blend",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Green", "Wine", "Royal Blue"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupWhatsAppContact();
    renderHomeArrivals();
    renderProductsPage();
});

function setupMobileMenu() {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const isOpen = navMenu.classList.contains("active");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "☰";
        });
    });
}

function setupWhatsAppContact() {
    const whatsappBtn = document.getElementById("whatsappBtn");
    if (!whatsappBtn) return;

    const message = "Hi, I would like to know more about Style Haven products.";
    whatsappBtn.href = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productCard(product) {
    return `
        <article class="product-card">
            <a href="product.html?id=${product.id}" aria-label="View ${product.name}">
                <img src="${product.image}" alt="${product.name}">
            </a>

            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <a class="product-link" href="product.html?id=${product.id}">
                    <h3>${product.name}</h3>
                </a>
                <p class="product-short">${product.short}</p>
                <span class="price">${product.price}</span>

                <div class="product-buttons">
                    <a href="product.html?id=${product.id}" class="btn secondary">Details</a>
                    <a href="${getWhatsAppOrderLink(product)}" class="order-link" target="_blank" rel="noopener">Order</a>
                </div>
            </div>
        </article>
    `;
}

function getWhatsAppOrderLink(product) {
    const message = `Hi, I would like to order ${product.name} (${product.price}). Please share sizes and delivery details.`;
    return `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderHomeArrivals() {
    const grid = document.getElementById("newArrivalsGrid");
    if (!grid) return;

    grid.innerHTML = products.slice(0, 4).map(productCard).join("");
}

function renderProductsPage() {
    const grid = document.getElementById("productGrid");
    const filterBar = document.getElementById("filterBar");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    let selectedCategory = params.get("category") || "All";

    function render(category) {
        const visibleProducts = category === "All"
            ? products
            : products.filter(product => product.category === category);

        grid.innerHTML = visibleProducts.length
            ? visibleProducts.map(productCard).join("")
            : `<p class="empty-state">No products found in this category.</p>`;

        if (filterBar) {
            filterBar.querySelectorAll(".filter-btn").forEach(button => {
                button.classList.toggle("active", button.dataset.category === category);
            });
        }
    }

    if (filterBar) {
        filterBar.querySelectorAll(".filter-btn").forEach(button => {
            button.addEventListener("click", () => {
                selectedCategory = button.dataset.category;
                const newUrl = selectedCategory === "All"
                    ? "products.html"
                    : `products.html?category=${encodeURIComponent(selectedCategory)}`;
                history.replaceState(null, "", newUrl);
                render(selectedCategory);
            });
        });
    }

    render(selectedCategory);
}
