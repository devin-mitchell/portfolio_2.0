import { Center, Link, Text, VStack } from "@chakra-ui/react";
import Knot from "./Knot";

function Project({ title, color, isCurrent }) {
  return (
    <Link
      minH="100%"
      minW="full"
      borderRadius="4rem"
      p={"1rem"}
      bg="blackAlpha.200"
    >
      <VStack>
        <Text
          textShadow={`3px 3px 0 ${color}`}
          fontSize="7xl"
          fontFamily="Anton"
          color="blackAlpha.900"
        >
          {title}
        </Text>

        {isCurrent && (
          <Center className="project-icon" w="full" h="100%">
            <Knot color={color} />
          </Center>
        )}
      </VStack>
    </Link>
  );
}

export default Project;
