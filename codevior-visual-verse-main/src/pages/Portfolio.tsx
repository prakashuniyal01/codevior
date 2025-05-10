
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

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

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive dashboard using machine learning to provide predictive analytics for business intelligence.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "AI",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Crypto Trading Bot",
    description: "Automated cryptocurrency trading bot with advanced algorithms for market analysis and trade execution.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Crypto",
    technologies: ["Node.js", "MongoDB", "Trading APIs", "WebSockets"],
    link: "#"
  },
  {
    id: 3,
    title: "Enterprise Resource Planning System",
    description: "Custom ERP solution for manufacturing industry with integrated supply chain management.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Software",
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    title: "NFT Marketplace",
    description: "Blockchain-based platform for creating, buying, and selling digital collectibles with smart contracts.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "React", "IPFS"],
    link: "#"
  },
  {
    id: 5,
    title: "E-Commerce Mobile App",
    description: "Cross-platform mobile application for a retail business with integrated payment processing and inventory management.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Mobile",
    technologies: ["Flutter", "Firebase", "Node.js", "Stripe"],
    link: "#"
  },
  {
    id: 6,
    title: "Discord Community Bot",
    description: "Custom Discord bot with moderation, analytics, and automated engagement features for online communities.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Bot",
    technologies: ["Python", "Discord.py", "MongoDB", "Docker"],
    link: "#"
  },
  {
    id: 7,
    title: "Sentiment Analysis Tool",
    description: "NLP-based solution that analyzes customer feedback and social media mentions to gauge brand perception.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "AI",
    technologies: ["Python", "NLTK", "Transformers", "Flask"],
    link: "#"
  },
  {
    id: 8,
    title: "Supply Chain Management System",
    description: "Blockchain-powered platform for transparent and efficient supply chain tracking and management.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Blockchain",
    technologies: ["Hyperledger", "Node.js", "React", "Express"],
    link: "#"
  },
  {
    id: 9,
    title: "Customer Service Chatbot",
    description: "AI-powered chatbot that handles customer inquiries with natural language processing capabilities.",
    imageUrl: "https://via.placeholder.com/600x400",
    category: "Bot",
    technologies: ["Python", "TensorFlow", "NLP", "WebSockets"],
    link: "#"
  },
];

// Filter categories
const categories = ["All", "AI", "Crypto", "Software", "Blockchain", "Mobile", "Bot"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  useEffect(() => {
    animateOnScroll();
    window.scrollTo(0, 0);
    
    // Filter items based on selected category
    if (filter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl opacity-80 mb-8">
              Showcase of our successful projects and innovative solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="animate-on-scroll opacity-0 bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative group">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" className="text-white border-white">
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge>{item.category}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-muted px-2 py-1 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Next Project?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to create innovative solutions tailored to your business needs and goals.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="/contact">Start a Project</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
