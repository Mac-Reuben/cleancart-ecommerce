import { StoreLocation } from '@/types'

export const storeLocations: StoreLocation[] = [
  {
    id: '1',
    name: 'Store_Region_Country_City Store',
    address: 'East Legon - Accra Ghana',
    city: 'Accra',
    country: 'Ghana',
    hours: 'Monday - Sunday: 10:00-21:00',
    status: 'open',
    coordinates: {
      lat: 5.5600,
      lng: -0.2057
    }
  },
  {
    id: '2',
    name: 'Store_Region_Country_City Customer',
    address: 'Osu - Accra Ghana',
    city: 'Accra',
    country: 'Ghana',
    hours: 'Monday - Sunday: 10:00-21:00',
    status: 'open',
    coordinates: {
      lat: 5.5557,
      lng: -0.1964
    }
  },
  {
    id: '3',
    name: 'Tashkent Central Store',
    address: 'Chilanzar District - Tashkent Uzbekistan',
    city: 'Tashkent',
    country: 'Uzbekistan',
    hours: 'Monday - Sunday: 09:00-22:00',
    status: 'open',
    coordinates: {
      lat: 41.2995,
      lng: 69.2401
    }
  },
  {
    id: '4',
    name: 'Tashkent Mall Store',
    address: 'Yunusabad District - Tashkent Uzbekistan',
    city: 'Tashkent',
    country: 'Uzbekistan',
    hours: 'Monday - Sunday: 10:00-21:00',
    status: 'open',
    coordinates: {
      lat: 41.3111,
      lng: 69.2797
    }
  }
]
