import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Customers'
    },
    {
      icon: Clock,
      number: '10+',
      label: 'Years Experience'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Satisfaction Rate'
    },
    {
      icon: Heart,
      number: '24/7',
      label: 'Emergency Service'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5691640/pexels-photo-5691640.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Felix working on home repair project"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-orange-500 rounded-xl p-6 shadow-xl text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Felix: Your Trusted
              <span className="block text-blue-600">Bay Area Handyman</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                For over a decade, Felix has been the go-to handyman for thousands of Bay Area 
                residents. What started as a passion for fixing things has grown into a trusted 
                business built on quality, reliability, and exceptional customer service.
              </p>
              
              <p>
                Felix brings a unique combination of technical expertise and genuine care to every 
                project. Whether it's a simple repair or a complex installation, he treats your 
                home with the same attention and respect he'd give his own.
              </p>

              <p>
                Licensed, insured, and committed to excellence, Felix has built his reputation 
                one satisfied customer at a time. His attention to detail and commitment to 
                quality workmanship has made him the most trusted handyman in the Bay Area.
              </p>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Felix?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Over 10 years of professional experience</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Licensed contractor with full insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Same-day service available for urgent repairs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">100% satisfaction guarantee on all work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;