import type { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Dell XPS 15',
    description: 'Powerful 15-inch laptop with a stunning display, perfect for creative professionals and developers.',
    category: 'IT equipment',
    price: 1799.99,
    imageUrl: '/images/products/dell-xps.jpg',
    stock: 15,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'The latest smartphone from Apple, featuring the A17 Bionic chip and a pro-grade camera system.',
    category: 'phones',
    price: 1199.00,
    imageUrl: '/images/products/iphone15.jpg',
    stock: 25,
  },
  {
    id: '3',
    name: 'Logitech MX Master 3S',
    description: 'Advanced ergonomic wireless mouse with quiet clicks and an 8K DPI sensor for precision work.',
    category: 'accessories',
    price: 99.99,
    imageUrl: '/images/products/mx-master-3s.jpg',
    stock: 50,
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'High-end Android smartphone with an integrated S Pen and advanced AI camera features.',
    category: 'phones',
    price: 1299.00,
    imageUrl: '/images/products/samsung24.jpg',
    stock: 20,
  },
  {
    id: '5',
    name: 'HP Envy 6055e Printer',
    description: 'All-in-one wireless color printer for home and office use, with mobile printing capabilities.',
    category: 'IT equipment',
    price: 149.00,
    imageUrl: '/images/products/hp-envy-printer.jpg',
    stock: 30,
  },
  {
    id: '6',
    name: 'Apple AirPods Pro (2nd Gen)',
    description: 'Premium wireless earbuds with adaptive active noise cancellation and personalized spatial audio.',
    category: 'accessories',
    price: 249.00,
    imageUrl: '/images/products/airpods-pro.png',
    stock: 40,
  },
   {
    id: '7',
    name: 'MacBook Pro 16-inch',
    description: 'The most powerful MacBook ever, with the M3 Max chip for extreme performance.',
    category: 'IT equipment',
    price: 2499.00,
    imageUrl: '/images/products/macbook-16inch.jpg',
    stock: 10,
  },
  {
    id: '8',
    name: 'Google Pixel 8 Pro',
    description: 'The smartest Google phone yet, with a powerful camera and helpful AI features.',
    category: 'phones',
    price: 999.00,
    imageUrl: '/images/products/pixel8.jpg',
    stock: 22,
  },
  {
    id: '9',
    name: 'Logitech MX Keys S',
    description: 'A high-performance wireless keyboard with smart illumination and customizable keys.',
    category: 'accessories',
    price: 109.99,
    imageUrl: '/images/products/logi-mxkeys.png',
    stock: 35,
  },
  {
    id: '10',
    name: 'Samsung 49" Odyssey G9 Monitor',
    description: 'An immersive ultrawide gaming monitor with a 1000R curve and QLED technology.',
    category: 'IT equipment',
    price: 1399.99,
    imageUrl: '/images/products/odyssey-monitor.jpg',
    stock: 8,
  },
  {
    id: '11',
    name: 'Anker PowerCore 24K',
    description: 'A high-capacity power bank with 140W output, perfect for charging laptops and multiple devices.',
    category: 'accessories',
    price: 149.99,
    imageUrl: '/images/products/anker-24k.png',
    stock: 60,
  },
  {
    id: '12',
    name: 'Apple Watch Series 9',
    description: 'A powerful smartwatch with advanced health sensors and a new double tap gesture.',
    category: 'accessories',
    price: 399.00,
    imageUrl: '/images/products/apple_watchseries_9.jpg',
    stock: 33,
  }
];

export function getProducts(category?: string): Product[] {
  if (category) {
    return products.filter((p) => p.category === category);
  }
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
