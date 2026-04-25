// ── GIFTHUB SHARED JS © 2026 GiftHub USS ──

// ── PRODUCTS DATABASE ──
const PRODUCTS = [
  // TECH
  { id: 't1', category: 'tech', name: 'Wireless Noise-Cancelling Earbuds', price: 1499, tag: 'Bestseller', tagStyle: '', img: 'https://i.imgur.com/AKq8kUg.jpeg', vibe: ['techy'], occasion: ['birthday', 'any'], budget: '1200-3000' },
  { id: 't2', category: 'tech', name: 'Portable LED Desk Lamp', price: 899, tag: 'Popular', tagStyle: '', img: 'https://i.imgur.com/0xfKJz7.jpeg', vibe: ['techy', 'cozy'], occasion: ['birthday', 'any'], budget: '500-1500' },
  { id: 't3', category: 'tech', name: 'Smart Phone Stand & Wireless Charger', price: 1199, tag: null, tagStyle: '', img: 'https://i.imgur.com/AkYo8Cz.jpeg', vibe: ['techy'], occasion: ['any'], budget: '500-1500' },
  { id: 't4', category: 'tech', name: 'Wireless Mechanical Keyboard + Mouse + Headphones Setup', price: 2299, tag: 'New', tagStyle: 'coral', img: 'https://i.imgur.com/8exuw6b.jpeg', vibe: ['techy', 'bold'], occasion: ['birthday'], budget: '1000+' },
  { id: 't5', category: 'tech', name: 'Polaroid Now+ Instant Camera', price: 4999, tag: null, tagStyle: '', img:'https://i.imgur.com/jNX6Yyu.jpeg', vibe: ['bold', 'romantic'], occasion: ['birthday', 'anniversary'], budget: '3000+' },
  { id: 't6', category: 'tech', name: 'Mini Projector – Pocket Size', price: 2199, tag: null, tagStyle: '', img: 'https://i.imgur.com/g0XBYFs.jpeg', vibe: ['techy', 'cozy'], occasion: ['any'], budget: '1500-3000' },

  // SELF-CARE
  { id: 's1', category: 'selfcare', name: 'Ambience Candle Set – Bloom & Petals', price: 799, tag: 'Bestseller', tagStyle: '', img: 'https://i.imgur.com/qI6k9JW.jpeg',  vibe: ['cozy', 'romantic'], occasion: ['birthday', 'anniversary', 'any'], budget: '500-1500' },
  { id: 's2', category: 'selfcare', name: 'Mens Grooming Kit (Bombay Shaving Company)', price: 1599, tag: 'Popular', tagStyle: '', img: 'https://i.imgur.com/uxwn8LH.jpeg', vibe: ['cozy', 'romantic'], occasion: ['birthday', 'any'], budget: '1500-3000' },
  { id: 's3', category: 'selfcare', name: 'Aromatherapy Bath Bomb Collection', price: 599, tag: null, tagStyle: '', img: 'https://i.imgur.com/lVALRIn.jpeg',  vibe: ['cozy'], occasion: ['any'], budget: '500-1500' },
  { id: 's4', category: 'selfcare', name: 'Skincare Kit Women RAS Luxury', price: 899, tag: null, tagStyle: '', img: 'https://i.imgur.com/5ZgF05h.jpeg', vibe: ['cozy', 'romantic'], occasion: ['birthday', 'any'], budget: '500-1500' },
  { id: 's5', category: 'selfcare', name: 'Silk Sleep Eye Mask + Scrunchie Set', price: 449, tag: null, tagStyle: '', img: 'https://i.imgur.com/AspyW0o.jpeg', vibe: ['cozy'], occasion: ['any'], budget: 'under500' },
  { id: 's6', category: 'selfcare', name: 'Yardley London Mens Luxury', price: 2499, tag: 'New', tagStyle: 'charcoal', img: 'https://i.imgur.com/qRAhP8q.jpeg', vibe: ['cozy', 'romantic'], occasion: ['birthday', 'any'], budget: '500-2500' },

  // BOOKS
  { id: 'b1', category: 'books', name: 'Things We Left Behind – Lucy Score', price: 699, tag: 'Bestseller', tagStyle: '', img:'https://i.imgur.com/d4ycyZ9.jpeg', vibe: ['bold'], occasion: ['any'], budget: '500-1500' },
  { id: 'b2', category: 'books', name: 'The Blue Mountain – Agastya Shankhala', price: 399, tag: null, tagStyle: '', img: 'https://i.imgur.com/Uhgr8r3.jpeg', vibe: ['cozy', 'romantic'], occasion: ['any'], budget: 'under500' },
  { id: 'b3', category: 'books', name: 'all this love – Ashish Bagrecha', price: 349, tag: null, tagStyle: '', img: 'https://i.imgur.com/sPslIDo.jpeg', vibe: ['romantic'], occasion: ['anniversary', 'any'], budget: 'under500' },
  { id: 'b4', category: 'books', name: 'Shatter Me Series (Set of 9)', price: 2599, tag: 'Bundle', tagStyle: 'coral', img: 'https://i.imgur.com/EPUPE9y.jpeg', imgHint: 'Stack of 3 cozy paperbacks with warm candle background', vibe: ['cozy'], occasion: ['birthday', 'any'], budget: '500-3500' },
  { id: 'b5', category: 'books', name: 'The Alchemist – Paulo Coelho', price: 299, tag: null, tagStyle: '', img: 'https://i.imgur.com/F43XyqT.jpeg', vibe: ['bold', 'romantic'], occasion: ['any'], budget: 'under500' },
  { id: 'b6', category: 'books', name: 'Shrimad Bhagwat Geeta', price: 649, tag: null, tagStyle: '', img: 'https://i.imgur.com/V1yQe11.jpeg', vibe: ['romantic', 'cozy'], occasion: ['birthday', 'anniversary'], budget: '500-1500' },

  // TAYLOR SWIFT VINYLS
  { id: 'v1', category: 'vinyl', name: 'Fearless (Taylor\'s Version) – Vinyl LP', price: 2199, tag: 'TV', tagStyle: '', img: 'https://i.imgur.com/oD71g5c.jpeg',  vibe: ['romantic', 'bold'], occasion: ['birthday', 'anniversary', 'any'], budget: '1500-3000' },
  { id: 'v2', category: 'vinyl', name: 'Red (Taylor\'s Version) – Vinyl LP', price: 2399, tag: 'TV', tagStyle: '', img: 'https://i.imgur.com/QYUFaLW.jpeg',  vibe: ['romantic', 'bold'], occasion: ['birthday', 'anniversary', 'any'], budget: '1500-3000' },
  { id: 'v3', category: 'vinyl', name: '1989 (Taylor\'s Version) – Vinyl LP', price: 2499, tag: 'TV', tagStyle: 'coral', img: 'https://i.imgur.com/AlVmWZd.jpeg',  vibe: ['bold'], occasion: ['birthday', 'any'], budget: '1500-3000' },
  { id: 'v4', category: 'vinyl', name: 'Folklore – Vinyl LP', price: 2099, tag: null, tagStyle: '', img: 'https://i.imgur.com/HcY1LvQ.jpeg',  vibe: ['cozy', 'romantic'], occasion: ['any'], budget: '1500-3000' },
  { id: 'v5', category: 'vinyl', name: 'Midnights – Lavender Haze Edition', price: 2799, tag: 'Limited', tagStyle: 'charcoal', img: 'https://i.imgur.com/nRGQy5D.jpeg',  vibe: ['romantic', 'cozy'], occasion: ['birthday', 'anniversary'], budget: '1500-3000' },
  { id: 'v6', category: 'vinyl', name: 'The Tortured Poets Department – LP', price: 2999, tag: 'New', tagStyle: 'coral', img: 'https://i.imgur.com/4PjoRY5.jpeg',  vibe: ['bold', 'romantic'], occasion: ['birthday', 'any'], budget: '1500-3000' },
];

