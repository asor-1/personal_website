import React, { useEffect, useRef, useMemo } from "react";

const MathVisualization = () => {
  const containerRef = useRef(null);

  const functions = useMemo(() => [
    {
      name: 'enhanced_fractal',
      generate: (width, height) => {
        const points = [];
        const iterations = 4;
        const baseX = width * 0.1;
        const baseY = height * 0.5;
        const endX = width * 0.9;
        
        const addKochCurve = (x1, y1, x2, y2, depth) => {
          if (depth === 0) {
            points.push([x1, y1], [x2, y2]);
            return;
          }
          
          const dx = x2 - x1;
          const dy = y2 - y1;
          
          const p1 = [x1, y1];
          const p2 = [x1 + dx/3, y1 + dy/3];
          const p3 = [
            x1 + dx/2 - dy*Math.sqrt(3)/6,
            y1 + dy/2 + dx*Math.sqrt(3)/6
          ];
          const p4 = [x1 + 2*dx/3, y1 + 2*dy/3];
          const p5 = [x2, y2];
          
          addKochCurve(p1[0], p1[1], p2[0], p2[1], depth-1);
          addKochCurve(p2[0], p2[1], p3[0], p3[1], depth-1);
          addKochCurve(p3[0], p3[1], p4[0], p4[1], depth-1);
          addKochCurve(p4[0], p4[1], p5[0], p5[1], depth-1);
        };
        
        addKochCurve(baseX, baseY, endX, baseY, iterations);
        addKochCurve(baseX, baseY + height * 0.2, endX, baseY + height * 0.2, iterations);
        addKochCurve(baseX, baseY, baseX, baseY + height * 0.2, iterations - 1);
        addKochCurve(endX, baseY, endX, baseY + height * 0.2, iterations - 1);
        
        return points;
      }
    },
    {
      name: 'spiral_pattern',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const maxRadius = Math.min(width, height) * 0.48;
        
        for (let t = 0; t < 25; t += 0.01) {
          const radius = 5 * Math.exp(0.17 * t);
          if (radius > maxRadius) break;
          
          const x = centerX + radius * Math.cos(t);
          const y = centerY + radius * Math.sin(t);
          points.push([x, y]);
        }
        
        for (let t = 0; t < 25; t += 0.01) {
          const radius = 5 * Math.exp(0.17 * t);
          if (radius > maxRadius) break;
          
          const x = centerX + radius * Math.cos(t + Math.PI);
          const y = centerY + radius * Math.sin(t + Math.PI);
          points.push([x, y]);
        }
        
        return points;
      }
    },
    {
      name: 'lissajous_curve',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.48;
        
        const a = 3;
        const b = 4;
        const delta = Math.PI / 2;
        
        for (let t = 0; t < 2 * Math.PI; t += 0.01) {
          const x = centerX + scale * Math.sin(a * t + delta);
          const y = centerY + scale * Math.sin(b * t);
          points.push([x, y]);
        }
        
        return points;
      }
    },
    {
      name: 'enhanced_polar_rose',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.48;
        
        for (let k = 6; k <= 12; k += 2) {
          for (let t = 0; t < Math.PI * 8; t += 0.02) {
            const r = Math.cos(k * t) * scale * (0.7 + 0.3 * Math.sin(t * 3));
            const x = centerX + r * Math.cos(t);
            const y = centerY + r * Math.sin(t);
            if (isFinite(x) && isFinite(y)) {
              points.push([x, y]);
            }
          }
        }
        
        return points;
      }
    },
    {
      name: 'butterfly_curve',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.48;
        
        for (let t = 0; t < Math.PI * 24; t += 0.01) {
          const r = Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t) + Math.pow(Math.sin(t / 12), 5);
          const x = centerX + scale * r * Math.sin(t);
          const y = centerY + scale * r * Math.cos(t);
          if (isFinite(x) && isFinite(y)) {
            points.push([x, y]);
          }
        }
        
        return points;
      }
    },
    {
      name: 'phyllotaxis',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.48;
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
        
        for (let i = 1; i < 1000; i++) {
          const distance = scale * Math.sqrt(i) / Math.sqrt(1000);
          const angle = i * goldenAngle;
          
          const x = centerX + distance * Math.cos(angle);
          const y = centerY + distance * Math.sin(angle);
          points.push([x, y]);
        }
        
        return points;
      }
    },
    {
      name: 'harmonograph',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.48;
        
        const f1 = 2, f2 = 3, f3 = 3, f4 = 2;
        const p1 = 0, p2 = Math.PI/4, p3 = 0, p4 = Math.PI/4;
        const d1 = 0.002, d2 = 0.002, d3 = 0.002, d4 = 0.002;
        
        for (let t = 0; t < 100; t += 0.01) {
          const x = centerX + scale * (
            Math.sin(f1 * t + p1) * Math.exp(-d1 * t) +
            Math.sin(f2 * t + p2) * Math.exp(-d2 * t)
          ) / 2;
          
          const y = centerY + scale * (
            Math.sin(f3 * t + p3) * Math.exp(-d3 * t) +
            Math.sin(f4 * t + p4) * Math.exp(-d4 * t)
          ) / 2;
          
          points.push([x, y]);
        }
        
        return points;
      }
    },
    {
      name: 'maurer_rose',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.48;
        
        const n = 6;
        const d = 71;
        const numPoints = 361;
        
        for (let i = 0; i < numPoints; i++) {
          const k = i * d;
          const theta = k * Math.PI / 180;
          const r = scale * Math.sin(n * theta);
          
          const x = centerX + r * Math.cos(theta);
          const y = centerY + r * Math.sin(theta);
          
          points.push([x, y]);
        }
        
        return points;
      }
    },
    {
      name: 'hypotrochoid',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.48;
        
        const R = 5, r = 3, d = 5;
        
        for (let t = 0; t < Math.PI * 20; t += 0.01) {
          const x = centerX + scale * ((R - r) * Math.cos(t) + d * Math.cos((R - r) * t / r));
          const y = centerY + scale * ((R - r) * Math.sin(t) - d * Math.sin((R - r) * t / r));
          
          if (isFinite(x) && isFinite(y)) {
            points.push([x, y]);
          }
        }
        
        return points;
      }
    }
  ], []);

  useEffect(() => {
    const createElements = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      container.innerHTML = "";

      // Select one random function
      const selectedFunction = functions[Math.floor(Math.random() * functions.length)];
      const points = selectedFunction.generate(containerWidth, containerHeight);
      
      const line = document.createElement("div");
      line.className = "wavy-line";

      let pathData = `M${points[0][0]} ${points[0][1]}`;
      for (let i = 1; i < points.length; i++) {
        pathData += ` L${points[i][0]} ${points[i][1]}`;
      }

      line.innerHTML = `<svg class="line-svg" viewBox="0 0 ${containerWidth} ${containerHeight}">
        <path d="${pathData}" stroke="rgba(0, 75, 128, 0.4)" stroke-width="1.5" fill="transparent" />
      </svg>`;

      container.appendChild(line);
    };

    createElements();
    window.addEventListener("resize", createElements);
    
    return () => {
      window.removeEventListener("resize", createElements);
    };
  }, [functions]);

  return (
    <>
      <style>
        {`
          .hexagon-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: -1;
            pointer-events: none;
          }

          .wavy-line {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -3;
          }

          .line-svg {
            width: 100%;
            height: 100%;
          }
        `}
      </style>

      <div className="hexagon-container" ref={containerRef}></div>
    </>
  );
};

export default MathVisualization;