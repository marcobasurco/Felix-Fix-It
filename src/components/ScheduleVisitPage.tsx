import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, MapPin, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { saveFormSubmission, getFormSubmissions } from '../utils/storage';
import { sendCustomerAcknowledgment, sendAdminNotification } from '../utils/emailService';

const ScheduleVisitPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDateDisplay, setSelectedDateDisplay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    stateProvince: 'CA',
    zipCode: '',
    service: '',
    urgency: 'scheduled',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  // Load existing bookings on component mount
  useEffect(() => {
    const loadBookedSlots = () => {
      const submissions = getFormSubmissions();
      const booked = new Set<string>();
      
      submissions.forEach(submission => {
        // Consider all submissions that aren't cancelled as potentially booked
        if (submission.status !== 'cancelled') {
          let date = '';
          let time = '';
          
          // Try to extract date and time from the message
          const messageLines = submission.message.split('\n');
          
          // Look for the scheduled visit request section
          const dateMatch = messageLines.find(line => line.includes('Preferred Date:'));
          const timeMatch = messageLines.find(line => line.includes('Preferred Time:'));
          
          if (dateMatch && timeMatch) {
            // Parse date from message (format: "Thursday, July 17" or "7/17/2025")
            const dateStr = dateMatch.split('Preferred Date:')[1]?.trim();
            if (dateStr) {
              // Try to parse the date string
              const parsedDate = new Date(dateStr + ', 2025'); // Add year if missing
              if (!isNaN(parsedDate.getTime())) {
                const year = parsedDate.getFullYear();
                const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
                const day = parsedDate.getDate().toString().padStart(2, '0');
                date = `${year}-${month}-${day}`;
              }
            }
            
            // Parse time from message (format: "2:00 PM" or "2:00:00 PM")
            const timeStr = timeMatch.split('Preferred Time:')[1]?.trim();
            if (timeStr) {
              // Convert 12-hour format to 24-hour format
              const timeRegex = /(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)/i;
              const match = timeStr.match(timeRegex);
              
              if (match) {
                let hours = parseInt(match[1]);
                const minutes = match[2];
                const ampm = match[4].toUpperCase();
                
                // Convert to 24-hour format
                if (ampm === 'PM' && hours !== 12) {
                  hours += 12;
                } else if (ampm === 'AM' && hours === 12) {
                  hours = 0;
                }
                
                time = `${hours.toString().padStart(2, '0')}:${minutes}`;
              }
            }
          }
          
          // Also check if there are direct preferredDate and preferredTime fields
          if (submission.preferredDate && submission.preferredTime) {
            date = submission.preferredDate;
            time = submission.preferredTime;
          }
          
          if (date && time) {
            const slotKey = `${date} ${time}`;
            booked.add(slotKey);
            console.log('Blocked slot:', slotKey); // Debug log
          }
        }
      });
      
      setBookedSlots(booked);
      console.log('All booked slots:', Array.from(booked)); // Debug log
    };
    
    loadBookedSlots();
  }, []);

  // Generate available dates (next 30 days, excluding Sundays)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        // Format date as YYYY-MM-DD in local timezone
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        
        dates.push({
          date: dateString,
          display: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Generate time slots for a given date
  const generateTimeSlots = (dateString: string, bookedSlots: Set<string>) => {
    const slots = [];
    const timeSlots = [
      { start: 8, label: '8:00 AM' },
      { start: 9, label: '9:00 AM' },
      { start: 10, label: '10:00 AM' },
      { start: 11, label: '11:00 AM' },
      { start: 12, label: '12:00 PM' },
      { start: 13, label: '1:00 PM' },
      { start: 14, label: '2:00 PM' },
      { start: 15, label: '3:00 PM' },
      { start: 16, label: '4:00 PM' },
      { start: 17, label: '5:00 PM' },
      { start: 18, label: '6:00 PM' }
    ];

    for (const slot of timeSlots) {
      const hourStr = slot.start.toString().padStart(2, '0');
      slots.push({
        value: `${hourStr}:00`,
        display: slot.label
      });
    }
    
    return slots.filter(timeSlot => {
      // Check if this time slot is already booked
      const slotKey = `${dateString} ${timeSlot.value}`;
      return !bookedSlots.has(slotKey);
    });
  };

  const handleDateSelect = (date: string, display: string) => {
    setSelectedDate(date);
    setSelectedDateDisplay(display);
    setSelectedTime('');
    setFormData(prev => ({ ...prev, preferredDate: date, preferredTime: '' }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, preferredTime: time }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const submission = saveFormSubmission({
        ...formData,
        message: `${formData.message}\n\nScheduled Visit Request:\nPreferred Date: ${new Date(selectedDate).toLocaleDateString()}\nPreferred Time: ${new Date(`2000-01-01T${selectedTime}`).toLocaleTimeString()}`
      });
      
      console.log('Scheduling request submitted:', submission);
      
      // Send emails after successful form submission
      handleEmailNotifications();
      
    } catch (error) {
      console.error('Error submitting scheduling request:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    }
  };

  const handleEmailNotifications = async () => {
    console.log('Starting email notification process for scheduling request...');
    
    const customerData = {
      name: formData.name,
      email: formData.email,
      service: formData.service || 'General service request',
      message: formData.message,
      phone: formData.phone,
      address: `${formData.streetAddress}, ${formData.city}, ${formData.stateProvince} ${formData.zipCode}`,
      urgency: formData.urgency || 'Not specified',
      preferredDate: selectedDateDisplay,
      preferredTime: new Date(`2000-01-01T${selectedTime}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    };
    
    try {
      console.log('Sending customer acknowledgment email...');
      await sendCustomerAcknowledgment(customerData);
      console.log('✅ Customer acknowledgment email sent successfully');
      
      console.log('Sending admin notification email...');
      await sendAdminNotification(customerData);
      console.log('✅ Admin notification email sent successfully');
      
      console.log('✅ All emails sent successfully for scheduling request');
      setCurrentStep(4); // Success step
      
    } catch (error) {
      console.error('❌ Error sending emails for scheduling request:', error);
      // Still show success to user, but log the email error
      setCurrentStep(4);
      // You might want to show a different message or handle this differently
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const availableDates = generateAvailableDates();
  const timeSlots = generateTimeSlots(selectedDate, bookedSlots);

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Visit Scheduled!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for scheduling your visit. We've sent a confirmation email with all the details and will contact you within 2 hours to confirm your appointment.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Requested Date & Time:</p>
            <p className="font-semibold text-gray-900">
              {selectedDateDisplay}
            </p>
            <p className="font-semibold text-gray-900">
              {new Date(`2000-01-01T${selectedTime}`).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              })}
            </p>
          </div>
          <Link
            to="/"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Felix Fix-It</h1>
                <p className="text-sm text-gray-500">Schedule Your Visit</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {[
              { step: 1, title: 'Select Date', icon: Calendar },
              { step: 2, title: 'Choose Time', icon: Clock },
              { step: 3, title: 'Your Details', icon: User }
            ].map((item) => (
              <div key={item.step} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= item.step 
                    ? 'bg-orange-500 border-orange-500 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className={`ml-3 font-medium ${
                  currentStep >= item.step ? 'text-orange-600' : 'text-gray-400'
                }`}>
                  {item.title}
                </span>
                {item.step < 3 && (
                  <div className={`w-16 h-0.5 ml-8 ${
                    currentStep > item.step ? 'bg-orange-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Step 1: Date Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Select Your Preferred Date
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Choose a date that works best for your schedule. We're available Monday through Saturday.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {availableDates.map((dateOption) => (
                  <button
                    key={dateOption.date}
                    onClick={() => handleDateSelect(dateOption.date, dateOption.display)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedDate === dateOption.date
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    <div className="font-semibold">{dateOption.display}</div>
                    <div className="text-sm text-gray-500">
                      8:00 AM - 6:00 PM
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={nextStep}
                  disabled={!selectedDate}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Time Selection
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Choose Your Time Slot
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Selected Date: <span className="font-semibold text-orange-600">
                  {selectedDateDisplay}
                </span>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
                {timeSlots.map((timeOption) => (
                  <button
                    key={timeOption.value}
                    onClick={() => handleTimeSelect(timeOption.value)}
                    className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                      selectedTime === timeOption.value
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    {timeOption.display}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
                >
                  Back to Date
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedTime}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Details
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Your Contact Details
              </h2>
              <p className="text-gray-600 text-center mb-8">
                We'll use this information to confirm your appointment and provide updates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">Electrical Work</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="painting">Painting & Drywall</option>
                      <option value="carpentry">Carpentry</option>
                      <option value="maintenance">Home Maintenance</option>
                      <option value="appliance">Appliance Installation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Address Section */}
                <div>
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
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
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
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{5}(-[0-9]{4})?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="94102"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Please describe your project in detail..."
                  />
                </div>

                {/* Appointment Summary */}
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Appointment Summary</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-600" />
                      <span>{selectedDateDisplay}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span>{new Date(`2000-01-01T${selectedTime}`).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      })}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
                  >
                    Back to Time
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Schedule My Visit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisitPage;