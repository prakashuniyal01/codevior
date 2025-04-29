
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Network, Bot, LineChart, GitBranch, FileText } from 'lucide-react';
import ThreeDSection from '@/components/three/ThreeDSection';
import DataSphere from '@/components/three/models/DataSphere';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
};

const AIMLServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("nlp");
  
  const services: ServiceType[] = [
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Analyze, understand, and generate human language with advanced NLP models.",
      icon: <FileText size={24} />,
      benefits: [
        "Text Classification & Sentiment Analysis",
        "Named Entity Recognition",
        "Text Summarization",
        "Question Answering Systems",
        "Language Translation",
        "Chatbots & Conversational AI"
      ],
      color: '#6E59A5'
    },
    {
      id: "cv",
      title: "Computer Vision",
      description: "Enable machines to interpret and make decisions based on visual data.",
      icon: <Bot size={24} />,
      benefits: [
        "Image Recognition & Classification",
        "Object Detection & Tracking",
        "Facial Recognition",
        "Video Analysis",
        "Medical Image Analysis",
        "AR/VR Integration"
      ],
      color: '#9b87f5'
    },
    {
      id: "ml",
      title: "Machine Learning Solutions",
      description: "Custom machine learning models that learn from data to make accurate predictions.",
      icon: <GitBranch size={24} />,
      benefits: [
        "Supervised & Unsupervised Learning",
        "Deep Learning & Neural Networks",
        "Reinforcement Learning",
        "Anomaly Detection",
        "Recommendation Systems",
        "Time Series Analysis"
      ],
      color: '#8B5CF6'
    },
    {
      id: "pred",
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with predictive modeling.",
      icon: <LineChart size={24} />,
      benefits: [
        "Demand Forecasting",
        "Risk Assessment",
        "Customer Behavior Prediction",
        "Churn Prediction",
        "Financial Modeling",
        "Predictive Maintenance"
      ],
      color: '#0EA5E9'
    },
    {
      id: "nlp",
      title: "Data Science",
      description: "Extract valuable insights and knowledge from your data with advanced analytics.",
      icon: <Network size={24} />,
      benefits: [
        "Data Exploration & Visualization",
        "Statistical Analysis",
        "Feature Engineering",
        "Model Evaluation & Validation",
        "Big Data Processing",
        "Business Intelligence"
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
  
  const caseStudies = [
    {
      title: "Customer Sentiment Analysis",
      industry: "Retail",
      description: "Implemented an NLP solution to analyze customer reviews and social media mentions, providing real-time sentiment analysis and actionable insights.",
      results: [
        "92% accuracy in sentiment classification",
        "30% reduction in customer churn",
        "45% increase in customer satisfaction"
      ],
      color: '#6E59A5'
    },
    {
      title: "Predictive Maintenance System",
      industry: "Manufacturing",
      description: "Developed a machine learning model that predicts equipment failures before they occur, enabling preventive maintenance and minimizing downtime.",
      results: [
        "85% accuracy in failure prediction",
        "63% reduction in unplanned downtime",
        "40% decrease in maintenance costs"
      ],
      color: '#0EA5E9'
    },
    {
      title: "Automated Visual Inspection",
      industry: "Automotive",
      description: "Built a computer vision system for quality control that automatically detects defects in manufactured parts with high precision.",
      results: [
        "99.5% defect detection rate",
        "70% faster inspection process",
        "55% reduction in quality control costs"
      ],
      color: '#9b87f5'
    }
  ];
  
  return (
    <>
      <ThreeDSection
        title="AI & Machine Learning"
        description="Custom AI solutions designed to automate processes, gain insights, and enhance decision-making capabilities."
        background="gradient"
      >
        <DataSphere position={[0, 0, 0]} radius={3.5} count={3000} color="#6E59A5" interactive={false} />
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
      
      {/* AI Implementation Process */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-12">
            Our AI Implementation Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="glass p-6 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Brain className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Data Assessment</h3>
              <p className="text-muted-foreground mb-4">
                We evaluate your available data, identify gaps, and develop a data strategy to ensure your AI models have quality inputs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Data Quality Analysis</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Data Preprocessing Requirements</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Data Collection Strategy</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="glass p-6 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Network className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Solution Design</h3>
              <p className="text-muted-foreground mb-4">
                We design a comprehensive AI solution architecture that addresses your specific business challenges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Algorithm Selection</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Model Architecture Design</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Success Criteria Definition</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="glass p-6 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <GitBranch className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Model Development</h3>
              <p className="text-muted-foreground mb-4">
                We build and train custom AI models using your data to achieve the defined objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Model Training & Optimization</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Feature Engineering</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Performance Testing</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="glass p-6 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <LineChart className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Integration</h3>
              <p className="text-muted-foreground mb-4">
                We seamlessly integrate AI models into your existing systems and workflows.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>API Development</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>System Integration</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>User Interface Development</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="glass p-6 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Bot className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">5. Deployment & Testing</h3>
              <p className="text-muted-foreground mb-4">
                We deploy your AI solution in a controlled environment and thoroughly test its performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Controlled Rollout</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Performance Validation</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Real-world Testing</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="glass p-6 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">6. Monitoring & Improvement</h3>
              <p className="text-muted-foreground mb-4">
                We continuously monitor and refine your AI solution to ensure optimal performance over time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Performance Monitoring</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Model Retraining</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Continuous Improvement</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
            Case Studies
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Real-world examples of how our AI & ML solutions have transformed businesses
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="glass rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="h-2" style={{ backgroundColor: study.color }}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{study.title}</h3>
                    <span className="text-sm px-3 py-1 bg-primary/10 rounded-full">{study.industry}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>
                  <div className="border-t border-border/30 pt-4">
                    <h4 className="font-medium mb-2">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="glass p-6 rounded-xl">
              <AccordionItem value="item-1" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How much data do we need to implement AI solutions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The amount of data required varies depending on the complexity of the problem and the type of AI solution. Generally, machine learning models perform better with more data, but we can often start with relatively small datasets (a few thousand samples) and implement techniques like data augmentation or transfer learning to achieve good results. During our initial assessment, we'll evaluate your data and recommend the best approach.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How long does it take to develop and deploy an AI solution?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The timeline for AI projects typically ranges from 2-6 months, depending on the complexity, data availability, and integration requirements. A simple predictive model might be developed in 6-8 weeks, while a comprehensive computer vision system could take 4-6 months. We follow an agile methodology that allows us to deliver incremental value throughout the project lifecycle.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  What industries can benefit from AI and ML solutions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Virtually all industries can benefit from AI and ML technologies. We've successfully implemented solutions for healthcare (diagnosis assistance, patient monitoring), finance (fraud detection, risk assessment), retail (customer segmentation, recommendation systems), manufacturing (predictive maintenance, quality control), energy (demand forecasting, optimization), and many others. The key is identifying the right use cases that deliver meaningful business value.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How do you ensure the ethical use of AI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ethics is a fundamental consideration in our AI development process. We follow best practices for responsible AI, including fairness testing to prevent bias, transparency in model decision-making, privacy protection in data handling, and human oversight of AI systems. We also conduct thorough impact assessments to ensure our solutions align with ethical guidelines and regulatory requirements.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How do you measure the success of an AI implementation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We establish clear success metrics at the beginning of each project, which typically include both technical metrics (model accuracy, precision, recall) and business KPIs (cost reduction, revenue increase, efficiency gains). We implement monitoring systems to track these metrics over time and provide regular performance reports. Additionally, we conduct ROI analyses to ensure the AI solution is delivering tangible business value.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our AI and ML expertise can help transform your business processes and drive innovation.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')}>
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIMLServices;
