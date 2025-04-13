import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Grid, BarChart, Users, Briefcase, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple/20 via-background to-background"></div>
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in">
              Innovate. Create. <span className="text-gradient">Elevate.</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We deliver cutting-edge solutions that transform businesses and drive growth in the digital age.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Code className="w-10 h-10 text-purple" />,
                title: "Web Development",
                description: "Custom websites and applications built with cutting-edge technologies."
              },
              {
                icon: <Grid className="w-10 h-10 text-teal" />,
                title: "UI/UX Design",
                description: "Intuitive and engaging user experiences that captivate your audience."
              },
              {
                icon: <BarChart className="w-10 h-10 text-purple" />,
                title: "Digital Marketing",
                description: "Data-driven strategies to boost your online presence and conversion."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-sm font-medium transition-colors text-primary hover:text-purple"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Featured Work</h2>
            <p className="text-muted-foreground">
              Check out some of our recent projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "E-commerce Platform",
                category: "Web Development",
                gradient: "from-purple/30 to-teal/30",
              },
              {
                title: "Financial Dashboard",
                category: "UI/UX Design",
                gradient: "from-teal/30 to-purple/30",
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className={`relative h-64 rounded-xl overflow-hidden group bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground">{project.category}</p>
                  <Link 
                    to="/portfolio" 
                    className="inline-flex items-center text-sm font-medium text-white transition-opacity opacity-0 group-hover:opacity-100"
                  >
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="w-8 h-8 text-purple" />,
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience"
              },
              {
                icon: <Briefcase className="w-8 h-8 text-teal" />,
                title: "Quality Focus",
                description: "Committed to delivering excellence in every project"
              },
              {
                icon: <Check className="w-8 h-8 text-purple" />,
                title: "Reliable Support",
                description: "Dedicated assistance throughout the entire process"
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-teal" />,
                title: "Innovative Solutions",
                description: "Forward-thinking approaches to complex challenges"
              }
            ].map((reason, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full glass-card">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
              <p className="mb-8 text-muted-foreground">
                Get in touch with us today to discuss how we can help you achieve your goals.
              </p>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
