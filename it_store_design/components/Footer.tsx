import Link from 'next/link'
import { Facebook, Twitter, Instagram, Apple, Play } from 'lucide-react'

export default function Footer() {
  const collections = [
    'Collection Title',
    'Collection Title',
    'Collection Title',
    'Collection Title',
    'Collection Title',
    'Collection Title'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Collections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {collections.map((title, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">First Link</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Second Link</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Third Link</Link></li>
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Payment Methods:</span>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-600">VISA</div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-600">AMEX</div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-600">PAYPAL</div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-red-600">MC</div>
              </div>
            </div>

            {/* App Store Badges */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Apple size={20} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link href="#" className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Play size={20} />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            © 2017 Oscar Agency - Award winning design agency specializing in design and development
          </div>
        </div>
      </div>
    </footer>
  )
}
