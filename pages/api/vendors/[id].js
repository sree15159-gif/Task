// API endpoint for individual vendor details
// This is a mock API - replace with real database integration

const mockVendorsData = {
  'restaurant-1': {
    id: 'restaurant-1',
    name: 'Pizza Palace',
    rating: 4.5,
    deliveryTime: '25-30 mins',
    image: '/assets/img/vendors/pizza-palace.jpg',
    coverImage: '/assets/img/vendors/covers/pizza-palace-cover.jpg',
    category: 'Restaurant',
    isFavorite: false,
    distance: '1.2 km',
    isOpen: true,
    deliveryFee: 2.99,
    minOrder: 15,
    address: '123 Pizza Street, Downtown',
    phone: '+1 (555) 123-4567',
    email: 'contact@pizzapalace.com',
    description: 'Authentic Italian pizzas made with fresh ingredients and traditional recipes. Family-owned restaurant serving the community for over 20 years.',
    tags: ['Italian', 'Pizza', 'Fast Food', 'Family Friendly'],
    openingHours: {
      monday: '11:00 AM - 11:00 PM',
      tuesday: '11:00 AM - 11:00 PM',
      wednesday: '11:00 AM - 11:00 PM',
      thursday: '11:00 AM - 11:00 PM',
      friday: '11:00 AM - 12:00 AM',
      saturday: '11:00 AM - 12:00 AM',
      sunday: '12:00 PM - 10:00 PM'
    },
    socialMedia: {
      facebook: 'https://facebook.com/pizzapalace',
      instagram: 'https://instagram.com/pizzapalace',
      twitter: 'https://twitter.com/pizzapalace'
    },
    products: [
      {
        id: 'p1',
        name: 'Margherita Pizza',
        price: 12.99,
        originalPrice: 15.99,
        image: '/assets/img/product/1.jpg',
        rating: 4.3,
        category: 'Pizza',
        inStock: true,
        description: 'Classic pizza with fresh mozzarella, tomatoes, and basil',
        ingredients: ['Fresh Mozzarella', 'Tomato Sauce', 'Fresh Basil', 'Olive Oil'],
        allergens: ['Gluten', 'Dairy'],
        nutritionInfo: {
          calories: 280,
          protein: '12g',
          carbs: '35g',
          fat: '10g'
        }
      },
      {
        id: 'p2',
        name: 'Pepperoni Pizza',
        price: 15.99,
        originalPrice: 18.99,
        image: '/assets/img/product/2.jpg',
        rating: 4.5,
        category: 'Pizza',
        inStock: true,
        description: 'Traditional pepperoni pizza with extra cheese',
        ingredients: ['Pepperoni', 'Mozzarella Cheese', 'Tomato Sauce', 'Italian Herbs'],
        allergens: ['Gluten', 'Dairy', 'Pork'],
        nutritionInfo: {
          calories: 320,
          protein: '15g',
          carbs: '32g',
          fat: '15g'
        }
      },
      {
        id: 'p3',
        name: 'Veggie Supreme',
        price: 14.99,
        originalPrice: 17.99,
        image: '/assets/img/product/3.jpg',
        rating: 4.2,
        category: 'Pizza',
        inStock: true,
        description: 'Loaded with fresh vegetables and herbs',
        ingredients: ['Bell Peppers', 'Mushrooms', 'Onions', 'Olives', 'Tomatoes', 'Mozzarella'],
        allergens: ['Gluten', 'Dairy'],
        nutritionInfo: {
          calories: 260,
          protein: '11g',
          carbs: '38g',
          fat: '8g'
        }
      },
      {
        id: 'p4',
        name: 'Caesar Salad',
        price: 8.99,
        originalPrice: 10.99,
        image: '/assets/img/product/4.jpg',
        rating: 4.1,
        category: 'Salads',
        inStock: true,
        description: 'Fresh romaine lettuce with caesar dressing',
        ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Parmesan Cheese', 'Croutons'],
        allergens: ['Dairy', 'Gluten', 'Eggs'],
        nutritionInfo: {
          calories: 180,
          protein: '8g',
          carbs: '12g',
          fat: '12g'
        }
      },
      {
        id: 'p5',
        name: 'Garlic Bread',
        price: 5.99,
        originalPrice: 7.99,
        image: '/assets/img/product/5.jpg',
        rating: 4.4,
        category: 'Sides',
        inStock: true,
        description: 'Homemade garlic bread with herbs',
        ingredients: ['Fresh Bread', 'Garlic', 'Butter', 'Italian Herbs', 'Parmesan'],
        allergens: ['Gluten', 'Dairy'],
        nutritionInfo: {
          calories: 220,
          protein: '6g',
          carbs: '28g',
          fat: '10g'
        }
      }
    ],
    reviews: [
      {
        id: 'r1',
        customerName: 'John D.',
        rating: 5,
        comment: 'Amazing pizza! Fresh ingredients and great service.',
        date: '2024-01-15T10:30:00Z',
        verified: true
      },
      {
        id: 'r2',
        customerName: 'Sarah M.',
        rating: 4,
        comment: 'Good food, quick delivery. Will order again.',
        date: '2024-01-14T19:45:00Z',
        verified: true
      },
      {
        id: 'r3',
        customerName: 'Mike R.',
        rating: 5,
        comment: 'Best pizza in town! Highly recommended.',
        date: '2024-01-13T20:15:00Z',
        verified: true
      }
    ],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  'restaurant-2': {
    id: 'restaurant-2',
    name: 'Burger Hub',
    rating: 4.2,
    deliveryTime: '20-25 mins',
    image: '/assets/img/vendors/burger-hub.jpg',
    coverImage: '/assets/img/vendors/covers/burger-hub-cover.jpg',
    category: 'Fast Food',
    isFavorite: false,
    distance: '0.8 km',
    isOpen: true,
    deliveryFee: 1.99,
    minOrder: 10,
    address: '456 Burger Lane, City Center',
    phone: '+1 (555) 987-6543',
    email: 'info@burgerhub.com',
    description: 'Juicy burgers and crispy fries made fresh to order. Using only premium beef and fresh ingredients.',
    tags: ['American', 'Burgers', 'Fast Food', 'Casual Dining'],
    openingHours: {
      monday: '10:00 AM - 10:00 PM',
      tuesday: '10:00 AM - 10:00 PM',
      wednesday: '10:00 AM - 10:00 PM',
      thursday: '10:00 AM - 10:00 PM',
      friday: '10:00 AM - 11:00 PM',
      saturday: '10:00 AM - 11:00 PM',
      sunday: '11:00 AM - 9:00 PM'
    },
    products: [
      {
        id: 'p6',
        name: 'Classic Burger',
        price: 8.99,
        originalPrice: 10.99,
        image: '/assets/img/product/6.jpg',
        rating: 4.1,
        category: 'Burgers',
        inStock: true,
        description: 'Beef patty with lettuce, tomato, and special sauce',
        ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Special Sauce', 'Sesame Bun'],
        allergens: ['Gluten', 'Eggs', 'Soy'],
        nutritionInfo: {
          calories: 450,
          protein: '25g',
          carbs: '35g',
          fat: '22g'
        }
      },
      {
        id: 'p7',
        name: 'Cheese Burger',
        price: 9.99,
        originalPrice: 11.99,
        image: '/assets/img/product/7.jpg',
        rating: 4.4,
        category: 'Burgers',
        inStock: true,
        description: 'Classic burger with melted cheese',
        ingredients: ['Beef Patty', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Pickles', 'Sesame Bun'],
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        nutritionInfo: {
          calories: 520,
          protein: '28g',
          carbs: '36g',
          fat: '28g'
        }
      }
    ],
    reviews: [
      {
        id: 'r4',
        customerName: 'Lisa K.',
        rating: 4,
        comment: 'Great burgers and fast service!',
        date: '2024-01-16T12:20:00Z',
        verified: true
      }
    ],
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-16T00:00:00Z'
  },
  'grocery-1': {
    id: 'grocery-1',
    name: 'Fresh Mart',
    rating: 4.3,
    deliveryTime: '45-60 mins',
    image: '/assets/img/vendors/fresh-mart.jpg',
    coverImage: '/assets/img/vendors/covers/fresh-mart-cover.jpg',
    category: 'Supermarket',
    isFavorite: false,
    distance: '1.5 km',
    isOpen: true,
    deliveryFee: 0,
    minOrder: 25,
    address: '321 Fresh Avenue, Suburb',
    phone: '+1 (555) 321-9876',
    email: 'contact@freshmart.com',
    description: 'Your neighborhood supermarket for fresh groceries and daily essentials. Committed to providing quality products at affordable prices.',
    tags: ['Fresh Produce', 'Organic', 'Daily Essentials', 'Local'],
    openingHours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '8:00 AM - 9:00 PM'
    },
    products: [
      {
        id: 'g1',
        name: 'Fresh Apples (1kg)',
        price: 4.99,
        originalPrice: 5.99,
        image: '/assets/img/product/11.jpg',
        rating: 4.2,
        category: 'Fruits',
        inStock: true,
        description: 'Crisp and sweet red apples',
        origin: 'Local Farm',
        organic: true,
        nutritionInfo: {
          calories: 52,
          protein: '0.3g',
          carbs: '14g',
          fat: '0.2g'
        }
      }
    ],
    reviews: [
      {
        id: 'r5',
        customerName: 'Tom B.',
        rating: 4,
        comment: 'Fresh produce and good prices.',
        date: '2024-01-18T15:30:00Z',
        verified: true
      }
    ],
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z'
  },
  'pharmacy-1': {
    id: 'pharmacy-1',
    name: 'HealthCare Plus',
    rating: 4.8,
    deliveryTime: '15-20 mins',
    image: '/assets/img/vendors/healthcare-plus.jpg',
    coverImage: '/assets/img/vendors/covers/healthcare-plus-cover.jpg',
    category: 'Pharmacy',
    isFavorite: false,
    distance: '0.5 km',
    isOpen: true,
    deliveryFee: 0,
    minOrder: 10,
    address: '147 Health Street, Medical District',
    phone: '+1 (555) 147-2580',
    email: 'info@healthcareplus.com',
    description: '24/7 pharmacy service with prescription and over-the-counter medications. Licensed pharmacists available for consultation.',
    tags: ['24/7', 'Prescription', 'Healthcare', 'Emergency'],
    openingHours: {
      monday: '24 Hours',
      tuesday: '24 Hours',
      wednesday: '24 Hours',
      thursday: '24 Hours',
      friday: '24 Hours',
      saturday: '24 Hours',
      sunday: '24 Hours'
    },
    products: [
      {
        id: 'm1',
        name: 'Paracetamol 500mg',
        price: 5.99,
        originalPrice: 7.99,
        image: '/assets/img/product/16.jpg',
        rating: 4.7,
        category: 'Pain Relief',
        inStock: true,
        description: 'Effective pain relief tablets',
        prescriptionRequired: false,
        activeIngredient: 'Paracetamol 500mg',
        dosage: '1-2 tablets every 4-6 hours',
        warnings: ['Do not exceed 8 tablets in 24 hours', 'Consult doctor if symptoms persist']
      }
    ],
    reviews: [
      {
        id: 'r6',
        customerName: 'Emma W.',
        rating: 5,
        comment: 'Fast delivery and professional service.',
        date: '2024-01-20T09:15:00Z',
        verified: true
      }
    ],
    createdAt: '2024-01-06T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  }
};

export default function handler(req, res) {
  const { method, query } = req;
  const { id } = query;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (method === 'GET') {
    try {
      // Get vendor by ID
      const vendor = mockVendorsData[id];

      if (!vendor) {
        return res.status(404).json({
          success: false,
          error: 'Vendor not found',
          message: `Vendor with ID '${id}' does not exist`
        });
      }

      // Add some computed fields
      const enrichedVendor = {
        ...vendor,
        totalReviews: vendor.reviews?.length || 0,
        averageRating: vendor.rating,
        totalProducts: vendor.products?.length || 0,
        isCurrentlyOpen: vendor.isOpen, // In real app, this would check current time against opening hours
        estimatedDeliveryTime: vendor.deliveryTime,
        categories: [...new Set(vendor.products?.map(p => p.category) || [])],
        priceRange: vendor.products?.length > 0 ? {
          min: Math.min(...vendor.products.map(p => p.price)),
          max: Math.max(...vendor.products.map(p => p.price))
        } : null
      };

      res.status(200).json({
        success: true,
        data: enrichedVendor,
        message: 'Vendor details retrieved successfully'
      });

    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error.message
      });
    }
  } else if (method === 'PUT') {
    // Update vendor (for admin/vendor dashboard)
    try {
      const vendor = mockVendorsData[id];

      if (!vendor) {
        return res.status(404).json({
          success: false,
          error: 'Vendor not found',
          message: `Vendor with ID '${id}' does not exist`
        });
      }

      // In real app, validate and update vendor data
      const updatedVendor = {
        ...vendor,
        ...req.body,
        updatedAt: new Date().toISOString()
      };

      // Update mock data (in real app, update database)
      mockVendorsData[id] = updatedVendor;

      res.status(200).json({
        success: true,
        data: updatedVendor,
        message: 'Vendor updated successfully'
      });

    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error.message
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: `Method ${method} not allowed`
    });
  }
}