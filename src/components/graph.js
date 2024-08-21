import React, { useRef, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';

const Graph3D = () => {
  const graphRef = useRef();

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const data = {
    nodes: [
      { id: 'Physics', group: 1, color: getRandomColor() },
      { id: 'Classical Mechanics (Vectors)', group: 1, color: getRandomColor() },
      { id: 'Quantum Computing', group: 1, color: getRandomColor() },
      { id: 'How quantum AI can improve LLMs and biomedical devices', group: 1, color: getRandomColor() },
      { id: 'Relativity', group: 1, color: getRandomColor() },
      { id: 'Machine Learning', group: 2, color: getRandomColor() },
      { id: 'Graph Based RAG', group: 2, color: getRandomColor() },
      { id: 'Graph Communities/Summaries', group: 2, color: getRandomColor() },
      { id: 'Global Answer', group: 2, color: getRandomColor() },
      { id: 'Text Chunks', group: 2, color: getRandomColor() },
      { id: 'Source Documents', group: 2, color: getRandomColor() },
      { id: 'How to improve intent classification', group: 2, color: getRandomColor() },
      { id: 'Unsupervised Learning (UCellSeg)', group: 2, color: getRandomColor() },
      { id: 'Improving tracking trajectory over frames (>50)', group: 2, color: getRandomColor() },
      { id: 'Math', group: 3, color: getRandomColor() },
      { id: 'Calculus', group: 3, color: getRandomColor() },
      { id: 'Linear Algebra', group: 3, color: getRandomColor() },
      { id: 'Random Math', group: 3, color: getRandomColor() },
      { id: 'Philosophy', group: 4, color: getRandomColor() },
      { id: 'Mozi', group: 4, color: getRandomColor() },
      { id: 'Critics on Confucianism', group: 4, color: getRandomColor() },
      { id: 'How to train without labels', group: 4, color: getRandomColor() },
      { id: 'Comp. Biology', group: 5, color: getRandomColor() },
      { id: 'HIV Protease pockets', group: 5, color: getRandomColor() },
      { id: 'MD trajectory files of HIV Protease', group: 5, color: getRandomColor() }
    ],
    links: [
      { source: 'Physics', target: 'Classical Mechanics (Vectors)' },
      { source: 'Physics', target: 'Quantum Computing' },
      { source: 'Quantum Computing', target: 'How quantum AI can improve LLMs and biomedical devices' },
      { source: 'Physics', target: 'Relativity' },
      { source: 'Machine Learning', target: 'Graph Based RAG' },
      { source: 'Machine Learning', target: 'How to improve intent classification' },
      { source: 'Machine Learning', target: 'Unsupervised Learning (UCellSeg)' },
      { source: 'Machine Learning', target: 'Improving tracking trajectory over frames (>50)' },
      { source: 'Math', target: 'Calculus' },
      { source: 'Math', target: 'Linear Algebra' },
      { source: 'Graph Based RAG', target: 'Linear Algebra' },
      { source: 'Graph Based RAG', target: 'Graph Communities/Summaries' },
      { source: 'Graph Based RAG', target: 'Global Answer' },
      { source: 'Graph Based RAG', target: 'Text Chunks' },
      { source: 'Text Chunks', target: 'Source Documents' },
      { source: 'How to train without labels', target: 'Unsupervised Learning (UCellSeg)' },
      { source: 'Math', target: 'Random Math' },
      { source: 'Philosophy', target: 'Mozi' },
      { source: 'Comp. Biology', target: 'HIV Protease pockets' },
      { source: 'Comp. Biology', target: 'MD trajectory files of HIV Protease' }
    ]
  };

  useEffect(() => {
    if (graphRef.current) {
      const camera = graphRef.current.camera();

      // Update the sprite positions to always face the camera
      graphRef.current.scene().children.forEach(obj => {
        if (obj.children) {
          obj.children.forEach(child => {
            if (child instanceof SpriteText) {
              child.lookAt(camera.position);
            }
          });
        }
      });
    }
  });

  return (
    <ForceGraph3D
      ref={graphRef}
      graphData={data}
      backgroundColor="#000033" // Set background color
      linkWidth={0.5} // Thicken the links
      linkColor={() => 'white'} // Set link color to white
      nodeThreeObject={node => {
        const group = new THREE.Group();

        // Create sphere geometry for the node
        const sphereRadius = ['Physics', 'Machine Learning', 'Math', 'Philosophy', 'Comp. Biology'].includes(node.id) ? 8 : 4;
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: node.color });
        const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // Create sprite text for larger nodes only
        if (['Physics', 'Machine Learning', 'Math', 'Philosophy', 'Comp. Biology'].includes(node.id)) {
          const sprite = new SpriteText(node.id);
          sprite.material.depthWrite = false;
          sprite.color = 'white';
          sprite.textHeight = sphereRadius * 0.7;
          sprite.position.set(0, sphereRadius + 2, 0); // Position above the sphere

          group.add(sprite);
        }

        group.add(sphere);
        return group;
      }}
      nodeLabel={node => (!['Physics', 'Machine Learning', 'Math', 'Philosophy'].includes(node.id) ? node.id : '')} // Show label on hover for smaller nodes
    />
  );
};

export default Graph3D;
