import { Box, HStack, VStack } from "@chakra-ui/react";

import Carousel from "./Carousel";
import Knot from "./Knot";
import GitHub from "../assets/GitHub";
import Project from "./Project";

const PROJECTS = [
  {
    index: 1,
    title: "proj1",
    component: (
      <Project
        title={"IDENTICON"}
        color="#FF0"
        icon={<GitHub />}
        // icon={<Knot color="#FF0" width="100px" height="100px" />}
      />
    ),
  },
  {
    index: 2,
    title: "proj2",
    component: (
      <Project
        title={"QUERYDESK"}
        color="#fff"
        icon={<GitHub />}
        // icon={<Knot color="#fff" width="100px" height="100px" />}
      />
    ),
  },
  {
    index: 3,
    title: "proj3",
    component: (
      <Project
        title={"RUMBL"}
        color="#6A0DAD"
        icon={<GitHub />}
        // icon={<Knot color="#6A0DAD" width="100px" height="100px" />}
      />
    ),
  },
  {
    index: 4,
    title: "proj4",
    component: (
      <Project
        title={"PLANTS"}
        color="#34FF15"
        icon={<GitHub />}
        // icon={<Knot color="#34FF15" width="100px" height="100px" />}
      />
    ),
  },
  {
    index: 5,
    title: "proj5",
    component: (
      <Project
        title={"HRF"}
        color="#FF69B4"
        icon={<GitHub />}
        // icon={<Knot color="#FF69B4" width="100px" height="100px" />}
      />
    ),
  },
];

function Projects() {
  return (
    <VStack pt="86px" h="100vh" w="full" bg="tomato">
      <Box>PROJECTS</Box>
      <Carousel projects={PROJECTS} />
    </VStack>
  );
}

export default Projects;
