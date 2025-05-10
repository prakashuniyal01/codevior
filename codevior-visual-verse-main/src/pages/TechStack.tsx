
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

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

// Tech stack data organized by categories
const techStackData = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "Python", icon: "https://via.placeholder.com/80x80", description: "Our primary language for backend development, data science, and AI solutions." },
      { name: "JavaScript", icon: "https://via.placeholder.com/80x80", description: "Used for both frontend and backend development with modern frameworks." },
      { name: "TypeScript", icon: "https://via.placeholder.com/80x80", description: "Adds static typing to JavaScript for more robust code." },
      { name: "Solidity", icon: "https://via.placeholder.com/80x80", description: "For blockchain and smart contract development." },
      { name: "Go", icon: "https://via.placeholder.com/80x80", description: "Used for high-performance microservices and concurrent systems." },
      { name: "Rust", icon: "https://via.placeholder.com/80x80", description: "For system-level programming requiring high performance and safety." },
    ]
  },
  {
    category: "Frontend Technologies",
    technologies: [
      { name: "React", icon: "https://via.placeholder.com/80x80", description: "Our preferred library for building interactive user interfaces." },
      { name: "Angular", icon: "https://via.placeholder.com/80x80", description: "For large-scale enterprise applications requiring robust architecture." },
      { name: "Vue.js", icon: "https://via.placeholder.com/80x80", description: "Lightweight framework for progressive web applications." },
      { name: "Next.js", icon: "https://via.placeholder.com/80x80", description: "React framework for server-rendered applications." },
      { name: "Tailwind CSS", icon: "https://via.placeholder.com/80x80", description: "Utility-first CSS framework for rapid UI development." },
      { name: "Three.js", icon: "https://via.placeholder.com/80x80", description: "Library for creating 3D graphics in the browser with WebGL." },
    ]
  },
  {
    category: "Backend & Server",
    technologies: [
      { name: "Node.js", icon: "https://via.placeholder.com/80x80", description: "JavaScript runtime for building scalable network applications." },
      { name: "Django", icon: "https://via.placeholder.com/80x80", description: "High-level Python web framework for rapid development." },
      { name: "Flask", icon: "https://via.placeholder.com/80x80", description: "Lightweight Python framework for microservices and APIs." },
      { name: "Express.js", icon: "https://via.placeholder.com/80x80", description: "Fast, unopinionated web framework for Node.js." },
      { name: "FastAPI", icon: "https://via.placeholder.com/80x80", description: "Modern Python framework for building APIs with automatic validation." },
      { name: "GraphQL", icon: "https://via.placeholder.com/80x80", description: "Query language for APIs that provides a more efficient alternative to REST." },
    ]
  },
  {
    category: "Mobile Development",
    technologies: [
      { name: "Flutter", icon: "https://via.placeholder.com/80x80", description: "Google's UI toolkit for building natively compiled apps." },
      { name: "React Native", icon: "https://via.placeholder.com/80x80", description: "Framework for building native apps using React." },
      { name: "Swift", icon: "https://via.placeholder.com/80x80", description: "Apple's programming language for iOS and macOS apps." },
      { name: "Kotlin", icon: "https://via.placeholder.com/80x80", description: "Modern language for Android app development." },
    ]
  },
  {
    category: "Artificial Intelligence & ML",
    technologies: [
      { name: "TensorFlow", icon: "https://via.placeholder.com/80x80", description: "Open-source library for machine learning and AI." },
      { name: "PyTorch", icon: "https://via.placeholder.com/80x80", description: "Deep learning framework with strong GPU acceleration." },
      { name: "scikit-learn", icon: "https://via.placeholder.com/80x80", description: "Machine learning library for classical algorithms." },
      { name: "Hugging Face", icon: "https://via.placeholder.com/80x80", description: "Library providing state-of-the-art NLP models." },
      { name: "LangChain", icon: "https://via.placeholder.com/80x80", description: "Framework for developing applications powered by language models." },
      { name: "NLTK", icon: "https://via.placeholder.com/80x80", description: "Natural Language Toolkit for text processing." },
    ]
  },
  {
    category: "Blockchain & Web3",
    technologies: [
      { name: "Ethereum", icon: "https://via.placeholder.com/80x80", description: "Decentralized platform for smart contracts and DApps." },
      { name: "Web3.js", icon: "https://via.placeholder.com/80x80", description: "Collection of libraries for interacting with Ethereum nodes." },
      { name: "Hardhat", icon: "https://via.placeholder.com/80x80", description: "Development environment for Ethereum software." },
      { name: "IPFS", icon: "https://via.placeholder.com/80x80", description: "Distributed system for storing and accessing files." },
    ]
  },
  {
    category: "Databases & Storage",
    technologies: [
      { name: "PostgreSQL", icon: "https://via.placeholder.com/80x80", description: "Powerful, open-source object-relational database." },
      { name: "MongoDB", icon: "https://via.placeholder.com/80x80", description: "NoSQL database for document-oriented storage." },
      { name: "Redis", icon: "https://via.placeholder.com/80x80", description: "In-memory data structure store for caching and messaging." },
      { name: "Firebase", icon: "https://via.placeholder.com/80x80", description: "Platform for web and mobile app development." },
      { name: "Amazon S3", icon: "https://via.placeholder.com/80x80", description: "Object storage service for cloud storage solutions." },
    ]
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "Docker", icon: "https://via.placeholder.com/80x80", description: "Platform for developing, shipping, and running applications in containers." },
      { name: "Kubernetes", icon: "https://via.placeholder.com/80x80", description: "Container orchestration for automated deployment and scaling." },
      { name: "AWS", icon: "https://via.placeholder.com/80x80", description: "Comprehensive cloud computing platform." },
      { name: "Google Cloud", icon: "https://via.placeholder.com/80x80", description: "Suite of cloud computing services by Google." },
      { name: "Azure", icon: "https://via.placeholder.com/80x80", description: "Microsoft's cloud computing service." },
      { name: "GitHub Actions", icon: "https://via.placeholder.com/80x80", description: "CI/CD automation directly integrated with GitHub repositories." },
    ]
  },
];

export default function TechStack() {
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
              Our <span className="gradient-text">Tech Stack</span>
            </h1>
            <p className="text-xl opacity-80 mb-8">
              Cutting-edge technologies powering our innovative solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Categories */}
      {techStackData.map((category, index) => (
        <section key={index} className={`py-12 md:py-16 ${index % 2 === 1 ? 'bg-muted/40' : ''}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-on-scroll opacity-0">
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.technologies.map((tech, techIndex) => (
                <Card 
                  key={techIndex} 
                  className="p-6 animate-on-scroll opacity-0 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-12 h-12 object-contain mr-4"
                    />
                    <h3 className="text-xl font-semibold">{tech.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      <Footer />
    </div>
  );
}
