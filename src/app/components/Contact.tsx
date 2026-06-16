import { useState } from "react";
import { Send, CheckCircle, Mail, MessageSquare, User, Building2, AlertCircle } from "lucide-react";
import { useInView } from "./useInView";

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  budget: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const serviceOptions = [
  "Desarrollo Web Full-Stack",
  "Optimización de Rendimiento",
  "CSS3 Avanzado & UI",
  "JavaScript Moderno",
  "SEO Técnico",
  "Proyecto completo",
];

const budgetOptions = ["< $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "> $15,000", "Por definir"];

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
  budget: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.length < 2) errors.name = "Nombre requerido (mín. 2 caracteres)";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Email válido requerido";
  if (!data.service) errors.service = "Selecciona un servicio";
  if (!data.message.trim() || data.message.length < 20)
    errors.message = "Cuéntanos más (mín. 20 caracteres)";
  return errors;
}

export function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) {
      const errs = validate(next);
      setErrors((e) => ({ ...e, [field]: errs[field] }));
    }
  };

  const blur = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const errs = validate(form);
    setErrors((e) => ({ ...e, [field]: errs[field] }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
    ) as Partial<Record<keyof FormData, boolean>>;
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const baseInput: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    background: "#261a0a",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: "#E8CCAD",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  const fieldBorder = (field: keyof FormData): string =>
    errors[field] && touched[field]
      ? "1px solid #d4183d"
      : "1px solid rgba(232,204,173,0.1)";

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(to bottom, #120d06, #0f0a05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -200,
          bottom: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(102,188,180,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="contact-grid">
          {/* Left info */}
          <div
            ref={ref}
            style={{
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
              — Contacto
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 4vw, 48px)",
                color: "#E8CCAD",
                margin: "12px 0 16px",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Hablemos de
              <br />
              <span style={{ color: "#66BCB4" }}>tu proyecto</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                color: "rgba(232,204,173,0.6)",
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Cuéntanos qué tienes en mente. Respondemos en menos de 24 horas
              con una propuesta clara y sin compromiso.
            </p>

            {[
              { Icon: Mail, label: "Email", value: "auraweb.oficial@gmail.com" },
              { Icon: MessageSquare, label: "Respuesta", value: "< 24 horas" },
              { Icon: CheckCircle, label: "Primera consulta", value: "100% gratuita" },
            ].map(({ Icon, label, value }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(102,188,180,0.1)",
                    border: "1px solid rgba(102,188,180,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#66BCB4" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "rgba(232,204,173,0.35)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 2,
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#E8CCAD", fontWeight: 500 }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div
            style={{
              background: "#1c1208",
              border: "1px solid rgba(232,204,173,0.08)",
              borderRadius: 20,
              padding: "40px",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  padding: "40px 0",
                  textAlign: "center",
                  animation: "fade-up 0.5s ease",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "rgba(102,188,180,0.12)",
                    border: "2px solid #66BCB4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle size={32} color="#66BCB4" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#E8CCAD",
                    margin: 0,
                  }}
                >
                  ¡Mensaje recibido!
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    color: "rgba(232,204,173,0.6)",
                    maxWidth: 300,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Te contactaremos en menos de 24 horas con una propuesta
                  personalizada para tu proyecto.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                {/* Name + Email row */}
                <div className="form-row" style={{ marginBottom: 16 }}>
                  <div>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "rgba(232,204,173,0.7)",
                        marginBottom: 6,
                      }}
                    >
                      <User size={13} /> Nombre *
                    </label>
                    <input
                      type="text"
                      placeholder="María García"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      onBlur={() => blur("name")}
                      style={{ ...baseInput, border: fieldBorder("name") }}
                    />
                    {errors.name && touched.name && (
                      <ErrorMsg msg={errors.name} />
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "rgba(232,204,173,0.7)",
                        marginBottom: 6,
                      }}
                    >
                      <Mail size={13} /> Email *
                    </label>
                    <input
                      type="email"
                      placeholder="auraweb.oficial@gmail.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      onBlur={() => blur("email")}
                      style={{ ...baseInput, border: fieldBorder("email") }}
                    />
                    {errors.email && touched.email && (
                      <ErrorMsg msg={errors.email} />
                    )}
                  </div>
                </div>

                {/* Company */}
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "rgba(232,204,173,0.7)",
                      marginBottom: 6,
                    }}
                  >
                    <Building2 size={13} /> Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Mi Empresa S.L."
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    style={{ ...baseInput, border: "1px solid rgba(232,204,173,0.1)" }}
                  />
                </div>

                {/* Service */}
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "rgba(232,204,173,0.7)",
                      marginBottom: 6,
                      display: "block",
                    }}
                  >
                    Servicio de interés *
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    onBlur={() => blur("service")}
                    style={{
                      ...baseInput,
                      border: fieldBorder("service"),
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath stroke='%23E8CCAD' stroke-opacity='0.4' stroke-width='1.5' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                      paddingRight: 40,
                    }}
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && touched.service && (
                    <ErrorMsg msg={errors.service} />
                  )}
                </div>

                {/* Budget */}
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "rgba(232,204,173,0.7)",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    Presupuesto estimado
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => update("budget", b)}
                        style={{
                          padding: "7px 14px",
                          borderRadius: 8,
                          background: form.budget === b ? "rgba(236,128,43,0.15)" : "transparent",
                          border: `1px solid ${form.budget === b ? "#EC802B" : "rgba(232,204,173,0.1)"}`,
                          cursor: "pointer",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 12,
                          color: form.budget === b ? "#EC802B" : "rgba(232,204,173,0.5)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 24 }}>
                  <label
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "rgba(232,204,173,0.7)",
                      marginBottom: 6,
                      display: "block",
                    }}
                  >
                    Cuéntanos tu proyecto *
                  </label>
                  <textarea
                    placeholder="Describe brevemente qué necesitas, objetivos, plazos..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    onBlur={() => blur("message")}
                    rows={4}
                    style={{
                      ...baseInput,
                      border: fieldBorder("message"),
                      resize: "vertical",
                      minHeight: 110,
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                    {errors.message && touched.message ? (
                      <ErrorMsg msg={errors.message} />
                    ) : <span />}
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: form.message.length >= 20 ? "#66BCB4" : "rgba(232,204,173,0.3)",
                      }}
                    >
                      {form.message.length}/20
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: 10,
                    background: submitting ? "rgba(236,128,43,0.6)" : "#EC802B",
                    border: "none",
                    cursor: submitting ? "not-allowed" : "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#0f0a05",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) {
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(236,128,43,0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  {submitting ? (
                    <>
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          border: "2px solid rgba(15,10,5,0.3)",
                          borderTopColor: "#0f0a05",
                          animation: "spin 0.7s linear infinite",
                        }}
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fade-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 72px;
          align-items: start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        select option { background: #261a0a; color: #E8CCAD; }
      `}</style>
    </section>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12,
        color: "#d4183d",
        marginTop: 4,
      }}
    >
      <AlertCircle size={12} /> {msg}
    </span>
  );
}
