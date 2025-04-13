import Layout from "@/components/layout/Layout";
import { Users, Award, Clock, Sparkles } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold">About Us</h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate innovators dedicated to solving complex business challenges through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Founded in 2010, our company began with a simple mission: to help businesses thrive in the digital era by providing innovative solutions that drive results.
              </p>
              <p className="mb-4 text-muted-foreground">
                Over the years, we've grown from a small startup to a leading provider of technology services, serving clients across various industries around the globe.
              </p>
              <p className="text-muted-foreground">
                Through continuous learning and adaptation, we've stayed at the forefront of technological advancements, ensuring our clients always receive cutting-edge solutions.
              </p>
            </div>
            <div className="relative rounded-lg h-80 bg-gradient-to-br from-purple/20 to-teal/20 glass-card">
              {/* Placeholder for company image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient">Our Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10+", label: "Years of Experience", icon: <Clock className="w-8 h-8 text-purple" /> },
              { value: "100+", label: "Completed Projects", icon: <Award className="w-8 h-8 text-teal" /> },
              { value: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8 text-purple" /> },
              { value: "20+", label: "Team Members", icon: <Sparkles className="w-8 h-8 text-teal" /> }
            ].map((stat, index) => (
              <div key={index} className="p-8 text-center glass-card rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary/20">
                  {stat.icon}
                </div>
                <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the talented individuals who drive our vision and success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "John Smith", role: "CEO & Founder" },
              { name: "Sarah Johnson", role: "CTO" },
              { name: "Michael Brown", role: "Design Director" },
              { name: "Emily Davis", role: "Marketing Lead" },
              { name: "David Wilson", role: "Project Manager" },
              { name: "Jessica Taylor", role: "Development Lead" }
            ].map((member, index) => (
              <div key={index} className="p-6 text-center glass-card rounded-xl">
                <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple/30 to-teal/30">
                  <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Innovation",
                description: "We embrace new ideas and technologies to deliver forward-thinking solutions."
              },
              {
                title: "Excellence",
                description: "We strive for the highest quality in every aspect of our work."
              },
              {
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and ethical practices."
              },
              {
                title: "Collaboration",
                description: "We work together as a team and partner closely with our clients."
              }
            ].map((value, index) => (
              <div key={index} className="p-6 glass-card rounded-xl">
                <h3 className="mb-3 text-xl font-semibold text-gradient">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;