// Product interactions for cart and wishlist
document.addEventListener('DOMContentLoaded', function() {
  // Sample product data matching the homepage products
  const sampleProducts = {
    1: {
      id: 1,
      name: 'Premium T-Shirt',
      price: 25.99,
      originalPrice: 35.99,
      image: '/assets/img/product/5.jpg',
      category: 'Fashion',
      rating: 4.5,
      inStock: true
    },
    2: {
      id: 2,
      name: 'Cotton Fabric T-shirt',
      price: 18.99,
      originalPrice: 24.99,
      image: '/assets/img/product/9.jpg',
      category: 'Fashion',
      rating: 4.3,
      inStock: true
    },
    3: {
      id: 3,
      name: 'Fresh Organic Apples',
      price: 4.99,
      originalPrice: 6.99,
      image: '/assets/img/product/1.jpg',
      category: 'Fruits',
      rating: 4.7,
      inStock: true
    },
    4: {
      id: 4,
      name: 'Smart Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: '/assets/img/product/11.jpg',
      category: 'Electronics',
      rating: 4.4,
      inStock: true
    },
    5: {
      id: 5,
      name: 'Wireless Headphones',
      price: 89.99,
      originalPrice: 119.99,
      image: '/assets/img/product/13.jpg',
      category: 'Electronics',
      rating: 4.6,
      inStock: true
    },
    6: {
      id: 6,
      name: 'Premium Leather Bag',
      price: 149.99,
      originalPrice: 199.99,
      image: '/assets/img/product/15.jpg',
      category: 'Fashion',
      rating: 4.8,
      inStock: true
    },
    7: {
      id: 7,
      name: 'Organic Vegetables',
      price: 12.99,
      originalPrice: 16.99,
      image: '/assets/img/product/17.jpg',
      category: 'Groceries',
      rating: 4.2,
      inStock: true
    },
    8: {
      id: 8,
      name: 'Fresh Fruits Pack',
      price: 19.99,
      originalPrice: 24.99,
      image: '/assets/img/product/23.jpg',
      category: 'Groceries',
      rating: 4.5,
      inStock: true
    }
  };

  // Get cart and wishlist from localStorage
  function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
  }

  function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity: quantity,
        cartId: Date.now() + Math.random()
      });
    }
    
    saveCart(cart);
    showNotification(`${product.name} added to cart!`, 'success');
  }

  function addToWishlist(product) {
    const wishlist = getWishlist();
    const exists = wishlist.find(item => item.id === product.id);
    
    if (!exists) {
      wishlist.push(product);
      saveWishlist(wishlist);
      showNotification(`${product.name} added to wishlist!`, 'success');
      return true;
    }
    return false;
  }

  function removeFromWishlist(productId) {
    const wishlist = getWishlist();
    const filtered = wishlist.filter(item => item.id !== productId);
    saveWishlist(filtered);
    showNotification('Item removed from wishlist!', 'info');
  }

  function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
  }

  function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count, .mn-cart-count');
    cartCountElements.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline' : 'none';
    });
  }

  function updateWishlistCount() {
    const wishlist = getWishlist();
    const count = wishlist.length;
    const wishlistCountElements = document.querySelectorAll('.wishlist-count, .mn-wishlist-count');
    wishlistCountElements.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline' : 'none';
    });
  }

  function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="ri-${type === 'success' ? 'check' : type === 'error' ? 'error-warning' : 'information'}-line"></i>
        <span>${message}</span>
      </div>
    `;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Initialize counts
  updateCartCount();
  updateWishlistCount();

  // Add event listeners to existing cart buttons
  document.addEventListener('click', function(e) {
    if (e.target.closest('.mn-add-cart')) {
      e.preventDefault();
      // Try to determine which product this is
      const productCard = e.target.closest('.mn-product-card');
      if (productCard) {
        const productIndex = Array.from(document.querySelectorAll('.mn-product-card')).indexOf(productCard) + 1;
        const product = sampleProducts[productIndex] || sampleProducts[1];
        addToCart(product);
      }
    }
    
    if (e.target.closest('.wishlist-btn') || e.target.closest('[title*="Wishlist"]')) {
      e.preventDefault();
      const productCard = e.target.closest('.mn-product-card');
      if (productCard) {
        const productIndex = Array.from(document.querySelectorAll('.mn-product-card')).indexOf(productCard) + 1;
        const product = sampleProducts[productIndex] || sampleProducts[1];
        
        if (isInWishlist(product.id)) {
          removeFromWishlist(product.id);
        } else {
          addToWishlist(product);
        }
        
        // Update wishlist button appearance
        updateWishlistButtons();
      }
    }
  });

  function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn, [title*="Wishlist"]').forEach((btn, index) => {
      const productIndex = index + 1;
      const product = sampleProducts[productIndex];
      if (product) {
        const inWishlist = isInWishlist(product.id);
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = `ri-heart-${inWishlist ? 'fill' : 'line'}`;
        }
        btn.classList.toggle('active', inWishlist);
        btn.title = inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
      }
    });
  }

  // Initial update of wishlist buttons
  updateWishlistButtons();

  // Add vendor store functionality for categories
  function addVendorStores() {
    const categoryCards = document.querySelectorAll('.mn-cat-card');
    categoryCards.forEach((card, index) => {
      // Add click handler to show vendor stores
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const categoryName = card.querySelector('h3')?.textContent || 'Category';
        showVendorStores(categoryName);
      });
    });
  }

  function showVendorStores(categoryName) {
    // Sample vendor data
    const vendors = [
      {
        id: 1,
        name: 'Fresh Market Store',
        rating: 4.5,
        deliveryTime: '30-45 min',
        image: '/assets/img/vendor/1.jpg',
        category: categoryName
      },
      {
        id: 2,
        name: 'Quick Delivery Hub',
        rating: 4.2,
        deliveryTime: '20-30 min',
        image: '/assets/img/vendor/2.jpg',
        category: categoryName
      },
      {
        id: 3,
        name: 'Premium Store',
        rating: 4.8,
        deliveryTime: '45-60 min',
        image: '/assets/img/vendor/3.jpg',
        category: categoryName
      }
    ];

    // Create modal or redirect to vendor page
    const vendorModal = document.createElement('div');
    vendorModal.className = 'vendor-modal';
    vendorModal.innerHTML = `
      <div class="vendor-modal-content">
        <div class="vendor-modal-header">
          <h3>Stores for ${categoryName}</h3>
          <button class="close-vendor-modal">&times;</button>
        </div>
        <div class="vendor-list">
          ${vendors.map(vendor => `
            <div class="vendor-card" data-vendor-id="${vendor.id}">
              <img src="${vendor.image}" alt="${vendor.name}" onerror="this.src='/assets/img/vendor/default.jpg'">
              <div class="vendor-info">
                <h4>${vendor.name}</h4>
                <div class="vendor-meta">
                  <span class="rating">★ ${vendor.rating}</span>
                  <span class="delivery-time">${vendor.deliveryTime}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Add styles
    vendorModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    document.body.appendChild(vendorModal);

    // Close modal functionality
    vendorModal.querySelector('.close-vendor-modal').addEventListener('click', () => {
      document.body.removeChild(vendorModal);
    });

    vendorModal.addEventListener('click', (e) => {
      if (e.target === vendorModal) {
        document.body.removeChild(vendorModal);
      }
    });

    // Vendor card click handler
    vendorModal.querySelectorAll('.vendor-card').forEach(card => {
      card.addEventListener('click', () => {
        const vendorId = card.dataset.vendorId;
        // Redirect to vendor page or show products
        window.location.href = `/vendor/${vendorId}`;
      });
    });
  }

  // Initialize vendor stores
  addVendorStores();
});