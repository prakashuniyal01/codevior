
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useNavigate } from 'react-router-dom'

// Generate random points in a sphere
const generateSpherePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = radius * Math.cbrt(Math.random()) // Cube root for uniform distribution
    
    points[i3] = r * Math.sin(phi) * Math.cos(theta)
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    points[i3 + 2] = r * Math.cos(phi)
  }
  
  return points
}

interface DataSphereProps {
  count?: number
  radius?: number
  size?: number
  color?: string
  position?: [number, number, number]
  interactive?: boolean
  pulse?: boolean
  rotate?: boolean
  speed?: number
}

const DataSphere = ({ 
  count = 2000, 
  radius = 3, 
  size = 0.05,
  color = '#6E59A5',
  position = [0, 0, 0],
  interactive = false,
  pulse = false,
  rotate = true,
  speed = 1
}: DataSphereProps) => {
  const ref = useRef<THREE.Points>(null!)
  const particlesRef = useRef<THREE.BufferAttribute>(null!)
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const [points] = useState(() => generateSpherePoints(count, radius))
  const [originalPoints] = useState([...points])
  
  useEffect(() => {
    if (particlesRef.current) {
      // Create geometry and attributes
      const positionAttribute = new THREE.BufferAttribute(points, 3)
      particlesRef.current = positionAttribute
    }
  }, [points])

  // Animation effect on hover
  useFrame((state, delta) => {
    if (!ref.current) return
    
    // Base rotation
    if (rotate) {
      ref.current.rotation.x += delta * 0.05 * speed
      ref.current.rotation.y += delta * 0.08 * speed
    }
    
    // Enhanced rotation on hover
    if (hovered && interactive) {
      ref.current.rotation.x += delta * 0.2 * speed
      ref.current.rotation.y += delta * 0.3 * speed
    }
    
    // Pulsing effect
    if (pulse && particlesRef.current) {
      const positions = particlesRef.current.array as Float32Array
      const time = state.clock.getElapsedTime()
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const originalX = originalPoints[i3]
        const originalY = originalPoints[i3 + 1]
        const originalZ = originalPoints[i3 + 2]
        
        // Calculate distance from center
        const dist = Math.sqrt(
          originalX * originalX + originalY * originalY + originalZ * originalZ
        )
        
        // Pulse factor based on time and distance
        const pulseFactor = 0.05 * Math.sin(time * 2 + dist * 0.5) + 1
        
        // Apply pulse
        positions[i3] = originalX * pulseFactor
        positions[i3 + 1] = originalY * pulseFactor
        positions[i3 + 2] = originalZ * pulseFactor
      }
      
      particlesRef.current.needsUpdate = true
    }
  })
  
  useEffect(() => {
    if (interactive) {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }
  }, [hovered, interactive])

  return (
    <group position={position}>
      <Points
        ref={ref}
        positions={points}
        stride={3}
        frustumCulled={false}
        onPointerOver={() => interactive && setHovered(true)}
        onPointerOut={() => interactive && setHovered(false)}
        onClick={() => interactive && navigate('/services')}
      >
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default DataSphere
