import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'

function TrainPlaceholder() {
  return (
    <mesh>
      <boxGeometry args={[2.4, 0.6, 1]} />
      <meshStandardMaterial color="#0ea5e9" />
    </mesh>
  )
}

export function TrainScene() {
  const canRender =
    typeof window !== 'undefined' &&
    !!window.WebGLRenderingContext &&
    (import.meta.env.VITE_ENABLE_3D ?? 'true') !== 'false'

  if (!canRender) {
    return (
      <div className="flex h-72 w-full items-center justify-center rounded-card border border-white/10 bg-dark-900">
        <div className="text-sm text-white/60">3D preview disabled</div>
      </div>
    )
  }

  return (
    <div className="h-72 w-full">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 3, 3]} color="#00d4ff" intensity={2} />
        <Environment preset="night" />
        <Float floatIntensity={1.5} rotationIntensity={0.5}>
          <TrainPlaceholder />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}
