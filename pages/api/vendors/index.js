// API endpoint for vendors listing
// This is a mock API - replace with real database integration

const mockVendorsData = {
  food: [
    {
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
      description: 'Authentic Italian pizzas made with fresh ingredients and traditional recipes.',
      tags: ['Italian', 'Pizza', 'Fast Food', 'Family Friendly'],
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z'
    },
    {
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
      description: 'Juicy burgers and crispy fries made fresh to order.',
      tags: ['American', 'Burgers', 'Fast Food', 'Casual Dining'],
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-16T00:00:00Z'
    },
    {
      id: 'restaurant-3',
      name: 'Spice Garden',
      rating: 4.7,
      deliveryTime: '30-35 mins',
      image: '/assets/img/vendors/spice-garden.jpg',
      coverImage: '/assets/img/vendors/covers/spice-garden-cover.jpg',
      category: 'Indian Cuisine',
      isFavorite: false,
      distance: '2.1 km',
      isOpen: false,
      deliveryFee: 3.99,
      minOrder: 20,
      address: '789 Spice Road, Little India',
      phone: '+1 (555) 456-7890',
      email: 'contact@spicegarden.com',
      description: 'Authentic Indian cuisine with traditional spices and flavors.',
      tags: ['Indian', 'Spicy', 'Vegetarian Options', 'Traditional'],
      createdAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-17T00:00:00Z'
    }
  ],
  groceries: [
    {
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
      description: 'Your neighborhood supermarket for fresh groceries and daily essentials.',
      tags: ['Fresh Produce', 'Organic', 'Daily Essentials', 'Local'],
      createdAt: '2024-01-04T00:00:00Z',
      updatedAt: '2024-01-18T00:00:00Z'
    },
    {
      id: 'grocery-2',
      name: 'Green Valley',
      rating: 4.6,
      deliveryTime: '30-45 mins',
      image: '/assets/img/vendors/green-valley.jpg',
      coverImage: '/assets/img/vendors/covers/green-valley-cover.jpg',
      category: 'Organic Store',
      isFavorite: false,
      distance: '2.3 km',
      isOpen: true,
      deliveryFee: 4.99,
      minOrder: 30,
      address: '654 Green Street, Eco District',
      phone: '+1 (555) 654-3210',
      email: 'contact@greenvalley.com',
      description: 'Premium organic products for a healthy lifestyle.',
      tags: ['Organic', 'Healthy', 'Premium', 'Eco-Friendly'],
      createdAt: '2024-01-05T00:00:00Z',
      updatedAt: '2024-01-19T00:00:00Z'
    }
  ],
  medicine: [
    {
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
      description: '24/7 pharmacy service with prescription and over-the-counter medications.',
      tags: ['24/7', 'Prescription', 'Healthcare', 'Emergency'],
      createdAt: '2024-01-06T00:00:00Z',
      updatedAt: '2024-01-20T00:00:00Z'
    }
  ],
  services: [
    {
      id: 'service-1',
      name: 'CleanPro Services',
      rating: 4.6,
      deliveryTime: '2-4 hours',
      image: '/assets/img/vendors/cleanpro.jpg',
      coverImage: '/assets/img/vendors/covers/cleanpro-cover.jpg',
      category: 'Cleaning',
      isFavorite: false,
      distance: '3.2 km',
      isOpen: true,
      deliveryFee: 0,
      minOrder: 50,
      address: '258 Service Lane, Business District',
      phone: '+1 (555) 258-3690',
      email: 'contact@cleanpro.com',
      description: 'Professional cleaning services for homes and offices.',
      tags: ['Professional', 'Reliable', 'Insured', 'Same Day'],
      createdAt: '2024-01-07T00:00:00Z',
      updatedAt: '2024-01-21T00:00:00Z'
    }
  ],
  shop: [
    {
      id: 'shop-1',
      name: 'Fashion Hub',
      rating: 4.4,
      deliveryTime: '1-2 days',
      image: '/assets/img/vendors/fashion-hub.jpg',
      coverImage: '/assets/img/vendors/covers/fashion-hub-cover.jpg',
      category: 'Clothing',
      isFavorite: false,
      distance: '5.2 km',
      isOpen: true,
      deliveryFee: 5.99,
      minOrder: 40,
      address: '369 Fashion Street, Shopping District',
      phone: '+1 (555) 369-1470',
      email: 'contact@fashionhub.com',
      description: 'Trendy fashion and accessories for all ages.',
      tags: ['Fashion', 'Trendy', 'Affordable', 'All Ages'],
      createdAt: '2024-01-08T00:00:00Z',
      updatedAt: '2024-01-22T00:00:00Z'
    }
  ]
};

export default function handler(req, res) {
  const { method, query } = req;

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
      const {
        category = 'all',
        isOpen,
        rating,
        deliveryTime,
        deliveryFee,
        sortBy = 'rating',
        search,
        limit = 50,
        offset = 0
      } = query;

      let vendors = [];

      // Get vendors by category
      if (category === 'all') {
        vendors = Object.values(mockVendorsData).flat();
      } else {
        vendors = mockVendorsData[category] || [];
      }

      // Apply filters
      if (isOpen === 'true') {
        vendors = vendors.filter(vendor => vendor.isOpen);
      }

      if (rating) {
        const minRating = parseFloat(rating);
        vendors = vendors.filter(vendor => vendor.rating >= minRating);
      }

      if (deliveryTime) {
        const maxTime = parseInt(deliveryTime);
        vendors = vendors.filter(vendor => {
          const vendorTime = parseInt(vendor.deliveryTime.split('-')[1]);
          return vendorTime <= maxTime;
        });
      }

      if (deliveryFee) {
        const maxFee = parseFloat(deliveryFee);
        vendors = vendors.filter(vendor => vendor.deliveryFee <= maxFee);
      }

      if (search) {
        const searchTerm = search.toLowerCase();
        vendors = vendors.filter(vendor =>
          vendor.name.toLowerCase().includes(searchTerm) ||
          vendor.description.toLowerCase().includes(searchTerm) ||
          vendor.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }

      // Sort vendors
      vendors.sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'deliveryTime':
            return parseInt(a.deliveryTime.split('-')[0]) - parseInt(b.deliveryTime.split('-')[0]);
          case 'distance':
            return parseFloat(a.distance) - parseFloat(b.distance);
          case 'name':
            return a.name.localeCompare(b.name);
          case 'newest':
            return new Date(b.createdAt) - new Date(a.createdAt);
          default:
            return 0;
        }
      });

      // Apply pagination
      const startIndex = parseInt(offset);
      const endIndex = startIndex + parseInt(limit);
      const paginatedVendors = vendors.slice(startIndex, endIndex);

      // Response
      res.status(200).json({
        success: true,
        data: {
          vendors: paginatedVendors,
          pagination: {
            total: vendors.length,
            limit: parseInt(limit),
            offset: parseInt(offset),
            hasMore: endIndex < vendors.length
          },
          filters: {
            category,
            isOpen,
            rating,
            deliveryTime,
            deliveryFee,
            sortBy,
            search
          }
        },
        message: `Found ${vendors.length} vendors`
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
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: `Method ${method} not allowed`
    });
  }
}