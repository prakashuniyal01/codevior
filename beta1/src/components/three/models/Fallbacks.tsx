
import { Html, useProgress } from '@react-three/drei'
import { motion } from 'framer-motion'

export const LogoFallback = () => {
  return (
    <Html center>
      <motion.div 
        className="text-4xl font-bold gradient-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.65, 0, 0.35, 1]
          }
        }}
      >
        Codevior
      </motion.div>
    </Html>
  )
}

export const LoadingFallback = () => {
  const { progress } = useProgress()
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-8 backdrop-blur-sm bg-background/30 rounded-lg">
        <div className="w-16 h-16 relative mb-4">
          <div className="w-full h-full border-4 border-primary/30 rounded-full"></div>
          <motion.div 
            className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full"
            animate={{ 
              rotate: 360,
              transition: { 
                duration: 1.5, 
                ease: "linear", 
                repeat: Infinity 
              }
            }}
          ></motion.div>
        </div>
        <p className="text-xl font-medium gradient-text mb-2">Loading 3D Elements...</p>
        <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{progress.toFixed(0)}%</p>
      </div>
    </Html>
  )
}

export const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <Html center>
      <div className="bg-destructive/10 p-6 rounded-lg max-w-xs text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-destructive"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <h3 className="text-lg font-semibold text-destructive mb-2">Failed to load 3D content</h3>
        <p className="text-sm text-muted-foreground">{error.message}</p>
      </div>
    </Html>
  )
}
