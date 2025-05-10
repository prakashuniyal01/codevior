
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Brain, 
  Database, 
  Bot, 
  Globe, 
  Smartphone, 
  Layers, 
  Cloud,
  Box 
} from 'lucide-react';

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

const servicesData = [
  {
    id: "software-dev",
    icon: <Code className="h-12 w-12" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your business needs.",
    features: ["Enterprise Resource Planning (ERP)", "Customer Relationship Management (CRM)", "Software as a Service (SaaS)", "API Development & Integration"],
    useCases: ["Business process automation", "Workflow optimization", "Legacy system modernization"],
    technologies: ["Python", "Django", "Node.js", "React", "Angular"]
  },
  {
    id: "ai-solutions",
    icon: <Brain className="h-12 w-12" />,
    title: "AI Solutions",
    description: "Leverage the power of artificial intelligence to transform your business.",
    features: ["Agentic AI Systems", "Natural Language Processing", "Recommendation Engines", "Predictive Analytics"],
    useCases: ["Customer behavior prediction", "Automated content generation", "Intelligent chatbots"],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain"]
  },
  {
    id: "machine-learning",
    icon: <Box className="h-12 w-12" />,
    title: "Machine Learning Projects",
    description: "Data-driven machine learning solutions for complex business problems.",
    features: ["Computer Vision", "Data Mining & Analysis", "Anomaly Detection", "Optimization Algorithms"],
    useCases: ["Image and video analysis", "Fraud detection", "Process optimization"],
    technologies: ["Scikit-learn", "Pandas", "NumPy", "YOLO", "Keras"]
  },
  {
    id: "blockchain",
    icon: <Layers className="h-12 w-12" />,
    title: "NFT & Blockchain Apps",
    description: "Decentralized applications and NFT solutions for the Web3 ecosystem.",
    features: ["Smart Contract Development", "NFT Marketplaces", "DeFi Applications", "Token Development"],
    useCases: ["Digital asset ownership", "Decentralized finance", "Supply chain verification"],
    technologies: ["Solidity", "Ethereum", "Binance Smart Chain", "IPFS", "Web3.js"]
  },
  {
    id: "crypto-bots",
    icon: <Bot className="h-12 w-12" />,
    title: "Crypto Trading Bots",
    description: "Automated trading solutions for cryptocurrency markets.",
    features: ["Algorithmic Trading", "Market Analysis", "Arbitrage Bots", "Portfolio Management"],
    useCases: ["24/7 automated trading", "Market trend analysis", "Risk management"],
    technologies: ["Python", "Node.js", "Exchange APIs", "WebSockets", "Data Analysis Tools"]
  },
  {
    id: "web-mobile",
    icon: <Smartphone className="h-12 w-12" />,
    title: "Web & Mobile App Development",
    description: "Cross-platform applications that deliver exceptional user experiences.",
    features: ["Cross-Platform Development", "Progressive Web Apps", "Responsive Design", "E-commerce Solutions"],
    useCases: ["Business mobile applications", "E-commerce platforms", "Enterprise portals"],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "React", "Next.js"]
  },
  {
    id: "bot-dev",
    icon: <Bot className="h-12 w-12" />,
    title: "Bot Development",
    description: "Automated solutions for messaging and social platforms.",
    features: ["Telegram Bots", "Discord Bots", "WhatsApp Bots", "Custom Automation Bots"],
    useCases: ["Customer support automation", "Community management", "Sales and marketing"],
    technologies: ["Node.js", "Python", "Bot APIs", "NLP", "Cloud Functions"]
  },
  {
    id: "pwa-dev",
    icon: <Globe className="h-12 w-12" />,
    title: "PWA Development",
    description: "Progressive Web Applications that offer native-like experiences.",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Fast Loading"],
    useCases: ["Mobile-friendly web applications", "Offline-capable tools", "Content platforms"],
    technologies: ["Service Workers", "Web Manifest", "IndexedDB", "Push API", "React"]
  },
  {
    id: "devops",
    icon: <Cloud className="h-12 w-12" />,
    title: "DevOps & Cloud Solutions",
    description: "Streamline your development and deployment processes.",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Cloud Migration", "Containerization"],
    useCases: ["Development workflow optimization", "Cloud infrastructure management", "Automated deployment"],
    technologies: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "GitHub Actions"]
  },
];

export default function Services() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl opacity-80 mb-8">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="animate-on-scroll opacity-0 bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc pl-5 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="mb-1">{feature}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mb-2">Use Cases</h3>
                <ul className="list-disc pl-5 mb-4">
                  {service.useCases.map((useCase, i) => (
                    <li key={i} className="mb-1">{useCase}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="bg-muted px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button asChild className="w-full">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 glass-card max-w-4xl mx-auto">
            <div className="text-center animate-on-scroll opacity-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to discuss your specific requirements and develop a tailored solution for your business needs.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
