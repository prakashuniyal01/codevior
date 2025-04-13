import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Server, Database, Shield, Cloud, ArrowRight } from "lucide-react";

const Tech = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code className="w-10 h-10 text-purple" />,
      items: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"]
    },
    {
      category: "Backend",
      icon: <Server className="w-10 h-10 text-teal" />,
      items: ["Node.js", "Python", "Java", "PHP", "Ruby on Rails", "Express", "ASP.NET Core"]
    },
    {
      category: "Database",
      icon: <Database className="w-10 h-10 text-purple" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch", "SQL Server"]
    },
    {
      category: "DevOps",
      icon: <Cloud className="w-10 h-10 text-teal" />,
      items: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Jenkins", "GitHub Actions"]
    },
    {
      category: "Security",
      icon: <Shield className="w-10 h-10 text-purple" />,
      items: ["OAuth 2.0", "JWT", "SSL/TLS", "Penetration Testing", "Security Auditing", "GDPR Compliance"]
    }
  ];

  const methodologies = [
    "Agile Development",
    "Scrum Framework",
    "CI/CD Pipelines",
    "Test-Driven Development",
    "Microservices Architecture",
    "Serverless Computing",
    "Responsive Design",
    "Mobile-First Approach"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold">Our Technology Stack</h1>
            <p className="text-xl text-muted-foreground">
              The cutting-edge tools and technologies we use to build exceptional solutions
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className="p-8 glass-card rounded-xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20">
                      {tech.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="mb-4 text-2xl font-bold">{tech.category} Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple/20 to-teal/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Methodologies */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Development Methodologies</h2>
              <p className="text-muted-foreground">
                We employ industry best practices to ensure quality and efficiency
              </p>
            </div>

            <div className="p-8 glass-card rounded-xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {methodologies.map((method, index) => (
                  <div key={index} className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold">Continuous Innovation</h2>
              <p className="mb-4 text-muted-foreground">
                We're constantly exploring emerging technologies and frameworks to stay ahead of the curve and deliver the most advanced solutions possible.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our team regularly participates in hackathons, conferences, and specialized training to expand our technical expertise and bring fresh ideas to our projects.
              </p>
              <Button asChild className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            
            <div className="relative flex items-center justify-center order-1 h-64 md:order-2 glass-card rounded-xl bg-gradient-to-br from-purple/20 to-teal/20">
              <span className="text-3xl font-bold text-gradient">Innovation Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Case Study */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl p-8 mx-auto glass-card rounded-xl bg-gradient-to-br from-purple/5 to-teal/5">
            <h2 className="mb-6 text-2xl font-bold text-center">Case Study: Technology in Action</h2>
            
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold">E-commerce Platform Overhaul</h3>
              <p className="mb-4 text-muted-foreground">
                We transformed an outdated e-commerce platform into a high-performing, scalable solution that increased conversion rates by 35%.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "GraphQL", "MongoDB", "AWS", "Docker"].map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple/20 to-teal/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-2 font-medium">Key Improvements:</h4>
                  <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Reduced page load time by 60%</li>
                    <li>Implemented real-time inventory management</li>
                    <li>Enhanced mobile experience with responsive design</li>
                    <li>Integrated advanced analytics for customer insights</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline">
                <Link to="/portfolio">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="p-8 glass-card rounded-xl md:p-12 bg-gradient-to-r from-purple/10 to-teal/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to Leverage Our Technical Expertise?</h2>
              <p className="mb-8 text-muted-foreground">
                Let's discuss how our technology stack can help solve your business challenges.
              </p>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tech;
