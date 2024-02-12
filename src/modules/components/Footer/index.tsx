import { Box, Text, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = function ({}) {
  return (
    <HStack
      h="100%"
      minH="200px"
      w="100%"
      justifyContent="center"
      alignItems="center"
      bgColor="dayRed"
      alignSelf="flex-end"
    >
      <Stack>
        <Box p={4} mt="auto" bg="gray.200" textAlign="center">
          <HStack>
            <Link href={""}>Comunidade </Link>
            <Link href={""}>Suporte </Link>
            <Link href={""}>Produtos </Link>
          </HStack>
        </Box>
        <Box p={4} mt="auto" bg="gray.200" textAlign="center">
          <Text>&copy; 2024 Pizzaria Bressan </Text>
        </Box>
      </Stack>
    </HStack>
  );
};

export default Footer;
