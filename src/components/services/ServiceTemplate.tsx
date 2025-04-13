import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
}

export interface ServiceProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  heroImage?: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  useCases: ServiceUseCase[];
  technologies?: string[];
  relatedServices?: { name: string; path: string }[];
}

const ServiceTemplate: React.FC<ServiceProps> = ({
  title,
  subtitle,
  description,
  icon,
  heroImage,
  features,
  benefits,
  useCases,
  technologies,
  relatedServices,
}) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 rounded-lg bg-purple/10">{icon}</div>
                <h1 className="text-4xl font-bold">{title}</h1>
              </div>
              <h2 className="mb-6 text-2xl text-muted-foreground">{subtitle}</h2>
              <p className="mb-8 text-lg">{description}</p>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              {heroImage ? (
                <img 
                  src={heroImage} 
                  alt={title} 
                  className="w-full h-auto rounded-xl"
                />
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-purple/20 to-teal/20 rounded-xl" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="useCases">Use Cases</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 glass-card rounded-xl">
                    <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 glass-card rounded-xl">
                    <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="useCases" className="mt-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="p-6 glass-card rounded-xl">
                    <h3 className="mb-3 text-xl font-semibold">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technologies Section (Optional) */}
      {technologies && technologies.length > 0 && (
        <section className="py-16 bg-secondary/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Technologies We Use</h2>
              <p className="text-muted-foreground">
                Industry-standard tools and frameworks for delivering exceptional results
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 border rounded-full bg-background border-border"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="p-8 glass-card rounded-xl md:p-12 bg-gradient-to-r from-purple/10 to-teal/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mb-8 text-muted-foreground">
                Contact us today to learn how our {title} services can help you achieve your business goals.
              </p>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Related Services</h2>
              <p className="text-muted-foreground">
                Explore our other offerings that complement {title}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  asChild
                  className="rounded-full"
                >
                  <Link to={service.path}>{service.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ServiceTemplate;