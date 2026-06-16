import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  color: string;
  icon?: React.ReactNode;
}

interface Carousel3DProps {
  items: CarouselItem[];
  onSelect?: (item: CarouselItem) => void;
}

export function Carousel3D({ items, onSelect }: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleSelect = (item: CarouselItem) => {
    onSelect?.(item);
  };

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + items.length) % items.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(items.length - 1)) return "right";
    if (diff === items.length - 1 || diff === -1) return "left";
    return "far";
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 48,
      }}
    >
      {/* Carousel Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspectiveOrigin: "center",
          perspective: "1000px",
          overflow: "visible",
        }}
      >
        <AnimatePresence>
          {items.map((item, index) => {
            const position = getPosition(index);
            let x = 0;
            let scale = 0.7;
            let opacity = 0.5;
            let zIndex = 0;

            switch (position) {
              case "center":
                x = 0;
                scale = 1.1;
                opacity = 1;
                zIndex = 10;
                break;
              case "right":
                x = 280;
                scale = 0.8;
                opacity = 0.7;
                zIndex = 5;
                break;
              case "left":
                x = -280;
                scale = 0.8;
                opacity = 0.7;
                zIndex = 5;
                break;
              default:
                x = 0;
                scale = 0.5;
                opacity = 0;
                zIndex = 0;
            }

            return (
              <motion.div
                key={item.id}
                animate={{ x, scale, opacity }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  position: "absolute",
                  zIndex: zIndex,
                  cursor: "pointer",
                  width: 280,
                  height: 380,
                }}
                onClick={() => {
                  if (position !== "center") {
                    if (position === "right") handleNext();
                    if (position === "left") handlePrev();
                  }
                  handleSelect(item);
                }}
              >
                {/* Card Container with overflow-visible */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                    border: `1px solid ${item.color}40`,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    overflow: "visible",
                    boxShadow:
                      position === "center"
                        ? `0 20px 40px ${item.color}20, inset 0 1px 0 ${item.color}30`
                        : `0 10px 20px ${item.color}10`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Image/Icon - Overflow visible */}
                  {item.image ? (
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      style={{
                        position: "absolute",
                        top: -40,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 200,
                        height: 200,
                        objectFit: "contain",
                        filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
                      }}
                    />
                  ) : item.icon ? (
                    <motion.div
                      style={{
                        position: "absolute",
                        top: -40,
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: 120,
                        filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ) : null}

                  {/* Content */}
                  <div
                    style={{
                      paddingTop: item.image || item.icon ? 80 : 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      flex: 1,
                      justifyContent: "flex-end",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#E8CCAD",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(232,204,173,0.7)",
                        margin: 0,
                        lineHeight: 1.5,
                        display:
                          position === "center" ? "block" : "none",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <button
          onClick={handlePrev}
          style={{
            background: "rgba(232,204,173,0.08)",
            border: "1px solid rgba(232,204,173,0.2)",
            borderRadius: 8,
            padding: "10px 12px",
            cursor: "pointer",
            color: "#E8CCAD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.background = "rgba(236,128,43,0.15)";
            target.style.borderColor = "rgba(236,128,43,0.4)";
            target.style.color = "#EC802B";
            target.style.boxShadow = "0 0 12px rgba(236,128,43,0.3)";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.background = "rgba(232,204,173,0.08)";
            target.style.borderColor = "rgba(232,204,173,0.2)";
            target.style.color = "#E8CCAD";
            target.style.boxShadow = "none";
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  idx === currentIndex
                    ? "#EC802B"
                    : "rgba(232,204,173,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          style={{
            background: "rgba(232,204,173,0.08)",
            border: "1px solid rgba(232,204,173,0.2)",
            borderRadius: 8,
            padding: "10px 12px",
            cursor: "pointer",
            color: "#E8CCAD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.background = "rgba(236,128,43,0.15)";
            target.style.borderColor = "rgba(236,128,43,0.4)";
            target.style.color = "#EC802B";
            target.style.boxShadow = "0 0 12px rgba(236,128,43,0.3)";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.background = "rgba(232,204,173,0.08)";
            target.style.borderColor = "rgba(232,204,173,0.2)";
            target.style.color = "#E8CCAD";
            target.style.boxShadow = "none";
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
