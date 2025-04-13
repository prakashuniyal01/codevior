import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "design", name: "UI/UX Design" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "branding", name: "Branding" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "A modern e-commerce solution with seamless checkout and inventory management.",
      gradient: "from-purple/30 to-teal/30"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "design",
      description: "Interactive dashboard for visualizing financial data with customizable reports.",
      gradient: "from-teal/30 to-purple/30"
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Mobile application for tracking workouts, nutrition, and health metrics.",
      gradient: "from-purple/30 to-teal/30"
    },
    {
      id: 4,
      title: "Corporate Rebrand",
      category: "branding",
      description: "Complete brand overhaul including logo, visual identity, and brand guidelines.",
      gradient: "from-teal/30 to-purple/30"
    },
    {
      id: 5,
      title: "Educational Platform",
      category: "web",
      description: "Online learning platform with course management and interactive content.",
      gradient: "from-purple/30 to-teal/30"
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      category: "mobile",
      description: "Mobile app for table reservations and digital menu ordering.",
      gradient: "from-teal/30 to-purple/30"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our projects and see how we've helped businesses achieve their goals
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "bg-gradient-to-r from-purple to-teal" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className={`glass-card overflow-hidden rounded-xl hover:translate-y-[-5px] transition-transform`}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient}`}>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{categories.find(c => c.id === project.category)?.name}</p>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Client Testimonials</h2>
            <p className="text-muted-foreground">
              Hear what our clients have to say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                quote: "Their team delivered an exceptional e-commerce platform that exceeded our expectations. Highly recommend!",
                author: "Jane Smith",
                position: "CEO, RetailCo"
              },
              {
                quote: "The mobile app they built has received amazing feedback from our users and significantly increased engagement.",
                author: "Mark Johnson",
                position: "CTO, TechStart"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 glass-card rounded-xl">
                <p className="mb-4 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-gradient-to-r from-purple to-teal">
                    <span className="text-xs font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;