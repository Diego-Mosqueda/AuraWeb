import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

const footerLinks = {
  Servicios: [
    "Desarrollo Web",
    "Optimización CSS",
    "JavaScript Avanzado",
    "SEO Técnico",
    "Accesibilidad",
  ],
  Recursos: [
    "Blog Técnico",
    "Checklist HTML5",
    "Guía Performance",
    "Plantillas CSS",
    "Componentes JS",
  ],
  Empresa: ["Sobre nosotros", "Proceso", "Portfolio", "Testimonios", "Contacto"],
};

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "#0a0704",
        borderTop: "1px solid rgba(232,204,173,0.06)",
        padding: "80px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: 48,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(232,204,173,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <button
              onClick={scrollToTop}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #EC802B, #EDC55B, #66BCB4, #EC802B)",
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#0a0703",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "radial-gradient(circle at 35% 35%, #EDC55B, #EC802B)",
                      boxShadow: "0 0 8px rgba(236,128,43,0.7)",
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#E8CCAD",
                  letterSpacing: "-0.02em",
                }}
              >
                AuraWeb<span style={{ color: "#EC802B" }}>.</span>
              </span>
            </button>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(232,204,173,0.45)",
                lineHeight: 1.7,
                maxWidth: 280,
                margin: 0,
              }}
            >
              Desarrollo web de alto rendimiento. HTML5, CSS3 y JavaScript
              moderno para sitios que cargan rápido y convierten mejor.
            </p>
            {/* Socials */}
            <SocialLinks />
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h4
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#E8CCAD",
                  margin: 0,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: "rgba(232,204,173,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#E8CCAD";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,204,173,0.45)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "rgba(232,204,173,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            © 2024 AuraWeb. Construido con{" "}
            <span style={{ color: "#EC802B" }}>HTML5 + CSS3 + JS</span>. Todos
            los derechos reservados.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacidad", "Cookies", "Términos"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "rgba(232,204,173,0.3)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,204,173,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,204,173,0.3)";
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(232,204,173,0.05)",
              border: "1px solid rgba(232,204,173,0.08)",
              borderRadius: 8,
              padding: "8px 14px",
              cursor: "pointer",
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "rgba(232,204,173,0.4)",
              letterSpacing: "0.06em",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(236,128,43,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(236,128,43,0.2)";
              (e.currentTarget as HTMLButtonElement).style.color = "#EC802B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,204,173,0.05)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(232,204,173,0.08)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(232,204,173,0.4)";
            }}
          >
            <ArrowUpRight size={14} /> Inicio
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
