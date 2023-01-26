import { Box } from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Animation({ color }) {
  const knotRef = useRef();

  useFrame(({ clock }) => {
    knotRef.current.rotation.x = clock.getElapsedTime();
    knotRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <mesh ref={knotRef} rotation-x={1}>
      <torusKnotGeometry args={[1.75, 0.5, 300, 20, 1, 2]} />
      <meshPhongMaterial
        color={color}
        specular="#39FF14"
        shininess={500}
        reflectivity={1}
      />
    </mesh>
  );
}

function Knot({ color, width = "10rem", height = "10rem" }) {
  return (
    <Box className="container" w={width} h={height}>
      <Canvas id="knot-canvas">
        <Animation color={color} />
        <ambientLight intensity={0.05} />
        <directionalLight position={[1, 15, 5]} />
      </Canvas>
    </Box>
  );
}

export default Knot;
