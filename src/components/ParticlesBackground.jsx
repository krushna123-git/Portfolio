import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,

        particles: {
          number: {
            value: 40,
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#3b82f6",
            opacity: 0.15,
            distance: 150,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
        },

        background: {
          color: "transparent",
        },
      }}
      className="fixed inset-0 -z-10"
    />
  );
}