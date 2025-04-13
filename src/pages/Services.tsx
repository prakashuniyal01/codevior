// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Code, Grid, BarChart, LineChart, Server, GitBranch, Smartphone, Settings } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       icon: <Code className="w-10 h-10 text-purple" />,
//       title: "Web Development",
//       description: "Custom websites and applications built with cutting-edge technologies to meet your specific needs.",
//       features: ["Responsive Design", "Content Management", "E-commerce Solutions", "API Integration"]
//     },
//     {
//       icon: <Grid className="w-10 h-10 text-teal" />,
//       title: "UI/UX Design",
//       description: "Create intuitive and engaging user experiences that captivate your audience and drive conversions.",
//       features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
//     },
//     {
//       icon: <BarChart className="w-10 h-10 text-purple" />,
//       title: "Digital Marketing",
//       description: "Data-driven strategies to boost your online presence and convert visitors into customers.",
//       features: ["SEO Optimization", "Social Media Marketing", "Email Campaigns", "Analytics & Reporting"]
//     },
//     {
//       icon: <Server className="w-10 h-10 text-teal" />,
//       title: "Cloud Solutions",
//       description: "Scalable cloud infrastructure that provides reliability, security, and performance for your applications.",
//       features: ["Cloud Migration", "Infrastructure Setup", "Maintenance & Support", "Security Implementation"]
//     },
//     {
//       icon: <LineChart className="w-10 h-10 text-purple" />,
//       title: "Data Analytics",
//       description: "Transform raw data into actionable insights that drive informed business decisions.",
//       features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards", "Reporting Tools"]
//     },
//     {
//       icon: <GitBranch className="w-10 h-10 text-teal" />,
//       title: "DevOps",
//       description: "Streamline your development and operations to improve efficiency and product quality.",
//       features: ["CI/CD Pipelines", "Containerization", "Infrastructure as Code", "Monitoring & Logging"]
//     },
//     {
//       icon: <Smartphone className="w-10 h-10 text-purple" />,
//       title: "Mobile Development",
//       description: "Native and cross-platform mobile applications that provide seamless experiences across devices.",
//       features: ["iOS Development", "Android Development", "Cross-Platform Apps", "Mobile Testing"]
//     },
//     {
//       icon: <Settings className="w-10 h-10 text-teal" />,
//       title: "IT Consulting",
//       description: "Expert guidance on technology strategy to help your business achieve its goals.",
//       features: ["Technology Assessment", "Digital Transformation", "Process Optimization", "IT Roadmap"]
//     }
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="mb-6 text-4xl font-bold">Our Services</h1>
//             <p className="text-xl text-muted-foreground">
//               Comprehensive solutions tailored to meet your business needs and drive growth
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16">
//         <div className="container px-4 mx-auto">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {services.slice(0, 6).map((service, index) => (
//               <div key={index} className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform">
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
//                 <p className="mb-4 text-muted-foreground">{service.description}</p>
//                 <ul className="mb-4 space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-start">
//                       <span className="mr-2 text-purple">•</span>
//                       <span className="text-sm text-muted-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-16 bg-secondary/5">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-2xl mx-auto mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold">Our Process</h2>
//             <p className="text-muted-foreground">
//               How we approach each project to ensure successful outcomes
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
//             {[
//               { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
//               { step: "02", title: "Strategy", description: "Developing a comprehensive plan for implementation" },
//               { step: "03", title: "Execution", description: "Building and implementing the solution" },
//               { step: "04", title: "Evaluation", description: "Measuring results and making refinements" }
//             ].map((process, index) => (
//               <div key={index} className="relative p-6 text-center glass-card rounded-xl">
//                 <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -top-3 -left-3 bg-gradient-to-r from-purple to-teal">
//                   <span className="text-xs font-bold">{process.step}</span>
//                 </div>
//                 <h3 className="mt-4 mb-3 text-xl font-semibold">{process.title}</h3>
//                 <p className="text-muted-foreground">{process.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16">
//         <div className="container px-4 mx-auto">
//           <div className="p-8 glass-card rounded-xl md:p-12 bg-gradient-to-r from-purple/10 to-teal/10">
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="mb-4 text-3xl font-bold">Need a Custom Solution?</h2>
//               <p className="mb-8 text-muted-foreground">
//                 Contact us to discuss your specific requirements and how we can help you achieve your goals.
//               </p>
//               <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
//                 <Link to="/contact">Get in Touch</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Services;


import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Grid, 
  BarChart, 
  LineChart, 
  Server, 
  GitBranch, 
  Smartphone, 
  Settings, 
  Brain, 
  Database, 
  Layers, 
  Atom, 
  Users, 
  Shield, 
  MicrochipIcon, 
  Search
} from "lucide-react";

