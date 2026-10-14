/* ══════════════════════════════════════════════
   WANDERLUX — APP.JS
══════════════════════════════════════════════ */

// ══════════ DATA ══════════
const PACKAGES = [
  {
    id: 1, name: "Maldives Paradise Escape", location: "Maldives", category: "island",
    travelerTypes: ["couple", "family"],
    duration: "5N/6D", rating: 4.9, reviews: 342,
    price: 64999, oldPrice: 85000,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602002418082-a4443978a5b6?w=400&q=80",
      "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
    ],
    highlights: ["Overwater Villa", "Snorkeling", "Sunset Cruise", "Spa"],
    description: "Escape to the turquoise waters of the Maldives — a destination like no other. Wake up in a luxurious overwater villa, snorkel among vibrant coral reefs, and watch the sun melt into the Indian Ocean. Perfect for couples and families seeking absolute paradise.",
    includes: [
      {icon: "fas fa-plane", label: "Flights"}, {icon: "fas fa-hotel", label: "Hotel"},
      {icon: "fas fa-utensils", label: "Meals"}, {icon: "fas fa-ship", label: "Boat Transfers"},
      {icon: "fas fa-swimmer", label: "Water Sports"}, {icon: "fas fa-spa", label: "Spa Session"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Arrival at Velana International Airport. Speed boat transfer to your overwater villa. Welcome dinner."},
      {day: "Day 2", desc: "Morning snorkeling tour at the coral reef. Afternoon free on the beach. Sunset dolphin cruise."},
      {day: "Day 3", desc: "Full day island hopping. Visit local Maldivian fishing village. Barbecue dinner by the lagoon."},
      {day: "Day 4", desc: "Spa treatment at the overwater spa. Optional scuba diving. Candlelit dinner on the sandbank."},
      {day: "Day 5", desc: "Final snorkeling session. Shopping at Male. Evening departure prep."},
      {day: "Day 6", desc: "Checkout and transfer to airport. Depart with beautiful memories!"}
    ],
    budget: "luxury"
  },
  {
    id: 2, name: "Bali Bliss – Beach & Culture", location: "Bali, Indonesia", category: "beach",
    travelerTypes: ["solo", "couple", "friends"],
    duration: "6N/7D", rating: 4.8, reviews: 521,
    price: 38999, oldPrice: 52000,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80",
      "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=400&q=80"
    ],
    highlights: ["Ubud Temples", "Rice Terraces", "Surfing", "Cooking Class"],
    description: "Bali is a feast for the senses. From the mystical temples of Ubud to the surf-perfect beaches of Seminyak, this tropical paradise has something for every traveler. Experience local culture, incredible food, and stunning landscapes.",
    includes: [
      {icon: "fas fa-plane", label: "Flights"}, {icon: "fas fa-hotel", label: "Hotel"},
      {icon: "fas fa-coffee", label: "Breakfast"}, {icon: "fas fa-car", label: "Airport Transfer"},
      {icon: "fas fa-camera", label: "Photo Tour"}, {icon: "fas fa-motorcycle", label: "Scooter Rental"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Arrive in Denpasar. Transfer to Seminyak hotel. Sunset at Tanah Lot temple."},
      {day: "Day 2", desc: "Morning surf lesson at Kuta Beach. Afternoon explore Seminyak markets."},
      {day: "Day 3", desc: "Ubud day trip: Sacred Monkey Forest, Tegallalang Rice Terraces, art galleries."},
      {day: "Day 4", desc: "Balinese cooking class. Visit Goa Gajah elephant cave."},
      {day: "Day 5", desc: "Mount Batur sunrise trek. Spa and wellness afternoon."},
      {day: "Day 6", desc: "Nusa Penida day trip: Kelingking Beach, Angel's Billabong, Broken Beach."},
      {day: "Day 7", desc: "Last-minute shopping at Seminyak. Departure transfer."}
    ],
    budget: "mid"
  },
  {
    id: 3, name: "Swiss Alps Winter Wonderland", location: "Switzerland", category: "mountain",
    travelerTypes: ["couple", "family", "friends"],
    duration: "7N/8D", rating: 4.9, reviews: 287,
    price: 129999, oldPrice: 165000,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80"
    ],
    highlights: ["Jungfraujoch", "Glacier Express", "Skiing", "Chocolate Factory"],
    description: "Experience the magical Swiss Alps — Europe's premier mountain destination. Ride the Glacier Express through breathtaking scenery, ski on world-class slopes, visit the 'Top of Europe' at Jungfraujoch, and indulge in Swiss chocolate and fondue.",
    includes: [
      {icon: "fas fa-plane", label: "Flights"}, {icon: "fas fa-hotel", label: "Hotel"},
      {icon: "fas fa-train", label: "Rail Pass"}, {icon: "fas fa-skiing", label: "Ski Pass"},
      {icon: "fas fa-bus", label: "Airport Transfer"}, {icon: "fas fa-utensils", label: "Breakfast"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Arrive Zurich. Transfer to Grindelwald. Check-in to mountain hotel."},
      {day: "Day 2", desc: "Jungfraujoch excursion – Top of Europe at 3,454m. Snow activities."},
      {day: "Day 3", desc: "Skiing/snowboarding on Grindelwald slopes. Ski school for beginners."},
      {day: "Day 4", desc: "Glacier Express train journey to Zermatt. Matterhorn views."},
      {day: "Day 5", desc: "Lucerne day trip. Chapel Bridge, Lion Monument, Swiss Museum of Transport."},
      {day: "Day 6", desc: "Interlaken adventure: paragliding or canyon swing. Lake Brienz cruise."},
      {day: "Day 7", desc: "Geneva: Lake Leman, UN HQ, chocolate factory tour."},
      {day: "Day 8", desc: "Zurich shopping and departure."}
    ],
    budget: "luxury"
  },
  {
    id: 4, name: "Santorini Sunset Romance", location: "Santorini, Greece", category: "island",
    travelerTypes: ["couple"],
    duration: "4N/5D", rating: 4.8, reviews: 198,
    price: 72999, oldPrice: 95000,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&q=80",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&q=80",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400&q=80"
    ],
    highlights: ["Oia Sunset", "Wine Tasting", "Catamaran Cruise", "Black Sand Beach"],
    description: "Santorini is romance personified. Blue-domed churches perched on volcanic cliffs, Oia's legendary sunsets, crystal-clear Aegean waters, and world-class Greek cuisine. This is the ultimate couples getaway.",
    includes: [
      {icon: "fas fa-plane", label: "Flights"}, {icon: "fas fa-hotel", label: "Cave Suite"},
      {icon: "fas fa-wine-glass", label: "Wine Tour"}, {icon: "fas fa-ship", label: "Catamaran"},
      {icon: "fas fa-car", label: "ATV Rental"}, {icon: "fas fa-utensils", label: "Breakfast"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Arrive Santorini. Transfer to Oia cave suite. Welcome champagne and sunset viewing."},
      {day: "Day 2", desc: "Fira town exploration. Cable car ride. Local taverna lunch. Swimming at Kamari beach."},
      {day: "Day 3", desc: "Catamaran cruise: hot springs, Red Beach, White Beach. BBQ on board."},
      {day: "Day 4", desc: "Winery tour and wine tasting. Akrotiri archaeological site. Romantic dinner in Oia."},
      {day: "Day 5", desc: "Final sunrise from Oia. Shopping for local ceramics and jewelry. Departure."}
    ],
    budget: "luxury"
  },
  {
    id: 5, name: "Himalayan Trek Adventure", location: "Himachal Pradesh, India", category: "mountain",
    travelerTypes: ["solo", "friends"],
    duration: "8N/9D", rating: 4.7, reviews: 412,
    price: 22999, oldPrice: 30000,
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80",
      "https://images.unsplash.com/photo-1609748340878-61e7e5f1f0f8?w=400&q=80"
    ],
    highlights: ["Triund Trek", "Camping", "Dharamshala", "Kasol"],
    description: "Conquer the Himalayas! This action-packed adventure takes you through pine forests, alpine meadows, and snow-capped passes. Camp under the stars, meet fellow adventurers, and experience the raw beauty of India's mountain heartland.",
    includes: [
      {icon: "fas fa-bus", label: "Transport"}, {icon: "fas fa-campground", label: "Camping"},
      {icon: "fas fa-utensils", label: "All Meals"}, {icon: "fas fa-hiking", label: "Trek Guide"},
      {icon: "fas fa-first-aid", label: "First Aid"}, {icon: "fas fa-backpack", label: "Equipment"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Depart Delhi/Chandigarh by overnight bus to Manali."},
      {day: "Day 2", desc: "Arrive Manali. Acclimatization. Explore Old Manali and Hadimba temple."},
      {day: "Day 3", desc: "Rohtang Pass visit (subject to permit). Snow activities."},
      {day: "Day 4", desc: "Drive to Kasol. Evening by the Parvati River."},
      {day: "Day 5", desc: "Kheerganga Trek – 12km through forest and waterfall. Camping at hot springs."},
      {day: "Day 6", desc: "Trek back. Drive to Dharamshala/McLeod Ganj."},
      {day: "Day 7", desc: "Triund Trek – 9km. Spectacular views of Dhauladhar range."},
      {day: "Day 8", desc: "Camping at Triund. Bonfire, stargazing."},
      {day: "Day 9", desc: "Trek back. Departure from Dharamshala."}
    ],
    budget: "budget"
  },
  {
    id: 6, name: "Lakshadweep Island Hopping", location: "Lakshadweep, India", category: "island",
    travelerTypes: ["family", "couple", "friends"],
    duration: "5N/6D", rating: 4.6, reviews: 156,
    price: 42999, oldPrice: 58000,
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
    ],
    highlights: ["Bangaram Island", "Snorkeling", "Glass Bottom Boat", "Kayaking"],
    description: "Discover India's best-kept secret! Lakshadweep's 36 pristine coral islands offer some of the world's clearest waters and richest marine life. With strict entry permits, this destination remains unspoiled and absolutely magical.",
    includes: [
      {icon: "fas fa-plane", label: "Flights"}, {icon: "fas fa-ship", label: "Ship Transfer"},
      {icon: "fas fa-hotel", label: "Beach Resort"}, {icon: "fas fa-utensils", label: "Full Board"},
      {icon: "fas fa-swimmer", label: "Water Sports"}, {icon: "fas fa-id-card", label: "Entry Permit"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Fly to Agatti Island. Speed boat to resort. Evening beach walk."},
      {day: "Day 2", desc: "Snorkeling at pristine coral reefs. Glass bottom boat tour."},
      {day: "Day 3", desc: "Day trip to Bangaram Island – uninhabited paradise."},
      {day: "Day 4", desc: "Kayaking and paddleboarding. Visit lagoon and watch sea turtles."},
      {day: "Day 5", desc: "Sunset boat cruise. Traditional Lakshadweep cultural show."},
      {day: "Day 6", desc: "Final morning swim. Fly back to mainland."}
    ],
    budget: "mid"
  },
  {
    id: 7, name: "Thailand Tropical Fiesta", location: "Bangkok & Phuket, Thailand", category: "beach",
    travelerTypes: ["friends", "solo", "couple"],
    duration: "7N/8D", rating: 4.7, reviews: 634,
    price: 28999, oldPrice: 40000,
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80",
      "https://images.unsplash.com/photo-1516285715-b2b9e33a9e89?w=400&q=80"
    ],
    highlights: ["Phi Phi Islands", "Grand Palace", "Night Markets", "Muay Thai"],
    description: "Thailand is the ultimate budget-luxury destination! Explore the chaotic beauty of Bangkok's street markets and temples, party on Koh Phangan, island-hop to Phi Phi, and dive into Phuket's nightlife and beaches.",
    includes: [
      {icon: "fas fa-plane", label: "Flights"}, {icon: "fas fa-hotel", label: "Hotel"},
      {icon: "fas fa-ship", label: "Island Tour"}, {icon: "fas fa-car", label: "Transfers"},
      {icon: "fas fa-utensils", label: "Breakfast"}, {icon: "fas fa-map", label: "City Tour"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Arrive Bangkok. Transfer to hotel. Night market exploration – Khao San Road."},
      {day: "Day 2", desc: "Grand Palace, Wat Pho (Reclining Buddha), Wat Arun. Chao Phraya River cruise."},
      {day: "Day 3", desc: "Fly to Phuket. Patong Beach. Sunset at Promthep Cape."},
      {day: "Day 4", desc: "Phi Phi Islands day trip – Maya Bay, Viking Cave, snorkeling."},
      {day: "Day 5", desc: "James Bond Island tour – Phang Nga Bay. Kayaking through sea caves."},
      {day: "Day 6", desc: "Big Buddha. Elephant sanctuary visit (ethical). Tiger Kingdom."},
      {day: "Day 7", desc: "Free day at beach. Bangla Road nightlife."},
      {day: "Day 8", desc: "Breakfast. Transfer to Phuket airport. Departure."}
    ],
    budget: "budget"
  },
  {
    id: 8, name: "Kerala Backwaters Family Retreat", location: "Kerala, India", category: "beach",
    travelerTypes: ["family", "couple"],
    duration: "5N/6D", rating: 4.8, reviews: 389,
    price: 18999, oldPrice: 26000,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=400&q=80",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80"
    ],
    highlights: ["Houseboat Stay", "Munnar Tea Gardens", "Kathakali", "Ayurvedic Spa"],
    description: "God's Own Country lives up to its name! From the serene backwaters of Alleppey to the misty tea estates of Munnar, Kerala is a feast of natural beauty. A houseboat stay, Kathakali performance, and Ayurvedic massage complete this perfect family escape.",
    includes: [
      {icon: "fas fa-train", label: "Train Tickets"}, {icon: "fas fa-hotel", label: "Hotel"},
      {icon: "fas fa-ship", label: "Houseboat Night"}, {icon: "fas fa-utensils", label: "Meals"},
      {icon: "fas fa-car", label: "Private Car"}, {icon: "fas fa-spa", label: "Ayurvedic Massage"}
    ],
    itinerary: [
      {day: "Day 1", desc: "Arrive Kochi. Fort Kochi exploration – Chinese fishing nets, Jew Town spice market."},
      {day: "Day 2", desc: "Drive to Munnar. Tea and spice plantation visits. Eravikulam National Park."},
      {day: "Day 3", desc: "Munnar to Alleppey. Board luxury houseboat. Cruise through backwaters."},
      {day: "Day 4", desc: "Wake up on houseboat. Traditional Kerala breakfast. Arrive Alleppey."},
      {day: "Day 5", desc: "Kovalam Beach. Vizhinjam lighthouse. Sunset at Hawa Beach."},
      {day: "Day 6", desc: "Trivandrum Padmanabhaswamy Temple. Napier Museum. Departure."}
    ],
    budget: "budget"
  }
];

