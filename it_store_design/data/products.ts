import { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    price: 1299.99,
    description: 'High-performance laptop for work and gaming',
    image: '/images/laptop.jpg',
    category: 'Electronics',
    rating: 4.5,
    brand: 'Acheta',
    inStock: true
  },
  {
    id: '2',
    name: 'Samsung Galaxy S23',
    price: 100.00,
    description: 'Inspired by a 2019 classic, this Samsung brings back the original design in all its glory. Crafted with a sleek glass-and-metal build and completely uniform aesthetic, it delivers a clean, consistent design that feels awesome.',
    image: '/images/samsung-s23.jpg',
    category: 'Phones',
    rating: 4.8,
    brand: 'Samsung',
    inStock: true
  },
  {
    id: '3',
    name: 'Earbuds',
    price: 35.00,
    description: 'Advanced pure sound',
    image: '/images/earbuds.jpg',
    category: 'Audio',
    rating: 4.2,
    brand: 'SoundTech',
    inStock: true
  },
  {
    id: '4',
    name: 'Mouse',
    price: 85.78,
    description: 'Point, click, and conquer',
    image: '/images/mouse.jpg',
    category: 'Accessories',
    rating: 4.3,
    brand: 'TechMouse',
    inStock: true
  },
  {
    id: '5',
    name: 'Projector',
    price: 210.41,
    description: 'Project in style!',
    image: '/images/projector.jpg',
    category: 'Electronics',
    rating: 4.1,
    brand: 'ProView',
    inStock: true
  },
  {
    id: '6',
    name: 'HDMI Cable',
    price: 9.51,
    description: 'Remote connections start here',
    image: '/images/hdmi-cable.jpg',
    category: 'Cables',
    rating: 4.0,
    brand: 'ConnectPro',
    inStock: true
  },
  {
    id: '7',
    name: 'Galaxy Z Fold 4',
    price: 119.32,
    description: 'Foldable smartphone with advanced features',
    image: '/images/galaxy-z-fold.jpg',
    category: 'Phones',
    rating: 4.6,
    brand: 'Samsung',
    inStock: true
  },
  {
    id: '8',
    name: 'Galaxy A54',
    price: 850.01,
    description: 'Mid-range smartphone with great features',
    image: '/images/galaxy-a54.jpg',
    category: 'Phones',
    rating: 4.4,
    brand: 'Samsung',
    inStock: true
  },
  {
    id: '9',
    name: 'Galaxy ZFlower 9 Pro',
    price: 750.00,
    description: 'Premium foldable smartphone',
    image: '/images/galaxy-zflower.jpg',
    category: 'Phones',
    rating: 4.7,
    brand: 'Samsung',
    inStock: true
  },
  {
    id: '10',
    name: 'Phone Cases',
    price: 5.99,
    description: 'Protective cases for your phone',
    image: '/images/phone-cases.jpg',
    category: 'Accessories',
    rating: 4.0,
    brand: 'CasePro',
    inStock: true
  },
  {
    id: '11',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'Premium wireless headphones with noise cancellation',
    image: '/images/headphones.jpg',
    category: 'Audio',
    rating: 4.5,
    brand: 'AudioTech',
    inStock: true
  },
  {
    id: '12',
    name: 'Smart Watch',
    price: 299.99,
    description: 'Track your fitness and stay connected',
    image: '/images/smartwatch.jpg',
    category: 'Wearables',
    rating: 4.3,
    brand: 'TechWatch',
    inStock: true
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getRelatedProducts = (productId: string, category: string): Product[] => {
  return products
    .filter(product => product.id !== productId && product.category === category)
    .slice(0, 4)
}
