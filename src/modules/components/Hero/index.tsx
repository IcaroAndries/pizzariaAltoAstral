import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import dayColors from "~/modules/theme/mainColors/dayColor";
import React from "react";

import pizzaImage from '/public/PizzaRedonda.jpg';

const Hero: React.FC = function ({ }) {
  return (
    <HStack
      width="100%"
      height="35em"
      justify='flex-start'
      spacing='2em'
      px='20em'
    >
      <Box
        border='0.8em solid'
        borderColor='#C8C8B4'
        borderRadius='50%'
        overflow='hidden'
      >
        <Image
          src={pizzaImage.src}
          w="20em"
          alt='logo de pizzaria'
        />
      </Box>

      <Stack>
        <Text fontSize={"128xl"} color={"blue"}>Titulo</Text>
        <Text fontSize={"64xl"} color={"blue"} >Descrição</Text>



      </Stack>
    </HStack>
  )
}

export default Hero