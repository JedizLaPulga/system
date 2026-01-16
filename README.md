# systema

systema is an interactive educational app that visualizes the layers of computing — from transistors up to cloud systems — as interactive, animated modules. The desktop binary (Windows .exe) launches a local web app that opens in the default browser.

Key goals
- Accurate, authoritative content for each layer.
- Rich, modern UI with color-driven animations to make concepts intuitive.
- Each layer is a folder: content + interactive visuals + metadata.

Quick start (development)
- Backend (Deno):
  - Run server: `deno run --allow-net --allow-read --allow-run --allow-env mod.ts`
  - Build exe: `deno compile --allow-net --allow-read --allow-run --allow-env --output systema.exe mod.ts`
- Frontend (React):
  - cd frontend && npm install
  - Dev: `npm run dev`
  - Build: `npm run build` (output -> `frontend/dist` served by backend)

Project layout (high level)
- backend / mod.ts (Deno server)
- frontend / (Vite + React app)
- content/layers/
  - transistor/
    - content.md
    - assets/
    - meta.json
  - gate/
  - alu/
  - cpu/
  - os/
  - runtime/
  - cloud/

Color animations — explanation and examples
- Use color to map abstraction: deep reds → physical (transistors), blues → logic/gates, greens → software, purples → distributed/cloud.
- Smooth gradient transitions show flow of signals; pulsing indicates active states; hue shifts indicate abstraction boundaries.

CSS gradient animation (add to frontend global CSS)
```css
/* filepath: c:\Users\HP\OneDrive\Documents\GitHub\system\frontend\src\styles\animations.css */
/* ...existing code... */
:root {
  --g1: #ff416c;
  --g2: #ff4b2b;
  --g3: #00d2ff;
  --g4: #7b2ff7;
}

.animated-gradient {
  background: linear-gradient(135deg, var(--g1), var(--g3), var(--g4));
  background-size: 300% 300%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Layer card pulse to indicate activity */
.layer-card {
  border-radius: 12px;
  padding: 1rem;
  color: white;
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  transition: transform 200ms ease;
}
.layer-card.active {
  animation: pulse 1.6s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); filter: drop-shadow(0 6px 18px rgba(0,0,0,0.18)); }
  50% { transform: scale(1.02); filter: drop-shadow(0 12px 28px rgba(0,0,0,0.28)); }
  100% { transform: scale(1); }
}
```

React snippet — animated layer card
```tsx
// filepath: c:\Users\HP\OneDrive\Documents\GitHub\system\frontend\src\components\LayerCard.tsx
// ...existing code...
import React from "react";
import "./styles/animations.css";

export function LayerCard({ title, active }: { title: string; active?: boolean }) {
  return (
    <div className={`layer-card animated-gradient ${active ? "active" : ""}`}>
      <h3>{title}</h3>
      <p>Tap to explore interactive animations and canonical explanations.</p>
    </div>
  );
}
```

Design notes
- Use Three.js or SVG + D3 for visuals; Framer Motion for UI micro-animations.
- Maintain an authoritative content source per layer (markdown + metadata).
- Accessibility: ensure color animations respect prefers-reduced-motion and sufficient contrast.

Next steps
- I can scaffold the frontend React app (Vite + Tailwind + Framer Motion) and the Deno mod.ts server, and create the first layer folder (transistor) with starter content and animation demos. Which scaffolding do you want first?
