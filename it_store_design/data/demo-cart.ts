import { CartItem } from '@/types'
import { products } from './products'

// Demo cart items that match the specifications
export const demoCartItems: CartItem[] = [
  {
    id: 'cart-1',
    product: products.find(p => p.name === 'Earbuds')!,
    quantity: 1,
    selectedType: 'Standard'
  },
  {
    id: 'cart-2',
    product: products.find(p => p.name === 'Mouse')!,
    quantity: 1,
    selectedType: 'Premium'
  },
  {
    id: 'cart-3',
    product: products.find(p => p.name === 'Projector')!,
    quantity: 1,
    selectedType: 'Pro'
  },
  {
    id: 'cart-4',
    product: products.find(p => p.name === 'HDMI Cable')!,
    quantity: 1,
    selectedType: 'Standard'
  }
]

// Calculate demo totals
export const demoSubtotal = demoCartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
export const demoDiscount = demoSubtotal * 0.30 // 30% discount
export const demoShipping = 0
export const demoTax = 5.00
export const demoTotal = demoSubtotal - demoDiscount + demoShipping + demoTax
