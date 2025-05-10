
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Award, Target, CheckCircle2, Lightbulb, Code, Heart } from 'lucide-react';

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

// Team members data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Tech visionary with 15+ years of experience in software development and AI solutions.",
    imageUrl: "https://via.placeholder.com/300x300"
  },
  {
    name: "Sarah Lee",
    role: "CTO",
    bio: "AI and machine learning expert with a Ph.D. in Computer Science from MIT.",
    imageUrl: "https://via.placeholder.com/300x300"
  },
  {
    name: "Michael Chen",
    role: "Head of Software Development",
    bio: "Full-stack developer with expertise in building scalable enterprise solutions.",
    imageUrl: "https://via.placeholder.com/300x300"
  },
  {
    name: "Priya Sharma",
    role: "AI Solutions Architect",
    bio: "Specialist in natural language processing and computer vision applications.",
    imageUrl: "https://via.placeholder.com/300x300"
  }
];

// Company milestones
const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "CodeVior was established with a vision to create innovative software solutions."
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a custom ERP solution."
  },
  {
    year: "2020",
    title: "AI Division Launch",
    description: "Expanded our services to include specialized AI and machine learning solutions."
  },
  {
    year: "2021",
    title: "Blockchain Integration",
    description: "Added blockchain expertise to our portfolio with crypto and NFT solutions."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded our client base internationally and grew the team to 50+ professionals."
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for our cutting-edge AI solutions in the tech industry."
  },
];

export default function About() {
  useEffect(() => {
    animateOnScroll();
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">CodeVior</span>
            </h1>
            <p className="text-xl opacity-80 mb-8">
              Innovating Tomorrow, Building Today
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="section-title mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                At CodeVior, our mission is to empower businesses through innovative software and AI solutions that drive growth, efficiency, and competitive advantage in the digital landscape.
              </p>
              <p className="text-lg mb-6">
                We believe in creating technology that not only solves current challenges but anticipates future needs, positioning our clients at the forefront of their industries.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-lg">Excellence in every line of code</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-lg">Client-centric approach</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-lg">Continuous innovation</span>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <h2 className="section-title mb-6">Our Vision</h2>
              <p className="text-lg mb-6">
                We envision a future where technology enhances human potential, where AI and software solutions work seamlessly together to create more efficient, sustainable, and prosperous businesses.
              </p>
              <p className="text-lg mb-6">
                CodeVior aims to be at the forefront of this technological revolution, setting new standards for innovation, quality, and client satisfaction in the software development industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="flex flex-col items-center p-4">
                    <Target className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-semibold text-center">Strategic Innovation</h3>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="flex flex-col items-center p-4">
                    <Lightbulb className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-semibold text-center">Creative Solutions</h3>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="flex flex-col items-center p-4">
                    <Code className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-semibold text-center">Technical Excellence</h3>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="flex flex-col items-center p-4">
                    <Heart className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-semibold text-center">Client Success</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-on-scroll opacity-0">Our Team</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-on-scroll opacity-0">
              Meet the talented professionals behind CodeVior's innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="animate-on-scroll opacity-0">
                <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Company Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-on-scroll opacity-0">Our Journey</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-on-scroll opacity-0">
              The evolution of CodeVior from a startup to an innovative technology leader
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row animate-on-scroll opacity-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className="md:w-1/2"></div>
                  
                  <div className="relative flex items-center justify-center md:w-0">
                    <div className="h-8 w-8 rounded-full bg-primary z-10 flex items-center justify-center">
                      <span className="text-xs text-white font-semibold">{milestone.year.slice(2)}</span>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 p-4 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                      <span className="text-primary font-semibold">{milestone.year}</span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 glass-card max-w-4xl mx-auto">
            <div className="text-center animate-on-scroll opacity-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Partner with CodeVior to transform your business with innovative software and AI solutions.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
