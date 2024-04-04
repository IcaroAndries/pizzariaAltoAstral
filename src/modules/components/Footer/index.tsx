import { Box, Text, HStack, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = function ({}) {
  return (
    <HStack
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
      bgColor="dayRed"
      textColor={'#FFFF'}
      marginTop="auto"
    >
      <Stack>
        <Box p={4} mt="auto" textAlign="center">
          <HStack>
            <Stack>
              <Link href={''}>
                <Text _hover={{ opacity: '50%' }} transition={'0.25s'}>
                  Comunidade
                </Text>{' '}
              </Link>
              <Link href={''}>
                <Text _hover={{ opacity: '50%' }} transition={'0.25s'}>
                  Comunidade
                </Text>{' '}
              </Link>
            </Stack>
            <Stack>
              <Link href={''}>
                <Text _hover={{ opacity: '50%' }} transition={'0.25s'}>
                  Comunidade
                </Text>{' '}
              </Link>
              <Link href={''}>
                <Text _hover={{ opacity: '50%' }} transition={'0.25s'}>
                  Comunidade
                </Text>{' '}
              </Link>
            </Stack>
            <Stack>
              <Link href={''}>
                <Text _hover={{ opacity: '50%' }} transition={'0.25s'}>
                  Comunidade
                </Text>{' '}
              </Link>
              <Link href={''}>
                <Text _hover={{ opacity: '50%' }} transition={'0.25s'}>
                  Comunidade
                </Text>{' '}
              </Link>
            </Stack>
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
