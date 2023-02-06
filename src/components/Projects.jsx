import { VStack, Text } from "@chakra-ui/react";

import { PROJECTS } from "../utils/projects";
import Carousel from "./Carousel";

function Projects() {
  return (
    <VStack pt="100px" h="100vh" w="full" bg="papayawhip">
      <Text as="h1" fontFamily="Anton" fontSize="7xl">
        PROJECTS
      </Text>
      <Carousel projects={PROJECTS} />
    </VStack>
  );
}

export default Projects;
