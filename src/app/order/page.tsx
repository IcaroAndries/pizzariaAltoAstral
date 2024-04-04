import { Stack, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import PizzaCard from "~/modules/components/PizzaCard";
import { pizzas } from "~/modules/utils/pizzas";

const Order: React.FC = function ({}) {
  return (
    <Stack>
      {pizzas.map((pizza) => {
        return (
          <PizzaCard
            key={pizza.name}
            image={pizza.image}
            description={pizza.description}
            name={pizza.name}
          />
        );
      })}
    </Stack>
  );
};

export default Order;
