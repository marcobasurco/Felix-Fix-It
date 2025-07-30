import React from 'react';
import { ArrowLeft, Droplet, Shield, Clock, CheckCircle, Phone, Calendar, Star, AlertTriangle, Wrench, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlumbingServicesPage = () => {
  const services = [
    {
      title: 'Leak Detection & Repair',
      description: 'Professional leak detection and repair for pipes, faucets, and fixtures',
      price: 'Starting at $95',
      features: ['Pipe leak repair', 'Faucet leak fixes', 'Toilet leak repair', 'Water line repairs']
    },
    {
      title: 'Faucet Installation & Repair',
      description: 'Kitchen and bathroom faucet installation, repair, and replacement',
      price: 'Starting at $120',
      features: ['Kitchen faucet install', 'Bathroom faucet repair', 'Cartridge replacement', 'Valve repairs']
    },
    {
      title: 'Toilet Services',
      description: 'Complete toilet installation, repair, and maintenance services',
      price: 'Starting at $150',
      features: ['Toilet installation', 'Running toilet repair', 'Clog removal', 'Wax ring replacement']
    },
    {
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services',
      price: 'Starting at $85',
      features: ['Kitchen drain cleaning', 'Bathroom drain service', 'Main line cleaning', 'Preventive maintenance']
    },
    {
      title: 'Water Heater Services',
      description: 'Water heater installation, repair, and maintenance',
      price: 'Starting at $200',
      features: ['Water heater repair', 'Tank replacement', 'Tankless installation', 'Maintenance service']
    },
    {
      title: 'Garbage Disposal Services',
      description: 'Garbage disposal installation, repair, and replacement',
      price: 'Starting at $130',
      features: ['Disposal installation', 'Jam removal', 'Motor repair', 'Complete replacement']
    }
  ];

  const safetyFeatures = [
    'Licensed plumber with 10+ years experience',
    'All work meets current plumbing codes',
    'Quality fixtures and professional installation',
    'Water damage prevention protocols',
    '1-year warranty on all plumbing work',
    'Fully insured for your protection'
  ];

  const emergencyServices = [
    'Burst pipes and water line breaks',
    'Severe toilet and drain backups',
    'Water heater failures and leaks',
    'Sewer line emergencies',
    'Flooding from plumbing failures',
    'Gas line leak detection and repair'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Droplet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Plumbing Services</h1>
                <p className="text-sm text-gray-500">Expert Water & Drain Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Droplet className="h-4 w-4 mr-2" />
              Licensed Plumbing Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional Plumbing Services
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Fast & Reliable Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From leaky faucets to major pipe repairs, Felix provides comprehensive plumbing 
              services throughout the Bay Area. Licensed, experienced, and available for 
              emergency calls 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/schedule-visit"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </Link>
              
              <a
                href="tel:650-315-1390"
                className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>(650) 315-1390</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Licensed</div>
                  <div className="text-sm text-gray-600">& Insured</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Same Day</div>
                  <div className="text-sm text-gray-600">Service</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">1 Year</div>
                  <div className="text-sm text-gray-600">Warranty</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-6 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional plumber working on pipes"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600 mb-2">Emergency Service</div>
                  <div className="text-xs text-red-600 font-medium">Plumbing Emergencies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Plumbing Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete plumbing solutions for your home, from minor repairs to major installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-3 rounded-2xl">
                    <Droplet className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{service.price}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quality & Experience Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Quality & Experience</h2>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With over 10 years of plumbing experience, Felix understands that water problems 
                  can't wait. We provide fast, reliable service with quality materials and 
                  professional workmanship you can trust.
                </p>

                <div className="space-y-4">
                  {safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8486932/pexels-photo-8486932.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional plumbing tools and equipment"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Licensed & Insured
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-200" />
              <h2 className="text-3xl font-bold mb-4">24/7 Plumbing Emergency Service</h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Plumbing emergencies can cause serious damage. We provide immediate response 
                for urgent plumbing situations throughout the Bay Area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {emergencyServices.map((service, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-200 flex-shrink-0" />
                    <span className="text-white">{service}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="tel:650-315-1390"
                className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Emergency Line: (650) 315-1390</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12 text-center text-white">
          <Home className="h-12 w-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">
            Ready for Professional Plumbing Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let plumbing problems disrupt your day. Get fast, reliable plumbing services 
            from a licensed professional you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-visit"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Your Service</span>
            </Link>
            <a
              href="tel:650-315-1390"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlumbingServicesPage;