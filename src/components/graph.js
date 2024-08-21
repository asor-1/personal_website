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
      { id: 'Classical Mechanics', group: 1, color: getRandomColor() },
      { id: 'Quantum Mechanics', group: 1, color: getRandomColor() },
      { id: 'Relativity', group: 1, color: getRandomColor() },
      { id: 'Machine Learning', group: 2, color: getRandomColor() },
      { id: 'Neural Networks', group: 2, color: getRandomColor() },
      { id: 'Deep Learning', group: 2, color: getRandomColor() },
      { id: 'Reinforcement Learning', group: 2, color: getRandomColor() },
      { id: 'Math', group: 3, color: getRandomColor() },
      { id: 'Calculus', group: 3, color: getRandomColor() },
      { id: 'Algebra', group: 3, color: getRandomColor() },
      { id: 'Geometry', group: 3, color: getRandomColor() }
    ],
    links: [
      { source: 'Physics', target: 'Classical Mechanics' },
      { source: 'Physics', target: 'Quantum Mechanics' },
      { source: 'Physics', target: 'Relativity' },
      { source: 'Machine Learning', target: 'Neural Networks' },
      { source: 'Machine Learning', target: 'Deep Learning' },
      { source: 'Machine Learning', target: 'Reinforcement Learning' },
      { source: 'Math', target: 'Calculus' },
      { source: 'Math', target: 'Algebra' },
      { source: 'Math', target: 'Geometry' }
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
      linkWidth={1} // Thicken the links
      linkColor={() => 'white'} // Set link color to white
      nodeThreeObject={node => {
        const group = new THREE.Group();

        // Create sphere geometry for the node
        const sphereRadius = ['Physics', 'Machine Learning', 'Math'].includes(node.id) ? 8 : 4;
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: node.color });
        const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // Create sprite text for larger nodes only
        if (['Physics', 'Machine Learning', 'Math'].includes(node.id)) {
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
      nodeLabel={node => (!['Physics', 'Machine Learning', 'Math'].includes(node.id) ? node.id : '')} // Show label on hover for smaller nodes
    />
  );
};

export default Graph3D;
