import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { MicrochipIcon } from "lucide-react";

const MlopsService = () => {
  return (
    <ServiceTemplate
      title="Machine Learning Operations"
      subtitle="Streamline and scale your ML lifecycle management"
      description="Our MLOps services help organizations deploy, monitor, and maintain machine learning models in production with reliability, scalability, and efficiency - bridging the gap between data science and IT operations."
      icon={<MicrochipIcon className="w-10 h-10 text-teal" />}
      features={[
        {
          title: "ML Pipeline Automation",
          description: "End-to-end automated workflows for training, testing, deploying, and monitoring ML models."
        },
        {
          title: "Model Monitoring",
          description: "Track model performance and detect drift to ensure continued accuracy in production."
        },
        {
          title: "Version Control",
          description: "Manage and track changes to data, code, and models throughout the development process."
        },
        {
          title: "Infrastructure Management",
          description: "Set up and maintain scalable computing resources optimized for machine learning workloads."
        },
        {
          title: "Experiment Tracking",
          description: "Record and compare results across multiple experiments to identify the best approaches."
        },
        {
          title: "Reproducibility",
          description: "Ensure consistent results by systematically capturing all components needed to recreate models."
        }
      ]}
      benefits={[
        {
          title: "Faster Deployment",
          description: "Reduce the time from model development to production from months to days or hours."
        },
        {
          title: "Reliability",
          description: "Ensure models perform consistently in production environments over time."
        },
        {
          title: "Cost Efficiency",
          description: "Optimize resource utilization and automate processes to reduce operational costs."
        },
        {
          title: "Scalability",
          description: "Easily scale your ML infrastructure to handle growing data volumes and model complexity."
        },
        {
          title: "Regulatory Compliance",
          description: "Maintain audit trails and documentation to meet regulatory requirements in your industry."
        },
        {
          title: "Team Collaboration",
          description: "Improve cooperation between data scientists, ML engineers, and IT operations teams."
        }
      ]}
      useCases={[
        {
          title: "Real-time Prediction Services",
          description: "Deploy models that deliver instant predictions for time-sensitive applications."
        },
        {
          title: "Automated Retraining",
          description: "Implement systems that automatically retrain models when performance degrades."
        },
        {
          title: "Multi-model Deployment",
          description: "Manage multiple models serving different business functions from a centralized platform."
        },
        {
          title: "Edge Deployment",
          description: "Deploy optimized models to edge devices with limited computing resources."
        },
        {
          title: "Model Governance",
          description: "Implement approval workflows and auditing for model changes in regulated industries."
        },
        {
          title: "A/B Testing",
          description: "Compare different model versions in production to determine which performs best."
        }
      ]}
      technologies={[
        "Kubernetes", "Docker", "Kubeflow", "MLflow", "Airflow", "TensorFlow Serving", 
        "Seldon Core", "Prometheus", "Grafana", "Git", "DVC", "Weights & Biases"
      ]}
      relatedServices={[
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Data Science & Analytics", path: "/services/data-science" },
        { name: "DevOps", path: "/services/devops" }
      ]}
    />
  );
};

export default MlopsService;