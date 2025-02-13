import React, { useEffect, useRef, useMemo } from "react";

const MathVisualization = () => {
  const containerRef = useRef(null);

  const scientificSymbols = useMemo(() => [
    'O(n)', 'O(log n)', 'O(n²)', 'O(1)', 'Ω(n)', 'Θ(n)', 
    'Eulerian Circuit', 'factorial(n) = n * factorial(n-1)', 'SHA-256', 'MD5', 
    '∑', 'π', '∫', 'Δ', '∞', 'λ', 'β', 'μ', '∏', '∂', 'θ', 'Ω', 
    'e^x', 'dx/dt', '∇', 'φ', 'ψ', '⊕', '⊗', '∀', '∃', '∈', '∉', 
    '⊆', '⊇', '∩', 'F=ma', 'E=mc²', 'PV=nRT', 'Σf=0'
  ], []);

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
      name: 'tan(x*y)',
      generate: (width, height) => {
        const points = [];
        const t = Math.random() * Math.PI; // Random phase
        for (let x = 0; x < width; x += 10) {
          const y = height/2 + Math.tan(x/100 + t) * 50;
          if (Math.abs(y - height/2) < height/3) {
            points.push([x, y]);
          }
        }
        return points;
      }
    },
    {
      name: 'sin(r²)',
      generate: (width, height) => {
        const points = [];
        const centerX = width/2;
        const centerY = height/2;
        const radius = Math.min(width, height) * 0.4;
        const phase = Math.random() * Math.PI * 2; // Random phase
        
        for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
          const r = radius * (1 + Math.sin(angle * 3 + phase) * 0.2);
          const x = centerX + Math.cos(angle) * r;
          const y = centerY + Math.sin(angle) * r;
          points.push([x, y]);
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

      const numFunctions = 3;
      const linesPerFunction = 8;
      const numSymbols = window.innerWidth < 768 ? 20 : 30;
      const placedSymbols = [];

      // Create functions
      for (let f = 0; f < numFunctions; f++) {
        const selectedFunction = functions[Math.floor(Math.random() * functions.length)];
        const lineColor = f % 2 === 0 ? "rgba(0, 75, 128, 0.4)" : "rgba(0, 128, 0, 0.4)";

        for (let i = 0; i < linesPerFunction; i++) {
          const points = selectedFunction.generate(containerWidth, containerHeight);
          
          const line = document.createElement("div");
          line.className = "wavy-line";

          let pathData = `M${points[0][0]} ${points[0][1]}`;
          for (let j = 1; j < points.length; j++) {
            pathData += ` L${points[j][0]} ${points[j][1]}`;
          }

          line.innerHTML = `<svg class="line-svg" viewBox="0 0 ${containerWidth} ${containerHeight}">
            <path d="${pathData}" stroke="${lineColor}" stroke-width="0.8" fill="transparent" />
          </svg>`;

          container.appendChild(line);
        }
      }

      // Add floating symbols
      for (let i = 0; i < numSymbols; i++) {
        let symbol, x, y, overlap;
        do {
          const isLeftEdge = Math.random() < 0.5;
          if (isLeftEdge) {
            x = Math.random() * (containerWidth * 0.2);
          } else {
            x = containerWidth * 0.80 + Math.random() * (containerWidth * 0.2);
          }
          y = Math.random() * (containerHeight - 50);
          overlap = placedSymbols.some(([px, py]) => Math.hypot(px - x, py - y) < 50);
        } while (overlap);

        symbol = document.createElement("div");
        symbol.className = "scientific-symbol";
        symbol.innerHTML = scientificSymbols[Math.floor(Math.random() * scientificSymbols.length)];
        symbol.style.left = `${x}px`;
        symbol.style.top = `${y}px`;
        
        // Add random animation delay for each symbol
        symbol.style.animationDelay = `${Math.random() * 2}s`;

        placedSymbols.push([x, y]);
        container.appendChild(symbol);
      }
    };

    createElements();
    window.addEventListener("resize", createElements);
    
    return () => {
      window.removeEventListener("resize", createElements);
    };
  }, [functions, scientificSymbols]);

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

          .scientific-symbol {
            position: absolute;
            font-family: "Arial Unicode MS", "Times New Roman", serif;
            font-size: 24px;
            color: black;
            pointer-events: none;
            white-space: nowrap;
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

      <div className="hexagon-container" ref={containerRef}></div>
    </>
  );
};

export default MathVisualization;