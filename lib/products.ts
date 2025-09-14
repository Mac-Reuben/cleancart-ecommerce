
import type { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Dell XPS 15',
    description: 'A premium 15-inch laptop featuring a stunning OLED display and powerful Intel Core i9 processor. Ideal for creative professionals who demand performance and portability for video editing, graphic design, and more.',
    category: 'IT equipment',
    price: 1799.99,
    imageUrl: '/images/products/dell-xps.png',
    stock: 15,
    reviews: [
      { rating: 5, text: 'Absolutely love this laptop! The screen is gorgeous and it handles all my design software with ease.' },
      { rating: 4, text: 'Great performance, but the battery life could be a bit better under heavy load.' },
    ],
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'Experience the power of the A17 Bionic chip. The pro-grade camera system captures stunning photos and cinematic video. A durable titanium design makes it both lightweight and tough.',
    category: 'phones',
    price: 1199.00,
    imageUrl: '/images/products/iphone15.png',
    stock: 25,
    reviews: [
        { rating: 5, text: 'The camera is a game-changer. Best iPhone yet!'},
    ],
  },
  {
    id: '3',
    name: 'Logitech MX Master 3S',
    description: 'The ultimate ergonomic mouse for power users. With an 8K DPI sensor, it tracks on virtually any surface. The MagSpeed scroll wheel is fast, precise, and silent. Connect via Bluetooth or the included Logi Bolt receiver.',
    category: 'accessories',
    price: 99.99,
    imageUrl: '/images/products/mx-master-3s.png',
    stock: 50,
    reviews: [
      { rating: 5, text: 'So comfortable and the quiet clicks are amazing for the office.'},
      { rating: 5, text: 'The best mouse I have ever owned. Worth every penny.'},
      { rating: 4, text: 'Excellent mouse, just wish it was USB-C for charging.' },
    ],
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Unleash new levels of creativity and productivity with Galaxy AI. The integrated S Pen lets you write, sketch, and navigate with precision. The 200MP camera captures incredible detail, even in low light.',
    category: 'phones',
    price: 1299.00,
    imageUrl: '/images/products/samsung24.webp',
    stock: 0,
  },
  {
    id: '5',
    name: 'HP Envy 6055e Printer',
    description: 'A versatile all-in-one printer perfect for home or small office use. Print, scan, and copy in high-quality color. HP+ makes it easy to print from any device, anywhere.',
    category: 'IT equipment',
    price: 149.00,
    imageUrl: '/images/products/hp-envy-printer.jpg',
    stock: 30,
  },
  {
    id: '6',
    name: 'Apple AirPods Pro (2nd Gen)',
    description: 'Immerse yourself in sound. These AirPods feature up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio for an incredible listening experience.',
    category: 'accessories',
    price: 249.00,
    imageUrl: '/images/products/airpods-pro.png',
    stock: 40,
     reviews: [
      { rating: 5, text: 'Noise cancellation is top-notch. Perfect for travel.'},
    ],
  },
   {
    id: '7',
    name: 'MacBook Pro 16-inch',
    description: 'The ultimate pro laptop. With the M3 Max chip, it delivers game-changing performance for the most demanding workflows. The Liquid Retina XDR display is the best ever in a laptop.',
    category: 'IT equipment',
    price: 2499.00,
    imageUrl: '/images/products/macbook-16inch.jpg',
    stock: 10,
  },
  {
    id: '8',
    name: 'Google Pixel 8 Pro',
    description: 'The Pixel 8 Pro features the powerful Google Tensor G3 chip and a pro-level camera system. AI-powered features help you take amazing photos, screen calls, and more.',
    category: 'phones',
    price: 999.00,
    imageUrl: '/images/products/pixel8.png',
    stock: 22,
  },
  {
    id: '9',
    name: 'Logitech MX Keys S',
    description: 'A wireless keyboard designed for developers and creatives. Spherically-dished keys match the shape of your fingertips for a comfortable and precise typing experience. Features smart backlighting and multi-device support.',
    category: 'accessories',
    price: 109.99,
    imageUrl: '/images/products/logi-mxkeys.png',
    stock: 35,
  },
  {
    id: '10',
    name: 'Samsung 49" Odyssey G9 Monitor',
    description: 'Get a competitive edge with this super ultrawide 49-inch gaming monitor. The 1000R curve matches the contours of the human eye for unbelievable immersion, and the 240Hz refresh rate ensures silky-smooth gameplay.',
    category: 'IT equipment',
    price: 1399.99,
    imageUrl: '/images/products/samsung24.webp',
    stock: 8,
  },
  {
    id: '11',
    name: 'Anker PowerCore 24K',
    description: 'A beast of a power bank. With a 24,000mAh capacity and 140W of total output, it can charge a MacBook Pro and an iPhone at the same time. The smart digital display shows you the remaining power.',
    category: 'accessories',
    price: 149.99,
    imageUrl: '/images/products/anker-24k.png',
    stock: 60,
  },
  {
    id: '12',
    name: 'Apple Watch Series 9',
    description: 'Your essential companion for a healthy life. It\'s more powerful than ever with the new S9 SiP. A magical new way to use your watch without touching the screen. Features advanced health, safety, and activity features.',
    category: 'accessories',
    price: 399.00,
    imageUrl: '/images/products/apple_watchseries_9.png',
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
