import React from 'react';
import { Wrench, Phone, Mail, MapPin, Clock, Star, Facebook, Instagram, Linkedin } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '../config/constants';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{BUSINESS_INFO.name}</h3>
                <p className="text-sm text-gray-400">{BUSINESS_INFO.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional handyman services throughout the {BUSINESS_INFO.address}. 
              Licensed, insured, and committed to excellence since 2014.
            </p>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9/5 from 500+ reviews</span>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service, index) => (
                <li key={index}>
                  <a href="/#services" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {SERVICE_AREAS.slice(0, 8).map((area, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              + {SERVICE_AREAS.length - 8} more cities throughout the Bay Area
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <div>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-400">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <div>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-gray-400">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <div>
                  <span className="text-gray-300">{BUSINESS_INFO.address}</span>
                  <p className="text-xs text-gray-400">{BUSINESS_INFO.serviceRadius}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <div>
                  <span className="text-gray-300">{BUSINESS_INFO.hours.weekdays}</span>
                  <p className="text-xs text-gray-400">{BUSINESS_INFO.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">License Info</a>
              <a href="#" className="hover:text-white transition-colors">Insurance</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-4 text-xs text-gray-500">
              <span>Licensed Contractor #CA123456</span>
              <span>•</span>
              <span>Fully Insured & Bonded</span>
              <span>•</span>
              <span>Better Business Bureau A+ Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;