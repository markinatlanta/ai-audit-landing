
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, Clock, DollarSign, TrendingUp, Users, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Save 10+ Hours Weekly',
    description: 'Automate repetitive tasks and focus on growing your business instead of managing it.'
  },
  {
    icon: DollarSign,
    title: 'Reduce Operating Costs',
    description: 'Cut expenses by up to 40% through intelligent process automation and optimization.'
  },
  {
    icon: TrendingUp,
    title: 'Boost Productivity',
    description: 'Increase team efficiency with AI-powered workflows and smart decision-making tools.'
  },
  {
    icon: Users,
    title: 'Scale Without Hiring',
    description: 'Handle more customers and orders without expanding your team size.'
  },
  {
    icon: Bot,
    title: 'AI-Powered Insights',
    description: 'Get data-driven recommendations tailored specifically to your business needs.'
  },
  {
    icon: Zap,
    title: 'Quick Implementation',
    description: 'Start seeing results within 30 days with our proven AI integration process.'
  }
]

export function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Small Businesses Choose <span className="text-blue-600">AI Automation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of small businesses that have transformed their operations with AI. 
            Here's what you can expect from your free audit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">What You'll Get in Your Free Audit</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🔍 Business Analysis</h4>
                <p className="text-blue-100">Deep dive into your current processes and identify automation opportunities</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 Custom Recommendations</h4>
                <p className="text-blue-100">Personalized AI solutions tailored to your specific industry and needs</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📊 ROI Projection</h4>
                <p className="text-blue-100">Clear breakdown of potential time and cost savings with implementation timeline</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
