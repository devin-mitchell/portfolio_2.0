import { useRef } from "react";

import { useFrame, useLoader } from "@react-three/fiber";
import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Animation({ moveUp }) {
  const [colorMap, displacementMap, normalDxMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      "Tiles074_2K-JPG/Tiles074_2K_Color.jpg",
      "Tiles074_2K-JPG/Tiles074_2K_Displacement.jpg",
      "Tiles074_2K-JPG/Tiles074_2K_NormalDX.jpg",
      "Tiles074_2K-JPG/Tiles074_2K_NormalGL.jpg",
      "Tiles074_2K-JPG/Tiles074_2K_Roughness.jpg",
    ]
  );

  const ballRef = useRef();

  useFrame(({ clock }) => {
    ballRef.current.rotation.x = moveUp
      ? -clock.getElapsedTime()
      : clock.getElapsedTime();
    ballRef.current.rotation.y = clock.getElapsedTime() / 8;
  });

  return (
    <mesh ref={ballRef} rotation-x={1}>
      <sphereGeometry args={[3, 100, 100]} />
      <meshStandardMaterial
        displacementScale={0}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalDxMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
}

function Ball({ moveUp, height = "30rem", width = "30rem" }) {
  return (
    <Box h={height} w={width}>
      <Canvas>
        <Animation moveUp={moveUp} />
        <ambientLight intensity={0.05} />
        <directionalLight position={[1, 15, 5]} />
      </Canvas>
    </Box>
  );
}

export default Ball;
