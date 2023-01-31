import { useEffect } from "react";

import { Box, HStack, Text, VStack, Flex, Link, Icon } from "@chakra-ui/react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";

import Ball from "./Ball";
import anime from "animejs";

function About() {
  const target = document.getElementsByClassName("ball-about");

  useEffect(() => {
    anime({
      targets: target,
      translateY: 4000,
      translateX: [{ value: 10 }, { value: 0 }, { value: -50 }],
      duration: 20000,
      loop: true,
      easing: "linear",
    });
  });

  return (
    <VStack
      alignItems="flex-start"
      px="20rem"
      overflow="hidden"
      spacing={"4rem"}
      w="full"
      bg="papayawhip"
      py={"5rem"}
      position="relative"
    >
      <VStack w="full" alignItems="flex-start">
        <Text
          zIndex={100}
          textShadow={`3px 3px 0 #34FF15`}
          fontSize="7xl"
          fontFamily="Anton"
          color="blackAlpha.900"
        >
          ABOUT
        </Text>
        <Text
          bg="blackAlpha.200"
          borderRadius={"2rem"}
          py={"2rem"}
          fontSize="xl"
          px={"5rem"}
          w="full"
        >
          I am a software engineer with most of my experience being in React,
          Typescript, and GraphQL. My passion for building UI's that, not only
          look good, but are easy to use, drives me to continuously improve my
          skills and stay up to date with industry trends. I am a strong problem
          solver and a team player, and I am committed to delivering
          high-quality, scalable and maintainable solutions.
        </Text>
      </VStack>

      <VStack w="full" alignItems="flex-start">
        <Text
          zIndex={100}
          textShadow={`3px 3px 0 #06FDFD`}
          fontSize="7xl"
          fontFamily="Anton"
          color="blackAlpha.900"
        >
          SKILLS
        </Text>
        <Flex
          bg="blackAlpha.200"
          borderRadius={"2rem"}
          py={"2rem"}
          fontSize="xl"
          px={"5rem"}
          w="full"
        >
          <VStack w="25%" h="100%">
            <Text>Typescript</Text>
            <Text>React.js</Text>
            <Text>React Native</Text>
          </VStack>
          <VStack w="25%" h="100%">
            <Text>Next.js</Text>
            <Text>GraphQL</Text>
            <Text>Elixir</Text>
          </VStack>
          <VStack w="25%" h="100%">
            <Text>Phoenix</Text>
            <Text>Python</Text>
            <Text>SQL</Text>
          </VStack>
          <VStack w="25%" h="100%">
            <Text>PostgreSQL</Text>
            <Text>Git</Text>
            <Text>VIM</Text>
          </VStack>
        </Flex>
      </VStack>
      <VStack w="full" alignItems="flex-start">
        <Text
          zIndex={100}
          textShadow={`3px 3px 0 #FF69B4`}
          fontSize="7xl"
          fontFamily="Anton"
          color="blackAlpha.900"
        >
          EDUCATION
        </Text>
        <VStack
          bg="blackAlpha.200"
          borderRadius={"2rem"}
          alignItems="flex-start"
          py={"2rem"}
          fontSize="xl"
          px={"5rem"}
          w="full"
        >
          <Text>
            Bloomtech/Lambda School, Full Stack Web Development August 2021
          </Text>
          <Text>Snow College, Bachelor of Music April 2017</Text>
        </VStack>
      </VStack>
      <VStack w="full" alignItems="flex-start">
        <Text
          zIndex={100}
          textShadow={`3px 3px 0 #FF0`}
          fontSize="7xl"
          fontFamily="Anton"
          color="blackAlpha.900"
        >
          CONTACT
        </Text>
        <HStack
          bg="blackAlpha.200"
          borderRadius={"2rem"}
          py={"2rem"}
          fontSize="xl"
          px={"5rem"}
          w="full"
          spacing={"3rem"}
          justifyContent="center"
        >
          <Link
            isExternal
            href="https://www.linkedin.com/in/devin-mitchell100/"
          >
            <Icon fontSize={"3rem"} as={GrLinkedin} />
          </Link>
          <Link isExternal href="https://github.com/devin-mitchell">
            <Icon fontSize={"3rem"} as={GrGithub} />
          </Link>
          <Link isExternal href="mailto:devin.a.mitchell@gmail.com">
            <Icon fontSize={"3rem"} as={GrMail} />
          </Link>
        </HStack>
      </VStack>
      <Box className="ball-about" position="absolute" top={-1000} left={0}>
        <Ball height="15rem" width="15rem" />
      </Box>
    </VStack>
  );
}

export default About;
