import { Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import dayColors from "modules/theme/mainColors/dayColor";
import React from "react";

const Hero: React.FC = function ({ }) {
  return (
    <HStack width="100%" justifyContent={"center"} height="35em" px={20}>
      <Image src={'public/logo.png'} alt='logo de pizzaria' />
      <Stack>
        <Text bgColor={dayColors.dayRed}>Titulo</Text>
        <Text bgColor={dayColors.darkRed}>Descrição</Text>

      </Stack>
    </HStack>
  )
}

export default Hero