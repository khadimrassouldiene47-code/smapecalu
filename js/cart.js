// =========================================
// SMAPEC - Système Panier-Devis
// =========================================

const CART_KEY = 'smapec_cart';

/* ===== CART STATE ===== */
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}
function clearCart() { localStorage.removeItem(CART_KEY); updateCartUI(); }

/* ===== ADD TO CART ===== */
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  showCartToast(product.name);
  openCartDrawer();
}

/* ===== REMOVE FROM CART ===== */
function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  renderCartDrawer();
}

/* ===== UPDATE QUANTITY ===== */
function updateQuantity(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, parseInt(qty) || 1);
    saveCart(cart);
    renderCartDrawer();
  }
}

/* ===== TOTALS ===== */
function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (parseFloat(item.price || 0) * (item.quantity || 1)), 0);
}
function getCartCount() {
  return getCart().reduce((sum, item) => sum + (item.quantity || 1), 0);
}

/* ===== UI UPDATE ===== */
function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  const total = getCartTotal();
  document.querySelectorAll('.cart-total-display').forEach(el => {
    el.textContent = total > 0 ? formatPrice(total) : '—';
  });
}

function formatPrice(amount) {
  if (!amount || amount === 0) return 'Sur devis';
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', minimumFractionDigits: 0 }).format(amount);
}

/* ===== CART DRAWER ===== */
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) { drawer.classList.add('open'); renderCartDrawer(); }
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartDrawer() {
  const container = document.getElementById('cartItems');
  const emptyMsg = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const cart = getCart();

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'flex';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-img">
        <img src="${item.image || 'https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754194/photo_2026-09-18_17-21-10_y68vpz.jpg'}" alt="${item.name}" onerror="this.onerror=null;this.src='https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754194/photo_2026-09-18_17-21-10_y68vpz.jpg'">
        <div class="cart-item-cat">${item.category || ''}</div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${item.dimensions ? `<div class="cart-item-dims"><i class="fas fa-ruler-combined"></i> ${item.dimensions}</div>` : ''}
        <div class="cart-item-price">${item.price > 0 ? formatPrice(item.price) : 'Prix sur devis'}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', ${(item.quantity||1)-1})"><i class="fas fa-minus"></i></button>
          <input class="qty-input" type="number" value="${item.quantity || 1}" min="1"
            onchange="updateQuantity('${item.id}', this.value)">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', ${(item.quantity||1)+1})"><i class="fas fa-plus"></i></button>
          <button class="cart-remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  `).join('');

  // Update total
  const total = getCartTotal();
  const totalEl = document.getElementById('cartGrandTotal');
  if (totalEl) totalEl.textContent = total > 0 ? formatPrice(total) : 'Prix sur devis';

  const countEl = document.getElementById('cartItemCount');
  if (countEl) countEl.textContent = cart.length + ' article' + (cart.length > 1 ? 's' : '');
}

/* ===== TOAST NOTIFICATION ===== */
function showCartToast(name) {
  const toast = document.getElementById('cartToast');
  if (!toast) return;
  toast.querySelector('.toast-msg').textContent = `"${name}" ajouté au devis !`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ===== GENERATE DEVIS ===== */
function goToDevis() {
  const cart = getCart();
  if (cart.length === 0) {
    alert('Votre panier est vide. Ajoutez des articles avant de créer votre devis.');
    return;
  }
  window.location.href = 'devis.html';
}

/* ===== INJECT CART DRAWER HTML ===== */
function injectCartDrawer() {
  if (document.getElementById('cartDrawer')) return;

  const html = `
    <!-- Cart Overlay -->
    <div id="cartOverlay" class="cart-overlay" onclick="closeCartDrawer()"></div>

    <!-- Cart Drawer -->
    <div id="cartDrawer" class="cart-drawer">
      <div class="cart-drawer-header">
        <div>
          <h3><i class="fas fa-file-invoice"></i> Mon Devis</h3>
          <span id="cartItemCount" class="cart-item-count-label">0 article</span>
        </div>
        <button class="cart-close-btn" onclick="closeCartDrawer()"><i class="fas fa-times"></i></button>
      </div>
      <div id="cartEmpty" class="cart-empty">
        <i class="fas fa-file-invoice" style="font-size:3rem; color:#E2E8F0; margin-bottom:1rem"></i>
        <p>Votre panier est vide</p>
        <small>Ajoutez des articles depuis le catalogue</small>
      </div>
      <div id="cartItems" class="cart-items-list"></div>
      <div id="cartFooter" class="cart-drawer-footer" style="display:none">
        <div class="cart-total-row">
          <span>Total estimé :</span>
          <strong id="cartGrandTotal">—</strong>
        </div>
        <p class="cart-total-note"><i class="fas fa-info-circle"></i> Les articles sans prix seront confirmés par nos équipes</p>
        <button class="cart-btn-devis" onclick="goToDevis()">
          <i class="fas fa-file-invoice-dollar"></i> Créer mon Devis
        </button>
        <button class="cart-btn-clear" onclick="clearCart(); renderCartDrawer()">
          <i class="fas fa-trash"></i> Vider le panier
        </button>
      </div>
    </div>

    <!-- Cart FAB -->
    <button class="cart-fab" id="cartFab" onclick="openCartDrawer()">
      <i class="fas fa-file-invoice"></i>
      <span class="cart-count" id="cartCountBadge" style="display:none">0</span>
    </button>

    <!-- Toast -->
    <div id="cartToast" class="cart-toast">
      <i class="fas fa-check-circle"></i>
      <span class="toast-msg"></span>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
  updateCartUI();
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  injectCartDrawer();
  updateCartUI();
});
