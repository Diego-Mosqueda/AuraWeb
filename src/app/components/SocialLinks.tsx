import { Instagram, Facebook, Linkedin, Music } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/auraweb.oficial?igsh=dDI0MjUyYmsyYXJ6",
    icon: Instagram,
    color: "#E4405F",
    hoverColor: "#E4405F",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590375915224&locale=es_LA",
    icon: Facebook,
    color: "#1877F2",
    hoverColor: "#1877F2",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/auraweb-undefined-6b1748415/",
    icon: Linkedin,
    color: "#0A66C2",
    hoverColor: "#0A66C2",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@auraweb.oficial",
    icon: Music,
    color: "#000000",
    hoverColor: "#25F4EE",
  },
];

export function SocialLinks() {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(232,204,173,0.05)",
              border: "1px solid rgba(232,204,173,0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: "#E8CCAD",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1.1)";
              target.style.background = `${social.color}15`;
              target.style.borderColor = `${social.color}40`;
              target.style.color = social.hoverColor;
              target.style.boxShadow = `0 0 12px ${social.color}40`;
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1)";
              target.style.background = "rgba(232,204,173,0.05)";
              target.style.borderColor = "rgba(232,204,173,0.1)";
              target.style.color = "#E8CCAD";
              target.style.boxShadow = "none";
            }}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
