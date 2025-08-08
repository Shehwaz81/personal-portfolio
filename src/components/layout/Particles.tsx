// src/components/ParticlesBackground.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Use slim instead of full

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        particles: {
          number: { value: 80 },
          color: { value: "#00FFFF" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            speed: 0.4,
            direction: "right"
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: { 
            repulse: { distance: 100 } 
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};