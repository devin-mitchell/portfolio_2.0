import anime from "animejs";
import { useEffect } from "react";
import Devin from "../assets/Devin";
import Goop from "../assets/Goop";
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
        className="App"
        position="relative"
        justifyContent="center"
        alignItems="center"
        background="blackAlpha.900"
        height={height}
        width={width}
      >
        <Box className="name-container">
          <Devin currentColor="blackAlpha.900" w={width / 2} />
        </Box>
      </VStack>
      <Box position="absolute" top={height - 1}>
        <Goop />
      </Box>
    </>
  );
}

export default Home;
