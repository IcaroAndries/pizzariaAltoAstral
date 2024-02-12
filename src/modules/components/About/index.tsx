import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const About: React.FC = function ({}) {
  return (
    <HStack>
      <Stack>
        <Text>About</Text>
        <Text>Our Story</Text>
      </Stack>
    </HStack>
  );
};

export default About;
