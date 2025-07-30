import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    'San Francisco',
    'Oakland',
    'San Jose',
    'Palo Alto',
    'Mountain View',
    'Fremont',
    'Hayward',
    'Sunnyvale',
    'Santa Clara',
    'Redwood City',
    'Daly City',
    'San Mateo',
    'Union City',
    'Milpitas',
    'Cupertino',
    'Foster City',
    'Belmont',
    'Burlingame',
    'Menlo Park',
    'Los Altos',
    'Campbell',
    'Saratoga',
    'Los Gatos',
    'Pleasanton',
    'Dublin',
    'Livermore',
    'Castro Valley',
    'San Leandro',
    'Alameda',
    'Berkeley',
    'Albany',
    'Emeryville',
    'Piedmont',
    'Orinda',
    'Lafayette',
    'Walnut Creek',
    'Danville',
    'San Ramon',
    'Concord',
    'Pleasant Hill',
    'Martinez',
    'Antioch',
    'Brentwood',
    'Oakley',
    'Pittsburg',
    'Richmond',
    'El Cerrito',
    'Hercules',
    'Pinole',
    'San Pablo',
    'Vallejo',
    'Benicia',
    'Fairfield',
    'Vacaville',
    'Suisun City',
    'Novato',
    'San Rafael',
    'Petaluma',
    'Santa Rosa',
    'Rohnert Park',
    'Cotati',
    'Sebastopol',
    'Healdsburg',
    'Windsor',
    'Cloverdale',
    'Sonoma',
    'Napa',
    'St. Helena',
    'Calistoga',
    'Yountville',
    'American Canyon',
    'Half Moon Bay',
    'Pacifica',
    'Millbrae',
    'South San Francisco',
    'Brisbane',
    'Colma',
    'Broadmoor',
    'Hillsborough',
    'Atherton',
    'Portola Valley',
    'Woodside',
    'La Honda',
    'Pescadero',
    'San Carlos',
    'Belmont',
    'San Bruno',
    'Millbrae'
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Bay Area Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From San Francisco to San Jose, from the Peninsula to the East Bay, 
            we provide professional handyman services throughout the entire Bay Area.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Map Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center">
              <div className="mb-8">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Serving the Entire Bay Area
                </h3>
                <p className="text-gray-600">
                  Professional handyman services within a 50-mile radius
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">North Bay</div>
                  <div className="text-gray-600">Napa, Sonoma, Marin Counties</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">East Bay</div>
                  <div className="text-gray-600">Oakland, Berkeley, Fremont</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">Peninsula</div>
                  <div className="text-gray-600">Palo Alto, Mountain View</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">South Bay</div>
                  <div className="text-gray-600">San Jose, Santa Clara</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cities List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cities We Serve
            </h3>
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Don't see your city?</h4>
              <p className="text-gray-600 text-sm">
                We serve many more locations throughout the Bay Area. 
                Contact us to confirm service availability in your area.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            Call now for same-day service throughout the Bay Area
          </p>
          <a
            href="tel:555-FIX-IT-NOW"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>(555) FIX-IT-NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;