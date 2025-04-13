import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Users } from "lucide-react";

const TalentService = () => {
  return (
    <ServiceTemplate
      title="Tech Talent Solutions"
      subtitle="Access top AI and software engineering talent for your projects"
      description="Our talent solutions help organizations build and augment their technical teams with skilled AI specialists, data scientists, and software engineers through staff augmentation, technical interviews, and talent acquisition services."
      icon={<Users className="w-10 h-10 text-teal" />}
      features={[
        {
          title: "Team Augmentation",
          description: "Supplement your in-house team with specialized talent for specific projects or ongoing work."
        },
        {
          title: "Technical Interviews",
          description: "Expert-led technical assessments to evaluate candidates' skills and experience."
        },
        {
          title: "Skill Assessment",
          description: "Comprehensive evaluation of technical skills, problem-solving abilities, and cultural fit."
        },
        {
          title: "Talent Acquisition",
          description: "Full-cycle recruitment services to help you find and hire the right technical talent."
        },
        {
          title: "AI Team Building",
          description: "Strategic guidance for building effective AI and data science teams from the ground up."
        },
        {
          title: "Knowledge Transfer",
          description: "Structured programs to help your team acquire specialized skills from our experts."
        }
      ]}
      benefits={[
        {
          title: "Faster Time-to-Market",
          description: "Accelerate project timelines by quickly adding specialized expertise to your team."
        },
        {
          title: "Cost Efficiency",
          description: "Reduce overhead costs associated with full-time hiring while maintaining quality."
        },
        {
          title: "Access to Expertise",
          description: "Tap into specialized skills that may be difficult to find or prohibitively expensive to hire."
        },
        {
          title: "Flexible Scaling",
          description: "Easily scale your technical team up or down based on project requirements."
        },
        {
          title: "Reduced Hiring Risk",
          description: "Minimize the risk of making costly hiring mistakes through expert technical evaluation."
        },
        {
          title: "Knowledge Diversity",
          description: "Bring fresh perspectives and industry best practices into your organization."
        }
      ]}
      useCases={[
        {
          title: "Project-Based Staffing",
          description: "Bring in specialized talent for time-limited projects without long-term commitments."
        },
        {
          title: "Technical Team Expansion",
          description: "Rapidly scale your technical team to meet growing business demands."
        },
        {
          title: "Specialized Skill Access",
          description: "Access hard-to-find expertise in emerging technologies like AI, ML, and blockchain."
        },
        {
          title: "Technical Interview Support",
          description: "Enhance your hiring process with expert technical assessments of candidates."
        },
        {
          title: "Startup Team Building",
          description: "Build a technical team for your startup with guidance from experienced professionals."
        },
        {
          title: "Digital Transformation",
          description: "Access the specialized talent needed to drive successful digital transformation initiatives."
        }
      ]}
      technologies={[
        "AI/ML", "Data Science", "Full-Stack", "Frontend", "Backend", "DevOps", 
        "Cloud", "Mobile", "Blockchain", "IoT", "Security", "QA/Testing"
      ]}
      relatedServices={[
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "DevOps", path: "/services/devops" }
      ]}
    />
  );
};

export default TalentService;