import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Database } from "lucide-react";

const DataScienceService = () => {
  return (
    <ServiceTemplate
      title="Data Science & Analytics"
      subtitle="Transform raw data into actionable business insights"
      description="Our data science and analytics services help organizations extract value from their data through advanced statistical analysis, machine learning, and data visualization to drive informed decision-making."
      icon={<Database className="w-10 h-10 text-teal" />}
      features={[
        {
          title: "Predictive Analytics",
          description: "Forecast future trends and behaviors based on historical data patterns."
        },
        {
          title: "Data Visualization",
          description: "Create intuitive dashboards and visual reports that make complex data understandable."
        },
        {
          title: "Machine Learning Models",
          description: "Develop custom algorithms that learn from your data to solve specific business problems."
        },
        {
          title: "Big Data Processing",
          description: "Handle and analyze large volumes of structured and unstructured data efficiently."
        },
        {
          title: "Business Intelligence",
          description: "Transform raw data into meaningful insights that support strategic decision-making."
        },
        {
          title: "A/B Testing",
          description: "Design and analyze experiments to optimize products, services, and marketing campaigns."
        }
      ]}
      benefits={[
        {
          title: "Data-Driven Decisions",
          description: "Replace guesswork with decisions based on solid evidence and predictive models."
        },
        {
          title: "Revenue Growth",
          description: "Identify new opportunities, optimize pricing, and improve customer targeting."
        },
        {
          title: "Operational Efficiency",
          description: "Streamline processes and reduce waste by identifying bottlenecks and inefficiencies."
        },
        {
          title: "Risk Reduction",
          description: "Anticipate potential problems and develop mitigation strategies before issues arise."
        },
        {
          title: "Customer Insights",
          description: "Understand customer behavior and preferences to enhance products and services."
        },
        {
          title: "Competitive Advantage",
          description: "Stay ahead of the competition with superior data-driven strategies and innovations."
        }
      ]}
      useCases={[
        {
          title: "Customer Segmentation",
          description: "Group customers based on behavior and preferences for targeted marketing and personalization."
        },
        {
          title: "Demand Forecasting",
          description: "Predict future product demand to optimize inventory and supply chain management."
        },
        {
          title: "Fraud Detection",
          description: "Identify suspicious patterns and anomalies to prevent fraudulent activities."
        },
        {
          title: "Recommendation Systems",
          description: "Create personalized product or content recommendations to increase engagement and sales."
        },
        {
          title: "Process Optimization",
          description: "Analyze operational data to identify inefficiencies and optimize business processes."
        },
        {
          title: "Market Research",
          description: "Analyze market trends and consumer behavior to inform product development and marketing."
        }
      ]}
      technologies={[
        "Python", "R", "SQL", "Pandas", "Scikit-learn", "TensorFlow", 
        "PyTorch", "Tableau", "Power BI", "Spark", "Hadoop", "Databricks"
      ]}
      relatedServices={[
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Data Analytics", path: "/services/data-analytics" },
        { name: "Machine Learning Ops", path: "/services/mlops" }
      ]}
    />
  );
};

export default DataScienceService;