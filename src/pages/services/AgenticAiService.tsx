import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Atom } from "lucide-react";

const AgenticAiService = () => {
  return (
    <ServiceTemplate
      title="Agentic AI Solutions"
      subtitle="Autonomous AI systems that transform business operations"
      description="Our Agentic AI solutions deploy intelligent autonomous agents that can perform complex tasks, make decisions, and interact with humans and other systems to drastically improve operational efficiency and create new business capabilities."
      icon={<Atom className="w-10 h-10 text-purple" />}
      features={[
        {
          title: "Autonomous Agents",
          description: "AI systems that can independently perform tasks, make decisions, and adapt to changing conditions."
        },
        {
          title: "Multi-Agent Systems",
          description: "Coordinated teams of specialized AI agents that collaborate to solve complex problems."
        },
        {
          title: "Human-AI Collaboration",
          description: "Interactive systems that augment human capabilities and seamlessly work alongside your team."
        },
        {
          title: "Process Automation",
          description: "End-to-end automation of complex business processes requiring judgment and decision-making."
        },
        {
          title: "Adaptive Learning",
          description: "Agents that continuously improve by learning from their interactions and outcomes."
        },
        {
          title: "Explainable AI",
          description: "Transparent decision-making processes that help humans understand agent reasoning and build trust."
        }
      ]}
      benefits={[
        {
          title: "Unprecedented Efficiency",
          description: "Automate entire workflows that previously required constant human supervision and intervention."
        },
        {
          title: "24/7 Operation",
          description: "Deploy tireless agents that work continuously without breaks, vacations, or turnover."
        },
        {
          title: "Reduced Operational Costs",
          description: "Significantly lower labor costs while increasing throughput and quality of service."
        },
        {
          title: "Superhuman Performance",
          description: "Achieve results beyond human capabilities in data processing, pattern recognition, and consistency."
        },
        {
          title: "Rapid Scaling",
          description: "Easily scale operations up or down by deploying more agents without recruitment challenges."
        },
        {
          title: "Competitive Differentiation",
          description: "Leverage cutting-edge AI technology to offer services your competitors cannot match."
        }
      ]}
      useCases={[
        {
          title: "Sales & Marketing Automation",
          description: "Agents that identify prospects, engage in personalized outreach, and nurture leads through the pipeline."
        },
        {
          title: "Research Assistants",
          description: "Autonomous researchers that gather information, analyze data, and generate insights across multiple sources."
        },
        {
          title: "Customer Success",
          description: "Proactive agents that monitor customer accounts, identify issues, and intervene before problems arise."
        },
        {
          title: "Supply Chain Optimization",
          description: "Agents that monitor inventory, predict demand, and automatically adjust orders and logistics."
        },
        {
          title: "Autonomous Debugging",
          description: "Developer assistants that identify, diagnose, and fix software issues with minimal human intervention."
        },
        {
          title: "Content Creation",
          description: "Creative systems that generate, refine, and publish content based on strategic guidelines."
        }
      ]}
      technologies={[
        "LangChain", "AutoGPT", "BabyAGI", "Function Calling", "RAG", "Vector Databases", 
        "OpenAI API", "Anthropic Claude", "Pinecone", "Neo4j", "GPT-4", "Memory Systems"
      ]}
      relatedServices={[
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Machine Learning Ops", path: "/services/mlops" },
        { name: "Research & Development", path: "/services/research" }
      ]}
    />
  );
};

export default AgenticAiService;