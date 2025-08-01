import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../config/constants';
import { saveFormSubmission } from '../utils/storage';
import { sendCustomerAcknowledgment, sendAdminNotification } from '../utils/emailService';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    zipCode: '',
    service: '',
    urgency: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save form submission to storage
      const submission = saveFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        streetAddress: formData.streetAddress,
        city: formData.city,
        stateProvince: formData.stateProvince,
        zipCode: formData.zipCode,
        service: formData.service,
        urgency: formData.urgency,
        message: formData.message
      });
      
      console.log('Form submitted:', submission);
      
      // Send emails after successful form submission
      handleEmailNotifications();
      
    } catch (error) {
      console.error('Error saving form submission:', error);
      alert('There was an error submitting your form. Please try again or call us directly.');
    }
  };

  const handleEmailNotifications = async () => {
    console.log('Starting email notification process for quote request...');
    
    const customerData = {
      name: formData.name,
      email: formData.email,
      service: formData.service || 'General quote request',
      message: formData.message,
      phone: formData.phone,
      address: `${formData.streetAddress}, ${formData.city}, ${formData.stateProvince} ${formData.zipCode}`,
      urgency: formData.urgency
    };
    
    try {
      console.log('Sending customer acknowledgment email for quote request...');
      await sendCustomerAcknowledgment(customerData);
      console.log('✅ Customer acknowledgment email sent successfully');
      
      console.log('Sending admin notification email for quote request...');
      await sendAdminNotification(customerData);
      console.log('✅ Admin notification email sent successfully');
      
      console.log('✅ All emails sent successfully for quote request');
      alert('Thank you for your message! We\'ve sent a confirmation email and will get back to you within 2 hours.');
      
      // Clear form after successful submission and email sending
      setFormData({ name: '', email: '', phone: '', streetAddress: '', city: '', stateProvince: '', zipCode: '', service: '', urgency: '', message: '' });
      
    } catch (error) {
      console.error('❌ Error sending emails for quote request:', error);
      // Still show success to user, but mention email issue
      alert('Thank you for your message! We\'ve received your request and will get back to you within 2 hours. (Note: There was an issue sending the confirmation email, but your request was saved successfully.)');
      
      // Clear form even if email failed
      setFormData({ name: '', email: '', phone: '', streetAddress: '', city: '', stateProvince: '', zipCode: '', service: '', urgency: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Format phone number as user types
      let formattedValue = value.replace(/\D/g, ''); // Remove non-digits
      if (formattedValue.length >= 6) {
        formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3, 6)}-${formattedValue.slice(6, 10)}`;
      } else if (formattedValue.length >= 3) {
        formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3)}`;
      }
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call or Text',
      info: BUSINESS_INFO.phone,
      description: 'Available 24/7 for emergencies',
      color: 'from-green-500 to-emerald-500',
      action: `tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: BUSINESS_INFO.email,
      description: 'Response within 2 hours',
      color: 'from-blue-500 to-cyan-500',
      action: `mailto:${BUSINESS_INFO.email}`
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      info: 'Chat with Felix',
      description: 'Instant responses during business hours',
      color: 'from-purple-500 to-pink-500',
      action: '#'
    },
    {
      icon: Calendar,
      title: 'Schedule a Visit',
      info: 'Book Appointment',
      description: 'Choose your preferred date and time',
      color: 'from-indigo-500 to-blue-500',
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Send className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your free quote today. We respond to all inquiries within 2 hours, 
            and offer same-day service throughout the Bay Area.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left - Contact Methods */}
          <div className="lg:col-span-5">
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                method.action.startsWith('#') ? (
                  <Link
                    key={index}
                    to="/schedule-visit"
                    className="block bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${method.color} p-4 rounded-2xl shadow-lg`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-lg text-gray-700 mb-1">{method.info}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={method.action}
                    className="block bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${method.color} p-4 rounded-2xl shadow-lg`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-lg text-gray-700 mb-1">{method.info}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </div>
                  </a>
                )
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Weekdays</span>
                  <span className="text-gray-600">{BUSINESS_INFO.hours.weekdays.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">{BUSINESS_INFO.hours.saturday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600">{BUSINESS_INFO.hours.sunday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-red-600">Emergency Service</span>
                  <span className="text-red-600 font-medium">{BUSINESS_INFO.hours.emergency}</span>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="mt-6 bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Service Area</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Serving the entire {BUSINESS_INFO.address} within a {BUSINESS_INFO.serviceRadius}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• San Francisco</div>
                <div>• Oakland</div>
                <div>• San Jose</div>
                <div>• Palo Alto</div>
                <div>• Mountain View</div>
                <div>• And 50+ more cities</div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <Calendar className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Request Your Free Quote</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="painting">Painting & Drywall</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="maintenance">Home Maintenance</option>
                    <option value="appliance">Appliance Installation</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Address Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Address</h4>
                
                <div className="mb-4">
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="123 Main Street, Apt 4B"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="San Francisco"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      id="stateProvince"
                      name="stateProvince"
                      value={formData.stateProvince}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="NV">Nevada</option>
                      <option value="OR">Oregon</option>
                      <option value="WA">Washington</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{5}(-[0-9]{4})?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="94102"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  How urgent is this project?
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value="">Select urgency</option>
                  <option value="emergency">Emergency (Same Day)</option>
                  <option value="urgent">Urgent (Within 2-3 Days)</option>
                  <option value="soon">Soon (Within a Week)</option>
                  <option value="flexible">Flexible (Within a Month)</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Please describe your project in detail. Include any specific requirements, preferred timing, and any other relevant information..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send My Request</span>
              </button>

              <p className="mt-4 text-sm text-gray-500 text-center">
                We'll respond to your inquiry within 2 hours with a detailed quote and next steps.
              </p>
            </form>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need Emergency Service?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Plumbing leaks, electrical issues, or security concerns? 
            We're available 24/7 for emergency repairs.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
            className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call Emergency Line</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;