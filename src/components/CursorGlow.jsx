import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <div
      className="
        fixed
        pointer-events-none
        z-0
      "
      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
    >
      <div
        className="
          w-[300px]
          h-[300px]
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />
    </div>
  );
}