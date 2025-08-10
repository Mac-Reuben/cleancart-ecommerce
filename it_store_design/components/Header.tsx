'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingBag, Menu, ChevronDown, Globe, DollarSign } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useAuthStore } from '@/store/authStore'

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const { getItemCount } = useCartStore()
  const { isAuthenticated, user } = useAuthStore()
  
  const cartItemCount = getItemCount()

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold">Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
              >
                <Globe size={16} />
                <span>English</span>
                <ChevronDown size={14} />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 min-w-[120px] z-50">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    English
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Spanish
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    French
                  </button>
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
              >
                <DollarSign size={16} />
                <span>USD</span>
                <ChevronDown size={14} />
              </button>
              {isCurrencyOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 min-w-[120px] z-50">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    USD
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    EUR
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    GBP
                  </button>
                </div>
              )}
            </div>

            {/* Join the Club Link */}
            <Link href="/register" className="hover:text-gray-300 transition-colors">
              Join the Club
            </Link>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link href="/wishlist" className="relative hover:text-gray-300 transition-colors">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Shopping Cart */}
            <Link href="/cart" className="relative hover:text-gray-300 transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:text-gray-300 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Globe size={16} />
                <span>English</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign size={16} />
                <span>USD</span>
              </div>
              <Link href="/register" className="hover:text-gray-300 transition-colors">
                Join the Club
              </Link>
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2">
                  <span>Welcome, {user?.firstName}</span>
                  <button className="text-left hover:text-gray-300 transition-colors">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link href="/login" className="hover:text-gray-300 transition-colors">
                    Login
                  </Link>
                  <Link href="/register" className="hover:text-gray-300 transition-colors">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
