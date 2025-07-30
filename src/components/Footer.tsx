import React from 'react';
import { Wrench, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Felix Fix-It</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              The San Francisco Bay Area's most trusted handyman service. 
              Licensed, insured, and committed to excellence.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9/5 from 500+ reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Electrical Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Plumbing Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Painting & Drywall</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpentry Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Home Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Appliance Installation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) FIX-IT-NOW</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>felix@felixfixit.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco Bay Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco</li>
              <li>Oakland</li>
              <li>San Jose</li>
              <li>Palo Alto</li>
              <li>Mountain View</li>
              <li>Fremont</li>
              <li>Berkeley</li>
              <li>And many more...</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Felix Fix-It. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">License & Insurance</a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            Licensed Contractor #123456 | Fully Insured | Bonded
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;