// ── CART UTILITIES ──
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem('gifthub_cart') || '[]'); }
    catch { return []; }
  },
  save(items) {
    localStorage.setItem('gifthub_cart', JSON.stringify(items));
    Cart.updateBadge();
  },
  add(productId, qty = 1) {
    const items = Cart.get();
    const existing = items.find(i => i.id === productId);
    if (existing) { existing.qty += qty; }
    else { items.push({ id: productId, qty }); }
    Cart.save(items);
    const product = PRODUCTS.find(p => p.id === productId);
    showToast(`✓ ${product ? product.name.split('–')[0].trim() : 'Item'} added to cart`);
  },
  remove(productId) {
    const items = Cart.get().filter(i => i.id !== productId);
    Cart.save(items);
  },
  updateQty(productId, qty) {
    const items = Cart.get();
    const item = items.find(i => i.id === productId);
    if (item) { item.qty = Math.max(1, qty); Cart.save(items); }
  },
  count() { return Cart.get().reduce((sum, i) => sum + i.qty, 0); },
  total() {
    return Cart.get().reduce((sum, item) => {
      const p = PRODUCTS.find(p => p.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },
  clear() { localStorage.removeItem('gifthub_cart'); Cart.updateBadge(); },
  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = Cart.count();
    badges.forEach(b => {
      b.textContent = count;
      b.classList.toggle('visible', count > 0);
    });
  }
};

// ── AUTH UTILITIES ──
const Auth = {
  get() {
    try { return JSON.parse(localStorage.getItem('gifthub_user') || 'null'); }
    catch { return null; }
  },
  login(name, email) {
    const user = { name, email, joinedAt: Date.now() };
    localStorage.setItem('gifthub_user', JSON.stringify(user));
    return user;
  },
  logout() {
    localStorage.removeItem('gifthub_user');
    window.location.href = 'index.html';
  },
  isLoggedIn() { return Auth.get() !== null; },
  requireAuth(redirectTo = 'signin.html') {
    if (!Auth.isLoggedIn()) {
      window.location.href = redirectTo + '?next=' + encodeURIComponent(window.location.pathname);
      return false;
    }
    return true;
  }
};

// ── TOAST ──
function showToast(message, duration = 3000) {
  let toast = document.getElementById('gh-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'gh-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ── RENDER NAV ──
function renderNav(activePage = '') {
  const user = Auth.get();
  const cartCount = Cart.count();
  return `
  <nav>
    <a href="index.html" class="nav-logo">Gift<span>Hub</span></a>
    <ul class="nav-links">
      <li><a href="index.html" class="${activePage==='home'?'active':''}">Home</a></li>
      <li><a href="products.html" class="${activePage==='products'?'active':''}">Shop</a></li>
      <li><a href="quiz.html" class="${activePage==='quiz'?'active':''}">Gift Quiz</a></li>
    </ul>
    <div class="nav-actions">
      <a href="cart.html" class="nav-icon-btn" title="Cart">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <span class="cart-badge ${cartCount>0?'visible':''}">${cartCount}</span>
      </a>
      ${user
        ? `<button onclick="Auth.logout()" class="btn btn-outline btn-sm">Sign Out</button>`
        : `<a href="signin.html" class="btn btn-primary btn-sm">Sign In</a>`
      }
    </div>
  </nav>`;
}

// ── RENDER FOOTER ──
function renderFooter() {
  return `
  <div class="footer-wave">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" fill="#1a1108"/>
    </svg>
  </div>
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">Gift<span>Hub</span></div>
        <p class="footer-desc">Curated gifts for every personality, occasion, and budget. Find the perfect gift in minutes with our AI quiz.</p>
        <div class="footer-tagline">✦ Thoughtful gifting, always.</div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="products.html?cat=tech">Tech Gifts</a></li>
          <li><a href="products.html?cat=selfcare">Self-Care</a></li>
          <li><a href="products.html?cat=books">Books</a></li>
          <li><a href="products.html?cat=vinyl">TS Vinyls</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="quiz.html">Gift Quiz</a></li>
          <li><a href="products.html">All Products</a></li>
          <li><a href="cart.html">My Cart</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Account</h4>
        <ul>
          <li><a href="signin.html">Sign In</a></li>
          <li><a href="signin.html?mode=signup">Sign Up</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 GiftHub USS. All rights reserved.</span>
      <span>Made with ♥ for thoughtful gifting.</span>
    </div>
  </footer>`;
}

// ── RENDER PRODUCT CARD (used on index.html — opens modal if available, else no-op) ──
function renderProductCard(product) {
  return `
  <div class="product-card">
    <div class="product-img-wrap">
      ${product.img
        ? `<img src="${product.img}" alt="${product.name}" loading="lazy">`
        : `<div class="product-img-placeholder">
            <span class="ph-icon">${categoryIcon(product.category)}</span>
            <span class="ph-label">${product.name.split('–')[0].trim()}</span>
            <span class="ph-hint">Replace with: ${product.imgHint}</span>
          </div>`
      }
      ${product.tag ? `<span class="product-tag ${product.tagStyle}">${product.tag}</span>` : ''}
    </div>
    <div class="product-info">
      <p class="product-category">${categoryLabel(product.category)}</p>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
      <div class="product-actions">
        <button class="btn btn-primary btn-sm btn-full" onclick="Cart.add('${product.id}')">Add to Cart</button>
        <a class="btn btn-outline btn-sm btn-full" href="products.html?id=${product.id}">View Details →</a>
      </div>
    </div>
  </div>`;
}

function categoryIcon(cat) {
  return { tech: '🎧', selfcare: '🌿', books: '📖', vinyl: '🎵' }[cat] || '🎁';
}

function categoryLabel(cat) {
  return { tech: 'Tech & Gadgets', selfcare: 'Self-Care', books: 'Books', vinyl: 'Taylor Swift Vinyl' }[cat] || cat;
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
});
