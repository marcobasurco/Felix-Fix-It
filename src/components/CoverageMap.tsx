import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle } from 'lucide-react';

const CoverageMap = () => {
  const regions = [
    {
      name: 'San Francisco',
      cities: ['San Francisco', 'Daly City', 'South San Francisco', 'Brisbane', 'Colma'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Peninsula',
      cities: ['Palo Alto', 'Mountain View', 'Redwood City', 'San Mateo', 'Menlo Park'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'East Bay',
      cities: ['Oakland', 'Berkeley', 'Fremont', 'Hayward', 'San Leandro'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'South Bay',
      cities: ['San Jose', 'Santa Clara', 'Sunnyvale', 'Cupertino', 'Campbell'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'North Bay',
      cities: ['San Rafael', 'Novato', 'Petaluma', 'Santa Rosa', 'Napa'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const allCities = [
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

  return (
    <section id="coverage" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            Service Coverage
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving the Entire Bay Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From San Francisco to San Jose, from the Peninsula to the East Bay – 
            professional handyman services wherever you are.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left - Regional Coverage */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Regional Coverage Map
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regions.map((region, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`bg-gradient-to-r ${region.color} rounded-xl p-4 mb-4`}>
                      <h4 className="text-white font-bold text-lg text-center">{region.name}</h4>
                    </div>
                    <ul className="space-y-2">
                      {region.cities.map((city, cityIndex) => (
                        <li key={cityIndex} className="flex items-center text-sm text-gray-700">
                          <Navigation className="h-3 w-3 text-gray-400 mr-2" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Service Promise */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-orange-600 mr-3" />
                  <h4 className="text-xl font-bold text-gray-900">Service Promise</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">Same Day</div>
                    <div className="text-sm text-gray-600">Emergency Service</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50 Mile</div>
                    <div className="text-sm text-gray-600">Service Radius</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Cities List */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cities We Serve
              </h3>
              <div className="max-h-96 overflow-y-auto pr-2">
                <div className="grid grid-cols-1 gap-2">
                  {allCities.map((city, index) => (
                    <div key={index} className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Don't see your city?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  We serve many more locations throughout the Bay Area. Contact us to confirm availability.
                </p>
                <button className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors">
                  Check Your Area →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Schedule Service?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Call now for same-day service throughout the Bay Area. 
            Emergency repairs available 24/7.
          </p>
          <a
            href="tel:650-315-1390"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>(650) 315-1390</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;