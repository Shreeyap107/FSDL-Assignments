/* Product catalog data */
const products = [
  { id: 1, name: "Bridal Lehenga Set", price: 1199, audience: "Women", type: "Dress", popularity: 98, image: "https://lh6.googleusercontent.com/proxy/FCLhnFzvpon14-U_j5vbHqr6ccohpBP1LxQMtiHOykgplGvg8s1RYmpwesBuAeByyWc-OjTU0GlE3uBEDvDrfnMZc50svqcuG8X6iBs83fUtzkfl5JmMWHUkIZ4EI8LzRy-W17TPEtsEw_zSYlvppaDajrllFSwJvOSTwTi8imxkCOrg_O3oqwJMn4P5EKfZfV3yVNyD4Iba" },
  { id: 2, name: "Designer Saree", price: 1899, audience: "Women", type: "Dress", popularity: 95, image: "https://kaalgi.com/cdn/shop/files/photo_2024-05-30_12-37-04_4e09e32a-05b9-4eaa-9dd9-e9fdc9eb3d77.jpg?v=1719132377" },
  { id: 3, name: "Cocktail Gown", price: 2199, audience: "Women", type: "Dress", popularity: 92, image: "https://media.samyakk.in/pub/media/catalog/product/d/a/dark-mauve-sequins-embroidered-net-cocktail-gown-gw4394-b.jpg" },
  { id: 4, name: "Men Sherwani", price: 2299, audience: "Men", type: "Dress", popularity: 94, image: "https://adanicreations.com/cdn/shop/files/DSC_4566-1_copy.jpg?v=1746255821" },
  { id: 5, name: "Nehru Jacket Kurta Set", price: 1499, audience: "Men", type: "Dress", popularity: 88, image: "https://lh5.googleusercontent.com/proxy/-OAk_7pDUU69kYogG94fSVyTNelh3gZaEx0HhZtHsLcK77tAixQNasltr1EqyE0bgDJnZ0lz7BPrNf8wg6Mori93qpZouf1gg_GymuFXZedCDUccdAYul7Wp" },
  { id: 6, name: "Girls Party Gown", price: 1099, audience: "Kids", type: "Dress", popularity: 84, image: "https://img4.dhresource.com/webp/m/f3/albu/km/y/20/572670c4-b505-47dc-9fc6-3bc2f7fc6fcf.jpg" },
  { id: 7, name: "Kids Ethnic Kurta", price: 899, audience: "Kids", type: "Dress", popularity: 80, image: "https://lh6.googleusercontent.com/proxy/ii7dn_huVUDEIEQC9d56a73Wa8z3l5hgYonEGIHJGDEQEraci2UVffU1uIkuucjdpPnZvuks53V5YTVHY5RYi_MN019IcVVZCfo6atsRNOXvOGC8D6mJQvh9NeDy-rnm1Af0jUNiGDe4YUcc0NI" },

  { id: 8, name: "Golden Heels", price: 699, audience: "Women", type: "Footwear", popularity: 93, image: "https://media.istockphoto.com/id/535079087/vector/silver-golden-shoe-with-crystals.jpg?s=612x612&w=0&k=20&c=BxCSe9LyBM3fBPwPa4ZUky8GSlr1692hUw4cPbwKIMk=" },
  { id: 10, name: "Bridal Sandals", price: 799, audience: "Women", type: "Footwear", popularity: 90, image: "https://i.pinimg.com/736x/95/6d/ae/956daed07a419b49e8a0d2d6374a5885.jpg" },
  { id: 11, name: "Classic Loafers", price: 649, audience: "Men", type: "Footwear", popularity: 86, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTup4NBiwNtQeMU1pRPaEs9LQOPRoUIBpiT4w&s" },
  { id: 12, name: "Kids Sparkle Shoes", price: 399, audience: "Kids", type: "Footwear", popularity: 79, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Y3iZOR8zIKaaMZ9cWVB1zVmeYb2sNkxpvw&s" },

 { id: 15, name: "Pearl Choker", price: 749, audience: "Women", type: "Jewelry", popularity: 85, image: "https://lh6.googleusercontent.com/proxy/fJUdEzSRrmVnQFfjiu7EO5QknNlgDazPsK_LCrDQok3GksHd2ZGg-WitD4AXw4Pwh7NHAVtt9Oc44R7W9e4U2n1WV8mo_7UhMWNBpTjGuyoLG3Sd2uKpA91MRU5T2Z10iK6o9O0EtVnBCNHpfVvRpWX18CncvF37o7Y" },
  { id: 16, name: "Men Brooch Set", price: 499, audience: "Men", type: "Jewelry", popularity: 78, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhHLsEQmznbp34XN1hGSZj0uP-7HkoNN33w&s" },
  { id: 17, name: "Kids Tiara & Bangles", price: 349, audience: "Kids", type: "Jewelry", popularity: 76, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9v2wUk2b5veSG7oEjKB0TW8DcpNC4uC52Q&s" },

  { id: 18, name: "Reception Lehenga", price: 2699, audience: "Women", type: "Dress", popularity: 93, image: "https://i.pinimg.com/736x/02/93/56/029356a38e5f6f1780d461f9c1c11216.jpg" },
  { id: 19, name: "Anarkali Suit Set", price: 1599, audience: "Women", type: "Dress", popularity: 89, image: "https://kisakshijaipur.com/cdn/shop/files/WhatsAppImage2025-01-16at17.51.19_1.jpg?v=1754561649" },
 { id: 24, name: "Girls Sharara Set", price: 1099, audience: "Kids", type: "Dress", popularity: 83, image: "https://cdn.shopify.com/s/files/1/0780/6533/6637/files/girls-purple-embellished-sharara-set-jaipur.webp?v=1748789076" },

  { id: 25, name: "Embellished Bridal Heels", price: 849, audience: "Women", type: "Footwear", popularity: 88, image: "https://i.pinimg.com/736x/cf/e3/b0/cfe3b04aaf978970bcc3ee7b5450ecb2.jpg" },
 { id: 27, name: "Royal Jodhpuri Jutti", price: 649, audience: "Men", type: "Footwear", popularity: 86, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg74qRfo2qGrmBHxrrqMFWlYKn5gZCN6PDbQ&s" },
  
  { id: 30, name: "Polki Earrings Set", price: 699, audience: "Women", type: "Jewelry", popularity: 88, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUO8dJoktIoiSqq3q5Uxe0moVjg6qpI7RPw&s" },
  { id: 31, name: "Maang Tikka Combo", price: 549, audience: "Women", type: "Jewelry", popularity: 86, image: "https://i.pinimg.com/564x/bc/7f/45/bc7f45838e1ebb8f3179b5089975e542.jpg" },
  { id: 32, name: "Men Pearl Mala", price: 399, audience: "Men", type: "Jewelry", popularity: 77, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ESMscsUgbXGKwarTGEE5AIRiG9o_Q_VCgw&s" },
  { id: 33, name: "Kids Floral Hair Accessories", price: 299, audience: "Kids", type: "Jewelry", popularity: 74, image: "https://liandli.in/cdn/shop/files/LIHA85-1_dd1c585e-eb5d-46f0-9efd-8c52fe7eb65f.jpg?v=1750307285" }
];

/* Cached DOM references */
const productContainer = document.getElementById("productContainer");
const cartCountEl = document.getElementById("cartCount");
const resultCountEl = document.getElementById("resultCount");
const searchInputEl = document.getElementById("searchInput");
const statusAlertContainer = document.getElementById("statusAlertContainer");
const profileBtnTextEl = document.getElementById("profileBtnText");

const typeDropdownBtn = document.getElementById("typeDropdownBtn");
const sortDropdownBtn = document.getElementById("sortDropdownBtn");

const authModalEl = document.getElementById("authModal");
const authModalTitleEl = document.getElementById("authModalTitle");
const authFormEl = document.getElementById("authForm");
const authNameWrapEl = document.getElementById("authNameWrap");
const authNameEl = document.getElementById("authName");
const authEmailEl = document.getElementById("authEmail");
const authPasswordEl = document.getElementById("authPassword");
const authSubmitBtnEl = document.getElementById("authSubmitBtn");
const authSwitchLabelEl = document.getElementById("authSwitchLabel");

const rentModalEl = document.getElementById("rentModal");
const rentImageEl = document.getElementById("rentImage");
const rentNameEl = document.getElementById("rentName");
const rentTypeEl = document.getElementById("rentType");
const rentPriceEl = document.getElementById("rentPrice");
const fromDateEl = document.getElementById("fromDate");
const toDateEl = document.getElementById("toDate");
const sizeEl = document.getElementById("size");
const quantityEl = document.getElementById("quantity");
const totalAmountEl = document.getElementById("totalAmount");
const confirmBtnEl = document.getElementById("confirmBtn");

const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

/* App state */
let currentCategory = "All";
let currentType = "All";
let currentSort = "popular";
let currentSearch = "";

let selectedProduct = null;
let cart = [];
let authMode = "signin";
let currentUser = null;

const USERS_KEY = "kalaFashionUsers";
const CURRENT_USER_KEY = "kalaFashionCurrentUser";

function formatMoney(amount) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

function getStoredUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  } catch {
    return null;
  }
}

function saveCurrentUser(user) {
  if (!user) {
    localStorage.removeItem(CURRENT_USER_KEY);
    return;
  }
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function updateAuthButton() {
  profileBtnTextEl.textContent = currentUser ? currentUser.name.split(" ")[0] : "Sign In";
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignUp = mode === "signup";

  authModalTitleEl.textContent = isSignUp ? "Create Account" : "Sign In";
  authSubmitBtnEl.textContent = isSignUp ? "Create Account" : "Sign In";
  authSwitchLabelEl.textContent = isSignUp ? "Already have an account?" : "New here?";
  document.getElementById("authSwitchBtn").textContent = isSignUp ? "Sign in" : "Create account";

  authNameWrapEl.classList.toggle("d-none", !isSignUp);
  authNameEl.required = isSignUp;
}

function openAuthModal(mode = "signin") {
  setAuthMode(mode);
  authFormEl.reset();
  new bootstrap.Modal(authModalEl).show();
}

function requireLogin(actionLabel = "continue") {
  if (currentUser) return true;
  showAlert(`Please sign in to ${actionLabel}.`, "warning");
  openAuthModal("signin");
  return false;
}

function handleProfileAction() {
  if (!currentUser) {
    openAuthModal("signin");
    return;
  }

  const shouldLogout = window.confirm(`Signed in as ${currentUser.name}. Do you want to log out?`);
  if (!shouldLogout) return;

  currentUser = null;
  saveCurrentUser(null);
  updateAuthButton();
  showAlert("You have been logged out.", "info");
}

function toggleAuthMode() {
  setAuthMode(authMode === "signin" ? "signup" : "signin");
}

function buildSvgPlaceholder(label) {
  const text = encodeURIComponent(label);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1100'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%23e9d4bd'/><stop offset='1' stop-color='%23d9b995'/></linearGradient></defs><rect width='900' height='1100' fill='url(%23g)'/><text x='50%' y='50%' text-anchor='middle' fill='%2356382a' font-size='52' font-family='Poppins, Arial' dy='.35em'>${text}</text></svg>`;
}

/* Image fallback logic so Live Server always shows a usable image */
function getFallbackImage(type) {
  const fallbackMap = {
    Dress: "https://source.unsplash.com/900x1100/?fashion,dress&sig=9001",
    Footwear: "https://source.unsplash.com/900x1100/?footwear,shoes&sig=9002",
    Jewelry: "https://source.unsplash.com/900x1100/?jewelry,necklace&sig=9003"
  };

  return fallbackMap[type] || buildSvgPlaceholder("Kala's Fashion Hub");
}

function handleImageError(imgEl) {
  const imageType = imgEl.dataset.type || "Item";

  if (imgEl.dataset.fallbackApplied === "true") {
    imgEl.onerror = null;
    imgEl.src = buildSvgPlaceholder(`${imageType} Image`);
    return;
  }

  imgEl.dataset.fallbackApplied = "true";
  imgEl.onerror = null;
  imgEl.src = getFallbackImage(imageType);
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = buildSvgPlaceholder(`${imageType} Image`);
  };
}

function getSizeOptions(type) {
  if (type === "Footwear") return ["UK-4", "UK-5", "UK-6", "UK-7", "UK-8", "UK-9", "UK-10"];
  if (type === "Jewelry") return ["Free Size"];
  return ["XS", "S", "M", "L", "XL", "XXL"];
}

/* Bootstrap alert helper */
function showAlert(message, type = "success") {
  const wrapper = document.createElement("div");
  wrapper.className = `alert alert-${type} alert-dismissible fade show shadow-sm`;
  wrapper.setAttribute("role", "alert");
  wrapper.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

  statusAlertContainer.appendChild(wrapper);
  setTimeout(() => {
    if (wrapper.parentNode) {
      wrapper.classList.remove("show");
      wrapper.addEventListener("transitionend", () => wrapper.remove(), { once: true });
    }
  }, 3000);
}

/* Render products as Bootstrap cards */
function render(list) {
  productContainer.innerHTML = "";

  if (list.length === 0) {
    productContainer.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning mb-0">No rental items match your current filters.</div>
      </div>
    `;
    resultCountEl.textContent = "0 items";
    return;
  }

  const cardsMarkup = list.map((item, idx) => `
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <article class="card product-card h-100 border-0 reveal-on-scroll" style="--reveal-delay:${Math.min(idx * 0.05, 0.5)}s;">
        <div class="product-image-wrap">
          <img src="${item.image}" alt="${item.name}" data-type="${item.type}" loading="lazy" onerror="handleImageError(this)">
        </div>
        <div class="card-body product-body d-flex flex-column">
          <div class="badges-row">
            <span class="badge-soft">${item.audience}</span>
            <span class="badge-soft">${item.type}</span>
          </div>
          <h4 class="item-name">${item.name}</h4>
          <p class="price-line">Rs ${formatMoney(item.price)} / day</p>
          <p class="meta-line">Popularity score: ${item.popularity}</p>
          <button class="rent-now-btn mt-auto" type="button" onclick="openRentModal(${item.id})">Rent Now</button>
        </div>
      </article>
    </div>
  `).join("");

  productContainer.innerHTML = cardsMarkup;
  observeRevealElements(productContainer.querySelectorAll(".reveal-on-scroll"));
  resultCountEl.textContent = `${list.length} item${list.length > 1 ? "s" : ""}`;
}

let revealObserver = null;

function observeRevealElements(elements) {
  if (!revealObserver || !elements || elements.length === 0) return;
  elements.forEach((el) => revealObserver.observe(el));
}

function initScrollAnimations() {
  const staticRevealNodes = document.querySelectorAll(
    ".hero-carousel, .section-head, .featured-card, .controls-panel, .site-footer"
  );

  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    observeRevealElements(staticRevealNodes);
  } else {
    staticRevealNodes.forEach((el) => el.classList.add("is-visible"));
  }

  const navbar = document.querySelector(".main-navbar");
  if (navbar) {
    const toggleNavbarState = () => {
      navbar.classList.toggle("navbar-scrolled", window.scrollY > 14);
    };
    toggleNavbarState();
    window.addEventListener("scroll", toggleNavbarState, { passive: true });
  }
}

function applyFilters() {
  const filtered = products
    .filter((item) => currentCategory === "All" || item.audience === currentCategory)
    .filter((item) => currentType === "All" || item.type === currentType)
    .filter((item) => item.name.toLowerCase().includes(currentSearch.toLowerCase()));

  const sorted = [...filtered];

  if (currentSort === "priceLow") sorted.sort((a, b) => a.price - b.price);
  if (currentSort === "priceHigh") sorted.sort((a, b) => b.price - a.price);
  if (currentSort === "nameAZ") sorted.sort((a, b) => a.name.localeCompare(b.name));
  if (currentSort === "popular") sorted.sort((a, b) => b.popularity - a.popularity);

  render(sorted);
}

function setActiveAudienceButton(targetBtn) {
  document.querySelectorAll(".audience-btn").forEach((btn) => btn.classList.remove("active"));
  if (targetBtn) targetBtn.classList.add("active");
}

/* Audience filter from button group */
function filterCategory(value, btnEl = null) {
  currentCategory = value;
  setActiveAudienceButton(btnEl);
  applyFilters();
}

/* Type filter from dropdown */
function setTypeFromMenu(value, label) {
  currentType = value;
  typeDropdownBtn.textContent = `Type: ${label}`;
  applyFilters();
}

/* Sort from dropdown */
function setSortFromMenu(value, label) {
  currentSort = value;
  sortDropdownBtn.textContent = `Sort: ${label}`;
  applyFilters();
}

function searchProducts(value) {
  currentSearch = value;
  applyFilters();
}

/* Quick filter for featured cards and navbar dropdown */
function quickFilter(audience, type) {
  currentCategory = audience;
  currentType = type;

  const audienceBtnMap = {
    All: document.querySelector(".audience-btn:nth-child(1)"),
    Women: document.querySelector(".audience-btn:nth-child(2)"),
    Men: document.querySelector(".audience-btn:nth-child(3)"),
    Kids: document.querySelector(".audience-btn:nth-child(4)")
  };

  setActiveAudienceButton(audienceBtnMap[audience] || audienceBtnMap.All);

  const typeLabelMap = {
    All: "All",
    Dress: "Dresses",
    Footwear: "Footwear",
    Jewelry: "Jewelry"
  };

  typeDropdownBtn.textContent = `Type: ${typeLabelMap[type] || "All"}`;
  applyFilters();

  document.getElementById("productsSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFilters() {
  currentCategory = "All";
  currentType = "All";
  currentSort = "popular";
  currentSearch = "";

  searchInputEl.value = "";
  setActiveAudienceButton(document.querySelector(".audience-btn:nth-child(1)"));
  typeDropdownBtn.textContent = "Type: All";
  sortDropdownBtn.textContent = "Sort: Popular";

  applyFilters();
  showAlert("Filters reset.", "info");
}

/* Rent modal open */
function openRentModal(productId) {
  if (!requireLogin("rent items")) return;

  selectedProduct = products.find((item) => item.id === productId);
  if (!selectedProduct) return;

  rentImageEl.dataset.type = selectedProduct.type;
  rentImageEl.dataset.fallbackApplied = "false";
  rentImageEl.onerror = null;
  rentImageEl.src = selectedProduct.image;
  rentImageEl.onerror = () => handleImageError(rentImageEl);

  rentNameEl.textContent = selectedProduct.name;
  rentTypeEl.textContent = `${selectedProduct.audience} ${selectedProduct.type}`;
  rentPriceEl.textContent = formatMoney(selectedProduct.price);

  const sizes = getSizeOptions(selectedProduct.type);
  sizeEl.innerHTML = sizes.map((size, idx) => `<option value="${size}" ${idx === 0 ? "selected" : ""}>${size}</option>`).join("");

  fromDateEl.value = "";
  toDateEl.value = "";
  quantityEl.value = 1;
  totalAmountEl.textContent = "0";

  new bootstrap.Modal(rentModalEl).show();
}

function calculateRent() {
  if (!selectedProduct) return;

  const fromDate = fromDateEl.value;
  const toDate = toDateEl.value;
  const qty = Number(quantityEl.value);

  if (!fromDate || !toDate || qty < 1) {
    totalAmountEl.textContent = "0";
    return;
  }

  const from = new Date(fromDate);
  const to = new Date(toDate);
  const days = Math.ceil((to - from) / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    totalAmountEl.textContent = "0";
    return;
  }

  const total = days * selectedProduct.price * qty;
  totalAmountEl.textContent = formatMoney(total);
}

[fromDateEl, toDateEl, quantityEl].forEach((element) => {
  element.addEventListener("change", calculateRent);
  element.addEventListener("input", calculateRent);
});

/* Confirm rent and push to cart */
confirmBtnEl.addEventListener("click", () => {
  if (!selectedProduct) return;

  const fromDate = fromDateEl.value;
  const toDate = toDateEl.value;
  const qty = Number(quantityEl.value);

  const from = new Date(fromDate);
  const to = new Date(toDate);
  const days = Math.ceil((to - from) / (1000 * 60 * 60 * 24));

  if (!fromDate || !toDate || days <= 0 || qty < 1) {
    showAlert("Please select valid rental dates and quantity.", "danger");
    return;
  }

  const total = days * selectedProduct.price * qty;

  cart.push({
    name: selectedProduct.name,
    type: selectedProduct.type,
    audience: selectedProduct.audience,
    size: sizeEl.value,
    qty,
    days,
    fromDate,
    toDate,
    total
  });

  cartCountEl.textContent = cart.length;
  showAlert(`${selectedProduct.name} added to cart.`, "success");

  const modalInstance = bootstrap.Modal.getInstance(rentModalEl);
  if (modalInstance) modalInstance.hide();
});

/* Open cart modal */
function openCart() {
  if (!requireLogin("open your cart")) return;

  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="alert alert-info mb-0">Your cart is empty.</div>';
    cartTotalEl.textContent = "0";
    new bootstrap.Modal(document.getElementById("cartModal")).show();
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    total += item.total;

    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <h6>${item.name}</h6>
        <p>${item.audience} ${item.type} | Size: ${item.size} | Qty: ${item.qty}</p>
        <p>${item.fromDate} to ${item.toDate} (${item.days} day${item.days > 1 ? "s" : ""})</p>
        <p><strong>Rs ${formatMoney(item.total)}</strong></p>
      </div>
    `;
  });

  cartTotalEl.textContent = formatMoney(total);
  new bootstrap.Modal(document.getElementById("cartModal")).show();
}

/* Checkout action */
function payNow() {
  if (!requireLogin("checkout")) return;

  if (cart.length === 0) {
    showAlert("Your cart is empty.", "warning");
    return;
  }

  cart = [];
  cartCountEl.textContent = "0";
  cartItemsEl.innerHTML = "";
  cartTotalEl.textContent = "0";

  showAlert("Payment successful. Your rentals are confirmed.", "success");

  const modalInstance = bootstrap.Modal.getInstance(document.getElementById("cartModal"));
  if (modalInstance) modalInstance.hide();
}

/* Init */
searchInputEl.addEventListener("input", (e) => searchProducts(e.target.value));
authFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = authEmailEl.value.trim().toLowerCase();
  const password = authPasswordEl.value.trim();
  const name = authNameEl.value.trim();

  if (!email || !password || (authMode === "signup" && !name)) {
    showAlert("Please fill all required fields.", "danger");
    return;
  }

  const users = getStoredUsers();

  if (authMode === "signup") {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      showAlert("Account already exists. Please sign in.", "warning");
      setAuthMode("signin");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);
    currentUser = { name, email };
    saveCurrentUser(currentUser);
    updateAuthButton();
    showAlert(`Welcome ${name}, account created successfully.`, "success");
  } else {
    const matchedUser = users.find((user) => user.email === email && user.password === password);
    if (!matchedUser) {
      showAlert("Invalid email or password.", "danger");
      return;
    }

    currentUser = { name: matchedUser.name, email: matchedUser.email };
    saveCurrentUser(currentUser);
    updateAuthButton();
    showAlert(`Welcome back, ${matchedUser.name}.`, "success");
  }

  const authInstance = bootstrap.Modal.getInstance(authModalEl);
  if (authInstance) authInstance.hide();
});

currentUser = loadCurrentUser();
updateAuthButton();
setActiveAudienceButton(document.querySelector(".audience-btn:nth-child(1)"));
initScrollAnimations();
applyFilters();

window.handleProfileAction = handleProfileAction;
window.toggleAuthMode = toggleAuthMode;
