
import { Hero } from '@/components/hero'
import { ValueProposition } from '@/components/value-proposition'
import { AuditForm } from '@/components/audit-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Hero />
      <ValueProposition />
      <AuditForm />
      <Footer />
    </main>
  )
}
