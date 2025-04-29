
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ThreeCanvas from '@/components/three/ThreeCanvas'
import DataSphere from '@/components/three/models/DataSphere'
import { LoadingFallback } from '@/components/three/models/Fallbacks'
import { motion } from 'framer-motion'

const Services = () => {
  const navigate = useNavigate()
  
  const services = [
    {
      id: 'ai-development',
      title: 'AI Development',
      description: 'Custom AI solutions that transform how businesses operate, make decisions, and interact with their customers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v8"></path><path d="M12 18v4"></path><path d="M4.93 10.93l6.37 6.37"></path><path d="M12.7 6.7l6.37 6.37"></path><path d="M21.07 10.93l-6.37 6.37"></path><path d="M3 10a9 9 0 0 1 9-9"></path><path d="M3 22a9 9 0 0 0 9-9"></path></svg>
      ),
      capabilities: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Conversational AI & Chatbots',
        'Recommendation Systems',
        'Anomaly Detection'
      ],
      color: '#6E59A5'
    },
    {
      id: 'ml-solutions',
      title: 'ML Solutions',
      description: 'Advanced machine learning models that extract insights, identify patterns, and make predictions from your data.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><path d="M11 18H8a2 2 0 0 1-2-2V9"></path></svg>
      ),
      capabilities: [
        'Supervised & Unsupervised Learning',
        'Deep Learning Models',
        'Reinforcement Learning',
        'Feature Engineering',
        'Model Optimization & Tuning',
        'AutoML Implementation'
      ],
      color: '#9b87f5'
    },
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'End-to-end software solutions tailored to your business needs, from web applications to enterprise systems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
      ),
      capabilities: [
        'Web Application Development',
        'Mobile App Development',
        'API Design & Development',
        'Cloud Solutions',
        'DevOps & CI/CD',
        'Legacy System Modernization'
      ],
      color: '#0EA5E9'
    }
  ]
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="headline mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="subheadline mb-8">
              Innovative solutions powered by AI, machine learning, and software expertise to drive your business forward.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className="relative">
                {/* Service Background */}
                <div className="absolute inset-0 opacity-5" style={{ 
                  background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`,
                  transform: `translateY(-${index * 20}%)` 
                }}></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                      {service.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button onClick={() => navigate(`/services/${service.id}`)}>
                      Learn More
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    className="flex-1 relative h-80 lg:h-96"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <ThreeCanvas>
                      <Suspense fallback={<LoadingFallback />}>
                        <DataSphere 
                          position={[0, 0, 0]} 
                          radius={3} 
                          count={2000} 
                          color={service.color} 
                          interactive={false} 
                        />
                      </Suspense>
                    </ThreeCanvas>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground">
              We follow a structured yet flexible approach to deliver solutions that meet your specific needs and exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Discovery</h3>
              <p className="text-muted-foreground">
                We dive deep into understanding your business, goals, challenges, and requirements to establish a solid foundation for the project.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Requirement Analysis</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Stakeholder Interviews</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Market Research</span>
                </li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Planning</h3>
              <p className="text-muted-foreground">
                We create a comprehensive roadmap for the project, outlining objectives, timelines, resources, and technical approaches.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Solution Architecture</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Technology Selection</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Project Roadmap</span>
                </li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Development</h3>
              <p className="text-muted-foreground">
                We bring your solution to life through iterative development cycles, focusing on quality, performance, and security.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Agile Development</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Regular Progress Updates</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Continuous Integration</span>
                </li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Delivery</h3>
              <p className="text-muted-foreground">
                We ensure a smooth deployment and provide ongoing support and optimization to maximize the value of your solution.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Testing & QA</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Deployment</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-sm">Support & Maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Our solutions have empowered businesses across various sectors to innovate and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m2 9 3-3 3 3"></path><path d="M13 18h7a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-5"></path><path d="M20 8V5c0-1.105-.895-2-2-2h-6a2 2 0 0 0-2 2v3"></path><path d="m8 9 3-3 3 3"></path><rect width="18" height="12" x="3" y="11" rx="2"></rect></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-muted-foreground">
                AI-powered diagnostic tools, patient care optimization, and healthcare management systems to improve outcomes and efficiency.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M6 17h4v5l6-10h-4V2L6 12h4v5Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Energy</h3>
              <p className="text-muted-foreground">
                Smart grid management, energy consumption optimization, and predictive maintenance solutions for enhanced reliability and sustainability.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 16h4V2H3v14h4"></path><path d="m10 20 4-9"></path><path d="m14 20-4-9"></path><path d="M10 11h4"></path><rect width="22" height="4" x="1" y="16" rx="1"></rect></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Retail</h3>
              <p className="text-muted-foreground">
                Personalized shopping experiences, inventory management, and customer analytics to drive sales and customer satisfaction.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Finance</h3>
              <p className="text-muted-foreground">
                Fraud detection, algorithmic trading, risk assessment, and customer service automation for financial institutions.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 11c5.333 0 5.333-8 0-8"></path><path d="M6 11h8"></path><path d="M6 15h8"></path><path d="M9 19h5"></path><path d="M10 19v-8"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-muted-foreground">
                Predictive maintenance, quality control, supply chain optimization, and operational efficiency improvements.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Marketing</h3>
              <p className="text-muted-foreground">
                Customer segmentation, campaign optimization, sentiment analysis, and personalized content delivery for better engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Innovate with Codevior?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our AI, ML, and software development expertise can transform your business.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
