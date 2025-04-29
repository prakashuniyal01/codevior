
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stars, Environment } from '@react-three/drei'
import { Suspense, ReactNode } from 'react'

interface ThreeCanvasProps {
  children: ReactNode
  camera?: {
    position: [number, number, number]
    fov?: number
  }
  controls?: boolean
  stars?: boolean
  environment?: boolean
  environmentPreset?: 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest' | 'apartment' | 'studio' | 'city' | 'park' | 'lobby'
  className?: string
  controlsConfig?: {
    autoRotate?: boolean
    enableZoom?: boolean
    enablePan?: boolean
    maxPolarAngle?: number
    minPolarAngle?: number
    rotateSpeed?: number
  }
}

const ThreeCanvas = ({ 
  children, 
  camera = { position: [0, 0, 10], fov: 75 },
  controls = true,
  stars = false,
  environment = false,
  environmentPreset = 'night',
  className = "",
  controlsConfig = {}
}: ThreeCanvasProps) => {
  const {
    autoRotate = false,
    enableZoom = false,
    enablePan = false,
    maxPolarAngle = Math.PI / 2,
    minPolarAngle = Math.PI / 4,
    rotateSpeed = 0.5
  } = controlsConfig
  
  return (
    <div className={`canvas-container ${className}`}>
      <Canvas
        camera={{ 
          position: camera.position, 
          fov: camera.fov || 75, 
          near: 0.1, 
          far: 1000 
        }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize={1024} 
          />
          
          {environment && (
            <Environment preset={environmentPreset} />
          )}
          
          {stars && (
            <Stars 
              radius={100} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={1} 
            />
          )}
          
          {children}
          
          {controls && <OrbitControls 
            enableZoom={enableZoom} 
            enablePan={enablePan}
            maxPolarAngle={maxPolarAngle}
            minPolarAngle={minPolarAngle}
            rotateSpeed={rotateSpeed}
            autoRotate={autoRotate}
            autoRotateSpeed={1}
          />}
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeCanvas
