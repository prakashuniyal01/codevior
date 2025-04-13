import React from "react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { Layers } from "lucide-react";

const ComputerVisionService = () => {
  return (
    <ServiceTemplate
      title="Computer Vision"
      subtitle="Extract insights from images and video with advanced AI"
      description="Our computer vision services help organizations automate visual inspection, enhance security systems, and extract valuable data from images and video streams using state-of-the-art machine learning techniques."
      icon={<Layers className="w-10 h-10 text-teal" />}
      features={[
        {
          title: "Object Detection",
          description: "Identify and locate multiple objects within images and video streams in real-time."
        },
        {
          title: "Image Classification",
          description: "Automatically categorize images based on their content with high accuracy."
        },
        {
          title: "Facial Recognition",
          description: "Detect, analyze, and identify faces for security, access control, and user experience applications."
        },
        {
          title: "Optical Character Recognition",
          description: "Extract text from images, documents, and handwritten notes with high precision."
        },
        {
          title: "Video Analytics",
          description: "Monitor and analyze video streams for specific events, behaviors, or anomalies."
        },
        {
          title: "Visual Inspection",
          description: "Automate quality control by detecting defects and inconsistencies in manufacturing processes."
        }
      ]}
      benefits={[
        {
          title: "Automation at Scale",
          description: "Process thousands of images or hours of video automatically without human intervention."
        },
        {
          title: "Enhanced Security",
          description: "Improve threat detection and prevention through automated surveillance and monitoring."
        },
        {
          title: "Consistent Quality",
          description: "Eliminate human error and fatigue in visual inspection and quality control processes."
        },
        {
          title: "New Data Sources",
          description: "Extract valuable insights from previously untapped visual data sources."
        },
        {
          title: "Operational Efficiency",
          description: "Reduce the time and resources required for tasks that rely on visual information."
        },
        {
          title: "Enhanced User Experiences",
          description: "Create innovative and intuitive interfaces based on visual recognition capabilities."
        }
      ]}
      useCases={[
        {
          title: "Manufacturing Quality Control",
          description: "Automatically inspect products for defects with greater accuracy than manual inspection."
        },
        {
          title: "Retail Analytics",
          description: "Track customer flow, analyze shelf inventory, and optimize store layouts using camera data."
        },
        {
          title: "Medical Imaging Analysis",
          description: "Assist medical professionals in detecting anomalies in X-rays, MRIs, and other medical images."
        },
        {
          title: "Agriculture Monitoring",
          description: "Analyze crop health, detect pests, and optimize irrigation using drone or satellite imagery."
        },
        {
          title: "Autonomous Vehicles",
          description: "Enable vehicles to perceive and understand their surroundings for navigation and safety."
        },
        {
          title: "Document Processing",
          description: "Automatically extract and organize information from scanned documents and forms."
        }
      ]}
      technologies={[
        "TensorFlow", "PyTorch", "OpenCV", "YOLO", "Faster R-CNN", "ResNet", 
        "MobileNet", "Mask R-CNN", "DeepLabv3", "Tesseract OCR", "MediaPipe", "NVIDIA CUDA"
      ]}
      relatedServices={[
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Data Science & Analytics", path: "/services/data-science" },
        { name: "Research & Development", path: "/services/research" }
      ]}
    />
  );
};

export default ComputerVisionService;
