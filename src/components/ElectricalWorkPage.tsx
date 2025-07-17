import React from 'react';
import { ArrowLeft, Zap, Shield, Clock, CheckCircle, Phone, Calendar, Star, AlertTriangle, Wrench, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElectricalWorkPage = () => {
  const services = [
    {
      title: 'Outlet Installation & Repair',
      description: 'New outlet installation, GFCI upgrades, and outlet repairs',
      price: 'Starting at $85',
      features: ['GFCI outlet installation', 'USB outlet upgrades', 'Outlet relocation', 'Troubleshooting dead outlets']
    },
    {
      title: 'Light Fixture Installation',
      description: 'Ceiling lights, chandeliers, pendant lights, and recessed lighting',
      price: 'Starting at $120',
      features: ['Chandelier installation', 'Recessed lighting', 'Pendant lights', 'Under-cabinet lighting']
    },
    {
      title: 'Ceiling Fan Installation',
      description: 'Professional ceiling fan installation with proper mounting',
      price: 'Starting at $150',
      features: ['Fan mounting & wiring', 'Remote control setup', 'Fan balancing', 'Old fan removal']
    },
    {
      title: 'Switch Installation & Repair',
      description: 'Light switches, dimmer switches, and smart switch installation',
      price: 'Starting at $75',
      features: ['Dimmer switch installation', 'Smart switch setup', 'Three-way switches', 'Switch troubleshooting']
    },
    {
      title: 'Circuit Breaker Services',
      description: 'Circuit breaker replacement and electrical panel upgrades',
      price: 'Starting at $200',
      features: ['Breaker replacement', 'Panel upgrades', 'Circuit additions', 'Safety inspections']
    },
    {
      title: 'Electrical Troubleshooting',
      description: 'Diagnose and fix electrical problems throughout your home',
      price: 'Starting at $95',
      features: ['Power outage diagnosis', 'Flickering lights repair', 'Electrical safety checks', 'Code compliance']
    }
  ];

  const safetyFeatures = [
    'Licensed electrician with 10+ years experience',
    'All work meets current electrical codes',
    'Comprehensive safety inspections included',
    'Quality materials and professional installation',
    '1-year warranty on all electrical work',
    'Fully insured for your protection'
  ];

  const emergencyServices = [
    'Power outages and electrical failures',
    'Sparking outlets or switches',
    'Burning smell from electrical components',
    'Frequent circuit breaker trips',
    'Electrical shock hazards',
    'Storm damage electrical repairs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
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
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Electrical Work Services</h1>
                <p className="text-sm text-gray-500">Professional & Safe Electrical Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Licensed Electrical Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional Electrical Work
              <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Safe & Reliable Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From simple outlet installations to complex electrical repairs, Felix provides 
              safe, code-compliant electrical work throughout the Bay Area. Licensed, insured, 
              and committed to your safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/schedule-visit"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </Link>
              
              <a
                href="tel:650-315-1390"
                className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
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
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional electrician working on electrical panel"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600 mb-2">Emergency Service</div>
                  <div className="text-xs text-red-600 font-medium">Electrical Emergencies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Electrical Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions for your home, from basic repairs to complex installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-600">{service.price}</div>
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

        {/* Safety & Quality Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Safety First Approach</h2>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Electrical work requires expertise and attention to safety. Felix brings over 10 years 
                  of experience and maintains all necessary licenses and certifications to ensure your 
                  electrical work is done safely and to code.
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
                  src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional electrical tools and safety equipment"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
              <h2 className="text-3xl font-bold mb-4">24/7 Electrical Emergency Service</h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Electrical emergencies can't wait. We provide immediate response for dangerous 
                electrical situations throughout the Bay Area.
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

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Electrical Work Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final testing, we follow a systematic approach 
              to ensure safe and reliable electrical work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Safety Assessment',
                description: 'Comprehensive evaluation of your electrical system and safety requirements',
                icon: Shield
              },
              {
                step: '02',
                title: 'Professional Planning',
                description: 'Detailed planning with code compliance and optimal solutions',
                icon: Wrench
              },
              {
                step: '03',
                title: 'Expert Installation',
                description: 'Professional installation using quality materials and proper techniques',
                icon: Zap
              },
              {
                step: '04',
                title: 'Testing & Warranty',
                description: 'Thorough testing and 1-year warranty on all electrical work',
                icon: CheckCircle
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-12 text-center text-white">
          <Home className="h-12 w-12 mx-auto mb-6 text-yellow-200" />
          <h2 className="text-3xl font-bold mb-4">
            Ready for Professional Electrical Work?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Don't risk DIY electrical work. Get safe, professional electrical services 
            from a licensed electrician you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-visit"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Your Service</span>
            </Link>
            <a
              href="tel:650-315-1390"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center justify-center space-x-2"
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

export default ElectricalWorkPage;