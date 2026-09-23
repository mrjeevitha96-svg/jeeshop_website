/* =========================================
   JEE SHOP
   Full-Stack Deployment & Project Architecture
========================================= */


/* =========================================
   PRODUCT DATA
========================================= */

const products = [
  {
    id: 1,
    name: "Relaxed Linen Shirt",
    category: "Clothing",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description:
      "A comfortable linen shirt designed for simple everyday styling."
  },

  {
    id: 2,
    name: "Everyday Cargo Pants",
    category: "Clothing",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
    description:
      "Relaxed cargo pants with a practical everyday fit."
  },

  {
    id: 3,
    name: "Soft Casual Top",
    category: "Clothing",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    description:
      "A simple casual top designed for comfortable everyday outfits."
  },

  {
    id: 4,
    name: "Everyday Makeup Collection",
    category: "Beauty",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    description:
      "A versatile selection of everyday beauty essentials."
  },

  {
    id: 5,
    name: "Soft Floral Perfume",
    category: "Beauty",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    description:
      "A soft floral fragrance suitable for everyday use."
  },

  {
    id: 6,
    name: "Minimal Table Lamp",
    category: "Home",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    description:
      "A modern table lamp designed to add warmth to your space."
  },

  {
    id: 8,
    name: "Everyday Sneakers",
    category: "Footwear",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfortable sneakers made for everyday movement."
  },

  {
    id: 9,
    name: "Minimal Casual Sandals",
    category: "Footwear",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    description:
      "Simple casual sandals with an easy everyday design."
  },

  {
    id: 10,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description:
      "A classic watch with a clean and timeless appearance."
  },

  {
    id: 11,
    name: "Structured Everyday Bag",
    category: "Accessories",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
    description:
      "A structured everyday bag for carrying your essentials."
  },

  {
    id: 12,
    name: "Wireless Headphones",
    category: "Tech",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description:
      "Wireless headphones designed for music and everyday listening."
  }
];


/* =========================================
   APPLICATION STATE
========================================= */

let cart =
  JSON.parse(localStorage.getItem("jeeshop-cart")) || [];


/* =========================================
   DOM ELEMENTS
========================================= */

const app = document.getElementById("app");

const cartDrawer =
  document.getElementById("cartDrawer");

const cartItems =
  document.getElementById("cartItems");

const cartTotal =
  document.getElementById("cartTotal");

const cartCount =
  document.getElementById("cartCount");

const backdrop =
  document.getElementById("backdrop");

const toast =
  document.getElementById("toast");

const searchOverlay =
  document.getElementById("searchOverlay");

const searchInput =
  document.getElementById("searchInput");

const mobileNav =
  document.getElementById("mobileNav");

const menuButton =
  document.getElementById("menuButton");


/* =========================================
   HELPERS
========================================= */

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}


function saveCart() {
  localStorage.setItem(
    "jeeshop-cart",
    JSON.stringify(cart)
  );
}


function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================================
   PRODUCT CARD
========================================= */

