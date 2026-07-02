// ================================
// Product Details Page
// ================================

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));
    const product = products.find(item => item.id === productId);

    if (!product) {
        document.querySelector("main").innerHTML = `
            <section class="section">
                <h1>Product Not Found</h1>
                <p>The product you are looking for does not exist.</p>
                <br>
                <a href="products.html" class="btn primary">Back to Products</a>
            </section>
        `;
        return;
    }

    document.title = `${product.name} | Style Haven`;

    setText("breadcrumbName", product.name);
    setText("productCategory", product.category);
    setText("productName", product.name);
    setText("productPrice", product.price);
    setText("productDescription", product.description);
    setText("productFabric", product.fabric);

    const productImage = document.getElementById("productImage");
    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.name;
    }

    const sizeContainer = document.getElementById("sizeContainer");
    if (sizeContainer) {
        sizeContainer.innerHTML = product.sizes
            .map(size => `<span class="size-badge">${size}</span>`)
            .join("");
    }

    const colorContainer = document.getElementById("colorContainer");
    if (colorContainer) {
        colorContainer.innerHTML = product.colors
            .map(color => `<span class="color-badge">${color}</span>`)
            .join("");
    }

    const orderBtn = document.getElementById("orderBtn");
    if (orderBtn) {
        orderBtn.href = getWhatsAppOrderLink(product);
    }

    renderRelatedProducts(product);
});

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function renderRelatedProducts(currentProduct) {
    const relatedProducts = document.getElementById("relatedProducts");
    if (!relatedProducts) return;

    const related = products
        .filter(item => item.category === currentProduct.category && item.id !== currentProduct.id)
        .slice(0, 4);

    relatedProducts.innerHTML = related.length
        ? related.map(productCard).join("")
        : `<p class="empty-state">No related products available.</p>`;
}
