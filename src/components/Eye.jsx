import { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";

function Animation() {
  const eyeRef = useRef();

  useFrame(({ clock }) => {
    eyeRef.current.rotation.x = clock.getElapsedTime();
    eyeRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <mesh ref={eyeRef} rotation-x={1}>
      <sphereGeometry args={[1, 64, 32]} />
      <meshLambertMaterial
        color="#fff"
        specular="#39FF14"
        shininess={500}
        reflectivity={1}
      />
    </mesh>
  );
}

function Eye() {
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

export default Eye;
