
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}


interface FormData {
  businessName: string
  contactName: string
  email: string;
  website: string
  industry: string
  employeeCount: string
  revenueRange: string
  timeConsumingTasks: string
  currentTools: string
  operationalBottlenecks: string
  painPoints: string
  additionalInfo: string
}

const industries = [
  'Retail/E-commerce',
  'Professional Services',
  'Healthcare',
  'Real Estate',
  'Manufacturing',
  'Restaurant/Food Service',
  'Construction',
  'Marketing/Advertising',
  'Technology',
  'Education',
  'Finance/Accounting',
  'Other'
]

const employeeCounts = [
  '1-5 employees',
  '6-10 employees',
  '11-25 employees',
  '26-50 employees',
  '51-100 employees',
  '100+ employees'
]

const revenueRanges = [
  'Under $100K',
  '$100K - $500K',
  '$500K - $1M',
  '$1M - $5M',
  '$5M - $10M',
  'Over $10M'
]

export function AuditForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    contactName: '',
    email: '',
    website: 'advisoryjks.com',
    industry: '',
    employeeCount: '',
    revenueRange: '',
    timeConsumingTasks: '',
    currentTools: '',
    operationalBottlenecks: '',
    painPoints: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required'
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required'
    if (!formData.industry) newErrors.industry = 'Please select your industry'
    if (!formData.employeeCount) newErrors.employeeCount = 'Please select employee count'
    if (!formData.revenueRange) newErrors.revenueRange = 'Please select revenue range'
    if (!formData.timeConsumingTasks.trim()) newErrors.timeConsumingTasks = 'Please describe your time-consuming tasks'
    if (!formData.operationalBottlenecks.trim()) newErrors.operationalBottlenecks = 'Please describe your operational bottlenecks'
    if (!formData.painPoints.trim()) newErrors.painPoints = 'Please describe your main pain points'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;
  setIsSubmitting(true);

  try {
    // ——— FIRE THE CONVERSION EVENT ———
    if (typeof window !== 'undefined') {
      // Option A: use your helper
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }
      // Option B: or fire it directly
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17307204764/5AqcCPW16ukaEJz527xA',
          value: 1.0,
          currency: 'USD',
        });
      }
    }

    // ——— NOW SUBMIT THE FORM ———
    const response = await fetch('https://formspree.io/f/mgvydbza', { /*…*/ });
    if (!response.ok) throw new Error('Failed to submit form');

    // ——— SHOW THE THANK-YOU VIEW ———
    setIsSubmitted(true);
  } catch (error) {
    console.error(error);
    alert('There was an error submitting your form. Please try again.');
  } finally {
    setIsSubmitting(false);
  }

  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="audit-form" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your audit request has been submitted successfully. Our AI is already analyzing your business information.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li>• Our AI will pre-analyze your business</li>
                <li>• We'll contact you through advisoryjks.com with personalized insights and schedule your free consultation</li>
                <li>• During the call, we'll present specific automation opportunities</li>
                <li>• You'll receive a detailed action plan</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="audit-form" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free <span className="text-blue-600">AI Business Audit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your business so our AI can pre-analyze your operations and provide 
            personalized automation recommendations during your consultation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Business Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName" className="text-base font-semibold text-gray-700">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="mt-2 h-12"
                  placeholder="Your business name"
                />
                {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
              </div>

              <div>
                <Label htmlFor="contactName" className="text-base font-semibold text-gray-700">
                  Your Name *
                </Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="mt-2 h-12"
                  placeholder="Your full name"
                />
                {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>}
              </div>
            </div>
<div>
  <Label htmlFor="email" className="text-base font-semibold text-gray-700">
    Email Address *
  </Label>
  <Input
    id="email"
    type="email"
    value={formData.email}
    onChange={(e) => handleInputChange('email', e.target.value)}
    className="mt-2 h-12"
    placeholder="you@example.com"
    required
  />
</div>

            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <Label htmlFor="website" className="text-base font-semibold text-gray-700">
                  Contact Website
                </Label>
                <Input
                  id="website"
                  type="text"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="mt-2 h-12 bg-gray-50"
                  placeholder="advisoryjks.com"
                  readOnly
                />
                <p className="text-sm text-gray-500 mt-1">
                  We'll contact you through our website at advisoryjks.com with your audit results.
                </p>
              </div>
            </div>

            {/* Business Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label className="text-base font-semibold text-gray-700">Industry *</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger className="mt-2 h-12">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
              </div>

              <div>
                <Label className="text-base font-semibold text-gray-700">Team Size *</Label>
                <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange('employeeCount', value)}>
                  <SelectTrigger className="mt-2 h-12">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeCounts.map((count) => (
                      <SelectItem key={count} value={count}>
                        {count}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.employeeCount && <p className="text-red-500 text-sm mt-1">{errors.employeeCount}</p>}
              </div>

              <div>
                <Label className="text-base font-semibold text-gray-700">Annual Revenue *</Label>
                <Select value={formData.revenueRange} onValueChange={(value) => handleInputChange('revenueRange', value)}>
                  <SelectTrigger className="mt-2 h-12">
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                  <SelectContent>
                    {revenueRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.revenueRange && <p className="text-red-500 text-sm mt-1">{errors.revenueRange}</p>}
              </div>
            </div>

            {/* Detailed Questions */}
            <div>
              <Label htmlFor="timeConsumingTasks" className="text-base font-semibold text-gray-700">
                What are your most time-consuming daily tasks? *
              </Label>
              <Textarea
                id="timeConsumingTasks"
                value={formData.timeConsumingTasks}
                onChange={(e) => handleInputChange('timeConsumingTasks', e.target.value)}
                className="mt-2 min-h-[100px]"
                placeholder="e.g., Data entry, customer follow-ups, inventory management, scheduling..."
              />
              {errors.timeConsumingTasks && <p className="text-red-500 text-sm mt-1">{errors.timeConsumingTasks}</p>}
            </div>

            <div>
              <Label htmlFor="currentTools" className="text-base font-semibold text-gray-700">
                What tools/software do you currently use?
              </Label>
              <Textarea
                id="currentTools"
                value={formData.currentTools}
                onChange={(e) => handleInputChange('currentTools', e.target.value)}
                className="mt-2 min-h-[80px]"
                placeholder="e.g., QuickBooks, Salesforce, Excel, Google Workspace, Shopify..."
              />
            </div>

            <div>
              <Label htmlFor="operationalBottlenecks" className="text-base font-semibold text-gray-700">
                What are your biggest operational bottlenecks? *
              </Label>
              <Textarea
                id="operationalBottlenecks"
                value={formData.operationalBottlenecks}
                onChange={(e) => handleInputChange('operationalBottlenecks', e.target.value)}
                className="mt-2 min-h-[100px]"
                placeholder="e.g., Manual processes, communication gaps, data silos, slow approvals..."
              />
              {errors.operationalBottlenecks && <p className="text-red-500 text-sm mt-1">{errors.operationalBottlenecks}</p>}
            </div>

            <div>
              <Label htmlFor="painPoints" className="text-base font-semibold text-gray-700">
                What are your main business pain points? *
              </Label>
              <Textarea
                id="painPoints"
                value={formData.painPoints}
                onChange={(e) => handleInputChange('painPoints', e.target.value)}
                className="mt-2 min-h-[100px]"
                placeholder="e.g., Too much admin work, can't scale efficiently, losing customers to competitors..."
              />
              {errors.painPoints && <p className="text-red-500 text-sm mt-1">{errors.painPoints}</p>}
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="text-base font-semibold text-gray-700">
                Anything else you'd like us to know?
              </Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                className="mt-2 min-h-[80px]"
                placeholder="Any specific goals, challenges, or questions you have..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting Your Request...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Get My Free AI Audit
                </>
              )}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting this form, you agree to receive communication from JKS Advisory through advisoryjks.com about your audit results and our services.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
