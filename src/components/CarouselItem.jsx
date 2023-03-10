import { Center } from "@chakra-ui/react";

import useWindowSize from "../hooks/useWindowSize";
import { convertRemToPixels } from "../utils/helpers";

function CarouselItem({
  children,
  proj,
  isCurrent,
  isNext,
  isPrevious,
  isNone,
}) {
  const { width } = useWindowSize();
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
      top={isNext || isPrevious ? "20%" : isNone ? "10%" : 0}
      bottom={isNext || isPrevious ? "80%" : isNone ? "90%" : 0}
      left={
        isCurrent
          ? 0
          : isNext
          ? "0"
          : isPrevious
          ? `-${width / 2 + convertRemToPixels(30)}px`
          : 0
      }
      right={
        isCurrent
          ? 0
          : isPrevious
          ? "0"
          : isNext
          ? `-${width / 2 + convertRemToPixels(30)}px`
          : 0
      }
      opacity={isNext || isPrevious ? "0.6" : isNone ? "0" : 1}
      margin="auto"
      transition="all 1000ms"
      transitionTimingFunction="cubic-bezier(.76,-0.3,.04,1.34)"
      w={
        isCurrent
          ? ["80%", "80%", "40rem"]
          : isNext || isPrevious
          ? "8rem"
          : "0rem"
      }
      h={isCurrent ? "30rem" : isNext || isPrevious ? "8rem" : "0rem"}
    >
      {children}
    </Center>
  );
}

export default CarouselItem;
