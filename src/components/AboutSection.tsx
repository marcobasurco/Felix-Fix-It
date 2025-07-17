import React from 'react';
import { User, Award, Clock, Heart, Star, Shield } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: User, number: '500+', label: 'Happy Customers', color: 'text-blue-600' },
    { icon: Clock, number: '10+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Award, number: '100%', label: 'Satisfaction Rate', color: 'text-orange-600' },
    { icon: Heart, number: '24/7', label: 'Emergency Service', color: 'text-red-600' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <User className="h-4 w-4 mr-2" />
                Meet Your Handyman
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Felix –
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Your Trusted Partner
                </span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">
                For over a decade, I've been helping Bay Area families turn their houses into homes. 
                What started as a passion for fixing things has grown into a mission to provide 
                reliable, professional service that you can count on.
              </p>
              
              <p className="mb-6">
                Every project, whether it's a simple repair or a complex installation, gets my 
                personal attention. I treat your home with the same care and respect I'd give my own, 
                because your satisfaction is my reputation.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Shield className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Licensed & Insured</h4>
                <p className="text-sm text-gray-600">Fully licensed contractor with comprehensive insurance coverage</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Star className="h-8 w-8 text-yellow-500 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">5-Star Rated</h4>
                <p className="text-sm text-gray-600">Consistently rated 5 stars across all review platforms</p>
              </div>
            </div>

            {/* Why Choose Felix */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Felix Fix-It?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Same-day service available',
                  'Upfront, honest pricing',
                  'Clean, professional work',
                  '1-year warranty on all work',
                  'Emergency services 24/7',
                  'Local Bay Area expert'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Image */}
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5691640/pexels-photo-5691640.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Felix working on a home repair project"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <achievement.icon className={`h-8 w-8 ${achievement.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;