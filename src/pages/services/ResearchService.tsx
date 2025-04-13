import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Search } from "lucide-react";

const ResearchService = () => {
  return (
    <ServiceTemplate
      title="Research & Development"
      subtitle="Stay at the cutting edge of AI and data science innovation"
      description="Our R&D services help organizations explore and implement emerging technologies, develop proof-of-concepts, and create innovative solutions to complex problems through applied research in AI and data science."
      icon={<Search className="w-10 h-10 text-purple" />}
      features={[
        {
          title: "Applied Research",
          description: "Solve real-world business problems by applying the latest academic research and innovations."
        },
        {
          title: "Proof of Concept",
          description: "Quickly develop and test innovative ideas to validate their feasibility and potential impact."
        },
        {
          title: "Prototype Development",
          description: "Create working prototypes that demonstrate the functionality and value of new AI solutions."
        },
        {
          title: "Innovation Workshops",
          description: "Collaborative sessions to identify opportunities for AI-driven innovation in your business."
        },
        {
          title: "Academic Partnerships",
          description: "Collaborate with leading universities and research institutions to access cutting-edge expertise."
        },
        {
          title: "Technology Scouting",
          description: "Identify emerging technologies that could provide competitive advantages for your business."
        }
      ]}
      benefits={[
        {
          title: "Competitive Advantage",
          description: "Stay ahead of competitors by implementing innovative solutions before they become mainstream."
        },
        {
          title: "Risk Mitigation",
          description: "Test new technologies in controlled environments before full-scale implementation."
        },
        {
          title: "New Revenue Streams",
          description: "Discover and develop new products and services based on emerging AI capabilities."
        },
        {
          title: "Intellectual Property",
          description: "Create proprietary algorithms and solutions that give your business a unique edge."
        },
        {
          title: "Knowledge Transfer",
          description: "Develop internal expertise and capabilities through collaboration with our research team."
        },
        {
          title: "Future-Proofing",
          description: "Prepare your organization for upcoming technological shifts and market changes."
        }
      ]}
      useCases={[
        {
          title: "Novel Algorithms",
          description: "Develop custom algorithms that solve specific business problems more effectively than off-the-shelf solutions."
        },
        {
          title: "Emerging Tech Evaluation",
          description: "Assess new technologies like quantum machine learning or neuromorphic computing for future implementation."
        },
        {
          title: "Domain-Specific AI",
          description: "Create specialized AI systems for industries with unique requirements and constraints."
        },
        {
          title: "AI Ethics Research",
          description: "Develop frameworks and tools for responsible AI deployment that aligns with your values."
        },
        {
          title: "Cross-Industry Innovation",
          description: "Apply successful AI approaches from other industries to create breakthroughs in your sector."
        },
        {
          title: "Patent Development",
          description: "Research and develop patentable AI innovations that can be leveraged for strategic advantage."
        }
      ]}
      technologies={[
        "Generative AI", "Reinforcement Learning", "Federated Learning", "Neural Architecture Search", 
        "Transfer Learning", "Few-Shot Learning", "Multimodal AI", "Interpretable AI"
      ]}
      relatedServices={[
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Agentic AI Solutions", path: "/services/agentic-ai" },
        { name: "Computer Vision", path: "/services/computer-vision" }
      ]}
    />
  );
};

export default ResearchService;