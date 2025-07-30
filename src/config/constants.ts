// Business contact information
export const BUSINESS_INFO = {
  name: 'Felix Fix-It',
  tagline: "Bay Area's #1 Handyman",
  phone: '(650) 315-1390',
  email: 'felix@felixfixit.com',
  address: 'San Francisco Bay Area',
  serviceRadius: '50-mile radius',
  
  // Business hours
  hours: {
    weekdays: 'Monday - Friday: 7:00 AM - 7:00 PM',
    saturday: 'Saturday: 8:00 AM - 5:00 PM',
    sunday: 'Sunday: Emergency Only',
    emergency: '24/7 Emergency Service'
  },
  
  // Admin credentials (should be moved to environment variables in production)
  admin: {
    username: 'felix',
    password: 'fixit2024!'
  }
};

// Service areas
export const SERVICE_AREAS = [
  'San Francisco', 'Oakland', 'San Jose', 'Palo Alto', 'Mountain View', 'Fremont',
  'Hayward', 'Sunnyvale', 'Santa Clara', 'Redwood City', 'Daly City', 'San Mateo',
  'Union City', 'Milpitas', 'Cupertino', 'Foster City', 'Belmont', 'Burlingame',
  'Menlo Park', 'Los Altos', 'Campbell', 'Saratoga', 'Los Gatos', 'Pleasanton',
  'Dublin', 'Livermore', 'Castro Valley', 'San Leandro', 'Alameda', 'Berkeley',
  'Albany', 'Emeryville', 'Piedmont', 'Orinda', 'Lafayette', 'Walnut Creek',
  'Danville', 'San Ramon', 'Concord', 'Pleasant Hill', 'Martinez', 'Richmond',
  'El Cerrito', 'Hercules', 'Pinole', 'San Pablo', 'Vallejo', 'Benicia',
  'Fairfield', 'Vacaville', 'Novato', 'San Rafael', 'Petaluma', 'Santa Rosa',
  'Rohnert Park', 'Cotati', 'Sebastopol', 'Healdsburg', 'Windsor', 'Sonoma',
  'Napa', 'St. Helena', 'Calistoga', 'Yountville', 'American Canyon'
];

// Services offered
export const SERVICES = [
  { id: 'electrical', name: 'Electrical Work', path: '/electrical-work' },
  { id: 'plumbing', name: 'Plumbing Services', path: '/plumbing-services' },
  { id: 'painting', name: 'Painting & Drywall', path: '/painting-drywall' },
  { id: 'carpentry', name: 'Carpentry', path: '/carpentry' },
  { id: 'maintenance', name: 'Home Maintenance', path: '/home-maintenance' },
  { id: 'appliance', name: 'Appliance Installation', path: '/appliance-installation' }
];