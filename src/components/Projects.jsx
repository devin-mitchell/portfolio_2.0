import { VStack } from "@chakra-ui/react";

import Carousel from "./Carousel";

const PROJECTS = [
  {
    index: 1,
    title: "IDENTICON",
    color: "#FF0",
  },
  {
    index: 2,
    title: "QUERYDESK",
    color: "#fff",
  },
  {
    index: 3,
    title: "RUMBL",
    color: "#6A0DAD",
  },
  {
    index: 4,
    title: "PLANTS",
    color: "#34FF15",
  },
  {
    index: 5,
    title: "HRF",
    color: "#FF69B4",
  },
];

function Projects() {
  return (
    <VStack pt="100px" h="100vh" w="full" bg="papayawhip">
      <Carousel projects={PROJECTS} />
    </VStack>
  );
}

export default Projects;
