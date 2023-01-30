import { Center, HStack, Link, Text, VStack } from "@chakra-ui/react";
import anime from "animejs";
import { useEffect, useState } from "react";
import Knot from "./Knot";

function Project({
  title,
  isNone,
  color,
  link,
  isCurrent,
  bullets,
  bulletIcon,
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    const target = document.getElementsByClassName("project-icon");

    isCurrent &&
      setTimeout(() => {
        setRender(true);
        anime({
          targets: target,
          opacity: [0, 1],
          duration: 1000,
          easing: "easeInOutQuart",
        });
      }, 1000);

    return () => setRender(false);
  }, [isCurrent]);

  return (
    <Link
      pointerEvents={isNone && "none"}
      isExternal
      h="100%"
      minW="full"
      borderRadius="4rem"
      p={"1rem"}
      bg="blackAlpha.200"
      _hover={{
        textDecoration: "none",
        bg: `${isCurrent ? "blackAlpha.400" : "blackAlpha.900"}`,
      }}
    >
      <VStack justifyContent="space-between" h="100%">
        <Text
          textShadow={`3px 3px 0 ${color}`}
          fontSize="7xl"
          fontFamily="Anton"
          color="blackAlpha.900"
        >
          {title}
        </Text>
        <VStack
          h="100%"
          w="full"
          spacing="1.5rem"
          overflowY={isCurrent ? "scroll" : "hidden"}
        >
          {render &&
            bullets.map((bullet, i) => {
              return (
                <HStack key={`${i}-${bullet.text.substring(0, 10)}`}>
                  <Center className="project-icon">{bulletIcon}</Center>
                  <Text>{bullet.text}</Text>
                </HStack>
              );
            })}
        </VStack>
      </VStack>
    </Link>
  );
}

export default Project;
