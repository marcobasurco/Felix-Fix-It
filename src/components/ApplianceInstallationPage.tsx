import React from 'react';
import { ArrowLeft, Settings, Shield, Clock, CheckCircle, Phone, Calendar, Star, Wrench, Home, Tv, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplianceInstallationPage = () => {
  const services = [
    {
      title: 'Dishwasher Installation',
      description: 'Professional dishwasher installation with plumbing and electrical connections',
      price: 'Starting at $180',
      features: ['Plumbing connections', 'Electrical hookup', 'Mounting and leveling', 'Testing and warranty']
    },
    {
      title: 'TV Wall Mounting',
      description: 'Secure TV mounting with cable management and optimal viewing angles',
      price: 'Starting at $120',
      features: ['Wall stud mounting', 'Cable management', 'Tilt/swivel setup', 'Safety testing']
    },
    {
      title: 'Garbage Disposal Installation',
      description: 'Complete garbage disposal installation and electrical connections',
      price: 'Starting at $150',
      features: ['Disposal mounting', 'Electrical wiring', 'Plumbing connections', 'Testing and cleanup']
    },
    {
      title: 'Smart Home Setup',
      description: 'Smart device installation and home automation system setup',
      price: 'Starting at $100',
      features: ['Smart switches', 'Thermostat installation', 'Security systems', 'Network setup']
    },
    {
      title: 'Washer & Dryer Installation',
      description: 'Laundry appliance installation with proper connections and venting',
      price: 'Starting at $200',
      features: ['Water connections', 'Electrical hookup', 'Vent installation', 'Leveling and testing']
    },
    {
      title: 'Range Hood Installation',
      description: 'Kitchen range hood installation with proper ventilation',
      price: 'Starting at $160',
      features: ['Mounting and support', 'Ductwork connection', 'Electrical wiring', 'Performance testing']
    }
  ];

  const installationFeatures = [
    'Experienced with all major appliance brands',
    'Proper electrical and plumbing connections',
    'Safety testing and performance verification',
    'Clean installation with minimal disruption',
    '1-year warranty on installation work',
    'Fully insured for your protection'
  ];

  const smartHomeServices = [
    {
      title: 'Smart Thermostats',
      description: 'Energy-efficient climate control',
      icon: '🌡️'
    },
    {
      title: 'Smart Switches & Outlets',
      description: 'Voice and app-controlled lighting',
      icon: '💡'
    },
    {
      title: 'Security Systems',
      description: 'Cameras, doorbells, and sensors',
      icon: '🔒'
    },
    {
      title: 'Smart Speakers',
      description: 'Whole-home audio systems',
      icon: '🔊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
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
              <div className="bg-gradient-to-r from-gray-500 to-slate-600 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Appliance Installation Services</h1>
                <p className="text-sm text-gray-500">Professional Setup & Installation</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="h-4 w-4 mr-2" />
              Professional Appliance Installation
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Appliance Installation Services
              <span className="block bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Professional Setup & Support
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From dishwashers to smart home devices, Felix provides professional appliance 
              installation services. Proper connections, safety testing, and warranty support 
              for all your home appliances and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/schedule-visit"
                className="bg-gradient-to-r from-gray-500 to-slate-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </Link>
              
              <a
                href="tel:650-315-1390"
                className="border-2 border-gray-500 text-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
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
              <div className="bg-gradient-to-br from-gray-400 to-slate-600 rounded-3xl p-6 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional appliance installation service"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">All</div>
                  <div className="text-sm text-gray-600 mb-2">Major Brands</div>
                  <div className="text-xs text-gray-600 font-medium">Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Appliance Installation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation for all your home appliances and smart devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-gray-400 to-slate-600 p-3 rounded-2xl">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-600">{service.price}</div>
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

        {/* Smart Home Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Home Installation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your home with smart technology. Professional installation and setup 
                for all your smart home devices and automation systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartHomeServices.map((service, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation process ensuring safety, functionality, and warranty coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Pre-Installation Check',
                description: 'Verify compatibility and prepare installation area',
                icon: CheckCircle
              },
              {
                step: '02',
                title: 'Professional Installation',
                description: 'Proper connections and mounting with quality materials',
                icon: Wrench
              },
              {
                step: '03',
                title: 'Safety Testing',
                description: 'Comprehensive testing to ensure proper operation',
                icon: Shield
              },
              {
                step: '04',
                title: 'Setup & Training',
                description: 'Complete setup and customer training on operation',
                icon: Settings
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-gray-400 to-slate-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
                  <Tv className="h-8 w-8 text-gray-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Expert Installation Service</h2>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With experience installing all major appliance brands, Felix ensures your 
                  appliances are properly connected, safely installed, and fully functional. 
                  We handle the technical details so you can enjoy your new appliances.
                </p>

                <div className="space-y-4">
                  {installationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4792511/pexels-photo-4792511.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional appliance installation tools and equipment"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Professional Service
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TV Mounting Special */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-500 to-slate-600 rounded-3xl p-12 text-white">
            <div className="text-center">
              <Tv className="h-12 w-12 mx-auto mb-6 text-gray-200" />
              <h2 className="text-3xl font-bold mb-4">
                Professional TV Mounting
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Secure wall mounting with proper stud attachment, cable management, and 
                optimal viewing angles. All sizes and brands supported.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/schedule-visit"
                  className="bg-white text-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule TV Mounting</span>
                </Link>
                <a
                  href="tel:650-315-1390"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-500 to-slate-600 rounded-3xl p-12 text-center text-white">
          <Home className="h-12 w-12 mx-auto mb-6 text-gray-200" />
          <h2 className="text-3xl font-bold mb-4">
            Ready for Professional Installation?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Don't risk DIY installation. Get professional appliance installation with 
            proper connections and warranty support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-visit"
              className="bg-white text-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Installation</span>
            </Link>
            <a
              href="tel:650-315-1390"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-600 transition-colors inline-flex items-center justify-center space-x-2"
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

export default ApplianceInstallationPage;