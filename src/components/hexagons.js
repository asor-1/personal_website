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

  const generateEquation = () => {
    const equations = [
      '<svg viewBox="0 0 100 40"><text x="10" y="30" font-family="math, serif" font-size="20px">∫e^x dx</text></svg>',
      '<svg viewBox="0 0 100 40"><text x="10" y="30" font-family="math, serif" font-size="20px">Σx²</text></svg>',
      '<svg viewBox="0 0 100 40"><text x="10" y="30" font-family="math, serif" font-size="20px">∇×F</text></svg>',
      '<svg viewBox="0 0 150 60"><text x="10" y="50" font-family="math, serif" font-size="20px">O(n²)</text></svg>',
      '<svg viewBox="0 0 150 60"><text x="10" y="50" font-family="math, serif" font-size="20px">SHA-256</text></svg>',
      '<svg viewBox="0 0 150 60"><text x="10" y="50" font-family="math, serif" font-size="20px">Eulerian Circuit</text></svg>'
    ];
    return equations[Math.floor(Math.random() * equations.length)];
  };

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

      // Generate grouped curvy lines
      for (let g = 0; g < numLineGroups; g++) {
        let startX, startY, endX, endY;

        // Define random start and end positions on the edges
        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) { // Top edge
          startX = Math.random() * containerWidth;
          startY = 0;
        } else if (edge === 1) { // Bottom edge
          startX = Math.random() * containerWidth;
          startY = containerHeight;
        } else if (edge === 2) { // Left edge
          startX = 0;
          startY = Math.random() * containerHeight;
        } else { // Right edge
          startX = containerWidth;
          startY = Math.random() * containerHeight;
        }

        // Define end point on another edge
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

        // Generate multiple curvy lines per group
        for (let i = 0; i < linesPerGroup; i++) {
          const line = document.createElement("div");
          line.className = "wavy-line";

          const variation = (Math.random() - 0.5) * 200; // Bigger variation for curvier effect
          const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 300; // Add randomness to curve midpoint
          const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 300;

          const pathData = `M${startX} ${startY} 
                            C${startX + variation} ${startY + variation}, 
                            ${midX} ${midY}, 
                            ${endX - variation} ${endY - variation}, 
                            ${endX} ${endY}`;

          line.innerHTML = `<svg class="line-svg" viewBox="0 0 ${containerWidth} ${containerHeight}">
            <path d="${pathData}" stroke="rgba(0, 100, 255, 0.4)" stroke-width="0.8" fill="transparent" />
          </svg>`;

          container.appendChild(line);
        }
      }

      // Place scientific symbols only in 0-15% and 85-100% range
      for (let i = 0; i < numSymbols; i++) {
        const symbol = document.createElement("div");
        symbol.className = "scientific-symbol";
        symbol.innerHTML = Math.random() > 0.7 ? generateEquation() : scientificSymbols[Math.floor(Math.random() * scientificSymbols.length)];

        let x, y;
        x = Math.random() < 0.5 ? Math.random() * 15 : 85 + Math.random() * 15; // Keep symbols on the edges
        y = Math.random() * 100;

        symbol.style.left = `${x}%`;
        symbol.style.top = `${y}%`;

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

          .scientific-symbol svg {
            width: 100px;
            height: 40px;
            fill: black;
          }
        `}
      </style>

      <div className="hexagon-container" ref={containerRef}></div>
    </>
  );
};

export default Hexagon;
