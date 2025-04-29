
import { Network, GitBranch, Code, Bitcoin } from 'lucide-react'
import ServiceCard from './ServiceCard'

const ServicesSection = () => {
  return (
    <section id="services-section" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering innovation through a comprehensive suite of AI, ML, software development, and trading bot services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="AI Development"
            description="Custom AI solutions designed to automate processes, gain insights, and enhance decision-making capabilities."
            icon={Network}
            route="/services/ai-development"
            delay={0}
          />
          
          <ServiceCard 
            title="ML Solutions"
            description="Advanced machine learning models that learn, adapt, and predict to unlock the value hidden in your data."
            icon={GitBranch}
            route="/services/ai-development"
            delay={0.1}
          />
          
          <ServiceCard 
            title="Software Development"
            description="End-to-end software solutions that are scalable, secure, and designed for exceptional user experiences."
            icon={Code}
            route="/services/software-development"
            delay={0.2}
          />
          
          <ServiceCard 
            title="Trading Bots"
            description="Automated cryptocurrency trading solutions that execute strategies with precision 24/7 across multiple exchanges."
            icon={Bitcoin}
            route="/services/trading-bots"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
