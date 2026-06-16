import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./useInView";

const categories = ["Todos", "E-commerce", "Corporate", "SaaS", "Landing"];

const projects = [
  {
    title: "BH(colaboraciones)",
    category: "E-commerce",
    description: "Plataforma de comercio electrónico de alta velocidad para colaboraciones de moda. Cuenta con checkout optimizado, pasarela fluida y carga ultra rápida.",
    tech: ["HTML5", "CSS Grid", "Vanilla JS", "GitHub Pages"],
    metrics: { speed: "0.8s LCP", score: "99/100", conv: "+42%" },
    color: "#EC802B",
    // Imagen temática de tienda/ropa premium
    image: "https://cdn.pixabay.com/photo/2018/11/30/08/36/burger-3847278_1280.jpg",
    device: "laptop",
    github: "https://diego-mosqueda.github.io/BH/"
  },
  {
    title: "Control Financiero",
    category: "SaaS",
    description: "Aplicación interactiva para la gestión de ingresos, gastos y portafolio de inversión. Incluye gráficos analíticos detallados y control de balance en tiempo real.",
    tech: ["HTML5", "CSS Variables", "JavaScript", "LocalStorage"],
    metrics: { speed: "0.9s LCP", score: "97/100", conv: "+31%" },
    color: "#EDC55B",
    // Imagen temática de finanzas y gráficas oscuras
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    device: "laptop",
    github: "https://diego-mosqueda.github.io/Control-Financiero-y-Portafolio-de-Inversi-n/"
  },
  {
    title: "Space Invaders",
    category: "Landing",
    description: "Recreación interactiva del clásico videojuego arcade totalmente jugable en web, optimizado con renderizado de alto rendimiento y controles adaptados.",
    tech: ["HTML5 Canvas", "CSS Animations", "JS OO (Clases)"],
    metrics: { speed: "0.4s LCP", score: "100/100", conv: "+85%" },
    color: "#66BCB4",
    // Imagen temática retro gaming / arcade pixel art
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop&auto=format",
    device: "phone",
    github: "https://diego-mosqueda.github.io/Space-Invaders-/"
  },
  {
    title: "INNOMMX: Innovación en Pulverización Industrial",
    category: "Corporate",
    description: "Sitio web corporativo oficial para INNOMMX. Presentación de maquinaria industrial, catálogo interactivo con transiciones modernas y diseño altamente responsivo.",
    tech: ["React/Tailwind", "Motion", "CSS Grid", "Web Performance"],
    metrics: { speed: "1.1s LCP", score: "96/100", conv: "+24%" },
    color: "#EC802B",
    // Imagen temática de industria pesada / ingeniería de pulverización
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format",
    device: "laptop",
    github: "https://www.innommx.mx/"
  }
];

type Project = (typeof projects)[0];

function LaptopMockup({ image, color, hovered }: { image: string; color: string; hovered: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.5s ease",
        transform: hovered
          ? "perspective(900px) rotateY(-4deg) rotateX(2deg) scale(1.03)"
          : "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)",
      }}
    >
      {/* Lid */}
      <div
        style={{
          width: "90%",
          background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
          borderRadius: "10px 10px 0 0",
          padding: "8px 8px 0 8px",
          boxShadow: `0 -4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)`,
          border: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "none",
          position: "relative",
        }}
      >
        {/* Camera */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#333",
              border: "1px solid #444",
              boxShadow: `0 0 0 1px rgba(255,255,255,0.04)`,
            }}
          />
        </div>
        {/* Screen */}
        <div
          style={{
            borderRadius: "4px 4px 0 0",
            overflow: "hidden",
            aspectRatio: "16/10",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "none",
            boxShadow: `inset 0 0 30px rgba(0,0,0,0.6)`,
          }}
        >
          {/* Browser bar */}
          <div
            style={{
              height: 22,
              background: "#1e1e1e",
              display: "flex",
              alignItems: "center",
              padding: "0 8px",
              gap: 5,
              borderBottom: "1px solid #111",
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f56" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#27c93f" }} />
            <div
              style={{
                flex: 1,
                marginLeft: 6,
                height: 12,
                borderRadius: 4,
                background: "#2a2a2a",
                border: "1px solid #333",
              }}
            />
          </div>
          <img
            src={image}
            alt=""
            style={{ 
              width: "100%", 
              height: "calc(100% - 22px)", 
              objectFit: "cover", 
              objectPosition: "top", 
              display: "block" 
            }}
          />
        </div>
      </div>
      {/* Base */}
      <div
        style={{
          width: "94%",
          height: 12,
          background: "linear-gradient(180deg, #252525, #1a1a1a)",
          borderRadius: "0 0 4px 4px",
          boxShadow: `0 4px 16px rgba(0,0,0,0.5)`,
          border: "1px solid rgba(255,255,255,0.05)",
          borderTop: "none",
          position: "relative",
        }}
      >
        {/* Trackpad hint */}
        <div
          style={{
            position: "absolute",
            bottom: 2,
            left: "50%",
            transform: "translateX(-50%)",
            width: 30,
            height: 5,
            borderRadius: 3,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />
      </div>
      {/* Shadow */}
      <div
        style={{
          width: "80%",
          height: 6,
          background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
          marginTop: 2,
        }}
      />
    </div>
  );
}

