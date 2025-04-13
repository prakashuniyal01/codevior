import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Grid } from "lucide-react";

const UiUxService = () => {
  return (
    <ServiceTemplate
      title="UI/UX Design"
      subtitle="Create intuitive digital experiences that users love"
      description="Our UI/UX design services help businesses create intuitive, engaging user interfaces and experiences that enhance user satisfaction, increase conversion rates, and build brand loyalty through research-based design."
      icon={<Grid className="w-10 h-10 text-teal" />}
      features={[
        {
          title: "User Research",
          description: "Understand your users' needs, behaviors, and pain points through structured research methods."
        },
        {
          title: "Information Architecture",
          description: "Organize and structure content to create intuitive navigation and user flows."
        },
        {
          title: "Wireframing",
          description: "Create low-fidelity blueprints that outline the structure and functionality of your digital product."
        },
        {
          title: "Prototyping",
          description: "Develop interactive mockups that simulate the user experience for testing and refinement."
        },
        {
          title: "Visual Design",
          description: "Create aesthetically pleasing interfaces with consistent branding, typography, and color schemes."
        },
        {
          title: "Usability Testing",
          description: "Evaluate designs with real users to identify and resolve usability issues before development."
        }
      ]}
      benefits={[
        {
          title: "Increased User Satisfaction",
          description: "Create experiences that delight users and exceed their expectations."
        },
        {
          title: "Higher Conversion Rates",
          description: "Remove friction points that prevent users from completing desired actions."
        },
        {
          title: "Reduced Development Costs",
          description: "Identify and fix usability issues early, before they require expensive code changes."
        },
        {
          title: "Brand Differentiation",
          description: "Stand out from competitors with unique, memorable user experiences."
        },
        {
          title: "Reduced Support Costs",
          description: "Minimize customer confusion and support requests with intuitive interfaces."
        },
        {
          title: "Data-Informed Design",
          description: "Make design decisions based on user research and behavior analytics."
        }
      ]}
      useCases={[
        {
          title: "Website Redesign",
          description: "Transform outdated websites into modern, user-centered digital experiences."
        },
        {
          title: "Mobile App Design",
          description: "Create intuitive mobile applications that users can navigate effortlessly."
        },
        {
          title: "E-commerce Optimization",
          description: "Streamline the shopping and checkout process to increase conversion rates."
        },
        {
          title: "Dashboard Design",
          description: "Develop information-rich interfaces that make complex data accessible and actionable."
        },
        {
          title: "Design Systems",
          description: "Create comprehensive design systems that ensure consistency across all digital products."
        },
        {
          title: "Accessibility Improvements",
          description: "Enhance digital products to be usable by people with a wide range of abilities."
        }
      ]}
      technologies={[
        "Figma", "Adobe XD", "Sketch", "Miro", "InVision", "Zeplin", 
        "Maze", "UsabilityHub", "Hotjar", "Optimal Workshop", "Framer", "Principle"
      ]}
      relatedServices={[
        { name: "Web Development", path: "/services/web-development" },
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Data Analytics", path: "/services/data-analytics" }
      ]}
    />
  );
};

export default UiUxService;