// ══════════ STATE ══════════
let state = {
  currentPage: 'home',
  currentUser: JSON.parse(localStorage.getItem('wl_user')) || null,
  users: JSON.parse(localStorage.getItem('wl_users')) || [],
  bookings: JSON.parse(localStorage.getItem('wl_bookings')) || [],
  selectedPackage: null,
  filters: { cat: 'all', traveler: 'all', budget: 'all' },
  bookingData: {}
};

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedPackages();
  renderAllPackages();
  updateNav();
  setupScrollNav();

  // Set min date for date inputs
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(el => el.min = today);
});

function setupScrollNav() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
  document.getElementById('navbar').classList.add('scrolled');
}

// ══════════ NAVIGATION ══════════
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(page + 'Page');
  if (target) {
    target.classList.add('active');
    state.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (page === 'mybookings') renderMyBookings();
  if (page === 'packages') renderAllPackages();
  closeMenu();
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// ══════════ AUTH ══════════
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
function closeModalOut(e, id) {
  if (e.target.id === id) closeModal(id);
}
function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 200);
}

function signup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const pass = document.getElementById('signupPass').value;
  const errEl = document.getElementById('signupError');

  if (!name || !email || !pass) { showError(errEl, 'Please fill all required fields.'); return; }
  if (pass.length < 6) { showError(errEl, 'Password must be at least 6 characters.'); return; }
  if (state.users.find(u => u.email === email)) { showError(errEl, 'Email already registered. Please login.'); return; }

  const user = { name, email, phone, pass };
  state.users.push(user);
  localStorage.setItem('wl_users', JSON.stringify(state.users));
  state.currentUser = user;
  localStorage.setItem('wl_user', JSON.stringify(user));
  closeModal('signupModal');
  updateNav();
  showToast(`Welcome to WanderLux, ${name}! 🌍`);
}