function createProductCard(product) {

  return `
    <article class="product-card">

      <a
        href="#/product/${product.id}"
        class="product-image"
        aria-label="View ${product.name}"
      >

        <img
          src="${product.image}"
          alt="${product.name}"
          width="900"
          height="900"
          loading="lazy"
          decoding="async"
        >

      </a>

      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h3>
          <a href="#/product/${product.id}">
            ${product.name}
          </a>
        </h3>

        <div class="product-bottom">

          <strong>
            ${formatPrice(product.price)}
          </strong>

          <button
            class="add-button"
            type="button"
            data-add="${product.id}"
            aria-label="Add ${product.name} to bag"
          >
            +
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================
   FOOTER
========================================= */

function createFooter() {

  return `
    <footer class="footer">

      <div class="footer-content">

        <div>

          <div class="footer-logo">
            JeeShop
          </div>

          <p>
            A modern everyday shopping experience
            built as a full-stack deployment capstone.
          </p>

        </div>

        <div class="footer-links">

          <a href="#/">Home</a>

          <a href="#/shop">Shop</a>

          <a href="#/about">About</a>

          <a href="#/contact">Contact</a>

        </div>

      </div>

      <div class="footer-bottom">
        © ${new Date().getFullYear()} JeeShop.
        All rights reserved.
      </div>

    </footer>
  `;
}


/* =========================================
   HOME PAGE
========================================= */

function renderHome() {

  const featured =
    products.slice(0, 6);

  app.innerHTML = `

    <section class="hero">

      <div class="hero-content">

        <span class="eyebrow">
          WELCOME TO JEESHOP
        </span>

        <h1>
          Everyday shopping,
          <span>made simple.</span>
        </h1>

        <p>
          Discover clothing, beauty, home essentials,
          footwear, accessories and technology
          in one modern shopping experience.
        </p>

        <div class="hero-buttons">

          <a
            href="#/shop"
            class="primary-button"
          >
            Shop Collection
          </a>

          <a
            href="#/about"
            class="secondary-button"
          >
            About JeeShop
          </a>

        </div>

      </div>

      <div class="hero-image">

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80"
          alt="Modern shopping store"
          width="1400"
          height="900"
          fetchpriority="high"
        >

      </div>

    </section>


    <section class="features">

      <div>
        <strong>
          Easy Shopping
        </strong>

        <span>
          Simple product discovery
        </span>
      </div>

      <div>
        <strong>
          Curated Collection
        </strong>

        <span>
          Everyday products in one place
        </span>
      </div>

      <div>
        <strong>
          Simple Checkout
        </strong>

        <span>
          Fast and convenient cart
        </span>
      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <div>

          <span class="eyebrow">
            CATEGORIES
          </span>

          <h2>
            Shop by category
          </h2>

        </div>

        <a
          href="#/shop"
          class="text-link"
        >
          View all →
        </a>

      </div>


      <div class="category-grid">

        ${createCategory(
          "01",
          "Clothing",
          "Everyday styles"
        )}

        ${createCategory(
          "02",
          "Beauty",
          "Beauty essentials"
        )}

        ${createCategory(
          "03",
          "Home",
          "For your space"
        )}

        ${createCategory(
          "04",
          "Footwear",
          "Comfortable choices"
        )}

        ${createCategory(
          "05",
          "Accessories",
          "Complete your look"
        )}

        ${createCategory(
          "06",
          "Tech",
          "Useful technology"
        )}

      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <div>

          <span class="eyebrow">
            FEATURED
          </span>

          <h2>
            Popular picks
          </h2>

        </div>

        <a
          href="#/shop"
          class="text-link"
        >
          Shop everything →
        </a>

      </div>

      <div class="product-grid">

        ${featured
          .map(createProductCard)
          .join("")}

      </div>

    </section>

    ${createFooter()}
  `;
}


function createCategory(number, name, description) {

  return `
    <a
      href="#/shop?category=${name}"
      class="category-card"
    >

      <span>
        ${number}
      </span>

      <div>

        <h3>
          ${name}
        </h3>

        <p>
          ${description}
        </p>

      </div>

    </a>
  `;
}


/* =========================================
   SHOP PAGE
========================================= */

function renderShop() {

  const queryString =
    window.location.hash.split("?")[1] || "";

  const params =
    new URLSearchParams(queryString);

  const selectedCategory =
    params.get("category") || "All";

  const search =
    params.get("search") || "";


  let filtered =
    [...products];


  if (selectedCategory !== "All") {

    filtered =
      filtered.filter(
        product =>
          product.category === selectedCategory
      );
  }


  if (search) {

    filtered =
      filtered.filter(product =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  }


  app.innerHTML = `

    <section class="page-header">

      <span class="eyebrow">
        JEE SHOP
      </span>

      <h1>
        Shop the collection.
      </h1>

      <p>
        Browse our carefully selected
        everyday products.
      </p>

    </section>


    <section class="shop-section">

      <div class="shop-controls">

        <div class="category-filters">

          ${createFilter("All", selectedCategory)}

          ${createFilter(
            "Clothing",
            selectedCategory
          )}

          ${createFilter(
            "Beauty",
            selectedCategory
          )}

          ${createFilter(
            "Home",
            selectedCategory
          )}

          ${createFilter(
            "Footwear",
            selectedCategory
          )}

          ${createFilter(
            "Accessories",
            selectedCategory
          )}

          ${createFilter(
            "Tech",
            selectedCategory
          )}

        </div>


        <select
          id="sortProducts"
          aria-label="Sort products"
        >

          <option value="default">
            Sort by
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="name">
            Name: A-Z
          </option>

        </select>

      </div>


      <div
        class="product-grid"
        id="shopProductGrid"
      >

        ${
          filtered.length
            ? filtered
                .map(createProductCard)
                .join("")
            : `
              <div class="empty-state">

                <h2>
                  No products found
                </h2>

                <p>
                  Try another category or search.
                </p>

                <a
                  href="#/shop"
                  class="primary-button"
                >
                  View all products
                </a>

              </div>
            `
        }

      </div>

    </section>

    ${createFooter()}
  `;


  const sort =
    document.getElementById("sortProducts");


  sort?.addEventListener(
    "change",
    event => {

      let sorted =
        [...filtered];


      if (event.target.value === "low") {

        sorted.sort(
          (a, b) =>
            a.price - b.price
        );
      }


      if (event.target.value === "high") {

        sorted.sort(
          (a, b) =>
            b.price - a.price
        );
      }


      if (event.target.value === "name") {

        sorted.sort(
          (a, b) =>
            a.name.localeCompare(b.name)
        );
      }


      const grid =
        document.getElementById(
          "shopProductGrid"
        );


      if (grid) {

        grid.innerHTML =
          sorted
            .map(createProductCard)
            .join("");
      }

    }
  );
}


function createFilter(
  category,
  selected
) {

  const href =
    category === "All"
      ? "#/shop"
      : `#/shop?category=${category}`;


  const active =
    category === selected
      ? "active"
      : "";


  return `
    <a
      href="${href}"
      class="${active}"
    >
      ${category}
    </a>
  `;
}


