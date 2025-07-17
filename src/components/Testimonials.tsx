import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'San Francisco',
      rating: 5,
      text: 'Felix fixed our kitchen sink and installed new cabinet hardware. His work was impeccable and he was so professional. Highly recommend!',
      service: 'Plumbing & Cabinet Installation'
    },
    {
      name: 'Michael Chen',
      location: 'Palo Alto',
      rating: 5,
      text: 'Called Felix for electrical work and he came the same day. Fixed our outlets and installed ceiling fans. Great service at a fair price.',
      service: 'Electrical Services'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Oakland',
      rating: 5,
      text: 'Felix painted our living room and did some drywall repair. The attention to detail was amazing. Our walls look brand new!',
      service: 'Painting & Drywall'
    },
    {
      name: 'David Kim',
      location: 'Mountain View',
      rating: 5,
      text: 'Had Felix install shelving in our home office and mount our TV. He was punctual, clean, and did excellent work. Will definitely call again.',
      service: 'Carpentry & TV Mounting'
    },
    {
      name: 'Lisa Thompson',
      location: 'San Jose',
      rating: 5,
      text: 'Felix helped us with multiple home repairs before selling our house. He was reliable, skilled, and helped us get top dollar for our home.',
      service: 'Home Maintenance'
    },
    {
      name: 'Robert Martinez',
      location: 'Fremont',
      rating: 5,
      text: 'Emergency repair on our water heater. Felix came out immediately and fixed it perfectly. Saved us thousands on a replacement!',
      service: 'Emergency Plumbing'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Bay Area homeowners say about Felix Fix-It.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex space-x-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            </div>
            <div className="text-lg text-gray-600 mb-2">Average rating from 500+ reviews</div>
            <div className="text-sm text-gray-500">Based on Google Reviews, Yelp, and direct feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;