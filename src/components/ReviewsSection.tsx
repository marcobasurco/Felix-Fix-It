import React from 'react';
import { Star, Quote, ThumbsUp, Users } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'San Francisco, CA',
      rating: 5,
      date: '2 weeks ago',
      text: 'Felix is absolutely amazing! He fixed our kitchen sink and installed new cabinet hardware. His work was impeccable and he was so professional throughout the entire process.',
      service: 'Plumbing & Cabinet Installation',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      location: 'Palo Alto, CA',
      rating: 5,
      date: '1 month ago',
      text: 'Called Felix for electrical work and he came the same day. Fixed our outlets and installed ceiling fans perfectly. Great service at a very fair price.',
      service: 'Electrical Services',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Oakland, CA',
      rating: 5,
      date: '3 weeks ago',
      text: 'Felix painted our living room and did some drywall repair. The attention to detail was incredible. Our walls look brand new! Highly recommend.',
      service: 'Painting & Drywall',
      avatar: 'ER'
    },
    {
      name: 'David Kim',
      location: 'Mountain View, CA',
      rating: 5,
      date: '1 week ago',
      text: 'Had Felix install custom shelving in our home office and mount our TV. He was punctual, clean, and did excellent work. Will definitely call again.',
      service: 'Carpentry & TV Mounting',
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      location: 'San Jose, CA',
      rating: 5,
      date: '2 months ago',
      text: 'Felix helped us with multiple home repairs before selling our house. He was reliable, skilled, and helped us get top dollar for our home.',
      service: 'Home Maintenance',
      avatar: 'LT'
    },
    {
      name: 'Robert Martinez',
      location: 'Fremont, CA',
      rating: 5,
      date: '1 month ago',
      text: 'Emergency repair on our water heater. Felix came out immediately and fixed it perfectly. Saved us thousands on a replacement!',
      service: 'Emergency Plumbing',
      avatar: 'RM'
    }
  ];

  const stats = [
    { icon: Star, number: '4.9', label: 'Average Rating', color: 'text-yellow-500' },
    { icon: Users, number: '500+', label: 'Happy Customers', color: 'text-blue-500' },
    { icon: ThumbsUp, number: '98%', label: 'Recommend Rate', color: 'text-green-500' }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Bay Area homeowners say about Felix Fix-It.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-orange-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Service Tag */}
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                {review.service}
              </div>
            </div>
          ))}
        </div>

        {/* Review Platforms */}
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Trusted Across All Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { platform: 'Google Reviews', rating: '4.9/5', reviews: '200+' },
              { platform: 'Yelp', rating: '4.8/5', reviews: '150+' },
              { platform: 'Angie\'s List', rating: '5.0/5', reviews: '100+' },
              { platform: 'NextDoor', rating: '4.9/5', reviews: '50+' }
            ].map((platform, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-2xl p-6 mb-3">
                  <div className="text-2xl font-bold text-gray-900">{platform.rating}</div>
                  <div className="text-sm text-gray-600">{platform.reviews} reviews</div>
                </div>
                <div className="font-medium text-gray-700">{platform.platform}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Consistently rated as the top handyman service across all major review platforms 
            in the San Francisco Bay Area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;