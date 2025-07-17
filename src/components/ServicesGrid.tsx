import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Droplet, 
  Paintbrush, 
  Hammer, 
  Home, 
  Settings,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Zap,
      title: 'Electrical Work',
      description: 'Safe and reliable electrical repairs and installations',
      features: ['Outlet Installation', 'Light Fixtures', 'Ceiling Fans', 'Circuit Repairs'],
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Droplet,
      title: 'Plumbing Services',
      description: 'Expert plumbing solutions for all your water needs',
      features: ['Leak Repairs', 'Faucet Installation', 'Toilet Repairs', 'Drain Cleaning'],
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Paintbrush,
      title: 'Painting & Drywall',
      description: 'Transform your space with professional painting',
      features: ['Interior Painting', 'Drywall Repair', 'Wall Texturing', 'Color Matching'],
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Hammer,
      title: 'Carpentry',
      description: 'Custom woodwork and carpentry solutions',
      features: ['Custom Shelving', 'Cabinet Install', 'Trim Work', 'Furniture Assembly'],
      color: 'from-amber-400 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: Home,
      title: 'Home Maintenance',
      description: 'Keep your home in perfect condition year-round',
      features: ['Seasonal Checks', 'Preventive Care', 'Safety Inspections', 'Weatherization'],
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Settings,
      title: 'Appliance Installation',
      description: 'Professional appliance setup and installation',
      features: ['Dishwasher Setup', 'TV Mounting', 'Smart Home', 'Garbage Disposal'],
      color: 'from-gray-400 to-slate-600',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="h-4 w-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Home Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From minor repairs to major installations, we handle every project with 
            professional expertise and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className={`h-4 w-4 ${service.iconColor} mr-3 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {service.title === 'Electrical Work' ? (
                  <Link 
                    to="/electrical-work"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                ) : (
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need Something Else?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't see your specific need? We handle a wide variety of home repairs and improvements. 
            Contact us to discuss your project.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;