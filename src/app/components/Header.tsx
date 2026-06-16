import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#process" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Calculate dynamic values based on scroll
  const scrolled = scrollY > 40;
  const scrollProgress = Math.min(scrollY / 200, 1);
  const headerPadding = 24 - scrollProgress * 8;
  const logoSize = 36 - scrollProgress * 4;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease, padding 0.4s ease",
          background: scrolled
            ? "rgba(15, 10, 5, 0.85)"
            : "rgba(15, 10, 5, 0.3)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
          borderBottom: scrolled 
            ? "1px solid rgba(236,128,43,0.15)" 
            : "1px solid rgba(232,204,173,0.05)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(236,128,43,0.1)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: `${headerPadding}px 24px`,
            height: "auto",
            minHeight: 72 - scrollProgress * 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div
              style={{
                width: logoSize,
                height: logoSize,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, #EC802B, #EDC55B, #66BCB4, #EC802B)",
                padding: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#0a0603",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: logoSize * 0.35,
                    height: logoSize * 0.35,
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 35% 35%, #EDC55B, #EC802B)",
                    boxShadow: "0 0 8px rgba(236,128,43,0.8)",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 18 - scrollProgress * 2,
                color: "#E8CCAD",
                letterSpacing: "-0.02em",
                transition: "all 0.3s ease",
              }}
            >
              AuraWeb<span style={{ color: "#EC802B" }}>.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 4 }} className="hidden-mobile">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 14px",
                    borderRadius: 8,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: 14,
                    color: isActive ? "#EC802B" : "#E8CCAD",
                    opacity: isActive ? 1 : 0.75,
                    transition: "all 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                      (e.currentTarget as HTMLButtonElement).style.color = "#E8CCAD";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.75";
                      (e.currentTarget as HTMLButtonElement).style.color = "#E8CCAD";
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#EC802B",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => scrollTo("#contact")}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                background: "#EC802B",
                border: "1px solid rgba(236,128,43,0.5)",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#0f0a05",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 0 0 rgba(236,128,43,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(236,128,43,0.5), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 rgba(236,128,43,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
              className="hidden-mobile"
            >
              Hablemos
            </button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#E8CCAD",
                padding: 8,
                display: "none",
              }}
              className="show-mobile"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: "fixed",
          top: 72,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 49,
          background: "rgba(15,10,5,0.97)",
          backdropFilter: "blur(20px)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: "#E8CCAD",
              padding: "12px 32px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#EC802B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#E8CCAD";
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("#contact")}
          style={{
            marginTop: 24,
            padding: "14px 40px",
            borderRadius: 10,
            background: "#EC802B",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "#0f0a05",
          }}
        >
          Hablemos
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
