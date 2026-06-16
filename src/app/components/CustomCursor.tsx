import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Detect hoverable elements
      const target = e.target as HTMLElement;
      const isHoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("hoverable") ||
        target.closest("button") ||
        target.closest("a");

      setIsHovering(!!isHoverable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Animation loop for smooth cursor
    const animateCursor = () => {
      if (dotRef.current && isVisible) {
        // Smooth interpolation
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.2;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.2;

        dotRef.current.style.left = `${currentPos.current.x}px`;
        dotRef.current.style.top = `${currentPos.current.y}px`;
      }
      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Smooth minimal cursor dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: isHovering ? 14 : 10,
          height: isHovering ? 14 : 10,
          borderRadius: "50%",
          background: isHovering
            ? "linear-gradient(135deg, #EC802B, #EDC55B)"
            : "linear-gradient(135deg, #66BCB4, #A8D5D0)",
          border: isHovering ? "2px solid #FFB86D" : "2px solid rgba(102,188,180,0.6)",
          boxShadow: isHovering
            ? "0 0 15px rgba(236,128,43,0.5), 0 0 30px rgba(236,128,43,0.2)"
            : "0 0 8px rgba(102,188,180,0.3)",
          pointerEvents: "none",
          transform: `translate(calc(-50% + 2px), calc(-50% + 2px)) scale(${isHovering ? 1.2 : 1})`,
          transition: "all 0.15s ease-out",
          opacity: isVisible ? 1 : 0,
          zIndex: 9999,
          pointerEvents: "none",
          zIndex: 9999,
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.2s ease, opacity 0.15s ease",
          boxShadow: "0 0 10px rgba(102,188,180,0.4)",
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: isHovering ? 14 : 10,
          height: isHovering ? 14 : 10,
          borderRadius: "50%",
          background: isHovering
            ? "linear-gradient(135deg, #EC802B, #EDC55B)"
            : "linear-gradient(135deg, #66BCB4, #A8D5D0)",
          border: isHovering ? "2px solid #FFB86D" : "2px solid rgba(102,188,180,0.6)",
          boxShadow: isHovering
            ? "0 0 15px rgba(236,128,43,0.5), 0 0 30px rgba(236,128,43,0.2)"
            : "0 0 8px rgba(102,188,180,0.3)",
          pointerEvents: "none",
          transform: `translate(calc(-50% + 2px), calc(-50% + 2px)) scale(${isHovering ? 1.2 : 1})`,
          transition: "all 0.15s ease-out",
          opacity: isVisible ? 1 : 0,
          zIndex: 9999,
        }}
      />

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