function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');

  if (!email || !pass) { showError(errEl, 'Please enter email and password.'); return; }
  const user = state.users.find(u => u.email === email && u.pass === pass);
  if (!user) { showError(errEl, 'Invalid email or password. Try again.'); return; }

  state.currentUser = user;
  localStorage.setItem('wl_user', JSON.stringify(user));
  closeModal('loginModal');
  updateNav();
  showToast(`Welcome back, ${user.name}! ✈️`);
}

function logout() {
  state.currentUser = null;
  localStorage.removeItem('wl_user');
  updateNav();
  showPage('home');
  showToast('Logged out successfully. See you soon!');
}

function updateNav() {
  const auth = document.getElementById('navAuth');
  const userEl = document.getElementById('navUser');
  const greet = document.getElementById('userGreet');
  if (state.currentUser) {
    auth.classList.add('hidden');
    userEl.classList.remove('hidden');
    greet.textContent = `Hi, ${state.currentUser.name.split(' ')[0]}!`;
  } else {
    auth.classList.remove('hidden');
    userEl.classList.add('hidden');
  }
}

function showError(el, msg) {
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 4000);
}

// ══════════ PACKAGE RENDERING ══════════
function renderFeaturedPackages() {
  const grid = document.getElementById('featuredGrid');
  const featured = PACKAGES.slice(0, 6);
  grid.innerHTML = featured.map(pkg => createPackageCard(pkg)).join('');
}

