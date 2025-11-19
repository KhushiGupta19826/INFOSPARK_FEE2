import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #a370f0ff 0%, #2d0556ff 100%)",
      position: "fixed",
      inset: 0,
      zIndex: -1
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60 },
            color: { value: "#e0c8ff" },
            links: {
              enable: true,
              color: "#e0c8ff",
              distance: 140
            },
            move: { enable: true, speed: 1.3 }
          },
        }}
      />
    </div>
  );
}
