
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ThreeCanvas from '@/components/three/ThreeCanvas'
import DataSphere from '@/components/three/models/DataSphere'
import { LoadingFallback } from '@/components/three/models/Fallbacks'

const About = () => {
  const navigate = useNavigate()
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="headline mb-6">
                About <span className="gradient-text">Codevior</span>
              </h1>
              <p className="subheadline mb-6">
                We're a team of innovators passionate about creating intelligent software solutions that drive business success.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded on the belief that technology should empower businesses, we combine expertise in AI, machine learning, and software development to help our clients navigate the digital landscape.
              </p>
              <Button onClick={() => navigate('/team')}>
                Meet Our Team
              </Button>
            </div>
            
            <div className="flex-1 relative">
              <div className="aspect-square w-full max-w-lg mx-auto">
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
      
      {/* Our Mission & Vision */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To empower businesses with innovative technology solutions that transform operations, enhance customer experiences, and drive growth in the digital age.
              </p>
              <p className="text-muted-foreground">
                We strive to be at the forefront of technological advancement, bringing the benefits of AI and machine learning to organizations of all sizes.
              </p>
            </div>
            
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                To be the leading provider of intelligent software solutions that help businesses harness the full potential of technology to solve complex challenges and create new opportunities.
              </p>
              <p className="text-muted-foreground">
                We envision a world where technology is accessible and beneficial to all, driving positive change across industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-16">
            Our Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  2018
                </span>
                <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
                <p className="text-muted-foreground">
                  Codevior was founded by a group of technology enthusiasts who shared a vision of making advanced technologies accessible to businesses of all sizes. Starting as a small team, we focused on software development projects that laid the foundation for our future growth.
                </p>
              </div>
              <div className="flex-1 glass rounded-lg p-6 h-64 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v8"></path><path d="M12 18v4"></path><path d="M4.93 10.93l6.37 6.37"></path><path d="M12.7 6.7l6.37 6.37"></path><path d="M21.07 10.93l-6.37 6.37"></path><path d="M3 10a9 9 0 0 1 9-9"></path><path d="M3 22a9 9 0 0 0 9-9"></path></svg>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  2020
                </span>
                <h3 className="text-2xl font-bold mb-4">Expanding into AI</h3>
                <p className="text-muted-foreground">
                  Recognizing the transformative potential of artificial intelligence, we expanded our services to include AI development. This strategic shift allowed us to offer more comprehensive solutions to our clients and position ourselves at the cutting edge of technology.
                </p>
              </div>
              <div className="flex-1 glass rounded-lg p-6 h-64 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><path d="M11 18H8a2 2 0 0 1-2-2V9"></path></svg>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  2022
                </span>
                <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                <p className="text-muted-foreground">
                  With a growing reputation for excellence, we extended our services to clients worldwide. Our diverse team expanded to include specialists from various technical backgrounds, enabling us to tackle more complex and varied projects across industries.
                </p>
              </div>
              <div className="flex-1 glass rounded-lg p-6 h-64 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  Present
                </span>
                <h3 className="text-2xl font-bold mb-4">Leading Innovation</h3>
                <p className="text-muted-foreground">
                  Today, Codevior stands as a leader in innovative technology solutions. We continue to push boundaries, combining AI, machine learning, and software development to create solutions that address the evolving needs of businesses in a rapidly changing digital landscape.
                </p>
              </div>
              <div className="flex-1 glass rounded-lg p-6 h-64 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            These principles guide our decisions, shape our culture, and reflect our commitment to excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path><path d="M12 19a7 7 0 0 0 7-7c0-2-1-4.5-3-6"></path><path d="M5 12c0 2.5 2 4.5 3 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creativity and forward-thinking to develop solutions that break new ground and deliver exceptional results.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality in everything we do, from code to customer service.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork, fostering an environment where diverse perspectives converge to create impactful solutions.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M2 15h10"></path><path d="m9 18 3-3-3-3"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We uphold the highest ethical standards, building trust through transparency, honesty, and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're looking to partner with us or join our team, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
              <Button variant="outline" onClick={() => navigate('/careers')}>
                Explore Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
