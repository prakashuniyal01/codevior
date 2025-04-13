import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Code } from "lucide-react";

const WebDevService = () => {
  return (
    <ServiceTemplate
      title="Web Development"
      subtitle="Custom digital experiences built with modern technologies"
      description="Our web development services help businesses establish a strong online presence with custom websites and web applications that are performant, responsive, and built with modern frameworks and best practices."
      icon={<Code className="w-10 h-10 text-purple" />}
      features={[
        {
          title: "Responsive Design",
          description: "Websites that look and function flawlessly across all devices and screen sizes."
        },
        {
          title: "Full-Stack Development",
          description: "End-to-end solutions covering both frontend interfaces and backend systems."
        },
        {
          title: "Content Management",
          description: "User-friendly systems that allow non-technical staff to update website content."
        },
        {
          title: "E-commerce Solutions",
          description: "Online stores with secure payment processing, inventory management, and customer accounts."
        },
        {
          title: "API Integration",
          description: "Seamless connections with third-party services and internal systems through robust APIs."
        },
        {
          title: "Performance Optimization",
          description: "Fast-loading websites optimized for search engines and user experience."
        }
      ]}
      benefits={[
        {
          title: "Professional Brand Image",
          description: "Establish credibility with a polished website that reflects your brand identity."
        },
        {
          title: "Increased Conversions",
          description: "Turn visitors into customers with intuitive user experiences and clear calls to action."
        },
        {
          title: "Improved Accessibility",
          description: "Reach a wider audience with websites that comply with accessibility standards."
        },
        {
          title: "Scalable Solutions",
          description: "Grow your digital presence alongside your business without starting from scratch."
        },
        {
          title: "Search Engine Visibility",
          description: "Attract more organic traffic with websites built for optimal search engine ranking."
        },
        {
          title: "Data-Driven Insights",
          description: "Gain valuable user insights through integrated analytics and tracking tools."
        }
      ]}
      useCases={[
        {
          title: "Corporate Websites",
          description: "Professional websites that showcase your company's services, team, and values."
        },
        {
          title: "E-commerce Platforms",
          description: "Online stores that provide seamless shopping experiences and secure transactions."
        },
        {
          title: "Customer Portals",
          description: "Secure login areas where customers can access accounts, services, and support."
        },
        {
          title: "Web Applications",
          description: "Complex interactive tools that help users accomplish specific tasks or solve problems."
        },
        {
          title: "Content Platforms",
          description: "Blogs, news sites, or knowledge bases that establish thought leadership and engage audiences."
        },
        {
          title: "Progressive Web Apps",
          description: "Fast, engaging web experiences that work offline and feel like native mobile apps."
        }
      ]}
      technologies={[
        "React", "Next.js", "TypeScript", "Node.js", "Express", "GraphQL", 
        "MongoDB", "PostgreSQL", "Tailwind CSS", "AWS", "Netlify", "Vercel"
      ]}
      relatedServices={[
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "Cloud Solutions", path: "/services/cloud" },
        { name: "DevOps", path: "/services/devops" }
      ]}
    />
  );
};

export default WebDevService;
