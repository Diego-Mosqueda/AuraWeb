# 🎨 Guía de Componentes Interactivos - AuraWeb

## Resumen de cambios implementados

Se han implementado 7 características principales para mejorar la interactividad y animaciones del sitio:

---

## 1. **ParticleBackground** - Fondo interactivo de partículas

**Archivo:** `src/app/components/ParticleBackground.tsx`

### Características:
- ✨ **Partículas animadas** que se mueven de forma orgánica
- 🖱️ **Reacción al movimiento del ratón** - Las partículas se atraen hacia el cursor
- 🔗 **Conexiones dinámicas** - Las partículas cercanas se conectan con líneas
- 📱 **Responsive** - Se adapta al tamaño de la ventana
- ⚙️ **Rendimiento optimizado** - Usa Canvas y requestAnimationFrame

### Uso:
```tsx
import { ParticleBackground } from "./components/ParticleBackground";

// En App.tsx, agrégalo al principio:
<ParticleBackground />
```

**Ya está integrado en:** App.tsx ✅

---

## 2. **SocialLinks** - Enlaces de redes sociales con efectos

**Archivo:** `src/app/components/SocialLinks.tsx`

### Características:
- 📱 **4 redes sociales:** Instagram, Facebook, LinkedIn, TikTok
- 🎯 **Colores originales** de cada red social
- ✨ **Hover effect:** Scale (1.1x), glow, cambio de color
- 🔒 **Seguridad:** target="_blank" y rel="noopener noreferrer"
- 🎨 **Diseño flex** con gap-6

### URLs configuradas:
- **Instagram:** https://www.instagram.com/auraweb.oficial?igsh=dDI0MjUyYmsyYXJ6
- **Facebook:** https://www.facebook.com/profile.php?id=61590375915224&locale=es_LA
- **LinkedIn:** https://www.linkedin.com/in/auraweb-undefined-6b1748415/
- **TikTok:** https://www.tiktok.com/@auraweb.oficial

### Uso:
```tsx
import { SocialLinks } from "./components/SocialLinks";

<SocialLinks />
```

**Ya está integrado en:** Footer.tsx ✅

---

## 3. **Carousel3D** - Carrusel con efecto 3D Pop-out

**Archivo:** `src/app/components/Carousel3D.tsx`

### Características:
- 🎯 **Tarjeta central más grande** (scale-110)
- 📐 **Tarjetas laterales opacas** y más pequeñas
- 🎨 **Overflow visible** para que las imágenes sobresalgan
- 🏃 **Transiciones fluidas** con Framer Motion
- ⌨️ **Controles:** Botones prev/next y indicadores
- 🖱️ **Click en tarjetas laterales** para navegar

### Props:
```tsx
interface Carousel3DProps {
  items: CarouselItem[];
  onSelect?: (item: CarouselItem) => void;
}

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  color: string;
  icon?: React.ReactNode;
}
```

### Uso:
```tsx
import { Carousel3D } from "./components/Carousel3D";

const items = [
  {
    id: "1",
    title: "Proyecto 1",
    description: "Descripción del proyecto",
    color: "#EC802B",
    icon: "🚀",
  },
  // ... más items
];

<Carousel3D items={items} onSelect={(item) => console.log(item)} />
```

**Ejemplo completo:** `src/app/components/Carousel3DExample.tsx`

---

## 4. **Header mejorado** - Glassmorphism + cambios dinámicos

**Archivo:** `src/app/components/Header.tsx`

### Cambios implementados:
- 🎨 **Glassmorphism mejorado:**
  - `backdrop-filter: blur(20px)` cuando hay scroll
  - Bordes con gradientes sutiles
  - Box-shadow con inset
  
- 📏 **Diseño dinámico al scroll:**
  - Padding reduce de 24px a 16px
  - Logo se achica de 36px a 32px
  - Altura del header se reduce suavemente
  
- ✨ **Glow effect mejorado en botón:**
  - Box-shadow animado: `0 8px 24px rgba(236,128,43,0.5)`
  - Transición suave con cubic-bezier
  - Borde con semi-transparencia

### Valores dinámicos:
```tsx
const scrollProgress = Math.min(scrollY / 200, 1);
const headerPadding = 24 - scrollProgress * 8;
const logoSize = 36 - scrollProgress * 4;
```

**Ya está integrado en:** Header.tsx ✅

---

## 5. **FadeInUp** - Animación de entrada

