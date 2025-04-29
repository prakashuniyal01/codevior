
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ThreeDSection from '@/components/three/ThreeDSection';
import DataSphere from '@/components/three/models/DataSphere';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type TechItem = {
  name: string;
  description: string;
  icon: string | React.ReactNode;
  color: string;
  benefits: string[];
};

type TechCategory = {
  id: string;
  name: string;
  description: string;
  items: TechItem[];
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const categories: TechCategory[] = [
    {
      id: "frontend",
      name: "Frontend Technologies",
      description: "Modern frameworks and libraries for building responsive, interactive user interfaces",
      items: [
        {
          name: "React",
          description: "A JavaScript library for building user interfaces with a component-based architecture.",
          icon: "react.svg",
          color: '#61DAFB',
          benefits: ["Component-based architecture", "Virtual DOM for performance", "Rich ecosystem", "Declarative programming"]
        },
        {
          name: "Next.js",
          description: "React framework that enables server-side rendering and static site generation for React applications.",
          icon: "next.svg",
          color: '#000000',
          benefits: ["Server-side rendering", "Static site generation", "Automatic routing", "Code splitting"]
        },
        {
          name: "Tailwind CSS",
          description: "A utility-first CSS framework for rapidly building custom user interfaces.",
          icon: "tailwind.svg",
          color: '#38B2AC',
          benefits: ["Utility-first approach", "Responsive design", "Customizable", "Small bundle size"]
        },
        {
          name: "TypeScript",
          description: "A strongly typed programming language that builds on JavaScript, adding static type definitions.",
          icon: "typescript.svg",
          color: '#3178C6',
          benefits: ["Static typing", "Early error detection", "Better IDE support", "Improved code quality"]
        },
        {
          name: "Framer Motion",
          description: "A production-ready motion library for React that makes creating animations easy.",
          icon: "framer.svg",
          color: '#0055FF',
          benefits: ["Declarative animations", "Gesture recognition", "Layout animations", "Exit animations"]
        }
      ]
    },
    {
      id: "backend",
      name: "Backend Technologies",
      description: "Robust and scalable server-side technologies for building powerful APIs and services",
      items: [
        {
          name: "Node.js",
          description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
          icon: "node.svg",
          color: '#339933',
          benefits: ["Non-blocking I/O", "Same language as frontend", "Large package ecosystem", "High performance"]
        },
        {
          name: "Express",
          description: "Fast, unopinionated, minimalist web framework for Node.js.",
          icon: "express.svg",
          color: '#000000',
          benefits: ["Minimalist", "Middleware support", "Routing", "Template engines"]
        },
        {
          name: "PostgreSQL",
          description: "A powerful, open source object-relational database system with a strong reputation for reliability.",
          icon: "postgresql.svg",
          color: '#336791',
          benefits: ["ACID compliance", "JSON support", "Extensible", "Robust feature set"]
        },
        {
          name: "MongoDB",
          description: "A document-based, distributed database built for modern application developers and cloud computing.",
          icon: "mongodb.svg",
          color: '#47A248',
          benefits: ["Document-oriented", "Horizontal scaling", "Flexible schema", "High availability"]
        },
        {
          name: "GraphQL",
          description: "A query language for APIs and a runtime for executing those queries with your existing data.",
          icon: "graphql.svg",
          color: '#E10098',
          benefits: ["Precise data fetching", "Single endpoint", "Strong typing", "Introspective"]
        }
      ]
    },
    {
      id: "ai",
      name: "AI & ML Technologies",
      description: "Cutting-edge artificial intelligence and machine learning technologies for intelligent applications",
      items: [
        {
          name: "TensorFlow",
          description: "An end-to-end open source platform for machine learning.",
          icon: "tensorflow.svg",
          color: '#FF6F00',
          benefits: ["Flexible architecture", "Production-ready", "Hardware acceleration", "Visualization tools"]
        },
        {
          name: "PyTorch",
          description: "An open source machine learning framework that accelerates the path from research to production.",
          icon: "pytorch.svg",
          color: '#EE4C2C',
          benefits: ["Dynamic computation graphs", "Python integration", "Research-friendly", "GPU acceleration"]
        },
        {
          name: "OpenAI API",
          description: "A state-of-the-art API for leveraging OpenAI's advanced language models.",
          icon: "openai.svg",
          color: '#10a37f',
          benefits: ["Natural language processing", "Text generation", "Sentiment analysis", "Content classification"]
        },
        {
          name: "Scikit-learn",
          description: "Simple and efficient tools for predictive data analysis built on NumPy, SciPy, and matplotlib.",
          icon: "scikit.svg",
          color: '#F7931E',
          benefits: ["Simple API", "Comprehensive algorithms", "Interoperability", "Well-documented"]
        },
        {
          name: "Hugging Face",
          description: "A platform for state-of-the-art natural language processing models and tools.",
          icon: "huggingface.svg",
          color: '#FFD21E',
          benefits: ["Pre-trained models", "Easy fine-tuning", "Model sharing", "Pipeline abstraction"]
        }
      ]
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      description: "Tools and platforms for continuous integration, delivery, and cloud infrastructure management",
      items: [
        {
          name: "Docker",
          description: "A platform for developing, shipping, and running applications in containers.",
          icon: "docker.svg",
          color: '#2496ED',
          benefits: ["Containerization", "Consistent environments", "Isolation", "Efficiency"]
        },
        {
          name: "Kubernetes",
          description: "An open-source system for automating deployment, scaling, and management of containerized applications.",
          icon: "kubernetes.svg",
          color: '#326CE5',
          benefits: ["Container orchestration", "Automatic scaling", "Self-healing", "Service discovery"]
        },
        {
          name: "AWS",
          description: "A comprehensive and broadly adopted cloud platform offering over 200 fully featured services.",
          icon: "aws.svg",
          color: '#FF9900',
          benefits: ["Global infrastructure", "Security", "Scalability", "Extensive service catalog"]
        },
        {
          name: "GitHub Actions",
          description: "A CI/CD platform that automates your build, test, and deployment pipeline.",
          icon: "github.svg",
          color: '#181717',
          benefits: ["GitHub integration", "YAML-based workflow", "Reusable actions", "Matrix builds"]
        },
        {
          name: "Terraform",
          description: "An open-source infrastructure as code software tool that enables you to safely and predictably create, change, and improve infrastructure.",
          icon: "terraform.svg",
          color: '#7B42BC',
          benefits: ["Infrastructure as code", "Multi-cloud", "Declarative syntax", "Plan and apply workflow"]
        }
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <>
      <ThreeDSection
        title="Our Technology Stack"
        description="We leverage cutting-edge technologies to build robust, scalable, and innovative solutions."
        background="gradient"
      >
        <DataSphere position={[0, 0, 0]} radius={3.5} count={2500} color="#8B5CF6" interactive={false} />
      </ThreeDSection>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="frontend" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold gradient-text mb-4">{category.name}</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <motion.div 
                  ref={containerRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={category.id}
                >
                  {category.items.map((tech, index) => (
                    <motion.div
                      key={`${category.id}-${tech.name}`}
                      className="glass rounded-lg overflow-hidden hover:shadow-lg transition-all"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10, 
                        boxShadow: `0 15px 30px -5px ${tech.color}20`
                      }}
                    >
                      <div className="h-2" style={{ backgroundColor: tech.color }}></div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg" style={{ backgroundColor: `${tech.color}20` }}>
                            {typeof tech.icon === 'string' ? (
                              <span className="text-2xl" style={{ color: tech.color }}>{tech.name.charAt(0)}</span>
                            ) : (
                              tech.icon
                            )}
                          </div>
                          <h3 className="text-xl font-bold">{tech.name}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {tech.description}
                        </p>
                        <div className="border-t border-border/30 pt-4">
                          <h4 className="font-medium mb-2">Key Benefits:</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.benefits.map((benefit, idx) => (
                              <motion.span 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                              >
                                {benefit}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Tech Stack Diagram */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Technology Ecosystem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A visual representation of how our technologies work together to create comprehensive solutions
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Central Circle */}
            <motion.div 
              className="w-40 h-40 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-center mx-auto mb-8"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-bold gradient-text">Codevior</h3>
                <p className="text-sm text-muted-foreground">Technology Stack</p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {categories.map((category, idx) => (
                <motion.div
                  key={category.id}
                  className="glass p-6 rounded-lg text-center hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold mb-3">{category.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {category.items.slice(0, 3).map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        className="text-sm px-2 py-1 rounded-full bg-primary/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIdx * 0.1 }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                    {category.items.length > 3 && (
                      <span className="text-sm px-2 py-1 rounded-full bg-primary/10">
                        +{category.items.length - 3} more
                      </span>
                    )}
                  </div>
                  <button 
                    className="text-primary text-sm hover:underline"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute top-20 left-0 w-full h-full -z-10 hidden md:block" viewBox="0 0 800 400">
              <motion.path
                d="M400,60 L200,150"
                stroke="#9b87f5"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M400,60 L400,150"
                stroke="#9b87f5"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M400,60 L600,150"
                stroke="#9b87f5"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M400,60 L800,150"
                stroke="#9b87f5"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Development Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we combine these technologies to deliver exceptional results
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute h-full w-1 bg-primary/20 left-3 top-0 hidden sm:block"></div>
                
                <div className="space-y-16">
                  <div className="flex flex-col sm:flex-row relative">
                    <div className="sm:w-16 mb-4 sm:mb-0">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm relative z-10">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Technology Selection</h3>
                      <p className="text-muted-foreground mb-4">
                        We carefully select the most appropriate technologies for each project, considering factors like requirements, scalability, performance, and long-term maintainability.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Requirement Analysis</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Technology Evaluation</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">Architecture Planning</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row relative">
                    <div className="sm:w-16 mb-4 sm:mb-0">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm relative z-10">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Modern Frontend Development</h3>
                      <p className="text-muted-foreground mb-4">
                        We build responsive, interactive user interfaces using React and related technologies, with a focus on performance, accessibility, and user experience.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Component Architecture</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Responsive Design</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">State Management</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row relative">
                    <div className="sm:w-16 mb-4 sm:mb-0">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm relative z-10">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Robust Backend Implementation</h3>
                      <p className="text-muted-foreground mb-4">
                        We develop scalable, secure backend systems that efficiently handle data processing, API requests, and business logic.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">API Development</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Database Design</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">Authentication & Security</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row relative">
                    <div className="sm:w-16 mb-4 sm:mb-0">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm relative z-10">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">AI & ML Integration</h3>
                      <p className="text-muted-foreground mb-4">
                        When appropriate, we incorporate artificial intelligence and machine learning capabilities to add advanced functionality and intelligence to applications.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Model Selection</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Data Processing</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">Integration Architecture</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row relative">
                    <div className="sm:w-16 mb-4 sm:mb-0">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm relative z-10">
                        5
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">DevOps & Deployment</h3>
                      <p className="text-muted-foreground mb-4">
                        We implement CI/CD pipelines and cloud infrastructure to ensure smooth, reliable deployment and operation of your application.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">CI/CD Setup</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Infrastructure as Code</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">Monitoring & Logging</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Build with Our Technology Stack?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our technical expertise can help bring your ideas to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
