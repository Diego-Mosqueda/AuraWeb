import { Search, Pencil, Hammer, Rocket, BarChart2 } from "lucide-react";
import { useInView } from "./useInView";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Auditoría & Descubrimiento",
    description:
      "Analizamos tu presencia actual, competidores y objetivos de negocio. Lighthouse audit completo, análisis de keywords y revisión UX.",
    duration: "1-2 días",
    color: "#66BCB4",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Desarrollo & Optimización",
    description:
      "Construcción iterativa con revisiones frecuentes. CSS Grid adaptativo, JS modular, imágenes WebP, caching y compresión Brotli.",
    duration: "5-15 días",
    color: "#EC802B",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Lanzamiento",
    description:
      "Cross-browser testing, auditoría de accesibilidad, pruebas de carga y deploy con CI/CD. Puntuación Lighthouse ≥95 o seguimos trabajando.",
    duration: "2-3 días",
    color: "#66BCB4",
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Monitoreo & Crecimiento",
    description:
      "Analytics personalizados, monitoreo de Core Web Vitals, A/B testing y mejoras continuas basadas en comportamiento real de usuarios.",
    duration: "Continuo",
    color: "#EDC55B",
  },
];

type Step = (typeof steps)[0];

function StepItem({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const { ref, inView } = useInView(0.1);
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className="process-step"
      style={{
        display: "grid",
        gridTemplateColumns: "72px 2px 1fr",
        gap: "0 28px",
        alignItems: "start",
        transition: "opacity 0.55s ease, transform 0.55s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Icon */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `${step.color}15`,
            border: `1px solid ${step.color}28`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={22} color={step.color} />
        </div>
      </div>

      {/* Connector line */}
      <div>
        {!isLast && (
          <div
            style={{
              width: 1,
              height: "100%",
              minHeight: 60,
              background: "linear-gradient(to bottom, rgba(232,204,173,0.12), transparent)",
              margin: "52px auto 0",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: step.color,
              letterSpacing: "0.08em",
              opacity: 0.7,
            }}
          >
            {step.number}
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "rgba(232,204,173,0.3)",
              letterSpacing: "0.06em",
            }}
          >
            {step.duration}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#E8CCAD",
            margin: "0 0 8px 0",
            letterSpacing: "-0.01em",
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: "rgba(232,204,173,0.55)",
            lineHeight: 1.7,
            margin: 0,
            maxWidth: 540,
          }}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function Process() {
  const { ref, inView } = useInView();

  return (
    <section
      id="process"
      style={{ padding: "120px 24px", background: "#0f0a05", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          right: -200,
          top: "30%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(237,197,91,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

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
              color: "#EC802B",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Proceso
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
            }}
          >
            Cómo trabajamos
            <span style={{ color: "#EC802B" }}> juntos</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => (
            <StepItem key={step.number} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .process-step { grid-template-columns: 56px 0 1fr !important; gap: 0 14px !important; }
        }
      `}</style>
    </section>
  );
}
