import { Box } from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Animation() {
  const knotRef = useRef();

  useFrame(({ clock }) => {
    knotRef.current.rotation.x = clock.getElapsedTime();
    knotRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <mesh ref={knotRef} rotation-x={1}>
      <torusKnotGeometry args={[1, 0.25, 300, 20, 1, 2]} />
      <meshPhongMaterial
        color="#fff"
        specular="#39FF14"
        shininess={500}
        reflectivity={1}
      />
    </mesh>
  );
}

function Knot() {
  return (
    <Box w="full" h="100%">
      <Canvas>
        <Animation />
        <ambientLight intensity={0.05} />
        <directionalLight position={[1, 15, 5]} />
      </Canvas>
    </Box>
  );
}

export default Knot;
