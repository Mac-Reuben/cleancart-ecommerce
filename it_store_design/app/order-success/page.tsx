'use client'

import Link from 'next/link'
import { Copy, ArrowLeft, Truck, Twitter, Facebook, Instagram } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'
import { generateOrderId } from '@/lib/utils'

export default function OrderSuccessPage() {
  const orderId = generateOrderId()

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId)
    // You could add a toast notification here
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Handshake Illustration */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <div className="relative">
                {/* Handshake Icon */}
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🎉</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thanks for your order!</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your order will be sent to your address via the selected delivery service after confirmation by the most branch. You can track your order by order ID.
          </p>

          {/* Order ID */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600 mb-2">Your order ID:</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl font-bold text-gray-900">#{orderId}</span>
              <button
                onClick={handleCopyOrderId}
                className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                title="Copy order ID"
              >
                <Copy size={16} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/products"
              className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to main page</span>
            </Link>
            
            <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
              <Truck size={16} />
              <span>Track your order</span>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </main>

      <EmailSignup />
      <Footer />
    </div>
  )
}
