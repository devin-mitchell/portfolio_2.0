import { Box, Center, Link, Text, VStack } from "@chakra-ui/react";

function Project({ title, icon, color }) {
  return (
    <VStack
      h="100%"
      w="full"
      borderRadius="4rem"
      p={"1rem"}
      background="whiteAlpha.300"
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
      {icon && (
        <Center className="project-icon" w="full" h="100%">
          {icon}
        </Center>
      )}
    </VStack>
  );
}

export default Project;
