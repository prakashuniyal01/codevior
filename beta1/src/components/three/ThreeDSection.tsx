
import React, { Suspense, ReactNode } from 'react'
import { motion } from 'framer-motion'
import ThreeCanvas from './ThreeCanvas'
import { LoadingFallback } from './models/Fallbacks'

interface ThreeDSectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
  textClassName?: string;
  minHeight?: string;
  background?: 'none' | 'gradient' | 'primary' | 'secondary';
  textPosition?: 'left' | 'center' | 'right';
  textAnimation?: boolean;
  fullWidth?: boolean;
}

const ThreeDSection = ({
  children,
  title,
  description,
  className = "",
  contentClassName = "",
  textClassName = "",
  minHeight = "min-h-screen",
  background = 'gradient',
  textPosition = 'left',
  textAnimation = true,
  fullWidth = false
}: ThreeDSectionProps) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'none':
        return '';
      case 'gradient':
        return 'hero-gradient';
      case 'primary':
        return 'bg-primary/5';
      case 'secondary':
        return 'bg-secondary/5';
      default:
        return 'hero-gradient';
    }
  };

  const getTextPositionClass = () => {
    switch (textPosition) {
      case 'left':
        return '';
      case 'center':
        return 'text-center mx-auto';
      case 'right':
        return 'ml-auto';
      default:
        return '';
    }
  };

  // Separate 3D children from regular React UI children
  const threeJsChildren: ReactNode[] = [];
  const uiChildren: ReactNode[] = [];
  
  // React 18 doesn't have Children.toArray typings that work well with TypeScript
  // so we need to cast to any for this operation
  React.Children.forEach(children as any, child => {
    // Check if the child is a 3D element (DataSphere, etc.)
    // This is a simplified check - we're assuming any component with a "position" prop is a 3D element
    if (child && child.props && child.props.position !== undefined) {
      threeJsChildren.push(child);
    } else {
      uiChildren.push(child);
    }
  });

  return (
    <section className={`relative ${minHeight} flex items-center ${className}`}>
      {background !== 'none' && (
        <div className={`absolute inset-0 ${getBackgroundClass()}`}></div>
      )}
      
      <ThreeCanvas className="!absolute inset-0">
        <Suspense fallback={<LoadingFallback />}>
          {threeJsChildren}
        </Suspense>
      </ThreeCanvas>
      
      <div className={`container mx-auto px-4 relative z-10 ${contentClassName}`}>
        {(title || description) && (
          <motion.div
            initial={textAnimation ? { opacity: 0, y: 50 } : undefined}
            animate={textAnimation ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8 }}
            className={`${fullWidth ? 'w-full' : 'max-w-2xl'} ${getTextPositionClass()} ${textClassName}`}
          >
            {title && (
              <h1 className="headline mb-6 gradient-text font-bold">
                {title}
              </h1>
            )}
            {description && (
              <p className="subheadline mb-8">
                {description}
              </p>
            )}
          </motion.div>
        )}
        
        {/* Render UI children outside the ThreeCanvas */}
        {uiChildren}
      </div>
    </section>
  )
}

export default ThreeDSection
