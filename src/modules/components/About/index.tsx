import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

import chefImage from "/public/chef.png";

const About: React.FC = function ({}) {
  return (
    <Stack
      position="relative"
      justify="center"
      align="center"
      px="10em"
      py="3em"
      spacing="0px"
    >
      <Stack py="1.7em" zIndex="2" mb="5em" align="center" spacing="1.5em">
        <Text fontSize="6em" fontFamily="cursive" textColor="#a11313">
          About us
        </Text>
        <Text fontSize="3em" fontFamily="cursive">
          Slice by Slice: Where Pizza Dreams Come True
        </Text>
      </Stack>

      <HStack w="100%" zIndex="2" justify="space-between">
        <Box w="60%" />

        <Stack w="40%">
          <Stack fontSize="1em">
            <Text>
              <strong>History of Pizzerias:</strong> The roots of pizzerias
              trace back to Naples, Italy, where the very first pizzeria,
              Pizzeria Brandi, was established by Raffaele Esposito in 1830.
              Legend has it that Esposito created the iconic Margherita pizza in
              1889, adorned with the colors of the Italian flag: red tomatoes,
              white mozzarella, and green basil, in honor of Queen Margherita of
              Savoy. This classic combination remains a beloved favorite
              worldwide. Over time, pizza transcended borders, captivating the
              hearts (and taste buds) of people far beyond Italy. In the United
              States, Gennaro Lombardi introduced pizza sales in 1905, setting
              the stage for its global popularity.
            </Text>
            <Text>
              <strong>Quality in Pizzerias:</strong> Quality is the cornerstone
              of any exceptional pizzeria. It begins with the raw materials. A
              perfect pizza starts with meticulously crafted dough, using the
              finest flours tailored to each specific pizza type. But it doesn’t
              end there. The toppings play a crucial role. Too often, we
              encounter pizzas with impeccable crusts undermined by lackluster
              toppings—drippy vegetables, subpar mushrooms, and flavorless
              sauces. Enter the gourmet pizza trend: pizza chefs elevate the art
              by combining expertly made dough with high-quality ingredients.
              Think melty mozzarella, sharp Parmesan, subtle gorgonzola, and
              fresh, vibrant toppings. The result? Irresistible slices that
              redefine pizza excellence. So, whether it’s a classic Margherita
              or an avant-garde creation, quality remains the secret ingredient
              that keeps customers coming back for more.
            </Text>
          </Stack>
        </Stack>
      </HStack>

      <Image
        src={chefImage.src}
        zIndex="1"
        position="absolute"
        alt="chef"
        left="0px"
        bottom="0"
      />

      <Box
        h="200px"
        w="200px"
        borderRadius="50%"
        position="absolute"
        top="5%"
        right="40%"
        bgColor="#C8C8B4"
      />

      <Box
        h="250px"
        w="450px"
        borderRadius="0px 15px 15px 0px"
        position="absolute"
        top="20%"
        left="0px"
        bgColor="#7E2553"
      />

      <Box
        h="250px"
        w="450px"
        position="absolute"
        borderRadius="15px 0px 0px 15px"
        top="50%"
        right="0"
        bgColor="#7E2553"
      />

      <Box
        h="150px"
        w="150px"
        borderRadius="50%"
        position="absolute"
        top="20px"
        right="40%"
        bgColor="#C8C8B4"
      />
    </Stack>
  );
};

export default About;
