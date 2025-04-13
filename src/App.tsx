// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Pages
// import Index from "./pages/index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Partners from "./pages/Partners";
// import Career from "./pages/Career";
// import Contact from "./pages/Contact";
// import Tech from "./pages/Tech";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/partners" element={<Partners />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/tech" element={<Tech />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "@/hooks/use-auth";

// Pages
import Index from "./pages/index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Partners from "./pages/Partners";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Tech from "./pages/Tech";
// import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

// Service Pages
import AiNlpService from "./pages/services/AiNlpService";
import DataScienceService from "./pages/services/DataScienceService";
import AgenticAiService from "./pages/services/AgenticAiService";
import MlopsService from "./pages/services/MlopsService";
import ResearchService from "./pages/services/ResearchService";
import ComputerVisionService from "./pages/services/ComputerVisionService";
import WebDevService from "./pages/services/WebDevService";
import UiUxService from "./pages/services/UiUxService";
import CloudService from "./pages/services/CloudService";
import DataAnalyticsService from "./pages/services/DataAnalyticsService";
import DevOpsService from "./pages/services/DevOpsService";
import TalentService from "./pages/services/TalentService";

// Admin Pages
// import Dashboard from "./pages/admin/Dashboard";
// import AdminServices from "./pages/admin/Services";
// import AdminMessages from "./pages/admin/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <AuthProvider> */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tech" element={<Tech />} />
            {/* <Route path="/auth" element={<Auth />} /> */}
            
            {/* Service Detail Routes */}
            <Route path="/services/ai-nlp" element={<AiNlpService />} />
            <Route path="/services/data-science" element={<DataScienceService />} />
            <Route path="/services/agentic-ai" element={<AgenticAiService />} />
            <Route path="/services/mlops" element={<MlopsService />} />
            <Route path="/services/research" element={<ResearchService />} />
            <Route path="/services/computer-vision" element={<ComputerVisionService />} />
            <Route path="/services/web-development" element={<WebDevService />} />
            <Route path="/services/ui-ux-design" element={<UiUxService />} />
            <Route path="/services/cloud" element={<CloudService />} />
            <Route path="/services/data-analytics" element={<DataAnalyticsService />} />
            <Route path="/services/devops" element={<DevOpsService />} />
            <Route path="/services/talent" element={<TalentService />} />
            
            {/* Admin Routes */}
            {/* <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/messages" element={<AdminMessages />} /> */}
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    {/* </AuthProvider> */}
  </QueryClientProvider>
);

export default App;
