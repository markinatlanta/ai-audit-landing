
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium"
          >
            <Zap className="w-4 h-4 text-yellow-300" />
            Limited Time: Free AI Business Audit
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Save <span className="text-yellow-300">10+ Hours</span> Per Week
            <br />
            With AI Automation
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get a free AI audit and discover exactly how artificial intelligence 
            can streamline your business operations and boost productivity.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <div className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-green-300" />
              <span>Short consultation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-green-300" />
              <span>Personalized recommendations</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-green-300" />
              <span>100% Free, no strings attached</span>
            </div>
          </motion.div>
          
          <motion.a
            href="#audit-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Your Free AI Audit Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
