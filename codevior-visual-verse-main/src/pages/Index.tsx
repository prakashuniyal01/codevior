
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebGLAnimation from '@/components/WebGLAnimation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Brain, Bot, Database, MoveRight } from 'lucide-react';

// Animation helper
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideUp');
        entry.target.classList.remove('opacity-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
};

// Services data
const services = [
  {
    title: "Custom Software Development",
    description: "Tailor-made software solutions designed to address your specific business needs and challenges.",
    icon: <Code className="h-10 w-10" />,
    link: "/services"
  },
  {
    title: "AI Solutions",
    description: "Leverage cutting-edge artificial intelligence to transform your business operations and decision-making.",
    icon: <Brain className="h-10 w-10" />,
    link: "/services"
  },
  {
    title: "Bot Development",
    description: "Automated solutions for Telegram, Discord, WhatsApp and other platforms to enhance customer engagement.",
    icon: <Bot className="h-10 w-10" />,
    link: "/services"
  },
  {
    title: "DevOps & Cloud Solutions",
    description: "Optimize your development workflow and infrastructure with our comprehensive cloud solutions.",
    icon: <Database className="h-10 w-10" />,
    link: "/services"
  }
];

// Portfolio projects
const portfolioItems = [
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI Solutions",
    imageUrl: "https://via.placeholder.com/400x300"
  },
  {
    title: "Crypto Trading Bot",
    category: "Crypto & Blockchain",
    imageUrl: "https://via.placeholder.com/400x300"
  },
  {
    title: "Enterprise Resource Planning System",
    category: "Custom Software",
    imageUrl: "https://via.placeholder.com/400x300"
  },
];

export default function Index() {
  useEffect(() => {
    animateOnScroll();
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <WebGLAnimation />
        <div className="container mx-auto px-4 z-10 pt-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              <span className="gradient-text">Innovating Tomorrow,</span> 
              <br />Building Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn opacity-80">
              We craft custom software and AI solutions that transform businesses and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title animate-on-scroll opacity-0">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-on-scroll opacity-0">
            We provide a wide range of services tailored to meet your business needs and technological challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 animate-on-scroll opacity-0 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="link" asChild className="p-0">
                <Link to={service.link} className="flex items-center">
                  Learn More <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll opacity-0">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title animate-on-scroll opacity-0">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-on-scroll opacity-0">
              Explore some of our best work and see how we've helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="animate-on-scroll opacity-0 group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" className="text-white border-white">View Project</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll opacity-0">
            <Button size="lg" asChild>
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 glass-card">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8">
              Let's collaborate to build innovative solutions that drive your business forward. Our team is ready to bring your vision to life.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
