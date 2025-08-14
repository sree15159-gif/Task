import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  cart: [],
  wishlist: [],
  user: null,
  orders: [],
  stores: [
    {
      id: 1,
      name: 'Fresh Market',
      rating: 4.5,
      deliveryTime: '30-45 min',
      image: '/assets/img/stores/store1.jpg',
      description: 'Fresh fruits and vegetables',
      products: []
    },
    {
      id: 2,
      name: 'Organic Store',
      rating: 4.3,
      deliveryTime: '45-60 min',
      image: '/assets/img/stores/store2.jpg',
      description: 'Organic and natural products',
      products: []
    },
    {
      id: 3,
      name: 'Electronics Hub',
      rating: 4.7,
      deliveryTime: '60-90 min',
      image: '/assets/img/stores/store3.jpg',
      description: 'Latest electronics and gadgets',
      products: []
    }
  ],
  products: [
    {
      id: 1,
      name: 'Fresh Organic Apples',
      price: 4.99,
      originalPrice: 6.99,
      rating: 4.5,
      reviewCount: 128,
      description: 'Fresh, crispy organic apples sourced directly from local farms.',
      images: [
        '/assets/img/product/1.jpg',
        '/assets/img/product/apple-2.jpg',
        '/assets/img/product/apple-3.jpg'
      ],
      category: 'Fruits',
      storeId: 1,
      inStock: true,
      stock: 50,
      variants: [
        { name: 'Small (1 lb)', price: 4.99, stock: 15 },
        { name: 'Medium (2 lbs)', price: 8.99, stock: 12 },
        { name: 'Large (5 lbs)', price: 19.99, stock: 8 }
      ]
    },
    {
      id: 2,
      name: 'Premium Olive Oil',
      price: 12.99,
      originalPrice: 15.99,
      rating: 4.8,
      reviewCount: 89,
      description: 'Extra virgin olive oil from Mediterranean olives.',
      images: [
        '/assets/img/product/2.jpg',
        '/assets/img/product/oil-2.jpg'
      ],
      category: 'Cooking',
      storeId: 2,
      inStock: true,
      stock: 25,
      variants: [
        { name: '250ml', price: 12.99, stock: 25 },
        { name: '500ml', price: 22.99, stock: 15 },
        { name: '1L', price: 39.99, stock: 10 }
      ]
    },
    {
      id: 3,
      name: 'Organic Honey',
      price: 8.99,
      originalPrice: 10.99,
      rating: 4.3,
      reviewCount: 67,
      description: 'Pure organic honey from local beekeepers.',
      images: [
        '/assets/img/product/3.jpg',
        '/assets/img/product/honey-2.jpg'
      ],
      category: 'Natural',
      storeId: 2,
      inStock: false,
      stock: 0,
      variants: [
        { name: '250g', price: 8.99, stock: 0 },
        { name: '500g', price: 15.99, stock: 0 }
      ]
    },
    {
      id: 4,
      name: 'Mantu Smart Watch',
      price: 516.00,
      originalPrice: 599.00,
      rating: 4.6,
      reviewCount: 234,
      description: 'Advanced smartwatch with health monitoring features.',
      images: [
        '/assets/img/product/11.jpg',
        '/assets/img/product/watch-2.jpg'
      ],
      category: 'Electronics',
      storeId: 3,
      inStock: true,
      stock: 15,
      variants: [
        { name: 'Black', price: 516.00, stock: 8 },
        { name: 'Silver', price: 516.00, stock: 7 }
      ]
    },
    {
      id: 5,
      name: 'Leather Bag',
      price: 75.00,
      originalPrice: 95.00,
      rating: 4.4,
      reviewCount: 156,
      description: 'Premium leather handbag for everyday use.',
      images: [
        '/assets/img/product/15.jpg',
        '/assets/img/product/bag-2.jpg'
      ],
      category: 'Fashion',
      storeId: 1,
      inStock: true,
      stock: 20,
      variants: [
        { name: 'Brown', price: 75.00, stock: 12 },
        { name: 'Black', price: 75.00, stock: 8 }
      ]
    }
  ]
};

// Action types
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  SET_USER: 'SET_USER',
  ADD_ORDER: 'ADD_ORDER',
  LOAD_STATE: 'LOAD_STATE'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingCartItem = state.cart.find(
        item => item.id === action.payload.id && 
        item.selectedVariant === action.payload.selectedVariant
      );
      
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id && 
            item.selectedVariant === action.payload.selectedVariant
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, cartId: Date.now() }]
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.cartId !== action.payload)
      };

    case actionTypes.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    case actionTypes.ADD_TO_WISHLIST:
      const existingWishlistItem = state.wishlist.find(item => item.id === action.payload.id);
      if (!existingWishlistItem) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload]
        };
      }
      return state;

    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload)
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };

    case actionTypes.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };

    case actionTypes.LOAD_STATE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('mantu-app-state');
      if (savedState) {
        try {
          const parsedState = JSON.parse(savedState);
          dispatch({
            type: actionTypes.LOAD_STATE,
            payload: {
              cart: parsedState.cart || [],
              wishlist: parsedState.wishlist || [],
              user: parsedState.user || null,
              orders: parsedState.orders || []
            }
          });
        } catch (error) {
          console.error('Error loading saved state:', error);
        }
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stateToSave = {
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user,
        orders: state.orders
      };
      localStorage.setItem('mantu-app-state', JSON.stringify(stateToSave));
    }
  }, [state.cart, state.wishlist, state.user, state.orders]);

  // Action creators
  const addToCart = (product, quantity = 1, selectedVariant = '') => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        ...product,
        quantity,
        selectedVariant,
        addedAt: new Date().toISOString()
      }
    });
  };

  const removeFromCart = (cartId) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: cartId
    });
  };

  const updateCartQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
    } else {
      dispatch({
        type: actionTypes.UPDATE_CART_QUANTITY,
        payload: { cartId, quantity }
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  const addToWishlist = (product) => {
    dispatch({
      type: actionTypes.ADD_TO_WISHLIST,
      payload: product
    });
  };

  const removeFromWishlist = (productId) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_WISHLIST,
      payload: productId
    });
  };

  const setUser = (user) => {
    dispatch({
      type: actionTypes.SET_USER,
      payload: user
    });
  };

  const addOrder = (order) => {
    dispatch({
      type: actionTypes.ADD_ORDER,
      payload: {
        ...order,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        status: 'pending'
      }
    });
  };

  // Helper functions
  const getCartTotal = () => {
    return state.cart.reduce((total, item) => {
      const variant = item.variants?.find(v => v.name === item.selectedVariant);
      const price = variant?.price || item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartItemsCount = () => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  const getWishlistItemsCount = () => {
    return state.wishlist.length;
  };

  const isInWishlist = (productId) => {
    return state.wishlist.some(item => item.id === productId);
  };

  const getProductById = (id) => {
    return state.products.find(product => product.id === parseInt(id));
  };

  const getStoreById = (id) => {
    return state.stores.find(store => store.id === parseInt(id));
  };

  const getProductsByStore = (storeId) => {
    return state.products.filter(product => product.storeId === parseInt(storeId));
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    setUser,
    addOrder,
    getCartTotal,
    getCartItemsCount,
    getWishlistItemsCount,
    isInWishlist,
    getProductById,
    getStoreById,
    getProductsByStore
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;