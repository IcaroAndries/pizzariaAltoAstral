import { Stack, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import PizzaPepperoni from "/public/PizzaPepperoni.jpg";
import PizzaAbacaxi from "/public/PizzaAbacaxi.jpg";
import PizzaCard from "~/modules/components/PizzaCard";
const Order: React.FC = function ({}) {
  return (
    <Stack>
      <PizzaCard
        image={PizzaPepperoni.src}
        description="One of the best tasty Pepperoni and cheese pizza!"
      />
      <Box
        w="10em"
        border="0.5em solid"
        borderColor="#C8C8B4"
        borderRadius="10%"
        overflow="hidden"
      >
        <Image
          src={PizzaPepperoni.src}
          width={"10em"}
          height="10em"
          alt="Pizza de Pepperoni"
        />
        <Text fontSize={"24px"} color={"black"}>
          One of the best tasty Pepperoni and cheese pizza!
        </Text>
      </Box>
      <Stack spacing="0px"></Stack>;
      <Box
        w="10em"
        border="0.5em solid"
        borderColor="#C8C8B4"
        borderRadius="10%"
        overflow="hidden"
      >
        <Image
          src={PizzaAbacaxi.src}
          width={"10em"}
          height="10em"
          alt="Pizza de Abacaxi"
        ></Image>
        <Text fontSize={"24px"} color={"black"}>
          A amazing Pineapple pizza full of yummy!
        </Text>
      </Box>
    </Stack>
  );
};

export default Order;
