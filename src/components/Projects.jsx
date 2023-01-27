import { VStack } from "@chakra-ui/react";

import { PROJECTS } from "../utils/projects";
import Carousel from "./Carousel";

function Projects() {
  return (
    <VStack pt="100px" h="100vh" w="full" bg="papayawhip">
      <Carousel projects={PROJECTS} />
    </VStack>
  );
}

export default Projects;
