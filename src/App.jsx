import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Services from '@/pages/services/Services'
import Projects from '@/pages/projects/Projects'
import Careers from '@/pages/careers/Careers'
import Contact from '@/pages/contact/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function PrivacyPage() {
  return (
    <div className="min-h-[60vh] container mx-auto px-6 md:px-12 py-20 max-w-3xl">
      <h1 className="font-sora font-bold text-3xl text-primary mb-6">Privacy Policy</h1>
      <p className="text-muted leading-relaxed">
        RPL Solutions is committed to protecting your privacy. We collect only the information necessary to respond to your enquiries and do not share personal data with third parties. For full details, please contact us at business@rplsolutions.com.
      </p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-sora font-bold text-5xl text-primary">404</h1>
      <p className="text-muted text-lg">Page not found.</p>
      <a href="/" className="text-accent font-medium hover:underline">← Back to Home</a>
    </div>
  )
}
