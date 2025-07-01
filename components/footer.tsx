
'use client'

import { motion } from 'framer-motion'
import { Globe, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">JKS Advisory</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Helping small businesses save time and money through intelligent AI automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <a href="https://advisoryjks.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                advisoryjks.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Serving Small Businesses Nationwide</span>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 JKS Advisory. All rights reserved. | 
              <span className="text-blue-400 ml-2">Transforming businesses with AI automation</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
