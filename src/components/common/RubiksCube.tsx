import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Rubik's Cube colors
const colors = {
  white: '#FFFFFF',
  yellow: '#FFD500',
  red: '#C41E3A',
  orange: '#FF5800',
  blue: '#0051BA',
  green: '#009E60',
  black: '#000000'
};

interface CubeletProps {
  position: [number, number, number];
  colors: string[];
}

const Cubelet = ({ position, colors: cubeColors }: CubeletProps) => {
  return (
    <group position={position}>
      <RoundedBox args={[0.95, 0.95, 0.95]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.black} />
      </RoundedBox>
      {/* Front face */}
      {cubeColors[0] && (
        <mesh position={[0, 0, 0.48]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial color={cubeColors[0]} />
        </mesh>
      )}
      {/* Back face */}
      {cubeColors[1] && (
        <mesh position={[0, 0, -0.48]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial color={cubeColors[1]} />
        </mesh>
      )}
      {/* Top face */}
      {cubeColors[2] && (
        <mesh position={[0, 0.48, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial color={cubeColors[2]} />
        </mesh>
      )}
      {/* Bottom face */}
      {cubeColors[3] && (
        <mesh position={[0, -0.48, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial color={cubeColors[3]} />
        </mesh>
      )}
      {/* Right face */}
      {cubeColors[4] && (
        <mesh position={[0.48, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial color={cubeColors[4]} />
        </mesh>
      )}
      {/* Left face */}
      {cubeColors[5] && (
        <mesh position={[-0.48, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial color={cubeColors[5]} />
        </mesh>
      )}
    </group>
  );
};

export const RubiksCube = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  // Define cubelets with their colors [front, back, top, bottom, right, left]
  const cubelets: Array<{ pos: [number, number, number]; colors: string[] }> = [];
  
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const cubeColors: string[] = [];
        
        // Front face (z = 1)
        cubeColors[0] = z === 1 ? colors.green : '';
        // Back face (z = -1)
        cubeColors[1] = z === -1 ? colors.blue : '';
        // Top face (y = 1)
        cubeColors[2] = y === 1 ? colors.white : '';
        // Bottom face (y = -1)
        cubeColors[3] = y === -1 ? colors.yellow : '';
        // Right face (x = 1)
        cubeColors[4] = x === 1 ? colors.red : '';
        // Left face (x = -1)
        cubeColors[5] = x === -1 ? colors.orange : '';
        
        cubelets.push({
          pos: [x * 1.02, y * 1.02, z * 1.02],
          colors: cubeColors
        });
      }
    }
  }

  return (
    <group ref={groupRef}>
      {cubelets.map((cubelet, i) => (
        <Cubelet key={i} position={cubelet.pos} colors={cubelet.colors} />
      ))}
    </group>
  );
};
