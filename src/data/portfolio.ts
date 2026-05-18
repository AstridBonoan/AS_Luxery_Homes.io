export interface PortfolioProject {
  id: string
  title: string
  location: string
  sqft: string
  year: string
  image: string
  description: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'azure-ridge',
    title: 'Azure Ridge Estate',
    location: 'Aspen, Colorado',
    sqft: '12,400',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80&auto=format&fit=crop',
    description:
      'A sculptural mountain retreat with floor-to-ceiling glass, natural stone, and cantilevered terraces overlooking alpine wilderness.',
  },
  {
    id: 'palm-cove',
    title: 'Palm Cove Residence',
    location: 'Malibu, California',
    sqft: '9,800',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop',
    description:
      'Oceanfront contemporary architecture blending indoor-outdoor living with infinity pools and private beach access.',
  },
  {
    id: 'willow-creek',
    title: 'Willow Creek Manor',
    location: 'Greenwich, Connecticut',
    sqft: '15,200',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
    description:
      'Timeless New England elegance with hand-laid limestone, bespoke millwork, and a private wine cellar.',
  },
  {
    id: 'desert-horizon',
    title: 'Desert Horizon Villa',
    location: 'Scottsdale, Arizona',
    sqft: '8,600',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop',
    description:
      'Desert modernism with rammed earth walls, reflecting pools, and panoramic Sonoran Desert views.',
  },
  {
    id: 'lakehouse',
    title: 'Lakehouse Pavilion',
    location: 'Lake Tahoe, Nevada',
    sqft: '11,000',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format&fit=crop',
    description:
      'A lakeside sanctuary featuring timber framing, heated stone floors, and a private dock.',
  },
  {
    id: 'urban-penthouse',
    title: 'Urban Skyline Penthouse',
    location: 'Manhattan, New York',
    sqft: '6,400',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&auto=format&fit=crop',
    description:
      'Vertical luxury redefined — rooftop gardens, private elevator, and 360° city panoramas.',
  },
]
