import anime from "animejs";
import { useEffect } from "react";
import Devin from "../assets/Devin";
import Goop from "../assets/Goop";
import Projects from "./Projects";
import About from "./About";
import { Box, VStack } from "@chakra-ui/react";
import useWindowSize from "../hooks/useWindowSize";

function Home() {
  const { height, width } = useWindowSize();

  const nameAnimation = () => {
    const targets = document.getElementsByClassName("name-path");
    anime({
      targets: targets,
      stroke: "#39FF14",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      delay: function (el, i) {
        return i * 50;
      },
      duration: 2000,
    });
  };

  useEffect(() => {
    nameAnimation();
  }, []);

  return (
    <>
      <VStack
        spacing={0}
        justifyContent="center"
        alignItems="center"
        position="relative"
        bg="#000"
        height={height}
        width={width}
      >
        <Box className="name-container">
          <Devin currentcolor="blackAlpha.900" w={width / 2} />
        </Box>
        <Box
          w="full"
          overflowX="hidden"
          position="absolute"
          top={height - 1}
          display="flex"
        >
          <Goop />
          <Goop />
        </Box>
      </VStack>
      <Projects />
      <About />
    </>
  );
}

export default Home;
