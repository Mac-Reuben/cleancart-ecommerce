'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Trash2, Heart, Minus, Plus } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { formatPrice } from '@/lib/utils'

export default function CartPage() {
  const { items, removeItem, updateQuantity, updateType } = useCartStore()
  const [promocode, setPromocode] = useState('')

  // Calculate totals
  const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  const discount = subtotal * 0.30 // 30% discount
  const shipping = 0
  const tax = 5.00
  const total = subtotal - discount + shipping + tax

  const handleApplyPromocode = () => {
    // Handle promocode logic
    console.log('Applying promocode:', promocode)
  }

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb items={[
            { label: 'Category', href: '/products' },
            { label: 'Sub Category', href: '/products' },
            { label: 'Cart' }
          ]} />

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Selected Products */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Selected products</h2>
              
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-gray-500 text-xs">{item.product.name}</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.product.description}</p>
                      <div className="text-lg font-bold text-gray-900">
                        {formatPrice(item.product.price)}
                      </div>
                    </div>

                    {/* Type Selection */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm font-medium text-gray-700">Type</label>
                      <select
                        value={item.selectedType || ''}
                        onChange={(e) => updateType(item.id, e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select Type</option>
                        <option value="Standard">Standard</option>
                        <option value="Premium">Premium</option>
                        <option value="Pro">Pro</option>
                      </select>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Heart size={16} className="text-gray-600" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <Trash2 size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}

                {items.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                    <Link
                      href="/products"
                      className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Order Review */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Review</h2>
                
                {/* Promocode */}
                <div className="mb-6">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promocode}
                      onChange={(e) => setPromocode(e.target.value)}
                      placeholder="Enter promocode"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                    <button
                      onClick={handleApplyPromocode}
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount (30%)</span>
                    <span className="font-medium text-green-600">-{formatPrice(discount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">+{formatPrice(tax)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-lg font-bold">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium text-center block"
                >
                  Go to Checkout
                </Link>

                {/* Continue Shopping */}
                <div className="text-center mt-4">
                  <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
