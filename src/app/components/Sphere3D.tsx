import { useEffect, useRef } from "react";

const COLORS = ["#EC802B", "#66BCB4", "#EDC55B", "#E8CCAD"];

function pickColor(i: number, total: number): string {
  // Distribute colors in bands across the sphere
  const t = i / total;
  if (t < 0.28) return COLORS[0];
  if (t < 0.55) return COLORS[1];
  if (t < 0.78) return COLORS[2];
  return COLORS[3];
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  color: string;
  baseSize: number;
}

function fibonacciSphere(n: number): Point3D[] {
  const pts: Point3D[] = [];
  const golden = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < n; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / n);
    const phi = (2 * Math.PI * i) / golden;
    pts.push({
      x: Math.sin(theta) * Math.cos(phi),
      y: Math.sin(theta) * Math.sin(phi),
      z: Math.cos(theta),
      color: pickColor(i, n),
      baseSize: 1.8 + Math.random() * 1.4,
    });
  }
  return pts;
}

function rotateY(x: number, y: number, z: number, a: number) {
  return {
    x: x * Math.cos(a) + z * Math.sin(a),
    y,
    z: -x * Math.sin(a) + z * Math.cos(a),
  };
}

function rotateX(x: number, y: number, z: number, a: number) {
  return {
    x,
    y: y * Math.cos(a) - z * Math.sin(a),
    z: y * Math.sin(a) + z * Math.cos(a),
  };
}

function project(
  x: number,
  y: number,
  z: number,
  cx: number,
  cy: number,
  scale: number,
  fov: number
) {
  const f = fov / (fov + z * scale * 0.6);
  return { px: cx + x * scale * f, py: cy + y * scale * f, f };
}

const POINTS = fibonacciSphere(200);
const CONN_DIST = 0.42; // max distance for connections

export function Sphere3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ rotY: 0, rotX: 0.3 });
  const current = useRef({ rotY: 0, rotX: 0.3 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width ?? 500;
      canvas.height = rect?.height ?? 500;
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.current = { x: mx, y: my };
    };
    window.addEventListener("mousemove", onMouseMove);

    let autoRotY = 0;
    let lastTime = 0;

    const draw = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      autoRotY += dt * 0.28;

      // Smooth mouse tilt
      target.current.rotY = autoRotY + mouse.current.x * 0.7;
      target.current.rotX = 0.3 + mouse.current.y * 0.5;
      current.current.rotY += (target.current.rotY - current.current.rotY) * 0.04;
      current.current.rotX += (target.current.rotX - current.current.rotX) * 0.04;

      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const scale = Math.min(W, H) * 0.38;
      const fov = 320;

      ctx.clearRect(0, 0, W, H);

      // Ambient glow behind sphere
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 1.1);
      grad.addColorStop(0, "rgba(236,128,43,0.07)");
      grad.addColorStop(0.4, "rgba(102,188,180,0.05)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Transform + project all points
      const ry = current.current.rotY;
      const rx = current.current.rotX;

      type Proj = {
        px: number;
        py: number;
        pz: number;
        f: number;
        color: string;
        size: number;
        rx3: number; ry3: number; rz3: number;
      };

      const projected: Proj[] = POINTS.map((p) => {
        const r1 = rotateY(p.x, p.y, p.z, ry);
        const r2 = rotateX(r1.x, r1.y, r1.z, rx);
        const { px, py, f } = project(r2.x, r2.y, r2.z, cx, cy, scale, fov);
        const depth = (r2.z + 1) / 2; // 0 = far, 1 = near
        return {
          px, py,
          pz: r2.z,
          f,
          color: p.color,
          size: p.baseSize * (0.45 + depth * 0.85),
          rx3: r2.x, ry3: r2.y, rz3: r2.z,
        };
      });

      // Sort by Z for painter's algorithm
      projected.sort((a, b) => a.pz - b.pz);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        const depthA = (a.pz + 1) / 2;
        if (depthA < 0.05) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.rx3 - b.rx3;
          const dy = a.ry3 - b.ry3;
          const dz = a.rz3 - b.rz3;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist > CONN_DIST) continue;

          const depthB = (b.pz + 1) / 2;
          const avgDepth = (depthA + depthB) / 2;
          const alpha = (1 - dist / CONN_DIST) * avgDepth * 0.38;

          ctx.beginPath();
          ctx.moveTo(a.px, a.py);
          ctx.lineTo(b.px, b.py);
          ctx.strokeStyle = `rgba(232,204,173,${alpha})`;
          ctx.stroke();
        }
      }

      // Draw nodes
      for (const p of projected) {
        const depth = (p.pz + 1) / 2;
        const alpha = 0.25 + depth * 0.75;
        const r = p.size * (0.6 + depth * 0.5);

        // Glow for near nodes
        if (depth > 0.65) {
          ctx.shadowBlur = 12 * depth;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      // Bright accent dots on the very front
      for (const p of projected) {
        const depth = (p.pz + 1) / 2;
        if (depth < 0.88) continue;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