const Services = () => {
  const services = [
    // AI & Data Science Services
    {
      icon: <Brain className="w-10 h-10 text-purple" />,
      title: "AI & NLP Solutions",
      description: "Leverage machine learning and generative AI to optimize your business processes and drive innovation.",
      features: ["Custom AI Models", "Natural Language Processing", "Sentiment Analysis", "Document Understanding"]
    },
    {
      icon: <Database className="w-10 h-10 text-teal" />,
      title: "Data Science & Analytics",
      description: "Transform your data into actionable insights with our comprehensive data science solutions.",
      features: ["Predictive Analytics", "Business Intelligence", "Data Visualization", "Big Data Processing"]
    },
    {
      icon: <Atom className="w-10 h-10 text-purple" />,
      title: "Agentic AI Solutions",
      description: "Deploy intelligent AI agents that can autonomously perform tasks and make decisions to boost productivity.",
      features: ["Autonomous Agents", "Multi-Agent Systems", "Workflow Automation", "Decision Support"]
    },
    {
      icon: <MicrochipIcon className="w-10 h-10 text-teal" />,
      title: "Machine Learning Ops",
      description: "End-to-end MLOps solutions to automate and streamline your machine learning lifecycle.",
      features: ["Model Deployment", "Model Monitoring", "Pipeline Automation", "Version Control"]
    },
    {
      icon: <Search className="w-10 h-10 text-purple" />,
      title: "Research & Development",
      description: "Stay ahead with cutting-edge R&D in artificial intelligence and emerging technologies.",
      features: ["Innovation Workshops", "Proof of Concepts", "Prototype Development", "Academic Partnerships"]
    },
    {
      icon: <Layers className="w-10 h-10 text-teal" />,
      title: "Computer Vision",
      description: "Visual recognition and image processing solutions for diverse industry applications.",
      features: ["Image Classification", "Object Detection", "Visual Inspection", "Video Analytics"]
    },
    
    // Traditional Services
    {
      icon: <Code className="w-10 h-10 text-purple" />,
      title: "Web Development",
      description: "Custom websites and applications built with cutting-edge technologies to meet your specific needs.",
      features: ["Responsive Design", "Content Management", "E-commerce Solutions", "API Integration"]
    },
    {
      icon: <Grid className="w-10 h-10 text-teal" />,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that captivate your audience and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <Server className="w-10 h-10 text-purple" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure that provides reliability, security, and performance for your applications.",
      features: ["Cloud Migration", "Infrastructure Setup", "Maintenance & Support", "Security Implementation"]
    },
    {
      icon: <LineChart className="w-10 h-10 text-teal" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive informed business decisions.",
      features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards", "Reporting Tools"]
    },
    {
      icon: <GitBranch className="w-10 h-10 text-purple" />,
      title: "DevOps",
      description: "Streamline your development and operations to improve efficiency and product quality.",
      features: ["CI/CD Pipelines", "Containerization", "Infrastructure as Code", "Monitoring & Logging"]
    },
    {
      icon: <Users className="w-10 h-10 text-teal" />,
      title: "Tech Talent Solutions",
      description: "Access top tech talent for your AI, data science, and software development needs.",
      features: ["Team Augmentation", "Technical Interviews", "Skill Assessment", "Talent Acquisition"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              From AI solutions to full-stack development, we provide comprehensive 
              services tailored to meet your business needs
            </p>
          </div>
        </div>
      </section>

      {/* AI & Data Science Services Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">AI & Data Science</h2>
            <p className="text-muted-foreground">
              Cutting-edge artificial intelligence and data science solutions to 
              transform your business and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 text-purple">•</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Design Services */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Software & Design</h2>
            <p className="text-muted-foreground">
              Full-stack development and design services to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(6, 12).map((service, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 text-purple">•</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Process</h2>
            <p className="text-muted-foreground">
              How we approach each project to ensure successful outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive plan for implementation" },
              { step: "03", title: "Execution", description: "Building and implementing the solution" },
              { step: "04", title: "Evaluation", description: "Measuring results and making refinements" }
            ].map((process, index) => (
              <div key={index} className="relative p-6 text-center glass-card rounded-xl">
                <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -top-3 -left-3 bg-gradient-to-r from-purple to-teal">
                  <span className="text-xs font-bold">{process.step}</span>
                </div>
                <h3 className="mt-4 mb-3 text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="p-8 glass-card rounded-xl md:p-12 bg-gradient-to-r from-purple/10 to-teal/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business with AI?</h2>
              <p className="mb-8 text-muted-foreground">
                Contact us to discuss your specific requirements and how our AI and data science 
                solutions can help you achieve your goals.
              </p>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;