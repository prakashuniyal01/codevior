
import { Eye, CheckCircle2, Sparkles } from 'lucide-react'
import ThreeDSection from '@/components/three/ThreeDSection'
import DataSphere from '@/components/three/models/DataSphere'

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  </div>
)

const WhyChooseUs = () => {
  return (
    <ThreeDSection
      background="primary"
      minHeight="py-24"
      className="py-24"
      textAnimation={false}
    >
      <DataSphere position={[0, 0, 0]} radius={3} count={2000} color="#0EA5E9" interactive={false} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Why Choose Codevior
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine technical expertise with innovative thinking to deliver solutions that drive real business value.
            </p>
            
            <div className="space-y-6">
              <Feature 
                icon={<Eye size={20} className="text-primary" />}
                title="Cutting-edge Technology"
                description="We stay at the forefront of technological advancements to bring the most innovative solutions to our clients."
              />
              
              <Feature 
                icon={<CheckCircle2 size={20} className="text-primary" />}
                title="Expert Team"
                description="Our team of seasoned professionals brings depth of knowledge and creative problem-solving to every project."
              />
              
              <Feature 
                icon={<Sparkles size={20} className="text-primary" />}
                title="Tailored Solutions"
                description="We develop custom solutions that precisely meet your business needs and challenges."
              />
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square w-full h-full rounded-lg overflow-hidden glass">
              {/* This div creates space for the 3D element */}
            </div>
          </div>
        </div>
      </div>
    </ThreeDSection>
  )
}

export default WhyChooseUs