function PhoneMockup({ image, color, hovered }: { image: string; color: string; hovered: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        transition: "transform 0.5s ease",
        transform: hovered
          ? "perspective(700px) rotateY(4deg) rotateX(-2deg) scale(1.05)"
          : "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)",
      }}
    >
      <div
        style={{
          width: 130,
          background: "linear-gradient(145deg, #2c2c2c, #1a1a1a)",
          borderRadius: 24,
          padding: "10px 6px",
          boxShadow: `
            0 20px 50px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.07),
            inset 0 1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
        }}
      >
        {/* Side buttons */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 60,
            width: 3,
            height: 20,
            background: "#2a2a2a",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 88,
            width: 3,
            height: 20,
            background: "#2a2a2a",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 72,
            width: 3,
            height: 32,
            background: "#2a2a2a",
            borderRadius: "0 2px 2px 0",
          }}
        />
        {/* Screen */}
        <div
          style={{
            borderRadius: 17,
            overflow: "hidden",
            aspectRatio: "9/19",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.05)",
            position: "relative",
          }}
        >
          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 50,
              height: 18,
              background: "#1a1a1a",
              borderRadius: "0 0 14px 14px",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#333" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#222", border: "1px solid #333" }} />
          </div>
          {/* Status bar */}
          <div
            style={{
              height: 20,
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.7)", fontFamily: "monospace" }}>9:41</span>
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <div style={{ width: 8, height: 5, border: "1px solid rgba(255,255,255,0.5)", borderRadius: 1, position: "relative" }}>
                <div style={{ position: "absolute", inset: 1, background: color, borderRadius: 0.5 }} />
              </div>
            </div>
          </div>
          <img
            src={image}
            alt=""
            style={{ 
              width: "100%", 
              height: "calc(100% - 20px)", 
              objectFit: "cover", 
              objectPosition: "top", 
              display: "block" 
            }}
          />
          {/* Home indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 36,
              height: 4,
              borderRadius: 2,
              background: "rgba(255,255,255,0.25)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(232,204,173,0.08)",
        background: "#1c1208",
        cursor: "pointer",
        display: "block",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Device Mockup Area */}
      <div
        style={{
          position: "relative",
          padding: project.device === "laptop" ? "24px 16px 12px" : "24px 16px",
          background: `radial-gradient(ellipse at 50% 0%, ${project.color}14 0%, #140e05 70%)`,
          minHeight: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow behind device */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 40,
            background: `radial-gradient(ellipse, ${project.color}22 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {project.device === "laptop" ? (
          <LaptopMockup image={project.image} color={project.color} hovered={hovered} />
        ) : (
          <PhoneMockup image={project.image} color={project.color} hovered={hovered} />
        )}

        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            padding: "4px 12px",
            borderRadius: 100,
            background: "rgba(15,10,5,0.75)",
            backdropFilter: "blur(8px)",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: project.color,
            letterSpacing: "0.06em",
            border: `1px solid ${project.color}30`,
          }}
        >
          {project.category}
        </span>

        {hovered && (
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 36,
              height: 36,
              borderRadius: 8,
              background: project.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "pop-in 0.18s ease",
            }}
          >
            <ExternalLink size={16} color="#0f0a05" />
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "#E8CCAD",
            margin: "0 0 8px 0",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: "rgba(232,204,173,0.55)",
            lineHeight: 1.6,
            margin: "0 0 16px 0",
          }}
        >
          {project.description}
        </p>

        {/* Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            marginBottom: 16,
          }}
        >
          {Object.entries(project.metrics).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: "10px 8px",
                borderRadius: 8,
                background: `${project.color}0d`,
                border: `1px solid ${project.color}18`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: project.color,
                  letterSpacing: "-0.02em",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "rgba(232,204,173,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginTop: 2,
                }}
              >
                {key}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 9px",
                borderRadius: 5,
                background: "rgba(232,204,173,0.05)",
                border: "1px solid rgba(232,204,173,0.1)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "rgba(232,204,173,0.45)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function Portfolio() {
  const { ref, inView } = useInView();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      style={{ padding: "120px 24px", background: "linear-gradient(to bottom, #0f0a05, #120d06)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            marginBottom: 56,
            transition: "opacity 0.6s ease, transform 0.6s ease",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "#EDC55B",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Portfolio
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
              marginTop: 12,
            }}
          >
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "#E8CCAD",
                margin: 0,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Casos de éxito<span style={{ color: "#EDC55B" }}> reales</span>
            </h2>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: "rgba(232,204,173,0.5)",
                padding: 0,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#E8CCAD";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(232,204,173,0.5)";
              }}
            >
              Ver todos <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 100,
                  background: isActive ? "#EC802B" : "transparent",
                  border: isActive ? "1px solid #EC802B" : "1px solid rgba(232,204,173,0.12)",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: 14,
                  color: isActive ? "#0f0a05" : "rgba(232,204,173,0.65)",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pop-in { from{opacity:0;transform:scale(0.7)} to{opacity:1;transform:scale(1)} }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}