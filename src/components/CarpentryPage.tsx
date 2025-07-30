import React from 'react';
import { ArrowLeft, Hammer, Shield, Clock, CheckCircle, Phone, Calendar, Star, Wrench, Home, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarpentryPage = () => {
  const services = [
    {
      title: 'Custom Shelving & Storage',
      description: 'Built-in shelves, closet organizers, and custom storage solutions',
      price: 'Starting at $200',
      features: ['Built-in shelving', 'Closet organizers', 'Floating shelves', 'Storage cabinets']
    },
    {
      title: 'Cabinet Installation',
      description: 'Kitchen and bathroom cabinet installation and hardware upgrades',
      price: 'Starting at $150',
      features: ['Cabinet mounting', 'Hardware installation', 'Door adjustments', 'Drawer repairs']
    },
    {
      title: 'Trim & Molding',
      description: 'Baseboards, crown molding, and decorative trim installation',
      price: 'Starting at $8/linear ft',
      features: ['Baseboard installation', 'Crown molding', 'Window trim', 'Door casings']
    },
    {
      title: 'Furniture Assembly',
      description: 'Professional assembly of furniture and home fixtures',
      price: 'Starting at $75',
      features: ['IKEA furniture', 'Office furniture', 'Bedroom sets', 'Entertainment centers']
    },
    {
      title: 'Door Installation & Repair',
      description: 'Interior and exterior door installation, repair, and hardware',
      price: 'Starting at $180',
      features: ['Door hanging', 'Hardware installation', 'Door repairs', 'Weatherstripping']
    },
    {
      title: 'Custom Woodwork',
      description: 'Bespoke carpentry projects and custom wood installations',
      price: 'Starting at $300',
      features: ['Custom built-ins', 'Wood mantels', 'Stair railings', 'Specialty projects']
    }
  ];

  const qualityFeatures = [
    'Skilled carpenter with 10+ years experience',
    'Premium lumber and materials',
    'Precision measurements and cuts',
    'Professional-grade tools and equipment',
    '1-year warranty on all carpentry work',
    'Fully insured for your protection'
  ];

  const carpentryProcess = [
    {
      step: '01',
      title: 'Design Consultation',
      description: 'Discuss your vision and take precise measurements',
      icon: Ruler
    },
    {
      step: '02',
      title: 'Material Selection',
      description: 'Choose quality materials that match your style and budget',
      icon: Hammer
    },
    {
      step: '03',
      title: 'Expert Craftsmanship',
      description: 'Precise cutting, fitting, and installation by skilled hands',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Quality Finish',
      description: 'Final sanding, staining, and finishing for perfect results',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
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
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Carpentry Services</h1>
                <p className="text-sm text-gray-500">Custom Woodwork & Installation</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Hammer className="h-4 w-4 mr-2" />
              Professional Carpentry Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert Carpentry Services
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Custom Woodwork Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From custom shelving to furniture assembly, Felix brings skilled craftsmanship 
              to every carpentry project. Quality materials, precision work, and attention 
              to detail in every piece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/schedule-visit"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </Link>
              
              <a
                href="tel:650-315-1390"
                className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
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
              <div className="bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl p-6 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional carpenter working on custom shelving"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Custom</div>
                  <div className="text-sm text-gray-600 mb-2">Built-to-Fit</div>
                  <div className="text-xs text-amber-600 font-medium">Every Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Carpentry Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom woodwork and carpentry solutions for every room in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-600 p-3 rounded-2xl">
                    <Hammer className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-amber-600">{service.price}</div>
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

        {/* Craftsmanship Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Wrench className="h-8 w-8 text-amber-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Skilled Craftsmanship</h2>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With over 10 years of carpentry experience, Felix combines traditional 
                  woodworking skills with modern techniques. Every project is built to last 
                  with attention to detail and quality materials.
                </p>

                <div className="space-y-4">
                  {qualityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5691648/pexels-photo-5691648.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional carpentry tools and wood materials"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Quality Materials
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Carpentry Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we follow a proven process 
              to deliver exceptional custom woodwork.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {carpentryProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-amber-400 to-orange-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Projects CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-white">
            <div className="text-center">
              <Ruler className="h-12 w-12 mx-auto mb-6 text-amber-200" />
              <h2 className="text-3xl font-bold mb-4">
                Custom Projects Welcome
              </h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                Have a unique carpentry project in mind? We love custom challenges and 
                can bring your vision to life with skilled craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/schedule-visit"
                  className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Discuss Your Project</span>
                </Link>
                <a
                  href="tel:650-315-1390"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-center text-white">
          <Home className="h-12 w-12 mx-auto mb-6 text-amber-200" />
          <h2 className="text-3xl font-bold mb-4">
            Ready for Custom Carpentry?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Transform your space with custom woodwork that's built to last. 
            Quality craftsmanship, guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-visit"
              className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Your Service</span>
            </Link>
            <a
              href="tel:650-315-1390"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center space-x-2"
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

export default CarpentryPage;