/* =========================================
   PRODUCT PAGE
========================================= */

function renderProduct(id) {

  const product =
    products.find(
      item => item.id === Number(id)
    );


  if (!product) {

    renderNotFound();

    return;
  }


  app.innerHTML = `

    <section class="product-detail">

      <div class="product-detail-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          width="900"
          height="900"
        >

      </div>


      <div class="product-detail-info">

        <span class="eyebrow">
          ${product.category}
        </span>

        <h1>
          ${product.name}
        </h1>

        <div class="detail-price">
          ${formatPrice(product.price)}
        </div>

        <p>
          ${product.description}
        </p>

        <button
          class="primary-button"
          type="button"
          data-add="${product.id}"
        >
          Add to Bag
        </button>

      </div>

    </section>

    ${createFooter()}
  `;
}


/* =========================================
   ABOUT
========================================= */

function renderAbout() {

  app.innerHTML = `

    <section class="page-header">

      <span class="eyebrow">
        ABOUT JEESHOP
      </span>

      <h1>
        Shopping should feel simple.
      </h1>

      <p>
        JeeShop is a modern e-commerce capstone
        project focused on creating a clean,
        responsive and accessible shopping experience.
      </p>

    </section>


    <section class="about-section">

      <article class="about-card">

        <span>01</span>

        <h2>
          Simple
        </h2>

        <p>
          A clean interface that makes
          product discovery easy.
        </p>

      </article>


      <article class="about-card">

        <span>02</span>

        <h2>
          Modular
        </h2>

        <p>
          The application is structured around
          reusable JavaScript components and routes.
        </p>

      </article>


      <article class="about-card">

        <span>03</span>

        <h2>
          Responsive
        </h2>

        <p>
          Designed to work smoothly across
          desktop, tablet and mobile devices.
        </p>

      </article>

    </section>

    ${createFooter()}
  `;
}


