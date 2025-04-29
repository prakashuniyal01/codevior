
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface CodeviorLogoProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  emissive?: string
  distort?: number
  speed?: number
}

const CodeviorLogo = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color = '#6E59A5',
  emissive = '#0EA5E9',
  distort = 0.3,
  speed = 1
}: CodeviorLogoProps) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1 * speed) * 0.1
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1 * speed) * 0.05
    }
  })

  return (
    <group position={position} rotation={rotation as unknown as THREE.Euler} scale={scale}>
      <mesh ref={meshRef}>
        <Text3D
          font="/fonts/inter_bold.json"
          size={1}
          height={0.2}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          bevelSegments={5}
        >
          {'Codevior'}
          <MeshDistortMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
            distort={distort}
            speed={2}
          />
        </Text3D>
      </mesh>
    </group>
  )
}

export default CodeviorLogo
