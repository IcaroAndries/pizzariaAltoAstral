import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

import logo from "/public/logo.jpg";

const Navbard: React.FC = function ({}) {
  return (
    <HStack
      h="6em"
      w="100%"
      px="15em"
      justifyContent="space-between"
      alignItems="center"
      bgColor="dayRed"
    >
      <Image
        src={logo.src}
        alt="logo de pizzaria"
        w={"4em"}
        borderRadius={"50px"}
      />

      <HStack
        fontSize="1.5em"
        fontWeight="600"
        textColor="#FFFFFF"
        spacing="3em"
      >
        <Text>Home</Text>
        <Text>Order your pizza!</Text>
      </HStack>
    </HStack>
  );
};

export default Navbard;
