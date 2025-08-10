'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [currency, setCurrency] = useState('USD')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email signup logic
    console.log('Email signup:', email, currency)
  }

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-2">
              {/* Uzbekistan Flag */}
              <div className="flex-shrink-0">
                <div className="w-8 h-6 bg-green-500 relative">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-1 left-1 w-1 h-1 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Email Input */}
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              {/* Currency Selector */}
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
