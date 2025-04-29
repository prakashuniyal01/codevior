
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const CtaSection = () => {
  const navigate = useNavigate()
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="glass rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our AI, ML, and software development expertise can help your business grow.
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
