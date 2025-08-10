export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  rating: number
  brand?: string
  inStock: boolean
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
  selectedType?: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  country?: string
  city?: string
  address?: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  discount: number
  shipping: number
  tax: number
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
  createdAt: Date
}

export interface StoreLocation {
  id: string
  name: string
  address: string
  city: string
  country: string
  hours: string
  status: 'open' | 'closed'
  coordinates: {
    lat: number
    lng: number
  }
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  password?: string
  gender?: 'female' | 'male'
  country?: string
  city?: string
  phone?: string
  address?: string
  agreeToTerms?: boolean
  rememberMe?: boolean
  billingSameAsDelivery?: boolean
  ageConfirmed?: boolean
}
