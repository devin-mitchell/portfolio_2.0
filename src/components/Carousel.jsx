import { HStack, Box, Button, Center } from "@chakra-ui/react";
import { useState } from "react";

const positiveModulo = (a, b) => ((a % b) + b) % b;

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
        <Button onClick={() => handleClick("previous")}>PREVIOUS</Button>
        <Button onClick={() => handleClick("next")}>NEXT</Button>
      </HStack>
      <Box overflowX="hidden" h="80%" w="full" spacing={0} position="relative">
        {projects.map((proj, i) => {
          const isCurrent = i === current;
          const isNext = i === next;
          const isPrevious = i === previous;
          const isNone = i !== current && i !== next && i !== previous;

          return (
            <Center
              key={`carousel-${proj.title}`}
              className={
                isCurrent
                  ? "current"
                  : isNext
                  ? "next"
                  : isPrevious
                  ? "previous"
                  : "hidden"
              }
              position="absolute"
              top={0}
              bottom={0}
              left={isCurrent ? 0 : isNext ? "66%" : isPrevious ? 0 : 0}
              right={isCurrent ? 0 : isPrevious ? "66%" : isNext ? 0 : 0}
              transform={
                isCurrent
                  ? "scale(1)"
                  : isPrevious || isNext
                  ? "scale(0.4)"
                  : isNone
                  ? "scale(0.1)"
                  : null
              }
              opacity={isNone ? 0 : 1}
              margin="auto"
              transition="all 1000ms"
              transitionTimingFunction="cubic-bezier(.76,-0.3,.04,1.34)"
              w="40rem"
              h="30rem"
            >
              {proj.component}
            </Center>
          );
        })}
      </Box>
    </>
  );
}

export default Carousel;
