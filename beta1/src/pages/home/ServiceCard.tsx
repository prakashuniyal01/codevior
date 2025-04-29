
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, route, delay = 0 }: ServiceCardProps) => {
  const navigate = useNavigate()
  
  return (
    <motion.div 
      className="p-6 glass rounded-lg transition-all"
      whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(110, 89, 165, 0.3)' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="w-14 h-14 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <Button variant="link" className="p-0" onClick={() => navigate(route)}>
        Learn more
      </Button>
    </motion.div>
  )
}

export default ServiceCard
