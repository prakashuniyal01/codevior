import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Brain } from "lucide-react";

const AiNlpService = () => {
  return (
    <ServiceTemplate
      title="AI & NLP Solutions"
      subtitle="Transform your business with powerful language understanding"
      description="Our AI & Natural Language Processing solutions help businesses automate processes, extract insights from text data, and create intelligent conversational interfaces that enhance customer experiences."
      icon={<Brain className="w-10 h-10 text-purple" />}
      features={[
        {
          title: "Custom Language Models",
          description: "Tailor-made AI models that understand your specific business language and terminology."
        },
        {
          title: "Sentiment Analysis",
          description: "Analyze customer feedback, reviews, and social media to understand public perception of your brand."
        },
        {
          title: "Document Understanding",
          description: "Extract structured information from unstructured documents, contracts, and reports."
        },
        {
          title: "Chatbots & Virtual Assistants",
          description: "Intelligent conversational agents that provide 24/7 customer support and automate routine tasks."
        },
        {
          title: "Text Classification",
          description: "Automatically categorize and route documents, emails, and support tickets to the right department."
        },
        {
          title: "Entity Recognition",
          description: "Identify and extract specific information like names, dates, locations, and custom entities from text."
        }
      ]}
      benefits={[
        {
          title: "Cost Reduction",
          description: "Automate routine text-based tasks to free up human resources for more complex assignments."
        },
        {
          title: "Enhanced Decision Making",
          description: "Gain deeper insights from text data to inform strategic business decisions."
        },
        {
          title: "Improved Customer Experience",
          description: "Provide faster response times and more personalized interactions through AI-powered solutions."
        },
        {
          title: "Scalable Operations",
          description: "Handle increasing volumes of text data without proportionally increasing staff."
        },
        {
          title: "Competitive Advantage",
          description: "Stay ahead with cutting-edge AI technology that transforms how you interact with customers and data."
        },
        {
          title: "24/7 Availability",
          description: "Deliver consistent service around the clock with AI-powered solutions that never sleep."
        }
      ]}
      useCases={[
        {
          title: "Customer Support Automation",
          description: "Deploy intelligent chatbots that can resolve common customer queries without human intervention."
        },
        {
          title: "Content Moderation",
          description: "Automatically screen user-generated content for policy violations and inappropriate material."
        },
        {
          title: "Competitive Intelligence",
          description: "Monitor competitor communications and customer feedback to identify market opportunities."
        },
        {
          title: "Legal Document Analysis",
          description: "Extract key clauses and obligations from contracts and legal documents to streamline review processes."
        },
        {
          title: "Healthcare Records Processing",
          description: "Extract and structure information from patient records to improve care coordination and research."
        },
        {
          title: "Market Research Automation",
          description: "Analyze open-ended survey responses and social media data to understand market trends."
        }
      ]}
      technologies={[
        "GPT-4", "BERT", "RoBERTa", "TensorFlow", "PyTorch", "Hugging Face", 
        "Spacy", "NLTK", "Langchain", "OpenAI API", "Azure AI", "Google Cloud NLP"
      ]}
      relatedServices={[
        { name: "Data Science & Analytics", path: "/services/data-science" },
        { name: "Agentic AI Solutions", path: "/services/agentic-ai" },
        { name: "Research & Development", path: "/services/research" }
      ]}
    />
  );
};

export default AiNlpService;