import { useParams, Navigate, Link } from 'react-router-dom'
import ServiceHero from './ServiceHero'
import ServiceDescription from './ServiceDescription'
import ServiceFaq from './ServiceFaq'
import SoftwareSolutionsPage from './SoftwareSolutionsPage'
import FinancialServicesPage from './FinancialServicesPage'
import { services } from '@/data/content'

export default function Services() {
  const { serviceId } = useParams()

  if (!serviceId) {
    return <Navigate to="/services/software-solutions" replace />
  }

  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-sora font-bold text-3xl text-primary">Service Not Found</h1>
        <p className="text-muted">The service you are looking for does not exist.</p>
        <Link to="/services/software-solutions" className="text-accent hover:underline font-medium">
          Browse All Services →
        </Link>
      </div>
    )
  }

  if (serviceId === 'software-solutions') {
    return <SoftwareSolutionsPage service={service} services={services} />
  }

  if (serviceId === 'financial-services') {
    return <FinancialServicesPage service={service} services={services} />
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceDescription service={service} />
      <ServiceFaq service={service} />

      {/* Related services nav */}
      <section
        className="py-12 border-t border-gray-100 bg-white"
        aria-label="Other services"
      >
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-xs font-sora font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Other Services
          </p>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.id !== serviceId && !s.isCategoryLanding)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="text-sm font-sora font-medium border border-gray-200 rounded-lg px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
