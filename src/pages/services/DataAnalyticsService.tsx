import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { LineChart } from "lucide-react";

const DataAnalyticsService = () => {
  return (
    <ServiceTemplate
      title="Data Analytics"
      subtitle="Transform raw data into actionable business insights"
      description="Our data analytics services help organizations make sense of their data through visualization, reporting, and business intelligence tools that enable data-driven decision making across all levels of the organization."
      icon={<LineChart className="w-10 h-10 text-teal" />}
      features={[
        {
          title: "Data Visualization",
          description: "Create intuitive charts, graphs, and dashboards that make complex data understandable."
        },
        {
          title: "Custom Dashboards",
          description: "Develop tailored dashboards that provide real-time insights for specific business needs."
        },
        {
          title: "Reporting Automation",
          description: "Set up automated reports to deliver key metrics to stakeholders on a regular schedule."
        },
        {
          title: "Business Intelligence",
          description: "Implement BI tools that transform raw data into meaningful insights for decision-makers."
        },
        {
          title: "Data Integration",
          description: "Connect and consolidate data from multiple sources into unified analytics platforms."
        },
        {
          title: "KPI Tracking",
          description: "Design systems to monitor key performance indicators and track progress toward goals."
        }
      ]}
      benefits={[
        {
          title: "Informed Decision Making",
          description: "Base strategic and operational decisions on accurate data rather than intuition."
        },
        {
          title: "Improved Efficiency",
          description: "Identify bottlenecks and inefficiencies in business processes through data analysis."
        },
        {
          title: "Trend Identification",
          description: "Spot emerging patterns and trends before they become obvious to competitors."
        },
        {
          title: "Democratic Data Access",
          description: "Enable teams across the organization to access insights without technical expertise."
        },
        {
          title: "Time Savings",
          description: "Reduce hours spent manually gathering and formatting data for analysis."
        },
        {
          title: "Performance Visibility",
          description: "Gain clear visibility into business performance against goals and benchmarks."
        }
      ]}
      useCases={[
        {
          title: "Sales Analytics",
          description: "Track sales performance, customer acquisition costs, and revenue trends over time."
        },
        {
          title: "Marketing Optimization",
          description: "Measure campaign performance and optimize marketing spend across channels."
        },
        {
          title: "Financial Analysis",
          description: "Monitor financial health through detailed analysis of revenue, expenses, and profitability."
        },
        {
          title: "Customer Insights",
          description: "Analyze customer behavior, preferences, and lifetime value to improve targeting."
        },
        {
          title: "Operational Metrics",
          description: "Track operational efficiency, resource utilization, and process performance."
        },
        {
          title: "Website Analytics",
          description: "Understand user behavior on websites and digital platforms to optimize experiences."
        }
      ]}
      technologies={[
        "Tableau", "Power BI", "Looker", "Google Data Studio", "Sisense", "Qlik", 
        "Domo", "SQL", "Python", "R", "Excel", "Google Analytics"
      ]}
      relatedServices={[
        { name: "Data Science & Analytics", path: "/services/data-science" },
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Business Intelligence", path: "/services/data-science" }
      ]}
    />
  );
};

export default DataAnalyticsService;