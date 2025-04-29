import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ThreeCanvas from "@/components/three/ThreeCanvas";
import DataSphere from "@/components/three/models/DataSphere";
import { Suspense } from "react";
import { LoadingFallback } from "@/components/three/models/Fallbacks";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 hero-gradient"></div>
      <ThreeCanvas>
        <Suspense fallback={<LoadingFallback />}>
          <DataSphere 
            position={[0, 0, 0]} 
            radius={4} 
            count={2000} 
            color="#6E59A5" 
            interactive={false} 
          />
        </Suspense>
      </ThreeCanvas>
      
      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-8xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Oops! This space doesn't exist yet.</p>
        <Button size="lg" onClick={() => navigate('/')}>
          Return to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
