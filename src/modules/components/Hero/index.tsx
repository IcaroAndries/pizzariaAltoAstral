import { Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Hero: React.FC = function ({ }) {
  return (
    <HStack width="100%" justifyContent={"center"} height="35em" px={20}>
      <Image src={'public/logo.png'} alt='logo de pizzaria' />
      <Stack>
        <Text>Titulo</Text>
        <Text>Descrição</Text>
      </Stack>
    </HStack>
  )
}

export default Hero