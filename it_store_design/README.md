# E-commerce Website

A complete, fully functional e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS. This project implements all the specifications from the design requirements with a modern, responsive interface.

## Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Browse products with search and category filtering
- **Shopping Cart**: Add/remove items, update quantities, type selection
- **User Authentication**: Registration and login system
- **Checkout Process**: Multi-step checkout with form validation
- **Order Management**: Order confirmation and tracking
- **Store Locator**: Interactive map with store locations

### 🎨 Design & UX
- **Mobile-First**: Responsive design that works on all devices
- **Modern UI**: Clean, professional interface with black header and white body
- **Interactive Elements**: Hover effects, transitions, and smooth animations
- **Accessibility**: Proper semantic HTML and keyboard navigation

### 📱 Pages Implemented
1. **Registration Page** (`/register`) - User account creation
2. **Login Page** (`/login`) - User authentication
3. **Product Listing** (`/products`) - Browse and search products
4. **Product Detail** (`/product/[slug]`) - Individual product view
5. **Shopping Cart** (`/cart`) - Cart management and review
6. **Checkout** (`/checkout`) - Order processing
7. **Order Success** (`/order-success`) - Order confirmation
8. **Store Locator** (`/store-locator`) - Find physical stores

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Utilities**: clsx, tailwind-merge

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout process
│   ├── login/             # User login
│   ├── order-success/     # Order confirmation
│   ├── product/           # Product detail pages
│   ├── products/          # Product listing
│   ├── register/          # User registration
│   ├── store-locator/     # Store finder
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Breadcrumb.tsx     # Navigation breadcrumbs
│   ├── EmailSignup.tsx    # Newsletter signup
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header
│   └── ProductCard.tsx    # Product display card
├── data/                  # Static data
│   ├── products.ts        # Product catalog
│   └── stores.ts          # Store locations
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
├── store/                 # State management
│   ├── authStore.ts       # Authentication state
│   └── cartStore.ts       # Shopping cart state
├── types/                 # TypeScript definitions
│   └── index.ts           # Type definitions
└── public/                # Static assets
```

## Key Features Implementation

### 🛒 Shopping Cart
- Persistent cart state using Zustand with localStorage
- Add/remove items with quantity controls
- Product type selection
- Real-time price calculations
- Promocode support

### 👤 User Authentication
- Registration with form validation
- Login with remember me functionality
- User state management
- Protected routes (can be extended)

### 📍 Store Locator
- Interactive map with location markers
- Store information display
- Opening hours and status
- Multiple store locations

### 💳 Checkout Process
- Multi-step checkout flow
- Form validation
- Order summary
- Payment integration ready

## Customization

### Adding Products
Edit `data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 99.99,
  description: 'Product description',
  image: '/images/product.jpg',
  category: 'Category',
  rating: 4.5,
  brand: 'Brand Name',
  inStock: true
}
```

### Styling
The project uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#000000',
      secondary: '#F5F5F5',
      accent: '#FFFFFF',
    }
  }
}
```

### Store Locations
Add new store locations in `data/stores.ts`:

```typescript
{
  id: 'store-id',
  name: 'Store Name',
  address: 'Store Address',
  city: 'City',
  country: 'Country',
  hours: 'Opening Hours',
  status: 'open' | 'closed',
  coordinates: { lat: 0, lng: 0 }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Code splitting with Next.js
- Efficient state management
- Responsive design for all screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