**Archivo:** `src/app/components/FadeInUp.tsx`

### Características:
- 📈 **Fade-in up animation** 
- 🎯 **Intersection Observer** para disparar al scroll
- ⏱️ **Controlable:** delay y duration personalizables
- 🎨 **CSS Keyframes** nativos

### Props:
```tsx
interface FadeInUpProps {
  children: ReactNode;
  delay?: number;        // en segundos
  duration?: number;     // en segundos
  threshold?: number;    // de 0 a 1
}
```

### Uso:
```tsx
import { FadeInUp } from "./components/FadeInUp";

<FadeInUp delay={0.2} duration={0.6}>
  <h2>Contenido que aparece con animación</h2>
</FadeInUp>
```

---

## 6. **Staggered Animations** - Animaciones escalonadas

**Archivos mejorados:**
- `src/app/components/Services.tsx`
- `src/app/components/Portfolio.tsx`

### Cambios:
- 🎬 **Framer Motion** para animaciones profesionales
- ⏲️ **Delay de 0.2s** entre cada tarjeta
- 🎨 **Glow effect** de fondo al hover
- 📊 **Animación del icono** (scale) en hover
- ✨ **Tags animados** que aparecen al hover

### Configuración:
```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
  transition={{
    duration: 0.6,
    delay: index * 0.2,  // Staggered delay
    ease: [0.34, 1.56, 0.64, 1],  // Spring easing
  }}
>
```

---

## 7. **Layout Animations** - Animaciones de cambio de tamaño

**Integrado en:** Services.tsx, Portfolio.tsx

### Características:
- 📏 **Motion divs** que cambian de tamaño fluidamente
- 🎨 **Scale animations** sin romper CSS Grid
- ✨ **Background glow** que aparece al hover
- 🔄 **Smooth transitions** entre estados

---

## 🎯 Cómo usar los componentes

### Para agregar Carousel3D a una nueva sección:

1. Importa el componente:
```tsx
import { Carousel3D } from "./components/Carousel3D";
```

2. Prepara los datos:
```tsx
const items = [
  {
    id: "1",
    title: "Proyecto Awesome",
    description: "Descripción increíble",
    color: "#EC802B",
    image: "https://...",
  },
  // ... más items
];
```

3. Renderiza:
```tsx
<Carousel3D items={items} onSelect={(item) => {/* manejar click */}} />
```

### Para personalizar colores y estilos:

Todos los componentes usan **inline styles** con estos colores primarios:
- **Naranja principal:** `#EC802B`
- **Dorado:** `#EDC55B`
- **Turquesa:** `#66BCB4`
- **Crema:** `#E8CCAD`
- **Fondo:** `#0f0a05`

---

## 📦 Dependencias utilizadas

```json
{
  "motion": "12.23.24",           // Framer Motion
  "lucide-react": "0.487.0",      // Iconos
  "react": "^18.x",               // React
  "typescript": "^5.x"            // TypeScript
}
```

**Todas ya están instaladas en el proyecto** ✅

---

## 🚀 Próximos pasos (Opcional)

### Ideas para mejorar:

1. **Agregar la sección Carousel3D:**
   - Descomentar o agregar `<Carousel3DExample />` en App.tsx

2. **Personalizar colores:**
   - Editar los valores RGB en los componentes

3. **Cambiar iconos:**
   - Importar diferentes iconos de lucide-react

4. **Agregar más efectos:**
   - Blur adicional
   - Glitch effects
   - Más partículas

---

## 🐛 Troubleshooting

### Las partículas no se ven:
- Verificar que ParticleBackground esté antes de otros contenidos
- Asegurar que el z-index sea correcto

### Las animaciones se ven lentas:
- Revisar el navegador (usar Chrome/Edge para mejor rendimiento)
- Verificar que Framer Motion esté instalado

### Los efectos hover no funcionan:
- Asegurar que los selectores CSS sean correctos
- Probar en navegadores modernos (Chrome, Firefox, Safari, Edge)

---

## 📝 Notas técnicas

- **Canvas Performance:** Las partículas se renderean en Canvas para mejor rendimiento
- **Intersection Observer:** Se usa para detectar elementos visibles al hacer scroll
- **Framer Motion:** Proporciona animaciones GPU-accelerated suaves
- **Tailwind CSS:** Los componentes pueden adaptarse fácilmente a Tailwind si lo deseas

---

**¡Disfruta de tu sitio web interactivo y animado! 🎨✨**
