import { Canvas } from "@react-three/fiber"
import { Suspense, Component, ReactNode } from "react"
import Scene from "./Scene"
import Overlay from "./Overlay"
import LoadingScreen from "./LoadingScreen"

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default function Gallery3D() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background"
      style={{
        backgroundImage: "url('https://cdn.poehali.dev/projects/aff61de3-2355-4c86-875f-c2b92d34a3c4/bucket/e0732449-e593-4c54-a13e-b028bbe62b8e.jpg')",
        backgroundSize: "65%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <CanvasErrorBoundary>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: false }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
      <Overlay />
      <LoadingScreen />
    </div>
  )
}