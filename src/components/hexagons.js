import React, { useEffect, useRef, useMemo } from "react";

const MathVisualization = () => {
  const containerRef = useRef(null);

  const functions = useMemo(() => [
    {
      name: 'sin(x)',
      generate: (width, height) => {
        const points = [];
        for (let x = 0; x < width; x += 5) {
          const y = height/2 + Math.sin(x/50) * 100;
          points.push([x, y]);
        }
        return points;
      }
    },
    {
      name: 'fractal',
      generate: (width, height) => {
        const points = [];
        const iterations = 3;
        const baseX = width * 0.2;
        const baseY = height * 0.5;
        
        const addKochCurve = (x1, y1, x2, y2, depth) => {
          if (depth === 0) {
            points.push([x1, y1], [x2, y2]);
            return;
          }
          
          const dx = x2 - x1;
          const dy = y2 - y1;
          const len = Math.sqrt(dx*dx + dy*dy);
          const unit = len/3;
          
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
        
        addKochCurve(baseX, baseY, baseX + width * 0.6, baseY, iterations);
        return points;
      }
    },
    {
      name: 'polar_rose',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.3;
        
        for (let t = 0; t < Math.PI * 4; t += 0.01) {
          const r = Math.cos(26 * t) * scale;
          const theta = 26 * Math.sin(26 * t);
          const x = centerX + r * Math.cos(theta);
          const y = centerY + r * Math.sin(theta);
          if (isFinite(x) && isFinite(y)) {
            points.push([x, y]);
          }
        }
        return points;
      }
    },
    {
      name: 'transcendental',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const scale = Math.min(width, height) * 0.3;
        
        for (let x = -1; x <= 1; x += 0.01) {
          for (let y = -1; y <= 1; y += 0.01) {
            if (Math.abs(Math.tan(Math.acos(x) + Math.asin(y)) - 1) < 0.1) {
              points.push([
                centerX + x * scale,
                centerY + y * scale
              ]);
            }
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
        <path d="${pathData}" stroke="rgba(0, 75, 128, 0.4)" stroke-width="0.8" fill="transparent" />
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