/* =========================================
   CONTACT
========================================= */

function renderContact() {

  app.innerHTML = `

    <section class="page-header">

      <span class="eyebrow">
        CONTACT
      </span>

      <h1>
        Let's connect.
      </h1>

      <p>
        Have a question?
        Send us a message.
      </p>

    </section>


    <section class="contact-section">

      <form
        class="contact-form"
        id="contactForm"
      >

        <label>
          Name

          <input
            type="text"
            name="name"
            placeholder="Your name"
            autocomplete="name"
            required
          >

        </label>


        <label>
          Email

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autocomplete="email"
            required
          >

        </label>


        <label>
          Message

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

        </label>


        <button
          class="primary-button"
          type="submit"
        >
          Send Message
        </button>

      </form>

    </section>

    ${createFooter()}
  `;


  const form =
    document.getElementById(
      "contactForm"
    );


  form?.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      showToast(
        "Message sent successfully!"
      );

      form.reset();

    }
  );
}


/* =========================================
   404
========================================= */

function renderNotFound() {

  app.innerHTML = `

    <section class="empty-state">

      <span class="eyebrow">
        ERROR 404
      </span>

      <h1>
        Page not found.
      </h1>

      <p>
        The page you're looking for
        doesn't exist.
      </p>

      <a
        href="#/"
        class="primary-button"
      >
        Back Home
      </a>

    </section>

    ${createFooter()}
  `;
}


/* =========================================
   CART
========================================= */

function addToCart(productId) {

  const existing =
    cart.find(
      item => item.id === productId
    );


  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id: productId,
      quantity: 1
    });

  }


  saveCart();

  updateCart();

  showToast(
    "Added to your shopping bag"
  );
}


function increaseQuantity(id) {

  const item =
    cart.find(
      product => product.id === id
    );


  if (!item) return;


  item.quantity++;

  saveCart();

  updateCart();
}


function decreaseQuantity(id) {

  const item =
    cart.find(
      product => product.id === id
    );


  if (!item) return;


  item.quantity--;


  if (item.quantity <= 0) {

    cart =
      cart.filter(
        product =>
          product.id !== id
      );
  }


  saveCart();

  updateCart();
}


function removeFromCart(id) {

  cart =
    cart.filter(
      item =>
        item.id !== id
    );


  saveCart();

  updateCart();
}


function updateCart() {

  const totalItems =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );


  cartCount.textContent =
    totalItems;


  if (!cart.length) {

    cartItems.innerHTML = `

      <div class="cart-empty">

        <h3>
          Your bag is empty
        </h3>

        <p>
          Add something you love.
        </p>

      </div>

    `;

    cartTotal.textContent =
      "₹0";

    return;
  }


  let total = 0;


  cartItems.innerHTML =
    cart.map(item => {

      const product =
        products.find(
          product =>
            product.id === item.id
        );


      if (!product) return "";


      const itemTotal =
        product.price *
        item.quantity;


      total += itemTotal;


      return `

        <div class="cart-item">

          <img
            src="${product.image}"
            alt="${product.name}"
            width="85"
            height="85"
          >

          <div>

            <h4>
              ${product.name}
            </h4>

            <strong>
              ${formatPrice(itemTotal)}
            </strong>


            <div class="quantity-controls">

              <button
                type="button"
                data-decrease="${product.id}"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                type="button"
                data-increase="${product.id}"
                aria-label="Increase quantity"
              >
                +
              </button>

            </div>


            <button
              type="button"
              class="remove-item"
              data-remove="${product.id}"
            >
              Remove
            </button>

          </div>

        </div>

      `;

    }).join("");


  cartTotal.textContent =
    formatPrice(total);
}


/* =========================================
   CART DRAWER
========================================= */

function openCart() {

  cartDrawer.classList.add(
    "open"
  );

  cartDrawer.setAttribute(
    "aria-hidden",
    "false"
  );

  backdrop.classList.add(
    "show"
  );

  document.body.classList.add(
    "no-scroll"
  );
}


