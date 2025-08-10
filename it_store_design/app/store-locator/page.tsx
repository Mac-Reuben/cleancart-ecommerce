'use client'

import { useState } from 'react'
import { MapPin, Clock, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { storeLocations } from '@/data/stores'

export default function StoreLocatorPage() {
  const [selectedStore, setSelectedStore] = useState(storeLocations[0])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Store Locator</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Store Information */}
          <div className="space-y-6">
            {storeLocations.map((store) => (
              <div
                key={store.id}
                className={`p-6 border rounded-lg cursor-pointer transition-colors ${
                  selectedStore.id === store.id
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedStore(store)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                  <div className="flex items-center space-x-2">
                    {store.status === 'open' ? (
                      <CheckCircle size={16} className="text-green-500" />
                    ) : (
                      <Clock size={16} className="text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      store.status === 'open' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {store.status === 'open' ? 'Open' : 'Closed'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{store.address}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{store.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-96 relative">
              {/* Map Container */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 relative">
                {/* Map Background with Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>

                {/* Location Markers */}
                {storeLocations.map((store, index) => (
                  <div
                    key={store.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                      selectedStore.id === store.id ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      left: `${20 + (index * 20)}%`,
                      top: `${30 + (index * 15)}%`
                    }}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedStore.id === store.id
                        ? 'bg-red-500 border-white shadow-lg'
                        : 'bg-white border-gray-400'
                    }`}>
                      <MapPin size={12} className={selectedStore.id === store.id ? 'text-white' : 'text-gray-600'} />
                    </div>
                    
                    {/* Store Label */}
                    <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs font-medium ${
                      selectedStore.id === store.id
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border border-gray-300'
                    }`}>
                      {store.name.split(' ')[0]}
                    </div>
                  </div>
                ))}

                {/* Map Labels */}
                <div className="absolute top-4 left-4 text-xs text-gray-600">
                  <div className="bg-white px-2 py-1 rounded shadow-sm mb-1">Tashkent</div>
                  <div className="bg-white px-2 py-1 rounded shadow-sm">Chilanzar District</div>
                </div>

                <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                  <div className="bg-white px-2 py-1 rounded shadow-sm mb-1">Yunusabad District</div>
                  <div className="bg-white px-2 py-1 rounded shadow-sm">Central Tashkent</div>
                </div>

                {/* Street Names */}
                <div className="absolute top-1/2 left-8 text-xs text-gray-500 transform -rotate-90">
                  Navoi Street
                </div>
                <div className="absolute top-1/3 right-8 text-xs text-gray-500">
                  Amir Temur Avenue
                </div>
                <div className="absolute bottom-1/3 left-1/4 text-xs text-gray-500">
                  Chilanzar Street
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  +
                </button>
                <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  −
                </button>
              </div>
            </div>

            {/* Map Legend */}
            <div className="p-4 bg-white border-t">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Selected Store</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span>Other Stores</span>
                  </div>
                </div>
                <span>Interactive Map</span>
              </div>
            </div>
          </div>
        </div>

        {/* Store Details */}
        {selectedStore && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Store Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">{selectedStore.address}</p>
                <p className="text-gray-600">{selectedStore.city}, {selectedStore.country}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">{selectedStore.hours}</p>
                <p className={`text-sm font-medium ${
                  selectedStore.status === 'open' ? 'text-green-600' : 'text-red-600'
                }`}>
                  Currently: {selectedStore.status === 'open' ? 'Open' : 'Closed'}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
