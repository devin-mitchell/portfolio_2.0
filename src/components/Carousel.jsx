import { useState } from "react";

import { HStack, Box, Button, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Project from "./Project";
import CarouselItem from "./CarouselItem";
import { positiveModulo } from "../utils/helpers";

function Carousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = positiveModulo(currentIndex, projects.length);
  const next = positiveModulo(currentIndex + 1, projects.length);
  const previous = positiveModulo(currentIndex - 1, projects.length);

  const handleClick = (direction) => {
    setCurrentIndex((current) =>
      direction === "next" ? (current += 1) : (current -= 1)
    );
  };

  return (
    <>
      <HStack>
        <Button
          w="10rem"
          color="whiteAlpha.900"
          boxShadow={`3px 3px 3px ${projects[previous].color}`}
          bg="blackAlpha.900"
          onClick={() => handleClick("previous")}
          _hover={{
            background: "whiteAlpha.700",
            color: "blackAlpha.900",
            border: "1px solid #000",
          }}
          _active={{
            transform: "scale(0.99)",
            boxShadow: `1px 1px 0px ${projects[previous].color}`,
          }}
        >
          <ChevronLeftIcon fontSize={"5xl"} />
          <Text fontSize={"md"}>PREVIOUS</Text>
        </Button>
        <Button
          w="10rem"
          color="whiteAlpha.900"
          bg="blackAlpha.900"
          boxShadow={`3px 3px 3px ${projects[next].color}`}
          onClick={() => handleClick("next")}
          _hover={{
            background: "whiteAlpha.700",
            color: "blackAlpha.900",
            border: "1px solid #000",
          }}
          _active={{
            transform: "scale(0.99)",
            boxShadow: `1px 1px 0px ${projects[next].color}`,
          }}
        >
          <Text fontSize={"md"}>NEXT</Text>
          <ChevronRightIcon fontSize={"5xl"} />
        </Button>
      </HStack>
      <Box overflowX="hidden" h="90%" w="full" position="relative">
        {projects.map((proj, i) => {
          const isCurrent = i === current;
          const isNext = i === next;
          const isPrevious = i === previous;
          const isNone = i !== current && i !== next && i !== previous;

          return (
            <CarouselItem
              isNext={isNext}
              isPrevious={isPrevious}
              isCurrent={isCurrent}
              isNone={isNone}
              proj={proj}
            >
              <Project title={proj.title} color={proj.color} icon={proj.icon} />
            </CarouselItem>
          );
        })}
      </Box>
    </>
  );
}

export default Carousel;