function renderAllPackages() {
  const grid = document.getElementById('allPackagesGrid');
  if (!grid) return;
  let filtered = PACKAGES.filter(pkg => {
    const catOk = state.filters.cat === 'all' || pkg.category === state.filters.cat;
    const travOk = state.filters.traveler === 'all' || pkg.travelerTypes.includes(state.filters.traveler);
    const budgetOk = state.filters.budget === 'all' || pkg.budget === state.filters.budget;
    return catOk && travOk && budgetOk;
  });
  grid.innerHTML = filtered.length
    ? filtered.map(pkg => createPackageCard(pkg)).join('')
    : '<div style="text-align:center;grid-column:1/-1;padding:4rem;color:#999"><i class="fas fa-search" style="font-size:3rem;margin-bottom:1rem;display:block"></i><p>No packages match your filters. Try different options!</p></div>';
}

function createPackageCard(pkg) {
  const savePct = Math.round((1 - pkg.price / pkg.oldPrice) * 100);
  const travelerBadges = pkg.travelerTypes.map(t => `<span>${t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join('');
  return `
    <div class="pkg-card" onclick="showDetail(${pkg.id})">
      <div class="pkg-img">
        <img src="${pkg.image}" alt="${pkg.name}" loading="lazy">
        <span class="pkg-badge ${pkg.category}">${pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}</span>
        <button class="pkg-wishlist" onclick="toggleWishlist(event,${pkg.id})">
          <i class="fas fa-heart"></i>
        </button>
        <span class="pkg-rating"><i class="fas fa-star"></i>${pkg.rating} (${pkg.reviews})</span>
      </div>
      <div class="pkg-body">
        <div class="pkg-location"><i class="fas fa-map-marker-alt"></i>${pkg.location}</div>
        <div class="pkg-title">${pkg.name}</div>
        <div class="pkg-meta">
          <span><i class="fas fa-clock"></i>${pkg.duration}</span>
          <span><i class="fas fa-tag"></i>Save ${savePct}%</span>
        </div>
        <div class="pkg-traveler-tags">${travelerBadges}</div>
      </div>
      <div class="pkg-footer">
        <div class="pkg-price">
          <span class="old-price">₹${pkg.oldPrice.toLocaleString('en-IN')}</span>
          <span class="new-price">₹${pkg.price.toLocaleString('en-IN')}<small>/person</small></span>
        </div>
        <button class="btn-book" onclick="event.stopPropagation();startBooking(${pkg.id})">Book Now</button>
      </div>
    </div>`;
}

function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  btn.classList.toggle('active');
  showToast(btn.classList.contains('active') ? '❤️ Added to wishlist!' : 'Removed from wishlist');
}

// ══════════ FILTERS ══════════
function setFilter(type, value, btn) {
  state.filters[type] = value;
  btn.closest('.filter-pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderAllPackages();
}

function filterPackages(cat) {
  state.filters.cat = cat;
  showPage('packages');
  setTimeout(() => {
    document.querySelectorAll('#catFilter .pill').forEach(p => {
      p.classList.toggle('active', p.textContent.trim().toLowerCase().includes(cat));
    });
    renderAllPackages();
  }, 100);
}

function filterByTraveler(type) {
  state.filters.traveler = type;
  showPage('packages');
  setTimeout(renderAllPackages, 100);
}

// ══════════ DETAIL PAGE ══════════
function showDetail(id) {
  const pkg = PACKAGES.find(p => p.id === id);
  if (!pkg) return;
  state.selectedPackage = pkg;
  const includesHTML = pkg.includes.map(inc => `<div class="include-item"><i class="${inc.icon}"></i><span>${inc.label}</span></div>`).join('');
  const itineraryHTML = pkg.itinerary.map(day => `<div class="itinerary-day"><strong>${day.day}</strong><p>${day.desc}</p></div>`).join('');
  const galleryHTML = pkg.gallery.map(img => `<img src="${img}" alt="Gallery" loading="lazy">`).join('');
  const travelerBadges = pkg.travelerTypes.map(t => `<span style="background:rgba(255,255,255,0.2);padding:3px 12px;border-radius:50px;font-size:0.8rem">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join(' ');

  document.getElementById('detailContent').innerHTML = `
    <div class="detail-hero" style="background-image:url('${pkg.image}')">
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-content">
        <span class="detail-badge">${pkg.category}</span>
        <h1>${pkg.name}</h1>
        <div class="detail-meta-bar">
          <span><i class="fas fa-map-marker-alt"></i>${pkg.location}</span>
          <span><i class="fas fa-clock"></i>${pkg.duration}</span>
          <span><i class="fas fa-star"></i>${pkg.rating} (${pkg.reviews} reviews)</span>
          ${travelerBadges}
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-main">
        <div style="margin-bottom:1rem">
          <button class="btn-outline" style="color:var(--dark);border-color:#ddd" onclick="showPage('packages')">← Back to Packages</button>
        </div>
        <h2>About This Trip</h2>
        <p>${pkg.description}</p>
        <h2>What's Included</h2>
        <div class="includes-grid">${includesHTML}</div>
        <h2>Itinerary</h2>
        <div class="itinerary-list">${itineraryHTML}</div>
        <h2>Photo Gallery</h2>
        <div class="gallery-grid">${galleryHTML}</div>
        <h2>Highlights</h2>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:0.75rem">
          ${pkg.highlights.map(h => `<span style="background:#fff5f5;color:var(--primary);padding:6px 16px;border-radius:50px;font-size:0.85rem;font-weight:600;border:1.5px solid #ffd5d5">${h}</span>`).join('')}
        </div>
      </div>
      <div class="detail-sidebar">
        <div class="booking-widget">
          <div class="widget-price">
            <span class="old">₹${pkg.oldPrice.toLocaleString('en-IN')}</span>
            <span class="new">₹${pkg.price.toLocaleString('en-IN')}</span>
            <small> / person</small>
          </div>
          <div class="widget-form">
            <div class="widget-field"><label>Travel Date</label><input type="date" id="widgetDate" min="${new Date().toISOString().split('T')[0]}"></div>
            <div class="widget-field"><label>Travelers</label>
              <select id="widgetTravelers" onchange="updateWidgetTotal(${pkg.id})">
                ${[1,2,3,4,5,6,7,8,9,10].map(n => `<option value="${n}">${n} Traveler${n>1?'s':''}</option>`).join('')}
              </select>
            </div>
            <div class="widget-field"><label>Traveler Type</label>
              <select id="widgetType">
                ${pkg.travelerTypes.map(t => `<option>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="widget-total">
            <span>Total Price</span>
            <strong id="widgetTotal">₹${pkg.price.toLocaleString('en-IN')}</strong>
          </div>
          <button class="btn-book-full" onclick="startBooking(${pkg.id})">Book This Package</button>
          <p class="widget-note"><i class="fas fa-check-circle"></i> Free cancellation within 24 hours</p>
          <p class="widget-note" style="margin-top:6px"><i class="fas fa-lock"></i> Secure & Encrypted</p>
        </div>
      </div>
    </div>`;
  showPage('detail');
}

function updateWidgetTotal(pkgId) {
  const pkg = PACKAGES.find(p => p.id === pkgId);
  const count = parseInt(document.getElementById('widgetTravelers').value) || 1;
  const total = pkg.price * count;
  document.getElementById('widgetTotal').textContent = '₹' + total.toLocaleString('en-IN');
}

// ══════════ BOOKING ══════════
function startBooking(pkgId) {
  if (!state.currentUser) {
    showToast('Please login to book a package! 🔐');
    setTimeout(() => openModal('loginModal'), 500);
    return;
  }
  const pkg = PACKAGES.find(p => p.id === pkgId);
  state.selectedPackage = pkg;
  state.bookingData = { package: pkg, addons: 0 };

  // Pre-fill user data
  document.getElementById('bkName').value = state.currentUser.name || '';
  document.getElementById('bkEmail').value = state.currentUser.email || '';
  document.getElementById('bkPhone').value = state.currentUser.phone || '';
  document.getElementById('bkTravelers').value = 1;

  // Uncheck all addons
  document.querySelectorAll('.addons-grid input[type="checkbox"]').forEach(cb => cb.checked = false);

  renderBookingSummary();
  showPage('booking');
}

function updateBookingTotal() {
  renderBookingSummary();
}

function getAddonsTotal() {
  let total = 0;
  document.querySelectorAll('.addons-grid input[type="checkbox"]:checked').forEach(cb => {
    total += parseInt(cb.value);
  });
  return total;
}

function renderBookingSummary() {
  const pkg = state.selectedPackage;
  if (!pkg) return;
  const travelers = parseInt(document.getElementById('bkTravelers')?.value) || 1;
  const base = pkg.price * travelers;
  const addons = getAddonsTotal();
  const tax = Math.round(base * 0.05);
  const total = base + addons + tax;
  state.bookingData.total = total;
  state.bookingData.travelers = travelers;
  state.bookingData.base = base;
  state.bookingData.addons = addons;
  state.bookingData.tax = tax;

  const el = document.getElementById('bookingSummary');
  if (el) el.innerHTML = summaryHTML(pkg, travelers, base, addons, tax, total);

  const ps = document.getElementById('paymentSummary');
  if (ps) ps.innerHTML = summaryHTML(pkg, travelers, base, addons, tax, total);
}

function summaryHTML(pkg, travelers, base, addons, tax, total) {
  return `
    <img src="${pkg.image}" alt="${pkg.name}" class="summary-pkg-img">
    <div class="summary-title">${pkg.name}</div>
    <div class="summary-lines">
      <div class="summary-line"><span>📍 Destination</span><span>${pkg.location}</span></div>
      <div class="summary-line"><span>📅 Duration</span><span>${pkg.duration}</span></div>
      <div class="summary-line"><span>👥 Travelers</span><span>${travelers}</span></div>
      <div class="summary-line"><span>Base Price</span><span>₹${base.toLocaleString('en-IN')}</span></div>
      ${addons > 0 ? `<div class="summary-line"><span>Add-ons</span><span>₹${addons.toLocaleString('en-IN')}</span></div>` : ''}
      <div class="summary-line"><span>GST (5%)</span><span>₹${tax.toLocaleString('en-IN')}</span></div>
      <div class="summary-line total"><span>Total Amount</span><span>₹${total.toLocaleString('en-IN')}</span></div>
    </div>
    <div style="font-size:0.78rem;color:#999;text-align:center;margin-top:0.5rem"><i class="fas fa-shield-alt" style="color:#4caf50"></i> 100% Secure Booking</div>`;
}

function proceedToPayment() {
  const name = document.getElementById('bkName').value.trim();
  const email = document.getElementById('bkEmail').value.trim();
  const phone = document.getElementById('bkPhone').value.trim();
  const date = document.getElementById('bkDate').value;

  if (!name || !email || !phone || !date) {
    showToast('⚠️ Please fill all required fields!'); return;
  }

  state.bookingData.travelerInfo = { name, email, phone, date };
  state.bookingData.requests = document.getElementById('bkRequests').value;
  renderBookingSummary();
  showPage('payment');
}

// ══════════ PAYMENT ══════════
function selectPayment(type) {
  ['card', 'upi', 'netbanking'].forEach(t => {
    document.getElementById(`pm-${t}`)?.classList.remove('active');
    const form = document.getElementById(t === 'card' ? 'cardForm' : t === 'upi' ? 'upiForm' : 'netForm');
    if (form) form.classList.add('hidden');
  });
  document.getElementById(`pm-${type}`)?.classList.add('active');
  const targetForm = type === 'card' ? 'cardForm' : type === 'upi' ? 'upiForm' : 'netForm';
  document.getElementById(targetForm)?.classList.remove('hidden');
}

function formatCard(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = val.replace(/(.{4})/g, '$1 ').trim();
}

function processPayment() {
  if (!document.getElementById('termsCheck').checked) {
    showToast('⚠️ Please agree to Terms & Conditions!'); return;
  }

  showLoading('Processing your payment securely...');
  setTimeout(() => {
    hideLoading();
    const booking = {
      id: 'WL' + Date.now().toString().slice(-8),
      package: state.selectedPackage,
      ...state.bookingData,
      status: 'confirmed',
      bookedOn: new Date().toLocaleDateString('en-IN'),
      paymentMethod: document.querySelector('input[name="payment"]:checked')?.value || 'card'
    };
    state.bookings.push(booking);
    localStorage.setItem('wl_bookings', JSON.stringify(state.bookings));
    renderBill(booking);
    showPage('bill');
  }, 2800);
}

// ══════════ BILL ══════════
function renderBill(booking) {
  const pkg = booking.package;
  const addonsList = [];
  document.querySelectorAll('.addons-grid input[type="checkbox"]:checked').forEach(cb => {
    const label = cb.closest('.addon-item')?.textContent.trim() || '';
    addonsList.push({ name: label.split('+')[0].trim(), amount: parseInt(cb.value) });
  });

  document.getElementById('billContent').innerHTML = `
    <div class="bill-card">
      <div class="bill-header">
        <div class="bill-success-icon"><i class="fas fa-check-circle"></i></div>
        <h1>Booking Confirmed!</h1>
        <p>Your adventure is locked in. Get ready!</p>
        <div class="bill-booking-id">${booking.id}</div>
      </div>
      <div class="bill-body">
        <div class="bill-section">
          <h3>Package Details</h3>
          <div class="bill-pkg-preview">
            <img src="${pkg.image}" alt="${pkg.name}">
            <div>
              <strong>${pkg.name}</strong>
              <span>📍 ${pkg.location} • ${pkg.duration}</span>
            </div>
          </div>
        </div>
        <div class="bill-section">
          <h3>Traveler Information</h3>
          <div class="bill-row"><span>Name</span><span>${booking.travelerInfo?.name || state.currentUser?.name}</span></div>
          <div class="bill-row"><span>Email</span><span>${booking.travelerInfo?.email || state.currentUser?.email}</span></div>
          <div class="bill-row"><span>Phone</span><span>${booking.travelerInfo?.phone || state.currentUser?.phone}</span></div>
          <div class="bill-row"><span>Travel Date</span><span>${booking.travelerInfo?.date || 'TBD'}</span></div>
          <div class="bill-row"><span>No. of Travelers</span><span>${booking.travelers}</span></div>
        </div>
        <div class="bill-section">
          <h3>Price Breakdown</h3>
          <div class="bill-row"><span>Package (${booking.travelers} × ₹${pkg.price.toLocaleString('en-IN')})</span><span>₹${booking.base?.toLocaleString('en-IN')}</span></div>
          ${addonsList.map(a => `<div class="bill-row"><span>${a.name}</span><span>₹${a.amount.toLocaleString('en-IN')}</span></div>`).join('')}
          <div class="bill-row"><span>GST (5%)</span><span>₹${booking.tax?.toLocaleString('en-IN')}</span></div>
          <div class="bill-row"><span>Payment Method</span><span style="text-transform:capitalize">${booking.paymentMethod}</span></div>
          <div class="bill-total-row"><span>Total Paid</span><span>₹${booking.total?.toLocaleString('en-IN')}</span></div>
        </div>
        <div class="bill-section" style="background:#f0fff4;border-radius:12px;padding:1.25rem">
          <h3 style="color:#2e7d32">What Happens Next?</h3>
          <p style="color:#388e3c;font-size:0.9rem;line-height:1.7">✅ Confirmation email sent to ${booking.travelerInfo?.email || state.currentUser?.email}<br>✅ Detailed itinerary will arrive within 24 hours<br>✅ Our travel expert will call you within 48 hours<br>✅ Full package documents 7 days before departure</p>
        </div>
        <div class="bill-actions">
          <button class="btn-primary" onclick="window.print()"><i class="fas fa-download"></i> Download Invoice</button>
          <button class="btn-outline" style="color:var(--dark);border-color:#ddd" onclick="showPage('mybookings')"><i class="fas fa-suitcase"></i> My Bookings</button>
          <button class="btn-outline" style="color:var(--dark);border-color:#ddd" onclick="showPage('home')"><i class="fas fa-home"></i> Home</button>
        </div>
      </div>
    </div>`;
}

// ══════════ MY BOOKINGS ══════════
function renderMyBookings() {
  const container = document.getElementById('myBookingsList');
  if (!state.currentUser) {
    container.innerHTML = `<div style="text-align:center;padding:4rem;color:#999"><i class="fas fa-user-lock" style="font-size:3rem;margin-bottom:1rem;display:block;color:var(--primary)"></i><h3>Login to view your bookings</h3><br><button class="btn-primary" onclick="openModal('loginModal')">Login Now</button></div>`;
    return;
  }
  const userBookings = state.bookings.filter(b => b.travelerInfo?.email === state.currentUser?.email || b.package);
  if (!userBookings.length) {
    container.innerHTML = `<div style="text-align:center;padding:4rem;color:#999"><i class="fas fa-suitcase-rolling" style="font-size:3rem;margin-bottom:1rem;display:block;color:var(--primary)"></i><h3>No trips booked yet!</h3><p style="margin:1rem 0">Explore our amazing packages and plan your dream vacation.</p><button class="btn-primary" onclick="showPage('packages')">Explore Packages</button></div>`;
    return;
  }
  container.innerHTML = userBookings.map(b => `
    <div class="my-booking-card">
      <img src="${b.package?.image}" alt="${b.package?.name}">
      <div class="my-booking-info">
        <span class="booking-status confirmed">✓ Confirmed</span>
        <h3>${b.package?.name}</h3>
        <p style="color:#666;font-size:0.9rem;margin-bottom:0.5rem">📍 ${b.package?.location}</p>
        <div class="my-booking-meta">
          <span><i class="fas fa-calendar"></i>Booked: ${b.bookedOn}</span>
          <span><i class="fas fa-clock"></i>${b.package?.duration}</span>
          <span><i class="fas fa-users"></i>${b.travelers} traveler(s)</span>
          <span><i class="fas fa-hashtag"></i>${b.id}</span>
        </div>
      </div>
      <div class="my-booking-price">
        <div><strong>₹${b.total?.toLocaleString('en-IN')}</strong><small>Total Paid</small></div>
        <button class="btn-outline" style="color:var(--primary);border-color:var(--primary)" onclick="showDetail(${b.package?.id})">View Details</button>
      </div>
    </div>`).join('');
}

// ══════════ HELPERS ══════════
function showLoading(msg = 'Loading...') {
  document.getElementById('loadingMsg').textContent = msg;
  document.getElementById('loadingOverlay').classList.remove('hidden');
}
function hideLoading() {
  document.getElementById('loadingOverlay').classList.add('hidden');
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);
    background:var(--dark);color:white;padding:1rem 2rem;border-radius:50px;
    font-weight:600;z-index:99999;animation:slideUp 0.4s ease;
    box-shadow:0 8px 30px rgba(0,0,0,0.3);font-size:0.95rem;white-space:nowrap;`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// CSS for toast animation
const style = document.createElement('style');
style.textContent = `@keyframes slideUp { from { transform: translateX(-50%) translateY(20px); opacity:0; } to { transform: translateX(-50%) translateY(0); opacity:1; } }`;
document.head.appendChild(style);
