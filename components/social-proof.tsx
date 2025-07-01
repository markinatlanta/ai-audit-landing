
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, TrendingUp, Users, Clock } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    business: 'Johnson Marketing Agency',
    quote: 'JKS Advisory helped us automate our client reporting process. We now save 15 hours per week and our clients love the real-time dashboards.',
    rating: 5,
    savings: '15 hours/week'
  },
  {
    name: 'Mike Chen',
    business: 'Chen Construction',
    quote: 'The AI audit revealed bottlenecks we didn\'t even know existed. Our project management is now 40% more efficient.',
    rating: 5,
    savings: '40% efficiency gain'
  },
  {
    name: 'Lisa Rodriguez',
    business: 'Rodriguez Retail',
    quote: 'Inventory management used to be a nightmare. Now it\'s completely automated and we\'ve reduced stockouts by 80%.',
    rating: 5,
    savings: '80% fewer stockouts'
  }
]

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Small Businesses Helped'
  },
  {
    icon: Clock,
    number: '12.5',
    label: 'Average Hours Saved Per Week'
  },
  {
    icon: TrendingUp,
    number: '35%',
    label: 'Average Cost Reduction'
  }
]

export function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Small Businesses</span> Nationwide
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of business owners who have transformed their operations with AI automation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.business}</div>
                <div className="text-blue-600 font-medium text-sm mt-2">
                  Result: {testimonial.savings}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose JKS Advisory?</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-gray-900">Specialized Focus</div>
                <div className="text-sm text-gray-600">Small business AI automation experts</div>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-gray-900">Quick Results</div>
                <div className="text-sm text-gray-600">See improvements within 30 days</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold text-gray-900">Proven ROI</div>
                <div className="text-sm text-gray-600">Average 300% return on investment</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🤝</div>
                <div className="font-semibold text-gray-900">Ongoing Support</div>
                <div className="text-sm text-gray-600">Continuous optimization and training</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
