import React, { useEffect, useRef, useMemo } from "react";

const Hexagon = () => {
  const containerRef = useRef(null);

  const scientificSymbols = useMemo(() => [
    'O(n)', 'O(log n)', 'O(n²)', 'O(1)', 'Ω(n)', 'Θ(n)', 
    'Eulerian Circuit', 'factorial(n) = n * factorial(n-1)', 'SHA-256', 'MD5', 
    '∑', 'π', '∫', 'Δ', '∞', 'λ', 'β', 'μ', '∏', '∂', 'θ', 'Ω', 
    'e^x', 'dx/dt', '∇', 'φ', 'ψ', '⊕', '⊗', '∀', '∃', '∈', '∉', 
    '⊆', '⊇', '∩', 'F=ma', 'E=mc²', 'PV=nRT', 'Σf=0'
  ], []);

  useEffect(() => {
    const createElements = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      container.innerHTML = "";

      const numLineGroups = 10;
      const linesPerGroup = 10;
      const numSymbols = window.innerWidth < 768 ? 20 : 30;
      const placedSymbols = [];

      for (let g = 0; g < numLineGroups; g++) {
        let startX, startY, endX, endY;

        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) {
          startX = Math.random() * containerWidth;
          startY = 0;
        } else if (edge === 1) {
          startX = Math.random() * containerWidth;
          startY = containerHeight;
        } else if (edge === 2) {
          startX = 0;
          startY = Math.random() * containerHeight;
        } else {
          startX = containerWidth;
          startY = Math.random() * containerHeight;
        }

        const endEdge = (edge + Math.floor(Math.random() * 3) + 1) % 4;
        if (endEdge === 0) {
          endX = Math.random() * containerWidth;
          endY = 0;
        } else if (endEdge === 1) {
          endX = Math.random() * containerWidth;
          endY = containerHeight;
        } else if (endEdge === 2) {
          endX = 0;
          endY = Math.random() * containerHeight;
        } else {
          endX = containerWidth;
          endY = Math.random() * containerHeight;
        }

        const lineColor = g % 2 === 0 ? "rgba(0, 75, 128, 0.4)" : "rgba(0, 128, 0, 0.4)";

        for (let i = 0; i < linesPerGroup; i++) {
          const line = document.createElement("div");
          line.className = "wavy-line";

          const variation = (Math.random() - 0.5) * 200;
          const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 300;
          const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 300;

          const pathData = `M${startX} ${startY} 
                            C${startX + variation} ${startY + variation}, 
                            ${midX} ${midY}, 
                            ${endX - variation} ${endY - variation}, 
                            ${endX} ${endY}`;

          line.innerHTML = `<svg class="line-svg" viewBox="0 0 ${containerWidth} ${containerHeight}">
            <path d="${pathData}" stroke="${lineColor}" stroke-width="0.8" fill="transparent" />
          </svg>`;

          container.appendChild(line);
        }
      }

      for (let i = 0; i < numSymbols; i++) {
        let symbol, x, y, overlap;
        do {
          // Randomly choose left edge (0-15%) or right edge (85-100%)
          const isLeftEdge = Math.random() < 0.5;
          if (isLeftEdge) {
            x = Math.random() * (containerWidth * 0.15); // 0-15%
          } else {
            x = containerWidth * 0.85 + Math.random() * (containerWidth * 0.15); // 85-100%
          }
          y = Math.random() * (containerHeight - 50);
          overlap = placedSymbols.some(([px, py]) => Math.hypot(px - x, py - y) < 50);
        } while (overlap);

        symbol = document.createElement("div");
        symbol.className = "scientific-symbol";
        symbol.innerHTML = scientificSymbols[Math.floor(Math.random() * scientificSymbols.length)];
        symbol.style.left = `${x}px`;
        symbol.style.top = `${y}px`;

        placedSymbols.push([x, y]);
        container.appendChild(symbol);
      }
    };

    createElements();
    window.addEventListener("resize", createElements);
    return () => window.removeEventListener("resize", createElements);
  }, [scientificSymbols]);

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
          }
        `}
      </style>

      <div className="hexagon-container" ref={containerRef}></div>
    </>
  );
};

export default Hexagon;