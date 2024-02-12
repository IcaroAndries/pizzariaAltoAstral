import { Stack, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import PizzaPepperoni from "/public/PizzaPepperoni.jpg";
import PizzaAbacaxi from "/public/PizzaAbacaxi.jpg";

interface Props {
  description: string;
  image: string;
}
const PizzaCard: React.FC<Props> = function ({ description, image }) {
  return (
    <Box
      w="10em"
      border="0.5em solid"
      borderColor="#C8C8B4"
      borderRadius="10%"
      overflow="hidden"
    >
      <Image
        src={image}
        width={"10em"}
        height="10em"
        alt="Pizza de Pepperoni"
      />
      <Text fontSize={"24px"} color={"black"}>
        {description}
      </Text>
    </Box>
  );
};

export default PizzaCard;
