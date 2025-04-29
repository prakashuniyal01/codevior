
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Server, Database, LayoutDashboard, Monitor, Phone } from 'lucide-react';
import ThreeDSection from '@/components/three/ThreeDSection';
import DataSphere from '@/components/three/models/DataSphere';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
};

const DevServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("web");
  
  const services: ServiceType[] = [
    {
      id: "web",
      title: "Web Development",
      description: "Custom web applications designed for performance, scalability, and exceptional user experience.",
      icon: <Code size={24} />,
      benefits: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "Admin Dashboards & Portals",
        "Web Optimization & Performance"
      ],
      color: '#0EA5E9'
    },
    {
      id: "mobile",
      title: "Mobile Development",
      description: "Cross-platform or native mobile applications that deliver seamless experiences on iOS and Android.",
      icon: <Phone size={24} />,
      benefits: [
        "React Native Applications",
        "iOS Native Development",
        "Android Native Development",
        "Mobile UI/UX Design",
        "App Store Optimization",
        "Mobile App Testing & QA"
      ],
      color: '#8B5CF6'
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Robust and scalable server-side solutions that power your applications.",
      icon: <Server size={24} />,
      benefits: [
        "API Development & Integration",
        "Microservices Architecture",
        "Cloud-based Solutions",
        "Serverless Functions",
        "Performance Optimization",
        "Security Implementation"
      ],
      color: '#6E59A5'
    },
    {
      id: "database",
      title: "Database Solutions",
      description: "Optimized database design and management for efficient data storage and retrieval.",
      icon: <Database size={24} />,
      benefits: [
        "Database Design & Modeling",
        "SQL & NoSQL Solutions",
        "Data Migration & Integration",
        "Performance Tuning",
        "Backup & Recovery Strategies",
        "Database Security"
      ],
      color: '#9b87f5'
    },
    {
      id: "ui",
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging interfaces.",
      icon: <LayoutDashboard size={24} />,
      benefits: [
        "Wireframing & Prototyping",
        "Responsive Design",
        "UI Component Systems",
        "Usability Testing",
        "Interaction Design",
        "Design Systems Creation"
      ],
      color: '#F97316'
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
        title="Software Development"
        description="End-to-end software solutions tailored to your business needs, from web applications to enterprise systems."
        background="gradient"
      >
        <DataSphere position={[0, 0, 0]} radius={3.5} count={2500} color="#0EA5E9" interactive={false} />
      </ThreeDSection>
      
      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-5 py-3 rounded-full transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-primary text-white'
                    : 'bg-secondary/10 hover:bg-secondary/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  {service.icon}
                  <span>{service.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={activeTab === service.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.5 }}
              className={`${activeTab === service.id ? 'block' : 'hidden'}`}
            >
              <div className="glass p-8 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    <Button className="mt-8" onClick={() => navigate('/contact')}>
                      Discuss Your Project
                    </Button>
                  </div>
                  <div className="lg:w-1/2 relative h-60 sm:h-80 lg:h-auto">
                    <div className="absolute inset-0 opacity-10" style={{ 
                      background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`
                    }}></div>
                    <div className="h-full flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-9xl text-primary/20 flex items-center justify-center"
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-12">
            Our Development Process
          </h2>
          
          <div className="relative">
            {/* Process timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block"></div>
            
            <motion.div 
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Process Step 1 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">1. Discovery & Planning</h3>
                    <p className="text-muted-foreground">We gather requirements, analyze your business needs, and create a detailed development plan.</p>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Requirements Analysis</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Technical Specification</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Timeline & Resource Planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Process Step 2 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center md:justify-end">
                          <span>Wireframing & Prototyping</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>UI/UX Design</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Design Review & Approval</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-0 md:order-2">
                    <h3 className="text-2xl font-bold mb-2">2. Design</h3>
                    <p className="text-muted-foreground">We create intuitive interfaces and user experiences that align with your brand and business goals.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Process Step 3 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">3. Development</h3>
                    <p className="text-muted-foreground">Our team of expert developers builds your solution using cutting-edge technologies and best practices.</p>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Iterative Development</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Code Reviews & Quality Assurance</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Regular Progress Updates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Process Step 4 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center md:justify-end">
                          <span>Functional Testing</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Performance Testing</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Security Testing</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-0 md:order-2">
                    <h3 className="text-2xl font-bold mb-2">4. Testing & QA</h3>
                    <p className="text-muted-foreground">Comprehensive testing to ensure your solution is bug-free, secure, and performs optimally.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Process Step 5 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">5. Deployment & Support</h3>
                    <p className="text-muted-foreground">Smooth deployment to production environments and continuous support to ensure long-term success.</p>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    5
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Deployment Strategy</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Training & Documentation</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Ongoing Maintenance & Support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="glass p-6 rounded-xl">
              <AccordionItem value="item-1" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  What technologies do you use for development?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We leverage a wide range of modern technologies tailored to each project's unique requirements. For front-end development, we use React, Vue.js, Angular, and Next.js. On the back-end, we work with Node.js, Python, Java, and .NET. For mobile applications, we implement React Native, Flutter, Swift, and Kotlin. Our database solutions include MongoDB, PostgreSQL, MySQL, and Firebase.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How long does it take to develop a typical web application?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The timeline varies depending on the project's complexity, scope, and requirements. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months or more. During our initial discovery phase, we'll provide you with a detailed timeline based on your specific project requirements.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  Do you offer ongoing maintenance and support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we provide comprehensive maintenance and support services to ensure your application remains secure, up-to-date, and performs optimally. We offer various support packages tailored to your needs, from basic monitoring and updates to 24/7 dedicated support and continuous improvement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How do you ensure the security of applications?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Security is built into our development process from the beginning. We implement industry best practices including secure coding standards, regular security audits, penetration testing, and vulnerability assessments. We also implement appropriate authentication, authorization, data encryption, and other security measures tailored to your application's specific requirements.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  Can you integrate my application with existing systems?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We specialize in creating seamless integrations between new applications and existing systems through APIs, webhooks, and other integration methods. Whether you need to connect with CRM systems, payment gateways, ERP solutions, or custom legacy systems, we ensure smooth data flow and functionality across your entire technology ecosystem.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Build Your Next Software Solution?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our software development expertise can help bring your ideas to life.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevServices;
