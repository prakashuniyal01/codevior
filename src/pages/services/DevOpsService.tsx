import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { GitBranch } from "lucide-react";

const DevOpsService = () => {
  return (
    <ServiceTemplate
      title="DevOps Solutions"
      subtitle="Streamline your development lifecycle with automated CI/CD"
      description="Our DevOps services help organizations improve collaboration between development and operations teams, implement continuous integration and delivery, and automate infrastructure management to accelerate software delivery while maintaining reliability."
      icon={<GitBranch className="w-10 h-10 text-purple" />}
      features={[
        {
          title: "CI/CD Pipeline Setup",
          description: "Automated workflows that build, test, and deploy code changes safely and efficiently."
        },
        {
          title: "Infrastructure as Code",
          description: "Manage your entire infrastructure through version-controlled code rather than manual processes."
        },
        {
          title: "Containerization",
          description: "Package applications and dependencies into standardized containers for consistent deployment."
        },
        {
          title: "Monitoring & Observability",
          description: "Comprehensive monitoring solutions that provide insights into system health and performance."
        },
        {
          title: "Configuration Management",
          description: "Automate the provisioning and management of your infrastructure and application configurations."
        },
        {
          title: "Security Integration",
          description: "Embed security practices throughout the development lifecycle with automated scanning and testing."
        }
      ]}
      benefits={[
        {
          title: "Faster Time to Market",
          description: "Reduce release cycles from months to days or even hours with automated deployment pipelines."
        },
        {
          title: "Improved Reliability",
          description: "Minimize downtime and service disruptions through consistent, tested deployment processes."
        },
        {
          title: "Enhanced Collaboration",
          description: "Break down silos between development and operations teams to improve productivity."
        },
        {
          title: "Scalable Infrastructure",
          description: "Effortlessly scale your applications and infrastructure to meet changing business demands."
        },
        {
          title: "Cost Optimization",
          description: "Reduce infrastructure costs through automation, efficient resource utilization, and waste elimination."
        },
        {
          title: "Continuous Improvement",
          description: "Implement feedback loops that drive ongoing optimization of your development processes."
        }
      ]}
      useCases={[
        {
          title: "Microservices Architecture",
          description: "Set up efficient CI/CD pipelines for complex microservices environments with dozens of services."
        },
        {
          title: "Cloud Migration",
          description: "Transition from on-premises infrastructure to cloud-based environments with minimal disruption."
        },
        {
          title: "Disaster Recovery",
          description: "Implement robust backup and recovery systems that ensure business continuity during outages."
        },
        {
          title: "Compliance Automation",
          description: "Automate compliance checks and documentation for regulated industries like finance and healthcare."
        },
        {
          title: "Multi-Environment Management",
          description: "Consistently manage development, staging, and production environments with identical configurations."
        },
        {
          title: "Release Automation",
          description: "Coordinate complex releases across multiple teams and components with zero downtime."
        }
      ]}
      technologies={[
        "Docker", "Kubernetes", "Terraform", "AWS", "Azure", "Google Cloud",
        "Jenkins", "GitHub Actions", "GitLab CI", "Ansible", "Prometheus", "Grafana"
      ]}
      relatedServices={[
        { name: "Cloud Solutions", path: "/services/cloud" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Machine Learning Ops", path: "/services/mlops" }
      ]}
    />
  );
};

export default DevOpsService;