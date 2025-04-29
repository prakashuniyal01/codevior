
import { Suspense, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ThreeCanvas from '@/components/three/ThreeCanvas'
import DataSphere from '@/components/three/models/DataSphere'
import { LoadingFallback } from '@/components/three/models/Fallbacks'
import { motion } from 'framer-motion'

const Home = () => {
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const scrollToServices = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <>
      {/* Hero Section with 3D Background */}
      <section className="min-h-screen relative flex items-center">
        <div className="absolute inset-0 hero-gradient"></div>
        <ThreeCanvas>
          <Suspense fallback={<LoadingFallback />}>
            <DataSphere position={[0, 0, 0]} radius={4} count={3000} interactive={false} />
          </Suspense>
        </ThreeCanvas>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="headline mb-6 gradient-text font-bold">
              Transforming Ideas with AI & Software Innovation
            </h1>
            <p className="subheadline mb-8">
              We craft intelligent solutions that leverage cutting-edge AI, machine learning, and software development to solve complex business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate('/contact')}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToServices}>
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section ref={scrollRef} className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering innovation through a comprehensive suite of AI, ML, and software development services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Development */}
            <motion.div 
              className="p-6 glass rounded-lg transition-all"
              whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(110, 89, 165, 0.3)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v8"></path><path d="M12 18v4"></path><path d="M4.93 10.93l6.37 6.37"></path><path d="M12.7 6.7l6.37 6.37"></path><path d="M21.07 10.93l-6.37 6.37"></path><path d="M3 10a9 9 0 0 1 9-9"></path><path d="M3 22a9 9 0 0 0 9-9"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Development</h3>
              <p className="text-muted-foreground mb-4">
                Custom AI solutions designed to automate processes, gain insights, and enhance decision-making capabilities.
              </p>
              <Button variant="link" className="p-0" onClick={() => navigate('/services/ai-development')}>
                Learn more
              </Button>
            </motion.div>
            
            {/* ML Solutions */}
            <motion.div 
              className="p-6 glass rounded-lg transition-all"
              whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(110, 89, 165, 0.3)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><path d="M11 18H8a2 2 0 0 1-2-2V9"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ML Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Advanced machine learning models that learn, adapt, and predict to unlock the value hidden in your data.
              </p>
              <Button variant="link" className="p-0" onClick={() => navigate('/services/ml-solutions')}>
                Learn more
              </Button>
            </motion.div>
            
            {/* Software Development */}
            <motion.div 
              className="p-6 glass rounded-lg transition-all"
              whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(110, 89, 165, 0.3)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Software Development</h3>
              <p className="text-muted-foreground mb-4">
                End-to-end software solutions that are scalable, secure, and designed for exceptional user experiences.
              </p>
              <Button variant="link" className="p-0" onClick={() => navigate('/services/software-development')}>
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Why Choose Codevior
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with innovative thinking to deliver solutions that drive real business value.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Cutting-edge Technology</h3>
                    <p className="text-muted-foreground">
                      We stay at the forefront of technological advancements to bring the most innovative solutions to our clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our team of seasoned professionals brings depth of knowledge and creative problem-solving to every project.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      We develop custom solutions that precisely meet your business needs and challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="aspect-square w-full h-full rounded-lg overflow-hidden">
                <ThreeCanvas>
                  <Suspense fallback={<LoadingFallback />}>
                    <DataSphere position={[0, 0, 0]} radius={3} count={2000} color="#0EA5E9" interactive={false} />
                  </Suspense>
                </ThreeCanvas>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
    </>
  )
}

export default Home