function closeCart() {

  cartDrawer.classList.remove(
    "open"
  );

  cartDrawer.setAttribute(
    "aria-hidden",
    "true"
  );

  backdrop.classList.remove(
    "show"
  );

  document.body.classList.remove(
    "no-scroll"
  );
}


/* =========================================
   SEARCH
========================================= */

function openSearch() {

  searchOverlay.classList.add(
    "show"
  );

  searchOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "no-scroll"
  );

  setTimeout(
    () =>
      searchInput.focus(),
    100
  );
}


function closeSearch() {

  searchOverlay.classList.remove(
    "show"
  );

  searchOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "no-scroll"
  );
}


function performSearch() {

  const query =
    searchInput.value.trim();


  if (!query) {

    showToast(
      "Enter a product name"
    );

    return;
  }


  closeSearch();


  window.location.hash =
    `#/shop?search=${encodeURIComponent(query)}`;
}


/* =========================================
   ROUTER
========================================= */

function router() {

  const hash =
    window.location.hash || "#/";


  if (
    hash === "#/" ||
    hash === "#"
  ) {

    renderHome();

    return;
  }


  if (
    hash === "#/shop" ||
    hash.startsWith("#/shop?")
  ) {

    renderShop();

    return;
  }


  if (
    hash.startsWith("#/product/")
  ) {

    const id =
      hash.split("/")[2];

    renderProduct(id);

    return;
  }


  if (
    hash === "#/about"
  ) {

    renderAbout();

    return;
  }


  if (
    hash === "#/contact"
  ) {

    renderContact();

    return;
  }


  renderNotFound();
}


/* =========================================
   GLOBAL CLICK HANDLER
========================================= */

document.addEventListener(
  "click",
  event => {

    const addButton =
      event.target.closest(
        "[data-add]"
      );


    if (addButton) {

      addToCart(
        Number(
          addButton.dataset.add
        )
      );

      return;
    }


    const increase =
      event.target.closest(
        "[data-increase]"
      );


    if (increase) {

      increaseQuantity(
        Number(
          increase.dataset.increase
        )
      );

      return;
    }


    const decrease =
      event.target.closest(
        "[data-decrease]"
      );


    if (decrease) {

      decreaseQuantity(
        Number(
          decrease.dataset.decrease
        )
      );

      return;
    }


    const remove =
      event.target.closest(
        "[data-remove]"
      );


    if (remove) {

      removeFromCart(
        Number(
          remove.dataset.remove
        )
      );

    }

  }
);


/* =========================================
   HEADER EVENTS
========================================= */

document
  .getElementById("cartButton")
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


backdrop.addEventListener(
  "click",
  closeCart
);


document
  .getElementById("searchButton")
  .addEventListener(
    "click",
    openSearch
  );


document
  .getElementById("closeSearch")
  .addEventListener(
    "click",
    closeSearch
  );


document
  .getElementById("searchSubmit")
  .addEventListener(
    "click",
    performSearch
  );


searchInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      performSearch();
    }


    if (
      event.key === "Escape"
    ) {

      closeSearch();
    }

  }
);


/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener(
  "click",
  () => {

    const isOpen =
      mobileNav.classList.toggle(
        "open"
      );


    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

  }
);


mobileNav.addEventListener(
  "click",
  event => {

    if (
      event.target.tagName === "A"
    ) {

      mobileNav.classList.remove(
        "open"
      );

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);


/* =========================================
   CHECKOUT
========================================= */

document
  .getElementById("checkoutButton")
  .addEventListener(
    "click",
    () => {

      if (!cart.length) {

        showToast(
          "Your shopping bag is empty"
        );

        return;
      }


      cart = [];

      saveCart();

      updateCart();

      closeCart();

      showToast(
        "Demo order placed successfully!"
      );

    }
  );


/* =========================================
   ROUTER EVENTS
========================================= */

window.addEventListener(
  "hashchange",
  router
);


/* =========================================
   INITIALIZE
========================================= */

router();

updateCart();