export interface Photo {
  id: string;
  title: string;
  collection: 'street' | 'landscape' | 'life' | 'others';
  src: string;
  width: number;
  height: number;
  featured?: boolean;
  price?: number;
  description?: string;
  location?: string;
  year?: number;
  aperture?: string;
  shutterSpeed?: string;
  iso?: number;
  focalLength?: string;
  camera?: string;
}

// Using Unsplash for placeholder images — replace with your own
export const photos: Photo[] = [
  // Street
  {
    id: 's1', title: 'Shinjuku Rain', collection: 'street',
    src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80',
    width: 900, height: 1200, featured: true, price: 45,
    description: 'Late night neon reflections on wet asphalt.', location: 'Tokyo, Japan', year: 2023,
    aperture: 'ƒ/2.8', shutterSpeed: '1/60', iso: 1600, focalLength: '28mm', camera: 'Leica M6'
  },
  {
    id: 's2', title: 'Morning Commute', collection: 'street',
    src: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=900&q=80',
    width: 900, height: 600, featured: true, price: 38,
    description: 'Salarymen crossing in the early fog.', location: 'Tokyo, Japan', year: 2023,
    aperture: 'ƒ/4', shutterSpeed: '1/250', iso: 400, focalLength: '35mm', camera: 'Leica M6'
  },
  {
    id: 's3', title: 'Harajuku Walk', collection: 'street',
    src: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=900&q=80',
    width: 900, height: 1350, price: 42,
    description: 'Youth culture blooming between narrow lanes.', location: 'Tokyo, Japan', year: 2022,
    aperture: 'ƒ/2.8', shutterSpeed: '1/500', iso: 200, focalLength: '50mm', camera: 'Leica M6'
  },
  {
    id: 's4', title: 'Alley Vendors', collection: 'street',
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80',
    width: 900, height: 600, price: 35,
    description: 'Izakaya lanterns guiding the hungry home.', location: 'Osaka, Japan', year: 2022,
    aperture: 'ƒ/2', shutterSpeed: '1/125', iso: 800, focalLength: '35mm', camera: 'Leica M6'
  },
  // Landscape
  {
    id: 'l1', title: 'Fuji at Dusk', collection: 'landscape',
    src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=900&q=80',
    width: 900, height: 600, featured: true, price: 75,
    description: 'The sacred mountain wrapped in evening violet.', location: 'Yamanashi, Japan', year: 2023,
    aperture: 'ƒ/11', shutterSpeed: '1/30', iso: 100, focalLength: '70mm', camera: 'Hasselblad 500C/M'
  },
  {
    id: 'l2', title: 'Bamboo Dawn', collection: 'landscape',
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80',
    width: 900, height: 1350, price: 55,
    description: 'First light filtering through Arashiyama.', location: 'Kyoto, Japan', year: 2023,
    aperture: 'ƒ/4', shutterSpeed: '1/125', iso: 200, focalLength: '80mm', camera: 'Hasselblad 500C/M'
  },
  {
    id: 'l3', title: 'Sea of Clouds', collection: 'landscape',
    src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=900&q=80',
    width: 900, height: 600, price: 65,
    description: 'Above the clouds, silence has a texture.', location: 'Hakone, Japan', year: 2022,
    aperture: 'ƒ/8', shutterSpeed: '1/500', iso: 100, focalLength: '50mm', camera: 'Hasselblad 500C/M'
  },
  {
    id: 'l4', title: 'Rice Terraces', collection: 'landscape',
    src: 'https://images.unsplash.com/photo-1516655855035-d521ea5b5421?w=900&q=80',
    width: 900, height: 1200, price: 58,
    description: 'Centuries of patient cultivation.', location: 'Niigata, Japan', year: 2022,
    aperture: 'ƒ/8', shutterSpeed: '1/60', iso: 100, focalLength: '80mm', camera: 'Hasselblad 500C/M'
  },
  

  // Life
  {
    id: 'li1', title: 'Tea Ceremony', collection: 'life',
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80',
    width: 900, height: 600, featured: true, price: 50,
    description: 'The ritual of stillness, cup by cup.', location: 'Kyoto, Japan', year: 2023,
    aperture: 'ƒ/2.8', shutterSpeed: '1/60', iso: 400, focalLength: '50mm', camera: 'Fujifilm X-Pro3'
  },
  {
    id: 'li2', title: 'Ramen at Midnight', collection: 'life',
    src: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=900&q=80',
    width: 900, height: 1200, price: 42,
    description: 'Warmth against the winter city.', location: 'Sapporo, Japan', year: 2022,
    aperture: 'ƒ/2', shutterSpeed: '1/30', iso: 3200, focalLength: '23mm', camera: 'Fujifilm X-Pro3'
  },
  {
    id: 'li3', title: 'Festival Crowd', collection: 'life',
    src: 'https://images.unsplash.com/photo-1533050487297-09b450131914?w=900&q=80',
    width: 900, height: 600, price: 48,
    description: 'Tanabata wishes floating upward.', location: 'Sendai, Japan', year: 2023,
    aperture: 'ƒ/4', shutterSpeed: '1/250', iso: 800, focalLength: '35mm', camera: 'Fujifilm X-Pro3'
  },
  {
    id: 'li4', title: 'Shrine Visit', collection: 'life',
    src: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=900&q=80',
    width: 900, height: 1350, price: 55,
    description: 'New year, old prayers, timeless gate.', location: 'Nara, Japan', year: 2023,
    aperture: 'ƒ/5.6', shutterSpeed: '1/500', iso: 200, focalLength: '23mm', camera: 'Fujifilm X-Pro3'
  },
  // Others
  {
    id: 'o1', title: 'Neon Still Life', collection: 'others',
    src: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=900&q=80',
    width: 900, height: 1200, price: 40,
    description: 'Objects that absorb the glow of the city.', location: 'Tokyo, Japan', year: 2023,
    aperture: 'ƒ/2.8', shutterSpeed: '1/15', iso: 6400, focalLength: '50mm', camera: 'Sony A7III'
  },
  {
    id: 'o2', title: 'Origami Series', collection: 'others',
    src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80',
    width: 900, height: 600, price: 35,
    description: 'Paper folds, geometry, intention.', location: 'Studio', year: 2023,
    aperture: 'ƒ/5.6', shutterSpeed: '1/125', iso: 100, focalLength: '90mm', camera: 'Sony A7III'
  },
  {
    id: 'o3', title: 'Koi Abstract', collection: 'others',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80',
    width: 900, height: 900, price: 48,
    description: 'Movement beneath the water surface.', location: 'Kanazawa, Japan', year: 2022,
    aperture: 'ƒ/4', shutterSpeed: '1/1000', iso: 400, focalLength: '70mm', camera: 'Sony A7III'
  },
];

export const featuredPhotos = photos.filter(p => p.featured);

export const collections = [
  { id: 'street', label: 'Street' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'life', label: 'Life' },
  { id: 'others', label: 'Others' },
] as const;
