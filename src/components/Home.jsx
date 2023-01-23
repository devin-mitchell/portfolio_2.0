import anime from "animejs";
import { useEffect } from "react";
import Devin from "../assets/Devin";
import { Flex, Box } from "@chakra-ui/react";
import useWindowSize from "../hooks/useWindowSize";

function Home() {
  const { height, width } = useWindowSize();

  const nameAnimation = () => {
    anime({
      targets: ["path"],
      stroke: "#39FF14",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuart",
      delay: function (el, i) {
        return i * 250;
      },
      duration: 1000,
    });
  };

  useEffect(() => {
    nameAnimation();
  }, []);

  return (
    <Flex
      className="App"
      position="relative"
      justifyContent="center"
      alignItems="center"
      background="blackAlpha.900"
      height={height}
      width={width}
    >
      <Box className="name-container">
        <Devin w={width / 2} />
      </Box>
    </Flex>
  );
}

export default Home;
