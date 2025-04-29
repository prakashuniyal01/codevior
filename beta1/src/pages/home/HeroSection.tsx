
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ThreeDSection from '@/components/three/ThreeDSection'
import DataSphere from '@/components/three/models/DataSphere'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const navigate = useNavigate()
  
  return (
    <ThreeDSection
      title="Transforming Ideas with AI & Software Innovation"
      description="We craft intelligent solutions that leverage cutting-edge AI, machine learning, and software development to solve complex business challenges."
      minHeight="min-h-screen"
      background="gradient"
    >
      {/* Only 3D components inside the ThreeCanvas */}
      <DataSphere position={[0, 0, 0]} radius={4} count={3000} interactive={false} />
      
      {/* UI content is placed outside the ThreeCanvas but inside the section */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/contact')}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Services
          </Button>
        </div>
      </motion.div>
    </ThreeDSection>
  )
}

export default HeroSection
