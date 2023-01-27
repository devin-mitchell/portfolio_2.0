import { Center, Link, Text, VStack } from "@chakra-ui/react";
import Knot from "./Knot";

function Project({ title, color }) {
  return (
    <VStack
      h="100%"
      w="full"
      borderRadius="4rem"
      p={"1rem"}
      bg="blackAlpha.200"
    >
      <Link src="">
        <Text
          textShadow={`3px 3px 0 ${color}`}
          fontSize="7xl"
          fontFamily="Anton"
          color="blackAlpha.900"
        >
          {title}
        </Text>
      </Link>

      <Center className="project-icon" w="full" h="100%">
        <Knot color={color} />
      </Center>
    </VStack>
  );
}

export default Project;
