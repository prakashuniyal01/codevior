import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "TechCorp", category: "Technology" },
    { name: "GlobalFinance", category: "Finance" },
    { name: "MediaGroup", category: "Media" },
    { name: "RetailGiants", category: "Retail" },
    { name: "HealthInnovators", category: "Healthcare" },
    { name: "EduSystems", category: "Education" }
  ];

  const benefits = [
    "Access to exclusive technology solutions",
    "Joint marketing opportunities",
    "Collaborative product development",
    "Revenue sharing models",
    "Technical training and support",
    "Regular strategy sessions"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold">Our Partners</h1>
            <p className="text-xl text-muted-foreground">
              Strategic collaborations that enhance our capabilities and expand our offerings
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center hover:translate-y-[-5px] transition-transform">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple/30 to-teal/30">
                  <span className="text-2xl font-bold">{partner.name.charAt(0)}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Partnership Benefits</h2>
              <p className="text-muted-foreground">
                Discover the advantages of becoming our partner
              </p>
            </div>

            <div className="p-8 glass-card rounded-xl">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-1 mr-3 text-purple" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Program */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Partnership Program</h2>
              <p className="text-muted-foreground">
                How our partnership process works
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "We'll discuss your business goals and how a partnership can be mutually beneficial."
                },
                {
                  step: "02",
                  title: "Partnership Agreement",
                  description: "We'll formalize our partnership with clear terms and expectations."
                },
                {
                  step: "03",
                  title: "Integration & Training",
                  description: "We'll ensure your team has the knowledge and resources needed for success."
                },
                {
                  step: "04",
                  title: "Ongoing Collaboration",
                  description: "We'll continuously work together to maximize the partnership benefits."
                }
              ].map((step, index) => (
                <div key={index} className="flex p-6 glass-card rounded-xl">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-gradient-to-r from-purple to-teal">
                    <span className="text-sm font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="p-8 glass-card rounded-xl md:p-12 bg-gradient-to-r from-purple/10 to-teal/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold">Interested in Becoming a Partner?</h2>
              <p className="mb-8 text-muted-foreground">
                Join our network of industry leaders and grow your business through strategic collaboration.
              </p>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
