import React from 'react';
import { 
  Wrench, 
  Zap, 
  Droplet, 
  Palette, 
  Hammer, 
  Home, 
  Settings, 
  Shield,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Electrical Repairs',
      description: 'Outlet installation, light fixtures, ceiling fans, and electrical troubleshooting.',
      features: ['Outlet & Switch Installation', 'Light Fixture Mounting', 'Ceiling Fan Installation', 'Electrical Troubleshooting']
    },
    {
      icon: Droplet,
      title: 'Plumbing Services',
      description: 'Faucet repairs, toilet installation, leak fixes, and drain cleaning.',
      features: ['Faucet Installation & Repair', 'Toilet Repair & Installation', 'Leak Detection & Repair', 'Drain Cleaning']
    },
    {
      icon: Palette,
      title: 'Painting & Drywall',
      description: 'Interior painting, drywall repair, wall texturing, and color consultation.',
      features: ['Interior & Exterior Painting', 'Drywall Repair & Installation', 'Wall Texturing', 'Color Consultation']
    },
    {
      icon: Hammer,
      title: 'Carpentry Services',
      description: 'Custom shelving, cabinet installation, trim work, and furniture assembly.',
      features: ['Custom Shelving & Storage', 'Cabinet Installation', 'Trim & Molding', 'Furniture Assembly']
    },
    {
      icon: Home,
      title: 'Home Maintenance',
      description: 'Seasonal maintenance, safety inspections, and preventive care.',
      features: ['Seasonal Maintenance', 'Safety Inspections', 'Weatherization', 'Preventive Care']
    },
    {
      icon: Settings,
      title: 'Appliance Installation',
      description: 'Dishwasher, garbage disposal, TV mounting, and smart home setup.',
      features: ['Dishwasher Installation', 'Garbage Disposal', 'TV Wall Mounting', 'Smart Home Setup']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Handyman Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From minor repairs to major installations, we handle it all with professional expertise 
            and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                Learn More
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">All Work Guaranteed</h3>
          </div>
          <p className="text-blue-100 text-lg mb-6">
            We stand behind our work with a comprehensive warranty on all services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="font-bold text-lg">1 Year Warranty</div>
              <div className="text-sm text-blue-100">On all installations</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="font-bold text-lg">Licensed & Insured</div>
              <div className="text-sm text-blue-100">Fully covered for your peace of mind</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="font-bold text-lg">Satisfaction Guarantee</div>
              <div className="text-sm text-blue-100">100% satisfaction or we make it right</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;