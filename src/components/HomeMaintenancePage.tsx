import React from 'react';
import { ArrowLeft, Home, Shield, Clock, CheckCircle, Phone, Calendar, Star, Wrench, Settings, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeMaintenancePage = () => {
  const services = [
    {
      title: 'Seasonal Maintenance',
      description: 'Comprehensive seasonal checkups to keep your home in top condition',
      price: 'Starting at $150',
      features: ['HVAC filter changes', 'Gutter cleaning', 'Weatherproofing', 'Safety inspections']
    },
    {
      title: 'Preventive Care',
      description: 'Regular maintenance to prevent costly repairs and extend system life',
      price: 'Starting at $120',
      features: ['System tune-ups', 'Leak prevention', 'Wear monitoring', 'Performance optimization']
    },
    {
      title: 'Safety Inspections',
      description: 'Thorough safety checks for electrical, plumbing, and structural systems',
      price: 'Starting at $100',
      features: ['Electrical safety check', 'Plumbing inspection', 'Structural assessment', 'Fire safety review']
    },
    {
      title: 'Weatherization',
      description: 'Prepare your home for seasonal weather changes and energy efficiency',
      price: 'Starting at $200',
      features: ['Insulation check', 'Seal air leaks', 'Window weatherstripping', 'Door adjustments']
    },
    {
      title: 'Minor Repairs',
      description: 'Quick fixes and small repairs to keep everything working smoothly',
      price: 'Starting at $75',
      features: ['Squeaky hinges', 'Loose fixtures', 'Caulking refresh', 'Hardware tightening']
    },
    {
      title: 'Home Tune-Up',
      description: 'Complete home system check and optimization service',
      price: 'Starting at $250',
      features: ['Multi-system check', 'Performance optimization', 'Efficiency improvements', 'Maintenance plan']
    }
  ];

  const maintenanceFeatures = [
    'Experienced in all home systems',
    'Comprehensive maintenance checklists',
    'Preventive approach saves money',
    'Seasonal service reminders available',
    'Detailed maintenance reports provided',
    'Fully insured for your protection'
  ];

  const seasonalTasks = [
    {
      season: 'Spring',
      icon: '🌸',
      tasks: ['HVAC system check', 'Gutter cleaning', 'Exterior inspection', 'Deck maintenance']
    },
    {
      season: 'Summer',
      icon: '☀️',
      tasks: ['AC maintenance', 'Sprinkler check', 'Outdoor lighting', 'Pest prevention']
    },
    {
      season: 'Fall',
      icon: '🍂',
      tasks: ['Heating system prep', 'Weatherproofing', 'Leaf removal', 'Storm preparation']
    },
    {
      season: 'Winter',
      icon: '❄️',
      tasks: ['Pipe protection', 'Insulation check', 'Safety systems', 'Emergency prep']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
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
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Home Maintenance Services</h1>
                <p className="text-sm text-gray-500">Keep Your Home in Perfect Condition</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="h-4 w-4 mr-2" />
              Professional Home Maintenance
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Home Maintenance Services
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Preventive Care That Saves
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Keep your home running smoothly with regular maintenance services. From seasonal 
              checkups to preventive care, Felix helps you avoid costly repairs and maintain 
              your home's value year-round.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/schedule-visit"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </Link>
              
              <a
                href="tel:650-315-1390"
                className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
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
                  <div className="font-bold text-gray-900">Regular</div>
                  <div className="text-sm text-gray-600">Scheduling</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Save</div>
                  <div className="text-sm text-gray-600">Money</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5691652/pexels-photo-5691652.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional home maintenance inspection"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Save</div>
                  <div className="text-sm text-gray-600 mb-2">Up to 30%</div>
                  <div className="text-xs text-green-600 font-medium">On Repair Costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Home Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services to keep your home in perfect condition year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-2xl">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{service.price}</div>
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

        {/* Seasonal Maintenance */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Seasonal Maintenance Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of maintenance needs with our seasonal service schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalTasks.map((season, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-4">{season.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{season.season}</h3>
                <ul className="space-y-3">
                  {season.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Settings className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Preventive Maintenance Benefits</h2>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Regular maintenance is the key to avoiding expensive repairs and keeping your 
                  home systems running efficiently. Our preventive approach saves you money 
                  and gives you peace of mind.
                </p>

                <div className="space-y-4">
                  {maintenanceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5691650/pexels-photo-5691650.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Home maintenance checklist and tools"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Preventive Care
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plan CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-12 text-white">
            <div className="text-center">
              <Thermometer className="h-12 w-12 mx-auto mb-6 text-green-200" />
              <h2 className="text-3xl font-bold mb-4">
                Annual Maintenance Plans Available
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Sign up for our annual maintenance plan and save money while keeping your 
                home in perfect condition. Priority scheduling and discounted rates included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/schedule-visit"
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Learn About Plans</span>
                </Link>
                <a
                  href="tel:650-315-1390"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-12 text-center text-white">
          <Home className="h-12 w-12 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't wait for problems to arise. Start a maintenance routine that keeps your 
            home in perfect condition and saves you money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-visit"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Maintenance</span>
            </Link>
            <a
              href="tel:650-315-1390"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center space-x-2"
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

export default HomeMaintenancePage;