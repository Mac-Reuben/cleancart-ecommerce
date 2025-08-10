'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Heart, ChevronRight } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { getProductById, getRelatedProducts } from '@/data/products'
import { formatPrice } from '@/lib/utils'

interface ProductDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { addItem } = useCartStore()
  const [selectedType, setSelectedType] = useState('')
  
  // For demo purposes, we'll use the Samsung Galaxy S23 product
  const product = {
    id: '2',
    name: 'Samsung Galaxy S23',
    price: 100.00,
    description: 'Inspired by a 2019 classic, this Samsung brings back the original design in all its glory. Crafted with a sleek glass-and-metal build and completely uniform aesthetic, it delivers a clean, consistent design that feels awesome.',
    image: '/images/samsung-s23.jpg',
    category: 'Phones',
    rating: 4.8,
    brand: 'Samsung',
    inStock: true
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)

  const handleAddToCart = () => {
    addItem(product, 1, selectedType)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-lg">{product.name}</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{product.rating}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  {formatPrice(product.price)}
                </div>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  View product details
                </Link>
              </div>

              {/* Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <div className="flex space-x-4">
                  {['Standard', 'Premium', 'Pro'].map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedType === type
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} showWishlist={false} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
