
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import DataSphere from '@/components/three/models/DataSphere'
import { useToast } from '@/components/ui/use-toast'
import ThreeDSection from '@/components/three/ThreeDSection'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const Portfolio = () => {
  const { toast } = useToast()
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  const categories = ['all', 'ai', 'ml', 'web', 'mobile', 'software']
  
  useEffect(() => {
    // Simulating API fetch for portfolio items
    const fetchPortfolioItems = () => {
      setIsLoading(true)
      
      // Mock data - in a real app, this would come from an API
      const items: PortfolioItem[] = [
        {
          id: 1,
          title: 'AI-Powered Customer Service Platform',
          category: 'ai',
          image: 'https://placehold.co/600x400/6E59A5/FFFFFF?text=AI+Platform',
          description: 'An intelligent customer service solution that leverages NLP to automate responses.'
        },
        {
          id: 2,
          title: 'Predictive Analytics Dashboard',
          category: 'ml',
          image: 'https://placehold.co/600x400/0EA5E9/FFFFFF?text=ML+Dashboard',
          description: 'Machine learning model that predicts market trends with 95% accuracy.'
        },
        {
          id: 3,
          title: 'E-commerce Platform',
          category: 'web',
          image: 'https://placehold.co/600x400/F97316/FFFFFF?text=Web+Platform',
          description: 'Fully responsive e-commerce solution with integrated payment processing.'
        },
        {
          id: 4,
          title: 'Health Tracking App',
          category: 'mobile',
          image: 'https://placehold.co/600x400/D946EF/FFFFFF?text=Mobile+App',
          description: 'Mobile application for tracking fitness goals and health metrics.'
        },
        {
          id: 5,
          title: 'Enterprise Resource Planning System',
          category: 'software',
          image: 'https://placehold.co/600x400/22C55E/FFFFFF?text=ERP+System',
          description: 'Comprehensive ERP solution for manufacturing businesses.'
        },
        {
          id: 6,
          title: 'Computer Vision Security System',
          category: 'ai',
          image: 'https://placehold.co/600x400/6E59A5/FFFFFF?text=AI+Security',
          description: 'AI-powered security system that uses computer vision for threat detection.'
        },
      ]
      
      setPortfolioItems(items)
      setFilteredItems(items)
      setIsLoading(false)
    }
    
    fetchPortfolioItems()
  }, [])
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory))
    }
  }, [activeCategory, portfolioItems])
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    toast({
      title: "Category Changed",
      description: `Viewing ${category.toUpperCase()} projects`,
      duration: 2000,
    })
  }
  
  return (
    <>
      {/* Hero Section with 3D Background */}
      <ThreeDSection
        title="Our Portfolio"
        description="Explore our showcase of innovative projects that demonstrate our expertise in AI, ML, and software development."
        minHeight="min-h-[50vh]"
      >
        <DataSphere 
          position={[0, 0, 0]} 
          radius={3.5} 
          count={3500} 
          color="#0EA5E9" 
          interactive={false} 
        />
      </ThreeDSection>
      
      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="mb-12 flex justify-center">
            <div className="glass p-2 rounded-full flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className="rounded-full capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Portfolio Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="glass rounded-lg overflow-hidden hover-scale cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="relative h-52">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-white mb-2">
                          {item.category.toUpperCase()}
                        </span>
                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button variant="link" className="p-0">View Case Study</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <ThreeDSection
        background="gradient"
        minHeight="py-24"
        className="py-24"
        textPosition="center"
      >
        <DataSphere 
          position={[0, 0, 0]} 
          radius={4} 
          count={2000} 
          color="#D946EF" 
          interactive={false} 
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Next Project?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's collaborate to bring your innovative ideas to life with our expertise in AI, ML, and software development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg">Get in Touch</Button>
            </motion.div>
          </div>
        </div>
      </ThreeDSection>
    </>
  )
}

export default Portfolio
