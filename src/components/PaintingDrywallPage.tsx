import React from 'react';
import { ArrowLeft, Paintbrush, Shield, Clock, CheckCircle, Phone, Calendar, Star, Palette, Home, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaintingDrywallPage = () => {
  const services = [
    {
      title: 'Interior Painting',
      description: 'Professional interior painting for rooms, hallways, and entire homes',
      price: 'Starting at $200/room',
      features: ['Wall preparation', 'Primer application', 'Two coats of paint', 'Trim and detail work']
    },
    {
      title: 'Exterior Painting',
      description: 'Weather-resistant exterior painting to protect and beautify your home',
      price: 'Starting at $2,500',
      features: ['Surface preparation', 'Weather-resistant paint', 'Trim and siding', 'Deck and fence painting']
    },
    {
      title: 'Drywall Repair',
      description: 'Expert drywall repair for holes, cracks, and water damage',
      price: 'Starting at $75',
      features: ['Hole patching', 'Crack repair', 'Texture matching', 'Seamless finishing']
    },
    {
      title: 'Drywall Installation',
      description: 'New drywall installation for additions and renovations',
      price: 'Starting at $2.50/sq ft',
      features: ['Drywall hanging', 'Taping and mudding', 'Sanding and finishing', 'Texture application']
    },
    {
      title: 'Color Consultation',
      description: 'Professional color selection and design consultation',
      price: 'Starting at $150',
      features: ['Color scheme design', 'Paint sample testing', 'Lighting considerations', 'Design recommendations']
    },
    {
      title: 'Specialty Finishes',
      description: 'Custom textures, faux finishes, and decorative painting',
      price: 'Starting at $300',
      features: ['Textured walls', 'Faux finishing', 'Accent walls', 'Decorative techniques']
    }
  ];

  const qualityFeatures = [
    'Premium paint brands and materials',
    'Thorough surface preparation',
    'Clean, professional application',
    'Furniture protection and cleanup',
    '2-year warranty on interior paint',
    'Fully insured for your protection'
  ];

  const paintingProcess = [
    {
      step: '01',
      title: 'Consultation & Estimate',
      description: 'Free in-home consultation with detailed written estimate',
      icon: Palette
    },
    {
      step: '02',
      title: 'Surface Preparation',
      description: 'Thorough cleaning, patching, and priming for perfect results',
      icon: Brush
    },
    {
      step: '03',
      title: 'Professional Painting',
      description: 'Expert application with premium materials and techniques',
      icon: Paintbrush
    },
    {
      step: '04',
      title: 'Final Inspection',
      description: 'Quality check and touch-ups to ensure perfect finish',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
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
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Paintbrush className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Painting & Drywall Services</h1>
                <p className="text-sm text-gray-500">Transform Your Space with Color</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Paintbrush className="h-4 w-4 mr-2" />
              Professional Painting Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Painting & Drywall Services
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Beautiful, Lasting Results
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your space with professional painting and drywall services. From color 
              consultation to flawless application, Felix delivers beautiful results that last. 
              Interior, exterior, and specialty finishes available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/schedule-visit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </Link>
              
              <a
                href="tel:650-315-1390"
                className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
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
                  <div className="text-sm text-gray-600">Estimates</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">2 Year</div>
                  <div className="text-sm text-gray-600">Warranty</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-6 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional painter working on interior wall"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Free</div>
                  <div className="text-sm text-gray-600 mb-2">Color Consultation</div>
                  <div className="text-xs text-purple-600 font-medium">With Every Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Painting & Drywall Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete painting and drywall solutions for interior and exterior projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-2xl">
                    <Paintbrush className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">{service.price}</div>
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

        {/* Quality & Materials Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Palette className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Premium Quality & Materials</h2>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We use only premium paints and materials from trusted brands like Sherwin-Williams 
                  and Benjamin Moore. Our meticulous preparation and application process ensures 
                  beautiful, long-lasting results.
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
                  src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Paint brushes and color samples"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Premium Materials
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Painting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to completion, we follow a proven process to deliver 
              exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {paintingProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Color Consultation CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <div className="text-center">
              <Palette className="h-12 w-12 mx-auto mb-6 text-purple-200" />
              <h2 className="text-3xl font-bold mb-4">
                Free Color Consultation
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Not sure about colors? Our expert color consultation service helps you choose 
                the perfect palette for your space. Included free with every painting project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/schedule-visit"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Consultation</span>
                </Link>
                <a
                  href="tel:650-315-1390"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white">
          <Home className="h-12 w-12 mx-auto mb-6 text-purple-200" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with professional painting and drywall services. 
            Beautiful results, guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule-visit"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Get Free Estimate</span>
            </Link>
            <a
              href="tel:650-315-1390"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
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

export default PaintingDrywallPage;