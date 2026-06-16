import { useState } from "react";
import { Globe, Zap, Layers, Code, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./useInView";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web Full-Stack",
    description:
      "Sitios y aplicaciones web construidas desde cero con HTML5 semántico, arquitectura limpia y código mantenible que escala con tu negocio.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    accent: "#EC802B",
  },
  {
    icon: Zap,
    title: "Optimización de Rendimiento",
    description:
      "Auditorías Core Web Vitals, lazy loading, minificación, caching estratégico y compresión. Sitios con LCP <2.5s y CLS <0.1 garantizados.",
    tags: ["Core Web Vitals", "PageSpeed", "Lighthouse"],
    accent: "#EDC55B",
  },
  {
    icon: Layers,
    title: "CSS3 Avanzado & UI",
    description:
      "Diseño responsivo con Grid y Flexbox, animaciones fluidas con CSS Variables, efectos glassmorphism y sistemas de design tokens robustos.",
    tags: ["CSS Grid", "Animations", "Design Tokens"],
    accent: "#66BCB4",
  },
  {
    icon: Code,
    title: "JavaScript Moderno",
    description:
      "ES2024+, patrones avanzados, async/await, Web APIs nativas, bundling optimizado y arquitecturas modulares sin dependencias innecesarias.",
    tags: ["ES2024+", "Web APIs", "Module Bundling"],
    accent: "#EC802B",
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Accesibilidad",
    description:
      "Diseño que parte del móvil y escala perfectamente. WCAG 2.1 AA, navegación por teclado, lectores de pantalla y contraste óptimo.",
    tags: ["Responsive", "WCAG 2.1", "A11y"],
    accent: "#EDC55B",
  },
  {
    icon: TrendingUp,
    title: "SEO Técnico",
    description:
      "Estructura semántica, schema markup, Open Graph, sitemap dinámico, hreflang y arquitectura de URLs que los motores de búsqueda adoran.",
    tags: ["Schema.org", "Open Graph", "Sitemaps"],
    accent: "#66BCB4",
  },
];

type Service = (typeof services)[0];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{
        padding: "32px",
        borderRadius: 16,
        background: hovered ? `${service.accent}0a` : "rgba(232,204,173,0.02)",
        border: `1px solid ${hovered ? `${service.accent}22` : "rgba(232,204,173,0.08)"}`,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background glow effect */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${service.accent}20 0%, transparent 70%)`,
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <motion.div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `${service.accent}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={hovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={24} color={service.accent} />
        </motion.div>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "#E8CCAD",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            lineHeight: 1.65,
            color: "rgba(232,204,173,0.6)",
            margin: 0,
            flexGrow: 1,
          }}
        >
          {service.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {service.tags.map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              animate={hovered ? { opacity: 1 } : { opacity: 0.6 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "4px 10px",
                borderRadius: 6,
                background: `${service.accent}12`,
                border: `1px solid ${service.accent}25`,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: service.accent,
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" style={{ padding: "120px 24px", background: "#0f0a05" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            marginBottom: 72,
            transition: "opacity 0.6s ease, transform 0.6s ease",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "#66BCB4",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Servicios
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#E8CCAD",
              margin: "12px 0 0",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 700,
            }}
          >
            Todo lo que necesitas para
            <span style={{ color: "#EC802B" }}> dominar la web</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: "rgba(232,204,173,0.6)",
              maxWidth: 560,
              lineHeight: 1.7,
              margin: "16px 0 0",
            }}
          >
            Desde el HTML base hasta la optimización avanzada — cada capa
            del stack, construida con intención y medida con datos.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
