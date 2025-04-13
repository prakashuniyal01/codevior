import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Server } from "lucide-react";

const CloudService = () => {
  return (
    <ServiceTemplate
      title="Cloud Solutions"
      subtitle="Scalable, secure infrastructure for modern applications"
      description="Our cloud services help organizations migrate to the cloud, optimize their infrastructure, and implement secure, scalable architectures that reduce costs and improve operational efficiency across AWS, Azure, and Google Cloud platforms."
      icon={<Server className="w-10 h-10 text-purple" />}
      features={[
        {
          title: "Cloud Migration",
          description: "Seamlessly transition from on-premises to cloud infrastructure with minimal disruption."
        },
        {
          title: "Infrastructure Setup",
          description: "Design and implement cloud architecture that's optimized for your specific workloads."
        },
        {
          title: "Serverless Solutions",
          description: "Develop applications using serverless technologies to reduce operational overhead."
        },
        {
          title: "Multi-Cloud Strategy",
          description: "Create resilient systems that leverage multiple cloud providers for optimal performance."
        },
        {
          title: "Security Implementation",
          description: "Implement comprehensive security measures to protect cloud resources and data."
        },
        {
          title: "Cost Optimization",
          description: "Identify opportunities to reduce cloud spending without sacrificing performance."
        }
      ]}
      benefits={[
        {
          title: "Scalability",
          description: "Easily adjust resources to match demand without large upfront investments."
        },
        {
          title: "Cost Efficiency",
          description: "Pay only for what you use and eliminate the need for expensive on-premises hardware."
        },
        {
          title: "Global Reach",
          description: "Deploy applications in multiple regions to reduce latency and improve user experience."
        },
        {
          title: "Enhanced Security",
          description: "Leverage advanced security features provided by major cloud platforms."
        },
        {
          title: "Business Continuity",
          description: "Implement robust backup and disaster recovery solutions to minimize downtime."
        },
        {
          title: "Innovation Enablement",
          description: "Access cutting-edge technologies like AI, ML, and IoT through cloud services."
        }
      ]}
      useCases={[
        {
          title: "Legacy System Modernization",
          description: "Transition outdated systems to modern cloud-based architectures."
        },
        {
          title: "High-Performance Computing",
          description: "Access powerful computing resources for complex simulations and data processing."
        },
        {
          title: "Disaster Recovery",
          description: "Implement comprehensive backup and recovery systems across multiple regions."
        },
        {
          title: "Global Application Deployment",
          description: "Deploy applications worldwide with consistent performance and low latency."
        },
        {
          title: "Big Data Processing",
          description: "Process and analyze large datasets using cloud-based data warehouses and analytics tools."
        },
        {
          title: "IoT Infrastructure",
          description: "Build scalable backend systems for IoT devices with secure data collection and processing."
        }
      ]}
      technologies={[
        "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", 
        "CloudFormation", "Lambda", "Azure Functions", "S3", "DynamoDB", "CloudFront"
      ]}
      relatedServices={[
        { name: "DevOps", path: "/services/devops" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Machine Learning Ops", path: "/services/mlops" }
      ]}
    />
  );
};

export default CloudService;